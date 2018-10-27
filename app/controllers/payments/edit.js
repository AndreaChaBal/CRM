import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editPayment: function(id){
            var self = this;

            //var fecha = this.get('model.fecha');
            var cantidad = this.get('model.cantidad');
            var concepto = this.get('model.concepto');
            //var pago = this.get('model.pago');

            this.store.findRecord('payment', id).then(function(payment){
                //payment.set('fecha', fecha);
                payment.set('cantidad', cantidad);
                payment.set('concepto', concepto);
                //payment.set('pago', pago);
                
                payment.save();

                self.transitionToRoute('payments');
            });

        }
    }
});
