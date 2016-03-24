import Ember from 'ember';

const {
  Component,
  computed,
  get,
  getProperties,
  String: { dasherize }
} = Ember;

export default Component.extend({
  classNames: ['RawJekyllPostComponent'],

  title: null,
  markdown: null,
  date: null,

  jekyllFilename: computed('date', 'title', function() {
    let { date, title } = getProperties(this, 'date', 'title');
    return `${date.format('YYYY-MM-DD')}-${dasherize(title.replace(/[^\w\s]/gi, '').toLowerCase())}.md`;
  }),

  formattedDate: computed('date', function() {
    let date = get(this, 'date');
    return date.format('YYYY-MM-DD HH:mm:ss ZZ');
  })
});
