/* globals moment */
import Ember from 'ember';

var QueueRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('ticket', {
      orderBy: 'createdAt',
      startAt: moment().startOf('day').valueOf()
    }, function(ticket) {
      return ticket.get('open');
    });
  }
});

export default QueueRoute;
