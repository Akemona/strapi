'use strict';

/**
 * Module dependencies
 */

// Native
const path = require('path');

// Externals
const co = require('co');
const render = require('koa-ejs');

/**
 * EJS hook
 */

module.exports = function(strapi) {
  const hook = {
    /**
     * Default options
     */

    defaults: {
      root: path.join(strapi.config.appPath, strapi.config.paths.views),
      layout: 'layout',
      viewExt: 'ejs',
      cache: true,
      debug: true,
    },

    /**
     * Initialize the hook
     */

    initialize() {
      // Force cache mode in production
      if (strapi.config.environment === 'production') {
        strapi.config.hook.settings.ejs.cache = true;
      }

      render(
        strapi.app,
        Object.assign(this.defaults, strapi.config.hook.settings.ejs)
      );

      strapi.app.context.render = co.wrap(strapi.app.context.render);
    },
  };

  return hook;
};
