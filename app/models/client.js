import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    apellidoPaterno: DS.attr('string'),
    apellidoMaterno: DS.attr('string'),
    email: DS.attr('string'),
    telefono: DS.attr('string'),
    direccion: DS.attr('string'),
    colonia: DS.attr('string'),
    localidad: DS.attr('string'),
    municipio: DS.attr('string'),
    //recomendado: DS.attr('boolean'),
});
