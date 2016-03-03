import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bookmark-add-remove', 'Integration | Component | bookmark add remove', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bookmark-add-remove}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bookmark-add-remove}}
      template block text
    {{/bookmark-add-remove}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
