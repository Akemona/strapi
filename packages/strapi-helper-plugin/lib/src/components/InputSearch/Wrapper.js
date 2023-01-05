import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 200px;
  margin-bottom: 1rem;
  font-size: 1.3rem;

  > input {
    height: 3.4rem;
    margin-top: 0.9rem;
    padding-left: 1rem;
    background-size: 0 !important;
    border: 1px solid #e3e9f3;
    border-radius: 0.25rem;
    line-height: 3.4rem;
    font-size: 1.3rem;
    font-family: 'Lato' !important;
    box-shadow: 0px 1px 1px rgba(104, 118, 142, 0.05);
    &:focus {
      border-color: #78caff;
    }
  }

  & + span {
    border-color: #e3e9f3;
  }

  .addonSearch {
    width: 3.4rem;
    height: 3.4rem;
    margin-top: 0.9rem;
    padding-left: 0.9rem;
    background-color: #fafafb;
    border: 1px solid #e3e9f3;
    border-right: 0;
    border-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: rgba(16, 22, 34, 0.5);
    line-height: 3.2rem;
    font-size: 1.3rem;
    font-weight: 600 !important;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    &:after {
      content: '\f002';
      display: inline-table;
      color: #b3b5b9;
      font-size: 14px;
      font-weight: 400;
      font-family: 'FontAwesome';
      -webkit-font-smoothing: antialiased;
    }

    & + input {
      border-left: 0px !important;
    }
  }

  .errorAddon {
    border: 1px solid #ff203c !important;
    border-right: none !important;
  }

  .addonFocus {
    border-color: #78caff;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }

  .invalidSearch {
    border-color: #ff203c !important;
    border-left: 0;
  }
`;

export default Wrapper;
