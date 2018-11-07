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
        var date = ((new Date()).toISOString()).toString('YYYY-MM-DD HH:mm:ss');
        return this.store.query('client', {orderBy: 'fechaInstalacion', startAt: date});
    }
});
