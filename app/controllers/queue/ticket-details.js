import Ember from 'ember';

var TicketDetailsController = Ember.Controller.extend({
  actions: {
    closeTicket: function() {
      var controller = this;
      this.get('model').setProperties({'closedAt': new Date(), 'open': false})
      .save().then(function() {
        controller.transitionTo('queue.index');
      });
    }
  }
});

export default TicketDetailsController;
