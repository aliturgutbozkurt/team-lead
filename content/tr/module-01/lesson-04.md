# Ders 04: 'Ben Yapsam 10 Dakika Sürerdi': Delege Etmenin ve AI ile Geri Çekilmenin Sanatı

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
En tehlikeli cümle: 'Ben yapsam 10 dakika sürerdi'. Mühendisin öğrenme hakkını çalmadan, AI destekli eşleşme ile işleri güvenle devretmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Çocuğun ayakkabısını bağlamayı öğrenirken ilk hafta 10 dakika uğraşır. 'Çekil kenara ben iki saniyede bağlarım' dersen, o çocuk 25 yaşına geldiğinde hala ayakkabısını sen bağlamak zorunda kalırsın. Delege etmek o 10 dakikalık sabrı göstermek ve gerekirse yapay zeka ile ona kılavuzluk etmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **İş Verme** | 'Şu bileti al yap' deyip detay vermeden yalnız bırakmak. | Net Context + Kabul Kriterleri + AI Başlangıç Promptu ile görevi devretmek. |
| **Hata Toleransı** | İlk hatada sinirlenip kodu kendisi devralmak. | Kritik yolda olmayan işlerde hata yapmasına ve AI ile debug etmesine izin vermek. |
| **Öğrenme Desteği** | Junior'ın yanına oturup 3 saat boyunca klavyede ne yapacağını dikte etmek. | Junior'a bir LLM eşlikçi tanımlayıp sadece mimari kontrol noktalarında inceleme yapmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Eisenhower Matrisi + AI: Acil ve kritik olmayan işleri ASLA kendin yapma; potansiyeli olan mühendislere büyüme fırsatı olarak delege et.
- 2. Görev Devir Sözleşmesi: 'Ne yapılacak' ve 'Neden yapılacak' kısmını net tanımla, 'Nasıl yapılacağı' kısmını mühendise bırak.
- 3. AI Scaffolding (İskele Desteği): Junior mühendise görevi verirken bir Claude/Cursor prompt şablonu ver: 'Takıldığında önce bu promptla hipotez üret.'
- 4. Geri Çekil ve İzle: Günde 5 kez 'bitti mi?' diye sormak yerine, async check-in ve PR taslağı (Draft PR) üzerinden geri bildirim ver.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
SaaS şirketinde lead olan Melis, hafta sonu bile kritik faturalama modülünü kimseye güvenemediği için kendisi yazıyordu. Tükenmişlikten hastanelik olunca takım 2 hafta kilitlendi. İyileşince karar aldı: Faturalama mikroservisini parçalara böldü, her parçaya test senaryolarını yazıp 2 junior mühendise delege etti ve onlara Cursor prompt kılavuzu verdi. İş 3 gün gecikmeyle ama başarıyla bitti, Melis hafta sonu ailesiyle tatil yapabildi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Görev Delegasyon ve Junior Mühendis AI Kılavuz Hazırlayıcı
```text
Takımımdaki Junior/Mid-Level bir yazılımcıya şu özelliği delege etmek istiyorum: [ÖZELLİK DETAYI]. Bana şunları üret: 1) Görevin 'Ne' ve 'Neden'ini açıklayan net kabul kriterleri, 2) Bu mühendisin takıldığında LLM'e sorabileceği 3 adet hedefe yönelik prompt, 3) Benim incelemem gereken kritik mimari risk kontrol listesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Ben yapsam 10 dakika sürerdi' krizine giren kontrol delisi bir lead ile onu terapiye alan tecrübeli VP of Engineering. Kontrolü bırakamayan mühendislerin nasıl takımın büyümesini baltaladığını ve AI'ın delege etmeyi nasıl güvenli hale getirdiğini mizahi bir dille anlatın.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Klavyeyi Bırakamama Hastalığı: Teşhis ve Tedavi
- 04:20 - Delegasyon Seviyeleri (Emir vermekten Otonomiye 5 Aşama)
- 09:15 - AI Scaffolding Nedir? Junior mühendise kılavuz prompt vermek
- 14:40 - Egzersiz: Üzerinizdeki 3 görevi AI destekli delegasyon formatına çevirin
