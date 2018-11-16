import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        deleteClient: function(id, nombre, apellido){

            swal({
                title: '¿Estás seguro que quieres eliminar este cliente?',
                text: "Cliente: " + nombre + " " + apellido,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí'
              }).then(function () {
                swal(
                  'Eliminado',
                  'El cliente ha sido eliminado',
                  'success'
                )
                self.store.findRecord('client', id).then(function(client){
                    client.deleteRecord();
                    client.save();
                });
              },
                function(dismiss) {
                if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
                  // ignore
                } else {
                  throw dismiss;
                }
                })
            }
    }

});
