import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return JSON.parse(localStorage.getItem('markdownPost'));
  },
  updateLocalStorage() {
    localStorage.setItem('markdownPost', JSON.stringify({
      title: this.get('controller.model.title'),
      markdown: this.get('controller.model.markdown')
    }));
  },
  actions: {
    titleUpdated(title) {
      this.set('controller.model.title', title);
      this.updateLocalStorage();
    },
    markdownUpdated(markdown) {
      this.set('controller.model.markdown', markdown);
      this.updateLocalStorage();
    }
  }
});
