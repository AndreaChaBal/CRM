import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		deletePotentialClient: function(id){
			this.store.findRecord('potentialclient', id).then(function(potentialclient){
				potentialclient.deleteRecord();

				potentialclient.save();
			});
		}
	}
});
