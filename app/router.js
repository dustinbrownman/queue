import Ember from 'ember';

var Router = Ember.Router.extend({
  location: QueueENV.locationType
});

Router.map(function() {
});

export default Router;
