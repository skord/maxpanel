import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  router: DS.attr('string'),
  sessions: DS.attr('string'),
  totalsessions: DS.attr('string')
});
