import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormTitle({ description, title }) {
  return (
    <>
      {!!title && <FormattedMessage id={title} />}
      {!!description && (
        <FormattedMessage id={description}>{(msg) => <p>{msg}</p>}</FormattedMessage>
      )}
    </>
  );
}

FormTitle.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

FormTitle.defaultProps = {
  description: null,
  title: null,
};

export default memo(FormTitle);
