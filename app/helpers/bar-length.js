import Ember from 'ember';

export function barLength([num]/*, hash*/) {
  return 5 * num;
}

export default Ember.Helper.helper(barLength);
