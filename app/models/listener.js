import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  protocolmodule: DS.attr('string'),
  address: DS.attr('string'),
  port: DS.attr('string'),
  state: DS.attr('string')
});
