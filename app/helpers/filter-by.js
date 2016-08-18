import Ember from 'ember';
import { isBlank } from 'ember-utils';

export function filterBy([list, key, value]) {
  if (isBlank(value)) { return list; }

  let regex = new RegExp(value, 'i');

  return list.filter(team => regex.test(team[key]));
}

export default Ember.Helper.helper(filterBy);
