# AI Çağında Software Team Lead Olmak / AI-Driven Software Team Lead
> **Sıfırdan Uzmanlığa 60 Derslik Rehber • 10 Ana Bölüm • Türkçe & English • PDF & Markdown • NotebookLM & Udemy Ready**

![AI Driven Software Team Lead Cover](assets/cover.jpg)

Bu depo, modern yazılım dünyasında kod yazma ameleliğinden sistem ve insan orkestrasyonuna geçiş yapmak isteyen mühendisler, yeni atanmış ve kıdemli Team Lead'ler, Engineering Manager'lar ve geleceğin CTO'ları için hazırlanmış **eksiksiz bir başucu kaynağıdır**.

---

## 🌟 Proje Özellikleri

1. **60 Kapsamlı Ders (10 Ana Bölüm)**:
   - Hem **60 ayrı parça (Markdown)** halinde (`content/tr/` ve `content/en/`)
   - Hem de **tek parça birleştirilmiş kitap (Markdown)** olarak (`books/tr/` ve `books/en/`)
2. **Çift Dilli (Bilingual)**:
   - Türkçe: *AI Çağında Software Team Lead Olmak*
   - English: *AI-Driven Software Team Lead: Zero to Hero Handbook*
3. **Yüksek Kaliteli PDF Çıktıları**:
   - Google Chrome headless ile derlenmiş, kitap kapağı, içindekiler tablosu ve tipografisiyle baskıya hazır 2 adet devasa PDF (`books/tr/...pdf` ~3.7 MB, `books/en/...pdf` ~3.4 MB).
4. **NotebookLM & Udemy Uyumlu**:
   - Her dersin sonunda Google NotebookLM'in 2 sunuculu sanal podcast üreticisine (`Audio Overview`) doğrudan yapıştırılacak özel tartışma komutları.
   - Her ders için Udemy video süreleri, slayt başlıkları ve pratik takım ödevleri.
5. **İnteraktif Web Sitesi (GitHub Pages / github.io)**:
   - Dark/Light mod, anlık filtreleme, arama motoru, ders okuma penceresi (modal reader), tek tıkla prompt kopyalama ve PDF indirme butonları.

---

## 📚 10 Ana Bölüm Müfredatı (The 10 Modules)

| Bölüm | Türkçe Başlık | English Title | Seviye |
|---|---|---|---|
| **Bölüm 1** | Koddan İnsana ve Yapay Zekaya Geçiş (Ders 01-06) | From Coder to AI-Augmented Leader | Başlangıç / Beginner |
| **Bölüm 2** | AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi (Ders 07-12) | AI-Powered People Leadership & 1-on-1s | Orta / Mid Level |
| **Bölüm 3** | Çevik (Agile) Süreçlerin AI ile Evrimi (Ders 13-18) | Reinventing Agile & Delivery with AI | Orta / Mid Level |
| **Bölüm 4** | Mimari Liderlik ve Kod Kalitesi Standartları (Ders 19-24) | Architectural Stewardship & AI Code Quality | İleri / Advanced |
| **Bölüm 5** | Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları (Ders 25-30) | Autonomous Pipelines, CI/CD & Agentic Dev | İleri / Advanced |
| **Bölüm 6** | İşe Alım, Onboarding ve Yetenek Yönetimi (Ders 31-36) | AI-Era Hiring, Onboarding & Talent Strategy | İleri / Advanced |
| **Bölüm 7** | Kriz Yönetimi, Observability ve Incident Leadership (Ders 37-42) | Incident Response & Production Resilience | İleri / Advanced |
| **Bölüm 8** | Yukarı Doğru Yönetim ve İş Odaklı Liderlik (Ders 43-48) | Managing Up & Business Alignment | Yönetici / Director |
| **Bölüm 9** | Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak (Ders 49-54) | Engineering Team AI Agent Infrastructure | Yönetici / Director |
| **Bölüm 10**| Liderin Kendi Geleceği: Team Lead'likten VP & CTO'luğa (Ders 55-60) | The Executive Horizon: From Lead to VP & CTO | Yönetici / Director |

---

## 🚀 GitHub Pages (github.io) Üzerinde Yayınlama

Bu repo hem kök dizinde (`/`) hem de `docs/` klasöründe yayınlanmaya hazır şekilde tasarlanmıştır:

### Adım 1: GitHub'da Yeni Bir Repo Oluşturun
```bash
git add .
git commit -m "feat: complete 60 lessons book, PDFs, and interactive web portal"
git branch -M main
git remote add origin https://github.com/<KULLANICI_ADINIZ>/<REPO_ADINIZ>.git
git push -u origin main
```

### Adım 2: GitHub Pages'i Aktif Edin
1. GitHub reponuzda **Settings** > **Pages** sekmesine gidin.
2. **Build and deployment** altında **Source** olarak `Deploy from a branch` seçin.
3. **Branch** olarak `main` ve klasör olarak `/ (root)` veya `/docs` seçip **Save** butonuna basın.
4. 1-2 dakika içinde siteniz `https://<KULLANICI_ADINIZ>.github.io/<REPO_ADINIZ>/` adresinde canlıya çıkacaktır!

---

## 🎙️ NotebookLM ile Udemy Podcast Eğitimi Oluşturma

1. [Google NotebookLM](https://notebooklm.google.com)'e gidin.
2. **New Notebook** (Yeni Defter) oluşturun.
3. `books/tr/AI_Driven_Software_Team_Lead_TR.md` (veya İngilizce için `AI_Driven_Software_Team_Lead_EN.md`) dosyasını kaynak olarak yükleyin.
4. Sağ üstteki **Audio Overview** > **Customize** butonuna tıklayın.
5. İlgili dersin altındaki **🎙️ NotebookLM Podcast Tartışma Komutunu** yapıştırın.
6. **Generate** butonuna basın; iki AI sunucusu Udemy dersiniz için stüdyo kalitesinde, esprili ve derin bir ses kaydı üretecektir.

---

## 🛠️ Yerel Geliştirme ve PDF Yeniden Üretimi

Eğer dersleri düzenlemek veya PDF'leri yeniden üretmek isterseniz:

```bash
# Python gereksinimleri (markdown, jinja2 standart)
pip3 install markdown jinja2

# Tüm dersleri, konsolide kitapları ve PDF'leri tek komutla derleyin
python3 scripts/generator.py

# Web sitesini lokalde test edin
python3 -m http.server 8080
# Tarayıcınızda açın: http://localhost:8080
```

---

## 📂 Dizin Yapısı

```
team-lead/
├── index.html                   # GitHub Pages ana web arayüzü
├── styles.css                   # Glassmorphism ve modern responsive tasarım
├── app.js                       # Çok dilli arama ve interaktif okuyucu motoru
├── data.js                      # 60 dersin veri tabanı (JSON formatında)
├── assets/
│   └── cover.jpg                # 3D fütüristik kitap kapağı
├── books/
│   ├── AI_Driven_Software_Team_Lead_TR.pdf   # Türkçe Birleştirilmiş Kitap PDF (3.7 MB)
│   ├── AI_Driven_Software_Team_Lead_EN.pdf   # English Consolidated Book PDF (3.2 MB)
│   ├── AI_Driven_Software_Team_Lead_TR.md    # Türkçe Konsolide Markdown
│   └── AI_Driven_Software_Team_Lead_EN.md    # English Consolidated Markdown
├── content/
│   ├── tr/                      # 60 ayrı Türkçe ders dosyası (module-01 .. module-10)
│   └── en/                      # 60 ayrı İngilizce ders dosyası (module-01 .. module-10)
├── docs/                        # GitHub Pages /docs dağıtım paketi
├── scripts/
│   ├── modules_01_02.py ..      # Müfredat ve ders jeneratörleri
│   └── generator.py             # Master PDF, Markdown ve Web derleyicisi
└── README.md
```

---

**Yazar**: Ali Turgut Bozkurt | *Principal Software Engineer & Cloud Systems Specialist*  
Lisans: MIT - Açık kaynak ve topluluk kullanımına uygundur.
