import i18next from 'i18next';

function setupI18next({ fallbackLng, debug }, cb) {
  i18next.init(
    {
      debug,
      defaultNS: 'messages',
      wait: true,
      fallbackLng,
    },
    cb,
  );

  return i18next;
}

export default setupI18next;
