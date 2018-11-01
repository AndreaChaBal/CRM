import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    self = this;
    return this.get('session').fetch().catch(function() {
      console.log(self.get('routeName'));
      self.transitionTo('login');
    });
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});