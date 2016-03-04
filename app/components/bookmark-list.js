import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
  bookmarkList : Ember.inject.service(),
  showBookmarks : true,
  sorting: ['title:asc'],
  sortedContent: Em.computed.sort('bookmarks', 'sorting'),
  actions : {
    closeBookmarks(route) {
      this.attrs.closeBookmarks(route);
    },
    removeBookmark(route){
      this.get('bookmarkList').remove(route);
    }
  }
});
