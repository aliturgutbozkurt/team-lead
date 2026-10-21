# Ders 09: Takım İçi Çatışma Çözümü: Sessiz Kırgınlıkları ve Ego Savaşlarını Önlemek

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İki senior mühendis farklı kütüphaneler veya mimariler için birbirine girdiğinde: Kutsal savaşları (tabs vs spaces, REST vs GraphQL) rasyonel veriye ve ADR'a dönüştürme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> İki şoförün otobüsün rengi sarı mı olsun kırmızı mı olsun diye yolun ortasında kavga edip yolcuları bekletmesine izin veremezsin. Önemli olan otobüsün rengi değil, yolcuları vaktinde ve güvenle gideceği yere götürmesidir. Lider, tartışmayı zevklerden çıkarıp müşteri ihtiyacı tablosuna taşır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Tartışma Ekseni** | 'Ben 10 yıldır böyle yapıyorum, en doğrusu bu' (Kıdem egosu). | 'Gereksinimlerimiz X, Y, Z. Bu iki yaklaşımın gecikme, maliyet ve bakım metriklerini kıyaslayalım.' |
| **Karar Mekanizması** | Kimin sesi daha çok çıkarsa veya kim daha kıdemliyse onun dediği olur. | AI ile tarafsız bir Trade-off Matrisi çıkarıp Architecture Decision Record (ADR) imzalamak. |
| **Sonuç** | Kaybeden tarafın projeyi pasif-agresif sabote etmesi. | 'Disagree and Commit' ilkesiyle herkesin kararı sahiplenmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Dini Savaşı Mühendislik Problemine Çevir: 'Hangisi daha iyi?' sorusunu yasakla; 'Bizim yükümüz ve ekibimiz için hangi kısıtlar var?' diye sor.
- 2. Tarafsız Hakem Olarak AI Trade-Off Matrisi: İki yaklaşımın da avantaj ve dezavantajlarını kurumsal kısıtlarla LLM'e analiz ettir.
- 3. 48 Saatlik Timebox ve Spike: Tartışmayı uzatmak yerine iki tarafa da 1'er günlük prototip (spike) süresi ver; metriklerle masaya oturt.
- 4. Disagree and Commit Kültürü: Karar verildikten sonra tartışma biter; herkes kararın arkasında durur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
SaaS şirketinde iki kıdemli mühendis GraphQL mi yoksa REST mi kullanılmalı diye 3 hafta boyunca Slack'te kavga etti, sprint durdu. Yeni lead Burak devreye girdi. İki taraftan da 1 sayfalık teknik tezlerini istedi. Bu tezleri Claude'a verip takımın mobil client kısıtlarına ve caching gereksinimlerine göre tarafsız bir matris çıkarttı. Matriste REST + partial responses seçeneğinin %30 daha az maliyetli olduğu netleşti. İki mühendis de el sıkıştı ve 3 haftalık kriz 2 saatte bitti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Teknik Çatışma Çözücü ve Tarafsız Mimari Karar Matrisi
```text
Takımımda iki kıdemli mühendis şu konuda anlaşmazlığa düştü: [A Seçeneği] vs [B Seçeneği]. Projemizin kısıtları: [Teknoloji yığını, bütçe, ekip deneyimi, beklenen trafik]. Bu iki seçeneği şu kriterlere göre tarafsız bir puanlama tablosu (1-5) ve gerekçeleriyle analiz et: 1) Öğrenme eğrisi, 2) Bakım maliyeti, 3) Performans, 4) Ekip içi riskler. Sonunda bir uzlaşı önerisi getir.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri koyu bir 'Microservices ve Kafka' fanatiği, diğeri fanatik bir 'Modular Monolith' savunucusu. İki egonun çarpışmasını taklit edip araya giren Team Lead'in veriye dayalı analiziyle nasıl uzlaştıklarını kahkahalarla anlatan bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Yazılımcı Egosunun Anatomisi: Kutsal Teknolojik Savaşlar
- 04:15 - 'Disagree and Commit' (Amazon İlkesi) Nasıl Uygulanır?
- 08:30 - AI Destekli ADR (Architecture Decision Record) Hazırlama
- 13:00 - Egzersiz: Takımınızdaki geçmiş bir teknik tartışmayı matrisle yeniden değerlendirin
