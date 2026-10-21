# Lesson 14: Precision User Stories: AI-Driven Acceptance Criteria & Edge-Case Engines

> **Module 3: Reinventing Agile & Delivery with AI** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Executive Summary & Mindset Shift
Vaporizing vague Jira cards like 'Build user login': Using LLMs to extrapolate obscure edge cases, security failure modes, and Given-When-Then contracts.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Telling a contractor 'build me a nice house' results in a glass roof and no bathroom doors. Writing precision Jira cards means defining tolerances down to the millimeter. AI is your master inspector asking in two seconds: 'What happens when power fails mid-transaction?'

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Kabul Kriteri (AC)** | 1 cümle: 'Kullanıcı şifresini sıfırlayabilmeli.' | Given-When-Then formatında 8 adet sınır durum (rate limit, süresi dolmuş token, brute-force vb.). |
| **Hata Tespiti** | Edge case'leri QA test ederken veya canlı ortamda müşteriler patlayınca öğrenmek. | Bilet yazılırken AI ile 20 olası uç senaryoyu simüle edip tasarım aşamasında engellemek. |
| **Geliştirici Netliği** | Yazılımcının 3 gün boyunca PM'e 'Burada ne demek istediniz?' diye soru sorması. | Bileti alan mühendisin sıfır sürtünmeyle doğrudan koda ve teste başlayabilmesi. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Enforce BDD Given-When-Then: Stories without verifiable behavioral outcomes are rejected before refinement.
- 2. The Edge-Case Gauntlet: Feed the product draft to Claude: 'Uncover 5 malicious failure states and race conditions for this flow.'
- 3. Specify Unhappy Paths: Mandate explicit criteria for network timeouts, 401 unauthorized retries, and database idempotency.
- 4. Atomic Slicing: Slice any card estimated over 3 days into 1-day independently shippable vertical increments via LLM decomposition.

---

### 🚨 Real-World War Story / Case Study
A fintech squad shipped a one-liner ticket: 'Allow users to apply promo coupons.' Devs built the happy path but missed an idempotency race condition: users opened 4 browser tabs and redeemed the coupon 4 times simultaneously, costing the business $45,000 overnight. Lead Selin instituted an AI Edge-Case Pre-flight gate: no card enters active sprints without AI failure-mode analysis. Zero logic loopholes occurred since.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Kusursuz User Story ve Edge-Case Üretici Promptu
```text
Sen dünyanın en titiz Senior Product Owner ve QA Architect'isin. Şu iş gereksinimi için: [GEREKSİNİM]. Bana şunları üret: 1) Net kullanıcı değeri (As a / I want / So that), 2) Given-When-Then formatında 5 mutlu yol ve 5 negatif yol kabul kriteri, 3) Güvenlik, performans ve race condition içeren 3 gizli edge-case, 4) Bu işi en fazla 1 günlük 3 bağımsız alt taska bölme planı.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kullanıcı giriş yapabilmeli' diye 3 kelimelik bilet açan Product Manager ile kafayı yiyen yazılımcı. AI'ın gereksinim yazımını nasıl dönüştürdüğü, edge-case avcılığı ve yazılımcı-ürün barışının sırları üzerine eğlenceli bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Muğlak Biletlerin Gizli Maliyeti: Şirketler Neden Para Kaybeder?
- 04:10 - Given-When-Then Formülünün Gücü
- 08:35 - AI Edge-Case Motoru: Race Condition ve Güvenlik Açıklarını Önceden Yakalamak
- 13:50 - Egzersiz: Kötü yazılmış 3 gerçek Jira biletini AI ile mükemmelleştirin
