import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default Route.extend({
	session: inject,
	init: function() {
       //this.refresh();
    },
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
  	reloadModel: function(){
  		this.refresh();
  	},
    signIn: function(provider, email, password) {
      this.get('session').open('firebase', { provider: provider, email: email, password: password}).then(function(data) {
    console.log(data.currentUser);
  },function(error) {
  	console.log(error);
  	alert(error.message);
   });
    },
    signOut: function() {
      this.get('session').close();
    }
  },
});
