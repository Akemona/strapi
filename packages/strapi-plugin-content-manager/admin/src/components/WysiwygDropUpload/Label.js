import styled from 'styled-components';

const Label = styled.label`
  position: absolute;
  inset: 0;
  background-color: rgb(28 93 231 / 1%);

  > input {
    display: none;
  }
`;

export default Label;
