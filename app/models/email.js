import DS from 'ember-data';

export default DS.Model.extend({
	to: DS.attr('string'),
	subject: DS.attr('string'),
	body: DS.attr('string'),
});
