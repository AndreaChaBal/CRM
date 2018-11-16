import Controller from '@ember/controller';

export default Controller.extend({
    emailService: Ember.inject.service('email'),
    actions: {
        newInstallation: function(id){
          var fechaInstalacion = this.get('date');
          var horaInstalacion = this.get('time');
          var self = this;
          
          this.store.findRecord('client', id).then(function(client){
            console.log(fechaInstalacion);
            fechaInstalacion = fechaInstalacion.split("-");
            var year = fechaInstalacion[0];
            var month = parseInt(fechaInstalacion[1], 10) - 1;
            var date = fechaInstalacion[2];
            client.set('fechaInstalacion', new Date(year, month, date));
            client.set('horaInstalacion', horaInstalacion);
            console.log(client.get('fechaInstalacion'));
            if(fechaInstalacion == undefined || horaInstalacion == undefined)
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
                     title: 'Listo! Se ha editado la instalación correctamente',
                     text: 'Cliente: ' + client.nombre + " " + client.apellidoPaterno,
                     confirmButtonText: 'OK',
                     type: 'success'
                   });
                var text = ("Nombre: "+client.nombre+ " Telefono: "+client.telefono + " Direccion: "+client.direccion+" Nueva fecha de instalacion: "+client.fechaInstalacion);
                console.log(text);
                self.get('emailService').sendEmail(client.email, "Reprogramación de instalacion", text);
                self.transitionToRoute('installations');
                })
            }
          })
        }
      }
});
