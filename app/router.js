import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('swd', function() {
    this.route('race', function() {
      this.route('android');
      this.route('atlantean');
    });
    this.route('traits');
  });
});

export default Router;
