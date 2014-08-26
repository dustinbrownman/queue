import Ember from 'ember';

var QueueRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('ticket');
  }
});

export default QueueRoute;
