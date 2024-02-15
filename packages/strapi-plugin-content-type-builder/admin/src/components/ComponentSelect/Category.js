import React from 'react';
import PropTypes from 'prop-types';
import UpperFirst from '../UpperFirst';
import CategoryName from './CategoryName';

function Category({ categoryName }) {
  return (
    <CategoryName>
      <UpperFirst content={categoryName} />
    </CategoryName>
  );
}

Category.defaultProps = {
  categoryName: '',
};

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
