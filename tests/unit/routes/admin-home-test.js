import { module, test } from 'qunit';
import { setupTest } from 'bus-booking-client/tests/helpers';

module('Unit | Route | admin-home', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin-home');
    assert.ok(route);
  });
});
