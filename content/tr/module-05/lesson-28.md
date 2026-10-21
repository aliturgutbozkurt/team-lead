# Ders 28: Kendi Kod Tabanınızı Konuşulabilir Yapmak: Kod Tabanı RAG ve Knowledge Base

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Milyonlarca satırlık şirket kodunu ve Confluence belgelerini akıllı bir arama ve sohbet motoruna dönüştürmek: Kod tabanı embedding'leri ve yerel RAG mimarileri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> 100.000 ciltlik dev bir kütüphanede aradığın tek bir bilgiyi bulmak için aylarca rafları taramak yerine; kütüphanedeki her cümlenin nerede olduğunu ezbere bilen bir kütüphane görevlisine 'Bana 3 numaralı ödeme akışındaki komisyon hesaplamasını getir' dediğinde sana 3 saniyede o sayfayı açıp önüne koymasıdır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Tabanını Anlama** | Senior mühendisin 'O kısma Ahmet bakıyordu, ona sor' demesi (Ahmet tatile gidince tıkanmak). | Kod tabanı RAG sistemine doğal dille soru sorup dosya ve satır referanslarıyla anında yanıt almak. |
| **İndeksleme** | Sadece düz metin arama (grep / ctrl+f) ile kelime eşleştirmek. | AST (Abstract Syntax Tree) ve semantik vektör embedding'leri ile mimari bağıntıları sorgulamak. |
| **Güvenlik** | Şirket kodlarını izinsiz açık LLM'lere yapıştırma riski. | Yerel (On-premise / VPC içi) embedding ve RAG modelleriyle sıfır veri sızıntısı. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Semantik İndeksleme: Kodları sadece düz metin olarak değil; AST yapısı, fonksiyon imzaları ve mimari ilişkileriyle vektör veritabanına (Qdrant/Chroma/Pinecone) indeksle.
- 2. Çok Katmanlı Arama (Hybrid Search): Düz anahtar kelime araması (BM25) ile semantik vektör aramasını birleştir.
- 3. Gizlilik ve Güvenlik Sınırları: Şirketin kaynak kodlarının dışarıya çıkmadığından emin olmak için şirket içi VPC veya onaylı kurumsal LLM API'leri kullan.
- 4. Dokümantasyonla Birleştir: Sadece kodu değil; mimari kararları (ADR), PR açıklamalarını ve post-mortem raporlarını da aynı bilgi havuzuna bağla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir bankanın 4 milyon satırlık monolitik ödeme sisteminde yeni başlayan yazılımcıların ilk PR'ını açması ortalama 3 ay sürüyordu çünkü kimse kodun nereye bağlandığını bilmiyordu. Lead Cenk, açık kaynaklı bir RAG pipeline'ı kurarak tüm repo ve Confluence dokümanlarını indeksledi. Yeni katılanlar 'Döviz dönüşüm kuru hangi servisten okunuyor?' gibi soruları bot üzerinden anında çözmeye başladı. Onboarding süresi 3 aydan 2 haftaya indi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kod Tabanı RAG Arama ve Semantik Sorgulama Şablonu
```text
Sen bizim dahili mikroservis kod tabanımızı adım adım bilen Kıdemli Sistem Mimarı RAG botusun. Soru: '[SORU BURAYA GELECEK: Örn: Sipariş iptal edildiğinde fatura iadesi hangi kuyruktan tetikleniyor?]'. Bana yanıt verirken: 1) Doğrudan ilgili dosya ve sınıf referanslarını ver, 2) İş akışını adım adım numaralandır, 3) Dikkat edilmesi gereken olası concurrency ve veri tabanı kısıtlarını belirt.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Eski projenin kodlarını sadece şirketten 5 yıl önce ayrılan efsanevi yazılımcı biliyordu' trajedisi. Kod tabanı RAG sistemlerinin kurumsal cehaleti nasıl yok ettiği ve yeni katılan yazılımcılara süper güçler verdiği üzerine harika bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Kurumsal Cehalet: Milyonlarca Satır Kodda Kaybolmak
- 04:10 - Kod Tabanı RAG Mimarisi: AST + Vektör Arama Nasıl Çalışır?
- 08:45 - Şirket Verisini Sızdırmadan Yerel RAG Kurma Rehberi
- 13:30 - Egzersiz: Takımınızın en karmaşık reposu için bir prototip RAG pipeline'ı tasarlayın
