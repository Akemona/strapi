import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import adminPermissions from '../../../permissions';
import ListPage from '../ListPage';

function ProtectedListPage() {
  return <CheckPagePermissions permissions={adminPermissions.settings.roles.main}>
    <ListPage />
  </CheckPagePermissions>
}

export default ProtectedListPage;
