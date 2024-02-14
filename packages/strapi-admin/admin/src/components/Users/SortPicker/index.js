import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from '@buffetjs/core';
import Button from './Button';
import List from './List';

function SortPicker({ onChange, value }) {
  return (
    <Picker
      renderButtonContent={Button}
      renderSectionContent={(onToggle) => (
        <List
          selectedItem={value}
          onClick={(e) => {
            onChange(e);
            onToggle();
          }}
        />
      )}
    />
  );
}

SortPicker.defaultProps = {
  onChange: () => {},
  value: 'firstname:ASC',
};

SortPicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SortPicker;
