'use strict';

const path = require('path');
const rimraf = require('rimraf');
const generateNew = require('../../packages/strapi-generate-new/lib/generate-new');

/**
 * Delete the testApp folder
 * @param {string} appName - name of the app / folder where the app is located
 */
const cleanTestApp = (appName) => {
  return new Promise((resolve, reject) => {
    rimraf(path.resolve(appName), (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

/**
 * Runs strapi generate new
 * @param {Object} options - Options
 * @param {string} options.appName - Name of the app that will be created (also the name of the folder)
 * @param {database} options.database - Arguments to create the testApp with the provided database params
 */
const generateTestApp = async ({ appName, database }) => {
  const scope = {
    database: {
      settings: database,
      options: {},
    },
    rootPath: path.resolve(appName),
    name: appName,
    // disable quickstart run app after creation
    runQuickstartApp: false,
    // use package version as strapiVersion (all packages have the same version);
    // eslint-disable-next-line import/extensions
    strapiVersion: require('../../packages/strapi/package.json').version,
    debug: false,
    quick: false,
    uuid: undefined,
    deviceId: null,
    // use yarn if available and --use-npm isn't true
    useYarn: true,
    installDependencies: false,
    strapiDependencies: [
      '@akemona-org/strapi',
      '@akemona-org/strapi-admin',
      '@akemona-org/strapi-utils',
      '@akemona-org/strapi-plugin-content-type-builder',
      '@akemona-org/strapi-plugin-content-manager',
      '@akemona-org/strapi-plugin-users-permissions',
      '@akemona-org/strapi-plugin-email',
      '@akemona-org/strapi-plugin-upload',
      '@akemona-org/strapi-plugin-graphql',
      '@akemona-org/strapi-plugin-documentation',
      '@akemona-org/strapi-plugin-i18n',
    ],
    additionalsDependencies: {},
  };

  await generateNew(scope);
};

module.exports = {
  cleanTestApp,
  generateTestApp,
};
