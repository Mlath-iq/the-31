'use strict';

/* ══════════════════════════════════════════════════════════════════════
   هنا تكدر تغيّر لغز الدخول وألغاز الصور والأجوبة والتلميحات بكل سهولة.
   كل صورة اسمها images/img1.jpg ... إلى images/img31.jpg
   answer = الجواب الصحيح / alternatives = أجوبة بديلة مقبولة
   الصورة التالية ما تفتح إلا بعد كتابة الجواب الصحيح.
   ══════════════════════════════════════════════════════════════════════ */
const GATE = {
  question: 'شنو الاسم اللي من أسمعه يصير يومي أحلى؟',
  answer: 'إيلان',
  alternatives: ['ايلان', 'Eilan', 'eilaan'],
  hint: 'أول حرف من اسمج... وبقية الحروف ساكنة بگلبي ♡'
};

const PUZZLES = [
  { question: 'شنو اكثر شغلة حلوة بهاي الصورة؟', answer: 'اني', alternatives: ['ايلان'], hint: 'شخص منور كل حياتي' },

  { question: 'شنو اكثر شي يغورني بهاي الصورة؟', answer: 'وكاحتي', alternatives: ['الورا'], hint: 'اكثر شي احبة اشوفة اني' },

  { question: 'شنو اكثر شي احبة بهاي الصورة؟', answer: 'تراكي', alternatives: ['التراك'], hint: 'لابستة' },

  { question: 'شنو الي يخلي هذا اللبس وكح؟', answer: 'جتفي', alternatives: ['الجتف'], hint: 'شي طالع منج' },

  { question: 'شنو الي يخلي هاي الصورة فخمة؟', answer: 'الفيالة', alternatives: ['الفيل'], hint: 'موجود ع الطبلة' },

  { question: 'شنو الي يخليني احب هاي الصورة؟', answer: 'شعري', alternatives: ['الشعر'], hint: 'سرح كلش وعبود يحبة'},

  { question: 'شنو الشي الي عبود ما قبل علي بهاي الصورة؟', answer: 'الجينز', alternatives: ['البنطرون'], hint: 'ردتي تلبسي' },

  { question: 'شنو الشي الي عبود يحبة بهاي الصورة', answer: 'الجيم', alternatives: ['GYM'], hint: 'مكان انتِ بي' },

  { question: 'شنو الي احبة بهاي الصورة؟', answer: 'عيوني', alternatives: ['عيني'], hint: 'احب اشوفة دائماً ويسحرني' },

  { question: 'شنو اكثر شي اشوفة بيج بهل صورة؟', answer: 'بيضة', alternatives: ['بياضي'], hint: 'لون بشرتج' },

  { question: 'شنو اكثر جنسية احبهة بيج هنا؟', answer: 'كردية', alternatives: ['سليمانية'], hint: 'جنسية مو عربية واني احبهة' },

  { question: 'شنو حبيت بهل صورة؟', answer: 'شعري', alternatives: ['الشعر'], hint: 'فد شي عبود يحب يخلي على وجهة' },

  { question: 'شنو اكثر شي حلو بيج بهاي الصورة', answer: 'ريالية', alternatives: ['مدريد', 'ريال'], hint: 'فريقي المفضل' },

  { question: 'شنو اكثر شي حبيتة بهاي الصورة؟', answer: 'اضافرد', alternatives: ['اضافري', 'اضافيري'], hint: 'شي تغيري كل فترة' },

  { question: 'اول شي عبود باوع علي بهل صورة؟', answer: 'الشفايف', alternatives: ['شفايفي', 'شفتي'], hint: 'شي ينباس وينعض' },

  { question: 'شنو الشي الناقص بهل صورة؟', answer: 'عيون', alternatives: ['عيني', 'عيوني'], hint: 'احب اباوع علي' },

  { question: 'شنو اكثر شي واضح بهل صورة؟', answer: 'مديرة', alternatives: [ 'مديرة اعمال', 'ادارة اعمال'], hint: 'شنو تخصصج' },

  { question: 'شنو لقبتج بهل صورة؟', answer: 'حنطورة', alternatives: ['حنطورتي'], hint: 'سائقة موستنج' },

  { question: 'شنو خلتني اسوي هل صورة؟', answer: 'تحبني', alternatives: ['تعرف اني بالمعهد', 'احبج'], hint: 'اخذت خطوة ليكدام وسويت شي' },

  { question: 'شنو جان هل يوم بالنسبة الي؟', answer: 'احلا يوم', alternatives: ['فرح', 'متت فرح'], hint: 'جان ----- يوم بحياتي' },

  { question: 'شنو الي يميز هاي الصورة؟', answer: 'الاسود', alternatives: ['السواد'], hint: 'لون شي لابستة' },

  { question: 'شنو اكثر شي حبيتة بهل صورة؟', answer: 'شعري السرح', alternatives: ['اني', 'ايلان'], hint: 'اكثر شي حلو بحياتي' },

  { question: 'شنو اكثر شي عبود يريدة من هاي الصورة؟', answer: 'خصري', alternatives: ['تلزم خصري'], hint: 'شي سويتة اليوم' },

  { question: 'شنو اكثر شي عجبني بهذا الستايل؟', answer: 'عاقل', alternatives: ['عاقلة'], hint: 'احب اشوفج هيج' },

  { question: 'شنو الشي الي يخليني اغار من هل صورة؟', answer: 'جتفي', alternatives: ['الجتف'], hint: 'شي عبود ما يقبل يطلع' },

  { question: 'شلون طالع شعرج هنا؟', answer: 'سرح', alternatives: ['حرير'], hint: 'نوعة' },

  { question: 'شي جذبني بهل صورة؟', answer: 'بتنة', alternatives: ['بنوتتنة','بنتي'], hint: 'شي حيصير عدنة بالمستقبل' },

  { question: 'شنو اكثر شي بهل صورة؟', answer: 'سوية', alternatives: ['وكفتنة سوة', 'US'], hint:  'شنو جنة هنا نسوي' },

  { question: 'شنو احلا شي بهل صورة؟', answer: 'وكاحتي', alternatives: ['وكاحة'], hint: 'شي اني اعشقة بيج' },

  { question: 'شنو اول شي شفتة بهل صورة؟', answer: 'صدري', alternatives: ['اضافري', 'الاسود'], hint: 'شي وكح بيج وعبود يريدة' },

  { question: 'شي ضوجني بهل صورة؟', answer: 'الفيب', alternatives: ['فيب'], hint: 'شي جنتي تحبي وعبود منعج منة' }
];

const STORAGE_KEY = 'eilan-31-secret-puzzles-v1';
const $ = id => document.getElementById(id);
const intro = $('intro');
const journey = $('journey');
const finale = $('finale');
const currentPhoto = $('current-photo');
const photoPlaceholder = $('photo-placeholder');
const puzzleInput = $('puzzle-answer');
const gateInput = $('gate-answer');

let state = { gate: false, solved: 0, current: 0 };
let loadToken = 0;

function normalizeArabic(input) {
  return String(input || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\u064b-\u065f\u0670\u0640]/g, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}]/gu, '');
}
function isRight(value, puzzle) {
  const normalized = normalizeArabic(value);
  return Boolean(normalized) && [puzzle.answer, ...(puzzle.alternatives || [])].some(a => normalizeArabic(a) === normalized);
}
function writeState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) { /* يعمل حتى لو التخزين ممنوع */ }
}
function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === 'object') {
      const solved = Number.isInteger(saved.solved) ? Math.min(31, Math.max(0, saved.solved)) : 0;
      const current = Number.isInteger(saved.current) ? Math.min(30, Math.max(0, saved.current)) : 0;
      state = { gate: saved.gate === true, solved, current: Math.min(current, solved) };
    }
  } catch (_) { /* أول زيارة */ }
}
function showScreen(id) {
  intro.hidden = id !== 'intro';
  journey.hidden = id !== 'journey';
  finale.hidden = id !== 'finale';
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function showMessage(el, text, success = false) {
  el.textContent = text;
  el.classList.toggle('success', success);
}
function setPhoto(index) {
  const token = ++loadToken;
  const path = `images/img${index + 1}.jpg`;
  const number = String(index + 1).padStart(2, '0');
  photoPlaceholder.hidden = false;
  $('placeholder-number').textContent = number;
  photoPlaceholder.querySelector('small').textContent = `ضيفي الصورة باسم img${index + 1}.jpg داخل مجلد images`;
  currentPhoto.classList.remove('loaded');
  currentPhoto.alt = `الصورة رقم ${index + 1} من صور إيلان`;
  currentPhoto.onload = () => {
    if (token !== loadToken) return;
    currentPhoto.classList.add('loaded');
    photoPlaceholder.hidden = true;
  };
  currentPhoto.onerror = () => {
    if (token !== loadToken) return;
    currentPhoto.classList.remove('loaded');
    photoPlaceholder.hidden = false;
  };
  currentPhoto.src = path;
}
function renderPhoto() {
  if (state.solved >= PUZZLES.length) { showScreen('finale'); return; }
  const index = state.current;
  const puzzle = PUZZLES[index];
  const no = String(index + 1).padStart(2, '0');
  $('chapter-num').textContent = no;
  $('photo-stamp-num').textContent = no;
  $('photo-riddle-num').textContent = no;
  $('puzzle-num').textContent = no;
  $('puzzle-question').textContent = puzzle.question;
  $('percent').textContent = Math.round(100 * state.solved / 31) + '%';
  $('progress-fill').style.width = (100 * state.solved / 31) + '%';
  const track = document.querySelector('.progress-track');
  track.setAttribute('aria-valuenow', String(state.solved));
  $('hint-text').textContent = puzzle.hint;
  $('hint-text').hidden = true;
  $('back-btn').disabled = index === 0;
  $('unlock-next').innerHTML = index === 30 ? 'افتحي الرسالة الأخيرة <span>←</span>' : 'افتحي الصورة الجاية <span>←</span>';
  puzzleInput.value = '';
  showMessage($('puzzle-message'), '');
  setPhoto(index);
  showScreen('journey');
  writeState();
}
function enterJourney() {
  state.gate = true;
  state.current = 0;
  writeState();
  renderPhoto();
}
$('gate-question').textContent = GATE.question;
$('gate-hint').textContent = GATE.hint;
$('gate-form').addEventListener('submit', event => {
  event.preventDefault();
  if (isRight(gateInput.value, GATE)) {
    showMessage($('gate-message'), 'صح! تستاهلين كل هالمفاجآت ♡', true);
    enterJourney();
  } else {
    showMessage($('gate-message'), 'مو هذا الجواب حبيبتي، فكّري شوي أو خذي تلميح ♡');
  }
});
$('gate-hint-btn').addEventListener('click', () => { $('gate-hint').hidden = !$('gate-hint').hidden; });
$('puzzle-form').addEventListener('submit', event => {
  event.preventDefault();
  const puzzle = PUZZLES[state.current];
  if (!isRight(puzzleInput.value, puzzle)) {
    showMessage($('puzzle-message'), 'قريبة؟ جرّبي جواب ثاني أو افتحي التلميح ♡');
    return;
  }
  showMessage($('puzzle-message'), 'صح يا روحي! فتحتي سرّ جديد ♡', true);
  state.solved = Math.max(state.solved, state.current + 1);
  state.current += 1;
  writeState();
  if (state.current >= PUZZLES.length) {
    showScreen('finale');
  } else {
    renderPhoto();
  }
});
$('hint-btn').addEventListener('click', () => { $('hint-text').hidden = !$('hint-text').hidden; });
$('back-btn').addEventListener('click', () => {
  if (state.current > 0) { state.current--; renderPhoto(); }
});
function restartJourney() {
  if (!window.confirm('متأكد تريد ترجع كل الرحلة من أول لغز؟ راح ينمسح تقدمك المحفوظ.')) return;
  state = { gate: false, solved: 0, current: 0 };
  writeState();
  gateInput.value = '';
  $('gate-hint').hidden = true;
  showMessage($('gate-message'), '');
  showScreen('intro');
}
$('restart').addEventListener('click', restartJourney);
$('play-again').addEventListener('click', restartJourney);
readState();
if (!state.gate) showScreen('intro');
else if (state.solved >= PUZZLES.length) showScreen('finale');
else renderPhoto();
