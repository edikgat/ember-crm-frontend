import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('fullName', function(assert) {
  var user = this.subject({ firstName: 'first', lastName: 'User' });


  assert.equal(user.get('fullName'), 'first User');
});


test('valid', function(assert) {
  var User = this.store().modelFor('user');


  assert.equal(User.valid({ firstName: 'first', lastName: 'User', email: 'email@e.com' }), true);
  assert.equal(User.valid({ firstName: 'first', lastName: 'User'}), false);
});
