import Route from '@ember/routing/route';

export default Route.extend({
	user: Ember.inject.service(),
	model: function(){
		return this.modelFor('application');
	},
	afterModel:function() {
    var objTemp =this.get('user').get('currentUser');
    var self = this;
    if (objTemp){
      setTimeout(function()
      {
          if(objTemp.urole=="client")
          	self.transitionTo('clients');
      }, 500);
    }
  },
	actions: {
    toCreate: function() {
      this.transitionTo('clients.new');
    },
    toList: function() {
      this.transitionTo('clients');
    }
  }
});
