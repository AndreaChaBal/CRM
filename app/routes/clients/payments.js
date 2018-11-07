import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(params);
        var temp = this.store.findRecord('client', params.client_id);
        console.log(temp);
        return temp;
    }
});
