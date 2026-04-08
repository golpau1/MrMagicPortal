// Shared auth configuration for the static portal.
// SECURITY NOTE: This is client-side only. Do not use for sensitive data.

window.MRMAGIC_AUTH = {
  // Change this to something unguessable, then regenerate your QR code.
  QR_ACCESS_TOKEN: 'CHANGE_ME_TO_A_LONG_RANDOM_TOKEN',

  AUTH_KEY: 'authToken',
  AUTH_VALUE: 'ok',
  HOMEPAGE_PATH: 'Homepage/homepage.html',
  LOGIN_PATH: 'index.html'
};
