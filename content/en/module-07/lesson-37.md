# Lesson 37: Saturday 03:00 AM Outages: Incident Command & AI Triage Assistants

> **Module 7: Incident Response & Production Resilience** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
When the pager screams at 03:00 AM: Incident Command protocols, keeping the War Room calm, and wielding AI triage assistants to stop the bleeding.

---

### 💡 ELI5 Metaphor & Intuitive Story
> When extreme turbulence hits mid-flight, passengers might panic; if the captain grabs the PA and screams 'I'm terrified, we might crash!' chaos reigns. The Incident Commander must be the calmest voice in the room, methodically executing the emergency checklist.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Kriz Anı Davranışı** | Slack kanalında 15 kişinin aynı anda bağırması, herkesin rastgele sunucuları restart etmesi. | Tek bir Incident Commander (IC), sessiz War Room ve rollere ayrılmış net kriz disiplini. |
| **Kök Neden Tespiti** | 3 saat boyunca milyonlarca log satırında kaybolup kimin ne yaptığına bakmak. | Son deployment diff'i ve hata loglarını LLM'e verip 2 dakikada şüpheli commit'i bulmak. |
| **Öncelik Sırası** | Sistem çökmüşken neden çöktüğünü tartışıp kavga etmek. | Önce yangını söndürmek (Rollback / Traffic Drain); nedenini sonra araştırmak. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Establish Incident Command: 1 Commander (Directs strategy), 1 Scribe (Logs timeline and status), Technical Investigators (Run hypotheses).
- 2. Mitigate First, Debug Later: Never debate philosophy during an outage; drain traffic, restart pods, or roll back the last deployment immediately.
- 3. AI Triage Pipeline: Stream real-time alerts into an LLM incident worker: 'Correlate this stack trace with commits merged in the last 4 hours.'
- 4. Cadenced Status Radiators: Broadcast concise executive status updates every 15 minutes to silence panicked stakeholders.

---

### 🚨 Real-World War Story / Case Study
During Black Friday at 02:30 AM, a massive retail checkout service crashed. 20 frantic managers and engineers piled into a Zoom room, screaming over each other. Incoming lead Emre joined: 'I am taking Incident Command. Mute all mics except active investigators.' He quieted the chaos, piped exception logs to an LLM analyzer, and isolated a Redis timeout config regression within 90 seconds. Executed rollback; traffic recovered in 4 minutes, saving millions in revenue.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Canlı Kriz (Incident) Anında AI Triage ve Kök Neden Analizörü
```text
ACİL DURUM: Production ödeme servisimiz şu an 500 hatası veriyor ve p99 yanıt süresi 12 saniyeye çıktı. Aşağıda son 20 dakikanın logları ve son 3 deployment'ın PR başlıkları yer almaktadır: [LOGLAR VE DEPLOYMENTLAR]. Sen bir Principal SRE Incident Commander'sın. 1) Bu çöküşe sebep olan en olası kök nedeni derhal söyle, 2) Kanamayı durdurmak için atılacak İLK acil müdahale adımını (Rollback / Config değişimi / Rate limit) tek cümleyle yaz, 3) Yönetim için 3 cümlelik paniksiz durum bildirimi metni hazırla.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Gece saat 03:00'te telefon çaldığında kalp krizi geçiren yazılımcı travması. Kriz anında panikleyen yöneticiler ile soğukkanlı bir Incident Commander arasındaki devasa fark üzerine nefes kesici ve eğlenceli bir podcast.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Saat 03:00 Kabusu: Telefon Çaldığında Ne Yapmalısınız?
- 04:15 - Incident Commander Protokolü: Kaostan Düzen Yaratmak
- 08:35 - Kanamayı Durdur: 'Neden Oldu' Tuzağına Düşmeyin
- 13:20 - Egzersiz: Takımınız için 1 sayfalık acil durum Incident Runbook'u hazırlayın
