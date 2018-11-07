import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default Route.extend({
	beforeModel(){
    return this.get("session").fetch().catch(()=>{
      if(!this.get('session.isAuthenticated')){
        return this.transitionTo('login');
        //return this.transitionTo("perfil");
      }
    });
  }
});
