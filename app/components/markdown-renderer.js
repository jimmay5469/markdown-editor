import Ember from 'ember';
import marked from 'npm:marked';

const {
  Component,
  computed,
  getWithDefault
} = Ember;

export default Component.extend({
  value: '',

  htmlValue: computed('value', function() {
    let value = getWithDefault(this, 'value', '');
    return marked(value);
  })
});
