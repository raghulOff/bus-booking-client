import { module, test } from 'qunit';
import { setupTest } from 'bus-booking-client/tests/helpers';

module('Unit | Route | dev-home', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dev-home');
    assert.ok(route);
  });
});
