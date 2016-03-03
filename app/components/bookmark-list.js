import Ember from 'ember';

export default Ember.Component.extend({
  showBookmarks : true,
  sorting: ['title:asc'],
  sortedContent: Em.computed.sort('bookmarks', 'sorting'),
  actions : {
    closeBookmarks(route) {
      this.attrs.closeBookmarks(route);
    }
  }
});
