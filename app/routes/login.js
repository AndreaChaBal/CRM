import Route from '@ember/routing/route';
export default Route.extend({
  actions: {
    signIn: function(provider, email, password) {
      self = this;
      this.get('session').open('firebase', { provider: provider, email: email, password: password}).then(function(data) {
      console.log(data.currentUser);
      console.log("uid:" + data.currentUser.uid);
      self.store.findRecord('admin',data.currentUser.uid).then(function(client){
            self.transitionTo('dashboard');
            }).catch(function(error){
        console.log("Must be client then");
      });
      self.store.findRecord('client',data.currentUser.uid).then(function(client){
            self.transitionTo('clients');
            }).catch(function(error){
          console.log("Does not exist");
      });
      },function(error) {
      	console.log(error);
      	alert(error.message);
       });
    }
  },
});
