import Ember from 'ember';
import CountryData from 'npm:country-data';

const NORMALIZED_NAMES = {
  'Great Britain': 'United Kingdom'
}

export function isoCode([countryName]/*, hash*/) {
  countryName = NORMALIZED_NAMES[countryName] || countryName;
  
  const results = CountryData.lookup.countries({name: countryName})
  const result = results[0];

  return result && result.alpha2;
}

export default Ember.Helper.helper(isoCode);
