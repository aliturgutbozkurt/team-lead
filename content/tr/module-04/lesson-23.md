# Ders 23: Clean Architecture, Domain-Driven Design (DDD) ve AI Uyumlu Tasarım

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İyi tasarlanmış mimari neden yapay zekanın da en iyi dostudur? Zayıf bağlı (loosely coupled), zengin domain modelleri ve net sınırların AI üretkenliğine etkisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Eğer evinde çoraplar mutfakta, tencereler yatak odasında, kitaplar ise banyoda duruyorsa akıllı temizlik robotu (AI) evi temizlerken kafayı yer ve her şeyi birbirine katar. Ama evinde her şeyin yeri belliyse robot 10 dakikada evi pırıl pırıl yapar. Clean Architecture, kod evinin düzenidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Mimari Yapı** | Veritabanı tablolarına göbekten bağlı Anemic Domain modelleri. | İş kurallarını dış dünyadan (DB, Framework) izole eden Rich Domain modelleri. |
| **AI'ın Anlama Hızı** | Controller içinde 2000 satırlık karmaşık SQL sorguları ve logic. | Her use-case'in tek bir sorumluluğu olması (Single Responsibility) sayesinde AI'ın %99 doğrulukla kod üretmesi. |
| **Test Edilebilirlik** | Test yazmak için tüm veritabanını ayağa kaldırma zorunluluğu. | Saf domain mantığının sıfır bağımlılıkla milisaniyeler içinde test edilmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Bağımlılık Kuralı (Dependency Inversion): İç katmanlar (Domain Entity ve Use Case) dış katmanları (DB, Web Framework) ASLA bilmemelidir.
- 2. Ubiquitous Language (Ortak Dil): Kod içindeki sınıf isimleri ile iş biriminin konuştuğu kelimeler birebir aynı olmalıdır.
- 3. Bounded Context Sınırları: Her servisin veya paketin net bir iş sınırı olmalıdır; sınırları aşan veri transferleri DTO'lar ile yapılmalıdır.
- 4. AI-Friendly Repolar: Kod tabanını temiz modüllere böldüğünde, LLM'e sadece ilgili modülü bağlam (context) olarak verip kusursuz çıktılar alabilirsin.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir kargo takip uygulamasında tüm iş mantığı veritabanı stored procedure'leri içine yazılmıştı. Geliştiriciler Copilot'a bir şey sorduğunda Copilot sürekli saçmalıyordu çünkü bağlamı göremiyordu. Lead Nilay, takımla birlikte Hexagonal (Ports & Adapters) mimariye geçti; iş mantığını saf Java domain sınıflarına topladı. Sonuç: Hem test coverage %92'ye çıktı hem de AI asistanlarının kod tamamlama doğruluğu %35'ten %94'e yükseldi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Domain-Driven Design (DDD) ve Clean Architecture Dönüştürücü
```text
Aşağıdaki kod veritabanı ve controller ile sıkı sıkıya bağlı (tightly coupled) bir yapıdadır: [KODU EKLEYİN]. Bu kodu Clean Architecture prensiplerine göre yeniden tasarla: 1) Saf Domain Entity sınıfı, 2) Use Case / Application Service katmanı, 3) Port (Interface) tanımları, 4) Neden bu yapının AI kodlama araçları için çok daha hatasız sonuç verdiğini açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Architecture is dead, AI writes everything' diyen acemi yazılımcı ile 'Tam tersine, AI çağında kötü mimari ölüm fermanıdır!' diyen Software Architect. Clean Architecture ve DDD'nin yapay zekanın gücünü nasıl 10 katına çıkardığını anlatan derin bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Neden Spagetti Kodda Boğulur?
- 04:20 - Clean Architecture'ın 4 Katmanı: Domain'i Korumak
- 08:45 - Domain-Driven Design (DDD) ve Bounded Context Mantığı
- 13:30 - Egzersiz: Takımınızın en kritik 1 servisini Hexagonal mimariye dönüştürün
