import Service from '@ember/service';

export default Service.extend({
  session: Ember.inject.service(),
  store : Ember.inject.service(),
  currentUser: null,
 	loadCurrentUser() {
    var isAuthenticated = this.get('session.isAuthenticated');
    var userObj = {};
    var self = this;
    if(isAuthenticated){
      //console.log(this.get('session.currentUser.uid'));
    var dataTemp = this.get('session.currentUser.uid');
     self.store.findRecord('admin',dataTemp).then(function(admin){
        //console.log("Admin:");
            //console.log(admin);
            userObj.uid = dataTemp;
            userObj.uname = (admin.nombre + " "+ admin.apellidoPaterno);
            userObj.urole = "admin";
            }).catch(function(error){
              //console.log("Must be client then");
              //console.log(error);
      });
      self.store.findRecord('client',dataTemp).then(function(client){
        //console.log("Client:");
        //console.log(client);
        userObj.uid = self.get('session.currentUser.uid');
            userObj.uname = (client.nombre + " "+ client.apellidoPaterno);
            userObj.urole = "client";
            }).catch(function(error){
          //console.log("Does not exist");
      });
           this.set('currentUser', userObj);
           //console.log(this.get('currentUser'));
           return this.get('currentUser');
    }
    return null;
  }
});
