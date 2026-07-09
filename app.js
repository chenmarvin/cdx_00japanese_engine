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

const units = [
  {
    theme: "Sentence Engine",
    goal: "Basic structure",
    description: "Build the core Japanese sentence frame before expanding vocabulary. Learners practice how topics, identity, location, and action fit together.",
    objectives: ["A wa B desu", "A wa B dewa arimasen", "A wa place ni imasu", "A wa object o verb"],
  },
  {
    theme: "Verb Engine",
    goal: "Verb groups",
    description: "Learn verbs as a working system: dictionary form, polite form, negative form, past forms, and the early map of advanced forms.",
    objectives: ["Group 1, Group 2, irregular verbs", "Polite and plain speech", "Negative and past forms", "Daily action verbs"],
  },
  {
    theme: "Particle Engine",
    goal: "Usage over definitions",
    description: "Particles are practiced as sentence behavior. The emphasis is what each particle does inside a reusable pattern.",
    objectives: ["wa: topic", "ga: subject focus", "o: object", "ni: time/place/target", "de: action location/tool"],
  },
  {
    theme: "Question Engine",
    goal: "Ask and answer",
    description: "Convert statements into questions and build answer habits without translating word by word.",
    objectives: ["ka questions", "dare, nani, doko, itsu", "yes/no answers", "short natural replies"],
  },
  {
    theme: "Description Engine",
    goal: "Adjectives",
    description: "Describe people, places, and things using i-adjectives, na-adjectives, and noun modifiers.",
    objectives: ["i adjectives", "na adjectives", "noun + no + noun", "simple comparison phrases"],
  },
  {
    theme: "Time Engine",
    goal: "Time and duration",
    description: "Practice past, present, future intention, schedule, frequency, and duration in connected sentences.",
    objectives: ["time ni action", "mainichi and frequency", "past tense", "duration with kara and made"],
  },
  {
    theme: "Action Engine",
    goal: "Daily activities",
    description: "Turn high-frequency verbs into daily-life sentences: eating, going, working, studying, buying, seeing, and using.",
    objectives: ["movement verbs", "communication verbs", "work and school routines", "home and food actions"],
  },
  {
    theme: "Connection Engine",
    goal: "Link ideas",
    description: "Move from isolated sentences into linked thought using sequence, reason, contrast, and examples.",
    objectives: ["soshite", "demo", "kara", "te-form linking", "noun lists with to"],
  },
  {
    theme: "Expression Engine",
    goal: "Intentions and requests",
    description: "Practice wanting, permission, requests, ability, invitations, and polite social expressions.",
    objectives: ["tai", "te mo ii desu", "te kudasai", "potential form", "mashou"],
  },
  {
    theme: "Conversation Engine",
    goal: "Natural exchange",
    description: "Use the whole engine in mini dialogues, role play, listening, speaking, and short writing.",
    objectives: ["conversation turns", "repair phrases", "short diary entries", "slow listening comprehension"],
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
  "Conjugate all common verbs",
  "Use particles correctly in basic sentences",
  "Produce 500-1000 original sentences",
  "Read short passages fluently",
  "Understand everyday conversations spoken slowly",
  "Write 10-20 connected sentences",
];

const state = {
  activeUnit: 0,
  activeLoop: 0,
  activeVerb: 0,
  completeUnits: new Set(JSON.parse(localStorage.getItem("je-complete-units") || "[]")),
  completeCriteria: new Set(JSON.parse(localStorage.getItem("je-complete-criteria") || "[]")),
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
  criteriaList: document.querySelector("#criteriaList"),
};

function saveProgress() {
  localStorage.setItem("je-complete-units", JSON.stringify([...state.completeUnits]));
  localStorage.setItem("je-complete-criteria", JSON.stringify([...state.completeCriteria]));
}

function readiness() {
  return Math.round((state.completeUnits.size / units.length) * 70 + (state.completeCriteria.size / criteria.length) * 30);
}

function renderUnits() {
  els.unitList.innerHTML = units.map((unit, index) => {
    const isDone = state.completeUnits.has(index);
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
      <strong>${objective}</strong>
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
          <strong>${row[1]}</strong>
          <small>${row[2]}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderVerb() {
  const verb = verbs[state.activeVerb];
  els.verbKana.textContent = verb.kana;
  els.verbMeaning.textContent = verb.meaning;
  els.verbGroup.textContent = verb.group;
  els.verbMatrix.innerHTML = verb.forms.map((form, index) => `
    <div class="matrix-row">
      <span>${formLabels[index]}</span>
      <strong>${form}</strong>
    </div>
  `).join("");
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function renderSentence() {
  const subject = els.subjectSelect.value || subjects[0];
  const object = els.objectSelect.value || objects[0];
  const verb = els.verbSelect.value || sentenceVerbs[0];
  els.generatedSentence.textContent = `${subject}${object}${verb}\u3002`;
}

function renderCriteria() {
  els.criteriaList.innerHTML = criteria.map((item, index) => {
    const complete = state.completeCriteria.has(index);
    return `
      <div class="criteria-item ${complete ? "complete" : ""}">
        <span>${complete ? "OK" : index + 1}</span>
        <div>
          <strong>${item}</strong>
          <button type="button" data-criteria="${index}">${complete ? "Marked complete" : "Mark complete"}</button>
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
  state.completeUnits.add(state.activeUnit);
  saveProgress();
  render();
});

els.resetBtn.addEventListener("click", () => {
  state.completeUnits.clear();
  state.completeCriteria.clear();
  els.writingBox.value = "";
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

els.criteriaList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-criteria]");
  if (!button) return;
  const index = Number(button.dataset.criteria);
  if (state.completeCriteria.has(index)) {
    state.completeCriteria.delete(index);
  } else {
    state.completeCriteria.add(index);
  }
  saveProgress();
  render();
});

render();
