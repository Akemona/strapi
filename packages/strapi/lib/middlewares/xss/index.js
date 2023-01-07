'use strict';

const convert = require('koa-convert');
const { xssProtection } = require('koa-lusca');

module.exports = (strapi) => {
  return {
    initialize() {
      // eslint-disable-next-line import/extensions
      const defaults = require('./defaults.json');

      strapi.app.use(async (ctx, next) => {
        if (ctx.request.admin) {
          return await convert(
            xssProtection({
              enabled: true,
              mode: defaults.xss.mode,
            })
          )(ctx, next);
        }

        const xssConfig = strapi.config.get('middleware.settings.xss');
        if (xssConfig.enabled) {
          return await convert(xssProtection(xssConfig))(ctx, next);
        }

        await next();
      });
    },
  };
};
