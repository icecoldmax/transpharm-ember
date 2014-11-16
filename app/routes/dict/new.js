import Ember from "ember";

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set("fields", {})
  },

  renderTemplate: function() {
    this.render({ outlet: "new" });
  }
});
