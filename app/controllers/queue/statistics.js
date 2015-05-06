import Ember from 'ember';

var StatisticsController = Ember.ArrayController.extend({
  displaySeconds: function() {
    return this.get('averageWaitTime') <= 120;
  }.property('model.@each.open'),

  numberOfTickets: function() {
    return this.get('model.length');
  }.property('model.@each.open'),

  averageWaitTime: function() {
    var waitTimes = this.get('model').map(function(ticket) {
      return ticket.get('waitTime');
    });

    var averageTime = waitTimes.reduce(function(sum, next) {
      return sum + next;
    }) / waitTimes.length;

    return Math.round(averageTime);
  }.property('model.@each.open'),

  averageWaitTimeInMinutes: function() {
    return Math.round((this.get('averageWaitTime') / 60) * 10) / 10; // this rounds the number to 1 decimal place
  }.property('model.@each.open'),

  graphData: function() {
    var graphData = [];
    var todaysTickets = this.get('model');

    todaysTickets.forEach(function(ticket) {
      var hourNumber = ticket.get('hour');
      var formattedHour = ticket.get('formattedHour');

      var dataPointExists = graphData.some(function(dataPoint) {
        return dataPoint.hourNumber === hourNumber;
      });

      if (dataPointExists) {
        graphData.forEach(function(dataPoint) {

          if (dataPoint.hourNumber === hourNumber) {

            dataPoint.tickets += 1;
          }
        });
      } else {
        graphData.push({ hourNumber: ticket.get('hour'), hour: formattedHour, tickets: 1 });
      }
    });

    return graphData.sort(function(a, b) {
      return a.hourNumber - b.hourNumber;
    });
  // needs to return something like this [{hour: '8am', tickets: 5}, {hour: '9am', tickets: 7}]
}.property('model.@each.open')
});

export default StatisticsController;
