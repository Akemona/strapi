import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1140;
  &:before {
    content: '';
    position: fixed;
    top: 6rem;
    right: 0;
    bottom: 0;
    left: 0;
    ${({ noGradient }) => {
      if (noGradient) {
        return '';
      }

      return `background: linear-gradient(rgba(0, 0, 0, 15) 0%, rgba(0, 0, 0, 0) 100%)`;
    }};

    opacity: 0.5;
  }

  &:after {
    content: '';
    position: fixed;
    top: 6rem;
    right: 0;
    bottom: 0;
    left: 24rem;
    ${({ noGradient }) => {
      if (noGradient) {
        return '';
      }

      return `background: linear-gradient(#fbfbfb 20%, rgba(0, 0, 100, 0) 100%)`;
    }};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px 0 rgba(40, 42, 49, 0.16);
  }

  > div {
    position: fixed;
    top: 11.5rem;
    left: 50%;
    margin-left: -17.5rem;
    z-index: 1100;
  }
`;

Overlay.defaultProps = {
  noGradient: false,
};

export default Overlay;
