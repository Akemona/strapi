import React from 'react';
import { CheckPagePermissions } from '@akemona-org/strapi-helper-plugin';
import adminPermissions from '../../../permissions';
import ListView from '../ListView';

function ProtectedListView() {
  return (
    <CheckPagePermissions permissions={adminPermissions.settings.webhooks.main}>
      <ListView />
    </CheckPagePermissions>
  );
}

export default ProtectedListView;
