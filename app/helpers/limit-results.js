import Ember from 'ember';

export function limitResults([results, limit]) {
  return results.slice(0, limit);
}

export default Ember.Helper.helper(limitResults);
