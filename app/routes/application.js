import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  setupController:function(){
    this.startGlobalTime();
  },
  startGlobalTime: function() {
    var controller = this.get('controller');
    controller.set('now', Date.now());
    Ember.run.later(this, this.startGlobalTime, 2000);
  }
});

export default ApplicationRoute;
