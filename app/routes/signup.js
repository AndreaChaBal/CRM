import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject} from '@ember/service';
export default Route.extend({
	firebaseApp: Ember.inject.service(),
	router: inject(),
	actions: {
    signUp: function(name, paterno, materno, email, password) {
    	var self = this;
    	const auth = this.get('firebaseApp').auth();
    	auth.createUserWithEmailAndPassword(email, password)
        .then(function(userResponse) {
          //alert(userResponse.uid);
          //console.log(userResponse);
          self.store.createRecord('admin', {
              nombre: name,
              apellidoPaterno: paterno,
              apellidoMaterno: materno,
              mail: email,
              id: userResponse.uid
            }).save().then(function()
            {
                window.swal({
                 title: 'Listo!',
                 text: 'Administrador creado correctamente.',
                 confirmButtonText: 'OK',
                 type: 'success'
               });
                userResponse.updateProfile({displayName: name});
                self.transitionTo('login');
            });
        })
        .catch(function(err) {
          console.error(err.message);
        });
      //console.log(email);
      //console.log(password);
      //console.log(name);
    }
  }
});
