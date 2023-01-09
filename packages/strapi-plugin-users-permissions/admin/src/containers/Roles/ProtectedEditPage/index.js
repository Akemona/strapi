import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import pluginPermissions from '../../../permissions';
import RolesEditPage from '../EditPage';

const ProtectedRolesEditPage = () => (
  <CheckPagePermissions permissions={pluginPermissions.updateRole}>
    <RolesEditPage />
  </CheckPagePermissions>
);

export default ProtectedRolesEditPage;
