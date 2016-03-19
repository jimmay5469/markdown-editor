import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: '',
  markdown: '',

  jekyllFilename: computed('title', function() {
    let title = this.get('title');
    return `${moment().format('YYYY-MM-DD')}-${Ember.String.dasherize(title.toLowerCase())}.md`;
  }),

  jekyllPost: computed('title', 'markdown', function() {
    let { title, markdown } = this.getProperties('title', 'markdown');
    return `---
layout: post
title: "${title}"
date: ${moment().format('YYYY-MM-DD HH:mm:ss ZZ')}
---
{% raw %}
${markdown.trim()}
{% endraw %}`;
  }),

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
