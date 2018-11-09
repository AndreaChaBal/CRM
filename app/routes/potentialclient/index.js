import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
        return this.get("session").fetch().catch(()=>{
          if(!this.get('session.isAuthenticated')){
            return this.transitionTo('login');
          }
        });
    },
    model: function(){
    	return this.store.findAll('potentialclient');
    }
});
