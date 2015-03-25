import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('ticket', params.ticket_id)
  }
});
