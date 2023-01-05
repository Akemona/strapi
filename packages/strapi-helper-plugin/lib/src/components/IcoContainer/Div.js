import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  min-width: 60px;
  justify-content: flex-end;
  > div {
    width: 30px;
    height: 100%;
    color: #0e1622;
  }
  > div:last-child {
    margin-left: 0;
    padding-left: 7px;
  }
`;
export default Div;
