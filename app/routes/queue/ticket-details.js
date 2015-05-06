import Ember from 'ember';

var TicketDetailsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('ticket', params.ticket_id);
  }
});

export default TicketDetailsRoute;
