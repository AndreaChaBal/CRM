import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel: function() {
        self = this;
        var temp = this.get('session').fetch().catch(function() {
          console.log(self.get('routeName'));
          self.transitionTo('login');
        });
        return temp;
    },
    model(params) {
        console.log(params);
        var temp = this.store.findRecord('client', params.client_id);
        console.log(temp);
        return temp;
    }
});
