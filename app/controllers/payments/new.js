import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addPayment: function(){
            var fecha = this.get('fecha');
            var cantidad = this.get('cantidad');
            var concepto = this.get('concepto');
            //var pago = this.get('pago');

            var newPayment = this.store.createRecord('payment', {
                fecha: fecha,
                cantidad: cantidad,
                concepto: concepto,
                //pago: pago,
            })

            newPayment.save();

            this.setProperties({
                fecha: '',
                cantidad: '',
                concepto: '',
                //pago: '',
            })
        }
    }
});
