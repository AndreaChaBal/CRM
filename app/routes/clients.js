import Route from '@ember/routing/route';

export default Route.extend({
    model(){
		return this.store.findAll('client')
	},
	user: Ember.inject.service(),
	afterModel:function() {
    var objTemp =this.get('user').get('currentUser');
    var self = this;
    if (objTemp){
      setTimeout(function()
      {
          if(objTemp.urole=="client")
          	self.transitionTo('login');
      }, 500);
    }
  }
});
