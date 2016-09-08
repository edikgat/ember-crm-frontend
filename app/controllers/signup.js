import Ember from 'ember';
export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    save(user){
      let newUser = user;
      let self = this;
      newUser.save().then(()=>{
        this.get('session')
        .authenticate('authenticator:user',
          newUser.get('email'), newUser.get('password')).then(function() {
       self.transitionToRoute('users-support-requests');
     })
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      }, ()=>{
        this.set('errorMessage', 'User have errors');
      });

    }
  }
});

