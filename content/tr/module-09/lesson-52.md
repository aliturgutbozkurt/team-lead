# Ders 52: AI Çıktılarını Otomatik Değerlendirme (Evals) ve Benchmark Sistemleri

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Bence bu prompt daha iyi çalışıyor' gibi sübjektif hislere son: AI sistemlerinin kalitesini matematiksel olarak ölçen Eval pipeline'ları ve LLM-as-a-Judge mimarisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir sporcunun iyi koşup koşmadığını 'Bence bugün çok havalı koştu' diyerek ölçemezsin; eline kronometreyi alır, 100 metreyi kaç saniyede koştuğunu salisesine kadar kaydedersin. Evals, yapay zekanın eline tuttuğun o kronometredir. Promptu değiştirdiğinde sistem daha mı iyi oldu yoksa geriye mi gitti rakamlarla görürsün.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kalite Kararı** | Geliştiricinin 3 prompt deneyip 'Güzel çalışıyor' diyerek canlıya basması (Vibes-based). | 100 adet gerçek test vakasından oluşan Eval veri setinde %94 başarı puanı alma şartı. |
| **Regresyon Tespiti** | Promptu değiştirince başka bir özelliğin bozulduğunu müşterilerden öğrenmek. | CI/CD hattında çalışan otomatik eval testleri ile anında kırmızı alarm almak. |
| **Değerlendirme Hakemi** | İnsanların yüzlerce satır çıktıyı tek tek okumaya çalışıp yorulması. | Katı bir rubrikle puanlama yapan tarafsız LLM-as-a-Judge mimarisi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Altın Veri Seti (Golden Dataset) Oluştur: Sistemin karşılaşacağı en zor 50 gerçek senaryoyu, girdileri ve beklenen doğru çıktıları JSON olarak kaydet.
- 2. LLM-as-a-Judge: Daha güçlü bir akıl yürütme modelini (GPT-4o / Claude Sonnet) hakem yap; üretilen kodları güvenlik, doğruluk ve stil rubriğine göre 1-5 arası puanlat.
- 3. CI/CD'ye Eval Kapısı: Prompt veya model değiştiğinde Eval skoru %90'ın altına düşerse PR merge edilemez.
- 4. Hata Analizi: Patlayan eval senaryolarını kümeleyip prompttaki hangi kuralın eksik olduğunu tespit et.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir müşteri hizmetleri yapay zeka botu yapan start-up'ta bir yazılımcı promptu 'biraz daha samimi olsun' diye değiştirdi. Canlıya geçince bot kullanıcılara yanlışlıkla %50 indirim kodu dağıtmaya başladı; şirket 80.000$ zarar etti. Lead Damla şirkete anında 'Prompt Evals' altyapısı kurdu. 150 adet geçmiş kriz senaryosu benchmark haline getirildi. Artık hiçbir prompt değişikliği bu 150 testten tam puan almadan canlıya çıkamıyor.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ LLM-as-a-Judge ve Otomatik Eval Puanlama Rubriği
```text
Sen dünyanın en tarafsız ve titiz Baş Hakem AI'ısın (LLM-as-a-Judge). Görevin, bir yapay zekanın ürettiği şu çıktıyı: [ÜRETİLEN ÇIKTI], verilen şu zemin gerçekle (Ground Truth): [DOĞRU ÇIKTI] kıyaslamak. Şu rubrik üzerinden 1-5 arası puan ver ve gerekçeni yaz: 1) Teknik Doğruluk, 2) Güvenlik ve Halüsinasyon Yokluğu, 3) Domain Kısıtlarına Uyum. Çıktını JSON formatında `{score: number, reasoning: string, pass: boolean}` olarak üret.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Hislerle prompt yazan' amatör yazılımcı ile 'Bana rakamlarla gel!' diyen bilimsel Lead. Eval sistemlerinin yapay zekayı bir falcılık olmaktan çıkarıp gerçek bir mühendislik disiplinine nasıl dönüştürdüğü üzerine çarpıcı bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - 'Hislerle Mühendislik' Yapmaya Son: Evals Nedir?
- 04:15 - Altın Veri Seti (Golden Dataset) Nasıl Hazırlanır?
- 08:35 - LLM-as-a-Judge Mimarisi ve Puanlama Rubrikleri
- 13:20 - Egzersiz: Takımınızın en kritik promptu için 5 testlik bir Eval veri seti yazın
