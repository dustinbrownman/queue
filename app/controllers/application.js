import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  onQueue: function() {
    return this.get('currentPath') === 'queue';
  }.property('currentPath'),
  actions: {
    goBack: function() {
      console.log(this.get('currentPath'));
      this.transitionTo('queue');
    },
    hello: function() {
      alert('hello');
    }
  }
});

export default ApplicationController;
