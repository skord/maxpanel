import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    toggleSidebar: function() {
      Ember.$('.ui.sidebar').sidebar('toggle');
    }
  }
});
