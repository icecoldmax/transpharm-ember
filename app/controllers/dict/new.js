import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createWord: function() {
      var word = this.store.createRecord("dict", this.get("fields"));
      word.save();
    }
  }
});
