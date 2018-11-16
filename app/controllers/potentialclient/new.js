import Controller from '@ember/controller';
import firebase from 'firebase';


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
