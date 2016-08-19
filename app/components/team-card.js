import Ember from 'ember';
import computed from 'ember-computed';
import { next } from 'ember-runloop';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  counts: computed('open', 'team.{gold_count,silver_count,bronze_count}', function() {
    if (this.get('open')) {
      let {
        gold_count,
        silver_count,
        bronze_count
      } = this.get('team');

      return {
        gold: gold_count,
        silver: silver_count,
        bronze: bronze_count
      };
    } else {
      return {
        gold: 0,
        silver: 0,
        bronze: 0
      };
    }
  }),

  didEnterViewport() {
    next(() => this.set('open', true));
  }
});
