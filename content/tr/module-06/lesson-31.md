# Ders 31: LeetCode Öldü mü?: AI Çağında Yazılımcı Mülakatı Nasıl Yapılır?

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Adayın ikili arama ağacını (binary tree) ters çevirmesini istemek artık anlamsız; çünkü AI bunu 2 saniyede yapıyor. Adayın sistem muhakemesini, mimari vizyonunu ve AI ile çalışma yeteneğini ölçme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir pilot işe alırken ona uçak kanadının kaç kilo demirden yapıldığını ezberden sormazsın; onu uçuş simülatörüne oturtur, fırtına çıkarır ve uçağı nasıl yönlendirdiğine bakarsın. LeetCode ezber sorusudur; modern mülakat ise adayı fırtınalı sistem simülatörüne oturtmaktır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Mülakat Sorusu** | LeetCode Medium/Hard algoritmalarını tahtada ezbere yazdırmak. | Gerçek bir prod bug'ını veya mimari açığı verip adayın AI ile bunu nasıl çözdüğünü izlemek. |
| **AI Araç Kullanımı** | 'Google ve ChatGPT kullanmak yasaktır' deyip adayı körleştirmek. | 'Cursor veya Claude kullanmak serbesttir; çözümü nasıl yönettiğinizi görelim' demek. |
| **Ölçülen Beceriler** | Sentaks ezberi ve anlık stres yönetimi. | Mimari muhakeme, kod okuma ve AI halüsinasyonlarını yakalama yeteneği. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. AI'ı Yasaklama, Tam Tersine Zorunlu Kıl: Adaya: 'Bu mülakatta istediğin AI aracını kullanabilirsin, ancak yazdığın her satırın hesabını soracağım' de.
- 2. Hata Bulma ve Code Review Mülakatı: Adayın önüne kasıtlı olarak mantık hataları ve halüsinasyonlar içeren AI üretimi bir kod koy; hataları bulmasını iste.
- 3. Sistem Tasarımı ve Trade-off Odaklılık: 'Bu mimaride Redis çökerse ne olur? p99 gecikmesini nasıl düşürürsün?' gibi derin sorular sor.
- 4. İletişim ve Empati Değerlendirmesi: Teknik olarak ne kadar zeki olursa olsun; dinlemeyi bilmeyen, egosu tavan yapmış kişileri (brilliant jerks) doğrudan ele.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech firması LeetCode Hard soruları sorarak 3 yazılımcı aldı. Yazılımcılar şirkete gelince hiçbir iş teslim edemedi çünkü şirket mimarisi karmaşık mikroservislerden oluşuyordu ve gerçek hayat kod okuma gerektiriyordu. Lead Kemal mülakat sürecini değiştirdi: Adaylara 'Bozuk bir faturalama servisi PR'ı' verip AI kullanarak 45 dakikada düzeltmelerini istedi. Yeni sistemle alınan yazılımcıların verimliliği 3 kat yüksek çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ AI Çağı İçin Gerçekçi Yazılımcı Mülakat Senaryosu ve Puanlama Rubriği
```text
Kıdemli bir Backend Mühendisi (Go / Java) işe alacağız. LeetCode ezberi içermeyen, adayın AI araçlarıyla birlikte çalışma, mimari kısıtları anlama ve kod denetleme becerisini ölçecek 45 dakikalık bir 'Canlı Mülakat Vaka Çalışması' ve 5 kriterli objektif bir değerlendirme rubriği (Puanlama ölçeği) hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'LeetCode'un çöküşü' üzerine iki kıdemli mühendisin kahkahalarla dolu sohbeti. Tahtaya algoritma yazdıran eski kafalı şirketlerin neden en kötü mühendisleri işe aldığı ve modern mülakatın nasıl olması gerektiği.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - LeetCode'un Sonu: Algoritma Ezberi Neden İflas Etti?
- 04:20 - AI Serbest Mülakat Tasarımı: Adayın Muhakemesini Ölçmek
- 08:45 - Kod Denetimi (Auditing) Mülakatı Nasıl Yapılır?
- 13:30 - Egzersiz: Takımınız için 1 adet gerçek hayat mülakat senaryosu ve rubriği hazırlayın
