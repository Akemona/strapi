'use strict';

// Helpers.
const { createTestBuilder } = require('../../../test/helpers/builder');
const { createStrapiInstance } = require('../../../test/helpers/strapi');
const { createAuthRequest } = require('../../../test/helpers/request');

const builder = createTestBuilder();
let strapi;
let rq;
let graphqlQuery;
const data = {};

const homePageModel = {
  name: 'home-page',
  kind: 'singleType',
  attributes: {
    title: {
      type: 'string',
    },
  },
};

const updateContent = data => {
  return graphqlQuery({
    query: /* GraphQL */ `
      mutation updateHomePage($input: updateHomePageInput) {
        updateHomePage(input: $input) {
          homePage {
            id
          }
        }
      }
    `,
    variables: {
      input: {
        data,
      },
    },
  });
};

describe('Single type Graphql support', () => {
  beforeAll(async () => {
    await builder.addContentType(homePageModel).build();

    strapi = await createStrapiInstance();
    rq = await createAuthRequest({ strapi });

    graphqlQuery = body => {
      return rq({
        url: '/graphql',
        method: 'POST',
        body,
      });
    };
  });

  afterAll(async () => {
    await strapi.destroy();
    await builder.cleanup();
  });

  describe('Queries', () => {
    test('No list available', async () => {
      const res = await graphqlQuery({
        query: /* GraphQL */ `
          {
            homePages {
              id
            }
          }
        `,
      });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors).toMatchObject(
        expect.arrayContaining([
          expect.objectContaining({
            message: expect.stringMatching('Cannot query field "homePages"'),
          }),
        ])
      );
    });

    test('Access the single type without args', async () => {
      await updateContent({
        title: 'Test',
      });

      const res = await graphqlQuery({
        query: /* GraphQL */ `
          {
            homePage {
              id
              title
            }
          }
        `,
      });

      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual({
        homePage: {
          id: expect.anything(),
          title: 'Test',
        },
      });

      data.id = res.body.data.homePage.id;
    });
  });

  describe('Mutations', () => {
    test('Cannot create', async () => {
      const res = await graphqlQuery({
        query: /* GraphQL */ `
          mutation {
            createHomePage(input: { data: { title: "Test" } }) {
              id
            }
          }
        `,
      });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors).toMatchObject(
        expect.arrayContaining([
          expect.objectContaining({
            message: expect.stringMatching('Cannot query field "createHomePage"'),
          }),
        ])
      );
    });

    test('update a single type does not require id', async () => {
      const updateRes = await graphqlQuery({
        query: /* GraphQL */ `
          mutation updateHomePage($input: updateHomePageInput) {
            updateHomePage(input: $input) {
              homePage {
                id
                title
              }
            }
          }
        `,
        variables: {
          input: {
            data: {
              title: 'New Title',
            },
          },
        },
      });

      expect(updateRes.statusCode).toBe(200);
      expect(updateRes.body.data).toEqual({
        updateHomePage: {
          homePage: {
            id: data.id,
            title: 'New Title',
          },
        },
      });

      const getRes = await graphqlQuery({
        query: /* GraphQL */ `
          {
            homePage {
              id
              title
            }
          }
        `,
      });

      expect(getRes.statusCode).toBe(200);
      expect(getRes.body.data).toEqual({
        homePage: {
          id: data.id,
          title: 'New Title',
        },
      });
    });

    test('Can delete without params', async () => {
      const deleteRes = await graphqlQuery({
        query: /* GraphQL */ `
          mutation {
            deleteHomePage {
              homePage {
                id
                title
              }
            }
          }
        `,
      });

      expect(deleteRes.statusCode).toBe(200);
      expect(deleteRes.body.data).toEqual({
        deleteHomePage: {
          homePage: {
            id: data.id,
            title: 'New Title',
          },
        },
      });

      const getRes = await graphqlQuery({
        query: /* GraphQL */ `
          {
            homePage {
              id
              title
            }
          }
        `,
      });

      expect(getRes.statusCode).toBe(200);
      expect(getRes.body.data).toEqual({
        homePage: null,
      });
    });
  });
});
