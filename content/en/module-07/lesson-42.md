# Lesson 42: Executive Comms During Downtime: AI-Drafted Status Pages & Crisis PR

> **Module 7: Incident Response & Production Resilience** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Surviving the onslaught of panicked executives, angry clients, and sales reps during an outage: Radiating calm, transparent status pages, and AI crisis drafting.

---

### 💡 ELI5 Metaphor & Intuitive Story
> During emergency surgery, the lead surgeon doesn't kick open the operating room doors to shriek at the family: 'There's blood everywhere, we are doomed!' They send an orderly with measured updates: 'The patient is stabilized under our monitoring; our team is addressing the vessel. Next update in 20 minutes.' Calmness is contagious.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **İletişim Tonu** | Sessiz kalıp hiçbir şey söylememek veya panik dolu belirsiz mesajlar atmak. | Düzenli aralıklarla, teknik terimlerden arındırılmış, kontrolün elde olduğunu gösteren mesajlar. |
| **Status Page** | Her yer çökmüşken status page'in 'All Systems Operational' (yeşil) göstermesi. | Kullanıcıya dürüstçe 'Ödeme servisimizde yavaşlık var, mühendislerimiz inceliyor' demek. |
| **Yönetici Yönetimi** | CEO'nun kriz kanalına girip yazılımcıları soru yağmuruna tutarak yavaşlatması. | CEO için ayrı bir yönetici özet kanalı açıp oraya AI ile filtrelenmiş net bilgiler akıtmak. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Shield the Engineers: Technical investigators must never field calls from frantic account executives; the lead serves as the single communications shield.
- 2. The 3-Part Crisis Memo: 1) What we have confirmed (Observation), 2) What active steps are underway (Action), 3) Exact timestamp for next update (Cadence).
- 3. AI Crisis Drafting: Feed chaotic technical scratchpads into an LLM to generate customer-friendly status page alerts in seconds.
- 4. Never Over-Promise ETAs: Never say 'It will be fixed in 10 minutes.' If it fails, credibility evaporates. State: 'Engineers are rolling out the mitigation; next update at 14:15.'

---

### 🚨 Real-World War Story / Case Study
A B2B SaaS platform's EU cluster blacked out. 200 enterprise clients swamped support lines. The previous lead blurted out in a shared channel: 'Looks like our database is fried,' which a client screenshotted and posted on Twitter, hammering stock sentiment. Lead Hande took over communications: drafted crisp, reassuring status bulletins via AI, posted cadenced updates every 15 minutes, and fed the CEO private briefings. Outage was patched in 45 minutes; clients praised the transparent crisis stewardship.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Kriz Anı Müşteri ve Yönetici İletişim Metni Hazırlayıcı
```text
Sistemimizde şu an büyük bir kesinti yaşanıyor: [TEKNİK DETAY: Veritabanı bağlantı havuzu tükendi, siparişler alınamıyor]. Ekiplerimiz son yarım saattir connection pool limitlerini artırıp sunucuları kademeli ayağa kaldırmaya çalışıyor. Sen bir Kriz İletişimi ve Halkla İlişkiler (PR) Uzmanısın. Bana: 1) Resmi Status Page için müşterilere güven veren 3 cümlelik duyuru, 2) Şirket CEO'su ve Yönetim Kurulu için paniksiz teknik durum özeti, 3) Müşteri temsilcilerinin (Destek ekibi) telefonlarda okuyacağı konuşma metnini (script) hazırla.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Sistem çöktüğünde kafasını kuma gömen şirketler' ile 'Müşteriye güven veren liderler'. İletişimin bazen yazılımın kendisinden bile daha kritik olduğu anlar ve krizde panik savar teknikler üzerine harika bir sohbet.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Krizde İletişim Felaketi: Yazılımcılar Nerede Hata Yapar?
- 04:15 - 3 Parçalı Kriz Mesajı Formülü (Ne Biliyoruz / Ne Yapıyoruz / Ne Zaman)
- 08:35 - CEO ve Müşterileri AI ile Yönetmek: Status Page Otomasyonu
- 13:20 - Egzersiz: Takımınız için 1 adet acil durum kriz iletişim şablonu hazırlayın
