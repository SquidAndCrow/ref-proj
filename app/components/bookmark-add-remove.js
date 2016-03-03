import Ember from 'ember';

export default Ember.Component.extend({
  bookmarks : Ember.inject.service('bookmark-list'),
  actions : {
    addBookmark : function(title, route) {
      this.get('bookmarks').add(title, route);
      this.set('isBookmarked', true);
    },
    removeBookmark : function(route) {
      this.get('bookmarks').remove(route);
      this.set('isBookmarked', false);
    }
  },
  didInsertElement() {
    var r = this.attrs.route.value;
    this.get('bookmarks').isBookmarked(r, this);
  }
});
