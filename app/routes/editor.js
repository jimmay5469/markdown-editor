import Ember from 'ember';

const {
  get,
  Route,
  run: { debounce },
  set
} = Ember;

export default Route.extend({
  model() {
    return JSON.parse(localStorage.getItem('markdownPost'));
  },
  triggerSave() {
    debounce(this, this.updateLocalStorage, 1000);
  },
  updateLocalStorage() {
    localStorage.setItem('markdownPost', JSON.stringify({
      title: get(this, 'controller.model.title'),
      markdown: get(this, 'controller.model.markdown')
    }));
  },
  actions: {
    titleUpdated(title) {
      set(this, 'controller.model.title', title);
      this.triggerSave();
    },
    markdownUpdated(markdown) {
      set(this, 'controller.model.markdown', markdown);
      this.triggerSave();
    }
  }
});
