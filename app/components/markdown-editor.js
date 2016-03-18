import Ember from 'ember';

export default Ember.Component.extend({
  title: 'An awesome post title',
  markdown: 'Hello __world__!',
  showPreview: false,
  actions: {
    togglePreview() {
      this.toggleProperty('showPreview');
    }
  }
});
