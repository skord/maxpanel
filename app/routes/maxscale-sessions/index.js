import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('maxscale-session');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.startRefreshing();
  },
  startRefreshing: function() {
    this.set('refreshing', true);
    Ember.run.later(this, this.refresh, 2000);
  },
  refresh: function() {
    if (!this.get('refreshing')) {
      return;
    } else {
      this.store.findAll('maxscale-session');
      Ember.run.later(this, this.refresh, 2000);
    }
  },
  actions: {
    willTransition: function() {
      this.set('refreshing', false);
    }
  }
});
