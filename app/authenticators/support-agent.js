import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: '/api/support_agents/v1/auth_token',
  resourceName: 'support_agent',
  tokenAttributeName: 'token'
});
