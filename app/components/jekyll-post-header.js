import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  title: null,
  date: null,

  jsonFormattedDate: computed('date', function() {
    let date = get(this, 'date');
    return date.format();
  }),

  displayFormattedDate: computed('date', function() {
    let date = get(this, 'date');
    return date.format('MMM D, YYYY');
  })
});
