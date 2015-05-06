/* globals moment */
import DS from 'ember-data';

var Ticket = DS.Model.extend({
  student: DS.attr('string'),
  open: DS.attr('boolean'),
  createdAt: DS.attr('number'),
  closedAt: DS.attr('number'),
  question: DS.attr('string'),

  waitTime: function() {
    var createdAt = moment(this.get('createdAt'));
    var closedAt = moment(this.get('closedAt'));
    return closedAt.diff(createdAt, 'seconds');
  }.property('createdAt', 'closedAt'),

  hour: function() {
    var hour = moment(this.get('createdAt')).format("H");
    return parseInt(hour);
  }.property('createdAt'),

  formattedHour: function() {
    return moment(this.get('createdAt')).format("ha");
  }.property('hour'),

  timeAgo: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property(),
});

export default Ticket;
