import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  user: Ember.inject.service(),
  setupController(controller) {
        this._super(...arguments);
        controller.set('isLoaded', true);
    },
  model(){
    this._super(...arguments);
    this.set('loggedStatus', {loggedAs: 'a', loggedPerm: ''});
    let modelResult = {loggedStatus: this.get('loggedStatus')};
    return modelResult;
  },
  beforeModel: function() {
    self = this;
    console.log(self.get('isLoaded'));
    var temp = this.get('session').fetch().catch(function() {
      console.log(self.get('routeName'));
      //self.transitionTo('login');
    });
    return temp;
  },
  afterModel: function(){
    self = this;
    var objTemp = this.get('user').loadCurrentUser();
    setTimeout(function()
      {
          if(objTemp){
            Ember.set(self.get('loggedStatus'), 'loggedAs', objTemp.uname);
            Ember.set(self.get('loggedStatus'), 'loggedPerm', objTemp.urole);
            console.log(self.get('loggedStatus'));
            self.controller.set('isLoaded', false);
            console.log(self.controller.get('isLoaded'));
          }
          self.controller.set('isLoaded', false);
      }, 2000);
  },
  actions: {
    signIn: function(provider, email, password) {
      self = this;
      this.get('session').open('firebase', { provider: provider, email: email, password: password}).then(function(data) {
      console.log(data.currentUser);
      console.log("uid:" + data.currentUser.uid);
      self.store.findRecord('admin',data.currentUser.uid).then(function(admin){
        console.log("Admin:");
            console.log(admin);
            Ember.set(self.get('loggedStatus'), 'loggedAs', admin.nombre + " "+ admin.apellidoPaterno);
            Ember.set(self.get('loggedStatus'), 'loggedPerm', "admin");
            self.transitionTo('dashboard');
            }).catch(function(error){
              console.log("Must be client then");
              console.log(error);
      });
      self.store.findRecord('client',data.currentUser.uid).then(function(client){
        console.log("Client:");
        console.log(client);
        Ember.set(self.get('loggedStatus'), 'loggedAs', client.nombre + " "+ client.apellidoPaterno);
        Ember.set(self.get('loggedStatus'), 'loggedPerm', "client");
            self.transitionTo('profile');
            }).catch(function(error){
          console.log("Does not exist");
      });
      },function(error) {
        console.log(error);
        alert(error.message);
       });
    },
    signOut: function() {
      this.get('session').close();
      this.transitionTo('login');
    },
    redirect: function(){
      var role = this.get('loggedStatus.loggedPerm');
      if(role =="admin")
        self.transitionTo('dashboard');
      else 
        self.transitionTo('profile');
    }
  }
});