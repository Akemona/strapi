'use strict';

const sendDidInviteUser = async () => {
  // const numberOfUsers = await strapi.admin.services.user.count();
  // const numberOfRoles = await strapi.admin.services.role.count();
  // return strapi.telemetry.send('didInviteUser', { numberOfRoles, numberOfUsers });
  return true;
};

const sendDidUpdateRolePermissions = async () => {
  // return strapi.telemetry.send('didUpdateRolePermissions');
  return true;
};

module.exports = {
  sendDidInviteUser,
  sendDidUpdateRolePermissions,
};
