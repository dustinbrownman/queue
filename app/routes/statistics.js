import Ember from 'ember';

var StatisticsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('ticket');
  }
});

export default StatisticsController;
