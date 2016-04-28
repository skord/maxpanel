import Ember from 'ember';
import camelcaseKeys from 'npm:camelcase-keys';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/variables.json').then(function(data){
      var newData = data.map(function(obj){
        var newObj = camelcaseKeys(obj);
        return newObj;
      });
      return newData;
    });
  }
});
