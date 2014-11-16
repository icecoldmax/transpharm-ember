import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createWord: function() {
      var that = this;
      var word = this.store.createRecord("dict", this.get("fields"));
      word.save().then(function() {
        swal("Word saved!", "", "success");
        that.set("fields", {});
      },
      function() {
        swal("Word didn't save :(", "Wish I could tell you why...", "error");
      });
    }
  }
});
