import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("dict", { path: "/" }, function() {
    this.route("feelings");
    this.route("diseases");
    this.route("medicines");
  });
});

export default Router;
