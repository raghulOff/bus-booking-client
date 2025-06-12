import { module, test } from 'qunit';
import { setupTest } from 'bus-booking-client/tests/helpers';

module('Unit | Route | payment', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:payment');
    assert.ok(route);
  });
});
