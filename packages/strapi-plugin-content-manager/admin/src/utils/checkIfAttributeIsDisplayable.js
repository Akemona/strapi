import { toLower } from 'lodash';

const checkIfAttributeIsDisplayable = (attribute) => {
  const type = attribute.type;

  if (type === 'relation') {
    return !toLower(attribute.relationType).includes('morph');
  }

  return !['json', 'component', 'dynamiczone', 'richtext'].includes(type) && !!type;
};

export default checkIfAttributeIsDisplayable;
