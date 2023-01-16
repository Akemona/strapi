'use strict';

/**
 * Logger.
 */

const pino = require('pino');
const _ = require('lodash');

const logLevels = Object.keys(pino.levels.values);

function getLogLevel() {
  if (!_.isString(process.env.STRAPI_LOG_LEVEL)) {
    // Default value.
    return 'debug';
  }

  const logLevel = process.env.STRAPI_LOG_LEVEL.toLowerCase();

  if (!_.includes(logLevels, logLevel)) {
    throw new Error(
      "Invalid log level set in STRAPI_LOG_LEVEL environment variable. Accepted values are: '" +
        logLevels.join("', '") +
        "'."
    );
  }

  return logLevel;
}

function getBool(envVar, defaultValue) {
  if (_.isBoolean(envVar)) return envVar;
  if (_.isString(envVar)) {
    if (envVar === 'true') return true;
    if (envVar === 'false') return false;
  }
  return defaultValue;
}

const loggerConfig = {
  level: getLogLevel(),
  // timestamp: pino.stdTimeFunctions.isoTime,
  // prettyPrint: getBool(process.env.STRAPI_LOG_PRETTY_PRINT, true),
  forceColor: getBool(process.env.STRAPI_LOG_FORCE_COLOR, true),
};

const logger = getBool(process.env.STRAPI_LOG_PRETTY_PRINT, true)
  ? pino({
      ...loggerConfig,
      transport: {
        target: 'pino-pretty',
        options: {
          destination: 1,
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },
    })
  : pino(loggerConfig);

module.exports = logger;
