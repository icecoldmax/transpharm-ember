import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find("dict");
  },

  setupController: function(controller, model) {
    controller.set("pronouns", model.filter(function(word) { return word.get("type") == "pronoun" && word.get("category") == "possessive"; }));
    controller.set("nouns", model.filter(function(word) { return word.get("type") == "noun" && word.get("category") == "body"; }));
    controller.set("verbs", model.filter(function(word) { return word.get("type") == "verb"; }));
  },

  renderTemplate: function() {
    this.render({ outlet: "feelings" });
  }
});
