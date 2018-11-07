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
});
