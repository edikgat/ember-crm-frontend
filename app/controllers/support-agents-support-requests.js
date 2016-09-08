import Ember from 'ember';

const { service } = Ember.inject;
export default Ember.ArrayController.extend({

  session: service('session'),
  sortProperties: ['subject'],

  supportRequests: function() {
    return this.get('search') ? this.get('searchedSupportRequests') : this;
  }.property('search', 'searchedSupportRequests'),

  searchedSupportRequests: function() {
    var search = this.get('search').toLowerCase();
    return this.filter(function(request) {
      return request.get('subject').toLowerCase().indexOf(search) !== -1;
    });
  }.property('search', 'this.@each.subject')

});
