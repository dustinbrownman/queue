/* globals Firebase */
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://ember-queue.firebaseio.com')
});
