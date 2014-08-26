/* globals Firebase */
import DS from 'ember-data';

var ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://ember-queue.firebaseio.com')
});

export default ApplicationAdapter;
