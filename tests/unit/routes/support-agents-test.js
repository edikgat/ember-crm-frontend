import { moduleFor, test } from 'ember-qunit';
moduleFor('route:support-agents', 'support-agents Route', {

});

test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('set modelForAdapter', function(assert) {
  var session = {
    isAuthenticated: true,
    isUserSession: false
  };
  var route = this.subject();
  route.set('session', session);
  route.beforeModel();

  assert.equal(window.modelForAdapter, 'support-agent');
});
