/**
 *
 * StyledPluginHeaderActions
 *
 */

import styled from 'styled-components';

const StyledPluginHeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  max-width: 100%;
  padding-top: 1rem;
  button {
    margin-right: 0;
    margin-left: 1rem;
    max-width: 100%;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
`;

export default StyledPluginHeaderActions;
