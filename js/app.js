const POS = { n: "rzecz.", v: "czas.", adj: "przym.", adv: "przysł.", conj: "spójnik", prep: "przyimek", phr: "wyrażenie", pron: "zaimek", num: "liczebnik" };
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const TOPICS = ["WELD", "CODE", "AVIA"];
const SETS = LEVELS;
const LABEL = { ALL: "Wszystkie" };
const lab = k => LABEL[k] || k;
const short = k => k;
// Which CEFR level each work/hobby word belongs to; words not listed get the topic's default.
const PLACE = {
  WELD: { def: "C1",
    A2: "steel;rust;shift",
    B1: "welding;welder;weld;crack;joint;clamp;grinder;drilling;drill;bending;bend;thread;dimension;technical drawing;inspection;stainless steel;sheet metal;beam;bracket;bolt;nut;washer;coating;corrosion;hardness;grind;tighten;assemble;safety goggles;forklift;foreman;quality control;scrap;batch;alloy;cutting tool;work order;arc;electrode;welding helmet;shop floor",
    B2: "welding wire;angle grinder;grinding disc;plasma cutting;laser cutting;milling machine;lathe;milling;turning;tolerance;coolant;primer;lead time;overhead crane;brittle;rework;rivet;carbon steel;structural steel;steel plate;calliper;micrometer;gauge;torque;fabricate;machine;fume extraction;blasting;distortion;preheating;penetration;fillet weld;butt weld;tack weld;weld bead;spatter;slag;shielding gas;filler metal;cross-section;bill of materials;flange;hollow section;press brake;punching;tapping;surface finish;roughness;tensile strength;hardening;fatigue;galvanising;non-conformity" },
  CODE: { def: "B2",
    B1: "variable;function;loop;bug;database;install;fix;crash;run;user interface;backup;file path;directory;documentation;open source;output;input;keyword;comment;library;source code;branch;release",
    C1: "inheritance;instance;stack trace;recursion;hash map;boilerplate;legacy code;asynchronous;thread" },
  AVIA: { def: "B2",
    A2: "wing;engine;fuel;tail",
    B1: "aircraft;pilot licence;student pilot;flight instructor;cockpit;propeller;takeoff;landing;control tower;air traffic control;turbulence;visibility;forecast;altitude;flight plan;checklist;emergency landing;engine failure;solo flight;fuel tank;fuel gauge;runway;climb;land;take off;mayday;roger;say again;standby;heading;knot;approach",
    C1: "aileron;attitude indicator;heading indicator;mixture;carburettor heat;squawk" }
};
function placeOf(topic, en) {
  const p = PLACE[topic];
  for (const l of LEVELS) if (p[l] && p[l].split(";").includes(en)) return l;
  return p.def;
}
const SECTIONS = [
  ["today", "Dziś", [["review", "Powtórka dnia"]]],
  ["words", "Słówka", [["cards", "Fiszki"], ["quiz", "Quiz"], ["type", "Pisanie"], ["listen", "Ze słuchu"], ["gap", "Luki"], ["hard", "Najtrudniejsze"], ["own", "Moje słówka"], ["list", "Lista"]]],
  ["gram", "Gramatyka", [["grammar", "Zasady i ćwiczenia"], ["irr", "Nieregularne"], ["wf", "Słowotwórstwo"], ["phr", "Phrasal verbs i przyimki"]]],
  ["sent", "Zdania", [["sit", "Sytuacje"], ["tr", "Tłumaczenie"], ["free", "Odpowiedz swobodnie"], ["dict", "Dyktando"], ["shadow", "Powtarzanie na głos"]]],
  ["read", "Czytanie", [["read", "Teksty i dialogi"]]],
  ["exam", "Egzamin", [["exam", "Egzamin poziomu"]]],
  ["ai", "Z Claude", [["chat", "Rozmowa"], ["write", "Pisanie z oceną"]]]
];
const MODES = SECTIONS.flatMap(s => s[2]);
const sectionOf = m => (SECTIONS.find(s => s[2].some(([k]) => k === m)) || SECTIONS[1])[0];
const TYPED = ["type", "listen", "gap", "irr", "wf", "sit", "tr", "dict", "phr", "free"]; // modes answered by typing
// The exercise type used for the current item ("review" mixes items from every mode).
function kindMode(w) { return w.irr ? "irr" : w.wf ? "wf" : w.kind === "sit" || w.kind === "tr" ? w.kind : w.dict ? "dict" : w.phr ? "phr" : w.shadow ? "shadow" : w.free ? "free" : w.own ? "type" : "quiz"; }
function M() {
  const m = prefs.mode;
  if (m === "review") { const w = session && session.queue && byId[session.queue[session.i]]; return w ? kindMode(w) : "quiz"; }
  if (m === "hard") return "type";
  if (m === "own") return "type";
  return m;
}
const INT = [0, 36e5, 864e5, 3 * 864e5, 7 * 864e5, 21 * 864e5]; // box → next review delay
const ROUND = 12;
const KEY = "slowka-v1";

const WORDS = [];
const byId = {};
for (const set of LEVELS.concat(TOPICS)) {
  RAW[set].trim().split("\n").forEach(line => {
    const [en, pl, pos, ex] = line.split("|");
    const topic = TOPICS.includes(set) ? set : "";
    const lvl = topic ? placeOf(topic, en) : set;
    let id = lvl + ":" + en;
    if (byId[id]) id += "#" + topic;
    const w = { id, lvl, en, pl, pos, ex, topic, oldId: topic ? set + ":" + en : "" };
    WORDS.push(w); byId[w.id] = w;
  });
}
IRR.forEach(w => { byId[w.id] = w; });
WF.forEach(w => { byId[w.id] = w; });
SENT.forEach(w => { byId[w.id] = w; });
const PHR = PHR_RAW.trim().split("\n").map(line => {
  const [lvl, ex, en, pl] = line.split("|");
  return { id: "PHR:" + ex, lvl, en, pl, ex, pos: "phr", phr: true };
});
PHR.forEach(w => { byId[w.id] = w; });
// Dictation uses the example sentences of the vocabulary.
const DICT = WORDS.filter(w => w.ex && w.ex.length <= 90).map(w => ({ id: "DICT:" + w.id, lvl: w.lvl, en: w.ex, pl: w.pl, ex: w.ex, pos: "phr", dict: true }));
DICT.forEach(w => { byId[w.id] = w; });
const lvlPool = list => list.filter(w => prefs.level === "ALL" || w.lvl === prefs.level);
const phrPool = () => lvlPool(PHR);
const dictPool = () => lvlPool(DICT);
const wfPool = () => WF.filter(w => prefs.level === "ALL" || w.lvl === (["A1", "A2"].includes(prefs.level) ? "B1" : prefs.level));
const irrPool = () => IRR.filter(w => prefs.level === "ALL" || !["A1", "A2", "B1"].includes(prefs.level) || w.lvl === prefs.level);
// The order the lists were written in keeps themes together; quiz distractors use it.
const WORDS_RAW = WORDS.slice();
// Spread work/hobby words evenly between general words, so new rounds mix both.
{
  const groups = {};
  WORDS.forEach(w => { const g = w.lvl + "/" + w.topic; (groups[g] = groups[g] || []).push(w); });
  Object.values(groups).forEach(ws => ws.forEach((w, i) => { w.ord = (i + 0.5) / ws.length; }));
  WORDS.sort((a, b) => LEVELS.indexOf(a.lvl) - LEVELS.indexOf(b.lvl) || a.ord - b.ord);
}

/* ---------- storage ---------- */
function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
const store = Object.assign({ p: {}, g: {}, prefs: {}, days: {} }, load());
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
function persist() { saveLocal(); scheduleSync(); }

/* ---------- sync with the viewer's account (db: data/users/<id>/progress) ---------- */
let syncRef = null, syncTimer = null, syncBusy = false, syncDirty = false;
const SYNC_TEXT = {
  connecting: "Łączę z Twoim kontem…",
  local: "Postęp zapisuje się tylko w tej przeglądarce.",
  ok: "Postęp zsynchronizowany z Twoim kontem.",
  saving: "Zapisuję postęp na koncie…",
  error: "Nie udało się zsynchronizować. Postęp jest bezpieczny w tej przeglądarce, spróbuję przy następnej odpowiedzi."
};
let syncState = "local";
// The status shows in the header on a computer and on the Profile tab on a phone.
function setSync(state) {
  syncState = state;
  document.querySelectorAll(".syncnote").forEach(el => { el.dataset.state = state; el.textContent = SYNC_TEXT[state]; });
}
function scheduleSync() {
  if (!syncRef) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(pushNow, 2500);
}
async function pushNow() {
  clearTimeout(syncTimer); syncTimer = null;
  if (!syncRef) return;
  if (syncBusy) { syncDirty = true; return; }
  syncBusy = true; syncDirty = false; setSync("saving");
  try {
    await syncRef.set({ v: 1, p: store.p, g: store.g || {}, r: store.r || {}, ex: store.ex || {}, own: store.own || [], ownDel: store.ownDel || [], days: store.days, resetAt: store.resetAt || 0 });
    setSync("ok");
  } catch (e) { setSync("error"); }
  syncBusy = false;
  if (syncDirty) scheduleSync();
}
function mergeRemote(r) {
  let changed = false;
  for (const [id, rp] of Object.entries(r.p || {})) {
    const lp = store.p[id];
    const newer = !lp || (rp.n || 0) > (lp.n || 0) || ((rp.n || 0) === (lp.n || 0) && (rp.d || 0) > (lp.d || 0));
    if (newer && JSON.stringify(lp) !== JSON.stringify(rp)) { store.p[id] = rp; changed = true; }
  }
  for (const [d, c] of Object.entries(r.days || {})) if ((store.days[d] || 0) < c) { store.days[d] = c; changed = true; }
  // own words: union of both sides, minus anything deleted on either side
  const dels = new Set((store.ownDel || []).concat(r.ownDel || []));
  const own = new Map((store.own || []).map(o => [o.id, o]));
  for (const o of r.own || []) if (!own.has(o.id)) { own.set(o.id, o); changed = true; }
  const ownList = [...own.values()].filter(o => !dels.has(o.id));
  if (ownList.length !== (store.own || []).length) changed = true;
  store.own = ownList; store.ownDel = [...dels];
  store.ex = store.ex || {};
  for (const [l, re] of Object.entries(r.ex || {})) {
    const le = store.ex[l];
    if (!le || re.best > le.best || (re.passed && !le.passed) || (re.n || 0) > (le.n || 0)) {
      store.ex[l] = { best: Math.max(re.best, le ? le.best : 0), passed: !!(re.passed || (le && le.passed)), n: Math.max(re.n || 0, le ? le.n || 0 : 0), last: Math.max(re.last || 0, le ? le.last || 0 : 0) };
      changed = true;
    }
  }
  store.r = store.r || {};
  for (const [id, rr] of Object.entries(r.r || {})) {
    const lr = store.r[id];
    if (!lr || (rr.n || 0) > (lr.n || 0)) { store.r[id] = rr; changed = true; }
  }
  store.g = store.g || {};
  for (const [id, rg] of Object.entries(r.g || {})) {
    const lg = store.g[id];
    if (!lg || (rg.n || 0) > (lg.n || 0)) { store.g[id] = rg; changed = true; }
  }
  return changed;
}
async function pull() {
  if (!syncRef) return;
  try {
    const snap = await syncRef.get();
    const r = snap.exists ? snap.data() : null;
    let changed = false, needPush = false;
    if (!r) needPush = Object.keys(store.p).length > 0;
    else if ((r.resetAt || 0) > (store.resetAt || 0)) {
      store.p = r.p || {}; store.g = r.g || {}; store.r = r.r || {}; store.ex = r.ex || {}; store.days = r.days || {}; store.resetAt = r.resetAt; changed = true;
      mergeRemote({ own: r.own, ownDel: r.ownDel });
    } else if ((store.resetAt || 0) > (r.resetAt || 0)) needPush = true;
    else {
      changed = mergeRemote(r);
      needPush = Object.keys(store.p).some(id => JSON.stringify(store.p[id]) !== JSON.stringify((r.p || {})[id]))
        || Object.keys(store.days).some(d => store.days[d] !== (r.days || {})[d])
        || Object.keys(store.g || {}).some(id => JSON.stringify(store.g[id]) !== JSON.stringify((r.g || {})[id]))
        || Object.keys(store.r || {}).some(id => JSON.stringify(store.r[id]) !== JSON.stringify((r.r || {})[id]))
        || Object.keys(store.ex || {}).some(l => JSON.stringify(store.ex[l]) !== JSON.stringify((r.ex || {})[l]))
        || (store.own || []).length !== (r.own || []).length || (store.ownDel || []).length !== (r.ownDel || []).length;
    }
    saveLocal(); setSync("ok");
    if (changed && session) render();
    if (needPush) scheduleSync();
  } catch (e) { setSync("error"); }
}
async function initSync() {
  setSync("connecting");
  if (!window.claude || !window.claude.use) { setSync("local"); return; }
  try {
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (user && await user.isOwner()) {
      window.claude.use("sample").then(s => { aiSample = s || null; if (aiSample && session) { renderControls(); render(); } }).catch(() => {});
    }
    const id = user ? await user.id() : null;
    if (!db || !id) { setSync("local"); return; }
    syncRef = db.doc("data/users/" + id + "/progress");
    repDb = db; repUser = id;
    await pull();
  } catch (e) { setSync("local"); }
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && syncTimer) pushNow();
  else if (document.visibilityState === "visible" && syncRef && !syncTimer && !syncBusy) pull();
});
// Carry over progress from the old separate topic sets (ids like "WELD:lathe").
{
  let moved = false;
  WORDS.forEach(w => {
    if (w.oldId && store.p[w.oldId]) { if (!store.p[w.id]) store.p[w.id] = store.p[w.oldId]; delete store.p[w.oldId]; moved = true; }
  });
  if (moved) persist();
}
const prefs = Object.assign({ level: "A1", mode: "cards", dir: "en-pl" }, store.prefs);
function setPref(k, v) { prefs[k] = v; store.prefs = prefs; persist(); if (k === "ui" || k === "level") i18nAll(); }

/* ---------- interface language ---------- */
// The views are written in Polish. In English mode every text node and label that has an entry in UI_EN
// is swapped as soon as it reaches the page; learning content (meanings, rules, prompts) is never in the table.
// Numbers, levels and „quoted” fragments are placeholders (#), so "Pytanie 3 z 12" uses the key "Pytanie # z #".
const I18N_PH = /„[^”]*”|\b[ABC][12]\b|\d+(?:[.,]\d+)?/g;
const i18nKey = s => s.replace(I18N_PH, "#");
const uiEN = () => prefs.ui === "en";
function trLine(t) {
  if (UI_EN[t] != null) return UI_EN[t];
  const k = i18nKey(t);
  if (k !== t && UI_EN[k] != null) {
    const vals = t.match(I18N_PH).map(v => v.replace(/^„/, "“"));
    let i = 0;
    return UI_EN[k].replace(/#/g, () => vals[i++] || "");
  }
  // "Label: content" – only the label is interface text
  const c = t.indexOf(": ");
  if (c > 0 && UI_EN[t.slice(0, c) + ": *"] != null) return UI_EN[t.slice(0, c) + ": *"] + t.slice(c);
  // "Co znaczy „x”? →", "2. i 3. forma czasownika „go” (iść, jechać)" – the tail is content
  const tail = /^(.+?)((?: \([^()]*\))?(?: →)?)$/.exec(t);
  if (tail[2]) { const h = trLine(tail[1]); if (h !== tail[1]) return h + tail[2]; }
  // "Słówka · Fiszki", "Egzamin B1 · pytanie 3 z 35 · Gramatyka"
  if (t.includes(" · ")) {
    const parts = t.split(" · "), out = parts.map(p => p && trLine(p));
    if (out.some((p, i) => p !== parts[i])) return out.join(" · ");
  }
  return t;
}
function trText(s) {
  const t = s.replace(/\s+/g, " ").trim();
  if (!t) return s;
  const r = trLine(t);
  return r === t ? s : s.match(/^\s*/)[0] + r + s.match(/\s*$/)[0];
}
// Remembers the Polish original of each node, so switching back to Polish restores it.
const I18N_SEEN = new WeakMap(), I18N_ATTRS = ["placeholder", "aria-label", "title"];
// Places that show words and sentences being learnt; a meaning like "kobieta" must not turn into "female" there.
const I18N_CONTENT = ".word, .opt, .sub, .chip, .sentprompt, .gapline, .rtext, .bubble, .fbtext, .ex, .note b, td";
const isContent = el => el && el.closest(I18N_CONTENT) && !el.closest(".ui, .st, .tag, .speak, .confirm, button:not(.opt)");
function i18nText(n, en) {
  const mem = I18N_SEEN.get(n);
  const orig = mem && n.nodeValue === mem.t ? mem.o : n.nodeValue;
  const v = en && !isContent(n.parentElement) ? trText(orig) : orig;
  I18N_SEEN.set(n, { o: orig, t: v });
  if (n.nodeValue !== v) n.nodeValue = v;
}
function i18nAttrs(el, en) {
  const mem = I18N_SEEN.get(el) || {};
  for (const a of I18N_ATTRS) {
    const cur = el.getAttribute(a);
    if (cur == null) continue;
    const orig = mem[a] && cur === mem[a].t ? mem[a].o : cur;
    const v = en ? trText(orig) : orig;
    mem[a] = { o: orig, t: v };
    if (cur !== v) el.setAttribute(a, v);
  }
  I18N_SEEN.set(el, mem);
}
function i18nNode(root, en = uiEN()) {
  if (root.nodeType === 3) { if (!root.parentElement || !root.parentElement.closest("script,style")) i18nText(root, en); return; }
  if (root.nodeType !== 1 || root.closest("script,style")) return;
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.nodeName === "SCRIPT" || n.nodeName === "STYLE" ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  i18nAttrs(root, en);
  for (let n = walk.nextNode(); n; n = walk.nextNode()) n.nodeType === 3 ? i18nText(n, en) : i18nAttrs(n, en);
}
function i18nAll() {
  if (typeof MutationObserver === "undefined") return;
  document.documentElement.lang = uiEN() ? "en" : "pl";
  i18nNode(document.body);
}
if (typeof MutationObserver !== "undefined") {
  new MutationObserver(muts => {
    const en = uiEN();
    for (const m of muts) {
      if (m.type === "childList") m.addedNodes.forEach(n => i18nNode(n, en));
      else if (m.type === "characterData") i18nText(m.target, en);
      else i18nAttrs(m.target, en);
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: I18N_ATTRS });
}
// Claude writes its feedback in the interface language.
const fbLang = () => uiEN() ? "English" : "Polish";
function langPanelHTML() {
  const opts = [["pl", "Polski"], ["en", "English"]], cur = prefs.ui === "en" ? "en" : "pl";
  return `<div class="panel"><h3>Język aplikacji</h3>
    <div class="seg rates" role="group" aria-label="Język aplikacji">${opts.map(([k, l]) => `<button type="button" data-ui="${k}" aria-pressed="${cur === k}">${l}</button>`).join("")}</div>
    <p class="note">Od poziomu B1 warto przełączyć aplikację na angielski. Znaczenia słówek, zasady gramatyki i polecenia po polsku zostają bez zmian.</p></div>`;
}
// From B1 up, ask once whether to switch the interface to English (until then it stays Polish).
const HIGH_LEVELS = ["B1", "B2", "C1"];
function askUiLang() {
  if (prefs.ui === "pl" || prefs.ui === "en" || !HIGH_LEVELS.includes(prefs.level) || document.querySelector("dialog.askui")) return;
  const d = document.createElement("dialog");
  d.className = "askui";
  d.setAttribute("aria-labelledby", "askui-t");
  d.innerHTML = `<h2 id="askui-t">Poziom ${prefs.level} – przejść na angielski?</h2>
    <p>Od poziomu B1 dobrą praktyką jest używanie aplikacji po angielsku: przyciski, polecenia i komunikaty będą po angielsku, więc masz więcej kontaktu z językiem.</p>
    <p>Znaczenia słówek, zasady gramatyki i polskie zdania do tłumaczenia zostaną po polsku.</p>
    <p class="note">Zmienisz to w każdej chwili w ustawieniu „Język aplikacji”${isMobile() ? " w zakładce Profil" : ""}.</p>
    <div class="actions"><button type="button" class="btn primary" data-pick="en">Przejdź na angielski</button><button type="button" class="btn" data-pick="pl">Zostań przy polskim</button></div>`;
  const pick = v => { d.close(); d.remove(); setPref("ui", v); render(); };
  d.addEventListener("click", e => { const b = e.target.closest("[data-pick]"); if (b) pick(b.dataset.pick); });
  d.addEventListener("cancel", e => { e.preventDefault(); pick("pl"); });
  document.body.appendChild(d);
  d.showModal();
}

const prog = id => store.p[id] || { b: 0, d: 0 };
const todayKey = () => new Date().toLocaleDateString("sv");
function statusOf(b) { return b === 0 ? 0 : b <= 2 ? 1 : b <= 4 ? 2 : 3; }
const STATUS = ["Nowe", "W nauce", "Utrwalone", "Opanowane"];

function grade(id, ok) {
  const p = Object.assign({ b: 0, d: 0, n: 0, c: 0 }, store.p[id]);
  p.n++; if (ok) p.c++;
  p.b = ok ? Math.min(5, Math.max(1, p.b + 1)) : 1;
  p.d = Date.now() + INT[p.b];
  store.p[id] = p;
  const t = todayKey(); store.days[t] = (store.days[t] || 0) + 1;
  persist();
}

function streak() {
  let n = 0; const d = new Date();
  if (!store.days[todayKey()]) d.setDate(d.getDate() - 1);
  while (store.days[d.toLocaleDateString("sv")]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---------- session ---------- */
const pool = () => prefs.level === "ALL" ? WORDS : WORDS.filter(w => w.lvl === prefs.level);
let session;
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function modePool(m = prefs.mode) {
  switch (m) {
    case "irr": return irrPool();
    case "wf": return wfPool();
    case "sit": case "tr": return sentPool(m);
    case "dict": return dictPool();
    case "phr": return phrPool();
    case "shadow": return shadowPool();
    case "free": return freePool();
    case "own": return ownWords();
    default: return pool().filter(w => m !== "gap" || gapOf(w));
  }
}
const allItems = () => WORDS.concat(IRR, WF, SENT, PHR, DICT, SHD, FREE, ownWords());
const isDue = (w, now) => { const p = prog(w.id); return p.b > 0 && p.d <= now; };
const byUrgency = (a, b) => prog(a.id).b - prog(b.id).b || prog(a.id).d - prog(b.id).d;
// Items answered wrong most often (vocabulary and own words).
function hardList() {
  return WORDS.concat(ownWords()).filter(w => { const p = store.p[w.id]; return p && p.n > p.c; })
    .sort((a, b) => { const pa = store.p[a.id], pb = store.p[b.id]; return (pb.n - pb.c) - (pa.n - pa.c) || pa.c / pa.n - pb.c / pb.n; });
}
// Spread parts of speech evenly, so new words don't come as 50 nouns in a row.
function mixByPos(list) {
  const groups = {};
  list.forEach((w, i) => (groups[w.pos] = groups[w.pos] || []).push(i));
  const key = [];
  Object.values(groups).forEach(ix => ix.forEach((idx, j) => { key[idx] = (j + 0.5) / ix.length; }));
  return list.map((w, i) => [w, key[i], i]).sort((a, b) => a[1] - b[1] || a[2] - b[2]).map(x => x[0]);
}
function newSession() {
  const now = Date.now();
  rep = { open: false };
  const mk = (q, extra) => ({ queue: q.map(w => w.id), i: 0, ok: 0, bad: 0, missed: [], retried: new Set(), extra: !!extra, state: {}, empty: !q.length });
  if (prefs.mode === "review") { session = mk(shuffle(allItems().filter(w => isDue(w, now)).sort(byUrgency).slice(0, 20))); return; }
  if (prefs.mode === "hard") { session = mk(shuffle(hardList().slice(0, ROUND))); return; }
  const words = modePool();
  const due = words.filter(w => isDue(w, now)).sort(byUrgency);
  const fresh = mixByPos(words.filter(w => prog(w.id).b === 0));
  let q = due.slice(0, ROUND);
  q = q.concat(fresh.slice(0, ROUND - q.length));
  let extra = false;
  if (!q.length) { extra = true; q = shuffle(words.slice()).slice(0, ROUND); }
  session = mk(shuffle(q), extra);
}

function answer(ok) {
  const id = session.queue[session.i];
  grade(id, ok);
  if (ok) session.ok++; else {
    session.bad++;
    if (!session.missed.includes(id)) session.missed.push(id);
    if (!session.retried.has(id)) { session.retried.add(id); session.queue.push(id); }
  }
}
function next() { session.i++; session.state = {}; rep = { open: false }; render(); }

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const hasSpeech = "speechSynthesis" in window;
const ICON_SPEAK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
const speakBtn = (text, sentence) => hasSpeech ? `<button class="speak${sentence ? " sm" : ""}" type="button" data-act="speak" data-en="${esc(text)}" aria-label="${sentence ? "Posłuchaj zdania" : "Wymowa: " + esc(text)}" title="${sentence ? "Posłuchaj zdania" : "Posłuchaj wymowy"}">${ICON_SPEAK}</button>` : "";
const dictLink = en => `<a class="dict" data-act="link" href="https://dictionary.cambridge.org/search/direct/?datasetsearch=english&amp;q=${encodeURIComponent(en)}" target="_blank" rel="noopener">Wymowa w słowniku Cambridge ↗</a>`;

/* ---------- lektor ---------- */
let enVoices = [];
const FEMALE = /\b(hazel|susan|zira|libby|sonia|maisie|mia|bella|hollie|abbie|olivia|aria|jenny|emma|ava|michelle|ana|sara|nancy|jane|amber|ashley|cora|elizabeth|monica|samantha|karen|moira|tessa|fiona|serena|kate|martha|stephanie|catherine|natasha|clara|female)\b/i;
const MALE = /\b(george|david|mark|ryan|thomas|alfie|elliot|ethan|noah|oliver|guy|andrew|brian|christopher|eric|roger|steffan|davis|jason|tony|brandon|jacob|daniel|arthur|oliver|rishi|aaron|fred|male)\b/i;
const genderOf = v => FEMALE.test(v.name) ? "f" : MALE.test(v.name) ? "m" : "";
function voiceScore(v) {
  let s = 0;
  if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 50;
  if (/google/i.test(v.name)) s += 30;
  if (/en[-_]GB/i.test(v.lang)) s += 20; else if (/en[-_]US/i.test(v.lang)) s += 12;
  const g = genderOf(v);
  if (g === "f") s += 15; else if (g === "m") s -= 5;
  if (/hazel|sonia|libby/i.test(v.name)) s += 5;
  return s;
}
function loadVoices() {
  if (!hasSpeech) return;
  const before = enVoices.length;
  try {
    enVoices = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang))
      .sort((a, b) => voiceScore(b) - voiceScore(a) || a.name.localeCompare(b.name));
  } catch (e) { enVoices = []; }
  if (enVoices.length !== before && session) render();
}
function currentVoice() {
  return enVoices.find(v => v.voiceURI === prefs.voice) || enVoices[0] || null;
}
function speak(text, rate) {
  if (!hasSpeech) return;
  try {
    const clean = text.replace(/(\w)-(?=\w)/g, "$1 ").replace(/±/g, " plus or minus ").replace(/°C/g, " degrees Celsius");
    const u = new SpeechSynthesisUtterance(clean);
    const v = currentVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
    u.rate = rate || prefs.rate || 0.9;
    speechSynthesis.cancel();
    speechSynthesis.resume();
    // Chromium sometimes drops an utterance queued right after cancel()
    setTimeout(() => { try { speechSynthesis.speak(u); } catch (e) {} }, 60);
  } catch (e) {}
}
if (hasSpeech) {
  try { speechSynthesis.addEventListener("voiceschanged", loadVoices); } catch (e) { speechSynthesis.onvoiceschanged = loadVoices; }
  let tries = 0;
  const poll = setInterval(() => {
    tries++; loadVoices();
    if (enVoices.length || tries > 12) { clearInterval(poll); voicesChecked = true; if (session) render(); }
  }, 300);
}
var voicesChecked = false;
// Where to add English voices differs per system, so the tips follow the viewer's device.
const OS = (() => {
  const ua = navigator.userAgent || "";
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/.test(ua)) return "android";
  if (/Macintosh|Mac OS X/.test(ua)) return "mac";
  return "win";
})();
const VOICE_HELP = {
  ios: { add: "<b>Ustawienia → Dostępność → Zawartość mówiona → Głosy → Angielski</b>, wybierz np. <b>Serena</b> albo <b>Daniel</b> (brytyjskie) i pobierz wersję „Ulepszona” lub „Premium”",
    restart: "Zamknij całkowicie Safari albo aplikację Claude (przesuń ją w górę w przełączniku aplikacji) i otwórz apkę ponownie",
    tip: "Najlepiej brzmią głosy „Ulepszona” i „Premium” – pobierzesz je w Ustawieniach (Dostępność → Zawartość mówiona → Głosy). Jeśli słowo nie odtworzy się samo, stuknij przycisk głośnika – iPhone czasem wymaga dotknięcia, zanim zacznie czytać." },
  mac: { add: "<b>Ustawienia systemowe → Dostępność → Zawartość mówiona → Głos systemowy → Zarządzaj głosami</b>, zaznacz głos <b>English (United Kingdom)</b>, np. Serena albo Daniel",
    restart: "Zamknij przeglądarkę całkowicie (Cmd+Q) i otwórz apkę ponownie",
    tip: "Nowo pobrane głosy pojawią się dopiero po ponownym uruchomieniu przeglądarki. Najlepiej brzmią głosy oznaczone jako „Ulepszony” lub „Premium”." },
  android: { add: "<b>Ustawienia → System → Języki → Zamiana tekstu na mowę</b>, przy usłudze Google stuknij koło zębate i zainstaluj dane głosowe <b>English (United Kingdom)</b>",
    restart: "Zamknij przeglądarkę całkowicie i otwórz apkę ponownie",
    tip: "Nowo zainstalowane głosy pojawią się dopiero po ponownym uruchomieniu przeglądarki. Dokładne nazwy menu mogą się nieco różnić w zależności od producenta telefonu." },
  win: { add: "<b>Ustawienia → Czas i język → Mowa → Dodaj głosy → English (United Kingdom)</b>",
    restart: "Zamknij aplikację całkowicie (także ikonę przy zegarze) i uruchom ją ponownie",
    tip: "Nowo dodane głosy Windows pojawią się dopiero po ponownym uruchomieniu aplikacji lub przeglądarki. Najlepiej brzmią głosy „Natural” (Online), dostępne po otwarciu apki w przeglądarce Microsoft Edge." }
}[OS];
function voiceBanner() {
  if (!hasSpeech || !voicesChecked || enVoices.length) return "";
  return `<div class="banner"><strong>Lektor czyta teraz po polsku.</strong> Ta aplikacja nie widzi żadnego angielskiego głosu, więc słowa czyta polski głos systemowy.
    Jeśli głosy angielskie są już dodane: <span>${VOICE_HELP.restart}</span>.
    Jeśli nie są: ${VOICE_HELP.add}, a potem uruchom apkę ponownie.</div>`;
}

function voicePanelHTML() {
  if (!hasSpeech) return `<div class="panel"><h3>Lektor</h3><p class="note">Ta przeglądarka nie obsługuje czytania na głos. Wymowę sprawdzisz w słowniku Cambridge (link przy każdym słowie).</p></div>`;
  const rates = [[0.7, "Wolno"], [0.9, "Normalnie"], [1.05, "Szybko"]];
  const cur = currentVoice();
  return `<div class="panel">
    <h3>Lektor</h3>
    ${enVoices.length ? `<label class="note" for="voiceSel">Głos angielski</label>
    <select id="voiceSel">${enVoices.map(v => `<option value="${esc(v.voiceURI)}" ${cur && v.voiceURI === cur.voiceURI ? "selected" : ""}>${esc(v.name.replace(/^Microsoft /, "").replace(/ - English.*$/, ""))} · ${/GB/i.test(v.lang) ? "brytyjski" : /US/i.test(v.lang) ? "amerykański" : esc(v.lang)}${genderOf(v) ? " · " + (genderOf(v) === "f" ? "kobieta" : "mężczyzna") : ""}</option>`).join("")}</select>
    <p class="note">${enVoices.length} ${enVoices.length === 1 ? "głos" : "głosów"} do wyboru. Po zmianie od razu usłyszysz próbkę.</p>`
    : `<p class="warn">Nie znalazłem angielskiego głosu w systemie, więc słowa mogą być czytane z polskim akcentem. Dodaj go tak: ${VOICE_HELP.add}. Potem odśwież stronę.</p>`}
    <div class="seg rates" role="group" aria-label="Tempo mowy">${rates.map(([r, l]) => `<button type="button" data-rate="${r}" aria-pressed="${(prefs.rate || 0.9) === r}">${l}</button>`).join("")}</div>
    <button class="btn" type="button" id="voiceTest">${ICON_SPEAK.replace("<svg", '<svg width="18" height="18"')} Posłuchaj próbki</button>
    <p class="note">${VOICE_HELP.tip}</p>
  </div>`;
}
function bindVoicePanel() {
  const sel = document.getElementById("voiceSel");
  if (sel) sel.onchange = () => { setPref("voice", sel.value); speak("Hello! This is how I sound."); };
  document.querySelectorAll("[data-rate]").forEach(b => b.onclick = () => { setPref("rate", +b.dataset.rate); refreshPanels(); speak("The weather is lovely today."); });
  const t = document.getElementById("voiceTest");
  if (t) t.onclick = () => speak("Welcome! Let's practise some English words.");
}

function exampleHTML(w) {
  if (!w.ex) return "";
  const stem = w.en.length > 4 && /e$/.test(w.en) ? w.en.slice(0, -1) : w.en;
  const re = new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*)", "i");
  return esc(w.ex).replace(re, "<mark>$1</mark>") + " " + speakBtn(w.ex, true);
}
const tags = w => `<span class="tag lvl ${w.lvl}">${w.lvl === "OWN" ? "moje" : w.lvl}</span><span class="tag">${POS[w.pos]}</span>`;

function norm(s) {
  return s.toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, " ").trim().replace(/^to /, "").replace(/[.!?]+$/, "");
}
const spell = s => s.replace(/our/g, "or").replace(/is(e|ed|es|ing)\b/g, "iz$1");
function lev(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
function check(given, target) {
  const g = spell(norm(given)), t = spell(norm(target));
  if (!g) return null;
  if (g === t) return "ok";
  if (t.length >= 5 && lev(g, t) === 1) return "typo";
  return "no";
}

// The word lists are written in theme blocks (months, colours, kitchen…), so the closest words
// of the same part of speech are wrong answers from the same family: a month among months.
const wordIdx = new Map(WORDS_RAW.map((x, i) => [x, i]));
const meanings = s => s.toLowerCase().split(/\s*[,;\/]\s*/).filter(Boolean);
function distractors(w, field) {
  const i = wordIdx.get(w);
  if (i != null) {
    const mine = new Set(meanings(w.pl).concat(meanings(w.en)));
    const clash = x => meanings(x.pl).concat(meanings(x.en)).some(m => mine.has(m));
    const near = WORDS_RAW.map((x, j) => [x, Math.abs(j - i)])
      .filter(([x, d]) => d && d <= 25 && x.pos === w.pos && !clash(x))
      .sort((a, b) => a[1] - b[1]).slice(0, 7).map(([x]) => x);
    if (near.length >= 3) return shuffle(near).slice(0, 3).map(x => x[field]);
  }
  const same = WORDS.filter(x => x.lvl === w.lvl && x.id !== w.id && x.pl !== w.pl && x.en !== w.en);
  const near = shuffle(same.filter(x => x.pos === w.pos && x.topic === w.topic));
  const pos = shuffle(same.filter(x => x.pos === w.pos && x.topic !== w.topic));
  const rest = shuffle(same.filter(x => x.pos !== w.pos));
  return near.concat(pos, rest).slice(0, 3).map(x => x[field]);
}

/* ---------- views ---------- */
const stage = document.getElementById("stage");

/* ---------- phone layout: tabs (Dziś / Ćwicz / Postęp / Profil) and a focus mode for exercises ---------- */
const mq = window.matchMedia("(max-width: 720px)");
const isMobile = () => mq.matches;
let ui = { tab: "today", focus: false, tipsOpen: false };
const ic = d => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const I = {
  x: ic('<path d="M6 6l12 12M18 6 6 18"/>'),
  chev: ic('<path d="m9 6 6 6-6 6"/>').replace('class="ic"', 'class="ic chev"'),
  check: ic('<path d="m5 12 5 5 9-10"/>'),
  play: ic('<path d="M7 4v16l13-8z"/>'),
  flame: ic('<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>'),
  cards: ic('<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>'),
  quiz: ic('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6M12 17h.01"/>'),
  pen: ic('<path d="M4 20h16M6 16l9-9 3 3-9 9H6z"/>'),
  ear: ic('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>')
};
const SWIPE_HINT = '<span class="swipehint k-touch">Możesz też przesunąć kartę: w prawo – umiem, w lewo – jeszcze nie.</span>';
const plPl = (n, one, few, many) => n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? few : many;
const modeLabel = m => (MODES.find(([k]) => k === m) || [m, m])[1];
const MODE_INFO = {
  cards: "Odwróć kartę i oceń się", quiz: "Wybierz z 4 odpowiedzi", type: "Wpisz po angielsku", listen: "Usłysz i zapisz",
  gap: "Wstaw słowo do zdania", hard: "Słowa, w których mylisz się najczęściej", own: "Dopisuj słowa z pracy i filmów", list: "Wyszukaj słowo i sprawdź status",
  sit: "Co powiesz w danej sytuacji?", tr: "Przetłumacz całe zdanie", free: "Odpowiedz na pytanie po swojemu", dict: "Posłuchaj i zapisz zdanie", shadow: "Posłuchaj i powtórz na głos",
  grammar: "Od A1 do C1, wyjaśnione po polsku",irr: "go – went – gone", wf: "Utwórz właściwą formę słowa", phr: "look for, depend on…",
  read: "Teksty, dialogi i maile z pytaniami", exam: "Sprawdź, czy przejść poziom wyżej", chat: "Scenki z Claude jako rozmówcą", write: "Tekst z oceną Claude"
};
const CATALOG = [
  ["Słówka", ["cards", "quiz", "type", "listen"], []],
  ["Gramatyka", [], ["grammar", "irr", "wf", "phr"]],
  ["Więcej ćwiczeń ze słówkami", [], ["gap", "hard", "own", "list"]],
  ["Zdania i wymowa", [], ["sit", "tr", "free", "dict", "shadow"]],
  ["Czytanie, egzaminy i rozmowa", [], ["read", "exam", "chat", "write"]]
];
const TILE_ICON = { cards: I.cards, quiz: I.quiz, type: I.pen, listen: I.ear };
const curLevel = () => LEVELS.includes(prefs.level) ? prefs.level : null;
const dueOf = m => { const now = Date.now(); return modePool(m).filter(w => isDue(w, now)).length; };
function bestStreak() {
  let best = 0, run = 0, prev = null;
  Object.keys(store.days).filter(k => store.days[k]).sort().forEach(k => {
    const t = new Date(k + "T12:00:00").getTime();
    run = prev != null && Math.round((t - prev) / 864e5) === 1 ? run + 1 : 1;
    best = Math.max(best, run); prev = t;
  });
  return best;
}
function modeBadge(m) {
  const lv = curLevel();
  if (m === "hard") { const n = hardList().length; return n ? `<span class="badge">${Math.min(n, ROUND)}</span>` : ""; }
  if (m === "own") return `<span class="badge muted">${ownWords().length}</span>`;
  if (m === "grammar") { const ts = GT.filter(t => !lv || t.lvl === lv); return `<span class="badge muted">${ts.filter(t => (gScore(t.id) || 0) >= 80).length}/${ts.length}</span>`; }
  if (m === "read") { const ts = TX.filter(t => !lv || t.lvl === lv); return `<span class="badge muted">${ts.filter(t => (store.r || {})[t.id]).length}/${ts.length}</span>`; }
  if (m === "exam") { const r = (store.ex || {})[lv || "B1"]; return r ? `<span class="badge ${r.passed ? "" : "muted"}">${r.best}%</span>` : ""; }
  if (["list", "chat", "write"].includes(m)) return "";
  const n = dueOf(m);
  return n ? `<span class="badge">${n}</span>` : "";
}
const mItem = (attrs, title, sub, right) => `<button type="button" class="mitem" data-act="m-open" ${attrs}><span class="t"><b>${title}</b>${sub ? `<small>${sub}</small>` : ""}</span>${right || ""}${I.chev}</button>`;

function todayHTML() {
  const now = Date.now(), goal = prefs.goal || 50, today = store.days[todayKey()] || 0;
  const due = allItems().filter(w => isDue(w, now)).length, round = Math.min(20, due), mins = Math.max(1, Math.round(round * 0.4));
  const cats = [["słówka", WORDS.concat(ownWords())], ["nieregularne", IRR], ["słowotwórstwo", WF], ["zdania", SENT], ["phrasal verbs", PHR], ["dyktando", DICT]]
    .filter(([, l]) => l.some(w => isDue(w, now))).map(([n]) => n);
  const C = 2 * Math.PI * 26, pct = Math.min(1, today / goal);
  const ring = `<svg class="ring" viewBox="0 0 64 64" role="img" aria-label="Cel dzienny: ${today} z ${goal} odpowiedzi">
    <circle cx="32" cy="32" r="26" class="ring-bg"/><circle cx="32" cy="32" r="26" class="ring-fg" stroke-dasharray="${(pct * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 32 32)"/>
    <text x="32" y="31" text-anchor="middle" class="ring-n">${today}</text><text x="32" y="44" text-anchor="middle" class="ring-l">z ${goal}</text></svg>`;
  const hero = due
    ? `<div><span class="eyebrow">Powtórka dnia</span><h2>${due} ${plPl(due, "zadanie czeka", "zadania czekają", "zadań czeka")}</h2>
        <p>${round < due ? `Runda: ${round} zadań · ` : ""}ok. ${mins} min${cats.length ? " · " + cats.slice(0, 3).join(", ") : ""}</p></div>`
    : `<div><span class="eyebrow">Powtórka dnia</span><h2>Wszystko powtórzone</h2><p>Na dziś nic nie czeka. Poznaj nowe słowa.</p></div>`;
  const s = streak(), known = WORDS.filter(w => prog(w.id).b >= 3).length;
  // this week, Monday to Sunday
  const d0 = new Date(), dow = (d0.getDay() + 6) % 7;
  let active = 0;
  const week = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((name, i) => {
    const x = new Date(d0); x.setDate(d0.getDate() - dow + i);
    const v = store.days[x.toLocaleDateString("sv")] || 0;
    if (v && i <= dow) active++;
    let cell;
    if (i === dow) cell = v >= goal ? `<span class="wd done" aria-label="Dziś: cel osiągnięty">${I.check}</span>` : `<span class="wd now" aria-label="Dziś: ${v} odpowiedzi">${v}</span>`;
    else if (i > dow) cell = `<span class="wd off" aria-hidden="true"></span>`;
    else cell = v ? `<span class="wd done" aria-label="${name}: ${v} odpowiedzi">${I.check}</span>` : `<span class="wd" aria-label="${name}: bez nauki"></span>`;
    return `<div>${cell}${name}</div>`;
  }).join("");
  // continue where you left off
  let cont = "";
  if (prefs.mode !== "review") {
    const run = session && !session.empty && session.i > 0 && session.i < session.queue.length;
    const bar = run ? `<span class="bar"><i style="width:${session.i / session.queue.length * 100}%"></i></span>` : "";
    cont = `<div class="mlist">${mItem(`data-mode="${prefs.mode}" data-keep="1"`, esc(modeLabel(prefs.mode)) + (curLevel() ? ` · ${curLevel()}` : ""),
      (run ? "Dokończ rundę" : "Ostatnio ćwiczone") + bar, run ? `<span class="badge muted">${session.i}/${session.queue.length}</span>` : "")}</div>`;
  }
  // suggestions
  const lv = curLevel(), recs = [];
  const hard = hardList().length;
  if (hard) recs.push(mItem(`data-mode="hard"`, "Najtrudniejsze słowa", "Słowa, w których mylisz się najczęściej", `<span class="badge">${Math.min(hard, ROUND)}</span>`));
  const gt = GT.filter(t => !lv || t.lvl === lv).find(t => (gScore(t.id) || 0) < 80);
  if (gt) recs.push(mItem(`data-mode="grammar" data-topic="${gt.id}"`, "Gramatyka: " + esc(gt.title), esc(gt.sum), `<span class="badge muted">${gScore(gt.id) == null ? "nowy" : gScore(gt.id) + "%"}</span>`));
  const tx = TX.filter(t => !lv || t.lvl === lv).find(t => !(store.r || {})[t.id]);
  if (tx) recs.push(mItem(`data-mode="read" data-text="${tx.id}"`, "Czytanie: " + esc(tx.title), `${tx.kind === "mail" ? "e-mail" : tx.kind} · ${tx.qs.length} pytania`, ""));
  return `<section class="hero"><div class="hero-top">${hero}${ring}</div>
      <button class="btn" type="button" data-act="m-open" data-mode="${due ? "review" : "cards"}">${I.play}${due ? "Zacznij powtórkę" : "Ucz się nowych słów"}</button></section>
    <div class="mstats"><div><b>${s}</b><small>${s === 1 ? "dzień z rzędu" : "dni z rzędu"}</small></div><div><b>${today}</b><small>odpowiedzi dziś</small></div><div><b>${known}</b><small>słów utrwalonych</small></div></div>
    <section class="mcard" aria-label="Ten tydzień"><div class="mrowhead"><b>Ten tydzień</b><span class="note">${active} z ${dow + 1} ${plPl(dow + 1, "dnia", "dni", "dni")} z nauką</span></div><div class="week">${week}</div></section>
    ${cont}
    ${recs.length ? `<section class="mgroup"><h3>Polecane na dziś</h3><div class="mlist">${recs.join("")}</div></section>` : ""}`;
}

function catalogHTML() {
  const lv = curLevel();
  return `<div class="mhead"><h2>Ćwicz</h2><span class="note">${lv ? "Poziom " + lv : "Wszystkie poziomy"}</span></div>` + CATALOG.map(([title, tiles, rows]) => {
    const rs = rows.filter(m => !["chat", "write"].includes(m) || aiSample);
    const due = tiles.length ? dueOf("cards") : 0;
    return `<section class="mgroup"><div class="mrowhead"><h3>${title}</h3>${tiles.length && due ? `<span class="note">${due} do powtórki</span>` : ""}</div>
      ${tiles.length ? `<div class="tiles">${tiles.map(m => `<button type="button" class="tile" data-act="m-open" data-mode="${m}">${TILE_ICON[m]}<b>${esc(modeLabel(m))}</b><small>${MODE_INFO[m]}</small></button>`).join("")}</div>` : ""}
      ${rs.length ? `<div class="mlist">${rs.map(m => mItem(`data-mode="${m}"`, esc(modeLabel(m)), MODE_INFO[m], modeBadge(m))).join("")}</div>` : ""}</section>`;
  }).join("");
}

function progressHTML() {
  const p = sideParts(), s = streak(), best = bestStreak();
  return `<div class="mhead"><h2>Postęp</h2><span class="streakchip">${I.flame}${s} ${s === 1 ? "dzień" : "dni"} · rekord ${best}</span></div>
    ${reviewSideHTML()}${p.counts}${p.levels(false)}${examSideHTML()}
    <div class="mlist">${mItem(`data-mode="exam"`, "Egzaminy poziomów", "Około 35 pytań, zdajesz od " + EXAM_PASS + "%", "")}${mItem(`data-mode="list"`, "Lista słów", "Wyszukaj słowo i sprawdź jego status", "")}</div>`;
}

function profileHTML() {
  return `<div class="mhead"><h2>Profil</h2></div>
    <div class="panel"><h3>O aplikacji</h3><p class="note">Angielskie słownictwo i gramatyka od A1 do C1, z powtórkami w odstępach.</p>
      <p class="note syncnote" data-state="${syncState}">${SYNC_TEXT[syncState]}</p></div>
    ${langPanelHTML()}
    ${voicePanelHTML()}
    <div class="panel"><h3>Postęp nauki</h3><p class="note">Każda dobra odpowiedź przesuwa słowo o jedno pudełko dalej (1 h, 1 dzień, 3, 7, 21 dni). Błąd cofa je na początek.</p>
      <div id="resetBox"><button class="danger" type="button" id="reset">Wyzeruj postęp</button></div></div>`;
}

function focusBarHTML() {
  const sec = SECTIONS.find(s => s[0] === sectionOf(prefs.mode));
  const title = prefs.mode === "review" ? "Powtórka dnia" : (sec && sec[2].length > 1 ? sec[1] + " · " : "") + modeLabel(prefs.mode);
  const dirOn = !document.getElementById("dir").hidden;
  return `<div class="fbar"><button class="iconbtn" type="button" data-act="m-close" aria-label="Zakończ i wróć">${I.x}</button>
    <span class="ftitle">${esc(title)}</span>${dirOn ? `<button class="dir" type="button" data-act="m-dir" aria-label="Zmień kierunek tłumaczenia">${prefs.dir === "en-pl" ? "EN → PL" : "PL → EN"}</button>` : ""}</div>`;
}

function renderTab() {
  document.getElementById("side").innerHTML = "";
  stage.innerHTML = { today: todayHTML, practice: catalogHTML, progress: progressHTML, profile: profileHTML }[ui.tab]();
  document.querySelectorAll(".mnav [data-tab]").forEach(b => b.setAttribute("aria-current", b.dataset.tab === ui.tab ? "page" : "false"));
  bindSide();
  renderTop();
}

function mOpen(mode, ds) {
  const keep = ds.keep && prefs.mode === mode;
  setPref("mode", mode);
  if (mode !== "review") setPref("secMode", Object.assign({}, prefs.secMode, { [sectionOf(mode)]: mode }));
  if (!keep) {
    if (mode === "grammar") gram = { view: "list" };
    if (mode === "read") rd = { view: "list" };
    if (mode === "own") ownView = "list";
    newSession();
  }
  if (mode === "grammar" && ds.topic) gram = { view: "topic", topic: ds.topic };
  if (mode === "read" && ds.text) rd = { view: "text", id: ds.text };
  ui.focus = true;
  renderControls(); render();
  window.scrollTo(0, 0);
}

function headerHTML() {
  const s = session, total = s.queue.length, pos = Math.min(s.i + 1, total);
  const cur = byId[s.queue[s.i]];
  return `<div class="meta"><span>${s.extra ? "Dodatkowa powtórka · " : ""}Zadanie ${pos} z ${total}</span><span>${cur ? repLink(itemCtx(cur)) : ""} ✓ ${s.ok} &nbsp; ✗ ${s.bad}</span></div>
  <div class="bar"><i style="width:${(s.i / total) * 100}%"></i></div>`;
}

function cardsHTML(w) {
  const st = session.state, enFirst = prefs.dir === "en-pl";
  const front = enFirst
    ? `<p class="word"><span class="hl">${esc(w.en)}</span></p>${speakBtn(w.en)}`
    : `<p class="word pl">${esc(w.pl)}</p>`;
  const back = enFirst
    ? `<p class="word pl">${esc(w.pl)}</p><div class="sub">${esc(w.en)} ${speakBtn(w.en)}</div><p class="ex">${exampleHTML(w)}</p>${dictLink(w.en)}`
    : `<p class="word"><span class="hl">${esc(w.en)}</span></p><div class="sub">${speakBtn(w.en)}</div><p class="ex">${exampleHTML(w)}</p>${dictLink(w.en)}`;
  return headerHTML() + `
  <div class="cardwrap ${st.flipped ? "is-flipped" : ""}">
    <div class="flip" data-act="flip" role="button" tabindex="0" aria-label="Odwróć fiszkę">
      <div class="face front"><div class="corner"><span class="tags">${tags(w)}</span></div>${front}<span class="hint"><span class="k-desk">Kliknij albo naciśnij Spację, żeby odwrócić</span><span class="k-touch">Dotknij karty, żeby ją odwrócić</span></span></div>
      <div class="face back"><div class="corner"><span class="tags">${tags(w)}</span></div>${back}</div>
    </div>
  </div>
  <div class="actions">${st.flipped
      ? `<button class="btn bad" data-act="no">Jeszcze nie umiem <kbd>1</kbd></button><button class="btn good" data-act="yes">Umiem <kbd>2</kbd></button>${SWIPE_HINT}`
      : `<button class="btn primary" data-act="flip">Pokaż odpowiedź <kbd>Spacja</kbd></button>`}</div>`;
}

function quizHTML(w) {
  const st = session.state, enFirst = prefs.dir === "en-pl", field = enFirst ? "pl" : "en";
  if (!st.opts) st.opts = shuffle([w[field]].concat(distractors(w, field)));
  const correct = w[field];
  const opts = st.opts.map((o, i) => {
    let cls = "";
    if (st.picked != null) cls = o === correct ? "right" : (i === st.picked ? "wrong" : "dim");
    return `<button class="opt ${cls}" data-act="pick" data-i="${i}" ${st.picked != null ? "disabled" : ""}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`;
  }).join("");
  const ok = st.picked != null && st.opts[st.picked] === correct;
  return headerHTML() + `
  <div class="prompt">
    <span class="tags">${tags(w)}</span>
    <div class="row">${enFirst ? `<p class="word"><span class="hl">${esc(w.en)}</span></p>${speakBtn(w.en)}` : `<p class="word pl">${esc(w.pl)}</p>`}</div>
    <span class="note">${enFirst ? "Wybierz polskie tłumaczenie" : "Wybierz angielskie słowo"}</span>
  </div>
  <div class="opts">${opts}</div>
  ${st.picked != null ? `<div class="feedback ${ok ? "ok" : "no"}"><strong>${ok ? "Dobrze!" : "Nie tym razem"}</strong>
    <span><b>${esc(w.en)}</b> = ${esc(w.pl)}</span><p class="ex">${exampleHTML(w)}</p>${dictLink(w.en)}</div>
    <div class="actions"><button class="btn primary" data-act="next">Dalej <kbd>Enter</kbd></button></div>` : ""}`;
}

function typeHTML(w) {
  const st = session.state;
  const mask = w.en.split("").map((c, i) => c === " " ? " " : (i < (st.hint || 0) ? c : "_")).join("");
  const res = st.result;
  return headerHTML() + `
  <div class="prompt">
    <span class="tags">${tags(w)}</span>
    <p class="word pl">${esc(w.pl)}</p>
    <span class="note">Napisz po angielsku. ${w.pos === "v" ? "Bez „to” na początku." : ""}</span>
  </div>
  <form class="typeform" id="typeform" autocomplete="off">
    <input id="answer" type="text" spellcheck="false" autocapitalize="off" autocorrect="off" enterkeyhint="go" placeholder="Twoja odpowiedź" value="${esc(st.given || "")}" ${res ? "readonly" : ""} class="${res ? (res === "no" ? "no" : "ok") : ""}" aria-label="Odpowiedź po angielsku">
    <button class="btn primary" type="submit">${res ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>
  </form>
  ${!res ? `<div style="margin-top:10px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
    <button class="linkbtn" type="button" data-act="hint">Podpowiedź</button>
    ${st.hint ? `<span class="mask">${esc(mask)}</span>` : ""}
    <button class="linkbtn" type="button" data-act="giveup" style="color:var(--muted)">Nie wiem</button></div>` : ""}
  ${res ? `<div class="feedback ${res === "no" ? "no" : "ok"}"><strong>${res === "ok" ? "Dobrze!" : res === "typo" ? "Prawie! Mała literówka" : "Poprawna odpowiedź:"}</strong>
    <span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(w.en)}</b> ${speakBtn(w.en)}</span><p class="ex">${exampleHTML(w)}</p>${dictLink(w.en)}</div>` : ""}`;
}

// The form of the word as it appears in the example sentence, split around it; null when it can't be found.
const gapCache = {};
function gapOf(w) {
  if (w.id in gapCache) return gapCache[w.id];
  const stem = w.en.length > 4 && /e$/.test(w.en) ? w.en.slice(0, -1) : w.en;
  const m = new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*)", "i").exec(w.ex);
  return gapCache[w.id] = m ? { before: w.ex.slice(0, m.index), target: m[1], after: w.ex.slice(m.index + m[1].length) } : null;
}
const targetOf = w => M() === "gap" ? gapOf(w).target : w.en;

function answerFormHTML(w, placeholder) {
  const st = session.state, res = st.result, target = targetOf(w);
  const mask = target.split("").map((c, i) => c === " " ? " " : (i < (st.hint || 0) ? c : "_")).join("");
  return `<form class="typeform" id="typeform" autocomplete="off">
    <input id="answer" type="text" spellcheck="false" autocapitalize="off" autocorrect="off" enterkeyhint="go" placeholder="${placeholder}" value="${esc(st.given || "")}" ${res ? "readonly" : ""} class="${res ? (res === "ok" || res === "typo" ? "ok" : "no") : ""}" aria-label="${placeholder}">
    <button class="btn primary" type="submit">${res ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>
  </form>
  ${!res ? `<div style="margin-top:10px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
    <button class="linkbtn" type="button" data-act="hint">Podpowiedź</button>
    ${st.hint ? `<span class="mask">${esc(mask)}</span>` : ""}
    <button class="linkbtn" type="button" data-act="giveup" style="color:var(--muted)">Nie wiem</button></div>` : ""}`;
}
function resultHTML(w) {
  const res = session.state.result;
  if (!res) return "";
  return `<div class="feedback ${res === "no" ? "no" : "ok"}"><strong>${res === "ok" ? "Dobrze!" : res === "typo" ? "Prawie! Mała literówka" : "Poprawna odpowiedź:"}</strong>
    <span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(targetOf(w))}</b> ${speakBtn(w.en)} <span style="color:var(--muted)">= ${esc(w.pl)}</span></span><p class="ex">${exampleHTML(w)}</p>${dictLink(w.en)}</div>`;
}

function listenHTML(w) {
  const st = session.state;
  return headerHTML() + `
  <div class="prompt">
    <span class="tags">${tags(w)}</span>
    <div class="row">
      <button class="playbig" type="button" data-act="replay" aria-label="Odtwórz słowo">${ICON_SPEAK}</button>
      <div style="display:grid;gap:6px">
        <span class="note">Posłuchaj i wpisz, co słyszysz.</span>
        <span style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="linkbtn" type="button" data-act="replay">Odtwórz ponownie</button>
          <button class="linkbtn" type="button" data-act="slow">Wolniej</button>
        </span>
      </div>
    </div>
    ${st.hint && !st.result ? `<span class="note">Znaczenie: <b>${esc(w.pl)}</b></span>` : ""}
  </div>
  ${answerFormHTML(w, "Wpisz usłyszane słowo")}
  ${resultHTML(w)}`;
}

function gapHTML(w) {
  const g = gapOf(w), st = session.state;
  const blank = st.result ? `<mark class="gapfill ${st.result === "no" ? "no" : "ok"}">${esc(g.target)}</mark>` : `<span class="gapblank">${"_".repeat(Math.max(4, g.target.length))}</span>`;
  return headerHTML() + `
  <div class="prompt">
    <span class="tags">${tags(w)}</span>
    <p class="gapline">${esc(g.before)}${blank}${esc(g.after)}</p>
    <span class="note">Wstaw brakujące słowo: <b>${esc(w.pl)}</b>${g.target.toLowerCase() !== w.en.toLowerCase() ? ` (w odpowiedniej formie)` : ""}</span>
  </div>
  ${answerFormHTML(w, "Brakujące słowo")}
  ${st.result ? `<div class="feedback ${st.result === "no" ? "no" : "ok"}"><strong>${st.result === "ok" ? "Dobrze!" : st.result === "typo" ? "Prawie! Mała literówka" : "Poprawna odpowiedź:"}</strong>
    <span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(g.target)}</b> ${speakBtn(w.ex, true)} <span style="color:var(--muted)">(${esc(w.en)} = ${esc(w.pl)})</span></span>${dictLink(w.en)}</div>` : ""}`;
}

const irrSay = w => [w.en, w.past.split("/")[0], w.pp.split("/")[0]].join(", ");
function checkAlt(given, target) {
  let best = "no";
  for (const t of [target].concat(target.split("/"))) {
    const r = check(given, t);
    if (r === null) return null;
    if (r === "ok") return "ok";
    if (r === "typo") best = "typo";
  }
  return best;
}
// Pattern groups make the forms easier to remember (put-put-put, buy-bought-bought...).
const IRR_GROUPS = {
  AAA: ["Wszystkie trzy formy takie same", "Najłatwiejsze – niczego nie zmieniasz: put – put – put."],
  ABB: ["2. i 3. forma takie same", "Wystarczy zapamiętać jedną nową formę: buy – bought – bought."],
  ABA: ["3. forma taka jak bezokolicznik", "Zmienia się tylko środkowa forma: come – came – come."],
  ABC: ["Wszystkie trzy formy różne", "Najtrudniejsze. 3. forma często kończy się na -n / -en (taken, written, flown) albo zmienia samogłoskę i – a – u (sing – sang – sung)."]
};
function irrPattern(w) {
  const b = w.en, p = w.past.split("/")[0], q = w.pp.split("/")[0];
  return b === p && p === q ? "AAA" : p === q ? "ABB" : b === q ? "ABA" : "ABC";
}
const irrV = () => prefs.mode === "review" ? "quiz" : irrView;
let irrView = ["train", "cards", "quiz", "table"].includes(prefs.irrView) ? prefs.irrView : "train";
const irrTabs = () => prefs.mode === "review" ? "" : `<div class="seg irrtabs" role="group" aria-label="Widok">${[["table", "Tabela do nauki"], ["cards", "Fiszki"], ["quiz", "Quiz"], ["train", "Wpisywanie"]]
  .map(([v, l]) => `<button type="button" data-act="irr-view" data-v="${v}" aria-pressed="${irrView === v}">${l}</button>`).join("")}</div>`;
const irrRegular = b => /e$/.test(b) ? b + "d" : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + "ied" : b + "ed";

function irrCardsHTML(w) {
  const st = session.state;
  return irrTabs() + headerHTML() + `
  <div class="cardwrap ${st.flipped ? "is-flipped" : ""}">
    <div class="flip" data-act="flip" role="button" tabindex="0" aria-label="Odwróć fiszkę">
      <div class="face front"><div class="corner"><span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">czasownik nieregularny</span></span></div>
        <p class="word"><span class="hl">${esc(w.en)}</span></p><div class="sub">${esc(w.pl)} ${speakBtn(w.en)}</div>
        <span class="hint">Przypomnij sobie 2. i 3. formę, potem odwróć<span class="k-desk"> (Spacja)</span></span></div>
      <div class="face back"><div class="corner"><span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span></span></div>
        ${forms3(w)}<div class="sub">${speakBtn(irrSay(w))}</div><span class="note">${IRR_GROUPS[irrPattern(w)][0]}</span></div>
    </div>
  </div>
  <div class="actions">${st.flipped
    ? `<button class="btn bad" data-act="no">Jeszcze nie umiem <kbd>1</kbd></button><button class="btn good" data-act="yes">Umiem <kbd>2</kbd></button>${SWIPE_HINT}`
    : `<button class="btn primary" data-act="flip">Pokaż formy <kbd>Spacja</kbd></button>`}</div>`;
}

function irrQuizHTML(w) {
  const st = session.state;
  const p = w.past.split("/")[0], q = w.pp.split("/")[0], reg = irrRegular(w.en);
  const correct = `${w.past} – ${w.pp}`;
  if (!st.opts) {
    // tricky options: regularised forms, swapped forms, a doubled form
    const pool = [`${reg} – ${reg}`, `${q} – ${p}`, `${p} – ${p}`, `${p} – ${reg}`, `${reg} – ${q}`, `${w.en} – ${q}`, `${q} – ${q}`]
      .filter((o, i, a) => o !== `${p} – ${q}` && a.indexOf(o) === i);
    st.opts = shuffle([correct].concat(shuffle(pool).slice(0, 3)));
  }
  const opts = st.opts.map((o, i) => {
    let cls = "";
    if (st.picked != null) cls = o === correct ? "right" : (i === st.picked ? "wrong" : "dim");
    return `<button class="opt ${cls}" data-act="irr-pick" data-i="${i}" ${st.picked != null ? "disabled" : ""}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`;
  }).join("");
  const ok = st.picked != null && st.opts[st.picked] === correct;
  return irrTabs() + headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">czasownik nieregularny</span></span>
    <div class="row"><p class="word"><span class="hl">${esc(w.en)}</span></p>${speakBtn(w.en)}</div>
    <span class="note">${esc(w.pl)} · wybierz 2. i 3. formę</span>
  </div>
  <div class="opts">${opts}</div>
  ${st.picked != null ? `<div class="feedback ${ok ? "ok" : "no"}"><strong>${ok ? "Dobrze!" : "Poprawne formy:"}</strong>${forms3(w)}
    <span class="sub" style="justify-content:flex-start">${speakBtn(irrSay(w), true)} <span class="note">${IRR_GROUPS[irrPattern(w)][0]}</span></span></div>
    <div class="actions"><button class="btn primary" data-act="next">Dalej <kbd>Enter</kbd></button></div>` : ""}`;
}
const forms3 = w => `<div class="forms3">
  <div><small>bezokolicznik</small><b>${esc(w.en)}</b></div>
  <div><small>Past Simple (2.)</small><b>${esc(w.past)}</b></div>
  <div><small>Past Participle (3.)</small><b>${esc(w.pp)}</b></div></div>`;

function irrHTML(w) {
  if (irrV() === "cards") return irrCardsHTML(w);
  if (irrV() === "quiz") return irrQuizHTML(w);
  const st = session.state, res = st.result;
  const isNew = prog(w.id).b === 0 && !st.learned && !res;
  st.learnShown = isNew;
  if (isNew) {
    const g = IRR_GROUPS[irrPattern(w)];
    if (!st.spoken) { st.spoken = true; setTimeout(() => speak(irrSay(w)), 0); }
    return irrTabs() + headerHTML() + `
    <div class="learn">
      <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">nowy czasownik</span></span>
      <span class="note">Przeczytaj, posłuchaj i zapamiętaj. Za chwilę wpiszesz formy sam.</span>
      <p class="sentprompt">${esc(w.pl)}</p>
      ${forms3(w)}
      <span class="sub" style="justify-content:flex-start">${speakBtn(irrSay(w))} <span class="note">Posłuchaj jeszcze raz</span></span>
      <span class="note"><b>${g[0]}.</b> ${g[1]}</span>
    </div>
    <div class="actions"><button class="btn primary" type="button" data-act="irr-learned">Zapamiętałem – sprawdź mnie <kbd>Enter</kbd></button></div>`;
  }
  const h = st.hint || 0;
  const mask = f => { const t = f.split("/")[0]; return h ? t.slice(0, h) + "_".repeat(Math.max(0, t.length - h)) : ""; };
  const field = (id, label, val, r, target) => `<label class="irrf" for="${id}"><span class="note">${label}</span>
    <input id="${id}" type="text" spellcheck="false" autocapitalize="off" autocorrect="off" enterkeyhint="${id === "past" ? "next" : "go"}" autocomplete="off" value="${esc(val || "")}" placeholder="${esc(mask(target))}" ${res ? "readonly" : ""} class="${r ? (r === "no" ? "no" : "ok") : ""}"></label>`;
  return irrTabs() + headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">czasownik nieregularny</span></span>
    <div class="row"><p class="word"><span class="hl">${esc(w.en)}</span></p>${speakBtn(w.en)}</div>
    <span class="note">${esc(w.pl)} · wpisz 2. i 3. formę</span>
  </div>
  <form class="typeform irrform" id="irrform" autocomplete="off">
    ${field("past", "Past Simple (2. forma)", st.gp, res && res.past, w.past)}
    ${field("pp", "Past Participle (3. forma)", st.gpp, res && res.pp, w.pp)}
    <button class="btn primary" type="submit">${res ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>
  </form>
  ${!res ? `<div style="margin-top:10px;display:flex;gap:14px;flex-wrap:wrap">
      <button class="linkbtn" type="button" data-act="irr-hint">Podpowiedź (kolejna litera)</button>
      <button class="linkbtn" type="button" data-act="giveup" style="color:var(--muted)">Nie wiem</button></div>` :
    `<div class="feedback ${res.ok ? "ok" : "no"}"><strong>${res.ok ? (res.typo ? "Prawie! Mała literówka" : "Dobrze!") : "Poprawne formy:"}</strong>
    ${forms3(w)}
    <span class="sub" style="justify-content:flex-start">${speakBtn(irrSay(w), true)} <span class="note">${IRR_GROUPS[irrPattern(w)][0]}</span></span></div>`}`;
}

function irrTableHTML() {
  const groups = { AAA: [], ABB: [], ABA: [], ABC: [] };
  irrPool().forEach(w => groups[irrPattern(w)].push(w));
  const rev = s => [...s].reverse().join("");
  const lvlName = prefs.level === "ALL" || !["A1", "A2", "B1"].includes(prefs.level) ? "wszystkie poziomy" : "poziom " + prefs.level;
  return irrTabs() + `<div class="ghead"><h2>Czasowniki nieregularne</h2>
    <p class="note">${lvlName} · pogrupowane według wzoru, a w grupie według podobnych końcówek (bought, brought, thought…). Kliknij głośnik, żeby usłyszeć wszystkie trzy formy.</p></div>` +
    Object.entries(groups).filter(([, ws]) => ws.length).map(([k, ws]) => {
      ws.sort((a, b) => rev(a.past.split("/")[0]).localeCompare(rev(b.past.split("/")[0])));
      return `<div class="irrgroup"><h3>${IRR_GROUPS[k][0]} <span class="note">(${ws.length})</span></h3><p class="note">${IRR_GROUPS[k][1]}</p>
      <div class="tablewrap"><table><thead><tr><th></th><th>Bezokolicznik</th><th>Past Simple</th><th>Past Participle</th><th>Znaczenie</th><th>Status</th></tr></thead><tbody>
      ${ws.map(w => { const s = statusOf(prog(w.id).b); return `<tr><td>${speakBtn(irrSay(w))}</td><td class="en">${esc(w.en)}</td><td class="en">${esc(w.past)}</td><td class="en">${esc(w.pp)}</td><td>${esc(w.pl)}</td><td><span class="st s${s}">${STATUS[s]}</span></td></tr>`; }).join("")}
      </tbody></table></div></div>`;
    }).join("");
}
function irrSubmit() {
  const w = byId[session.queue[session.i]], st = session.state;
  const pastEl = document.getElementById("past"), ppEl = document.getElementById("pp");
  const rp = checkAlt(pastEl.value, w.past), rpp = checkAlt(ppEl.value, w.pp);
  if (rp === null) { pastEl.focus(); return; }
  if (rpp === null) { ppEl.focus(); return; }
  const ok = rp !== "no" && rpp !== "no";
  st.gp = pastEl.value; st.gpp = ppEl.value;
  st.result = { past: rp, pp: rpp, ok, typo: rp === "typo" || rpp === "typo" };
  answer(ok); render(); speak(irrSay(w));
}
function wfHTML(w) {
  const st = session.state, res = st.result, good = res === "ok" || res === "typo";
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">słowotwórstwo</span></span>
    <p class="gapline">${res ? sentenceHTML(w.ex, w.en, good ? "ok" : "no") : sentenceHTML(w.ex)}</p>
    <span class="note">Utwórz właściwą formę od słowa: <b class="basew">${esc(w.base)}</b></span>
  </div>
  ${answerFormHTML(w, "Właściwa forma słowa")}
  ${res ? `<div class="feedback ${good ? "ok" : "no"}"><strong>${res === "ok" ? "Dobrze!" : res === "typo" ? "Prawie! Mała literówka" : res === "spell" ? "Uwaga na pisownię. Poprawnie:" : "Poprawna odpowiedź:"}</strong>
    <span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(w.base)} → ${esc(w.en)}</b> ${speakBtn(fillSentence(w.ex, w.en), true)}</span>
    <span>${esc(fillSentence(w.ex, w.en))}</span></div>` : ""}`;
}
function wfSideHTML() {
  const rows = ["B1", "B2", "C1"].map(l => {
    const ws = WF.filter(w => w.lvl === l), known = ws.filter(w => prog(w.id).b >= 3).length;
    return `<div class="lvrow"><span class="tag lvl ${l}">${l}</span><span class="track"><i class="${l}" style="width:${known / ws.length * 100}%"></i></span><span>${known}/${ws.length}</span></div>`;
  }).join("");
  return `<div class="panel"><h3>Słowotwórstwo</h3>${rows}<p class="note">Na A1 i A2 pokazuję zadania z B1. W tym trybie liczy się dokładna pisownia, jak na egzaminie.</p></div>`;
}
/* ---------- sentences: situations and translation ---------- */
let aiSample = null; // Claude check – only offered to the artifact's owner
function canonEN(s) {
  let t = s.toLowerCase().replace(/[’`´]/g, "'").replace(/\.(?=\w)/g, "").replace(/[.,!?;:"“”()–-]/g, " ")
    .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b|\bcannot\b/g, "can not").replace(/\bshan't\b/g, "shall not")
    .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will")
    // the same contractions typed without the apostrophe
    .replace(/\bwont\b/g, "will not").replace(/\bcant\b/g, "can not")
    .replace(/\b(do|does|did|is|are|was|were|have|has|had|could|should|would|must|need)nt\b/g, "$1 not")
    .replace(/\bim\b/g, "i am").replace(/\bive\b/g, "i have").replace(/\b(you|they)re\b/g, "$1 are")
    .replace(/\b(what|that|there|it|he|she|who|where|how)s\b/g, "$1's");
  t = spell(t.replace(/\s+/g, " ").trim());
  const out = new Set();
  for (const d of [" would", " had"]) for (const z of [" is", " has", "s"]) out.add(t.replace(/'d\b/g, d).replace(/'s\b/g, z).replace(/\s+/g, " "));
  return [...out];
}
function canonPL(s) {
  return [s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l")
    .replace(/[.,!?;:"“”„()–-]/g, " ").replace(/\s+/g, " ").trim()];
}
function matchSentence(given, list, lang) {
  const canon = lang === "en" ? canonEN : canonPL;
  const g = canon(given);
  let bestDist = Infinity, best = list[0];
  for (const a of list) {
    const c = canon(a);
    if (c.some(x => g.includes(x))) return { r: "ok", a };
    const d = lev(g[0], c[0]);
    if (d < bestDist) { bestDist = d; best = a; }
  }
  if (bestDist <= Math.max(1, Math.floor(best.length / 20))) return { r: "typo", a: best };
  return { r: "miss", a: best };
}
const sentToEN = w => w.kind === "sit" || prefs.dir === "pl-en";
const sentList = w => w.kind === "sit" ? w.answers : sentToEN(w) ? w.ens : w.pls;
const sentPool = kind => SENT.filter(w => w.kind === kind && (prefs.level === "ALL" || w.lvl === prefs.level));

function sentHTML(w) {
  const st = session.state, res = st.result, toEN = sentToEN(w), list = sentList(w);
  const main = st.match || list[0];
  const others = list.filter(a => a !== main).slice(0, 3);
  const prompt = w.kind === "sit" ? w.prompt : toEN ? w.pl : w.en;
  const label = w.kind === "sit" ? "Co powiesz po angielsku?" : toEN ? "Przetłumacz na angielski" : "Przetłumacz na polski";
  const hintWords = main.split(" ").slice(0, st.hint || 0).join(" ");
  const done = res && res !== "miss";
  const altHTML = others.length ? `<span class="note">Też dobrze: ${others.map(esc).join(" · ")}</span>` : "";
  const answerLine = `<span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(main)}</b> ${toEN ? speakBtn(main, true) : ""}</span>`;
  let fb = "";
  if (res === "ok" || res === "typo" || res === "self") {
    fb = `<div class="feedback ok"><strong>${res === "ok" ? "Dobrze!" : res === "typo" ? "Prawie! Mała literówka" : "Zaliczone jako poprawne"}</strong>${res !== "ok" ? answerLine : ""}${altHTML}</div>`;
  } else if (res === "no") {
    fb = `<div class="feedback no"><strong>Poprawna odpowiedź:</strong>${answerLine}${altHTML}</div>`;
  } else if (res === "ai") {
    const ai = st.ai;
    fb = `<div class="feedback ${ai.ok ? "ok" : "no"}"><strong>${ai.ok ? "Claude: dobrze!" : "Claude: jest błąd"}</strong>
      ${ai.feedback ? `<span>${esc(ai.feedback)}</span>` : ""}
      ${!ai.ok && ai.corrected ? `<span class="sub ui" style="justify-content:flex-start;color:var(--ink)">Poprawnie: <b>${esc(ai.corrected)}</b> ${toEN ? speakBtn(ai.corrected, true) : ""}</span>` : ""}
      <span class="note">Wzorcowo: ${esc(main)}</span></div>`;
  } else if (res === "miss") {
    const ai = st.ai;
    fb = `<div class="feedback"><strong>${st.near ? "Prawie! Porównaj ze wzorcem – to literówka czy błąd gramatyczny?" : "Twoja odpowiedź nie pasuje do moich wersji"}</strong>
      <span class="note">Wzorcowo:</span>${answerLine}${altHTML}
      <span class="note">Jeśli Twoje zdanie też jest poprawne, zalicz je sobie.</span>
      ${ai === "loading" ? `<span class="note">Claude sprawdza Twoje zdanie…</span>` : ai && ai.error ? `<span class="note">${esc(ai.error)}</span>` : ""}</div>
      <div class="actions">
        <button class="btn good" type="button" data-act="s-self">Miałem dobrze</button>
        <button class="btn bad" type="button" data-act="s-wrong">Licz jako błąd <kbd>Enter</kbd></button>
        ${aiSample && ai !== "loading" ? `<button class="btn" type="button" data-act="s-ai">Sprawdź z Claude</button>` : ""}
      </div>`;
  }
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">${w.kind === "sit" ? "sytuacja" : "tłumaczenie"}</span></span>
    <span class="note">${label}</span>
    <div class="row"><p class="sentprompt">${esc(prompt)}</p>${w.kind === "tr" && !toEN ? speakBtn(w.en) : ""}</div>
    ${st.hint && !res ? `<span class="mask">${esc(hintWords)} …</span>` : ""}
  </div>
  <form class="typeform" id="typeform" autocomplete="off">
    <input id="answer" type="text" spellcheck="false" autocapitalize="sentences" autocorrect="off" enterkeyhint="go" placeholder="${toEN ? "Napisz po angielsku" : "Napisz po polsku"}" value="${esc(st.given || "")}" ${res ? "readonly" : ""} class="${done ? (res === "no" || (res === "ai" && !st.ai.ok) ? "no" : "ok") : ""}" aria-label="Twoja odpowiedź">
    ${res === "miss" ? "" : `<button class="btn primary" type="submit">${done ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>`}
  </form>
  ${!res ? `<div style="margin-top:10px;display:flex;gap:14px;flex-wrap:wrap">
    <button class="linkbtn" type="button" data-act="s-hint">Podpowiedź (kolejne słowo)</button>
    <button class="linkbtn" type="button" data-act="giveup" style="color:var(--muted)">Nie wiem</button></div>` : ""}
  ${fb}`;
}

function sentSubmit() {
  const st = session.state, w = byId[session.queue[session.i]];
  if (st.result === "miss") { if (st.ai !== "loading") act("s-wrong"); return; }
  if (st.result) { next(); return; }
  const given = document.getElementById("answer").value.trim();
  if (!given) return;
  const toEN = sentToEN(w), m = matchSentence(given, sentList(w), toEN ? "en" : "pl");
  st.given = given; st.match = m.a;
  // a one-letter difference in a sentence may be a grammar slip (year/years), so let the learner compare
  if (m.r === "miss" || m.r === "typo") { st.result = "miss"; st.near = m.r === "typo"; render(); return; }
  st.result = m.r; answer(true); render();
  if (toEN) speak(m.a);
}

async function aiCheck() {
  const st = session.state, w = byId[session.queue[session.i]];
  if (!aiSample || st.ai === "loading" || st.result !== "miss") return;
  st.ai = "loading"; render();
  const toEN = sentToEN(w), list = sentList(w);
  const task = w.kind === "sit" ? `Situation (instruction in Polish): "${w.prompt}". The learner must say this in English.`
    : toEN ? `Translate into English: "${w.pl}"` : `Translate into Polish: "${w.en}"`;
  const prompt = `You are a friendly but precise English teacher for an adult Polish learner (CEFR level ${w.lvl}).
Exercise: ${task}
Reference answers: ${list.join(" | ")}
Learner's answer: "${st.given}"
Decide whether the learner's answer is correct: grammatically correct, natural, and with the same meaning as the reference. Ignore capital letters and final punctuation. Other correct wordings are fine.
Reply with only JSON: {"correct": true or false, "feedback": "1-2 short sentences in ${fbLang()}: the verdict and, if wrong, the grammar point to fix", "corrected": "the learner's sentence corrected, or the same sentence if it is correct"}`;
  try {
    const r = await aiSample.json(prompt, { modelTier: "quick" });
    if (session.state !== st) return;
    st.ai = { ok: !!(r && r.correct), feedback: String((r && r.feedback) || ""), corrected: String((r && r.corrected) || "") };
    st.result = "ai"; answer(st.ai.ok); render();
    if (st.ai.ok && toEN) speak(st.given);
  } catch (e) {
    if (session.state !== st) return;
    const code = e && e.code;
    if (code === "not_granted" || code === "sampling_disabled" || code === "not_declared" || code === "capability_disabled") aiSample = null;
    st.ai = { error: code === "not_granted" ? "Nie zezwolono apce na użycie Claude." : code === "rate_limited" ? "Za dużo sprawdzeń naraz. Spróbuj za chwilę." : "Nie udało się sprawdzić. Spróbuj ponownie." };
    render();
  }
}

function sentSideHTML(kind) {
  const rows = LEVELS.map(l => {
    const ws = SENT.filter(w => w.kind === kind && w.lvl === l), known = ws.filter(w => prog(w.id).b >= 3).length;
    return `<div class="lvrow"><span class="tag lvl ${l}">${l}</span><span class="track"><i class="${l}" style="width:${ws.length ? known / ws.length * 100 : 0}%"></i></span><span>${known}/${ws.length}</span></div>`;
  }).join("");
  return `<div class="panel"><h3>${kind === "sit" ? "Sytuacje" : "Tłumaczenie zdań"}</h3>${rows}<p class="note">Skróty (what's / what is) i wielkość liter nie mają znaczenia.</p></div>`;
}

/* ---------- shared helpers for the newer modes ---------- */
function lvlPanel(title, items, note) {
  const rows = LEVELS.map(l => {
    const ws = items.filter(w => w.lvl === l);
    if (!ws.length) return "";
    const known = ws.filter(w => prog(w.id).b >= 3).length;
    return `<div class="lvrow"><span class="tag lvl ${l}">${l}</span><span class="track"><i class="${l}" style="width:${known / ws.length * 100}%"></i></span><span>${known}/${ws.length}</span></div>`;
  }).join("");
  return `<div class="panel"><h3>${title}</h3>${rows}${note ? `<p class="note">${note}</p>` : ""}</div>`;
}
function emptyHTML() {
  const msg = {
    review: ["Na dziś wszystko powtórzone!", "Nic nie czeka na powtórkę. Nowe rzeczy ćwiczysz w sekcjach Słówka, Zdania i Gramatyka – trafią tutaj, gdy przyjdzie czas na powtórkę."],
    hard: ["Brak trudnych słów", "Tu zbiorą się słowa, w których się mylisz. Poćwicz najpierw trochę w innych trybach."],
    own: ["Brak własnych słów", "Dodaj je na liście „Moje słówka”."]
  }[prefs.mode] || ["Brak zadań", "Na tym poziomie nie ma zadań w tym trybie. Wybierz inny poziom."];
  return `${prefs.mode === "own" ? `<button class="linkbtn" type="button" data-act="own-list">← Lista moich słówek</button>` : ""}
    <div class="empty"><h2>${msg[0]}</h2><p class="note">${msg[1]}</p></div>`;
}

/* ---------- own words ---------- */
let ownView = "list", ownDelId = null;
function ownWords() {
  return (store.own || []).map(o => byId[o.id] || (byId[o.id] = { id: o.id, lvl: "OWN", en: o.en, pl: o.pl, ex: o.ex || "", pos: "n", own: true }));
}
function ownHTML() {
  const ws = ownWords();
  const rows = ws.slice().reverse().map(w => {
    const s = statusOf(prog(w.id).b);
    const del = ownDelId === w.id
      ? `<span class="confirm">Usunąć?<button class="yes" type="button" data-act="own-del-yes" data-id="${esc(w.id)}">Usuń</button><button type="button" data-act="own-del-no">Anuluj</button></span>`
      : `<button class="danger" type="button" data-act="own-del" data-id="${esc(w.id)}">Usuń</button>`;
    return `<tr><td class="en"><span style="display:inline-flex;align-items:center;gap:8px">${speakBtn(w.en)}${esc(w.en)}</span></td><td>${esc(w.pl)}</td><td class="note">${esc(w.ex)}</td><td><span class="st s${s}">${STATUS[s]}</span></td><td>${del}</td></tr>`;
  }).join("");
  return `<div class="ghead"><h2>Moje słówka</h2><p class="note">Dopisuj słowa spotkane w pracy, w dokumentacji albo w filmach. Ćwiczysz je w trybie pisania (z polskiego na angielski) i trafiają do powtórek.</p></div>
  <form class="ownform" id="ownform" autocomplete="off">
    <label for="own-en">Po angielsku<input id="own-en" maxlength="80" placeholder="np. fixture"></label>
    <label for="own-pl">Po polsku<input id="own-pl" maxlength="120" placeholder="np. przyrząd mocujący"></label>
    <label for="own-ex" class="wide">Przykładowe zdanie (opcjonalnie)<input id="own-ex" maxlength="200" placeholder="np. The part is held in a fixture."></label>
    <button class="btn primary" type="submit">Dodaj słowo</button>
  </form>
  ${ws.length ? `<div class="actions"><button class="btn primary" type="button" data-act="own-train">Ćwicz moje słówka (${ws.length})</button></div>
  <div class="tablewrap"><table><thead><tr><th>Angielski</th><th>Polski</th><th>Przykład</th><th>Status</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`
  : `<p class="note">Nie masz jeszcze własnych słów. Dodaj pierwsze powyżej.</p>`}`;
}
function ownAdd() {
  const en = document.getElementById("own-en").value.trim(), pl = document.getElementById("own-pl").value.trim(), ex = document.getElementById("own-ex").value.trim();
  if (!en) { document.getElementById("own-en").focus(); return; }
  if (!pl) { document.getElementById("own-pl").focus(); return; }
  store.own = (store.own || []).concat({ id: "OWN:" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), en, pl, ex });
  persist(); render();
  const f = document.getElementById("own-en"); if (f) f.focus();
}

/* ---------- phrasal verbs and prepositions ---------- */
function phrHTML(w) {
  const st = session.state, res = st.result, good = res === "ok" || res === "typo";
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">phrasal verb / przyimek</span></span>
    <p class="gapline">${res ? sentenceHTML(w.ex, w.en, good ? "ok" : "no") : sentenceHTML(w.ex)}</p>
    <span class="note">Wpisz brakujące słowo. Znaczenie: <b>${esc(w.pl)}</b></span>
  </div>
  ${answerFormHTML(w, "Brakujące słowo")}
  ${res ? `<div class="feedback ${good ? "ok" : "no"}"><strong>${good ? "Dobrze!" : "Poprawnie:"}</strong>
    <span class="sub" style="justify-content:flex-start;color:var(--ink)"><b>${esc(fillSentence(w.ex, w.en))}</b> ${speakBtn(fillSentence(w.ex, w.en), true)}</span></div>` : ""}`;
}

/* ---------- dictation ---------- */
function diffHTML(target, given) {
  const norm = s => s.toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);
  const pool = norm(given);
  return target.split(" ").map(word => {
    const k = norm(word)[0];
    const i = k ? pool.indexOf(k) : -1;
    if (i >= 0) { pool.splice(i, 1); return esc(word); }
    return k ? `<span class="dmiss">${esc(word)}</span>` : esc(word);
  }).join(" ");
}
function dictHTML(w) {
  const st = session.state, res = st.result;
  if (!st.spoken && !res) { st.spoken = true; setTimeout(() => speak(w.en), 0); }
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">dyktando</span></span>
    <div class="row">
      <button class="playbig" type="button" data-act="d-play" aria-label="Odtwórz zdanie">${ICON_SPEAK}</button>
      <div style="display:grid;gap:6px">
        <span class="note">Posłuchaj i zapisz całe zdanie po angielsku.</span>
        <span style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="linkbtn" type="button" data-act="d-play">Odtwórz ponownie</button>
          <button class="linkbtn" type="button" data-act="d-slow">Wolniej</button>
        </span>
      </div>
    </div>
    ${st.hint && !res ? `<span class="mask">${esc(w.en.split(" ").slice(0, st.hint).join(" "))} …</span>` : ""}
  </div>
  <form class="typeform" id="typeform" autocomplete="off">
    <input id="answer" type="text" spellcheck="false" autocapitalize="sentences" autocorrect="off" enterkeyhint="go" placeholder="Zapisz usłyszane zdanie" value="${esc(st.given || "")}" ${res ? "readonly" : ""} class="${res ? (res === "no" ? "no" : "ok") : ""}" aria-label="Usłyszane zdanie">
    <button class="btn primary" type="submit">${res ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>
  </form>
  ${!res ? `<div style="margin-top:10px;display:flex;gap:14px;flex-wrap:wrap">
    <button class="linkbtn" type="button" data-act="d-hint">Podpowiedź (kolejne słowo)</button>
    <button class="linkbtn" type="button" data-act="giveup" style="color:var(--muted)">Nie wiem</button></div>` :
    `<div class="feedback ${res === "no" ? "no" : "ok"}"><strong>${res === "ok" ? "Dobrze!" : res === "typo" ? "Prawie! Porównaj z oryginałem:" : "Oryginał (na czerwono słowa, których brakowało):"}</strong>
    <p class="dline">${diffHTML(w.en, st.given || "")} ${speakBtn(w.en, true)}</p></div>`}`;
}
function dictSubmit() {
  const st = session.state, w = byId[session.queue[session.i]];
  if (st.result) { next(); return; }
  const given = document.getElementById("answer").value.trim();
  if (!given) return;
  const m = matchSentence(given, [w.en], "en");
  st.given = given; st.result = m.r === "miss" ? "no" : m.r;
  answer(m.r !== "miss"); render();
}

/* ---------- reading and listening texts ---------- */
const TX = TEXTS.map(t => Object.assign({}, t, {
  qs: t.qs.trim().split("\n").map(l => { const [q, a, w] = l.split("|"); return { q, a, wrong: w.split(";") }; })
}));
let rd = { view: "list" };
function makeUtter(text, rate, voice) {
  const u = new SpeechSynthesisUtterance(text);
  const v = voice || currentVoice();
  if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
  u.rate = rate || prefs.rate || 0.9;
  return u;
}
function speakText(t) {
  if (!hasSpeech) return;
  try {
    speechSynthesis.cancel(); speechSynthesis.resume();
    const speakers = [];
    const parts = [];
    t.text.split("\n").forEach(line => {
      const m = t.kind === "dialog" && /^([A-Z][\w ]{0,20}):\s*(.*)$/.exec(line);
      let voice = null, body = line;
      if (m) {
        if (!speakers.includes(m[1])) speakers.push(m[1]);
        body = m[2];
        if (enVoices.length > 1) voice = enVoices[speakers.indexOf(m[1]) % Math.min(enVoices.length, 3)];
      }
      (body.match(/[^.!?]+[.!?]*/g) || []).forEach(s => { if (s.trim()) parts.push(makeUtter(s.trim(), null, voice)); });
    });
    setTimeout(() => parts.forEach(u => speechSynthesis.speak(u)), 60);
  } catch (e) {}
}
function readHTML() {
  if (rd.view === "list") {
    const lv = prefs.level === "ALL" ? LEVELS : [prefs.level];
    const kindName = { tekst: "tekst", dialog: "dialog", mail: "e-mail" };
    return `<div class="ghead"><h2>Czytanie i słuchanie</h2><p class="note">Krótkie teksty, dialogi i maile. Możesz je przeczytać albo ukryć tekst i tylko posłuchać. Pod każdym są pytania.</p></div>` +
      lv.map(l => {
        const ts = TX.filter(t => t.lvl === l);
        if (!ts.length) return "";
        return `<div class="glevel"><span class="tag lvl ${l}">${l}</span></div><div class="gtopics">${ts.map(t => {
          const r = (store.r || {})[t.id];
          return `<button type="button" class="gtopic" data-act="rd-open" data-id="${t.id}"><b>${esc(t.title)}</b><span class="note">${kindName[t.kind]} · ${t.qs.length} pytania</span>
            <span class="gscore ${r ? (r.best === 100 ? "good" : "mid") : ""}">${r ? "Najlepszy wynik: " + r.best + "%" : "Nie przeczytane"}</span></button>`;
        }).join("")}</div>`;
      }).join("");
  }
  const t = TX.find(x => x.id === rd.id);
  if (!rd.opts) rd.opts = t.qs.map(q => shuffle([q.a].concat(q.wrong)));
  rd.ans = rd.ans || {};
  const body = t.text.split("\n").map(line => {
    const m = t.kind === "dialog" && /^([A-Z][\w ]{0,20}):\s*(.*)$/.exec(line);
    return m ? `<p class="dl"><b>${esc(m[1])}:</b> ${esc(m[2])}</p>` : `<p>${esc(line)}</p>`;
  }).join("");
  const score = rd.checked ? t.qs.filter((q, i) => rd.opts[i][rd.ans[i]] === q.a).length : 0;
  return `<button class="linkbtn" type="button" data-act="rd-list">← Wszystkie teksty</button>
  <div class="ghead"><span class="tags"><span class="tag lvl ${t.lvl}">${t.lvl}</span><span class="tag">${t.kind === "mail" ? "e-mail" : t.kind}</span> ${repLink("tekst:" + t.id + " | " + t.title)}</span><h2>${esc(t.title)}</h2></div>
  <div class="rtools">
    ${hasSpeech ? `<button class="btn" type="button" data-act="rd-play">${ICON_SPEAK.replace("<svg", '<svg width="18" height="18"')} Posłuchaj</button>
    <button class="btn" type="button" data-act="rd-stop">Zatrzymaj</button>` : ""}
    <button class="btn" type="button" data-act="rd-hide">${rd.hide ? "Pokaż tekst" : "Ukryj tekst (tylko słuchanie)"}</button>
  </div>
  <div class="rtext ${t.kind}">${rd.hide && !rd.checked ? `<p class="note">Tekst jest ukryty. Posłuchaj nagrania i odpowiedz na pytania.</p>` : body}</div>
  <div class="rqs">${t.qs.map((q, qi) => `<div class="rq"><p><b>${qi + 1}.</b> ${esc(q.q)}</p><div class="opts">${rd.opts[qi].map((o, oi) => {
      let cls = rd.ans[qi] === oi ? "picked" : "";
      if (rd.checked) cls = o === q.a ? "right" : (rd.ans[qi] === oi ? "wrong" : "dim");
      return `<button class="opt ${cls}" type="button" data-act="rd-pick" data-q="${qi}" data-i="${oi}" ${rd.checked ? "disabled" : ""}><span>${esc(o)}</span></button>`;
    }).join("")}</div></div>`).join("")}</div>
  ${rd.checked
    ? `<div class="feedback ${score === t.qs.length ? "ok" : "no"}"><strong>Wynik: ${score} z ${t.qs.length}</strong></div>
       <div class="actions"><button class="btn primary" type="button" data-act="rd-again">Jeszcze raz</button><button class="btn" type="button" data-act="rd-list">Inny tekst</button></div>`
    : `<div class="actions"><button class="btn primary" type="button" data-act="rd-check">Sprawdź odpowiedzi</button></div>`}`;
}
function readAct(a, el) {
  const t = rd.id && TX.find(x => x.id === rd.id);
  if (a === "rd-open") rd = { view: "text", id: el.dataset.id };
  else if (a === "rd-list") { try { speechSynthesis.cancel(); } catch (e) {} rd = { view: "list" }; }
  else if (a === "rd-play") { speakText(t); return; }
  else if (a === "rd-stop") { try { speechSynthesis.cancel(); } catch (e) {} return; }
  else if (a === "rd-hide") rd.hide = !rd.hide;
  else if (a === "rd-pick") { if (rd.checked) return; rd.ans[+el.dataset.q] = +el.dataset.i; }
  else if (a === "rd-again") rd = { view: "text", id: rd.id, hide: rd.hide };
  else if (a === "rd-check") {
    rd.checked = true;
    const score = t.qs.filter((q, i) => rd.opts[i][rd.ans[i]] === q.a).length;
    const pct = Math.round(score / t.qs.length * 100);
    store.r = store.r || {};
    const prev = store.r[t.id] || { best: 0, n: 0 };
    store.r[t.id] = { best: Math.max(prev.best, pct), n: prev.n + 1 };
    t.qs.forEach(() => countAnswer());
    persist();
  }
  render();
}

/* ---------- role-play chat with Claude (owner only) ---------- */
let chat = { view: "list" };
const chatLevel = () => LEVELS.includes(prefs.level) ? prefs.level : "B1";
function chatRules(scn, lvl) {
  return `You are role-playing a conversation with an adult Polish learner of English (CEFR level ${lvl}).
Scenario: ${scn.sit}
Your role: ${scn.role}. The learner's role: ${scn.me}.
Rules: stay in character the whole time; reply only in English; keep each reply to 1-3 short sentences using vocabulary and grammar suitable for level ${lvl}; usually end with a question or a prompt so the conversation continues; do not correct the learner's mistakes during the role-play (they get feedback at the end). If the learner writes in Polish, kindly ask them in simple English to try in English.
Start the conversation now with your first line, in character, with no introduction.`;
}
const CHAT_EVAL = () => `The role-play is over. Step out of your role and act as the learner's English teacher. Write in ${fbLang()}.
1) List up to 6 mistakes from the learner's messages only (not yours). For each: quote the wrong fragment, give the correct English version, and explain the rule in one short sentence.
2) Give a short overall comment on how well the learner communicated, and 2 practical tips (with example English phrases they could use next time).
If there were no mistakes, say so and suggest 2-3 more advanced phrases. Use short plain-text lines, no tables.`;
function chatHTML() {
  if (!aiSample) return `<div class="empty"><h2>Rozmowa z Claude</h2><p class="note">Ta część działa tylko u właściciela apki.</p></div>`;
  if (chat.view === "list") {
    return `<div class="ghead"><h2>Rozmowa z Claude</h2><p class="note">Wybierz scenkę. Claude odegra rozmówcę na poziomie ${chatLevel()} (zmienisz go wyborem poziomu na górze). Na koniec kliknij „Zakończ i oceń”, a dostaniesz listę błędów z wyjaśnieniami po polsku. Każda wiadomość korzysta z Twojego limitu Claude.</p></div>
      <div class="gtopics">${CHAT_SCN.map(s => `<button type="button" class="gtopic" data-act="ch-open" data-id="${s.id}"><b>${esc(s.title)}</b><span class="note">Ty: ${esc(s.me)}</span></button>`).join("")}</div>`;
  }
  const scn = CHAT_SCN.find(s => s.id === chat.scn);
  const msgs = chat.turns.slice(1).map(m => m.role === "assistant"
    ? `<div class="bubble bot"><span>${esc(m.content)}</span>${speakBtn(m.content, true)}</div>`
    : `<div class="bubble me"><span>${esc(m.content)}</span></div>`).join("");
  const userCount = chat.turns.filter((m, i) => i > 0 && m.role === "user").length;
  return `<button class="linkbtn" type="button" data-act="ch-list">← Inne scenki</button>
  <div class="ghead"><span class="tags"><span class="tag lvl ${chat.lvl}">${chat.lvl}</span><span class="tag">rozmowa</span></span><h2>${esc(scn.title)}</h2>
    <p class="note">Twoja rola: ${esc(scn.me)}.</p></div>
  <div class="chatlog" id="ch-log">${msgs}${chat.busy && !chat.evaluating ? `<div class="bubble bot live"><span id="ch-live">${esc(chat.live || "…")}</span></div>` : ""}</div>
  ${chat.error ? `<p class="note" style="color:var(--bad)">${esc(chat.error)}</p>` : ""}
  ${chat.feedback ? `<div class="feedback ok"><strong>Ocena rozmowy</strong><div class="fbtext">${esc(chat.feedback)}</div></div>` : chat.evaluating ? `<div class="feedback"><strong>Claude ocenia rozmowę…</strong><div class="fbtext" id="ch-live">${esc(chat.live || "")}</div></div>` : `
  <form class="typeform" id="chatform" autocomplete="off">
    <input id="ch-input" type="text" enterkeyhint="send" placeholder="Napisz po angielsku…" ${chat.busy ? "disabled" : ""} aria-label="Twoja wiadomość">
    <button class="btn primary" type="submit" ${chat.busy ? "disabled" : ""}>Wyślij <kbd>Enter</kbd></button>
  </form>`}
  <div class="actions">
    ${chat.busy ? `<button class="btn" type="button" data-act="ch-stop">Zatrzymaj</button>` : ""}
    ${!chat.feedback && !chat.busy && userCount ? `<button class="btn good" type="button" data-act="ch-eval">Zakończ i oceń</button>` : ""}
    <button class="btn" type="button" data-act="ch-restart">Zacznij od nowa</button>
  </div>`;
}
function afterChatRender() {
  const box = document.getElementById("ch-log"); if (box) box.scrollTop = box.scrollHeight;
  // on a phone the log doesn't scroll on its own, so scroll the page to the latest message instead
  if (isMobile() && box && box.lastElementChild) box.lastElementChild.scrollIntoView({ block: "nearest" });
  const inp = document.getElementById("ch-input"); if (inp && !inp.disabled) inp.focus({ preventScroll: true });
}
async function chatCall(turns, tier, onDone, evaluating) {
  const ctl = new AbortController();
  Object.assign(chat, { busy: true, live: "", error: "", ctl, evaluating: !!evaluating });
  render();
  try {
    const { text } = await aiSample(turns, { modelTier: tier, cache: false, signal: ctl.signal, onText: ({ text }) => {
      chat.live = text;
      const el = document.getElementById("ch-live"); if (el) el.textContent = text;
      const box = document.getElementById("ch-log"); if (box) box.scrollTop = box.scrollHeight;
    } });
    chat.busy = false; chat.evaluating = false;
    onDone(text);
  } catch (e) {
    chat.busy = false; chat.evaluating = false;
    const code = e && e.code;
    if (code !== "cancelled") chat.error = code === "not_granted" ? "Nie zezwolono apce na użycie Claude." : code === "rate_limited" ? "Za dużo wiadomości naraz. Spróbuj za chwilę." : "Nie udało się połączyć z Claude. Spróbuj ponownie.";
    if (code === "not_granted" || code === "sampling_disabled") aiSample = null;
  }
  if (prefs.mode === "chat") render();
}
function chatStart(id) {
  const scn = CHAT_SCN.find(s => s.id === id), lvl = chatLevel();
  chat = { view: "talk", scn: id, lvl, turns: [{ role: "user", content: chatRules(scn, lvl) }] };
  chatCall(chat.turns, "quick", text => { chat.turns.push({ role: "assistant", content: text }); speak(text); });
}
function chatSend() {
  const inp = document.getElementById("ch-input");
  const msg = inp ? inp.value.trim() : "";
  if (!msg || chat.busy || chat.feedback) return;
  chat.turns.push({ role: "user", content: msg });
  chatCall(chat.turns, "quick", text => { chat.turns.push({ role: "assistant", content: text }); speak(text); });
}
function chatAct(a, el) {
  if (a === "ch-open") { chatStart(el.dataset.id); return; }
  if (a === "ch-list") { if (chat.ctl) chat.ctl.abort(); chat = { view: "list" }; render(); return; }
  if (a === "ch-restart") { if (chat.ctl) chat.ctl.abort(); chatStart(chat.scn || CHAT_SCN[0].id); return; }
  if (a === "ch-stop") { if (chat.ctl) chat.ctl.abort(); return; }
  if (a === "ch-eval") { chatCall(chat.turns.concat([{ role: "user", content: CHAT_EVAL() }]), "default", text => { chat.feedback = text; }, true); return; }
}

/* ---------- daily review, goal and statistics ---------- */
function chartHTML() {
  const days = [];
  const d = new Date();
  for (let i = 29; i >= 0; i--) { const x = new Date(d); x.setDate(d.getDate() - i); const k = x.toLocaleDateString("sv"); days.push([k, store.days[k] || 0]); }
  const max = Math.max(10, ...days.map(x => x[1]));
  const total = days.reduce((a, x) => a + x[1], 0), active = days.filter(x => x[1]).length;
  return `<div class="chart" role="img" aria-label="Liczba odpowiedzi w ostatnich 30 dniach">${days.map(([k, v], i) =>
    `<i title="${k}: ${v}" class="${i === days.length - 1 ? "today" : ""}" style="height:${Math.max(v ? 4 : 1, v / max * 100)}%"></i>`).join("")}</div>
    <div class="chartlab"><span>30 dni temu</span><span>dziś</span></div>
    <p class="note">Razem <b>${total}</b> odpowiedzi w <b>${active}</b> ${active === 1 ? "dniu" : "dniach"}. Najwięcej jednego dnia: ${Math.max(...days.map(x => x[1]))}.</p>`;
}
function reviewSideHTML() {
  const now = Date.now(), goal = prefs.goal || 50, today = store.days[todayKey()] || 0;
  const cats = [["Słówka", WORDS.concat(ownWords())], ["Nieregularne", IRR], ["Słowotwórstwo", WF], ["Sytuacje i tłumaczenia", SENT], ["Phrasal verbs", PHR], ["Dyktando", DICT]];
  const dueRows = cats.map(([n, list]) => [n, list.filter(w => isDue(w, now)).length]).filter(x => x[1]);
  return `<div class="panel"><h3>Cel na dziś</h3>
    <div class="goal"><b>${today}</b> / ${goal} odpowiedzi</div>
    <div class="track goaltrack"><i style="width:${Math.min(100, today / goal * 100)}%"></i></div>
    <p class="note">${today >= goal ? "Cel osiągnięty. Świetna robota!" : `Zostało ${goal - today}.`}</p>
    <div class="seg rates" role="group" aria-label="Dzienny cel">${[20, 50, 100].map(g => `<button type="button" data-goal="${g}" aria-pressed="${goal === g}">${g}</button>`).join("")}</div></div>
  <div class="panel"><h3>Czeka na powtórkę</h3>
    ${dueRows.length ? dueRows.map(([n, c]) => `<div class="legend"><div>${n}<b>${c}</b></div></div>`).join("") : `<p class="note">Nic. Wszystko powtórzone.</p>`}
    <p class="note">Jedna runda to do 20 zadań z różnych trybów.</p></div>
  <div class="panel"><h3>Ostatnie 30 dni</h3>${chartHTML()}</div>`;
}
function hardSideHTML() {
  const list = hardList().slice(0, 12);
  return `<div class="panel"><h3>Najczęstsze błędy</h3>
    ${list.length ? list.map(w => { const p = store.p[w.id]; return `<div class="legend"><div>${esc(w.en)}<b>${p.n - p.c}×</b></div></div>`; }).join("") : `<p class="note">Jeszcze nic tu nie ma.</p>`}
    <p class="note">Runda zawiera 12 słów z największą liczbą błędów, w trybie pisania.</p></div>`;
}

/* ---------- free answers: level | question | Polish meaning | grammar tip | example answers (;) ---------- */
const FREE_RAW = `A1|Where do you work?|Gdzie pracujesz?|Present Simple: I work in / at / for… (in a factory, for a company).|I work in a factory.;I work for a steel company in Gliwice.
A1|What do you do?|Czym się zajmujesz (zawodowo)?|I'm a / an + zawód. Pamiętaj o a / an!|I'm a technologist.;I'm an engineer.
A1|Where does your brother work?|Gdzie pracuje twój brat?|He / she + czasownik z -s: he works. Jeśli nie masz brata: I don't have a brother.|He works in a bank.;He works as a pilot.;I don't have a brother.
A1|What does your wife or husband do?|Czym zajmuje się twoja żona albo twój mąż?|She's / he's a / an + zawód albo she works as a / an…|She's a nurse.;She works as a teacher.;I'm not married.
A1|Where do you live?|Gdzie mieszkasz?|I live in + miejsce.|I live in Gliwice.;I live in a small town near Katowice.
A1|How old are you?|Ile masz lat?|I'm + liczba (bez „have”!).|I'm 35.;I'm forty years old.
A1|Do you have any brothers or sisters?|Masz rodzeństwo?|Yes, I have… / No, I don't.|Yes, I have one brother.;No, I don't. I'm an only child.
A1|What time do you get up?|O której wstajesz?|I get up at + godzina.|I get up at six o'clock.;I usually get up at half past five.
A1|How do you get to work?|Jak dojeżdżasz do pracy?|by car / by bus / on foot.|I go to work by car.;I drive to work.;I walk to work.
A1|What's your favourite food?|Jakie jest twoje ulubione jedzenie?|My favourite food is…|My favourite food is pizza.;I love pierogi.
A1|What do you do at the weekend?|Co robisz w weekend?|Present Simple + usually, sometimes, often.|I usually play with my kids.;I sometimes go to the cinema.
A1|Can you swim?|Umiesz pływać?|Yes, I can. / No, I can't. – i dopowiedz coś jeszcze.|Yes, I can, but not very well.;No, I can't.
A1|What's the weather like today?|Jaka jest dziś pogoda?|It's + przymiotnik: sunny, cold; it's raining.|It's sunny and warm.;It's cold and it's raining.
A2|What did you do last weekend?|Co robiłeś w ostatni weekend?|Past Simple: I went, I visited, I watched…|I visited my parents.;I went fishing with my son.
A2|Where did you go on your last holiday?|Gdzie byłeś na ostatnich wakacjach?|Past Simple: I went to…|I went to Croatia.;We went to the mountains.
A2|What are you going to do tomorrow?|Co zamierzasz robić jutro?|I'm going to + czasownik.|I'm going to work.;I'm going to visit a friend.
A2|What are you doing this weekend?|Co robisz w ten weekend (jakie masz plany)?|Present Continuous dla ustalonych planów: I'm meeting…, I'm going…|I'm going to the cinema on Saturday.;I'm working on Saturday.
A2|How often do you go to the gym?|Jak często chodzisz na siłownię?|once / twice a week, every day, never.|I go twice a week.;I never go to the gym.
A2|What do you like doing in your free time?|Co lubisz robić w wolnym czasie?|like + -ing: I like reading.|I like cooking and reading.;I like flying and programming.
A2|What's your job like?|Jaka jest twoja praca?|It's + przymiotnik… because…|It's interesting but sometimes stressful.;It's hard work, but I like it.
A2|What did you have for breakfast?|Co jadłeś na śniadanie?|Past Simple: I had…|I had eggs and bread.;I didn't have breakfast.
A2|Have you ever been abroad?|Byłeś kiedyś za granicą?|Present Perfect: Yes, I have. I've been to…|Yes, I have. I've been to Germany and Spain.;No, I haven't.
A2|What would you like to do in the future?|Co chciałbyś robić w przyszłości?|I'd like to + czasownik.|I'd like to get a pilot licence.;I'd like to work abroad.
A2|Who do you live with?|Z kim mieszkasz?|I live with… / I live alone.|I live with my wife and kids.;I live alone.
A2|What's your home like?|Jaki jest twój dom albo mieszkanie?|It's + przymiotnik; there is / there are…|It's a small flat with two bedrooms.;It's a big house with a garden.
B1|How long have you been working there?|Od jak dawna tam pracujesz?|Present Perfect (Continuous) + for / since.|I've been working there for five years.;I've worked there since 2019.
B1|Why did you choose your job?|Dlaczego wybrałeś swój zawód?|Past Simple + because…|I chose it because I like technology.;Because I was always interested in engineering.
B1|What do you like most about your job?|Co najbardziej lubisz w swojej pracy?|What I like most is… / I like the fact that…|I like solving technical problems.;What I like most is my team.
B1|What would you do if you won the lottery?|Co byś zrobił, gdybyś wygrał na loterii?|Drugi okres warunkowy: I would…|I would buy a small plane.;I'd travel around the world.
B1|What's the best thing you've ever done?|Jaka jest najlepsza rzecz, jaką kiedykolwiek zrobiłeś?|The best thing I've ever done is / was…|The best thing I've ever done was my first flight.;I think getting married was the best thing.
B1|How did you learn to drive?|Jak nauczyłeś się prowadzić samochód?|Past Simple: I took lessons…, my dad taught me…|I took lessons when I was eighteen.;My dad taught me.
B1|What will you be doing this time next year?|Co będziesz robić za rok o tej porze?|I'll probably be… / I hope I'll…|I'll probably be working in the same company.;I hope I'll be flying.
B1|What did you use to do as a child?|Co robiłeś jako dziecko?|used to + czasownik.|I used to play football every day.;I used to build model planes.
B1|Do you think robots will replace workers?|Czy myślisz, że roboty zastąpią pracowników?|I think… because… / In my opinion…|I don't think so, because someone has to program them.;Partly, yes – simple jobs will disappear.
B1|What would you change about your town?|Co zmieniłbyś w swoim mieście?|I would… / I'd like to see more…|I would build more bike paths.;I'd like to see more parks.
B1|Can you describe a typical day at work?|Możesz opisać typowy dzień w pracy?|Present Simple + first, then, after that.|First I check the drawings, then I talk to the welders.;I start at seven and spend most of the day on the shop floor.
B1|What are you good at?|W czym jesteś dobry?|good at + -ing albo rzeczownik.|I'm good at solving problems.;I'm good at maths.
B1|What was the last film you saw, and did you like it?|Jaki był ostatni film, który widziałeś, i czy ci się podobał?|Past Simple: The last film I saw was… I liked it because…|The last film I saw was Top Gun. I loved it.;I saw a comedy last week, but it was boring.
B1|What do you usually do when you have a problem at work?|Co zwykle robisz, kiedy masz problem w pracy?|When I have…, I usually… (zdania czasowe z Present Simple).|When I have a problem, I usually talk to my boss.;I try to find the cause first.`;
const FREE = FREE_RAW.trim().split("\n").map(line => {
  const [lvl, q, pl, tip, ex] = line.split("|");
  return { id: "FREE:" + q, lvl, en: q, pl, tip, examples: ex.split(";"), pos: "phr", ex: "", free: true };
});
FREE.forEach(w => { byId[w.id] = w; });
const freePool = () => lvlPool(FREE);
function freeHTML(w) {
  const st = session.state, res = st.result, ai = st.ai;
  if (!st.spoken && !res) { st.spoken = true; setTimeout(() => speak(w.en), 0); }
  const examples = `<span class="note">Przykładowe odpowiedzi: ${w.examples.map(e => `<b>${esc(e)}</b>`).join(" · ")}</span>`;
  let fb = "";
  if (res === "pending") {
    fb = ai === "loading"
      ? `<div class="feedback"><strong>Claude sprawdza Twoją odpowiedź…</strong></div>`
      : `<div class="feedback"><strong>Sprawdź się sam</strong>
          <span>Czy Twoje zdanie jest poprawne i odpowiada na pytanie? Treść może być dowolna.</span>
          <span class="note">Na co uważać: ${esc(w.tip)}</span>${examples}
          ${ai && ai.error ? `<span class="note" style="color:var(--bad)">${esc(ai.error)}</span>` : ""}</div>
        <div class="actions">
          <button class="btn good" type="button" data-act="f-yes">Moja odpowiedź jest poprawna</button>
          <button class="btn bad" type="button" data-act="f-no">Mam błąd</button>
          ${aiSample ? `<button class="btn" type="button" data-act="f-ai">Sprawdź z Claude</button>` : ""}
        </div>`;
  } else if (res === "ai") {
    fb = `<div class="feedback ${ai.ok ? "ok" : "no"}"><strong>${ai.ok ? "Claude: dobrze!" : "Claude: jest błąd"}</strong>
      ${ai.feedback ? `<span>${esc(ai.feedback)}</span>` : ""}
      ${!ai.ok && ai.corrected ? `<span class="sub ui" style="justify-content:flex-start;color:var(--ink)">Poprawnie: <b>${esc(ai.corrected)}</b> ${speakBtn(ai.corrected, true)}</span>` : ""}
      ${examples}</div>`;
  } else if (res === "self" || res === "no") {
    fb = `<div class="feedback ${res === "self" ? "ok" : "no"}"><strong>${res === "self" ? "Zaliczone" : "Zapamiętaj na następny raz"}</strong>
      <span class="note">Na co uważać: ${esc(w.tip)}</span>${examples}</div>`;
  }
  const done = res && res !== "pending";
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">odpowiedz swobodnie</span></span>
    <span class="note">Odpowiedz po angielsku pełnym zdaniem – zgodnie z prawdą albo jak chcesz.</span>
    <div class="row"><p class="sentprompt">${esc(w.en)}</p>${speakBtn(w.en)}</div>
    <span class="note">${esc(w.pl)}</span>
  </div>
  <form class="typeform" id="typeform" autocomplete="off">
    <input id="answer" type="text" spellcheck="false" autocapitalize="sentences" autocorrect="off" enterkeyhint="go" placeholder="Twoja odpowiedź po angielsku" value="${esc(st.given || "")}" ${res ? "readonly" : ""} class="${done ? (res === "no" || (res === "ai" && !ai.ok) ? "no" : "ok") : ""}" aria-label="Twoja odpowiedź">
    ${res === "pending" ? "" : `<button class="btn primary" type="submit">${done ? "Dalej" : "Sprawdź"} <kbd>Enter</kbd></button>`}
  </form>
  ${!res ? `<div style="margin-top:10px"><button class="linkbtn" type="button" data-act="f-tip">Podpowiedź</button>${st.tip ? ` <span class="note">${esc(w.tip)}</span>` : ""}</div>` : ""}
  ${fb}`;
}
function freeSubmit() {
  const st = session.state;
  if (st.result === "pending") return;
  if (st.result) { next(); return; }
  const given = document.getElementById("answer").value.trim();
  if (!given) return;
  st.given = given; st.result = "pending";
  if (aiSample) freeCheck(); else render();
}
async function freeCheck() {
  const st = session.state, w = byId[session.queue[session.i]];
  if (!aiSample || st.ai === "loading") return;
  st.ai = "loading"; render();
  const prompt = `You are a friendly but precise English teacher for an adult Polish learner (CEFR level ${w.lvl}).
The learner was asked: "${w.en}" and could answer freely – any true or invented content is fine.
Learner's answer: "${st.given}"
Decide whether the answer is grammatically correct, natural, and actually answers the question. Do not judge the content itself. Ignore capital letters and final punctuation.
Reply with only JSON: {"correct": true or false, "feedback": "1-2 short sentences in ${fbLang()}: the verdict and, if wrong, the grammar point to fix", "corrected": "the learner's answer corrected, keeping their content, or the same sentence if correct"}`;
  try {
    const r = await aiSample.json(prompt, { modelTier: "quick" });
    if (session.state !== st) return;
    st.ai = { ok: !!(r && r.correct), feedback: String((r && r.feedback) || ""), corrected: String((r && r.corrected) || "") };
    st.result = "ai"; answer(st.ai.ok); render();
  } catch (e) {
    if (session.state !== st) return;
    const code = e && e.code;
    if (code === "not_granted" || code === "sampling_disabled") aiSample = null;
    st.ai = { error: code === "rate_limited" ? "Za dużo sprawdzeń naraz – oceń się sam albo spróbuj za chwilę." : "Nie udało się sprawdzić z Claude – oceń się sam." };
    render();
  }
}

/* ---------- error reports (stored in db: reports/<viewer id>) ---------- */
let repDb = null, repUser = null, rep = { open: false };
const repLink = ctx => repDb && repUser ? `<button class="linkbtn replink" type="button" data-act="rep-open" data-ctx="${esc(ctx)}">Zgłoś błąd</button>` : "";
const itemCtx = w => [w.id, w.en, w.pl, w.ex && w.ex !== w.en ? w.ex : ""].filter(Boolean).join(" | ");
function repPanelHTML() {
  return `<div class="reppanel" id="reppanel"><strong>Zgłoś błąd w tym zadaniu</strong>
    <span class="note">${esc(rep.ctx)}</span>
    ${rep.msg ? `<p class="note" style="color:var(--good)">${esc(rep.msg)}</p>` : `
    <textarea id="rep-text" rows="3" placeholder="Co jest nie tak? Np. złe tłumaczenie, błąd w zdaniu, inna poprawna odpowiedź…"></textarea>
    <div class="actions"><button class="btn primary" type="button" data-act="rep-send">Wyślij zgłoszenie</button><button class="btn" type="button" data-act="rep-cancel">Anuluj</button></div>`}
    ${rep.err ? `<p class="note" style="color:var(--bad)">${esc(rep.err)}</p>` : ""}</div>`;
}
async function repSend() {
  const box = document.getElementById("rep-text");
  const comment = box ? box.value.trim() : "";
  if (!comment) { if (box) box.focus(); return; }
  if (!repDb || !repUser || rep.busy) return;
  rep.busy = true;
  try {
    const ref = repDb.doc("reports/" + repUser);
    const snap = await ref.get();
    const items = ((snap.exists && snap.data().items) || []).slice(-199);
    items.push({ at: new Date().toISOString(), mode: prefs.mode, level: prefs.level, ctx: rep.ctx, comment });
    await ref.set({ items });
    rep.msg = "Dziękuję! Zgłoszenie zapisane – poprawię to przy najbliższej aktualizacji."; rep.err = "";
  } catch (e) { rep.err = "Nie udało się zapisać zgłoszenia. Spróbuj ponownie."; }
  rep.busy = false;
  render();
}

/* ---------- shadowing (listen and repeat aloud) ---------- */
const PRON = { fatigue: "fəˈtiːɡ", colleague: "ˈkɒliːɡ", thorough: "ˈθʌrə", through: "θruː", though: "ðəʊ", thought: "θɔːt", aileron: "ˈeɪlərɒn",
  engineer: "ˌendʒɪˈnɪə", vehicle: "ˈviːəkl", comfortable: "ˈkʌmftəbl", vegetables: "ˈvedʒtəblz", wednesday: "ˈwenzdeɪ", island: "ˈaɪlənd",
  receipt: "rɪˈsiːt", debt: "det", doubt: "daʊt", honest: "ˈɒnɪst", hour: "ˈaʊə", knowledge: "ˈnɒlɪdʒ", answer: "ˈɑːnsə", women: "ˈwɪmɪn",
  busy: "ˈbɪzi", business: "ˈbɪznəs", schedule: "ˈʃedjuːl", height: "haɪt", weight: "weɪt", foreign: "ˈfɒrən", iron: "ˈaɪən", cough: "kɒf",
  enough: "ɪˈnʌf", laugh: "lɑːf", chaos: "ˈkeɪɒs", recipe: "ˈresəpi", determine: "dɪˈtɜːmɪn", procedure: "prəˈsiːdʒə", specific: "spəˈsɪfɪk",
  pilot: "ˈpaɪlət", altitude: "ˈæltɪtjuːd", propeller: "prəˈpelə", data: "ˈdeɪtə", query: "ˈkwɪəri", cache: "kæʃ", measure: "ˈmeʒə",
  quay: "kiː", climb: "klaɪm", knife: "naɪf", wrist: "rɪst", sword: "sɔːd", listen: "ˈlɪsn", often: "ˈɒfn", clothes: "kləʊðz",
  development: "dɪˈveləpmənt", technology: "tekˈnɒlədʒi", photograph: "ˈfəʊtəɡrɑːf", photographer: "fəˈtɒɡrəfə", world: "wɜːld", work: "wɜːk" };
// Rough Polish spelling of the same words, so the phonetic notation is never shown alone.
const PRON_PL = { fatigue: "fetig", colleague: "kolig", thorough: "tare", through: "tru", though: "dou", thought: "tot", aileron: "ejleron",
  engineer: "endżinija", vehicle: "wijekl", comfortable: "kamftebl", vegetables: "wedżteblz", wednesday: "łenzdej", island: "ajlend",
  receipt: "risit", debt: "det", doubt: "daut", honest: "onist", hour: "ałe", knowledge: "nolidż", answer: "anse", women: "łimin",
  busy: "bizi", business: "biznes", schedule: "szedjul", height: "hajt", weight: "łejt", foreign: "foren", iron: "ajen", cough: "kof",
  enough: "inaf", laugh: "laf", chaos: "kejos", recipe: "resepi", determine: "ditermin", procedure: "prosidże", specific: "spesifik",
  pilot: "pajlet", altitude: "altitjud", propeller: "propele", data: "dejta", query: "kłiri", cache: "kesz", measure: "meże",
  quay: "ki", climb: "klajm", knife: "najf", wrist: "rist", sword: "sod", listen: "lisn", often: "ofn", clothes: "kloudz",
  development: "diwelepment", technology: "teknolodżi", photograph: "foutegraf", photographer: "fetografe", world: "łeld", work: "łek" };
const pronLabel = k => `czyt. ok. „${PRON_PL[k] || k}” <span class="ipa">/${PRON[k]}/</span>`;
const SHD = DICT.map(d => Object.assign({}, d, { id: "SHD:" + d.id.slice(5), dict: false, shadow: true }));
SHD.forEach(w => { byId[w.id] = w; });
const shadowPool = () => lvlPool(SHD);
function shadowHTML(w) {
  const st = session.state;
  if (!st.spoken) { st.spoken = true; setTimeout(() => speak(w.en), 0); }
  const hide = prefs.shadowHide && !st.reveal;
  const tricky = [];
  const line = esc(w.en).replace(/[A-Za-z']+/g, word => {
    const ipa = PRON[word.toLowerCase()];
    if (!ipa) return word;
    if (!tricky.some(t => t[0] === word.toLowerCase())) tricky.push([word.toLowerCase(), ipa]);
    return `<span class="pron" title="czyt. ok. ${PRON_PL[word.toLowerCase()] || ""}">${word}</span>`;
  });
  return headerHTML() + `
  <div class="prompt">
    <span class="tags"><span class="tag lvl ${w.lvl}">${w.lvl}</span><span class="tag">powtarzanie na głos</span></span>
    <div class="row">
      <button class="playbig" type="button" data-act="d-play" aria-label="Odtwórz zdanie">${ICON_SPEAK}</button>
      <div style="display:grid;gap:6px">
        <span class="note">1. Posłuchaj. 2. Powtórz na głos – razem z lektorem albo zaraz po nim. 3. Oceń się.</span>
        <span style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="linkbtn" type="button" data-act="d-play">Odtwórz ponownie <kbd>Spacja</kbd></button>
          <button class="linkbtn" type="button" data-act="d-slow">Wolniej</button>
          <button class="linkbtn" type="button" data-act="sh-hide">${prefs.shadowHide ? "Zawsze pokazuj tekst" : "Ukrywaj tekst (trudniej)"}</button>
        </span>
      </div>
    </div>
    ${hide ? `<button class="linkbtn" type="button" data-act="sh-reveal">Pokaż tekst</button>` : `<p class="gapline">${line}</p>`}
    ${!hide && tricky.length ? `<span class="note">Uwaga na wymowę: ${tricky.map(([k]) => `<b>${k}</b> – ${pronLabel(k)}`).join(" · ")}</span>` : ""}
  </div>
  <div class="actions">
    <button class="btn bad" type="button" data-act="no-shadow">Muszę jeszcze poćwiczyć <kbd>1</kbd></button>
    <button class="btn good" type="button" data-act="yes-shadow">Powtórzyłem płynnie <kbd>2</kbd></button>
  </div>`;
}
function pronSideHTML() {
  const words = Object.keys(PRON).slice(0, 40);
  return `<div class="panel"><h3>Słowa o trudnej wymowie</h3>
    <p class="note">„czyt. ok.” to przybliżenie po polsku – angielskich dźwięków nie da się zapisać dokładnie, więc zawsze posłuchaj lektora. W ukośnikach jest dokładny zapis fonetyczny, taki jak w słownikach.</p>
    <div class="pronlist">${words.map(k => `<span class="pronitem">${speakBtn(k, true)}<b>${k}</b> <span class="note">${pronLabel(k)}</span></span>`).join("")}</div>
    <p class="note">Mów na głos, nawet cicho. Powtarzanie razem z lektorem uczy rytmu i akcentu zdania, a nie tylko pojedynczych słów.</p></div>`;
}

/* ---------- writing with Claude's assessment (owner only) ---------- */
const WRITE_TASKS = [
  { id: "w-a1-me", lvl: "A1", title: "Przedstaw się", task: "Napisz kilka zdań o sobie: imię, wiek, gdzie mieszkasz, czym się zajmujesz, twoja rodzina.", words: "40–60" },
  { id: "w-a1-day", lvl: "A1", title: "Mój dzień", task: "Opisz swój typowy dzień: o której wstajesz, co robisz w pracy, co robisz wieczorem.", words: "40–60" },
  { id: "w-a1-invite", lvl: "A1", title: "Zaproszenie", task: "Napisz krótką wiadomość do kolegi: zaproś go na kawę w sobotę, podaj godzinę i miejsce.", words: "30–50" },
  { id: "w-a2-weekend", lvl: "A2", title: "Mój ostatni weekend", task: "Opisz, co robiłeś w ostatni weekend (Past Simple): gdzie byłeś, z kim, co ci się podobało.", words: "60–80" },
  { id: "w-a2-hotel", lvl: "A2", title: "Mail do hotelu", task: "Napisz maila do hotelu w Londynie: zapytaj o wolny pokój na dwie noce, cenę ze śniadaniem i parking.", words: "50–80" },
  { id: "w-a2-plans", lvl: "A2", title: "Moje plany", task: "Napisz o swoich planach na najbliższy rok (going to, will): praca, nauka, latanie, podróże.", words: "60–80" },
  { id: "w-b1-delay", lvl: "B1", title: "Mail do klienta – opóźnienie", task: "Napisz maila do klienta: przeproś za opóźnienie zamówienia, wyjaśnij przyczynę i podaj nowy termin dostawy.", words: "80–120" },
  { id: "w-b1-remote", lvl: "B1", title: "Opinia: praca zdalna", task: "Napisz swoją opinię o pracy zdalnej: podaj argumenty za i przeciw oraz swoje zdanie.", words: "100–140" },
  { id: "w-b1-process", lvl: "B1", title: "Opis procesu", task: "Opisz krok po kroku proces z twojej pracy, np. przygotowanie złącza do spawania. Użyj strony biernej (is cleaned, is checked…).", words: "80–120" },
  { id: "w-b2-incident", lvl: "B2", title: "Raport z awarii", task: "Napisz krótki raport o awarii maszyny w zakładzie: co się stało, jakie były przyczyny i skutki, jakie działania podjęto.", words: "120–160" },
  { id: "w-b2-cover", lvl: "B2", title: "List motywacyjny", task: "Napisz list motywacyjny na stanowisko technologa spawalnictwa w międzynarodowej firmie.", words: "150–200" },
  { id: "w-b2-robots", lvl: "B2", title: "Rozprawka: roboty w produkcji", task: "Czy roboty zastąpią spawaczy? Napisz rozprawkę z argumentami za i przeciw oraz wnioskiem.", words: "150–200" },
  { id: "w-c1-complaint", lvl: "C1", title: "Odpowiedź na reklamację", task: "Napisz formalną odpowiedź do klienta, który zgłosił pęknięte spoiny: przeprosiny, analiza przyczyn, działania korygujące, propozycja rekompensaty.", words: "180–230" },
  { id: "w-c1-memo", lvl: "C1", title: "Propozycja inwestycji", task: "Napisz notatkę do dyrektora z propozycją zakupu robota spawalniczego: korzyści, koszty, ryzyka i rekomendacja.", words: "200–250" },
  { id: "w-c1-essay", lvl: "C1", title: "Esej: decyzje w lotnictwie", task: "Napisz esej o tym, dlaczego doświadczeni piloci amatorzy wciąż podejmują ryzykowne decyzje i jak temu zapobiegać.", words: "200–250" }
];
let wr = { view: "list" };
const wordCount = t => (t.trim().match(/\S+/g) || []).length;
function writeHTML() {
  if (!aiSample) return `<div class="empty"><h2>Pisanie z oceną</h2><p class="note">Ta część działa tylko u właściciela apki.</p></div>`;
  if (wr.view === "list") {
    const lv = prefs.level === "ALL" ? LEVELS : [prefs.level];
    return `<div class="ghead"><h2>Pisanie z oceną Claude</h2><p class="note">Napisz tekst według polecenia, a Claude oceni go jak egzaminator: gramatykę, słownictwo i styl. Dostaniesz listę błędów z wyjaśnieniami i poprawioną wersję. Każda ocena korzysta z Twojego limitu Claude.</p></div>` +
      lv.map(l => `<div class="glevel"><span class="tag lvl ${l}">${l}</span></div><div class="gtopics">${WRITE_TASKS.filter(t => t.lvl === l).map(t =>
        `<button type="button" class="gtopic" data-act="wr-open" data-id="${t.id}"><b>${esc(t.title)}</b><span class="note">${esc(t.task)}</span><span class="gscore">${t.words} słów</span></button>`).join("")}</div>`).join("");
  }
  const t = WRITE_TASKS.find(x => x.id === wr.id);
  const n = wordCount(wr.text || "");
  return `<button class="linkbtn" type="button" data-act="wr-list">← Inne zadania</button>
  <div class="ghead"><span class="tags"><span class="tag lvl ${t.lvl}">${t.lvl}</span><span class="tag">${t.words} słów</span></span><h2>${esc(t.title)}</h2><p class="note">${esc(t.task)}</p></div>
  <textarea id="wr-text" class="wrbox" rows="10" placeholder="Napisz tekst po angielsku…" ${wr.busy ? "disabled" : ""}>${esc(wr.text || "")}</textarea>
  <div class="meta"><span id="wr-count">${n} słów</span><span></span></div>
  ${wr.error ? `<p class="note" style="color:var(--bad)">${esc(wr.error)}</p>` : ""}
  <div class="actions">
    ${wr.busy ? `<button class="btn" type="button" data-act="wr-stop">Zatrzymaj</button>` : `<button class="btn primary" type="button" data-act="wr-check" ${n < 5 ? "disabled" : ""}>Oceń mój tekst</button>`}
    ${wr.feedback ? `<button class="btn" type="button" data-act="wr-clear">Napisz od nowa</button>` : ""}
  </div>
  ${wr.busy || wr.feedback ? `<div class="feedback ${wr.feedback ? "ok" : ""}"><strong>${wr.busy ? "Claude czyta Twój tekst…" : "Ocena"}</strong><div class="fbtext" id="wr-live">${esc(wr.live || wr.feedback || "")}</div></div>` : ""}`;
}
async function writeCheck() {
  const t = WRITE_TASKS.find(x => x.id === wr.id);
  const text = (document.getElementById("wr-text") || {}).value || wr.text || "";
  wr.text = text;
  if (!aiSample || wr.busy || wordCount(text) < 5) return;
  const ctl = new AbortController();
  Object.assign(wr, { busy: true, live: "", error: "", feedback: "", ctl });
  render();
  const prompt = `You are an experienced English examiner assessing a text written by an adult Polish learner who is aiming at CEFR level ${t.lvl}.
Task (given in Polish): ${t.task}
Required length: ${t.words} words. The text has ${wordCount(text)} words.
Learner's text:
"""
${text}
"""
${uiEN() ? `Write your feedback in English, as short plain-text lines (no tables, no Markdown headings):
1) Overall: the estimated CEFR level of this text, and marks from 1 to 10 for: task achievement, grammar, vocabulary, organisation.
2) Main mistakes: up to 8 items, each as: "wrong fragment" → correct version – a short explanation of the rule.
3) Corrected version: the whole text corrected and slightly improved, keeping the learner's ideas.
4) Two tips for next time, with example phrases.` : `Write your feedback in Polish, as short plain-text lines (no tables, no Markdown headings):
1) Ocena ogólna: the estimated CEFR level of this text, and marks from 1 to 10 for: realizacja zadania, gramatyka, słownictwo, organizacja tekstu.
2) Najważniejsze błędy: up to 8 items, each as: "fragment z błędem" → poprawna wersja – krótkie wyjaśnienie zasady.
3) Poprawiona wersja: the whole text corrected and slightly improved, in English, keeping the learner's ideas.
4) Dwie wskazówki na przyszłość, with example English phrases.`}`;
  try {
    const { text: fb } = await aiSample(prompt, { modelTier: "default", cache: false, signal: ctl.signal, onText: ({ text }) => {
      wr.live = text; const el = document.getElementById("wr-live"); if (el) el.textContent = text;
    } });
    wr.feedback = fb;
  } catch (e) {
    const code = e && e.code;
    if (code !== "cancelled") wr.error = code === "rate_limited" ? "Za dużo ocen naraz. Spróbuj za chwilę." : code === "not_granted" ? "Nie zezwolono apce na użycie Claude." : "Nie udało się ocenić tekstu. Spróbuj ponownie.";
    if (code === "not_granted" || code === "sampling_disabled") aiSample = null;
  }
  wr.busy = false; wr.live = "";
  if (prefs.mode === "write") render();
}
function writeAct(a, el) {
  if (a === "wr-open") wr = { view: "task", id: el.dataset.id, text: "" };
  else if (a === "wr-list") { if (wr.ctl) wr.ctl.abort(); wr = { view: "list" }; }
  else if (a === "wr-check") { writeCheck(); return; }
  else if (a === "wr-stop") { if (wr.ctl) wr.ctl.abort(); return; }
  else if (a === "wr-clear") wr = { view: "task", id: wr.id, text: "" };
  render();
}

/* ---------- level exams ---------- */
let ex = { view: "list" };
const EXAM_PASS = 70;
function buildExam(lvl) {
  const qs = [];
  shuffle(WORDS.filter(w => w.lvl === lvl && !w.topic)).slice(0, 10).forEach(w =>
    qs.push({ part: "Słownictwo", q: `Co znaczy „${w.en}”?`, a: w.pl, opts: shuffle([w.pl].concat(distractors(w, "pl"))) }));
  shuffle(GT.filter(t => t.lvl === lvl).flatMap(t => t.items)).slice(0, 12).forEach(it =>
    qs.push({ part: "Gramatyka", q: it.q, gap: true, a: it.a, opts: shuffle([it.a].concat(it.wrong)), why: it.why }));
  if (["A1", "A2", "B1"].includes(lvl)) shuffle(IRR.filter(w => w.lvl === lvl)).slice(0, 4).forEach(w => {
    const p = w.past.split("/")[0], q = w.pp.split("/")[0], reg = irrRegular(w.en), correct = `${w.past} – ${w.pp}`;
    const wrong = shuffle([`${reg} – ${reg}`, `${q} – ${p}`, `${p} – ${p}`, `${p} – ${reg}`, `${reg} – ${q}`].filter((o, i, a) => o !== `${p} – ${q}` && a.indexOf(o) === i)).slice(0, 2);
    qs.push({ part: "Czasowniki nieregularne", q: `2. i 3. forma czasownika „${w.en}” (${w.pl})`, a: correct, opts: shuffle([correct].concat(wrong)) });
  });
  const particles = ["up", "on", "off", "in", "out", "for", "to", "with", "at", "of", "over", "down", "from", "after", "across", "through"];
  shuffle(PHR.filter(p => p.lvl === lvl)).slice(0, 4).forEach(p =>
    qs.push({ part: "Phrasal verbs i przyimki", q: p.ex, gap: true, a: p.en, opts: shuffle([p.en].concat(shuffle(particles.filter(x => x !== p.en)).slice(0, 2))) }));
  const sits = SENT.filter(s => s.kind === "sit" && s.lvl === lvl);
  shuffle(sits.slice()).slice(0, 3).forEach(s => {
    const others = shuffle(sits.filter(o => o !== s)).slice(0, 2).map(o => o.answers[0]);
    qs.push({ part: "Sytuacje", q: s.prompt, a: s.answers[0], opts: shuffle([s.answers[0]].concat(others)) });
  });
  const txt = shuffle(TX.filter(t => t.lvl === lvl))[0];
  if (txt) txt.qs.forEach(q => qs.push({ part: "Czytanie", text: txt, q: q.q, a: q.a, opts: shuffle([q.a].concat(q.wrong)) }));
  return qs;
}
function examHTML() {
  if (ex.view === "list") {
    return `<div class="ghead"><h2>Egzaminy poziomów</h2><p class="note">Każdy egzamin to około 35 losowych pytań z danego poziomu: słownictwo, gramatyka, czasowniki nieregularne, phrasal verbs, sytuacje i czytanie. Zdajesz od ${EXAM_PASS}%. Wynik poznasz dopiero na końcu, jak na prawdziwym egzaminie.</p></div>
    <div class="gtopics">${LEVELS.map(l => {
      const r = (store.ex || {})[l];
      return `<button type="button" class="gtopic" data-act="ex-start" data-lvl="${l}"><span class="tags"><span class="tag lvl ${l}">${l}</span></span><b>Egzamin ${l}</b>
        <span class="gscore ${r ? (r.passed ? "good" : "mid") : ""}">${r ? (r.passed ? "Zdany · " : "Nie zdany · ") + "najlepszy wynik " + r.best + "%" : "Jeszcze nie podchodziłeś"}</span></button>`;
    }).join("")}</div>`;
  }
  if (ex.view === "run") {
    const q = ex.qs[ex.i], total = ex.qs.length, picked = ex.ans[ex.i];
    return `<div class="meta"><span>Egzamin ${ex.lvl} · pytanie ${ex.i + 1} z ${total} · ${esc(q.part)}</span><button class="linkbtn" type="button" data-act="ex-quit">Przerwij</button></div>
    <div class="bar"><i style="width:${(ex.i / total) * 100}%"></i></div>
    ${q.text ? `<div class="rtext ${q.text.kind}">${q.text.text.split("\n").map(l => `<p>${esc(l)}</p>`).join("")}</div>` : ""}
    <p class="${q.gap ? "gapline" : "sentprompt"}" style="margin-top:12px">${q.gap ? sentenceHTML(q.q) : esc(q.q)}</p>
    <div class="opts gopts">${q.opts.map((o, i) => `<button class="opt ${picked === i ? "picked" : ""}" type="button" data-act="ex-pick" data-i="${i}"><kbd>${i + 1}</kbd><span>${esc(optLabel(o))}</span></button>`).join("")}</div>
    <div class="actions"><button class="btn primary" type="button" data-act="ex-next" ${picked == null ? "disabled" : ""}>${ex.i + 1 < total ? "Dalej" : "Zakończ egzamin"} <kbd>Enter</kbd></button></div>`;
  }
  // results
  const total = ex.qs.length, good = ex.qs.filter((q, i) => q.opts[ex.ans[i]] === q.a).length, pct = Math.round(good / total * 100);
  const parts = [...new Set(ex.qs.map(q => q.part))].map(p => {
    const qq = ex.qs.map((q, i) => [q, i]).filter(([q]) => q.part === p);
    return [p, qq.filter(([q, i]) => q.opts[ex.ans[i]] === q.a).length, qq.length];
  });
  const wrong = ex.qs.map((q, i) => [q, i]).filter(([q, i]) => q.opts[ex.ans[i]] !== q.a);
  return `<div class="summary">
    <h2>${pct >= EXAM_PASS ? `Egzamin ${ex.lvl} zdany!` : `Egzamin ${ex.lvl} – jeszcze nie tym razem`}</h2>
    <div class="score"><div><b>${pct}%</b><small>wynik (próg ${EXAM_PASS}%)</small></div><div><b>${good}/${total}</b><small>dobrych odpowiedzi</small></div></div>
    <div class="panel examparts">${parts.map(([p, g, n]) => `<div class="lvrow wide"><span>${esc(p)}</span><span class="track"><i style="width:${g / n * 100}%;background:${g / n >= EXAM_PASS / 100 ? "var(--good)" : "var(--bad)"}"></i></span><span>${g}/${n}</span></div>`).join("")}</div>
    ${wrong.length ? `<div class="rules"><h3>Twoje błędy</h3><ul>${wrong.map(([q, i]) => `<li>${q.gap ? esc(fillSentence(q.q, q.a)) : esc(q.q)} → <b>${esc(optLabel(q.a))}</b>${ex.ans[i] != null ? ` <span class="note">(Twoja odpowiedź: ${esc(optLabel(q.opts[ex.ans[i]]))})</span>` : ""}${q.why ? ` <span class="note">– ${esc(q.why)}</span>` : ""}</li>`).join("")}</ul></div>` : `<p class="note">Bez jednego błędu!</p>`}
    <div class="actions"><button class="btn primary" type="button" data-act="ex-start" data-lvl="${ex.lvl}">Podejdź jeszcze raz</button><button class="btn" type="button" data-act="ex-list">Inne egzaminy</button></div>
  </div>`;
}
function examAct(a, el) {
  if (a === "ex-start") { ex = { view: "run", lvl: el.dataset.lvl, qs: buildExam(el.dataset.lvl), i: 0, ans: [] }; }
  else if (a === "ex-list" || a === "ex-quit") ex = { view: "list" };
  else if (a === "ex-pick") ex.ans[ex.i] = +el.dataset.i;
  else if (a === "ex-next") {
    if (ex.ans[ex.i] == null) return;
    countAnswer();
    if (ex.i + 1 < ex.qs.length) ex.i++;
    else {
      const good = ex.qs.filter((q, i) => q.opts[ex.ans[i]] === q.a).length, pct = Math.round(good / ex.qs.length * 100);
      store.ex = store.ex || {};
      const prev = store.ex[ex.lvl] || { best: 0, n: 0, passed: false };
      store.ex[ex.lvl] = { best: Math.max(prev.best, pct), passed: prev.passed || pct >= EXAM_PASS, n: prev.n + 1, last: Date.now() };
      ex.view = "done";
    }
    persist();
  }
  render();
  stage.scrollIntoView({ block: "nearest" });
}
function examSideHTML() {
  return `<div class="panel"><h3>Twoje egzaminy</h3>${LEVELS.map(l => {
    const r = (store.ex || {})[l];
    return `<div class="legend"><div><span class="tag lvl ${l}">${l}</span>&nbsp;${r ? (r.passed ? "zdany" : "nie zdany") : "—"}<b>${r ? r.best + "%" : ""}</b></div></div>`;
  }).join("")}<p class="note">Najpierw przerób materiał z danego poziomu, potem sprawdź się na egzaminie. Pytania są losowane za każdym razem.</p></div>`;
}

function irrSideHTML() {
  const rows = ["A1", "A2", "B1"].map(l => {
    const ws = IRR.filter(w => w.lvl === l), known = ws.filter(w => prog(w.id).b >= 3).length;
    return `<div class="lvrow"><span class="tag lvl ${l}">${l}</span><span class="track"><i class="${l}" style="width:${known / ws.length * 100}%"></i></span><span>${known}/${ws.length}</span></div>`;
  }).join("");
  return `<div class="panel"><h3>Czasowniki nieregularne</h3>${rows}<p class="note">Jak się uczyć: zacznij od „Tabeli do nauki”, bo grupy według wzoru łatwiej zapamiętać. W ćwiczeniu nowy czasownik najpierw zobaczysz z odpowiedzią, a dopiero potem wpiszesz formy sam.</p>
    <p class="note">Czasownik liczy się jako utrwalony po trzech dobrych odpowiedziach z rzędu.</p></div>`;
}

function summaryHTML() {
  const s = session, pct = Math.round((s.ok / Math.max(1, s.ok + s.bad)) * 100);
  const goal = prefs.goal || 50, today = store.days[todayKey()] || 0, days = streak();
  return `<div class="summary">
    <h2>Runda skończona</h2>
    <div class="score"><div><b>${s.ok}</b><small>dobrych odpowiedzi</small></div><div><b>${s.bad}</b><small>do poprawki</small></div><div><b>${pct}%</b><small>skuteczność</small></div></div>
    <div class="goalnote"><span>${today >= goal ? `<b>Cel dnia osiągnięty</b> – ${today} z ${goal} odpowiedzi.` : `Dziś <b>${today} z ${goal}</b> odpowiedzi – do celu brakuje ${goal - today}.`} Seria: <b>${days} ${days === 1 ? "dzień" : "dni"}</b> z rzędu.</span>
      <div class="goaltrack"><i style="width:${Math.min(100, today / goal * 100)}%"></i></div></div>
    ${s.missed.length ? `<div><p class="note" style="margin-bottom:8px">Te słowa wrócą szybciej na powtórkę:</p><div class="misslist">${s.missed.map(id => `<span class="chip"><b>${esc(byId[id].en)}</b> · ${esc(byId[id].pl)}</span>`).join("")}</div></div>` : `<p class="note">Bez ani jednego błędu. Świetnie!</p>`}
    <div class="actions"><button class="btn primary" data-act="again">Następna runda <kbd>Enter</kbd></button>${s.missed.length ? `<button class="btn" data-act="again-missed">Powtórz błędy (${s.missed.length})</button>` : ""}</div>
  </div>`;
}

function listHTML() {
  return `<div class="listtools">
    <input id="search" type="search" placeholder="Szukaj po angielsku lub po polsku" aria-label="Szukaj słowa">
    <div class="seg" id="stfilter" role="group" aria-label="Filtr statusu">
      ${["Wszystkie"].concat(STATUS).map((s, i) => `<button type="button" data-st="${i - 1}" aria-pressed="${i === 0}">${s}</button>`).join("")}
    </div>
  </div>
  <div class="tablewrap"><table><thead><tr><th>Angielski</th><th>Polski</th><th>Część mowy</th><th>Status</th></tr></thead><tbody id="listBody"></tbody></table></div>`;
}
let listFilter = { q: "", st: -1 };
function renderList() {
  const q = norm(listFilter.q);
  const rows = pool().filter(w => (!q || w.en.toLowerCase().includes(q) || w.pl.toLowerCase().includes(q))
    && (listFilter.st < 0 || statusOf(prog(w.id).b) === listFilter.st));
  document.getElementById("listBody").innerHTML = rows.length ? rows.map(w => {
    const s = statusOf(prog(w.id).b);
    return `<tr><td class="en"><span style="display:inline-flex;align-items:center;gap:8px">${speakBtn(w.en)}${esc(w.en)}</span></td><td>${esc(w.pl)}</td><td><span class="tags">${tags(w)}</span></td><td><span class="st s${s}">${STATUS[s]}</span></td></tr>`;
  }).join("") : `<tr><td colspan="4" class="note" style="padding:20px">Brak słów pasujących do wyszukiwania.</td></tr>`;
}

/* ---------- grammar ---------- */
const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const GT = GRAMMAR.map(t => Object.assign({}, t, {
  items: t.ex.trim().split("\n").map(l => { const [q, a, w, why] = l.split("|"); return { q, a, wrong: w.split(";"), why: why || "" }; })
}));
const gById = Object.fromEntries(GT.map(t => [t.id, t]));
let gram = { view: "list" };
const optLabel = o => o === "–" ? "— (nic)" : o;
function fillSentence(q, a) {
  let s = q.replace("___", a === "–" ? "" : a).replace(/\s{2,}/g, " ").replace(/^\s+/, "");
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function sentenceHTML(q, shown, cls) {
  const [b, ...rest] = q.split("___");
  const after = rest.join("___");
  if (shown == null) return `${esc(b)}<span class="gapblank">_____</span>${esc(after)}`;
  return `${esc(b)}<mark class="gapfill ${cls}">${shown === "–" ? "∅" : esc(shown)}</mark>${esc(after)}`;
}
function countAnswer() { const t = todayKey(); store.days[t] = (store.days[t] || 0) + 1; }
function gScore(id) { const r = (store.g || {})[id]; return r ? r.best : null; }

function grammarHTML() {
  const g = gram;
  if (g.view === "list") {
    const lv = prefs.level === "ALL" ? LEVELS : [prefs.level];
    return `<div class="ghead"><h2>Gramatyka</h2><p class="note">Krótkie zasady po polsku i ćwiczenia. Wybierz temat.</p></div>` +
      lv.map(l => {
        const ts = GT.filter(t => t.lvl === l);
        if (!ts.length) return "";
        return `<div class="glevel"><span class="tag lvl ${l}">${l}</span></div><div class="gtopics">${ts.map(t => {
          const sc = gScore(t.id);
          return `<button type="button" class="gtopic" data-act="gr-open" data-id="${t.id}">
            <b>${esc(t.title)}</b><span class="note">${esc(t.sum)}</span>
            <span class="gscore ${sc == null ? "" : sc >= 80 ? "good" : "mid"}">${sc == null ? "Nie zaczęte" : "Najlepszy wynik: " + sc + "%"}</span></button>`;
        }).join("")}</div>`;
      }).join("");
  }
  const t = gById[g.topic];
  const rulesBox = `<div class="rules"><h3>Zasady</h3><ul>${t.rules.map(r => `<li>${md(r)}</li>`).join("")}</ul></div>`;
  const back = `<button class="linkbtn" type="button" data-act="gr-list">← Wszystkie tematy</button>`;
  if (g.view === "topic") {
    return `${back}<div class="ghead"><span class="tags"><span class="tag lvl ${t.lvl}">${t.lvl}</span></span><h2>${esc(t.title)}</h2></div>
      ${rulesBox}
      <div class="actions"><button class="btn primary" type="button" data-act="gr-start">Zacznij ćwiczenia (${t.items.length}) <kbd>Enter</kbd></button></div>`;
  }
  if (g.view === "quiz") {
    const it = g.items[g.i], total = g.items.length, picked = g.picked;
    const ok = picked != null && it.opts[picked] === it.a;
    return `${back}
      <div class="meta"><span>${esc(t.title)} · pytanie ${g.i + 1} z ${total}</span><span>${repLink("gramatyka:" + g.topic + " | " + it.q + " | " + it.a)} ✓ ${g.ok} &nbsp; ✗ ${g.missed.length}</span></div>
      <div class="bar"><i style="width:${(g.i / total) * 100}%"></i></div>
      ${g.showRules ? rulesBox : ""}
      <p class="gapline">${picked == null ? sentenceHTML(it.q) : sentenceHTML(it.q, it.a, ok ? "ok" : "no")}</p>
      <div class="opts gopts">${it.opts.map((o, i) => {
        let cls = "";
        if (picked != null) cls = o === it.a ? "right" : (i === picked ? "wrong" : "dim");
        return `<button class="opt ${cls}" data-act="gr-pick" data-i="${i}" ${picked != null ? "disabled" : ""}><kbd>${i + 1}</kbd><span>${esc(optLabel(o))}</span></button>`;
      }).join("")}</div>
      ${picked == null ? `<div style="margin-top:12px"><button class="linkbtn" type="button" data-act="gr-rules">${g.showRules ? "Ukryj zasady" : "Pokaż zasady"}</button></div>` :
        `<div class="feedback ${ok ? "ok" : "no"}"><strong>${ok ? "Dobrze!" : `<span>Twoja odpowiedź: ${esc(optLabel(it.opts[picked]))}</span><br><span>Poprawnie: ${esc(optLabel(it.a))}</span>`}</strong>
          <span class="sub" style="justify-content:flex-start;color:var(--ink)">${esc(fillSentence(it.q, it.a))} ${speakBtn(fillSentence(it.q, it.a), true)}</span>
          ${it.why ? `<span>${esc(it.why)}</span>` : ""}</div>
        <div class="actions"><button class="btn primary" type="button" data-act="gr-next">${g.i + 1 < total ? "Dalej" : "Zobacz wynik"} <kbd>Enter</kbd></button></div>`}`;
  }
  // done
  const total = g.items.length, pct = Math.round(g.ok / total * 100);
  return `${back}<div class="summary">
    <h2>${esc(t.title)}: ${pct}%</h2>
    <div class="score"><div><b>${g.ok}</b><small>dobrze</small></div><div><b>${total - g.ok}</b><small>błędy</small></div><div><b>${gScore(t.id)}%</b><small>najlepszy wynik</small></div></div>
    ${g.missed.length ? `<div class="rules"><h3>Twoje błędy</h3><ul>${g.missed.map(it => `<li class="gmiss">
      <span class="gm-no">✗ ${sentenceHTML(it.q, it.picked, "no")}</span>
      <span class="gm-ok">✓ ${sentenceHTML(it.q, it.a, "ok")}</span>
      ${it.why ? `<span class="note">${esc(it.why)}</span>` : ""}</li>`).join("")}</ul></div>` : `<p class="note">Wszystko dobrze. Świetnie!</p>`}
    <div class="actions"><button class="btn primary" type="button" data-act="gr-start">Jeszcze raz <kbd>Enter</kbd></button><button class="btn" type="button" data-act="gr-list">Inny temat</button></div>
  </div>`;
}

function grammarAct(a, el) {
  const g = gram;
  if (a === "gr-list") { gram = { view: "list" }; }
  else if (a === "gr-open") { gram = { view: "topic", topic: el.dataset.id }; }
  else if (a === "gr-rules") { g.showRules = !g.showRules; }
  else if (a === "gr-start") {
    const t = gById[g.topic];
    gram = { view: "quiz", topic: g.topic, i: 0, ok: 0, picked: null, missed: [],
      items: shuffle(t.items.slice()).map(it => Object.assign({}, it, { opts: shuffle([it.a].concat(it.wrong)) })) };
  }
  else if (a === "gr-pick") {
    if (g.picked != null) return;
    g.picked = +el.dataset.i;
    const it = g.items[g.i];
    if (it.opts[g.picked] === it.a) g.ok++; else g.missed.push(Object.assign({}, it, { picked: it.opts[g.picked] }));
    countAnswer(); persist();
    speak(fillSentence(it.q, it.a));
  }
  else if (a === "gr-next") {
    if (g.i + 1 < g.items.length) { g.i++; g.picked = null; }
    else {
      const pct = Math.round(g.ok / g.items.length * 100);
      store.g = store.g || {};
      const prev = store.g[g.topic] || { best: 0, n: 0 };
      store.g[g.topic] = { best: Math.max(prev.best, pct), n: prev.n + 1, last: Date.now() };
      persist();
      g.view = "done";
    }
  }
  render();
  // after an answer, bring the explanation and the "Dalej" button into view on short screens
  const next = a === "gr-pick" && stage.querySelector('[data-act="gr-next"]');
  if (next) next.scrollIntoView({ block: "nearest", behavior: "smooth" });
  else stage.scrollIntoView({ block: "nearest" });
}

function grammarSideHTML() {
  const rows = LEVELS.map(l => {
    const ts = GT.filter(t => t.lvl === l);
    const done = ts.filter(t => (gScore(t.id) || 0) >= 80).length;
    return `<div class="lvrow"><span class="tag lvl ${l}">${l}</span><span class="track"><i class="${l}" style="width:${ts.length ? done / ts.length * 100 : 0}%"></i></span><span>${done}/${ts.length}</span></div>`;
  }).join("");
  return `<div class="panel"><h3>Gramatyka</h3>${rows}<p class="note">Temat liczy się jako opanowany od 80% dobrych odpowiedzi.</p></div>`;
}

function render() {
  renderMain();
  if (rep.open) {
    const bar = stage.querySelector(".fbar");
    if (bar) bar.insertAdjacentHTML("afterend", repPanelHTML()); else stage.insertAdjacentHTML("afterbegin", repPanelHTML());
    const t = document.getElementById("rep-text"); if (t) t.focus({ preventScroll: true });
  }
}
function renderMain() {
  const mob = isMobile();
  document.body.classList.toggle("mob", mob);
  document.body.classList.toggle("focus", mob && ui.focus);
  if (mob && !ui.focus) { renderTab(); return; }
  renderStage();
  if (mob) {
    stage.insertAdjacentHTML("afterbegin", focusBarHTML());
    // after checking an answer, bring the feedback and the Next button into view
    const fb = session && session.state && (session.state.result || session.state.picked != null) && stage.querySelector(".feedback");
    if (fb) (stage.querySelector('[data-act="next"]') || fb).scrollIntoView({ block: "nearest" });
  }
}
function renderStage() {
  document.getElementById("dir").hidden = !["cards", "quiz", "tr"].includes(M()) || ["hard", "own"].includes(prefs.mode);
  document.getElementById("dir").textContent = prefs.dir === "en-pl" ? "EN → PL" : "PL → EN";
  if (prefs.mode === "grammar") { stage.innerHTML = grammarHTML(); renderSide(); return; }
  if (prefs.mode === "irr" && irrView === "table") { stage.innerHTML = irrTableHTML(); renderSide(); return; }
  if (prefs.mode === "read") { stage.innerHTML = readHTML(); renderSide(); return; }
  if (prefs.mode === "chat") { stage.innerHTML = chatHTML(); renderSide(); afterChatRender(); return; }
  if (prefs.mode === "write") { stage.innerHTML = writeHTML(); renderSide(); return; }
  if (prefs.mode === "exam") { stage.innerHTML = examHTML(); renderSide(); return; }
  if (prefs.mode === "own" && ownView === "list") { stage.innerHTML = ownHTML(); renderSide(); return; }
  if (prefs.mode === "list") {
    const q = document.getElementById("search");
    stage.innerHTML = voiceBanner() + listHTML(); renderList(); renderSide();
    if (q && listFilter.q) document.getElementById("search").value = listFilter.q;
    return;
  }
  if (session.empty) { stage.innerHTML = emptyHTML(); renderSide(); return; }
  const back = prefs.mode === "own" ? `<button class="linkbtn" type="button" data-act="own-list">← Lista moich słówek</button>` : "";
  if (session.i >= session.queue.length) stage.innerHTML = back + voiceBanner() + summaryHTML();
  else {
    const w = byId[session.queue[session.i]];
    const view = { cards: cardsHTML, quiz: quizHTML, type: typeHTML, listen: listenHTML, gap: gapHTML, irr: irrHTML, wf: wfHTML, sit: sentHTML, tr: sentHTML, dict: dictHTML, phr: phrHTML, shadow: shadowHTML, free: freeHTML }[M()] || cardsHTML;
    stage.innerHTML = back + voiceBanner() + view(w);
    if (M() === "listen" && !session.state.spoken) { session.state.spoken = true; speak(w.en); }
  }
  renderSide();
  const inp = document.getElementById("answer") || document.getElementById("past");
  if (inp && !session.state.result) inp.focus({ preventScroll: true });
}

// Side column panels: word counts and level mastery for the current level.
function sideParts() {
  const now = Date.now();
  const words = pool(), counts = [0, 0, 0, 0];
  let due = 0;
  words.forEach(w => { const p = prog(w.id); counts[statusOf(p.b)]++; if (p.b > 0 && p.d <= now) due++; });
  const n = words.length;
  const lvRows = SETS.map(l => {
    const ws = WORDS.filter(w => w.lvl === l);
    const pct = Math.round(ws.reduce((a, w) => a + prog(w.id).b, 0) / (ws.length * 5) * 100);
    return `<div class="lvrow"><span class="tag lvl ${l}">${short(l)}</span><span class="track"><i class="${l}" style="width:${pct}%"></i></span><span>${pct}%</span></div>`;
  }).join("");
  const title = prefs.level === "ALL" ? "Wszystkie słowa" : LEVELS.includes(prefs.level) ? "Poziom " + prefs.level : lab(prefs.level);
  const special = { review: reviewSideHTML, hard: hardSideHTML, exam: examSideHTML, shadow: pronSideHTML,
    write: () => `<div class="panel"><h3>Jak pisać</h3><p class="note">Trzymaj się liczby słów z polecenia. Pisz sam, bez tłumacza – błędy są tu cenne, bo z nich Claude zrobi Ci listę do poprawy.</p></div>`,
    dict: () => lvlPanel("Dyktando", DICT, "Zdania pochodzą z przykładów do słówek. Wielkie litery i interpunkcja nie mają znaczenia."),
    free: () => lvlPanel("Odpowiedz swobodnie", FREE, aiSample ? "Twoją odpowiedź sprawdza Claude: gramatykę i to, czy odpowiada na pytanie. Treść może być dowolna." : "Po odpowiedzi zobaczysz wskazówkę i przykłady, a potem ocenisz się sam."),
    phr: () => lvlPanel("Phrasal verbs i przyimki", PHR, "Wpisz tylko brakującą cząstkę, np. up, on, for."),
    read: () => `<div class="panel"><h3>Czytanie</h3><p class="note">Przeczytane teksty: <b>${Object.keys(store.r || {}).length}</b> z ${TX.length}.</p><p class="note">Wskazówka: najpierw posłuchaj z ukrytym tekstem, potem przeczytaj i sprawdź, co umknęło.</p></div>`,
    chat: () => `<div class="panel"><h3>Jak rozmawiać</h3><p class="note">Pisz pełnymi zdaniami. Nie przejmuj się błędami w trakcie – Claude omówi je dopiero w ocenie na końcu.</p></div>` }[prefs.mode];
  return {
    special: special ? special() : prefs.mode === "grammar" ? grammarSideHTML() : prefs.mode === "irr" ? irrSideHTML() : prefs.mode === "wf" ? wfSideHTML() : prefs.mode === "sit" || prefs.mode === "tr" ? sentSideHTML(prefs.mode) : "",
    counts: `<div class="panel">
    <h3>${title} · ${n} słów</h3>
    <div class="stack">${counts.map((c, i) => c ? `<i class="c${i}" style="width:${c / n * 100}%"></i>` : "").join("")}</div>
    <div class="legend">${counts.map((c, i) => `<div><i class="c${i}"></i>${STATUS[i]}<b>${c}</b></div>`).join("")}</div>
    <p class="note">${due ? `Do powtórki teraz: <b>${due}</b>.` : "Nic nie czeka na powtórkę. Możesz uczyć się nowych słów."}</p>
  </div>`,
    levels: withReset => `<div class="panel">
    <h3>Opanowanie poziomów</h3>
    ${lvRows}
    <p class="note">Każda dobra odpowiedź przesuwa słowo o jedno pudełko dalej (1 h, 1 dzień, 3, 7, 21 dni). Błąd cofa je na początek.</p>
    ${withReset ? `<div id="resetBox"><button class="danger" type="button" id="reset">Wyzeruj postęp</button></div>` : ""}
  </div>`
  };
}
function renderSide() {
  const side = document.getElementById("side");
  if (isMobile()) {
    // on a phone the tips and counts fold away under the exercise; the rest lives on the Postęp and Profil tabs
    if (ui.focus) { const p = sideParts(); side.innerHTML = `<details class="mtips" ${ui.tipsOpen ? "open" : ""}><summary>Wskazówki i postęp</summary><div class="mtipsbody">${p.special}${p.counts}</div></details>`; }
    else side.innerHTML = "";
  } else {
    const p = sideParts();
    side.innerHTML = p.special + p.counts + voicePanelHTML() + langPanelHTML() + p.levels(true);
  }
  bindSide();
  renderTop();
}
// Panels can sit in the side column or, on a phone, on a tab of their own.
function refreshPanels() { if (isMobile() && !ui.focus) renderTab(); else renderSide(); }
function bindSide() {
  bindVoicePanel();
  document.querySelectorAll("[data-goal]").forEach(b => b.onclick = () => { setPref("goal", +b.dataset.goal); refreshPanels(); });
  document.querySelectorAll("[data-ui]").forEach(b => b.onclick = () => { setPref("ui", b.dataset.ui); render(); });
  const reset = document.getElementById("reset");
  if (reset) reset.onclick = () => {
    document.getElementById("resetBox").innerHTML = `<div class="confirm">Usunąć cały postęp?<button class="yes" type="button" id="resetYes">Tak, wyzeruj</button><button type="button" id="resetNo">Anuluj</button></div>`;
    document.getElementById("resetYes").onclick = () => { store.p = {}; store.g = {}; store.r = {}; store.ex = {}; store.days = {}; store.resetAt = Date.now(); persist(); newSession(); render(); renderTop(); };
    document.getElementById("resetNo").onclick = refreshPanels;
  };
}

function renderTop() {
  const t = store.days[todayKey()] || 0, s = streak();
  const known = WORDS.filter(w => prog(w.id).b >= 3).length;
  document.getElementById("today").innerHTML =
    `<div><b>${t}</b><small>odpowiedzi dziś</small></div><div><b>${s}</b><small>${s === 1 ? "dzień z rzędu" : "dni z rzędu"}</small></div><div><b>${known}</b><small>słów utrwalonych</small></div>`;
  const ms = document.getElementById("mstreak");
  ms.innerHTML = I.flame + s;
  ms.setAttribute("aria-label", `Seria: ${s} ${s === 1 ? "dzień" : "dni"} z rzędu`);
}

function renderControls() {
  const btn = l => `<button type="button" data-level="${l}" aria-pressed="${prefs.level === l}"><span class="dot ${l}"></span>${l === "ALL" ? lab(l) : short(l)}</button>`;
  document.getElementById("levels").innerHTML = LEVELS.concat("ALL").map(btn).join("");
  document.getElementById("mlevel").innerHTML = LEVELS.concat("ALL").map(l => `<option value="${l}" ${prefs.level === l ? "selected" : ""}>${l === "ALL" ? lab(l) : l}</option>`).join("");
  const sec = sectionOf(prefs.mode);
  document.getElementById("sections").innerHTML = SECTIONS.filter(([k]) => k !== "ai" || aiSample).map(([k, label]) =>
    `<button type="button" data-sec="${k}" aria-pressed="${sec === k}">${label}</button>`).join("");
  const subs = SECTIONS.find(s => s[0] === sec)[2];
  document.getElementById("modes").innerHTML = subs.map(([k, label]) =>
    `<button type="button" data-mode="${k}" aria-pressed="${prefs.mode === k}">${label}</button>`).join("");
  document.getElementById("modes").closest(".controls").hidden = subs.length < 2;
}

/* ---------- actions ---------- */
function act(a, el) {
  const st = session && session.state;
  if (a === "speak") { speak(el.dataset.en); return; }
  if (a === "link") return;
  if (a === "m-open") { mOpen(el.dataset.mode, el.dataset); return; }
  if (a === "m-close") { try { speechSynthesis.cancel(); } catch (e) {} ui.focus = false; render(); window.scrollTo(0, 0); return; }
  if (a === "m-dir") { setPref("dir", prefs.dir === "en-pl" ? "pl-en" : "en-pl"); session.state = {}; render(); return; }
  if (a === "again-missed") {
    const ids = session.missed.slice();
    session = { queue: shuffle(ids), i: 0, ok: 0, bad: 0, missed: [], retried: new Set(), extra: true, state: {}, empty: !ids.length };
    rep = { open: false }; render(); return;
  }
  if (a.startsWith("gr-")) { grammarAct(a, el); return; }
  if (a.startsWith("rd-")) { readAct(a, el); return; }
  if (a.startsWith("wr-")) { writeAct(a, el); return; }
  if (a.startsWith("ex-")) { examAct(a, el); return; }
  if (a === "rep-open") { rep = { open: true, ctx: el.dataset.ctx }; render(); return; }
  if (a === "rep-cancel") { rep = { open: false }; render(); return; }
  if (a === "rep-send") { repSend(); return; }
  if (a === "f-yes" || a === "f-no") { if (st.result !== "pending" || st.ai === "loading") return; st.result = a === "f-yes" ? "self" : "no"; answer(a === "f-yes"); render(); return; }
  if (a === "f-ai") { freeCheck(); return; }
  if (a === "f-tip") { st.given = document.getElementById("answer").value; st.tip = true; render(); return; }
  if (a === "sh-hide") { setPref("shadowHide", !prefs.shadowHide); render(); return; }
  if (a === "sh-reveal") { st.reveal = true; render(); return; }
  if (a === "yes-shadow" || a === "no-shadow") { answer(a === "yes-shadow"); next(); return; }
  if (a.startsWith("ch-")) { chatAct(a, el); return; }
  if (a === "own-train") { ownView = "train"; newSession(); render(); return; }
  if (a === "own-list") { ownView = "list"; ownDelId = null; render(); return; }
  if (a === "own-del") { ownDelId = el.dataset.id; render(); return; }
  if (a === "own-del-no") { ownDelId = null; render(); return; }
  if (a === "own-del-yes") { const id = el.dataset.id; store.own = (store.own || []).filter(o => o.id !== id);
    store.ownDel = (store.ownDel || []).concat(id); delete store.p[id]; ownDelId = null; persist(); render(); return; }
  if (a === "d-play" || a === "d-slow") { const w = byId[session.queue[session.i]]; speak(w.en, a === "d-slow" ? 0.65 : undefined); return; }
  if (a === "d-hint") { const w = byId[session.queue[session.i]]; st.given = document.getElementById("answer").value;
    st.hint = Math.min(w.en.split(" ").length, (st.hint || 0) + 1); render(); return; }
  if (a === "s-self") { if (st.result !== "miss" || st.ai === "loading") return; st.result = "self"; answer(true); render(); return; }
  if (a === "s-wrong") { if (st.result !== "miss" || st.ai === "loading") return; st.result = "no"; answer(false); render(); return; }
  if (a === "s-ai") { aiCheck(); return; }
  if (a === "irr-view") { irrView = el.dataset.v; setPref("irrView", irrView); if (session) session.state = {}; render(); return; }
  if (a === "irr-pick") { if (st.picked != null) return; st.picked = +el.dataset.i; const w = byId[session.queue[session.i]];
    answer(st.opts[st.picked] === `${w.past} – ${w.pp}`); render(); speak(irrSay(w)); return; }
  if (a === "irr-learned") { st.learned = true; render(); return; }
  if (a === "irr-hint") { st.gp = document.getElementById("past").value; st.gpp = document.getElementById("pp").value;
    st.hint = (st.hint || 0) + 1; render(); return; }
  if (a === "s-hint") { const w = byId[session.queue[session.i]]; st.given = document.getElementById("answer").value;
    st.hint = Math.min(sentList(w)[0].split(" ").length, (st.hint || 0) + 1); render(); return; }
  if (a === "flip") { st.flipped = !st.flipped; render(); return; }
  if (a === "yes" || a === "no") { if (!st.flipped) return; answer(a === "yes"); next(); return; }
  if (a === "pick") { if (st.picked != null) return; st.picked = +el.dataset.i; const w = byId[session.queue[session.i]];
    answer(st.opts[st.picked] === (prefs.dir === "en-pl" ? w.pl : w.en)); render();
    speak(w.en); return; }
  if (a === "next") { next(); return; }
  if (a === "again") { newSession(); render(); return; }
  if (a === "replay" || a === "slow") { const w = byId[session.queue[session.i]]; speak(w.en, a === "slow" ? 0.6 : undefined); return; }
  if (a === "hint") { const w = byId[session.queue[session.i]]; st.given = document.getElementById("answer").value;
    st.hint = Math.min(targetOf(w).length, (st.hint || 0) + 1); render(); return; }
  if (a === "giveup") {
    if (M() === "irr") {
      st.gp = document.getElementById("past").value; st.gpp = document.getElementById("pp").value;
      st.result = { past: "no", pp: "no", ok: false };
      const w = byId[session.queue[session.i]]; speak(irrSay(w));
    } else { st.given = document.getElementById("answer").value; st.result = "no"; st.match = null; }
    answer(false); render(); return;
  }
}

stage.addEventListener("click", e => {
  const t = e.target.closest("[data-act]");
  if (t) { e.stopPropagation(); act(t.dataset.act, t); return; }
  const f = e.target.closest("[data-st]");
  if (f) {
    listFilter.st = +f.dataset.st;
    document.querySelectorAll("#stfilter button").forEach(b => b.setAttribute("aria-pressed", b === f));
    renderList();
  }
});
stage.addEventListener("input", e => {
  if (e.target.id === "search") { listFilter.q = e.target.value; renderList(); }
  if (e.target.id === "wr-text") {
    wr.text = e.target.value;
    const n = wordCount(wr.text), c = document.getElementById("wr-count"), b = stage.querySelector('[data-act="wr-check"]');
    if (c) c.textContent = n + " słów";
    if (b) b.disabled = n < 5;
  }
});
stage.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "ownform") { ownAdd(); return; }
  if (e.target.id === "chatform") { chatSend(); return; }
  if (M() === "sit" || M() === "tr") { sentSubmit(); return; }
  if (M() === "dict") { dictSubmit(); return; }
  if (M() === "free") { freeSubmit(); return; }
  const st = session.state;
  if (st.result) { next(); return; }
  if (M() === "irr") { irrSubmit(); return; }
  const w = byId[session.queue[session.i]];
  const given = document.getElementById("answer").value;
  let r = check(given, targetOf(w));
  if (r === "no" && M() === "gap" && check(given, w.en) !== "no") r = "typo"; // base form instead of the inflected one
  if (r === "typo" && (M() === "wf" || M() === "phr")) r = "spell"; // exam style: spelling must be exact
  if (!r) return;
  st.given = given; st.result = r;
  const good = r === "ok" || r === "typo";
  answer(good); render();
  if (good) speak(M() === "gap" ? w.ex : M() === "wf" || M() === "phr" ? fillSentence(w.ex, w.en) : w.en);
});

["levels"].forEach(id => document.getElementById(id).addEventListener("click", e => {
  const b = e.target.closest("[data-level]"); if (!b) return;
  setPref("level", b.dataset.level); renderControls(); newSession(); gram = { view: "list" }; render(); askUiLang();
}));
if (prefs.level !== "ALL" && !SETS.includes(prefs.level)) prefs.level = "A1";
document.getElementById("sections").addEventListener("click", e => {
  const b = e.target.closest("[data-sec]"); if (!b) return;
  const sec = SECTIONS.find(s => s[0] === b.dataset.sec);
  const last = (prefs.secMode || {})[sec[0]];
  const mode = sec[2].some(([k]) => k === last) ? last : sec[2][0][0];
  setPref("mode", mode); renderControls(); newSession(); render();
});
document.getElementById("modes").addEventListener("click", e => {
  const b = e.target.closest("[data-mode]"); if (!b) return;
  setPref("mode", b.dataset.mode); setPref("secMode", Object.assign({}, prefs.secMode, { [sectionOf(b.dataset.mode)]: b.dataset.mode }));
  renderControls(); newSession(); render();
});
document.getElementById("dir").addEventListener("click", () => {
  setPref("dir", prefs.dir === "en-pl" ? "pl-en" : "en-pl"); session.state = {}; render();
});

document.querySelector(".mnav").addEventListener("click", e => {
  const b = e.target.closest("[data-tab]"); if (!b) return;
  try { speechSynthesis.cancel(); } catch (err) {}
  ui.tab = b.dataset.tab; ui.focus = false; render(); window.scrollTo(0, 0);
});
document.getElementById("mlevel").addEventListener("change", e => {
  setPref("level", e.target.value); renderControls(); newSession(); gram = { view: "list" }; render(); askUiLang();
});
document.getElementById("side").addEventListener("toggle", e => { if (e.target.matches(".mtips")) ui.tipsOpen = e.target.open; }, true);
mq.addEventListener("change", () => render());
// Flashcards: swipe right = "Umiem", left = "Jeszcze nie" (only once the card is turned over).
let swipe = null;
stage.addEventListener("touchstart", e => {
  swipe = e.target.closest(".flip") && e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
}, { passive: true });
stage.addEventListener("touchend", e => {
  if (!swipe) return;
  const t = e.changedTouches[0], dx = t.clientX - swipe.x, dy = t.clientY - swipe.y;
  swipe = null;
  if (Math.abs(dx) < 70 || Math.abs(dy) > Math.abs(dx) || !session || !session.state.flipped) return;
  e.preventDefault();
  act(dx > 0 ? "yes" : "no");
});

document.addEventListener("keydown", e => {
  if (isMobile() && !ui.focus) return;
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.tagName === "BUTTON" && (e.key === "Enter" || e.key === " ")) return;
  if (rep.open) return;
  if (prefs.mode === "exam") {
    if (ex.view === "run" && /^[1-4]$/.test(e.key) && +e.key <= ex.qs[ex.i].opts.length) examAct("ex-pick", { dataset: { i: +e.key - 1 } });
    else if (ex.view === "run" && e.key === "Enter" && ex.ans[ex.i] != null) { e.preventDefault(); examAct("ex-next", {}); }
    return;
  }
  if (prefs.mode === "list" || prefs.mode === "read" || prefs.mode === "chat" || prefs.mode === "write" || (prefs.mode === "own" && ownView === "list")) return;
  if (prefs.mode !== "grammar" && session && session.empty) return;
  if (prefs.mode === "grammar") {
    const g = gram;
    if (g.view === "quiz" && g.picked == null && /^[1-4]$/.test(e.key) && +e.key <= g.items[g.i].opts.length) act("gr-pick", { dataset: { i: +e.key - 1 } });
    else if (e.key === "Enter" && g.view === "quiz" && g.picked != null) { e.preventDefault(); act("gr-next"); }
    else if (e.key === "Enter" && (g.view === "topic" || g.view === "done")) { e.preventDefault(); act("gr-start"); }
    return;
  }
  const st = session.state, done = session.i >= session.queue.length;
  if (done) { if (e.key === "Enter") { e.preventDefault(); act("again"); } return; }
  const mm = M();
  if (mm === "free" && st.result === "pending") return;
  if (mm === "shadow") {
    if (e.key === " ") { e.preventDefault(); act("d-play"); }
    else if (e.key === "1") act("no-shadow");
    else if (e.key === "2") act("yes-shadow");
    return;
  }
  if (mm === "cards") {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); act("flip"); }
    else if (e.key === "1" && st.flipped) act("no");
    else if (e.key === "2" && st.flipped) act("yes");
  } else if (mm === "quiz") {
    if (st.picked == null && /^[1-4]$/.test(e.key)) act("pick", { dataset: { i: +e.key - 1 } });
    else if (st.picked != null && e.key === "Enter") { e.preventDefault(); next(); }
  } else if (mm === "irr" && irrV() === "table") { return; }
  else if (mm === "irr" && irrV() === "cards") {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); act("flip"); }
    else if (e.key === "1" && st.flipped) act("no");
    else if (e.key === "2" && st.flipped) act("yes");
  } else if (mm === "irr" && irrV() === "quiz") {
    if (st.picked == null && /^[1-4]$/.test(e.key) && st.opts && +e.key <= st.opts.length) act("irr-pick", { dataset: { i: +e.key - 1 } });
    else if (st.picked != null && e.key === "Enter") { e.preventDefault(); next(); }
  }
  else if (mm === "irr" && st.learnShown && e.key === "Enter") { e.preventDefault(); act("irr-learned"); }
  else if (st.result === "miss" && e.key === "Enter") { e.preventDefault(); act("s-wrong"); }
  else if (TYPED.includes(mm) && st.result && st.result !== "miss" && e.key === "Enter") { e.preventDefault(); next(); }});

loadVoices();

renderControls();
newSession();
render();
i18nAll();
initSync();
askUiLang();
