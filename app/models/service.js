import DS from 'ember-data';

export default DS.Model.extend({
  service: DS.attr('string'),
  router: DS.attr('string'),
  serviceState: DS.attr('string'),
  started: DS.attr('string'),
  rootUserAccess: DS.attr('string'),
  backendDatabases: DS.attr('string'),
  usersData: DS.attr('string'),
  totalConnections: DS.attr('string'),
  currentlyConnected: DS.attr('string')

});
