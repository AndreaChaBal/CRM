import Route from '@ember/routing/route';
import {inject} from '@ember/service';
export default Route.extend({
    session: Ember.inject.service('session'),
	actions: {
        viewProfile: function(){
            var id = this.get('session').fetch().catch(function() {});
            console.log(id);
        }
    }
});
