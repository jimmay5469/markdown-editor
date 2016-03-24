import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const MarkdownEditorRouter = Router.extend({
  location: config.locationType
});

MarkdownEditorRouter.map(function() {
  this.route('editor', { path: '/' });
});

export default MarkdownEditorRouter;
