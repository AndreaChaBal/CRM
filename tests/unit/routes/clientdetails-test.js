import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clientdetails', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clientdetails');
    assert.ok(route);
  });
});
