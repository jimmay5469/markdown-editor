import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: null,
  markdown: null,
  titleUpdated: null,
  markdownUpdated: null,

  showEditor: true,
  showPreview: true,
  showJekyll: false,

  date: computed(function() {
    return moment();
  }).volatile(),

  panelWidth: computed('showEditor', 'showPreview', 'showJekyll', function() {
    let paneVisibilities = this.getProperties('showEditor', 'showPreview', 'showJekyll');
    let visiblePaneCount = Object.keys(paneVisibilities).filter((key)=>paneVisibilities[key]).length;
    return (100/visiblePaneCount) - 1;
  }),
  panelStyle: computed('panelWidth', function() {
    let panelWidth = this.get('panelWidth');
    return Ember.String.htmlSafe(`width: ${panelWidth}%;`);
  }),

  cleanupMarkdown(markdown) {
    return markdown.trim();
  },

  actions: {
    togglePane(paneVisibility) {
      this.toggleProperty(paneVisibility);
    }
  }
});
