import Ember from 'ember';

var HelpRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('ticket');
  }
});

export default HelpRoute;
