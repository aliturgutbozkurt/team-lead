# Lesson 40: Writing Blameless Post-Mortems with AI: Turning Catastrophes into Institutional Wisdom

> **Module 7: Incident Response & Production Resilience** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Moving past primitive scapegoating ('Who broke prod?'): Mastering Google-style blameless post-mortems and synthesizing preventive guardrails via AI.

---

### 💡 ELI5 Metaphor & Intuitive Story
> When a toddler slips on spilled detergent in the kitchen and knocks over an antique vase, screaming at the child achieves nothing. You ask why detergent was left uncapped, why the floor wasn't dried, and why a fragile vase was perched on a wobbly table edge. Blameless culture fixes the floor and the table so failure cannot recur.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Odak Noktası** | 'Hatayı kim yaptı?' (Cadı avı, insanları korkutmak ve hataları gizletmek). | 'Sistemimiz neden bu hatayı engelleyemedi?' (Sistemik ve mimari iyileştirme). |
| **Toplantı Atmosferi** | Mahkeme salonu gibi gergin, herkesin mazeret ürettiği ortam. | Merak ve öğrenme odaklı, herkesin şeffafça süreci incelediği bilimsel laboratuvar. |
| **Çıktı** | Kimsenin okumadığı suçlayıcı bir rapor. | AI ile çıkarılmış net zaman çizelgesi, 5 Neden analizi ve takvimlenmiş 3 önleyici Jira bileti. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Human Error is the Starting Point, Never the Root Cause: 'Dev clicked the wrong button' is trivial. 'Why did our UI allow an unverified production drop?' is the systemic truth.
- 2. Chronological Timeline Reconstruction: Ingest Slack transcripts, git events, and monitoring graphs into a continuous timeline of events.
- 3. AI Post-Mortem Synthesis: Pass raw incident artifacts to Claude to author a structured, blameless Google SRE-grade post-mortem draft.
- 4. Systemic Action Items: Close every post-mortem with financed engineering tickets: mutation guardrails, automated circuit-breakers, or chaos drills.

---

### 🚨 Real-World War Story / Case Study
At a payment company, an intern accidentally executed a drop-table command against a production database, causing a 4-hour blackout. The angry CEO demanded the intern's immediate termination. Lead Derya stood firm: 'If an intern possesses single-click credentials to drop a production database, our architecture is broken, not the intern.' Derya facilitated a blameless post-mortem, introduced IAM role boundaries, and kept the intern. Two years later, that intern became their lead platform security engineer.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Google SRE Tarzı Blameless Post-Mortem ve Zaman Çizelgesi Üretici
```text
Dün gece yaşanan kesintinin ham notları, Slack konuşmaları ve incident logları şunlardır: [NOTLAR VE LOGLAR]. Sen bir Google Principal Site Reliability Engineer'sın. Bu verilerden profesyonel, objektif ve kesinlikle suçlayıcı olmayan (Blameless) bir 'Incident Post-Mortem Raporu' hazırla. Şunları içersin: 1) Executive Summary & Impact, 2) Minute-by-minute Timeline of Events, 3) 5-Whys Root Cause Analysis, 4) What went well vs What went poorly, 5) 3 adet somut önleyici Jira aksiyon maddesi.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Production'ı patlatan stajyeri asalım mı keselim mi?' komedisi. Cadı avı yapan toksik şirketlerin nasıl çöktüğü ve Blameless kültürün dünyadaki en dayanıklı sistemleri (Google, Netflix, Amazon) nasıl inşa ettiği üzerine harika bir analiz.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Cadı Avına Son: Neden İnsanları Suçlamak Felaket Getirir?
- 04:15 - Google SRE Blameless Post-Mortem Anatomisi
- 08:35 - Slack Konuşmalarını AI ile Kusursuz Zaman Çizelgesine Çevirmek
- 13:20 - Egzersiz: Takımınızın son krizini Blameless Post-Mortem formatında yeniden yazın
