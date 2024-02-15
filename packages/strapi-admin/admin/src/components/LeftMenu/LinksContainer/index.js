import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinksContainer = styled.div`
  padding-top: 0.7rem;
  position: absolute;
  inset: ${(props) => props.theme.main.sizes.leftMenu.height} 0 0 0;
  overflow-y: auto;
  height: calc(100vh - (${(props) => props.theme.main.sizes.leftMenu.height} + 3rem));
  box-sizing: border-box;
`;

LinksContainer.defaultProps = {
  theme: {
    main: {
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

LinksContainer.propTypes = {
  theme: PropTypes.object,
};

export default LinksContainer;
