/**
 *
 * InputSearch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import Wrapper from './Wrapper';

class InputSearch extends React.Component {
  state = { isFocused: false };

  handleBlur = (e) => {
    this.setState({ isFocused: !this.state.isFocused });
    this.props.onBlur(e);
  };

  handleFocus = (e) => {
    this.setState({ isFocused: !this.state.isFocused });
    this.props.onFocus(e);
  };

  render() {
    const {
      autoFocus,
      className,
      deactivateErrorHighlight,
      disabled,
      error,
      name,
      onChange,
      placeholder,
      style,
      tabIndex,
      value,
    } = this.props;
    const formattedPlaceholder =
      placeholder === '' ? 'app.utils.placeholder.defaultMessage' : placeholder;

    return (
      <Wrapper className={cn('input-group', !isEmpty(className) && className)} style={style}>
        <span
          className={cn(
            'input-group-addon',
            'addonSearch',
            this.state.isFocused && 'addonFocus',
            !deactivateErrorHighlight && error && 'errorAddon'
          )}
        />
        <FormattedMessage id={formattedPlaceholder} defaultMessage={formattedPlaceholder}>
          {(message) => (
            <input
              autoFocus={autoFocus}
              className={cn(
                'form-control',
                !deactivateErrorHighlight && error && 'is-invalid',
                !deactivateErrorHighlight && error && this.state.isFocused && 'invalidSearch'
              )}
              disabled={disabled}
              id={name}
              name={name}
              onBlur={this.handleBlur}
              onChange={onChange}
              onFocus={this.handleFocus}
              placeholder={message}
              tabIndex={tabIndex}
              type="text"
              value={value}
            />
          )}
        </FormattedMessage>
      </Wrapper>
    );
  }
}

InputSearch.defaultProps = {
  autoFocus: false,
  className: '',
  deactivateErrorHighlight: false,
  disabled: false,
  error: false,
  onBlur: () => {},
  onFocus: () => {},
  placeholder: 'app.utils.placeholder.defaultMessage',
  style: {},
  tabIndex: '0',
};

InputSearch.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputSearch;
