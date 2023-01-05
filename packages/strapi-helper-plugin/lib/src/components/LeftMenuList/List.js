import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const List = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  max-height: 182px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    &:hover {
      background: transparent;
    }
  }

  li {
    position: relative;
    margin-bottom: 2px;
  }
  a {
    display: block;
    padding-left: 30px;
    height: 34px;
    border-radius: 2px;
    p {
      color: ${colors.leftMenu.black};
      font-size: 13px;
      line-height: 34px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
    }
    &.active {
      background-color: #e9eaeb;
      p {
        font-weight: 600;
      }
      svg {
        color: ${colors.leftMenu.black};
      }
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

export default List;
