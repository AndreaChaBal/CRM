import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default Route.extend({
	user: Ember.inject.service(),
	session: Ember.inject.service('session'),
	beforeModel: function() {
		self = this;
		var temp = this.get('session').fetch().catch(function() {
		  console.log(self.get('routeName'));
		  self.transitionTo('login');
		});
		return temp;
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
