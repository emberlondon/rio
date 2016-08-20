import Ember from 'ember';
import CountryData from 'npm:country-data';

const NORMALIZED_NAMES = {
  'Great Britain': 'United Kingdom',
  'Russia': 'Russian Federation',
  'Chinese Taipei': 'Taiwan',
  'North Korea': 'Korea, Democratic People\'s Republic Of',
  'South Korea': 'Korea, Republic Of',
  'Iran': 'Iran, Islamic Republic Of',
  'Vietnam': 'Viet Nam',
  'Venezuela': 'Venezuela, Bolivarian Republic Of'
};

export function isoCode([name]/*, hash*/) {
  name = NORMALIZED_NAMES[name] || name;

  const results = CountryData.lookup.countries({ name });
  const result = results[0];

  return result && result.alpha2;
}

export default Ember.Helper.helper(isoCode);
