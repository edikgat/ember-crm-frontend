import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: '/api/users/v1/auth_token',
  resourceName: 'user',
  tokenAttributeName: 'token'
});
