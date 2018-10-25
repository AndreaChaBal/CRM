import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addClient: function(){
            var nombre = this.get('nombre');
            var apellidoPaterno  = this.get('apellidoPaterno');
            var apellidoMaterno = this.get('apellidoMaterno');
            var telefono = this.get('telefono');
            var direccion = this.get('direccion');
            var colonia = this.get('colonia');
            var localidad = this.get('localidad');
            var municipio = this.get('municipio');
            //var recomendado = this.get('recomendado');

            var newClient = this.store.createRecord('client', {
                nombre: nombre,
                apellidoPaterno : apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                telefono: telefono,
                direccion: direccion,
                colonia: colonia,
                localidad: localidad,
                municipio: municipio,
                //recomendado: recomendado,
            })

            newClient.save();

            this.setProperties({
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                telefono: '',
                direccion: '',
                colonia: '',
                localidad: '',
                municipio: '',
            })
        }
    }

});
