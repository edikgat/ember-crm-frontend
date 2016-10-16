import Ember from 'ember';

export default Ember.ObjectController.extend({
  routeAfterAction: 'users-support-request',
  actions: {

    saveChanges: function() {
      var self = this;
      const flashMessages = Ember.get(this, 'flashMessages');
      this.get('model').save().then(function() {
        flashMessages.success('Support request successully updated');
        self.transitionToRoute(self.routeAfterAction);
      }).catch(() => {
        flashMessages.danger('Support request has errors');
     });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute(this.routeAfterAction);
    }

  }
});
