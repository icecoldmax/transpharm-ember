import Ember from "ember"

export default Ember.ArrayController.extend({
  pronounJap: "",
  pronounJapSay: "",
  nounJap: "",
  nounJapSay: "",
  verbJap: "",
  verbJapSay: "",

  translate: function() {
    this.set("pronounJap", this.get("selectedEngPronoun.jap"));
    this.set("pronounJapSay", this.get("selectedEngPronoun.say"));

    this.set("nounJap", this.get("selectedEngNoun.jap"));
    this.set("nounJapSay", this.get("selectedEngNoun.say"));

    this.set("verbJap", this.get("selectedEngVerb.jap"));
    this.set("verbJapSay", this.get("selectedEngVerb.say"));
  }.observes("selectedEngPronoun", "selectedEngNoun", "selectedEngVerb")
});
