import Ember from 'ember';
import ENV from 'markdown-editor/config/environment';

const { jekyll } = ENV.APP;

export default Ember.Component.extend({
  jekyll: jekyll
});
