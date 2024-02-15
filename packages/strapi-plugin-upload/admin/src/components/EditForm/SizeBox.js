/* stylelint-disable */
import React from 'react';
import styled from 'styled-components';
import { Text } from '@buffetjs/core';
/* stylelint-enable */

const SizeBox = styled((props) => <Text {...props} fontSize="md" color="white" as="div" />)`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #000;
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
`;

export default SizeBox;
