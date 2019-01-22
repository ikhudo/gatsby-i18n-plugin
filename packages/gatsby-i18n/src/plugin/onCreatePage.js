import path from 'path';

const onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions;
  const {
    fallbackLng,
    availableLngs,
    siteUrl,
    redirect = true,
    debug,
  } = pluginOptions;

  if (page.path.includes('dev-404')) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    deletePage(page);

    if (redirect) {
      const redirectComponent = path.resolve('./.cache/@gatsby-i18n/redirect.js');
      const redirectPage = {
        ...page,
        component: redirectComponent,
        context: {
          ...page.context,
          availableLngs,
          fallbackLng,
          lng: null,
          routed: false,
          redirectPage: page.path,
          siteUrl,
          debug,
        },
      };

      createPage(redirectPage);
    } else {
      const langAwarePage = {
        ...page,
        context: {
          ...page.context,
          availableLngs,
          fallbackLng,
          lng: fallbackLng,
          routed: true,
          siteUrl,
          debug,
        }
      }

      createPage(langAwarePage);
    }

    // if not redirecting to default/fallback language, then exclude
    // it from the available langauges so we don't generate it twice
    const langs = redirect ? availableLngs : availableLngs.filter(l => l !== fallbackLng);

    langs.forEach(lng => {
      const localePage = {
        ...page,
        path: `/${lng}${page.path}`,
        context: {
          ...page.context,
          availableLngs,
          fallbackLng,
          lng,
          routed: true,
          originalPath: page.path,
          siteUrl,
          debug,
        },
      };

      createPage(localePage);
    });

    resolve();
  });
};

export default onCreatePage;
