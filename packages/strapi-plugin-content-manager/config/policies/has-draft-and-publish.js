'use strict';

const {
  contentTypes: { hasDraftAndPublish },
} = require('@akemona-org/strapi-utils');

module.exports = (ctx, next) => {
  const {
    params: { model: modelUid },
  } = ctx;

  const model = strapi.contentTypes[modelUid];

  if (!hasDraftAndPublish(model)) {
    throw strapi.errors.forbidden();
  }

  return next();
};
