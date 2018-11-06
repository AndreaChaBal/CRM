import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | appointment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:appointment');
    assert.ok(route);
  });
});
