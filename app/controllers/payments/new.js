import Controller from '@ember/controller';

export default Controller.extend({
    NoEditable: true,

    actions: {
        addPayment: function(){
            var self = this;

            var fecha = this.get('fecha');
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

            this.setProperties({
                fecha: '',
                cantidad: '',
                concepto: '',
                cliente: '',
            })
        }
    }

});
