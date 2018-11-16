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
			var self = this;

            if(nombre == undefined || nombre == "" || apellidoPaterno == undefined || apellidoPaterno == "" || email == undefined || email == "" || telefono == undefined || telefono == "" || numeroDelServicio == undefined || numeroDelServicio == ""){
            	window.swal({
                	title: 'Error!',
                    text: 'Faltan datos',
                    confirmButtonText: 'OK',
                    type: 'error'
                });
			}
			else{
				var newPotentialClient = self.store.createRecord('potentialclient', {
						nombre: nombre,
						apellidoPaterno: apellidoPaterno,
						apellidoMaterno: apellidoMaterno,
						email: email,
						telefono: telefono,
						numeroDelServicio: numeroDelServicio,
						encuesta: encuesta,
					});

				newPotentialClient.save().then(()=>{
                	window.swal({
                		title: 'Listo!',
                		text: 'Cliente Potencial creado correctamente',
                		confirmButtonText: 'OK',
                		type: 'success'
                	});
                    self.transitionToRoute('potentialclient');
            	});
			}
		},

		cancel: function(){
            var self = this;
            this.setProperties({
                nombre: "",
                apellidoPaterno : "",
                apellidoMaterno: "",
                email: "",
                telefono: "",
                numeroDelServicio: "",
                encuesta: "",
            })
            self.transitionToRoute('potentialclient');
        }

	}

});
