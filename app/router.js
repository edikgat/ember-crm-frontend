import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.resource('support-agents', function() {
    this.resource('support-agents-support-requests', { path: '/support-agents-support-requests/' }, function() {
      this.resource('support-agents-support-request', { path: '/support-agents-support-requests/:id' }, function() {
        this.route('edit');
      });
    });
  });
  this.resource('users', function() {
    this.resource('users-support-requests', { path: 'users-support-requests/' }, function() {
      this.route('new');
      this.resource('users-support-request', { path: 'users-support-requests/:id' }, function() {
        this.route('edit');
      });
    });
  });
  this.route('login', function() {
    this.route('user');
    this.route('support-agent');
  });
  this.route('signup');

});

export default Router;
