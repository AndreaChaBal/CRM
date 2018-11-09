import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('login');
  this.route('dashboard');
  this.route('services');
  this.route('contacto');
  this.route('profile', function() {
    this.route('payments');
  });
  this.route('clientdetails');
  this.route('potentialclient', function() {
    this.route('new');
    this.route('edit', {path:'/edit/:potentialclient_id'});
  });
  this.route('signup');
  this.route('clients', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:client_id'});
    this.route('payments', {path: '/:client_id'});
  });

  this.route('payments', function() {
    this.route('new', {path: '/:client_id'});
    this.route('edit');
  });
  this.route('appointment');
  this.route('installations');
});

export default Router;
