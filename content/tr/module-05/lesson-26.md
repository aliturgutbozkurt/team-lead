# Ders 26: Test Driven Development (TDD) ve AI: Testi Kim Yazıyor, Kodu Kim?

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zeka çağında TDD öldü mü yoksa altın çağını mı yaşıyor? İnsanın test ve spec yazdığı, yapay zekanın kodu ürettiği en hızlı geliştirme döngüsü.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Sen bir mimarsın ve inşaat ustasına 'Bu odaya koyacağım masa tam 120 cm genişliğinde ve 4 bacaklı olacak' diye bir kalıp (test) veriyorsun. Usta (AI) saniyeler içinde o masayı yapıyor. Masayı kalıba sokuyorsun; tık diye oturursa işlem tamamdır. Kalıbı sen tasarlamazsan ustanın yaptığı masanın odaya sığıp sığmayacağını bilemezsin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **TDD Rol Dağılımı** | Aynı mühendisin hem testi hem kodu yazması (zihinsel yorgunluk ve önyargı). | İnsan mühendisin kusursuz test senaryolarını yazması; AI'ın testi geçecek kodu üretmesi. |
| **Test Kalitesi Ölçümü** | Sadece Code Coverage yüzdesine bakmak (boş testler bile %100 gösterir). | Mutation Testing (Pitest/Stryker) ile testlerin kodu gerçekten denetleyip denetlemediğini ölçmek. |
| **Geliştirme Hızı** | TDD'nin 'zaman kaybı' olarak görülmesi. | AI ile kod üretildiği için TDD döngüsünün 10 kat hızlanması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Red-Green-Refactor AI Döngüsü: 1) Mühendis testi yazar (Red), 2) AI testi geçiren kodu üretir (Green), 3) Mühendis ve AI kodu sadeleştirir (Refactor).
- 2. Spec As Code: Testler artık sadece doğrulama aracı değil; yapay zekaya verilen en net, en hatasız prompttur.
- 3. Mutasyon Testi (Mutation Testing): Koda kasten bug enjekte eden araçlar çalıştır; eğer testlerin bu bugları yakalayamıyorsa o testler çöp demektir.
- 4. Mocking Tuzaklarına Dikkat: Her şeyi mock'lamak yerine Domain mantığında gerçek nesneleri, dış servislerde ise WireMock/Testcontainers kullan.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir ödeme şirketinde geliştiriciler 'TDD bizi yavaşlatıyor' diyerek test yazmayı bırakmıştı. Kod kalitesi düştü. Yeni lead Burcu bir yarışma düzenledi: 'AI Destekli TDD Günü'. Mühendisler sadece test yazdı ve Cursor'a 'Bu testleri geçecek en temiz Spring Boot kodunu yaz' dedi. Mühendisler kod yazma süresinin %70 kısaldığını, üstelik ilk denemede sıfır hata ile production'a çıkabildiklerini görünce takımdaki tüm direnç kırıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ TDD Test Senaryosundan Kod Üretici ve Refactor Motoru
```text
Aşağıda yeni bir iş kuralı için yazdığım JUnit 5 / Jest testleri yer almaktadır: [TEST KODU]. Bu testler şu an patlamaktadır (RED). 1) Bu testleri başarıyla geçirecek (GREEN) en sade, temiz ve SOLID uyumlu kodu yaz, 2) Kodu over-engineering yapmadan minimal tut, 3) Testin kaçırmış olabileceği 2 kritik sınır durum (edge-case) için ek test senaryosu öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'TDD öldü mü?' tartışmasını yapan iki yazılımcı. AI çağında test yazmanın neden bir angarya değil, yapay zekayı yöneten bir sihirli değnek haline geldiğini anlatan coşkulu ve esprili bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - TDD'nin Yeniden Doğuşu: Testler Artık En Güçlü Prompt!
- 04:15 - AI Destekli Red-Green-Refactor Döngüsü
- 08:30 - Mutasyon Testi Nedir? Sahte Testleri İfşa Etmek
- 13:40 - Egzersiz: 3 test yazıp AI'a kodu ürettirerek ilk TDD döngünüzü tamamlayın
