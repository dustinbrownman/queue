import Ember from 'ember';

var TicketView = Ember.View.extend({
  scrolling: false,
  touchEnd: function(event) {
    if (!this.get('scrolling')) {
      this.get('controller').send('toggleExpanded');
    }
    this.set('scrolling', false);
  },
  touchMove: function(event) {
    this.set('scrolling', true);
  },
  click: function() {
    this.get('controller').send('toggleExpanded');
  }
});

export default TicketView;
