import Ember from 'ember';

import SupportRequest from '../models/support-request';

const { service } = Ember.inject;
export default Ember.ArrayController.extend({

  session: service('session'),
  sortProperties: ['subject', 'status'],
  STATUSES: function(){
    return [null].concat(SupportRequest.STATUSES);
  }.property(),

  supportRequests: function() {
    return this.get('searchedSupportRequests');
  }.property('searchSubject', 'searchStatus', 'searchedSupportRequests'),

  searchedSupportRequests: function() {
    var searchSubject = this.get('searchSubject');
    var searchStatus = this.get('searchStatus');
    return this.filter(function(request) {
      var properSubject = searchSubject ? request.get('subject').toLowerCase().indexOf(searchSubject.toLowerCase()) !== -1 : true;
      var properStatus = searchStatus ? request.get('status') === searchStatus : true;
      return properStatus && properSubject;
    });
  }.property('searchSubject', 'searchStatus', 'this.@each.subject')

});
