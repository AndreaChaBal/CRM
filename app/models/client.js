import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'), //A
    apellidoPaterno: DS.attr('string'), //A
    apellidoMaterno: DS.attr('string'),//A
    email: DS.attr('string'), //A
    telefono: DS.attr('string'),
    direccion: DS.attr('string'),
    colonia: DS.attr('string'),
    localidad: DS.attr('string'),
    municipio: DS.attr('string'),
    isAdmin: DS.attr('boolean'),
    payments: DS.hasMany('payment'),
    service: DS.belongsTo('service'),
    fechaInstalacion: DS.attr('date'),
    horaInstalacion: DS.attr('string'),
    pagoInstalacion: DS.attr('string'),
});
