import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  user_id: DS.attr('string'),
  status: DS.attr('string', { defaultValue: 'open' }),
  notes: DS.attr('string'),
  userName: DS.attr('string'),
}).reopenClass({
  STATUSES: ['open', 'closed', 'canceled'],

  valid: function(fields) {
    return Boolean(fields.subject);
  }
});
