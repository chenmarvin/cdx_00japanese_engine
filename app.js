const jp = {
  watashi: "\u79c1\u306f",
  haha: "\u6bcd\u306f",
  tomodachi: "\u53cb\u3060\u3061\u306f",
  sensei: "\u5148\u751f\u306f",
  engineer: "\u30a8\u30f3\u30b8\u30cb\u30a2\u306f",
  school: "\u5b66\u6821\u3067",
  home: "\u5bb6\u3067",
  station: "\u99c5\u3067",
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function withReading(value) {
  const reading = readings.get(value);
  if (!reading || reading === value) return value;
  return `${value}\uff08${reading}\uff09`;
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
  },
];

const loops = [
  {
    title: "Vocabulary Recall",
    description: "Practice Japanese to Chinese, Chinese to Japanese, Japanese to English, and English to Japanese.",
    rows: [
      ["Japanese", "\u79c1", "I / me"],
      ["Japanese", "\u4eca\u65e5", "today"],
      ["Japanese", "\u5b66\u6821", "school"],
      ["Japanese", "\u6c34", "water"],
    ],
  },
  {
    title: "Verb Transformation",
    description: "Turn one verb through the most useful forms until the movement feels automatic.",
    rows: [
      ["dictionary", "\u98df\u3079\u308b", "eat"],
      ["polite", "\u98df\u3079\u307e\u3059", "eat"],
      ["negative", "\u98df\u3079\u306a\u3044", "do not eat"],
      ["past", "\u98df\u3079\u305f", "ate"],
    ],
  },
  {
    title: "Sentence Transformation",
    description: "Change tense, polarity, politeness, and question form while preserving sentence meaning.",
    rows: [
      ["statement", "\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u3059\u3002", "I drink water."],
      ["negative", "\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u305b\u3093\u3002", "I do not drink water."],
      ["past", "\u79c1\u306f\u6c34\u3092\u98f2\u307f\u307e\u3057\u305f\u3002", "I drank water."],
      ["question", "\u6c34\u3092\u98f2\u307f\u307e\u3059\u304b\u3002", "Do you drink water?"],
    ],
  },
  {
    title: "Pattern Substitution",
    description: "Swap nouns and verbs inside a stable pattern to build fluency instead of memorized examples.",
    rows: [
      ["watashi", "\u79c1\u306f\u5b66\u6821\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "study at school"],
      ["otouto", "\u5f1f\u306f\u5bb6\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "younger brother studies at home"],
      ["sensei", "\u5148\u751f\u306f\u6559\u5ba4\u3067\u8a71\u3057\u307e\u3059\u3002", "teacher speaks in class"],
      ["tomodachi", "\u53cb\u3060\u3061\u306f\u99c5\u3067\u5f85\u3061\u307e\u3059\u3002", "friend waits at the station"],
    ],
  },
  {
    title: "Conversation",
    description: "Move the same building blocks into pair practice, role play, and mini dialogues.",
    rows: [
      ["A", "\u4eca\u65e5\u306f\u4f55\u3092\u3057\u307e\u3059\u304b\u3002", "What will you do today?"],
      ["B", "\u65e5\u672c\u8a9e\u3092\u52c9\u5f37\u3057\u307e\u3059\u3002", "I will study Japanese."],
      ["A", "\u3069\u3053\u3067\u52c9\u5f37\u3057\u307e\u3059\u304b\u3002", "Where will you study?"],
      ["B", "\u56f3\u66f8\u9928\u3067\u52c9\u5f37\u3057\u307e\u3059\u3002", "At the library."],
    ],
  },
];

const verbs = [
  { kana: "\u98df\u3079\u308b", meaning: "eat", group: "ichidan", forms: ["\u98df\u3079\u308b", "\u98df\u3079\u307e\u3059", "\u98df\u3079\u306a\u3044", "\u98df\u3079\u305f", "\u98df\u3079\u3066", "\u98df\u3079\u3089\u308c\u308b"] },
  { kana: "\u884c\u304f", meaning: "go", group: "godan", forms: ["\u884c\u304f", "\u884c\u304d\u307e\u3059", "\u884c\u304b\u306a\u3044", "\u884c\u3063\u305f", "\u884c\u3063\u3066", "\u884c\u3051\u308b"] },
  { kana: "\u898b\u308b", meaning: "see", group: "ichidan", forms: ["\u898b\u308b", "\u898b\u307e\u3059", "\u898b\u306a\u3044", "\u898b\u305f", "\u898b\u3066", "\u898b\u3089\u308c\u308b"] },
  { kana: "\u8a71\u3059", meaning: "speak", group: "godan", forms: ["\u8a71\u3059", "\u8a71\u3057\u307e\u3059", "\u8a71\u3055\u306a\u3044", "\u8a71\u3057\u305f", "\u8a71\u3057\u3066", "\u8a71\u305b\u308b"] },
  { kana: "\u3059\u308b", meaning: "do", group: "irregular", forms: ["\u3059\u308b", "\u3057\u307e\u3059", "\u3057\u306a\u3044", "\u3057\u305f", "\u3057\u3066", "\u3067\u304d\u308b"] },
];

const formLabels = ["Dictionary", "Polite", "Negative", "Past", "Te-form", "Potential"];
const subjects = [jp.watashi, jp.haha, jp.tomodachi, jp.sensei, jp.engineer];
const objects = [jp.school, jp.home, jp.station, jp.japanese, jp.coffee];
const sentenceVerbs = [jp.benkyou, jp.ikimasu, jp.nomimasu, jp.hanashimasu];
const criteria = [
  { id: "engine-00.criterion.verb-core-forms", title: "Conjugate all common verbs" },
  { id: "engine-00.criterion.basic-particles", title: "Use particles correctly in basic sentences" },
  { id: "engine-00.criterion.original-sentences", title: "Produce 500-1000 original sentences" },
  { id: "engine-00.criterion.short-reading", title: "Read short passages fluently" },
  { id: "engine-00.criterion.slow-listening", title: "Understand everyday conversations spoken slowly" },
  { id: "engine-00.criterion.connected-writing", title: "Write 10-20 connected sentences" },
];

const courseRegistry = window.JapaneseMastery?.courseRegistry;
const currentCourse = courseRegistry?.getCourse("engine-00") || {
  id: "engine-00",
  title: "00 Japanese Engine",
  unitIds: units.map((unit) => unit.id),
};

const progressKeys = {
  completedUnitIds: "jm.completedUnitIds",
  completedCriterionIds: "jm.completedCriterionIds",
  legacyCompleteUnits: "je-complete-units",
  legacyCompleteCriteria: "je-complete-criteria",
};

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
};

const els = {
  unitList: document.querySelector("#unitList"),
  readinessValue: document.querySelector("#readinessValue"),
  readinessBar: document.querySelector("#readinessBar"),
  unitTitle: document.querySelector("#unitTitle"),
  unitGoalBadge: document.querySelector("#unitGoalBadge"),
  unitDescription: document.querySelector("#unitDescription"),
  objectiveList: document.querySelector("#objectiveList"),
  loopTabs: document.querySelector("#loopTabs"),
  loopCount: document.querySelector("#loopCount"),
  practiceStage: document.querySelector("#practiceStage"),
  completeLoopBtn: document.querySelector("#completeLoopBtn"),
  helpBtn: document.querySelector("#helpBtn"),
  sidebarHelpBtn: document.querySelector("#sidebarHelpBtn"),
  helpDialog: document.querySelector("#helpDialog"),
  closeHelpBtn: document.querySelector("#closeHelpBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  nextVerbBtn: document.querySelector("#nextVerbBtn"),
  verbKana: document.querySelector("#verbKana"),
  verbMeaning: document.querySelector("#verbMeaning"),
  verbGroup: document.querySelector("#verbGroup"),
  verbMatrix: document.querySelector("#verbMatrix"),
  subjectSelect: document.querySelector("#subjectSelect"),
  objectSelect: document.querySelector("#objectSelect"),
  verbSelect: document.querySelector("#verbSelect"),
  generatedSentence: document.querySelector("#generatedSentence"),
  shufflePatternBtn: document.querySelector("#shufflePatternBtn"),
  writingBox: document.querySelector("#writingBox"),
  clearWritingBtn: document.querySelector("#clearWritingBtn"),
  criteriaList: document.querySelector("#criteriaList"),
};

function saveProgress() {
  localStorage.setItem(progressKeys.completedUnitIds, JSON.stringify([...state.completeUnits]));
  localStorage.setItem(progressKeys.completedCriterionIds, JSON.stringify([...state.completeCriteria]));
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
  els.unitDescription.textContent = unit.description;
  els.objectiveList.innerHTML = unit.objectives.map((objective, index) => `
    <div class="objective-item">
      <span>${index + 1}</span>
      <strong>${escapeHtml(withReading(objective))}</strong>
    </div>
  `).join("");
}

function renderLoops() {
  els.loopCount.textContent = `${state.activeLoop + 1} / ${loops.length}`;
  els.loopTabs.innerHTML = loops.map((loop, index) => `<button class="${index === state.activeLoop ? "active" : ""}" type="button" role="tab" data-loop="${index}">${index + 1}</button>`).join("");
  const loop = loops[state.activeLoop];
  els.practiceStage.innerHTML = `
    <div>
      <h4 class="loop-title">${loop.title}</h4>
      <p class="unit-description">${loop.description}</p>
    </div>
    <div class="drill-stack">
      ${loop.rows.map((row) => `
        <div class="drill-row">
          <small>${row[0]}</small>
          <strong>${escapeHtml(withReading(row[1]))}</strong>
          <small>${row[2]}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderVerb() {
  const verb = verbs[state.activeVerb];
  els.verbKana.textContent = withReading(verb.kana);
  els.verbMeaning.textContent = verb.meaning;
  els.verbGroup.textContent = verb.group;
  els.verbMatrix.innerHTML = verb.forms.map((form, index) => `
    <div class="matrix-row">
      <span>${formLabels[index]}</span>
      <strong>${escapeHtml(withReading(form))}</strong>
    </div>
  `).join("");
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(withReading(value))}</option>`).join("");
}

function renderSentence() {
  const subject = els.subjectSelect.value || subjects[0];
  const object = els.objectSelect.value || objects[0];
  const verb = els.verbSelect.value || sentenceVerbs[0];
  els.generatedSentence.textContent = sentenceWithReading(subject, object, verb);
}

function renderCriteria() {
  els.criteriaList.innerHTML = criteria.map((item, index) => {
    const complete = state.completeCriteria.has(item.id);
    return `
      <div class="criteria-item ${complete ? "complete" : ""}">
        <span>${complete ? "OK" : index + 1}</span>
        <div>
          <strong>${item.title}</strong>
          <button type="button" data-criteria="${item.id}">${complete ? "Marked complete" : "Mark complete"}</button>
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
  renderCriteria();
  renderReadiness();
}

fillSelect(els.subjectSelect, subjects);
fillSelect(els.objectSelect, objects);
fillSelect(els.verbSelect, sentenceVerbs);
renderSentence();
validateCourseBoundary();

els.unitList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-unit]");
  if (!card) return;
  state.activeUnit = Number(card.dataset.unit);
  state.activeLoop = 0;
  render();
});

els.loopTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-loop]");
  if (!tab) return;
  state.activeLoop = Number(tab.dataset.loop);
  renderLoops();
});

els.completeLoopBtn.addEventListener("click", () => {
  state.completeUnits.add(units[state.activeUnit].id);
  saveProgress();
  render();
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
  els.writingBox.value = "";
  localStorage.removeItem(progressKeys.completedUnitIds);
  localStorage.removeItem(progressKeys.completedCriterionIds);
  saveProgress();
  render();
});

els.nextVerbBtn.addEventListener("click", () => {
  state.activeVerb = (state.activeVerb + 1) % verbs.length;
  renderVerb();
});

[els.subjectSelect, els.objectSelect, els.verbSelect].forEach((select) => {
  select.addEventListener("change", renderSentence);
});

els.shufflePatternBtn.addEventListener("click", () => {
  els.subjectSelect.selectedIndex = Math.floor(Math.random() * els.subjectSelect.options.length);
  els.objectSelect.selectedIndex = Math.floor(Math.random() * els.objectSelect.options.length);
  els.verbSelect.selectedIndex = Math.floor(Math.random() * els.verbSelect.options.length);
  renderSentence();
});

els.clearWritingBtn.addEventListener("click", () => {
  els.writingBox.value = "";
  els.writingBox.focus();
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
