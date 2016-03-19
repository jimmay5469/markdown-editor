import Ember from 'ember';
import marked from 'npm:marked';

const { computed } = Ember;

export default Ember.Component.extend({
  value: '',

  htmlValue: computed('value', function() {
    let value = this.getWithDefault('value', '');
    return marked(value);
  })
});
