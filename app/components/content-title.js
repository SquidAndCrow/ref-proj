import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    contractCard: function(){
      this.sendAction('contractCard');
    }
  }
});
