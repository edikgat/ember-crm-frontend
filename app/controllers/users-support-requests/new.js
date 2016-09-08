import Ember from 'ember';
import SupportRequest from '../../models/support-request';

export default Ember.Controller.extend({
  actions: {

    createSupportRequest: function() {
      var self = this;
      var fields = this.get('fields');

      if (SupportRequest.valid(fields)) {
        var support_request = this.store.createRecord('support-request', fields);
        support_request.save().then(function(support_request) {
          self.transitionToRoute('users-support-request', support_request);
        });
      } else {
        this.set('showError', true);
      }
    }

  }
});
