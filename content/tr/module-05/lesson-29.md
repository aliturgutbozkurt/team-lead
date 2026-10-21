# Ders 29: AI Ajanları ile Gece Boyu Hata Çözümü: Autonomous Bug-Fixing

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Sen uyurken Sentry loglarını inceleyen, repro testini yazan, kodu düzelten ve sabah masana hazır PR bırakan otonom ajan iş akışları tasarlamak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Gece dükkanı kapatıp gittiğinde içeri giren akıllı tamir robotları gibidir. Kırık bir sandalye (bug) gördüklerinde önce sandalyenin neden kırıldığını test ederler, doğru vidayı bulup sıkarlar ve sabah geldiğinde masanın üzerine 'Vidaları sıktım, sağlamlığını test ettim, onaylıyorsanız kullanıma açıyorum' notunu bırakırlar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Hata Çözüm Süresi** | Bug'ın Jira'ya düşmesi, sprint planlamasını beklemesi (ortalama 2 hafta). | Otonom ajanın gece hatayı analiz edip sabah 08:00'de test edilmiş PR ile karşına çıkarması. |
| **Repro Testi** | Geliştiricinin hatayı lokalinde yeniden canlandırmak (reproduce) için saatlerce uğraşması. | Ajanın prod hata logundan otomatik bir unit/integration testi üretmesi. |
| **İnsan Rolü** | Yazılımcının tüm gece log kazıyıp stres yaşaması. | Yazılımcının sadece sabah kahvesini içerken açılan PR'ı ve test sonuçlarını onaylaması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Hata Yakalama Tetikleyicisi (Sentry / Datadog Webhook): 500 hatası çıktığında stack trace ve istek gövdesi otomatik olarak AI ajanına iletilir.
- 2. Repro-First İlkesi: Ajan kodu düzeltmeden ÖNCE hatayı ispatlayan bir unit test yazmak zorundadır (Test önce patlamalıdır).
- 3. Güvenli Sandbox Alanı: Ajan izole bir Docker container içinde kodu düzeltir, tüm testleri çalıştırır ve güvenlik taramasından geçirir.
- 4. Asla Otomatik Merge Etme: Otonom ajanlar asla doğrudan production'a basamaz; daima insan lead onayına PR olarak sunulur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret şirketinde kullanıcıların belirli UTF-8 karakterli adres girdiğinde siparişin patlaması bug'ı 3 haftadır çözülememişti. Lead Tayfun bir otonom bug-fix ajanı kurdu. Gece Sentry'den gelen hatayı yakalayan ajan, sorunun regex parsing hatası olduğunu tespit etti; patlayan bir test yazdı, regex'i düzeltti ve tüm testleri yeşile çevirip sabah 07:30'da PR açtı. Sabah işe gelen nöbetçi mühendis 5 dakikada inceleyip merge etti; kriz bitti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Otonom Hata Çözücü ve Repro Testi Oluşturucu Promptu
```text
Aşağıda production ortamında patlayan bir hatanın Sentry logu ve ilgili kaynak kod dosyası yer almaktadır: [LOG VE KOD]. Bir Autonomous Bug-Fix Agent olarak: 1) Hatayı %100 doğrulayan ve şu an patlayan bir 'Reproduction Test' yaz, 2) Koddaki kök nedeni en minimal ve yan etkisiz şekilde düzelt, 3) Düzeltmenin tüm edge-case'leri kapsadığını kanıtla, 4) GitHub PR için net bir 'Kök Neden ve Çözüm Özeti' hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Sen uyurken çalışan robot yazılımcılar' hayali gerçek mi? Otonom bug-fixing ajanlarının sınırları, neden asla doğrudan deploy etmemeleri gerektiği ve sabah kahvesinde hazır PR onaylamanın keyfi üzerine büyüleyici bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Gece Boyu Çalışan Ajanlar: Bilim Kurgu Değil, Gerçek!
- 04:20 - Otonom Bug-Fix Hattının Mimarisi: Sentry -> Agent -> PR
- 08:45 - Repro-First İlkesi: Hatayı İspatlamadan Düzeltemezsin
- 13:30 - Egzersiz: Takımınız için webhook tabanlı bir AI PR oluşturucu tasarlayın
