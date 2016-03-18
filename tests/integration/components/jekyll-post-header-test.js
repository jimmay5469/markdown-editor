import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jekyll-post-header', 'Integration | Component | jekyll post header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jekyll-post-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jekyll-post-header}}
      template block text
    {{/jekyll-post-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
