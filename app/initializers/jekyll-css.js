import Ember from 'ember';
import ENV from 'markdown-editor/config/environment';

const { $ } = Ember;
const { jekyllCss } = ENV;

export function initialize() {
  $('head').append(`<link rel="stylesheet" href="${jekyllCss}" />`);
}

export default {
  name: 'jekyll-css',
  initialize
};
