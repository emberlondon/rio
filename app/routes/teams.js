import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Route.extend({
  model() {
    return ajax('/api/v1/medals');
  }
});
