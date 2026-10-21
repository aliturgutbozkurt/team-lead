# Ders 50: Context Engineering ve Prompt Yönetimi: Şirket Hafızasını LLM'e Yedirmek

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Prompt mühendisliği öldü, yaşasın Bağlam Mühendisliği (Context Engineering): Modele ne istediğini değil, karar vermesi için gereken doğru veri ve sistem sınırlarını besleme sanatı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir avukata mahkemeye çıkmadan önce 'Müvekkilimi savun' demek boş bir prompttur. Ama avukatın önüne olayın polis tutanağını, kamera kayıtlarını, adli tıp raporunu ve ilgili kanun maddesini koyarsan (Context Engineering), avukat mahkemede harikalar yaratır. Yapay zeka bağlam olmadan sadece laf kalabalığı yapar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yaklaşım** | 'Sen kıdemli yazılımcısın, lütfen kodu hatasız yaz' gibi süslü laflar (Prompt Eng). | İlgili DTO'lar, DB şeması, son hata logu ve testleri dinamik bağlam olarak enjekte etmek (Context Eng). |
| **Hata Sebebi** | 'Model aptal, halüsinasyon gördü' diye modele kızmak. | 'Biz modele doğru bağlamı ve kısıtları veremedik' diyerek veri akışını düzeltmek. |
| **Bağlam Yönetimi** | Tüm repoyu rastgele LLM penceresine tıkıp modelin aklını karıştırmak. | Sadece gerekli 200 satırlık dilimi cerrahi hassasiyetle seçen akıllı RAG ve parser'lar. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Çöp Girerse Çöp Çıkar (Garbage In, Garbage Out): LLM'in performansı, promptun edebi güzelliğine değil, içine konan bağlamın saflığına bağlıdır.
- 2. Dinamik Bağlam Enjeksiyonu: Mühendisin IDE'sindeki açık dosya, ilgili git diff'i ve aktif Jira biletinin kabul kriterlerini otomatik toplayan scriptler yaz.
- 3. Sistem Promptlarını Kod Gibi Versiyonla: Şirketin sistem promptlarını Git'te tut, PR ile incele ve CI/CD ile test et.
- 4. Token Bütçesi Dağılımı: 100k tokenlık pencerede: %10 Sistem kuralları, %60 Temiz bağlam ve örnekler (Few-shot), %10 Kullanıcı sorusu, %20 Üretim alanı.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret takımında yazılımcılar 'Claude bizim projeyi anlamıyor, sürekli var olmayan metotları çağırıyor' diye şikayet ediyordu. Lead Ceyda projeyi inceledi: Yazılımcılar Claude'a sadece 'Şu servisi yaz' diyordu. Ceyda takıma özel bir CLI aracı yazdı (`team-ctx`). Bu araç, yazılımcının çalıştığı dosyanın bağımlılık ağacını, veritabanı migration dosyasını ve son OpenAPI spec'ini otomatik toplayıp bağlam olarak LLM'e yüklüyordu. Halüsinasyon oranı %80 azaldı, ilk denemede derlenen kod oranı %92'ye çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Dinamik Context Assembler ve Sistem Promptu Optimizatörü
```text
Bir yazılım takımı için Bağlam Mühendisliği (Context Engineering) şablonu tasarlıyoruz. Şu bilgileri girdi olarak alıp en optimize bağlam zarfını (Context Envelope) üreten bir yapı kur: 1) Sistem Kuralları (Maksimum 500 token), 2) İlgili Veritabanı Şeması ve DTO'lar, 3) 2 adet kusursuz Few-Shot örnek, 4) Kullanıcının spesifik task'ı. Bu bağlamın neden halüsinasyonu sıfırladığını açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Prompt mühendisliği bitti mi?' tartışması. Süslü prompt yazarları ile veriyi ve bağlamı doğru kurgulayan gerçek sistem mimarları arasındaki fark üzerine ufuk açıcı bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Prompt Engineering Efsanesi vs. Context Engineering Gerçeği
- 04:15 - Bağlam Zarfı (Context Envelope) Mimarisi
- 08:35 - Token Bütçesini Yönetmek: Halüsinasyonu Matematikle Engellemek
- 13:20 - Egzersiz: Takımınız için otomatik bağlam toplayan 1 sayfalık script yazın
