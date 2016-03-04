import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  pubsub : Ember.inject.service(),
  add(title, route) {
    var newBookmark = this.get('store').createRecord('bookmark', {
      title: title,
      route: route
    });
    newBookmark.save();
  },
  isBookmarked(route, element){
    this.get('store').query('bookmark', {filter : {route : route }}).then(function(bookmark){
      bookmark.forEach(function(item) {
        if (route === item.get('route')) {
          element.set('isBookmarked', true);
        }
      });
    });
  },
  remove(route) {
    let pubsub = this.get('pubsub');

    this.get('store').query('bookmark', {filter : {route : route }}).then(function(bookmark){
      bookmark.forEach(function(item) {
        if (route === item.get('route')) {
          item.destroyRecord().then(function(){
            pubsub.trigger('bookmark-removed');
          });
        }
      });
    });
  }
});
