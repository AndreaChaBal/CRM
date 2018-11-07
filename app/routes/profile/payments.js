import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service('session'),
    beforeModel: function() {
        self = this;
        var temp = this.get('session').fetch().catch(function() {
          console.log(self.get('routeName'));
          self.transitionTo('login');
        });
        return temp;
      },
	model() {
        var objTemp= this.get('session.currentUser.uid');
        var temp = this.store.findRecord('client', objTemp, {include: 'payments'});
        console.log(temp);
        return temp;
    }
});
