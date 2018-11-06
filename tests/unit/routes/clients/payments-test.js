import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clients/payments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clients/payments');
    assert.ok(route);
  });
});
