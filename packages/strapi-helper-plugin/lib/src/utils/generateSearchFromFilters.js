import { isEmpty, toString } from 'lodash';

const generateSearchFromFilters = (filters, paramsToFilter = []) => {
  return Object.keys(filters)
    .filter(key => !paramsToFilter.includes(key) && !isEmpty(toString(filters[key])))
    .map(key => {
      let ret = `${key}=${encodeURIComponent(filters[key])}`;

      if (key === 'filters') {
        const formattedFilters = filters[key]
          .reduce((acc, curr) => {
            const key = curr.filter === '=' ? curr.name : `${curr.name}${curr.filter}`;
            acc.push(`${key}=${encodeURIComponent(curr.value)}`);

            return acc;
          }, [])
          .join('&');
        ret = formattedFilters;
      }

      return ret;
    })
    .join('&');
};

export default generateSearchFromFilters;
