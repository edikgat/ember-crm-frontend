import UsersSupportRequestIndex from '../users-support-request/index';
import Ember from 'ember';

export default UsersSupportRequestIndex.extend({
  routeAfterDelete: 'support-agents-support-requests',

  actions: {

    saveChanges: function() {
      if (this.get('model.isDirty')) {
        const flashMessages = Ember.get(this, 'flashMessages');
        this.get('model').save().then(function() {
          flashMessages.success('Support request successully updated');
        }).catch(() => {
          flashMessages.danger('Support request has errors');
        });
      }
    }
  }
});
