# Lesson 15: AI-Driven Estimation & Velocity Forecasting: Beyond Story Point Illusions

> **Module 3: Reinventing Agile & Delivery with AI** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Executive Summary & Mindset Shift
Ditching 3-hour Planning Poker rituals: Using historical repository velocity, PR scope, and probabilistic Monte Carlo AI models for delivery forecasts.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Instead of a carpenter gazing into a crystal ball to guess when a dining table will be finished, they look at wood hardness, shop capacity, and past delivery stats to assert: 'With 90% confidence, this table ships Thursday at 3 PM.'

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Tahmin Yöntemi** | Planning Poker kartı fırlatıp 5 mi olsun 8 mi olsun diye 40 dakika kavga etmek. | Biletin karmaşıklığını benzer geçmiş 50 PR ile kıyaslayıp güven aralığı çıkarmak. |
| **Kapasite Hesabı** | '8 kişi x 8 saat = 64 saatlik iş alırız' yanılgısı. | Toplantılar, PR review ve destek nöbetlerini düşerek net odak kapasitesini (Focus Factor) hesaplamak. |
| **Doğruluk** | Her sprintin son günü yetiştirilemeyen biletlerin sonraki sprinte sarkması. | Monte Carlo simülasyonu ile %85 kesinlikle bitiş tarihi vermek. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Kill Fibonacci Poker Marathons: Cap estimation debates at 3 minutes; if team estimates diverge widely, slice the story.
- 2. Mine Historical Lead Times: Feed past pull request churn, review cycles, and merge durations into your planning models.
- 3. Probabilistic Forecasting: Stop giving single-point dates; communicate confidence bands: '85% confidence to ship by Friday, 95% by Monday.'
- 4. Scope Trimming Over Overtime: When capacity shrinks, never demand weekend crunch; negotiate deferring 'Nice-to-Have' scope with product partners.

---

### 🚨 Real-World War Story / Case Study
A logistics tech squad consistently committed to 50 story points and delivered barely 25. Management assumed laziness. Incoming lead Emre ran team git history through an AI log synthesizer. The discovery: engineers were interrupted by unmanaged production escalations 45% of the time. Emre halved planned story capacity and created a rotating 'Firefighter' on-call desk. Sprint commitment reliability shot up from 48% to 96%.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Tarihsel Veriye Dayalı Sprint Kapasite ve Risk Analizörü
```text
Takımımız 6 yazılımcıdan oluşuyor. Son 4 sprintteki planlanan vs tamamlanan işlerimiz ve karşılaştığımız engeller şunlar: [VERİLER]. Bu sprint için planlanan bilet listesi de ektedir. Bana: 1) Bu sprintin başarıyla tamamlanma olasılık yüzdesini hesapla, 2) En büyük risk taşıyan 2 bileti ve nedenini belirt, 3) Riski düşürmek için hangi 2 biletin kapsamının küçültülmesi gerektiğini öner.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Planning Poker bir tiyatro mudur?' tartışması. 5 puan mı 8 puan mı kavgası yapan yazılımcıların komedisi ve veri odaklı yapay zeka tahminlerinin takımları nasıl aşırı vaat ve tükenmişlikten kurtardığı.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Story Point İllüzyonu: Neden tahminlerimiz hep yanılıyor?
- 04:20 - Monte Carlo Simülasyonu ve Olasılıksal Planlama Mantığı
- 08:45 - Odak Faktörü (Focus Factor): Gerçekçi Mühendislik Kapasitesi
- 13:10 - Egzersiz: Takımınızın son 3 sprint verisini AI ile analiz edip gerçek kapasitenizi bulun
