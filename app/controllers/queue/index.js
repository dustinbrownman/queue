import Ember from 'ember';

var QueueIndex = Ember.ArrayController.extend({
  needs: ['queue'],
  openTickets: function() {
    return this.get('controllers.queue.openTickets');
  }.property("this.controllers.queue.openTickets")
});

export default QueueIndex;
