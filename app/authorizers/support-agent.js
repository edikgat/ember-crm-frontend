import Devise from 'ember-simple-auth/authorizers/devise';
import Ember from 'ember';

export default Devise.extend({
  resourceName: 'support_agent',
  resourceAttributeName: 'resource',
  authorize(data, block) {
    const { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    const userToken          = data[tokenAttributeName];
    const userIdentification = data[identificationAttributeName];
    if (!Ember.isEmpty(userToken) && !Ember.isEmpty(userIdentification)) {
      var auth = {};
      auth[tokenAttributeName] = userToken;
      auth[identificationAttributeName] = userIdentification;
      auth[this.resourceAttributeName] = this.resourceName;
      const authData = JSON.stringify(auth);
      block('Authorization', `${authData}`);
    }
  }
});
