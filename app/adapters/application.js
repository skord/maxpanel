import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  buildURL: function(record, suffix) {
    var s = this._super(record,suffix);
    return s + ".json";
  }
});
