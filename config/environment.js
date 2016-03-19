/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'markdown-editor',
    environment: environment,
    baseURL: '/markdown-editor/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      jekyll: {
        mainCss: '/css/main.css',
        siteTitle: 'Jimmy Lauzau',
        siteDescription: 'developer <a href="https://twitter.com/ahalogy">@ahalogy</a>, organizer <a href="https://twitter.com/embernati">@embernati</a>, mountain biker, hiker, and dad',
        baseUrl: 'http://www.jimmylauzau.com',
        pages: [
          { title: 'About', url: 'http://www.jimmylauzau.com/about/' },
          { title: 'Posts', url: 'http://www.jimmylauzau.com/' },
          { title: 'Projects', url: 'http://www.jimmylauzau.com/projects/' },
          { title: 'Talks', url: 'http://www.jimmylauzau.com/talks/' }
        ],
        email: 'jimmy@jimmylauzau.com',
        githubUsername: 'jimmay5469',
        twitterUsername: 'jimmay5469'
      },
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.baseURL = '/';
    ENV.APP.jekyll.mainCss = 'http://www.jimmylauzau.com/css/main.css';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/markdown-editor/';

  }

  return ENV;
};
