# strapi-hook-ejs

[![npm version](https://img.shields.io/npm/v/strapi-ejs.svg)](https://www.npmjs.org/package/strapi-ejs)
[![npm downloads](https://img.shields.io/npm/dm/strapi-ejs.svg)](https://www.npmjs.org/package/strapi-ejs)
[![npm dependencies](https://david-dm.org/strapi/strapi-ejs.svg)](https://david-dm.org/strapi/strapi-ejs)
[![Build status](https://travis-ci.org/strapi/strapi-ejs.svg?branch=master)](https://travis-ci.org/strapi/strapi)
[![Slack status](https://slack.strapi.io/badge.svg)](https://slack.strapi.io)

This built-in hook allows you to use the EJS template engine with custom options.

---

## Deprecation Warning :warning:

Hello, we've some news to share!

We released Strapi V4 in Q4 2021 and Strapi V3 will reach end-of-support around the end of Q3 2022.

Since this package won't be ported in V4, we took the decision to deprecate it.

If you’ve contributed to the development of this package, thank you again for that! We hope to see you on the V4 soon.

The Akemona team

---

## Configuration

To configure your hook with custom options, you need to edit your `./config/hook.json` file in your Strapi app.

```javascript
{
  ...
  "ejs": {
    "enabled": true,
    "layout": "layout",
    "viewExt": "ejs",
    "partial": true,
    "cache": false,
    "debug": true
  }
}
```

More information in the Koa ejs module https://github.com/koajs/ejs#settings

## Usage

Insert code in your controller to render a view.

```javascript
module.exports = {
  home: async ctx => {
    return ctx.render('home', {
      title: 'My app title',
    });
  },
};
```

This will render the `views/home.ejs` file and you will have access to `<%= title %>` data in your ejs file.

## Resources

- [License](LICENSE)

## Links

- [Strapi website](https://strapi.akemona.com/)
- [Strapi community on Slack](https://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)
