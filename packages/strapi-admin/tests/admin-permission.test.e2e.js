'use strict';

const _ = require('lodash');

const { createAuthRequest } = require('../../../test/helpers/request');
const { createStrapiInstance } = require('../../../test/helpers/strapi');

// const edition = process.env.STRAPI_DISABLE_EE === 'true' ? 'CE' : 'EE';

describe('Role CRUD End to End', () => {
  let rq;
  let strapi;

  beforeAll(async () => {
    strapi = await createStrapiInstance();
    rq = await createAuthRequest({ strapi });
  });

  afterAll(async () => {
    await strapi.destroy();
  });

  test('Can get the existing permissions', async () => {
    let res = await rq({
      url: '/admin/permissions',
      method: 'GET',
    });

    expect(res.statusCode).toBe(200);

    // Data is sorted to avoid error with snapshot when the data is not in the same order
    const sortedData = _.cloneDeep(res.body.data);
    Object.keys(sortedData.sections).forEach((sectionName) => {
      sortedData.sections[sectionName] = _.sortBy(sortedData.sections[sectionName], ['action']);
    });
    sortedData.conditions = sortedData.conditions.sort();

    expect(sortedData).toMatchInlineSnapshot(`
      {
        "conditions": [
          {
            "category": "default",
            "displayName": "Is creator",
            "id": "admin::is-creator",
          },
          {
            "category": "default",
            "displayName": "Has same role as creator",
            "id": "admin::has-same-role-as-creator",
          },
        ],
        "sections": {
          "collectionTypes": [
            [
              {
                "actionId": "plugins::content-manager.explorer.create",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Create",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.read",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Read",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.update",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Update",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.delete",
                "applyToProperties": [
                  "locales",
                ],
                "label": "Delete",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.publish",
                "applyToProperties": [
                  "locales",
                ],
                "label": "Publish",
                "subjects": [],
              },
            ],
            [
              {
                "label": "user",
                "properties": [
                  {
                    "children": [
                      {
                        "label": "username",
                        "required": true,
                        "value": "username",
                      },
                      {
                        "label": "email",
                        "required": true,
                        "value": "email",
                      },
                      {
                        "label": "provider",
                        "value": "provider",
                      },
                      {
                        "label": "password",
                        "value": "password",
                      },
                      {
                        "label": "resetPasswordToken",
                        "value": "resetPasswordToken",
                      },
                      {
                        "label": "confirmationToken",
                        "value": "confirmationToken",
                      },
                      {
                        "label": "confirmed",
                        "value": "confirmed",
                      },
                      {
                        "label": "blocked",
                        "value": "blocked",
                      },
                      {
                        "label": "role",
                        "value": "role",
                      },
                    ],
                    "label": "Fields",
                    "value": "fields",
                  },
                ],
                "uid": "plugins::users-permissions.user",
              },
            ],
          ],
          "plugins": [
            {
              "action": "plugins::content-manager.collection-types.configure-view",
              "displayName": "Configure view",
              "plugin": "content-manager",
              "subCategory": "collection types",
            },
            {
              "action": "plugins::content-manager.components.configure-layout",
              "displayName": "Configure Layout",
              "plugin": "content-manager",
              "subCategory": "components",
            },
            {
              "action": "plugins::content-manager.single-types.configure-view",
              "displayName": "Configure view",
              "plugin": "content-manager",
              "subCategory": "single types",
            },
            {
              "action": "plugins::content-type-builder.read",
              "displayName": "Read",
              "plugin": "content-type-builder",
              "subCategory": "general",
            },
            {
              "action": "plugins::documentation.read",
              "displayName": "Access the Documentation",
              "plugin": "documentation",
              "subCategory": "general",
            },
            {
              "action": "plugins::documentation.settings.regenerate",
              "displayName": "Regenerate",
              "plugin": "documentation",
              "subCategory": "settings",
            },
            {
              "action": "plugins::documentation.settings.update",
              "displayName": "Update and delete",
              "plugin": "documentation",
              "subCategory": "settings",
            },
            {
              "action": "plugins::upload.assets.copy-link",
              "displayName": "Copy link",
              "plugin": "upload",
              "subCategory": "assets",
            },
            {
              "action": "plugins::upload.assets.create",
              "displayName": "Create (upload)",
              "plugin": "upload",
              "subCategory": "assets",
            },
            {
              "action": "plugins::upload.assets.download",
              "displayName": "Download",
              "plugin": "upload",
              "subCategory": "assets",
            },
            {
              "action": "plugins::upload.assets.update",
              "displayName": "Update (crop, details, replace) + delete",
              "plugin": "upload",
              "subCategory": "assets",
            },
            {
              "action": "plugins::upload.read",
              "displayName": "Access the Media Library",
              "plugin": "upload",
              "subCategory": "general",
            },
            {
              "action": "plugins::users-permissions.advanced-settings.read",
              "displayName": "Read",
              "plugin": "users-permissions",
              "subCategory": "advancedSettings",
            },
            {
              "action": "plugins::users-permissions.advanced-settings.update",
              "displayName": "Edit",
              "plugin": "users-permissions",
              "subCategory": "advancedSettings",
            },
            {
              "action": "plugins::users-permissions.email-templates.read",
              "displayName": "Read",
              "plugin": "users-permissions",
              "subCategory": "emailTemplates",
            },
            {
              "action": "plugins::users-permissions.email-templates.update",
              "displayName": "Edit",
              "plugin": "users-permissions",
              "subCategory": "emailTemplates",
            },
            {
              "action": "plugins::users-permissions.providers.read",
              "displayName": "Read",
              "plugin": "users-permissions",
              "subCategory": "providers",
            },
            {
              "action": "plugins::users-permissions.providers.update",
              "displayName": "Edit",
              "plugin": "users-permissions",
              "subCategory": "providers",
            },
            {
              "action": "plugins::users-permissions.roles.create",
              "displayName": "Create",
              "plugin": "users-permissions",
              "subCategory": "roles",
            },
            {
              "action": "plugins::users-permissions.roles.delete",
              "displayName": "Delete",
              "plugin": "users-permissions",
              "subCategory": "roles",
            },
            {
              "action": "plugins::users-permissions.roles.read",
              "displayName": "Read",
              "plugin": "users-permissions",
              "subCategory": "roles",
            },
            {
              "action": "plugins::users-permissions.roles.update",
              "displayName": "Update",
              "plugin": "users-permissions",
              "subCategory": "roles",
            },
          ],
          "settings": [
            {
              "action": "admin::marketplace.plugins.install",
              "category": "plugins and marketplace",
              "displayName": "Install (only for dev env)",
              "subCategory": "plugins",
            },
            {
              "action": "admin::marketplace.plugins.uninstall",
              "category": "plugins and marketplace",
              "displayName": "Uninstall (only for dev env)",
              "subCategory": "plugins",
            },
            {
              "action": "admin::marketplace.read",
              "category": "plugins and marketplace",
              "displayName": "Access the marketplace",
              "subCategory": "marketplace",
            },
            {
              "action": "admin::roles.create",
              "category": "users and roles",
              "displayName": "Create",
              "subCategory": "roles",
            },
            {
              "action": "admin::roles.delete",
              "category": "users and roles",
              "displayName": "Delete",
              "subCategory": "roles",
            },
            {
              "action": "admin::roles.read",
              "category": "users and roles",
              "displayName": "Read",
              "subCategory": "roles",
            },
            {
              "action": "admin::roles.update",
              "category": "users and roles",
              "displayName": "Update",
              "subCategory": "roles",
            },
            {
              "action": "admin::users.create",
              "category": "users and roles",
              "displayName": "Create (invite)",
              "subCategory": "users",
            },
            {
              "action": "admin::users.delete",
              "category": "users and roles",
              "displayName": "Delete",
              "subCategory": "users",
            },
            {
              "action": "admin::users.read",
              "category": "users and roles",
              "displayName": "Read",
              "subCategory": "users",
            },
            {
              "action": "admin::users.update",
              "category": "users and roles",
              "displayName": "Update",
              "subCategory": "users",
            },
            {
              "action": "admin::webhooks.create",
              "category": "webhooks",
              "displayName": "Create",
              "subCategory": "general",
            },
            {
              "action": "admin::webhooks.delete",
              "category": "webhooks",
              "displayName": "Delete",
              "subCategory": "general",
            },
            {
              "action": "admin::webhooks.read",
              "category": "webhooks",
              "displayName": "Read",
              "subCategory": "general",
            },
            {
              "action": "admin::webhooks.update",
              "category": "webhooks",
              "displayName": "Update",
              "subCategory": "general",
            },
            {
              "action": "plugins::email.settings.read",
              "category": "email",
              "displayName": "Access the Email Settings page",
              "subCategory": "general",
            },
            {
              "action": "plugins::i18n.locale.create",
              "category": "Internationalization",
              "displayName": "Create",
              "subCategory": "Locales",
            },
            {
              "action": "plugins::i18n.locale.delete",
              "category": "Internationalization",
              "displayName": "Delete",
              "subCategory": "Locales",
            },
            {
              "action": "plugins::i18n.locale.read",
              "category": "Internationalization",
              "displayName": "Read",
              "subCategory": "Locales",
            },
            {
              "action": "plugins::i18n.locale.update",
              "category": "Internationalization",
              "displayName": "Update",
              "subCategory": "Locales",
            },
            {
              "action": "plugins::upload.settings.read",
              "category": "media library",
              "displayName": "Access the Media Library settings page",
              "subCategory": "general",
            },
          ],
          "singleTypes": [
            [
              {
                "actionId": "plugins::content-manager.explorer.create",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Create",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.read",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Read",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.update",
                "applyToProperties": [
                  "fields",
                  "locales",
                ],
                "label": "Update",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.delete",
                "applyToProperties": [
                  "locales",
                ],
                "label": "Delete",
                "subjects": [
                  "plugins::users-permissions.user",
                ],
              },
              {
                "actionId": "plugins::content-manager.explorer.publish",
                "applyToProperties": [
                  "locales",
                ],
                "label": "Publish",
                "subjects": [],
              },
            ],
            [],
          ],
        },
      }
    `);
  });
});
