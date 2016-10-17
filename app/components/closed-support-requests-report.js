import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Component.extend({
  tagName:'',
  session: service('session'),
  actions: {
    download() {
      var a = document.createElement('a');
          a.href = 'http://localhost:3000/api/support_agents/v1/support_requests/report.pdf?' + this.get('session.paramsAddition');
          a.target = '_blank';
          a.click();
      return false;
    }
 }
});
