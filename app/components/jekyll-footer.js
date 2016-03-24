import Ember from 'ember';
import ENV from 'markdown-editor/config/environment';

const { jekyll } = ENV.APP;
const { Component } = Ember;

export default Component.extend({
  jekyll: jekyll
});
