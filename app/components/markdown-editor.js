import Ember from 'ember';
import computed from 'ember-computed-decorators';  // jshint ignore:line
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['MarkdownEditorComponent'],

  title: '',
  markdown: '',

  /* jshint ignore:start */
  @computed('title')
  /* jshint ignore:end */
  jekyllFilename(title) {
    return `${moment().format('YYYY-MM-DD')}-${Ember.String.dasherize(title.toLowerCase())}.md`;
  },

  /* jshint ignore:start */
  @computed('title', 'markdown')
  /* jshint ignore:end */
  jekyllPost(title, markdown) {
    return `---
layout: post
title: "${title}"
date: ${moment().format('YYYY-MM-DD HH:mm:ss ZZ')}
---
{% raw %}
${markdown.trim()}
{% endraw %}`;
  },

  showEditor: true,
  showPreview: true,
  showJekyll: false,

  /* jshint ignore:start */
  @computed('showEditor', 'showPreview', 'showJekyll')
  /* jshint ignore:end */
  panelWidth(showEditor, showPreview, showJekyll) {
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
  },

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
