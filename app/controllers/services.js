import Controller from '@ember/controller';

export default Controller.extend({
	 actions:{
	 	cargarSer : function(){
	 		var self = this;
	 		var idServicio = this.get(model.idServicio);
	 		var nombre = this.get(model.nombre);
            var megas = this.get(model.megas);
            var contrato = this.get(model.contrato);
            var precio = this.get(model.precio);
            var descripcion = this.get(model.descripcion);

	 	}
	 }
});
