import styled from 'styled-components';
import { themePropTypes } from '@akemona-org/strapi-helper-plugin';

const Hr = styled.hr`
  margin: 0;
  width: 50%;
  height: 1px;
  border: 0;
  background: ${({ theme }) => theme.main.colors.brightGrey};
`;

Hr.propTypes = themePropTypes;

export default Hr;
