import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('variables', function() {});
  this.route('status', function() {});
  this.route('services', function() {});
  this.route('listeners', function() {});
  this.route('modules', function() {});
  this.route('sessions');
  this.route('clients', function() {});
  this.route('servers', function() {});
  this.route('events', function() {});
  this.route('welcome', function() {});
  this.route('maxscale_sessions', function() {});

  this.route('event', function() {});
  this.route('maxscale_session');
  this.route('error', function() {});
});

export default Router;
