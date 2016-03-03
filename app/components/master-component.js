import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions : {
    openBookmarks() {
      this.set('showBookmarks', true);
    },
    closeBookmarks(route){
      this.set('showBookmarks', false);
      this.get('routing').transitionTo(route);
    }
  }
});
