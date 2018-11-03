import DS from 'ember-data';

export default DS.Model.extend({
	telefono: DS.attr('string'),
	email: DS.attr('string'),
	CP: DS.attr('number'),
	calle: DS.attr('string'),
	colonia: DS.attr('string'),
	municipio: DS.attr('string'),
	numero: DS.attr('string'),

});
