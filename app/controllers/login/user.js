import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  authenticator: 'authenticator:user',
  afterLogInRoute: 'users-support-requests',
  session: service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      var session = this.get('session');
      const flashMessages = Ember.get(this, 'flashMessages');
      var self = this;
      session.authenticate(self.authenticator,
          identification, password).then(function() {
        self.transitionToRoute(self.afterLogInRoute);
      }).catch((reason) => {
        flashMessages.danger(reason.error || reason);
     });
   },
 }

});
