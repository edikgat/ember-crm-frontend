import SessionService from 'ember-simple-auth/services/session';
import Ember from 'ember';
export default SessionService.extend({
  isUserSession: Ember.computed('session.authenticator', function() {
    return this.get('session.authenticator') === 'authenticator:user';
  }),
  paramsAddition: Ember.computed('session.authenticator', 'session.content.authenticated.token', function() {
    if(this.get('session.authenticator') === 'authenticator:user') {
      return 'Authorization=' + JSON.stringify({resource: 'user', token: this.get('session.content.authenticated.token')});
    } else {
      return 'Authorization=' + JSON.stringify({resource: 'support_agent', token: this.get('session.content.authenticated.token')});
    }
  })

});
