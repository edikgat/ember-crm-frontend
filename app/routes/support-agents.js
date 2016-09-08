import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {

    window.modelForAdapter = 'support-agent';
    let superResult = this._super(transition);

    let isAuthenticated = this.get('session.isAuthenticated');
    let isSupportAgent = !this.get('session.isUserSession');
    if (!isAuthenticated || (!isSupportAgent)) {
      transition.abort();
      this.get('session').set('attemptedTransition', transition);
      if(!isSupportAgent) {
        return window.location.replace("users/users-support-requests/");
      }
    }
    return superResult;

  }
});
