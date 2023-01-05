/**
 * InputToggle
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isEmpty } from 'lodash';
import Wrapper from './Wrapper';

class InputToggle extends React.Component {
  handleClick = e => {
    const target = {
      name: this.props.name,
      type: 'toggle',
      value: e.target.id.includes('__ON__'),
    };

    this.props.onChange({ target });
  };

  render() {
    const {
      autoFocus,
      className,
      disabled,
      deactivateErrorHighlight,
      error,
      name,
      style,
      tabIndex,
      value,
    } = this.props;

    return (
      <Wrapper
        className={cn(
          'btn-group',
          !isEmpty(className) && className,
          !deactivateErrorHighlight && error && 'error'
        )}
        style={style}
      >
        <button
          autoFocus={autoFocus}
          disabled={disabled}
          className={cn('btn', !value && 'gradientOff')}
          id={`__OFF__${name}`}
          onClick={this.handleClick}
          tabIndex={tabIndex}
          type="button"
        >
          OFF
        </button>
        <button
          disabled={disabled}
          className={cn('btn', value && 'gradientOn')}
          id={`__ON__${name}`}
          onClick={this.handleClick}
          type="button"
        >
          ON
        </button>
      </Wrapper>
    );
  }
}

InputToggle.defaultProps = {
  autoFocus: false,
  className: '',
  deactivateErrorHighlight: false,
  disabled: false,
  error: false,
  style: {},
  tabIndex: '0',
  value: true,
};

InputToggle.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  value: PropTypes.bool,
};

export default InputToggle;
