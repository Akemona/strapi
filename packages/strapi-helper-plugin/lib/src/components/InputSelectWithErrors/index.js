/**
 *
 * InputSelectWithErrors;
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get, isEmpty, isFunction } from 'lodash';
import cn from 'classnames';

// Design
import Label from '../Label';
import InputDescription from '../InputDescription';
import InputErrors from '../InputErrors';
import InputSelect from '../InputSelect';
import InputSpacer from '../InputSpacer';
import InputWrapper from '../InputWrapper';

class InputSelectWithErrors extends React.Component {
  state = { errors: [] };

  componentDidMount() {
    const { errors } = this.props;

    // Display input error if it already has some
    if (!isEmpty(errors)) {
      this.setState({ errors });
    }

    if (isEmpty(this.props.value) && this.props.validations.required === true) {
      const target = {
        type: 'select',
        name: this.props.name,
        value:
          get(this.props.selectOptions, ['0', 'value']) || get(this.props.selectOptions, ['0']),
      };
      this.props.onChange({ target });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Check if errors have been updated during validations
    if (nextProps.didCheckErrors !== this.props.didCheckErrors) {
      // Remove from the state the errors that have already been set
      const errors = isEmpty(nextProps.errors) ? [] : nextProps.errors;
      this.setState({ errors });
    }
  }

  handleBlur = ({ target }) => {
    if (!isEmpty(target.value)) {
      this.setState({ errors: [] });
    }
  };

  render() {
    const {
      autoFocus,
      className,
      customBootstrapClass,
      deactivateErrorHighlight,
      disabled,
      errorsClassName,
      errorsStyle,
      inputClassName,
      inputDescription,
      inputDescriptionClassName,
      inputDescriptionStyle,
      inputStyle,
      label,
      labelClassName,
      labelStyle,
      name,
      noErrorsDescription,
      onBlur,
      onChange,
      onFocus,
      selectOptions,
      style,
      tabIndex,
      value,
      withOptionPlaceholder,
    } = this.props;

    let spacer = !isEmpty(inputDescription) ? <InputSpacer /> : <div />;

    if (!noErrorsDescription && !isEmpty(this.state.errors)) {
      spacer = <div />;
    }

    return (
      <InputWrapper
        className={cn(customBootstrapClass, !isEmpty(className) && className)}
        style={style}
      >
        <Label className={labelClassName} htmlFor={name} message={label} style={labelStyle} />
        <InputSelect
          autoFocus={autoFocus}
          className={inputClassName}
          deactivateErrorHighlight={deactivateErrorHighlight}
          disabled={disabled}
          error={!isEmpty(this.state.errors)}
          name={name}
          onBlur={isFunction(onBlur) ? onBlur : this.handleBlur}
          onChange={onChange}
          onFocus={onFocus}
          selectOptions={selectOptions}
          style={inputStyle}
          tabIndex={tabIndex}
          value={value}
          withOptionPlaceholder={withOptionPlaceholder}
        />
        <InputDescription
          className={inputDescriptionClassName}
          message={inputDescription}
          style={inputDescriptionStyle}
        />
        <InputErrors
          className={errorsClassName}
          errors={this.state.errors}
          name={name}
          style={errorsStyle}
        />
        {spacer}
      </InputWrapper>
    );
  }
}

InputSelectWithErrors.defaultProps = {
  autoFocus: false,
  className: '',
  customBootstrapClass: 'col-md-6',
  deactivateErrorHighlight: false,
  didCheckErrors: false,
  disabled: false,
  errors: [],
  errorsClassName: '',
  errorsStyle: {},
  inputClassName: '',
  inputDescription: '',
  inputDescriptionClassName: '',
  inputDescriptionStyle: {},
  inputStyle: {},
  label: '',
  labelClassName: '',
  labelStyle: {},
  onBlur: false,
  noErrorsDescription: false,
  onFocus: () => {},
  selectOptions: [],
  style: {},
  tabIndex: '0',
  validations: {},
  withOptionPlaceholder: false,
};

InputSelectWithErrors.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  customBootstrapClass: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  didCheckErrors: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  errorsClassName: PropTypes.string,
  errorsStyle: PropTypes.object,
  inputClassName: PropTypes.string,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  inputDescriptionClassName: PropTypes.string,
  inputDescriptionStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  labelClassName: PropTypes.string,
  labelStyle: PropTypes.object,
  name: PropTypes.string.isRequired,
  noErrorsDescription: PropTypes.bool,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  selectOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        params: PropTypes.object,
        value: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ])
  ),
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  validations: PropTypes.object,
  value: PropTypes.string.isRequired,
  withOptionPlaceholder: PropTypes.bool,
};

export default InputSelectWithErrors;
