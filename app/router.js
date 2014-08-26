import Ember from 'ember';

var Router = Ember.Router.extend({
  location: QueueENV.locationType
});

Router.map(function() {
  this.route('help', { path: '/' });
  this.route('ticket', { path: '/ticket/:ticket_id' });
  this.route('queue');
  this.route('statistics');
});

export default Router;
