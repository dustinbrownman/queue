/* globals moment */
import Ember from 'ember';

var StatisticsRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('ticket', {
      orderBy: 'createdAt',
      startAt: moment().startOf('day').valueOf()
    }, function(ticket) {
      return !ticket.open;
    });
  }
});

export default StatisticsRoute;
