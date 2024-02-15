import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1140;
  background: ${({ theme }) => theme.main.colors.white};
`;

export default LoaderWrapper;
