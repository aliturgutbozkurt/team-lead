# -*- coding: utf-8 -*-
"""
Modules 07 & 08:
Module 7: Kriz Yönetimi, Observability ve Incident Leadership (Incident Response & Production Resilience)
Module 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik (Managing Up & Business Alignment)
"""

LESSONS_07_08 = [
    # LESSON 37
    {
        "id": 37,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 37: Cumartesi Gecesi Saat 03:00: Production Çöktüğünde Liderlik ve AI Incident Assistant",
        "title_en": "Lesson 37: Saturday 03:00 AM Outages: Incident Command & AI Triage Assistants",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Sistemler çöktüğünde ve telefonlar çaldığında paniklemeden komutayı ele almak: Incident Commander rolü, sessiz War Room disiplini ve AI ile anlık kök neden analizi.",
        "summary_en": "When the pager screams at 03:00 AM: Incident Command protocols, keeping the War Room calm, and wielding AI triage assistants to stop the bleeding.",
        "eli5_metaphor_tr": "Uçakta türbülans çıktığında yolcular çığlık atabilir; ama kaptan pilot kokpitten anons yapıp 'Ben de çok korktum, ne yapacağız şimdi!' derse herkes delirir. Lider kriz anında en sakin ses tonuna sahip kişidir. Herkes paniklerken o kontrol listesini (checklist) açar ve itfaiyeyi yönetir.",
        "eli5_metaphor_en": "When extreme turbulence hits mid-flight, passengers might panic; if the captain grabs the PA and screams 'I'm terrified, we might crash!' chaos reigns. The Incident Commander must be the calmest voice in the room, methodically executing the emergency checklist.",
        "comparison_table": [
            {"topic": "Kriz Anı Davranışı", "old_way": "Slack kanalında 15 kişinin aynı anda bağırması, herkesin rastgele sunucuları restart etmesi.", "ai_way": "Tek bir Incident Commander (IC), sessiz War Room ve rollere ayrılmış net kriz disiplini."},
            {"topic": "Kök Neden Tespiti", "old_way": "3 saat boyunca milyonlarca log satırında kaybolup kimin ne yaptığına bakmak.", "ai_way": "Son deployment diff'i ve hata loglarını LLM'e verip 2 dakikada şüpheli commit'i bulmak."},
            {"topic": "Öncelik Sırası", "old_way": "Sistem çökmüşken neden çöktüğünü tartışıp kavga etmek.", "ai_way": "Önce yangını söndürmek (Rollback / Traffic Drain); nedenini sonra araştırmak."}
        ],
        "framework_steps_tr": [
            "1. Komuta Zinciri (Incident Command System - ICS): 1 kişi Incident Commander (Karar verir), 1 kişi Scribe (Not tutar ve durumu yazar), diğerleri araştırır.",
            "2. Önce Kanamayı Durdur (Mitigate First, Debug Later): 'Neden oldu?' diye felsefe yapma; hemen son deploy'u revert et veya trafiği yedek kümeye al.",
            "3. AI Incident Triage: Datadog/CloudWatch alarmlarını ve stack trace'i AI incident asistanına akıtıp: 'Bu hata hangi son PR veya servis bağımlılığıyla ilişkili?' teşhisi al.",
            "4. 15 Dakikada Bir Durum Güncellemesi: Ne yapıldığını, neyin test edildiğini tüm paydaşlara şeffafça duyur."
        ],
        "framework_steps_en": [
            "1. Establish Incident Command: 1 Commander (Directs strategy), 1 Scribe (Logs timeline and status), Technical Investigators (Run hypotheses).",
            "2. Mitigate First, Debug Later: Never debate philosophy during an outage; drain traffic, restart pods, or roll back the last deployment immediately.",
            "3. AI Triage Pipeline: Stream real-time alerts into an LLM incident worker: 'Correlate this stack trace with commits merged in the last 4 hours.'",
            "4. Cadenced Status Radiators: Broadcast concise executive status updates every 15 minutes to silence panicked stakeholders."
        ],
        "case_study_tr": "Black Friday gecesi saat 02:30'da Türkiye'nin en büyük e-ticaret sitelerinden birinin ödeme servisi çöktü. 20 yönetici ve yazılımcı Zoom'a girip birbirine bağırmaya başladı. Yeni lead Emre odaya girdi: 'Ben Incident Commander'ım. Lütfen herkes sessiz olsun.' Emre mikrofonları susturdu. AI log özetleyiciye son 30 dakikanın loglarını besledi. Hatanın 02:15'te çıkan bir Redis config güncellemesi olduğu 90 saniyede tespit edildi. Rollback yapıldı, sistem 4 dakikada ayağa kalktı. Milyonlarca liralık satış kurtarıldı.",
        "case_study_en": "During Black Friday at 02:30 AM, a massive retail checkout service crashed. 20 frantic managers and engineers piled into a Zoom room, screaming over each other. Incoming lead Emre joined: 'I am taking Incident Command. Mute all mics except active investigators.' He quieted the chaos, piped exception logs to an LLM analyzer, and isolated a Redis timeout config regression within 90 seconds. Executed rollback; traffic recovered in 4 minutes, saving millions in revenue.",
        "ai_prompts": [
            {
                "title": "Canlı Kriz (Incident) Anında AI Triage ve Kök Neden Analizörü",
                "prompt": "ACİL DURUM: Production ödeme servisimiz şu an 500 hatası veriyor ve p99 yanıt süresi 12 saniyeye çıktı. Aşağıda son 20 dakikanın logları ve son 3 deployment'ın PR başlıkları yer almaktadır: [LOGLAR VE DEPLOYMENTLAR]. Sen bir Principal SRE Incident Commander'sın. 1) Bu çöküşe sebep olan en olası kök nedeni derhal söyle, 2) Kanamayı durdurmak için atılacak İLK acil müdahale adımını (Rollback / Config değişimi / Rate limit) tek cümleyle yaz, 3) Yönetim için 3 cümlelik paniksiz durum bildirimi metni hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Gece saat 03:00'te telefon çaldığında kalp krizi geçiren yazılımcı travması. Kriz anında panikleyen yöneticiler ile soğukkanlı bir Incident Commander arasındaki devasa fark üzerine nefes kesici ve eğlenceli bir podcast.",
        "udemy_outline": [
            "00:00 - Saat 03:00 Kabusu: Telefon Çaldığında Ne Yapmalısınız?",
            "04:15 - Incident Commander Protokolü: Kaostan Düzen Yaratmak",
            "08:35 - Kanamayı Durdur: 'Neden Oldu' Tuzağına Düşmeyin",
            "13:20 - Egzersiz: Takımınız için 1 sayfalık acil durum Incident Runbook'u hazırlayın"
        ]
    },

    # LESSON 38
    {
        "id": 38,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 38: SRE, SLO, SLA ve SLI: İş Birimleri ile Hata Bütçesi (Error Budget) Sözleşmesi",
        "title_en": "Lesson 38: Engineering Reliability: SLOs, SLAs & Error Budget Treaties with Product",
        "level": "İleri / Advanced Lead",
        "summary_tr": "'Sistemimiz %100 ayakta kalmalı' bir fantezidir. İş birimiyle gerçekçi SLO (%99.9) belirlemek ve hata bütçesi tükendiğinde yeni özellikleri durdurup güvenliğe odaklanma kültürü.",
        "summary_en": "100% uptime is an impossible, bankruptcy-inducing myth. Establishing pragmatic SLOs, error budgets, and ironclad feature-freeze treaties with product managers.",
        "eli5_metaphor_tr": "Bir kargo şirketinin 'Her paketi 5 saniyede teslim edeceğiz ve hiçbir paket asla kaybolmayacak' sözü vermesine benzer. Bunu yapmaya kalkarsan her pakete bir helikopter tahsis etmen gerekir ve şirket iflas eder. Akıllı şirket 'Paketlerin %99.9'u zamanında gider, binde bir gecikme hakkımız vardır' der. O binde birlik hak senin hata bütçendir.",
        "eli5_metaphor_en": "A courier service guaranteeing: 'We deliver every package in 5 seconds with zero lost parcels forever.' Achieving that requires giving every envelope its own fighter jet—and instantly bankrupts the business. Sensible logistics operates on 99.9% reliability; the remaining 0.1% is your error budget to innovate and move fast.",
        "comparison_table": [
            {"topic": "Hedef Uptime", "old_way": "'Sistem asla durmamalı, %100 çalışmalı' (Gerçek dışı baskı).", "ai_way": "'%99.9 SLO hedefliyoruz; bu ay 43 dakika kesinti hakkımız (Error Budget) var.'"},
            {"topic": "Bütçe Tükendiğinde", "old_way": "Herkesin birbirini suçlaması, yine de yeni özellik çıkarmaya devam edilmesi.", "ai_way": "Hata bütçesi %0'a indiğinde tüm yeni özelliklerin durdurulup sadece stabilite çalışılması."},
            {"topic": "Müşteri Sözleşmesi", "old_way": "SLA cezalarını cepten ödemek.", "ai_way": "SLI ve SLO'ları AI anomali tespitiyle proaktif izleyip SLA ihlalini önceden engellemek."}
        ],
        "framework_steps_tr": [
            "1. Dörtlüyü Ayırt Et: SLI (Gerçekte ne ölçüyoruz? Örn: Başarılı istek oranı), SLO (Kendi hedefimiz? Örn: %99.9), SLA (Müşteriye tazminat sözümüz? Örn: %99.5), Error Budget (Kalan hata hakkımız).",
            "2. Hata Bütçesi Politikası (Error Budget Policy): Ürün yöneticisiyle yazılı sözleşme imzala: 'Eğer hata bütçemiz biterse o ay yeni feature çıkmayacak, sadece güvenilirlik çalışacağız.'",
            "3. AI ile Anomali Erken Uyarısı: Sistem henüz çökmeden, p99 gecikmesindeki mikro sapmaları tespit eden yapay zeka monitörleri kur.",
            "4. Gerçekçi Dokuzlar (The Cost of Nines): Her eklenen 9 rakamı maliyeti 10 katına çıkarır. %99.999 yerine iş için gerçekten neyin yettiğini belirle."
        ],
        "framework_steps_en": [
            "1. Disentangle the Four Pillars: SLI (What we measure), SLO (Internal reliability target), SLA (Contractual financial penalty threshold), Error Budget (Permitted unreliability).",
            "2. The Error Budget Policy Contract: Sign an executive agreement: 'When our quarterly error budget hits zero, all product feature deployments freeze until reliability is restored.'",
            "3. AI Anomaly Early-Warning: Deploy predictive ML alerts that catch subtle p99 degradation trends hours before user-facing error budgets bleed out.",
            "4. The Cost of Nines: Educate execs that moving from three nines (99.9%) to four nines (99.99%) multiplies cloud infrastructure costs by 5x-10x."
        ],
        "case_study_tr": "Bir fintech şirketinde ürün yöneticisi sürekli yeni özellik istiyor, sistem haftada iki kez çöküyordu. Mühendisler tükenmişti. Yeni lead Canan, şirkete ilk resmi 'SLO & Error Budget' politikasını getirdi. Kasım ayında iki büyük kesinti olunca hata bütçesi tükendi. Canan sözleşmeyi masaya koydu ve 3 hafta boyunca yeni hiçbir özellik çıkarttırmadı; takım tüm açıkları kapattı, altyapıyı düzeltti. Sonraki 6 ay boyunca tek bir kesinti dahi yaşanmadı.",
        "case_study_en": "At a fintech platform, product pushed feature after feature while the core system collapsed twice a week. Engineers were exhausted. Lead Canan ratified the organization's first official 'SLO & Error Budget Treaty'. In November, two major outages liquidated their error budget. Canan invoked the treaty: froze all feature cards for 3 weeks to refactor connection pools and circuit breakers. Zero production incidents occurred over the following 6 months.",
        "ai_prompts": [
            {
                "title": "Ürün ve Mühendislik İçin Hata Bütçesi (Error Budget) Sözleşmesi Tasarımcısı",
                "prompt": "Bir SaaS şirketinin Engineering Lead'iyim. Ürün yöneticimizle aramızdaki güvenilirlik ve hız dengesini kuracak resmi bir 'SLO, SLA ve Error Budget Politikası Sözleşmesi' hazırla. Şunları içersin: 1) p99 gecikmesi ve hata oranı için net SLI/SLO tanımları (%99.9 hedefiyle), 2) Hata bütçesi %100, %50 ve %0 kaldığında takımların alacağı net aksiyon kuralları, 3) C-Level yönetimi bu politikanın şirketi nasıl daha karlı yapacağına ikna eden 1 sayfalık gerekçe."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Bizim sistem %100 çalışmalı!' diyen gerçeklikten kopuk CEO ile Google SRE ilkelerini anlatan bilge Lead. Hata bütçesinin yazılımcıya inovasyon yapma ve hata yapma özgürlüğü veren kutsal bir kalkan olduğu üzerine derin bir sohbet.",
        "udemy_outline": [
            "00:00 - %100 Uptime Efsanesi ve Şirketlerin İflası",
            "04:15 - SLI, SLO, SLA ve Hata Bütçesi (Error Budget) Matematiği",
            "08:35 - Hata Bütçesi Politikası ile Ürün Yöneticisini Frenlemek",
            "13:20 - Egzersiz: Takımınızın kritik servisi için ilk SLO sözleşmesini yazın"
        ]
    },

    # LESSON 39
    {
        "id": 39,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 39: AI Destekli Log & Telemetry Analizi: Milyonlarca Log Arasından İğneyi Bulmak",
        "title_en": "Lesson 39: Observability 2.0: OpenTelemetry, Distributed Tracing & AI Summarizers",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Gözleri bozulan yazılımcıların saatlerce Elasticsearch/Kibana'da log araması çağı kapandı: OpenTelemetry distributed tracing ve LLM log kümeleme ile sorunun kökünü saniyeler içinde yakalamak.",
        "summary_en": "Sifting through 50 million log lines in Kibana is a relic of the past: OpenTelemetry distributed tracing and LLM log synthesis pinpointing cascading faults in seconds.",
        "eli5_metaphor_tr": "Bir otobandaki 10.000 arabanın içinden hangi arabanın motorunun bozulduğunu tek tek arabaları durdurup kaputunu açarak arayamazsın. Otobanın üzerine yerleştirdiğin termal kameralar (Distributed Tracing) hangi arabadan duman çıktığını sana uzaktan tek bakışta gösterir. AI ise o dumanın hangi bujiden çıktığını söyleyen baş tamircidir.",
        "eli5_metaphor_en": "You cannot find a sputtering car engine among 10,000 highway vehicles by pulling each driver over to inspect the spark plugs. Thermal overhead cameras (Distributed Tracing) highlight the single overheating engine immediately. AI is the diagnostic technician pinpointing the exact cracked manifold.",
        "comparison_table": [
            {"topic": "Sorun Arama Yolu", "old_way": "Kibana'da rastgele anahtar kelimelerle arama yapıp binlerce ilgisiz log arasında kaybolmak.", "ai_way": "Correlation ID ve Trace ID ile tek bir isteğin mikroservisler arasındaki tüm yolculuğunu haritalamak."},
            {"topic": "Log Yoğunluğu", "old_way": "Gereksiz her şeyi loglayıp ayda 20.000$ Datadog/Splunk faturası ödemek.", "ai_way": "Akıllı örnekleme (Tail-based sampling) ve AI ile sadece anomalileri saklayarak %70 maliyet tasarrufu."},
            {"topic": "Kök Neden Çözümü", "old_way": "Farklı servislerin loglarını birleştiremeyip suçu diğer takıma atmak.", "ai_way": "AI özetleyicinin zincirleme hatanın ilk hangi serviste başladığını ispatlaması."}
        ],
        "framework_steps_tr": [
            "1. OpenTelemetry Standartı: Her servise vendor-bağımsız OpenTelemetry SDK'sı koy; trace_id'yi tüm HTTP ve Kafka başlıklarında taşı.",
            "2. Structured Logging: Düz metin logları yasakla; daima JSON formatında, aranabilir alanlarla (userId, orderId, durationMs) log üret.",
            "3. Tail-Based Sampling: Başarılı olan rutin isteklerin sadece %1'ini, hata alan veya yavaşlayan isteklerin ise %100'ünü sakla.",
            "4. LLM Log Sentezi: Bir alarm tetiklendiğinde, ilgili trace'in tüm log dökümünü LLM'e besleyip: 'Bu zincirleme çöküşü başlatan ilk mikroservis hangisi?' sorusunu sordur."
        ],
        "framework_steps_en": [
            "1. Universal OpenTelemetry: Instrument services with vendor-agnostic OTel collectors; propagate trace_id headers across HTTP, gRPC, and Kafka streams.",
            "2. Structured JSON Logging: Ban raw unstructured string outputs; require typed key-value JSON fields (userId, tenantId, durationMs).",
            "3. Tail-Based Sampling: Retain only 1% of nominal 200 OK traffic, but capture 100% of anomalies, p99 latency spikes, and 5xx payloads.",
            "4. LLM Trace Correlation: Stream the entire distributed trace waterfall into an LLM: 'Isolate which upstream microservice triggered this cascading deadlock.'"
        ],
        "case_study_tr": "Bir dijital bankada kullanıcılar para transferi yaparken işlem bazen 40 saniye sürüyordu. 4 farklı mikroservis takımı 'Bizde sorun yok, suç diğer serviste' diyerek 2 ay boyunca suçu birbirine attı. Yeni lead Sinan, tüm sisteme OpenTelemetry distributed tracing ekledi ve logları bir AI analiz ajanına bağladı. Ajan, sorunun 4. servisin veritabanında unutulmuş kilitli bir foreign key constraint olduğunu ve diğer tüm servisleri kilitlediğini 15 dakikada kanıtladı. Sorun 1 satırlık indeksle çözüldü.",
        "case_study_en": "At a neobank, wire transfers stalled for 40 seconds intermittently. Four siloed backend squads blamed each other for two months: 'Our logs are clean; it's the account service.' Incoming lead Sinan injected OpenTelemetry tracing across the gateway and fed traces into an LLM analysis bot. Within 15 minutes, the agent proved a cascading thread exhaustion originated from an unindexed foreign-key lock on the ledger table. Fixed with a single SQL index migration.",
        "ai_prompts": [
            {
                "title": "Dağıtık Mimari Log ve Trace Analiz Uzmanı Promptu",
                "prompt": "Aşağıda 4 farklı mikroservis arasındaki dağıtık bir trace'in JSON logları ve gecikme süreleri yer almaktadır: [TRACE JSON]. Sen bir Principal Observability Architect'isin. 1) Bu istek zincirindeki en büyük darboğazı (bottleneck) ve p99 gecikmesine yol açan servisi tespit et, 2) Hatanın zincirleme olarak diğer servislere nasıl yayıldığını açıkla, 3) Veritabanı, connection pool veya network düzeyinde alınması gereken 2 somut optimizasyonu öner."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Bizim serviste sorun yok, suç backend'de!' kavgasını yapan takımların komedisi ve OpenTelemetry ile AI'ın bu dedikodu kültürünü nasıl yok edip gerçeği saniyeler içinde masaya koyduğu üzerine harika bir bölüm.",
        "udemy_outline": [
            "00:00 - Log Cehennemi: Kibana'da Saatlerce Arama Yapmaktan Kurtulun",
            "04:15 - OpenTelemetry ve Distributed Tracing'in Büyüsü",
            "08:35 - Tail-Based Sampling ile Milyon Dolarlık Cloud Faturalarını Düşürmek",
            "13:20 - Egzersiz: Takımınızın servislerine Trace ID correlation mekanizması ekleyin"
        ]
    },

    # LESSON 40
    {
        "id": 40,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 40: Blameless (Suçlamasız) Post-Mortem Kültürü: Hatayı Kurumsal Öğrenmeye Dönüştürmek",
        "title_en": "Lesson 40: Writing Blameless Post-Mortems with AI: Turning Catastrophes into Institutional Wisdom",
        "level": "İleri / Advanced Lead",
        "summary_tr": "'Suçlu kim, Ahmet mi yaptı?' diyen ilkel şirketlerden; 'Sistemimiz nasıl bir tasarıma sahipti ki bir insanın tek bir hatasıyla her şey çöktü?' diyen Google tarzı olgun liderliğe geçiş.",
        "summary_en": "Moving past primitive scapegoating ('Who broke prod?'): Mastering Google-style blameless post-mortems and synthesizing preventive guardrails via AI.",
        "eli5_metaphor_tr": "Küçük bir çocuk mutfakta yürürken yerdeki kaygan deterjana basıp düştüğünde ve vazoyu kırdığında; çocuğu dövmek sorunu çözmez. 'Mutfak zeminine o deterjanı kim döktü, neden paspas çekilmedi, vazo neden dengesiz bir masadaydı?' diye bakarsın. Suçlamasız kültür, çocuğu değil zemini ve masayı düzeltmektir.",
        "eli5_metaphor_en": "When a toddler slips on spilled detergent in the kitchen and knocks over an antique vase, screaming at the child achieves nothing. You ask why detergent was left uncapped, why the floor wasn't dried, and why a fragile vase was perched on a wobbly table edge. Blameless culture fixes the floor and the table so failure cannot recur.",
        "comparison_table": [
            {"topic": "Odak Noktası", "old_way": "'Hatayı kim yaptı?' (Cadı avı, insanları korkutmak ve hataları gizletmek).", "ai_way": "'Sistemimiz neden bu hatayı engelleyemedi?' (Sistemik ve mimari iyileştirme)."},
            {"topic": "Toplantı Atmosferi", "old_way": "Mahkeme salonu gibi gergin, herkesin mazeret ürettiği ortam.", "ai_way": "Merak ve öğrenme odaklı, herkesin şeffafça süreci incelediği bilimsel laboratuvar."},
            {"topic": "Çıktı", "old_way": "Kimsenin okumadığı suçlayıcı bir rapor.", "ai_way": "AI ile çıkarılmış net zaman çizelgesi, 5 Neden analizi ve takvimlenmiş 3 önleyici Jira bileti."}
        ],
        "framework_steps_tr": [
            "1. İnsan Hatası Sonuçtur, Kök Neden Değildir: 'Yazılımcı yanlış butona bastı' kök neden olamaz; 'Neden yanlış basılabilecek bir buton vardı?' kök nedendir.",
            "2. Kronolojik Zaman Çizelgesi (Timeline): Slack logları ve git commit'lerini toplayıp dakikası dakikasına olayın röntgenini çek.",
            "3. AI ile Post-Mortem Sentezi: Tüm ham logları ve mühendis notlarını LLM'e verip standart Google/AWS tarzı Post-Mortem şablonuna döktür.",
            "4. Aksiyon Maddesi Kuralı: Raporun sonunda en az 2 adet önleyici sistemik aksiyon (örn: Guardrail linter, otomatik rollback, DB timeout) Jira'ya açılmalıdır."
        ],
        "framework_steps_en": [
            "1. Human Error is the Starting Point, Never the Root Cause: 'Dev clicked the wrong button' is trivial. 'Why did our UI allow an unverified production drop?' is the systemic truth.",
            "2. Chronological Timeline Reconstruction: Ingest Slack transcripts, git events, and monitoring graphs into a continuous timeline of events.",
            "3. AI Post-Mortem Synthesis: Pass raw incident artifacts to Claude to author a structured, blameless Google SRE-grade post-mortem draft.",
            "4. Systemic Action Items: Close every post-mortem with financed engineering tickets: mutation guardrails, automated circuit-breakers, or chaos drills."
        ],
        "case_study_tr": "Bir fintech firmasında stajyer bir mühendis yanlışlıkla production veritabanını sildi ve 4 saat kesinti oldu. Eski kafalı CEO stajyeri kovmak istedi. Lead Derya göğsünü siper etti: 'Stajyerin production veritabanını silebildiği bir sistem kuran biziz; suç stajyerde değil, bizim mimarimizdedir.' Derya blameless post-mortem yaptı; prod erişim yetkilerini kısıtladı, çift onay mekanizması kurdu. Stajyer şirkette kaldı ve 2 yıl sonra şirketin en iyi güvenlik mühendislerinden biri oldu.",
        "case_study_en": "At a payment company, an intern accidentally executed a drop-table command against a production database, causing a 4-hour blackout. The angry CEO demanded the intern's immediate termination. Lead Derya stood firm: 'If an intern possesses single-click credentials to drop a production database, our architecture is broken, not the intern.' Derya facilitated a blameless post-mortem, introduced IAM role boundaries, and kept the intern. Two years later, that intern became their lead platform security engineer.",
        "ai_prompts": [
            {
                "title": "Google SRE Tarzı Blameless Post-Mortem ve Zaman Çizelgesi Üretici",
                "prompt": "Dün gece yaşanan kesintinin ham notları, Slack konuşmaları ve incident logları şunlardır: [NOTLAR VE LOGLAR]. Sen bir Google Principal Site Reliability Engineer'sın. Bu verilerden profesyonel, objektif ve kesinlikle suçlayıcı olmayan (Blameless) bir 'Incident Post-Mortem Raporu' hazırla. Şunları içersin: 1) Executive Summary & Impact, 2) Minute-by-minute Timeline of Events, 3) 5-Whys Root Cause Analysis, 4) What went well vs What went poorly, 5) 3 adet somut önleyici Jira aksiyon maddesi."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Production'ı patlatan stajyeri asalım mı keselim mi?' komedisi. Cadı avı yapan toksik şirketlerin nasıl çöktüğü ve Blameless kültürün dünyadaki en dayanıklı sistemleri (Google, Netflix, Amazon) nasıl inşa ettiği üzerine harika bir analiz.",
        "udemy_outline": [
            "00:00 - Cadı Avına Son: Neden İnsanları Suçlamak Felaket Getirir?",
            "04:15 - Google SRE Blameless Post-Mortem Anatomisi",
            "08:35 - Slack Konuşmalarını AI ile Kusursuz Zaman Çizelgesine Çevirmek",
            "13:20 - Egzersiz: Takımınızın son krizini Blameless Post-Mortem formatında yeniden yazın"
        ]
    },

    # LESSON 41
    {
        "id": 41,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 41: Chaos Engineering ve Dayanıklılık Testleri: Sistemleri Kasten Çökertmek",
        "title_en": "Lesson 41: Proactive Resilience: AI-Simulated Outages & Chaos Engineering",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Krizin hafta sonu gece yarısı sürpriz yapmasını beklemeyin; sistemlerin fişini mesai saatlerinde kasten çekin: Chaos Monkey felsefesi, GameDay simülasyonları ve AI dayanıklılık ajanları.",
        "summary_en": "Don't wait for disaster to strike at 2 AM on Christmas Eve; deliberately sever network cables on a Tuesday afternoon: Chaos Engineering and AI GameDays.",
        "eli5_metaphor_tr": "Bir itfaiye ekibinin gerçek yangın çıkana kadar hiç tatbikat yapmadan oturup televizyon izlemesi deliliktir. Yangın tatbikatı yaparsın; duman bombası atar, sirenleri çalar ve herkesin kaçış yolunu test edersin. Chaos Engineering yazılımın yangın tatbikatıdır; sistemi kontrollü şekilde ateşe verirsin ki acil durumda kimse paniklemesin.",
        "eli5_metaphor_en": "Firefighters sitting around playing video games for years without a single live drill would be suicidal. You stage surprise fire drills: pop smoke grenades, trigger alarms, and test the hoses. Chaos Engineering is running live drills on your systems so real outages are complete non-events.",
        "comparison_table": [
            {"topic": "Dayanıklılık Testi", "old_way": "'Umarım sunucular çökmez' diye dua etmek.", "ai_way": "Chaos Mesh veya Gremlin ile kasten pod öldürmek, gecikme (latency) enjekte etmek."},
            {"topic": "Test Zamanı", "old_way": "Canlı ortamda beklenmedik felaket anında öğrenmek.", "ai_way": "Salı günü öğlen 14:00'te tüm ekibin hazır olduğu kontrollü GameDay seansında test etmek."},
            {"topic": "AI Rolü", "old_way": "Manuel olarak senaryo düşünmek.", "ai_way": "AI ajanlarının sistemin en zayıf mimari halkasını bulup oraya özel saldırı ve kesinti simülasyonu üretmesi."}
        ],
        "framework_steps_tr": [
            "1. GameDay Ritüeli: Ayda bir kez 2 saatlik GameDay düzenle; ekibe haber vermeden veya kontrollü şekilde bir mikroservisin bağlantısını kopar ve ekibin müdahalesini izle.",
            "2. Blast Radius (Patlama Yarıçapı) Kontrolü: Kaos testlerini ilk olarak staging/canary ortamında başlat; asla tek seferde tüm prod'u riske atma.",
            "3. Hipotez Kur: 'Eğer Redis çökerse sistem patlamaz, veritabanına fallback yapar' hipotezini yaz; sonra Redis'i öldür ve hipotezi doğrula.",
            "4. Otomatik Kaos Ajanları: Testleri otomatize et; pipeline her deploy olduğunda mikro network kesintilerini tolere edebildiğini kanıtlasın."
        ],
        "framework_steps_en": [
            "1. Institute Monthly GameDays: Run scheduled 2-hour GameDays: inject packet drops, kill master database pods, and observe squad telemetry.",
            "2. Constrain Blast Radius: Begin chaos injection in staging or canary lanes backed by automated emergency abort switches.",
            "3. Formulate the Scientific Hypothesis: Declare: 'If cache cluster node B dies, traffic gracefully falls back to database read replicas without 500s.' Kill the node to prove it.",
            "4. Continuous Chaos Verification: Integrate chaos experiments directly into staging pipelines to prevent architectural fragility creep."
        ],
        "case_study_tr": "Bir banka, 'Bizim sistem çok sağlam' diye övünüyordu. Yeni lead Levent bir GameDay düzenledi ve mesai saatinde ana kimlik doğrulama servisinin Kubernetes pod'larını tek tek kapattı. Sistem anında kilitlendi çünkü fallback mekanizması hiç test edilmemişti ve koddaki bir timeout değeri 300 saniyeydi! Bu kontrollü çöküş sayesinde 2 günde tüm timeout ve circuit breaker ayarları düzeltildi. 1 ay sonra şirketin veri merkezinde gerçek bir yangın çıktığında sistem sıfır kesintiyle çalışmaya devam etti.",
        "case_study_en": "A bank boasted about their bulletproof high-availability architecture. Incoming lead Levent scheduled their first GameDay: killed the primary auth cluster pods on a Tuesday morning. The system collapsed instantly: circuit breakers had never been exercised, and an unconfigured HTTP timeout blocked threads for 300 seconds. Thanks to this controlled experiment, timeouts and fallbacks were hardened. When an actual AWS datacenter fiber severed 30 days later, the bank suffered zero customer disruption.",
        "ai_prompts": [
            {
                "title": "Takım İçi Chaos Engineering ve GameDay Senaryo Tasarımcısı",
                "prompt": "Sistem mimarimiz şu bileşenlerden oluşmaktadır: [MİKROSERVİSLER, KAFKA, REDIS, POSTGRESQL, KUBERNETES]. Takımımızla 2 saatlik bir 'GameDay Kaos Tatbikatı' yapmak istiyoruz. Bana şunları üret: 1) Sistemin en zayıf noktalarını hedef alan 3 gerçekçi kaos senaryosu (Latency injection, DB failover, Packet drop), 2) Her senaryo için test edilecek bilimsel hipotez, 3) Bir şeyler ters giderse deneyi anında durduracak 'Emergency Abort' kontrol listesi."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Kendi sistemini kasten çökerten deli mühendisler!' Chaos Engineering felsefesinin çılgın mantığı ve Netflix'in Chaos Monkey hikayesi. Korkarak yaşamak yerine sistemleri ateşte dövmenin mühendislik felsefesi.",
        "udemy_outline": [
            "00:00 - Korkuyla Yaşamak vs. Sistemi Kasten Çökertmek",
            "04:15 - Chaos Monkey Felsefesi ve Hipotez Odaklı Dayanıklılık",
            "08:35 - GameDay Nasıl Düzenlenir? Patlama Yarıçapını Yönetmek",
            "13:20 - Egzersiz: Takımınız için ilk kontrollü GameDay senaryosunu hazırlayın"
        ]
    },

    # LESSON 42
    {
        "id": 42,
        "module_id": 7,
        "module_title_tr": "Bölüm 7: Kriz Yönetimi, Observability ve Incident Leadership",
        "module_title_en": "Module 7: Incident Response & Production Resilience",
        "title_tr": "Ders 42: Teknik Krizde Müşteri ve Yönetici İletişimi: Paniksiz Durum Raporlaması",
        "title_en": "Lesson 42: Executive Comms During Downtime: AI-Drafted Status Pages & Crisis PR",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Sistem çöktüğünde CEO'nun, müşterilerin ve satış ekibinin aynı anda Slack'ten saldırması kabusu: Paniksiz, şeffaf, güven veren kriz iletişimi ve AI ile anlık durum bültenleri.",
        "summary_en": "Surviving the onslaught of panicked executives, angry clients, and sales reps during an outage: Radiating calm, transparent status pages, and AI crisis drafting.",
        "eli5_metaphor_tr": "Ameliyathanede acil bir operasyon sürerken cerrahın kapıyı açıp bekleyen hasta yakınlarına 'İçeride her yer kan gölü, ne yapacağımızı bilmiyoruz!' diye bağırması değil; 'Hastamız kontrolümüz altında, kanamayı durdurmak için gerekli müdahaleyi yapıyoruz, 20 dakika sonra tekrar bilgi vereceğiz' demesidir. Güven veren lider panik yaymaz, sakinlik aşılar.",
        "eli5_metaphor_en": "During emergency surgery, the lead surgeon doesn't kick open the operating room doors to shriek at the family: 'There's blood everywhere, we are doomed!' They send an orderly with measured updates: 'The patient is stabilized under our monitoring; our team is addressing the vessel. Next update in 20 minutes.' Calmness is contagious.",
        "comparison_table": [
            {"topic": "İletişim Tonu", "old_way": "Sessiz kalıp hiçbir şey söylememek veya panik dolu belirsiz mesajlar atmak.", "ai_way": "Düzenli aralıklarla, teknik terimlerden arındırılmış, kontrolün elde olduğunu gösteren mesajlar."},
            {"topic": "Status Page", "old_way": "Her yer çökmüşken status page'in 'All Systems Operational' (yeşil) göstermesi.", "ai_way": "Kullanıcıya dürüstçe 'Ödeme servisimizde yavaşlık var, mühendislerimiz inceliyor' demek."},
            {"topic": "Yönetici Yönetimi", "old_way": "CEO'nun kriz kanalına girip yazılımcıları soru yağmuruna tutarak yavaşlatması.", "ai_way": "CEO için ayrı bir yönetici özet kanalı açıp oraya AI ile filtrelenmiş net bilgiler akıtmak."}
        ],
        "framework_steps_tr": [
            "1. İletişim Subayı Kuralı (Public Information Officer): Teknik mühendisler kriz çözerken asla müşterilerle veya CEO ile konuşmaz; bu iletişimi sadece Lead veya tayin edilen sözcü yürütür.",
            "2. 3 Parçalı Kriz Mesajı Formülü: 1) Ne olduğunu biliyoruz (Teşhis), 2) Şu an ne yapıyoruz (Aksiyon), 3) Bir sonraki güncellemeyi tam saat kaçta vereceğiz (Taahhüt).",
            "3. AI Kriz İletişim Asistanı: Mühendislik notlarını anında temiz bir Türkçe ve İngilizce status page güncellemesine çeviren şablonlar kullan.",
            "4. Asla Tahmini Bitiş Saati Sözü Verme: '10 dakikaya düzelir' deme; düzelmezse güven sıfırlanır. 'Ekiplerimiz aktif olarak müdahale ediyor, saat 15:30'da tekrar bilgi vereceğiz' de."
        ],
        "framework_steps_en": [
            "1. Shield the Engineers: Technical investigators must never field calls from frantic account executives; the lead serves as the single communications shield.",
            "2. The 3-Part Crisis Memo: 1) What we have confirmed (Observation), 2) What active steps are underway (Action), 3) Exact timestamp for next update (Cadence).",
            "3. AI Crisis Drafting: Feed chaotic technical scratchpads into an LLM to generate customer-friendly status page alerts in seconds.",
            "4. Never Over-Promise ETAs: Never say 'It will be fixed in 10 minutes.' If it fails, credibility evaporates. State: 'Engineers are rolling out the mitigation; next update at 14:15.'"
        ],
        "case_study_tr": "Bir SaaS şirketinin Avrupa bulut bölgesi çöktü. 200 büyük kurumsal müşteri panikle destek hattını kilitledi. Eski lead panikle Slack'te 'Sunucularımız yandı galiba' yazınca bir müşteri bunu Twitter'da paylaştı ve hisseler düştü. Yeni lead Hande hemen duruma el koydu: Resmi bir Status Page duyurusu yayınladı. Müşterilere 15 dakikada bir net, profesyonel güncellemeler geçti. CEO'ya özel 3 maddelik durum özeti sundu. Kriz 45 dakikada çözüldü ve müşteriler kriz yönetiminin şeffaflığı ve profesyonelliği için şirkete teşekkür e-postaları attı.",
        "case_study_en": "A B2B SaaS platform's EU cluster blacked out. 200 enterprise clients swamped support lines. The previous lead blurted out in a shared channel: 'Looks like our database is fried,' which a client screenshotted and posted on Twitter, hammering stock sentiment. Lead Hande took over communications: drafted crisp, reassuring status bulletins via AI, posted cadenced updates every 15 minutes, and fed the CEO private briefings. Outage was patched in 45 minutes; clients praised the transparent crisis stewardship.",
        "ai_prompts": [
            {
                "title": "Kriz Anı Müşteri ve Yönetici İletişim Metni Hazırlayıcı",
                "prompt": "Sistemimizde şu an büyük bir kesinti yaşanıyor: [TEKNİK DETAY: Veritabanı bağlantı havuzu tükendi, siparişler alınamıyor]. Ekiplerimiz son yarım saattir connection pool limitlerini artırıp sunucuları kademeli ayağa kaldırmaya çalışıyor. Sen bir Kriz İletişimi ve Halkla İlişkiler (PR) Uzmanısın. Bana: 1) Resmi Status Page için müşterilere güven veren 3 cümlelik duyuru, 2) Şirket CEO'su ve Yönetim Kurulu için paniksiz teknik durum özeti, 3) Müşteri temsilcilerinin (Destek ekibi) telefonlarda okuyacağı konuşma metnini (script) hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Sistem çöktüğünde kafasını kuma gömen şirketler' ile 'Müşteriye güven veren liderler'. İletişimin bazen yazılımın kendisinden bile daha kritik olduğu anlar ve krizde panik savar teknikler üzerine harika bir sohbet.",
        "udemy_outline": [
            "00:00 - Krizde İletişim Felaketi: Yazılımcılar Nerede Hata Yapar?",
            "04:15 - 3 Parçalı Kriz Mesajı Formülü (Ne Biliyoruz / Ne Yapıyoruz / Ne Zaman)",
            "08:35 - CEO ve Müşterileri AI ile Yönetmek: Status Page Otomasyonu",
            "13:20 - Egzersiz: Takımınız için 1 adet acil durum kriz iletişim şablonu hazırlayın"
        ]
    },

    # LESSON 43
    {
        "id": 43,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 43: CTO, PM ve C-Level ile Aynı Dili Konuşmak: ROI, Runway ve Değer Sunumu",
        "title_en": "Lesson 43: Speaking the Language of Business: Translating Tech to ROI, Runway & Value",
        "level": "Yönetici / Director Level",
        "summary_tr": "C-Level yöneticilere 'Kafka kuyruğu kurduk' derseniz esnerler. 'Müşteri kayıp oranını %15 düşürdük ve şirkete yılda 400.000$ kazandırdık' derseniz bütçeyi kaparsınız.",
        "summary_en": "Telling a CEO 'we migrated to Kafka' induces sleep. Telling them 'we reduced checkout drop-off by 15%, adding $400K to annual ARR' wins funding every time.",
        "eli5_metaphor_tr": "Bir araba galerisi sahibine gidip 'Bu arabanın piston segmanlarının alaşımı titanyum kaplama' dersen anlamaz ve ilgilenmez. Ama ona 'Bu araba 100 kilometrede 3 litre yakıyor, müşteriye bunu 5 dakikada satarsın ve %30 daha çok kar edersin' dersen hemen satın alır. C-Level iş insanıdır; teknoloji değil değer satın alır.",
        "eli5_metaphor_en": "Telling an auto dealer that an engine uses titanium-forged piston rings gets a blank stare. Telling them: 'This model delivers 65 miles per gallon, meaning you can sell it in 5 minutes with a 30% dealer margin' closes the deal. C-level executives purchase business leverage, not raw technology.",
        "comparison_table": [
            {"topic": "Teknik Raporlama", "old_way": "'Kubernetes cluster'ımızı 1.28 sürümüne yükselttik.'", "ai_way": "'Altyapı otomasyonu sayesinde sunucu maliyetlerimizi ayda 8.000$ düşürdük ve runway'imizi 2 ay uzattık.'"},
            {"topic": "Odak Noktası", "old_way": "Kullanılan süslü teknolojiler ve framework isimleri.", "ai_way": "Gelir artışı, maliyet düşüşü veya operasyonel risk azaltımı (The Big 3)."},
            {"topic": "Talep İletişimi", "old_way": "'Takıma yeni lisanslar ve sunucular lazım.'", "ai_way": "'Yapacağımız 10.000$'lık AI yatırımı, takıma yılda 120.000$'lık mühendislik mesaisi kazandıracak.'"}
        ],
        "framework_steps_tr": [
            "1. Üç Büyük İş Kriteri (The Big 3): Yaptığın her teknik işi şu 3 şeyden birine bağla: 1) Geliri artırmak (Make Money), 2) Maliyeti kısmak (Save Money), 3) Riski engellemek (Protect Money).",
            "2. Jargondan Arındırma Filtresi: Sunumundaki tüm kısaltmaları (gRPC, K8s, CI/CD) kaldır; yerine iş etkisini koy.",
            "3. AI ile Yönetici Tercümanı: Teknik bültenini LLM'e besleyip: 'Bunu şirket CFO'sunun anlayacağı finansal dilde 3 maddeye çevir' komutunu ver.",
            "4. Runway Bilinci: Şirketin kaç aylık nakdi (Runway) kaldığını bil; ona göre harcama ve ekip planlaması yap."
        ],
        "framework_steps_en": [
            "1. Anchor to the Business Trifecta: Every engineering effort must map directly to: 1) Grow Revenue, 2) Cut Operational Cost, or 3) Mitigate Catastrophic Risk.",
            "2. Strip the Acronym Alphabet Soup: Eradicate jargon (K8s, gRPC, Kafka) from executive slide decks; substitute commercial business outcomes.",
            "3. Run the AI Executive Translator: Pipe raw sprint highlights into Claude: 'Translate these engineering milestones into a CFO-ready shareholder update.'",
            "4. Runway Financial Literacy: Know your startup's cash burn rate and runway months; frame team hiring and tool spend around cash conservation."
        ],
        "case_study_tr": "Bir SaaS takımının lead'i C-Level'a gidip 'GraphQL'e geçmek için 2 sprint istiyoruz' dedi ve sertçe reddedildi. Şirkete yeni katılan Lead Serdar konuyu devraldı. Verileri inceledi ve mobil kullanıcıların yavaş internette sipariş verirken ekranın donduğunu gördü. CEO'ya şöyle bir sunum yaptı: 'Mobil sepet terk etme oranımız %28. API yanıtlarımızı hafifleterek bu oranı %18'e çekeceğiz; bu da çeyrekte 180.000$ ek ciro demek.' Bütçe ve 2 sprint anında onaylandı.",
        "case_study_en": "An engineering lead asked the executive committee for 2 sprints to 'rewrite endpoints in GraphQL' and was flatly denied. Newly hired lead Serdar re-framed the initiative. He observed that sluggish mobile payloads caused high checkout abandonment. He pitched the CEO: 'Our mobile drop-off rate is 28%. Trimming mobile payload weight will recover $180,000 in quarterly checkouts.' Funding was greenlit in 10 minutes.",
        "ai_prompts": [
            {
                "title": "Teknik İşi Finansal ROI ve Yönetici Diline Çevirici Prompt",
                "prompt": "Biz şu teknik iyileştirmeyi yapmak istiyoruz: [TEKNİK PROJE: Monolitik ödeme servisini asenkron mikroservislere bölmek]. Şirketimizin bağlamı: [E-ticaret, yıllık 20M$ ciro, son dönemde yaşanan yavaşlıklar]. Sen şirket CEO'su ve CFO'susun. Bu teknik projeyi C-Level'ın anlayacağı, heyecanlanacağı ve onaylayacağı 1 sayfalık 'Yatırım Getirisi (ROI) ve Değer Sunumu Belgesi'ne dönüştür. İçinde gelir artışı, maliyet tasarrufu ve risk azaltımı başlıkları olsun."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Yöneticiler neden bizi anlamıyor?' diye ağlayan yazılımcı ile 'Yöneticilere teknoloji değil para kazandıracak fikirler anlatmalısın' diyen tecrübeli VP. Mühendislik dünyası ile iş dünyası arasındaki köprüyü kurmanın altın kuralları.",
        "udemy_outline": [
            "00:00 - Babil Kulesi: Yazılımcılar ve Yöneticiler Neden Anlaşamaz?",
            "04:15 - Üç Büyük İş Kriteri (Gelir, Maliyet, Risk)",
            "08:35 - AI ile Teknik Jargondan Finansal Değere Dönüşüm",
            "13:20 - Egzersiz: Takımınızın son mimari projesini 1 sayfalık ROI sunumuna çevirin"
        ]
    },

    # LESSON 44
    {
        "id": 44,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 44: Metrikler Yalan Söyler mi?: DORA Metrikleri, SPACE Çerçevesi ve AI Verimlilik Ölçümü",
        "title_en": "Lesson 44: DORA & SPACE Metrics: Measuring True Engineering Productivity without Vanity",
        "level": "Yönetici / Director Level",
        "summary_tr": "Kaç satır kod yazıldığı veya kaç bilet kapatıldığı gibi sahte metriklerle (Vanity Metrics) takımı zehirlemeye son: DORA ve SPACE ile gerçek hız ve sağlığı ölçmek.",
        "summary_en": "Burying toxic vanity metrics like lines-of-code and ticket counts: Leveraging DORA and SPACE frameworks to measure delivery velocity and team well-being.",
        "eli5_metaphor_tr": "Bir yazarın ne kadar iyi bir roman yazdığını daktiloda kaç tuşa bastığına bakarak ölçemezsin. 100.000 kez rastgele tuşa basan bir adam iyi bir yazar değildir. Yazılımda da kaç satır kod yazdığın değil; okuyucunun (müşterinin) o kitaptan ne kadar etkilendiği ve kitabın ne kadar akıcı olduğu önemlidir.",
        "eli5_metaphor_en": "Evaluating a novelist's brilliance by counting how many mechanical keys they clacked on a typewriter is absurd. Mashing a keyboard 100,000 times produces gibberish. Engineering excellence is evaluated by how smoothly and reliably value lands in user hands.",
        "comparison_table": [
            {"topic": "Zararlı Metrikler", "old_way": "Commit sayısı, yazılan satır sayısı (LOC), kapatılan bilet sayısı.", "ai_way": "Bu metrikleri ölçerseniz yazılımcılar yapay zekaya 10.000 satır çöp kod yazdırıp sistemi kandırır."},
            {"topic": "DORA Metrikleri", "old_way": "Yılda bir kez release çıkıp hızını bilmemek.", "ai_way": "Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service."},
            {"topic": "SPACE Çerçevesi", "old_way": "Sadece çıktıya (Output) odaklanıp insanların tükenmesini görmemek.", "ai_way": "Satisfaction, Performance, Activity, Communication, Efficiency boyutlarını dengeli ölçmek."}
        ],
        "framework_steps_tr": [
            "1. Goodhart Yasası: 'Bir metrik hedef haline geldiğinde, artık iyi bir metrik olmaktan çıkar.' İnsanların metriği manipüle etmesine izin verme.",
            "2. 4 DORA Metriğini Takip Et: 1) Dağıtım Sıklığı (Günde kaç deploy?), 2) Değişiklik Teslim Süresi (Commit'ten prod'a kaç saat?), 3) Değişiklik Hata Oranı (% kaçı patlıyor?), 4) Hizmet Kurtarma Süresi (MTTR kaç dakika?).",
            "3. SPACE ile İnsan Boyutunu Ekle: Sadece hıza değil, mühendis memnuniyetine (Satisfaction) ve kesintisiz odak süresine (Efficiency) bak.",
            "4. AI Etkisi Ölçümü: AI araçlarının verimini kod satırıyla değil; Lead Time'ın ne kadar kısaldığı ve mühendis mutluluğunun ne kadar arttığıyla ölç."
        ],
        "framework_steps_en": [
            "1. Beware Goodhart's Law: 'When a measure becomes a target, it ceases to be a good measure.' Gamed metrics produce toxic cultures.",
            "2. The 4 DORA Golden Metrics: 1) Deployment Frequency, 2) Lead Time for Changes, 3) Change Failure Rate, 4) Mean Time to Restore (MTTR).",
            "3. Balance with the SPACE Framework: Complement delivery metrics with developer Satisfaction, cognitive Flow, and Communication friction.",
            "4. Quantifying AI Impact: Measure LLM ROI through collapsed PR cycle times and reclaimed focus hours, never raw lines of generated code."
        ],
        "case_study_tr": "Bir holding şirketi 'En çok kod yazan ve en çok bilet kapatan yazılımcılara prim verilecek' dedi. 2 ay içinde yazılımcılar ChatGPT ile her fonksiyona 500 satır anlamsız yorum ve döngü ekletti; 1 biletlik işi 10 küçük bilete bölüp kapattılar. Kod kalitesi yerle bir oldu. Yeni lead Kaan geldi; bu saçma prim sistemini iptal ettirdi. Şirkete DORA panosu kurdu. Başarı kriteri olarak 'Prod hata oranını düşürme' ve 'PR döngü süresini kısaltma'yı koydu. Sistem sağlığı hızla toparlandı.",
        "case_study_en": "An enterprise conglomerate instituted bonuses for 'engineers with the highest commit counts and closed tickets.' Within 60 days, devs used ChatGPT to bloat functions with hundreds of verbose comments and split trivial tasks into 10 separate tickets. Technical debt exploded. Lead Kaan stepped in: revoked the toxic quota, built a real-time DORA dashboard, and tied bonuses to Change Failure Rate drops and PR velocity. System health stabilized immediately.",
        "ai_prompts": [
            {
                "title": "DORA ve SPACE Mühendislik Verimlilik Raporlayıcı",
                "prompt": "Takımımızın son 3 aydaki metrikleri şunlardır: [DEPLOY SAYILARI, PR KAPATMA SÜRELERİ, HATA ORANLARI, RETRO MEMNUNİYET PUANLARI]. Sen bir Engineering Operations Director'ısın. 1) Takımımızın DORA seviyesini (Low, Medium, High, Elite) belirle, 2) SPACE çerçevesine göre takımın tıkanıklık yaşadığı 2 alanı teşhis et, 3) Vanity metrikleri engelleyen ve yönetime sunulacak 1 sayfalık dengeli mühendislik karnesi hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Günde 2000 satır kod yazan' sahtekar yazılımcı ile Goodhart Yasasını anlatan bilge Lead. Metriklerin insanları nasıl canavara dönüştürebileceği ve gerçek mühendislik hızını ölçmenin bilimsel yolları üzerine eğlenceli bir podcast.",
        "udemy_outline": [
            "00:00 - Goodhart Yasası: Satır Sayarak Verimlilik Ölçülür mü?",
            "04:15 - DORA Metriklerinin Dört Altın Kuralı (Elite Performer Olmak)",
            "08:35 - SPACE Çerçevesi: Mühendis Mutluluğunu ve Odak Süresini Ölçmek",
            "13:20 - Egzersiz: Takımınız için 1 adet DORA karnesi çıkarın"
        ]
    },

    # LESSON 45
    {
        "id": 45,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 45: Bütçe, Bulut Maliyetleri (FinOps) ve AI Token Maliyet Optimizasyonu",
        "title_en": "Lesson 45: FinOps for Leads: Managing Cloud Bills & LLM API Token Spend",
        "level": "Yönetici / Director Level",
        "summary_tr": "Ay sonunda gelen 50.000$'lık sürpriz AWS ve OpenAI faturasıyla C-Level'ın kapınıza dayanmasına son: FinOps kültürü, model routing ve token tasarrufu.",
        "summary_en": "Preventing the heart-stopping $50,000 surprise AWS and OpenAI monthly invoice: Instilling FinOps accountability, prompt caching, and tiered model routing.",
        "eli5_metaphor_tr": "Evdeki tüm odaların ışıklarını, klimalarını ve fırınlarını sonuna kadar açık bırakıp tatile gidersen ay sonunda gelen elektrik faturası yüzünden kalp krizi geçirirsin. FinOps, evde kimse yokken ışıkları kapatan akıllı sensörler kurmaktır. AI token optimizasyonu ise her ufak iş için en pahalı limuzini kiralamak yerine yakındaki bakkala bisikletle gitmektir.",
        "eli5_metaphor_en": "Leaving every air conditioner, chandelier, and commercial oven running at full blast while going on a 3-week vacation invites financial doom when the utility bill arrives. FinOps is motion-sensor lighting. Token optimization is taking a bicycle to the corner bodega instead of chartering a stretch limousine.",
        "comparison_table": [
            {"topic": "Maliyet Takibi", "old_way": "Ay sonunda fatura geldiğinde CFO'nun bağırışlarıyla öğrenmek.", "ai_way": "Günlük bütçe alarmları, etiketleme (Tagging) ve takım bazlı maliyet panoları."},
            {"topic": "Model Seçimi", "old_way": "Her basit işlem için en pahalı modeli (GPT-4o / Claude Opus) çağırmak.", "ai_way": "Model Router ile basit işleri ucuz/hızlı modellere (Haiku / 4o-mini), sadece zor işleri pahalı modellere göndermek."},
            {"topic": "Prompt Optimizasyonu", "old_way": "Her istekte 50 sayfalık aynı sistem promptunu baştan göndermek.", "ai_way": "Prompt Caching kullanarak token maliyetini %90 düşürmek."}
        ],
        "framework_steps_tr": [
            "1. Model Routing Mimarisi: İstekleri karmaşıklığına göre yönlendir; sınıflandırma ve formatlamayı küçük modeller, mimariyi büyük modeller yapsın.",
            "2. Prompt Caching: Claude ve OpenAI'ın caching özelliklerini aktif et; tekrarlayan sistem promptları için %90 indirim kazan.",
            "3. AWS / Cloud Etiketleme (Tagging): Açılan her EC2, S3 veya RDS kaynağı bir takıma ve projeye etiketlenmek zorundadır; sahipsiz zombi sunucuları otomatik kapat.",
            "4. FinOps Dashboard: Takımın haftalık standup'ında bulut maliyet grafiğini 30 saniye göster; harcama bilincini kültüre yerleştir."
        ],
        "framework_steps_en": [
            "1. Tiered Model Routing: Route requests dynamically: low-complexity classification goes to Haiku/GPT-4o-mini; reserve heavy reasoning models for multi-step tasks.",
            "2. Leverage Prompt Caching: Take full advantage of provider prompt caching to slash repetitive token overhead by up to 90%.",
            "3. Enforce Strict Cloud Tagging: Every AWS container, database, and bucket must have mandatory team ownership tags; auto-reap unowned zombie resources.",
            "4. Weekly FinOps Cadence: Display team cloud and token burn charts for 30 seconds during weekly check-ins to build cost-conscious engineering intuition."
        ],
        "case_study_tr": "Bir yapay zeka start-up'ında yazılımcılar her kullanıcı araması için tüm veritabanı şemasını en pahalı LLM'e prompt olarak gönderiyordu. Şirketin aylık LLM faturası 32.000$'a fırladı ve şirket batma noktasına geldi. Yeni lead Tolgahan bir 'Model Gateway' kurdu. Prompt Caching aktif edildi ve sorguların %70'i ucuz küçük modellere yönlendirildi. Fatura 32.000$'dan 3.400$'a indi; yanıt hızı ise 3 kat arttı.",
        "case_study_en": "At an AI scaleup, engineers fed entire database schemas into the most expensive reasoning models on every basic search query. Monthly LLM API invoices exploded to $32,000, burning through their seed funding. Lead Tolgahan built an internal Model Gateway proxy: activated prompt caching and routed 70% of standard traffic to lightweight models. Monthly spend plummeted from $32K to $3,400 while response latency dropped 3x.",
        "ai_prompts": [
            {
                "title": "Bulut ve AI Token Harcama Optimizasyon Denetçisi",
                "prompt": "Şirketimizin aylık AWS ve LLM harcama kalemleri şunlardır: [HARCAMA TABLOSU: EC2, RDS, OpenAI API vb.]. Sen bir FinOps ve Cloud Cost Optimization uzmanısın. 1) Bu harcamalardaki en büyük 3 israf noktasını teşhis et, 2) Token maliyetini %70 düşürecek Prompt Caching ve Model Routing stratejisini açıkla, 3) 30 gün içinde faturayı yarı yarıya indirecek somut aksiyon adımlarını listele."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Ay sonunda gelen 50.000 dolarlık AWS faturası' şoku yaşayan yazılımcı komedisi. Zombi sunucular, gereksiz pahalı yapay zeka modelleri ve FinOps disiplininin bir şirketi nasıl iflastan kurtardığı üzerine keyifli bir bölüm.",
        "udemy_outline": [
            "00:00 - Fatura Şoku: Bulutta ve Yapay Zekada Para Nasıl Buharlaşır?",
            "04:15 - Model Routing ve Prompt Caching ile %80 Token Tasarrufu",
            "08:35 - FinOps Kültürü: Zombi Sunucuları Avlamak",
            "13:20 - Egzersiz: Takımınızın API ve Cloud maliyetini düşürecek 3 maddelik FinOps planı yapın"
        ]
    },

    # LESSON 46
    {
        "id": 46,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 46: 'Bu Özellik 3 Günde Çıkar mı?': Ürün Yöneticisiyle (PM) Sağlıklı Müzakere",
        "title_en": "Lesson 46: Negotiating Deadlines & Scope Creep with Product: The Iron Triangle",
        "level": "Yönetici / Director Level",
        "summary_tr": "PM 'Bu çok acil, cumaya yetişmeli' dediğinde panikle 'Yaparız' deyip takımı yakmak veya doğrudan 'İmkansız' deyip kavga etmek yerine: Demir Üçgen (Scope, Time, Quality) ile müzakere sanatı.",
        "summary_en": "When a PM demands 'we must launch by Friday': Escaping the binary trap of toxic over-promising or combative rejection using the Iron Triangle negotiation framework.",
        "eli5_metaphor_tr": "Bir restoranda müşterinin 'Benim fırında kuzu tandırım 5 dakikada masaya gelsin' demesine benzer. Aşçı 'Olur' derse çiğ et getirir, müşteri zehirlenir. 'Asla olmaz' derse müşteri kavga çıkarır. Akıllı aşçı der ki: 'Kuzu tandırın pişmesi 40 dakikadır; ama 5 dakikada açlığınızı yatıştırmak istiyorsanız nefis bir sıcak çorba ve meze tabağımızı hemen getirebilirim.'",
        "eli5_metaphor_en": "A diner ordering a slow-roasted lamb shank and demanding it served in 5 minutes. The chef can't serve raw meat (compromising quality). Saying 'impossible, get out' creates a brawl. The master chef negotiates: 'A tender shank takes 40 minutes; but if you need sustenance right now, I can serve our award-winning hot soup in 3 minutes.'",
        "comparison_table": [
            {"topic": "Tepki Biçimi", "old_way": "Korkudan 'Yetiştiririz' deyip takımı hafta sonu dahil sabahlara kadar çalıştırmak.", "ai_way": "'Demir Üçgen' kuralını masaya koyup tarih sabitse neleri kapsamdan çıkaracağımızı sormak."},
            {"topic": "Kalite Tavizi", "old_way": "Yetişsin diye test yazmamak, dokümantasyonu silmek (Teknik borç patlaması).", "ai_way": "Kaliteden asla taviz vermemek; sadece işlevsellik kapsamını (scope) küçültmek."},
            {"topic": "İlişki Dinamiği", "old_way": "Yazılımcılar ve PM'in iki düşman kampa bölünmesi.", "ai_way": "Aynı gemideki iki stratejik ortak olarak AI ile hızlı prototip (MVP) seçenekleri üretmek."}
        ],
        "framework_steps_tr": [
            "1. Demir Üçgen (Iron Triangle): Kapsam (Scope), Zaman (Time), Kaynak/Kalite (Cost/Quality). Kalite pazarlık konusu olamaz; tarih kilitliyse kapsam küçülür.",
            "2. 'Evet, Eğer...' Tekniği: 'Hayır' kelimesini lügatından çıkar; 'Evet yapabiliriz, eğer faturalama filtresini sonraki sürüme bırakırsak' de.",
            "3. İnce Dilimleme (Vertical Slicing): Büyük özelliği %20 eforla %80 değer yaratan en minimal çalışan versiyona (MVP) indir.",
            "4. AI ile Kapsam Tıraşlama: Bilet listesini LLM'e besleyip: 'Cumaya yetişmesi için bu özelliğin kullanıcı deneyimini bozmayan en kritik 2 alt parçasını seç' analizi al."
        ],
        "framework_steps_en": [
            "1. Master the Iron Triangle: Scope, Time, and Quality/Cost. Quality is non-negotiable. If time is locked, scope must yield.",
            "2. Deploy 'Yes, If...': Banish defensive rejections; say 'Yes, we can launch by Friday, if we defer the multi-currency export to phase two.'",
            "3. Thin Vertical Slicing: Carve features down to the Pareto core: the 20% of engineering effort that unlocks 80% of immediate customer utility.",
            "4. AI Scope Decoupling: Feed feature specs to Claude: 'Identify the absolute minimum viable slice to meet Friday's demo without structural tech debt.'"
        ],
        "case_study_tr": "Bir fintech start-up'ında PM, yatırımcı toplantısına yetişmesi için 4 haftalık 'Kripto Cüzdan Entegrasyonu' özelliğinin 1 haftada bitmesini istedi. Eski lead kavga edip istifa etmişti. Yeni lead Ekin geldi ve PM ile masaya oturdu: 'Cuma günkü yatırımcıya cüzdanın 50 farklı kripto para desteklediğini mi göstermek istiyorsun, yoksa cüzdana para yüklenip çekilebildiğini mi?' PM 'Para yükleme akışı yeterli' dedi. Ekin kapsamı 50 coin'den tek coin'e (sadece USDT) indirdi. Özellik perşembe akşamı hatasız çıktı; yatırımcılar büyülendi ve şirket 2M$ yatırım aldı.",
        "case_study_en": "A fintech PM demanded a 4-week Crypto Wallet module ship in 5 days for an emergency venture investor demo. The previous lead had rage-quit. Lead Ekin stepped in: 'Does the investor need to see 50 crypto tokens, or do they need to see seamless wallet deposit and withdrawal?' The PM conceded: 'Just the deposit flow.' Ekin scoped it to a single token (USDT). Shipped flawlessly Thursday afternoon; the startup secured their $2M funding round.",
        "ai_prompts": [
            {
                "title": "Ürün Yöneticisiyle Müzakere ve Kapsam Küçültme (Vertical Slicing) Asistanı",
                "prompt": "Ürün yöneticimiz şu büyük özelliğin 1 hafta içinde canlıya çıkmasını talep ediyor: [ÖZELLİK TANIMI]. Ekibimizin bu sürede bunu tam olarak yapması imkansız. Sen usta bir Agile Koçu ve Müzakere Uzmanısın. 1) Bu özelliği kullanıcıya değer sunmaya devam eden 3 aşamalı 'Dikey Dilime' (MVP 1, MVP 2, Full) böl, 2) PM ile yapacağım görüşmede kullanabileceğim nazik, profesyonel ve 'Evet, eğer...' formülüne dayalı konuşma metnini yaz, 3) Kaliteden taviz vermeden takımı koruyacak sınırları çiz."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Cumaya yetişmezse biteriz!' diye panikleyen Product Manager ile onu bir Zen ustası gibi sakinleştiren Team Lead. Demir Üçgen kuralı ve yazılımcı-ürüncü barışının sırları üzerine kahkaha dolu bir diyalog.",
        "udemy_outline": [
            "00:00 - 'Cumaya Yetişmeli!' Paniği: Liderin İlk Tepkisi Ne Olmalı?",
            "04:15 - Demir Üçgen Mimarisi: Kaliteden Asla Taviz Vermemek",
            "08:35 - 'Evet, Eğer...' Formülü ile Profesyonel Müzakere",
            "13:20 - Egzersiz: Takımınızdan istenen aşırı bir talebi AI ile MVP dilimlerine ayırın"
        ]
    },

    # LESSON 47
    {
        "id": 47,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 47: Yönetim Kurulu ve Liderlik Sunumları Hazırlama: AI ile Veriyi Hikayeleştirme",
        "title_en": "Lesson 47: Executive Presentations: AI-Powered Storytelling & High-Stakes Visuals",
        "level": "Yönetici / Director Level",
        "summary_tr": "Yönetim kuruluna 60 slaytlık karmaşık teknik grafikler gösterip herkesi uyutmaya son: 3 slaytlık piramit prensibi, veriyi hikayeleştirme ve yönetim dili.",
        "summary_en": "Stop boring the Board of Directors with 60-slide architectural diagrams: The Minto Pyramid Principle, storytelling with data, and commanding executive presence.",
        "eli5_metaphor_tr": "Gazetelerin manşetleri gibidir. Bir gazetenin ilk sayfasında 'Bugün hava sıcaklığı 24 derece, nem oranı %40, rüzgar kuzeyden esiyor' yazmaz; manşette kocaman 'REKOR SICAKLIK GELİYOR!' yazar, detaylar alta yazılır. Yönetim kurulu sunumu gazete manşetidir; önce vurucu sonucu söyle, sonra gerekçeleri ver.",
        "eli5_metaphor_en": "Front-page newspaper headlines: The front page doesn't open with barometric pressure readings and wind velocity tables; it screams: 'HISTORIC STORM APPROACHING.' Executive presentations follow the same doctrine: lead with the headline verdict, follow with supporting data.",
        "comparison_table": [
            {"topic": "Sunum Yapısı", "old_way": "Kronolojik anlatım: 'Önce şunu yaptık, sonra buraya baktık...' (Sonuç 50. dakikada gelir).", "ai_way": "Piramit Prensibi (Minto Pyramid): Önce ana mesaj ve karar talebi, sonra 3 kanıt."},
            {"topic": "Görsel Tasarım", "old_way": "Küçük fontlarla dolu, okunmayan devasa tablolar ve log ekran görüntüleri.", "ai_way": "Tek bir net mesaj veren temiz grafikler ve AI ile üretilmiş görsel metaforlar."},
            {"topic": "Soru-Cevap", "old_way": "Beklenmeyen zor bir soru geldiğinde terleyip konuyu dağıtmak.", "ai_way": "Yönetim kurulunun soracağı 10 zor soruyu önceden AI ile simüle edip hazırlıklı olmak."}
        ],
        "framework_steps_tr": [
            "1. Minto Piramidi (The Pyramid Principle): 1) Sonuç (Bottom Line Up Front - BLUF), 2) Destekleyici Argümanlar, 3) Detaylı Veriler.",
            "2. Üç Slayt Kuralı: Yönetim kurulu için ideal sunum 3 slayttır: 1) Neredeyiz ve Hedef ne? 2) En büyük engel/fırsat ne? 3) Yönetimden ne talep ediyoruz (bütçe/karar)?",
            "3. AI ile Yönetici Simülasyonu: Sunumdan önce slaytlarını LLM'e ver: 'Sen şüpheci ve agresif bir Yönetim Kurulu Üyesisin; beni bu sunumda en çok nereden vurursun?' de.",
            "4. Başarıları Şirket Değerine Bağla: 'Bu çeyrek 120 PR kapattık' deme; 'Yeni altyapımız sayesinde müşteri onboarding süresini 14 günden 2 güne indirdik' de."
        ],
        "framework_steps_en": [
            "1. The Minto Pyramid Protocol: Bottom Line Up Front (BLUF) -> Core Arguments -> Verifiable Data Foundations.",
            "2. The 3-Slide Board Deck: Slide 1: Where we stand vs. Strategic Target. Slide 2: The Core Leverage/Bottleneck. Slide 3: The Explicit Ask (Budget, Approval).",
            "3. Stress-Test with AI Board Inquisitors: Prompt Claude: 'Act as a skeptical, cost-cutting board member; grill me on vulnerabilities in this deck.'",
            "4. Frame Velocity as Commercial Enterprise Value: Never say 'we merged 120 PRs'; say 'our new streaming architecture accelerated enterprise customer onboarding by 70%.'"
        ],
        "case_study_tr": "Bir fintech Lead'i şirketin veri tabanını ölçeklemek için 100.000$ ek bütçe istemek üzere Yönetim Kurulu'na çıktı. 40 slaytlık teknik bir sunum yaptı; PostgreSQL parametrelerini anlattı. Kurul sıkıldı ve bütçeyi reddetti. Lead, şirketin VP of Engineering'inden koçluk aldı ve sunumu AI ile yeniden tasarladı: Tek slayt! Manşet: 'Önümüzdeki ay beklenen 3 kat trafik artışında sistemimizin çökmesini engellemek ve 1.2M$ ciroyu güvenceye almak için 100.000$ altyapı yatırımı.' Sunum 4 dakikada onaylandı.",
        "case_study_en": "An engineering lead requested a $100,000 database scaling budget from the Board. He presented a 40-slide technical monologue on Postgres connection pools and vacuuming. Bored board members rejected the ask. The lead restructured the pitch via Claude into a 1-slide BLUF brief: 'Investing $100K in database scaling safeguards $1.2M in projected seasonal revenue against peak checkout blackouts.' Approved in 4 minutes.",
        "ai_prompts": [
            {
                "title": "Yönetim Kurulu ve C-Level İçin Piramit Prensibi Sunum Tasarımcısı",
                "prompt": "Mühendislik takımımızın bu çeyrekteki başarıları ve önümüzdeki çeyrek için talep ettiğimiz bütçe/kaynaklar şunlardır: [NOTLAR VE TALEPLER]. Sen McKinsey seviyesinde bir Yönetici İletişim Koçusun. Bana: 1) Barbara Minto'nun Piramit Prensibi'ne (BLUF) göre yapılandırılmış 3 slaytlık bir 'Yönetim Kurulu Sunum İskeleti' hazırla, 2) Yönetim kurulunun sorabileceği en zor 3 şüpheci soruyu ve bunlara verilecek kusursuz diplomatik yanıtları listele."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Yönetim kuruluna teknik detay anlatıp kovulmaktan beter olan mühendis ile tek slaytla milyon dolarlık bütçeyi kapan bilge Lead. İş dünyasında hikaye anlatıcılığının (storytelling) gücü üzerine büyüleyici bir diyalog.",
        "udemy_outline": [
            "00:00 - Yönetim Kurulu Kabusu: Neden Mühendislerin Sunumları Sıkıcıdır?",
            "04:15 - Minto Piramidi ve BLUF (Bottom Line Up Front) Tekniği",
            "08:35 - AI ile Agresif Yönetim Kurulu Simülasyonu Yapmak",
            "13:20 - Egzersiz: Takımınızın son çeyrek raporunu 3 slaytlık BLUF formatına dönüştürün"
        ]
    },

    # LESSON 48
    {
        "id": 48,
        "module_id": 8,
        "module_title_tr": "Bölüm 8: Yukarı Doğru Yönetim ve İş Odaklı Liderlik",
        "module_title_en": "Module 8: Managing Up & Business Alignment",
        "title_tr": "Ders 48: Stratejik 'Hayır' Deme Sanatı: Takımı Odak Noktasında Tutmak",
        "title_en": "Lesson 48: The Art of the Strategic 'No': Protecting Team Bandwidth & Focus",
        "level": "Yönetici / Director Level",
        "summary_tr": "Gelen her isteğe 'Evet' diyen lider takımını mezara götürür. Köprüleri yıkmadan, saygı kazanarak ve alternatif sunarak üst yönetime stratejik 'Hayır' deme ustalığı.",
        "summary_en": "Leads who say 'yes' to every executive request march their teams straight to burnout. Mastering graceful, politically savvy, trade-off-driven 'No's.",
        "eli5_metaphor_tr": "Küçük bir bavulun var ve içine sadece 5 gömlek sığıyor. Birisi gelip 'Şu 3 kazağı ve 2 çift botu da bavula koy' dediğinde 'Tamam' dersen bavulun fermuarı patlar, her şey yerlere saçılır. Stratejik 'Hayır', 'Bavulumuz dolu; botları koymamı istiyorsanız hangi iki gömleği evde bırakalım?' demektir.",
        "eli5_metaphor_en": "You have a carry-on suitcase that holds exactly 5 shirts. An executive rushes in demanding: 'Pack these 3 winter coats and 2 pairs of combat boots as well.' Saying yes bursts the zipper and dumps clothes in the mud. The strategic 'No' is: 'The suitcase is full; which 3 shirts are we taking out to fit the boots?'",
        "comparison_table": [
            {"topic": "Reddetme Şekli", "old_way": "Kaba ve tepkisel bir şekilde 'Yapamayız, vaktimiz yok' demek (Düşman kazanmak).", "ai_way": "Stratejik seçenek sunarak: 'Bunu yapabiliriz ama X projesini 3 hafta öteleriz, şirket için hangisi daha öncelikli?'"},
            {"topic": "Takım Koruması", "old_way": "Her şeyi kabul edip sonra gizlice takıma mobbing yapmak.", "ai_way": "Takımın odak kapasitesini bir kale gibi savunmak ve takdiri üzerine almak."},
            {"topic": "Saygınlık", "old_way": "Her şeye boyun eğen 'Yes-Man' olarak görülüp saygı görmemek.", "ai_way": "Şirketin stratejik hedeflerini koruyan olgun bir lider olarak görülmek."}
        ],
        "framework_steps_tr": [
            "1. 'Evet-İnsan' (Yes-Man) Tuzağı: Her şeye evet demek kibarlık değildir; hiçbir şeyi kaliteli bitirememek ve takımı tüketmektir.",
            "2. Maliyeti Masaya Koy (Surface the Opportunity Cost): Bir şeye evet demek, başka bir şeye hayır demektir. Yeni isteğin neyi feda edeceğini hemen göster.",
            "3. Pozitif Hayır Formülü (The Positive No): 1) İstek sahibinin hedefini anladığını göster, 2) Mevcut kısıtı açıkla, 3) Alternatif bir kazan-kazan rotası sun.",
            "4. AI ile Diplomatik Yanıt Tasarımı: Sert bir reddiye yazmadan önce LLM'e: 'Bu talebi hem profesyonel hem de stratejik kısıtları net gösteren diplomatik bir dille reddet' komutunu ver."
        ],
        "framework_steps_en": [
            "1. The Yes-Man Trap: Constant appeasement isn't loyalty; it's a cowardly dereliction of duty that delivers half-baked failures and team burnout.",
            "2. Illuminate Opportunity Costs: Every 'yes' carries a hidden 'no'. Always make the invisible trade-off painfully visible to stakeholders.",
            "3. The Positive No Formula: 1) Validate the business intent, 2) Articulate current capacity constraints objectively, 3) Offer an alternative high-leverage path.",
            "4. Diplomatic AI Tone Refinement: Run draft rejections through an LLM to polish sharpness into crisp, politically bulletproof executive memos."
        ],
        "case_study_tr": "Bir telekom şirketinde satış direktörü, yeni bir müşteri için sprint ortasında 15 özel entegrasyon istedi ve 'Bu yapılmazsa anlaşma yatar' diye baskı kurdu. Eski lead'ler hep boyun eğmiş ve projeler batmıştı. Yeni lead Kerim satış direktörünün odasına gitti: 'Bu müşteriyi kazanmanı çok istiyorum. Ancak şu an takımımız regülasyon uyum projesini yapıyor; bunu geciktirirsek şirket haftalık 500.000 TL ceza yiyecek. Gel seninle şu 15 entegrasyonun en kritik 2 tanesini seçelim, onları cuma gününe çıkaralım; kalan 13 tanesini sonraki çeyreğe takvimleyelim.' Satış direktörü kabul etti; hem müşteri kazanıldı hem de ceza engellendi.",
        "case_study_en": "At a telecommunications platform, the VP of Sales demanded 15 custom enterprise integrations mid-sprint: 'If we don't ship this, our largest deal walks.' Past leads had caved, trashing delivery cadence. Lead Kerim met the VP in person: 'I want this deal closed as badly as you do. However, our squad is mid-stream on our national regulatory compliance engine; missing this deadline triggers $100K in weekly statutory fines. Let's pick the 2 absolute dealbreaker integrations for Friday, and queue the remaining 13 for next sprint.' Deal was signed; regulatory deadlines were met.",
        "ai_prompts": [
            {
                "title": "Diplomatik ve Stratejik 'Hayır' E-postası Hazırlayıcı",
                "prompt": "Üst yönetimden veya Ürün Direktöründen şu gerçek dışı ve takımı batıracak acil talep geldi: [TALEBİ EKLEYİN]. Bizim mevcut taahhütlerimiz: [MEVCUT KRİTİK PROJE]. Sen dünyanın en usta Kurumsal Müzakere Danışmanısın. Köprüleri yıkmayan, karşı tarafın hedefini anlayan ama takımın sınırlarını tavizsiz koruyan, 'Pozitif Hayır' ilkelerine uygun kusursuz bir yönetici e-posta yanıtı hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Her şeye evet diyen ve sonunda takımı istifa eden zavallı lider' portresi. 'Hayır' demenin aslında şirketin gerçek hedeflerine 'Evet' demek olduğu gerçeği ve liderlikte sınır koymanın asaleti üzerine ilham dolu bir podcast.",
        "udemy_outline": [
            "00:00 - 'Yes-Man' Sendromu: Her Şeye Evet Diyen Lider Neden Batırır?",
            "04:15 - Fırsat Maliyeti (Opportunity Cost) Formülü",
            "08:35 - 'Pozitif Hayır'ın 3 Aşamalı Diplomatik İskeleti",
            "13:20 - Egzersiz: Size gelen son acil talebi stratejik 'Pozitif Hayır' formatında yanıtlayın"
        ]
    }
]
