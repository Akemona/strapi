/*
 *
 * ListRow
 *
 */

import React from 'react';
import { map, size } from 'lodash';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Li from './Li';

function ListRow({ children, items, onClick, ...rest }) {
  const colNumber = size(items) !== 0 ? Math.floor(12 / size(items)) : 12;
  const data =
    children ||
    map(items, (value, key) => (
      <div className={value.className || `col-md-${colNumber}`} key={key}>
        {value.item}
      </div>
    ));

  return (
    <Li {...rest}>
      <div className={cn('subContainer', 'row')} onClick={onClick} role="button">
        {data}
      </div>
    </Li>
  );
}

ListRow.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  onClick: PropTypes.func,
};

ListRow.defaultProps = {
  children: (
    <div>
      <FormattedMessage id="components.ListRow.empty" />
    </div>
  ),
  items: [{ item: '' }],
  onClick: () => {},
};

export default ListRow;
