import Route from '@ember/routing/route';

export default Route.extend({
  user: Ember.inject.service(),

  beforeModel: function() {
    self = this;
    var temp = this.get('session').fetch().catch(function() {
      console.log(self.get('routeName'));
      self.transitionTo('login');
    });
    return temp;
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
