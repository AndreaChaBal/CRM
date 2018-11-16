import Controller from '@ember/controller';

export default Controller.extend({
	actions: {

        deletePotentialClient: function(id){

        	swal({
                title: '¿Estás seguro que quieres eliminar este cliente?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí'
              }).then(function () {
                swal(
                  'El cliente ha sido eliminado',
                  'success'
                )
            	self.store.findRecord('potentialclient', id).then(function(potentialclient){
                	potentialclient.deleteRecord();
                	potentialclient.save();
            	});
            },
            	function(dismiss) {
                if (dismiss === 'cancel') { 
                } else {
                  throw dismiss;
                }
                })
            		
        }
    }
});
