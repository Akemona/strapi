import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import pluginPermissions from '../../../permissions';
import RolesCreatePage from '../CreatePage';

function ProtectedRolesCreatePage() {
  return (
    <CheckPagePermissions permissions={pluginPermissions.createRole}>
      <RolesCreatePage />
    </CheckPagePermissions>
  );
}

export default ProtectedRolesCreatePage;
