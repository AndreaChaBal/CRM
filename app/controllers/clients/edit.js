import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        pagarInstalacion: function(choice){
            this.set('pagoInstalacion', choice);
        },
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
            var password = this.get('model.password');
            var servicio = this.get('model.service.id');
            var fechaInstalacion = this.get('date');
            var horaInstalacion = this.get('model.horaInstalacion');
            var pagoInstalacion = this.get('pagoInstalacion');
            var self = this;
            
            this.store.findRecord('client', id).then(function(client){
                client.set('nombre', nombre);
                client.set('apellidoPaterno', apellidoPaterno);
                client.set('apellidoMaterno', apellidoMaterno);
                client.set('email', email);
                client.set('telefono', telefono);
                client.set('direccion', direccion);
                client.set('colonia', colonia);
                client.set('localidad', localidad);
                client.set('municipio', municipio);
                client.set('password', password);
                client.set('servicio', servicio);
                client.set('fechaInstalacion', fechaInstalacion);
                if(password != undefined)
                    client.set('password', password);
                if(horaInstalacion != undefined)
                    client.set('horaInstalacion', horaInstalacion);
                if(fechaInstalacion != undefined)
                    client.set('fechaInstalacion', new Date(fechaInstalacion));
                if(pagoInstalacion != undefined)
                    client.set('pagoInstalacion', pagoInstalacion);

                if(nombre == undefined || apellidoPaterno == undefined || apellidoMaterno == undefined
                    || email == undefined || telefono == undefined || direccion == undefined || colonia == undefined ||
                    localidad == undefined || municipio == undefined || nombre == "" || apellidoPaterno == "" || apellidoMaterno == ""
                    || email == "" || telefono == "" || direccion == "" || colonia == "" ||
                    localidad == "" || municipio == "")
                {
                    window.swal({
                         title: 'Error!',
                         text: 'Faltan datos.',
                         confirmButtonText: 'OK',
                         type: 'error'
                       });
                }
                else {
                    client.save().then(()=>{
                        window.swal({
                         title: 'Listo!',
                         text: 'Se han editado los datos correctamente.',
                         confirmButtonText: 'OK',
                         type: 'success'
                       });
                    self.transitionToRoute('clients');
                    })
                }
            });

        }
    }

});
