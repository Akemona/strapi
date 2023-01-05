import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Button from '../Button';
import Title from '../ListTitle';

import SubTitle from './SubTitle';
import Wrapper from './Wrapper';

function ListHeader({
  button,
  children,
  subtitle,
  subtitleValues,
  style,
  title,
  titleValues,
}) {
  return (
    <Wrapper style={style}>
      {button && <Button {...button} />}
      {children || (
        <FormattedMessage id={title} values={titleValues}>
          {msg => <Title>{msg}</Title>}
        </FormattedMessage>
      )}
      <FormattedMessage id={subtitle} values={subtitleValues}>
        {msg => <SubTitle>{msg}</SubTitle>}
      </FormattedMessage>
    </Wrapper>
  );
}

ListHeader.defaultProps = {
  button: null,
  children: null,
  style: {},
  subtitle: 'app.utils.defaultMessage',
  subtitleValues: {},
  title: 'app.utils.defaultMessage',
  titleValues: {},
};

ListHeader.propTypes = {
  button: PropTypes.object,
  children: PropTypes.node,
  style: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleValues: PropTypes.object,
  title: PropTypes.string,
  titleValues: PropTypes.object,
};

export default ListHeader;
