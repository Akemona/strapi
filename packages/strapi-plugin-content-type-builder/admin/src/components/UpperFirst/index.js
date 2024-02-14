import PropTypes from 'prop-types';
import { upperFirst } from 'lodash';

function UpperFirst({ content }) {
  return upperFirst(content)
}

UpperFirst.defaultProps = {
  content: null,
};

UpperFirst.propTypes = {
  content: PropTypes.string,
};

export default UpperFirst;
