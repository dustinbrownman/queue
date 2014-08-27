import Ember from 'ember';

var QueueController = Ember.ArrayController.extend({
  itemController: 'ticket',
  tickets: function() {
    var openTickets = this.get('model').filter(function(ticket) {
      return ticket.get('open');
    });

    var orderedTickets = openTickets.sort(function(a, b) {
      if (a.get('createdAt') > b.get('createdAt')) {
        return 1;
      } else {
        return -1;
      }
    });

    return orderedTickets;
  }.property('model.@each.open')
});

export default QueueController;
