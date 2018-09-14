import i18next from 'i18next';

function setupI18next(fallbackLng) {
  i18next.init({
    debug: false,
    defaultNS: 'messages',
    fallbackLng,
  });

  return i18next;
}

export default setupI18next;
