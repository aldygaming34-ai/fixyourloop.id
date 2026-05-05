// ─── QUESTIONS ────────────────────────────────────────────────────────────────
// Each option maps to a type: CZ=Comfort Zoner, DD=Distracted Dreamer, BG=Burnout Grinder, CB=Consistent Builder
// We'll score per-type and pick the highest.

const QUESTIONS = [
{
  text: "Lo bangun pagi, hal pertama yang lo lakuin adalah...",
  options: [
    { text: "Rebahan dulu. Males gerak, tunda-tunda terus.", type: "CZ" },
    { text: "Langsung cek HP — notif, sosmed, scroll tanpa arah.", type: "DD" },
    { text: "Langsung kerja atau belajar, padahal badan udah kelelahan.", type: "BG" },
    { text: "Gerak ringan, minum air, set niat hari ini.", type: "CB" }
  ]
},
{
  text: "Kalau ada tugas/kerjaan penting, lo biasanya...",
  options: [
    { text: "Nunda. 'Nanti aja', 'besok mulai deh', 'lagi capek'.", type: "CZ" },
    { text: "Mulai, tapi bentar doang udah distracted — buka hal lain.", type: "DD" },
    { text: "Ngerjain semua sekaligus sampe lupa istirahat.", type: "BG" },
    { text: "Selesain sesuai prioritas, ada sistem sendiri.", type: "CB" }
  ]
},
{
  text: "Pola tidur lo dalam seminggu terakhir...",
  options: [
    { text: "Tidur siang kelamaan, malem susah tidur.", type: "CZ" },
    { text: "Nggak konsisten — scroll HP sampe ketiduran.", type: "DD" },
    { text: "Begadang terus karena kerjaan, badan udah protes.", type: "BG" },
    { text: "Cukup teratur, 7–8 jam, bangun segar.", type: "CB" }
  ]
},
{
  text: "Seberapa sering lo olahraga atau gerak aktif?",
  options: [
    { text: "Hampir nggak pernah. Niat ada, eksekusi nol.", type: "CZ" },
    { text: "Niat terus, tapi ujung-ujungnya ke HP lagi.", type: "DD" },
    { text: "Olahraga keras tiap hari, tapi badan sering minta berhenti.", type: "BG" },
    { text: "Rutin dan terukur — minimal 3x seminggu.", type: "CB" }
  ]
},
{
  text: "Gimana lo ngabisin waktu luang?",
  options: [
    { text: "Rebahan, scrolling, nonton — lebih sering daripada action.", type: "CZ" },
    { text: "Lompat-lompat antara banyak hal, nggak ada yang tuntas.", type: "DD" },
    { text: "Isi terus dengan produktivitas, nggak bisa santai tenang.", type: "BG" },
    { text: "Ada kegiatan terstruktur — belajar, hobi, atau istirahat yang disengaja.", type: "CB" }
  ]
},
{
  text: "Lo punya target / goals buat diri sendiri?",
  options: [
    { text: "Nggak ada. Ngalir aja, lihat nanti.", type: "CZ" },
    { text: "Banyak banget — tapi hampir semuanya nggak jalan.", type: "DD" },
    { text: "Ada dan ambisius banget, tapi bikin lo burnout ngejarnya.", type: "BG" },
    { text: "Ada, realistis, dan aktif gue kerjain step by step.", type: "CB" }
  ]
},
{
  text: "Gimana kondisi mental lo sehari-hari?",
  options: [
    { text: "Sering ngerasa males, nggak bersemangat, flat aja.", type: "CZ" },
    { text: "Pikiran penuh tapi susah fokus — kayak browser kebanyakan tab.", type: "DD" },
    { text: "Capek banget tapi tetep maksa jalan. Takut berhenti.", type: "BG" },
    { text: "Cukup stabil — tau kapan push, tau kapan istirahat.", type: "CB" }
  ]
},
{
  text: "Kalau lo gagal atau nggak konsisten, lo biasanya...",
  options: [
    { text: "Nyerah dan lupain targetnya. 'Emang bukan buat gue.'", type: "CZ" },
    { text: "Merasa guilty lama, tapi nggak ngapa-ngapain juga.", type: "DD" },
    { text: "Maksa diri lebih keras lagi — sampe exhausted.", type: "BG" },
    { text: "Evaluasi, cari tahu kenapa, terus coba lagi dengan cara beda.", type: "CB" }
  ]
}
];

// ─── TYPES ────────────────────────────────────────────────────────────────────

const TYPES = {
CZ: {
  name: "COMFORT ZONER",
  emoji: "🔴",
  tagline: "Hidup lo... ya gitu-gitu aja.",
  desc: "Lo sebenernya tau harus berubah. Tau harus mulai. Tapi tiap mau gerak, selalu ada alasan: \"nanti aja\", \"lagi capek\", \"besok mulai deh\". Ujung-ujungnya? Lebih sering rebahan daripada action.",
  points: ["Bukan gak bisa...", "Cuma terlalu nyaman buat mulai."],
  microHabit: "5 menit gerak tiap hari",
  challenge: "Lakukan 7 hari berturut-turut",
  tags: ["#COMFORT_ZONE", "#PROCRASTINATOR", "#MULAI_DULU"]
},
DD: {
  name: "DISTRACTED DREAMER",
  emoji: "🟡",
  tagline: "Mimpinya banyak, tapi fokusnya bocor.",
  desc: "Lo punya banyak rencana. Ide juga gak kurang. Tapi tiap mulai... bentar doang udah ke-distract: notif, scroll, buka app lain, dll. Akhirnya: niat ada, eksekusi ketunda terus.",
  points: ["Masalah lo bukan malas", "Tapi gak bisa jaga fokus"],
  microHabit: "Fokus 25 menit tanpa HP",
  challenge: "1x sehari",
  tags: ["#DISTRACTED", "#DREAMER", "#FOKUS_DULU"]
},
BG: {
  name: "BURNOUT GRINDER",
  emoji: "🔵",
  tagline: "Gas terus... tapi pelan-pelan habis.",
  desc: "Lo tipe yang jalan terus. Ngerjain ini itu, produktif, keliatan sibuk. Tapi di balik itu, lo capek. Tidur berantakan, pikiran penuh, badan mulai ngasih sinyal.",
  points: ["Lo kuat, tapi bukan robot", "Kalau terus dipush, lama-lama drop juga"],
  microHabit: "Tidur minimal 7 jam",
  challenge: "No screen 30 menit sebelum tidur",
  tags: ["#OVERWORKED", "#BURNOUT_RISK", "#REST_IS_PRODUCTIVE"]
},
CB: {
  name: "CONSISTENT BUILDER",
  emoji: "🟢",
  tagline: "Gak heboh, tapi naik terus.",
  desc: "Lo gak selalu sempurna, tapi lo jalan. Pelan, konsisten, dan ada progress. Lo udah ngerti sistem lo sendiri — tinggal dijaga dan dinaikin levelnya.",
  points: ["Lo udah di jalur yang bener", "Tinggal jangan berhenti & jangan cepet puas"],
  microHabit: "Tambah 1% improvement",
  challenge: "Upgrade 1 kebiasaan lo minggu ini",
  tags: ["#CONSISTENT", "#BUILDER", "#LEVEL_UP"]
}
};

// ─── HABITS BY TYPE ───────────────────────────────────────────────────────────

const HABITS_BY_TYPE = {
CZ: [
  { icon: "🏃", name: "5-MINUTE MOVE", desc: "5 menit gerak tiap hari — lompat, jalan di tempat, apapun. Nggak perlu gym. Yang penting gerak.", duration: "7 hari · 5 menit/hari" },
  { icon: "📵", name: "PHONE-FREE MORNING", desc: "Jangan pegang HP selama 30 menit pertama setelah bangun. Ganti sama sesuatu yang nyata.", duration: "7 hari · 30 menit" },
  { icon: "📝", name: "1 TASK A DAY", desc: "Tulis 1 hal kecil yang HARUS lo selesain hari ini. Cuma satu. Selesain itu dulu.", duration: "14 hari · 5 menit/pagi" },
  { icon: "🚶", name: "DAILY WALK", desc: "Jalan kaki 10 menit tiap hari. Tanpa tujuan khusus, cukup gerak dan hirup udara.", duration: "7 hari · 10 menit" }
],
DD: [
  { icon: "⏱️", name: "FOCUS BLOCK 25", desc: "1 sesi 25 menit fokus penuh tanpa HP, tanpa notif. Matiin semua. Kerjain satu hal aja.", duration: "14 hari · 25 menit/hari" },
  { icon: "📋", name: "DAILY 3 PRIORITIES", desc: "Setiap pagi tulis 3 hal yang HARUS selesai hari ini. Fokus ke itu, baru yang lain.", duration: "7 hari · 5 menit/pagi" },
  { icon: "🔕", name: "NOTIF DETOX", desc: "Matiin notifikasi sosmed dari jam 8 pagi – 12 siang. Cek manual kalau emang perlu.", duration: "14 hari · daily" },
  { icon: "✍️", name: "BRAIN DUMP", desc: "5 menit sebelum tidur, tulis semua yang ada di pikiran lo. Kosongkan kepala, tidur lebih tenang.", duration: "7 hari · 5 menit" }
],
BG: [
  { icon: "🛌", name: "SLEEP PROTOCOL", desc: "Tidur minimal 7 jam. No screen 30 menit sebelum tidur. Badan lo butuh recovery, bukan override.", duration: "14 hari · daily" },
  { icon: "⏸️", name: "SCHEDULED REST", desc: "Jadwalin 1 blok istirahat per hari — 20 menit, nggak ada kerjaan, nggak ada HP. Just rest.", duration: "7 hari · 20 menit" },
  { icon: "🧘", name: "MINDFULNESS SESSION", desc: "5 menit breathing atau meditasi sebelum tidur. Bukan meditasi berat — cukup napas dan diam.", duration: "14 hari · 5 menit" },
  { icon: "🚫", name: "STOP AT 9PM", desc: "Jam 9 malam, stop semua kerjaan. Lo boleh santai, tapi dilarang kerja. Respek batas lo sendiri.", duration: "7 hari · daily" }
],
CB: [
  { icon: "📈", name: "1% IMPROVEMENT", desc: "Tiap hari, pilih 1 hal kecil yang bisa lo lakuin lebih baik dari kemarin. Nggak harus besar.", duration: "14 hari · daily" },
  { icon: "📊", name: "WEEKLY REVIEW", desc: "Tiap Minggu, review: apa yang works, apa yang nggak, apa yang mau diubah minggu depan.", duration: "7 hari · 15 menit/minggu" },
  { icon: "🎯", name: "DEEP WORK BLOCK", desc: "2 jam tanpa interupsi setiap hari. Matiin semua notifikasi. Full focus mode. No compromise.", duration: "14 hari · 2 jam" },
  { icon: "🤝", name: "GIVE VALUE DAILY", desc: "Setiap hari, lakukan 1 hal yang kasih value ke orang lain — bantu, share ilmu, atau teach.", duration: "7 hari · daily" }
]
};

let currentQ = 0;
let typeScores = { CZ: 0, DD: 0, BG: 0, CB: 0 };
let selectedOptions = {};
let resultType = 'CB';
let selectedHabit = null;
let trackingDays = 7;
let trackerData = {};
let startDate = null; // ISO date string when tracker started

const SAVE_KEY = 'fixyourloop_save';

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────

function saveProgress() {
const data = {
  resultType,
  selectedHabit,
  trackingDays,
  trackerData,
  startDate,
  savedAt: new Date().toISOString()
};
localStorage.setItem(SAVE_KEY, JSON.stringify(data));
flashSaveIndicator();
}

function loadProgress() {
try {
  const raw = localStorage.getItem(SAVE_KEY);
  return raw ? JSON.parse(raw) : null;
} catch(e) { return null; }
}

function clearSave() {
if (!confirm('Reset progress dan mulai dari awal?')) return;
localStorage.removeItem(SAVE_KEY);
selectedHabit = null;
trackerData = {};
startDate = null;
checkResumeBanner();
}

function flashSaveIndicator() {
const el = document.getElementById('save-indicator');
if (!el) return;
el.style.opacity = '1';
el.style.color = 'var(--accent)';
setTimeout(() => { el.style.opacity = '0.5'; el.style.color = 'var(--muted)'; }, 1200);
}

function checkResumeBanner() {
const save = loadProgress();
const banner = document.getElementById('resume-banner');
if (!banner) return;
if (save && save.startDate) {
  const habits = HABITS_BY_TYPE[save.resultType];
  const habit = habits && habits[save.selectedHabit];
  const habitName = habit ? (habit.icon + ' ' + habit.name) : '?';
  const done = Object.values(save.trackerData).filter(v => v === 'done').length;
  document.getElementById('resume-info').textContent =
    `${habitName}  ·  ${done}/${save.trackingDays} HARI DONE`;
  banner.style.display = 'block';
} else {
  banner.style.display = 'none';
}
}

function resumeTracker() {
const save = loadProgress();
if (!save) return;
resultType    = save.resultType;
selectedHabit = save.selectedHabit;
trackingDays  = save.trackingDays;
trackerData   = save.trackerData;
startDate     = save.startDate;

const habits = HABITS_BY_TYPE[resultType];
const habit  = habits[selectedHabit];
document.getElementById('tracker-habit-name').textContent = habit.icon + ' ' + habit.name;
document.getElementById('tracker-subtitle').textContent = habit.desc;

renderTracker();
showScreen('screen-tracker');
updateNotifUI();
}

// Returns which day index (0-based) is "today" relative to startDate
function getTodayIndex() {
if (!startDate) return 0;
const start = new Date(startDate);
start.setHours(0, 0, 0, 0);
const now = new Date();
now.setHours(0, 0, 0, 0);
const diff = Math.round((now - start) / 86400000);
return diff;
}

// ─── SCREENS ──────────────────────────────────────────────────────────────────

function showScreen(id) {
document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
document.getElementById(id).classList.add('active');
if (id === 'screen-intro') checkResumeBanner();
}

function startQuiz() {
currentQ = 0;
typeScores = { CZ: 0, DD: 0, BG: 0, CB: 0 };
selectedOptions = {};
renderQuestion();
showScreen('screen-quiz');
}

function restartQuiz() {
startQuiz();
}

function confirmChangeHabit() {
if (confirm('Ganti habit akan reset tracking lo. Lanjut?')) {
  localStorage.removeItem(SAVE_KEY);
  trackerData = {};
  startDate = null;
  selectedHabit = null;
  showHabitScreenFromResult();
}
}

function showHabitScreenFromResult() {
showHabitScreen();
}

function renderQuestion() {
const q = QUESTIONS[currentQ];
const pct = (currentQ / QUESTIONS.length) * 100;
document.getElementById('progress-fill').style.width = pct + '%';
document.getElementById('progress-count').textContent = currentQ + ' / ' + QUESTIONS.length;

const area = document.getElementById('question-area');
area.innerHTML = `
  <div class="question-wrapper">
    <div class="question-number">${String(currentQ + 1).padStart(2, '0')}</div>
    <div class="question-text">${q.text}</div>
  </div>
  <div class="options-grid">
    ${q.options.map((opt, i) => `
      <button class="option-btn ${selectedOptions[currentQ] === i ? 'selected' : ''}" onclick="selectOption(${i})">
        <span class="option-label">${String.fromCharCode(65 + i)}</span>
        <span>${opt.text}</span>
      </button>
    `).join('')}
  </div>
  <div style="display: flex; gap: 12px; justify-content: space-between; align-items: center;">
    ${currentQ > 0 ? `<button class="btn-secondary" onclick="prevQuestion()">← PREV</button>` : `<div></div>`}
    ${selectedOptions[currentQ] !== undefined
      ? `<button class="btn-primary" onclick="nextQuestion()">
          ${currentQ === QUESTIONS.length - 1 ? 'LIHAT HASIL ▶' : 'LANJUT ▶'}
        </button>`
      : `<div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);">pilih jawaban dulu</div>`
    }
  </div>
`;
}

function selectOption(index) {
// Remove previous selection score
if (selectedOptions[currentQ] !== undefined) {
  const prevType = QUESTIONS[currentQ].options[selectedOptions[currentQ]].type;
  typeScores[prevType]--;
}
selectedOptions[currentQ] = index;
const chosenType = QUESTIONS[currentQ].options[index].type;
typeScores[chosenType]++;
renderQuestion();
}

function nextQuestion() {
if (selectedOptions[currentQ] === undefined) return;
if (currentQ < QUESTIONS.length - 1) {
  currentQ++;
  renderQuestion();
} else {
  showResult();
}
}

function prevQuestion() {
if (currentQ > 0) {
  if (selectedOptions[currentQ] !== undefined) {
    const prevType = QUESTIONS[currentQ].options[selectedOptions[currentQ]].type;
    typeScores[prevType]--;
    delete selectedOptions[currentQ];
  }
  currentQ--;
  renderQuestion();
}
}

function showResult() {
document.getElementById('progress-fill').style.width = '100%';
document.getElementById('progress-count').textContent = '8 / 8';

// Pick type with highest score
let type = 'CB';
let maxScore = -1;
for (const [k, v] of Object.entries(typeScores)) {
  if (v > maxScore) { maxScore = v; type = k; }
}

resultType = type;

// Update dominant count label
document.getElementById('result-dominant-count').textContent = maxScore;

// Render 4 type cards
const ORDER = ['CZ', 'DD', 'BG', 'CB'];
const grid = document.getElementById('result-types-grid');
grid.innerHTML = ORDER.map(key => {
  const t = TYPES[key];
  const score = typeScores[key];
  const isDominant = key === type;
  return `
    <div class="type-card${isDominant ? ' dominant' : ''}" data-type="${key}">
      ${isDominant ? `<div class="type-card-dominant-badge">● TIPE LO</div>` : ''}
      <div class="type-card-header">
        <div class="type-dot"></div>
        <div class="type-card-name">${t.name}</div>
      </div>
      <div class="type-card-tagline">"${t.tagline}"</div>
      <div class="type-card-desc">${t.desc}</div>
      <div class="type-card-points">
        <div class="type-card-point">👉 ${t.points[0]}</div>
        <div class="type-card-point">👉 ${t.points[1]}</div>
      </div>
      <div class="type-card-score">
        <span>${score} JAWABAN</span>
        <span class="type-card-score-val">${score}</span>
      </div>
    </div>
  `;
}).join('');

showScreen('screen-result');
}

function showHabitScreen() {
const habits = HABITS_BY_TYPE[resultType] || HABITS_BY_TYPE['CB'];
const t = TYPES[resultType];
document.getElementById('habit-subtitle').textContent = `${t.emoji} ${t.name} — PILIH SATU HABIT`;
const grid = document.getElementById('habits-grid');
grid.innerHTML = habits.map((h, i) => `
  <div class="habit-card ${selectedHabit === i ? 'selected' : ''}" onclick="selectHabit(${i})">
    <span class="habit-icon">${h.icon}</span>
    <div class="habit-name">${h.name}</div>
    <div class="habit-desc">${h.desc}</div>
    <div class="habit-duration">⏱ ${h.duration}</div>
  </div>
`).join('');

updateStartBtn();
showScreen('screen-habit');
}

function selectHabit(i) {
selectedHabit = i;
document.querySelectorAll('.habit-card').forEach((c, idx) => {
  c.classList.toggle('selected', idx === i);
});
updateStartBtn();
}

function selectDays(d) {
trackingDays = d;
document.getElementById('btn-7days').classList.toggle('selected', d === 7);
document.getElementById('btn-14days').classList.toggle('selected', d === 14);
}

function updateStartBtn() {
const btn = document.getElementById('btn-start-tracker');
if (selectedHabit !== null) {
  btn.disabled = false;
  btn.style.opacity = '1';
  btn.style.cursor = 'pointer';
} else {
  btn.disabled = true;
  btn.style.opacity = '0.4';
  btn.style.cursor = 'not-allowed';
}
}

function startTracker() {
if (selectedHabit === null) return;
const habits = HABITS_BY_TYPE[resultType];
const habit = habits[selectedHabit];
trackerData = {};
// Save today's date as start date
const today = new Date();
today.setHours(0, 0, 0, 0);
startDate = today.toISOString();

document.getElementById('tracker-habit-name').textContent = habit.icon + ' ' + habit.name;
document.getElementById('tracker-subtitle').textContent = habit.desc;
document.getElementById('stat-left').textContent = trackingDays;

saveProgress();
renderTracker();
showScreen('screen-tracker');
updateNotifUI();
// Prompt to enable notifications after 1.5s
setTimeout(() => {
  const s = loadNotifSettings();
  if (!s.enabled && Notification.permission !== 'denied') {
    showToast(
      '🔔 AKTIFKAN REMINDER?',
      'Biar nggak skip, mau diingatkan tiap hari?',
      [
        { label: '✓ AKTIFKAN', fn: 'toggleNotification(); dismissToast(this);', primary: true },
        { label: 'NANTI', fn: 'dismissToast(this)' }
      ],
      0
    );
  }
}, 1500);
}

function renderTracker() {
const grid = document.getElementById('days-grid');
const todayIdx = getTodayIndex();
const days = ['MIN','SEN','SEL','RAB','KAM','JUM','SAB'];

// Determine day-of-week for day 0
const startDow = startDate ? new Date(startDate).getDay() : new Date().getDay();

let html = '';
for (let d = 0; d < trackingDays; d++) {
  const dayLabel = days[(startDow + d) % 7];
  const state = trackerData[d];
  const isToday = d === todayIdx;
  const isFuture = d > todayIdx;
  let cls = 'day-cell';
  if (isFuture) cls += ' future';
  else if (isToday) cls += ' today';
  if (state === 'done') cls += ' done';
  else if (state === 'missed') cls += ' missed';

  let check = '';
  if (state === 'done') check = '<div class="day-check">✓</div>';
  else if (state === 'missed') check = '<div class="day-check" style="color:#440000;">✗</div>';

  const clickable = !isFuture ? `onclick="toggleDay(${d})"` : '';
  html += `<div class="${cls}" ${clickable}>
    <div class="day-number">${d + 1}</div>
    <div class="day-label">${dayLabel}</div>
    ${check}
  </div>`;
}
grid.innerHTML = html;
updateStats();
}

function toggleDay(d) {
const state = trackerData[d];
if (!state) trackerData[d] = 'done';
else if (state === 'done') trackerData[d] = 'missed';
else delete trackerData[d];
saveProgress();
renderTracker();
}

function updateStats() {
let done = 0, missed = 0, streak = 0;
for (let d = 0; d < trackingDays; d++) {
  if (trackerData[d] === 'done') { done++; streak++; }
  else if (trackerData[d] === 'missed') { streak = 0; }
}

const total = Object.keys(trackerData).length;
const rate = total > 0 ? Math.round((done / total) * 100) : 0;

document.getElementById('stat-done').textContent = done;
document.getElementById('stat-streak').textContent = streak;
document.getElementById('stat-left').textContent = trackingDays - done;
document.getElementById('stat-rate').textContent = rate + '%';
document.getElementById('streak-display').textContent = streak + '🔥';

const msgs = [
  "Mulai hari ini — tap hari ini buat mark selesai!",
  "Satu hari, satu langkah. Keep going!",
  "Lo udah mulai! Jangan berhenti sekarang.",
  "Streak 3+ hari = habit mulai terbentuk. Push!",
  "Halfway there. Loop lo udah mulai berubah.",
  "Hampir sampai. Jangan rusak streak sekarang!",
  "BEAST MODE. Lo konsisten parah — respect!"
];
const msgIdx = Math.min(Math.floor(streak / 2), msgs.length - 1);
document.getElementById('streak-message').textContent = msgs[msgIdx];
}

// ─── TOAST SYSTEM ─────────────────────────────────────────────────────────────

function showToast(title, body, actions = [], duration = 5000) {
const container = document.getElementById('toast-container');
const toast = document.createElement('div');
toast.className = 'notif-toast';
toast.innerHTML = `
  <div class="notif-toast-title">${title}</div>
  <div class="notif-toast-body">${body}</div>
  ${actions.length ? `<div class="notif-toast-actions">${actions.map(a =>
    `<button class="notif-toast-btn ${a.primary ? 'primary' : ''}" onclick="${a.fn}">${a.label}</button>`
  ).join('')}</div>` : ''}
`;
container.appendChild(toast);
if (duration > 0) {
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}
return toast;
}

function dismissToast(btn) {
const toast = btn.closest('.notif-toast');
if (toast) { toast.classList.add('hide'); setTimeout(() => toast.remove(), 350); }
}

// ─── NOTIFICATION SYSTEM ──────────────────────────────────────────────────────

const NOTIF_KEY = 'fixyourloop_notif';
let reminderType = 'daily'; // 'daily' | 'streak' | 'motivasi'

const MOTIVASI_MSGS = [
  'Lo udah mulai — jangan berhenti sekarang.',
  'Konsistensi > intensitas. Jalan terus.',
  'Satu hari missed = satu langkah mundur. Jangan.',
  'Streak lo menunggu. Jangan kecewain diri sendiri.',
  'Orang sukses nggak nunggu mood. Mereka action.',
  'Hari ini bisa jadi hari yang bikin lo bangga.',
  'Patch terbaik buat hidup lo: konsistensi tiap hari.'
];

function loadNotifSettings() {
  try { return JSON.parse(localStorage.getItem(NOTIF_KEY)) || {}; } catch { return {}; }
}

function saveNotifSettings(s) {
  localStorage.setItem(NOTIF_KEY, JSON.stringify(s));
}

function setReminderType(type) {
  reminderType = type;
  document.querySelectorAll('.notif-type-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('rtype-' + type);
  if (btn) btn.classList.add('selected');
  const s = loadNotifSettings();
  s.reminderType = type;
  saveNotifSettings(s);
}

function updateNotifUI() {
  const s = loadNotifSettings();
  const dot = document.getElementById('notif-dot');
  const label = document.getElementById('notif-label');
  const btn = document.getElementById('notif-toggle-btn');
  const timeInput = document.getElementById('notif-time');
  if (!dot) return;

  const perm = Notification.permission;

  if (perm === 'denied') {
    dot.className = 'notif-status-dot denied';
    label.textContent = 'NOTIFIKASI DIBLOKIR — izinkan di pengaturan browser';
    btn.textContent = 'DIBLOKIR';
    btn.disabled = true;
    return;
  }

  if (s.enabled && perm === 'granted') {
    dot.className = 'notif-status-dot active';
    label.textContent = `REMINDER AKTIF — ${s.time || '08:00'} tiap hari`;
    btn.textContent = 'MATIKAN';
    btn.disabled = false;
    if (s.time && timeInput) timeInput.value = s.time;
    if (s.reminderType) {
      reminderType = s.reminderType;
      setReminderType(s.reminderType);
    }
  } else {
    dot.className = 'notif-status-dot';
    label.textContent = 'REMINDER HARIAN — aktifkan agar nggak skip';
    btn.textContent = 'AKTIFKAN';
    btn.disabled = false;
  }

  // Also update result screen panel
  updateResultNotifPanel();
}

function updateResultNotifPanel() {
  const s = loadNotifSettings();
  const perm = Notification.permission;
  const btn = document.getElementById('notif-result-btn');
  const btnText = document.getElementById('notif-result-btn-text');
  const status = document.getElementById('notif-result-status');
  if (!btn) return;

  if (s.enabled && perm === 'granted') {
    btn.classList.add('active');
    if (btnText) btnText.textContent = '✓ REMINDER AKTIF';
    if (status) { status.textContent = `● Diingatkan tiap hari jam ${s.time || '08:00'}`; status.className = 'notif-panel-status ok'; }
  } else if (perm === 'denied') {
    btn.disabled = true;
    if (btnText) btnText.textContent = '⛔ DIBLOKIR';
    if (status) { status.textContent = 'Aktifkan notifikasi di pengaturan browser'; status.className = 'notif-panel-status err'; }
  } else {
    btn.classList.remove('active');
    if (btnText) btnText.textContent = '⚡ AKTIFKAN SEKARANG';
    if (status) { status.textContent = ''; status.className = 'notif-panel-status'; }
  }
}

async function activateNotifFromResult() {
  const s = loadNotifSettings();

  // If already enabled, toggle off
  if (s.enabled && Notification.permission === 'granted') {
    s.enabled = false;
    saveNotifSettings(s);
    updateNotifUI();
    showToast('🔕 REMINDER DIMATIKAN', 'Lo bisa aktifkan lagi kapan aja.', [], 3000);
    return;
  }

  if (Notification.permission === 'default') {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      updateNotifUI();
      showToast('⛔ IZIN DITOLAK', 'Izinkan notifikasi di pengaturan browser, lalu coba lagi.', [{ label: 'OK', fn: 'dismissToast(this)', primary: true }], 0);
      return;
    }
  }

  if (Notification.permission !== 'granted') { updateNotifUI(); return; }

  const timeInput = document.getElementById('notif-time-result');
  const time = timeInput ? timeInput.value : '08:00';
  s.enabled = true;
  s.time = time;
  s.reminderType = reminderType;
  saveNotifSettings(s);
  scheduleNextNotif(time);
  updateNotifUI();

  showToast('🔔 REMINDER AKTIF!', `Lo akan diingatkan tiap hari jam ${time}. Fix your loop! ⚡`, [{ label: 'CLOSE', fn: 'dismissToast(this)' }], 4000);

  setTimeout(() => {
    sendPushNotif('🔔 Fix Your Loop', `Reminder aktif! Ketemu tiap hari jam ${time} 🔥`);
  }, 600);
}

async function toggleNotification() {
  const s = loadNotifSettings();

  if (s.enabled) {
    s.enabled = false;
    saveNotifSettings(s);
    updateNotifUI();
    showToast('🔕 REMINDER DIMATIKAN', 'Lo bisa aktifkan lagi kapan aja.', [], 3000);
    return;
  }

  if (Notification.permission === 'default') {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      updateNotifUI();
      showToast('⛔ IZIN DITOLAK', 'Aktifkan notifikasi di pengaturan browser lo, lalu coba lagi.', [{ label: 'OK', fn: 'dismissToast(this)', primary: true }], 0);
      return;
    }
  }

  if (Notification.permission !== 'granted') { updateNotifUI(); return; }

  const timeInput = document.getElementById('notif-time');
  const time = timeInput ? timeInput.value : '08:00';
  s.enabled = true;
  s.time = time;
  s.reminderType = reminderType;
  saveNotifSettings(s);
  scheduleNextNotif(time);
  updateNotifUI();

  showToast('🔔 REMINDER AKTIF!', `Lo akan diingatkan tiap hari jam ${time}. Stay consistent!`, [{ label: 'CLOSE', fn: 'dismissToast(this)' }], 4000);

  setTimeout(() => {
    sendPushNotif('🔔 Fix Your Loop', 'Reminder harian lo udah aktif! Ketemu tiap hari 🔥');
  }, 800);
}

function sendTestNotif() {
  if (Notification.permission !== 'granted') {
    showToast('⚠️ BELUM AKTIF', 'Aktifkan reminder dulu sebelum test notifikasi.', [{ label: 'OK', fn: 'dismissToast(this)', primary: true }], 3000);
    return;
  }
  const habits = HABITS_BY_TYPE[resultType];
  const habit = selectedHabit !== null && habits ? habits[selectedHabit] : null;
  const habitName = habit ? habit.name : 'habit lo';
  const msg = getNotifMessage(habitName);
  sendPushNotif('⚡ Fix Your Loop – TEST', msg);
  showToast('📣 TEST DIKIRIM!', 'Cek notifikasi di browser lo.', [], 2500);
}

function getNotifMessage(habitName) {
  const s = loadNotifSettings();
  const type = s.reminderType || 'daily';
  if (type === 'motivasi') {
    return MOTIVASI_MSGS[Math.floor(Math.random() * MOTIVASI_MSGS.length)];
  }
  if (type === 'streak') {
    const done = Object.values(trackerData).filter(v => v === 'done').length;
    return `Streak lo: ${done} hari 🔥 Jangan putus sekarang — lakuin ${habitName} hari ini!`;
  }
  return `Udah lakuin "${habitName}" hari ini? Jangan skip — consistency is the cheat code! ⚡`;
}

function sendPushNotif(title, body) {
  if (Notification.permission !== 'granted') return;
  const n = new Notification(title, {
    body,
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/72x72/1f501.png',
    badge: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/72x72/1f501.png',
    tag: 'fixyourloop-daily',
    renotify: true
  });
  n.onclick = () => { window.focus(); n.close(); };
}

function scheduleNextNotif(time) {
  const [h, m] = time.split(':').map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  const ms = next - now;

  if (window._notifTimer) clearTimeout(window._notifTimer);

  window._notifTimer = setTimeout(() => {
    const s = loadNotifSettings();
    if (!s.enabled) return;

    const habits = HABITS_BY_TYPE[resultType];
    const habit = selectedHabit !== null && habits ? habits[selectedHabit] : null;
    const habitName = habit ? habit.name : 'habit lo';
    const todayIdx = getTodayIndex();
    const alreadyDone = trackerData[todayIdx] === 'done';

    if (!alreadyDone) {
      const msg = getNotifMessage(habitName);
      sendPushNotif('⚡ Fix Your Loop', msg);
      showToast(
        '⚡ REMINDER HARIAN',
        `Udah lakuin "${habitName}" hari ini? Jangan skip!`,
        [
          { label: 'MARK DONE ✓', fn: `markTodayDone(); dismissToast(this);`, primary: true },
          { label: 'NANTI', fn: 'dismissToast(this)' }
        ],
        0
      );
    }

    scheduleNextNotif(s.time);
  }, ms);
}

function markTodayDone() {
  const todayIdx = getTodayIndex();
  if (trackerData[todayIdx] !== 'done') {
    trackerData[todayIdx] = 'done';
    saveProgress();
    if (document.getElementById('days-grid')) renderTracker();
    showToast('✅ DONE!', 'Hari ini tercatat. Streak terus jalan! 🔥', [], 3000);
  }
}

function initNotifSchedule() {
  const s = loadNotifSettings();
  if (s.enabled && Notification.permission === 'granted') {
    scheduleNextNotif(s.time || '08:00');
  }
  if (s.reminderType) { reminderType = s.reminderType; }

  document.addEventListener('change', (e) => {
    if (e.target.id === 'notif-time') {
      const s2 = loadNotifSettings();
      if (s2.enabled) {
        s2.time = e.target.value;
        saveNotifSettings(s2);
        scheduleNextNotif(s2.time);
        showToast('🕐 WAKTU DIUBAH', `Reminder diperbarui ke jam ${s2.time}.`, [], 2500);
      }
    }
    if (e.target.id === 'notif-time-result') {
      const s2 = loadNotifSettings();
      if (s2.enabled) {
        s2.time = e.target.value;
        saveNotifSettings(s2);
        scheduleNextNotif(s2.time);
        showToast('🕐 WAKTU DIUBAH', `Reminder diperbarui ke jam ${s2.time}.`, [], 2500);
        updateResultNotifPanel();
      }
    }
  });
}

// ─── INITIALIZE ───────────────────────────────────────────────────────────────

checkResumeBanner();
updateNotifUI();
initNotifSchedule();

