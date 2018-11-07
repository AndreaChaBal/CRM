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
    model: function(){
        var date = ((new Date()).toISOString()).toString('YYYY-MM-DD HH:mm:ss');
        return this.store.query('client', {orderBy: 'fechaInstalacion', startAt: date});
    }
});
