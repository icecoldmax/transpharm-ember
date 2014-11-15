import DS from "ember-data";

var Dict = DS.Model.extend({
  eng: DS.attr("string"),
  jap: DS.attr("string"),
  say: DS.attr("string"),
  type: DS.attr("string")
});

export default Dict.reopenClass({
  FIXTURES: [
    {
      id: 1,
      eng: "my",
      jap: "私の",
      say: "watashi no",
      type: "pronoun"
    },
    {
      id: 2,
      eng: "your",
      jap: "あなたの",
      say: "anata no",
      type: "pronoun"
    },
    {
      id: 3,
      eng: "head",
      jap: "頭",
      say: "atama",
      type: "noun"
    },
    {
      id: 4,
      eng: "stomach",
      jap: "お腹",
      say: "onaka",
      type: "noun"
    },
    {
      id: 5,
      eng: "hurts",
      jap: "が痛い",
      say: "ga itai",
      type: "verb"
    },
    {
      id: 6,
      eng: "feels cold",
      jap: "が寒く感じる",
      say: "ga samuku kanjiru",
      type: "verb"
    }
  ]
});
