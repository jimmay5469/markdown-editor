import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: '',
  markdown: '',

  showEditor: true,
  showPreview: true,
  showJekyll: false,

  panelWidth: computed('showEditor', 'showPreview', 'showJekyll', function() {
    let paneVisibilities = this.getProperties('showEditor', 'showPreview', 'showJekyll');
    let visiblePaneCount = Object.keys(paneVisibilities).filter((key)=>paneVisibilities[key]).length;
    return (100/visiblePaneCount) - 1;
  }),

  actions: {
    togglePane(paneVisibility) {
      this.toggleProperty(paneVisibility);
    },
    valuesUpdated() {
      this.sendAction('onPostUpdate', this.get('title'), this.get('markdown'));
    }
  }
});
