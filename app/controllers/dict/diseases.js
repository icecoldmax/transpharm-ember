import Ember from "ember";

export default Ember.ArrayController.extend({
  havePronounJap: "",
  havePronounJapSay: "",
  diseaseNounJap: "",
  diseaseNounJapSay: "",

  translate: function() {
    this.set("havePronounJap", this.get("selectedHavePronounEng.jap"));
    this.set("havePronounJapSay", this.get("selectedHavePronounEng.say"));

    this.set("diseaseNounJap", this.get("selectedDiseaseNounEng.jap"));
    this.set("diseaseNounJapSay", this.get("selectedDiseaseNounEng.say"));
  }.observes("selectedHavePronounEng", "selectedDiseaseNounEng")
});
