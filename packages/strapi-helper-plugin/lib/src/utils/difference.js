import { isEqual, transform, isObject } from 'lodash';

function difference(object, base) {
  function changes(object, base) {
    return transform(object, function (result, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
      }
    });
  }

  return changes(object, base);
}

export default difference;
