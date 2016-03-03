import Ember from 'ember';

export default Ember.Component.extend({
  contract: false,
  actions: {
    contractCard: function() {
      this.toggleProperty('contract');
    },
    showList: function() {
      console.log('hi');
    }
  }
});
