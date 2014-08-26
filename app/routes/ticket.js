import Ember from 'ember';

var TicketRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('ticket', params.ticket_id);
  },
  renderTemplate: function() {
    this.render('queued');
  }
});

export default TicketRoute;
