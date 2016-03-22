import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['RawJekyllPostComponent'],

  title: null,
  markdown: null,
  date: null,

  jekyllFilename: computed('date', 'title', function() {
    let { date, title } = this.getProperties('date', 'title');
    return `${date.format('YYYY-MM-DD')}-${Ember.String.dasherize(title.replace(/[^\w\s]/gi, '').toLowerCase())}.md`;
  }),

  formattedDate: computed('date', function() {
    let date = this.get('date');
    return date.format('YYYY-MM-DD HH:mm:ss ZZ');
  })
});
