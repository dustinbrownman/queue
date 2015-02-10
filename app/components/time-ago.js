import Ember from 'ember';

var TimeAgo = Ember.Component.extend({
  now: Date.now(),

  didInsertElement: function() {
    this.startGlobalTime();
  },

  startGlobalTime: function() {
    this.set('now', Date.now());
    Ember.run.later(this, this.startGlobalTime, 2000);
  },

  timeAgo: function() {
    return moment(this.get('time')).fromNow();
  }.property('now'),

  formattedTime: function() {
    return moment(this.get('time')).calendar();
  }.property()
});

export default TimeAgo;
