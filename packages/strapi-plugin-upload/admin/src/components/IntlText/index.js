import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { Text } from '@buffetjs/core';

function IntlText({ id, defaultMessage, values, ...textProps }) {
  return <FormattedMessage id={id} defaultMessage={defaultMessage} values={values}>
    {(msg) => <Text {...textProps}>{msg}</Text>}
  </FormattedMessage>
}

IntlText.defaultProps = {
  id: 'app.utils.defaultMessage',
  defaultMessage: '',
  values: {},
};

IntlText.propTypes = {
  id: PropTypes.string,
  defaultMessage: PropTypes.string,
  values: PropTypes.object,
  // TODO - textProps type to specify
};

export default IntlText;
