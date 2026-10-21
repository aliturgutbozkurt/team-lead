# Ders 41: Chaos Engineering ve Dayanıklılık Testleri: Sistemleri Kasten Çökertmek

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Krizin hafta sonu gece yarısı sürpriz yapmasını beklemeyin; sistemlerin fişini mesai saatlerinde kasten çekin: Chaos Monkey felsefesi, GameDay simülasyonları ve AI dayanıklılık ajanları.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir itfaiye ekibinin gerçek yangın çıkana kadar hiç tatbikat yapmadan oturup televizyon izlemesi deliliktir. Yangın tatbikatı yaparsın; duman bombası atar, sirenleri çalar ve herkesin kaçış yolunu test edersin. Chaos Engineering yazılımın yangın tatbikatıdır; sistemi kontrollü şekilde ateşe verirsin ki acil durumda kimse paniklemesin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Dayanıklılık Testi** | 'Umarım sunucular çökmez' diye dua etmek. | Chaos Mesh veya Gremlin ile kasten pod öldürmek, gecikme (latency) enjekte etmek. |
| **Test Zamanı** | Canlı ortamda beklenmedik felaket anında öğrenmek. | Salı günü öğlen 14:00'te tüm ekibin hazır olduğu kontrollü GameDay seansında test etmek. |
| **AI Rolü** | Manuel olarak senaryo düşünmek. | AI ajanlarının sistemin en zayıf mimari halkasını bulup oraya özel saldırı ve kesinti simülasyonu üretmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. GameDay Ritüeli: Ayda bir kez 2 saatlik GameDay düzenle; ekibe haber vermeden veya kontrollü şekilde bir mikroservisin bağlantısını kopar ve ekibin müdahalesini izle.
- 2. Blast Radius (Patlama Yarıçapı) Kontrolü: Kaos testlerini ilk olarak staging/canary ortamında başlat; asla tek seferde tüm prod'u riske atma.
- 3. Hipotez Kur: 'Eğer Redis çökerse sistem patlamaz, veritabanına fallback yapar' hipotezini yaz; sonra Redis'i öldür ve hipotezi doğrula.
- 4. Otomatik Kaos Ajanları: Testleri otomatize et; pipeline her deploy olduğunda mikro network kesintilerini tolere edebildiğini kanıtlasın.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir banka, 'Bizim sistem çok sağlam' diye övünüyordu. Yeni lead Levent bir GameDay düzenledi ve mesai saatinde ana kimlik doğrulama servisinin Kubernetes pod'larını tek tek kapattı. Sistem anında kilitlendi çünkü fallback mekanizması hiç test edilmemişti ve koddaki bir timeout değeri 300 saniyeydi! Bu kontrollü çöküş sayesinde 2 günde tüm timeout ve circuit breaker ayarları düzeltildi. 1 ay sonra şirketin veri merkezinde gerçek bir yangın çıktığında sistem sıfır kesintiyle çalışmaya devam etti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım İçi Chaos Engineering ve GameDay Senaryo Tasarımcısı
```text
Sistem mimarimiz şu bileşenlerden oluşmaktadır: [MİKROSERVİSLER, KAFKA, REDIS, POSTGRESQL, KUBERNETES]. Takımımızla 2 saatlik bir 'GameDay Kaos Tatbikatı' yapmak istiyoruz. Bana şunları üret: 1) Sistemin en zayıf noktalarını hedef alan 3 gerçekçi kaos senaryosu (Latency injection, DB failover, Packet drop), 2) Her senaryo için test edilecek bilimsel hipotez, 3) Bir şeyler ters giderse deneyi anında durduracak 'Emergency Abort' kontrol listesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kendi sistemini kasten çökerten deli mühendisler!' Chaos Engineering felsefesinin çılgın mantığı ve Netflix'in Chaos Monkey hikayesi. Korkarak yaşamak yerine sistemleri ateşte dövmenin mühendislik felsefesi.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Korkuyla Yaşamak vs. Sistemi Kasten Çökertmek
- 04:15 - Chaos Monkey Felsefesi ve Hipotez Odaklı Dayanıklılık
- 08:35 - GameDay Nasıl Düzenlenir? Patlama Yarıçapını Yönetmek
- 13:20 - Egzersiz: Takımınız için ilk kontrollü GameDay senaryosunu hazırlayın
