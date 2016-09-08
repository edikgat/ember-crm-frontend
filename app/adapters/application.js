import DS from 'ember-data';

// export default DS.ActiveModelAdapter.extend({
//   namespace: 'api/users/v1'
// });
// import ActiveModelAdapter from 'active-model-adapter';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// export default ActiveModelAdapter.extend(DataAdapterMixin, {
//   namespace: 'api/users/v1'//,
//   //host: 'http://localhost:3000',
// });
// import DSActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api/users/v1',
  authorizer: 'authorizer:user'
});
