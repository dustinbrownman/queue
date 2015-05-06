import Ember from 'ember';

var TicketComponent = Ember.Component.extend({
  scrolling: false,

  touchMove: function() {
    this.set('scrolling', true);
  },

  touchEnd: function(event) {
    event.preventDefault(); // because chrome mobile likes to do things differently
    if (!this.get('scrolling')) {
      this.transitionToTicket();
    }
    this.set('scrolling', false);
  },

  click: function() {
    this.transitionToTicket();
  },

  transitionToTicket: function() {
    var ticket = this.get('ticket');
    var controller = this.get('queueController');
    controller.transitionToRoute('queue.ticket-details', ticket);
  },

  actions: {
    closeTicket: function() {
      this.get('ticket').setProperties({'closedAt': new Date(), 'open': false}).save();
    }
  }
});

export default TicketComponent;
