import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.startsWith('@akemona-org')
  ? pluginPkg.name.replace(/^@akemona-org\/strapi-plugin-/i, '')
  : pluginPkg.name.replace(/^strapi-plugin-/i, '');

export default pluginId;
