import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  nestedInQueue: function() {
    return this.get('currentPath') === 'queue.ticket-details';
  }.property('currentPath'),
  tvBlackout: function() {
    return this.get('currentPath') === 'queue.tv';
  }.property('currentPath'),
  actions: {
    goBack: function() {
      this.transitionTo('queue');
    }
  }
});

export default ApplicationController;
