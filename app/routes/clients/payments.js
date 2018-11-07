import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        return this.get("session").fetch().catch(()=>{
          if(!this.get('session.isAuthenticated')){
            return this.transitionTo('login');
          }
        });
    },
    model(params) {
        console.log(params);
        var temp = this.store.findRecord('client', params.client_id);
        console.log(temp);
        return temp;
    }
});
