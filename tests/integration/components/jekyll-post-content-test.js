import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jekyll-post-content', 'Integration | Component | jekyll post content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jekyll-post-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jekyll-post-content}}
      template block text
    {{/jekyll-post-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
