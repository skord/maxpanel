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
          'name': normalizedKeys.serviceName,
          'router': normalizedKeys.routerModule,
          'sessions': normalizedKeys.noSessions,
          'totalsessions': normalizedKeys.totalSessions
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
