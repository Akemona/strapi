'use strict';

/**
 * Logger.
 */

const pino = require('pino');
const pretty = require('pino-pretty');
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
  timestamp: pino.stdTimeFunctions.isoTime,
  forceColor: getBool(process.env.STRAPI_LOG_FORCE_COLOR, true),
};

const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

// * NOTE: pretty option does not work with pm2 - use `cat /log-path/file.log | pino-pretty` to view
const logger = getBool(process.env.STRAPI_LOG_PRETTY_PRINT, nodeEnv === 'development')
  ? pino(
      pretty({
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      })
    )
  : pino(loggerConfig);

module.exports = logger;
