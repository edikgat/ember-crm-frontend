import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    authenticate() {
     let { identification, password } = this.getProperties('identification', 'password');
     var session = this.get('session');
     var self = this;
     session.authenticate('authenticator:user',
          identification, password).then(function() {
       self.transitionToRoute('users-support-requests');
     }).catch((reason) => {
       self.set('errorMessage', reason.error || reason);
     });
   },
 }

});
