import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return JSON.parse(localStorage.getItem('markdownPost'));
  },
  triggerSave() {
    Ember.run.debounce(this, this.updateLocalStorage, 1000);
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
      this.triggerSave();
    },
    markdownUpdated(markdown) {
      this.set('controller.model.markdown', markdown);
      this.triggerSave();
    }
  }
});
