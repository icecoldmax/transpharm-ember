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
    { id: 1, eng: "My", jap: "私の", say: "watashi no", type: "pronoun", category: "possessive" },
    { id: 2, eng: "Your", jap: "あなたの", say: "anata no", type: "pronoun", category: "possessive" },
    { id: 3, eng: "head", jap: "頭", say: "atama", type: "noun", category: "body" },
    { id: 4, eng: "stomach", jap: "お腹", say: "onaka", type: "noun", category: "body" },
    { id: 5, eng: "hurts", jap: "が痛い", say: "ga itai", type: "verb", category: "hurts" },
    { id: 6, eng: "feels cold", jap: "が寒く感じる", say: "ga samuku kanjiru", type: "verb", category: "feels" },
    { id: 7, eng: "feels hot", jap: "が熱くかんじる", say: "ga atsuku kanjiru", type: "verb", category: "feels" },
    { id: 8, eng: "feels numb", jap: "が麻痺している", say: "ga mahi shite iru", type: "verb", category: "feels" },
    { id: 9, eng: "I have", jap: "私は", say: "watashi wa", type: "pronoun", category: "have" },
    { id: 11, eng: "You have", jap: "あなたは", say: "anata wa", type: "pronoun", category: "have" },
    { id: 12, eng: "I need", jap: "私は", say: "watashi wa", type: "pronoun", category: "need" },
    { id: 13, eng: "You need", jap: "あなたは", say: "anata wa", type: "pronoun", category: "need" },
    { id: 14, eng: "AIDS", jap: "エーズ", say: "E-ZU", type: "noun", category: "disease" },
    { id: 15, eng: "worms", jap: "ワームズ", say: "WA-MUZU", type: "noun", category: "disease" },
    { id: 16, eng: "influenza", jap: "インフルエンザ", say: "INFURUENZA", type: "noun", category: "disease" },
    { id: 17, eng: "antihistamines", jap: "抗ヒスタミン剤", say: "kō HISUTAMIN zai", type: "noun", category: "medicine" },
    { id: 18, eng: "cold medicine", jap: "風邪薬", say: "kaze gusuri", type: "noun", category: "medicine" },
  ]
});
