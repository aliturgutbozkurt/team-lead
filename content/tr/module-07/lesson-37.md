# Ders 37: Cumartesi Gecesi Saat 03:00: Production Çöktüğünde Liderlik ve AI Incident Assistant

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Sistemler çöktüğünde ve telefonlar çaldığında paniklemeden komutayı ele almak: Incident Commander rolü, sessiz War Room disiplini ve AI ile anlık kök neden analizi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Uçakta türbülans çıktığında yolcular çığlık atabilir; ama kaptan pilot kokpitten anons yapıp 'Ben de çok korktum, ne yapacağız şimdi!' derse herkes delirir. Lider kriz anında en sakin ses tonuna sahip kişidir. Herkes paniklerken o kontrol listesini (checklist) açar ve itfaiyeyi yönetir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kriz Anı Davranışı** | Slack kanalında 15 kişinin aynı anda bağırması, herkesin rastgele sunucuları restart etmesi. | Tek bir Incident Commander (IC), sessiz War Room ve rollere ayrılmış net kriz disiplini. |
| **Kök Neden Tespiti** | 3 saat boyunca milyonlarca log satırında kaybolup kimin ne yaptığına bakmak. | Son deployment diff'i ve hata loglarını LLM'e verip 2 dakikada şüpheli commit'i bulmak. |
| **Öncelik Sırası** | Sistem çökmüşken neden çöktüğünü tartışıp kavga etmek. | Önce yangını söndürmek (Rollback / Traffic Drain); nedenini sonra araştırmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Komuta Zinciri (Incident Command System - ICS): 1 kişi Incident Commander (Karar verir), 1 kişi Scribe (Not tutar ve durumu yazar), diğerleri araştırır.
- 2. Önce Kanamayı Durdur (Mitigate First, Debug Later): 'Neden oldu?' diye felsefe yapma; hemen son deploy'u revert et veya trafiği yedek kümeye al.
- 3. AI Incident Triage: Datadog/CloudWatch alarmlarını ve stack trace'i AI incident asistanına akıtıp: 'Bu hata hangi son PR veya servis bağımlılığıyla ilişkili?' teşhisi al.
- 4. 15 Dakikada Bir Durum Güncellemesi: Ne yapıldığını, neyin test edildiğini tüm paydaşlara şeffafça duyur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Black Friday gecesi saat 02:30'da Türkiye'nin en büyük e-ticaret sitelerinden birinin ödeme servisi çöktü. 20 yönetici ve yazılımcı Zoom'a girip birbirine bağırmaya başladı. Yeni lead Emre odaya girdi: 'Ben Incident Commander'ım. Lütfen herkes sessiz olsun.' Emre mikrofonları susturdu. AI log özetleyiciye son 30 dakikanın loglarını besledi. Hatanın 02:15'te çıkan bir Redis config güncellemesi olduğu 90 saniyede tespit edildi. Rollback yapıldı, sistem 4 dakikada ayağa kalktı. Milyonlarca liralık satış kurtarıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Canlı Kriz (Incident) Anında AI Triage ve Kök Neden Analizörü
```text
ACİL DURUM: Production ödeme servisimiz şu an 500 hatası veriyor ve p99 yanıt süresi 12 saniyeye çıktı. Aşağıda son 20 dakikanın logları ve son 3 deployment'ın PR başlıkları yer almaktadır: [LOGLAR VE DEPLOYMENTLAR]. Sen bir Principal SRE Incident Commander'sın. 1) Bu çöküşe sebep olan en olası kök nedeni derhal söyle, 2) Kanamayı durdurmak için atılacak İLK acil müdahale adımını (Rollback / Config değişimi / Rate limit) tek cümleyle yaz, 3) Yönetim için 3 cümlelik paniksiz durum bildirimi metni hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Gece saat 03:00'te telefon çaldığında kalp krizi geçiren yazılımcı travması. Kriz anında panikleyen yöneticiler ile soğukkanlı bir Incident Commander arasındaki devasa fark üzerine nefes kesici ve eğlenceli bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Saat 03:00 Kabusu: Telefon Çaldığında Ne Yapmalısınız?
- 04:15 - Incident Commander Protokolü: Kaostan Düzen Yaratmak
- 08:35 - Kanamayı Durdur: 'Neden Oldu' Tuzağına Düşmeyin
- 13:20 - Egzersiz: Takımınız için 1 sayfalık acil durum Incident Runbook'u hazırlayın
