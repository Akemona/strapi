'use strict';

const sqlClientModule = {
  sqlite: { sqlite3: '5.1.4' },
  postgres: { pg: '8.9.0' },
  mysql: { mysql: '2.18.1' },
};

/**
 * Client dependencies
 */
module.exports = ({ scope, client }) => {
  switch (client) {
    case 'sqlite':
    case 'postgres':
    case 'mysql':
      return {
        '@akemona-org/strapi-connector-bookshelf': scope.strapiVersion,
        knex: '2.4.0',
        ...sqlClientModule[client],
      };
    case 'mongo':
      return {
        '@akemona-org/strapi-connector-mongoose': scope.strapiVersion,
      };
    default:
      throw new Error(`Invalid client "${client}"`);
  }
};
