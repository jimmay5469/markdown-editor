import Ember from 'ember';
import ENV from 'markdown-editor/config/environment';

const { $ } = Ember;
const { mainCss } = ENV.APP.jekyll;

export function initialize() {
  $('head').append(`<link rel="stylesheet" href="${mainCss}" />`);
}

export default {
  name: 'jekyll-css',
  initialize
};
