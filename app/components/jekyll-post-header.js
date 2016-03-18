import Ember from 'ember';
import computed from 'ember-computed-decorators';  // jshint ignore:line

export default Ember.Component.extend({
  title: '',

  /* jshint ignore:start */
  @computed
  /* jshint ignore:end */
  date() {
    return new Date();
  }
});
