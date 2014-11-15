import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find("dict");
  },

  setupController: function(controller, model) {
    controller.set("havePronouns", model.filter(function(word) { return word.get("type") == "pronoun" && word.get("category") == "have"; }));
    controller.set("diseaseNouns", model.filter(function(word) { return word.get("type") == "noun" && word.get("category") == "disease"; }));
  },

  renderTemplate: function() {
    this.render({ outlet: "diseases" });
  }
});
