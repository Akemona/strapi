import styled from 'styled-components';
import { Button } from 'reactstrap';
import colors from '../../assets/styles/colors';

const StyledButtonModalSuccess = styled(Button)`
  position: relative;
  height: 3rem;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  font-family: Lato;
  color: ${colors.green};
  border: 0.1rem solid ${colors.green};
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  line-height: 1.15;
  &::before,
  span {
    display: inline-block;
    vertical-align: middle;
  }
  &:hover,
  &:active,
  &.btn-secondary:not(:disabled):not(.disabled):active,
  &.btn-secondary:not(:disabled):not(.disabled):focus,
  &.btn-secondary:not(:disabled):not(.disabled):focus:active,
  &.btn-secondary:hover {
    color: ${colors.green} !important;
    background-color: white;
    border: 0.1rem solid ${colors.green};
  }
`;

export default StyledButtonModalSuccess;
