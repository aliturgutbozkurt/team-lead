# Lesson 44: DORA & SPACE Metrics: Measuring True Engineering Productivity without Vanity

> **Module 8: Managing Up & Business Alignment** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Executive Summary & Mindset Shift
Burying toxic vanity metrics like lines-of-code and ticket counts: Leveraging DORA and SPACE frameworks to measure delivery velocity and team well-being.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Evaluating a novelist's brilliance by counting how many mechanical keys they clacked on a typewriter is absurd. Mashing a keyboard 100,000 times produces gibberish. Engineering excellence is evaluated by how smoothly and reliably value lands in user hands.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Zararlı Metrikler** | Commit sayısı, yazılan satır sayısı (LOC), kapatılan bilet sayısı. | Bu metrikleri ölçerseniz yazılımcılar yapay zekaya 10.000 satır çöp kod yazdırıp sistemi kandırır. |
| **DORA Metrikleri** | Yılda bir kez release çıkıp hızını bilmemek. | Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service. |
| **SPACE Çerçevesi** | Sadece çıktıya (Output) odaklanıp insanların tükenmesini görmemek. | Satisfaction, Performance, Activity, Communication, Efficiency boyutlarını dengeli ölçmek. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Beware Goodhart's Law: 'When a measure becomes a target, it ceases to be a good measure.' Gamed metrics produce toxic cultures.
- 2. The 4 DORA Golden Metrics: 1) Deployment Frequency, 2) Lead Time for Changes, 3) Change Failure Rate, 4) Mean Time to Restore (MTTR).
- 3. Balance with the SPACE Framework: Complement delivery metrics with developer Satisfaction, cognitive Flow, and Communication friction.
- 4. Quantifying AI Impact: Measure LLM ROI through collapsed PR cycle times and reclaimed focus hours, never raw lines of generated code.

---

### 🚨 Real-World War Story / Case Study
An enterprise conglomerate instituted bonuses for 'engineers with the highest commit counts and closed tickets.' Within 60 days, devs used ChatGPT to bloat functions with hundreds of verbose comments and split trivial tasks into 10 separate tickets. Technical debt exploded. Lead Kaan stepped in: revoked the toxic quota, built a real-time DORA dashboard, and tied bonuses to Change Failure Rate drops and PR velocity. System health stabilized immediately.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ DORA ve SPACE Mühendislik Verimlilik Raporlayıcı
```text
Takımımızın son 3 aydaki metrikleri şunlardır: [DEPLOY SAYILARI, PR KAPATMA SÜRELERİ, HATA ORANLARI, RETRO MEMNUNİYET PUANLARI]. Sen bir Engineering Operations Director'ısın. 1) Takımımızın DORA seviyesini (Low, Medium, High, Elite) belirle, 2) SPACE çerçevesine göre takımın tıkanıklık yaşadığı 2 alanı teşhis et, 3) Vanity metrikleri engelleyen ve yönetime sunulacak 1 sayfalık dengeli mühendislik karnesi hazırla.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Günde 2000 satır kod yazan' sahtekar yazılımcı ile Goodhart Yasasını anlatan bilge Lead. Metriklerin insanları nasıl canavara dönüştürebileceği ve gerçek mühendislik hızını ölçmenin bilimsel yolları üzerine eğlenceli bir podcast.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Goodhart Yasası: Satır Sayarak Verimlilik Ölçülür mü?
- 04:15 - DORA Metriklerinin Dört Altın Kuralı (Elite Performer Olmak)
- 08:35 - SPACE Çerçevesi: Mühendis Mutluluğunu ve Odak Süresini Ölçmek
- 13:20 - Egzersiz: Takımınız için 1 adet DORA karnesi çıkarın
