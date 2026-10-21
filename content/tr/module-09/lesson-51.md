# Ders 51: Multi-Agent İş Akışları: Planlayan, Yazan, Test Eden ve İnceleyen Ajan Ekibi

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Tek bir yapay zekadan her şeyi yapmasını beklemek yerine; uzmanlaşmış ajanlardan oluşan otonom bir sanal mühendislik takımı kurmak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir şirkette tek bir kişinin hem şirket başkanı, hem muhasebeci, hem garson, hem de aşçı olduğunu düşün. Çorbanın içine fatura düşürür, şirketi batırır. Ama biri planlar (Aşçıbaşı), biri malzemeyi doğrar (Yamak), biri pişirir (Usta), biri de tadına bakar ve onaylar (Gurme) ise ortaya Michelin yıldızlı yemek çıkar. Çoklu ajan sistemi bu uzmanlar mutfağıdır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Mimari** | Tek bir dev promptla kod, test, dokümantasyon ve güvenlik istemek (Modelin saçmalaması). | Her ajanın tek bir görevi ve çıktısını diğer ajana aktardığı deterministik iş akışı. |
| **Hata Yakalama** | Modelin kendi hatasını görememesi (kendi yazdığı koda 'harika' demesi). | Test Ajanı ve Güvenlik Ajanının Kodlayan Ajanı acımasızca eleştirip kodu reddetmesi. |
| **Kalite Çıktısı** | Orta kalitede yüzeysel çözümler. | İnsan müdahalesi olmadan 4 denetimden geçmiş, testleri yazılmış üretim kalitesinde kod. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Rol Ayrılığı İlkesi: 1) Planner (Taskı alt parçalara böler), 2) Architect (Sistem sınırlarını çizer), 3) Coder (Kodu yazar), 4) Tester (Testleri yazar ve koşturur), 5) Reviewer (PR standartlarını denetler).
- 2. State Management (LangGraph / CrewAI): Ajanlar arasındaki durum geçişlerini ve hafızayı güvenli bir state makinesinde yönet.
- 3. Hakem Döngüsü (Refinement Loop): Tester ajanı hata bulursa işi insan lead'e değil, doğrudan Coder ajana geri fırlatır ('Şu 2 test patladı, düzelt').
- 4. Human-in-the-Loop (HITL) Kapısı: Tüm ajanlar anlaştıktan sonra nihai onay ve merge yetkisi daima insan takım liderindedir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir finans platformunda yeni vergi hesaplama formülleri geldiğinde yazılımcılar 2 hafta harcıyordu. Lead Barış 3 ajanlı bir LangGraph iş akışı kurdu: 1. Ajan vergi kanununu okuyup JSON test senaryolarına çeviriyor, 2. Ajan bu testleri geçecek Python kodunu yazıyor, 3. Ajan ise güvenlik ve edge-case kontrolü yapıyordu. 2 haftalık iş akışı 35 dakikaya indi; üstelik ilk çalıştırmada sıfır hesaplama hatası çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Multi-Agent Yazılım Geliştirme Orkestrasyon Şablonu
```text
Biz bir yazılım takımında şu görevi otonom ajanlarla çözmek istiyoruz: [GÖREV TANIMI]. Bana LangGraph / CrewAI mantığıyla çalışan 4 ajanlı bir mimari kur: 1) Planner Agent sistem promptu ve çıktı formatı, 2) Coder Agent sistem promptu, 3) Critic & Tester Agent sistem promptu, 4) Ajanlar arasındaki geri besleme (feedback loop) ve insan onay kapısı (Human-in-the-Loop) kuralları.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Geleceğin yazılım takımı: 1 insan lider ve 10 sanal AI ajan!' Bu vizyon ne kadar gerçekçi? Ajanların birbiriyle kavga edip sonsuz döngüye girmesi komedisi ve multi-agent mimarilerin doğru tasarımı üzerine nefis bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Tek Prompt Devri Bitti: Multi-Agent Devrimi
- 04:15 - Ajanların Görev Dağılımı: Planner, Coder, Tester, Reviewer
- 08:35 - Geri Besleme Döngüleri (Feedback Loops) ve Sonsuz Döngü Koruması
- 13:20 - Egzersiz: Takımınız için 2 ajanlı bir 'Yazan ve Denetleyen' prototipi kurun
