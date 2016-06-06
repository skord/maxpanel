import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    toggleSidebar: function() {
      $('.ui.sidebar').sidebar('toggle');
    }
  }
});
