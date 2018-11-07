import Route from '@ember/routing/route';

export default Route.extend({
	session: Ember.inject.service('session'),
	model() {
        var objTemp= this.get('session.currentUser.uid');
        var temp = this.store.findRecord('client', objTemp, {include: 'payments'});
        console.log(temp);
        return temp;
    }
});
