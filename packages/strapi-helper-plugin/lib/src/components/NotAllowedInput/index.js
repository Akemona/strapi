import React, { memo, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Flex, Padded, Text } from '@buffetjs/core';
import { useIntl } from 'react-intl';
import EyeSlashed from '../../svgs/EyeSlashed';
import BaselineAlignment from '../BaselineAlignment';
import LabelIconWrapper from '../LabelIconWrapper';
import Field from './Field';

const NotAllowedInput = ({ label, labelIcon, description, error, spacerHeight }) => {
  const { formatMessage } = useIntl();
  const formatMessageRef = useRef(formatMessage);
  const text = useMemo(
    () => formatMessageRef.current({ id: 'components.NotAllowedInput.text' }),
    []
  );

  return (
    <BaselineAlignment bottom size="18px">
      <Flex style={{ lineHeight: '18px' }}>
        <Text fontWeight="semiBold" lineHeight="18px">
          <span>{label}</span>
        </Text>
        {labelIcon && <LabelIconWrapper title={labelIcon.title}>{labelIcon.icon}</LabelIconWrapper>}
      </Flex>
      <Field error={error}>
        <Padded left right size="sm">
          <Flex>
            <Padded right size="sm">
              <EyeSlashed />
            </Padded>

            <Text fontSize="md" color="grey" as="div" lineHeight="18px" ellipsis>
              {text}
            </Text>
          </Flex>
        </Padded>
      </Field>
      {!error && description && (
        <BaselineAlignment top size="9px">
          <Text fontSize="md" color="grey" lineHeight="18px" ellipsis>
            {description}
          </Text>
        </BaselineAlignment>
      )}
      {error && (
        <BaselineAlignment top size="9px">
          <Text fontSize="md" color="lightOrange" lineHeight="18px" ellipsis>
            {error}
          </Text>
        </BaselineAlignment>
      )}
      {!error && !description && <BaselineAlignment top size={spacerHeight} />}
    </BaselineAlignment>
  );
};

NotAllowedInput.defaultProps = {
  description: null,
  label: '',
  spacerHeight: '9px',
};

NotAllowedInput.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
  }),
};

export default memo(NotAllowedInput);
