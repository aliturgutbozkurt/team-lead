# Lesson 21: Zero-Friction ADRs & RFC Consensus with LLMs

> **Module 4: Architectural Stewardship & AI Code Quality** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Curing collective amnesia: 'Why on earth did we pick this DB 2 years ago?' Drafting friction-free Architecture Decision Records (ADRs) and driving team RFC alignment via AI.

---

### 💡 ELI5 Metaphor & Intuitive Story
> A ship captain logs in the journal: 'Veered 20 degrees south to dodge hurricane alpha.' Two years later, a relief captain understands the maneuver immediately. An ADR is your software's nautical log; it explains trade-offs to your future self.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Karar Belgeleme** | Kararın Slack konuşmalarında kaybolup gitmesi, kimsenin hatırlamaması. | Karar anında 10 dakikada AI ile şablon doldurulup repoya markdown olarak commit'lenmesi. |
| **Format** | Kimsenin okumadığı 40 sayfalık ağır Confluence belgeleri. | 1 sayfalık net ADR: Bağlam (Context), Karar (Decision), Sonuçlar (Consequences). |
| **Geri Bildirim** | Mühendislerin çekinip fikir belirtmemesi. | RFC taslağını LLM'e verip 'Bu mimarideki 3 gizli riski bul' diyerek tartışmayı açmak. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Universal ADR Schema: Status (Proposed/Accepted), Context, Decision, Positive & Negative Consequences.
- 2. Keep Docs Adjacent to Code: Ban isolated Confluence graveyards; persist ADRs as Markdown files inside `/docs/adr/` in the Git repo.
- 3. Rapid Synthesis via LLM: Paste messy Slack technical debates into Claude: 'Distill this debate into a clean 1-page ADR.'
- 4. Lightweight RFC Alignment: Open a 5-day RFC pull request for major domain pivots; solicit peer critiques before writing implementation code.

---

### 🚨 Real-World War Story / Case Study
An incoming staff architect looked at a payment gateway and scoffed: 'Why are they using Mongo alongside Postgres? Amateurs.' He led a 4-month rewrite. System melted on launch day because Mongo had been specifically selected for distributed geographical sharding—a nuance buried in deleted Slack channels. Lead Tarik enforced the ADR law: 'No architecture choice exists without an ADR commit.'

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Tartışma Metninden Otomatik ADR (Architecture Decision Record) Oluşturucu
```text
Biz modern bir mikroservis ekibiyiz. Ekip olarak şu konuda karar aldık: [KARAR DETAYI VE NEDENLERİ]. Bu kararı profesyonel bir Architecture Decision Record (ADR) haline getir. Şu başlıkları içersin: 1) Title & Status, 2) Context & Problem Statement, 3) Decision Outcome, 4) Positive Consequences, 5) Negative Consequences & Trade-offs, 6) Pros & Cons of Alternative Options.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Eski projeyi devralıp 'Bunu yazan ne düşünmüş olabilir?' diye saçını başını yolan yazılımcı ile ADR kültürünün gücünü anlatan lider. Kurumsal hafıza kaybının şirketlere maliyeti ve yapay zeka ile 5 dakikada ADR yazma yöntemleri.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Kurumsal Hafıza Kaybı: Şirketler Neden Aynı Hataları Tekrarlar?
- 04:10 - 1 Sayfalık Kusursuz ADR Mimarisi
- 08:35 - Slack Tartışmasını AI ile ADR'a Dönüştürme Demosu
- 13:20 - Egzersiz: Takımınızın son mimari kararını ADR formatında yazıp repoya commit'leyin
