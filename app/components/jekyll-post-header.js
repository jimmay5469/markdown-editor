import Ember from 'ember';
import computed from 'ember-computed-decorators';  // jshint ignore:line
import moment from 'moment';

export default Ember.Component.extend({
  title: '',

  /* jshint ignore:start */
  @computed
  /* jshint ignore:end */
  date() {
    return moment();
  },

  /* jshint ignore:start */
  @computed('date')
  /* jshint ignore:end */
  jsonFormattedDate(date) {
    return date.format();
  },

  /* jshint ignore:start */
  @computed('date')
  /* jshint ignore:end */
  displayFormattedDate(date) {
    return date.format('MMM D, YYYY');
  }
});
