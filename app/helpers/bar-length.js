import Ember from 'ember';
import { htmlSafe } from 'ember-string';

export function barLength([num]/*, hash*/) {
  return htmlSafe(`width: ${30 + (4 * num)}px`);
}

export default Ember.Helper.helper(barLength);
