# Ders 14: Kusursuz User Story ve Task Yazımı: AI Destekli Acceptance Criteria & Edge-Case Motoru

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Muğlak yazılmış 'Kullanıcı giriş yapabilmeli' biletlerine son: LLM ile sınır durumları (edge-cases), güvenlik açıklarını ve Given-When-Then kriterlerini otomatik üretmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Mimara gidip 'Bana güzel bir ev yap' dersen, sana çatısı camdan olan ama tuvalet kapısı olmayan bir ev yapabilir; çünkü detay vermedin. Kusursuz bir bilet yazmak, inşaat ustasına kapı kollarının vidasına kadar her ölçüyü vermektir. AI, senin aklına gelmeyen 'Peki ya elektrik kesilirse o kapı nasıl açılacak?' sorusunu saniyeler içinde bulan mimari denetçindir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kabul Kriteri (AC)** | 1 cümle: 'Kullanıcı şifresini sıfırlayabilmeli.' | Given-When-Then formatında 8 adet sınır durum (rate limit, süresi dolmuş token, brute-force vb.). |
| **Hata Tespiti** | Edge case'leri QA test ederken veya canlı ortamda müşteriler patlayınca öğrenmek. | Bilet yazılırken AI ile 20 olası uç senaryoyu simüle edip tasarım aşamasında engellemek. |
| **Geliştirici Netliği** | Yazılımcının 3 gün boyunca PM'e 'Burada ne demek istediniz?' diye soru sorması. | Bileti alan mühendisin sıfır sürtünmeyle doğrudan koda ve teste başlayabilmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Given-When-Then Standartı: Her bilete davranış odaklı (BDD) test edilebilir kriterler zorunlu kılınmalıdır.
- 2. Edge-Case Fırtınası (LLM Promptu): Ürün yöneticisinin yazdığı taslağı LLM'e besleyip: 'Bu özellikte patlayabilecek en acımasız 5 uç durumu çıkar' de.
- 3. Negatif Akışları Unutma: Sadece mutlu yol (happy path) değil; ağ kopması, yetkisiz erişim, eşzamanlı istek (race condition) senaryolarını ekle.
- 4. Task Bölme (Slicing): 5 günden büyük biletleri AI ile 1'er günlük bağımsız test edilebilir alt parçalara (sub-tasks) böl.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret takımında 'Kullanıcı kupon kodu uygulayabilmeli' diye açılan tek satırlık bilet yüzünden büyük kriz çıktı. Mühendis mutlu yolu yazdı ama aynı kuponun 2 farklı sekmede aynı anda kullanılabileceğini (race condition) düşünmedi. Şirket 1 gecede 180.000 TL zarar etti. Lead Selin bir kural getirdi: Artık her bilet AI tabanlı 'Edge-Case Botu'ndan geçmeden sprint'e alınamaz. O tarihten sonra logic bug kaynaklı finansal açık sıfırlandı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kusursuz User Story ve Edge-Case Üretici Promptu
```text
Sen dünyanın en titiz Senior Product Owner ve QA Architect'isin. Şu iş gereksinimi için: [GEREKSİNİM]. Bana şunları üret: 1) Net kullanıcı değeri (As a / I want / So that), 2) Given-When-Then formatında 5 mutlu yol ve 5 negatif yol kabul kriteri, 3) Güvenlik, performans ve race condition içeren 3 gizli edge-case, 4) Bu işi en fazla 1 günlük 3 bağımsız alt taska bölme planı.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kullanıcı giriş yapabilmeli' diye 3 kelimelik bilet açan Product Manager ile kafayı yiyen yazılımcı. AI'ın gereksinim yazımını nasıl dönüştürdüğü, edge-case avcılığı ve yazılımcı-ürün barışının sırları üzerine eğlenceli bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Muğlak Biletlerin Gizli Maliyeti: Şirketler Neden Para Kaybeder?
- 04:10 - Given-When-Then Formülünün Gücü
- 08:35 - AI Edge-Case Motoru: Race Condition ve Güvenlik Açıklarını Önceden Yakalamak
- 13:50 - Egzersiz: Kötü yazılmış 3 gerçek Jira biletini AI ile mükemmelleştirin
