# Ders 53: Fine-Tuning vs. RAG: Takımınız Hangi Senaryoda Hangisini Seçmeli?

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Her şeye 'Hemen bir model eğitelim (fine-tune)' diyen hype kurbanlarına son: Ne zaman RAG, ne zaman Fine-Tuning, ne zaman sadece Few-Shot prompt seçilmeli?

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir öğrenciye sınavı kazandırmak gibidir. Öğrencinin eline açık kitap sınavında kitaptan ilgili sayfayı açıp verirsen bu RAG'dir (Hızlı, güncel, kolay). Öğrenciye tıp fakültesi jargonu veya özel bir cerrahi el becerisi kazandırmak için aylarca eğitim verirsen bu Fine-Tuning'dir (Pahalı, üslup değiştirir ama yeni bilgiyi ezberletemez). Bilgi için RAG, üslup ve biçim için Fine-Tuning seçilir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Bilgi Kaynağı** | Her yeni bilgide modeli tekrar eğitmeye (Fine-Tuning) çalışıp batmak. | Dinamik şirket verileri için RAG, format ve üslup için hafif Fine-Tuning kullanmak. |
| **Maliyet ve Bakım** | Aylarca GPU kirası ödeyip modeli sürekli drift ile uğraştırmak. | Vektör veritabanı (Qdrant/Pinecone) ve anlık context enjeksiyonu ile %90 daha ucuza çözmek. |
| **Güncellik Hızı** | Statik model ağırlıklarının ilk haftada eskimesi. | Doküman değiştiği an saniyesinde güncellenen RAG indeksleri. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Altın Kural: Daima en basitten başla: 1) Few-Shot Prompt -> 2) RAG -> 3) Fine-Tuning. Asla doğrudan fine-tuning ile başlama.
- 2. Bilgi mi, Biçim mi? (Fact vs Form): Eğer modele yeni bir bilgi öğretmek istiyorsan RAG seç. Modelin konuşma biçimini veya özel bir kod sözdizimini öğretmek istiyorsan Fine-Tuning seç.
- 3. Hibrit Yaklaşım: Büyük şirketlerde en iyi sonuç: Küçük bir açık kaynaklı modeli şirket kod stiliyle fine-tune edip, şirket dokümanlarını RAG ile beslemektir.
- 4. Maliyet-Getiri Analizi: Fine-tune yapmadan önce hesapla: 20.000$ GPU ve mühendislik maliyetine değer mi, yoksa RAG ile ayda 50$ API parası vermek mi daha karlı?

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir hukuk yazılımı şirketi 'Tüm kanunları yapay zekaya ezberleteceğiz' diyerek 6 ay ve 120.000$ harcayıp Llama modelini fine-tune etti. 1 ay sonra Meclis yeni bir kanun çıkarınca model anında eskidi ve çöp oldu. Yeni lead Murat projeyi devraldı: Fine-tune modelini çöpe attı; 2 haftada standart bir Claude API + Qdrant RAG mimarisi kurdu. Kanunlar değiştikçe vektör veritabanı 1 saniyede güncellendi. Sistem %100 güncel kaldı ve maliyet %90 düştü.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Mimari Karar Matrisi: Fine-Tuning mi yoksa RAG mi?
```text
Şirketimizde şu problemi yapay zeka ile çözmek istiyoruz: [PROBLEM VE VERİ TİPİ: Örn: 10 yıllık kurum içi Java kütüphanemizi yazılımcılara hatasız kullandırmak]. Sen bir Baş AI Mimarısın. Bize: 1) Bu senaryoda RAG vs Fine-Tuning vs Few-Shot seçeneklerini maliyet, güncellik, bakım zorluğu ve başarı oranı kriterleriyle karşılaştıran bir ADR (Architecture Decision Record) hazırla, 2) Nihai tavsiyeni ve nedenini açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Hemen kendi yapay zekamızı eğitelim!' diye milyon dolarları yakan vizyonsuz CTO'lar komedisi. RAG ve Fine-Tuning arasındaki farkın en basit analojilerle anlatımı ve şirketlerin parasını koruyan mühendislik aklı.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Fine-Tuning Modası ve Boşa Harcanan Milyon Dolarlar
- 04:15 - Bilgi vs. Biçim (Fact vs Form) Kuralı
- 08:35 - RAG Mimarisi Ne Zaman Rakipsizdir?
- 13:20 - Egzersiz: Takımınızın kullanım senaryosu için 1 sayfalık RAG vs Fine-Tuning karar belgesi hazırlayın
