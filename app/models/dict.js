import DS from "ember-data";

var Dict = DS.Model.extend({
  eng: DS.attr("string"),
  jap: DS.attr("string"),
  say: DS.attr("string")
});

export default Dict.reopenClass({
  FIXTURES: [
    {
      id: 1,
      eng: "Hello",
      jap: "こんにちは",
      say: "konnichiwa"

    },
    {
      id: 2,
      eng: "Goodbye",
      jap: "さようなら",
      say: "sayōnara"
    }
  ]
});
