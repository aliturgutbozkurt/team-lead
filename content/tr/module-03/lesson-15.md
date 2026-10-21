# Ders 15: Sprint Planlama ve Efor Tahmini: AI ile Story Point Yanılsamalarından Kurtulmak

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Planning Poker kartları sallayarak saatlerce tartışmaya son: Tarihsel git commitleri, PR büyüklükleri ve AI analitiğiyle gerçekçi teslimat tahminleri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir marangozun bir masanın kaç günde biteceğini masaya bakıp fal açarak tahmin etmesi yerine; elindeki ağacın sertliğine, atölyedeki personelin hızına ve son 20 masada çıkan ortalama gecikmelere bakıp 'Bu masa %90 ihtimalle Perşembe öğleden sonra biter' demesidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Tahmin Yöntemi** | Planning Poker kartı fırlatıp 5 mi olsun 8 mi olsun diye 40 dakika kavga etmek. | Biletin karmaşıklığını benzer geçmiş 50 PR ile kıyaslayıp güven aralığı çıkarmak. |
| **Kapasite Hesabı** | '8 kişi x 8 saat = 64 saatlik iş alırız' yanılgısı. | Toplantılar, PR review ve destek nöbetlerini düşerek net odak kapasitesini (Focus Factor) hesaplamak. |
| **Doğruluk** | Her sprintin son günü yetiştirilemeyen biletlerin sonraki sprinte sarkması. | Monte Carlo simülasyonu ile %85 kesinlikle bitiş tarihi vermek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Fibonacci Kart Savaşlarını Bitir: Story point tartışmalarını maksimum 5 dakika ile sınırla; anlaşmazlık varsa işi ikiye böl.
- 2. Tarihsel Veri ile Besle: Takımın son 6 aydaki PR kapatma sürelerini ve bilet büyüklüklerini bir veri seti olarak tut.
- 3. Olasılıksal Tahmin (Probabilistic Forecasting): 'Bu iş 3 günde biter' deme; 'Bu iş %50 ihtimalle 2 günde, %85 ihtimalle 4 günde biter' de.
- 4. Scope Paring (Kapsam Tıraşlama): Sprint dolduğunda daha fazla mesai isteme; iş birimiyle konuşup 'Must Have' dışındaki özellikleri bir sonraki sürüme kaydır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir lojistik yazılımında takım her sprint başında 50 story point alıyor, sprint sonunda ancak 25 puan teslim edebiliyordu. Yönetim takımı tembel sanıyordu. Yeni lead Emre, geçmiş 6 aylık sprint verilerini bir LLM analizine soktu. Ortaya çıktı ki takım zamanının %45'ini habersiz gelen production acil destek biletlerine harcıyordu. Emre sprint kapasitesini %50 düşürdü ve 1 mühendisi dönüşümlü destek nöbetçisi (Firefighter) yaptı. Takımın teslimat başarısı %48'den %96'ya çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Tarihsel Veriye Dayalı Sprint Kapasite ve Risk Analizörü
```text
Takımımız 6 yazılımcıdan oluşuyor. Son 4 sprintteki planlanan vs tamamlanan işlerimiz ve karşılaştığımız engeller şunlar: [VERİLER]. Bu sprint için planlanan bilet listesi de ektedir. Bana: 1) Bu sprintin başarıyla tamamlanma olasılık yüzdesini hesapla, 2) En büyük risk taşıyan 2 bileti ve nedenini belirt, 3) Riski düşürmek için hangi 2 biletin kapsamının küçültülmesi gerektiğini öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Planning Poker bir tiyatro mudur?' tartışması. 5 puan mı 8 puan mı kavgası yapan yazılımcıların komedisi ve veri odaklı yapay zeka tahminlerinin takımları nasıl aşırı vaat ve tükenmişlikten kurtardığı.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Story Point İllüzyonu: Neden tahminlerimiz hep yanılıyor?
- 04:20 - Monte Carlo Simülasyonu ve Olasılıksal Planlama Mantığı
- 08:45 - Odak Faktörü (Focus Factor): Gerçekçi Mühendislik Kapasitesi
- 13:10 - Egzersiz: Takımınızın son 3 sprint verisini AI ile analiz edip gerçek kapasitenizi bulun
