import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service('session'),
    beforeModel(){
        return this.get("session").fetch().catch(()=>{
          if(!this.get('session.isAuthenticated')){
            return this.transitionTo('login');
          }
        });
      },
	model() {
        var objTemp= this.get('session.currentUser.uid');
        var temp = this.store.findRecord('client', objTemp, {include: 'payments'});
        console.log(temp);
        return temp;
    }
});
