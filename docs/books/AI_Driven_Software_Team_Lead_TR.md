# AI Çağında Software Team Lead Olmak: Sıfırdan Uzmanlığa 60 Derslik Rehber
*Yazar: Ali Turgut Bozkurt | Principal Software Engineer & Engineering Leader*
*Tarih: 2026*

---

## Önsöz
Yazılım mühendisliği tarihi boyunca pek çok devrim yaşadı: Derleyiciler, kişisel bilgisayarlar, açık kaynak, internet, bulut bilişim ve mikroservisler... Ancak hiçbir devrim, yapay zekanın getirdiği sarsıntı kadar hızlı ve radikal olmadı.

Eski dünyada bir Team Lead, takımın "en hızlı kod yazan", "en kıdemli" ve "her soruya cevabı olan" kişisiydi. Yeni dünyada ise kod yazmanın birim maliyeti sıfıra yaklaşırken; takım liderinin rolü bir kod amelesi olmaktan çıkıp, otonom ajanları, insan psikolojisini, mimari sınırları ve iş değerini orkestre eden bir **Sistem Orkestratörüne** dönüştü.

Bu kitap, ilk gün kıdemli yazılımcılıktan liderliğe terfi ettiğiniz o panik dolu andan; çoklu takımları (Squad of Squads) yöneten ve CTO koltuğuna oturan bir teknoloji liderine dönüşeceğiniz güne kadar size rehberlik etmek için tasarlandı.

Kitap 10 ana bölüm ve 60 bağımsız ama birbirini tamamlayan dersten oluşmaktadır. Her ders; kavramı aptala anlatır gibi (ELI5) somutlaştıran bir analoji, eski usul ile AI destekli yaklaşımın kıyaslama tablosu, adım adım uygulanabilir bir çerçeve, yaşanmış bir kriz hikayesi, kopyalayıp kullanabileceğiniz üretim seviyesinde AI promptları, **NotebookLM** ile iki sunuculu podcast oluşturabileceğiniz sesli tartışma komutları ve **Udemy** eğitim müfredatını içerir.

Keyifli okumalar ve harika bir liderlik yolculuğu dilerim!

---

## İçindekiler

### Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş

- [Ders 01: 'Dün En İyi Koddum, Bugün Ne Yapıyorum?': Senior Dev Sendromu ve Team Lead Rolünün Şifreleri](#ders-01-dün-en-i̇yi-koddum,-bugün-ne-yapıyorum-senior-dev-sendromu-ve-team-lead-rolünün-şifreleri)
- [Ders 02: AI Çağında Liderlik: Kod Yazan mı, Sistemi Orkestre Eden mi?](#ders-02-ai-çağında-liderlik-kod-yazan-mı,-sistemi-orkestre-eden-mi)
- [Ders 03: İlk 90 Gün Hayatta Kalma Kiti: AI ile Hızlı Takım Analizi ve Güven İnşası](#ders-03-i̇lk-90-gün-hayatta-kalma-kiti-ai-ile-hızlı-takım-analizi-ve-güven-i̇nşası)
- [Ders 04: 'Ben Yapsam 10 Dakika Sürerdi': Delege Etmenin ve AI ile Geri Çekilmenin Sanatı](#ders-04-ben-yapsam-10-dakika-sürerdi-delege-etmenin-ve-ai-ile-geri-çekilmenin-sanatı)
- [Ders 05: Takım Dinamikleri ve Psikolojik Güvenlik: AI Korkusunu Yenmek](#ders-05-takım-dinamikleri-ve-psikolojik-güvenlik-ai-korkusunu-yenmek)
- [Ders 06: Takım Liderinin AI Alet Çantası: Cursor, Claude 3.7, Copilot, NotebookLM ve Deep Research Ekosistemi](#ders-06-takım-liderinin-ai-alet-çantası-cursor,-claude-37,-copilot,-notebooklm-ve-deep-research-ekosistemi)

### Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi

- [Ders 07: Sıkıcı 1-on-1'ları Bırak: Büyüme Odaklı, AI Destekli Birebir Görüşme Çerçevesi](#ders-07-sıkıcı-1-on-1ları-bırak-büyüme-odaklı,-ai-destekli-birebir-görüşme-çerçevesi)
- [Ders 08: Zorlu Konuşmalar ve Geri Bildirim: SBI Modeli + AI Simülasyonu](#ders-08-zorlu-konuşmalar-ve-geri-bildirim-sbi-modeli-+-ai-simülasyonu)
- [Ders 09: Takım İçi Çatışma Çözümü: Sessiz Kırgınlıkları ve Ego Savaşlarını Önlemek](#ders-09-takım-i̇çi-çatışma-çözümü-sessiz-kırgınlıkları-ve-ego-savaşlarını-önlemek)
- [Ders 10: Performans Yönetimi ve PIP Dönemi: Veriyle ve Empatiyle Konuşmak](#ders-10-performans-yönetimi-ve-pip-dönemi-veriyle-ve-empatiyle-konuşmak)
- [Ders 11: Mentorluk vs. Koçluk: Junior ve Mid-Level Mühendisleri AI ile 3x Hızlandırmak](#ders-11-mentorluk-vs-koçluk-junior-ve-mid-level-mühendisleri-ai-ile-3x-hızlandırmak)
- [Ders 12: Burnout ve AI Yorgunluğu: Takımın Ruh Sağlığını Koruma Kılavuzu](#ders-12-burnout-ve-ai-yorgunluğu-takımın-ruh-sağlığını-koruma-kılavuzu)

### Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi

- [Ders 13: 2 Saatlik Standup ve Refinement İşkencesine Son: Asenkron & AI Özetli Ritüeller](#ders-13-2-saatlik-standup-ve-refinement-i̇şkencesine-son-asenkron-&-ai-özetli-ritüeller)
- [Ders 14: Kusursuz User Story ve Task Yazımı: AI Destekli Acceptance Criteria & Edge-Case Motoru](#ders-14-kusursuz-user-story-ve-task-yazımı-ai-destekli-acceptance-criteria-&-edge-case-motoru)
- [Ders 15: Sprint Planlama ve Efor Tahmini: AI ile Story Point Yanılsamalarından Kurtulmak](#ders-15-sprint-planlama-ve-efor-tahmini-ai-ile-story-point-yanılsamalarından-kurtulmak)
- [Ders 16: Retrospektifleri Aksiyona Dönüştürmek: AI Sentiment Analizi ve Gizli Kök Nedenler](#ders-16-retrospektifleri-aksiyona-dönüştürmek-ai-sentiment-analizi-ve-gizli-kök-nedenler)
- [Ders 17: Teknik Borç (Tech Debt) Yönetimi: İş Birimlerine Teknik Borcu Anlatmanın Formülü](#ders-17-teknik-borç-(tech-debt)-yönetimi-i̇ş-birimlerine-teknik-borcu-anlatmanın-formülü)
- [Ders 18: Roadmapping & Capacity Planning: AI ile Değişen Önceliklere Karşı Esnek Planlama](#ders-18-roadmapping-&-capacity-planning-ai-ile-değişen-önceliklere-karşı-esnek-planlama)

### Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları

- [Ders 19: AI Kod Kalitesi Paradoksu: 'Hızlı Üretilen Çöpü' Nasıl Engelleriz?](#ders-19-ai-kod-kalitesi-paradoksu-hızlı-üretilen-çöpü-nasıl-engelleriz)
- [Ders 20: AI Destekli Code Review (PR) Devrimi: Botlar vs. İnsan Gözü](#ders-20-ai-destekli-code-review-(pr)-devrimi-botlar-vs-i̇nsan-gözü)
- [Ders 21: Architecture Decision Records (ADR) ve RFC Kültürü: AI ile Mimari Belgeleme](#ders-21-architecture-decision-records-(adr)-ve-rfc-kültürü-ai-ile-mimari-belgeleme)
- [Ders 22: Legacy Kodu Modernize Etmek: AI ile Tersine Mühendislik ve Güvenli Refactoring](#ders-22-legacy-kodu-modernize-etmek-ai-ile-tersine-mühendislik-ve-güvenli-refactoring)
- [Ders 23: Clean Architecture, Domain-Driven Design (DDD) ve AI Uyumlu Tasarım](#ders-23-clean-architecture,-domain-driven-design-(ddd)-ve-ai-uyumlu-tasarım)
- [Ders 24: Güvenlik (SecOps) ve Lisanslama: AI Üretimi Kodda Hallucination & Vulnerability Avı](#ders-24-güvenlik-(secops)-ve-lisanslama-ai-üretimi-kodda-hallucination-&-vulnerability-avı)

### Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları

- [Ders 25: Modern CI/CD Hattı ve AI Gatekeeper'lar: Yeşil Pipeline Koruması](#ders-25-modern-ci/cd-hattı-ve-ai-gatekeeperlar-yeşil-pipeline-koruması)
- [Ders 26: Test Driven Development (TDD) ve AI: Testi Kim Yazıyor, Kodu Kim?](#ders-26-test-driven-development-(tdd)-ve-ai-testi-kim-yazıyor,-kodu-kim)
- [Ders 27: Cursor Rules, Copilot Workspace ve Repo Bazlı AI Konfigürasyonu](#ders-27-cursor-rules,-copilot-workspace-ve-repo-bazlı-ai-konfigürasyonu)
- [Ders 28: Kendi Kod Tabanınızı Konuşulabilir Yapmak: Kod Tabanı RAG ve Knowledge Base](#ders-28-kendi-kod-tabanınızı-konuşulabilir-yapmak-kod-tabanı-rag-ve-knowledge-base)
- [Ders 29: AI Ajanları ile Gece Boyu Hata Çözümü: Autonomous Bug-Fixing](#ders-29-ai-ajanları-ile-gece-boyu-hata-çözümü-autonomous-bug-fixing)
- [Ders 30: Dokümantasyon Kabusunu Bitirmek: Kendi Kendini Güncelleyen Living Docs](#ders-30-dokümantasyon-kabusunu-bitirmek-kendi-kendini-güncelleyen-living-docs)

### Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi

- [Ders 31: LeetCode Öldü mü?: AI Çağında Yazılımcı Mülakatı Nasıl Yapılır?](#ders-31-leetcode-öldü-mü-ai-çağında-yazılımcı-mülakatı-nasıl-yapılır)
- [Ders 32: Take-Home Task ve Canlı Kodlama: Adayın AI ile Birlikte Çalışma Yeteneğini Ölçmek](#ders-32-take-home-task-ve-canlı-kodlama-adayın-ai-ile-birlikte-çalışma-yeteneğini-ölçmek)
- [Ders 33: 1 Günde İlk PR: AI Destekli Roket Hızında Onboarding Süreci](#ders-33-1-günde-i̇lk-pr-ai-destekli-roket-hızında-onboarding-süreci)
- [Ders 34: Kariyer Merdiveni ve Rol Tanımları: Junior, Mid, Senior, AI-Specialist Lead](#ders-34-kariyer-merdiveni-ve-rol-tanımları-junior,-mid,-senior,-ai-specialist-lead)
- [Ders 35: Takım Yetenek Matrisi ve Gap Analizi: Takımın Geleceğini Tasarlamak](#ders-35-takım-yetenek-matrisi-ve-gap-analizi-takımın-geleceğini-tasarlamak)
- [Ders 36: Kültürel Uyum ve Çeşitlilik: Toksik Yıldızları ve Sessiz Ayrılanları Yönetmek](#ders-36-kültürel-uyum-ve-çeşitlilik-toksik-yıldızları-ve-sessiz-ayrılanları-yönetmek)

### Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership

- [Ders 37: Cumartesi Gecesi Saat 03:00: Production Çöktüğünde Liderlik ve AI Incident Assistant](#ders-37-cumartesi-gecesi-saat-0300-production-çöktüğünde-liderlik-ve-ai-incident-assistant)
- [Ders 38: SRE, SLO, SLA ve SLI: İş Birimleri ile Hata Bütçesi (Error Budget) Sözleşmesi](#ders-38-sre,-slo,-sla-ve-sli-i̇ş-birimleri-ile-hata-bütçesi-(error-budget)-sözleşmesi)
- [Ders 39: AI Destekli Log & Telemetry Analizi: Milyonlarca Log Arasından İğneyi Bulmak](#ders-39-ai-destekli-log-&-telemetry-analizi-milyonlarca-log-arasından-i̇ğneyi-bulmak)
- [Ders 40: Blameless (Suçlamasız) Post-Mortem Kültürü: Hatayı Kurumsal Öğrenmeye Dönüştürmek](#ders-40-blameless-(suçlamasız)-post-mortem-kültürü-hatayı-kurumsal-öğrenmeye-dönüştürmek)
- [Ders 41: Chaos Engineering ve Dayanıklılık Testleri: Sistemleri Kasten Çökertmek](#ders-41-chaos-engineering-ve-dayanıklılık-testleri-sistemleri-kasten-çökertmek)
- [Ders 42: Teknik Krizde Müşteri ve Yönetici İletişimi: Paniksiz Durum Raporlaması](#ders-42-teknik-krizde-müşteri-ve-yönetici-i̇letişimi-paniksiz-durum-raporlaması)

### Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik

- [Ders 43: CTO, PM ve C-Level ile Aynı Dili Konuşmak: ROI, Runway ve Değer Sunumu](#ders-43-cto,-pm-ve-c-level-ile-aynı-dili-konuşmak-roi,-runway-ve-değer-sunumu)
- [Ders 44: Metrikler Yalan Söyler mi?: DORA Metrikleri, SPACE Çerçevesi ve AI Verimlilik Ölçümü](#ders-44-metrikler-yalan-söyler-mi-dora-metrikleri,-space-çerçevesi-ve-ai-verimlilik-ölçümü)
- [Ders 45: Bütçe, Bulut Maliyetleri (FinOps) ve AI Token Maliyet Optimizasyonu](#ders-45-bütçe,-bulut-maliyetleri-(finops)-ve-ai-token-maliyet-optimizasyonu)
- [Ders 46: 'Bu Özellik 3 Günde Çıkar mı?': Ürün Yöneticisiyle (PM) Sağlıklı Müzakere](#ders-46-bu-özellik-3-günde-çıkar-mı-ürün-yöneticisiyle-(pm)-sağlıklı-müzakere)
- [Ders 47: Yönetim Kurulu ve Liderlik Sunumları Hazırlama: AI ile Veriyi Hikayeleştirme](#ders-47-yönetim-kurulu-ve-liderlik-sunumları-hazırlama-ai-ile-veriyi-hikayeleştirme)
- [Ders 48: Stratejik 'Hayır' Deme Sanatı: Takımı Odak Noktasında Tutmak](#ders-48-stratejik-hayır-deme-sanatı-takımı-odak-noktasında-tutmak)

### Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak

- [Ders 49: Takıma Özel Yerel LLM ve Ajan Gateway Kurulumu: Güvenli & KVKK Uyumlu AI](#ders-49-takıma-özel-yerel-llm-ve-ajan-gateway-kurulumu-güvenli-&-kvkk-uyumlu-ai)
- [Ders 50: Context Engineering ve Prompt Yönetimi: Şirket Hafızasını LLM'e Yedirmek](#ders-50-context-engineering-ve-prompt-yönetimi-şirket-hafızasını-llme-yedirmek)
- [Ders 51: Multi-Agent İş Akışları: Planlayan, Yazan, Test Eden ve İnceleyen Ajan Ekibi](#ders-51-multi-agent-i̇ş-akışları-planlayan,-yazan,-test-eden-ve-i̇nceleyen-ajan-ekibi)
- [Ders 52: AI Çıktılarını Otomatik Değerlendirme (Evals) ve Benchmark Sistemleri](#ders-52-ai-çıktılarını-otomatik-değerlendirme-(evals)-ve-benchmark-sistemleri)
- [Ders 53: Fine-Tuning vs. RAG: Takımınız Hangi Senaryoda Hangisini Seçmeli?](#ders-53-fine-tuning-vs-rag-takımınız-hangi-senaryoda-hangisini-seçmeli)
- [Ders 54: Etik, Telif Hakları ve Şirket Fikri Mülkiyetini (IP) Koruma Rehberi](#ders-54-etik,-telif-hakları-ve-şirket-fikri-mülkiyetini-(ip)-koruma-rehberi)

### Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa

- [Ders 55: Mikro Yönetici Olmadan Yüksek Otonomi Sağlamak: Extreme Ownership & Autonomous Pods](#ders-55-mikro-yönetici-olmadan-yüksek-otonomi-sağlamak-extreme-ownership-&-autonomous-pods)
- [Ders 56: Bireysel Öğrenme ve AI Trendlerini Filtreleme: FOMO'ya Kapılmadan Öncü Kalmak](#ders-56-bireysel-öğrenme-ve-ai-trendlerini-filtreleme-fomoya-kapılmadan-öncü-kalmak)
- [Ders 57: Şirket İçi Mühendislik Kültürü Yaratmak: Hackathonlar, Guildler ve AI Labs](#ders-57-şirket-i̇çi-mühendislik-kültürü-yaratmak-hackathonlar,-guildler-ve-ai-labs)
- [Ders 58: Çoklu Takımları (Squad of Squads) Yönetmek: Staff+ Mühendislerle Eşleşme](#ders-58-çoklu-takımları-(squad-of-squads)-yönetmek-staff+-mühendislerle-eşleşme)
- [Ders 59: CTO Yol Haritası: Teknik Derinlikten Şirket Vizyonu Belirleyiciliğine](#ders-59-cto-yol-haritası-teknik-derinlikten-şirket-vizyonu-belirleyiciliğine)
- [Ders 60: Geleceğin Yazılım Mühendisliği Ekosistemi: İnsan-Yapay Zeka Ortaklığı Manifestosu](#ders-60-geleceğin-yazılım-mühendisliği-ekosistemi-i̇nsan-yapay-zeka-ortaklığı-manifestosu)

---

# Ders 01: 'Dün En İyi Koddum, Bugün Ne Yapıyorum?': Senior Dev Sendromu ve Team Lead Rolünün Şifreleri

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
En iyi kod yazan kişinin otomatik olarak yönetici yapıldığı o meşhur gün: Kod yazma bağımlılığından sistem ve insan orkestrasyonuna geçişin psikolojisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir restoranda en lezzetli pizzayı sen açıyordun diye seni restoran şefi yaptılar. Şimdi mutfakta hamur açmaya devam edersen siparişler yanar, garsonlar birbirine girer, müşteriler kaçar. Senin işin artık hamura dokunmak değil; fırının ısısını, tedarik zincirini, mutfak ekibinin motivasyonunu ve yapay zeka destekli akıllı sipariş fırınlarını yönetmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Başarı Ölçütü** | Günde kaç satır kod yazdım, kaç karmaşık PR kapattım. | Takımım ne kadar kesintisiz değer üretti, AI araçlarıyla kaç kat hızlandı. |
| **Tıkanıklık Yaklaşımı** | 'Çekil kenara ben 10 dakikada yazarım' deyip klavyeyi kapmak. | Mühendise doğru prompt ve mimari bağlamı vererek onun çözmesini sağlamak. |
| **Zaman Yönetimi** | Tüm gün IDE'ye gömülüp kulaklıkla dünyayı kapatmak. | Stratejik bloklar, asenkron AI özetleri ve kesintisiz odak zamanı tasarlamak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Dopamin Detoksu: IDE'de commit atmaktan gelen anlık tatmin yerine takımın ivmesinden (velocity) haz almayı öğren.
- 2. %70 / %30 Kuralı: Zamanının %70'ini takım blokajlarını kaldırmaya, mimariye ve insanlara; %30'unu teknik vizyona ve AI deneysel prototiplerine ayır.
- 3. Multiplier Mindset (Çarpan Etkisi): Kendi başına 10x mühendis olamazsın, ama 5 kişilik bir takımı AI ile 2x yaparak 10x etki yaratabilirsin.
- 4. Görünmez İşleri Görünür Kıl: 1-on-1'lar, PR inceleme standartları ve mimari netlik şirket için koddan daha değerlidir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Fintech ölçeğinde bir ödeme gateway projesinde yeni lead olan Barış, ilk 2 hafta boyunca sprintteki en zor 4 taskı üzerine aldı. Sonuç: Kendi tasklarını bitirdi ama takımdaki 3 junior mühendis bloklandığı için sprint %40 eksikle bitti. Barış tükenmişlik yaşadı. Çözüm: Barış ertesi sprint sıfır feature taskı aldı; AI tabanlı PR reviewer botları kurdu, mühendislerle eşleşti ve sprint başarısı %95'e fırladı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Senior Dev'den Team Lead'e Geçiş Zihniyet Koçu (Claude 3.7 / ChatGPT)
```text
Sen dünyanın en deneyimli Mühendislik Direktörüsün. Dün kıdemli yazılımcıydım, bugün 6 kişilik bir takımın lideri oldum. Şu an sürekli kod yazma isteği ve 'ben yapmazsam yetişmeyecek' kaygısı duyuyorum. Bana bu haftaki önceliklerimi düzenlemem için 5 maddelik bir delegasyon ve zaman yönetimi eylem planı hazırla. Tonun samimi, esprili ama tavizsiz olsun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki podcast sunucusu: Biri eski 'hardcore' kodcu yeni Team Lead, diğeri deneyimli AI mühendislik koçu. 'Kod bağımlısı bir yazılımcının liderliğe geçtiğinde klavyeyi bırakamaması ve her şeye burnunu sokması' trajikomik hikayesini tartışın. Neden AI çağında kod yazan değil orkestrasyonu yapan kazanır?

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Hoş Geldiniz: Tebrikler, artık resmi olarak 'en yalnız' yazılımcısınız!
- 03:15 - Dopamin Tuzağı: IDE'yi kapatamayan liderin yarattığı darboğaz
- 07:40 - Multiplier Etkisi: 10x Coder Efsanesi vs. 10x Takım Gerçeği
- 12:20 - İlk Hafta Egzersizi: Görev Listeni AI ile 3 Kategoriye Ayır (Delege et, Otomatize et, Sahiplen)


<div style="page-break-after: always;"></div>

---

# Ders 02: AI Çağında Liderlik: Kod Yazan mı, Sistemi Orkestre Eden mi?

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Birim kodun maliyetinin sıfıra yaklaştığı bir dünyada takım liderinin gerçek rolü: Mimari guardrail'lar, prompt standartları ve bağlam mühendisliği.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Geleneksel lider bir kazma kürek takımının en hızlı kazan amelesiydi. AI çağındaki lider ise ekskavatör, dron ve otonom iş makineleri filosunu koordine eden şantiye şefidir. Kazmayı ameleden kapıp 'bana ver ben daha hızlı kazarım' diyen şantiye şefi komiktir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Üretimi** | Her fonksiyonu sıfırdan el yordamıyla yazmak. | Spec ve test kontratı tanımlayıp AI ajanlarına ürettirmek ve denetlemek. |
| **Bilgi Paylaşımı** | Haftalarca süren eski wiki sayfaları ve kulaktan kulağa aktarım. | Kod tabanı RAG sistemi ve living context reposu oluşturmak. |
| **Hata Ayıklama** | Loglara 4 saat bakıp print satırları eklemek. | Trace ve log bağlamını LLM'e besleyip hipotezleri saniyeler içinde doğrulamak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Sözdiziminden (Syntax) Anlama (Semantics) Geç: Takımının başarısı artık dildeki noktalı virgüllerle değil, doğru iş mantığı modellemesiyle ölçülür.
- 2. Guardrail Mimarisi Kur: Takımın önüne serbest AI bıraktığında kod çöplüğü oluşur. Linter, statik analiz ve test kapılarını zorunlu kıl.
- 3. Context Is King: Takımına AI araçları dağıtmadan önce projenin mimari kurallarını `.cursorrules` veya sistem promptu haline getir.
- 4. Orkestrasyon Liderliği: İş parçalarını bağımsız promptlanabilir modüllere bölme becerisini takımına aşıla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
E-ticaret sepet servisinde çalışan 5 kişilik bir ekip, Copilot geldikten sonra PR sayısını 3 katına çıkardı ama production bug sayısı %60 arttı. Yeni lead Zeynep, kod yazmayı bıraktı; 2 gün boyunca ekibe özel 'Prompting & Verification' rehberi ve mimari test kapısı (ArchUnit) yazdı. Sonuç: Bug oranı sıfıra yaklaşırken net özellik teslim hızı 2.5 kat arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım İçi AI Kodlama Standartları ve Guardrail Oluşturucu
```text
Biz modern bir mikroservis mimarisi (Spring Boot / TypeScript / PostgreSQL) kullanan 7 kişilik bir ekibiz. Takım üyelerimizin Cursor ve Copilot kullanırken kod kalitesini düşürmemesi için 'AI-Assisted Development Best Practices' manifestosu hazırla. Kurallar net, ölçülebilir ve PR kontrol listesi içerecek şekilde olsun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> Podcast sunucuları: Biri 'Yapay zeka yazılımcılığı bitirecek mi?' paniğinde olan geleneksel mühendis, diğeri ise 'Hayır, artık her mühendis küçük bir ekibin yöneticisi gibi çalışıyor' diyen AI Team Lead. Kod yazmaktan orkestrasyona geçişin sancılarını çarpıcı esprilerle masaya yatırın.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Giriş: Kod yazmanın birim maliyeti sıfırlanırken lider ne yapar?
- 04:10 - Kod Hamallığı vs. Sistem Mimarlığı
- 08:35 - Guardrail Stratejisi: AI'ın ürettiği spagettiyi engellemek
- 14:00 - Egzersiz: Takımınız için 5 maddelik AI Kullanım Sözleşmesi oluşturun


<div style="page-break-after: always;"></div>

---

# Ders 03: İlk 90 Gün Hayatta Kalma Kiti: AI ile Hızlı Takım Analizi ve Güven İnşası

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İlk 3 ayda takımı batırmadan güven kazanmak: Dinleme turları, gizli dinamikleri AI ile haritalama ve 'Quick Win' stratejisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Yeni bir eve taşındığında ilk gün duvarları balyozla yıkıp açık mutfak yapmaya kalkışmazsın. Önce su boruları nereden geçiyor, komşular saat kaçta uyuyor, evin temeli sağlam mı onu anlarsın. İlk 90 gün balyoz günü değil, röntgen çekme ve güven inşa etme günüdür.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **İlk 30 Gün** | Hemen mimariyi baştan yazma planı açıklayıp ekibi korkutmak. | Herkesle 30 dk 1-on-1 yapıp transkriptleri AI ile analiz ederek gizli acıları bulmak. |
| **İlk 60 Gün** | Büyük vaatler verip üst yönetimi gereksiz beklentiye sokmak. | Geliştirici ortamındaki en büyük 2 sürtünmeyi (CI süresi, flaky test) çözmek. |
| **İlk 90 Gün** | Yalnız kovboy gibi her kararı tek başına almaya çalışmak. | Takımla mutabık kalınan ortak AI vizyonunu ve çeyreklik hedefleri sunmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 30 Günlük Dinleme Turu: Takım üyeleri, PM, QA ve komşu takım liderleriyle 'Seni en çok ne yavaşlatıyor?' görüşmesi yap.
- 2. AI Destekli Acı Noktası Sentezi: Görüşme notlarındaki anonim temaları LLM ile analiz edip frekans matrisi çıkar.
- 3. Düşük Risk, Yüksek Görünürlük (Quick Win): CI/CD süresini 25 dakikadan 7 dakikaya indirmek gibi herkesin hissedeceği bir zafer kazan.
- 4. Güven Hesabına Yatırım: Mühendisleri toplantı bombardımanından koru; onların odak zamanını savunduğunu ilk günden göster.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Can, banka projesine lead olarak transfer oldu. İlk hafta kimseyle konuşmadan 'Tüm servisi Rust'a taşıyacağız' dediği için takım içi isyan çıktı ve 2 kıdemli istifa eşiğine geldi. Durumu toparlamak için Can dinleme turu başlattı. AI analizinde asıl sorunun Rust değil, haftalık 14 saat süren anlamsız durum toplantıları olduğu anlaşıldı. Toplantıları asenkron AI bültenine çevirdi; takımla barıştı ve istifalar durdu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ İlk 90 Gün Paydaş Haritalama ve Acı Noktası Analiz Promptu
```text
Yeni bir yazılım takımının lideri oldum. 6 yazılımcı ve 1 ürün yöneticisiyle yaptığım 1-on-1 görüşmelerin ham notları aşağıdadır [NOTLARI BURAYA EKLEYİN]. Bu notları analiz et: 1) Takımın en büyük 3 operasyonel tıkanıklığı nedir? 2) İlk 30 günde çözebileceğim 2 somut 'Quick Win' önerisi ver. 3) Takım içindeki örtük kültürel endişeleri maddeler halinde özetle.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Bir şirkete paraşütle inen ve ilk günden her şeyi değiştirmeye çalışıp duvara toslayan tecrübesiz lead ile 'İlk 90 gün sadece kulaklarını açacaksın' diyen mentor lead. Efsanevi ilk 90 gün taktikleri ve güven inşası üzerine kahkahalarla dolu bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - İlk 90 Gün Sendromu: Neden ilk izlenim sonraki 2 yılı belirler?
- 03:45 - 30-60-90 Gün Planının Matematiksel Şablonu
- 08:10 - Dinleme Turlarından Çıkan Ham Veriyi AI ile Eyleme Dönüştürmek
- 13:30 - Quick Win Seçme Kriteri: Ne zaman mimariye dokunmalı, ne zaman dokunmamalı?


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 05: Takım Dinamikleri ve Psikolojik Güvenlik: AI Korkusunu Yenmek

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Yapay zeka işimizi elimizden mi alacak?' paniğiyle sessizleşen, kodunu gizleyen veya AI kullanmaktan utanan takımlarda güven ve şeffaflık kültürü.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Hesap makinesi ilk çıktığında muhasebeciler 'mesleğimiz bitti' diye paniklemişti. Halbuki hesap makinesini ilk çözen muhasebeciler dev şirketlerin finans direktörü oldu. Takımına AI'ın onların yerini alacak bir rakip değil, sırtlarındaki hamal çuvallarını taşıyan elektrikli bir vinç olduğunu hissettirmelisin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **AI Algısı** | 'AI kullanan yazılımcı hile yapıyordur, gerçek mühendis değildir.' | 'AI kullanmayan mühendis, at arabasıyla Formula 1 yarışına girmeye çalışıyordur.' |
| **Hata Paylaşımı** | AI halüsinasyonu yüzünden çıkan hatayı gizlemek, cezalandırmak. | 'Haftanın En Komik AI Hatası' oturumu yapıp promptları birlikte iyileştirmek. |
| **Takım Güveni** | Metrik olarak kimin kaç satır kod commit'lediğine bakmak. | Kimin problemi ne kadar yaratıcı ve sürdürülebilir çözdüğünü takdir etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Prompt Utancını (Prompt-Shaming) Yok Et: 'AI'a kod yazdırdı' diye alay edilmesini sıfır toleransla engelle; en iyi prompt yazanı ödüllendir.
- 2. Fail-Safe Ortam Yarat: Hata yapmanın serbest olduğu sandbox ortamları ve AI deneme günleri (Hack Friday) düzenle.
- 3. Açık Kapı AI Politikası: Şirket verisini dışarı sızdırmadan hangi araçların yasal ve serbest olduğunu netleştir (kurumsal gizlilik sınırları).
- 4. İnsan Odaklı Değerleme: Ekibe sürekli hatırlat: Şirket onları for-döngüsü yazdıkları için değil; empati, domain mantığı ve sistem muhakemesi için tutuyor.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir telekom firmasında yönetim 'Copilot kullananlar %50 daha fazla bilet bitirecek' diye duyuru yapınca takım panikledi. Juniorlar promptlarını gizledi, birbirlerine kod göstermemeye başladı. Yeni lead Arda araya girdi: Yönetimle konuşup anlamsız hız kotalarını iptal ettirdi. Takım içinde 'Haftanın AI Fiyaskoları ve Zaferleri' adında eğlenceli cuma kahveleri başlattı. 1 ayda takım birbirine en iyi promptları öğretti ve verimlilik doğal olarak %80 arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Psikolojik Güvenlik ve AI Kültürü Değerlendirme Anketi Hazırlayıcı
```text
Yazılım takımımda üyelerin AI araçlarını rahatça denemesi, halüsinasyon risklerini korkmadan raporlaması ve birbirine destek olması için 5 soruluk anonim bir 'Psikolojik Güvenlik ve AI Kültürü Anketi' hazırla. Sorular samimi, suçlamayan ve takım dinamiklerini ortaya çıkaracak derinlikte olsun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: AI paranoyası yaşayan ('Seneye hepimiz işsiziz!') bir kıdemli yazılımcı ile onu sakinleştiren ve yeni rolünün gücünü anlatan Lead. Komik diyaloglar, geçmiş teknolojik devrimler (derleyiciler, bulut, StackOverflow) ve psikolojik güvenliğin önemi.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Takımdaki Fil: 'Yapay zeka işimi elimden mi alacak?'
- 04:00 - Prompt Utancı Nedir ve Nasıl Yok Edilir?
- 08:15 - Psikolojik Güvenliğin 4 Aşaması (Amy Edmondson Modeli + AI Entegrasyonu)
- 13:50 - Pratik: Takımınızla yapacağınız ilk AI Güvenlik Retrospektifi Planı


<div style="page-break-after: always;"></div>

---

# Ders 06: Takım Liderinin AI Alet Çantası: Cursor, Claude 3.7, Copilot, NotebookLM ve Deep Research Ekosistemi

> **Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş** | *Seviye / Level: Başlangıç / Beginner Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Hangi araç ne işe yarar? Kaos yaratmadan takıma doğru AI yığınını (stack) seçmek, bütçelendirmek ve iş akışına entegre etmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Takımına her gün çıkan yeni bir yapay zeka aracını aldırmak, marangoz atölyesini her gün yeni çıkan 50 farklı süslü testereyle doldurmaya benzer. Marangozlar iş yapamaz, testere denemekten masa üretemez. Liderin görevi 3 temel alet seçip onların ustası olmaktır: biri hızlı keser (IDE), biri büyük resmi planlar (Claude), biri de atölyenin hafızasını tutar (NotebookLM).

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **IDE Entegrasyonu** | Sadece satır içi autocomplete eklentisi kullanmak. | Multi-file context ve repo indeksleme yapabilen Cursor/Copilot Workspace kullanmak. |
| **Mimari Analiz** | Saatlerce Google ve StackOverflow sayfalarında kaybolmak. | Claude 3.7 Sonnet / Reasoning modelleriyle karmaşık mimari senaryoları modellemek. |
| **Dokümantasyon & Öğrenme** | PDF ve Confluence sayfalarını kimsenin okumaması. | Tüm şirket dokümanlarını NotebookLM'e yükleyip sesli podcast ve interaktif SSS üretmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Temel Katman (IDE): Kod yazarken ve refactor ederken Cursor veya GitHub Copilot.
- 2. Akıl Yürütme Katmanı (Reasoning & Arch): RFC ve tasarım belgeleri için Claude 3.7 Sonnet veya OpenAI o-serisi modeller.
- 3. Takım Hafızası Katmanı (Research & Onboarding): Proje belgelerini, API spec'lerini ve retro notlarını NotebookLM'e bağlayıp hızlı oryantasyon sağla.
- 4. Bütçe ve Lisanslama Yönetimi: Kişi başı aylık 20-40$ AI bütçesinin şirkete sağladığı ROI'yi yönetime tek bir metrikle kanıtla: Geliştirici başına haftada kazanılan 6 saat.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech ekibi 12 farklı AI aracına lisans parası ödüyordu ama kimse neyi nerede kullanacağını bilmiyordu. Lead Elif bir konsolidasyon yaptı: Takımı Cursor + Claude + NotebookLM üçlüsünde standartlaştırdı. Takımın tüm mimari dokümanlarını NotebookLM'e yükleyip yeni katılan juniorların projenin iş mantığını 2 günde öğrenmesini sağladı. Araç maliyeti %40 düştü, takım memnuniyeti tavan yaptı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Mühendislik Takımı AI Alet Çantası ROI ve Seçim Kılavuzu
```text
10 kişilik bir yazılım mühendisliği takımı için şirket CFO'suna sunulmak üzere 'AI Tooling ROI ve Standartlaşma Raporu' hazırla. Cursor ($20/ay), Claude Pro ($20/ay) ve NotebookLM kullanımının haftalık zaman kazanımı, kod kalitesi ve onboarding süresi üzerindeki etkilerini rakamlarla ve net argümanlarla formüle et.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri her gün çıkan yeni AI araçlarını deneyip hiçbir iş bitiremeyen 'AI Tool Junkie', diğeri ise sadece 3 aracı ustaca kullanıp harikalar yaratan kıdemli Lead. Hangi aracın nerede parladığını, hangisinin vakit kaybı olduğunu keyifli bir üslupla tartışın.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Araç Çılgınlığı: FOMO'ya kapılmadan takım yığını seçmek
- 03:50 - Taktiksel Katman: Cursor ve Copilot'u repo kurallarıyla konfigüre etmek
- 08:10 - Stratejik Katman: Claude 3.7 ile mimari tartışmalar
- 12:45 - Bilgi Katmanı: NotebookLM'i takımın ikinci beyni haline getirmek
- 16:20 - Egzersiz: Takımınız için 1 sayfalık 'Onaylı AI Araç Matrisi' hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 07: Sıkıcı 1-on-1'ları Bırak: Büyüme Odaklı, AI Destekli Birebir Görüşme Çerçevesi

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
1-on-1'lar durum güncelleme toplantısı değildir. Mühendisin kariyer hedeflerini, tıkanıklıklarını takip eden ve AI ile aksiyona dönüşen görüşme modeli.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> 1-on-1 toplantısında mühendise 'Jira'daki 42 numaralı bilet ne oldu?' diye sormak, doktora gidip sadece saatin kaç olduğunu sormaya benzer. O biletin durumunu zaten Jira'da görüyorsun. 1-on-1, mühendisin kariyer nabzını ölçtüğün, stres seviyesine baktığın ve önündeki taşları temizlediğin kutsal alandır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Gündem Belirleme** | Toplantıya hazırlıksız girip 'Eee, ne var ne yok?' demek. | Önceki notlar, PR ritmi ve hedeflerden AI ile kişiselleştirilmiş 3 odak sorusu üretmek. |
| **İçerik** | 30 dakikanın 25 dakikasını sprint durumunu anlatarak harcamak. | Zamanın %80'ini kariyer, motivasyon, takım ilişkileri ve öğrenmeye ayırmak. |
| **Aksiyon Takibi** | Alınan kararların unutulup gitmesi. | Görüşme sonrasında AI ile 3 maddelik aksiyon e-postası çıkarıp takvime işlemek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 10-10-10 Kuralı: 10 dakika onun gündemi (dertleri, fikirleri), 10 dakika senin gündemin (geri bildirim, strateji), 10 dakika gelecek ve kariyer gelişimi.
- 2. Durum Güncellemesini Yasakla: 'İş durumu konuşmak istiyorsan Slack'ten yaz veya standup'ta söyle, burası senin büyüme alanın.'
- 3. AI Destekli Hazırlık: Görüşmeye girmeden son 3 haftanın notlarını LLM'e verip: 'Bu mühendisin son dönemdeki motivasyon düşüş sinyalleri neler?' analizi al.
- 4. Kapanış Ritüeli: 'Ben bir lider olarak senin işini kolaylaştırmak için bu hafta neyi farklı yapabilirim?' sorusuyla bitir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Mid-level backend mühendisi Kerem, 6 aydır aynı takımdaydı ama hiç konuşmuyordu. Eski lead'i her 1-on-1'da sadece bilet soruyordu. Yeni lead Seda, ilk görüşmede 10-10-10 kuralını uyguladı ve Kerem'in aslında distributed systems öğrenmek istediğini ama sürekli frontend taskları verildiği için gizlice iş aradığını öğrendi. Seda, Kerem'in task dağılımını yeniden düzenledi; Kerem şirkette kaldı ve takımın en kritik caching mimarisini kurdu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Büyüme Odaklı 1-on-1 Görüşme Asistanı ve Aksiyon Çıkarıcı
```text
Yazılım mühendislerimle yapacağım 1-on-1 görüşmeleri derinleştirmek istiyorum. Mühendisin kıdemi: [Junior/Mid/Senior], Son dönem performansı: [Detaylar]. Bana şunları üret: 1) Mühendisin kendini güvende hissedip içini açmasını sağlayacak 3 koçluk sorusu, 2) Kariyer tıkanıklığını teşhis eden 2 derin soru, 3) Görüşme sonrası notlarımı özetleyip Jira/Slack aksiyonuna dönüştürecek bir şablon.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri her 1-on-1'ı bilet sorgulamasına çeviren kabus gibi bir yöneticiyi canlandırırken, diğeri harika bir koçluk görüşmesinin nasıl yapıldığını gösteren deneyimli Lead. 1-on-1'ların nasıl bir mühendisin kaderini değiştirebileceğine dair ilham verici diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Neden Mühendislerin %70'i 1-on-1'lardan Nefret Eder?
- 03:30 - Durum Güncellemesinden Kurtulmak: 10-10-10 Formülü
- 07:45 - Görüşme Notlarını AI ile Trend Analizine Çevirmek
- 12:15 - Canlı Rol Yapma: İçe Kapanık Bir Yazılımcıyla İlk Derin Görüşme


<div style="page-break-after: always;"></div>

---

# Ders 08: Zorlu Konuşmalar ve Geri Bildirim: SBI Modeli + AI Simülasyonu

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Kötü performansı veya negatif tutumu olan bir mühendisle konuşmaktan korkan liderler için rehber: Durum-Davranış-Etki (SBI) modeli ve AI ile ön prova.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Dişinde maydanoz kalmış bir arkadaşına bunu söylememek kibarlık değildir; onun tüm gün öyle gezmesine izin verip rezil olmasını izlemektir. Geri bildirim vermek kavga etmek değil, arkadaşının dişindeki maydanozu nazikçe ve özelde göstermektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Geri Bildirim Tarzı** | 'Sen çok dikkatsizsin, kodların sürekli patlıyor' (Kişiliğe saldırı). | 'Dünkü release'de (Durum), test yazmadan PR açtın (Davranış), ödeme servisi 12 dk çöktü (Etki)' (SBI). |
| **Zamanlama** | 6 ay biriktirip yıllık performans değerlendirmesinde yüzüne vurmak. | Olaydan sonraki en geç 48 saat içinde sıcağı sıcağına konuşmak. |
| **Hazırlık** | Spontane konuşup öfkelenmek veya konuyu yumuşatıp mesajı kaybetmek. | Görüşme öncesi LLM ile rol yapıp adayın vereceği olası tepkileri simüle etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. SBI Çerçevesini Kullan: Situation (Hangi olayda?), Behavior (Hangi somut eylemi yaptı?), Impact (Takıma ve işe etkisi ne oldu?).
- 2. Kişiliği Değil Eylemi Eleştir: 'Sen sorumsuzsun' deme; 'Toplantıya 20 dakika geç gelmen takımın motivasyonunu düşürdü' de.
- 3. AI ile Rol Yapma Simülasyonu: Claude veya ChatGPT'ye 'Sen savunmacı ve sinirli bir senior mühendissin, ben lead'inim' de ve geri bildirim provası yap.
- 4. Birlikte Çözüm Üret: 'Bu durumun tekrar etmemesi için sence nasıl bir önlem almalıyız?' diyerek topu ona at.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech takımında yetenekli ama hırçın bir Senior Dev, PR incelemelerinde juniorlara 'Bu ne biçim kod, bunu yazan stajyer bile olamaz' şeklinde aşağılayıcı yorumlar yazıyordu. Lead Ozan çekindiği için 3 ay sustu. Sonunda bir junior ağlayarak istifa etti. Ozan AI simülasyonu ile zorlu konuşma provası yaptı. Ertesi gün Senior ile SBI modeline göre konuştu; yorumların takım üzerindeki yıkıcı etkisini gösterdi ve net sınırlar koydu. Senior davranışını düzeltti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ SBI Geri Bildirim Simülatörü ve Rol Yapma Partneri
```text
Sen dünyanın en zorlu, çabuk savunmaya geçen kıdemli yazılımcısısın. Ben senin takım liderinim. Dün production'a test yazmadan hotfix çıktın ve sepet servisi 30 dakika durdu. Şimdi seninle bu durumu konuşacağız. Ben ilk cümlemi kuracağım, sen gerçekçi bir yazılımcı gibi savunma yap, mazeretler üret. Konuşmanın sonunda bana performansım hakkında koçluk geri bildirimi ver.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Çatışmadan kaçan kibar lider' ile 'Herkesi azarlayan kırıcı lider' arasındaki fark. SBI modelinin zarafeti ve AI ile zor konuşma provaları yapmanın bir liderin hayatını nasıl kurtardığı üzerine etkileyici bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Çatışmadan Kaçmanın Ağır Maliyeti: Sessiz Kanser
- 03:40 - SBI (Situation-Behavior-Impact) Formülünün Matematiği
- 07:30 - Canlı AI Simülasyonu: Savunmacı Mühendise Nasıl Yaklaşılır?
- 12:00 - Egzersiz: Takımınızda ertelediğiniz 1 zorlu konuşmayı SBI formatında yazın


<div style="page-break-after: always;"></div>

---

# Ders 09: Takım İçi Çatışma Çözümü: Sessiz Kırgınlıkları ve Ego Savaşlarını Önlemek

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İki senior mühendis farklı kütüphaneler veya mimariler için birbirine girdiğinde: Kutsal savaşları (tabs vs spaces, REST vs GraphQL) rasyonel veriye ve ADR'a dönüştürme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> İki şoförün otobüsün rengi sarı mı olsun kırmızı mı olsun diye yolun ortasında kavga edip yolcuları bekletmesine izin veremezsin. Önemli olan otobüsün rengi değil, yolcuları vaktinde ve güvenle gideceği yere götürmesidir. Lider, tartışmayı zevklerden çıkarıp müşteri ihtiyacı tablosuna taşır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Tartışma Ekseni** | 'Ben 10 yıldır böyle yapıyorum, en doğrusu bu' (Kıdem egosu). | 'Gereksinimlerimiz X, Y, Z. Bu iki yaklaşımın gecikme, maliyet ve bakım metriklerini kıyaslayalım.' |
| **Karar Mekanizması** | Kimin sesi daha çok çıkarsa veya kim daha kıdemliyse onun dediği olur. | AI ile tarafsız bir Trade-off Matrisi çıkarıp Architecture Decision Record (ADR) imzalamak. |
| **Sonuç** | Kaybeden tarafın projeyi pasif-agresif sabote etmesi. | 'Disagree and Commit' ilkesiyle herkesin kararı sahiplenmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Dini Savaşı Mühendislik Problemine Çevir: 'Hangisi daha iyi?' sorusunu yasakla; 'Bizim yükümüz ve ekibimiz için hangi kısıtlar var?' diye sor.
- 2. Tarafsız Hakem Olarak AI Trade-Off Matrisi: İki yaklaşımın da avantaj ve dezavantajlarını kurumsal kısıtlarla LLM'e analiz ettir.
- 3. 48 Saatlik Timebox ve Spike: Tartışmayı uzatmak yerine iki tarafa da 1'er günlük prototip (spike) süresi ver; metriklerle masaya oturt.
- 4. Disagree and Commit Kültürü: Karar verildikten sonra tartışma biter; herkes kararın arkasında durur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
SaaS şirketinde iki kıdemli mühendis GraphQL mi yoksa REST mi kullanılmalı diye 3 hafta boyunca Slack'te kavga etti, sprint durdu. Yeni lead Burak devreye girdi. İki taraftan da 1 sayfalık teknik tezlerini istedi. Bu tezleri Claude'a verip takımın mobil client kısıtlarına ve caching gereksinimlerine göre tarafsız bir matris çıkarttı. Matriste REST + partial responses seçeneğinin %30 daha az maliyetli olduğu netleşti. İki mühendis de el sıkıştı ve 3 haftalık kriz 2 saatte bitti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Teknik Çatışma Çözücü ve Tarafsız Mimari Karar Matrisi
```text
Takımımda iki kıdemli mühendis şu konuda anlaşmazlığa düştü: [A Seçeneği] vs [B Seçeneği]. Projemizin kısıtları: [Teknoloji yığını, bütçe, ekip deneyimi, beklenen trafik]. Bu iki seçeneği şu kriterlere göre tarafsız bir puanlama tablosu (1-5) ve gerekçeleriyle analiz et: 1) Öğrenme eğrisi, 2) Bakım maliyeti, 3) Performans, 4) Ekip içi riskler. Sonunda bir uzlaşı önerisi getir.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri koyu bir 'Microservices ve Kafka' fanatiği, diğeri fanatik bir 'Modular Monolith' savunucusu. İki egonun çarpışmasını taklit edip araya giren Team Lead'in veriye dayalı analiziyle nasıl uzlaştıklarını kahkahalarla anlatan bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Yazılımcı Egosunun Anatomisi: Kutsal Teknolojik Savaşlar
- 04:15 - 'Disagree and Commit' (Amazon İlkesi) Nasıl Uygulanır?
- 08:30 - AI Destekli ADR (Architecture Decision Record) Hazırlama
- 13:00 - Egzersiz: Takımınızdaki geçmiş bir teknik tartışmayı matrisle yeniden değerlendirin


<div style="page-break-after: always;"></div>

---

# Ders 10: Performans Yönetimi ve PIP Dönemi: Veriyle ve Empatiyle Konuşmak

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Performansı düşen bir takım arkadaşını geri kazanmak veya kaçınılmaz PIP sürecini insan onuruna yakışır, veri odaklı ve şeffaf şekilde yönetmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir futbolcunun son 3 maçta gol atamaması onun yeteneksiz olduğunu göstermez; belki ayakkabısı vuruyordur, belki ailesinde bir hastalık vardır, belki de yanlış mevkide oynatılıyordur. Lider hemen oyuncuyu kadro dışı bırakmaz; önce kramponuna ve psikolojisine bakar. Eğer her destek verilmesine rağmen koşmuyorsa, o zaman profesyonelce yolları ayırır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Performans Tespiti** | 'Gözüme tembel görünüyor' hissiyle hareket etmek. | PR teslim süreleri, blokaj kayıtları ve 1-on-1 notlarını objektif incelemek. |
| **İyileştirme Planı (PIP)** | İşten çıkarmak için bahane olarak uydurma hedefler koymak. | Başarılabilir, ölçülebilir 30-60 günlük net gelişim kilometre taşları ve AI eşleşmesi koymak. |
| **İletişim** | Son güne kadar her şey yolundaymış gibi davranıp aniden şok etmek. | Açık, şeffaf ve haftalık düzenli durum değerlendirmesi yapmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Kök Neden Analizi (Skill vs Will): Sorun yetenek (Skill) eksikliği mi, yoksa motivasyon/kişisel sorun (Will) mu? Teşhisi doğru koy.
- 2. Erken Uyarı Sistemi: Düşüş sinyali gördüğün an 1-on-1'da konuyu aç; asla 6 ay sonraya erteleme.
- 3. SMART Hedeflerle PIP Tasarımı: AI kullanarak muğlak olmayan hedefler yaz ('2 hafta içinde şu 3 servisin test coverage'ını %80'e çıkaracak').
- 4. Kazan-Kazan Zihniyeti: PIP'in amacı insan kovmak değil; personeli takıma geri kazandırmaktır. Başarırsa kutla, başaramazsa onuruyla vedalaş.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Senior Java Developer Tolga, son 2 sprintte hiçbir bilet bitiremedi ve toplantılarda agresifleşti. Eski yönetim doğrudan kovmayı önerdi. Yeni lead Deniz, Tolga ile samimi bir görüşme yaptı; Tolga'nın annesinin ağır bir hastalık geçirdiğini ve geceleri hastanede kaldığını öğrendi. Deniz, Tolga'ya 2 hafta esnek çalışma izni verdi ve görevlerini asenkron tasklara çevirdi. Tolga toparlandı ve sonraki çeyrekte takımın en yüksek performanslı mühendisi seçildi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Empatik Performans İyileştirme Planı (PIP) ve SMART Hedef Tasarımcısı
```text
Bir yazılım takımı lideriyim. Takımımdaki bir mühendisin son 6 haftadır teslimatlarında ciddi düşüş var: PR'ları çok geç açıyor, test yazmıyor ve standup'lara katılmıyor. Bu mühendis için hem empatik hem de profesyonel sınırları koruyan 30 günlük bir 'Performans İyileştirme ve Destek Planı' hazırla. Şunları içersin: 1) Mühendisle yapılacak ilk görüşmenin konuşma taslağı, 2) 3 adet ölçülebilir SMART hedef, 3) Haftalık takip çizelgesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri şirketlerin PIP sürecini çalışanları kovmak için bir formalite olarak kullanmasını eleştiren, diğeri ise gerçek bir liderin PIP ile bir mühendisi nasıl dipten zirveye taşıyabileceğini anlatan iki uzman. İnsan odaklı liderliğin çarpıcı örnekleri.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Performans Düşüklüğü: Tembellik mi, Yardım Çığlığı mı?
- 04:10 - Skill vs Will Matrisi: Mühendisin Neye İhtiyacı Var?
- 08:20 - AI ile Kusursuz ve Objektif PIP Dokümanı Hazırlamak
- 13:15 - Veda Gerektiğinde: İnsan Onurunu Koruyarak Yolları Ayırmak


<div style="page-break-after: always;"></div>

---

# Ders 11: Mentorluk vs. Koçluk: Junior ve Mid-Level Mühendisleri AI ile 3x Hızlandırmak

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Cevabı vermek (Mentorluk) ile düşündürmek (Koçluk) arasındaki fark. Junior mühendislerin kendi AI mentorlarını kurarak bağımsızlaşmasını sağlamak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Birine balık verirsen bir gün doyar (Cevabı söylemek). Balık tutmayı öğretirsen ömür boyu doyar (Koçluk). Ona yapay zeka destekli bir balık bulma radarı verir ve nasıl kullanacağını öğretirsen kendi filosunu kurar (AI Çağında Liderlik).

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Sorulan Soruya Cevap** | 'Git config dosyasındaki 42. satırı değiştir' deyip kestirip atmak. | 'Sence bu hata neden kaynaklanıyor olabilir? LLM ile hangi hipotezleri test ettin?' |
| **Öğrenme Hızı** | Junior'ın lead'in boş vaktini saatlerce beklemesi. | Junior'ın takım bağlamıyla eğitilmiş repo RAG botuna sorup anında öğrenmesi. |
| **Bağımsızlık** | Sürekli lead'e bağımlı, inisiyatif alamayan mühendisler. | Kendi çözümünü üretip lead'e sadece onay ve mimari doğrulama için gelen mühendisler. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. GROW Koçluk Modelini Uygula: Goal (Hedef), Reality (Mevcut Durum), Options (Seçenekler), Will (Hangi adımı atacaksın?).
- 2. Doğrudan Cevap Vermeyi Bırak: Soruyla gelen mühendise: 'Harika bir soru. Sence en mantıklı 2 alternatif ne olabilir?' diye sor.
- 3. Kişisel AI Eşleşmesi Kur: Junior mühendise kodlama yaparken ona 'Sokratik Yöntemle' soru soran özel bir Cursor / ChatGPT sistem promptu tanımlat.
- 4. Tersine Mentorluk: Junior mühendislerin yeni keşfettiği AI araçlarını ve prompt hilelerini ayda bir tüm takıma anlatmasını sağla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir start-up'ta yeni başlayan junior geliştirici Ece, her 20 dakikada bir lead'ine soru soruyordu. Lead bunalmıştı, Ece ise yetersiz hissediyordu. Lead, Ece ile bir koçluk oturumu yaptı. Ece'ye projenin mimari dokümanlarıyla beslenmiş yerel bir AI RAG botu kurdular ve 'Sokratik Öğrenme Promptu' hediye ettiler. Ece sorularını önce bu bota sormaya, hipotezlerini not alıp lead'e sadece günde 1 kez onay için gelmeye başladı. 2 ay sonra Ece, takımdaki en bağımsız mid-level adayı haline geldi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Sokratik Yazılım Koçu Sistem Promptu (Junior Geliştiriciler İçin)
```text
Sen dünyanın en iyi yazılım mühendisliği koçusun. Sana kod veya mimariyle ilgili bir soru sorduğumda, doğrudan cevabı ve hazır kodu ASLA verme. Bunun yerine: 1) Sorunun kökündeki temel bilgisayar bilimi kavramını açıkla, 2) Bana düşünmemi sağlayacak 2 yönlendirici soru sor, 3) Doğru yönde ilerlediğimde beni tebrik edip bir sonraki adımı keşfetmemi sağla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Biri her soruya anında hazır kod veren 'Spoon-feeding' mentorun yarattığı bağımlılık felaketini anlatırken, diğeri Sokratik koçluk ve AI kombinasyonunun bir juniorı nasıl 6 ayda yıldız mühendise dönüştürdüğünü inceliyor. İlham verici bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Neden Cevabı Söylemek Mühendisi Tembelleştirir?
- 03:45 - GROW Koçluk Modelinin Yazılım Takımlarına Uyarlanması
- 08:10 - Junior Mühendisler İçin Sokratik AI Öğrenme Asistanı
- 13:30 - Egzersiz: Takımınızdaki bir junior mühendisle Sokratik koçluk denemesi


<div style="page-break-after: always;"></div>

---

# Ders 12: Burnout ve AI Yorgunluğu: Takımın Ruh Sağlığını Koruma Kılavuzu

> **Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
AI araçları hızlandıkça beklentiler de katlandı: 'Her şeyi 10 dakikada yapabiliyorsan neden daha fazla yapmıyorsun?' baskısı ve zihinsel tükenmişliği yönetmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir arabanın motoruna turbo takarsan araba iki kat hızlı gider. Ama o arabayı 24 saat boyunca kırmızı çizgide (redline) devirde sürersen motor patlar, araba hurdaya döner. AI takımın turbosudur; liderin görevi arabayı sürekli son gaz sürmek değil, harareti kontrol altında tutmaktır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Üretkenlik Beklentisi** | 'Sprint bitti, hadi hemen dinlenmeden diğerine başlayalım.' | 'AI ile kazandığımız zamanı daha fazla bilet açmak için değil, dinlenmek ve refactor etmek için kullanacağız.' |
| **Mesai Dışı İletişim** | Gece 23:00'te Slack'ten mesaj atıp anında cevap beklemek. | Kesin sessizlik saatleri (No-Ping Hours) ve zamanlanmış mesaj kuralı koymak. |
| **Tükenmişlik Tespiti** | Mühendis istifa dilekçesini verene kadar hiçbir şey fark etmemek. | Git commit saatleri, PR yorumlarındaki ton değişimi ve 1-on-1 sinyallerinden AI ile yorgunluk tespiti. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Jevons Paradoksu Tuzağına Düşme: Bir kaynağı verimli kullanmak talebi artırır. AI kod yazmayı kolaylaştırdı diye takıma 3 kat daha fazla iş yükleme.
- 2. Odak Günleri (Focus Days): Çarşamba günlerini sıfır toplantı ve sıfır Slack günü ilan et; mühendislerin derin düşünmesine alan aç.
- 3. Slack/Teams Hijyeni: Gece ve hafta sonu bildirimlerini kapatmayı teşvik et; sen lead olarak gece mesaj atıyorsan bile 'Zamanlanmış Mesaj' ile sabah 09:00'a kur.
- 4. Ruh Sağlığı İndikatörleri: Sürekli geç saatte PR açan, toplantılarda kamerası kapanan ve alaycı espriler yapmaya başlayan mühendise hemen ulaş ve nefes aldır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Yapay zeka araçlarını devreye alan bir oyun stüdyosunda yönetim 'Artık 1 haftada oyun bitirebilirsiniz' diyerek takımı 2 ay boyunca hafta sonları dahil çalıştırdı. 8 kişilik ekibin 3 en kıdemli mühendisi aynı hafta tükenmişlik raporu alarak işi bıraktı. Yeni gelen lead Tolga ilk iş olarak 'Haftalık Maksimum 40 Saat' kuralı getirdi, hafta sonu deployment'larını yasakladı ve takımın sprint hızını %30 düşürerek insanileştirdi. Kalan ekip toparlandı ve 3 ay içinde şirketin en karlı oyununu çıkardı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım Bilişsel Yük ve Tükenmişlik Risk Analizörü
```text
Bir yazılım takımı lideriyim. Takımımın son 1 aydaki çalışma ritmi şöyle: [Sprint tamamlama oranı, gece açılan PR sayısı, son retro yorumları]. Bu verileri analiz et: 1) Takımda bilişsel aşırı yüklenme (cognitive overload) ve tükenmişlik belirtisi var mı? 2) Takımın nefes almasını sağlayacak 3 somut operasyonel kural önerisi getir, 3) Şirket yönetimine mühendislerin tükenmesini engellemenin neden uzun vadede karlılık getirdiğini anlatan 3 maddelik yönetici özeti yaz.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Sürekli hızlanıyoruz ama nereye koşuyoruz?' sorusunu soran iki deneyimli lider. AI çağında tükenmişliğin yeni yüzü (Cognitive Overload) ve takımı korumanın liderin en birinci görevi olduğu üzerine sarsıcı ve insani bir değerlendirme.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Çağının Gizli Tuzağı: Jevons Paradoksu ve Aşırı Üretkenlik Baskısı
- 04:20 - Tükenmişliğin 5 Erken Teşhis Belirtisi
- 08:40 - Takımınızı Koruma Kalkanı: Odak Günleri ve Bildirim Hijyeni
- 13:50 - Egzersiz: Takımınız için 'Sürdürülebilir Çalışma Sözleşmesi' hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 13: 2 Saatlik Standup ve Refinement İşkencesine Son: Asenkron & AI Özetli Ritüeller

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Her sabah 15 dakikalık standup'ın 1 saate uzaması kabusuna son: Slack/Teams üzerinden asenkron check-in ve AI ile sentezlenen blokaj bültenleri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir grup itfaiyecinin her sabah yangın hortumunun önünde 1 saat boyunca 'Dün hangi vanayı sıktım, bugün hangi merdivene basacağım' diye sırayla konuşmasına benzer. Yangın çıktığında konuşulmaz, telsizden tek cümle anons geçilir: '2. kat bloklandı, destek lazım!'. Standup durum raporu verme mahkemesi değil, blokaj temizleme telsizidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Format** | Her sabah herkesin kamerasını açıp sırayla dün ne yaptığını okuması. | Slack botuna 3 madde yazmak; AI'ın bunu 30 saniyelik liderlik özetine çevirmesi. |
| **Blokaj Çözümü** | İki kişinin spesifik teknik tartışmasını 8 kişinin dinlemesi. | Blokaj anında ilgili iki kişinin yapay zeka eşliğinde hemen ayrı bir kanala geçmesi. |
| **Zaman Kazanımı** | Takım başına haftada 7.5 saat boşa harcanan toplantı süresi. | Haftada 1 saat canlı strateji kahvesi, geri kalan her şey asenkron ve AI özetli. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 3 Klasik Soruyu Emekliye Ayır: 'Dün ne yaptım?' yerine 'Bugün hangi çıktıyı teslim edeceğim?' ve 'Önümdeki tek büyük taş ne?' sorusunu koy.
- 2. Asenkron Standup Botu Kur: Ekip sabah 09:30'a kadar Slack kanalına 2 satır yazar.
- 3. AI Blokaj Radarını Çalıştır: Bir script tüm yanıtları ve GitHub PR durumlarını tarayıp Lead'e tek bir özet üretir: 'Bugün sadece Ahmet ve Zeynep bloklu, onlara yardım et.'
- 4. 15 Dakika Kuralı: Canlı standup yapılacaksa kronometre aç; 15. dakikada toplantı biter, teknik detay konuşmak isteyenler breakout room'a geçer.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir bankacılık ekibinde 12 yazılımcı her sabah 45 dakika standup yapıyordu. Mühendisler toplantıdan sonra odaklanabilmek için 1 saat kendine gelemiyordu. Yeni lead Kerem, standup'ı tamamen asenkron hale getirdi. Sabahları bir LLM botu Slack mesajlarını, açık PR'ları ve Jira biletlerini derleyip 5 satırlık 'Günlük Operasyonel Röntgen' çıkarmaya başladı. Toplantı süresi haftalık 4 saat azaldı; takım sprint hedeflerini ilk kez 3 gün önceden tamamladı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Günlük Standup Asenkron Sentezleyici ve Blokaj Avcısı
```text
Aşağıda 7 yazılım mühendisinin bu sabah yazdığı asenkron standup mesajları bulunmaktadır: [MESAJLAR]. Bir Engineering Lead asistanı olarak: 1) Kimlerin önünde somut bir blokaj var ve kim kimden yardım bekliyor? 2) Hangi tasklar gecikme riski taşıyor? 3) Benim bir lead olarak bugün çözmem gereken en kritik 2 aksiyonu listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Her sabah yapılan ve herkesin kamerası kapalıyken uyuduğu 1 saatlik kabus standup'ları alaya alan iki mühendis. Asenkron çalışma kültürü ve yapay zekanın toplantı israfını nasıl yok ettiği üzerine kahkaha dolu bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Toplantı Zehirlenmesi: Standup'lar ne zaman canavara dönüştü?
- 03:40 - Asenkron Çalışma Protokolü: Slack + AI Digest Mimarisi
- 07:50 - Canlı Toplantıları Sadece 'Blokaj Kırma' Seansına Dönüştürmek
- 12:30 - Egzersiz: Takımınız için 1 günlük asenkron standup deneyi tasarlayın


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 15: Sprint Planlama ve Efor Tahmini: AI ile Story Point Yanılsamalarından Kurtulmak

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Planning Poker kartları sallayarak saatlerce tartışmaya son: Tarihsel git commitleri, PR büyüklükleri ve AI analitiğiyle gerçekçi teslimat tahminleri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir marangozun bir masanın kaç günde biteceğini masaya bakıp fal açarak tahmin etmesi yerine; elindeki ağacın sertliğine, atölyedeki personelin hızına ve son 20 masada çıkan ortalama gecikmelere bakıp 'Bu masa %90 ihtimalle Perşembe öğleden sonra biter' demesidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Tahmin Yöntemi** | Planning Poker kartı fırlatıp 5 mi olsun 8 mi olsun diye 40 dakika kavga etmek. | Biletin karmaşıklığını benzer geçmiş 50 PR ile kıyaslayıp güven aralığı çıkarmak. |
| **Kapasite Hesabı** | '8 kişi x 8 saat = 64 saatlik iş alırız' yanılgısı. | Toplantılar, PR review ve destek nöbetlerini düşerek net odak kapasitesini (Focus Factor) hesaplamak. |
| **Doğruluk** | Her sprintin son günü yetiştirilemeyen biletlerin sonraki sprinte sarkması. | Monte Carlo simülasyonu ile %85 kesinlikle bitiş tarihi vermek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Fibonacci Kart Savaşlarını Bitir: Story point tartışmalarını maksimum 5 dakika ile sınırla; anlaşmazlık varsa işi ikiye böl.
- 2. Tarihsel Veri ile Besle: Takımın son 6 aydaki PR kapatma sürelerini ve bilet büyüklüklerini bir veri seti olarak tut.
- 3. Olasılıksal Tahmin (Probabilistic Forecasting): 'Bu iş 3 günde biter' deme; 'Bu iş %50 ihtimalle 2 günde, %85 ihtimalle 4 günde biter' de.
- 4. Scope Paring (Kapsam Tıraşlama): Sprint dolduğunda daha fazla mesai isteme; iş birimiyle konuşup 'Must Have' dışındaki özellikleri bir sonraki sürüme kaydır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir lojistik yazılımında takım her sprint başında 50 story point alıyor, sprint sonunda ancak 25 puan teslim edebiliyordu. Yönetim takımı tembel sanıyordu. Yeni lead Emre, geçmiş 6 aylık sprint verilerini bir LLM analizine soktu. Ortaya çıktı ki takım zamanının %45'ini habersiz gelen production acil destek biletlerine harcıyordu. Emre sprint kapasitesini %50 düşürdü ve 1 mühendisi dönüşümlü destek nöbetçisi (Firefighter) yaptı. Takımın teslimat başarısı %48'den %96'ya çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Tarihsel Veriye Dayalı Sprint Kapasite ve Risk Analizörü
```text
Takımımız 6 yazılımcıdan oluşuyor. Son 4 sprintteki planlanan vs tamamlanan işlerimiz ve karşılaştığımız engeller şunlar: [VERİLER]. Bu sprint için planlanan bilet listesi de ektedir. Bana: 1) Bu sprintin başarıyla tamamlanma olasılık yüzdesini hesapla, 2) En büyük risk taşıyan 2 bileti ve nedenini belirt, 3) Riski düşürmek için hangi 2 biletin kapsamının küçültülmesi gerektiğini öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Planning Poker bir tiyatro mudur?' tartışması. 5 puan mı 8 puan mı kavgası yapan yazılımcıların komedisi ve veri odaklı yapay zeka tahminlerinin takımları nasıl aşırı vaat ve tükenmişlikten kurtardığı.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Story Point İllüzyonu: Neden tahminlerimiz hep yanılıyor?
- 04:20 - Monte Carlo Simülasyonu ve Olasılıksal Planlama Mantığı
- 08:45 - Odak Faktörü (Focus Factor): Gerçekçi Mühendislik Kapasitesi
- 13:10 - Egzersiz: Takımınızın son 3 sprint verisini AI ile analiz edip gerçek kapasitenizi bulun


<div style="page-break-after: always;"></div>

---

# Ders 16: Retrospektifleri Aksiyona Dönüştürmek: AI Sentiment Analizi ve Gizli Kök Nedenler

> **Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Sürekli aynı şikayetlerin yazıldığı ama hiçbir şeyin değişmediği 'Post-it duvarı' retrospektiflerine son: Duygu analizi, 5 Neden analizi ve somut biletler.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Her ay arkadaşlarla toplanıp 'Kilo vermemiz lazım, çok tatlı yiyoruz' deyip ardından hemen pizza sipariş etmeye benzer. Retrospektif sadece dertleşip rahatlama seansı değildir; masadan kimin hangi spora yazılacağını ve buzdolabındaki tatlıları kimin çöpe atacağını belirleyen eylem planıyla kalkmaktır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Katılım** | Aynı 2 kişinin konuşması, içe kapanık mühendislerin susması. | Anonim dijital retro kartlarının AI ile gruplanıp tarafsızca oylanması. |
| **Aksiyon Takibi** | Retro panosunda unutulan 'İletişimi artıralım' gibi soyut temenniler. | Maksimum 2 adet somut, sahibi ve bitiş tarihi olan Jira taskına dönüştürmek. |
| **Süreç İlerlemesi** | Sprintler geçtikçe aynı sorunların sürekli tekrar etmesi. | Son 5 retronun duygu ve konu haritasını AI ile karşılaştırıp iyileşmeyi ölçmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Soyut Şikayetleri Yasakla: 'İletişim kötü' yerine 'Hangi spesifik olayda kim kime ulaşamadı?' sorusuyla köke in.
- 2. 5 Neden (5-Whys) Kuralı: Sorunun yüzeydeki haline değil, 5 kez 'Neden?' sorarak organizasyonel kök nedene ulaş.
- 3. Maksimum 2 Aksiyon İlkesi: Bir retroda 10 aksiyon çıkarırsan hiçbiri yapılmaz; sadece en acil 2 aksiyonu al ve bir sonraki sprintin board'una koy.
- 4. AI Retro Hafızası: Bir LLM'e son 3 ayın retro kayıtlarını verip: 'Takımın kronikleşen ve görmezden geldiği asıl yarası ne?' sorusunu sor.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir mobil uygulama ekibinde her retroda 'Release süreci çok yavaş ve sancılı' maddesi çıkıyor, herkes başını sallıyor ama 8 aydır hiçbir şey değişmiyordu. Yeni lead Aslı, retronun sonunda AI kullanarak kök neden analizi yaptı. Sorunun asıl kaynağının manuel Apple Store sertifika yenilemesi olduğu çıktı. Aslı o sprintteki bir özellik biletini erteledi, 1 günlük Fastlane CI/CD otomasyon bileti açtı. Sonraki retroda bu şikayet tarihe karıştı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Retrospektif Kartlarını Kök Neden ve Aksiyona Dönüştürücü
```text
Takımımızın bu sprint retrosunda yazdığı anonim geri bildirimler aşağıdadır: [KARTLAR]. Sen çevik süreçler ve insan psikolojisi uzmanısın. 1) Bu yorumlardaki gizli duygu durumunu (bıkkınlık, heyecan, güvensizlik) analiz et, 2) Benzer konuları 3 ana temada kümele, 3) '5 Neden' metodolojisini kullanarak en kritik problemin kök nedenini bul, 4) Önümüzdeki sprinte doğrudan ekleyebileceğimiz 2 adet ölçülebilir Jira aksiyon bileti yaz.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Retrospektifler bir terapi grubu mudur yoksa mühendislik laboratuvarı mı?' Post-it yapıştırıp hiçbir şey yapmayan takımlarla dalga geçen ve aksiyon odaklı retrospektifin dönüştürücü gücünü anlatan bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Retrospektif Yalanı: Neden kimse inanmıyor?
- 03:45 - 5 Neden Analizi: Şikayetten Kök Nedene İnmek
- 07:30 - AI ile Retro Notlarından Otomatik Jira Aksiyonu Çıkarmak
- 12:15 - Egzersiz: Takımınızın son retro panosunu aksiyon motoruna dönüştürün


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 19: AI Kod Kalitesi Paradoksu: 'Hızlı Üretilen Çöpü' Nasıl Engelleriz?

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zekanın saniyeler içinde binlerce satır kod üretmesi bir lütuf mu yoksa teknik borç tsunamisi mi? Halüsinasyonlu bağımlılıkları ve spagetti mimariyi filtreleme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Sana dakikada 500 adet kurabiye basan süper hızlı bir kurabiye makinesi verseler sevinirsin. Ama makine kurabiyelerin içine un yerine bazen tebeşir tozu, şeker yerine tuz koyuyorsa ve sen kontrol etmeden müşteriye satarsan dükkanın batar. AI harika bir kurabiye makinesidir ama kalite kontrol şefi sensin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Kabul Kriteri** | 'Çalışıyorsa ve testi geçiyorsa merge edelim.' | 'Mühendis kodu tam olarak anladı mı, mimari sınırlara uyuyor mu, gereksiz soyutlama var mı?' |
| **Bağımlılık Yönetimi** | Paket yöneticisine kütüphaneleri sorgusuz eklemek. | AI'ın uydurduğu sahte (hallucinated) npm/pip paketlerine ve güvenlik açıklarına karşı otomatik tarama. |
| **Kod İnceleme Odağı** | Noktalı virgül ve isimlendirme gibi yüzeysel şeyleri kontrol etmek. | Sistem sınırları, domain bütünlüğü ve gelecekteki bakım maliyetini denetlemek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 'Anlamadığın Kodu Asla Commit'leme' İlkesi: Takım kuralı: Bir mühendis AI'ın yazdığı kodun her satırının çalışma mantığını PR'da açıklayamıyorsa o PR reddedilir.
- 2. Katı Linter ve Statik Analiz (SonarQube/Biome): AI'ın ürettiği gereksiz karmaşıklığı otomatik engelleyen kurallar koy.
- 3. Halüsinasyonlu Paket Koruması: Package.json veya pom.xml'e giren her yeni kütüphane için otomatik güvenlik ve gerçeklik taraması (Socket.dev, Snyk) çalıştır.
- 4. Mimari Birim Testleri (ArchUnit): Katmanlı mimari kurallarını (örn: Controller asla doğrudan Repository çağıramaz) kod seviyesinde test et.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech start-up'ında junior bir yazılımcı Cursor kullanarak 1 günde 2000 satırlık karmaşık bir mutabakat modülü yazdı ve PR hemen onaylandı. Canlıya çıktıktan 3 gün sonra sistemde bellek sızıntısı (memory leak) başladı; çünkü AI var olmayan bir caching kütüphanesi yerine el yordamıyla sonsuz bir Map nesnesi üretmişti. Sunucular çöktü. Lead Berke, takıma 'AI Code Sludge Kalkanı' getirdi: Her AI üretimi PR için ArchUnit kuralları ve bellek profil testleri zorunlu yapıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ AI Tarafından Üretilen Kod İçin Titiz Kalite ve Güvenlik Denetçisi
```text
Aşağıdaki kod bir yapay zeka asistanı tarafından üretilmiştir: [KODU EKLEYİN]. Sen dünyanın en acımasız Principal Software Architect'isin. Bu kodu şu açılardan parçala ve analiz et: 1) Gereksiz soyutlama ve kod karmaşıklığı (Over-engineering), 2) Gizli bellek sızıntıları, concurrency hataları ve edge-case açıkları, 3) Güvenlik riskleri veya uydurma API çağrıları, 4) Bu kodu %50 daha sade ve okunabilir yapacak somut refactoring önerileri.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Günde 10.000 satır kod yazıyorum' diye övünen acemi yazılımcı ile 'O 10.000 satırın bakımını kim yapacak evladım?' diyen bilge Principal Engineer. AI çağında kod miktarının değil, kod sadeliğinin erdemi üzerine muazzam bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Kod Çamuru (Code Sludge) Tehdidi
- 04:10 - 'Anlamadığın Kodu Kabul Etme': Takım Kültürü İnşası
- 08:20 - ArchUnit ile Mimari Kuralları CI/CD'ye Kazımak
- 13:30 - Egzersiz: Takımınızın kod tabanına ilk ArchUnit mimari testini ekleyin


<div style="page-break-after: always;"></div>

---

# Ders 20: AI Destekli Code Review (PR) Devrimi: Botlar vs. İnsan Gözü

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: Orta / Mid Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İnsanları noktalı virgül ve tip kontrolü yapmaktan kurtarmak: AI PR botları ile ilk kademe filtreleme, insanların sadece mimariye ve iş mantığına odaklanması.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Havalimanındaki güvenlik kontrolü gibidir. Önce çantanı X-ray cihazından (AI Bot) geçirirler; bıçak, çakmak, su var mı makine 2 saniyede bakar. Güvenlik görevlisi (İnsan Mühendis) ise senin pasaportuna, yüzüne ve seyahat amacına bakar. Güvenlik görevlisinin çantanı açıp tek tek çoraplarını saymasına gerek yoktur.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **PR İnceleme Süresi** | PR'ın 4 gün boyunca listede bekleyip unutulması. | AI botunun ilk 60 saniyede inceleme yapması, insanın 20 dakikada onaylaması. |
| **İnceleme İçeriği** | Yorumların %80'inin formatlama, isimlendirme ve küçük detaylar olması. | Formatlamayı botun düzeltmesi; insanların sadece domain mimarisine odaklanması. |
| **PR Boyutu** | 80 dosyalık devasa PR'lar ('Looks Good To Me' deyip geçilirdi). | Maksimum 250 satırlık küçük, atomik ve AI özetli PR standartı. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İki Kademeli PR Filtresi (Two-Tier Review): 1. Kademe: Linter + AI PR Bot (Coderabbit / GitHub Copilot for PRs). 2. Kademe: İnsan mühendis.
- 2. Bot Geçmeden İnsan Bakamaz: AI botu güvenlik açığı veya test eksikliği bulduysa insan mühendisin takvimine inceleme bildirimi düşmez.
- 3. 250 Satır Kuralı: 250 satırdan büyük PR'lar incelemeyi imkansız kılar. Büyük işleri feature flag arkasında küçük PR'lara böldür.
- 4. PR Açıklama Şablonu: Mühendis PR açarken 'Bu PR neyi çözüyor?' ve 'Hangi testler yapıldı?' kısımlarını AI ile özetlemek zorundadır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret takımında PR review süresi ortalama 4.2 gündü ve mühendisler sürekli birbirinin koduna 'Burada boşluk bırakmamışsın' diye passive-aggressive yorumlar yazıyordu. Lead Hakan, takıma otomatik AI PR botu entegre etti ve linter kurallarını katılaştırdı. Biçimsel tüm tartışmalar bitti. PR bekleme süresi 4.2 günden 6 saate indi; mühendislerin birbirine saygısı ve takım morali hissedilir derecede arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kıdemli Yazılım Mühendisi Düzeyinde PR İnceleme Botu Promptu
```text
Sen GitHub PR'larını inceleyen kıdemli bir mühendissin. Aşağıdaki git diff çıktısını incele: [GIT DIFF]. Şu kurallara uy: 1) İsimlendirme veya formatlama gibi linter'ın çözeceği şeylere yorum yapma, 2) Olası null-pointer hatalarını, race condition risklerini ve eksik yazılmış test senaryolarını tespit et, 3) Performans darboğazı (N+1 query vb.) var mı belirt, 4) Yorumlarını yapıcı, net ve gerekçeli olarak markdown formatında listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 1500 satırlık devasa bir PR'ı 'LGTM' (Looks Good To Me) diyerek hiç bakmadan onaylayan tembel mühendis ile noktalı virgül yüzünden kriz çıkaran pedantik mühendis. AI botlarının code review kültürünü nasıl medenileştirdiğini anlatan eğlenceli bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Code Review Kabusu: Neden PR'lar günlerce bekler?
- 04:20 - İki Kademeli PR Mimarisi: Botlar ve İnsanların Görev Dağılımı
- 08:45 - 250 Satır Kuralı ve Atomik PR Kültürü
- 13:10 - Egzersiz: Takımınızın GitHub reposuna AI Code Reviewer botu bağlayın


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 22: Legacy Kodu Modernize Etmek: AI ile Tersine Mühendislik ve Güvenli Refactoring

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
15 yıllık kimsenin dokunmaya cesaret edemediği spagetti kod tabanını patlatmadan modernize etmek: Characterization testleri, Strangler Fig deseni ve AI rehberliği.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Tarihi bir köprünün altından binlerce ton su akarken köprüyü havaya uçurup baştan yapamazsın. Önce köprünün her taşına sensör takarsın (Testler), sonra eski taşların yanına modern çelik halatlar eklersin (Strangler Fig), en sonunda eski taşları tek tek güvenle yenilersin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Modernizasyon Yaklaşımı** | 'Tüm projeyi çöpe atıp sıfırdan yazacağız' (Büyük Yeniden Yazım Felaketi). | Strangler Fig deseniyle modülleri parça parça, canlı trafiği bozmadan ayırmak. |
| **Test Stratejisi** | Hiç test olmadan dua ederek kodu değiştirmek. | AI ile mevcut davranışın röntgenini çeken Karakterizasyon (Characterization) testleri üretmek. |
| **Dokümantasyon Çözümleme** | Emekli olmuş yazılımcıyı arayıp 'Bu fonksiyon ne yapıyordu?' diye sormak. | Eski kodu LLM'e besleyip iş mantığı kurallarını ve edge-case'leri metin olarak deşifre etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Asla Sıfırdan Yazma (The Second-System Effect): Sıfırdan yazım projelerinin %80'i başarısız olur ve bütçeyi tüketir. Daima evrimsel modernizasyonu seç.
- 2. Karakterizasyon Testleri (Güvenlik Ağı): Kodu değiştirmeden önce, kodun şu anki tüm girdilerine verdiği çıktıları kaydeden testler yazdır.
- 3. Strangler Fig Deseni: Yeni modülü monolith'in dışında modern dille yaz; API Gateway üzerinden trafiği kademeli olarak yeni servise yönlendir.
- 4. AI ile Tersine Mühendislik: Anlaşılmaz 500 satırlık procedürel kodu LLM'e verip: 'Bu kodun içindeki gizli iş kurallarını çıkar' analizini al.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sigorta şirketinde 2008 yılından kalma Java 6 monolitik poliçe hesaplama motoru vardı. Kimse dokunamıyordu. Şirket 'Bunu baştan yazalım' dedi ve 1 yıl, 2 milyon dolar çöpe gitti. Yeni lead Sinan devreye girdi. Monolith'in girdilerini ve çıktılarını dinleyen bir loglama katmanı kurdu. Bu verileri Claude'a verip 300 adet otomatik karakterizasyon testi yazdırdı. Güvenlik ağı oluştuktan sonra motoru Spring Boot 3'e 6 haftada hatasız taşıdı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Legacy Koddan Karakterizasyon Testi ve İş Mantığı Çıkarıcı
```text
Aşağıda 10 yıllık dokümantasyonsuz bir legacy fonksiyon yer almaktadır: [KODU EKLEYİN]. 1) Bu kodun uyguladığı iş kurallarını madde madde açıkla, 2) Bu kodun mevcut davranışını kilitleyen (Characterization Tests) JUnit 5 / Jest test senaryolarını yaz, 3) Bu fonksiyonu Clean Code ve SOLID prensiplerine göre refactor etmek için adım adım bir dönüşüm stratejisi hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Tüm projeyi sıfırdan yazalım!' diyen genç ve hevesli mühendis ile büyük yeniden yazımların mezarlığını görmüş bilge Lead. Strangler Fig deseni ve AI'ın legacy kodu çözen sihirli merceği üzerine harika bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Büyük Yeniden Yazım Felaketi: Neden Sıfırdan Yazmamalısınız?
- 04:30 - Karakterizasyon Testleri: Kodu Değiştirmeden Önce Kafese Almak
- 08:45 - Strangler Fig Deseni ile Monolith Parçalama
- 13:50 - Egzersiz: Takımınızdaki en korkulan legacy fonksiyon için AI ile karakterizasyon testi yazın


<div style="page-break-after: always;"></div>

---

# Ders 23: Clean Architecture, Domain-Driven Design (DDD) ve AI Uyumlu Tasarım

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
İyi tasarlanmış mimari neden yapay zekanın da en iyi dostudur? Zayıf bağlı (loosely coupled), zengin domain modelleri ve net sınırların AI üretkenliğine etkisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Eğer evinde çoraplar mutfakta, tencereler yatak odasında, kitaplar ise banyoda duruyorsa akıllı temizlik robotu (AI) evi temizlerken kafayı yer ve her şeyi birbirine katar. Ama evinde her şeyin yeri belliyse robot 10 dakikada evi pırıl pırıl yapar. Clean Architecture, kod evinin düzenidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Mimari Yapı** | Veritabanı tablolarına göbekten bağlı Anemic Domain modelleri. | İş kurallarını dış dünyadan (DB, Framework) izole eden Rich Domain modelleri. |
| **AI'ın Anlama Hızı** | Controller içinde 2000 satırlık karmaşık SQL sorguları ve logic. | Her use-case'in tek bir sorumluluğu olması (Single Responsibility) sayesinde AI'ın %99 doğrulukla kod üretmesi. |
| **Test Edilebilirlik** | Test yazmak için tüm veritabanını ayağa kaldırma zorunluluğu. | Saf domain mantığının sıfır bağımlılıkla milisaniyeler içinde test edilmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Bağımlılık Kuralı (Dependency Inversion): İç katmanlar (Domain Entity ve Use Case) dış katmanları (DB, Web Framework) ASLA bilmemelidir.
- 2. Ubiquitous Language (Ortak Dil): Kod içindeki sınıf isimleri ile iş biriminin konuştuğu kelimeler birebir aynı olmalıdır.
- 3. Bounded Context Sınırları: Her servisin veya paketin net bir iş sınırı olmalıdır; sınırları aşan veri transferleri DTO'lar ile yapılmalıdır.
- 4. AI-Friendly Repolar: Kod tabanını temiz modüllere böldüğünde, LLM'e sadece ilgili modülü bağlam (context) olarak verip kusursuz çıktılar alabilirsin.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir kargo takip uygulamasında tüm iş mantığı veritabanı stored procedure'leri içine yazılmıştı. Geliştiriciler Copilot'a bir şey sorduğunda Copilot sürekli saçmalıyordu çünkü bağlamı göremiyordu. Lead Nilay, takımla birlikte Hexagonal (Ports & Adapters) mimariye geçti; iş mantığını saf Java domain sınıflarına topladı. Sonuç: Hem test coverage %92'ye çıktı hem de AI asistanlarının kod tamamlama doğruluğu %35'ten %94'e yükseldi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Domain-Driven Design (DDD) ve Clean Architecture Dönüştürücü
```text
Aşağıdaki kod veritabanı ve controller ile sıkı sıkıya bağlı (tightly coupled) bir yapıdadır: [KODU EKLEYİN]. Bu kodu Clean Architecture prensiplerine göre yeniden tasarla: 1) Saf Domain Entity sınıfı, 2) Use Case / Application Service katmanı, 3) Port (Interface) tanımları, 4) Neden bu yapının AI kodlama araçları için çok daha hatasız sonuç verdiğini açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Architecture is dead, AI writes everything' diyen acemi yazılımcı ile 'Tam tersine, AI çağında kötü mimari ölüm fermanıdır!' diyen Software Architect. Clean Architecture ve DDD'nin yapay zekanın gücünü nasıl 10 katına çıkardığını anlatan derin bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Neden Spagetti Kodda Boğulur?
- 04:20 - Clean Architecture'ın 4 Katmanı: Domain'i Korumak
- 08:45 - Domain-Driven Design (DDD) ve Bounded Context Mantığı
- 13:30 - Egzersiz: Takımınızın en kritik 1 servisini Hexagonal mimariye dönüştürün


<div style="page-break-after: always;"></div>

---

# Ders 24: Güvenlik (SecOps) ve Lisanslama: AI Üretimi Kodda Hallucination & Vulnerability Avı

> **Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zekanın ürettiği güvenlik açıkları (SQL Injection, XSS, insecure deserialization) ve telif hakkı (GPL sızıntısı) risklerine karşı Lead'in savunma kalkanı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Yolda bulduğun parlak bir USB belleği getirip şirketin sunucusuna takar mısın? Takmazsın; çünkü içinde virüs olabilir. Yapay zekanın sana internetten derleyip sunduğu her kod parçası da o sahipsiz USB bellek gibidir. İçinde gizli bir açık, eski bir kütüphane veya şirketinizi mahkemelik edecek lisanslı bir telif kodu olabilir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Güvenlik Denetimi** | Yılda bir kez penetrasyon testi yaptırıp çıkan 200 sayfalık PDF'i okumak. | Her PR açıldığında otomatik SAST/DAST ve AI güvenlik ajanlarını çalıştırmak. |
| **Lisans Riskleri** | Yazılımcıların GPL/AGPL kod kopyalayıp şirketi telif davası riskine sokması. | Telif koruma filtreleri (Public Code Filter) ve otomatik lisans tarayıcılar (FOSSA) kullanmak. |
| **Paket Halüsinasyonu** | Geliştiricinin AI'ın önerdiği paketi sorgulamadan npm install etmesi. | Paketin indirilme sayısı, yazarı ve GitHub reposunu doğrulamadan kurulamayan şirket içi repo registry'si. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Slopsquatting Koruması: AI modelleri bazen var olmayan paket isimleri uydurur. Hackerlar bu isimlerde zararlı paketler yayınlar. Asla indirilme sayısı ve doğrulanmış yazarı olmayan paketi kurma.
- 2. Public Code Filter'ı Açık Tut: GitHub Copilot ve Cursor'da 'Match public code' filtresini daima blokla; şirketin fikri mülkiyetini koru.
- 3. DevSecOps Pipeline'ı: Git commit anında Secret Scanning (Trufflehog), PR anında SAST (Semgrep) ve bağımlılık taraması (Snyk) zorunlu olsun.
- 4. LLM Özel Açıkları (OWASP Top 10 for LLM): Prompt injection ve veri sızıntısı senaryolarına karşı güvenlik eğitimleri düzenle.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sağlık teknolojisi start-up'ında yazılımcı, Claude'un önerdiği `fast-health-validator` isimli bir npm paketini projeye ekledi. Meğerse Claude o paketi halüsinasyon olarak uydurmuştu ve bir Rus hacker grubu o isimle zararlı bir paket açmıştı. Paket production'a çıktı ve 10.000 hastanın verisi dışarı sızdı. Şirket büyük bir ceza aldı. Yeni gelen lead Kerem, şirkete özel JFrog Artifactory kurdu ve onaylanmamış paketlerin yüklenmesini tamamen engelledi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ SecOps Kapsamlı Güvenlik Açığı ve Lisans Riski Denetçisi
```text
Aşağıdaki kod ve kullanılan kütüphaneleri incele: [KOD VE BAĞIMLILIKLAR]. Sen bir Ethical Hacker ve Baş Bilgi Güvenliği Yöneticisisin (CISO). 1) Bu kodda OWASP Top 10'a giren güvenlik açıkları (SQLi, XSS, SSRF, Deserialization) var mı? 2) Kullanılan kütüphanelerde lisans riski (GPL/AGPL) veya sahte paket riski var mı? 3) Kodun güvenli versiyonunu ve güvenlik açıklarını kapatan düzeltmeleri sun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Yapay zeka bana kod yazdı, artık güvendeyiz' diyen naif yazılımcı ile AI'ın uydurduğu sahte paketlerle şirketlerin nasıl hacklendiğini anlatan siber güvenlik uzmanı. Tüyleri ürperten ama bilgilendirici ve eğlenceli bir podcast bölümü.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Slopsquatting Nedir? Yapay Zekanın Sahte Paket Tuzağı
- 04:20 - Telif Hakları ve GPL Riski: Şirketinizi Mahkemelik Olmaktan Koruyun
- 08:45 - DevSecOps Hattı Kurmak: Semgrep ve Trufflehog ile Otomatik Güvenlik
- 13:30 - Egzersiz: Takımınızın reposunda Semgrep taraması çalıştırıp güvenlik karnesi çıkarın


<div style="page-break-after: always;"></div>

---

# Ders 25: Modern CI/CD Hattı ve AI Gatekeeper'lar: Yeşil Pipeline Koruması

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Kırmızı pipeline'ı görünce 'Tekrar çalıştır düzelir' diyen kültüre son: Flaky testleri AI ile yakalamak, build süresini 5 dakikanın altına indirmek ve otomatik rollback.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Havalimanında bir uçağın kalkıştan önce 50 farklı sensör kontrolünden geçmesi gibidir. Eğer sensörlerden biri rastgele kırmızı yanıyor ve teknisyen 'Boşver o bazen öyle yapar, kalkışa devam' diyorsa o uçak düşer. CI/CD hattı senin uçuş kontrol merkezindir; kırmızı yandığında bütün fabrika durur.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kırmızı Build Tavrı** | 'Başka biri düzeltir' deyip görmezden gelmek, üstüne kod merge etmek. | Pipeline patladığı an master branch'e merge'ü kilitlemek ve AI botunun PR sahibine anında kök neden ve yama göndermesi. |
| **Flaky Testler** | Rastgele patlayan testleri `@Ignore` edip halının altına süpürmek. | AI ile flaky testleri otomatik karantinaya alıp zamanlama/async hatalarını düzeltmek. |
| **Build Süresi** | 45 dakika süren hantal build ve test adımları. | Değişen dosyalara göre sadece etkilenen testleri koşan akıllı test seçimi (Test Impact Analysis) ile 4 dakika. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Kırmızı Pipeline Acil Durumu (Andon Cord): Master/main branch asla kırmızı kalamaz; kırmızı build 15 dakika içinde yeşile dönmezse commit otomatik revert edilir.
- 2. 10 Dakika Kuralı: Bir CI/CD pipeline'ı 10 dakikadan uzun sürüyorsa geliştiriciler bağlam kopması yaşar; adımları paralelleştir.
- 3. Flaky Test Karantinası: Rastgele patlayan testleri ana akıştan ayırıp ayrı bir AI onarım havuzuna al.
- 4. GitOps ve Otomatik Rollback: Kubernetes deployment'larında hata oranı %1'i geçtiğinde insan müdahalesi olmadan anında önceki sürüme dönen akıllı bekçi (ArgoCD/Flux).

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir video streaming platformunda CI süresi 48 dakikaydı ve her 3 build'den biri flaky test yüzünden patlıyordu. Mühendisler günde en fazla 1 kez deploy alabiliyordu. Yeni lead Kerem, Testcontainers ve Gradle build cache optimizasyonu yaptı; ardından LLM destekli Test Impact Analysis entegre etti. Build süresi 48 dakikadan 6 dakikaya indi. Deployment frekansı günde 1'den günde 14'e çıktı; hata oranı %70 azaldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ CI/CD Flaky Test ve Pipeline Hata Analiz Ajanı
```text
Aşağıdaki CI/CD build logunda patlayan test çıktısı ve hata izi (stack trace) bulunmaktadır: [LOG DETAYI]. Sen bir Site Reliability ve Build Engineer uzmanısın. 1) Bu hatanın flaky (deterministik olmayan - örn: port çakışması, async await eksikliği, time zone farkı) olma ihtimalini değerlendir, 2) Kök nedeni netleştir, 3) Testi deterministik ve hatasız hale getirecek kod düzeltmesini sun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kırmızı pipeline görünce tekrar butona basan' yazılımcı komedisi ve modern GitOps dünyasında saniyeler içinde deployment yapmanın getirdiği huzur. Test kültürünün ve yeşil pipeline korumasının şirket kültüründeki yeri.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Kırmızı Pipeline Hastalığı: Şirketler Neden Yavaşlar?
- 04:15 - 10 Dakika Kuralı: Testleri Paralelleştirme ve Akıllı Cache
- 08:35 - Flaky Testleri AI ile Avlamak ve Karantinaya Almak
- 13:20 - Egzersiz: Takımınızın CI/CD hattındaki en yavaş 2 adımı tespit edip süreyi yarıya indirin


<div style="page-break-after: always;"></div>

---

# Ders 26: Test Driven Development (TDD) ve AI: Testi Kim Yazıyor, Kodu Kim?

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yapay zeka çağında TDD öldü mü yoksa altın çağını mı yaşıyor? İnsanın test ve spec yazdığı, yapay zekanın kodu ürettiği en hızlı geliştirme döngüsü.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Sen bir mimarsın ve inşaat ustasına 'Bu odaya koyacağım masa tam 120 cm genişliğinde ve 4 bacaklı olacak' diye bir kalıp (test) veriyorsun. Usta (AI) saniyeler içinde o masayı yapıyor. Masayı kalıba sokuyorsun; tık diye oturursa işlem tamamdır. Kalıbı sen tasarlamazsan ustanın yaptığı masanın odaya sığıp sığmayacağını bilemezsin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **TDD Rol Dağılımı** | Aynı mühendisin hem testi hem kodu yazması (zihinsel yorgunluk ve önyargı). | İnsan mühendisin kusursuz test senaryolarını yazması; AI'ın testi geçecek kodu üretmesi. |
| **Test Kalitesi Ölçümü** | Sadece Code Coverage yüzdesine bakmak (boş testler bile %100 gösterir). | Mutation Testing (Pitest/Stryker) ile testlerin kodu gerçekten denetleyip denetlemediğini ölçmek. |
| **Geliştirme Hızı** | TDD'nin 'zaman kaybı' olarak görülmesi. | AI ile kod üretildiği için TDD döngüsünün 10 kat hızlanması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Red-Green-Refactor AI Döngüsü: 1) Mühendis testi yazar (Red), 2) AI testi geçiren kodu üretir (Green), 3) Mühendis ve AI kodu sadeleştirir (Refactor).
- 2. Spec As Code: Testler artık sadece doğrulama aracı değil; yapay zekaya verilen en net, en hatasız prompttur.
- 3. Mutasyon Testi (Mutation Testing): Koda kasten bug enjekte eden araçlar çalıştır; eğer testlerin bu bugları yakalayamıyorsa o testler çöp demektir.
- 4. Mocking Tuzaklarına Dikkat: Her şeyi mock'lamak yerine Domain mantığında gerçek nesneleri, dış servislerde ise WireMock/Testcontainers kullan.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir ödeme şirketinde geliştiriciler 'TDD bizi yavaşlatıyor' diyerek test yazmayı bırakmıştı. Kod kalitesi düştü. Yeni lead Burcu bir yarışma düzenledi: 'AI Destekli TDD Günü'. Mühendisler sadece test yazdı ve Cursor'a 'Bu testleri geçecek en temiz Spring Boot kodunu yaz' dedi. Mühendisler kod yazma süresinin %70 kısaldığını, üstelik ilk denemede sıfır hata ile production'a çıkabildiklerini görünce takımdaki tüm direnç kırıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ TDD Test Senaryosundan Kod Üretici ve Refactor Motoru
```text
Aşağıda yeni bir iş kuralı için yazdığım JUnit 5 / Jest testleri yer almaktadır: [TEST KODU]. Bu testler şu an patlamaktadır (RED). 1) Bu testleri başarıyla geçirecek (GREEN) en sade, temiz ve SOLID uyumlu kodu yaz, 2) Kodu over-engineering yapmadan minimal tut, 3) Testin kaçırmış olabileceği 2 kritik sınır durum (edge-case) için ek test senaryosu öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'TDD öldü mü?' tartışmasını yapan iki yazılımcı. AI çağında test yazmanın neden bir angarya değil, yapay zekayı yöneten bir sihirli değnek haline geldiğini anlatan coşkulu ve esprili bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - TDD'nin Yeniden Doğuşu: Testler Artık En Güçlü Prompt!
- 04:15 - AI Destekli Red-Green-Refactor Döngüsü
- 08:30 - Mutasyon Testi Nedir? Sahte Testleri İfşa Etmek
- 13:40 - Egzersiz: 3 test yazıp AI'a kodu ürettirerek ilk TDD döngünüzü tamamlayın


<div style="page-break-after: always;"></div>

---

# Ders 27: Cursor Rules, Copilot Workspace ve Repo Bazlı AI Konfigürasyonu

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Takımdaki her yazılımcının AI'dan farklı kalitede kod alması karmaşasına son: `.cursorrules`, GitHub Copilot instructions ve repo bazlı sistem kurallarını standartlaştırma.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir orkestradaki her müzisyenin önüne farklı bir bestenin notasını koyarsan korkunç bir gürültü çıkar. `.cursorrules` dosyası, tüm yapay zekaların önüne koyduğun ortak orkestra notasıdır. Hangi dili konuşacaklar, hangi kütüphaneleri kullanacaklar, hangi hataları asla yapmayacaklar hepsi o tek kağıtta yazar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Prompt Kalitesi** | Her mühendisin AI'a kafasına göre 'Şunu yaz' diye rastgele prompt atması. | Repoda commit'lenmiş kurallar sayesinde AI'ın projenin mimarisini ve kurallarını otomatik bilmesi. |
| **Mimari Tutarlılık** | AI'ın projede Lombok varken elle getter-setter yazması veya eski kütüphaneleri getirmesi. | Kurallar dosyasında yasaklı pattern'ların belirtilmesi sayesinde sıfır tutarsızlık. |
| **Onboarding** | Yeni gelen yazılımcının takım standartlarını öğrenmek için aylarca debelenmesi. | IDE'yi açtığı ilk dakika AI'ın takım standartlarına uygun kod üretmeye başlaması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Tek Hakikat Kaynağı (Single Source of Context): Projenin kök dizinine `.cursorrules` veya `.github/copilot-instructions.md` ekle.
- 2. Açık ve Net Kısıtlar: 'Clean code yaz' gibi muğlak lafları bırak; 'Daima Java 21 Record kullan, Lombok `@Data` kullanma, Controller katmanında ResponseEntity dön' de.
- 3. Yasaklı Kütüphaneler Listesi: Halüsinasyon veya eski sürüm riskine karşı yasaklı paketleri kurallar dosyasına açıkça yaz.
- 4. Kuralları Versiyonla: AI kuralları da kod gibidir; PR ile açılır, takımla tartışılır ve repo ile birlikte versiyonlanır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir mobil fintech projesinde 6 mühendisten 3'ü Swift Concurrency (async/await), 3'ü ise eski Combine kütüphanesini kullanıyordu çünkü AI araçları farklı önerilerde bulunuyordu. Proje tam bir çorbaya döndü. Lead Mert, kök dizine 40 satırlık kapsamlı bir `.cursorrules` dosyası yazdı. AI'ın Combine önermesini yasakladı ve modern async/await standartlarını bağladı. 1 hafta içinde tüm yeni kodlar tek bir mimari standartta birleşti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Üretim Düzeyinde .cursorrules ve Copilot Instruction Üretici
```text
Biz şu teknoloji yığınını kullanan profesyonel bir ekibiz: [DİL, FRAMEWORK, DB, TEST KÜTÜPHANESİ]. Ekibimiz için projenin kök dizinine konulacak kusursuz bir `.cursorrules` dosyası hazırla. Şunları içersin: 1) Kod stili ve mimari katman kuralları, 2) Kesinlikle yasaklanmış (deprecated) pattern'lar ve kütüphaneler, 3) Test yazma standartları (Given-When-Then), 4) Git commit ve PR formatı.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Projesine `.cursorrules` koymayan bir takımda yaşanan 'Babil Kulesi' karmaşası. Herkesin AI'ının farklı bir dilde kod ürettiği komedi ve 40 satırlık bir kural dosyasının bir takımı nasıl kaostan kurtardığı üzerine keyifli bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI ile Babil Kulesi Sendromu: Mimari Tutarsızlık
- 04:10 - `.cursorrules` ve Copilot Instructions Anatomisi
- 08:35 - Yasaklı Pattern'lar: AI'a 'Ne Yapmaması Gerektiğini' Söylemek
- 13:20 - Egzersiz: Takımınızın reposu için ilk resmi `.cursorrules` dosyasını oluşturun


<div style="page-break-after: always;"></div>

---

# Ders 28: Kendi Kod Tabanınızı Konuşulabilir Yapmak: Kod Tabanı RAG ve Knowledge Base

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Milyonlarca satırlık şirket kodunu ve Confluence belgelerini akıllı bir arama ve sohbet motoruna dönüştürmek: Kod tabanı embedding'leri ve yerel RAG mimarileri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> 100.000 ciltlik dev bir kütüphanede aradığın tek bir bilgiyi bulmak için aylarca rafları taramak yerine; kütüphanedeki her cümlenin nerede olduğunu ezbere bilen bir kütüphane görevlisine 'Bana 3 numaralı ödeme akışındaki komisyon hesaplamasını getir' dediğinde sana 3 saniyede o sayfayı açıp önüne koymasıdır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kod Tabanını Anlama** | Senior mühendisin 'O kısma Ahmet bakıyordu, ona sor' demesi (Ahmet tatile gidince tıkanmak). | Kod tabanı RAG sistemine doğal dille soru sorup dosya ve satır referanslarıyla anında yanıt almak. |
| **İndeksleme** | Sadece düz metin arama (grep / ctrl+f) ile kelime eşleştirmek. | AST (Abstract Syntax Tree) ve semantik vektör embedding'leri ile mimari bağıntıları sorgulamak. |
| **Güvenlik** | Şirket kodlarını izinsiz açık LLM'lere yapıştırma riski. | Yerel (On-premise / VPC içi) embedding ve RAG modelleriyle sıfır veri sızıntısı. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Semantik İndeksleme: Kodları sadece düz metin olarak değil; AST yapısı, fonksiyon imzaları ve mimari ilişkileriyle vektör veritabanına (Qdrant/Chroma/Pinecone) indeksle.
- 2. Çok Katmanlı Arama (Hybrid Search): Düz anahtar kelime araması (BM25) ile semantik vektör aramasını birleştir.
- 3. Gizlilik ve Güvenlik Sınırları: Şirketin kaynak kodlarının dışarıya çıkmadığından emin olmak için şirket içi VPC veya onaylı kurumsal LLM API'leri kullan.
- 4. Dokümantasyonla Birleştir: Sadece kodu değil; mimari kararları (ADR), PR açıklamalarını ve post-mortem raporlarını da aynı bilgi havuzuna bağla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir bankanın 4 milyon satırlık monolitik ödeme sisteminde yeni başlayan yazılımcıların ilk PR'ını açması ortalama 3 ay sürüyordu çünkü kimse kodun nereye bağlandığını bilmiyordu. Lead Cenk, açık kaynaklı bir RAG pipeline'ı kurarak tüm repo ve Confluence dokümanlarını indeksledi. Yeni katılanlar 'Döviz dönüşüm kuru hangi servisten okunuyor?' gibi soruları bot üzerinden anında çözmeye başladı. Onboarding süresi 3 aydan 2 haftaya indi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kod Tabanı RAG Arama ve Semantik Sorgulama Şablonu
```text
Sen bizim dahili mikroservis kod tabanımızı adım adım bilen Kıdemli Sistem Mimarı RAG botusun. Soru: '[SORU BURAYA GELECEK: Örn: Sipariş iptal edildiğinde fatura iadesi hangi kuyruktan tetikleniyor?]'. Bana yanıt verirken: 1) Doğrudan ilgili dosya ve sınıf referanslarını ver, 2) İş akışını adım adım numaralandır, 3) Dikkat edilmesi gereken olası concurrency ve veri tabanı kısıtlarını belirt.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Eski projenin kodlarını sadece şirketten 5 yıl önce ayrılan efsanevi yazılımcı biliyordu' trajedisi. Kod tabanı RAG sistemlerinin kurumsal cehaleti nasıl yok ettiği ve yeni katılan yazılımcılara süper güçler verdiği üzerine harika bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Kurumsal Cehalet: Milyonlarca Satır Kodda Kaybolmak
- 04:10 - Kod Tabanı RAG Mimarisi: AST + Vektör Arama Nasıl Çalışır?
- 08:45 - Şirket Verisini Sızdırmadan Yerel RAG Kurma Rehberi
- 13:30 - Egzersiz: Takımınızın en karmaşık reposu için bir prototip RAG pipeline'ı tasarlayın


<div style="page-break-after: always;"></div>

---

# Ders 29: AI Ajanları ile Gece Boyu Hata Çözümü: Autonomous Bug-Fixing

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Sen uyurken Sentry loglarını inceleyen, repro testini yazan, kodu düzelten ve sabah masana hazır PR bırakan otonom ajan iş akışları tasarlamak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Gece dükkanı kapatıp gittiğinde içeri giren akıllı tamir robotları gibidir. Kırık bir sandalye (bug) gördüklerinde önce sandalyenin neden kırıldığını test ederler, doğru vidayı bulup sıkarlar ve sabah geldiğinde masanın üzerine 'Vidaları sıktım, sağlamlığını test ettim, onaylıyorsanız kullanıma açıyorum' notunu bırakırlar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Hata Çözüm Süresi** | Bug'ın Jira'ya düşmesi, sprint planlamasını beklemesi (ortalama 2 hafta). | Otonom ajanın gece hatayı analiz edip sabah 08:00'de test edilmiş PR ile karşına çıkarması. |
| **Repro Testi** | Geliştiricinin hatayı lokalinde yeniden canlandırmak (reproduce) için saatlerce uğraşması. | Ajanın prod hata logundan otomatik bir unit/integration testi üretmesi. |
| **İnsan Rolü** | Yazılımcının tüm gece log kazıyıp stres yaşaması. | Yazılımcının sadece sabah kahvesini içerken açılan PR'ı ve test sonuçlarını onaylaması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Hata Yakalama Tetikleyicisi (Sentry / Datadog Webhook): 500 hatası çıktığında stack trace ve istek gövdesi otomatik olarak AI ajanına iletilir.
- 2. Repro-First İlkesi: Ajan kodu düzeltmeden ÖNCE hatayı ispatlayan bir unit test yazmak zorundadır (Test önce patlamalıdır).
- 3. Güvenli Sandbox Alanı: Ajan izole bir Docker container içinde kodu düzeltir, tüm testleri çalıştırır ve güvenlik taramasından geçirir.
- 4. Asla Otomatik Merge Etme: Otonom ajanlar asla doğrudan production'a basamaz; daima insan lead onayına PR olarak sunulur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret şirketinde kullanıcıların belirli UTF-8 karakterli adres girdiğinde siparişin patlaması bug'ı 3 haftadır çözülememişti. Lead Tayfun bir otonom bug-fix ajanı kurdu. Gece Sentry'den gelen hatayı yakalayan ajan, sorunun regex parsing hatası olduğunu tespit etti; patlayan bir test yazdı, regex'i düzeltti ve tüm testleri yeşile çevirip sabah 07:30'da PR açtı. Sabah işe gelen nöbetçi mühendis 5 dakikada inceleyip merge etti; kriz bitti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Otonom Hata Çözücü ve Repro Testi Oluşturucu Promptu
```text
Aşağıda production ortamında patlayan bir hatanın Sentry logu ve ilgili kaynak kod dosyası yer almaktadır: [LOG VE KOD]. Bir Autonomous Bug-Fix Agent olarak: 1) Hatayı %100 doğrulayan ve şu an patlayan bir 'Reproduction Test' yaz, 2) Koddaki kök nedeni en minimal ve yan etkisiz şekilde düzelt, 3) Düzeltmenin tüm edge-case'leri kapsadığını kanıtla, 4) GitHub PR için net bir 'Kök Neden ve Çözüm Özeti' hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Sen uyurken çalışan robot yazılımcılar' hayali gerçek mi? Otonom bug-fixing ajanlarının sınırları, neden asla doğrudan deploy etmemeleri gerektiği ve sabah kahvesinde hazır PR onaylamanın keyfi üzerine büyüleyici bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Gece Boyu Çalışan Ajanlar: Bilim Kurgu Değil, Gerçek!
- 04:20 - Otonom Bug-Fix Hattının Mimarisi: Sentry -> Agent -> PR
- 08:45 - Repro-First İlkesi: Hatayı İspatlamadan Düzeltemezsin
- 13:30 - Egzersiz: Takımınız için webhook tabanlı bir AI PR oluşturucu tasarlayın


<div style="page-break-after: always;"></div>

---

# Ders 30: Dokümantasyon Kabusunu Bitirmek: Kendi Kendini Güncelleyen Living Docs

> **Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yazıldıktan 2 hafta sonra eskiyen ve kimsenin güncellemediği ölü Confluence sayfalarına son: Kod değiştikçe kendi mimari diyagramlarını ve API spec'lerini güncelleyen sistemler.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir şehrin haritasını kağıda çizip duvara asarsan 1 yıl sonra yeni yapılan yollar ve köprüler o haritada görünmez. Living Documentation ise canlı uydu görüntüsü gibidir; yola bir asfalt döküldüğü an harita kendi kendini anında günceller.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Doküman Güncelliği** | Confluence'taki mimari diyagramların 2021 yılından kalması ve yanlış yönlendirmesi. | Her git commit ve PR merge anında otomatik güncellenen Mermaid.js diyagramları. |
| **Yazma Sorumluluğu** | Yazılımcıların doküman yazmaktan nefret etmesi ve sürekli ertelemesi. | Koddan ve testlerden beslenen AI pipeline'ının dokümantasyonu otomatik derlemesi. |
| **Erişilebilirlik** | PDF ve dağınık Confluence klasörlerinde bilgi aramak. | Repo içinde kodla yan yana yaşayan, interaktif ve doğrulanabilir markdown belgeleri. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Docs-as-Code Felsefesi: Dokümantasyon kodun dışında bir yerde yaşayamaz; `/docs` dizininde kodla aynı repoda tutulmalıdır.
- 2. Mermaid.js ile Yaşayan Diyagramlar: Statik PNG resimleri yasakla; kod gibi versiyonlanan ve text tabanlı çizilen Mermaid diyagramları kullan.
- 3. CI/CD Dokümantasyon Kapısı: Kodda bir API değiştiğinde OpenAPI/Swagger ve README güncellenmemişse PR merge edilemez.
- 4. AI Doküman Bekçisi: PR kapandığında diff'i inceleyip mimari dokümantasyonu otomatik güncelleyen bir GitHub Action botu çalıştır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Büyük bir fintech firmasında yeni bir regülasyon denetimi geldi. Denetçiler sistem mimarisi dokümanını istedi; mevcut Confluence sayfası 3 yıl öncesine aitti ve şirkete 250.000 TL ceza kesilmek üzereydi. Lead Sevgi devreye girdi. 2 gün içinde bir LLM betiğiyle tüm Spring Boot servislerini taratarak canlı OpenAPI ve Mermaid mimari diyagramlarını koddan otomatik türeten bir pipeline kurdu. Denetçiler hayran kaldı; ceza iptal edildi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kod Tabanından Otomatik Mermaid Mimari Diyagramı ve Living Doc Üretici
```text
Aşağıdaki kod dosyaları ve servisler arasındaki bağımlılıkları incele: [KOD DOSYALARI / DTO'LAR]. 1) Bu servislerin veri akışını gösteren temiz bir Mermaid.js sequence / flowchart diyagramı üret, 2) Bu modülün amacını, girdilerini ve çıktılarını anlatan 1 sayfalık kusursuz bir README markdown dokümanı hazırla, 3) Geliştiricilerin dikkat etmesi gereken 3 kritik kullanım kuralını listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Doküman yazmaktan nefret eden yazılımcılar' ve 'Eski dokümana bakıp 3 gününü çöpe atan yeni yazılımcı'. Docs-as-Code kültürü ve yapay zekanın dokümantasyon kabusunu nasıl ebediyen bitirdiği üzerine ilham dolu bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Confluence Mezarlığı: Dokümanlar Neden 2 Haftada Ölür?
- 04:10 - Docs-as-Code ve Mermaid.js ile Yaşayan Mimari
- 08:35 - CI/CD Hattına Otomatik Dokümantasyon Botu Bağlamak
- 13:20 - Egzersiz: Takımınızın en kritik servisi için otomatik güncellenen bir Mermaid diyagramı üretin


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 32: Take-Home Task ve Canlı Kodlama: Adayın AI ile Birlikte Çalışma Yeteneğini Ölçmek

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Adayın 5 dakikada ChatGPT'ye yaptırıp gönderdiği sahte ev ödevlerine son: Timeboxed, interaktif ve adayın prompting zekasını ölçen canlı eşleşme (pair-programming).

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir şefe ev ödevi olarak 'Evde kek yap getir' dersen, gidip pastaneden en pahalı keki alıp kutusunu değiştirerek sana getirebilir. Ama şefi mutfağa sokup 'Önünde un, şeker ve akıllı fırın var; hadi birlikte 30 dakikada sufle yapalım' dersen ustanın gerçek hünerini gözlerinle görürsün.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Take-Home Formatı** | Adaya 3 günlük devasa ödev verip bedava amelelik yaptırmak. | Maksimum 2 saatlik, sınırları net ve AI kullanımının serbest olduğu odaklı bir problem. |
| **Değerlendirme** | Kodun çalışıp çalışmadığına bakmak. | Adayın git commit geçmişine, AI ile konuşma loglarına ve aldığı mimari kararlara bakmak. |
| **Canlı Eşleşme** | Adayı kamerada tek başına terletip sessizce izlemek. | Birlikte bir AI ajanını yönlendirerek (Pair-Prompting) problem çözmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 2 Saatlik Tavan Kuralı: Asla adayın hafta sonunu çalan 20 saatlik ev ödevleri verme; 2 saati aşan her ödev yetenekli adayları kaçırır.
- 2. Prompt Günlüğü İste: 'AI kullandıysan hangi promptları verdin ve çıkan kodda neyi düzelttin?' sorusunu ödev teslimine eklet.
- 3. Canlı Kodlamada Pair-Prompting: Mülakatta adayla birlikte bir feature yazın; adayın AI'a verdiği bağlamı ve geri bildirim döngüsünü gözlemle.
- 4. Savunma Oturumu (15 Dakika): Adaya: 'Bu kodu neden böyle böldün? AI sana başka ne önerdi ve sen neden reddettin?' sorusunu sor.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yapay zeka şirketi adaylara 3 günlük take-home task veriyordu. Gelen 20 ödevin 18'i neredeyse birbirinin kopyası Claude kodlarıydı ve kimin iyi olduğunu anlamak imkansızdı. Lead Onur sistemi değiştirdi: 1 saatlik canlı 'Pair-Prompting' seansı başlattı. Adayla birlikte Cursor üzerinden gerçek bir WebSocket entegrasyonu yaptılar. Onur, adayın prompt yeteneğini, test refleksini ve soğukkanlılığını 40 dakikada anladı; işe alım kalitesi %200 arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ 2 Saatlik AI Uyumlu Mülakat Görevi ve Değerlendirme Soruları
```text
Bir Senior Fullstack (React + Node.js / Go) pozisyonu için 2 saati aşmayacak, adayın hem kodlama hem de AI kullanım zekasını ölçecek bir 'Mini Take-Home Task' hazırla. Şunları içersin: 1) Görev tanımı ve başlangıç şablonu, 2) Adaydan istenecek 'Prompt Günlüğü' formatı, 3) Canlı görüşmede sorulacak 3 derin mimari savunma sorusu.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Adayların ChatGPT'ye yaptırdığı ödevlerle şirketleri kandırması trajedisi ve 'Pair-Prompting' mülakatlarının bu tiyatroyu nasıl bitirdiği. Gerçek mühendislik zekasını mülakatta anlamanın püf noktaları.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Take-Home Ödevlerinin İflası ve Yeni Dönem
- 04:15 - 2 Saat Kuralı: Saygılı ve Etkili Görev Tasarımı
- 08:35 - Pair-Prompting Nedir? Canlı Mülakatta AI Kullanımı
- 13:20 - Egzersiz: Takımınız için 1 adet Pair-Prompting mülakat kartı tasarlayın


<div style="page-break-after: always;"></div>

---

# Ders 33: 1 Günde İlk PR: AI Destekli Roket Hızında Onboarding Süreci

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yeni başlayan bir yazılımcının lokal ortam kurmak için 2 hafta debelenmesi skandalına son: DevContainer'lar, AI onboarding asistanı ve ilk 24 saatte merge edilen ilk PR.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Yeni kiraladığın eve taşındığında evin elektriği, suyu, interneti açık olmalıdır; anahtarı çevirip içeri girersin. Eğer ev sahibi sana 'Git sokaktan su borusu döşe, elektrik trafosuna kablo çek' derse oradan kaçarsın. Harika bir onboarding, mühendisin ilk gün tek tıkla kodlamaya başlayabilmesidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Ortam Kurulumu** | 40 sayfalık eski wiki sayfasına bakıp 3 gün boyunca eksik kütüphane aramak. | DevContainers / Codespaces ile tek tıkla 2 dakikada ayağa kalkan Docker ortamı. |
| **İlk Teslimat** | Yeni yazılımcının ilk ay sadece izlemesi, koda dokunmaya korkması. | İlk 24 saat içinde ufak bir düzeltme veya test ile ilk PR'ını açıp kutlamak. |
| **Soru Sorma** | Kıdemlileri rahatsız etmekten korkup saatlerce ekrana boş bakmak. | Şirket içi AI Onboarding Botu'na sınırsızca ve çekinmeden soru sormak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 24 Saat / İlk PR Kuralı: Yeni mühendisin ilk gün mesai bitmeden küçük de olsa bir PR'ı prod/staging hattına merge edilmelidir (Psikolojik zafer).
- 2. Tek Tıkla Ortam (DevContainers): 'Benim makinemde çalışıyordu' bahanesini yok et; tüm bağımlılıkları tek bir konfigürasyonda otomatikleştir.
- 3. AI Onboarding Buddy: Yeni çalışana projenin mimarisini, git akışını ve terminolojisini anlatan özel sistem promptlu bir LLM asistanı ver.
- 4. 30 Günlük Yol Haritası: Gün gün ne yapacağını belirten net bir 'Onboarding Checklist' hazırla.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir ödeme kuruluşunda yeni işe başlayan mühendisler ortalama 18 günde ilk commit'ini atabiliyordu çünkü veritabanı izinleri ve lokal ortam kabustu. Yeni lead Gamze bir devrim yaptı: Projeyi DevContainer'a taşıdı ve 'İlk Gün Görevi' olarak bir test biletini hazırladı. Yeni katılan junior mühendis Mert, sabah 09:00'da işe başladı, 11:00'de ortamı kuruldu, 15:30'da ilk PR'ını açtı ve 17:00'de canlıya çıktı. Takımın morali ve şirketin onboarding skoru rekor kırdı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Yeni Katılan Mühendis İçin 24 Saatte İlk PR Onboarding Kılavuzu
```text
Biz şu teknolojileri kullanan bir ekibiz: [DİL, FRAMEWORK, VERİTABANI]. Ekibimize yeni katılacak bir mühendisin ilk 24 saatte ilk PR'ını açmasını sağlayacak kusursuz bir 'Onboarding Yol Haritası ve İlk Gün Rehberi' hazırla. Şunları içersin: 1) DevContainer kurulum adımları, 2) İlk gün seçilebilecek 3 örnek risksiz görev tipi, 3) Takım içi AI onboarding asistanına sorabileceği 5 kritik başlangıç sorusu.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: İlk iş gününde 'Şu 40 sayfalık Confluence dokümanını oku' denilerek köşeye atılan yazılımcı travması ve ilk 24 saatte ilk PR'ını merge ettiren modern liderlik anlayışı üzerine ilham verici bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Onboarding Felaketi: Yeni Başlayanlar Neden İlk Ayda Soğur?
- 04:15 - DevContainers ile Tek Tıkla Ortam Kurulumu
- 08:35 - 24 Saatte İlk PR Kuralının Psikolojik Gücü
- 13:20 - Egzersiz: Takımınız için 1 günlük 'First PR' onboarding kiti hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 34: Kariyer Merdiveni ve Rol Tanımları: Junior, Mid, Senior, AI-Specialist Lead

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Eski 'yıl bazlı' kıdem tanımları çöktü: Bir mühendisin kıdemi artık kaç yıl kod yazdığıyla değil; ne kadar karmaşık sistemleri orkestre ettiği ve AI ile yarattığı kaldıraçla ölçülür.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir marangozun kıdemini atölyede kaç yıl oturduğuna bakarak ölçmezsin. Çırak tek bir sandalyenin bacağını zımparalar (Junior). Kalfa tüm masayı kendi başına yapar (Mid). Usta tüm evin mobilyalarını tasarlar ve çıraklara yol gösterir (Senior). Baş usta ise fabrikanın robotik hatlarını kurar ve üretimi 10 katına çıkarır (Staff / AI Lead).

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kıdem Tanımı** | '5 yıl tecrübesi olan otomatik olarak Senior olur.' | Yıl önemsizdir; problem çözme kapsamı (Scope of Impact) ve otonomluk belirler. |
| **Junior Rolü** | Basit HTML/CSS ve CRUD işleri yazan amele. | AI eşlikçileriyle tam kapsamlı modül geliştiren, öğrenme hızı yüksek mühendis. |
| **Senior / Staff Rolü** | En zor fonksiyonları tek başına karanlık odada yazan kişi. | Mimari sınırları çizen, AI ajanlarını takıma entegre eden ve iş birimleriyle strateji kuran lider. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Yıl Bazlı Değil Kapsam Bazlı (Scope-Based): Junior (Kendi taskını yapar), Mid (Bağımsız bir özelliği bitirir), Senior (Takımın mimarisini ve kalitesini yönetir), Staff (Şirket çapında etki yaratır).
- 2. AI Kaldıraç Çarpanı (AI Leverage): Her seviyedeki mühendisin AI araçlarını ne kadar ustaca kullandığı kariyer ilerleme kriteri haline getirilmelidir.
- 3. Şeffaf Kariyer Matrisi: Kimin ne zaman terfi edeceğini sübjektif hislerle değil; açık, net ve ölçülebilir bir rubrikle belirle.
- 4. İkili Kariyer Yolu (Dual-Track): Herkes yönetici olmak zorunda değildir; teknik derinlikte kalmak isteyenler için Staff/Principal Engineer yolunu açık tut.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir şirkette 2 yıldır çalışan hevesli bir yazılımcı, AI araçlarını ustalıkla kullanarak 8 yıllık eski kafalı bir kıdemliden daha fazla ve kaliteli mimari iş üretiyordu ama şirket politikası '5 yıl dolmadan Senior olamazsın' diyordu. Genç yetenek istifa etmek üzereydi. Lead Tolga yönetimle savaştı; kariyer merdivenini 'Yıl değil Etki ve Kaldıraç' esasına göre yeniden yazdı. Genç mühendis hak ettiği terfiyi aldı, şirket içi inovasyon patlaması yaşandı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Modern Yazılım Mühendisliği Kariyer Merdiveni ve Rubrik Tasarımcısı
```text
Yazılım şirketimiz için modern, AI çağının dinamiklerine uygun 4 seviyeli bir 'Mühendislik Kariyer Merdiveni' (Junior, Mid, Senior, Staff/Lead) hazırla. Her seviye için şu 4 boyutta somut, ölçülebilir beklentileri tanımla: 1) Teknik Etki ve Mimari, 2) AI Araçları Kullanımı ve Kaldıraç, 3) İletişim ve Takım Liderliği, 4) Teslimat Güvenilirliği.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: '5 yıl çalıştı diye Senior olan ama iki satır mimari kararı savunamayan' yazılımcılar ve yeni dünyada tecrübenin nasıl yeniden tanımlandığı üzerine çarpıcı bir kariyer analizi.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Yıl Bazlı Kıdemin İflası: Senior Kime Denir?
- 04:20 - Kapsam (Scope) Modeli: Junior'dan Staff Engineer'a 4 Aşama
- 08:35 - AI Kaldıraç Çarpanı: Küçük Ekiplerle Büyük İşler Başarmak
- 13:20 - Egzersiz: Takımınız için 1 sayfalık objektif terfi değerlendirme rubriği oluşturun


<div style="page-break-after: always;"></div>

---

# Ders 35: Takım Yetenek Matrisi ve Gap Analizi: Takımın Geleceğini Tasarlamak

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Takımınızda kim neyi biliyor, hangi kritik teknolojide tek bir kişiye bağımlısınız (Bus Factor)? Yetenek matrisi çıkarmak ve ekibi AI ile eğitmek.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Takımında sadece bir kişi arabanın motorunu tamir etmeyi biliyorsa ve o kişiye piyango çıkıp tatile giderse yolda kalırsınız. Akıllı lider, her kritik parçayı en az iki kişinin bilmesini sağlar; motoru tamir eden ustanın yanına diğerlerini çırak verir ve yapay zeka simülatörüyle herkesi makinist yapar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yetenek Tespiti** | Kimin ne bildiğini bilmemek, kriz anında şans eseri öğrenmek. | Her çeyrek güncellenen görsel Yetenek Matrisi (Skills Matrix) tutmak. |
| **Bus Factor Riski** | Ödeme sistemini sadece Ahmet'in bilmesi ve Ahmet'in üzerinde aşırı baskı olması. | Bilgiyi Ahmet'ten çıkarıp AI destekli dokümana dökmek ve yanına bir yedek mühendis eğitmek. |
| **Eğitim Stratejisi** | Yılda bir kez kimsenin izlemediği sıkıcı video kursları satın almak. | Takımın gerçek kod tabanı üzerinde haftalık 1 saatlik hands-on AI pratikleri yapmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Bus Factor Analizi: 'Eğer X kişisine yarın araba çarparsa veya tatile giderse hangi servisimiz çöker?' sorusunu sor ve kırmızı alarm ver.
- 2. Becerileri 3 Seviyede Haritala: 1 (Temel / Yardım alarak yapar), 2 (Bağımsız yapar), 3 (Başkasına öğretir ve mimarisini kurar).
- 3. Çapraz Eğitim (Cross-Training): Frontend mühendisine backend, backend mühendisine CI/CD pratikleri yaptırarak T-Shaped (geniş vizyonlu) mühendisler yetiştir.
- 4. AI Destekli Kişisel Gelişim Planı: Her mühendise kendi eksiklerine özel kişiselleştirilmiş 3 aylık öğrenme rotası çiz.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech şirketinde Kubernetes altyapısını sadece tek bir DevOps mühendisi biliyordu. O mühendis aniden başka bir şirkete geçtiği gün production kilitlendi ve 2 gün boyunca kimse müdahale edemedi. Şirket milyonlarca lira kaybetti. Yeni lead Hakan göreve gelince ilk iş olarak Yetenek Matrisi çıkardı. Takımdaki her backend mühendisine Kubernetes ve Terraform görevleri verdi; LLM destekli simülasyon ortamlarında eğitim aldırdı. Bus Factor 1'den 4'e çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım Yetenek Matrisi ve Gap Analiz Raporlayıcı
```text
7 kişilik bir yazılım takımı lideriyim. Takımımın mevcut teknik yetenek seviyeleri şunlardır: [EKİP VE BİLGİ DÜZEYLERİ]. Yaklaşan hedeflerimiz ise şunlar: [KUBERNETES, KAFKA, AI AGENT GELİŞTİRME]. Bana: 1) Takımın en büyük 2 kritik yetenek açığını (Gap) gösteren matris analizi çıkar, 2) Bus Factor risklerini işaretle, 3) 60 günlük somut bir çapraz eğitim (cross-training) planı öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Tüm projeyi tek bir adam biliyordu, o da askere gitti' faciası. Takımlarda bilgi tekelleşmesini kırmanın yolları ve yapay zeka ile her mühendisi nasıl çok yönlü bir süper kahramana dönüştürebileceğimiz üzerine harika bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Bus Factor Tehlikesi: Şirketinizi Tek Kişiye Bağımlı Kılmayın
- 04:20 - Takım Yetenek Matrisi (Skills Matrix) Nasıl Çıkarılır?
- 08:35 - T-Shaped Mühendis Yetiştirme: Backend'ciye DevOps Öğretmek
- 13:20 - Egzersiz: Kendi takımınızın 1 sayfalık Yetenek Matrisini oluşturun


<div style="page-break-after: always;"></div>

---

# Ders 36: Kültürel Uyum ve Çeşitlilik: Toksik Yıldızları ve Sessiz Ayrılanları Yönetmek

> **Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Çok iyi kod yazan ama herkesin hayatını zindan eden 'Toksik Yıldız' (Brilliant Jerk) ve ruhen şirketten kopmuş 'Sessiz Ayrılan' (Quiet Quitter) mühendisleri yönetme sanatı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir sepetteki en lezzetli elma eğer çürük kokuyorsa ve yanındaki diğer 10 elmayı da çürütüyorsa; o elmanın ne kadar lezzetli olduğunun hiçbir önemi yoktur. O elmayı sepetten çıkarmazsan tüm sepet çöpe gider. Kültür, en yetenekli kişinin bile takıma saygısızlık yapamayacağı sınırdır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Toksik Yıldız Tavrı** | 'Çok iyi kod yazıyor, idare edelim' deyip diğer 5 kişinin istifasını izlemek. | Net davranış sınırları koymak; düzelmezse ne kadar iyi kod yazarsa yazsın takımdan göndermek. |
| **Sessiz Ayrılık (Quiet Quitting)** | Tembel deyip etiketlemek ve arkasından dedikodu yapmak. | Derindeki kırgınlığı veya ilgisizliği 1-on-1 ile anlamak, yeni bir meydan okuma ile enerjisini canlandırmak. |
| **Kültür Koruması** | Kültürü şirket duvarına asılan süslü afişlerden ibaret sanmak. | Kültürü 'Hangi davranışları tolere ettiğin ve kimi ödüllendirdiğin' ile inşa etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Sıfır Toksik Toleransı: Hiçbir kod performansı, bir takım arkadaşını aşağılamayı, PR'larda alay etmeyi veya bilgi saklamayı haklı gösteremez.
- 2. Davranış Sözleşmesi: Toksik yıldıza teknik değil davranışsal KPI koy: 'Takıma ne kadar mentörlük ettin, PR yorumlarında ne kadar yapıcıydın?'
- 3. Sessiz Ayrılanı Yeniden Ateşle: Sessiz ayrılan mühendis genelde fikirleri dinlenmediği için küsmüştür; ona otonomi ve sahipleneceği bir AI inovasyon projesi ver.
- 4. Hızlı Karar Al: Çürük elma düzelmiyorsa vedalaşmakta 1 gün bile gecikme; gidişinin ertesi günü takımın nasıl rahatladığını ve verimin nasıl arttığını göreceksin.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yapay zeka start-up'ında baş mimar, herkesin kodunu aşağılıyor, toplantılarda insanları susturuyordu ama şirketin en kritik modelini o yazmıştı. 6 ayda 4 yetenekli mühendis onun yüzünden istifa etti. Yeni gelen lead Selim, mimarla yüzleşti; açık davranış kuralları koydu. Mimar 'Bensiz bu şirket batar' diyerek tehdit etti. Selim mimarın görevine son verdi; mimarın tekeline aldığı kodu AI yardımıyla takımla birlikte 1 haftada belgeledi. Takım moral kazandı ve sonraki çeyrek şirket tarihinin en yüksek ürün hızına ulaştı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Toksik Yıldız (Brilliant Jerk) Davranış Düzeltme ve Ayrılık Görüşmesi Planı
```text
Takımımda teknik olarak dahi seviyesinde ama takım arkadaşlarına karşı aşağılayıcı, kibirli ve toksik davranan bir kıdemli mühendis var. Bir mühendislik lideri olarak: 1) Onunla yapacağım 1-on-1 için hem onun yeteneğini takdir eden hem de toksik davranışın kabul edilemez olduğunu net çizgilerle belirten bir konuşma taslağı yaz, 2) 30 günlük somut davranış hedefleri koy, 3) Düzelmezse şirket onurunu koruyarak yolları ayırma protokolü oluştur.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Çok iyi kod yazıyor diye her türlü kabalığına katlanılan yazılımcı' klişesi. Toksik dâhilerin şirketlere verdiği gizli milyon dolarlık zararlar ve onları takımdan göndermenin getirdiği ferahlama üzerine cesur bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Toksik Yıldızın Gerçek Maliyeti: Kaçan Yetenekler
- 04:15 - Kültür Nedir? 'Neyi Tolere Ettiğinizdir!'
- 08:35 - Sessiz Ayrılanları (Quiet Quitters) Yeniden Kazanma Stratejisi
- 13:20 - Egzersiz: Takımınız için 5 maddelik 'Kültürel Anayasa' hazırlayın


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 38: SRE, SLO, SLA ve SLI: İş Birimleri ile Hata Bütçesi (Error Budget) Sözleşmesi

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Sistemimiz %100 ayakta kalmalı' bir fantezidir. İş birimiyle gerçekçi SLO (%99.9) belirlemek ve hata bütçesi tükendiğinde yeni özellikleri durdurup güvenliğe odaklanma kültürü.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir kargo şirketinin 'Her paketi 5 saniyede teslim edeceğiz ve hiçbir paket asla kaybolmayacak' sözü vermesine benzer. Bunu yapmaya kalkarsan her pakete bir helikopter tahsis etmen gerekir ve şirket iflas eder. Akıllı şirket 'Paketlerin %99.9'u zamanında gider, binde bir gecikme hakkımız vardır' der. O binde birlik hak senin hata bütçendir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Hedef Uptime** | 'Sistem asla durmamalı, %100 çalışmalı' (Gerçek dışı baskı). | '%99.9 SLO hedefliyoruz; bu ay 43 dakika kesinti hakkımız (Error Budget) var.' |
| **Bütçe Tükendiğinde** | Herkesin birbirini suçlaması, yine de yeni özellik çıkarmaya devam edilmesi. | Hata bütçesi %0'a indiğinde tüm yeni özelliklerin durdurulup sadece stabilite çalışılması. |
| **Müşteri Sözleşmesi** | SLA cezalarını cepten ödemek. | SLI ve SLO'ları AI anomali tespitiyle proaktif izleyip SLA ihlalini önceden engellemek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Dörtlüyü Ayırt Et: SLI (Gerçekte ne ölçüyoruz? Örn: Başarılı istek oranı), SLO (Kendi hedefimiz? Örn: %99.9), SLA (Müşteriye tazminat sözümüz? Örn: %99.5), Error Budget (Kalan hata hakkımız).
- 2. Hata Bütçesi Politikası (Error Budget Policy): Ürün yöneticisiyle yazılı sözleşme imzala: 'Eğer hata bütçemiz biterse o ay yeni feature çıkmayacak, sadece güvenilirlik çalışacağız.'
- 3. AI ile Anomali Erken Uyarısı: Sistem henüz çökmeden, p99 gecikmesindeki mikro sapmaları tespit eden yapay zeka monitörleri kur.
- 4. Gerçekçi Dokuzlar (The Cost of Nines): Her eklenen 9 rakamı maliyeti 10 katına çıkarır. %99.999 yerine iş için gerçekten neyin yettiğini belirle.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech şirketinde ürün yöneticisi sürekli yeni özellik istiyor, sistem haftada iki kez çöküyordu. Mühendisler tükenmişti. Yeni lead Canan, şirkete ilk resmi 'SLO & Error Budget' politikasını getirdi. Kasım ayında iki büyük kesinti olunca hata bütçesi tükendi. Canan sözleşmeyi masaya koydu ve 3 hafta boyunca yeni hiçbir özellik çıkarttırmadı; takım tüm açıkları kapattı, altyapıyı düzeltti. Sonraki 6 ay boyunca tek bir kesinti dahi yaşanmadı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Ürün ve Mühendislik İçin Hata Bütçesi (Error Budget) Sözleşmesi Tasarımcısı
```text
Bir SaaS şirketinin Engineering Lead'iyim. Ürün yöneticimizle aramızdaki güvenilirlik ve hız dengesini kuracak resmi bir 'SLO, SLA ve Error Budget Politikası Sözleşmesi' hazırla. Şunları içersin: 1) p99 gecikmesi ve hata oranı için net SLI/SLO tanımları (%99.9 hedefiyle), 2) Hata bütçesi %100, %50 ve %0 kaldığında takımların alacağı net aksiyon kuralları, 3) C-Level yönetimi bu politikanın şirketi nasıl daha karlı yapacağına ikna eden 1 sayfalık gerekçe.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Bizim sistem %100 çalışmalı!' diyen gerçeklikten kopuk CEO ile Google SRE ilkelerini anlatan bilge Lead. Hata bütçesinin yazılımcıya inovasyon yapma ve hata yapma özgürlüğü veren kutsal bir kalkan olduğu üzerine derin bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - %100 Uptime Efsanesi ve Şirketlerin İflası
- 04:15 - SLI, SLO, SLA ve Hata Bütçesi (Error Budget) Matematiği
- 08:35 - Hata Bütçesi Politikası ile Ürün Yöneticisini Frenlemek
- 13:20 - Egzersiz: Takımınızın kritik servisi için ilk SLO sözleşmesini yazın


<div style="page-break-after: always;"></div>

---

# Ders 39: AI Destekli Log & Telemetry Analizi: Milyonlarca Log Arasından İğneyi Bulmak

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Gözleri bozulan yazılımcıların saatlerce Elasticsearch/Kibana'da log araması çağı kapandı: OpenTelemetry distributed tracing ve LLM log kümeleme ile sorunun kökünü saniyeler içinde yakalamak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir otobandaki 10.000 arabanın içinden hangi arabanın motorunun bozulduğunu tek tek arabaları durdurup kaputunu açarak arayamazsın. Otobanın üzerine yerleştirdiğin termal kameralar (Distributed Tracing) hangi arabadan duman çıktığını sana uzaktan tek bakışta gösterir. AI ise o dumanın hangi bujiden çıktığını söyleyen baş tamircidir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Sorun Arama Yolu** | Kibana'da rastgele anahtar kelimelerle arama yapıp binlerce ilgisiz log arasında kaybolmak. | Correlation ID ve Trace ID ile tek bir isteğin mikroservisler arasındaki tüm yolculuğunu haritalamak. |
| **Log Yoğunluğu** | Gereksiz her şeyi loglayıp ayda 20.000$ Datadog/Splunk faturası ödemek. | Akıllı örnekleme (Tail-based sampling) ve AI ile sadece anomalileri saklayarak %70 maliyet tasarrufu. |
| **Kök Neden Çözümü** | Farklı servislerin loglarını birleştiremeyip suçu diğer takıma atmak. | AI özetleyicinin zincirleme hatanın ilk hangi serviste başladığını ispatlaması. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. OpenTelemetry Standartı: Her servise vendor-bağımsız OpenTelemetry SDK'sı koy; trace_id'yi tüm HTTP ve Kafka başlıklarında taşı.
- 2. Structured Logging: Düz metin logları yasakla; daima JSON formatında, aranabilir alanlarla (userId, orderId, durationMs) log üret.
- 3. Tail-Based Sampling: Başarılı olan rutin isteklerin sadece %1'ini, hata alan veya yavaşlayan isteklerin ise %100'ünü sakla.
- 4. LLM Log Sentezi: Bir alarm tetiklendiğinde, ilgili trace'in tüm log dökümünü LLM'e besleyip: 'Bu zincirleme çöküşü başlatan ilk mikroservis hangisi?' sorusunu sordur.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir dijital bankada kullanıcılar para transferi yaparken işlem bazen 40 saniye sürüyordu. 4 farklı mikroservis takımı 'Bizde sorun yok, suç diğer serviste' diyerek 2 ay boyunca suçu birbirine attı. Yeni lead Sinan, tüm sisteme OpenTelemetry distributed tracing ekledi ve logları bir AI analiz ajanına bağladı. Ajan, sorunun 4. servisin veritabanında unutulmuş kilitli bir foreign key constraint olduğunu ve diğer tüm servisleri kilitlediğini 15 dakikada kanıtladı. Sorun 1 satırlık indeksle çözüldü.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Dağıtık Mimari Log ve Trace Analiz Uzmanı Promptu
```text
Aşağıda 4 farklı mikroservis arasındaki dağıtık bir trace'in JSON logları ve gecikme süreleri yer almaktadır: [TRACE JSON]. Sen bir Principal Observability Architect'isin. 1) Bu istek zincirindeki en büyük darboğazı (bottleneck) ve p99 gecikmesine yol açan servisi tespit et, 2) Hatanın zincirleme olarak diğer servislere nasıl yayıldığını açıkla, 3) Veritabanı, connection pool veya network düzeyinde alınması gereken 2 somut optimizasyonu öner.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Bizim serviste sorun yok, suç backend'de!' kavgasını yapan takımların komedisi ve OpenTelemetry ile AI'ın bu dedikodu kültürünü nasıl yok edip gerçeği saniyeler içinde masaya koyduğu üzerine harika bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Log Cehennemi: Kibana'da Saatlerce Arama Yapmaktan Kurtulun
- 04:15 - OpenTelemetry ve Distributed Tracing'in Büyüsü
- 08:35 - Tail-Based Sampling ile Milyon Dolarlık Cloud Faturalarını Düşürmek
- 13:20 - Egzersiz: Takımınızın servislerine Trace ID correlation mekanizması ekleyin


<div style="page-break-after: always;"></div>

---

# Ders 40: Blameless (Suçlamasız) Post-Mortem Kültürü: Hatayı Kurumsal Öğrenmeye Dönüştürmek

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Suçlu kim, Ahmet mi yaptı?' diyen ilkel şirketlerden; 'Sistemimiz nasıl bir tasarıma sahipti ki bir insanın tek bir hatasıyla her şey çöktü?' diyen Google tarzı olgun liderliğe geçiş.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Küçük bir çocuk mutfakta yürürken yerdeki kaygan deterjana basıp düştüğünde ve vazoyu kırdığında; çocuğu dövmek sorunu çözmez. 'Mutfak zeminine o deterjanı kim döktü, neden paspas çekilmedi, vazo neden dengesiz bir masadaydı?' diye bakarsın. Suçlamasız kültür, çocuğu değil zemini ve masayı düzeltmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Odak Noktası** | 'Hatayı kim yaptı?' (Cadı avı, insanları korkutmak ve hataları gizletmek). | 'Sistemimiz neden bu hatayı engelleyemedi?' (Sistemik ve mimari iyileştirme). |
| **Toplantı Atmosferi** | Mahkeme salonu gibi gergin, herkesin mazeret ürettiği ortam. | Merak ve öğrenme odaklı, herkesin şeffafça süreci incelediği bilimsel laboratuvar. |
| **Çıktı** | Kimsenin okumadığı suçlayıcı bir rapor. | AI ile çıkarılmış net zaman çizelgesi, 5 Neden analizi ve takvimlenmiş 3 önleyici Jira bileti. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İnsan Hatası Sonuçtur, Kök Neden Değildir: 'Yazılımcı yanlış butona bastı' kök neden olamaz; 'Neden yanlış basılabilecek bir buton vardı?' kök nedendir.
- 2. Kronolojik Zaman Çizelgesi (Timeline): Slack logları ve git commit'lerini toplayıp dakikası dakikasına olayın röntgenini çek.
- 3. AI ile Post-Mortem Sentezi: Tüm ham logları ve mühendis notlarını LLM'e verip standart Google/AWS tarzı Post-Mortem şablonuna döktür.
- 4. Aksiyon Maddesi Kuralı: Raporun sonunda en az 2 adet önleyici sistemik aksiyon (örn: Guardrail linter, otomatik rollback, DB timeout) Jira'ya açılmalıdır.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech firmasında stajyer bir mühendis yanlışlıkla production veritabanını sildi ve 4 saat kesinti oldu. Eski kafalı CEO stajyeri kovmak istedi. Lead Derya göğsünü siper etti: 'Stajyerin production veritabanını silebildiği bir sistem kuran biziz; suç stajyerde değil, bizim mimarimizdedir.' Derya blameless post-mortem yaptı; prod erişim yetkilerini kısıtladı, çift onay mekanizması kurdu. Stajyer şirkette kaldı ve 2 yıl sonra şirketin en iyi güvenlik mühendislerinden biri oldu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Google SRE Tarzı Blameless Post-Mortem ve Zaman Çizelgesi Üretici
```text
Dün gece yaşanan kesintinin ham notları, Slack konuşmaları ve incident logları şunlardır: [NOTLAR VE LOGLAR]. Sen bir Google Principal Site Reliability Engineer'sın. Bu verilerden profesyonel, objektif ve kesinlikle suçlayıcı olmayan (Blameless) bir 'Incident Post-Mortem Raporu' hazırla. Şunları içersin: 1) Executive Summary & Impact, 2) Minute-by-minute Timeline of Events, 3) 5-Whys Root Cause Analysis, 4) What went well vs What went poorly, 5) 3 adet somut önleyici Jira aksiyon maddesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Production'ı patlatan stajyeri asalım mı keselim mi?' komedisi. Cadı avı yapan toksik şirketlerin nasıl çöktüğü ve Blameless kültürün dünyadaki en dayanıklı sistemleri (Google, Netflix, Amazon) nasıl inşa ettiği üzerine harika bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Cadı Avına Son: Neden İnsanları Suçlamak Felaket Getirir?
- 04:15 - Google SRE Blameless Post-Mortem Anatomisi
- 08:35 - Slack Konuşmalarını AI ile Kusursuz Zaman Çizelgesine Çevirmek
- 13:20 - Egzersiz: Takımınızın son krizini Blameless Post-Mortem formatında yeniden yazın


<div style="page-break-after: always;"></div>

---

# Ders 41: Chaos Engineering ve Dayanıklılık Testleri: Sistemleri Kasten Çökertmek

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Krizin hafta sonu gece yarısı sürpriz yapmasını beklemeyin; sistemlerin fişini mesai saatlerinde kasten çekin: Chaos Monkey felsefesi, GameDay simülasyonları ve AI dayanıklılık ajanları.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir itfaiye ekibinin gerçek yangın çıkana kadar hiç tatbikat yapmadan oturup televizyon izlemesi deliliktir. Yangın tatbikatı yaparsın; duman bombası atar, sirenleri çalar ve herkesin kaçış yolunu test edersin. Chaos Engineering yazılımın yangın tatbikatıdır; sistemi kontrollü şekilde ateşe verirsin ki acil durumda kimse paniklemesin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Dayanıklılık Testi** | 'Umarım sunucular çökmez' diye dua etmek. | Chaos Mesh veya Gremlin ile kasten pod öldürmek, gecikme (latency) enjekte etmek. |
| **Test Zamanı** | Canlı ortamda beklenmedik felaket anında öğrenmek. | Salı günü öğlen 14:00'te tüm ekibin hazır olduğu kontrollü GameDay seansında test etmek. |
| **AI Rolü** | Manuel olarak senaryo düşünmek. | AI ajanlarının sistemin en zayıf mimari halkasını bulup oraya özel saldırı ve kesinti simülasyonu üretmesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. GameDay Ritüeli: Ayda bir kez 2 saatlik GameDay düzenle; ekibe haber vermeden veya kontrollü şekilde bir mikroservisin bağlantısını kopar ve ekibin müdahalesini izle.
- 2. Blast Radius (Patlama Yarıçapı) Kontrolü: Kaos testlerini ilk olarak staging/canary ortamında başlat; asla tek seferde tüm prod'u riske atma.
- 3. Hipotez Kur: 'Eğer Redis çökerse sistem patlamaz, veritabanına fallback yapar' hipotezini yaz; sonra Redis'i öldür ve hipotezi doğrula.
- 4. Otomatik Kaos Ajanları: Testleri otomatize et; pipeline her deploy olduğunda mikro network kesintilerini tolere edebildiğini kanıtlasın.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir banka, 'Bizim sistem çok sağlam' diye övünüyordu. Yeni lead Levent bir GameDay düzenledi ve mesai saatinde ana kimlik doğrulama servisinin Kubernetes pod'larını tek tek kapattı. Sistem anında kilitlendi çünkü fallback mekanizması hiç test edilmemişti ve koddaki bir timeout değeri 300 saniyeydi! Bu kontrollü çöküş sayesinde 2 günde tüm timeout ve circuit breaker ayarları düzeltildi. 1 ay sonra şirketin veri merkezinde gerçek bir yangın çıktığında sistem sıfır kesintiyle çalışmaya devam etti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Takım İçi Chaos Engineering ve GameDay Senaryo Tasarımcısı
```text
Sistem mimarimiz şu bileşenlerden oluşmaktadır: [MİKROSERVİSLER, KAFKA, REDIS, POSTGRESQL, KUBERNETES]. Takımımızla 2 saatlik bir 'GameDay Kaos Tatbikatı' yapmak istiyoruz. Bana şunları üret: 1) Sistemin en zayıf noktalarını hedef alan 3 gerçekçi kaos senaryosu (Latency injection, DB failover, Packet drop), 2) Her senaryo için test edilecek bilimsel hipotez, 3) Bir şeyler ters giderse deneyi anında durduracak 'Emergency Abort' kontrol listesi.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kendi sistemini kasten çökerten deli mühendisler!' Chaos Engineering felsefesinin çılgın mantığı ve Netflix'in Chaos Monkey hikayesi. Korkarak yaşamak yerine sistemleri ateşte dövmenin mühendislik felsefesi.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Korkuyla Yaşamak vs. Sistemi Kasten Çökertmek
- 04:15 - Chaos Monkey Felsefesi ve Hipotez Odaklı Dayanıklılık
- 08:35 - GameDay Nasıl Düzenlenir? Patlama Yarıçapını Yönetmek
- 13:20 - Egzersiz: Takımınız için ilk kontrollü GameDay senaryosunu hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 42: Teknik Krizde Müşteri ve Yönetici İletişimi: Paniksiz Durum Raporlaması

> **Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Sistem çöktüğünde CEO'nun, müşterilerin ve satış ekibinin aynı anda Slack'ten saldırması kabusu: Paniksiz, şeffaf, güven veren kriz iletişimi ve AI ile anlık durum bültenleri.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Ameliyathanede acil bir operasyon sürerken cerrahın kapıyı açıp bekleyen hasta yakınlarına 'İçeride her yer kan gölü, ne yapacağımızı bilmiyoruz!' diye bağırması değil; 'Hastamız kontrolümüz altında, kanamayı durdurmak için gerekli müdahaleyi yapıyoruz, 20 dakika sonra tekrar bilgi vereceğiz' demesidir. Güven veren lider panik yaymaz, sakinlik aşılar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **İletişim Tonu** | Sessiz kalıp hiçbir şey söylememek veya panik dolu belirsiz mesajlar atmak. | Düzenli aralıklarla, teknik terimlerden arındırılmış, kontrolün elde olduğunu gösteren mesajlar. |
| **Status Page** | Her yer çökmüşken status page'in 'All Systems Operational' (yeşil) göstermesi. | Kullanıcıya dürüstçe 'Ödeme servisimizde yavaşlık var, mühendislerimiz inceliyor' demek. |
| **Yönetici Yönetimi** | CEO'nun kriz kanalına girip yazılımcıları soru yağmuruna tutarak yavaşlatması. | CEO için ayrı bir yönetici özet kanalı açıp oraya AI ile filtrelenmiş net bilgiler akıtmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İletişim Subayı Kuralı (Public Information Officer): Teknik mühendisler kriz çözerken asla müşterilerle veya CEO ile konuşmaz; bu iletişimi sadece Lead veya tayin edilen sözcü yürütür.
- 2. 3 Parçalı Kriz Mesajı Formülü: 1) Ne olduğunu biliyoruz (Teşhis), 2) Şu an ne yapıyoruz (Aksiyon), 3) Bir sonraki güncellemeyi tam saat kaçta vereceğiz (Taahhüt).
- 3. AI Kriz İletişim Asistanı: Mühendislik notlarını anında temiz bir Türkçe ve İngilizce status page güncellemesine çeviren şablonlar kullan.
- 4. Asla Tahmini Bitiş Saati Sözü Verme: '10 dakikaya düzelir' deme; düzelmezse güven sıfırlanır. 'Ekiplerimiz aktif olarak müdahale ediyor, saat 15:30'da tekrar bilgi vereceğiz' de.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir SaaS şirketinin Avrupa bulut bölgesi çöktü. 200 büyük kurumsal müşteri panikle destek hattını kilitledi. Eski lead panikle Slack'te 'Sunucularımız yandı galiba' yazınca bir müşteri bunu Twitter'da paylaştı ve hisseler düştü. Yeni lead Hande hemen duruma el koydu: Resmi bir Status Page duyurusu yayınladı. Müşterilere 15 dakikada bir net, profesyonel güncellemeler geçti. CEO'ya özel 3 maddelik durum özeti sundu. Kriz 45 dakikada çözüldü ve müşteriler kriz yönetiminin şeffaflığı ve profesyonelliği için şirkete teşekkür e-postaları attı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Kriz Anı Müşteri ve Yönetici İletişim Metni Hazırlayıcı
```text
Sistemimizde şu an büyük bir kesinti yaşanıyor: [TEKNİK DETAY: Veritabanı bağlantı havuzu tükendi, siparişler alınamıyor]. Ekiplerimiz son yarım saattir connection pool limitlerini artırıp sunucuları kademeli ayağa kaldırmaya çalışıyor. Sen bir Kriz İletişimi ve Halkla İlişkiler (PR) Uzmanısın. Bana: 1) Resmi Status Page için müşterilere güven veren 3 cümlelik duyuru, 2) Şirket CEO'su ve Yönetim Kurulu için paniksiz teknik durum özeti, 3) Müşteri temsilcilerinin (Destek ekibi) telefonlarda okuyacağı konuşma metnini (script) hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Sistem çöktüğünde kafasını kuma gömen şirketler' ile 'Müşteriye güven veren liderler'. İletişimin bazen yazılımın kendisinden bile daha kritik olduğu anlar ve krizde panik savar teknikler üzerine harika bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Krizde İletişim Felaketi: Yazılımcılar Nerede Hata Yapar?
- 04:15 - 3 Parçalı Kriz Mesajı Formülü (Ne Biliyoruz / Ne Yapıyoruz / Ne Zaman)
- 08:35 - CEO ve Müşterileri AI ile Yönetmek: Status Page Otomasyonu
- 13:20 - Egzersiz: Takımınız için 1 adet acil durum kriz iletişim şablonu hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 43: CTO, PM ve C-Level ile Aynı Dili Konuşmak: ROI, Runway ve Değer Sunumu

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
C-Level yöneticilere 'Kafka kuyruğu kurduk' derseniz esnerler. 'Müşteri kayıp oranını %15 düşürdük ve şirkete yılda 400.000$ kazandırdık' derseniz bütçeyi kaparsınız.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir araba galerisi sahibine gidip 'Bu arabanın piston segmanlarının alaşımı titanyum kaplama' dersen anlamaz ve ilgilenmez. Ama ona 'Bu araba 100 kilometrede 3 litre yakıyor, müşteriye bunu 5 dakikada satarsın ve %30 daha çok kar edersin' dersen hemen satın alır. C-Level iş insanıdır; teknoloji değil değer satın alır.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Teknik Raporlama** | 'Kubernetes cluster'ımızı 1.28 sürümüne yükselttik.' | 'Altyapı otomasyonu sayesinde sunucu maliyetlerimizi ayda 8.000$ düşürdük ve runway'imizi 2 ay uzattık.' |
| **Odak Noktası** | Kullanılan süslü teknolojiler ve framework isimleri. | Gelir artışı, maliyet düşüşü veya operasyonel risk azaltımı (The Big 3). |
| **Talep İletişimi** | 'Takıma yeni lisanslar ve sunucular lazım.' | 'Yapacağımız 10.000$'lık AI yatırımı, takıma yılda 120.000$'lık mühendislik mesaisi kazandıracak.' |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Üç Büyük İş Kriteri (The Big 3): Yaptığın her teknik işi şu 3 şeyden birine bağla: 1) Geliri artırmak (Make Money), 2) Maliyeti kısmak (Save Money), 3) Riski engellemek (Protect Money).
- 2. Jargondan Arındırma Filtresi: Sunumundaki tüm kısaltmaları (gRPC, K8s, CI/CD) kaldır; yerine iş etkisini koy.
- 3. AI ile Yönetici Tercümanı: Teknik bültenini LLM'e besleyip: 'Bunu şirket CFO'sunun anlayacağı finansal dilde 3 maddeye çevir' komutunu ver.
- 4. Runway Bilinci: Şirketin kaç aylık nakdi (Runway) kaldığını bil; ona göre harcama ve ekip planlaması yap.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir SaaS takımının lead'i C-Level'a gidip 'GraphQL'e geçmek için 2 sprint istiyoruz' dedi ve sertçe reddedildi. Şirkete yeni katılan Lead Serdar konuyu devraldı. Verileri inceledi ve mobil kullanıcıların yavaş internette sipariş verirken ekranın donduğunu gördü. CEO'ya şöyle bir sunum yaptı: 'Mobil sepet terk etme oranımız %28. API yanıtlarımızı hafifleterek bu oranı %18'e çekeceğiz; bu da çeyrekte 180.000$ ek ciro demek.' Bütçe ve 2 sprint anında onaylandı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Teknik İşi Finansal ROI ve Yönetici Diline Çevirici Prompt
```text
Biz şu teknik iyileştirmeyi yapmak istiyoruz: [TEKNİK PROJE: Monolitik ödeme servisini asenkron mikroservislere bölmek]. Şirketimizin bağlamı: [E-ticaret, yıllık 20M$ ciro, son dönemde yaşanan yavaşlıklar]. Sen şirket CEO'su ve CFO'susun. Bu teknik projeyi C-Level'ın anlayacağı, heyecanlanacağı ve onaylayacağı 1 sayfalık 'Yatırım Getirisi (ROI) ve Değer Sunumu Belgesi'ne dönüştür. İçinde gelir artışı, maliyet tasarrufu ve risk azaltımı başlıkları olsun.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Yöneticiler neden bizi anlamıyor?' diye ağlayan yazılımcı ile 'Yöneticilere teknoloji değil para kazandıracak fikirler anlatmalısın' diyen tecrübeli VP. Mühendislik dünyası ile iş dünyası arasındaki köprüyü kurmanın altın kuralları.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Babil Kulesi: Yazılımcılar ve Yöneticiler Neden Anlaşamaz?
- 04:15 - Üç Büyük İş Kriteri (Gelir, Maliyet, Risk)
- 08:35 - AI ile Teknik Jargondan Finansal Değere Dönüşüm
- 13:20 - Egzersiz: Takımınızın son mimari projesini 1 sayfalık ROI sunumuna çevirin


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 45: Bütçe, Bulut Maliyetleri (FinOps) ve AI Token Maliyet Optimizasyonu

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Ay sonunda gelen 50.000$'lık sürpriz AWS ve OpenAI faturasıyla C-Level'ın kapınıza dayanmasına son: FinOps kültürü, model routing ve token tasarrufu.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Evdeki tüm odaların ışıklarını, klimalarını ve fırınlarını sonuna kadar açık bırakıp tatile gidersen ay sonunda gelen elektrik faturası yüzünden kalp krizi geçirirsin. FinOps, evde kimse yokken ışıkları kapatan akıllı sensörler kurmaktır. AI token optimizasyonu ise her ufak iş için en pahalı limuzini kiralamak yerine yakındaki bakkala bisikletle gitmektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Maliyet Takibi** | Ay sonunda fatura geldiğinde CFO'nun bağırışlarıyla öğrenmek. | Günlük bütçe alarmları, etiketleme (Tagging) ve takım bazlı maliyet panoları. |
| **Model Seçimi** | Her basit işlem için en pahalı modeli (GPT-4o / Claude Opus) çağırmak. | Model Router ile basit işleri ucuz/hızlı modellere (Haiku / 4o-mini), sadece zor işleri pahalı modellere göndermek. |
| **Prompt Optimizasyonu** | Her istekte 50 sayfalık aynı sistem promptunu baştan göndermek. | Prompt Caching kullanarak token maliyetini %90 düşürmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Model Routing Mimarisi: İstekleri karmaşıklığına göre yönlendir; sınıflandırma ve formatlamayı küçük modeller, mimariyi büyük modeller yapsın.
- 2. Prompt Caching: Claude ve OpenAI'ın caching özelliklerini aktif et; tekrarlayan sistem promptları için %90 indirim kazan.
- 3. AWS / Cloud Etiketleme (Tagging): Açılan her EC2, S3 veya RDS kaynağı bir takıma ve projeye etiketlenmek zorundadır; sahipsiz zombi sunucuları otomatik kapat.
- 4. FinOps Dashboard: Takımın haftalık standup'ında bulut maliyet grafiğini 30 saniye göster; harcama bilincini kültüre yerleştir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yapay zeka start-up'ında yazılımcılar her kullanıcı araması için tüm veritabanı şemasını en pahalı LLM'e prompt olarak gönderiyordu. Şirketin aylık LLM faturası 32.000$'a fırladı ve şirket batma noktasına geldi. Yeni lead Tolgahan bir 'Model Gateway' kurdu. Prompt Caching aktif edildi ve sorguların %70'i ucuz küçük modellere yönlendirildi. Fatura 32.000$'dan 3.400$'a indi; yanıt hızı ise 3 kat arttı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Bulut ve AI Token Harcama Optimizasyon Denetçisi
```text
Şirketimizin aylık AWS ve LLM harcama kalemleri şunlardır: [HARCAMA TABLOSU: EC2, RDS, OpenAI API vb.]. Sen bir FinOps ve Cloud Cost Optimization uzmanısın. 1) Bu harcamalardaki en büyük 3 israf noktasını teşhis et, 2) Token maliyetini %70 düşürecek Prompt Caching ve Model Routing stratejisini açıkla, 3) 30 gün içinde faturayı yarı yarıya indirecek somut aksiyon adımlarını listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Ay sonunda gelen 50.000 dolarlık AWS faturası' şoku yaşayan yazılımcı komedisi. Zombi sunucular, gereksiz pahalı yapay zeka modelleri ve FinOps disiplininin bir şirketi nasıl iflastan kurtardığı üzerine keyifli bir bölüm.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Fatura Şoku: Bulutta ve Yapay Zekada Para Nasıl Buharlaşır?
- 04:15 - Model Routing ve Prompt Caching ile %80 Token Tasarrufu
- 08:35 - FinOps Kültürü: Zombi Sunucuları Avlamak
- 13:20 - Egzersiz: Takımınızın API ve Cloud maliyetini düşürecek 3 maddelik FinOps planı yapın


<div style="page-break-after: always;"></div>

---

# Ders 46: 'Bu Özellik 3 Günde Çıkar mı?': Ürün Yöneticisiyle (PM) Sağlıklı Müzakere

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
PM 'Bu çok acil, cumaya yetişmeli' dediğinde panikle 'Yaparız' deyip takımı yakmak veya doğrudan 'İmkansız' deyip kavga etmek yerine: Demir Üçgen (Scope, Time, Quality) ile müzakere sanatı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir restoranda müşterinin 'Benim fırında kuzu tandırım 5 dakikada masaya gelsin' demesine benzer. Aşçı 'Olur' derse çiğ et getirir, müşteri zehirlenir. 'Asla olmaz' derse müşteri kavga çıkarır. Akıllı aşçı der ki: 'Kuzu tandırın pişmesi 40 dakikadır; ama 5 dakikada açlığınızı yatıştırmak istiyorsanız nefis bir sıcak çorba ve meze tabağımızı hemen getirebilirim.'

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Tepki Biçimi** | Korkudan 'Yetiştiririz' deyip takımı hafta sonu dahil sabahlara kadar çalıştırmak. | 'Demir Üçgen' kuralını masaya koyup tarih sabitse neleri kapsamdan çıkaracağımızı sormak. |
| **Kalite Tavizi** | Yetişsin diye test yazmamak, dokümantasyonu silmek (Teknik borç patlaması). | Kaliteden asla taviz vermemek; sadece işlevsellik kapsamını (scope) küçültmek. |
| **İlişki Dinamiği** | Yazılımcılar ve PM'in iki düşman kampa bölünmesi. | Aynı gemideki iki stratejik ortak olarak AI ile hızlı prototip (MVP) seçenekleri üretmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Demir Üçgen (Iron Triangle): Kapsam (Scope), Zaman (Time), Kaynak/Kalite (Cost/Quality). Kalite pazarlık konusu olamaz; tarih kilitliyse kapsam küçülür.
- 2. 'Evet, Eğer...' Tekniği: 'Hayır' kelimesini lügatından çıkar; 'Evet yapabiliriz, eğer faturalama filtresini sonraki sürüme bırakırsak' de.
- 3. İnce Dilimleme (Vertical Slicing): Büyük özelliği %20 eforla %80 değer yaratan en minimal çalışan versiyona (MVP) indir.
- 4. AI ile Kapsam Tıraşlama: Bilet listesini LLM'e besleyip: 'Cumaya yetişmesi için bu özelliğin kullanıcı deneyimini bozmayan en kritik 2 alt parçasını seç' analizi al.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech start-up'ında PM, yatırımcı toplantısına yetişmesi için 4 haftalık 'Kripto Cüzdan Entegrasyonu' özelliğinin 1 haftada bitmesini istedi. Eski lead kavga edip istifa etmişti. Yeni lead Ekin geldi ve PM ile masaya oturdu: 'Cuma günkü yatırımcıya cüzdanın 50 farklı kripto para desteklediğini mi göstermek istiyorsun, yoksa cüzdana para yüklenip çekilebildiğini mi?' PM 'Para yükleme akışı yeterli' dedi. Ekin kapsamı 50 coin'den tek coin'e (sadece USDT) indirdi. Özellik perşembe akşamı hatasız çıktı; yatırımcılar büyülendi ve şirket 2M$ yatırım aldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Ürün Yöneticisiyle Müzakere ve Kapsam Küçültme (Vertical Slicing) Asistanı
```text
Ürün yöneticimiz şu büyük özelliğin 1 hafta içinde canlıya çıkmasını talep ediyor: [ÖZELLİK TANIMI]. Ekibimizin bu sürede bunu tam olarak yapması imkansız. Sen usta bir Agile Koçu ve Müzakere Uzmanısın. 1) Bu özelliği kullanıcıya değer sunmaya devam eden 3 aşamalı 'Dikey Dilime' (MVP 1, MVP 2, Full) böl, 2) PM ile yapacağım görüşmede kullanabileceğim nazik, profesyonel ve 'Evet, eğer...' formülüne dayalı konuşma metnini yaz, 3) Kaliteden taviz vermeden takımı koruyacak sınırları çiz.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Cumaya yetişmezse biteriz!' diye panikleyen Product Manager ile onu bir Zen ustası gibi sakinleştiren Team Lead. Demir Üçgen kuralı ve yazılımcı-ürüncü barışının sırları üzerine kahkaha dolu bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - 'Cumaya Yetişmeli!' Paniği: Liderin İlk Tepkisi Ne Olmalı?
- 04:15 - Demir Üçgen Mimarisi: Kaliteden Asla Taviz Vermemek
- 08:35 - 'Evet, Eğer...' Formülü ile Profesyonel Müzakere
- 13:20 - Egzersiz: Takımınızdan istenen aşırı bir talebi AI ile MVP dilimlerine ayırın


<div style="page-break-after: always;"></div>

---

# Ders 47: Yönetim Kurulu ve Liderlik Sunumları Hazırlama: AI ile Veriyi Hikayeleştirme

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yönetim kuruluna 60 slaytlık karmaşık teknik grafikler gösterip herkesi uyutmaya son: 3 slaytlık piramit prensibi, veriyi hikayeleştirme ve yönetim dili.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Gazetelerin manşetleri gibidir. Bir gazetenin ilk sayfasında 'Bugün hava sıcaklığı 24 derece, nem oranı %40, rüzgar kuzeyden esiyor' yazmaz; manşette kocaman 'REKOR SICAKLIK GELİYOR!' yazar, detaylar alta yazılır. Yönetim kurulu sunumu gazete manşetidir; önce vurucu sonucu söyle, sonra gerekçeleri ver.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Sunum Yapısı** | Kronolojik anlatım: 'Önce şunu yaptık, sonra buraya baktık...' (Sonuç 50. dakikada gelir). | Piramit Prensibi (Minto Pyramid): Önce ana mesaj ve karar talebi, sonra 3 kanıt. |
| **Görsel Tasarım** | Küçük fontlarla dolu, okunmayan devasa tablolar ve log ekran görüntüleri. | Tek bir net mesaj veren temiz grafikler ve AI ile üretilmiş görsel metaforlar. |
| **Soru-Cevap** | Beklenmeyen zor bir soru geldiğinde terleyip konuyu dağıtmak. | Yönetim kurulunun soracağı 10 zor soruyu önceden AI ile simüle edip hazırlıklı olmak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Minto Piramidi (The Pyramid Principle): 1) Sonuç (Bottom Line Up Front - BLUF), 2) Destekleyici Argümanlar, 3) Detaylı Veriler.
- 2. Üç Slayt Kuralı: Yönetim kurulu için ideal sunum 3 slayttır: 1) Neredeyiz ve Hedef ne? 2) En büyük engel/fırsat ne? 3) Yönetimden ne talep ediyoruz (bütçe/karar)?
- 3. AI ile Yönetici Simülasyonu: Sunumdan önce slaytlarını LLM'e ver: 'Sen şüpheci ve agresif bir Yönetim Kurulu Üyesisin; beni bu sunumda en çok nereden vurursun?' de.
- 4. Başarıları Şirket Değerine Bağla: 'Bu çeyrek 120 PR kapattık' deme; 'Yeni altyapımız sayesinde müşteri onboarding süresini 14 günden 2 güne indirdik' de.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech Lead'i şirketin veri tabanını ölçeklemek için 100.000$ ek bütçe istemek üzere Yönetim Kurulu'na çıktı. 40 slaytlık teknik bir sunum yaptı; PostgreSQL parametrelerini anlattı. Kurul sıkıldı ve bütçeyi reddetti. Lead, şirketin VP of Engineering'inden koçluk aldı ve sunumu AI ile yeniden tasarladı: Tek slayt! Manşet: 'Önümüzdeki ay beklenen 3 kat trafik artışında sistemimizin çökmesini engellemek ve 1.2M$ ciroyu güvenceye almak için 100.000$ altyapı yatırımı.' Sunum 4 dakikada onaylandı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Yönetim Kurulu ve C-Level İçin Piramit Prensibi Sunum Tasarımcısı
```text
Mühendislik takımımızın bu çeyrekteki başarıları ve önümüzdeki çeyrek için talep ettiğimiz bütçe/kaynaklar şunlardır: [NOTLAR VE TALEPLER]. Sen McKinsey seviyesinde bir Yönetici İletişim Koçusun. Bana: 1) Barbara Minto'nun Piramit Prensibi'ne (BLUF) göre yapılandırılmış 3 slaytlık bir 'Yönetim Kurulu Sunum İskeleti' hazırla, 2) Yönetim kurulunun sorabileceği en zor 3 şüpheci soruyu ve bunlara verilecek kusursuz diplomatik yanıtları listele.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Yönetim kuruluna teknik detay anlatıp kovulmaktan beter olan mühendis ile tek slaytla milyon dolarlık bütçeyi kapan bilge Lead. İş dünyasında hikaye anlatıcılığının (storytelling) gücü üzerine büyüleyici bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Yönetim Kurulu Kabusu: Neden Mühendislerin Sunumları Sıkıcıdır?
- 04:15 - Minto Piramidi ve BLUF (Bottom Line Up Front) Tekniği
- 08:35 - AI ile Agresif Yönetim Kurulu Simülasyonu Yapmak
- 13:20 - Egzersiz: Takımınızın son çeyrek raporunu 3 slaytlık BLUF formatına dönüştürün


<div style="page-break-after: always;"></div>

---

# Ders 48: Stratejik 'Hayır' Deme Sanatı: Takımı Odak Noktasında Tutmak

> **Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Gelen her isteğe 'Evet' diyen lider takımını mezara götürür. Köprüleri yıkmadan, saygı kazanarak ve alternatif sunarak üst yönetime stratejik 'Hayır' deme ustalığı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Küçük bir bavulun var ve içine sadece 5 gömlek sığıyor. Birisi gelip 'Şu 3 kazağı ve 2 çift botu da bavula koy' dediğinde 'Tamam' dersen bavulun fermuarı patlar, her şey yerlere saçılır. Stratejik 'Hayır', 'Bavulumuz dolu; botları koymamı istiyorsanız hangi iki gömleği evde bırakalım?' demektir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Reddetme Şekli** | Kaba ve tepkisel bir şekilde 'Yapamayız, vaktimiz yok' demek (Düşman kazanmak). | Stratejik seçenek sunarak: 'Bunu yapabiliriz ama X projesini 3 hafta öteleriz, şirket için hangisi daha öncelikli?' |
| **Takım Koruması** | Her şeyi kabul edip sonra gizlice takıma mobbing yapmak. | Takımın odak kapasitesini bir kale gibi savunmak ve takdiri üzerine almak. |
| **Saygınlık** | Her şeye boyun eğen 'Yes-Man' olarak görülüp saygı görmemek. | Şirketin stratejik hedeflerini koruyan olgun bir lider olarak görülmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. 'Evet-İnsan' (Yes-Man) Tuzağı: Her şeye evet demek kibarlık değildir; hiçbir şeyi kaliteli bitirememek ve takımı tüketmektir.
- 2. Maliyeti Masaya Koy (Surface the Opportunity Cost): Bir şeye evet demek, başka bir şeye hayır demektir. Yeni isteğin neyi feda edeceğini hemen göster.
- 3. Pozitif Hayır Formülü (The Positive No): 1) İstek sahibinin hedefini anladığını göster, 2) Mevcut kısıtı açıkla, 3) Alternatif bir kazan-kazan rotası sun.
- 4. AI ile Diplomatik Yanıt Tasarımı: Sert bir reddiye yazmadan önce LLM'e: 'Bu talebi hem profesyonel hem de stratejik kısıtları net gösteren diplomatik bir dille reddet' komutunu ver.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir telekom şirketinde satış direktörü, yeni bir müşteri için sprint ortasında 15 özel entegrasyon istedi ve 'Bu yapılmazsa anlaşma yatar' diye baskı kurdu. Eski lead'ler hep boyun eğmiş ve projeler batmıştı. Yeni lead Kerim satış direktörünün odasına gitti: 'Bu müşteriyi kazanmanı çok istiyorum. Ancak şu an takımımız regülasyon uyum projesini yapıyor; bunu geciktirirsek şirket haftalık 500.000 TL ceza yiyecek. Gel seninle şu 15 entegrasyonun en kritik 2 tanesini seçelim, onları cuma gününe çıkaralım; kalan 13 tanesini sonraki çeyreğe takvimleyelim.' Satış direktörü kabul etti; hem müşteri kazanıldı hem de ceza engellendi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Diplomatik ve Stratejik 'Hayır' E-postası Hazırlayıcı
```text
Üst yönetimden veya Ürün Direktöründen şu gerçek dışı ve takımı batıracak acil talep geldi: [TALEBİ EKLEYİN]. Bizim mevcut taahhütlerimiz: [MEVCUT KRİTİK PROJE]. Sen dünyanın en usta Kurumsal Müzakere Danışmanısın. Köprüleri yıkmayan, karşı tarafın hedefini anlayan ama takımın sınırlarını tavizsiz koruyan, 'Pozitif Hayır' ilkelerine uygun kusursuz bir yönetici e-posta yanıtı hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Her şeye evet diyen ve sonunda takımı istifa eden zavallı lider' portresi. 'Hayır' demenin aslında şirketin gerçek hedeflerine 'Evet' demek olduğu gerçeği ve liderlikte sınır koymanın asaleti üzerine ilham dolu bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - 'Yes-Man' Sendromu: Her Şeye Evet Diyen Lider Neden Batırır?
- 04:15 - Fırsat Maliyeti (Opportunity Cost) Formülü
- 08:35 - 'Pozitif Hayır'ın 3 Aşamalı Diplomatik İskeleti
- 13:20 - Egzersiz: Size gelen son acil talebi stratejik 'Pozitif Hayır' formatında yanıtlayın


<div style="page-break-after: always;"></div>

---

# Ders 49: Takıma Özel Yerel LLM ve Ajan Gateway Kurulumu: Güvenli & KVKK Uyumlu AI

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Şirketin hassas müşteri ve finansal verilerini kamuya açık yapay zekalara kaptırmadan; Ollama, vLLM ve dahili LiteLLM Proxy ile %100 güvenli AI altyapısı kurmak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Şirketin tüm gizli muhasebe defterlerini şehrin ortasındaki umumi fotokopiciye götürüp 'Bunu çoğalt' dersen polis de basar, hırsız da çalar. Yerel AI kurmak, şirketin kendi bodrum katına yüksek güvenlikli, kapalı devre bir fotokopi makinesi koymaktır; hiçbir kağıt binadan dışarı çıkmaz.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Veri Güvenliği** | Yazılımcıların müşteri kredi kartı loglarını izinsiz açık ChatGPT'ye yapıştırması. | LiteLLM Proxy üzerinde çalışan otomatik PII Redaction (Veri Maskeleme) ile sıfır sızıntı. |
| **Model Barındırma** | Sadece dış API'lara bağımlı olmak (İnternet veya sağlayıcı kopunca işin durması). | Kritik servislerde kurum içi sunucularda koşan açık kaynaklı modeller (Llama 3.3, Qwen, DeepSeek). |
| **Maliyet ve Denetim** | Kimin hangi modele ne kadar token harcadığının bilinememesi. | Merkezi Gateway üzerinden kullanıcı bazlı kota, bütçe ve log denetimi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Merkezi AI Gateway Katmanı (LiteLLM / Portkey): Tüm takım isteklerini tek bir şirket içi proxy üzerinden geçir; API anahtarlarını geliştiricilere değil gateway'e ver.
- 2. Otomatik PII Maskeleme: Koddaki API key'leri, kimlik numaralarını ve e-postaları LLM'e gitmeden önce regex ve Presidio ile yıldızla (`***`).
- 3. Yerel Çıkarım (Local Inference): Geliştirici laptoplarında veya iç Kubernetes kümesinde Ollama / vLLM ile Llama 3 veya DeepSeek modellerini barındır.
- 4. KVKK / GDPR Uyumluluk Politikası: Şirketin hukuk birimiyle onaylı bir 'Yapay Zeka Veri İşleme Politikası' yayınla; çalışanların neyi nerede kullanacağını netleştir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir sağlık teknolojisi firmasında bir yazılımcı, hasta röntgen tahlil kodunu debug etmek için açık bir yapay zekaya yapıştırdı. Sağlık Bakanlığı denetiminde veri ihlali tespit edildi ve şirkete 1.5 milyon TL ceza kesildi. Lead Alperen hemen bir AI Gateway projesi başlattı. Şirketin VPC'si içine LiteLLM ve yerel Llama modelleri kuruldu; tüm dış çağrılarda otomatik kimlik anonimleştirici devreye alındı. Şirket 'Sağlık Verisi Uyumlu AI' sertifikası aldı ve rakiplerinin önüne geçti.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ LiteLLM Gateway ve PII Veri Maskeleme Konfigüratörü
```text
Biz 20 kişilik bir mühendislik takımıyız. Takımımızın OpenAI, Claude ve yerel Ollama modellerini güvenli, KVKK uyumlu ve merkezi bütçe kotalı kullanabilmesi için bir `docker-compose.yml` ve `litellm_config.yaml` mimarisi hazırla. Şunları içersin: 1) Model fallback zinciri, 2) API key ve PII maskeleme kuralları, 3) Geliştirici başına aylık 50$ kullanım limiti.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Şirket kodunu yapay zekaya kaptıran acemi yazılımcı' paniği. Yerel modellerin (Ollama/vLLM) inanılmaz yükselişi ve şirketlerin kendi güvenli AI kalelerini nasıl kurabileceği üzerine sürükleyici bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - KVKK ve GDPR Kabusu: Veri Sızıntısı Şirketleri Nasıl Batırır?
- 04:15 - LiteLLM Proxy ile Merkezi AI Gateway Kurulumu
- 08:35 - Yerel Modeller: Ollama ve vLLM ile Şirket İçi Çıkarım
- 13:20 - Egzersiz: Lokalinizde Ollama ile ilk gizli kodlama asistanınızı ayağa kaldırın


<div style="page-break-after: always;"></div>

---

# Ders 50: Context Engineering ve Prompt Yönetimi: Şirket Hafızasını LLM'e Yedirmek

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Prompt mühendisliği öldü, yaşasın Bağlam Mühendisliği (Context Engineering): Modele ne istediğini değil, karar vermesi için gereken doğru veri ve sistem sınırlarını besleme sanatı.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir avukata mahkemeye çıkmadan önce 'Müvekkilimi savun' demek boş bir prompttur. Ama avukatın önüne olayın polis tutanağını, kamera kayıtlarını, adli tıp raporunu ve ilgili kanun maddesini koyarsan (Context Engineering), avukat mahkemede harikalar yaratır. Yapay zeka bağlam olmadan sadece laf kalabalığı yapar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yaklaşım** | 'Sen kıdemli yazılımcısın, lütfen kodu hatasız yaz' gibi süslü laflar (Prompt Eng). | İlgili DTO'lar, DB şeması, son hata logu ve testleri dinamik bağlam olarak enjekte etmek (Context Eng). |
| **Hata Sebebi** | 'Model aptal, halüsinasyon gördü' diye modele kızmak. | 'Biz modele doğru bağlamı ve kısıtları veremedik' diyerek veri akışını düzeltmek. |
| **Bağlam Yönetimi** | Tüm repoyu rastgele LLM penceresine tıkıp modelin aklını karıştırmak. | Sadece gerekli 200 satırlık dilimi cerrahi hassasiyetle seçen akıllı RAG ve parser'lar. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Çöp Girerse Çöp Çıkar (Garbage In, Garbage Out): LLM'in performansı, promptun edebi güzelliğine değil, içine konan bağlamın saflığına bağlıdır.
- 2. Dinamik Bağlam Enjeksiyonu: Mühendisin IDE'sindeki açık dosya, ilgili git diff'i ve aktif Jira biletinin kabul kriterlerini otomatik toplayan scriptler yaz.
- 3. Sistem Promptlarını Kod Gibi Versiyonla: Şirketin sistem promptlarını Git'te tut, PR ile incele ve CI/CD ile test et.
- 4. Token Bütçesi Dağılımı: 100k tokenlık pencerede: %10 Sistem kuralları, %60 Temiz bağlam ve örnekler (Few-shot), %10 Kullanıcı sorusu, %20 Üretim alanı.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret takımında yazılımcılar 'Claude bizim projeyi anlamıyor, sürekli var olmayan metotları çağırıyor' diye şikayet ediyordu. Lead Ceyda projeyi inceledi: Yazılımcılar Claude'a sadece 'Şu servisi yaz' diyordu. Ceyda takıma özel bir CLI aracı yazdı (`team-ctx`). Bu araç, yazılımcının çalıştığı dosyanın bağımlılık ağacını, veritabanı migration dosyasını ve son OpenAPI spec'ini otomatik toplayıp bağlam olarak LLM'e yüklüyordu. Halüsinasyon oranı %80 azaldı, ilk denemede derlenen kod oranı %92'ye çıktı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Dinamik Context Assembler ve Sistem Promptu Optimizatörü
```text
Bir yazılım takımı için Bağlam Mühendisliği (Context Engineering) şablonu tasarlıyoruz. Şu bilgileri girdi olarak alıp en optimize bağlam zarfını (Context Envelope) üreten bir yapı kur: 1) Sistem Kuralları (Maksimum 500 token), 2) İlgili Veritabanı Şeması ve DTO'lar, 3) 2 adet kusursuz Few-Shot örnek, 4) Kullanıcının spesifik task'ı. Bu bağlamın neden halüsinasyonu sıfırladığını açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Prompt mühendisliği bitti mi?' tartışması. Süslü prompt yazarları ile veriyi ve bağlamı doğru kurgulayan gerçek sistem mimarları arasındaki fark üzerine ufuk açıcı bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Prompt Engineering Efsanesi vs. Context Engineering Gerçeği
- 04:15 - Bağlam Zarfı (Context Envelope) Mimarisi
- 08:35 - Token Bütçesini Yönetmek: Halüsinasyonu Matematikle Engellemek
- 13:20 - Egzersiz: Takımınız için otomatik bağlam toplayan 1 sayfalık script yazın


<div style="page-break-after: always;"></div>

---

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


<div style="page-break-after: always;"></div>

---

# Ders 52: AI Çıktılarını Otomatik Değerlendirme (Evals) ve Benchmark Sistemleri

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
'Bence bu prompt daha iyi çalışıyor' gibi sübjektif hislere son: AI sistemlerinin kalitesini matematiksel olarak ölçen Eval pipeline'ları ve LLM-as-a-Judge mimarisi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir sporcunun iyi koşup koşmadığını 'Bence bugün çok havalı koştu' diyerek ölçemezsin; eline kronometreyi alır, 100 metreyi kaç saniyede koştuğunu salisesine kadar kaydedersin. Evals, yapay zekanın eline tuttuğun o kronometredir. Promptu değiştirdiğinde sistem daha mı iyi oldu yoksa geriye mi gitti rakamlarla görürsün.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Kalite Kararı** | Geliştiricinin 3 prompt deneyip 'Güzel çalışıyor' diyerek canlıya basması (Vibes-based). | 100 adet gerçek test vakasından oluşan Eval veri setinde %94 başarı puanı alma şartı. |
| **Regresyon Tespiti** | Promptu değiştirince başka bir özelliğin bozulduğunu müşterilerden öğrenmek. | CI/CD hattında çalışan otomatik eval testleri ile anında kırmızı alarm almak. |
| **Değerlendirme Hakemi** | İnsanların yüzlerce satır çıktıyı tek tek okumaya çalışıp yorulması. | Katı bir rubrikle puanlama yapan tarafsız LLM-as-a-Judge mimarisi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Altın Veri Seti (Golden Dataset) Oluştur: Sistemin karşılaşacağı en zor 50 gerçek senaryoyu, girdileri ve beklenen doğru çıktıları JSON olarak kaydet.
- 2. LLM-as-a-Judge: Daha güçlü bir akıl yürütme modelini (GPT-4o / Claude Sonnet) hakem yap; üretilen kodları güvenlik, doğruluk ve stil rubriğine göre 1-5 arası puanlat.
- 3. CI/CD'ye Eval Kapısı: Prompt veya model değiştiğinde Eval skoru %90'ın altına düşerse PR merge edilemez.
- 4. Hata Analizi: Patlayan eval senaryolarını kümeleyip prompttaki hangi kuralın eksik olduğunu tespit et.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir müşteri hizmetleri yapay zeka botu yapan start-up'ta bir yazılımcı promptu 'biraz daha samimi olsun' diye değiştirdi. Canlıya geçince bot kullanıcılara yanlışlıkla %50 indirim kodu dağıtmaya başladı; şirket 80.000$ zarar etti. Lead Damla şirkete anında 'Prompt Evals' altyapısı kurdu. 150 adet geçmiş kriz senaryosu benchmark haline getirildi. Artık hiçbir prompt değişikliği bu 150 testten tam puan almadan canlıya çıkamıyor.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ LLM-as-a-Judge ve Otomatik Eval Puanlama Rubriği
```text
Sen dünyanın en tarafsız ve titiz Baş Hakem AI'ısın (LLM-as-a-Judge). Görevin, bir yapay zekanın ürettiği şu çıktıyı: [ÜRETİLEN ÇIKTI], verilen şu zemin gerçekle (Ground Truth): [DOĞRU ÇIKTI] kıyaslamak. Şu rubrik üzerinden 1-5 arası puan ver ve gerekçeni yaz: 1) Teknik Doğruluk, 2) Güvenlik ve Halüsinasyon Yokluğu, 3) Domain Kısıtlarına Uyum. Çıktını JSON formatında `{score: number, reasoning: string, pass: boolean}` olarak üret.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Hislerle prompt yazan' amatör yazılımcı ile 'Bana rakamlarla gel!' diyen bilimsel Lead. Eval sistemlerinin yapay zekayı bir falcılık olmaktan çıkarıp gerçek bir mühendislik disiplinine nasıl dönüştürdüğü üzerine çarpıcı bir analiz.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - 'Hislerle Mühendislik' Yapmaya Son: Evals Nedir?
- 04:15 - Altın Veri Seti (Golden Dataset) Nasıl Hazırlanır?
- 08:35 - LLM-as-a-Judge Mimarisi ve Puanlama Rubrikleri
- 13:20 - Egzersiz: Takımınızın en kritik promptu için 5 testlik bir Eval veri seti yazın


<div style="page-break-after: always;"></div>

---

# Ders 53: Fine-Tuning vs. RAG: Takımınız Hangi Senaryoda Hangisini Seçmeli?

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Her şeye 'Hemen bir model eğitelim (fine-tune)' diyen hype kurbanlarına son: Ne zaman RAG, ne zaman Fine-Tuning, ne zaman sadece Few-Shot prompt seçilmeli?

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir öğrenciye sınavı kazandırmak gibidir. Öğrencinin eline açık kitap sınavında kitaptan ilgili sayfayı açıp verirsen bu RAG'dir (Hızlı, güncel, kolay). Öğrenciye tıp fakültesi jargonu veya özel bir cerrahi el becerisi kazandırmak için aylarca eğitim verirsen bu Fine-Tuning'dir (Pahalı, üslup değiştirir ama yeni bilgiyi ezberletemez). Bilgi için RAG, üslup ve biçim için Fine-Tuning seçilir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Bilgi Kaynağı** | Her yeni bilgide modeli tekrar eğitmeye (Fine-Tuning) çalışıp batmak. | Dinamik şirket verileri için RAG, format ve üslup için hafif Fine-Tuning kullanmak. |
| **Maliyet ve Bakım** | Aylarca GPU kirası ödeyip modeli sürekli drift ile uğraştırmak. | Vektör veritabanı (Qdrant/Pinecone) ve anlık context enjeksiyonu ile %90 daha ucuza çözmek. |
| **Güncellik Hızı** | Statik model ağırlıklarının ilk haftada eskimesi. | Doküman değiştiği an saniyesinde güncellenen RAG indeksleri. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Altın Kural: Daima en basitten başla: 1) Few-Shot Prompt -> 2) RAG -> 3) Fine-Tuning. Asla doğrudan fine-tuning ile başlama.
- 2. Bilgi mi, Biçim mi? (Fact vs Form): Eğer modele yeni bir bilgi öğretmek istiyorsan RAG seç. Modelin konuşma biçimini veya özel bir kod sözdizimini öğretmek istiyorsan Fine-Tuning seç.
- 3. Hibrit Yaklaşım: Büyük şirketlerde en iyi sonuç: Küçük bir açık kaynaklı modeli şirket kod stiliyle fine-tune edip, şirket dokümanlarını RAG ile beslemektir.
- 4. Maliyet-Getiri Analizi: Fine-tune yapmadan önce hesapla: 20.000$ GPU ve mühendislik maliyetine değer mi, yoksa RAG ile ayda 50$ API parası vermek mi daha karlı?

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir hukuk yazılımı şirketi 'Tüm kanunları yapay zekaya ezberleteceğiz' diyerek 6 ay ve 120.000$ harcayıp Llama modelini fine-tune etti. 1 ay sonra Meclis yeni bir kanun çıkarınca model anında eskidi ve çöp oldu. Yeni lead Murat projeyi devraldı: Fine-tune modelini çöpe attı; 2 haftada standart bir Claude API + Qdrant RAG mimarisi kurdu. Kanunlar değiştikçe vektör veritabanı 1 saniyede güncellendi. Sistem %100 güncel kaldı ve maliyet %90 düştü.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Mimari Karar Matrisi: Fine-Tuning mi yoksa RAG mi?
```text
Şirketimizde şu problemi yapay zeka ile çözmek istiyoruz: [PROBLEM VE VERİ TİPİ: Örn: 10 yıllık kurum içi Java kütüphanemizi yazılımcılara hatasız kullandırmak]. Sen bir Baş AI Mimarısın. Bize: 1) Bu senaryoda RAG vs Fine-Tuning vs Few-Shot seçeneklerini maliyet, güncellik, bakım zorluğu ve başarı oranı kriterleriyle karşılaştıran bir ADR (Architecture Decision Record) hazırla, 2) Nihai tavsiyeni ve nedenini açıkla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Hemen kendi yapay zekamızı eğitelim!' diye milyon dolarları yakan vizyonsuz CTO'lar komedisi. RAG ve Fine-Tuning arasındaki farkın en basit analojilerle anlatımı ve şirketlerin parasını koruyan mühendislik aklı.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Fine-Tuning Modası ve Boşa Harcanan Milyon Dolarlar
- 04:15 - Bilgi vs. Biçim (Fact vs Form) Kuralı
- 08:35 - RAG Mimarisi Ne Zaman Rakipsizdir?
- 13:20 - Egzersiz: Takımınızın kullanım senaryosu için 1 sayfalık RAG vs Fine-Tuning karar belgesi hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 54: Etik, Telif Hakları ve Şirket Fikri Mülkiyetini (IP) Koruma Rehberi

> **Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Şirketinizi gelecekteki telif davalarından, fikri mülkiyet (IP) kaybından ve regülasyon cezalarından koruyacak kurumsal yapay zeka yönetişimi ve etik manifestosu.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Fabrikana ham madde alırken kaçak, çalıntı veya zehirli malzeme sokmazsın; çünkü polis fabrikayı mühürler. Yapay zekaya da nereden geldiği belirsiz korsan kodları veya başkalarının telifli algoritmalarını sokamazsın. Lider fabrikanın kapısındaki gümrük muhafızıdır; şirketin namusunu ve fikri mülkiyetini korur.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Telif Riski** | Yazılımcıların AI çıktısını kontrolsüzce şirketin patentli ürününe yapıştırması. | Telif hakları filtreleri açık (Public Code Match: OFF) ve lisans taraması zorunlu geliştirme. |
| **Model Eğitimi İzni** | Ücretsiz AI servislerine veri verip şirketin gizli algoritmalarını üçüncü partilere eğitmek. | 'Zero Data Retention' (ZDR) kurumsal sözleşmeleri ile verinin model eğitiminde kullanılmasını yasal olarak yasaklamak. |
| **Etik ve Önyargı** | Kredi veya işe alım algoritmalarındaki cinsiyet/ırk önyargılarını umursamamak. | Yapay zeka modellerine düzenli Fairness ve Bias testleri uygulamak. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Zero Data Retention (ZDR) Sözleşmeleri: OpenAI, Anthropic veya AWS ile kurumsal anlaşma yaparken 'Verilerimiz asla model eğitiminde kullanılamaz' maddesini şart koş.
- 2. Fikri Mülkiyet (IP) Kalkanı: Geliştiricilere açık kaynak ve AI kod kullanım sınırlarını anlatan 'Kurumsal AI Politikası' belgesini imzalat.
- 3. EU AI Act ve Regülasyon Uyumu: Sisteminizin risk kategorisini (Minimal, Sınırlı, Yüksek Risk) belirle; yüksek riskli kararlarda insan denetimini şart koş.
- 4. Hallucination Disclaimers: Müşteriye sunulan yapay zeka çıktılarında yasal sorumluluk reddi ve denetim kayıtları (Audit Trail) tut.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir fintech şirketi, kredi onaylama motoruna bir yapay zeka modeli entegre etti. 3 ay sonra denetçiler, modelin kadın başvuranlara haksız yere %40 daha düşük kredi skoru verdiğini (algoritmik önyargı) ortaya çıkardı. Şirket büyük bir skandalla sarsıldı ve ceza aldı. Yeni lead Ece duruma el koydu: Yapay zeka yönetişim komitesi kurdu, modele Fairness ve Debiasing testleri getirdi ve kredi kararlarında son onayı insan uzmanlara bağlayan bir denetim süreci başlattı. Şirketin itibarı kurtarıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Mühendislik Takımı İçin Kurumsal AI Kullanım ve Etik Politikası
```text
Yazılım şirketimiz için hem yenilikçiliği destekleyen hem de fikri mülkiyeti, telif haklarını ve müşteri verilerini %100 koruyan 1 sayfalık 'Kurumsal AI ve Etik Kullanım Politikası' hazırla. Şunları içersin: 1) Onaylı ve yasaklı araçlar, 2) Müşteri verisi ve kaynak kod paylaşım kuralları, 3) Açık kaynak lisans risklerine karşı önlemler, 4) İhlal durumunda yaptırımlar.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Şirket sırrını ChatGPT'ye anlatan yazılımcı' fiyaskosu. Telif davaları, algoritmik önyargılar ve modern bir liderin şirketini yasal felaketlerden nasıl koruyabileceği üzerine düşündürücü ve esprili bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Fikri Mülkiyet Kabusu: AI Üretimi Kod Kime Aittir?
- 04:15 - Zero Data Retention ve Kurumsal Gizlilik Sözleşmeleri
- 08:35 - Algoritmik Önyargı ve EU AI Act Uyum Rehberi
- 13:20 - Egzersiz: Takımınız için 1 sayfalık 'Onaylı AI Kullanım Manifestosu' yazın


<div style="page-break-after: always;"></div>

---

# Ders 55: Mikro Yönetici Olmadan Yüksek Otonomi Sağlamak: Extreme Ownership & Autonomous Pods

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Mühendislerin tepesinde dikilip 'Şu değişkenin adını şöyle yap' demek liderlik değil, acizliktir. Bağlam verip kontrolü devretmek (Context over Control) ve otonom hücreler kurmak.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir futbol teknik direktörünün maç sırasında sahaya girip futbolcunun ayağını tutup 'Topa şöyle vur' demesine benzer. Sahaya girersen kırmızı kart görürsün. Teknik direktör taktiği verir, antrenmanda oyuncuyu hazırlar, maç başladığında ise kenardan oyunu okur ve oyuncunun inisiyatif almasına güvenir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yönetim Tarzı** | Kontrol (Control): 'Nasıl yapacağını ben söyleyeceğim, sadece dediklerimi yap.' | Bağlam (Context): 'Hedefimiz bu, kısıtlarımız bunlar; nasıl çözeceğinizi siz belirleyin.' |
| **Hata Durumunda** | Mühendisi azarlayıp tüm yetkilerini elinden almak. | Extreme Ownership: 'Lider olarak yeterli bağlamı ve guardrail'ı veremediğim için sorumluluk benimdir.' |
| **Takım Hızı** | Her karar için lead'in onayının beklenmesi (Devasa darboğaz). | Otonom hücrelerin (Pods) bağımsız kararlar alıp hızla ilerlemesi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Netflix Modeli (Context Not Control): Mühendise ne yapacağını değil; iş hedefini, müşteri acısını ve bütçe sınırlarını açıkla.
- 2. Extreme Ownership (Jocko Willink): Bir şey patladığında suçu astlarına atma; 'Ben lider olarak neyi eksik anlattım?' sorusuyla sorumluluğu al.
- 3. Otonom Pod Yapısı: Takımı 3-4 kişilik küçük, kendi içinde ürün, tasarım ve mühendislik kararını alabilen bağımsız hücrelere (Pods) böl.
- 4. Guardrail ile Güvenlik Sağla: Otonomi kaos demek değildir; katı testler, linterlar ve otomatik CI/CD kapıları otonominin emniyet kemeridir.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir e-ticaret lead'i her PR'ı bizzat inceliyor, her teknik kararı tek başına veriyordu. Takım günde en fazla 2 PR kapatabiliyordu ve mühendisler inisiyatif almayı tamamen bırakmıştı. Lead tatile çıktığı 1 haftada hiçbir iş yapılmadı. Döndüğünde şok oldu ve yönetim tarzını değiştirdi: Takımı 'Ödeme Podu' ve 'Kargo Podu' olarak ikiye böldü. Her poda karar alma otonomisi verdi, CI kapılarını güçlendirdi. 2 ayda takımın PR hızı 5 katına çıktı; mühendisler işlerine yeniden aşık oldu.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Mikro Yönetimden Otonom Pod Yapısına Geçiş Kılavuzu
```text
Ben 10 kişilik bir yazılım takımının lideriyim. Kendimi sürekli takımın her işine müdahale ederken ve darboğaz oluştururken buluyorum. Takımımı mikro yönetimden kurtarıp yüksek otonomili 2 bağımsız 'Pod' haline getirmek istiyorum. Bana: 1) Netflix'in 'Context Not Control' ilkesini takımıma uygulayacak 4 adımlık dönüşüm planı yaz, 2) Takımın karar almasını hızlandıracak 'Yetki Devir Matrisi' (Delegation Poker) hazırla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Tüm gün yazılımcıların başında dikilen kontrol delisi patron' parodisi. Mikro yönetimin yetenekleri nasıl öldürdüğü ve Extreme Ownership ile otonom takım kurmanın yarattığı inanılmaz özgürlük üzerine ilham dolu bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Mikro Yönetim Hastalığı: Kendi Takımınızın Darboğazı Olmayın
- 04:15 - Netflix Felsefesi: Kontrol Değil Bağlam Yönetimi (Context Not Control)
- 08:35 - Extreme Ownership: Başarı Takımın, Hata Liderindir
- 13:20 - Egzersiz: Takımınız için 1 adet 'Yetki Devir ve Otonomi Sözleşmesi' hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 56: Bireysel Öğrenme ve AI Trendlerini Filtreleme: FOMO'ya Kapılmadan Öncü Kalmak

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Her gün Twitter/X ve LinkedIn'de çıkan 50 yeni AI aracının yarattığı bilgi obezitesi ve FOMO (Gelişmeleri kaçırma korkusu) ile başa çıkmak: Sinyali gürültüden ayıran bilgi filtresi.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Açık büfe bir restorana gittiğinde masadaki 200 çeşit yemeğin hepsini aynı anda tabağına doldurmaya çalışırsan miden bulanır, hiçbirinin tadını alamazsın. Akıllı gurme sadece en taze, en besleyici 2 yemeği seçer ve afiyetle yer. Bilgi dünyasında da her trende atlamak bilgi obezliği yapar; sadece derinliği olanı seçeceksin.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Bilgi Tüketimi** | Günde 3 saat sosyal medyada hype tweetleri okuyup sürekli yetersiz hissetmek (FOMO). | Haftada 2 saat akademik makale özetleri, resmi release logları ve gerçek vaka analizleri okumak. |
| **Teknoloji Seçimi** | Her yeni çıkan framework'ü hemen production'a sokup sistemi kobay faresi yapmak. | Teknolojiyi en az 6 ay izleyip topluluk ve üretim olgunluğuna baktıktan sonra benimsemek. |
| **Öğrenme Stratejisi** | Yüzeysel araç isimlerini ezberlemek. | Değişmeyen temel bilgisayar bilimi ilkelerini (Dağıtık sistemler, veri yapıları, mimari) derinleştirmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Lindy Etkisi (The Lindy Effect): Bir teknoloji ne kadar uzun süredir hayattaysa, gelecekte de o kadar uzun süre yaşar. Linux, SQL ve HTTP'yi anlamak, bugün çıkan süslü bir AI kütüphanesinden 100 kat daha değerlidir.
- 2. Sinyal / Gürültü Filtresi: Sosyal medya gürültüsünü kapat; küratörlü bültenleri (InfoQ, Thoughtworks Tech Radar, Pragmatic Engineer) takip et.
- 3. 5 Saat Kuralı: Haftada en az 5 saatini yeni bir teknoloji üzerinde bizzat ellerini kirleterek (Hands-on POC) deneysel prototipler yapmaya ayır.
- 4. NotebookLM ile Haftalık Sentez: Haftanın en önemli 5 teknik makalesini NotebookLM'e atıp sesli özetini dinle; zamanını 10 kat verimli kullan.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yazılım lead'i her gördüğü yeni yapay zeka framework'ünü takıma zorla kullandırmaya çalışıyordu. 1 yılda takım 4 farklı framework değiştirdi; hiçbir proje tamamlanamadı ve mühendisler isyan etti. Şirketin CTO'su lead ile konuştu ve Thoughtworks Tech Radar disiplinini getirdi: Bir teknoloji 'Adopt' seviyesine gelmeden production'a sokulamaz kuralı konuldu. Lead enerjisini mimari temellere yöneltti; takım üzerindeki baskı kalktı ve teslimatlar düzene girdi.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Haftalık Teknik Trend ve Makale Sentezleyici Prompt
```text
Aşağıda bu hafta yazılım dünyasında çok konuşulan 3 yeni teknoloji ve makale özeti yer almaktadır: [ÖZETLER]. Sen bir Principal Technology Strategist'sin. 1) Bu teknolojilerin hangisinin geçici bir 'Hype / Gürültü', hangisinin kalıcı bir 'Mimari Sinyal' olduğunu Lindy Etkisi prensibiyle analiz et, 2) Bir mühendislik takımı için somut uygulanabilirlik puanı ver (1-10), 3) Lider olarak bilmem gereken en kritik 3 stratejik çıkarımı yaz.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Her hafta yeni bir Javascript framework'ü veya AI kütüphanesi çıkmasından kafayı yiyen yazılımcı' feryadı. Bilgi obezitesinden kurtulmanın yolları, Lindy etkisi ve 20 yıl sonra da dimdik ayakta kalacak mühendislik bilgelikleri üzerine harika bir podcast.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - AI Bilgi Obezitesi ve FOMO Tuzağı
- 04:15 - Lindy Etkisi: Değişmeyen Mühendislik İlkelerine Odaklanmak
- 08:35 - Thoughtworks Tech Radar ile Takım Teknolojilerini Filtrelemek
- 13:20 - Egzersiz: Takımınız için 1 sayfalık 'Teknoloji Kabul ve Değerlendirme Radarı' oluşturun


<div style="page-break-after: always;"></div>

---

# Ders 57: Şirket İçi Mühendislik Kültürü Yaratmak: Hackathonlar, Guildler ve AI Labs

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Mühendisleri sadece bilet kapatan mutsuz işçiler olmaktan çıkarıp inovasyon motoruna dönüştürmek: Spotify tarzı Guild yapılanması, çeyreklik Hackathonlar ve iç AI laboratuvarları.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Toprağa sadece tohum ekip su vermezsen orası çöl kalır; ama toprağı gübreler, güneş almasını sağlar ve etrafına çit çekersen orası yemyeşil bir meyve bahçesine dönüşür. Şirket kültürü o topraktır. Sadece bilet verirsen fabrika olursun; hackathon ve guild ortamı yaratırsan dünyanın en parlak beyinlerini çeken bir akademi olursun.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Takım İçi İnovasyon** | 'Bizde yeni fikirleri sadece ürün yöneticileri düşünür, siz koda bakın.' | Her çeyrek 2 günlük Hackathon düzenleyip en iyi projeleri doğrudan production'a almak. |
| **Bilgi Paylaşımı** | Takımların birbirinden habersiz, kendi silolarında yaşaması. | Frontend, Backend, AI ve Güvenlik Guildleri kurup şirket çapında standartları yaymak. |
| **Motivasyon Kaynağı** | Sadece maaş ve zorunlu mesai baskısı. | Teknik prestij, öğrenme heyecanı ve patent/açık kaynak üretme gururu. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Guild (Lonca) Yapılanması: Farklı takımlardaki aynı uzmanlıkları (örn: AI Guild, Backend Guild) ayda 1 kez bir araya getirip ortak standartları tartıştır.
- 2. Çeyreklik Hackathon: Her çeyreğin sonunda 48 saatlik 'Gemiye Bindir' (Ship-It) hackathonu yap; birinci olan projeyi canlıya al.
- 3. Mühendislik Blogu ve Tech Talks: Takım üyelerinin öğrendiklerini şirket blogunda yazmasını ve dış konferanslarda konuşmasını teşvik et.
- 4. AI Labs İnovasyon Fonu: Mühendislere mesai saatlerinin %10'unu şirketin verimliliğini artıracak deneysel yapay zeka ajanları geliştirmeye ayırma hakkı tanı.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Geleneksel bir sigorta şirketinde yazılımcılar sıkıntıdan patlıyordu ve en iyi mühendisler start-up'lara kaçıyordu. Yeni lead Melike göreve geldiğinde 'AI İnovasyon Guild'i' ve ilk şirket içi Hackathon'u başlattı. Bir junior mühendis hackathon'da hasar tespiti yapan bir AI görüntü işleme prototipi yaptı. Şirket CEO'su projeyi gördü ve 500.000$ bütçe ayırarak ana ürüne entegre etti. Şirket içi işten ayrılma oranı %45'ten %6'ya düştü; dışarıdan yüzlerce kıdemli yazılımcı şirkete başvurmaya başladı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Şirket İçi Mühendislik Hackathonu ve Guild Kurulum Kılavuzu
```text
50 kişilik bir mühendislik departmanında çalışanları heyecanlandıracak, siloları kıracak ve yapay zeka odaklı yenilikçi fikirler üretecek 2 günlük bir 'İç Mühendislik Hackathonu (Ship-It Days)' ve 'AI Guild Tüzüğü' planı hazırla. Şunları içersin: 1) Hackathon kuralları, değerlendirme jürisi ve ödülleri, 2) Aylık Guild toplantı gündem formatı, 3) Şirket yönetimine bu kültürün getireceği iş faydasını anlatan 3 argüman.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Pazartesi sendromuyla sadece bilet kapatmaya gelen zombi mühendisler' tablosu. Hackathonların ve Guildlerin bir şirketi nasıl Silikon Vadisi enerjisiyle doldurduğu üzerine coşkulu ve motive edici bir sohbet.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Bilet Fabrikasından İnovasyon Akademisine Dönüşüm
- 04:15 - Guild Mimarisi: Siloları Kırmak ve Standart Yaymak
- 08:35 - 48 Saatlik Hackathon Nasıl Düzenlenir? (Ship-It Days)
- 13:20 - Egzersiz: Takımınız için ilk AI Guild buluşmasının gündemini hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 58: Çoklu Takımları (Squad of Squads) Yönetmek: Staff+ Mühendislerle Eşleşme

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Tek bir 6 kişilik takımı yönetmekle, 5 farklı takımdaki 40 mühendisi orkestre etmek arasındaki uçurum: Staff/Principal mühendislerle stratejik ittifak kurmak ve organizasyonel ölçeklenme.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Tekne kaptanı olmakla dev bir uçak gemisi filosunun amirali olmak arasındaki farktır. Tekne kaptanı dümeni bizzat tutar; ama amiral 10 farklı geminin kaptanına telsizle stratejiyi bildirir. Staff mühendisler o gemilerin baş seyir subaylarıdır; amiral onlarla yan yana çalışmazsa filo birbirine çarpar.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Yönetim Kapsamı** | Her takımdaki her yazılımcının biletini ve 1-on-1'ını tek tek yapmaya çalışıp boğulmak. | Takım liderleri ve Staff mühendisler üzerinden kaldıraçlı liderlik yapmak. |
| **Karar Mekanizması** | Tüm mimari kararları yukarıdan dikte etmek (Fildişi kule mimarlığı). | Staff mühendislerle 'Mimari Konsey' (Architecture Review Board) kurup konsensüsle ilerlemek. |
| **İletişim Ritmi** | Haftada 40 saat toplantı maratonunda erimek. | Asenkron durum panoları, AI çapraz bağımlılık analizleri ve haftalık 1 strateji brifingi. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İkili Liderlik Modeli (EM + Staff Archetype): Engineering Manager/Lead insanı ve teslimatı yönetir; Staff Engineer ise teknik vizyonu ve derinliği yönetir. Bu iki rol rakip değil, simbiyotik ortaktır.
- 2. Çapraz Takım Bağımlılıkları (Cross-Team Dependencies): Takımlar arasındaki tıkanıklıkları erkenden teşhis eden ortak API sözleşmeleri ve bağımlılık matrisi kur.
- 3. Mimari İnceleme Kurulu (Architecture Review Board - ARB): Şirket çapında kritik değişiklikler için haftalık 1 saatlik hafif (lightweight) RFC onay kurulu topla.
- 4. Lider Yetiştiren Lider Ol: Başarın artık kodla değil; yetiştirdiğin ve yetki devrettiğin yeni takım liderlerinin başarısıyla ölçülür.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Hızla büyüyen bir unicorn start-up'ta mühendis sayısı 1 yılda 10'dan 60'a çıktı. Eski lead tüm kararları tek başına almaya devam edince tüm projeler durma noktasına geldi ve takımlar birbirinin kodunu ezmeye başladı. Yeni gelen Director Eren, Staff mühendisleri belirledi. 'Takımların Takımı' modeline geçti: 5 bağımsız squad kurdu, her squad'ın başına bir Team Lead, teknik koordinasyon için ise 2 Principal Engineer atadı. AI ile takımlar arası bağımlılık radarı kurdu. Teslimat hızı 4 katına çıktı ve kaos düzene dönüştü.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ Çoklu Takım (Squad of Squads) Çapraz Bağımlılık ve Mimari Hizalanma Planlayıcı
```text
40 yazılımcıdan oluşan ve 5 farklı mikroservis takımına bölünmüş bir mühendislik departmanını yönetiyorum. Takımlar arasındaki mimari uyumsuzlukları ve gizli bağımlılıkları engellemek için: 1) Staff+ mühendislerle Engineering Manager'lar arasındaki rol paylaşım protokolünü tanımla, 2) Haftalık 45 dakikalık 'Architecture Review Board (ARB)' tüzüğü ve karar şablonu hazırla, 3) Takımlar arası blokajları AI ile asenkron takip etme mekanizması tasarla.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Şirket büyüyünce her şeyin kilitlenmesi' kabusu. 1 takımı yönetmekle 5 takımı yönetmek arasındaki uçurum, Staff mühendislerle kurulan stratejik ortaklık ve orkestrasyon dehası üzerine derin bir yönetim analizi.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Ölçeklenme Tuzağı: 10 Kişiden 50 Kişiye Geçerken Şirketler Neden Kilitlenir?
- 04:15 - EM ve Staff+ Mühendis Ortaklığı: Görev Dağılımı
- 08:35 - Çapraz Takım Bağımlılıklarını Asenkron Yönetmek
- 13:20 - Egzersiz: 3 takımın ortak çalışacağı bir proje için Architecture Review Board (ARB) şablonu hazırlayın


<div style="page-break-after: always;"></div>

---

# Ders 59: CTO Yol Haritası: Teknik Derinlikten Şirket Vizyonu Belirleyiciliğine

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Team Lead'likten CTO koltuğuna uzanan kariyer yolculuğu: Kodun efendisi olmaktan; şirket stratejisini, sermaye tahsisini ve teknolojik vizyonu belirleyen tepe yöneticiye dönüşüm.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> Bir şantiyede harç karan ustabaşı olmaktan (Junior), inşaatın mühendisi olmaya (Senior), oradan tüm şantiyelerin koordinatörlüğüne (Lead), en sonunda ise tüm kentin imar planını çizen ve parayı yöneten şehircilik bakanı olmaya (CTO) benzer. CTO kentin sadece bugünkü binalarını değil, 20 yıl sonra nereden metro geçeceğini planlayan vizyonerdir.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Zaman Ufku** | Gelecek sprint veya gelecek ay (Taktiksel). | Önümüzdeki 2 ila 5 yılın teknoloji ve iş vizyonu (Stratejik). |
| **Sorumluluk Alanı** | Kodun çalışması ve pipeline'ın yeşil olması. | Şirketin piyasa değeri, karlılığı, regülasyon güvenliği ve sektördeki teknolojik rekabet gücü. |
| **Yetenek Odaklılık** | Bireysel kodlama becerisi. | Dünyanın en iyi liderlerini ve mimarlarını şirkete çeken bir kültür ve vizyon inşa etmek. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. Üç Ayaklı CTO Taburesi: 1) İş Vizyonu (Şirket nasıl para kazanacak?), 2) Teknoloji Stratejisi (Hangi mimari bizi geleceğe taşır?), 3) İnsan & Kültür (Bu vizyonu kim inşa edecek?).
- 2. Sermaye Tahsisi (Capital Allocation): Mühendislik bütçesini (Maaşlar, Bulut, AI harcamaları) bir yatırımcı gibi yönet; her harcanan doların şirket değerine çarpan etkisini hesapla.
- 3. Kurumsal Diplomasi: CEO, CFO ve Yönetim Kurulu ile güvene dayalı, şeffaf bir ortaklık kur; teknolojiyi bir maliyet merkezi değil, şirketin ana gelir motoru yap.
- 4. Geleceği Bugünden Görmek: AI devrimi gibi sismik dalgaları erkenden görüp şirketin iş modelini tehditler fırsata dönüşmeden önce dönüştür.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Geleneksel bir lojistik şirketi batmak üzereydi çünkü rakipleri yapay zeka ile rota optimizasyonu yapıyordu. Şirketin kıdemli Team Lead'i Selçuk, CEO'nun karşısına çıktı ve 3 yıllık 'Otonom Lojistik ve AI Dönüşüm Manifestosu' sundu. Şirketin tüm eski filo yazılımını modernize edecek planı sundu. CEO onu CTO koltuğuna getirdi. Selçuk şirketi 2 yılda bölgenin en teknolojik lojistik platformuna dönüştürdü; şirketin cirosu 4 katına çıktı ve 100 milyon dolarlık rekor değerlemeyle yabancı bir fona satıldı.

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ CTO Seviyesi 3 Yıllık Teknoloji Stratejisi ve Dönüşüm Manifestosu
```text
Ben bir yazılım şirketinde CTO koltuğuna hazırlanan bir Mühendislik Direktörüyüm. Şirketimiz şu sektörde faaliyet göstermektedir: [SEKTÖR: E-ticaret / Fintech / SaaS]. Yönetim Kuruluna sunulmak üzere 3 yıllık bir 'Stratejik Teknoloji ve AI Dönüşüm Manifestosu' hazırla. Şunları içersin: 1) Sektördeki AI tehditleri ve fırsatları, 2) 3 yıllık mimari modernizasyon fazları, 3) Sermaye tahsisi ve ROI projeksiyonu, 4) Şirketi en iyi mühendislerin çalışmak istediği bir mıknatısa dönüştürecek kültür vizyonu.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Kod yazmayı bırakan yazılımcı ne iş yapar?' sorusuna yanıt arayan iki uzman. Bir Team Lead'in nasıl adım adım düşünce ufkunu genişleterek bir şirketin kaderini belirleyen bir CTO'ya dönüştüğü üzerine ilham dolu ve ufuk açıcı bir diyalog.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Zirveye Yolculuk: Team Lead'likten CTO Koltuğuna
- 04:15 - Üç Ayaklı CTO Taburesi (İş, Teknoloji, İnsan)
- 08:35 - Sermaye Tahsisi: Mühendislik Bütçesini Yatırımcı Gibi Yönetmek
- 13:20 - Egzersiz: Şirketiniz için 3 yıllık 1 sayfalık 'CTO Teknoloji Vizyon Belgesi' yazın


<div style="page-break-after: always;"></div>

---

# Ders 60: Geleceğin Yazılım Mühendisliği Ekosistemi: İnsan-Yapay Zeka Ortaklığı Manifestosu

> **Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Kısa Özet & Zihniyet Dönüşümü
Yolculuğun son dersi ve yeni dönemin başlangıcı: Yazılım mühendisliği ölmüyor, kabuk değiştiriyor. İnsanın empati, yaratıcılık ve sistem aklıyla; yapay zekanın sonsuz hızının birleştiği büyük gelecek manifestosu.

---

### 💡 Aptala Anlatır Gibi (ELI5) & Hikaye
> İnsanlığın ateşi bulduğu gün çiğ et yemek bitti ve medeniyet başladı. Elektriğin bulunduğu gün karanlık bitti ve sanayi devrimi başladı. Yapay zeka yazılımın elektriğidir. Karanlıkta tek tek tuşlara basıp kod ameleliği yaptığımız ilkel dönem bitti; artık yapay zekanın ışığında galaksileri inşa eden modern mimarlar olma çağı başladı.

---

### ⚖️ Eski Usul vs. AI Destekli Yaklaşım
| Konu / Boyut | Eski Usul (Legacy Lead) | AI Destekli Modern Yaklaşım |
|---|---|---|
| **Mühendislik Tanımı** | Kod yazan, döngü kuran, syntax ezberleyen insan teknisyen. | Karmaşık problemleri anlayan, empati kuran, sistemleri tasarlayan ve AI ordusunu yöneten orkestra şefi. |
| **Gelecek Korkusu** | 'Yapay zeka beni işsiz bırakacak' korkusuyla teknolojiye direnmek. | 'Yapay zekayı kullanan mühendisler, kullanmayanların yerini alacak' bilinciyle öncü olmak. |
| **Kalıcı Değer** | Ezberlenmiş programlama dili bilgisi. | Karakter, etik, eleştirel düşünme, sistem tasarımı ve insani liderlik. |

---

### 🚀 Adım Adım Eylem Çerçevesi (Actionable Framework)
- 1. İnsan-AI Simbiyozu Manifestosu: Yapay zeka kuluçkadaki motorumuzdur; ancak direksiyon, ahlak, yön ve vizyon daima insanın elindedir.
- 2. Asla Vazgeçilmeyecek İnsani Süper Güçler: 1) Derin Empati (Kullanıcının gerçek acısını hissetmek), 2) Eleştirel Şüphecilik (AI çıktısını sorgulamak), 3) Yaratıcı Cesaret (Henüz var olmayan mimarileri hayal etmek).
- 3. Öğrenmeyi Öğrenmek: Geleceğin en büyük lideri en çok şeyi bilen değil; yeni bir paradigmayı en hızlı öğrenip takımına aşılayandır.
- 4. Mezuniyet Andı: Bugünden itibaren klavyene sadece kod yazmak için değil; insanlara ilham vermek, sistemleri adil kılmak ve dünyayı daha iyi bir yer haline getirmek için dokunacaksın.

---

### 🚨 Gerçek Hayat Vaka / Kriz Analizi (Case Study)
Bir yazılım mühendisi 10 yıl boyunca 'Sadece kodumu yazarım, gerisine karışmam' diyerek yaşadı. AI çıktığında derin bir varoluşsal krize girdi. Bu kitabın ilk dersinden son dersine kadar olan metodolojileri uyguladı: İletişimini güçlendirdi, mimari vizyon kazandı, takımına AI guardrail'ları kurdu ve organizasyonel bir lider haline geldi. 1 yıl sonra şirketin Mühendislik Direktörlüğüne terfi ettiğinde ekibine şöyle dedi: 'Yapay zeka kodumu elimden almadı; yapay zeka beni kod ameleliğinden kurtarıp gerçek bir mühendis ve lider yaptı.'

---

### 🤖 Kullanıma Hazır AI Promptları & Şablonlar
#### 🛠️ AI Çağında Yazılım Liderliği Nihai Yemini ve Gelecek Manifestosu
```text
Bu kitabı tamamlayan bir yazılım lideri olarak kendime ve takımıma rehberlik edecek 'İnsan-AI Ortaklığı ve Mühendislik Liderliği Manifestosu' hazırla. Şunları içersin: 1) Kod yazmaktan sistem tasarlamaya geçiş andı, 2) Yapay zekayı bir köle veya tehdit değil, güçlü bir çarpan olarak kullanma ilkeleri, 3) İnsan onurunu, psikolojik güvenliği ve sürekli öğrenmeyi koruma taahhüdü, 4) Son söz: Geleceğe cesaretle adım atma çağrısı.
```

---

### 🎙️ NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 60 derslik bu devasa serüvenin muhteşem finali. İlk dersteki o korku dolu, klavyeyi bırakamayan kıdemli yazılımcıdan; multi-agent ordularını yöneten, C-Level ile aynı dili konuşan, ilham veren bir lidere dönüşümün epik hikayesi. Gözleri dolduran, güldüren ve ayağa kalkıp harekete geçiren unutulmaz bir veda ve başlangıç bölümü.

---

### 🎓 Udemy Ders Özeti & Takım Egzersizi
- 00:00 - Büyük Final: 60 Derslik Yolculuğun Zirvesi
- 04:15 - İnsan-Yapay Zeka Ortaklığı Manifestosu
- 08:35 - Geleceğin Yazılım Liderinin 3 Süper Gücü
- 13:20 - Mezuniyet Egzersizi: Kendi Kişisel Liderlik Manifestonuzu İmzalayın!


<div style="page-break-after: always;"></div>

---

