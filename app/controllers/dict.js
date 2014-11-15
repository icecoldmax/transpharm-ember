import Ember from "ember"

export default Ember.ArrayController.extend({
  inJap: "",
  sayIt: "",

  changeEnglish: function() {
    this.set("inJap", this.get("selectedEnglish.jap"));
    this.set("sayIt", this.get("selectedEnglish.say"));
  }.observes("selectedEnglish")
});
