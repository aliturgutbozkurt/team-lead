# Ders 33: 1 Günde İlk PR: AI Destekli Roket Hızında Onboarding Süreci

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yeni başlayan bir yazılımcının lokal ortam kurmak için 2 hafta debelenmesi skandalına son: DevContainer'lar, AI onboarding asistanı ve ilk 24 saatte merge edilen ilk PR.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Yeni kiraladığın eve taşındığında evin elektriği, suyu, interneti açık olmalıdır; anahtarı çevirip içeri girersin. Eğer ev sahibi sana 'Git sokaktan su borusu döşe, elektrik trafosuna kablo çek' derse oradan kaçarsın. Harika bir onboarding, mühendisin ilk gün tek tıkla kodlamaya başlayabilmesidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Ortam Kurulumu** | 40 sayfalık eski wiki sayfasına bakıp 3 gün boyunca eksik kütüphane aramak. | DevContainers / Codespaces ile tek tıkla 2 dakikada ayağa kalkan Docker ortamı. |
| **İlk Teslimat** | Yeni yazılımcının ilk ay sadece izlemesi, koda dokunmaya korkması. | İlk 24 saat içinde ufak bir düzeltme veya test ile ilk PR'ını açıp kutlamak. |
| **Soru Sorma** | Kıdemlileri rahatsız etmekten korkup saatlerce ekrana boş bakmak. | Şirket içi AI Onboarding Botu'na sınırsızca ve çekinmeden soru sormak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 24 Saat / İlk PR Kuralı: Yeni mühendisin ilk gün mesai bitmeden küçük de olsa bir PR'ı prod/staging hattına merge edilmelidir (Psikolojik zafer).
- 2. Tek Tıkla Ortam (DevContainers): 'Benim makinemde çalışıyordu' bahanesini yok et; tüm bağımlılıkları tek bir konfigürasyonda otomatikleştir.
- 3. AI Onboarding Buddy: Yeni çalışana projenin mimarisini, git akışını ve terminolojisini anlatan özel sistem promptlu bir LLM asistanı ver.
- 4. 30 Günlük Yol Haritası: Gün gün ne yapacağını belirten net bir 'Onboarding Checklist' hazırla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir ödeme kuruluşunda yeni işe başlayan mühendisler ortalama 18 günde ilk commit'ini atabiliyordu çünkü veritabanı izinleri ve lokal ortam kabustu. Yeni lead Gamze bir devrim yaptı: Projeyi DevContainer'a taşıdı ve 'İlk Gün Görevi' olarak bir test biletini hazırladı. Yeni katılan junior mühendis Mert, sabah 09:00'da işe başladı, 11:00'de ortamı kuruldu, 15:30'da ilk PR'ını açtı ve 17:00'de canlıya çıktı. Takımın morali ve şirketin onboarding skoru rekor kırdı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Yeni Katılan Mühendis İçin 24 Saatte İlk PR Onboarding Kılavuzu
```text
Biz şu teknolojileri kullanan bir ekibiz: [DİL, FRAMEWORK, VERİTABANI]. Ekibimize yeni katılacak bir mühendisin ilk 24 saatte ilk PR'ını açmasını sağlayacak kusursuz bir 'Onboarding Yol Haritası ve İlk Gün Rehberi' hazırla. Şunları içersin: 1) DevContainer kurulum adımları, 2) İlk gün seçilebilecek 3 örnek risksiz görev tipi, 3) Takım içi AI onboarding asistanına sorabileceği 5 kritik başlangıç sorusu.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: İlk iş gününde 'Şu 40 sayfalık Confluence dokümanını oku' denilerek köşeye atılan yazılımcı travması ve ilk 24 saatte ilk PR'ını merge ettiren modern liderlik anlayışı üzerine ilham verici bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Onboarding Felaketi: Yeni Başlayanlar Neden İlk Ayda Soğur?
- 04:15 - DevContainers ile Tek Tıkla Ortam Kurulumu
- 08:35 - 24 Saatte İlk PR Kuralının Psikolojik Gücü
- 13:20 - Egzersiz: Takımınız için 1 günlük 'First PR' onboarding kiti hazırlayın
