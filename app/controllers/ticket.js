/* globals moment */
import Ember from 'ember';

var TicketController = Ember.ObjectController.extend({
  needs: ['application'],
  isExpanded: false,
  timeAgo: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('controllers.application.now'),
  actions: {
    closeTicket: function() {
      this.get('model').setProperties({'closedAt': new Date(), 'open': false}).save();
    },
    expand: function() {
      this.set('isExpanded', true);
    },
    collapse: function() {
      this.set('isExpanded', false);
    },
    toggleExpanded: function() {
      var currentState = this.get('isExpanded');
      this.set('isExpanded', !currentState);
    }
  }
});

export default TicketController;
