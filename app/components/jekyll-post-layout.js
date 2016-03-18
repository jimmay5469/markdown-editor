import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  date: Ember.computed(function() {
    return new Date();
  }).volatile()
});
