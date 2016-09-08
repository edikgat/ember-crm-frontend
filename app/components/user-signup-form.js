import Ember from 'ember';
const { service } = Ember.inject;
export default Ember.Component.extend({
  session: service('session'),
  actions: {
    signUp(){
      let user = this.get('user');
      this.attrs.triggerSave(user);
    }
 }
});
