import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FilterIcon } from '@akemona-org/strapi-helper-plugin';

const Button = () => {
  return (
    <>
      <FilterIcon />
      <FormattedMessage id="app.utils.filters" />
    </>
  );
};

export default Button;
