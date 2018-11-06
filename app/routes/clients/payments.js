import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(params);
        var temp = this.store.findRecord('client', params.client_id, {include: 'payments'});
        console.log(temp);
        return temp;
    }
});
