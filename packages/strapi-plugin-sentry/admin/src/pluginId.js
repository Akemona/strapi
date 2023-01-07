import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^@akemona-org\/strapi-plugin-/i, '');

export default pluginId;
