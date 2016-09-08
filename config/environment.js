/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    'ember-simple-auth': {
      authenticationRoute: 'dashboard',
      routeIfAlreadyAuthenticated: 'support-agents-support-requests'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' https://cdn.mxpnl.com",
      'font-src': "'self' http://fonts.gstatic.com http://fonts.googleapis.com",
      'connect-src': "'self' https://api.mixpanel.com http://custom-api.local",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    },
    modulePrefix: 'ember-web-with-cli',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      }
    },

    APP: {
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
