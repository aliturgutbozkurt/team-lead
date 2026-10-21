# Ders 38: SRE, SLO, SLA ve SLI: İş Birimleri ile Hata Bütçesi (Error Budget) Sözleşmesi

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Sistemimiz %100 ayakta kalmalı' bir fantezidir. İş birimiyle gerçekçi SLO (%99.9) belirlemek ve hata bütçesi tükendiğinde yeni özellikleri durdurup güvenliğe odaklanma kültürü.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir kargo şirketinin 'Her paketi 5 saniyede teslim edeceğiz ve hiçbir paket asla kaybolmayacak' sözü vermesine benzer. Bunu yapmaya kalkarsan her pakete bir helikopter tahsis etmen gerekir ve şirket iflas eder. Akıllı şirket 'Paketlerin %99.9'u zamanında gider, binde bir gecikme hakkımız vardır' der. O binde birlik hak senin hata bütçendir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Hedef Uptime** | 'Sistem asla durmamalı, %100 çalışmalı' (Gerçek dışı baskı). | '%99.9 SLO hedefliyoruz; bu ay 43 dakika kesinti hakkımız (Error Budget) var.' |
| **Bütçe Tükendiğinde** | Herkesin birbirini suçlaması, yine de yeni özellik çıkarmaya devam edilmesi. | Hata bütçesi %0'a indiğinde tüm yeni özelliklerin durdurulup sadece stabilite çalışılması. |
| **Müşteri Sözleşmesi** | SLA cezalarını cepten ödemek. | SLI ve SLO'ları AI anomali tespitiyle proaktif izleyip SLA ihlalini önceden engellemek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Dörtlüyü Ayırt Et: SLI (Gerçekte ne ölçüyoruz? Örn: Başarılı istek oranı), SLO (Kendi hedefimiz? Örn: %99.9), SLA (Müşteriye tazminat sözümüz? Örn: %99.5), Error Budget (Kalan hata hakkımız).
- 2. Hata Bütçesi Politikası (Error Budget Policy): Ürün yöneticisiyle yazılı sözleşme imzala: 'Eğer hata bütçemiz biterse o ay yeni feature çıkmayacak, sadece güvenilirlik çalışacağız.'
- 3. AI ile Anomali Erken Uyarısı: Sistem henüz çökmeden, p99 gecikmesindeki mikro sapmaları tespit eden yapay zeka monitörleri kur.
- 4. Gerçekçi Dokuzlar (The Cost of Nines): Her eklenen 9 rakamı maliyeti 10 katına çıkarır. %99.999 yerine iş için gerçekten neyin yettiğini belirle.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech şirketinde ürün yöneticisi sürekli yeni özellik istiyor, sistem haftada iki kez çöküyordu. Mühendisler tükenmişti. Yeni lead Canan, şirkete ilk resmi 'SLO & Error Budget' politikasını getirdi. Kasım ayında iki büyük kesinti olunca hata bütçesi tükendi. Canan sözleşmeyi masaya koydu ve 3 hafta boyunca yeni hiçbir özellik çıkarttırmadı; takım tüm açıkları kapattı, altyapıyı düzeltti. Sonraki 6 ay boyunca tek bir kesinti dahi yaşanmadı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Ürün ve Mühendislik İçin Hata Bütçesi (Error Budget) Sözleşmesi Tasarımcısı
```text
Bir SaaS şirketinin Engineering Lead'iyim. Ürün yöneticimizle aramızdaki güvenilirlik ve hız dengesini kuracak resmi bir 'SLO, SLA ve Error Budget Politikası Sözleşmesi' hazırla. Şunları içersin: 1) p99 gecikmesi ve hata oranı için net SLI/SLO tanımları (%99.9 hedefiyle), 2) Hata bütçesi %100, %50 ve %0 kaldığında takımların alacağı net aksiyon kuralları, 3) C-Level yönetimi bu politikanın şirketi nasıl daha karlı yapacağına ikna eden 1 sayfalık gerekçe.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Bizim sistem %100 çalışmalı!' diyen gerçeklikten kopuk CEO ile Google SRE ilkelerini anlatan bilge Lead. Hata bütçesinin yazılımcıya inovasyon yapma ve hata yapma özgürlüğü veren kutsal bir kalkan olduğu üzerine derin bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - %100 Uptime Efsanesi ve Şirketlerin İflası
- 04:15 - SLI, SLO, SLA ve Hata Bütçesi (Error Budget) Matematiği
- 08:35 - Hata Bütçesi Politikası ile Ürün Yöneticisini Frenlemek
- 13:20 - Egzersiz: Takımınızın kritik servisi için ilk SLO sözleşmesini yazın
