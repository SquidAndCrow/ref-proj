import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkList : Ember.inject.service('bookmark-list'),
  pubsub: Ember.inject.service('pubsub'),
  onRemoveBookmarkFromList(){
    console.log('removed');
  },
  actions : {
    addBookmark(title, route) {
      this.get('bookmarkList').add(title, route);
      this.set('isBookmarked', true);
    },
    removeBookmark(route) {
      this.get('bookmarkList').remove(route);
      this.set('isBookmarked', false);
    }
  },
  checkIfBookmarked() {
    this.set('isBookmarked', false);
    var r = this.attrs.route.value;
    this.get('bookmarkList').isBookmarked(r, this);
  },
  didInsertElement() {
    var r = this.attrs.route.value;
    this.get('bookmarkList').isBookmarked(r, this);
  },
  init() {
    this._super(...arguments);
    this.get('pubsub').on('bookmark-removed', this, 'checkIfBookmarked');
  },
  willDestroyElement() {
    this.get('pubsub').off('bookmark-removed', this, 'checkIfBookmarked');
  }

});
