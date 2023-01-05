import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin-top: 4.3rem;
  border-radius: 2px;
  box-shadow: 0 2px 4px #e3e9f3;
  > a {
    box-shadow: 1px 0 0px rgba(#dbdbdb, 0.5),
      inset 0px -1px 0px -2px rgba(#dbdbdb, 0.5);
    background-color: #f5f5f5;
    &:first-child {
      border-radius: 2px 0 0 0;
    }
    &:last-child {
      border-radius: 0 2px 0 0;
    }
  }

  .headerLink {
    position: relative;
    display: flex;
    flex: 1 100%;
    height: 3.6rem;
    border-radius: 2px 0 0 0;
    background-color: darken(#f5f5f5, 50%);
    text-decoration: none !important;
    font-family: Lato;
    font-size: 1.3rem;
    color: #333740 !important;
    line-height: 1.6rem;

    &.linkActive {
      z-index: 10;
      background-color: #ffffff !important;
      font-weight: bold;
      text-decoration: none !important;
      box-shadow: 0 0 2px rgba(#dbdbdb, 0.5);
      border-top: 0.2rem solid #1c5de7;
    }
  }

  .linkText {
    display: flex;
    margin: auto;
    text-transform: capitalize;
  }

  .notifPoint {
    height: 0.4rem;
    width: 0.4rem;
    margin: 1px 0 0 0.7rem;
    align-self: center;
    border-radius: 0.5rem;
    background-color: #27b70f;
  }
`;

export default Wrapper;
