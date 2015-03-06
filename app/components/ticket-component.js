import Ember from 'ember';

var TicketComponent = Ember.Component.extend({
  isExpanded: false,

  scrolling: false,

  touchMove: function() {
    this.set('scrolling', true);
  },

  touchEnd: function(event) {
    event.preventDefault(); // because chrome mobile likes to do things differently
    if (!this.get('scrolling')) {
      this.toggleExpanded();
    }
    this.set('scrolling', false);
  },

  click: function() {
    this.toggleExpanded();
  },

  toggleExpanded: function() {
    var isExpanded = this.get('isExpanded');
    this.set('isExpanded', !isExpanded);
  },

  actions: {
    closeTicket: function() {
      this.get('ticket').setProperties({'closedAt': new Date(), 'open': false}).save();
    }
  }
});

export default TicketComponent;
