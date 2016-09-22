import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';
moduleFor('route:users-support-requests', 'users-support-requests Route', {

});

test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});


test('it returns a list of requests', function(assert) {
  var store = {
    findAll: function() {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve([
          {id: 1, subject: 'Damien'},
          {id: 2, subject: 'Dave'}
        ]);
      });
    }
  };
  var route = this.subject();
  route.set('store', store);
  assert.deepEqual(route.model()._result, [
    {id: 1, subject: 'Damien'},
    {id: 2, subject: 'Dave'}
  ]);
});
