import DS from "ember-data";

var Dict = DS.Model.extend({
  eng: DS.attr("string"),
  jap: DS.attr("string"),
  say: DS.attr("string"),
  type: DS.attr("string"),
  category: DS.attr("string")
});

export default Dict.reopenClass({
  FIXTURES: [
    {
      id: 1,
      eng: "my",
      jap: "私の",
      say: "watashi no",
      type: "pronoun",
      category: "possessive"
    },
    {
      id: 2,
      eng: "your",
      jap: "あなたの",
      say: "anata no",
      type: "pronoun",
      category: "possessive"
    },
    {
      id: 3,
      eng: "head",
      jap: "頭",
      say: "atama",
      type: "noun",
      category: "body"
    },
    {
      id: 4,
      eng: "stomach",
      jap: "お腹",
      say: "onaka",
      type: "noun",
      category: "body"
    },
    {
      id: 5,
      eng: "hurts",
      jap: "が痛い",
      say: "ga itai",
      type: "verb",
      category: "hurts"
    },
    {
      id: 6,
      eng: "feels cold",
      jap: "が寒く感じる",
      say: "ga samuku kanjiru",
      type: "verb",
      category: "feels"
    },
    {
      id: 7,
      eng: "I have",
      jap: "私は",
      say: "watashi wa",
      type: "pronoun",
      category: "have"
    },
    {
      id: 8,
      eng: "You have",
      jap: "あなたは",
      say: "anata wa",
      type: "pronoun",
      category: "have"
    },
    {
      id: 9,
      eng: "AIDS",
      jap: "エーズ",
      say: "E-ZU",
      type: "noun",
      category: "disease"
    },
    {
      id: 10,
      eng: "worms",
      jap: "ワームズ",
      say: "WA-MUZU",
      type: "noun",
      category: "disease"
    }
  ]
});
