import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  title: '',

  date: computed(function() {
    return moment();
  }),

  jsonFormattedDate: computed('date', function() {
    let date = this.get('date');
    return date.format();
  }),

  displayFormattedDate: computed('date', function() {
    let date = this.get('date');
    return date.format('MMM D, YYYY');
  })
});
