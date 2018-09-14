import path from 'path';

const onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions;
  const { fallbackLng, availableLngs, siteUrl } = pluginOptions;

  if (page.path.includes('dev-404')) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    const redirect = path.resolve('./.cache/@igorko/redirect.js');
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        availableLngs,
        fallbackLng,
        lng: null,
        routed: false,
        redirectPage: page.path,
        siteUrl,
      },
    };

    deletePage(page);
    createPage(redirectPage);

    availableLngs.forEach(lng => {
      const localePage = {
        ...page,
        path: `/${lng}${page.path}`,
        context: {
          availableLngs,
          fallbackLng,
          lng,
          routed: true,
          originalPath: page.path,
          siteUrl,
        },
      };

      createPage(localePage);
    });

    resolve();
  });
};

export default onCreatePage;
