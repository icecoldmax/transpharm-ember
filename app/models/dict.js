import DS from "ember-data";

export default DS.Model.extend({
  eng: DS.attr("string"),
  jap: DS.attr("string"),
  say: DS.attr("string"),
  type: DS.attr("string"),
  category: DS.attr("string")
});
