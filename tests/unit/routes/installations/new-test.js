import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | installations/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:installations/new');
    assert.ok(route);
  });
});
