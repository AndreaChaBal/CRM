import DS from 'ember-data';

export default DS.Model.extend({
    fecha: DS.attr('date'),
    cantidad: DS.attr('number'),
    concepto: DS.attr('string'),
    //cliente: DS.belongsTo('client'),
});
