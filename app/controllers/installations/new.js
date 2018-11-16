import Controller from '@ember/controller';

export default Controller.extend({
    emailService: Ember.inject.service('email'),
    actions: {
        newInstallation: function(id){
          var fechaInstalacion = this.get('date');
          var horaInstalacion = this.get('time');
          var self = this;
          
          this.store.findRecord('client', id).then(function(client){
  
            client.set('fechaInstalacion', new Date(fechaInstalacion));
            client.set('horaInstalacion', horaInstalacion);
  
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
