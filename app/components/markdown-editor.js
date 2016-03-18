import Ember from 'ember';
import computed from 'ember-computed-decorators';  // jshint ignore:line

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: 'An awesome post title',
  markdown: 'Hello __world__!',
  showEditor: true,
  showPreview: true,

  /* jshint ignore:start */
  @computed('showEditor', 'showPreview')
  /* jshint ignore:end */
  panelWidth(showEditor, showPreview) {
    if (showEditor && showPreview) {
      return 49;
    }
    else {
      return 100;
    }
  },

  actions: {
    toggleEditor() {
      this.toggleProperty('showEditor');
    },
    togglePreview() {
      this.toggleProperty('showPreview');
    }
  }
});
