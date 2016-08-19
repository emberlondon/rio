import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter', 'sort', 'order'],
  filter: '',
  sort: 'place',
  order: 'asc'
});
