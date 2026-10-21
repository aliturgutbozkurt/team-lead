# Ders 27: Cursor Rules, Copilot Workspace ve Repo Bazlı AI Konfigürasyonu

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Takımdaki her yazılımcının AI'dan farklı kalitede kod alması karmaşasına son: `.cursorrules`, GitHub Copilot instructions ve repo bazlı sistem kurallarını standartlaştırma.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir orkestradaki her müzisyenin önüne farklı bir bestenin notasını koyarsan korkunç bir gürültü çıkar. `.cursorrules` dosyası, tüm yapay zekaların önüne koyduğun ortak orkestra notasıdır. Hangi dili konuşacaklar, hangi kütüphaneleri kullanacaklar, hangi hataları asla yapmayacaklar hepsi o tek kağıtta yazar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Prompt Kalitesi** | Her mühendisin AI'a kafasına göre 'Şunu yaz' diye rastgele prompt atması. | Repoda commit'lenmiş kurallar sayesinde AI'ın projenin mimarisini ve kurallarını otomatik bilmesi. |
| **Mimari Tutarlılık** | AI'ın projede Lombok varken elle getter-setter yazması veya eski kütüphaneleri getirmesi. | Kurallar dosyasında yasaklı pattern'ların belirtilmesi sayesinde sıfır tutarsızlık. |
| **Onboarding** | Yeni gelen yazılımcının takım standartlarını öğrenmek için aylarca debelenmesi. | IDE'yi açtığı ilk dakika AI'ın takım standartlarına uygun kod üretmeye başlaması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Tek Hakikat Kaynağı (Single Source of Context): Projenin kök dizinine `.cursorrules` veya `.github/copilot-instructions.md` ekle.
- 2. Açık ve Net Kısıtlar: 'Clean code yaz' gibi muğlak lafları bırak; 'Daima Java 21 Record kullan, Lombok `@Data` kullanma, Controller katmanında ResponseEntity dön' de.
- 3. Yasaklı Kütüphaneler Listesi: Halüsinasyon veya eski sürüm riskine karşı yasaklı paketleri kurallar dosyasına açıkça yaz.
- 4. Kuralları Versiyonla: AI kuralları da kod gibidir; PR ile açılır, takımla tartışılır ve repo ile birlikte versiyonlanır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir mobil fintech projesinde 6 mühendisten 3'ü Swift Concurrency (async/await), 3'ü ise eski Combine kütüphanesini kullanıyordu çünkü AI araçları farklı önerilerde bulunuyordu. Proje tam bir çorbaya döndü. Lead Mert, kök dizine 40 satırlık kapsamlı bir `.cursorrules` dosyası yazdı. AI'ın Combine önermesini yasakladı ve modern async/await standartlarını bağladı. 1 hafta içinde tüm yeni kodlar tek bir mimari standartta birleşti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Üretim Düzeyinde .cursorrules ve Copilot Instruction Üretici
```text
Biz şu teknoloji yığınını kullanan profesyonel bir ekibiz: [DİL, FRAMEWORK, DB, TEST KÜTÜPHANESİ]. Ekibimiz için projenin kök dizinine konulacak kusursuz bir `.cursorrules` dosyası hazırla. Şunları içersin: 1) Kod stili ve mimari katman kuralları, 2) Kesinlikle yasaklanmış (deprecated) pattern'lar ve kütüphaneler, 3) Test yazma standartları (Given-When-Then), 4) Git commit ve PR formatı.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Projesine `.cursorrules` koymayan bir takımda yaşanan 'Babil Kulesi' karmaşası. Herkesin AI'ının farklı bir dilde kod ürettiği komedi ve 40 satırlık bir kural dosyasının bir takımı nasıl kaostan kurtardığı üzerine keyifli bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI ile Babil Kulesi Sendromu: Mimari Tutarsızlık
- 04:10 - `.cursorrules` ve Copilot Instructions Anatomisi
- 08:35 - Yasaklı Pattern'lar: AI'a 'Ne Yapmaması Gerektiğini' Söylemek
- 13:20 - Egzersiz: Takımınızın reposu için ilk resmi `.cursorrules` dosyasını oluşturun
