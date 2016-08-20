import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('team-card', 'Integration | Component | team card', {
  integration: true
});

test('it renders', function(assert) {
  this.set('team', {
    id: 'united-states',
    country_name: 'United States'
  });

  this.render(hbs`{{team-card team=team}}`);

  assert.equal(this.$().text().trim(), 'United States');
});
