# Ders 30: Dokümantasyon Kabusunu Bitirmek: Kendi Kendini Güncelleyen Living Docs

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yazıldıktan 2 hafta sonra eskiyen ve kimsenin güncellemediği ölü Confluence sayfalarına son: Kod değiştikçe kendi mimari diyagramlarını ve API spec'lerini güncelleyen sistemler.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir şehrin haritasını kağıda çizip duvara asarsan 1 yıl sonra yeni yapılan yollar ve köprüler o haritada görünmez. Living Documentation ise canlı uydu görüntüsü gibidir; yola bir asfalt döküldüğü an harita kendi kendini anında günceller.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Doküman Güncelliği** | Confluence'taki mimari diyagramların 2021 yılından kalması ve yanlış yönlendirmesi. | Her git commit ve PR merge anında otomatik güncellenen Mermaid.js diyagramları. |
| **Yazma Sorumluluğu** | Yazılımcıların doküman yazmaktan nefret etmesi ve sürekli ertelemesi. | Koddan ve testlerden beslenen AI pipeline'ının dokümantasyonu otomatik derlemesi. |
| **Erişilebilirlik** | PDF ve dağınık Confluence klasörlerinde bilgi aramak. | Repo içinde kodla yan yana yaşayan, interaktif ve doğrulanabilir markdown belgeleri. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Docs-as-Code Felsefesi: Dokümantasyon kodun dışında bir yerde yaşayamaz; `/docs` dizininde kodla aynı repoda tutulmalıdır.
- 2. Mermaid.js ile Yaşayan Diyagramlar: Statik PNG resimleri yasakla; kod gibi versiyonlanan ve text tabanlı çizilen Mermaid diyagramları kullan.
- 3. CI/CD Dokümantasyon Kapısı: Kodda bir API değiştiğinde OpenAPI/Swagger ve README güncellenmemişse PR merge edilemez.
- 4. AI Doküman Bekçisi: PR kapandığında diff'i inceleyip mimari dokümantasyonu otomatik güncelleyen bir GitHub Action botu çalıştır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Büyük bir fintech firmasında yeni bir regülasyon denetimi geldi. Denetçiler sistem mimarisi dokümanını istedi; mevcut Confluence sayfası 3 yıl öncesine aitti ve şirkete 250.000 TL ceza kesilmek üzereydi. Lead Sevgi devreye girdi. 2 gün içinde bir LLM betiğiyle tüm Spring Boot servislerini taratarak canlı OpenAPI ve Mermaid mimari diyagramlarını koddan otomatik türeten bir pipeline kurdu. Denetçiler hayran kaldı; ceza iptal edildi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kod Tabanından Otomatik Mermaid Mimari Diyagramı ve Living Doc Üretici
```text
Aşağıdaki kod dosyaları ve servisler arasındaki bağımlılıkları incele: [KOD DOSYALARI / DTO'LAR]. 1) Bu servislerin veri akışını gösteren temiz bir Mermaid.js sequence / flowchart diyagramı üret, 2) Bu modülün amacını, girdilerini ve çıktılarını anlatan 1 sayfalık kusursuz bir README markdown dokümanı hazırla, 3) Geliştiricilerin dikkat etmesi gereken 3 kritik kullanım kuralını listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Doküman yazmaktan nefret eden yazılımcılar' ve 'Eski dokümana bakıp 3 gününü çöpe atan yeni yazılımcı'. Docs-as-Code kültürü ve yapay zekanın dokümantasyon kabusunu nasıl ebediyen bitirdiği üzerine ilham dolu bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Confluence Mezarlığı: Dokümanlar Neden 2 Haftada Ölür?
- 04:10 - Docs-as-Code ve Mermaid.js ile Yaşayan Mimari
- 08:35 - CI/CD Hattına Otomatik Dokümantasyon Botu Bağlamak
- 13:20 - Egzersiz: Takımınızın en kritik servisi için otomatik güncellenen bir Mermaid diyagramı üretin
