import Ember from "ember"

export default Ember.ArrayController.extend({
  needPronounJap: "",
  needPronounJapSay: "",
  medicineNounJap: "",
  medicineNounJapSay: "",

  translate: function() {
    this.set("needPronounJap", this.get("selectedNeedPronounEng.jap"));
    this.set("needPronounJapSay", this.get("selectedNeedPronounEng.say"));

    this.set("medicineNounJap", this.get("selectedMedicineNounEng.jap"));
    this.set("medicineNounJapSay", this.get("selectedMedicineNounEng.say"));
  }.observes("selectedNeedPronounEng", "selectedMedicineNounEng")
});
