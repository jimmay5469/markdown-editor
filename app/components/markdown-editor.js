import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: 'An awesome post title',
  markdown: 'Hello __world__!',
  showEditor: true,
  showPreview: true,
  actions: {
    toggleEditor() {
      this.toggleProperty('showEditor');
    },
    togglePreview() {
      this.toggleProperty('showPreview');
    }
  }
});
