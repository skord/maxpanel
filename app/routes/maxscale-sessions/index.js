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
      let userPromise = this.store.findAll('maxscale-session', {reload: true});
      userPromise.catch((error) => {
        return this.transitionTo("error");
      });
      Ember.run.later(this, this.refresh, 2000);
      return userPromise;
    }
  },
  actions: {
    willTransition: function() {
      this.set('refreshing', false);
    }
  }
});
