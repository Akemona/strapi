import React from 'react';
import PropTypes from 'prop-types';
import ClearIcon from '../../svgs/Clear';
import SearchIcon from '../../svgs/Search';
import SearchInfo from '../SearchInfo';
import Clear from './Clear';
import Wrapper from './Wrapper';

const HeaderSearch = ({
  label,
  name,
  onChange,
  onClear,
  placeholder,
  value,
  className,
  autoFocus,
}) => {
  return (
    <Wrapper className={className}>
      <div>
        <SearchIcon />
      </div>
      <div>
        <input
          autoComplete="off"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          value={value}
          autoFocus={autoFocus}
        />
        {value !== '' && (
          <Clear onClick={onClear}>
            <ClearIcon />
          </Clear>
        )}
      </div>
      {label && <SearchInfo label={label} />}
    </Wrapper>
  );
};

HeaderSearch.defaultProps = {
  label: '',
  name: '',
  onChange: () => {},
  onClear: () => {},
  placeholder: 'Search for an entry',
  value: '',
  autoFocus: false,
};

HeaderSearch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default HeaderSearch;
