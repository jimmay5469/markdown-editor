import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return JSON.parse(localStorage.getItem('markdownPost'));
  },
  actions: {
    postUpdated(title, markdown) {
      localStorage.setItem('markdownPost', JSON.stringify({ title, markdown }));
    }
  }
});
