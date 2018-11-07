import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | installations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:installations');
    assert.ok(route);
  });
});
