import Ember from 'ember';

var QueueController = Ember.ArrayController.extend({
  itemController: 'ticket',
  openTickets: function() {
    return this.get('model').filter(function(ticket) {
      return ticket.get('open');
    });

  }.property('model.@each.open')
});

export default QueueController;
