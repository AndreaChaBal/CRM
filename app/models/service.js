import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
	precio: DS.attr('number'),
	descripcion: DS.attr('string'),
	clients: DS.hasMany('client'),
});
