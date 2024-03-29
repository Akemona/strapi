/**
 *
 * WysiwygDropUpload
 *
 */

import React from 'react';
import Label from './Label';

function WysiwygDropUpload(props) {
  return (
    <Label {...props}>
      <input onChange={() => {}} type="file" tabIndex="-1" />
    </Label>
  );
}

export default WysiwygDropUpload;
