import Ember from 'ember';
import moment from 'moment';

const {
  Component,
  computed,
  get,
  getProperties,
  String: { htmlSafe }
} = Ember;

export default Component.extend({
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
    let paneVisibilities = getProperties(this, 'showEditor', 'showPreview', 'showJekyll');
    let visiblePaneCount = Object.keys(paneVisibilities).filter((key)=>paneVisibilities[key]).length;
    return (100/visiblePaneCount) - 1;
  }),
  panelStyle: computed('panelWidth', function() {
    let panelWidth = get(this, 'panelWidth');
    return htmlSafe(`width: ${panelWidth}%;`);
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
