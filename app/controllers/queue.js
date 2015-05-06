import Ember from 'ember';

var QueueController = Ember.ArrayController.extend({
  itemController: 'ticket',
  openTickets: function() {
    return this.get('model');
  }.property('model.@each.open')
});

export default QueueController;
