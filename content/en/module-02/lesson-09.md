# Lesson 09: Resolving Technical Debates & Ego Clashes with Objective Data

> **Module 2: AI-Powered People Leadership & 1-on-1s** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Executive Summary & Mindset Shift
When senior engineers wage religious architectural wars (REST vs GraphQL, SQL vs NoSQL): defusing ego clashes with matrix trade-offs and AI-guided ADRs.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Allowing two drivers to stop a bus full of passengers to brawl over whether the bus should be painted crimson or navy is unacceptable. The passengers care about arriving safely on time. A lead redirects religious arguments toward objective passenger criteria.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Tartışma Ekseni** | 'Ben 10 yıldır böyle yapıyorum, en doğrusu bu' (Kıdem egosu). | 'Gereksinimlerimiz X, Y, Z. Bu iki yaklaşımın gecikme, maliyet ve bakım metriklerini kıyaslayalım.' |
| **Karar Mekanizması** | Kimin sesi daha çok çıkarsa veya kim daha kıdemliyse onun dediği olur. | AI ile tarafsız bir Trade-off Matrisi çıkarıp Architecture Decision Record (ADR) imzalamak. |
| **Sonuç** | Kaybeden tarafın projeyi pasif-agresif sabote etmesi. | 'Disagree and Commit' ilkesiyle herkesin kararı sahiplenmesi. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Convert Religious Dogma to Trade-off Engineering: Ban subjective debates like 'Which is cleaner?'; ask 'Which satisfies our p99 SLA under our cloud budget?'
- 2. Impartial AI Trade-Off Matrix: Prompt an LLM with both technical proposals and architectural constraints to generate an unbiased scorecard.
- 3. 48-Hour Spike Timebox: End endless Slack debates by assigning a 24-hour POC spike; let benchmark data break the tie.
- 4. Enforce Disagree & Commit: Once an ADR is logged, all parties rally behind the chosen design without lingering passive aggression.

---

### 🚨 Real-World War Story / Case Study
Two lead engineers at a retail platform fought for 3 weeks over REST vs GraphQL, paralyzing client-side progress. Lead Burak intervened: requested a 1-page design brief from each dev, fed both into Claude with their specific mobile bandwidth and edge-caching constraints, and generated an objective comparison matrix. The data made REST with selective fields the obvious victor. Friction evaporated in one afternoon.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Teknik Çatışma Çözücü ve Tarafsız Mimari Karar Matrisi
```text
Takımımda iki kıdemli mühendis şu konuda anlaşmazlığa düştü: [A Seçeneği] vs [B Seçeneği]. Projemizin kısıtları: [Teknoloji yığını, bütçe, ekip deneyimi, beklenen trafik]. Bu iki seçeneği şu kriterlere göre tarafsız bir puanlama tablosu (1-5) ve gerekçeleriyle analiz et: 1) Öğrenme eğrisi, 2) Bakım maliyeti, 3) Performans, 4) Ekip içi riskler. Sonunda bir uzlaşı önerisi getir.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri koyu bir 'Microservices ve Kafka' fanatiği, diğeri fanatik bir 'Modular Monolith' savunucusu. İki egonun çarpışmasını taklit edip araya giren Team Lead'in veriye dayalı analiziyle nasıl uzlaştıklarını kahkahalarla anlatan bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Yazılımcı Egosunun Anatomisi: Kutsal Teknolojik Savaşlar
- 04:15 - 'Disagree and Commit' (Amazon İlkesi) Nasıl Uygulanır?
- 08:30 - AI Destekli ADR (Architecture Decision Record) Hazırlama
- 13:00 - Egzersiz: Takımınızdaki geçmiş bir teknik tartışmayı matrisle yeniden değerlendirin
