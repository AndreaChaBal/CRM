import Controller from '@ember/controller';

export default Controller.extend({
    //NoEditable: true,



    actions: {
        addPayment: function(){
            var self = this;

            var fecha = new Date();
            var cantidad = this.get('model.service.precio');
            var concepto = this.get('concepto');
            var cliente2 = this.get('model.id');

            let myClient = this.store.peekRecord('client', cliente2);

            var newPayment = this.store.createRecord('payment', {
                fecha: fecha,
                cantidad: cantidad,
                concepto: concepto,
                cliente: myClient,
            });
            
            myClient.get('payments').pushObject(newPayment);


            newPayment.save().then(function(){
                myClient.save();   
            });

            //var cliente = this.get('cliente');
            //cliente.get('pagos').addObject(newPayment);
              
            //newPayment.save().then(function() {
            //    return cliente.save();
            //});
        }
    }

});
