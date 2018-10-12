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
  this.route('profile');
  this.route('clientdetails');
});

export default Router;
