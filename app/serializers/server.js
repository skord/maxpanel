import Ember from 'ember';
import JSONAPISerializer from 'ember-data/serializers/json-api';
import camelcaseKeys from 'npm:camelcase-keys';

export default JSONAPISerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    var clientsCollection = payload;
    var dataCollection = [];
    Ember.$.map(clientsCollection, function(client, i){
      var normalizedKeys = camelcaseKeys(client);

      var entry = {
        id: i,
        type: primaryModelClass.modelName,
        attributes: {
          'server': normalizedKeys.server,
          'address': normalizedKeys.address,
          'port': normalizedKeys.port,
          'connections': normalizedKeys.connections,
          'status': normalizedKeys.status
        }
      };
      dataCollection.push(entry);
    });
    var response = {
      data: dataCollection
    };
    return this._super(store, primaryModelClass, response, id, requestType);
  }
});
