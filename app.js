const jp = {
  watashi: "\u79c1\u306f",
  haha: "\u6bcd\u306f",
  tomodachi: "\u53cb\u3060\u3061\u306f",
  sensei: "\u5148\u751f\u306f",
  engineer: "\u30a8\u30f3\u30b8\u30cb\u30a2\u306f",
  school: "\u5b66\u6821\u3067",
  home: "\u5bb6\u3067",
  station: "\u99c5\u3067",
  schoolDestination: "\u5b66\u6821\u306b",
  homeDestination: "\u5bb6\u306b",
  stationDestination: "\u99c5\u306b",
  japanese: "\u65e5\u672c\u8a9e\u3092",
  coffee: "\u30b3\u30fc\u30d2\u30fc\u3092",
  taberu: "\u98df\u3079\u308b",
  ikimasu: "\u884c\u304d\u307e\u3059",
  nomimasu: "\u98f2\u307f\u307e\u3059",
  benkyou: "\u52c9\u5f37\u3057\u307e\u3059",
  hanashimasu: "\u8a71\u3057\u307e\u3059",
};

const readings = new Map([
  [jp.watashi, "\u308f\u305f\u3057\u306f"],
  [jp.haha, "\u306f\u306f\u306f"],
  [jp.tomodachi, "\u3068\u3082\u3060\u3061\u306f"],
  [jp.sensei, "\u305b\u3093\u305b\u3044\u306f"],
  [jp.engineer, "\u3048\u3093\u3058\u306b\u3042\u306f"],
  [jp.school, "\u304c\u3063\u3053\u3046\u3067"],
  [jp.home, "\u3044\u3048\u3067"],
  [jp.station, "\u3048\u304d\u3067"],
  [jp.schoolDestination, "\u304c\u3063\u3053\u3046\u306b"],
  [jp.homeDestination, "\u3044\u3048\u306b"],
  [jp.stationDestination, "\u3048\u304d\u306b"],
  [jp.japanese, "\u306b\u307b\u3093\u3054\u3092"],
  [jp.coffee, "\u3053\u30fc\u3072\u30fc\u3092"],
  [jp.taberu, "\u305f\u3079\u308b"],
  [jp.ikimasu, "\u3044\u304d\u307e\u3059"],
  [jp.nomimasu, "\u306e\u307f\u307e\u3059"],
  [jp.benkyou, "\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059"],
  [jp.hanashimasu, "\u306f\u306a\u3057\u307e\u3059"],
  ["\uff21\u306f\uff22\u3067\u3059", "\u3048\u30fc\u306f\u3073\u30fc\u3067\u3059"],
  ["\uff21\u306f\uff22\u3067\u306f\u3042\u308a\u307e\u305b\u3093", "\u3048\u30fc\u306f\u3073\u30fc\u3067\u306f\u3042\u308a\u307e\u305b\u3093"],
  ["\uff21\u306f\u5834\u6240\u306b\u3044\u307e\u3059", "\u3048\u30fc\u306f\u3070\u3057\u3087\u306b\u3044\u307e\u3059"],
  ["\uff21\u306f\u76ee\u7684\u8a9e\u3092\u52d5\u8a5e\u307e\u3059", "\u3048\u30fc\u306f\u3082\u304f\u3066\u304d\u3054\u3092\u3069\u3046\u3057\u307e\u3059"],
  ["\uff21\u306f\u76ee\u7684\u8a9e\u3092\u301c\u307e\u3059", "\u3048\u30fc\u306f\u3082\u304f\u3066\u304d\u3054\u3092\u301c\u307e\u3059"],
  ["\u4e94\u6bb5\u52d5\u8a5e\u30fb\u4e00\u6bb5\u52d5\u8a5e\u30fb\u4e0d\u898f\u5247\u52d5\u8a5e", "\u3054\u3060\u3093\u3069\u3046\u3057\u30fb\u3044\u3061\u3060\u3093\u3069\u3046\u3057\u30fb\u3075\u304d\u305d\u304f\u3069\u3046\u3057"],
  ["\u4e01\u5be7\u4f53\u3068\u666e\u901a\u4f53", "\u3066\u3044\u306d\u3044\u305f\u3044\u3068\u3075\u3064\u3046\u305f\u3044"],
  ["\u5426\u5b9a\u5f62\u3068\u904e\u53bb\u5f62", "\u3072\u3066\u3044\u3051\u3044\u3068\u304b\u3053\u3051\u3044"],
  ["\u6bce\u65e5\u306e\u52d5\u4f5c\u52d5\u8a5e", "\u307e\u3044\u306b\u3061\u306e\u3069\u3046\u3055\u3069\u3046\u3057"],
  ["\u306f\uff1a\u8a71\u984c", "\u306f\uff1a\u308f\u3060\u3044"],
  ["\u304c\uff1a\u4e3b\u8a9e\u306e\u7126\u70b9", "\u304c\uff1a\u3057\u3085\u3054\u306e\u3057\u3087\u3046\u3066\u3093"],
  ["\u3092\uff1a\u76ee\u7684\u8a9e", "\u3092\uff1a\u3082\u304f\u3066\u304d\u3054"],
  ["\u306b\uff1a\u6642\u9593\u30fb\u5834\u6240\u30fb\u76ee\u6a19", "\u306b\uff1a\u3058\u304b\u3093\u30fb\u3070\u3057\u3087\u30fb\u3082\u304f\u3072\u3087\u3046"],
  ["\u3067\uff1a\u52d5\u4f5c\u306e\u5834\u6240\u30fb\u624b\u6bb5", "\u3067\uff1a\u3069\u3046\u3055\u306e\u3070\u3057\u3087\u30fb\u3057\u3085\u3060\u3093"],
  ["\u300c\u304b\u300d\u306e\u7591\u554f\u6587", "\u300c\u304b\u300d\u306e\u304e\u3082\u3093\u3076\u3093"],
  ["\u8ab0\u30fb\u4f55\u30fb\u3069\u3053\u30fb\u3044\u3064", "\u3060\u308c\u30fb\u306a\u306b\u30fb\u3069\u3053\u30fb\u3044\u3064"],
  ["\u306f\u3044\uff0f\u3044\u3044\u3048\u306e\u7b54\u3048", "\u306f\u3044\uff0f\u3044\u3044\u3048\u306e\u3053\u305f\u3048"],
  ["\u77ed\u304f\u81ea\u7136\u306a\u8fd4\u4e8b", "\u307f\u3058\u304b\u304f\u3057\u305c\u3093\u306a\u3078\u3093\u3058"],
  ["\u3044\u5f62\u5bb9\u8a5e", "\u3044\u3051\u3044\u3088\u3046\u3057"],
  ["\u306a\u5f62\u5bb9\u8a5e", "\u306a\u3051\u3044\u3088\u3046\u3057"],
  ["\u540d\u8a5e\uff0b\u306e\uff0b\u540d\u8a5e", "\u3081\u3044\u3057\uff0b\u306e\uff0b\u3081\u3044\u3057"],
  ["\u7c21\u5358\u306a\u6bd4\u8f03\u8868\u73fe", "\u304b\u3093\u305f\u3093\u306a\u3072\u304b\u304f\u3072\u3087\u3046\u3052\u3093"],
  ["\u6642\u9593\u306b\u52d5\u4f5c", "\u3058\u304b\u3093\u306b\u3069\u3046\u3055"],
  ["\u6bce\u65e5\u3068\u983b\u5ea6\u8868\u73fe", "\u307e\u3044\u306b\u3061\u3068\u3072\u3093\u3069\u3072\u3087\u3046\u3052\u3093"],
  ["\u904e\u53bb\u5f62", "\u304b\u3053\u3051\u3044"],
  ["\u304b\u3089\u30fb\u307e\u3067\u3067\u671f\u9593\u3092\u8868\u3059", "\u304b\u3089\u30fb\u307e\u3067\u3067\u304d\u304b\u3093\u3092\u3042\u3089\u308f\u3059"],
  ["\u79fb\u52d5\u52d5\u8a5e", "\u3044\u3069\u3046\u3069\u3046\u3057"],
  ["\u4f1a\u8a71\u306e\u52d5\u8a5e", "\u304b\u3044\u308f\u306e\u3069\u3046\u3057"],
  ["\u4ed5\u4e8b\u3068\u5b66\u6821\u306e\u65e5\u8ab2", "\u3057\u3054\u3068\u3068\u304c\u3063\u3053\u3046\u306e\u306b\u3063\u304b"],
  ["\u5bb6\u3068\u98df\u3079\u7269\u306e\u52d5\u4f5c", "\u3044\u3048\u3068\u305f\u3079\u3082\u306e\u306e\u3069\u3046\u3055"],
  ["\u305d\u3057\u3066", "\u305d\u3057\u3066"],
  ["\u3067\u3082", "\u3067\u3082"],
  ["\u304b\u3089", "\u304b\u3089"],
  ["\u3066\u5f62\u3067\u3064\u306a\u3052\u308b", "\u3066\u3051\u3044\u3067\u3064\u306a\u3052\u308b"],
  ["\u300c\u3068\u300d\u3067\u540d\u8a5e\u3092\u4e26\u3079\u308b", "\u300c\u3068\u300d\u3067\u3081\u3044\u3057\u3092\u306a\u3089\u3079\u308b"],
  ["\u305f\u3044", "\u305f\u3044"],
  ["\u3066\u3082\u3044\u3044\u3067\u3059", "\u3066\u3082\u3044\u3044\u3067\u3059"],
  ["\u3066\u304f\u3060\u3055\u3044", "\u3066\u304f\u3060\u3055\u3044"],
  ["\u53ef\u80fd\u5f62", "\u304b\u306e\u3046\u3051\u3044"],
  ["\u307e\u3057\u3087\u3046", "\u307e\u3057\u3087\u3046"],
  ["\u4f1a\u8a71\u306e\u30bf\u30fc\u30f3", "\u304b\u3044\u308f\u306e\u305f\u30fc\u3093"],
  ["\u805e\u304d\u8fd4\u3057\u8868\u73fe", "\u304d\u304d\u304b\u3048\u3057\u3072\u3087\u3046\u3052\u3093"],
  ["\u77ed\u3044\u65e5\u8a18", "\u307f\u3058\u304b\u3044\u306b\u3063\u304d"],
  ["\u3086\u3063\u304f\u308a\u306e\u8074\u89e3", "\u3086\u3063\u304f\u308a\u306e\u3061\u3087\u3046\u304b\u3044"],
  ["\u79c1", "\u308f\u305f\u3057"],
  ["\u4eca\u65e5", "\u304d\u3087\u3046"],
  ["\u5b66\u6821", "\u304c\u3063\u3053\u3046"],
  ["\u6c34", "\u307f\u305a"],
  ["\u98df\u3079\u307e\u3059", "\u305f\u3079\u307e\u3059"],
  ["\u98df\u3079\u306a\u3044", "\u305f\u3079\u306a\u3044"],
  ["\u98df\u3079\u305f", "\u305f\u3079\u305f"],
  ["\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u3059\u3002", "\u308f\u305f\u3057\u306f\u307f\u305a\u3092\u306e\u307f\u307e\u3059\u3002"],
  ["\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u305b\u3093\u3002", "\u308f\u305f\u3057\u306f\u307f\u305a\u3092\u306e\u307f\u307e\u305b\u3093\u3002"],
  ["\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u3057\u305f\u3002", "\u308f\u305f\u3057\u306f\u307f\u305a\u3092\u306e\u307f\u307e\u3057\u305f\u3002"],
  ["\u6c34\u3092\u98f2\u307f\u307e\u3059\u304b\u3002", "\u307f\u305a\u3092\u306e\u307f\u307e\u3059\u304b\u3002"],
  ["\u79c1\u306f\u5b66\u6821\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "\u308f\u305f\u3057\u306f\u304c\u3063\u3053\u3046\u3067\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059\u3002"],
  ["\u5f1f\u306f\u5bb6\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "\u304a\u3068\u3046\u3068\u306f\u3044\u3048\u3067\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059\u3002"],
  ["\u5148\u751f\u306f\u6559\u5ba4\u3067\u8a71\u3057\u307e\u3059\u3002", "\u305b\u3093\u305b\u3044\u306f\u304d\u3087\u3046\u3057\u3064\u3067\u306f\u306a\u3057\u307e\u3059\u3002"],
  ["\u53cb\u3060\u3061\u306f\u99c5\u3067\u5f85\u3061\u307e\u3059\u3002", "\u3068\u3082\u3060\u3061\u306f\u3048\u304d\u3067\u307e\u3061\u307e\u3059\u3002"],
  ["\u4eca\u65e5\u306f\u4f55\u3092\u3057\u307e\u3059\u304b\u3002", "\u304d\u3087\u3046\u306f\u306a\u306b\u3092\u3057\u307e\u3059\u304b\u3002"],
  ["\u65e5\u672c\u8a9e\u3092\u52c9\u5f37\u3057\u307e\u3059\u3002", "\u306b\u307b\u3093\u3054\u3092\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059\u3002"],
  ["\u3069\u3053\u3067\u52c9\u5f37\u3057\u307e\u3059\u304b\u3002", "\u3069\u3053\u3067\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059\u304b\u3002"],
  ["\u56f3\u66f8\u9928\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "\u3068\u3057\u3087\u304b\u3093\u3067\u3079\u3093\u304d\u3087\u3046\u3057\u307e\u3059\u3002"],
  ["\u884c\u304f", "\u3044\u304f"],
  ["\u884c\u304d\u307e\u3059", "\u3044\u304d\u307e\u3059"],
  ["\u884c\u304b\u306a\u3044", "\u3044\u304b\u306a\u3044"],
  ["\u884c\u3063\u305f", "\u3044\u3063\u305f"],
  ["\u884c\u3063\u3066", "\u3044\u3063\u3066"],
  ["\u884c\u3051\u308b", "\u3044\u3051\u308b"],
  ["\u898b\u308b", "\u307f\u308b"],
  ["\u898b\u307e\u3059", "\u307f\u307e\u3059"],
  ["\u898b\u306a\u3044", "\u307f\u306a\u3044"],
  ["\u898b\u305f", "\u307f\u305f"],
  ["\u898b\u3066", "\u307f\u3066"],
  ["\u898b\u3089\u308c\u308b", "\u307f\u3089\u308c\u308b"],
  ["\u8a71\u3059", "\u306f\u306a\u3059"],
  ["\u8a71\u3057\u307e\u3059", "\u306f\u306a\u3057\u307e\u3059"],
  ["\u8a71\u3055\u306a\u3044", "\u306f\u306a\u3055\u306a\u3044"],
  ["\u8a71\u3057\u305f", "\u306f\u306a\u3057\u305f"],
  ["\u8a71\u3057\u3066", "\u306f\u306a\u3057\u3066"],
  ["\u8a71\u305b\u308b", "\u306f\u306a\u305b\u308b"],
  ["\u3059\u308b", "\u3059\u308b"],
  ["\u3057\u307e\u3059", "\u3057\u307e\u3059"],
  ["\u3057\u306a\u3044", "\u3057\u306a\u3044"],
  ["\u3057\u305f", "\u3057\u305f"],
  ["\u3057\u3066", "\u3057\u3066"],
  ["\u3067\u304d\u308b", "\u3067\u304d\u308b"],
]);

const supplementalReadings = [
  ["ある", "ある"], ["あります", "あります"], ["ない", "ない"], ["あった", "あった"], ["あって", "あって"], ["ありえる", "ありえる"],
  ["いる", "いる"], ["います", "います"], ["いない", "いない"], ["いた", "いた"], ["いて", "いて"], ["いられる", "いられる"],
  ["読む", "よむ"], ["読みます", "よみます"], ["読まない", "よまない"], ["読んだ", "よんだ"], ["読んで", "よんで"], ["読める", "よめる"],
  ["聞く", "きく"], ["聞きます", "ききます"], ["聞かない", "きかない"], ["聞いた", "きいた"], ["聞いて", "きいて"], ["聞ける", "きける"],
  ["新しい", "あたらしい"], ["新しいです", "あたらしいです"], ["新しくない", "あたらしくない"], ["新しかった", "あたらしかった"], ["新しくて", "あたらしくて"], ["新しくできる", "あたらしくできる"],
  ["静か", "しずか"], ["静かです", "しずかです"], ["静かではない", "しずかではない"], ["静かだった", "しずかだった"], ["静かで", "しずかで"], ["静かにできる", "しずかにできる"],
  ["好き", "すき"], ["好きです", "すきです"], ["好きではない", "すきではない"], ["好きだった", "すきだった"], ["好きで", "すきで"], ["好きになれる", "すきになれる"],
  ["起きる", "おきる"], ["起きます", "おきます"], ["起きない", "おきない"], ["起きた", "おきた"], ["起きて", "おきて"], ["起きられる", "おきられる"],
  ["寝る", "ねる"], ["寝ます", "ねます"], ["寝ない", "ねない"], ["寝た", "ねた"], ["寝て", "ねて"], ["寝られる", "ねられる"],
  ["帰る", "かえる"], ["帰ります", "かえります"], ["帰らない", "かえらない"], ["帰った", "かえった"], ["帰って", "かえって"], ["帰れる", "かえれる"],
  ["書く", "かく"], ["書きます", "かきます"], ["書かない", "かかない"], ["書いた", "かいた"], ["書いて", "かいて"], ["書ける", "かける"],
  ["お願いする", "おねがいする"], ["お願いします", "おねがいします"], ["お願いしない", "おねがいしない"], ["お願いした", "おねがいした"], ["お願いして", "おねがいして"], ["お願いできる", "おねがいできる"],
  ["言う", "いう"], ["言います", "いいます"], ["言わない", "いわない"], ["言った", "いった"], ["言って", "いって"], ["言える", "いえる"],
  ["勉強する", "べんきょうする"], ["勉強しない", "べんきょうしない"], ["勉強した", "べんきょうした"], ["勉強しません", "べんきょうしません"], ["勉強しました", "べんきょうしました"], ["勉強しますか", "べんきょうしますか"], ["勉強したいです", "べんきょうしたいです"],
  ["飲む", "のむ"], ["飲まない", "のまない"], ["飲んだ", "のんだ"], ["飲みません", "のみません"], ["飲みました", "のみました"], ["飲みますか", "のみますか"], ["飲みたいです", "のみたいです"],
  ["新しい本は", "あたらしいほんは"], ["この山は", "このやまは"], ["便利です", "べんりです"], ["高いです", "たかいです"], ["この部屋は", "このへやは"], ["静かです", "しずかです"], ["この道具は", "このどうぐは"],
  ["七時に", "しちじに"], ["夜に", "よるに"], ["九時から五時まで", "くじからごじまで"], ["働きます", "はたらきます"], ["朝から夜まで", "あさからよるまで"],
  ["学校に行って", "がっこうにいって"], ["家に帰って", "いえにかえって"], ["暑いですから", "あついですから"], ["忙しいですから", "いそがしいですから"], ["行きません", "いきません"],
  ["もう一度", "もういちど"], ["言ってください", "いってください"], ["ゆっくり", "ゆっくり"], ["話してください", "はなしてください"],
  ["今日は", "きょうは"], ["何をしますか", "なにをしますか"], ["駅は", "えきは"], ["どこですか", "どこですか"], ["すみません", "すみません"], ["もう一度お願いします", "もういちどおねがいします"], ["日本語で", "にほんごで"],
  ["何をしますか。", "なにをしますか。"], ["どこですか。", "どこですか。"],
];

supplementalReadings.forEach(([value, reading]) => readings.set(value, reading));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function needsReading(value) {
  return /[゠-ヿ㐀-鿿]/.test(String(value));
}

function withReading(value) {
  if (!needsReading(value)) return value;
  const reading = readings.get(value);
  if (!reading || reading === value) return value;
  return `${value}（${reading}）`;
}

function sentenceWithReading(subject, object, verb) {
  const sentence = `${subject}${object}${verb}\u3002`;
  const reading = `${readings.get(subject) || subject}${readings.get(object) || object}${readings.get(verb) || verb}\u3002`;
  return `${sentence}\uff08${reading}\uff09`;
}

const units = [
  {
    id: "engine-00.unit.sentence",
    theme: "Sentence Engine",
    goal: "Basic structure",
    description: "Build the core Japanese sentence frame before expanding vocabulary. Learners practice how topics, identity, location, and action fit together.",
    objectives: [
      "\uff21\u306f\uff22\u3067\u3059",
      "\uff21\u306f\uff22\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
      "\uff21\u306f\u5834\u6240\u306b\u3044\u307e\u3059",
      "\uff21\u306f\u76ee\u7684\u8a9e\u3092\u301c\u307e\u3059",
    ],
    visualExamples: [
      "Identity frame: A\u306fB\u3067\u3059",
      "Negative frame: A\u306fB\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
      "Action frame: A\u306f\u76ee\u7684\u8a9e\u3092\u301c\u307e\u3059",
    ],
  },
  {
    id: "engine-00.unit.verb",
    theme: "Verb Engine",
    goal: "Verb groups",
    description: "Learn verbs as a working system: dictionary form, polite form, negative form, past forms, and the early map of advanced forms.",
    objectives: [
      "\u4e94\u6bb5\u52d5\u8a5e\u30fb\u4e00\u6bb5\u52d5\u8a5e\u30fb\u4e0d\u898f\u5247\u52d5\u8a5e",
      "\u4e01\u5be7\u4f53\u3068\u666e\u901a\u4f53",
      "\u5426\u5b9a\u5f62\u3068\u904e\u53bb\u5f62",
      "\u6bce\u65e5\u306e\u52d5\u4f5c\u52d5\u8a5e",
    ],
    visualExamples: [
      "\u4e00\u6bb5: \u98df\u3079\u308b\u2192\u98df\u3079\u307e\u3059\u2192\u98df\u3079\u306a\u3044",
      "\u4e94\u6bb5: \u66f8\u304f\u2192\u66f8\u304d\u307e\u3059\u2192\u66f8\u304b\u306a\u3044",
      "\u4e0d\u898f\u5247: \u3059\u308b\u2192\u3057\u307e\u3059 / \u6765\u308b\u2192\u6765\u307e\u3059",
    ],
  },
  {
    id: "engine-00.unit.particle",
    theme: "Particle Engine",
    goal: "Usage over definitions",
    description: "Particles are practiced as sentence behavior. The emphasis is what each particle does inside a reusable pattern.",
    objectives: [
      "\u306f\uff1a\u8a71\u984c",
      "\u304c\uff1a\u4e3b\u8a9e\u306e\u7126\u70b9",
      "\u3092\uff1a\u76ee\u7684\u8a9e",
      "\u306b\uff1a\u6642\u9593\u30fb\u5834\u6240\u30fb\u76ee\u6a19",
      "\u3067\uff1a\u52d5\u4f5c\u306e\u5834\u6240\u30fb\u624b\u6bb5",
    ],
    visualExamples: [
      "\u306f: topic marker - \u79c1\u306f...",
      "\u3092: action target - \u672c\u3092\u8aad\u307f\u307e\u3059",
      "\u3067 vs \u306b: \u56f3\u66f8\u9928\u3067 / \u99c5\u306b",
    ],
  },
  {
    id: "engine-00.unit.question",
    theme: "Question Engine",
    goal: "Ask and answer",
    description: "Convert statements into questions and build answer habits without translating word by word.",
    objectives: [
      "\u300c\u304b\u300d\u306e\u7591\u554f\u6587",
      "\u8ab0\u30fb\u4f55\u30fb\u3069\u3053\u30fb\u3044\u3064",
      "\u306f\u3044\uff0f\u3044\u3044\u3048\u306e\u7b54\u3048",
      "\u77ed\u304f\u81ea\u7136\u306a\u8fd4\u4e8b",
    ],
    visualExamples: [
      "Yes/No: \u301c\u307e\u3059\u304b",
      "WH: \u8ab0\u30fb\u4f55\u30fb\u3069\u3053\u30fb\u3044\u3064",
      "Answer: \u306f\u3044\u3001\u301c\u3067\u3059 / \u3044\u3044\u3048\u3001\u301c\u307e\u305b\u3093",
    ],
  },
  {
    id: "engine-00.unit.description",
    theme: "Description Engine",
    goal: "Adjectives",
    description: "Describe people, places, and things using i-adjectives, na-adjectives, and noun modifiers.",
    objectives: [
      "\u3044\u5f62\u5bb9\u8a5e",
      "\u306a\u5f62\u5bb9\u8a5e",
      "\u540d\u8a5e\uff0b\u306e\uff0b\u540d\u8a5e",
      "\u7c21\u5358\u306a\u6bd4\u8f03\u8868\u73fe",
    ],
    visualExamples: [
      "\u3044-adj: \u65b0\u3057\u3044\u672c / \u9ad8\u3044\u5c71",
      "\u306a-adj: \u9759\u304b\u306a\u90e8\u5c4b / \u4fbf\u5229\u306a\u9053\u5177",
      "\u306e-link: \u65e5\u672c\u8a9e\u306e\u672c / \u79c1\u306e\u30ce\u30fc\u30c8",
    ],
  },
  {
    id: "engine-00.unit.time",
    theme: "Time Engine",
    goal: "Time and duration",
    description: "Practice past, present, future intention, schedule, frequency, and duration in connected sentences.",
    objectives: [
      "\u6642\u9593\u306b\u52d5\u4f5c",
      "\u6bce\u65e5\u3068\u983b\u5ea6\u8868\u73fe",
      "\u904e\u53bb\u5f62",
      "\u304b\u3089\u30fb\u307e\u3067\u3067\u671f\u9593\u3092\u8868\u3059",
    ],
    visualExamples: [
      "Point time: \u4e03\u6642\u306b / \u6708\u66dc\u65e5\u306b",
      "Frequency: \u6bce\u65e5 / \u3068\u304d\u3069\u304d / \u3088\u304f",
      "Duration: \u4e5d\u6642\u304b\u3089\u4e94\u6642\u307e\u3067",
    ],
  },
  {
    id: "engine-00.unit.action",
    theme: "Action Engine",
    goal: "Daily activities",
    description: "Turn high-frequency verbs into daily-life sentences: eating, going, working, studying, buying, seeing, and using.",
    objectives: [
      "\u79fb\u52d5\u52d5\u8a5e",
      "\u4f1a\u8a71\u306e\u52d5\u8a5e",
      "\u4ed5\u4e8b\u3068\u5b66\u6821\u306e\u65e5\u8ab2",
      "\u5bb6\u3068\u98df\u3079\u7269\u306e\u52d5\u4f5c",
    ],
    visualExamples: [
      "Movement: \u6765\u307e\u3059\u30fb\u884c\u304d\u307e\u3059\u30fb\u5e30\u308a\u307e\u3059",
      "Object action: \u3054\u98ef\u3092\u98df\u3079\u307e\u3059 / \u672c\u3092\u8aad\u307f\u307e\u3059",
      "Routine chain: \u8d77\u304d\u307e\u3059\u2192\u50cd\u304d\u307e\u3059\u2192\u5bdd\u307e\u3059",
    ],
  },
  {
    id: "engine-00.unit.connection",
    theme: "Connection Engine",
    goal: "Link ideas",
    description: "Move from isolated sentences into linked thought using sequence, reason, contrast, and examples.",
    objectives: [
      "\u305d\u3057\u3066",
      "\u3067\u3082",
      "\u304b\u3089",
      "\u3066\u5f62\u3067\u3064\u306a\u3052\u308b",
      "\u300c\u3068\u300d\u3067\u540d\u8a5e\u3092\u4e26\u3079\u308b",
    ],
    visualExamples: [
      "Sequence: \u301c\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u301c",
      "Contrast: \u301c\u3067\u3059\u3002\u3067\u3082\u301c",
      "Reason/link: \u301c\u304b\u3089 / \u301c\u3066\u3001\u301c\u307e\u3059",
    ],
  },
  {
    id: "engine-00.unit.expression",
    theme: "Expression Engine",
    goal: "Intentions and requests",
    description: "Practice wanting, permission, requests, ability, invitations, and polite social expressions.",
    objectives: [
      "\u305f\u3044",
      "\u3066\u3082\u3044\u3044\u3067\u3059",
      "\u3066\u304f\u3060\u3055\u3044",
      "\u53ef\u80fd\u5f62",
      "\u307e\u3057\u3087\u3046",
    ],
    visualExamples: [
      "Want: \u301c\u305f\u3044\u3067\u3059",
      "Permission: \u301c\u3066\u3082\u3044\u3044\u3067\u3059\u304b",
      "Request/invite: \u301c\u3066\u304f\u3060\u3055\u3044 / \u301c\u307e\u3057\u3087\u3046",
    ],
  },
  {
    id: "engine-00.unit.conversation",
    theme: "Conversation Engine",
    goal: "Natural exchange",
    description: "Use the whole engine in mini dialogues, role play, listening, speaking, and short writing.",
    objectives: [
      "\u4f1a\u8a71\u306e\u30bf\u30fc\u30f3",
      "\u805e\u304d\u8fd4\u3057\u8868\u73fe",
      "\u77ed\u3044\u65e5\u8a18",
      "\u3086\u3063\u304f\u308a\u306e\u8074\u89e3",
    ],
    visualExamples: [
      "Turn: A\u304c\u8cea\u554f\u2192B\u304c\u7b54\u3048\u308b",
      "Repair: \u3082\u3046\u4e00\u5ea6\u304a\u9858\u3044\u3057\u307e\u3059",
      "Output: role play\u30fbshadowing\u30fbshort diary",
    ],
  },
];

const loopsByUnit = {
  "engine-00.unit.sentence": [
    {
      title: "Frame Recognition",
      description: "Recognize the basic sentence frame before adding more vocabulary.",
      rows: [
        ["identity", "私は学生です。", "I am a student.", "わたしはがくせいです。"],
        ["negative", "私は学生ではありません。", "I am not a student.", "わたしはがくせいではありません。"],
        ["location", "母は家にいます。", "My mother is at home.", "はははいえにいます。"],
        ["action", "先生は日本語を話します。", "The teacher speaks Japanese.", "せんせいはにほんごをはなします。"],
      ],
    },
    {
      title: "Topic Swap",
      description: "Change the topic while keeping the same sentence logic.",
      rows: [
        ["私は", "私は学校で勉強します。", "I study at school.", "わたしはがっこうでべんきょうします。"],
        ["友だちは", "友だちは学校で勉強します。", "My friend studies at school.", "ともだちはがっこうでべんきょうします。"],
        ["先生は", "先生は学校で話します。", "The teacher speaks at school.", "せんせいはがっこうではなします。"],
        ["母は", "母は家で飲みます。", "My mother drinks at home.", "はははいえでのみます。"],
      ],
    },
    {
      title: "Polarity Change",
      description: "Move a sentence between affirmative, negative, past, and question forms.",
      rows: [
        ["affirmative", "私は水を飲みます。", "I drink water.", "わたしはみずをのみます。"],
        ["negative", "私は水を飲みません。", "I do not drink water.", "わたしはみずをのみません。"],
        ["past", "私は水を飲みました。", "I drank water.", "わたしはみずをのみました。"],
        ["question", "水を飲みますか。", "Do you drink water?", "みずをのみますか。"],
      ],
    },
    {
      title: "Location and Object",
      description: "Choose whether the middle component is a place, destination, or object.",
      rows: [
        ["place", "私は学校で勉強します。", "I study at school.", "わたしはがっこうでべんきょうします。"],
        ["destination", "私は学校に行きます。", "I go to school.", "わたしはがっこうにいきます。"],
        ["object", "私は日本語を勉強します。", "I study Japanese.", "わたしはにほんごをべんきょうします。"],
        ["object", "私はコーヒーを飲みます。", "I drink coffee.", "わたしはこーひーをのみます。"],
      ],
    },
    {
      title: "Original Sentence Output",
      description: "Use the frames to produce short original sentences.",
      rows: [
        ["AはBです", "私はエンジニアです。", "I am an engineer.", "わたしはえんじにあです。"],
        ["Aは場所にいます", "先生は学校にいます。", "The teacher is at school.", "せんせいはがっこうにいます。"],
        ["Aは場所でVます", "友だちは駅で待ちます。", "My friend waits at the station.", "ともだちはえきでまちます。"],
        ["AはOをVます", "母は水を飲みます。", "My mother drinks water.", "はははみずをのみます。"],
      ],
    },
  ],
  "engine-00.unit.verb": [
    {
      title: "Verb Group Sort",
      description: "Identify ichidan, godan, and irregular verbs before transforming them.",
      rows: [
        ["ichidan", "食べる", "eat", "たべる"],
        ["ichidan", "見る", "see", "みる"],
        ["godan", "行く", "go", "いく"],
        ["irregular", "する", "do", "する"],
      ],
    },
    {
      title: "Polite Form Build",
      description: "Move from dictionary form to polite form.",
      rows: [
        ["食べる", "食べます", "eat / will eat", "たべます"],
        ["行く", "行きます", "go / will go", "いきます"],
        ["話す", "話します", "speak / will speak", "はなします"],
        ["する", "します", "do / will do", "します"],
      ],
    },
    {
      title: "Negative Form Build",
      description: "Practice plain negative and polite negative side by side.",
      rows: [
        ["plain", "食べない", "do not eat", "たべない"],
        ["polite", "食べません", "do not eat", "たべません"],
        ["plain", "行かない", "do not go", "いかない"],
        ["polite", "行きません", "do not go", "いきません"],
      ],
    },
    {
      title: "Past and Te-form",
      description: "Connect past forms and te-forms as related movements.",
      rows: [
        ["past", "食べた", "ate", "たべた"],
        ["te-form", "食べて", "eat and...", "たべて"],
        ["past", "行った", "went", "いった"],
        ["te-form", "行って", "go and...", "いって"],
      ],
    },
    {
      title: "Verb Sentence Output",
      description: "Use each verb form in a complete sentence.",
      rows: [
        ["polite", "私は日本語を勉強します。", "I study Japanese.", "わたしはにほんごをべんきょうします。"],
        ["negative", "今日は行きません。", "I will not go today.", "きょうはいきません。"],
        ["past", "昨日、水を飲みました。", "I drank water yesterday.", "きのう、みずをのみました。"],
        ["potential", "日本語を話せます。", "I can speak Japanese.", "にほんごをはなせます。"],
      ],
    },
  ],
  "engine-00.unit.particle": [
    {
      title: "Particle Role Recall",
      description: "Recall what each particle does inside a sentence.",
      rows: [
        ["topic", "私は学生です。", "は marks the topic.", "わたしはがくせいです。"],
        ["focus", "先生がいます。", "が marks the focused subject.", "せんせいがいます。"],
        ["object", "水を飲みます。", "を marks the object.", "みずをのみます。"],
        ["place", "学校で勉強します。", "で marks action place.", "がっこうでべんきょうします。"],
      ],
    },
    {
      title: "は and が Contrast",
      description: "Compare topic and focus without reducing both to subject markers.",
      rows: [
        ["topic", "私は学生です。", "As for me, I am a student.", "わたしはがくせいです。"],
        ["focus", "私が学生です。", "I am the one who is a student.", "わたしががくせいです。"],
        ["topic", "今日は暑いです。", "As for today, it is hot.", "きょうはあついです。"],
        ["focus", "水があります。", "There is water.", "みずがあります。"],
      ],
    },
    {
      title: "を Object Practice",
      description: "Attach を to what receives the action.",
      rows: [
        ["drink", "水を飲みます。", "drink water", "みずをのみます。"],
        ["read", "本を読みます。", "read a book", "ほんをよみます。"],
        ["study", "日本語を勉強します。", "study Japanese", "にほんごをべんきょうします。"],
        ["buy", "コーヒーを買います。", "buy coffee", "こーひーをかいます。"],
      ],
    },
    {
      title: "に and で Choice",
      description: "Choose に for destination or point time, and で for action place or means.",
      rows: [
        ["destination", "学校に行きます。", "go to school", "がっこうにいきます。"],
        ["point time", "七時に起きます。", "wake up at seven", "しちじにおきます。"],
        ["action place", "学校で勉強します。", "study at school", "がっこうでべんきょうします。"],
        ["means", "電車で行きます。", "go by train", "でんしゃでいきます。"],
      ],
    },
    {
      title: "Particle Repair",
      description: "Find and fix the particle that does not fit the sentence role.",
      rows: [
        ["fix", "学校で勉強します。", "not 学校に勉強します", "がっこうでべんきょうします。"],
        ["fix", "学校に行きます。", "not 学校で行きます", "がっこうにいきます。"],
        ["fix", "水を飲みます。", "not 水で飲みます", "みずをのみます。"],
        ["fix", "今日は行きません。", "not 今日を行きません", "きょうはいきません。"],
      ],
    },
  ],
  "engine-00.unit.question": [
    {
      title: "か Question Builder",
      description: "Turn statements into polite yes/no questions with か.",
      rows: [
        ["statement", "日本語を勉強します。", "I study Japanese.", "にほんごをべんきょうします。"],
        ["question", "日本語を勉強しますか。", "Do you study Japanese?", "にほんごをべんきょうしますか。"],
        ["statement", "学校に行きます。", "I go to school.", "がっこうにいきます。"],
        ["question", "学校に行きますか。", "Do you go to school?", "がっこうにいきますか。"],
      ],
    },
    {
      title: "WH Word Recall",
      description: "Practice 誰, 何, どこ, and いつ as question anchors.",
      rows: [
        ["who", "誰ですか。", "Who is it?", "だれですか。"],
        ["what", "何をしますか。", "What will you do?", "なにをしますか。"],
        ["where", "どこで勉強しますか。", "Where will you study?", "どこでべんきょうしますか。"],
        ["when", "いつ行きますか。", "When will you go?", "いついきますか。"],
      ],
    },
    {
      title: "Short Answer Habit",
      description: "Answer naturally with short, reusable replies.",
      rows: [
        ["yes", "はい、勉強します。", "Yes, I will study.", "はい、べんきょうします。"],
        ["no", "いいえ、行きません。", "No, I will not go.", "いいえ、いきません。"],
        ["place", "学校で勉強します。", "I will study at school.", "がっこうでべんきょうします。"],
        ["time", "七時に行きます。", "I will go at seven.", "しちじにいきます。"],
      ],
    },
    {
      title: "Question Chain",
      description: "Ask a question, answer it, and ask a follow-up.",
      rows: [
        ["A", "今日は何をしますか。", "What will you do today?", "きょうはなにをしますか。"],
        ["B", "日本語を勉強します。", "I will study Japanese.", "にほんごをべんきょうします。"],
        ["A", "どこで勉強しますか。", "Where will you study?", "どこでべんきょうしますか。"],
        ["B", "家で勉強します。", "I will study at home.", "いえでべんきょうします。"],
      ],
    },
    {
      title: "Question Output",
      description: "Produce your own question and answer pairs.",
      rows: [
        ["make", "水を飲みますか。", "Ask about drinking water.", "みずをのみますか。"],
        ["make", "誰が行きますか。", "Ask who will go.", "だれがいきますか。"],
        ["make", "いつ勉強しますか。", "Ask when someone studies.", "いつべんきょうしますか。"],
        ["make", "どこに行きますか。", "Ask where someone goes.", "どこにいきますか。"],
      ],
    },
  ],
  "engine-00.unit.description": [
    {
      title: "Adjective Type Sort",
      description: "Separate い-adjectives, な-adjectives, and の noun links.",
      rows: [
        ["い", "新しい本", "new book", "あたらしいほん"],
        ["い", "高い山", "high mountain", "たかいやま"],
        ["な", "静かな部屋", "quiet room", "しずかなへや"],
        ["の", "日本語の本", "Japanese-language book", "にほんごのほん"],
      ],
    },
    {
      title: "Predicate Description",
      description: "Describe a noun with です sentences.",
      rows: [
        ["い", "この本は新しいです。", "This book is new.", "このほんはあたらしいです。"],
        ["い", "この山は高いです。", "This mountain is high.", "このやまはたかいです。"],
        ["な", "この部屋は静かです。", "This room is quiet.", "このへやはしずかです。"],
        ["noun", "これは私のノートです。", "This is my notebook.", "これはわたしののーとです。"],
      ],
    },
    {
      title: "Noun Phrase Builder",
      description: "Build compact noun phrases before using full sentences.",
      rows: [
        ["い + noun", "おいしい水", "delicious water", "おいしいみず"],
        ["い + noun", "古い家", "old house", "ふるいいえ"],
        ["な + noun", "便利な道具", "convenient tool", "べんりなどうぐ"],
        ["の + noun", "先生の本", "teacher's book", "せんせいのほん"],
      ],
    },
    {
      title: "Negative Description",
      description: "Practice simple negative descriptions.",
      rows: [
        ["い negative", "この本は新しくないです。", "This book is not new.", "このほんはあたらしくないです。"],
        ["な negative", "この部屋は静かではありません。", "This room is not quiet.", "このへやはしずかではありません。"],
        ["noun negative", "これは私の本ではありません。", "This is not my book.", "これはわたしのほんではありません。"],
        ["contrast", "高いです。でも便利です。", "It is expensive, but convenient.", "たかいです。でもべんりです。"],
      ],
    },
    {
      title: "Description Output",
      description: "Describe people, places, and things with your own words.",
      rows: [
        ["person", "先生は親切です。", "The teacher is kind.", "せんせいはしんせつです。"],
        ["place", "学校は大きいです。", "The school is big.", "がっこうはおおきいです。"],
        ["thing", "このコーヒーはおいしいです。", "This coffee is delicious.", "このこーひーはおいしいです。"],
        ["owner", "これは友だちのノートです。", "This is my friend's notebook.", "これはともだちののーとです。"],
      ],
    },
  ],
  "engine-00.unit.time": [
    {
      title: "Point Time",
      description: "Attach に to clock time and scheduled points.",
      rows: [
        ["clock", "七時に起きます。", "I wake up at seven.", "しちじにおきます。"],
        ["day", "月曜日に行きます。", "I go on Monday.", "げつようびにいきます。"],
        ["time", "今、勉強します。", "I study now.", "いま、べんきょうします。"],
        ["question", "いつ行きますか。", "When will you go?", "いついきますか。"],
      ],
    },
    {
      title: "Frequency",
      description: "Say how often an action happens.",
      rows: [
        ["every day", "毎日、日本語を勉強します。", "I study Japanese every day.", "まいにち、にほんごをべんきょうします。"],
        ["often", "よく水を飲みます。", "I often drink water.", "よくみずをのみます。"],
        ["sometimes", "ときどき学校に行きます。", "I sometimes go to school.", "ときどきがっこうにいきます。"],
        ["not much", "あまりコーヒーを飲みません。", "I do not drink much coffee.", "あまりこーひーをのみません。"],
      ],
    },
    {
      title: "Past Time",
      description: "Pair time words with past verb forms.",
      rows: [
        ["yesterday", "昨日、勉強しました。", "I studied yesterday.", "きのう、べんきょうしました。"],
        ["last week", "先週、学校に行きました。", "I went to school last week.", "せんしゅう、がっこうにいきました。"],
        ["this morning", "今朝、水を飲みました。", "I drank water this morning.", "けさ、みずをのみました。"],
        ["question", "昨日、何をしましたか。", "What did you do yesterday?", "きのう、なにをしましたか。"],
      ],
    },
    {
      title: "Duration",
      description: "Use から and まで to describe a span.",
      rows: [
        ["from-to", "九時から五時まで働きます。", "I work from nine to five.", "くじからごじまではたらきます。"],
        ["from", "朝から勉強します。", "I study from morning.", "あさからべんきょうします。"],
        ["until", "夜まで勉強します。", "I study until night.", "よるまでべんきょうします。"],
        ["question", "何時からですか。", "From what time?", "なんじからですか。"],
      ],
    },
    {
      title: "Schedule Output",
      description: "Produce a small daily schedule in Japanese.",
      rows: [
        ["morning", "朝、コーヒーを飲みます。", "In the morning, I drink coffee.", "あさ、こーひーをのみます。"],
        ["school", "八時に学校に行きます。", "I go to school at eight.", "はちじにがっこうにいきます。"],
        ["study", "夜、日本語を勉強します。", "At night, I study Japanese.", "よる、にほんごをべんきょうします。"],
        ["sleep", "十一時に寝ます。", "I sleep at eleven.", "じゅういちじにねます。"],
      ],
    },
  ],
  "engine-00.unit.action": [
    {
      title: "Daily Verb Recall",
      description: "Recall high-frequency action verbs as usable sentence parts.",
      rows: [
        ["go", "行きます", "go", "いきます"],
        ["eat", "食べます", "eat", "たべます"],
        ["drink", "飲みます", "drink", "のみます"],
        ["study", "勉強します", "study", "べんきょうします"],
      ],
    },
    {
      title: "Movement Actions",
      description: "Practice movement verbs with destinations.",
      rows: [
        ["go", "学校に行きます。", "go to school", "がっこうにいきます。"],
        ["come", "家に来ます。", "come home", "いえにきます。"],
        ["return", "家に帰ります。", "return home", "いえにかえります。"],
        ["wait", "駅で待ちます。", "wait at the station", "えきでまちます。"],
      ],
    },
    {
      title: "Object Actions",
      description: "Pair common objects with action verbs.",
      rows: [
        ["drink", "水を飲みます。", "drink water", "みずをのみます。"],
        ["eat", "ご飯を食べます。", "eat rice / a meal", "ごはんをたべます。"],
        ["read", "本を読みます。", "read a book", "ほんをよみます。"],
        ["buy", "コーヒーを買います。", "buy coffee", "こーひーをかいます。"],
      ],
    },
    {
      title: "Routine Chain",
      description: "Chain actions into a day instead of isolated verbs.",
      rows: [
        ["wake", "朝、起きます。", "I wake up in the morning.", "あさ、おきます。"],
        ["work", "九時から働きます。", "I work from nine.", "くじからはたらきます。"],
        ["study", "夜、勉強します。", "I study at night.", "よる、べんきょうします。"],
        ["sleep", "十一時に寝ます。", "I sleep at eleven.", "じゅういちじにねます。"],
      ],
    },
    {
      title: "Action Output",
      description: "Make original daily-life action sentences.",
      rows: [
        ["today", "今日は学校に行きます。", "Today I go to school.", "きょうはがっこうにいきます。"],
        ["home", "家でご飯を食べます。", "I eat at home.", "いえでごはんをたべます。"],
        ["friend", "友だちと話します。", "I talk with a friend.", "ともだちとはなします。"],
        ["Japanese", "日本語を使います。", "I use Japanese.", "にほんごをつかいます。"],
      ],
    },
  ],
  "engine-00.unit.connection": [
    {
      title: "Sequence with そして",
      description: "Connect actions in order.",
      rows: [
        ["sequence", "学校に行きます。そして勉強します。", "I go to school, and then study.", "がっこうにいきます。そしてべんきょうします。"],
        ["sequence", "水を飲みます。そして本を読みます。", "I drink water, and then read a book.", "みずをのみます。そしてほんをよみます。"],
        ["sequence", "朝、起きます。そしてコーヒーを飲みます。", "I wake up, and then drink coffee.", "あさ、おきます。そしてこーひーをのみます。"],
        ["sequence", "家に帰ります。そして寝ます。", "I return home, and then sleep.", "いえにかえります。そしてねます。"],
      ],
    },
    {
      title: "Contrast with でも",
      description: "Add contrast after a short sentence.",
      rows: [
        ["contrast", "高いです。でも便利です。", "It is expensive, but convenient.", "たかいです。でもべんりです。"],
        ["contrast", "行きたいです。でも時間がありません。", "I want to go, but I have no time.", "いきたいです。でもじかんがありません。"],
        ["contrast", "勉強します。でも難しいです。", "I study, but it is difficult.", "べんきょうします。でもむずかしいです。"],
        ["contrast", "飲みます。でも食べません。", "I drink, but I do not eat.", "のみます。でもたべません。"],
      ],
    },
    {
      title: "Reason with から",
      description: "Give a simple reason after a sentence.",
      rows: [
        ["reason", "忙しいですから、行きません。", "Because I am busy, I will not go.", "いそがしいですから、いきません。"],
        ["reason", "日本語を勉強しますから、話します。", "Because I study Japanese, I speak.", "にほんごをべんきょうしますから、はなします。"],
        ["reason", "暑いですから、水を飲みます。", "Because it is hot, I drink water.", "あついですから、みずをのみます。"],
        ["reason", "学校がありますから、早く起きます。", "Because there is school, I wake up early.", "がっこうがありますから、はやくおきます。"],
      ],
    },
    {
      title: "Te-form Link",
      description: "Use te-form to link actions smoothly.",
      rows: [
        ["link", "家に帰って、勉強します。", "I return home and study.", "いえにかえって、べんきょうします。"],
        ["link", "水を飲んで、寝ます。", "I drink water and sleep.", "みずをのんで、ねます。"],
        ["link", "学校に行って、先生と話します。", "I go to school and talk with the teacher.", "がっこうにいって、せんせいとはなします。"],
        ["link", "本を読んで、日本語を勉強します。", "I read a book and study Japanese.", "ほんをよんで、にほんごをべんきょうします。"],
      ],
    },
    {
      title: "Connected Output",
      description: "Write two connected sentences instead of one isolated sentence.",
      rows: [
        ["sequence", "今日は学校に行きます。そして日本語を勉強します。", "Today I go to school and study Japanese.", "きょうはがっこうにいきます。そしてにほんごをべんきょうします。"],
        ["reason", "水が好きですから、よく飲みます。", "Because I like water, I often drink it.", "みずがすきですから、よくのみます。"],
        ["contrast", "コーヒーは好きです。でも今日は飲みません。", "I like coffee, but I will not drink it today.", "こーひーはすきです。でもきょうはのみません。"],
        ["te-form", "家に帰って、短い日記を書きます。", "I go home and write a short diary.", "いえにかえって、みじかいにっきをかきます。"],
      ],
    },
  ],
  "engine-00.unit.expression": [
    {
      title: "Want with たい",
      description: "Express personal intention with たいです.",
      rows: [
        ["want", "日本語を勉強したいです。", "I want to study Japanese.", "にほんごをべんきょうしたいです。"],
        ["want", "水を飲みたいです。", "I want to drink water.", "みずをのみたいです。"],
        ["want", "学校に行きたいです。", "I want to go to school.", "がっこうにいきたいです。"],
        ["question", "何をしたいですか。", "What do you want to do?", "なにをしたいですか。"],
      ],
    },
    {
      title: "Permission",
      description: "Ask and give permission with てもいいです.",
      rows: [
        ["ask", "水を飲んでもいいですか。", "May I drink water?", "みずをのんでもいいですか。"],
        ["answer", "はい、飲んでもいいです。", "Yes, you may drink.", "はい、のんでもいいです。"],
        ["ask", "ここで勉強してもいいですか。", "May I study here?", "ここでべんきょうしてもいいですか。"],
        ["answer", "いいえ、だめです。", "No, you may not.", "いいえ、だめです。"],
      ],
    },
    {
      title: "Requests",
      description: "Make clear polite requests with てください.",
      rows: [
        ["request", "もう一度言ってください。", "Please say it one more time.", "もういちどいってください。"],
        ["request", "ゆっくり話してください。", "Please speak slowly.", "ゆっくりはなしてください。"],
        ["request", "ここに書いてください。", "Please write here.", "ここにかいてください。"],
        ["request", "水をください。", "Water, please.", "みずをください。"],
      ],
    },
    {
      title: "Ability and Invitation",
      description: "Practice can-do statements and invitations.",
      rows: [
        ["ability", "日本語を話せます。", "I can speak Japanese.", "にほんごをはなせます。"],
        ["ability", "漢字を読めます。", "I can read kanji.", "かんじをよめます。"],
        ["invite", "一緒に勉強しましょう。", "Let's study together.", "いっしょにべんきょうしましょう。"],
        ["invite", "水を飲みましょう。", "Let's drink water.", "みずをのみましょう。"],
      ],
    },
    {
      title: "Social Output",
      description: "Use polite expression patterns in small social exchanges.",
      rows: [
        ["ask", "日本語を話してもいいですか。", "May I speak Japanese?", "にほんごをはなしてもいいですか。"],
        ["request", "もう一度お願いします。", "One more time, please.", "もういちどおねがいします。"],
        ["want", "友だちと話したいです。", "I want to talk with my friend.", "ともだちとはなしたいです。"],
        ["invite", "一緒に行きましょう。", "Let's go together.", "いっしょにいきましょう。"],
      ],
    },
  ],
  "engine-00.unit.conversation": [
    {
      title: "Turn Taking",
      description: "Practice short A/B exchanges with one question and one answer.",
      rows: [
        ["A", "今日は何をしますか。", "What will you do today?", "きょうはなにをしますか。"],
        ["B", "日本語を勉強します。", "I will study Japanese.", "にほんごをべんきょうします。"],
        ["A", "どこで勉強しますか。", "Where will you study?", "どこでべんきょうしますか。"],
        ["B", "家で勉強します。", "I will study at home.", "いえでべんきょうします。"],
      ],
    },
    {
      title: "Repair Phrases",
      description: "Use phrases that keep conversation alive when you miss something.",
      rows: [
        ["again", "もう一度お願いします。", "One more time, please.", "もういちどおねがいします。"],
        ["slowly", "ゆっくりお願いします。", "Slowly, please.", "ゆっくりおねがいします。"],
        ["what", "何ですか。", "What is it?", "なんですか。"],
        ["confirm", "水ですか。", "Is it water?", "みずですか。"],
      ],
    },
    {
      title: "Role Play",
      description: "Practice one small situation at a time.",
      rows: [
        ["school", "先生、質問があります。", "Teacher, I have a question.", "せんせい、しつもんがあります。"],
        ["cafe", "コーヒーをください。", "Coffee, please.", "こーひーをください。"],
        ["station", "駅はどこですか。", "Where is the station?", "えきはどこですか。"],
        ["friend", "一緒に勉強しましょう。", "Let's study together.", "いっしょにべんきょうしましょう。"],
      ],
    },
    {
      title: "Short Diary",
      description: "Turn practice sentences into a tiny written output.",
      rows: [
        ["today", "今日は学校に行きました。", "Today I went to school.", "きょうはがっこうにいきました。"],
        ["study", "日本語を勉強しました。", "I studied Japanese.", "にほんごをべんきょうしました。"],
        ["friend", "友だちと話しました。", "I talked with a friend.", "ともだちとはなしました。"],
        ["feeling", "楽しかったです。", "It was fun.", "たのしかったです。"],
      ],
    },
    {
      title: "Conversation Output",
      description: "Combine question, answer, repair, and follow-up into one mini dialogue.",
      rows: [
        ["A", "すみません、駅はどこですか。", "Excuse me, where is the station?", "すみません、えきはどこですか。"],
        ["B", "駅はあそこです。", "The station is over there.", "えきはあそこです。"],
        ["A", "もう一度お願いします。", "One more time, please.", "もういちどおねがいします。"],
        ["B", "あそこです。一緒に行きましょう。", "Over there. Let's go together.", "あそこです。いっしょにいきましょう。"],
      ],
    },
  ],
};

const fallbackLoops = loopsByUnit["engine-00.unit.sentence"];

const verbs = [
  { kana: "\u98df\u3079\u308b", meaning: "eat", group: "ichidan", forms: ["\u98df\u3079\u308b", "\u98df\u3079\u307e\u3059", "\u98df\u3079\u306a\u3044", "\u98df\u3079\u305f", "\u98df\u3079\u3066", "\u98df\u3079\u3089\u308c\u308b"] },
  { kana: "\u884c\u304f", meaning: "go", group: "godan", forms: ["\u884c\u304f", "\u884c\u304d\u307e\u3059", "\u884c\u304b\u306a\u3044", "\u884c\u3063\u305f", "\u884c\u3063\u3066", "\u884c\u3051\u308b"] },
  { kana: "\u898b\u308b", meaning: "see", group: "ichidan", forms: ["\u898b\u308b", "\u898b\u307e\u3059", "\u898b\u306a\u3044", "\u898b\u305f", "\u898b\u3066", "\u898b\u3089\u308c\u308b"] },
  { kana: "\u8a71\u3059", meaning: "speak", group: "godan", forms: ["\u8a71\u3059", "\u8a71\u3057\u307e\u3059", "\u8a71\u3055\u306a\u3044", "\u8a71\u3057\u305f", "\u8a71\u3057\u3066", "\u8a71\u305b\u308b"] },
  { kana: "\u3059\u308b", meaning: "do", group: "irregular", forms: ["\u3059\u308b", "\u3057\u307e\u3059", "\u3057\u306a\u3044", "\u3057\u305f", "\u3057\u3066", "\u3067\u304d\u308b"] },
];

const formLabels = ["Dictionary", "Polite", "Negative", "Past", "Te-form", "Potential"];

const contextualVerbsByUnit = {
  "engine-00.unit.sentence": [
    { kana: "ある", meaning: "exist / have", group: "godan", forms: ["ある", "あります", "ない", "あった", "あって", "ありえる"] },
    { kana: "いる", meaning: "be / exist", group: "ichidan", forms: ["いる", "います", "いない", "いた", "いて", "いられる"] },
    verbs[0],
  ],
  "engine-00.unit.verb": verbs,
  "engine-00.unit.particle": [verbs[0], verbs[1], verbs[3], { kana: "読む", meaning: "read", group: "godan", forms: ["読む", "読みます", "読まない", "読んだ", "読んで", "読める"] }],
  "engine-00.unit.question": [verbs[1], verbs[3], verbs[4], { kana: "聞く", meaning: "ask / listen", group: "godan", forms: ["聞く", "聞きます", "聞かない", "聞いた", "聞いて", "聞ける"] }],
  "engine-00.unit.description": [
    { kana: "新しい", meaning: "be new", group: "i-adjective", forms: ["新しい", "新しいです", "新しくない", "新しかった", "新しくて", "新しくできる"] },
    { kana: "静か", meaning: "be quiet", group: "na-adjective", forms: ["静か", "静かです", "静かではない", "静かだった", "静かで", "静かにできる"] },
    { kana: "好き", meaning: "like / be liked", group: "na-adjective", forms: ["好き", "好きです", "好きではない", "好きだった", "好きで", "好きになれる"] },
  ],
  "engine-00.unit.time": [verbs[1], { kana: "起きる", meaning: "wake up", group: "ichidan", forms: ["起きる", "起きます", "起きない", "起きた", "起きて", "起きられる"] }, { kana: "寝る", meaning: "sleep", group: "ichidan", forms: ["寝る", "寝ます", "寝ない", "寝た", "寝て", "寝られる"] }, verbs[4]],
  "engine-00.unit.action": [verbs[0], verbs[1], verbs[2], verbs[3], verbs[4]],
  "engine-00.unit.connection": [verbs[0], verbs[1], { kana: "帰る", meaning: "return", group: "godan", forms: ["帰る", "帰ります", "帰らない", "帰った", "帰って", "帰れる"] }, { kana: "書く", meaning: "write", group: "godan", forms: ["書く", "書きます", "書かない", "書いた", "書いて", "書ける"] }],
  "engine-00.unit.expression": [verbs[0], verbs[1], verbs[3], { kana: "お願いする", meaning: "request", group: "irregular compound", forms: ["お願いする", "お願いします", "お願いしない", "お願いした", "お願いして", "お願いできる"] }],
  "engine-00.unit.conversation": [verbs[3], { kana: "言う", meaning: "say", group: "godan", forms: ["言う", "言います", "言わない", "言った", "言って", "言える"] }, { kana: "聞く", meaning: "ask / listen", group: "godan", forms: ["聞く", "聞きます", "聞かない", "聞いた", "聞いて", "聞ける"] }, verbs[4]],
};
const subjects = [jp.watashi, jp.haha, jp.tomodachi, jp.sensei, jp.engineer];

const subjectsByUnit = {
  "engine-00.unit.question": [jp.watashi, jp.tomodachi, jp.sensei],
  "engine-00.unit.conversation": [jp.watashi, jp.tomodachi, jp.sensei],
};
const patternModes = [
  {
    id: "location-action",
    label: "Location Action",
    componentLabel: "Location",
    components: [
      { value: jp.school, verbs: [jp.benkyou, jp.hanashimasu] },
      { value: jp.home, verbs: [jp.benkyou, jp.nomimasu] },
      { value: jp.station, verbs: [jp.hanashimasu] },
    ],
  },
  {
    id: "object-action",
    label: "Object Action",
    componentLabel: "Object",
    components: [
      { value: jp.japanese, verbs: [jp.benkyou, jp.hanashimasu] },
      { value: jp.coffee, verbs: [jp.nomimasu] },
    ],
  },
  {
    id: "movement",
    label: "Movement",
    componentLabel: "Destination",
    components: [
      { value: jp.schoolDestination, verbs: [jp.ikimasu] },
      { value: jp.homeDestination, verbs: [jp.ikimasu] },
      { value: jp.stationDestination, verbs: [jp.ikimasu] },
    ],
  },
];

const contextualPatternModesByUnit = {
  "engine-00.unit.sentence": patternModes,
  "engine-00.unit.verb": [
    { id: "verb-politeness", label: "Verb Politeness", componentLabel: "Object", components: [{ value: jp.japanese, verbs: ["勉強します", "勉強しません", "勉強しました"] }, { value: jp.coffee, verbs: ["飲みます", "飲みません", "飲みました"] }] },
    { id: "verb-plain", label: "Plain Verb Frame", componentLabel: "Object", components: [{ value: jp.japanese, verbs: ["勉強する", "勉強しない", "勉強した"] }, { value: jp.coffee, verbs: ["飲む", "飲まない", "飲んだ"] }] },
  ],
  "engine-00.unit.particle": [
    { id: "particle-place", label: "Particle Place", componentLabel: "Particle phrase", components: [{ value: jp.school, verbs: [jp.benkyou] }, { value: jp.schoolDestination, verbs: [jp.ikimasu] }, { value: jp.japanese, verbs: [jp.benkyou] }] },
    { id: "particle-object", label: "Particle Object", componentLabel: "Object", components: [{ value: jp.coffee, verbs: [jp.nomimasu] }, { value: jp.japanese, verbs: [jp.benkyou, jp.hanashimasu] }] },
  ],
  "engine-00.unit.question": [
    { id: "yes-no-question", label: "Yes/No Question", componentLabel: "Topic", components: [{ value: jp.japanese, verbs: ["勉強しますか"] }, { value: jp.coffee, verbs: ["飲みますか"] }] },
    { id: "where-question", label: "Where Question", componentLabel: "Place", components: [{ value: jp.school, verbs: ["何をしますか"] }, { value: jp.home, verbs: ["勉強しますか"] }] },
  ],
  "engine-00.unit.description": [
    { id: "i-adjective", omitSubject: true, label: "い-Adjective", componentLabel: "Description", components: [{ value: "新しい本は", verbs: ["便利です"] }, { value: "この山は", verbs: ["高いです"] }] },
    { id: "na-adjective", omitSubject: true, label: "な-Adjective", componentLabel: "Description", components: [{ value: "この部屋は", verbs: ["静かです"] }, { value: "この道具は", verbs: ["便利です"] }] },
  ],
  "engine-00.unit.time": [
    { id: "point-time", omitSubject: true, label: "Point Time", componentLabel: "Time", components: [{ value: "七時に", verbs: ["起きます"] }, { value: "夜に", verbs: ["勉強します"] }] },
    { id: "duration", omitSubject: true, label: "Duration", componentLabel: "Span", components: [{ value: "九時から五時まで", verbs: ["働きます"] }, { value: "朝から夜まで", verbs: ["勉強します"] }] },
  ],
  "engine-00.unit.action": patternModes,
  "engine-00.unit.connection": [
    { id: "sequence", omitSubject: true, label: "Sequence", componentLabel: "First action", components: [{ value: "学校に行って", verbs: ["勉強します"] }, { value: "家に帰って", verbs: ["寝ます"] }] },
    { id: "reason", omitSubject: true, label: "Reason", componentLabel: "Reason", components: [{ value: "暑いですから", verbs: ["水を飲みます"] }, { value: "忙しいですから", verbs: ["行きません"] }] },
  ],
  "engine-00.unit.expression": [
    { id: "want", label: "Want", componentLabel: "Wanted action", components: [{ value: jp.japanese, verbs: ["勉強したいです"] }, { value: jp.coffee, verbs: ["飲みたいです"] }] },
    { id: "request", omitSubject: true, label: "Request", componentLabel: "Request phrase", components: [{ value: "もう一度", verbs: ["言ってください"] }, { value: "ゆっくり", verbs: ["話してください"] }] },
  ],
  "engine-00.unit.conversation": [
    { id: "dialogue-question", omitSubject: true, label: "Dialogue Question", componentLabel: "Prompt", components: [{ value: "今日は", verbs: ["何をしますか"] }, { value: "駅は", verbs: ["どこですか"] }] },
    { id: "repair", omitSubject: true, label: "Repair Phrase", componentLabel: "Situation", components: [{ value: "すみません", verbs: ["もう一度お願いします"] }, { value: "日本語で", verbs: ["お願いします"] }] },
  ],
};

const criteriaByUnit = {
  "engine-00.unit.sentence": [
    { id: "engine-00.unit.sentence.criterion.frame-speed", title: "Build AはBです, negative, location, and action frames in 5-10 seconds" },
    { id: "engine-00.unit.sentence.criterion.topic-control", title: "Change topic, place, object, and verb without losing the frame" },
    { id: "engine-00.unit.sentence.criterion.output", title: "Write 20 original basic sentences from the frame map" },
  ],
  "engine-00.unit.verb": [
    { id: "engine-00.unit.verb.criterion.groups", title: "Identify ichidan, godan, and irregular verbs from examples" },
    { id: "engine-00.unit.verb.criterion.forms", title: "Transform common verbs through polite, negative, past, te-form, and potential" },
    { id: "engine-00.unit.verb.criterion.output", title: "Use each target verb form in an original sentence" },
  ],
  "engine-00.unit.particle": [
    { id: "engine-00.unit.particle.criterion.roles", title: "Choose particles by sentence role, not English translation" },
    { id: "engine-00.unit.particle.criterion.repair", title: "Repair incorrect は, が, を, に, and で choices" },
    { id: "engine-00.unit.particle.criterion.output", title: "Write particle-focused sentences with place, time, object, and topic" },
  ],
  "engine-00.unit.question": [
    { id: "engine-00.unit.question.criterion.yesno", title: "Convert statements into yes/no questions with か" },
    { id: "engine-00.unit.question.criterion.wh", title: "Ask and answer 誰, 何, どこ, and いつ questions" },
    { id: "engine-00.unit.question.criterion.output", title: "Produce five short question-answer pairs" },
  ],
  "engine-00.unit.description": [
    { id: "engine-00.unit.description.criterion.types", title: "Separate い-adjective, な-adjective, and の-link descriptions" },
    { id: "engine-00.unit.description.criterion.negative", title: "Make affirmative and negative descriptions" },
    { id: "engine-00.unit.description.criterion.output", title: "Describe people, places, and things in original sentences" },
  ],
  "engine-00.unit.time": [
    { id: "engine-00.unit.time.criterion.points", title: "Use point time, frequency, past time, and duration accurately" },
    { id: "engine-00.unit.time.criterion.schedule", title: "Build a small daily schedule in Japanese" },
    { id: "engine-00.unit.time.criterion.output", title: "Write a short routine with time anchors" },
  ],
  "engine-00.unit.action": [
    { id: "engine-00.unit.action.criterion.recall", title: "Recall daily-life verbs for movement, eating, drinking, reading, and studying" },
    { id: "engine-00.unit.action.criterion.chain", title: "Chain daily actions into a routine" },
    { id: "engine-00.unit.action.criterion.output", title: "Write original action sentences about today" },
  ],
  "engine-00.unit.connection": [
    { id: "engine-00.unit.connection.criterion.sequence", title: "Connect sentences with そして, でも, から, and te-form links" },
    { id: "engine-00.unit.connection.criterion.reason", title: "Give simple reasons and contrasts" },
    { id: "engine-00.unit.connection.criterion.output", title: "Write connected two-sentence outputs" },
  ],
  "engine-00.unit.expression": [
    { id: "engine-00.unit.expression.criterion.want", title: "Express wants, permission, requests, ability, and invitations" },
    { id: "engine-00.unit.expression.criterion.social", title: "Use polite social phrases in short exchanges" },
    { id: "engine-00.unit.expression.criterion.output", title: "Write useful request and invitation sentences" },
  ],
  "engine-00.unit.conversation": [
    { id: "engine-00.unit.conversation.criterion.turns", title: "Handle question-answer turn taking" },
    { id: "engine-00.unit.conversation.criterion.repair", title: "Use repair phrases when you miss something" },
    { id: "engine-00.unit.conversation.criterion.output", title: "Produce a mini dialogue with a follow-up" },
  ],
};

const criteria = Object.values(criteriaByUnit).flat();

const courseRegistry = window.JapaneseMastery?.courseRegistry;
const currentCourse = courseRegistry?.getCourse("engine-00") || {
  id: "engine-00",
  title: "00 Japanese Engine",
  unitIds: units.map((unit) => unit.id),
};

const progressKeys = {
  completedUnitIds: "jm.completedUnitIds",
  completedCriterionIds: "jm.completedCriterionIds",
  completedPracticeItemIds: "jm.completedPracticeItemIds",
  writingPadLayout: "jm.writingPadLayout",
  writingPadHidden: "jm.writingPadHidden",
  legacyCompleteUnits: "je-complete-units",
  legacyCompleteCriteria: "je-complete-criteria",
};

const progressSchemaVersion = 1;

function readJsonArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function migrateIndexedProgress(newKey, oldKey, items) {
  const existingIds = readJsonArray(newKey);
  if (existingIds.length > 0) return existingIds;

  return readJsonArray(oldKey)
    .map((value) => Number(value))
    .filter((index) => Number.isInteger(index) && items[index])
    .map((index) => items[index].id);
}

const state = {
  activeUnit: 0,
  activeLoop: 0,
  activeVerb: 0,
  completeUnits: new Set(migrateIndexedProgress(progressKeys.completedUnitIds, progressKeys.legacyCompleteUnits, units)),
  completeCriteria: new Set(migrateIndexedProgress(progressKeys.completedCriterionIds, progressKeys.legacyCompleteCriteria, criteria)),
  completePracticeItems: new Set(readJsonArray(progressKeys.completedPracticeItemIds)),
};

const els = {
  unitList: document.querySelector("#unitList"),
  readinessValue: document.querySelector("#readinessValue"),
  readinessBar: document.querySelector("#readinessBar"),
  unitTitle: document.querySelector("#unitTitle"),
  unitGoalBadge: document.querySelector("#unitGoalBadge"),
  unitVisualExamples: [
    document.querySelector("#unitVisualExampleOne"),
    document.querySelector("#unitVisualExampleTwo"),
    document.querySelector("#unitVisualExampleThree"),
  ],
  unitDescription: document.querySelector("#unitDescription"),
  objectiveList: document.querySelector("#objectiveList"),
  loopTabs: document.querySelector("#loopTabs"),
  loopCount: document.querySelector("#loopCount"),
  practiceStage: document.querySelector("#practiceStage"),
  completeLoopBtn: document.querySelector("#completeLoopBtn"),
  exportProgressBtn: document.querySelector("#exportProgressBtn"),
  importProgressBtn: document.querySelector("#importProgressBtn"),
  importProgressFile: document.querySelector("#importProgressFile"),
  helpBtn: document.querySelector("#helpBtn"),
  sidebarHelpBtn: document.querySelector("#sidebarHelpBtn"),
  helpDialog: document.querySelector("#helpDialog"),
  closeHelpBtn: document.querySelector("#closeHelpBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  drillEyebrow: document.querySelector("#drillEyebrow"),
  drillTitle: document.querySelector("#drillTitle"),
  nextVerbBtn: document.querySelector("#nextVerbBtn"),
  verbKana: document.querySelector("#verbKana"),
  verbMeaning: document.querySelector("#verbMeaning"),
  verbGroup: document.querySelector("#verbGroup"),
  verbMatrix: document.querySelector("#verbMatrix"),
  builderEyebrow: document.querySelector("#builderEyebrow"),
  builderTitle: document.querySelector("#builderTitle"),
  patternModeSelect: document.querySelector("#patternModeSelect"),
  componentLabel: document.querySelector("#componentLabel"),
  subjectSelect: document.querySelector("#subjectSelect"),
  objectSelect: document.querySelector("#objectSelect"),
  verbSelect: document.querySelector("#verbSelect"),
  generatedSentence: document.querySelector("#generatedSentence"),
  patternFinishBtn: document.querySelector("#patternFinishBtn"),
  shufflePatternBtn: document.querySelector("#shufflePatternBtn"),
  floatingWritingPad: document.querySelector("#floatingWritingPad"),
  writingPadHandle: document.querySelector("#writingPadHandle"),
  writingPadResizeHandle: document.querySelector("#writingPadResizeHandle"),
  writingBox: document.querySelector("#writingBox"),
  clearWritingBtn: document.querySelector("#clearWritingBtn"),
  closeWritingPadBtn: document.querySelector("#closeWritingPadBtn"),
  openWritingPadBtn: document.querySelector("#openWritingPadBtn"),
  assessmentTitle: document.querySelector("#assessmentTitle"),
  criteriaList: document.querySelector("#criteriaList"),
};

const writingPadLimits = {
  minWidth: 260,
  minHeight: 170,
  edgeGap: 12,
};

function saveProgress() {
  localStorage.setItem(progressKeys.completedUnitIds, JSON.stringify([...state.completeUnits]));
  localStorage.setItem(progressKeys.completedCriterionIds, JSON.stringify([...state.completeCriteria]));
  localStorage.setItem(progressKeys.completedPracticeItemIds, JSON.stringify([...state.completePracticeItems]));
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function isPracticeItemComplete(itemId) {
  return state.completePracticeItems.has(itemId);
}

function finishMarkerHtml(itemId, label = "Mark finished") {
  const isComplete = isPracticeItemComplete(itemId);
  return `<button class="finish-marker ${isComplete ? "complete" : ""}" type="button" data-practice-item="${escapeHtml(itemId)}" title="${label}" aria-label="${label}" aria-pressed="${isComplete}">${isComplete ? "✓" : "○"}</button>`;
}

function togglePracticeItem(itemId) {
  if (!itemId) return;
  if (state.completePracticeItems.has(itemId)) {
    state.completePracticeItems.delete(itemId);
  } else {
    state.completePracticeItems.add(itemId);
  }
  saveProgress();
}

function readWritingPadHidden() {
  return localStorage.getItem(progressKeys.writingPadHidden) === "true";
}

function setWritingPadVisible(isVisible) {
  els.floatingWritingPad.classList.toggle("hidden", !isVisible);
  els.openWritingPadBtn.classList.toggle("hidden", isVisible);
  localStorage.setItem(progressKeys.writingPadHidden, String(!isVisible));
}

function createProgressExport() {
  const isPadHidden = readWritingPadHidden();
  return {
    schemaVersion: progressSchemaVersion,
    app: "Japanese Engine",
    courseId: currentCourse.id,
    exportedAt: new Date().toISOString(),
    completedUnitIds: [...state.completeUnits],
    completedCriterionIds: [...state.completeCriteria],
    completedPracticeItemIds: [...state.completePracticeItems],
    writingPad: {
      text: els.writingBox.value,
      layout: isPadHidden ? readWritingPadLayout() : currentWritingPadLayout(),
      hidden: isPadHidden,
    },
  };
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function exportProgress() {
  const date = new Date().toISOString().slice(0, 10);
  downloadJson(`japanese-engine-progress-${date}.json`, createProgressExport());
}

function mergeWritingPadText(importedText) {
  if (!importedText) return;
  const currentText = els.writingBox.value.trim();
  const nextText = String(importedText).trim();
  if (!nextText || currentText.includes(nextText)) return;
  els.writingBox.value = currentText ? `${els.writingBox.value}\n\nImported practice:\n${nextText}` : nextText;
}

function importProgressData(data) {
  if (!data || typeof data !== "object") {
    throw new Error("The selected file is not a valid progress backup.");
  }

  state.completeUnits = new Set(uniqueValues([...state.completeUnits, ...(Array.isArray(data.completedUnitIds) ? data.completedUnitIds : [])]));
  state.completeCriteria = new Set(uniqueValues([...state.completeCriteria, ...(Array.isArray(data.completedCriterionIds) ? data.completedCriterionIds : [])]));
  state.completePracticeItems = new Set(uniqueValues([...state.completePracticeItems, ...(Array.isArray(data.completedPracticeItemIds) ? data.completedPracticeItemIds : [])]));

  mergeWritingPadText(data.writingPad?.text);
  if (data.writingPad?.layout) {
    saveWritingPadLayout(applyWritingPadLayout(data.writingPad.layout));
  }
  if (typeof data.writingPad?.hidden === "boolean") {
    setWritingPadVisible(!data.writingPad.hidden);
  }

  saveProgress();
  render();
}

function importProgressFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      importProgressData(JSON.parse(reader.result));
      alert("Progress import complete.");
    } catch (error) {
      alert(error.message || "Progress import failed.");
    } finally {
      els.importProgressFile.value = "";
    }
  });
  reader.readAsText(file);
}

function readWritingPadLayout() {
  try {
    const layout = JSON.parse(localStorage.getItem(progressKeys.writingPadLayout) || "{}");
    return typeof layout === "object" && layout !== null ? layout : {};
  } catch {
    return {};
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function clampWritingPadLayout(layout) {
  const gap = writingPadLimits.edgeGap;
  const width = clamp(Number(layout.width) || 380, writingPadLimits.minWidth, Math.max(writingPadLimits.minWidth, window.innerWidth - gap * 2));
  const height = clamp(Number(layout.height) || 228, writingPadLimits.minHeight, Math.max(writingPadLimits.minHeight, window.innerHeight - gap * 2));
  const x = clamp(Number(layout.x) || window.innerWidth - width - 22, gap, Math.max(gap, window.innerWidth - width - gap));
  const y = clamp(Number(layout.y) || window.innerHeight - height - 22, gap, Math.max(gap, window.innerHeight - height - gap));
  return { x, y, width, height };
}

function applyWritingPadLayout(layout) {
  const safeLayout = clampWritingPadLayout(layout);
  els.floatingWritingPad.style.left = `${safeLayout.x}px`;
  els.floatingWritingPad.style.top = `${safeLayout.y}px`;
  els.floatingWritingPad.style.width = `${safeLayout.width}px`;
  els.floatingWritingPad.style.height = `${safeLayout.height}px`;
  els.floatingWritingPad.style.bottom = "auto";
  return safeLayout;
}

function saveWritingPadLayout(layout) {
  localStorage.setItem(progressKeys.writingPadLayout, JSON.stringify(clampWritingPadLayout(layout)));
}

function currentWritingPadLayout() {
  const rect = els.floatingWritingPad.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

function startWritingPadDrag(event, mode) {
  if (mode === "move" && event.target.closest("button, textarea")) return;
  event.preventDefault();

  const pointer = event;
  const start = currentWritingPadLayout();
  const startX = pointer.clientX;
  const startY = pointer.clientY;

  function onPointerMove(moveEvent) {
    const dx = moveEvent.clientX - startX;
    const dy = moveEvent.clientY - startY;
    const nextLayout = mode === "move"
      ? { ...start, x: start.x + dx, y: start.y + dy }
      : { ...start, width: start.width + dx, height: start.height + dy };
    applyWritingPadLayout(nextLayout);
  }

  function onPointerUp() {
    saveWritingPadLayout(currentWritingPadLayout());
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp, { once: true });
}

function readiness() {
  return Math.round((state.completeUnits.size / units.length) * 70 + (state.completeCriteria.size / criteria.length) * 30);
}

function renderUnits() {
  els.unitList.innerHTML = units.map((unit, index) => {
    const isDone = state.completeUnits.has(unit.id);
    return `
      <button class="unit-card ${index === state.activeUnit ? "active" : ""}" type="button" data-unit="${index}">
        <span class="unit-number">${index + 1}</span>
        <span>
          <strong>${unit.theme}</strong>
          <small>${unit.goal}</small>
        </span>
        <span class="unit-check ${isDone ? "done" : ""}" aria-label="${isDone ? "Complete" : "Not complete"}">${isDone ? "OK" : ""}</span>
      </button>
    `;
  }).join("");
}

function renderOverview() {
  const unit = units[state.activeUnit];
  els.unitTitle.textContent = unit.theme;
  els.unitGoalBadge.textContent = unit.goal;
  els.unitVisualExamples.forEach((example, index) => {
    example.textContent = unit.visualExamples[index] || unit.objectives[index] || unit.theme;
  });
  els.unitDescription.textContent = unit.description;
  els.objectiveList.innerHTML = unit.objectives.map((objective, index) => `
    <div class="objective-item">
      <span>${index + 1}</span>
      <strong>${escapeHtml(withReading(objective))}</strong>
      ${finishMarkerHtml(`${unit.id}.objective.${index}`, "Mark objective finished")}
    </div>
  `).join("");
}

function currentUnit() {
  return units[state.activeUnit] || units[0];
}

function currentLoops() {
  return loopsByUnit[currentUnit().id] || fallbackLoops;
}

function formattedPracticeValue(row) {
  return row[3] ? `${row[1]}\uff08${row[3]}\uff09` : withReading(row[1]);
}

function renderLoops() {
  const unit = currentUnit();
  const unitLoops = currentLoops();
  if (state.activeLoop >= unitLoops.length) state.activeLoop = 0;
  els.loopCount.textContent = `${state.activeLoop + 1} / ${unitLoops.length}`;
  els.loopTabs.innerHTML = unitLoops.map((loop, index) => `<button class="${index === state.activeLoop ? "active" : ""}" type="button" role="tab" data-loop="${index}" aria-label="${escapeHtml(unit.theme)} loop ${index + 1}: ${escapeHtml(loop.title)}">${index + 1}</button>`).join("");
  const loop = unitLoops[state.activeLoop];
  els.practiceStage.innerHTML = `
    <div>
      <p class="eyebrow">${escapeHtml(unit.theme)} loop</p>
      <h4 class="loop-title">${escapeHtml(loop.title)}</h4>
      <p class="unit-description">${escapeHtml(loop.description)}</p>
    </div>
    <div class="drill-stack">
      ${loop.rows.map((row, rowIndex) => `
        <div class="drill-row">
          <small>${escapeHtml(row[0])}</small>
          <strong>${escapeHtml(formattedPracticeValue(row))}</strong>
          <small>${escapeHtml(row[2])}</small>
          ${finishMarkerHtml(`${unit.id}.loop.${state.activeLoop}.row.${rowIndex}`, "Mark practice row finished")}
        </div>
      `).join("")}
    </div>
  `;
}

function currentVerbs() {
  return contextualVerbsByUnit[currentUnit().id] || verbs;
}

function currentSubjects() {
  return subjectsByUnit[currentUnit().id] || subjects;
}

function currentPatternModes() {
  return contextualPatternModesByUnit[currentUnit().id] || patternModes;
}

function currentCriteria() {
  return criteriaByUnit[currentUnit().id] || [];
}

function renderVerb() {
  const unit = currentUnit();
  const unitVerbs = currentVerbs();
  if (state.activeVerb >= unitVerbs.length) state.activeVerb = 0;
  const verb = unitVerbs[state.activeVerb];
  els.drillEyebrow.textContent = unit.theme;
  els.drillTitle.textContent = unit.id === "engine-00.unit.description" ? "Description form matrix" : "Context form matrix";
  els.verbKana.textContent = withReading(verb.kana);
  els.verbMeaning.textContent = verb.meaning;
  els.verbGroup.textContent = verb.group;
  els.verbMatrix.innerHTML = verb.forms.map((form, index) => `
    <div class="matrix-row">
      <span>${formLabels[index]}</span>
      <strong>${escapeHtml(withReading(form))}</strong>
      ${finishMarkerHtml(`verb.${verb.kana}.form.${index}`, "Mark conjugation form finished")}
    </div>
  `).join("");
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(withReading(value))}</option>`).join("");
}

function fillPatternModeSelect() {
  const modes = currentPatternModes();
  els.patternModeSelect.innerHTML = modes.map((mode) => `<option value="${escapeHtml(mode.id)}">${escapeHtml(mode.label)}</option>`).join("");
}

function currentPatternMode() {
  const modes = currentPatternModes();
  return modes.find((mode) => mode.id === els.patternModeSelect.value) || modes[0];
}

function currentComponentEntry() {
  const mode = currentPatternMode();
  return mode.components.find((component) => component.value === els.objectSelect.value) || mode.components[0];
}

function fillComponentSelect() {
  const mode = currentPatternMode();
  els.componentLabel.textContent = mode.componentLabel;
  fillSelect(els.objectSelect, mode.components.map((component) => component.value));
}

function fillVerbSelect(allowedVerbs, previousValue = els.verbSelect.value) {
  fillSelect(els.verbSelect, allowedVerbs);
  if (allowedVerbs.includes(previousValue)) {
    els.verbSelect.value = previousValue;
  }
}

function syncPatternVerbOptions() {
  const component = currentComponentEntry();
  fillVerbSelect(component.verbs);
}

function configureContextualTools() {
  const unit = currentUnit();
  els.builderEyebrow.textContent = unit.theme;
  els.builderTitle.textContent = unit.id === "engine-00.unit.conversation" ? "Dialogue generator" : "Context pattern generator";
  els.assessmentTitle.textContent = `${unit.theme} checklist`;
  fillPatternModeSelect();
  fillSelect(els.subjectSelect, currentSubjects());
  fillComponentSelect();
  syncPatternVerbOptions();
  renderSentence();
}

function patternSentenceParts() {
  const mode = currentPatternMode();
  const subject = els.subjectSelect.value || currentSubjects()[0];
  const component = currentComponentEntry();
  const object = els.objectSelect.value || component.value;
  const verb = els.verbSelect.value || component.verbs[0];
  const parts = mode.omitSubject ? [object, verb] : [subject, object, verb];
  return { mode, subject, component, object, verb, parts };
}

function composePatternSentence(parts) {
  return `${parts.join("")}。`;
}

function composePatternReading(parts) {
  return `${parts.map((part) => readings.get(part) || part).join("")}。`;
}

function sentenceFromParts(parts) {
  const sentence = composePatternSentence(parts);
  const reading = composePatternReading(parts);
  return sentence === reading || !needsReading(sentence) ? sentence : `${sentence}（${reading}）`;
}

function renderSentence() {
  const { parts } = patternSentenceParts();
  els.generatedSentence.textContent = sentenceFromParts(parts);
  updatePatternFinishMarker();
}

function selectedPatternPracticeId() {
  const { mode, subject, object, verb } = patternSentenceParts();
  return `pattern.${currentUnit().id}.${mode.id}.${subject}.${object}.${verb}`;
}

function updatePatternFinishMarker() {
  const itemId = selectedPatternPracticeId();
  const isComplete = isPracticeItemComplete(itemId);
  els.patternFinishBtn.dataset.practiceItem = itemId;
  els.patternFinishBtn.classList.toggle("complete", isComplete);
  els.patternFinishBtn.textContent = isComplete ? "✓" : "○";
  els.patternFinishBtn.setAttribute("aria-pressed", String(isComplete));
}

function selectedPatternExerciseText() {
  const { mode, subject, object, verb, parts } = patternSentenceParts();
  return [
    `Pattern Generator Exercise: ${currentUnit().theme}`,
    `Pattern mode: ${mode.label}`,
    mode.omitSubject ? "Subject: not used in this pattern" : `Subject: ${withReading(subject)}`,
    `${mode.componentLabel}: ${withReading(object)}`,
    `Verb/phrase: ${withReading(verb)}`,
    `Generated sentence: ${sentenceFromParts(parts)}`,
    "My sentence:",
  ].join("\n");
}

function appendToWritingPad(text) {
  const separator = els.writingBox.value.trim() ? "\n\n" : "";
  els.writingBox.value = `${els.writingBox.value}${separator}${text}`;
  setWritingPadVisible(true);
  els.writingBox.focus();
}

function unitLearningItemsExerciseText(unit) {
  return [
    `[Unit Learning Items: ${unit.id}]`,
    `${unit.theme} / ${unit.goal}`,
    unit.description,
    "",
    ...unit.objectives.flatMap((objective, index) => [
      `${index + 1}. ${withReading(objective)}`,
      "My practice sentence:",
    ]),
  ].join("\n");
}

function appendUnitLearningItemsToWritingPad(unit) {
  const marker = `[Unit Learning Items: ${unit.id}]`;
  if (els.writingBox.value.includes(marker)) {
    els.writingBox.focus();
    return;
  }
  appendToWritingPad(unitLearningItemsExerciseText(unit));
}

function practiceLoopExerciseText(unit, loop, index) {
  return [
    `[${unit.theme} Practice Loop: ${index + 1} - ${loop.title}]`,
    loop.description,
    "",
    ...loop.rows.flatMap((row, rowIndex) => [
      `${rowIndex + 1}. ${row[0]}`,
      `Japanese/component: ${formattedPracticeValue(row)}`,
      `Meaning/task: ${row[2]}`,
      "My practice:",
    ]),
  ].join("\n");
}

function appendPracticeLoopToWritingPad(loopIndex) {
  const unit = currentUnit();
  const unitLoops = currentLoops();
  appendToWritingPad(practiceLoopExerciseText(unit, unitLoops[loopIndex], loopIndex));
}

function verbExerciseText(verb) {
  return [
    `[Verb Engine: ${withReading(verb.kana)}]`,
    `Meaning: ${verb.meaning}`,
    `Group: ${verb.group}`,
    "",
    ...verb.forms.flatMap((form, index) => [
      `${formLabels[index]}: ${withReading(form)}`,
      "My practice sentence:",
    ]),
  ].join("\n");
}

function appendVerbToWritingPad(verbIndex) {
  appendToWritingPad(verbExerciseText(currentVerbs()[verbIndex]));
}

function renderCriteria() {
  const unitCriteria = currentCriteria();
  els.criteriaList.innerHTML = unitCriteria.map((item, index) => {
    const complete = state.completeCriteria.has(item.id);
    return `
      <div class="criteria-item ${complete ? "complete" : ""}">
        <span>${complete ? "OK" : index + 1}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <button type="button" data-criteria="${escapeHtml(item.id)}">${complete ? "Marked complete" : "Mark complete"}</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderReadiness() {
  const score = readiness();
  els.readinessValue.textContent = `${score}%`;
  els.readinessBar.value = score;
}

function validateCourseBoundary() {
  const declaredUnitIds = new Set(currentCourse.unitIds || []);
  const missingIds = units.filter((unit) => !declaredUnitIds.has(unit.id));
  if (missingIds.length > 0) {
    console.warn("Course package is missing unit IDs:", missingIds.map((unit) => unit.id));
  }
}

function render() {
  renderUnits();
  renderOverview();
  renderLoops();
  renderVerb();
  configureContextualTools();
  renderCriteria();
  renderReadiness();
}

configureContextualTools();
applyWritingPadLayout(readWritingPadLayout());
setWritingPadVisible(!readWritingPadHidden());
validateCourseBoundary();

els.unitList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-unit]");
  if (!card) return;
  state.activeUnit = Number(card.dataset.unit);
  state.activeLoop = 0;
  state.activeVerb = 0;
  render();
  appendUnitLearningItemsToWritingPad(units[state.activeUnit]);
});

els.loopTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-loop]");
  if (!tab) return;
  state.activeLoop = Number(tab.dataset.loop);
  renderLoops();
  appendPracticeLoopToWritingPad(state.activeLoop);
});

els.completeLoopBtn.addEventListener("click", () => {
  state.completeUnits.add(units[state.activeUnit].id);
  saveProgress();
  render();
});

els.exportProgressBtn.addEventListener("click", exportProgress);

els.importProgressBtn.addEventListener("click", () => {
  els.importProgressFile.click();
});

els.importProgressFile.addEventListener("change", () => {
  importProgressFile(els.importProgressFile.files[0]);
});

function openHelp() {
  if (typeof els.helpDialog.showModal === "function") {
    els.helpDialog.showModal();
  } else {
    els.helpDialog.setAttribute("open", "");
  }
}

els.helpBtn.addEventListener("click", openHelp);
els.sidebarHelpBtn.addEventListener("click", openHelp);

els.closeHelpBtn.addEventListener("click", () => {
  els.helpDialog.close();
});

els.helpDialog.addEventListener("click", (event) => {
  if (event.target === els.helpDialog) {
    els.helpDialog.close();
  }
});

els.resetBtn.addEventListener("click", () => {
  state.completeUnits.clear();
  state.completeCriteria.clear();
  state.completePracticeItems.clear();
  els.writingBox.value = "";
  localStorage.removeItem(progressKeys.completedUnitIds);
  localStorage.removeItem(progressKeys.completedCriterionIds);
  localStorage.removeItem(progressKeys.completedPracticeItemIds);
  saveProgress();
  render();
});

els.nextVerbBtn.addEventListener("click", () => {
  state.activeVerb = (state.activeVerb + 1) % currentVerbs().length;
  renderVerb();
  appendVerbToWritingPad(state.activeVerb);
});

els.patternModeSelect.addEventListener("change", () => {
  fillComponentSelect();
  syncPatternVerbOptions();
  renderSentence();
  appendToWritingPad(selectedPatternExerciseText());
});

els.subjectSelect.addEventListener("change", () => {
  renderSentence();
  appendToWritingPad(selectedPatternExerciseText());
});

els.objectSelect.addEventListener("change", () => {
  syncPatternVerbOptions();
  renderSentence();
  appendToWritingPad(selectedPatternExerciseText());
});

els.verbSelect.addEventListener("change", () => {
  renderSentence();
  appendToWritingPad(selectedPatternExerciseText());
});

els.shufflePatternBtn.addEventListener("click", () => {
  els.patternModeSelect.selectedIndex = Math.floor(Math.random() * els.patternModeSelect.options.length);
  fillComponentSelect();
  els.subjectSelect.selectedIndex = Math.floor(Math.random() * els.subjectSelect.options.length);
  els.objectSelect.selectedIndex = Math.floor(Math.random() * els.objectSelect.options.length);
  syncPatternVerbOptions();
  els.verbSelect.selectedIndex = Math.floor(Math.random() * els.verbSelect.options.length);
  renderSentence();
  appendToWritingPad(selectedPatternExerciseText());
});

els.clearWritingBtn.addEventListener("click", () => {
  els.writingBox.value = "";
  els.writingBox.focus();
});

els.closeWritingPadBtn.addEventListener("click", () => {
  saveWritingPadLayout(currentWritingPadLayout());
  setWritingPadVisible(false);
});

els.openWritingPadBtn.addEventListener("click", () => {
  applyWritingPadLayout(readWritingPadLayout());
  setWritingPadVisible(true);
  els.writingBox.focus();
});

els.objectiveList.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-practice-item]");
  if (!marker) return;
  togglePracticeItem(marker.dataset.practiceItem);
  renderOverview();
});

els.practiceStage.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-practice-item]");
  if (!marker) return;
  togglePracticeItem(marker.dataset.practiceItem);
  renderLoops();
});

els.verbMatrix.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-practice-item]");
  if (!marker) return;
  togglePracticeItem(marker.dataset.practiceItem);
  renderVerb();
});

els.patternFinishBtn.addEventListener("click", () => {
  togglePracticeItem(els.patternFinishBtn.dataset.practiceItem);
  updatePatternFinishMarker();
});

els.writingPadHandle.addEventListener("pointerdown", (event) => {
  startWritingPadDrag(event, "move");
});

els.writingPadResizeHandle.addEventListener("pointerdown", (event) => {
  startWritingPadDrag(event, "resize");
});

window.addEventListener("resize", () => {
  saveWritingPadLayout(applyWritingPadLayout(currentWritingPadLayout()));
});

els.criteriaList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-criteria]");
  if (!button) return;
  const criterionId = button.dataset.criteria;
  if (state.completeCriteria.has(criterionId)) {
    state.completeCriteria.delete(criterionId);
  } else {
    state.completeCriteria.add(criterionId);
  }
  saveProgress();
  render();
});

render();
