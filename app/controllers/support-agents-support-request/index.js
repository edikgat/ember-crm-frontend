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
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('support-agents-support-requests');
      });
    },

    saveChanges: function() {
      if (this.get('model.isDirty')) {
        this.get('model').save();
      }
    }
  }
});
