import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jekyll-post-layout', 'Integration | Component | jekyll post layout', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jekyll-post-layout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jekyll-post-layout}}
      template block text
    {{/jekyll-post-layout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
