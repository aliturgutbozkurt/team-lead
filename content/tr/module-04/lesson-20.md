# Ders 20: AI Destekli Code Review (PR) Devrimi: Botlar vs. İnsan Gözü

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İnsanları noktalı virgül ve tip kontrolü yapmaktan kurtarmak: AI PR botları ile ilk kademe filtreleme, insanların sadece mimariye ve iş mantığına odaklanması.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Havalimanındaki güvenlik kontrolü gibidir. Önce çantanı X-ray cihazından (AI Bot) geçirirler; bıçak, çakmak, su var mı makine 2 saniyede bakar. Güvenlik görevlisi (İnsan Mühendis) ise senin pasaportuna, yüzüne ve seyahat amacına bakar. Güvenlik görevlisinin çantanı açıp tek tek çoraplarını saymasına gerek yoktur.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **PR İnceleme Süresi** | PR'ın 4 gün boyunca listede bekleyip unutulması. | AI botunun ilk 60 saniyede inceleme yapması, insanın 20 dakikada onaylaması. |
| **İnceleme İçeriği** | Yorumların %80'inin formatlama, isimlendirme ve küçük detaylar olması. | Formatlamayı botun düzeltmesi; insanların sadece domain mimarisine odaklanması. |
| **PR Boyutu** | 80 dosyalık devasa PR'lar ('Looks Good To Me' deyip geçilirdi). | Maksimum 250 satırlık küçük, atomik ve AI özetli PR standartı. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İki Kademeli PR Filtresi (Two-Tier Review): 1. Kademe: Linter + AI PR Bot (Coderabbit / GitHub Copilot for PRs). 2. Kademe: İnsan mühendis.
- 2. Bot Geçmeden İnsan Bakamaz: AI botu güvenlik açığı veya test eksikliği bulduysa insan mühendisin takvimine inceleme bildirimi düşmez.
- 3. 250 Satır Kuralı: 250 satırdan büyük PR'lar incelemeyi imkansız kılar. Büyük işleri feature flag arkasında küçük PR'lara böldür.
- 4. PR Açıklama Şablonu: Mühendis PR açarken 'Bu PR neyi çözüyor?' ve 'Hangi testler yapıldı?' kısımlarını AI ile özetlemek zorundadır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret takımında PR review süresi ortalama 4.2 gündü ve mühendisler sürekli birbirinin koduna 'Burada boşluk bırakmamışsın' diye passive-aggressive yorumlar yazıyordu. Lead Hakan, takıma otomatik AI PR botu entegre etti ve linter kurallarını katılaştırdı. Biçimsel tüm tartışmalar bitti. PR bekleme süresi 4.2 günden 6 saate indi; mühendislerin birbirine saygısı ve takım morali hissedilir derecede arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kıdemli Yazılım Mühendisi Düzeyinde PR İnceleme Botu Promptu
```text
Sen GitHub PR'larını inceleyen kıdemli bir mühendissin. Aşağıdaki git diff çıktısını incele: [GIT DIFF]. Şu kurallara uy: 1) İsimlendirme veya formatlama gibi linter'ın çözeceği şeylere yorum yapma, 2) Olası null-pointer hatalarını, race condition risklerini ve eksik yazılmış test senaryolarını tespit et, 3) Performans darboğazı (N+1 query vb.) var mı belirt, 4) Yorumlarını yapıcı, net ve gerekçeli olarak markdown formatında listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 1500 satırlık devasa bir PR'ı 'LGTM' (Looks Good To Me) diyerek hiç bakmadan onaylayan tembel mühendis ile noktalı virgül yüzünden kriz çıkaran pedantik mühendis. AI botlarının code review kültürünü nasıl medenileştirdiğini anlatan eğlenceli bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Code Review Kabusu: Neden PR'lar günlerce bekler?
- 04:20 - İki Kademeli PR Mimarisi: Botlar ve İnsanların Görev Dağılımı
- 08:45 - 250 Satır Kuralı ve Atomik PR Kültürü
- 13:10 - Egzersiz: Takımınızın GitHub reposuna AI Code Reviewer botu bağlayın
