import { upperFirst } from 'lodash';

const generateResultsObject = (array) =>
  array.reduce((acc, current) => {
    acc[`can${upperFirst(current.permissionName)}`] = current.hasPermission;

    return acc;
  }, {});

export default generateResultsObject;
