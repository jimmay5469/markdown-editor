import Ember from 'ember';
import computed from 'ember-computed-decorators';  // jshint ignore:line
import marked from 'npm:marked';

export default Ember.Component.extend({
  value: '',

  /* jshint ignore:start */
  @computed('value')
  /* jshint ignore:end */
  htmlValue(value='') {
    return marked(value);
  }
});
