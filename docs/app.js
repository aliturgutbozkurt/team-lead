/**
 * AI-Driven Software Team Lead - Interactive Application Logic
 * Supports:
 * - Dynamic bilingual switching (Turkish / English)
 * - Full-text instant search & multi-criteria filtering
 * - Interactive Lesson Reader with modal navigation
 * - Copy-to-clipboard for prompts and NotebookLM triggers
 * - Reading progress tracker with localStorage
 * - Dark / Light theme toggle
 */

// Application State
const state = {
  lang: localStorage.getItem('team_lead_lang') || 'tr',
  theme: localStorage.getItem('team_lead_theme') || 'dark',
  activeModule: 'all',
  activeLevel: 'all',
  searchQuery: '',
  currentLessonId: null,
  readLessons: JSON.parse(localStorage.getItem('team_lead_read') || '[]')
};

// UI Translations Dictionary
const I18N = {
  tr: {
    heroBadge: "Sıfırdan Uzmanlığa 60 Ders • 10 Ana Bölüm",
    heroTitle: "AI Çağında Software <span class=\"text-gradient\">Team Lead</span> Olmak",
    heroDesc: "Kod ameleliğinden sistem orkestratörlüğüne: Junior liderlikten çoklu takımları yöneten ve CTO vizyonuna uzanan 60 derslik pratik, esprili ve battle-tested rehber. NotebookLM ve Udemy eğitimi için hazır.",
    btnDownloadPdf: "📥 Türkçe PDF İndir (3.7 MB)",
    btnDownloadEnPdf: "📥 English PDF (3.2 MB)",
    btnNotebookLm: "🎙️ NotebookLM Podcast Rehberi",
    statLessons: "Ders",
    statModules: "Ana Bölüm",
    statPrompts: "AI Promptu",
    statZeroToHero: "Sıfırdan Uzmanlığa",
    searchPlaceholder: "Ders başlığı, kavram veya vaka ara...",
    filterModuleAll: "Tüm Bölümler (1 - 10)",
    filterLevelAll: "Tüm Seviyeler",
    curriculumTitle: "Müfredat ve Ders Kataloğu",
    resultsText: "ders listeleniyor",
    readLessonBtn: "Dersi Oku",
    copiedToast: "Prompt panoya kopyalandı! 📋",
    markAsRead: "Okundu Olarak İşaretle",
    markAsUnread: "Okunmadı Yap",
    prevLesson: "← Önceki Ders",
    nextLesson: "Sonraki Ders →",
    notebookLmModalTitle: "🎙️ NotebookLM ile 2 Sunuculu Podcast Oluşturma Rehberi",
    notebookLmStep1: "1. Google NotebookLM'e (notebooklm.google.com) gidin ve yeni bir not defteri açın.",
    notebookLmStep2: "2. 'Kaynak Ekle' butonuna basarak kitaplığımızdaki Markdown veya PDF kitabını yükleyin.",
    notebookLmStep3: "3. 'Audio Overview' (Sesli Genel Bakış) bölümüne gelin ve her dersin sonundaki özel tartışma komutunu yapıştırın.",
    notebookLmStep4: "4. 'Generate' butonuna basın: İki yapay zeka sunucusu Udemy öğrencilerini büyüleyecek harika bir podcast üretsin!"
  },
  en: {
    heroBadge: "Zero to Hero • 60 Lessons • 10 Core Modules",
    heroTitle: "AI-Driven Software <span class=\"text-gradient\">Team Lead</span> Handbook",
    heroDesc: "From syntax monkey to system orchestrator: A comprehensive, witty, battle-tested 60-lesson playbook guiding you from awkward first-time lead to Staff+ scaling and the CTO seat. NotebookLM & Udemy ready.",
    btnDownloadPdf: "📥 English PDF Download (3.2 MB)",
    btnDownloadEnPdf: "📥 Türkçe PDF (3.7 MB)",
    btnNotebookLm: "🎙️ NotebookLM Podcast Guide",
    statLessons: "Lessons",
    statModules: "Modules",
    statPrompts: "AI Prompts",
    statZeroToHero: "Zero to Hero",
    searchPlaceholder: "Search lessons, concepts, or case studies...",
    filterModuleAll: "All Modules (1 - 10)",
    filterLevelAll: "All Seniority Levels",
    curriculumTitle: "Curriculum & Lesson Catalog",
    resultsText: "lessons displayed",
    readLessonBtn: "Read Lesson",
    copiedToast: "Prompt copied to clipboard! 📋",
    markAsRead: "Mark as Completed",
    markAsUnread: "Mark as Unread",
    prevLesson: "← Previous Lesson",
    nextLesson: "Next Lesson →",
    notebookLmModalTitle: "🎙️ Generating 2-Host Deep-Dive Audio with NotebookLM",
    notebookLmStep1: "1. Open Google NotebookLM (notebooklm.google.com) and create a new notebook.",
    notebookLmStep2: "2. Click 'Add Source' and upload our consolidated Markdown or PDF book.",
    notebookLmStep3: "3. Under 'Audio Overview', paste the tailored discussion steering prompt from any lesson.",
    notebookLmStep4: "4. Hit 'Generate': Two virtual AI hosts will synthesize an entertaining, studio-grade lecture for your Udemy audience!"
  }
};

// DOM Elements
const elements = {
  html: document.documentElement,
  themeToggle: document.getElementById('themeToggle'),
  langToggle: document.getElementById('langToggle'),
  searchInput: document.getElementById('searchInput'),
  moduleFilter: document.getElementById('moduleFilter'),
  levelFilter: document.getElementById('levelFilter'),
  lessonsGrid: document.getElementById('lessonsGrid'),
  resultsCount: document.getElementById('resultsCount'),
  lessonModal: document.getElementById('lessonModal'),
  modalBody: document.getElementById('modalBody'),
  modalClose: document.getElementById('modalClose'),
  prevLessonBtn: document.getElementById('prevLessonBtn'),
  nextLessonBtn: document.getElementById('nextLessonBtn'),
  markReadBtn: document.getElementById('markReadBtn'),
  notebookLmModal: document.getElementById('notebookLmModal'),
  notebookLmBtn: document.getElementById('notebookLmBtn'),
  notebookLmClose: document.getElementById('notebookLmClose'),
  toast: document.getElementById('toast')
};

// Initialize Application
function init() {
  applyTheme(state.theme);
  updateLanguageUI();
  populateFilterOptions();
  renderLessons();
  setupEventListeners();
}

// Apply Theme
function applyTheme(theme) {
  state.theme = theme;
  elements.html.setAttribute('data-theme', theme);
  localStorage.setItem('team_lead_theme', theme);
  elements.themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Update Language UI Elements
function updateLanguageUI() {
  const t = I18N[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
  if (elements.searchInput) elements.searchInput.placeholder = t.searchPlaceholder;
  if (elements.langToggle) elements.langToggle.innerText = state.lang === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR';
  localStorage.setItem('team_lead_lang', state.lang);
}

// Populate Module Options
function populateFilterOptions() {
  const t = I18N[state.lang];
  elements.moduleFilter.innerHTML = `<option value="all">${t.filterModuleAll}</option>`;
  
  for (let i = 1; i <= COURSE_DATA.total_modules; i++) {
    const sampleLesson = COURSE_DATA.lessons.find(l => l.module_id === i);
    const modTitle = state.lang === 'tr' ? sampleLesson.module_title_tr : sampleLesson.module_title_en;
    const opt = document.createElement('option');
    opt.value = i;
    opt.innerText = modTitle;
    elements.moduleFilter.appendChild(opt);
  }
}

// Filter and Search Lessons
function getFilteredLessons() {
  return COURSE_DATA.lessons.filter(l => {
    // Module Filter
    if (state.activeModule !== 'all' && l.module_id !== parseInt(state.activeModule)) {
      return false;
    }
    
    // Level Filter
    if (state.activeLevel !== 'all') {
      const lvl = l.level.toLowerCase();
      if (!lvl.includes(state.activeLevel.toLowerCase())) return false;
    }
    
    // Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const inTr = l.title_tr.toLowerCase().includes(q) || l.summary_tr.toLowerCase().includes(q) || l.eli5_metaphor_tr.toLowerCase().includes(q);
      const inEn = l.title_en.toLowerCase().includes(q) || l.summary_en.toLowerCase().includes(q) || l.eli5_metaphor_en.toLowerCase().includes(q);
      if (!inTr && !inEn) return false;
    }
    
    return true;
  });
}

// Render Lesson Cards
function renderLessons() {
  const filtered = getFilteredLessons();
  const t = I18N[state.lang];
  elements.resultsCount.innerText = `${filtered.length} / ${COURSE_DATA.total_lessons} ${t.resultsText}`;
  
  if (filtered.length === 0) {
    elements.lessonsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">🔍 ${state.lang === 'tr' ? 'Eşleşen ders bulunamadı' : 'No matching lessons found'}</p>
        <p style="font-size: 0.9rem;">${state.lang === 'tr' ? 'Lütfen arama teriminizi veya filtreleri değiştirin.' : 'Try adjusting your search query or filters.'}</p>
      </div>
    `;
    return;
  }
  
  elements.lessonsGrid.innerHTML = filtered.map(l => {
    const isTr = state.lang === 'tr';
    const title = isTr ? l.title_tr : l.title_en;
    const summary = isTr ? l.summary_tr : l.summary_en;
    const modTitle = isTr ? l.module_title_tr : l.module_title_en;
    const isRead = state.readLessons.includes(l.id);
    
    let levelClass = 'beginner';
    if (l.level.includes('Mid')) levelClass = 'mid';
    if (l.level.includes('İleri') || l.level.includes('Advanced')) levelClass = 'advanced';
    if (l.level.includes('Yönetici') || l.level.includes('Director')) levelClass = 'executive';
    
    return `
      <article class="lesson-card" onclick="openLessonModal(${l.id})">
        <div>
          <div class="card-top">
            <span class="lesson-badge ${levelClass}">${l.level}</span>
            <span class="module-tag">${modTitle.split(':')[0]}</span>
          </div>
          <h3 class="lesson-card-title">${title}</h3>
          <p class="lesson-card-desc">${summary}</p>
        </div>
        <div class="card-footer">
          <div class="card-meta">
            <span class="meta-pill">💡 ELI5</span>
            <span class="meta-pill">🛠️ ${l.ai_prompts.length} Prompts</span>
            ${isRead ? '<span class="meta-pill" style="color: var(--accent-emerald);">✓ Read</span>' : ''}
          </div>
          <span class="read-btn">${t.readLessonBtn} →</span>
        </div>
      </article>
    `;
  }).join('');
}

// Open Lesson Detail Modal
window.openLessonModal = function(id) {
  const lesson = COURSE_DATA.lessons.find(l => l.id === id);
  if (!lesson) return;
  
  state.currentLessonId = id;
  const isTr = state.lang === 'tr';
  const t = I18N[state.lang];
  
  const title = isTr ? lesson.title_tr : lesson.title_en;
  const modTitle = isTr ? lesson.module_title_tr : lesson.module_title_en;
  const summary = isTr ? lesson.summary_tr : lesson.summary_en;
  const eli5 = isTr ? lesson.eli5_metaphor_tr : lesson.eli5_metaphor_en;
  const steps = isTr ? lesson.framework_steps_tr : lesson.framework_steps_en;
  const caseStudy = isTr ? lesson.case_study_tr : lesson.case_study_en;
  const isRead = state.readLessons.includes(lesson.id);
  
  // Comparison Table HTML
  const colTopic = isTr ? "Konu" : "Topic";
  const colOld = isTr ? "Eski Usul (Legacy Lead)" : "The Legacy Way";
  const colAi = isTr ? "AI Destekli Modern Yaklaşım" : "The AI-Driven Way";
  
  const tableRows = lesson.comparison_table.map(r => `
    <tr>
      <td><strong>${r.topic}</strong></td>
      <td style="color: #f87171;">${r.old_way}</td>
      <td style="color: #4ade80;">${r.ai_way}</td>
    </tr>
  `).join('');
  
  // Framework Steps HTML
  const stepsHtml = steps.map((s, idx) => `
    <div class="step-item">
      <div class="step-num">${idx + 1}</div>
      <div class="step-text">${s}</div>
    </div>
  `).join('');
  
  // Prompts HTML
  const promptsHtml = lesson.ai_prompts.map(p => `
    <div class="prompt-card">
      <div class="prompt-card-header">
        <span class="prompt-card-title">🛠️ ${p.title}</span>
        <button class="btn btn-secondary btn-sm" onclick="copyText(event, ${JSON.stringify(p.prompt)})">Copy Prompt 📋</button>
      </div>
      <pre class="prompt-code">${escapeHtml(p.prompt)}</pre>
    </div>
  `).join('');
  
  // Udemy Outline HTML
  const udemyHtml = lesson.udemy_outline.map(u => `
    <li class="udemy-item">
      <span>⏱️</span>
      <span>${u}</span>
    </li>
  `).join('');
  
  elements.modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="lesson-badge">${lesson.level}</span>
      <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 10px;">${modTitle}</span>
    </div>
    <h2 class="modal-title">${title}</h2>
    
    <!-- Summary -->
    <div class="reader-section">
      <h4 class="reader-section-title">📌 ${isTr ? 'Kısa Özet & Zihniyet Değişimi' : 'Executive Summary & Mindset Shift'}</h4>
      <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7;">${summary}</p>
    </div>

    <!-- ELI5 Metaphor -->
    <div class="reader-section">
      <h4 class="reader-section-title">💡 ${isTr ? 'Aptala Anlatır Gibi (ELI5) Hikaye & Analoji' : 'ELI5 Metaphor & Intuitive Analogy'}</h4>
      <div class="eli5-box">${eli5}</div>
    </div>

    <!-- Comparison Table -->
    <div class="reader-section">
      <h4 class="reader-section-title">⚖️ ${isTr ? 'Eski Usul vs. AI Destekli Yaklaşım' : 'The Legacy Way vs. The AI-Driven Way'}</h4>
      <div class="comparison-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>${colTopic}</th>
              <th>${colOld}</th>
              <th>${colAi}</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Actionable Framework -->
    <div class="reader-section">
      <h4 class="reader-section-title">🚀 ${isTr ? 'Adım Adım Uygulama Çerçevesi' : 'Step-by-Step Actionable Framework'}</h4>
      <div class="steps-list">
        ${stepsHtml}
      </div>
    </div>

    <!-- Real-World War Story -->
    <div class="reader-section">
      <h4 class="reader-section-title">🚨 ${isTr ? 'Gerçek Hayat Kriz / Vaka Analizi' : 'Real-World War Story / Case Study'}</h4>
      <div class="case-box">${caseStudy}</div>
    </div>

    <!-- Production AI Prompts -->
    <div class="reader-section">
      <h4 class="reader-section-title">🤖 ${isTr ? 'Kullanıma Hazır AI Promptları & Şablonlar' : 'Battle-Tested AI Prompts & Templates'}</h4>
      ${promptsHtml}
    </div>

    <!-- NotebookLM Podcast Prompt -->
    <div class="reader-section">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h4 class="reader-section-title" style="margin-bottom: 0; border: none;">🎙️ NotebookLM Deep Dive Podcast Prompt</h4>
        <button class="btn btn-primary btn-sm" onclick="copyText(event, ${JSON.stringify(lesson.notebooklm_prompts)})">Copy Podcast Prompt 🎙️</button>
      </div>
      <div class="notebooklm-box">${lesson.notebooklm_prompts}</div>
    </div>

    <!-- Udemy Outline -->
    <div class="reader-section">
      <h4 class="reader-section-title">🎓 ${isTr ? 'Udemy Ders Planı & Takım Egzersizi' : 'Udemy Lecture Blueprint & Action Exercise'}</h4>
      <ul class="udemy-list">
        ${udemyHtml}
      </ul>
    </div>
  `;
  
  // Update Footer buttons
  elements.prevLessonBtn.disabled = (id <= 1);
  elements.nextLessonBtn.disabled = (id >= COURSE_DATA.total_lessons);
  elements.markReadBtn.innerText = isRead ? t.markAsUnread : t.markAsRead;
  
  // Open modal
  elements.lessonModal.style.display = 'flex';
  setTimeout(() => elements.lessonModal.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
};

// Close Modal
function closeLessonModal() {
  elements.lessonModal.classList.remove('active');
  setTimeout(() => {
    elements.lessonModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 250);
}

// Copy to Clipboard with Toast
window.copyText = function(event, text) {
  if (event) event.stopPropagation();
  navigator.clipboard.writeText(text).then(() => {
    showToast(I18N[state.lang].copiedToast);
  });
};

function showToast(msg) {
  elements.toast.innerText = msg;
  elements.toast.classList.add('active');
  setTimeout(() => {
    elements.toast.classList.remove('active');
  }, 2500);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Language Toggle
  elements.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'tr' ? 'en' : 'tr';
    updateLanguageUI();
    populateFilterOptions();
    renderLessons();
    if (state.currentLessonId) {
      openLessonModal(state.currentLessonId);
    }
  });

  // Search Input
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderLessons();
  });

  // Module Filter
  elements.moduleFilter.addEventListener('change', (e) => {
    state.activeModule = e.target.value;
    renderLessons();
  });

  // Level Filter
  elements.levelFilter.addEventListener('change', (e) => {
    state.activeLevel = e.target.value;
    renderLessons();
  });

  // Modal navigation
  elements.modalClose.addEventListener('click', closeLessonModal);
  elements.lessonModal.addEventListener('click', (e) => {
    if (e.target === elements.lessonModal) closeLessonModal();
  });

  elements.prevLessonBtn.addEventListener('click', () => {
    if (state.currentLessonId > 1) {
      openLessonModal(state.currentLessonId - 1);
    }
  });

  elements.nextLessonBtn.addEventListener('click', () => {
    if (state.currentLessonId < COURSE_DATA.total_lessons) {
      openLessonModal(state.currentLessonId + 1);
    }
  });

  elements.markReadBtn.addEventListener('click', () => {
    if (!state.currentLessonId) return;
    const idx = state.readLessons.indexOf(state.currentLessonId);
    if (idx === -1) {
      state.readLessons.push(state.currentLessonId);
    } else {
      state.readLessons.splice(idx, 1);
    }
    localStorage.setItem('team_lead_read', JSON.stringify(state.readLessons));
    renderLessons();
    openLessonModal(state.currentLessonId);
  });

  // NotebookLM Modal
  elements.notebookLmBtn.addEventListener('click', () => {
    elements.notebookLmModal.style.display = 'flex';
    setTimeout(() => elements.notebookLmModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  });

  elements.notebookLmClose.addEventListener('click', () => {
    elements.notebookLmModal.classList.remove('active');
    setTimeout(() => {
      elements.notebookLmModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 250);
  });

  elements.notebookLmModal.addEventListener('click', (e) => {
    if (e.target === elements.notebookLmModal) {
      elements.notebookLmClose.click();
    }
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.lessonModal.classList.contains('active')) closeLessonModal();
      if (elements.notebookLmModal.classList.contains('active')) elements.notebookLmClose.click();
    }
    if (elements.lessonModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft' && state.currentLessonId > 1) {
        openLessonModal(state.currentLessonId - 1);
      }
      if (e.key === 'ArrowRight' && state.currentLessonId < COURSE_DATA.total_lessons) {
        openLessonModal(state.currentLessonId + 1);
      }
    }
  });
}

// Bootstrap on DOM Loaded
document.addEventListener('DOMContentLoaded', init);
