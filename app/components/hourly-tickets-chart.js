import Ember from 'ember';

var HourlyTicketsChartComponent = Ember.Component.extend({
  graph: null,
  tagName: 'div',
  classNames: ['hourly-tickets-graph'],

  didInsertElement: function() {
    var element = this.get('element').id;
    var self = this;

    this.graph = new Morris.Line({
      element: element,
      data: this.get('data'),
      xkey: 'hour',
      ykeys: ['tickets'],
      labels: ['Tickets'],
      parseTime: false,
      lineColors: ['#f05a26'],
      resize: true
    });
  }
});

export default HourlyTicketsChartComponent;
