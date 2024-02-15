import React from 'react';
import SizedInput from '../../SizedInput';

function NameInput(inputProps) {
  return <SizedInput name="name" type="text" {...inputProps} />;
}

export default NameInput;
