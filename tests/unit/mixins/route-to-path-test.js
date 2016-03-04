import Ember from 'ember';
import RouteToPathMixin from 'reference/mixins/route-to-path';
import { module, test } from 'qunit';

module('Unit | Mixin | route to path');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteToPathObject = Ember.Object.extend(RouteToPathMixin);
  let subject = RouteToPathObject.create();
  assert.ok(subject);
});
