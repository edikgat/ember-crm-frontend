import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    console.log('daasdasdsa');
    window.modelForAdapter = 'users';
    let superResult = this._super(transition);

    let isAuthenticated = this.get('session.isAuthenticated');
    let isUser = this.get('session.isUserSession');
    if (!isAuthenticated || (!isUser)) {
      transition.abort();
      this.get('session').set('attemptedTransition', transition);
      if(!isUser) {
        return window.location.replace("support-agents/support-agents-support-requests/");
      }
    }
    return superResult;
  }
});
