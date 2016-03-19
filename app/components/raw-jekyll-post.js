import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
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
  })
});
