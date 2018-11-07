import Route from '@ember/routing/route';

export default Route.extend({
  user: Ember.inject.service(),
  beforeModel(){
    return this.get("session").fetch().catch(()=>{
      if(!this.get('session.isAuthenticated')){
        return this.transitionTo('login');
      }
    });
  },
  model: function() {
    return this.store.findAll('service');
  },

	afterModel: function() {
    var objTemp =this.get('user').get('currentUser');
    var self = this;
    if (objTemp){
      setTimeout(function()
      {
          if(objTemp.urole=="client")
          	self.transitionTo('clients');
      }, 500);
    }
  }
});
