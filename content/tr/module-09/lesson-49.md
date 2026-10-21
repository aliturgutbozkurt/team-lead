# Ders 49: Takıma Özel Yerel LLM ve Ajan Gateway Kurulumu: Güvenli & KVKK Uyumlu AI

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Şirketin hassas müşteri ve finansal verilerini kamuya açık yapay zekalara kaptırmadan; Ollama, vLLM ve dahili LiteLLM Proxy ile %100 güvenli AI altyapısı kurmak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Şirketin tüm gizli muhasebe defterlerini şehrin ortasındaki umumi fotokopiciye götürüp 'Bunu çoğalt' dersen polis de basar, hırsız da çalar. Yerel AI kurmak, şirketin kendi bodrum katına yüksek güvenlikli, kapalı devre bir fotokopi makinesi koymaktır; hiçbir kağıt binadan dışarı çıkmaz.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Veri Güvenliği** | Yazılımcıların müşteri kredi kartı loglarını izinsiz açık ChatGPT'ye yapıştırması. | LiteLLM Proxy üzerinde çalışan otomatik PII Redaction (Veri Maskeleme) ile sıfır sızıntı. |
| **Model Barındırma** | Sadece dış API'lara bağımlı olmak (İnternet veya sağlayıcı kopunca işin durması). | Kritik servislerde kurum içi sunucularda koşan açık kaynaklı modeller (Llama 3.3, Qwen, DeepSeek). |
| **Maliyet ve Denetim** | Kimin hangi modele ne kadar token harcadığının bilinememesi. | Merkezi Gateway üzerinden kullanıcı bazlı kota, bütçe ve log denetimi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Merkezi AI Gateway Katmanı (LiteLLM / Portkey): Tüm takım isteklerini tek bir şirket içi proxy üzerinden geçir; API anahtarlarını geliştiricilere değil gateway'e ver.
- 2. Otomatik PII Maskeleme: Koddaki API key'leri, kimlik numaralarını ve e-postaları LLM'e gitmeden önce regex ve Presidio ile yıldızla (`***`).
- 3. Yerel Çıkarım (Local Inference): Geliştirici laptoplarında veya iç Kubernetes kümesinde Ollama / vLLM ile Llama 3 veya DeepSeek modellerini barındır.
- 4. KVKK / GDPR Uyumluluk Politikası: Şirketin hukuk birimiyle onaylı bir 'Yapay Zeka Veri İşleme Politikası' yayınla; çalışanların neyi nerede kullanacağını netleştir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sağlık teknolojisi firmasında bir yazılımcı, hasta röntgen tahlil kodunu debug etmek için açık bir yapay zekaya yapıştırdı. Sağlık Bakanlığı denetiminde veri ihlali tespit edildi ve şirkete 1.5 milyon TL ceza kesildi. Lead Alperen hemen bir AI Gateway projesi başlattı. Şirketin VPC'si içine LiteLLM ve yerel Llama modelleri kuruldu; tüm dış çağrılarda otomatik kimlik anonimleştirici devreye alındı. Şirket 'Sağlık Verisi Uyumlu AI' sertifikası aldı ve rakiplerinin önüne geçti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ LiteLLM Gateway ve PII Veri Maskeleme Konfigüratörü
```text
Biz 20 kişilik bir mühendislik takımıyız. Takımımızın OpenAI, Claude ve yerel Ollama modellerini güvenli, KVKK uyumlu ve merkezi bütçe kotalı kullanabilmesi için bir `docker-compose.yml` ve `litellm_config.yaml` mimarisi hazırla. Şunları içersin: 1) Model fallback zinciri, 2) API key ve PII maskeleme kuralları, 3) Geliştirici başına aylık 50$ kullanım limiti.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Şirket kodunu yapay zekaya kaptıran acemi yazılımcı' paniği. Yerel modellerin (Ollama/vLLM) inanılmaz yükselişi ve şirketlerin kendi güvenli AI kalelerini nasıl kurabileceği üzerine sürükleyici bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - KVKK ve GDPR Kabusu: Veri Sızıntısı Şirketleri Nasıl Batırır?
- 04:15 - LiteLLM Proxy ile Merkezi AI Gateway Kurulumu
- 08:35 - Yerel Modeller: Ollama ve vLLM ile Şirket İçi Çıkarım
- 13:20 - Egzersiz: Lokalinizde Ollama ile ilk gizli kodlama asistanınızı ayağa kaldırın
