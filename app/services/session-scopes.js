import Ember from 'ember';

export default Ember.Service.extend({
  isUserAuthenticated: false,
  isSupportAgentAuthenticated: false,
  isManagerAuthenticated: false,

  login(session, scope) {
    this.logout();
    this.set('is' + scope.classify() + 'Authenticated', true);
  },

  logout() {
    this.set('isUserAuthenticated', false);
    this.set('isSupportAgentAuthenticated', false);
    this.set('isManagerAuthenticated', false);
  },
});
