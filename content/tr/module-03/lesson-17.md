# Ders 17: Teknik Borç (Tech Debt) Yönetimi: İş Birimlerine Teknik Borcu Anlatmanın Formülü

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yönetime 'Kod çok çirkin, refactor etmemiz lazım' derseniz bütçe alamazsınız. Teknik borcu finansal risk, müşteri kaybı ve yavaşlama faizi olarak anlatma sanatı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Kredi kartından sürekli asgari tutarı ödeyip alışveriş yapmaya devam edersen, bir gün kart faizleri maaşını yutar ve aç kalırsın. Teknik borç yazılımın kredi kartı borcudur. Her sprint sadece faizi ödersen yeni hiçbir özellik geliştiremez hale gelirsin. Lider, yönetime faizin ne kadar kabardığını gösteren finans müdürüdür.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **İletişim Dili** | 'Design pattern'larımız çok kötü, clean code prensiplerine uymuyor.' | 'Bu modül yüzünden her yeni özellik %40 daha geç çıkıyor ve ayda 40.000$ geliştirme maliyeti yakıyoruz.' |
| **Zaman Tahsisi** | Yönetimden gizli gizli kod temizliği yapıp yakalanınca azar işitmek. | Her sprint kapasitesinin %20'sini resmi olarak 'Teknik Sağlık ve Borç Ödeme'ye sabitlemek. |
| **Gerekçelendirme** | Sübjektif yazılımcı rahatsızlığı. | AI ile kod karmaşıklığı (cyclomatic complexity), hata geçmişi ve maliyet simülasyonu raporu sunmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. %20 Vergi Kuralı (Tech Debt Tax): Her sprint iş birimiyle anlaş: Kapasitenin %70'i yeni işler, %20'si teknik borç/altyapı, %10'u deneysel AI araştırması.
- 2. Borcu Rakamlaştır: 'Bu servis kötü' deme; 'Bu servisteki her değişiklikte ortalama 2.3 regression bug çıkıyor ve 18 saatlik mühendislik mesaisi harcıyoruz' de.
- 3. AI Destekli Maliyet-Fayda Raporu: Claude veya ChatGPT ile iş biriminin anlayacağı dilde 'Refactor ROI Yönetici Özeti' hazırla.
- 4. Borç Kaydı Tut (Tech Debt Backlog): Teknik borçları halının altına süpürme; Jira'da ayrı bir etiketle takip et ve her ay en yüksek faizli olanı kapat.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir lojistik platformunda ana sipariş veritabanı kilitleniyordu ama ürün müdürü ısrarla refactor bütçesi vermiyordu. Lead Mert, son 6 aydaki sipariş kesintilerini ve müşteri iptallerini çıkardı. AI ile bu kesintilerin şirkete faturasının 320.000$ olduğunu ve refactor için harcanacak 2 haftalık maliyetin sadece 15.000$ olduğunu gösteren 1 sayfalık CFO sunumu hazırladı. CFO sunumu görür görmez refactor için yeşil ışık yaktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ CFO ve Ürün Yönetimi İçin Teknik Borç ROI Raporlayıcı
```text
Yazılım takımı lideriyim. Takımımızdaki şu teknik borcu refactor etmek için ürün yönetiminden 1 sprintlik onay almak istiyorum: [BORÇ TANIMI: Veritabanı kilitlemesi, monolitik yapı vb.]. Şu verileri kullan: [Son 3 aydaki hata sayısı, kaybedilen saatler]. Şirket CEO'su ve CFO'sunun anlayacağı, teknik terimlerden arındırılmış, finansal risk ve yatırım getirisi (ROI) odaklı 1 sayfalık ikna edici yönetici raporu yaz.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri sadece 'Clean Architecture' diye tutturan ama şirketin para kazandığını unutan idealist yazılımcı, diğeri ise sadece yeni özellik isteyen vizyonsuz Product Manager. Team Lead'in iki tarafı nasıl ikna ettiğini ve teknik borcu para diline çevirmenin mucizesini anlatan nefis bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Neden Yöneticiler 'Refactor' Kelimesini Duyunca Kaçar?
- 03:50 - Borç Faizi Formülü: Teknik Borcun Finansal Karşılığı
- 07:45 - %20 Kuralını Ürün Yöneticisine Nasıl Kabul Ettirirsiniz?
- 12:30 - Egzersiz: Takımınızın en büyük teknik borcunu AI ile 1 sayfalık yatırım raporuna dönüştürün
