import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	apellidoPaterno: DS.attr('string'),
	apellidoMaterno: DS.attr('string'),
	email: DS.attr('string'),
	telefono: DS.attr('string'),
	numeroDelServicio: DS.attr('number'),
	encuesta: DS.attr('string'),
});
