import DS from 'ember-data';

var Ticket = DS.Model.extend({
  student: DS.attr('string'),
  open: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  closedAt: DS.attr('date'),
  question: DS.attr('string')
});

export default Ticket;
