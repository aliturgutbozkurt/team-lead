# Ders 21: Architecture Decision Records (ADR) ve RFC Kültürü: AI ile Mimari Belgeleme

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Biz bu kararı 2 yıl önce neden böyle almıştık?' sorusuna hafıza kaybı yaşamamak için: Sıfır sürtünmeyle ADR yazmak ve RFC konsensüsünü AI ile yönetmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir gemi seyrederken kaptan seyir defterine 'Fırtına yaklaştığı için rotayı güneye kırdık' diye yazar. 2 yıl sonra yeni bir kaptan geldiğinde 'Bu gemi neden güneye gitmiş ki?' diye şaşırmaz. ADR, yazılım takımının seyir defteridir; hangi kararı neden aldığını gelecekteki kendine anlatmaktır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Karar Belgeleme** | Kararın Slack konuşmalarında kaybolup gitmesi, kimsenin hatırlamaması. | Karar anında 10 dakikada AI ile şablon doldurulup repoya markdown olarak commit'lenmesi. |
| **Format** | Kimsenin okumadığı 40 sayfalık ağır Confluence belgeleri. | 1 sayfalık net ADR: Bağlam (Context), Karar (Decision), Sonuçlar (Consequences). |
| **Geri Bildirim** | Mühendislerin çekinip fikir belirtmemesi. | RFC taslağını LLM'e verip 'Bu mimarideki 3 gizli riski bul' diyerek tartışmayı açmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Standart ADR Şablonu: Başlık, Durum (Kabul / Öneri), Bağlam, Karar, Sonuçlar (Olumlu ve Olumsuz).
- 2. Repoda Kodla Beraber Yaşasın: Dokümanlar Confluence'ta çürümesin; projenin `/docs/adr/` dizininde markdown olarak tutulsun.
- 3. AI ile Hızlı Taslak: Slack'teki bir teknik tartışmayı kopyalayıp LLM'e besle: 'Bu tartışmadan resmi bir ADR taslağı çıkar.'
- 4. RFC (Request for Comments) Süreci: Kritik mimari değişikliklerde 1 haftalık RFC süresi aç; herkesin yorum yapmasını teşvik et.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir ödeme şirketinde yeni gelen mimar, 'Neden PostgreSQL varken MongoDB kullanmışlar, bunlar amatör mü?' diyerek tüm sistemi PostgreSQL'e taşımak için 4 ay harcadı. Canlıya geçince sistem kilitlendi; çünkü MongoDB'nin esnek JSON yapısına ve coğrafi sharding özelliğine ihtiyaç varmış ama kimse neden seçildiğini yazmamıştı. Yeni lead Tarık kural koydu: 'ADR'ı olmayan hiçbir teknoloji seçimi geçerli değildir.' AI destekli ADR şablonuyla tüm geçmiş kararlar belgelendi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Tartışma Metninden Otomatik ADR (Architecture Decision Record) Oluşturucu
```text
Biz modern bir mikroservis ekibiyiz. Ekip olarak şu konuda karar aldık: [KARAR DETAYI VE NEDENLERİ]. Bu kararı profesyonel bir Architecture Decision Record (ADR) haline getir. Şu başlıkları içersin: 1) Title & Status, 2) Context & Problem Statement, 3) Decision Outcome, 4) Positive Consequences, 5) Negative Consequences & Trade-offs, 6) Pros & Cons of Alternative Options.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Eski projeyi devralıp 'Bunu yazan ne düşünmüş olabilir?' diye saçını başını yolan yazılımcı ile ADR kültürünün gücünü anlatan lider. Kurumsal hafıza kaybının şirketlere maliyeti ve yapay zeka ile 5 dakikada ADR yazma yöntemleri.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Kurumsal Hafıza Kaybı: Şirketler Neden Aynı Hataları Tekrarlar?
- 04:10 - 1 Sayfalık Kusursuz ADR Mimarisi
- 08:35 - Slack Tartışmasını AI ile ADR'a Dönüştürme Demosu
- 13:20 - Egzersiz: Takımınızın son mimari kararını ADR formatında yazıp repoya commit'leyin
