import Ember from 'ember';

export function barLength([num]/*, hash*/) {
  return 30 + (4 * num);
}

export default Ember.Helper.helper(barLength);
