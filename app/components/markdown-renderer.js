import Ember from 'ember';
import marked from 'npm:marked';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  value: '',

  htmlValue: computed('value', function() {
    let value = this.getWithDefault('value', '');
    return marked(value);
  })
});
