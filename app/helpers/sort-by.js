import { helper } from 'ember-helper';

export function sortBy([list, key, dir]) {
  let result = list.sortBy(key);

  if (dir === 'desc') {
    result.reverse();
  }

  return result;
}

export default helper(sortBy);
