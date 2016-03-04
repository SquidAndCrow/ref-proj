import Ember from 'ember';
import InitializerInitializer from 'reference/initializers/initializer';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | initializer', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  InitializerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
