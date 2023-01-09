import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import adminPermissions from '../../../permissions';
import EditView from '../EditView';

const ProtectedCreateView = () => (
  <CheckPagePermissions permissions={adminPermissions.settings.webhooks.create}>
    <EditView />
  </CheckPagePermissions>
);

export default ProtectedCreateView;
