import Route from '@ember/routing/route';
export default Route.extend({
  user: Ember.inject.service(),
  afterModel:function() {
    var objTemp =this.get('user').get('currentUser');
    if (objTemp){
      setTimeout(function()
    {
        console.log(objTemp.uname);
    }, 500);
    }
     
  }
});
