import DS from 'ember-data';

export default DS.Model.extend({
  server: DS.attr('string'),
  address: DS.attr('string'),
  port: DS.attr('string'),
  connections: DS.attr('string'),
  status: DS.attr('string')
});
