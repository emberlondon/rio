import { isoCode } from 'rio/helpers/iso-code';
import { module, test } from 'qunit';

module('Unit | Helper | iso code');

test('it works', function(assert) {
  assert.equal(isoCode(['United States']), 'US');
  assert.equal(isoCode(['North Korea']), 'KP');
  assert.equal(isoCode(['South Korea']), 'KR');
  assert.equal(isoCode(['Iran']), 'IR');
  assert.equal(isoCode(['Vietnam']), 'VN');
  assert.equal(isoCode(['Venezuela']), 'VE');
});
