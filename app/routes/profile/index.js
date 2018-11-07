import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default Route.extend({
	user: Ember.inject.service(),
	session: Ember.inject.service('session'),
	beforeModel(){
		return this.get("session").fetch().catch(()=>{
		  if(!this.get('session.isAuthenticated')){
			return this.transitionTo('login');
		  }
		});
	  },
	model() {
		var self = this;
		var objTemp= this.get('session.currentUser.uid');
		console.log(objTemp);
		var temp = self.store.findRecord('client', objTemp);
		        return temp;
    },
	actions: {
        viewProfile: function(){
            var id = this.get('session').fetch().catch(function() {});
            console.log(id);
        }
    }
});
