import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function(){
    $('.scroll-pane').mCustomScrollbar({
      scrollInertia: 100,
      scrollbarPosition: "inside"
    });
  },
  actions : {
    contractCard: function(){
      this.sendAction('contractCard');
    }
  }
});
