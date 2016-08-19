import { helper } from 'ember-helper';
import { A } from 'ember-array/utils';

export function sortBy([list, key, dir]) {
  let result = [...list];

  result.sort(({ [key]: a }, { [key]: b}) => a === b ? 0 : a < b ? -1 : 1);

  if (dir === 'desc') { result.reverse(); }

  return result;
}

export default helper(sortBy);
