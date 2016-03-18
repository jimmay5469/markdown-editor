import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jekyll-default-layout', 'Integration | Component | jekyll default layout', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jekyll-default-layout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jekyll-default-layout}}
      template block text
    {{/jekyll-default-layout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
