import Controller from '@ember/controller';

export default Controller.extend({

	actions: {
		editPotentialClient: function(id){
			var self = this;

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

				potentialclient.save();

				self.transitionToRoute('potentialclient');
			});

		}

	}

});
