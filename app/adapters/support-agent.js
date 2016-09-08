import DS from 'ember-data';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api/support_agents/v1',
  authorizer: 'authorizer:support-agent'
});
