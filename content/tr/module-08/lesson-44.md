# Ders 44: Metrikler Yalan Söyler mi?: DORA Metrikleri, SPACE Çerçevesi ve AI Verimlilik Ölçümü

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Kaç satır kod yazıldığı veya kaç bilet kapatıldığı gibi sahte metriklerle (Vanity Metrics) takımı zehirlemeye son: DORA ve SPACE ile gerçek hız ve sağlığı ölçmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir yazarın ne kadar iyi bir roman yazdığını daktiloda kaç tuşa bastığına bakarak ölçemezsin. 100.000 kez rastgele tuşa basan bir adam iyi bir yazar değildir. Yazılımda da kaç satır kod yazdığın değil; okuyucunun (müşterinin) o kitaptan ne kadar etkilendiği ve kitabın ne kadar akıcı olduğu önemlidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Zararlı Metrikler** | Commit sayısı, yazılan satır sayısı (LOC), kapatılan bilet sayısı. | Bu metrikleri ölçerseniz yazılımcılar yapay zekaya 10.000 satır çöp kod yazdırıp sistemi kandırır. |
| **DORA Metrikleri** | Yılda bir kez release çıkıp hızını bilmemek. | Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service. |
| **SPACE Çerçevesi** | Sadece çıktıya (Output) odaklanıp insanların tükenmesini görmemek. | Satisfaction, Performance, Activity, Communication, Efficiency boyutlarını dengeli ölçmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Goodhart Yasası: 'Bir metrik hedef haline geldiğinde, artık iyi bir metrik olmaktan çıkar.' İnsanların metriği manipüle etmesine izin verme.
- 2. 4 DORA Metriğini Takip Et: 1) Dağıtım Sıklığı (Günde kaç deploy?), 2) Değişiklik Teslim Süresi (Commit'ten prod'a kaç saat?), 3) Değişiklik Hata Oranı (% kaçı patlıyor?), 4) Hizmet Kurtarma Süresi (MTTR kaç dakika?).
- 3. SPACE ile İnsan Boyutunu Ekle: Sadece hıza değil, mühendis memnuniyetine (Satisfaction) ve kesintisiz odak süresine (Efficiency) bak.
- 4. AI Etkisi Ölçümü: AI araçlarının verimini kod satırıyla değil; Lead Time'ın ne kadar kısaldığı ve mühendis mutluluğunun ne kadar arttığıyla ölç.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir holding şirketi 'En çok kod yazan ve en çok bilet kapatan yazılımcılara prim verilecek' dedi. 2 ay içinde yazılımcılar ChatGPT ile her fonksiyona 500 satır anlamsız yorum ve döngü ekletti; 1 biletlik işi 10 küçük bilete bölüp kapattılar. Kod kalitesi yerle bir oldu. Yeni lead Kaan geldi; bu saçma prim sistemini iptal ettirdi. Şirkete DORA panosu kurdu. Başarı kriteri olarak 'Prod hata oranını düşürme' ve 'PR döngü süresini kısaltma'yı koydu. Sistem sağlığı hızla toparlandı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ DORA ve SPACE Mühendislik Verimlilik Raporlayıcı
```text
Takımımızın son 3 aydaki metrikleri şunlardır: [DEPLOY SAYILARI, PR KAPATMA SÜRELERİ, HATA ORANLARI, RETRO MEMNUNİYET PUANLARI]. Sen bir Engineering Operations Director'ısın. 1) Takımımızın DORA seviyesini (Low, Medium, High, Elite) belirle, 2) SPACE çerçevesine göre takımın tıkanıklık yaşadığı 2 alanı teşhis et, 3) Vanity metrikleri engelleyen ve yönetime sunulacak 1 sayfalık dengeli mühendislik karnesi hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Günde 2000 satır kod yazan' sahtekar yazılımcı ile Goodhart Yasasını anlatan bilge Lead. Metriklerin insanları nasıl canavara dönüştürebileceği ve gerçek mühendislik hızını ölçmenin bilimsel yolları üzerine eğlenceli bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Goodhart Yasası: Satır Sayarak Verimlilik Ölçülür mü?
- 04:15 - DORA Metriklerinin Dört Altın Kuralı (Elite Performer Olmak)
- 08:35 - SPACE Çerçevesi: Mühendis Mutluluğunu ve Odak Süresini Ölçmek
- 13:20 - Egzersiz: Takımınız için 1 adet DORA karnesi çıkarın
