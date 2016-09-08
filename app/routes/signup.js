import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  beforeModel() {
    window.modelForAdapter = 'users';
  },
  model() {
    return this.store.createRecord('user');
  }
});
