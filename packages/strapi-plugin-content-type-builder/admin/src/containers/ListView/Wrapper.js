import styled from 'styled-components';
import { ViewContainer } from '@akemona-org/strapi-helper-plugin';

const Wrapper = styled(ViewContainer)`
  .button-secondary {
    &:hover {
      background-color: #fff !important;
      box-shadow: 0 0 0 #fff;
    }
  }
  .button-submit {
    min-width: 140px;
  }
`;

export default Wrapper;
