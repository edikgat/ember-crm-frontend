import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('closed-support-requests-report', 'Integration | Component | closed support requests report', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{closed-support-requests-report}}`);

  assert.equal(this.$().text().trim(), "Download Report");

  this.render(hbs`
    {{#closed-support-requests-report}}
      template block text
    {{/closed-support-requests-report}}
  `);

  assert.equal(this.$().text().trim(), "Download Report");
});
