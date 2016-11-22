import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  state: DS.attr(),
  samplingInterval: DS.attr(),
  connectTimeout: DS.attr(),
  readTimeout: DS.attr(),
  writeTimeout: DS.attr(),
  monitored_servers: DS.attr(),
  maxscale_monitorid: DS.attr(),
  replicationLag: DS.attr(),
  detectStaleMaster: DS.attr(),
  monitor: DS.attr(),
  servers: DS.hasMany('server')
});
