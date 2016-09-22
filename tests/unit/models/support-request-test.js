import { moduleForModel, test } from 'ember-qunit';

moduleForModel('support-request', 'Unit | Model | support request', {
  needs: []
});

test('valid', function(assert) {
  var SupportRequest = this.store().modelFor('support-request');


  assert.equal(SupportRequest.valid({ subject: 'first' }), true);
  assert.equal(SupportRequest.valid({}), false);
});
