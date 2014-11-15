import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find("dict");
  },

  setupController: function(controller, model) {
    controller.set("needPronouns", model.filter(function(word) { return word.get("type") === "pronoun" && word.get("category") === "need"; }));
    controller.set("medicineNouns", model.filter(function(word) { return word.get("type") === "noun" && word.get("category") === "medicine"; }));
  },

  renderTemplate: function() {
    this.render({ outlet: "medicines" });
  }
});
