import UserLogin from './user';

export default UserLogin.extend({
  authenticator: 'authenticator:support-agent',
  afterLogInRoute: 'support-agents-support-requests'
});
