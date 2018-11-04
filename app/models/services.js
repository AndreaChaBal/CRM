import DS from 'ember-data';

export default DS.Model.extend({
	idServicio: DS.attr('string'),
	nombre: DS.attr('string'),
    megas: DS.attr('String'),
	contrato: DS.attr('string'),
	precio: DS.attr('number'),
	descripcion: DS.attr('string'),

});
