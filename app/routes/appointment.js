import Route from '@ember/routing/route';

export default Route.extend({
	emailService: Ember.inject.service('email'),
	actions: {
		sendEmail(email, nombre, telefono, direccion){
			console.log(this.get('emailService'));
			var text = ("Nombre: "+nombre+ " Telefono: "+telefono + " Direccion: "+direccion);
			console.log(text);
			this.get('emailService').sendEmail(email, "Agenda de instalacion", text);
		}
	}
});
