import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject} from '@ember/service';
export default Route.extend({
	firebaseApp: Ember.inject.service(),
	router: inject(),
	actions: {
    signUp: function(name, email, password) {
    	var that = this;
    	const auth = this.get('firebaseApp').auth();
    	auth.createUserWithEmailAndPassword(email, password)
        .then(function(userResponse) {
        	that.get('router').replaceWith('login');
          return userResponse.updateProfile({displayName: name});
        })
        .catch(function(err) {
          console.error(err.message);
        });
      console.log(email);
      console.log(password);
      console.log(name);
    }
  }
});
