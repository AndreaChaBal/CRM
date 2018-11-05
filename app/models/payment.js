import DS from 'ember-data';

export default DS.Model.extend({
    fecha: DS.attr('date'),
    cantidad: DS.attr('number'),
    concepto: DS.attr('string'),
    client: DS.belongsTo('client')
    //cliente: DS.attr('string'),
});
