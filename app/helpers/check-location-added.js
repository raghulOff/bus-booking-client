import { helper } from '@ember/component/helper';

export default helper(function checkLocationAdded([array, value]) {
  return Array.isArray(array) && array.includes(value);
});
