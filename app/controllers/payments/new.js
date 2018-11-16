import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateValue: function(value){
            this.set('concepto', value);
        },
        addPayment: function(){
            var self = this;

            var fecha = new Date();
            var cantidad = this.get('model.service.precio');
            var concepto = this.get('concepto');
            var cliente = this.get('model.id');

            if(concepto == undefined || concepto == "") {
                window.swal({
                    title: 'Error!',
                    text: 'Agrega el concepto de pago',
                    confirmButtonText: 'OK',
                    type: 'error'
                  });
            }

            else {
                let myClient = this.store.peekRecord('client', cliente);

                var newPayment = this.store.createRecord('payment', {
                    fecha: fecha,
                    cantidad: cantidad,
                    concepto: concepto,
                    cliente: myClient,
                });
                
                myClient.get('payments').pushObject(newPayment);

                newPayment.save().then(function(){
                    myClient.save().then(()=>{
                        window.swal({
                        title: 'Listo!',
                        text: 'Pago creado correctamente. \n Cliente: ' + myClient.nombre,
                        confirmButtonText: 'OK',
                        type: 'success'
                    });
                        self.transitionToRoute('clients');
                    });  
                });
            }
            //var cliente = this.get('cliente');
            //cliente.get('pagos').addObject(newPayment);
              
            //newPayment.save().then(function() {
            //    return cliente.save();
            //});
        }
    }

});
