import Route from '@ember/routing/route';

export default Route.extend({
	emailService: Ember.inject.service('email'),
	beforeModel: function() {
		self = this;
		var temp = this.get('session').fetch().catch(function() {
		  console.log(self.get('routeName'));
		  self.transitionTo('login');
		});
		return temp;
	  },
	actions: {
		sendEmail(email, nombre, telefono, direccion){
			console.log(this.get('emailService'));
			var text = ("Nombre: "+nombre+ " Telefono: "+telefono + " Direccion: "+direccion);
			console.log(text);
			this.get('emailService').sendEmail(email, "Agenda de instalacion", text);
		}
	}
});
