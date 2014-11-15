import Ember from "ember";

export default Ember.ArrayController.extend({
  havePronounJap: "",
  havePronounJapSay: "",
  diseaseNounJap: "",
  diseaseNounJapSay: "",

  translate: function() {
    this.set("havePronounJap", this.get("selectedHavePronounEng.jap"));
    this.set("havePronounJapSay", this.get("selectedHavePronounEng.say"));

    this.set("diseaseNounJap", this.get("selectedDiseaseNoun.jap"));
    this.set("diseaseNounJapSay", this.get("selectedDiseaseNoun.say"));
  }.observes("selectedHavePronounEng", "selectedDiseaseNoun")
});
