# Ders 18: Roadmapping & Capacity Planning: AI ile Değişen Önceliklere Karşı Esnek Planlama

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
6 aylık statik yol haritalarının ilk haftada çöp olması krizine son: AI simülasyonları, dinamik senaryo planlama ve tampon süre (buffer) yönetimi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Hava durumunun sürekli değiştiği fırtınalı bir denizde 6 ay sonra tam saat 14:00'te hangi limana yanaşacağını taşa kazımak deliliktir. Akıllı kaptan rota çizer ama rüzgara, dalgaya ve yakıt durumuna göre anlık rota düzeltmeleri (waypoint) yapar. Yol haritası beton bir duvar değil, yaşayan bir GPS navigasyonudur.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yol Haritası Yapısı** | Aylara bölünmüş katı Gantt şemaları hazırlayıp ilk gecikmede paniklemek. | Şimdi / Sonra / Gelecek (Now / Next / Later) sütunlarıyla dinamik önceliklendirme. |
| **Kapasite Tamponu** | Herkesin %100 kapasiteyle çalışacağını varsaymak (hastalık, izin, kriz yokmuş gibi). | Tarihsel volatiliteye göre %25 'Bilinmeyenler Tamponu' (Unplanned Buffer) koymak. |
| **Öncelik Değişimi** | Yönetim yeni fikirle geldiğinde 'Tüm planımız bozuldu' diye kavga etmek. | AI ile senaryo analizi yapıp: 'X'i eklersek Y 3 hafta sarkar, hangisini seçelim?' diyebilmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Now / Next / Later Çerçevesi: 'Şimdi' (Mevcut sprint - kesin), 'Sonraki' (Gelecek ay - yüksek ihtimal), 'Gelecek' (Sonraki çeyrek - vizyon).
- 2. Değişim Değiş-Tokuşu (Trade-off Matrix): Ürün yöneticisi yeni bir özellik istediğinde 'Hayır' deme; 'Bu özelliği yol haritasına almamız için mevcut özelliklerden hangisini çıkarıyoruz?' de.
- 3. AI Senaryo Simülasyonu: Beklenmeyen bir kriz veya talep geldiğinde, LLM'e takımın backlog'unu verip 3 farklı yol haritası senaryosu ürettir.
- 4. Şeffaf İletişim: Paydaşlara tek bir tarih değil, güven aralıkları sun (Örn: Q3 ortası - Q3 sonu).

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir B2B SaaS şirketinde CEO her pazartesi yeni bir müşteri talebiyle gelip takımın 3 aylık planını altüst ediyordu. Takım hiçbir projeyi bitiremez hale gelmişti. Lead Gökhan bir 'Dinamik Kapasite Simülatörü' kurdu. CEO her yeni fikirle geldiğinde, Gökhan 10 dakika içinde AI ile hazırlanmış etki raporunu önüne koydu: 'Bu özelliği alırsak Almanya lansmanı 4 hafta gecikecek ve 60.000€ ceza riski doğacak.' CEO ilk kez önceliklendirme yapmak zorunda kaldı ve takımın yol haritası korundu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Dinamik Yol Haritası ve Kapsam Değişim Simülatörü
```text
Biz 8 kişilik bir yazılım mühendisliği ekibiyiz. Mevcut çeyreklik taahhütlerimiz: [ÖZELLİK LİSTESİ]. Yönetim az önce acil kodlu şu yeni özelliği eklememizi istedi: [YENİ TALEP]. Bir mühendislik direktörü olarak: 1) Bu talebin mevcut yol haritası üzerindeki domino etkisini analiz et, 2) Yönetime sunulmak üzere 3 farklı alternatif senaryo üret (A: Yeni talebi reddetme, B: Başka bir özelliği erteleme, C: Kapsamı daraltma), 3) Profesyonel ve yapıcı bir yönetici yanıt metni hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Her hafta yeni bir fikir bulan 'Parlak Fikirler CEO'su' ile fırtınada gemisini batırmamaya çalışan Team Lead. Statik Gantt şemalarının saçmalığı ve dinamik yol haritası oluşturmanın takımı nasıl kurtardığı üzerine harika bir podcast bölümü.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - 6 Aylık Planların İflası: Yazılımda Neden Planlar Tutmaz?
- 04:15 - Now / Next / Later Modeli ile Çevik Yol Haritası
- 08:30 - Yönetimden Gelen Ani Talepleri Savuşturmanın Formülü
- 13:40 - Egzersiz: Takımınız için AI destekli dinamik kapasite tamponu hesaplayın
