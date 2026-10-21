# Lesson 16: Retrospectives That Actually Change Things: AI Sentiment Analysis & Root Causes

> **Module 3: Reinventing Agile & Delivery with AI** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Executive Summary & Mindset Shift
Breaking the cycle of toothless retrospective theater: AI sentiment extraction, 5-Whys automation, and translating team gripes into funded Jira work.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Meeting friends every month to lament: 'We really must lose weight,' and immediately ordering extra large pizzas. A retrospective is not an emotional therapy vent; you must leave with assigned dates, clear owners, and removed temptations.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Katılım** | Aynı 2 kişinin konuşması, içe kapanık mühendislerin susması. | Anonim dijital retro kartlarının AI ile gruplanıp tarafsızca oylanması. |
| **Aksiyon Takibi** | Retro panosunda unutulan 'İletişimi artıralım' gibi soyut temenniler. | Maksimum 2 adet somut, sahibi ve bitiş tarihi olan Jira taskına dönüştürmek. |
| **Süreç İlerlemesi** | Sprintler geçtikçe aynı sorunların sürekli tekrar etmesi. | Son 5 retronun duygu ve konu haritasını AI ile karşılaştırıp iyileşmeyi ölçmek. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Ban Vague Complaining: Transform 'Communication is bad' into 'In which specific incident did an API contract change without notification?'
- 2. AI-Assisted 5-Whys: Dig beneath superficial symptoms by chaining five probing causal inquiries into the engineering workflow.
- 3. The Rule of 2 Actions: If a retro produces 8 action items, zero get done. Pick exactly two high-leverage fixes and assign sprint story points to them.
- 4. Retrospective Longitudinal Memory: Query past quarters of retro transcripts: 'Which pain points have we talked about 3 times without solving?'

---

### 🚨 Real-World War Story / Case Study
A mobile team raised 'Release process is too slow' in 8 consecutive retrospectives without anyone taking action. Incoming lead Asli ingested retro notes into Claude and executed an automated 5-Whys drilldown. Root cause: manual iOS provisioning profile renewals. She swapped out a low-priority feature for a 1-day Fastlane automation task. In the subsequent retro, the 8-month complaint vanished forever.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Retrospektif Kartlarını Kök Neden ve Aksiyona Dönüştürücü
```text
Takımımızın bu sprint retrosunda yazdığı anonim geri bildirimler aşağıdadır: [KARTLAR]. Sen çevik süreçler ve insan psikolojisi uzmanısın. 1) Bu yorumlardaki gizli duygu durumunu (bıkkınlık, heyecan, güvensizlik) analiz et, 2) Benzer konuları 3 ana temada kümele, 3) '5 Neden' metodolojisini kullanarak en kritik problemin kök nedenini bul, 4) Önümüzdeki sprinte doğrudan ekleyebileceğimiz 2 adet ölçülebilir Jira aksiyon bileti yaz.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Retrospektifler bir terapi grubu mudur yoksa mühendislik laboratuvarı mı?' Post-it yapıştırıp hiçbir şey yapmayan takımlarla dalga geçen ve aksiyon odaklı retrospektifin dönüştürücü gücünü anlatan bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Retrospektif Yalanı: Neden kimse inanmıyor?
- 03:45 - 5 Neden Analizi: Şikayetten Kök Nedene İnmek
- 07:30 - AI ile Retro Notlarından Otomatik Jira Aksiyonu Çıkarmak
- 12:15 - Egzersiz: Takımınızın son retro panosunu aksiyon motoruna dönüştürün
