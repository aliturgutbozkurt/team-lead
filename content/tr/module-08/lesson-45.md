# Ders 45: Bütçe, Bulut Maliyetleri (FinOps) ve AI Token Maliyet Optimizasyonu

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Ay sonunda gelen 50.000$'lık sürpriz AWS ve OpenAI faturasıyla C-Level'ın kapınıza dayanmasına son: FinOps kültürü, model routing ve token tasarrufu.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Evdeki tüm odaların ışıklarını, klimalarını ve fırınlarını sonuna kadar açık bırakıp tatile gidersen ay sonunda gelen elektrik faturası yüzünden kalp krizi geçirirsin. FinOps, evde kimse yokken ışıkları kapatan akıllı sensörler kurmaktır. AI token optimizasyonu ise her ufak iş için en pahalı limuzini kiralamak yerine yakındaki bakkala bisikletle gitmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Maliyet Takibi** | Ay sonunda fatura geldiğinde CFO'nun bağırışlarıyla öğrenmek. | Günlük bütçe alarmları, etiketleme (Tagging) ve takım bazlı maliyet panoları. |
| **Model Seçimi** | Her basit işlem için en pahalı modeli (GPT-4o / Claude Opus) çağırmak. | Model Router ile basit işleri ucuz/hızlı modellere (Haiku / 4o-mini), sadece zor işleri pahalı modellere göndermek. |
| **Prompt Optimizasyonu** | Her istekte 50 sayfalık aynı sistem promptunu baştan göndermek. | Prompt Caching kullanarak token maliyetini %90 düşürmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Model Routing Mimarisi: İstekleri karmaşıklığına göre yönlendir; sınıflandırma ve formatlamayı küçük modeller, mimariyi büyük modeller yapsın.
- 2. Prompt Caching: Claude ve OpenAI'ın caching özelliklerini aktif et; tekrarlayan sistem promptları için %90 indirim kazan.
- 3. AWS / Cloud Etiketleme (Tagging): Açılan her EC2, S3 veya RDS kaynağı bir takıma ve projeye etiketlenmek zorundadır; sahipsiz zombi sunucuları otomatik kapat.
- 4. FinOps Dashboard: Takımın haftalık standup'ında bulut maliyet grafiğini 30 saniye göster; harcama bilincini kültüre yerleştir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yapay zeka start-up'ında yazılımcılar her kullanıcı araması için tüm veritabanı şemasını en pahalı LLM'e prompt olarak gönderiyordu. Şirketin aylık LLM faturası 32.000$'a fırladı ve şirket batma noktasına geldi. Yeni lead Tolgahan bir 'Model Gateway' kurdu. Prompt Caching aktif edildi ve sorguların %70'i ucuz küçük modellere yönlendirildi. Fatura 32.000$'dan 3.400$'a indi; yanıt hızı ise 3 kat arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Bulut ve AI Token Harcama Optimizasyon Denetçisi
```text
Şirketimizin aylık AWS ve LLM harcama kalemleri şunlardır: [HARCAMA TABLOSU: EC2, RDS, OpenAI API vb.]. Sen bir FinOps ve Cloud Cost Optimization uzmanısın. 1) Bu harcamalardaki en büyük 3 israf noktasını teşhis et, 2) Token maliyetini %70 düşürecek Prompt Caching ve Model Routing stratejisini açıkla, 3) 30 gün içinde faturayı yarı yarıya indirecek somut aksiyon adımlarını listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Ay sonunda gelen 50.000 dolarlık AWS faturası' şoku yaşayan yazılımcı komedisi. Zombi sunucular, gereksiz pahalı yapay zeka modelleri ve FinOps disiplininin bir şirketi nasıl iflastan kurtardığı üzerine keyifli bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Fatura Şoku: Bulutta ve Yapay Zekada Para Nasıl Buharlaşır?
- 04:15 - Model Routing ve Prompt Caching ile %80 Token Tasarrufu
- 08:35 - FinOps Kültürü: Zombi Sunucuları Avlamak
- 13:20 - Egzersiz: Takımınızın API ve Cloud maliyetini düşürecek 3 maddelik FinOps planı yapın
