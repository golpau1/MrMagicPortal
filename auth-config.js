// Central config for optional QR / deep-link access.
// Note: This is a static site; anything here is visible to users.

(function(){
  window.MRMAGIC_AUTH = window.MRMAGIC_AUTH || {
    // If set, visitors can append `?token=...` or `#token=...` to auto-login.
    // Treat this like a password.
    QR_ACCESS_TOKEN: 'CHANGE_ME_TO_A_LONG_RANDOM_STRING',

    // Auth storage keys/values used across the site.
    AUTH_KEY: 'authToken',
    AUTH_VALUE: 'ok',

    // Optional: allow password-based login to use this list too.
    PASSWORDS: ['magic', 'Magic'],

    // Where to send the user after successful login.
    REDIRECT_PATH: 'Homepage/homepage.html'
  };
})();
