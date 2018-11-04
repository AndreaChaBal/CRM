import Controller from '@ember/controller';

export default Controller.extend({
    NoEditable: true,

    actions: {
        addPayment: function(cliente){
            var self = this;

            var fecha = new Date();
            var cantidad = this.get('cantidad');
            var concepto = this.get('concepto');
            var cliente = this.get('model.id');

            var newPayment = this.store.createRecord('payment', {
                fecha: fecha,
                cantidad: cantidad,
                concepto: concepto,
                cliente: cliente,
            })
            
            newPayment.save();

            //var cliente = this.get('cliente');
            //cliente.get('pagos').addObject(newPayment);
              
            //newPayment.save().then(function() {
            //    return cliente.save();
            //});
        }
    }

});
