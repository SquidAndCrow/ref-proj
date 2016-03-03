import Ember from 'ember';
import InjectStoreIntoComponentsInitializer from 'reference/initializers/inject-store-into-components';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | inject store into components', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  InjectStoreIntoComponentsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
