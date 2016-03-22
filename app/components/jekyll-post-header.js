import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  title: null,
  date: null,

  jsonFormattedDate: computed('date', function() {
    let date = this.get('date');
    return date.format();
  }),

  displayFormattedDate: computed('date', function() {
    let date = this.get('date');
    return date.format('MMM D, YYYY');
  })
});
