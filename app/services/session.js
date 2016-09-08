import SessionService from 'ember-simple-auth/services/session';
import Ember from 'ember';
export default SessionService.extend({
  isUserSession: Ember.computed('session.authenticator', function() {
      return this.get('session.authenticator') === 'authenticator:user';
  })

});
