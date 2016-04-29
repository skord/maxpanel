import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('variable');
  },
  setupController: function(controller, model){
    this._super(controller, model);
    this.startRefreshing();
  },
  startRefreshing: function(){
    this.set('refreshing', true);
    Ember.run.later(this, this.refresh, 1000);
  },
  refresh: function(){
    if(!this.get('refreshing'))
      return;
    this.store.findAll('variable');
    Ember.run.later(this, this.refresh, 1000);
  },
  actions:{
    willTransition: function(){
      this.set('refreshing', false);
    }
  }
});
