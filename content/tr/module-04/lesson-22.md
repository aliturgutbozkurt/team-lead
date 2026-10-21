# Ders 22: Legacy Kodu Modernize Etmek: AI ile Tersine Mühendislik ve Güvenli Refactoring

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
15 yıllık kimsenin dokunmaya cesaret edemediği spagetti kod tabanını patlatmadan modernize etmek: Characterization testleri, Strangler Fig deseni ve AI rehberliği.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Tarihi bir köprünün altından binlerce ton su akarken köprüyü havaya uçurup baştan yapamazsın. Önce köprünün her taşına sensör takarsın (Testler), sonra eski taşların yanına modern çelik halatlar eklersin (Strangler Fig), en sonunda eski taşları tek tek güvenle yenilersin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Modernizasyon Yaklaşımı** | 'Tüm projeyi çöpe atıp sıfırdan yazacağız' (Büyük Yeniden Yazım Felaketi). | Strangler Fig deseniyle modülleri parça parça, canlı trafiği bozmadan ayırmak. |
| **Test Stratejisi** | Hiç test olmadan dua ederek kodu değiştirmek. | AI ile mevcut davranışın röntgenini çeken Karakterizasyon (Characterization) testleri üretmek. |
| **Dokümantasyon Çözümleme** | Emekli olmuş yazılımcıyı arayıp 'Bu fonksiyon ne yapıyordu?' diye sormak. | Eski kodu LLM'e besleyip iş mantığı kurallarını ve edge-case'leri metin olarak deşifre etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Asla Sıfırdan Yazma (The Second-System Effect): Sıfırdan yazım projelerinin %80'i başarısız olur ve bütçeyi tüketir. Daima evrimsel modernizasyonu seç.
- 2. Karakterizasyon Testleri (Güvenlik Ağı): Kodu değiştirmeden önce, kodun şu anki tüm girdilerine verdiği çıktıları kaydeden testler yazdır.
- 3. Strangler Fig Deseni: Yeni modülü monolith'in dışında modern dille yaz; API Gateway üzerinden trafiği kademeli olarak yeni servise yönlendir.
- 4. AI ile Tersine Mühendislik: Anlaşılmaz 500 satırlık procedürel kodu LLM'e verip: 'Bu kodun içindeki gizli iş kurallarını çıkar' analizini al.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sigorta şirketinde 2008 yılından kalma Java 6 monolitik poliçe hesaplama motoru vardı. Kimse dokunamıyordu. Şirket 'Bunu baştan yazalım' dedi ve 1 yıl, 2 milyon dolar çöpe gitti. Yeni lead Sinan devreye girdi. Monolith'in girdilerini ve çıktılarını dinleyen bir loglama katmanı kurdu. Bu verileri Claude'a verip 300 adet otomatik karakterizasyon testi yazdırdı. Güvenlik ağı oluştuktan sonra motoru Spring Boot 3'e 6 haftada hatasız taşıdı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Legacy Koddan Karakterizasyon Testi ve İş Mantığı Çıkarıcı
```text
Aşağıda 10 yıllık dokümantasyonsuz bir legacy fonksiyon yer almaktadır: [KODU EKLEYİN]. 1) Bu kodun uyguladığı iş kurallarını madde madde açıkla, 2) Bu kodun mevcut davranışını kilitleyen (Characterization Tests) JUnit 5 / Jest test senaryolarını yaz, 3) Bu fonksiyonu Clean Code ve SOLID prensiplerine göre refactor etmek için adım adım bir dönüşüm stratejisi hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Tüm projeyi sıfırdan yazalım!' diyen genç ve hevesli mühendis ile büyük yeniden yazımların mezarlığını görmüş bilge Lead. Strangler Fig deseni ve AI'ın legacy kodu çözen sihirli merceği üzerine harika bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Büyük Yeniden Yazım Felaketi: Neden Sıfırdan Yazmamalısınız?
- 04:30 - Karakterizasyon Testleri: Kodu Değiştirmeden Önce Kafese Almak
- 08:45 - Strangler Fig Deseni ile Monolith Parçalama
- 13:50 - Egzersiz: Takımınızdaki en korkulan legacy fonksiyon için AI ile karakterizasyon testi yazın
