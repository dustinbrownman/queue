import Ember from 'ember';

var StatisticsController = Ember.ArrayController.extend({
  displaySeconds: function() {
    return this.get('averageWaitTime') <= 120;
  }.property('model.@each.open'),

  todaysClosedTickets: function() {
    var this_day = moment().date();
    var this_month = moment().month();
    var this_year = moment().year();
    return this.get('model').filter(function(ticket) {
      var createdAt = moment(ticket.get('createdAt'));
      return createdAt.date() === this_day && createdAt.month() === this_month && createdAt.year() === this_year && !ticket.get('open');
    });
  }.property('model.@each.open'),

  numberOfTickets: function() {
    return this.get('todaysClosedTickets').length
  }.property('model.@each.open'),

  averageWaitTime: function() {
    var waitTimes = this.get('todaysClosedTickets').map(function(ticket) {
      var createdAt = moment(ticket.get('createdAt'));
      var closedAt = moment(ticket.get('closedAt'));
      return closedAt.diff(createdAt, 'seconds');
    });

    var averageTime = waitTimes.reduce(function(sum, next) {
      return sum + next;
    }) / waitTimes.length

    return Math.round(averageTime);
  }.property('model.@each.open'),

  averageWaitTimeInMinutes: function() {
    return Math.round((this.get('averageWaitTime') / 60) * 10) / 10 // this rounds the number to 1 decimal place
  }.property('model.@each.open'),

  graphData: function() {
    var graphData = []
    var todaysTickets = this.get('todaysClosedTickets');

    todaysTickets.forEach(function(ticket) {
      var formattedHour = moment(ticket.get('createdAt')).format("ha");

      dataPointExisits = graphData.some(function(dataPoint) {
        return dataPoint.hour === formattedHour;
      });

      if (dataPointExisits) {
        graphData.forEach(function(dataPoint) {

          if (dataPoint.hour === formattedHour) {

            dataPoint.tickets += 1
          }
        });
      } else {
        graphData.push({ hour: formattedHour, tickets: 1 });
      }
    });

    return graphData.sort(function(a, b) {
      if (a.hour.slice(-2) !== b.hour.slice(-2)) {
        if (a.hour.slice(-2) === 'am') {
          return -1;
        } else {
          return 1;
        }
      } else {
        var hour_a = parseInt(a.hour.slice(0, -2)) === 12 ? 0 : parseInt(a.hour.slice(0, -2));
        var hour_b = parseInt(b.hour.slice(0, -2)) === 12 ? 0 : parseInt(b.hour.slice(0, -2));
        return hour_a - hour_b;
      }
    });
  // needs to return something like this [{hour: '8am', tickets: 5}, {hour: '9am', tickets: 7}]
  }.property('model.@each.open')
});

export default StatisticsController;
