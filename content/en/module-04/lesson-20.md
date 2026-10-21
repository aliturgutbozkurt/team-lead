# Lesson 20: Modern Pull Request Architecture: Multi-Tiered AI Reviews vs. Human Eyes

> **Module 4: Architectural Stewardship & AI Code Quality** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Executive Summary & Mindset Shift
Liberating engineers from syntax nitpicking in PRs: Designing multi-tiered review pipelines where AI handles style, security, and edge cases, leaving humans to evaluate business logic.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Airport security screening: Bags pass through high-speed X-ray scanners (AI review bots) that instantly flag prohibited liquids and contraband. The passport officer (Human Engineer) assesses passenger identity and travel intent. Having the border officer dig through laundry to count socks manually is pure waste.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **PR İnceleme Süresi** | PR'ın 4 gün boyunca listede bekleyip unutulması. | AI botunun ilk 60 saniyede inceleme yapması, insanın 20 dakikada onaylaması. |
| **İnceleme İçeriği** | Yorumların %80'inin formatlama, isimlendirme ve küçük detaylar olması. | Formatlamayı botun düzeltmesi; insanların sadece domain mimarisine odaklanması. |
| **PR Boyutu** | 80 dosyalık devasa PR'lar ('Looks Good To Me' deyip geçilirdi). | Maksimum 250 satırlık küçük, atomik ve AI özetli PR standartı. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Two-Tier Review Architecture: Tier 1: Static analysis + AI Reviewer (CodeRabbit / Copilot). Tier 2: Human domain peer.
- 2. Block on Automated Verdict: Humans are shielded from reviewing PRs until all AI safety, mutation, and style checks pass green.
- 3. The 250-Line Constraint: PRs exceeding 250 lines suffer from rubber-stamping. Require feature-flagged micro-PRs.
- 4. Structured PR Contracts: Authors must include an AI-synthesized impact summary, context checklist, and local verification proof.

---

### 🚨 Real-World War Story / Case Study
At a marketplace startup, average PR turnaround lagged at 4.2 days. Comments were toxic nitpicks: 'indentation is off,' 'rename this variable.' Lead Hakan configured an automated AI review bot and auto-formatter in the GitHub Actions pipeline. Superficial debates evaporated. Review turnaround plummeted to 6 hours, while peer feedback shifted to deep domain questions.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Kıdemli Yazılım Mühendisi Düzeyinde PR İnceleme Botu Promptu
```text
Sen GitHub PR'larını inceleyen kıdemli bir mühendissin. Aşağıdaki git diff çıktısını incele: [GIT DIFF]. Şu kurallara uy: 1) İsimlendirme veya formatlama gibi linter'ın çözeceği şeylere yorum yapma, 2) Olası null-pointer hatalarını, race condition risklerini ve eksik yazılmış test senaryolarını tespit et, 3) Performans darboğazı (N+1 query vb.) var mı belirt, 4) Yorumlarını yapıcı, net ve gerekçeli olarak markdown formatında listele.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 1500 satırlık devasa bir PR'ı 'LGTM' (Looks Good To Me) diyerek hiç bakmadan onaylayan tembel mühendis ile noktalı virgül yüzünden kriz çıkaran pedantik mühendis. AI botlarının code review kültürünü nasıl medenileştirdiğini anlatan eğlenceli bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Code Review Kabusu: Neden PR'lar günlerce bekler?
- 04:20 - İki Kademeli PR Mimarisi: Botlar ve İnsanların Görev Dağılımı
- 08:45 - 250 Satır Kuralı ve Atomik PR Kültürü
- 13:10 - Egzersiz: Takımınızın GitHub reposuna AI Code Reviewer botu bağlayın
