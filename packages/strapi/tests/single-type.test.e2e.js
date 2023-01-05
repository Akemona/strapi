'use strict';

// Helpers.
const { createStrapiInstance } = require('../../../test/helpers/strapi');
const { createAuthRequest } = require('../../../test/helpers/request');
const { createTestBuilder } = require('../../../test/helpers/builder');

const builder = createTestBuilder();
let strapi;
let rq;
let uid = 'single-type';
let data = {};

const model = {
  kind: 'singleType',
  name: 'single-type',
  attributes: {
    title: {
      type: 'string',
    },
  },
};

describe('Content Manager single types', () => {
  beforeAll(async () => {
    await builder.addContentType(model).build();

    strapi = await createStrapiInstance();
    rq = await createAuthRequest({ strapi });
  });

  afterAll(async () => {
    await strapi.destroy();
    await builder.cleanup();
  });

  test('find single type content returns 404 when not created', async () => {
    const res = await rq({
      url: `/${uid}`,
      method: 'GET',
    });

    expect(res.statusCode).toBe(404);
  });

  test('Create content', async () => {
    const res = await rq({
      url: `/${uid}`,
      method: 'PUT',
      body: {
        title: 'Title',
      },
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: expect.anything(),
      title: 'Title',
    });

    data.id = res.body.id;
  });

  test('Update keeps the same data id', async () => {
    const res = await rq({
      url: `/${uid}`,
      method: 'PUT',
      body: {
        title: 'Title',
      },
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: data.id,
      title: 'Title',
    });
  });

  test('find single type content returns an object ', async () => {
    const res = await rq({
      url: `/${uid}`,
      method: 'GET',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: expect.anything(),
      title: 'Title',
    });
  });

  test('Delete single type content returns an object and makes data unavailable', async () => {
    const res = await rq({
      url: `/${uid}`,
      method: 'DELETE',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: expect.anything(),
      title: 'Title',
    });

    const getRes = await rq({
      url: `/${uid}`,
      method: 'GET',
    });

    expect(getRes.statusCode).toBe(404);
  });
});
