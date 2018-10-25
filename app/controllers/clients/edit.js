import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editClient: function(id){
            var self = this;

            var nombre = this.get('model.nombre');
            var apellidoPaterno  = this.get('model.apellidoPaterno');
            var apellidoMaterno = this.get('model.apellidoMaterno');
            var email = this.get('model.email');
            var telefono = this.get('model.telefono');
            var direccion = this.get('model.direccion');
            var colonia = this.get('model.colonia');
            var localidad = this.get('model.localidad');
            var municipio = this.get('model.municipio');
            //var recomendado = this.get('model.recomendado');

            this.store.findRecord('client', id).then(function(client){
                client.set('nombre', nombre);
                client.set('apellidoPaterno', apellidoPaterno);
                client.set('apellidoMaterno', apellidoMaterno);
                client.set('email', email);
                client.set('telefono', telefono);
                client.set('direccion', direccion);
                client.set('colonia', colonia);
                client.set('colonia', localidad);
                client.set('colonia', municipio);

                client.save();

                self.transitionToRoute('clients');
            });

        }
    }

});
