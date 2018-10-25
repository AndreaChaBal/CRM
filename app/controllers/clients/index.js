import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteClient: function(id){
            this.store.findRecord('client', id).then(function(client){
                client.deleteRecord();
                client.save();
            });
        }
    }
});
