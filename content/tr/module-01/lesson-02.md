# Ders 02: AI Çağında Liderlik: Kod Yazan mı, Sistemi Orkestre Eden mi?

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Birim kodun maliyetinin sıfıra yaklaştığı bir dünyada takım liderinin gerçek rolü: Mimari guardrail'lar, prompt standartları ve bağlam mühendisliği.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Geleneksel lider bir kazma kürek takımının en hızlı kazan amelesiydi. AI çağındaki lider ise ekskavatör, dron ve otonom iş makineleri filosunu koordine eden şantiye şefidir. Kazmayı ameleden kapıp 'bana ver ben daha hızlı kazarım' diyen şantiye şefi komiktir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Üretimi** | Her fonksiyonu sıfırdan el yordamıyla yazmak. | Spec ve test kontratı tanımlayıp AI ajanlarına ürettirmek ve denetlemek. |
| **Bilgi Paylaşımı** | Haftalarca süren eski wiki sayfaları ve kulaktan kulağa aktarım. | Kod tabanı RAG sistemi ve living context reposu oluşturmak. |
| **Hata Ayıklama** | Loglara 4 saat bakıp print satırları eklemek. | Trace ve log bağlamını LLM'e besleyip hipotezleri saniyeler içinde doğrulamak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Sözdiziminden (Syntax) Anlama (Semantics) Geç: Takımının başarısı artık dildeki noktalı virgüllerle değil, doğru iş mantığı modellemesiyle ölçülür.
- 2. Guardrail Mimarisi Kur: Takımın önüne serbest AI bıraktığında kod çöplüğü oluşur. Linter, statik analiz ve test kapılarını zorunlu kıl.
- 3. Context Is King: Takımına AI araçları dağıtmadan önce projenin mimari kurallarını `.cursorrules` veya sistem promptu haline getir.
- 4. Orkestrasyon Liderliği: İş parçalarını bağımsız promptlanabilir modüllere bölme becerisini takımına aşıla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
E-ticaret sepet servisinde çalışan 5 kişilik bir ekip, Copilot geldikten sonra PR sayısını 3 katına çıkardı ama production bug sayısı %60 arttı. Yeni lead Zeynep, kod yazmayı bıraktı; 2 gün boyunca ekibe özel 'Prompting & Verification' rehberi ve mimari test kapısı (ArchUnit) yazdı. Sonuç: Bug oranı sıfıra yaklaşırken net özellik teslim hızı 2.5 kat arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım İçi AI Kodlama Standartları ve Guardrail Oluşturucu
```text
Biz modern bir mikroservis mimarisi (Spring Boot / TypeScript / PostgreSQL) kullanan 7 kişilik bir ekibiz. Takım üyelerimizin Cursor ve Copilot kullanırken kod kalitesini düşürmemesi için 'AI-Assisted Development Best Practices' manifestosu hazırla. Kurallar net, ölçülebilir ve PR kontrol listesi içerecek şekilde olsun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> Podcast sunucuları: Biri 'Yapay zeka yazılımcılığı bitirecek mi?' paniğinde olan geleneksel mühendis, diğeri ise 'Hayır, artık her mühendis küçük bir ekibin yöneticisi gibi çalışıyor' diyen AI Team Lead. Kod yazmaktan orkestrasyona geçişin sancılarını çarpıcı esprilerle masaya yatırın.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Giriş: Kod yazmanın birim maliyeti sıfırlanırken lider ne yapar?
- 04:10 - Kod Hamallığı vs. Sistem Mimarlığı
- 08:35 - Guardrail Stratejisi: AI'ın ürettiği spagettiyi engellemek
- 14:00 - Egzersiz: Takımınız için 5 maddelik AI Kullanım Sözleşmesi oluşturun
