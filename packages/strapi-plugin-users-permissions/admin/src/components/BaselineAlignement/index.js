import PropTypes from 'prop-types';
import styled from 'styled-components';

// You can see in the index.js file that I used the design system to do the UI integration but
// sometimes, we need to create some "temporary" custom style to fix the baseline alignment.
// -----
// TODO : remove this component. I think that this kind components should not exist in Strapi.
// I create it to temporary fix the baseline alignment until we have the design system.

const BaselineAlignment = styled.div`
  padding: ${({ size, top }) => top && size} ${({ size, right }) => right && size}
    ${({ size, bottom }) => bottom && size} ${({ size, left }) => left && size};
`;

BaselineAlignment.defaultProps = {
  bottom: false,
  left: false,
  right: false,
  size: '0',
  top: false,
};

BaselineAlignment.propTypes = {
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string,
  top: PropTypes.bool,
};

export default BaselineAlignment;
