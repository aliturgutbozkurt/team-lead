# Ders 24: Güvenlik (SecOps) ve Lisanslama: AI Üretimi Kodda Hallucination & Vulnerability Avı

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zekanın ürettiği güvenlik açıkları (SQL Injection, XSS, insecure deserialization) ve telif hakkı (GPL sızıntısı) risklerine karşı Lead'in savunma kalkanı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Yolda bulduğun parlak bir USB belleği getirip şirketin sunucusuna takar mısın? Takmazsın; çünkü içinde virüs olabilir. Yapay zekanın sana internetten derleyip sunduğu her kod parçası da o sahipsiz USB bellek gibidir. İçinde gizli bir açık, eski bir kütüphane veya şirketinizi mahkemelik edecek lisanslı bir telif kodu olabilir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Güvenlik Denetimi** | Yılda bir kez penetrasyon testi yaptırıp çıkan 200 sayfalık PDF'i okumak. | Her PR açıldığında otomatik SAST/DAST ve AI güvenlik ajanlarını çalıştırmak. |
| **Lisans Riskleri** | Yazılımcıların GPL/AGPL kod kopyalayıp şirketi telif davası riskine sokması. | Telif koruma filtreleri (Public Code Filter) ve otomatik lisans tarayıcılar (FOSSA) kullanmak. |
| **Paket Halüsinasyonu** | Geliştiricinin AI'ın önerdiği paketi sorgulamadan npm install etmesi. | Paketin indirilme sayısı, yazarı ve GitHub reposunu doğrulamadan kurulamayan şirket içi repo registry'si. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Slopsquatting Koruması: AI modelleri bazen var olmayan paket isimleri uydurur. Hackerlar bu isimlerde zararlı paketler yayınlar. Asla indirilme sayısı ve doğrulanmış yazarı olmayan paketi kurma.
- 2. Public Code Filter'ı Açık Tut: GitHub Copilot ve Cursor'da 'Match public code' filtresini daima blokla; şirketin fikri mülkiyetini koru.
- 3. DevSecOps Pipeline'ı: Git commit anında Secret Scanning (Trufflehog), PR anında SAST (Semgrep) ve bağımlılık taraması (Snyk) zorunlu olsun.
- 4. LLM Özel Açıkları (OWASP Top 10 for LLM): Prompt injection ve veri sızıntısı senaryolarına karşı güvenlik eğitimleri düzenle.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sağlık teknolojisi start-up'ında yazılımcı, Claude'un önerdiği `fast-health-validator` isimli bir npm paketini projeye ekledi. Meğerse Claude o paketi halüsinasyon olarak uydurmuştu ve bir Rus hacker grubu o isimle zararlı bir paket açmıştı. Paket production'a çıktı ve 10.000 hastanın verisi dışarı sızdı. Şirket büyük bir ceza aldı. Yeni gelen lead Kerem, şirkete özel JFrog Artifactory kurdu ve onaylanmamış paketlerin yüklenmesini tamamen engelledi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ SecOps Kapsamlı Güvenlik Açığı ve Lisans Riski Denetçisi
```text
Aşağıdaki kod ve kullanılan kütüphaneleri incele: [KOD VE BAĞIMLILIKLAR]. Sen bir Ethical Hacker ve Baş Bilgi Güvenliği Yöneticisisin (CISO). 1) Bu kodda OWASP Top 10'a giren güvenlik açıkları (SQLi, XSS, SSRF, Deserialization) var mı? 2) Kullanılan kütüphanelerde lisans riski (GPL/AGPL) veya sahte paket riski var mı? 3) Kodun güvenli versiyonunu ve güvenlik açıklarını kapatan düzeltmeleri sun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Yapay zeka bana kod yazdı, artık güvendeyiz' diyen naif yazılımcı ile AI'ın uydurduğu sahte paketlerle şirketlerin nasıl hacklendiğini anlatan siber güvenlik uzmanı. Tüyleri ürperten ama bilgilendirici ve eğlenceli bir podcast bölümü.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Slopsquatting Nedir? Yapay Zekanın Sahte Paket Tuzağı
- 04:20 - Telif Hakları ve GPL Riski: Şirketinizi Mahkemelik Olmaktan Koruyun
- 08:45 - DevSecOps Hattı Kurmak: Semgrep ve Trufflehog ile Otomatik Güvenlik
- 13:30 - Egzersiz: Takımınızın reposunda Semgrep taraması çalıştırıp güvenlik karnesi çıkarın
