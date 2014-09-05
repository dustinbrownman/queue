/* globals moment */
import DS from 'ember-data';

var Ticket = DS.Model.extend({
  student: DS.attr('string'),
  open: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  closedAt: DS.attr('date'),
  question: DS.attr('string'),

  waitTime: function() {
    var createdAt = moment(this.get('createdAt'));
    var closedAt = moment(this.get('closedAt'));
    return closedAt.diff(createdAt, 'seconds');
  }.property('createdAt', 'closedAt')
});

export default Ticket;
