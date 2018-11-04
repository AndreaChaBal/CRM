import Route from '@ember/routing/route';

export default Ember.Route.extend({
	model() {  
        return this.store.findAll('contacto');
}
});
