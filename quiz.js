/* =============================================
   CDAC Java Quiz – quiz.js
   Data is loaded from quiz-data-inline.js (QUIZ_DATA constant)
   ============================================= */

/* ---------- State ---------- */
let allQuestions   = [];
let quizQuestions  = [];   // subset for current session
let currentIdx     = 0;
let userAnswers    = [];   // index of chosen option, or -1 if skipped
let answered       = [];   // boolean – has this question been answered?
let correct        = 0;
let wrong          = 0;
let selectedMode   = 'all';
let selectedSection= null;
let sections       = [];

/* ---------- Boot ---------- */
(function init() {
  if (typeof QUIZ_DATA === 'undefined') {
    alert('⚠️ Quiz data not found. Make sure quiz-data-inline.js is in the same folder.');
    return;
  }
  allQuestions = QUIZ_DATA.questions;
  sections     = QUIZ_DATA.sections;
  buildSectionGrid();
})();

/* ---------- Home – section grid ---------- */
function buildSectionGrid() {
  const grid = document.getElementById('section-grid');
  grid.innerHTML = '';
  sections.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = 'section-btn';
    btn.dataset.secId = sec.id;
    btn.onclick = () => toggleSection(btn, sec.id);
    btn.innerHTML = `<strong>Section ${sec.id}</strong><br>${sec.title}<span class="s-range">${sec.range}</span>`;
    grid.appendChild(btn);
  });
}

function selectMode(el, mode) {
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedMode = mode;
  selectedSection = null;
  const picker = document.getElementById('section-picker');
  if (mode === 'section') {
    picker.style.display = 'block';
    // deselect all section buttons
    document.querySelectorAll('.section-btn').forEach(b => b.classList.remove('selected'));
  } else {
    picker.style.display = 'none';
  }
}

function toggleSection(btn, secId) {
  document.querySelectorAll('.section-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSection = secId;
}

/* ---------- Start quiz ---------- */
function startQuiz() {
  if (selectedMode === 'section' && !selectedSection) {
    alert('Please select a section first.');
    return;
  }

  let pool = [...allQuestions];

  if (selectedMode === 'section') {
    pool = pool.filter(q => q.section === selectedSection);
  } else if (selectedMode === 'random50') {
    pool = shuffleArray(pool).slice(0, 50);
  } else if (selectedMode === 'trap') {
    pool = pool.filter(q => q.type === 'Trap');
  }

  if (pool.length === 0) { alert('No questions found for this selection.'); return; }

  quizQuestions = pool;
  currentIdx    = 0;
  userAnswers   = new Array(pool.length).fill(-1);
  answered      = new Array(pool.length).fill(false);
  correct       = 0;
  wrong         = 0;

  showScreen('screen-quiz');
  renderQuestion();
}

/* ---------- Render question ---------- */
function renderQuestion() {
  const quizMain = document.querySelector('.quiz-main');
  if (quizMain) quizMain.scrollTop = 0;

  const q   = quizQuestions[currentIdx];
  const sec = sections.find(s => s.id === q.section);

  // Meta
  document.getElementById('q-number').textContent = `Q${q.id}`;
  const typeEl = document.getElementById('q-type');
  typeEl.textContent = q.type;
  typeEl.className = `q-type ${q.type}`;
  document.getElementById('q-section').textContent = sec ? `Section ${sec.id}` : '';

  // Question text – format code blocks
  document.getElementById('q-text').innerHTML = formatQuestionText(q.question);

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `opt-${i}`;
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${escapeHtml(opt)}</span>`;
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  // Progress
  const total = quizQuestions.length;
  const pct   = ((currentIdx + 1) / total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${currentIdx + 1} / ${total}`;

  // Score pill
  const attempted = answered.filter(Boolean).length;
  document.getElementById('score-pill').textContent = `${correct} / ${attempted}`;

  // Nav buttons
  document.getElementById('btn-prev').disabled = currentIdx === 0;
  document.getElementById('btn-next').textContent = currentIdx === total - 1 ? 'Finish 🏁' : 'Next →';

  // Restore state if already answered
  const expBox = document.getElementById('explanation-box');
  expBox.style.display = 'none';
  expBox.className = 'explanation-box';

  if (answered[currentIdx]) {
    const ua = userAnswers[currentIdx];
    applyAnswerStyles(q, ua, false);
    showExplanation(q, ua);
    disableOptions();
  }
}

/* ---------- Format code in question text ---------- */
function formatQuestionText(text) {
  // Everything after the first blank line that contains code keywords → code block
  const parts = text.split('\n\n');
  if (parts.length <= 1) return escapeHtml(text);

  const prose = escapeHtml(parts[0]);
  const rest  = parts.slice(1).join('\n\n');
  // If rest looks like code, wrap it
  if (/[{};]|System\.|class |int |String |void |\->|\.stream/.test(rest)) {
    return `${prose}<code class="code-block">${escapeHtml(rest)}</code>`;
  }
  return escapeHtml(text);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ---------- Select answer ---------- */
function selectAnswer(optIdx) {
  if (answered[currentIdx]) return;

  const q = quizQuestions[currentIdx];
  answered[currentIdx]    = true;
  userAnswers[currentIdx] = optIdx;

  if (optIdx === q.answer) correct++;
  else wrong++;

  applyAnswerStyles(q, optIdx, true);
  showExplanation(q, optIdx);
  disableOptions();

  // Update score pill
  const attempted = answered.filter(Boolean).length;
  document.getElementById('score-pill').textContent = `${correct} / ${attempted}`;
}

function applyAnswerStyles(q, userOpt, animate) {
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === q.answer) {
      btn.classList.add('correct');
    } else if (i === userOpt && userOpt !== q.answer) {
      btn.classList.add('wrong');
    }
  });
}

function disableOptions() {
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
}

function showExplanation(q, userOpt) {
  const box   = document.getElementById('explanation-box');
  const icon  = document.getElementById('exp-icon');
  const title = document.getElementById('exp-title');
  const text  = document.getElementById('exp-text');

  const isCorrect = (userOpt === q.answer);
  box.className  = 'explanation-box ' + (isCorrect ? 'correct-exp' : 'wrong-exp');
  icon.textContent  = isCorrect ? '✓' : '✗';
  title.textContent = isCorrect ? 'Correct!' : `Wrong — Correct answer: ${['A','B','C','D'][q.answer]}) ${q.options[q.answer]}`;
  title.style.color = isCorrect ? 'var(--green)' : 'var(--red)';
  text.textContent  = q.explanation;
  box.style.display = 'block';

  // Smoothly scroll explanation into view if needed
  setTimeout(() => {
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 60);
}

/* ---------- Navigation ---------- */
function nextQuestion() {
  if (!answered[currentIdx]) {
    // Skip – mark as skipped (userAnswer stays -1)
    answered[currentIdx] = true;
    // Don't increment correct/wrong for skip
    // Update score pill count
    const attempted = answered.filter(Boolean).length;
    document.getElementById('score-pill').textContent = `${correct} / ${attempted}`;
  }
  if (currentIdx < quizQuestions.length - 1) {
    currentIdx++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentIdx > 0) {
    currentIdx--;
    renderQuestion();
  }
}

function exitQuiz() {
  if (confirm('Exit quiz? Your progress will be lost.')) {
    goHome();
  }
}

/* ---------- Results ---------- */
function showResults() {
  showScreen('screen-results');

  const total   = quizQuestions.length;
  const skipped = answered.filter((a, i) => a && userAnswers[i] === -1).length;
  const pct     = Math.round((correct / total) * 100);

  // Trophy / title
  let trophy = '🏆', title = 'Excellent!';
  if (pct >= 85)      { trophy = '🏆'; title = 'Outstanding!'; }
  else if (pct >= 70) { trophy = '🥈'; title = 'Great Job!'; }
  else if (pct >= 50) { trophy = '🥉'; title = 'Good Effort!'; }
  else                { trophy = '📚'; title = 'Keep Practising!'; }
  document.getElementById('results-trophy').textContent = trophy;
  document.getElementById('results-title').textContent  = title;

  // Circle
  document.getElementById('circle-pct').textContent = pct + '%';
  document.getElementById('circle-sub').textContent  = `${correct} / ${total}`;
  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference - (pct / 100) * circumference;
  const arc = document.getElementById('score-circle');
  arc.style.stroke = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
  setTimeout(() => { arc.style.strokeDashoffset = offset; }, 100);

  // Counts
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent   = wrong;
  document.getElementById('res-skipped').textContent = skipped;

  // Section breakdown
  buildSectionBreakdown();
}

function buildSectionBreakdown() {
  const container = document.getElementById('section-breakdown');
  container.innerHTML = '<h3>Section Breakdown</h3>';

  // Group by section
  const secMap = {};
  quizQuestions.forEach((q, i) => {
    if (!secMap[q.section]) secMap[q.section] = { total: 0, correct: 0 };
    secMap[q.section].total++;
    if (answered[i] && userAnswers[i] === q.answer) secMap[q.section].correct++;
  });

  Object.keys(secMap).forEach(secId => {
    const sec = sections.find(s => s.id === +secId);
    const { total, correct: c } = secMap[secId];
    const pct = total ? Math.round((c / total) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'sec-row';
    row.innerHTML = `
      <div class="sec-label">${sec ? 'Sec ' + sec.id + ': ' + sec.title.split(',')[0] : 'Sec ' + secId}</div>
      <div class="sec-bar-wrap"><div class="sec-bar-fill" style="width:0%" data-pct="${pct}"></div></div>
      <div class="sec-pct">${c}/${total}</div>`;
    container.appendChild(row);
  });

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.sec-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 200);
}

/* ---------- Review ---------- */
function reviewQuiz() {
  showScreen('screen-review');
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  quizQuestions.forEach((q, i) => {
    const ua        = userAnswers[i];
    const isCorrect = (ua === q.answer);
    const isSkipped = (ua === -1);
    const letters   = ['A','B','C','D'];

    const item = document.createElement('div');
    item.className = `review-item ${isSkipped ? 'rv-skip' : isCorrect ? 'rv-correct' : 'rv-wrong'}`;

    let ansHtml = '';
    if (!isSkipped) {
      if (isCorrect) {
        ansHtml = `<div class="rv-ans rv-user-correct">✓ ${letters[ua]}) ${escapeHtml(q.options[ua])}</div>`;
      } else {
        ansHtml = `
          <div class="rv-ans rv-user-wrong">✗ Your answer: ${letters[ua]}) ${escapeHtml(q.options[ua])}</div>
          <div class="rv-ans rv-show-correct">✓ Correct: ${letters[q.answer]}) ${escapeHtml(q.options[q.answer])}</div>`;
      }
    } else {
      ansHtml = `
        <div class="rv-ans rv-show-correct" style="background:rgba(245,158,11,.1);color:#fbbf24">⏭ Skipped</div>
        <div class="rv-ans rv-show-correct">✓ Correct: ${letters[q.answer]}) ${escapeHtml(q.options[q.answer])}</div>`;
    }

    item.innerHTML = `
      <div class="rv-header">
        <span class="rv-num">Q${q.id}</span>
        <span class="q-type ${q.type}" style="font-size:.68rem">${q.type}</span>
        <span class="rv-status ${isSkipped ? 'skip' : isCorrect ? 'correct' : 'wrong'}">${isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Wrong'}</span>
      </div>
      <div class="rv-q">${formatQuestionText(q.question)}</div>
      <div class="rv-answers">${ansHtml}</div>
      <div class="rv-exp">💡 ${escapeHtml(q.explanation)}</div>`;
    list.appendChild(item);
  });
}

function backToResults() {
  showScreen('screen-results');
}

/* ---------- Utils ---------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  showScreen('screen-home');
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Keyboard shortcuts ---------- */
document.addEventListener('keydown', e => {
  const quizActive = document.getElementById('screen-quiz').classList.contains('active');
  if (!quizActive) return;

  if (['1','2','3','4'].includes(e.key)) {
    const idx = +e.key - 1;
    const btn = document.getElementById(`opt-${idx}`);
    if (btn && !btn.disabled) btn.click();
  }
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    nextQuestion();
  }
  if (e.key === 'ArrowLeft') {
    if (currentIdx > 0) prevQuestion();
  }
});
