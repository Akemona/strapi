import testData from '../../../testUtils/testData';
import formatComponentData from '../formatComponentData';

const { contentType, components, modifiedData } = testData;

describe('STRAPI_HELPER_PLUGIN | utils | formatComponentData', () => {
  it('should add the __temp_key__ property to each repeatable component object', () => {
    const expected = {
      created_at: '2020-04-28T13:22:13.033Z',
      dz: [
        { __component: 'compos.sub-compo', id: 7, name: 'name', password: 'password' },
        {
          id: 4,
          name: 'name',
          password: 'password',
          subcomponotrepeatable: null,
          subrepeatable: [],
          __component: 'compos.test-compo',
        },
        {
          id: 5,
          name: 'name',
          password: 'password',
          subcomponotrepeatable: { id: 9, name: 'name', password: 'password' },
          subrepeatable: [{ id: 8, name: 'name', password: 'password', __temp_key__: 0 }],
          __component: 'compos.test-compo',
        },
        {
          id: 6,
          name: null,
          password: null,
          subcomponotrepeatable: null,
          subrepeatable: [],
          __component: 'compos.test-compo',
        },
      ],
      id: 1,
      name: 'name',
      notrepeatable: {
        id: 1,
        name: 'name',
        password: 'password',
        subcomponotrepeatable: { id: 4, name: 'name', password: 'password' },
        subrepeatable: [
          { id: 1, name: 'name', password: 'password', __temp_key__: 0 },
          { id: 2, name: 'name', password: 'password', __temp_key__: 1 },
          { id: 3, name: 'name', password: 'password', __temp_key__: 2 },
        ],
      },
      password: 'password',
      repeatable: [
        {
          id: 2,
          name: 'name',
          password: 'password',
          subrepeatable: [{ id: 5, name: 'name', password: 'password', __temp_key__: 0 }],
          subcomponotrepeatable: { id: 6, name: 'name', password: 'password' },
          __temp_key__: 0,
        },
        {
          id: 3,
          name: 'name',
          password: 'password',
          subrepeatable: [],
          subcomponotrepeatable: null,
          __temp_key__: 1,
        },
      ],
      updated_at: '2020-04-28T13:22:13.033Z',
    };

    expect(formatComponentData(modifiedData, contentType, components)).toEqual(expected);
  });
});
