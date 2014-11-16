import Ember from "ember";

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editWord: function() {
      this.set("isEditing", true);
    },

    deleteWord: function() {
      var word = this.get("model");
      word.deleteRecord();
      word.save();
    },

    acceptChanges: function() {
      this.set("isEditing", false);
      this.get("model").save();
    }
  }
});
