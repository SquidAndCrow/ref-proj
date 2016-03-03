import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleList : function(){
      this.toggleProperty('show');
    }
  }
});
