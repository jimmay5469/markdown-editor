import Ember from 'ember';
import marked from 'npm:marked';

export default Ember.Component.extend({
  value: '',
  htmlValue: Ember.computed('value', function() {
    return marked(this.get('value'));
  })
});
