import Controller from '@ember/controller';

export default Controller.extend({

	actions: {

		editPotentialClient: function(id){
			var nombre = this.get('model.nombre');
			var apellidoPaterno = this.get('model.apellidoPaterno');
			var apellidoMaterno = this.get('model.apellidoMaterno');
			var email = this.get('model.email');
			var telefono = this.get('model.telefono');
			var numeroDelServicio = this.get('model.numeroDelServicio');
			var encuesta = this.get('model.encuesta');

			var self = this;

			this.store.findRecord('potentialclient', id).then(function(potentialclient){
					console.log(id);
					potentialclient.set('nombre', nombre);
					potentialclient.set('apellidoPaterno', apellidoPaterno);
					potentialclient.set('apellidoMaterno', apellidoMaterno);
					potentialclient.set('email', email);
					potentialclient.set('telefono', telefono);
					potentialclient.set('numeroDelServicio', numeroDelServicio);
					potentialclient.set('encuesta', encuesta);

				if(nombre == undefined || nombre == "" || apellidoPaterno == undefined || apellidoPaterno == "" || email == undefined || email == "" || telefono == undefined || telefono == "" || numeroDelServicio == undefined || numeroDelServicio == ""){
            		window.swal({
                		title: 'Error!',
                    	text: 'Faltan datos',
                    	confirmButtonText: 'OK',
                    	type: 'error'
                	});
				}
				else{

					potentialclient.save().then(()=>{
                		window.swal({
                			title: 'Listo!',
                			text: 'Cliente Potencial actualizado correctamente',
                			confirmButtonText: 'OK',
                			type: 'success'
                		});
                    	self.transitionToRoute('potentialclient');
            		});
				}
			});

		}/*,

		cancel: function(){
            if(nombre == undefined || nombre == "" || apellidoPaterno == undefined || apellidoPaterno == "" || email == undefined || email == "" || telefono == undefined || telefono == "" || numeroDelServicio == undefined || numeroDelServicio == ""){
            		window.swal({
                		title: 'Error!',
                    	text: 'Faltan datos',
                    	confirmButtonText: 'OK',
                    	type: 'error'
                	});
				}
				else{
            		self.transitionToRoute('potentialclient');
            	}
        }*/

	}

});
