import Controller from '@ember/controller';
import firebase from 'firebase';

var config = {apiKey: "AIzaSyCeJpYjPn07X7zVuOXOErqNxH9gQubcdh8",
      authDomain: "itmex-ac80b.firebaseapp.com",
      databaseURL: "https://itmex-ac80b.firebaseio.com",
      projectId: "itmex-ac80b",
      storageBucket: "itmex-ac80b.appspot.com",
      messagingSenderId: "166913341683"};

var secondaryApp = firebase.initializeApp(config, "Third");

const auth = secondaryApp.auth();

export default Controller.extend({

	actions: {
		updateValue: function(value){
            this.set('numeroDelServicio', value);
        },
		addPotentialClient: function(){
			var nombre = this.get('nombre');
			var apellidoPaterno = this.get('apellidoPaterno');
			var apellidoMaterno = this.get('apellidoMaterno');
			var email = this.get('email');
			var telefono = this.get('telefono');
			var numeroDelServicio = this.get('numeroDelServicio');
			var encuesta = this.get('encuesta');

			var newPotentialClient = this.store.createRecord('potentialclient', {
				nombre: nombre,
				apellidoPaterno: apellidoPaterno,
				apellidoMaterno: apellidoMaterno,
				email: email,
				telefono: telefono,
				numeroDelServicio: numeroDelServicio,
				encuesta: encuesta,
			});

			newPotentialClient.save();
		}

	}

});
