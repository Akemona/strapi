import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Chevron({ side, onClick }) {
  return <Wrapper onClick={onClick}>
    <FontAwesomeIcon color="white" icon={`chevron-${side}`} />
  </Wrapper>
}

Chevron.propTypes = {
  onClick: PropTypes.func.isRequired,
  side: PropTypes.string,
};
Chevron.defaultProps = {
  side: 'right',
};

export default Chevron;
