import styled from 'styled-components';

const Li = styled.li`
  position: relative;
  min-height: 5.4rem;
  margin-top: 0 !important;
  line-height: 5.4rem;
  cursor: pointer;
  &:hover {
    background-color: #f7f8f8;
  }

  .subContainer {
    margin: 0 3.2rem 0 1.9rem;
    padding: 0 1.4rem 0 0rem;
    border-bottom: 1px solid rgba(14, 22, 34, 0.04);
    color: #333740;
    font-size: 1.3rem;
    > div {
      padding: 0;
      align-self: center;
    }
    > div:first-child {
      padding-left: 1.4rem;
    }
    > div:last-child {
      text-align: right;
    }
  }
`;

export default Li;
