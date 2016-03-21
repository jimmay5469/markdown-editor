import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['RawJekyllPostComponent'],

  title: '',
  markdown: '',

  jekyllFilename: computed('title', function() {
    let title = this.get('title');
    return `${moment().format('YYYY-MM-DD')}-${Ember.String.dasherize(title.toLowerCase())}.md`;
  }),

  formattedDate: computed(function() {
    return moment().format('YYYY-MM-DD HH:mm:ss ZZ');
  }),

  trimmedMarkdown: computed('markdown', function() {
    let markdown = this.get('markdown');
    return markdown.trim();
  })
});
