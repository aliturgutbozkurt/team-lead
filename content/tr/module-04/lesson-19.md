# Ders 19: AI Kod Kalitesi Paradoksu: 'Hızlı Üretilen Çöpü' Nasıl Engelleriz?

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zekanın saniyeler içinde binlerce satır kod üretmesi bir lütuf mu yoksa teknik borç tsunamisi mi? Halüsinasyonlu bağımlılıkları ve spagetti mimariyi filtreleme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Sana dakikada 500 adet kurabiye basan süper hızlı bir kurabiye makinesi verseler sevinirsin. Ama makine kurabiyelerin içine un yerine bazen tebeşir tozu, şeker yerine tuz koyuyorsa ve sen kontrol etmeden müşteriye satarsan dükkanın batar. AI harika bir kurabiye makinesidir ama kalite kontrol şefi sensin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Kabul Kriteri** | 'Çalışıyorsa ve testi geçiyorsa merge edelim.' | 'Mühendis kodu tam olarak anladı mı, mimari sınırlara uyuyor mu, gereksiz soyutlama var mı?' |
| **Bağımlılık Yönetimi** | Paket yöneticisine kütüphaneleri sorgusuz eklemek. | AI'ın uydurduğu sahte (hallucinated) npm/pip paketlerine ve güvenlik açıklarına karşı otomatik tarama. |
| **Kod İnceleme Odağı** | Noktalı virgül ve isimlendirme gibi yüzeysel şeyleri kontrol etmek. | Sistem sınırları, domain bütünlüğü ve gelecekteki bakım maliyetini denetlemek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 'Anlamadığın Kodu Asla Commit'leme' İlkesi: Takım kuralı: Bir mühendis AI'ın yazdığı kodun her satırının çalışma mantığını PR'da açıklayamıyorsa o PR reddedilir.
- 2. Katı Linter ve Statik Analiz (SonarQube/Biome): AI'ın ürettiği gereksiz karmaşıklığı otomatik engelleyen kurallar koy.
- 3. Halüsinasyonlu Paket Koruması: Package.json veya pom.xml'e giren her yeni kütüphane için otomatik güvenlik ve gerçeklik taraması (Socket.dev, Snyk) çalıştır.
- 4. Mimari Birim Testleri (ArchUnit): Katmanlı mimari kurallarını (örn: Controller asla doğrudan Repository çağıramaz) kod seviyesinde test et.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech start-up'ında junior bir yazılımcı Cursor kullanarak 1 günde 2000 satırlık karmaşık bir mutabakat modülü yazdı ve PR hemen onaylandı. Canlıya çıktıktan 3 gün sonra sistemde bellek sızıntısı (memory leak) başladı; çünkü AI var olmayan bir caching kütüphanesi yerine el yordamıyla sonsuz bir Map nesnesi üretmişti. Sunucular çöktü. Lead Berke, takıma 'AI Code Sludge Kalkanı' getirdi: Her AI üretimi PR için ArchUnit kuralları ve bellek profil testleri zorunlu yapıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ AI Tarafından Üretilen Kod İçin Titiz Kalite ve Güvenlik Denetçisi
```text
Aşağıdaki kod bir yapay zeka asistanı tarafından üretilmiştir: [KODU EKLEYİN]. Sen dünyanın en acımasız Principal Software Architect'isin. Bu kodu şu açılardan parçala ve analiz et: 1) Gereksiz soyutlama ve kod karmaşıklığı (Over-engineering), 2) Gizli bellek sızıntıları, concurrency hataları ve edge-case açıkları, 3) Güvenlik riskleri veya uydurma API çağrıları, 4) Bu kodu %50 daha sade ve okunabilir yapacak somut refactoring önerileri.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Günde 10.000 satır kod yazıyorum' diye övünen acemi yazılımcı ile 'O 10.000 satırın bakımını kim yapacak evladım?' diyen bilge Principal Engineer. AI çağında kod miktarının değil, kod sadeliğinin erdemi üzerine muazzam bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Kod Çamuru (Code Sludge) Tehdidi
- 04:10 - 'Anlamadığın Kodu Kabul Etme': Takım Kültürü İnşası
- 08:20 - ArchUnit ile Mimari Kuralları CI/CD'ye Kazımak
- 13:30 - Egzersiz: Takımınızın kod tabanına ilk ArchUnit mimari testini ekleyin
