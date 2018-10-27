import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deletePayment: function(id){
            this.store.findRecord('payment', id).then(function(payment){
                payment.deleteRecord();
                payment.save();
            });
        }
    }
});
