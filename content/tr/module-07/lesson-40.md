# Ders 40: Blameless (Suçlamasız) Post-Mortem Kültürü: Hatayı Kurumsal Öğrenmeye Dönüştürmek

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Suçlu kim, Ahmet mi yaptı?' diyen ilkel şirketlerden; 'Sistemimiz nasıl bir tasarıma sahipti ki bir insanın tek bir hatasıyla her şey çöktü?' diyen Google tarzı olgun liderliğe geçiş.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Küçük bir çocuk mutfakta yürürken yerdeki kaygan deterjana basıp düştüğünde ve vazoyu kırdığında; çocuğu dövmek sorunu çözmez. 'Mutfak zeminine o deterjanı kim döktü, neden paspas çekilmedi, vazo neden dengesiz bir masadaydı?' diye bakarsın. Suçlamasız kültür, çocuğu değil zemini ve masayı düzeltmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Odak Noktası** | 'Hatayı kim yaptı?' (Cadı avı, insanları korkutmak ve hataları gizletmek). | 'Sistemimiz neden bu hatayı engelleyemedi?' (Sistemik ve mimari iyileştirme). |
| **Toplantı Atmosferi** | Mahkeme salonu gibi gergin, herkesin mazeret ürettiği ortam. | Merak ve öğrenme odaklı, herkesin şeffafça süreci incelediği bilimsel laboratuvar. |
| **Çıktı** | Kimsenin okumadığı suçlayıcı bir rapor. | AI ile çıkarılmış net zaman çizelgesi, 5 Neden analizi ve takvimlenmiş 3 önleyici Jira bileti. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İnsan Hatası Sonuçtur, Kök Neden Değildir: 'Yazılımcı yanlış butona bastı' kök neden olamaz; 'Neden yanlış basılabilecek bir buton vardı?' kök nedendir.
- 2. Kronolojik Zaman Çizelgesi (Timeline): Slack logları ve git commit'lerini toplayıp dakikası dakikasına olayın röntgenini çek.
- 3. AI ile Post-Mortem Sentezi: Tüm ham logları ve mühendis notlarını LLM'e verip standart Google/AWS tarzı Post-Mortem şablonuna döktür.
- 4. Aksiyon Maddesi Kuralı: Raporun sonunda en az 2 adet önleyici sistemik aksiyon (örn: Guardrail linter, otomatik rollback, DB timeout) Jira'ya açılmalıdır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech firmasında stajyer bir mühendis yanlışlıkla production veritabanını sildi ve 4 saat kesinti oldu. Eski kafalı CEO stajyeri kovmak istedi. Lead Derya göğsünü siper etti: 'Stajyerin production veritabanını silebildiği bir sistem kuran biziz; suç stajyerde değil, bizim mimarimizdedir.' Derya blameless post-mortem yaptı; prod erişim yetkilerini kısıtladı, çift onay mekanizması kurdu. Stajyer şirkette kaldı ve 2 yıl sonra şirketin en iyi güvenlik mühendislerinden biri oldu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Google SRE Tarzı Blameless Post-Mortem ve Zaman Çizelgesi Üretici
```text
Dün gece yaşanan kesintinin ham notları, Slack konuşmaları ve incident logları şunlardır: [NOTLAR VE LOGLAR]. Sen bir Google Principal Site Reliability Engineer'sın. Bu verilerden profesyonel, objektif ve kesinlikle suçlayıcı olmayan (Blameless) bir 'Incident Post-Mortem Raporu' hazırla. Şunları içersin: 1) Executive Summary & Impact, 2) Minute-by-minute Timeline of Events, 3) 5-Whys Root Cause Analysis, 4) What went well vs What went poorly, 5) 3 adet somut önleyici Jira aksiyon maddesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Production'ı patlatan stajyeri asalım mı keselim mi?' komedisi. Cadı avı yapan toksik şirketlerin nasıl çöktüğü ve Blameless kültürün dünyadaki en dayanıklı sistemleri (Google, Netflix, Amazon) nasıl inşa ettiği üzerine harika bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Cadı Avına Son: Neden İnsanları Suçlamak Felaket Getirir?
- 04:15 - Google SRE Blameless Post-Mortem Anatomisi
- 08:35 - Slack Konuşmalarını AI ile Kusursuz Zaman Çizelgesine Çevirmek
- 13:20 - Egzersiz: Takımınızın son krizini Blameless Post-Mortem formatında yeniden yazın
