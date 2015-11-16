import Ember from 'ember';
import luhn from '../utils/luhn';

export function ccLuhn(params /*, hash*/) {
  let ccStr = params[0] || '';

  let arr = [];
  for (let i = 0; i < ccStr.length; i++) {
    arr.push(parseInt(ccStr[i], 10));
  }

  return luhn(ccStr);
}

export default Ember.Helper.helper(ccLuhn);
