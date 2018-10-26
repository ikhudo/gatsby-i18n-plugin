import i18next from 'i18next';

function setupI18next({ fallbackLng, debug }) {
  i18next.init({
    debug,
    defaultNS: 'messages',
    fallbackLng,
  });

  return i18next;
}

export default setupI18next;
