// Quick check after editing: runs the app in a fake browser, renders every mode on every level
// and validates the data files. Usage: node tools/check.js
const vm = require("vm");
const { bundle } = require("./build");

const els = {};
function el(id) {
  return els[id] || (els[id] = {
    id, innerHTML: "", textContent: "", value: "", hidden: false, dataset: {}, style: {}, childElementCount: 0, scrollTop: 0, scrollHeight: 0,
    addEventListener() {}, focus() {}, setAttribute() {}, scrollIntoView() {}, closest() { return el("x-" + id); },
    insertAdjacentHTML(pos, html) { this.innerHTML = html + this.innerHTML; }, querySelector() { return null; },
    set onclick(f) {}, set onchange(f) {}
  });
}
const saved = {};
const ctx = {
  console, setTimeout: () => 0, setInterval: () => 0, clearInterval() {}, clearTimeout() {},
  localStorage: { getItem: k => saved[k] || null, setItem: (k, v) => { saved[k] = v; } },
  document: { getElementById: el, querySelectorAll: () => [], querySelector: () => el("q"), addEventListener() {}, visibilityState: "visible", body: { classList: { toggle() {} } } },
  navigator: { userAgent: "" }, matchMedia: () => ({ matches: false, addEventListener() {} }), scrollTo() {},
  SpeechSynthesisUtterance: function () {}, speechSynthesis: { getVoices: () => [], speak() {}, cancel() {}, resume() {}, addEventListener() {} }
};
ctx.window = ctx;
vm.createContext(ctx);
let fails = 0;
const fail = (what, e) => { fails++; console.log("FAIL", what, e && e.stack ? e.stack.split("\n").slice(0, 3).join(" | ") : e); };
try { vm.runInContext(bundle().js, ctx, { filename: "app" }); } catch (e) { fail("loading the app", e); process.exit(1); }
const run = code => vm.runInContext(code, ctx);

// 1. every mode on every level, with an answered task
const modes = run("MODES.map(m => m[0])");
for (const lv of ["A1", "A2", "B1", "B2", "C1", "ALL"]) for (const m of modes) {
  try {
    run(`prefs.level = ${JSON.stringify(lv)}; prefs.mode = ${JSON.stringify(m)}; renderControls(); newSession(); render();`);
    run(`if (session && !session.empty && session.queue.length && !["grammar","read","chat","list"].includes(prefs.mode)) {
      const st = session.state; st.flipped = true; st.picked = 0; st.result = M() === "irr" ? { past: "no", pp: "no", ok: false } : "no"; st.given = "x"; st.match = null; render();
      answer(false); next(); render(); }`);
  } catch (e) { fail(`${lv} ${m}`, e); }
}
// 2. views with their own navigation
const views = {
  grammar: `prefs.mode = "grammar"; gram = { view: "topic", topic: GT[0].id }; render(); grammarAct("gr-start", {}); grammarAct("gr-pick", { dataset: { i: 0 } }); render();`,
  reading: `prefs.mode = "read"; rd = { view: "text", id: TX[0].id }; render(); readAct("rd-pick", { dataset: { q: 0, i: 1 } }); readAct("rd-check", {}); render();`,
  irregular: `prefs.mode = "irr"; for (const v of ["table", "cards", "quiz", "train"]) { irrView = v; newSession(); render(); }`,
  "own words": `store.own = [{ id: "OWN:t1", en: "fixture", pl: "przyrząd", ex: "" }]; prefs.mode = "own"; ownView = "list"; render(); ownView = "train"; newSession(); render(); store.own = [];`,
  exams: `prefs.mode = "exam"; ex = { view: "list" }; render(); for (const l of LEVELS) { examAct("ex-start", { dataset: { lvl: l } }); if (!ex.qs.length) throw new Error("empty exam " + l);
    while (ex.view === "run") { examAct("ex-pick", { dataset: { i: 0 } }); examAct("ex-next", {}); } render(); }`,
  "chat and writing": `aiSample = function () {}; prefs.mode = "chat"; chat = { view: "list" }; render(); prefs.mode = "write"; wr = { view: "list" }; render(); writeAct("wr-open", { dataset: { id: WRITE_TASKS[0].id } }); render(); aiSample = null;`,
  "phone tabs": `ui.focus = false; for (const t of ["today", "practice", "progress", "profile"]) { ui.tab = t; renderTab(); }`,
  "english interface": `prefs.ui = "en"; if (trLine("Dalej") !== "Next") throw new Error("translation table"); prefs.ui = "auto";`
};
for (const [name, code] of Object.entries(views)) { try { run(code); } catch (e) { fail(name, e); } }

// 3. data
const r = run(`(() => {
  const bad = [];
  const ids = {}; WORDS.forEach(w => { if (ids[w.id]) bad.push("duplicate word " + w.id); ids[w.id] = 1; if (!w.en || !w.pl || !POS[w.pos]) bad.push("word " + w.id); });
  TX.forEach(t => t.qs.forEach(q => { if (!q.a || q.wrong.length !== 2 || q.wrong.includes(q.a)) bad.push("text " + t.id + ": " + q.q); }));
  PHR.forEach(p => { if (!p.en || !p.pl || p.ex.split("___").length !== 2 || !LEVELS.includes(p.lvl)) bad.push("phrasal " + p.ex); });
  GT.forEach(t => t.items.forEach(i => { if (i.q.split("___").length !== 2 || i.wrong.includes(i.a)) bad.push("grammar " + t.id + ": " + i.q); }));
  SENT.forEach(s => { if (!LEVELS.includes(s.lvl)) bad.push("sentence level " + s.id); });
  const n = l => WORDS.filter(w => w.lvl === l).length;
  return { bad, counts: LEVELS.map(l => l + " " + n(l)).join(", "), totals: "grammar " + GT.length + ", situations " + SENT.filter(s => s.kind === "sit").length + ", translations " + SENT.filter(s => s.kind === "tr").length + ", phrasal " + PHR.length + ", texts " + TX.length + ", irregular " + IRR.length };
})()`);
r.bad.forEach(b => fail("data", b));
console.log("words:", r.counts);
console.log(r.totals);
console.log(fails ? `${fails} problem(s)` : `OK – ${modes.length} modes on 6 levels, ${Object.keys(views).length} special views, data valid`);
process.exit(fails ? 1 : 0);
