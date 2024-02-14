import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import adminPermissions from '../../../permissions';
import EditView from '../EditView';

function ProtectedCreateView() {
  return <CheckPagePermissions permissions={adminPermissions.settings.webhooks.create}>
    <EditView />
  </CheckPagePermissions>
}

export default ProtectedCreateView;
