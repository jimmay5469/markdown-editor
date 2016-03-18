import Ember from 'ember';
import JekyllCssInitializer from 'markdown-editor/initializers/jekyll-css';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | jekyll css', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  JekyllCssInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
