import Ember from "ember";

export default Ember.ArrayController.extend({
  sortProperties: ["type", "category"],
  fields: {},

  actions: {
    createWord: function() {
      var that = this;
      var word = this.store.createRecord("dict", this.get("fields"));
      word.save().then(function() {
        that.set("fields", {});
        console.log("Word saved.");
      },
      function() {
        swal("Word didn't save :(", "Wish I could tell you why...", "error");
      });
    }
  }
});
