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
    let { showEditor, showPreview, showJekyll } = this.getProperties('showEditor', 'showPreview', 'showJekyll');
    let panes = 0;
    if (showEditor) {
      panes++;
    }
    if (showPreview) {
      panes++;
    }
    if (showJekyll) {
      panes++;
    }
    return (100/panes) - 1;
  }),

  actions: {
    toggleEditor() {
      this.toggleProperty('showEditor');
    },
    togglePreview() {
      this.toggleProperty('showPreview');
    },
    toggleJekyll() {
      this.toggleProperty('showJekyll');
    },
    valuesUpdated() {
      this.sendAction('onPostUpdate', this.get('title'), this.get('markdown'));
    }
  }
});
