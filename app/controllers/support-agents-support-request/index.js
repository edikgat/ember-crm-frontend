import Ember from 'ember';
import SupportRequest from '../../models/support-request';

export default Ember.ObjectController.extend({
  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty', 'isSaving'),

  STATUSES: function(){
    return SupportRequest.STATUSES;
  }.property(),

  actions: {

    delete: function() {
      var self = this;
      const flashMessages = Ember.get(this, 'flashMessages');
      this.get('model').destroyRecord().then(function() {
        flashMessages.success('Support request successully deleted');
        self.transitionToRoute('support-agents-support-requests');
      });
    },

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
