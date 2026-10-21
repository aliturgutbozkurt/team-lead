# Lesson 31: Revamping Technical Interviews: Evaluating AI Fluency & System Sense

> **Module 6: AI-Era Hiring, Onboarding & Talent Strategy** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Inverting a binary tree on a whiteboard is irrelevant when an LLM writes it in 2 seconds. Rebuilding interviews to assess system trade-offs, code auditing, and AI fluency.

---

### 💡 ELI5 Metaphor & Intuitive Story
> When hiring an airline pilot, you don't make them calculate wing aerodynamics with a slide rule on a whiteboard. You strap them into a flight simulator, kill an engine in a thunderstorm, and watch their decision-making. LeetCode is trivia; modern interviews are full-system flight simulations.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Mülakat Sorusu** | LeetCode Medium/Hard algoritmalarını tahtada ezbere yazdırmak. | Gerçek bir prod bug'ını veya mimari açığı verip adayın AI ile bunu nasıl çözdüğünü izlemek. |
| **AI Araç Kullanımı** | 'Google ve ChatGPT kullanmak yasaktır' deyip adayı körleştirmek. | 'Cursor veya Claude kullanmak serbesttir; çözümü nasıl yönettiğinizi görelim' demek. |
| **Ölçülen Beceriler** | Sentaks ezberi ve anlık stres yönetimi. | Mimari muhakeme, kod okuma ve AI halüsinasyonlarını yakalama yeteneği. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Mandate AI Tooling: Tell the candidate: 'Use Claude, Cursor, or ChatGPT freely; our job is to evaluate your editorial judgment and speed.'
- 2. The Code-Auditing Challenge: Hand the candidate an AI-generated PR laced with subtle race conditions and memory leaks; evaluate their detection skills.
- 3. Real-World Architecture Gauntlets: Drill into failure modes: 'What happens when Redis evicts under load? How do we preserve idempotency?'
- 4. Reject Brilliant Jerks: Technical genius never compensates for arrogance. Screen relentlessly for active listening and collaborative humility.

---

### 🚨 Real-World War Story / Case Study
A payments startup hired 3 engineers who crushed LeetCode Hard puzzles. On the job, they froze: real production microservices required reading sprawling codebases and evaluating distributed failure modes. Lead Kemal redesigned the interview: handed candidates a broken billing PR and said: 'Use any AI tool to diagnose and repair this in 45 minutes.' Candidates hired via this method proved 3x more productive.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ AI Çağı İçin Gerçekçi Yazılımcı Mülakat Senaryosu ve Puanlama Rubriği
```text
Kıdemli bir Backend Mühendisi (Go / Java) işe alacağız. LeetCode ezberi içermeyen, adayın AI araçlarıyla birlikte çalışma, mimari kısıtları anlama ve kod denetleme becerisini ölçecek 45 dakikalık bir 'Canlı Mülakat Vaka Çalışması' ve 5 kriterli objektif bir değerlendirme rubriği (Puanlama ölçeği) hazırla.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'LeetCode'un çöküşü' üzerine iki kıdemli mühendisin kahkahalarla dolu sohbeti. Tahtaya algoritma yazdıran eski kafalı şirketlerin neden en kötü mühendisleri işe aldığı ve modern mülakatın nasıl olması gerektiği.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - LeetCode'un Sonu: Algoritma Ezberi Neden İflas Etti?
- 04:20 - AI Serbest Mülakat Tasarımı: Adayın Muhakemesini Ölçmek
- 08:45 - Kod Denetimi (Auditing) Mülakatı Nasıl Yapılır?
- 13:30 - Egzersiz: Takımınız için 1 adet gerçek hayat mülakat senaryosu ve rubriği hazırlayın
