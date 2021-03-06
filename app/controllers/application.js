import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionToRoute('dashboard');
      this.store.unloadAll();
    }
  }
});
