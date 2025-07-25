import { helper } from '@ember/component/helper';

export default helper(function getColValue([obj, key]) {
  return obj[key];
});