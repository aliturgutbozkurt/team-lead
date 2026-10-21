# -*- coding: utf-8 -*-
"""
Modules 03 & 04:
Module 3: Çevik (Agile) Süreçlerin AI ile Evrimi (Reinventing Agile & Delivery with AI)
Module 4: Mimari Liderlik ve Kod Kalitesi Standartları (Architectural Stewardship & AI Code Quality)
"""

LESSONS_03_04 = [
    # LESSON 13
    {
        "id": 13,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 13: 2 Saatlik Standup ve Refinement İşkencesine Son: Asenkron & AI Özetli Ritüeller",
        "title_en": "Lesson 13: Killing 2-Hour Ceremonies: Async & AI-Synthesized Standups",
        "level": "Orta / Mid Lead",
        "summary_tr": "Her sabah 15 dakikalık standup'ın 1 saate uzaması kabusuna son: Slack/Teams üzerinden asenkron check-in ve AI ile sentezlenen blokaj bültenleri.",
        "summary_en": "End the morning standup hostage crisis: Replacing sluggish 45-minute status rounds with asynchronous bot check-ins and AI blocker digests.",
        "eli5_metaphor_tr": "Bir grup itfaiyecinin her sabah yangın hortumunun önünde 1 saat boyunca 'Dün hangi vanayı sıktım, bugün hangi merdivene basacağım' diye sırayla konuşmasına benzer. Yangın çıktığında konuşulmaz, telsizden tek cümle anons geçilir: '2. kat bloklandı, destek lazım!'. Standup durum raporu verme mahkemesi değil, blokaj temizleme telsizidir.",
        "eli5_metaphor_en": "Imagine a fire squad gathering before every alarm to listen to 10 firefighters narrate how they polished their boots yesterday. You don't recite diary entries during a fire; you use a radio: 'Floor 2 is blocked, need support!' Standup is an emergency dispatch, not a corporate confession booth.",
        "comparison_table": [
            {"topic": "Format", "old_way": "Her sabah herkesin kamerasını açıp sırayla dün ne yaptığını okuması.", "ai_way": "Slack botuna 3 madde yazmak; AI'ın bunu 30 saniyelik liderlik özetine çevirmesi."},
            {"topic": "Blokaj Çözümü", "old_way": "İki kişinin spesifik teknik tartışmasını 8 kişinin dinlemesi.", "ai_way": "Blokaj anında ilgili iki kişinin yapay zeka eşliğinde hemen ayrı bir kanala geçmesi."},
            {"topic": "Zaman Kazanımı", "old_way": "Takım başına haftada 7.5 saat boşa harcanan toplantı süresi.", "ai_way": "Haftada 1 saat canlı strateji kahvesi, geri kalan her şey asenkron ve AI özetli."}
        ],
        "framework_steps_tr": [
            "1. 3 Klasik Soruyu Emekliye Ayır: 'Dün ne yaptım?' yerine 'Bugün hangi çıktıyı teslim edeceğim?' ve 'Önümdeki tek büyük taş ne?' sorusunu koy.",
            "2. Asenkron Standup Botu Kur: Ekip sabah 09:30'a kadar Slack kanalına 2 satır yazar.",
            "3. AI Blokaj Radarını Çalıştır: Bir script tüm yanıtları ve GitHub PR durumlarını tarayıp Lead'e tek bir özet üretir: 'Bugün sadece Ahmet ve Zeynep bloklu, onlara yardım et.'",
            "4. 15 Dakika Kuralı: Canlı standup yapılacaksa kronometre aç; 15. dakikada toplantı biter, teknik detay konuşmak isteyenler breakout room'a geçer."
        ],
        "framework_steps_en": [
            "1. Retire the 3 Questions: Replace 'What did I do yesterday?' with 'What concrete output ships today?' and 'What single barrier is halting me?'",
            "2. Deploy Asynchronous Bots: Team members drop two bullet points into Slack by 09:30 AM.",
            "3. Run the AI Blocker Radar: An automated agent digests inputs, correlates git activity, and pings the lead: 'Only Ali and Jane are blocked; intervene here.'",
            "4. Hard 15-Minute Cap: If running a synchronous standup, use a timer; kill the meeting at 15m and push deep technical brawls into dedicated pairings."
        ],
        "case_study_tr": "Bir bankacılık ekibinde 12 yazılımcı her sabah 45 dakika standup yapıyordu. Mühendisler toplantıdan sonra odaklanabilmek için 1 saat kendine gelemiyordu. Yeni lead Kerem, standup'ı tamamen asenkron hale getirdi. Sabahları bir LLM botu Slack mesajlarını, açık PR'ları ve Jira biletlerini derleyip 5 satırlık 'Günlük Operasyonel Röntgen' çıkarmaya başladı. Toplantı süresi haftalık 4 saat azaldı; takım sprint hedeflerini ilk kez 3 gün önceden tamamladı.",
        "case_study_en": "A 12-engineer banking squad lost 45 minutes every morning to rambling standups. Lead Kerem axed the live meeting, replacing it with an async bot synthesized by Claude that parsed Slack check-ins and open GitHub PRs into a 5-bullet executive summary. The team recovered 4.5 hours of focus time per developer per week and completed their sprint deliverables 3 days early.",
        "ai_prompts": [
            {
                "title": "Günlük Standup Asenkron Sentezleyici ve Blokaj Avcısı",
                "prompt": "Aşağıda 7 yazılım mühendisinin bu sabah yazdığı asenkron standup mesajları bulunmaktadır: [MESAJLAR]. Bir Engineering Lead asistanı olarak: 1) Kimlerin önünde somut bir blokaj var ve kim kimden yardım bekliyor? 2) Hangi tasklar gecikme riski taşıyor? 3) Benim bir lead olarak bugün çözmem gereken en kritik 2 aksiyonu listele."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Her sabah yapılan ve herkesin kamerası kapalıyken uyuduğu 1 saatlik kabus standup'ları alaya alan iki mühendis. Asenkron çalışma kültürü ve yapay zekanın toplantı israfını nasıl yok ettiği üzerine kahkaha dolu bir analiz.",
        "udemy_outline": [
            "00:00 - Toplantı Zehirlenmesi: Standup'lar ne zaman canavara dönüştü?",
            "03:40 - Asenkron Çalışma Protokolü: Slack + AI Digest Mimarisi",
            "07:50 - Canlı Toplantıları Sadece 'Blokaj Kırma' Seansına Dönüştürmek",
            "12:30 - Egzersiz: Takımınız için 1 günlük asenkron standup deneyi tasarlayın"
        ]
    },

    # LESSON 14
    {
        "id": 14,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 14: Kusursuz User Story ve Task Yazımı: AI Destekli Acceptance Criteria & Edge-Case Motoru",
        "title_en": "Lesson 14: Precision User Stories: AI-Driven Acceptance Criteria & Edge-Case Engines",
        "level": "Orta / Mid Lead",
        "summary_tr": "Muğlak yazılmış 'Kullanıcı giriş yapabilmeli' biletlerine son: LLM ile sınır durumları (edge-cases), güvenlik açıklarını ve Given-When-Then kriterlerini otomatik üretmek.",
        "summary_en": "Vaporizing vague Jira cards like 'Build user login': Using LLMs to extrapolate obscure edge cases, security failure modes, and Given-When-Then contracts.",
        "eli5_metaphor_tr": "Mimara gidip 'Bana güzel bir ev yap' dersen, sana çatısı camdan olan ama tuvalet kapısı olmayan bir ev yapabilir; çünkü detay vermedin. Kusursuz bir bilet yazmak, inşaat ustasına kapı kollarının vidasına kadar her ölçüyü vermektir. AI, senin aklına gelmeyen 'Peki ya elektrik kesilirse o kapı nasıl açılacak?' sorusunu saniyeler içinde bulan mimari denetçindir.",
        "eli5_metaphor_en": "Telling a contractor 'build me a nice house' results in a glass roof and no bathroom doors. Writing precision Jira cards means defining tolerances down to the millimeter. AI is your master inspector asking in two seconds: 'What happens when power fails mid-transaction?'",
        "comparison_table": [
            {"topic": "Kabul Kriteri (AC)", "old_way": "1 cümle: 'Kullanıcı şifresini sıfırlayabilmeli.'", "ai_way": "Given-When-Then formatında 8 adet sınır durum (rate limit, süresi dolmuş token, brute-force vb.)."},
            {"topic": "Hata Tespiti", "old_way": "Edge case'leri QA test ederken veya canlı ortamda müşteriler patlayınca öğrenmek.", "ai_way": "Bilet yazılırken AI ile 20 olası uç senaryoyu simüle edip tasarım aşamasında engellemek."},
            {"topic": "Geliştirici Netliği", "old_way": "Yazılımcının 3 gün boyunca PM'e 'Burada ne demek istediniz?' diye soru sorması.", "ai_way": "Bileti alan mühendisin sıfır sürtünmeyle doğrudan koda ve teste başlayabilmesi."}
        ],
        "framework_steps_tr": [
            "1. Given-When-Then Standartı: Her bilete davranış odaklı (BDD) test edilebilir kriterler zorunlu kılınmalıdır.",
            "2. Edge-Case Fırtınası (LLM Promptu): Ürün yöneticisinin yazdığı taslağı LLM'e besleyip: 'Bu özellikte patlayabilecek en acımasız 5 uç durumu çıkar' de.",
            "3. Negatif Akışları Unutma: Sadece mutlu yol (happy path) değil; ağ kopması, yetkisiz erişim, eşzamanlı istek (race condition) senaryolarını ekle.",
            "4. Task Bölme (Slicing): 5 günden büyük biletleri AI ile 1'er günlük bağımsız test edilebilir alt parçalara (sub-tasks) böl."
        ],
        "framework_steps_en": [
            "1. Enforce BDD Given-When-Then: Stories without verifiable behavioral outcomes are rejected before refinement.",
            "2. The Edge-Case Gauntlet: Feed the product draft to Claude: 'Uncover 5 malicious failure states and race conditions for this flow.'",
            "3. Specify Unhappy Paths: Mandate explicit criteria for network timeouts, 401 unauthorized retries, and database idempotency.",
            "4. Atomic Slicing: Slice any card estimated over 3 days into 1-day independently shippable vertical increments via LLM decomposition."
        ],
        "case_study_tr": "Bir e-ticaret takımında 'Kullanıcı kupon kodu uygulayabilmeli' diye açılan tek satırlık bilet yüzünden büyük kriz çıktı. Mühendis mutlu yolu yazdı ama aynı kuponun 2 farklı sekmede aynı anda kullanılabileceğini (race condition) düşünmedi. Şirket 1 gecede 180.000 TL zarar etti. Lead Selin bir kural getirdi: Artık her bilet AI tabanlı 'Edge-Case Botu'ndan geçmeden sprint'e alınamaz. O tarihten sonra logic bug kaynaklı finansal açık sıfırlandı.",
        "case_study_en": "A fintech squad shipped a one-liner ticket: 'Allow users to apply promo coupons.' Devs built the happy path but missed an idempotency race condition: users opened 4 browser tabs and redeemed the coupon 4 times simultaneously, costing the business $45,000 overnight. Lead Selin instituted an AI Edge-Case Pre-flight gate: no card enters active sprints without AI failure-mode analysis. Zero logic loopholes occurred since.",
        "ai_prompts": [
            {
                "title": "Kusursuz User Story ve Edge-Case Üretici Promptu",
                "prompt": "Sen dünyanın en titiz Senior Product Owner ve QA Architect'isin. Şu iş gereksinimi için: [GEREKSİNİM]. Bana şunları üret: 1) Net kullanıcı değeri (As a / I want / So that), 2) Given-When-Then formatında 5 mutlu yol ve 5 negatif yol kabul kriteri, 3) Güvenlik, performans ve race condition içeren 3 gizli edge-case, 4) Bu işi en fazla 1 günlük 3 bağımsız alt taska bölme planı."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Kullanıcı giriş yapabilmeli' diye 3 kelimelik bilet açan Product Manager ile kafayı yiyen yazılımcı. AI'ın gereksinim yazımını nasıl dönüştürdüğü, edge-case avcılığı ve yazılımcı-ürün barışının sırları üzerine eğlenceli bir bölüm.",
        "udemy_outline": [
            "00:00 - Muğlak Biletlerin Gizli Maliyeti: Şirketler Neden Para Kaybeder?",
            "04:10 - Given-When-Then Formülünün Gücü",
            "08:35 - AI Edge-Case Motoru: Race Condition ve Güvenlik Açıklarını Önceden Yakalamak",
            "13:50 - Egzersiz: Kötü yazılmış 3 gerçek Jira biletini AI ile mükemmelleştirin"
        ]
    },

    # LESSON 15
    {
        "id": 15,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 15: Sprint Planlama ve Efor Tahmini: AI ile Story Point Yanılsamalarından Kurtulmak",
        "title_en": "Lesson 15: AI-Driven Estimation & Velocity Forecasting: Beyond Story Point Illusions",
        "level": "Orta / Mid Lead",
        "summary_tr": "Planning Poker kartları sallayarak saatlerce tartışmaya son: Tarihsel git commitleri, PR büyüklükleri ve AI analitiğiyle gerçekçi teslimat tahminleri.",
        "summary_en": "Ditching 3-hour Planning Poker rituals: Using historical repository velocity, PR scope, and probabilistic Monte Carlo AI models for delivery forecasts.",
        "eli5_metaphor_tr": "Bir marangozun bir masanın kaç günde biteceğini masaya bakıp fal açarak tahmin etmesi yerine; elindeki ağacın sertliğine, atölyedeki personelin hızına ve son 20 masada çıkan ortalama gecikmelere bakıp 'Bu masa %90 ihtimalle Perşembe öğleden sonra biter' demesidir.",
        "eli5_metaphor_en": "Instead of a carpenter gazing into a crystal ball to guess when a dining table will be finished, they look at wood hardness, shop capacity, and past delivery stats to assert: 'With 90% confidence, this table ships Thursday at 3 PM.'",
        "comparison_table": [
            {"topic": "Tahmin Yöntemi", "old_way": "Planning Poker kartı fırlatıp 5 mi olsun 8 mi olsun diye 40 dakika kavga etmek.", "ai_way": "Biletin karmaşıklığını benzer geçmiş 50 PR ile kıyaslayıp güven aralığı çıkarmak."},
            {"topic": "Kapasite Hesabı", "old_way": "'8 kişi x 8 saat = 64 saatlik iş alırız' yanılgısı.", "ai_way": "Toplantılar, PR review ve destek nöbetlerini düşerek net odak kapasitesini (Focus Factor) hesaplamak."},
            {"topic": "Doğruluk", "old_way": "Her sprintin son günü yetiştirilemeyen biletlerin sonraki sprinte sarkması.", "ai_way": "Monte Carlo simülasyonu ile %85 kesinlikle bitiş tarihi vermek."}
        ],
        "framework_steps_tr": [
            "1. Fibonacci Kart Savaşlarını Bitir: Story point tartışmalarını maksimum 5 dakika ile sınırla; anlaşmazlık varsa işi ikiye böl.",
            "2. Tarihsel Veri ile Besle: Takımın son 6 aydaki PR kapatma sürelerini ve bilet büyüklüklerini bir veri seti olarak tut.",
            "3. Olasılıksal Tahmin (Probabilistic Forecasting): 'Bu iş 3 günde biter' deme; 'Bu iş %50 ihtimalle 2 günde, %85 ihtimalle 4 günde biter' de.",
            "4. Scope Paring (Kapsam Tıraşlama): Sprint dolduğunda daha fazla mesai isteme; iş birimiyle konuşup 'Must Have' dışındaki özellikleri bir sonraki sürüme kaydır."
        ],
        "framework_steps_en": [
            "1. Kill Fibonacci Poker Marathons: Cap estimation debates at 3 minutes; if team estimates diverge widely, slice the story.",
            "2. Mine Historical Lead Times: Feed past pull request churn, review cycles, and merge durations into your planning models.",
            "3. Probabilistic Forecasting: Stop giving single-point dates; communicate confidence bands: '85% confidence to ship by Friday, 95% by Monday.'",
            "4. Scope Trimming Over Overtime: When capacity shrinks, never demand weekend crunch; negotiate deferring 'Nice-to-Have' scope with product partners."
        ],
        "case_study_tr": "Bir lojistik yazılımında takım her sprint başında 50 story point alıyor, sprint sonunda ancak 25 puan teslim edebiliyordu. Yönetim takımı tembel sanıyordu. Yeni lead Emre, geçmiş 6 aylık sprint verilerini bir LLM analizine soktu. Ortaya çıktı ki takım zamanının %45'ini habersiz gelen production acil destek biletlerine harcıyordu. Emre sprint kapasitesini %50 düşürdü ve 1 mühendisi dönüşümlü destek nöbetçisi (Firefighter) yaptı. Takımın teslimat başarısı %48'den %96'ya çıktı.",
        "case_study_en": "A logistics tech squad consistently committed to 50 story points and delivered barely 25. Management assumed laziness. Incoming lead Emre ran team git history through an AI log synthesizer. The discovery: engineers were interrupted by unmanaged production escalations 45% of the time. Emre halved planned story capacity and created a rotating 'Firefighter' on-call desk. Sprint commitment reliability shot up from 48% to 96%.",
        "ai_prompts": [
            {
                "title": "Tarihsel Veriye Dayalı Sprint Kapasite ve Risk Analizörü",
                "prompt": "Takımımız 6 yazılımcıdan oluşuyor. Son 4 sprintteki planlanan vs tamamlanan işlerimiz ve karşılaştığımız engeller şunlar: [VERİLER]. Bu sprint için planlanan bilet listesi de ektedir. Bana: 1) Bu sprintin başarıyla tamamlanma olasılık yüzdesini hesapla, 2) En büyük risk taşıyan 2 bileti ve nedenini belirt, 3) Riski düşürmek için hangi 2 biletin kapsamının küçültülmesi gerektiğini öner."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Planning Poker bir tiyatro mudur?' tartışması. 5 puan mı 8 puan mı kavgası yapan yazılımcıların komedisi ve veri odaklı yapay zeka tahminlerinin takımları nasıl aşırı vaat ve tükenmişlikten kurtardığı.",
        "udemy_outline": [
            "00:00 - Story Point İllüzyonu: Neden tahminlerimiz hep yanılıyor?",
            "04:20 - Monte Carlo Simülasyonu ve Olasılıksal Planlama Mantığı",
            "08:45 - Odak Faktörü (Focus Factor): Gerçekçi Mühendislik Kapasitesi",
            "13:10 - Egzersiz: Takımınızın son 3 sprint verisini AI ile analiz edip gerçek kapasitenizi bulun"
        ]
    },

    # LESSON 16
    {
        "id": 16,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 16: Retrospektifleri Aksiyona Dönüştürmek: AI Sentiment Analizi ve Gizli Kök Nedenler",
        "title_en": "Lesson 16: Retrospectives That Actually Change Things: AI Sentiment Analysis & Root Causes",
        "level": "Orta / Mid Lead",
        "summary_tr": "Sürekli aynı şikayetlerin yazıldığı ama hiçbir şeyin değişmediği 'Post-it duvarı' retrospektiflerine son: Duygu analizi, 5 Neden analizi ve somut biletler.",
        "summary_en": "Breaking the cycle of toothless retrospective theater: AI sentiment extraction, 5-Whys automation, and translating team gripes into funded Jira work.",
        "eli5_metaphor_tr": "Her ay arkadaşlarla toplanıp 'Kilo vermemiz lazım, çok tatlı yiyoruz' deyip ardından hemen pizza sipariş etmeye benzer. Retrospektif sadece dertleşip rahatlama seansı değildir; masadan kimin hangi spora yazılacağını ve buzdolabındaki tatlıları kimin çöpe atacağını belirleyen eylem planıyla kalkmaktır.",
        "eli5_metaphor_en": "Meeting friends every month to lament: 'We really must lose weight,' and immediately ordering extra large pizzas. A retrospective is not an emotional therapy vent; you must leave with assigned dates, clear owners, and removed temptations.",
        "comparison_table": [
            {"topic": "Katılım", "old_way": "Aynı 2 kişinin konuşması, içe kapanık mühendislerin susması.", "ai_way": "Anonim dijital retro kartlarının AI ile gruplanıp tarafsızca oylanması."},
            {"topic": "Aksiyon Takibi", "old_way": "Retro panosunda unutulan 'İletişimi artıralım' gibi soyut temenniler.", "ai_way": "Maksimum 2 adet somut, sahibi ve bitiş tarihi olan Jira taskına dönüştürmek."},
            {"topic": "Süreç İlerlemesi", "old_way": "Sprintler geçtikçe aynı sorunların sürekli tekrar etmesi.", "ai_way": "Son 5 retronun duygu ve konu haritasını AI ile karşılaştırıp iyileşmeyi ölçmek."}
        ],
        "framework_steps_tr": [
            "1. Soyut Şikayetleri Yasakla: 'İletişim kötü' yerine 'Hangi spesifik olayda kim kime ulaşamadı?' sorusuyla köke in.",
            "2. 5 Neden (5-Whys) Kuralı: Sorunun yüzeydeki haline değil, 5 kez 'Neden?' sorarak organizasyonel kök nedene ulaş.",
            "3. Maksimum 2 Aksiyon İlkesi: Bir retroda 10 aksiyon çıkarırsan hiçbiri yapılmaz; sadece en acil 2 aksiyonu al ve bir sonraki sprintin board'una koy.",
            "4. AI Retro Hafızası: Bir LLM'e son 3 ayın retro kayıtlarını verip: 'Takımın kronikleşen ve görmezden geldiği asıl yarası ne?' sorusunu sor."
        ],
        "framework_steps_en": [
            "1. Ban Vague Complaining: Transform 'Communication is bad' into 'In which specific incident did an API contract change without notification?'",
            "2. AI-Assisted 5-Whys: Dig beneath superficial symptoms by chaining five probing causal inquiries into the engineering workflow.",
            "3. The Rule of 2 Actions: If a retro produces 8 action items, zero get done. Pick exactly two high-leverage fixes and assign sprint story points to them.",
            "4. Retrospective Longitudinal Memory: Query past quarters of retro transcripts: 'Which pain points have we talked about 3 times without solving?'"
        ],
        "case_study_tr": "Bir mobil uygulama ekibinde her retroda 'Release süreci çok yavaş ve sancılı' maddesi çıkıyor, herkes başını sallıyor ama 8 aydır hiçbir şey değişmiyordu. Yeni lead Aslı, retronun sonunda AI kullanarak kök neden analizi yaptı. Sorunun asıl kaynağının manuel Apple Store sertifika yenilemesi olduğu çıktı. Aslı o sprintteki bir özellik biletini erteledi, 1 günlük Fastlane CI/CD otomasyon bileti açtı. Sonraki retroda bu şikayet tarihe karıştı.",
        "case_study_en": "A mobile team raised 'Release process is too slow' in 8 consecutive retrospectives without anyone taking action. Incoming lead Asli ingested retro notes into Claude and executed an automated 5-Whys drilldown. Root cause: manual iOS provisioning profile renewals. She swapped out a low-priority feature for a 1-day Fastlane automation task. In the subsequent retro, the 8-month complaint vanished forever.",
        "ai_prompts": [
            {
                "title": "Retrospektif Kartlarını Kök Neden ve Aksiyona Dönüştürücü",
                "prompt": "Takımımızın bu sprint retrosunda yazdığı anonim geri bildirimler aşağıdadır: [KARTLAR]. Sen çevik süreçler ve insan psikolojisi uzmanısın. 1) Bu yorumlardaki gizli duygu durumunu (bıkkınlık, heyecan, güvensizlik) analiz et, 2) Benzer konuları 3 ana temada kümele, 3) '5 Neden' metodolojisini kullanarak en kritik problemin kök nedenini bul, 4) Önümüzdeki sprinte doğrudan ekleyebileceğimiz 2 adet ölçülebilir Jira aksiyon bileti yaz."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Retrospektifler bir terapi grubu mudur yoksa mühendislik laboratuvarı mı?' Post-it yapıştırıp hiçbir şey yapmayan takımlarla dalga geçen ve aksiyon odaklı retrospektifin dönüştürücü gücünü anlatan bir bölüm.",
        "udemy_outline": [
            "00:00 - Retrospektif Yalanı: Neden kimse inanmıyor?",
            "03:45 - 5 Neden Analizi: Şikayetten Kök Nedene İnmek",
            "07:30 - AI ile Retro Notlarından Otomatik Jira Aksiyonu Çıkarmak",
            "12:15 - Egzersiz: Takımınızın son retro panosunu aksiyon motoruna dönüştürün"
        ]
    },

    # LESSON 17
    {
        "id": 17,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 17: Teknik Borç (Tech Debt) Yönetimi: İş Birimlerine Teknik Borcu Anlatmanın Formülü",
        "title_en": "Lesson 17: Selling Tech Debt to Executives with AI Cost-Benefit Reports",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Yönetime 'Kod çok çirkin, refactor etmemiz lazım' derseniz bütçe alamazsınız. Teknik borcu finansal risk, müşteri kaybı ve yavaşlama faizi olarak anlatma sanatı.",
        "summary_en": "Never pitch 'we need to clean ugly code' to a CFO. Translating architectural decay into financial balance-sheet risk, churn liability, and interest tax.",
        "eli5_metaphor_tr": "Kredi kartından sürekli asgari tutarı ödeyip alışveriş yapmaya devam edersen, bir gün kart faizleri maaşını yutar ve aç kalırsın. Teknik borç yazılımın kredi kartı borcudur. Her sprint sadece faizi ödersen yeni hiçbir özellik geliştiremez hale gelirsin. Lider, yönetime faizin ne kadar kabardığını gösteren finans müdürüdür.",
        "eli5_metaphor_en": "Paying only the minimum balance on a maxed-out credit card while buying more gadgets means interest soon devours your entire paycheck. Technical debt is your codebase's high-interest compounding debt. A lead acts as CFO, showing how the interest rate is choking feature delivery.",
        "comparison_table": [
            {"topic": "İletişim Dili", "old_way": "'Design pattern'larımız çok kötü, clean code prensiplerine uymuyor.'", "ai_way": "'Bu modül yüzünden her yeni özellik %40 daha geç çıkıyor ve ayda 40.000$ geliştirme maliyeti yakıyoruz.'"},
            {"topic": "Zaman Tahsisi", "old_way": "Yönetimden gizli gizli kod temizliği yapıp yakalanınca azar işitmek.", "ai_way": "Her sprint kapasitesinin %20'sini resmi olarak 'Teknik Sağlık ve Borç Ödeme'ye sabitlemek."},
            {"topic": "Gerekçelendirme", "old_way": "Sübjektif yazılımcı rahatsızlığı.", "ai_way": "AI ile kod karmaşıklığı (cyclomatic complexity), hata geçmişi ve maliyet simülasyonu raporu sunmak."}
        ],
        "framework_steps_tr": [
            "1. %20 Vergi Kuralı (Tech Debt Tax): Her sprint iş birimiyle anlaş: Kapasitenin %70'i yeni işler, %20'si teknik borç/altyapı, %10'u deneysel AI araştırması.",
            "2. Borcu Rakamlaştır: 'Bu servis kötü' deme; 'Bu servisteki her değişiklikte ortalama 2.3 regression bug çıkıyor ve 18 saatlik mühendislik mesaisi harcıyoruz' de.",
            "3. AI Destekli Maliyet-Fayda Raporu: Claude veya ChatGPT ile iş biriminin anlayacağı dilde 'Refactor ROI Yönetici Özeti' hazırla.",
            "4. Borç Kaydı Tut (Tech Debt Backlog): Teknik borçları halının altına süpürme; Jira'da ayrı bir etiketle takip et ve her ay en yüksek faizli olanı kapat."
        ],
        "framework_steps_en": [
            "1. The 20% Technical Health Tax: Negotiate an ironclad allocation: 70% features, 20% tech debt & platform resilience, 10% AI innovation.",
            "2. Monetize the Degradation: Quantify: 'Touches to this legacy billing module trigger 2.3 bugs per PR, bleeding $32,000 in monthly dev rework.'",
            "3. AI Executive ROI Justification: Generate an executive memo linking architectural refactoring directly to cloud bill drops and time-to-market acceleration.",
            "4. Maintain a Quantified Debt Register: Track technical liabilities as first-class backlog citizens with clear interest rate severity tags."
        ],
        "case_study_tr": "Bir lojistik platformunda ana sipariş veritabanı kilitleniyordu ama ürün müdürü ısrarla refactor bütçesi vermiyordu. Lead Mert, son 6 aydaki sipariş kesintilerini ve müşteri iptallerini çıkardı. AI ile bu kesintilerin şirkete faturasının 320.000$ olduğunu ve refactor için harcanacak 2 haftalık maliyetin sadece 15.000$ olduğunu gösteren 1 sayfalık CFO sunumu hazırladı. CFO sunumu görür görmez refactor için yeşil ışık yaktı.",
        "case_study_en": "At a freight platform, the core dispatch service deadlocked daily, but the VP of Product refused refactoring windows. Lead Mert aggregated 6 months of database locking logs and customer churn events. With an LLM, he drafted an executive memo demonstrating that outages had cost the firm $320,000, whereas a 2-week architectural refactor cost $15,000. The CFO greenlit the refactoring sprint within 10 minutes.",
        "ai_prompts": [
            {
                "title": "CFO ve Ürün Yönetimi İçin Teknik Borç ROI Raporlayıcı",
                "prompt": "Yazılım takımı lideriyim. Takımımızdaki şu teknik borcu refactor etmek için ürün yönetiminden 1 sprintlik onay almak istiyorum: [BORÇ TANIMI: Veritabanı kilitlemesi, monolitik yapı vb.]. Şu verileri kullan: [Son 3 aydaki hata sayısı, kaybedilen saatler]. Şirket CEO'su ve CFO'sunun anlayacağı, teknik terimlerden arındırılmış, finansal risk ve yatırım getirisi (ROI) odaklı 1 sayfalık ikna edici yönetici raporu yaz."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri sadece 'Clean Architecture' diye tutturan ama şirketin para kazandığını unutan idealist yazılımcı, diğeri ise sadece yeni özellik isteyen vizyonsuz Product Manager. Team Lead'in iki tarafı nasıl ikna ettiğini ve teknik borcu para diline çevirmenin mucizesini anlatan nefis bir diyalog.",
        "udemy_outline": [
            "00:00 - Neden Yöneticiler 'Refactor' Kelimesini Duyunca Kaçar?",
            "03:50 - Borç Faizi Formülü: Teknik Borcun Finansal Karşılığı",
            "07:45 - %20 Kuralını Ürün Yöneticisine Nasıl Kabul Ettirirsiniz?",
            "12:30 - Egzersiz: Takımınızın en büyük teknik borcunu AI ile 1 sayfalık yatırım raporuna dönüştürün"
        ]
    },

    # LESSON 18
    {
        "id": 18,
        "module_id": 3,
        "module_title_tr": "Bölüm 3: Çevik (Agile) Süreçlerin AI ile Evrimi",
        "module_title_en": "Module 3: Reinventing Agile & Delivery with AI",
        "title_tr": "Ders 18: Roadmapping & Capacity Planning: AI ile Değişen Önceliklere Karşı Esnek Planlama",
        "title_en": "Lesson 18: Dynamic Roadmapping & Capacity Planning in Volatile Business Climates",
        "level": "İleri / Advanced Lead",
        "summary_tr": "6 aylık statik yol haritalarının ilk haftada çöp olması krizine son: AI simülasyonları, dinamik senaryo planlama ve tampon süre (buffer) yönetimi.",
        "summary_en": "Static 6-month Gantt charts are dead on arrival. Building rolling, resilient roadmaps with AI scenario stress-testing and adaptive buffer modeling.",
        "eli5_metaphor_tr": "Hava durumunun sürekli değiştiği fırtınalı bir denizde 6 ay sonra tam saat 14:00'te hangi limana yanaşacağını taşa kazımak deliliktir. Akıllı kaptan rota çizer ama rüzgara, dalgaya ve yakıt durumuna göre anlık rota düzeltmeleri (waypoint) yapar. Yol haritası beton bir duvar değil, yaşayan bir GPS navigasyonudur.",
        "eli5_metaphor_en": "Carving a rigid 6-month sailing itinerary into stone during hurricane season is madness. An astute captain defines destinations but recalibrates waypoints constantly based on sea states and barometric pressure. Your roadmap is a live GPS, not a poured concrete monument.",
        "comparison_table": [
            {"topic": "Yol Haritası Yapısı", "old_way": "Aylara bölünmüş katı Gantt şemaları hazırlayıp ilk gecikmede paniklemek.", "ai_way": "Şimdi / Sonra / Gelecek (Now / Next / Later) sütunlarıyla dinamik önceliklendirme."},
            {"topic": "Kapasite Tamponu", "old_way": "Herkesin %100 kapasiteyle çalışacağını varsaymak (hastalık, izin, kriz yokmuş gibi).", "ai_way": "Tarihsel volatiliteye göre %25 'Bilinmeyenler Tamponu' (Unplanned Buffer) koymak."},
            {"topic": "Öncelik Değişimi", "old_way": "Yönetim yeni fikirle geldiğinde 'Tüm planımız bozuldu' diye kavga etmek.", "ai_way": "AI ile senaryo analizi yapıp: 'X'i eklersek Y 3 hafta sarkar, hangisini seçelim?' diyebilmek."}
        ],
        "framework_steps_tr": [
            "1. Now / Next / Later Çerçevesi: 'Şimdi' (Mevcut sprint - kesin), 'Sonraki' (Gelecek ay - yüksek ihtimal), 'Gelecek' (Sonraki çeyrek - vizyon).",
            "2. Değişim Değiş-Tokuşu (Trade-off Matrix): Ürün yöneticisi yeni bir özellik istediğinde 'Hayır' deme; 'Bu özelliği yol haritasına almamız için mevcut özelliklerden hangisini çıkarıyoruz?' de.",
            "3. AI Senaryo Simülasyonu: Beklenmeyen bir kriz veya talep geldiğinde, LLM'e takımın backlog'unu verip 3 farklı yol haritası senaryosu ürettir.",
            "4. Şeffaf İletişim: Paydaşlara tek bir tarih değil, güven aralıkları sun (Örn: Q3 ortası - Q3 sonu)."
        ],
        "framework_steps_en": [
            "1. Implement Now / Next / Later: Now (Committed current cycle), Next (High-confidence pipeline), Later (Strategic architectural direction).",
            "2. Enforce the Zero-Sum Rule: When execs inject new scope, don't say 'Impossible'; ask: 'Which active commitment are we trading out to make room?'",
            "3. AI Scenario Stress-Testing: Feed product dependency trees into an LLM to evaluate the ripple effect of delaying or accelerating key epics.",
            "4. Communicate Confidence Intervals: Never promise 'October 12th'; present 'Targeting late Q3 with 80% confidence window.'"
        ],
        "case_study_tr": "Bir B2B SaaS şirketinde CEO her pazartesi yeni bir müşteri talebiyle gelip takımın 3 aylık planını altüst ediyordu. Takım hiçbir projeyi bitiremez hale gelmişti. Lead Gökhan bir 'Dinamik Kapasite Simülatörü' kurdu. CEO her yeni fikirle geldiğinde, Gökhan 10 dakika içinde AI ile hazırlanmış etki raporunu önüne koydu: 'Bu özelliği alırsak Almanya lansmanı 4 hafta gecikecek ve 60.000€ ceza riski doğacak.' CEO ilk kez önceliklendirme yapmak zorunda kaldı ve takımın yol haritası korundu.",
        "case_study_en": "At a B2B SaaS startup, the CEO interrupted the engineering squad every Monday with ad-hoc enterprise feature requests, leaving 5 epics half-built. Incoming lead Gokhan implemented an AI Capacity Ripple Simulator. Next time the CEO requested an emergency customization, Gokhan presented an AI trade-off brief within 15 minutes: 'Adding this pushes the European rollout by 4 weeks, risking a $75,000 SLA penalty.' The CEO backed off, respecting engineering capacity.",
        "ai_prompts": [
            {
                "title": "Dinamik Yol Haritası ve Kapsam Değişim Simülatörü",
                "prompt": "Biz 8 kişilik bir yazılım mühendisliği ekibiyiz. Mevcut çeyreklik taahhütlerimiz: [ÖZELLİK LİSTESİ]. Yönetim az önce acil kodlu şu yeni özelliği eklememizi istedi: [YENİ TALEP]. Bir mühendislik direktörü olarak: 1) Bu talebin mevcut yol haritası üzerindeki domino etkisini analiz et, 2) Yönetime sunulmak üzere 3 farklı alternatif senaryo üret (A: Yeni talebi reddetme, B: Başka bir özelliği erteleme, C: Kapsamı daraltma), 3) Profesyonel ve yapıcı bir yönetici yanıt metni hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Her hafta yeni bir fikir bulan 'Parlak Fikirler CEO'su' ile fırtınada gemisini batırmamaya çalışan Team Lead. Statik Gantt şemalarının saçmalığı ve dinamik yol haritası oluşturmanın takımı nasıl kurtardığı üzerine harika bir podcast bölümü.",
        "udemy_outline": [
            "00:00 - 6 Aylık Planların İflası: Yazılımda Neden Planlar Tutmaz?",
            "04:15 - Now / Next / Later Modeli ile Çevik Yol Haritası",
            "08:30 - Yönetimden Gelen Ani Talepleri Savuşturmanın Formülü",
            "13:40 - Egzersiz: Takımınız için AI destekli dinamik kapasite tamponu hesaplayın"
        ]
    },

    # LESSON 19
    {
        "id": 19,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 19: AI Kod Kalitesi Paradoksu: 'Hızlı Üretilen Çöpü' Nasıl Engelleriz?",
        "title_en": "Lesson 19: The AI Code Sludge Trap: Setting Ironclad Quality Bars",
        "level": "Orta / Mid Lead",
        "summary_tr": "Yapay zekanın saniyeler içinde binlerce satır kod üretmesi bir lütuf mu yoksa teknik borç tsunamisi mi? Halüsinasyonlu bağımlılıkları ve spagetti mimariyi filtreleme.",
        "summary_en": "LLMs can generate 1,000 lines of syntactically valid garbage in 5 seconds. Engineering automated defense rings against AI hallucinations and architectural rot.",
        "eli5_metaphor_tr": "Sana dakikada 500 adet kurabiye basan süper hızlı bir kurabiye makinesi verseler sevinirsin. Ama makine kurabiyelerin içine un yerine bazen tebeşir tozu, şeker yerine tuz koyuyorsa ve sen kontrol etmeden müşteriye satarsan dükkanın batar. AI harika bir kurabiye makinesidir ama kalite kontrol şefi sensin.",
        "eli5_metaphor_en": "An automated machine that punches out 500 cookies a minute sounds amazing. But if it secretly substitutes plaster for flour or salt for sugar 5% of the time, feeding them to customers destroys your bakery. AI is a high-speed dough press; you are the uncompromising health inspector.",
        "comparison_table": [
            {"topic": "Kod Kabul Kriteri", "old_way": "'Çalışıyorsa ve testi geçiyorsa merge edelim.'", "ai_way": "'Mühendis kodu tam olarak anladı mı, mimari sınırlara uyuyor mu, gereksiz soyutlama var mı?'"},
            {"topic": "Bağımlılık Yönetimi", "old_way": "Paket yöneticisine kütüphaneleri sorgusuz eklemek.", "ai_way": "AI'ın uydurduğu sahte (hallucinated) npm/pip paketlerine ve güvenlik açıklarına karşı otomatik tarama."},
            {"topic": "Kod İnceleme Odağı", "old_way": "Noktalı virgül ve isimlendirme gibi yüzeysel şeyleri kontrol etmek.", "ai_way": "Sistem sınırları, domain bütünlüğü ve gelecekteki bakım maliyetini denetlemek."}
        ],
        "framework_steps_tr": [
            "1. 'Anlamadığın Kodu Asla Commit'leme' İlkesi: Takım kuralı: Bir mühendis AI'ın yazdığı kodun her satırının çalışma mantığını PR'da açıklayamıyorsa o PR reddedilir.",
            "2. Katı Linter ve Statik Analiz (SonarQube/Biome): AI'ın ürettiği gereksiz karmaşıklığı otomatik engelleyen kurallar koy.",
            "3. Halüsinasyonlu Paket Koruması: Package.json veya pom.xml'e giren her yeni kütüphane için otomatik güvenlik ve gerçeklik taraması (Socket.dev, Snyk) çalıştır.",
            "4. Mimari Birim Testleri (ArchUnit): Katmanlı mimari kurallarını (örn: Controller asla doğrudan Repository çağıramaz) kod seviyesinde test et."
        ],
        "framework_steps_en": [
            "1. The Comprehension Bar: Zero tolerance for 'Claude wrote this and it passed locally.' If an author cannot explain every branching branch, PR is rejected.",
            "2. Strict Static Analysis Guardrails: Run aggressive SonarQube, Biome, or ESLint rules that penalize unnecessary cyclomatic bloat.",
            "3. Hallucinated Dependency Defense: Enforce automated supply-chain scanners (Socket.dev, Snyk) that verify package authenticity and release history.",
            "4. Enforce Architecture Unit Tests: Use ArchUnit or dependency cruisers to programmatically fail builds that violate domain layering."
        ],
        "case_study_tr": "Bir fintech start-up'ında junior bir yazılımcı Cursor kullanarak 1 günde 2000 satırlık karmaşık bir mutabakat modülü yazdı ve PR hemen onaylandı. Canlıya çıktıktan 3 gün sonra sistemde bellek sızıntısı (memory leak) başladı; çünkü AI var olmayan bir caching kütüphanesi yerine el yordamıyla sonsuz bir Map nesnesi üretmişti. Sunucular çöktü. Lead Berke, takıma 'AI Code Sludge Kalkanı' getirdi: Her AI üretimi PR için ArchUnit kuralları ve bellek profil testleri zorunlu yapıldı.",
        "case_study_en": "An associate developer used Cursor to output 2,000 lines of complex transaction reconciliation code in one afternoon. It merged without scrutiny. Within 72 hours, production JVMs crashed under memory exhaustion: the LLM had improvised an unevicting static concurrent Map instead of using Redis. Lead Berke mandated the AI Sludge Protocol: memory profiling gates and ArchUnit architectural compliance for all AI-assisted features.",
        "ai_prompts": [
            {
                "title": "AI Tarafından Üretilen Kod İçin Titiz Kalite ve Güvenlik Denetçisi",
                "prompt": "Aşağıdaki kod bir yapay zeka asistanı tarafından üretilmiştir: [KODU EKLEYİN]. Sen dünyanın en acımasız Principal Software Architect'isin. Bu kodu şu açılardan parçala ve analiz et: 1) Gereksiz soyutlama ve kod karmaşıklığı (Over-engineering), 2) Gizli bellek sızıntıları, concurrency hataları ve edge-case açıkları, 3) Güvenlik riskleri veya uydurma API çağrıları, 4) Bu kodu %50 daha sade ve okunabilir yapacak somut refactoring önerileri."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Günde 10.000 satır kod yazıyorum' diye övünen acemi yazılımcı ile 'O 10.000 satırın bakımını kim yapacak evladım?' diyen bilge Principal Engineer. AI çağında kod miktarının değil, kod sadeliğinin erdemi üzerine muazzam bir sohbet.",
        "udemy_outline": [
            "00:00 - AI Kod Çamuru (Code Sludge) Tehdidi",
            "04:10 - 'Anlamadığın Kodu Kabul Etme': Takım Kültürü İnşası",
            "08:20 - ArchUnit ile Mimari Kuralları CI/CD'ye Kazımak",
            "13:30 - Egzersiz: Takımınızın kod tabanına ilk ArchUnit mimari testini ekleyin"
        ]
    },

    # LESSON 20
    {
        "id": 20,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 20: AI Destekli Code Review (PR) Devrimi: Botlar vs. İnsan Gözü",
        "title_en": "Lesson 20: Modern Pull Request Architecture: Multi-Tiered AI Reviews vs. Human Eyes",
        "level": "Orta / Mid Lead",
        "summary_tr": "İnsanları noktalı virgül ve tip kontrolü yapmaktan kurtarmak: AI PR botları ile ilk kademe filtreleme, insanların sadece mimariye ve iş mantığına odaklanması.",
        "summary_en": "Liberating engineers from syntax nitpicking in PRs: Designing multi-tiered review pipelines where AI handles style, security, and edge cases, leaving humans to evaluate business logic.",
        "eli5_metaphor_tr": "Havalimanındaki güvenlik kontrolü gibidir. Önce çantanı X-ray cihazından (AI Bot) geçirirler; bıçak, çakmak, su var mı makine 2 saniyede bakar. Güvenlik görevlisi (İnsan Mühendis) ise senin pasaportuna, yüzüne ve seyahat amacına bakar. Güvenlik görevlisinin çantanı açıp tek tek çoraplarını saymasına gerek yoktur.",
        "eli5_metaphor_en": "Airport security screening: Bags pass through high-speed X-ray scanners (AI review bots) that instantly flag prohibited liquids and contraband. The passport officer (Human Engineer) assesses passenger identity and travel intent. Having the border officer dig through laundry to count socks manually is pure waste.",
        "comparison_table": [
            {"topic": "PR İnceleme Süresi", "old_way": "PR'ın 4 gün boyunca listede bekleyip unutulması.", "ai_way": "AI botunun ilk 60 saniyede inceleme yapması, insanın 20 dakikada onaylaması."},
            {"topic": "İnceleme İçeriği", "old_way": "Yorumların %80'inin formatlama, isimlendirme ve küçük detaylar olması.", "ai_way": "Formatlamayı botun düzeltmesi; insanların sadece domain mimarisine odaklanması."},
            {"topic": "PR Boyutu", "old_way": "80 dosyalık devasa PR'lar ('Looks Good To Me' deyip geçilirdi).", "ai_way": "Maksimum 250 satırlık küçük, atomik ve AI özetli PR standartı."}
        ],
        "framework_steps_tr": [
            "1. İki Kademeli PR Filtresi (Two-Tier Review): 1. Kademe: Linter + AI PR Bot (Coderabbit / GitHub Copilot for PRs). 2. Kademe: İnsan mühendis.",
            "2. Bot Geçmeden İnsan Bakamaz: AI botu güvenlik açığı veya test eksikliği bulduysa insan mühendisin takvimine inceleme bildirimi düşmez.",
            "3. 250 Satır Kuralı: 250 satırdan büyük PR'lar incelemeyi imkansız kılar. Büyük işleri feature flag arkasında küçük PR'lara böldür.",
            "4. PR Açıklama Şablonu: Mühendis PR açarken 'Bu PR neyi çözüyor?' ve 'Hangi testler yapıldı?' kısımlarını AI ile özetlemek zorundadır."
        ],
        "framework_steps_en": [
            "1. Two-Tier Review Architecture: Tier 1: Static analysis + AI Reviewer (CodeRabbit / Copilot). Tier 2: Human domain peer.",
            "2. Block on Automated Verdict: Humans are shielded from reviewing PRs until all AI safety, mutation, and style checks pass green.",
            "3. The 250-Line Constraint: PRs exceeding 250 lines suffer from rubber-stamping. Require feature-flagged micro-PRs.",
            "4. Structured PR Contracts: Authors must include an AI-synthesized impact summary, context checklist, and local verification proof."
        ],
        "case_study_tr": "Bir e-ticaret takımında PR review süresi ortalama 4.2 gündü ve mühendisler sürekli birbirinin koduna 'Burada boşluk bırakmamışsın' diye passive-aggressive yorumlar yazıyordu. Lead Hakan, takıma otomatik AI PR botu entegre etti ve linter kurallarını katılaştırdı. Biçimsel tüm tartışmalar bitti. PR bekleme süresi 4.2 günden 6 saate indi; mühendislerin birbirine saygısı ve takım morali hissedilir derecede arttı.",
        "case_study_en": "At a marketplace startup, average PR turnaround lagged at 4.2 days. Comments were toxic nitpicks: 'indentation is off,' 'rename this variable.' Lead Hakan configured an automated AI review bot and auto-formatter in the GitHub Actions pipeline. Superficial debates evaporated. Review turnaround plummeted to 6 hours, while peer feedback shifted to deep domain questions.",
        "ai_prompts": [
            {
                "title": "Kıdemli Yazılım Mühendisi Düzeyinde PR İnceleme Botu Promptu",
                "prompt": "Sen GitHub PR'larını inceleyen kıdemli bir mühendissin. Aşağıdaki git diff çıktısını incele: [GIT DIFF]. Şu kurallara uy: 1) İsimlendirme veya formatlama gibi linter'ın çözeceği şeylere yorum yapma, 2) Olası null-pointer hatalarını, race condition risklerini ve eksik yazılmış test senaryolarını tespit et, 3) Performans darboğazı (N+1 query vb.) var mı belirt, 4) Yorumlarını yapıcı, net ve gerekçeli olarak markdown formatında listele."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 1500 satırlık devasa bir PR'ı 'LGTM' (Looks Good To Me) diyerek hiç bakmadan onaylayan tembel mühendis ile noktalı virgül yüzünden kriz çıkaran pedantik mühendis. AI botlarının code review kültürünü nasıl medenileştirdiğini anlatan eğlenceli bir bölüm.",
        "udemy_outline": [
            "00:00 - Code Review Kabusu: Neden PR'lar günlerce bekler?",
            "04:20 - İki Kademeli PR Mimarisi: Botlar ve İnsanların Görev Dağılımı",
            "08:45 - 250 Satır Kuralı ve Atomik PR Kültürü",
            "13:10 - Egzersiz: Takımınızın GitHub reposuna AI Code Reviewer botu bağlayın"
        ]
    },

    # LESSON 21
    {
        "id": 21,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 21: Architecture Decision Records (ADR) ve RFC Kültürü: AI ile Mimari Belgeleme",
        "title_en": "Lesson 21: Zero-Friction ADRs & RFC Consensus with LLMs",
        "level": "İleri / Advanced Lead",
        "summary_tr": "'Biz bu kararı 2 yıl önce neden böyle almıştık?' sorusuna hafıza kaybı yaşamamak için: Sıfır sürtünmeyle ADR yazmak ve RFC konsensüsünü AI ile yönetmek.",
        "summary_en": "Curing collective amnesia: 'Why on earth did we pick this DB 2 years ago?' Drafting friction-free Architecture Decision Records (ADRs) and driving team RFC alignment via AI.",
        "eli5_metaphor_tr": "Bir gemi seyrederken kaptan seyir defterine 'Fırtına yaklaştığı için rotayı güneye kırdık' diye yazar. 2 yıl sonra yeni bir kaptan geldiğinde 'Bu gemi neden güneye gitmiş ki?' diye şaşırmaz. ADR, yazılım takımının seyir defteridir; hangi kararı neden aldığını gelecekteki kendine anlatmaktır.",
        "eli5_metaphor_en": "A ship captain logs in the journal: 'Veered 20 degrees south to dodge hurricane alpha.' Two years later, a relief captain understands the maneuver immediately. An ADR is your software's nautical log; it explains trade-offs to your future self.",
        "comparison_table": [
            {"topic": "Karar Belgeleme", "old_way": "Kararın Slack konuşmalarında kaybolup gitmesi, kimsenin hatırlamaması.", "ai_way": "Karar anında 10 dakikada AI ile şablon doldurulup repoya markdown olarak commit'lenmesi."},
            {"topic": "Format", "old_way": "Kimsenin okumadığı 40 sayfalık ağır Confluence belgeleri.", "ai_way": "1 sayfalık net ADR: Bağlam (Context), Karar (Decision), Sonuçlar (Consequences)."},
            {"topic": "Geri Bildirim", "old_way": "Mühendislerin çekinip fikir belirtmemesi.", "ai_way": "RFC taslağını LLM'e verip 'Bu mimarideki 3 gizli riski bul' diyerek tartışmayı açmak."}
        ],
        "framework_steps_tr": [
            "1. Standart ADR Şablonu: Başlık, Durum (Kabul / Öneri), Bağlam, Karar, Sonuçlar (Olumlu ve Olumsuz).",
            "2. Repoda Kodla Beraber Yaşasın: Dokümanlar Confluence'ta çürümesin; projenin `/docs/adr/` dizininde markdown olarak tutulsun.",
            "3. AI ile Hızlı Taslak: Slack'teki bir teknik tartışmayı kopyalayıp LLM'e besle: 'Bu tartışmadan resmi bir ADR taslağı çıkar.'",
            "4. RFC (Request for Comments) Süreci: Kritik mimari değişikliklerde 1 haftalık RFC süresi aç; herkesin yorum yapmasını teşvik et."
        ],
        "framework_steps_en": [
            "1. Universal ADR Schema: Status (Proposed/Accepted), Context, Decision, Positive & Negative Consequences.",
            "2. Keep Docs Adjacent to Code: Ban isolated Confluence graveyards; persist ADRs as Markdown files inside `/docs/adr/` in the Git repo.",
            "3. Rapid Synthesis via LLM: Paste messy Slack technical debates into Claude: 'Distill this debate into a clean 1-page ADR.'",
            "4. Lightweight RFC Alignment: Open a 5-day RFC pull request for major domain pivots; solicit peer critiques before writing implementation code."
        ],
        "case_study_tr": "Bir ödeme şirketinde yeni gelen mimar, 'Neden PostgreSQL varken MongoDB kullanmışlar, bunlar amatör mü?' diyerek tüm sistemi PostgreSQL'e taşımak için 4 ay harcadı. Canlıya geçince sistem kilitlendi; çünkü MongoDB'nin esnek JSON yapısına ve coğrafi sharding özelliğine ihtiyaç varmış ama kimse neden seçildiğini yazmamıştı. Yeni lead Tarık kural koydu: 'ADR'ı olmayan hiçbir teknoloji seçimi geçerli değildir.' AI destekli ADR şablonuyla tüm geçmiş kararlar belgelendi.",
        "case_study_en": "An incoming staff architect looked at a payment gateway and scoffed: 'Why are they using Mongo alongside Postgres? Amateurs.' He led a 4-month rewrite. System melted on launch day because Mongo had been specifically selected for distributed geographical sharding—a nuance buried in deleted Slack channels. Lead Tarik enforced the ADR law: 'No architecture choice exists without an ADR commit.'",
        "ai_prompts": [
            {
                "title": "Tartışma Metninden Otomatik ADR (Architecture Decision Record) Oluşturucu",
                "prompt": "Biz modern bir mikroservis ekibiyiz. Ekip olarak şu konuda karar aldık: [KARAR DETAYI VE NEDENLERİ]. Bu kararı profesyonel bir Architecture Decision Record (ADR) haline getir. Şu başlıkları içersin: 1) Title & Status, 2) Context & Problem Statement, 3) Decision Outcome, 4) Positive Consequences, 5) Negative Consequences & Trade-offs, 6) Pros & Cons of Alternative Options."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Eski projeyi devralıp 'Bunu yazan ne düşünmüş olabilir?' diye saçını başını yolan yazılımcı ile ADR kültürünün gücünü anlatan lider. Kurumsal hafıza kaybının şirketlere maliyeti ve yapay zeka ile 5 dakikada ADR yazma yöntemleri.",
        "udemy_outline": [
            "00:00 - Kurumsal Hafıza Kaybı: Şirketler Neden Aynı Hataları Tekrarlar?",
            "04:10 - 1 Sayfalık Kusursuz ADR Mimarisi",
            "08:35 - Slack Tartışmasını AI ile ADR'a Dönüştürme Demosu",
            "13:20 - Egzersiz: Takımınızın son mimari kararını ADR formatında yazıp repoya commit'leyin"
        ]
    },

    # LESSON 22
    {
        "id": 22,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 22: Legacy Kodu Modernize Etmek: AI ile Tersine Mühendislik ve Güvenli Refactoring",
        "title_en": "Lesson 22: Modernizing Monoliths: AI Reverse Engineering & Characterization Testing",
        "level": "İleri / Advanced Lead",
        "summary_tr": "15 yıllık kimsenin dokunmaya cesaret edemediği spagetti kod tabanını patlatmadan modernize etmek: Characterization testleri, Strangler Fig deseni ve AI rehberliği.",
        "summary_en": "Safely refactoring the terrifying 10-year-old monolith that nobody dares touch: Characterization tests, Strangler Fig patterns, and LLM-guided decomposition.",
        "eli5_metaphor_tr": "Tarihi bir köprünün altından binlerce ton su akarken köprüyü havaya uçurup baştan yapamazsın. Önce köprünün her taşına sensör takarsın (Testler), sonra eski taşların yanına modern çelik halatlar eklersin (Strangler Fig), en sonunda eski taşları tek tek güvenle yenilersin.",
        "eli5_metaphor_en": "You don't dynamite a historic stone bridge while thousands of commuter cars are crossing it. You place strain gauges on every arch (Characterization tests), erect steel suspension cables alongside it (Strangler Fig pattern), and retire ancient keystones one by one.",
        "comparison_table": [
            {"topic": "Modernizasyon Yaklaşımı", "old_way": "'Tüm projeyi çöpe atıp sıfırdan yazacağız' (Büyük Yeniden Yazım Felaketi).", "ai_way": "Strangler Fig deseniyle modülleri parça parça, canlı trafiği bozmadan ayırmak."},
            {"topic": "Test Stratejisi", "old_way": "Hiç test olmadan dua ederek kodu değiştirmek.", "ai_way": "AI ile mevcut davranışın röntgenini çeken Karakterizasyon (Characterization) testleri üretmek."},
            {"topic": "Dokümantasyon Çözümleme", "old_way": "Emekli olmuş yazılımcıyı arayıp 'Bu fonksiyon ne yapıyordu?' diye sormak.", "ai_way": "Eski kodu LLM'e besleyip iş mantığı kurallarını ve edge-case'leri metin olarak deşifre etmek."}
        ],
        "framework_steps_tr": [
            "1. Asla Sıfırdan Yazma (The Second-System Effect): Sıfırdan yazım projelerinin %80'i başarısız olur ve bütçeyi tüketir. Daima evrimsel modernizasyonu seç.",
            "2. Karakterizasyon Testleri (Güvenlik Ağı): Kodu değiştirmeden önce, kodun şu anki tüm girdilerine verdiği çıktıları kaydeden testler yazdır.",
            "3. Strangler Fig Deseni: Yeni modülü monolith'in dışında modern dille yaz; API Gateway üzerinden trafiği kademeli olarak yeni servise yönlendir.",
            "4. AI ile Tersine Mühendislik: Anlaşılmaz 500 satırlık procedürel kodu LLM'e verip: 'Bu kodun içindeki gizli iş kurallarını çıkar' analizini al."
        ],
        "framework_steps_en": [
            "1. Resist the Total Rewrite Trap: 80% of greenfield rewrites crash and burn due to undocumented business domain edge cases. Choose evolutionary refactoring.",
            "2. Characterization Testing: Wrap the legacy subsystem with black-box tests capturing current behavior warts-and-all before editing a single line.",
            "3. Strangler Fig Architecture: Spin up the new service on the periphery; route traffic gradually via the API gateway using canary routing.",
            "4. AI Domain Reverse Engineering: Pass cryptic 1,000-line legacy procedures to an LLM: 'Extract implicit business policies embedded in these nested ifs.'"
        ],
        "case_study_tr": "Bir sigorta şirketinde 2008 yılından kalma Java 6 monolitik poliçe hesaplama motoru vardı. Kimse dokunamıyordu. Şirket 'Bunu baştan yazalım' dedi ve 1 yıl, 2 milyon dolar çöpe gitti. Yeni lead Sinan devreye girdi. Monolith'in girdilerini ve çıktılarını dinleyen bir loglama katmanı kurdu. Bu verileri Claude'a verip 300 adet otomatik karakterizasyon testi yazdırdı. Güvenlik ağı oluştuktan sonra motoru Spring Boot 3'e 6 haftada hatasız taşıdı.",
        "case_study_en": "An insurance giant relied on a 2008 Java 6 policy pricer that terrified every developer. A 1-year 'ground-up rewrite' failed catastrophically after burning $2M. Newly hired lead Sinan took over: tapped production payload streams to generate 300 characterization unit tests via Claude. With bulletproof behavioral regression tests in place, he decoupled and migrated the core pricer to Spring Boot 3 in 6 weeks with zero downtime.",
        "ai_prompts": [
            {
                "title": "Legacy Koddan Karakterizasyon Testi ve İş Mantığı Çıkarıcı",
                "prompt": "Aşağıda 10 yıllık dokümantasyonsuz bir legacy fonksiyon yer almaktadır: [KODU EKLEYİN]. 1) Bu kodun uyguladığı iş kurallarını madde madde açıkla, 2) Bu kodun mevcut davranışını kilitleyen (Characterization Tests) JUnit 5 / Jest test senaryolarını yaz, 3) Bu fonksiyonu Clean Code ve SOLID prensiplerine göre refactor etmek için adım adım bir dönüşüm stratejisi hazırla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Tüm projeyi sıfırdan yazalım!' diyen genç ve hevesli mühendis ile büyük yeniden yazımların mezarlığını görmüş bilge Lead. Strangler Fig deseni ve AI'ın legacy kodu çözen sihirli merceği üzerine harika bir bölüm.",
        "udemy_outline": [
            "00:00 - Büyük Yeniden Yazım Felaketi: Neden Sıfırdan Yazmamalısınız?",
            "04:30 - Karakterizasyon Testleri: Kodu Değiştirmeden Önce Kafese Almak",
            "08:45 - Strangler Fig Deseni ile Monolith Parçalama",
            "13:50 - Egzersiz: Takımınızdaki en korkulan legacy fonksiyon için AI ile karakterizasyon testi yazın"
        ]
    },

    # LESSON 23
    {
        "id": 23,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 23: Clean Architecture, Domain-Driven Design (DDD) ve AI Uyumlu Tasarım",
        "title_en": "Lesson 23: Clean Architecture, Domain-Driven Design (DDD) & AI-Friendly Systems",
        "level": "İleri / Advanced Lead",
        "summary_tr": "İyi tasarlanmış mimari neden yapay zekanın da en iyi dostudur? Zayıf bağlı (loosely coupled), zengin domain modelleri ve net sınırların AI üretkenliğine etkisi.",
        "summary_en": "Why clean domain abstractions accelerate LLM code generation: Designing modular, loosely coupled domain boundaries that AI agents can reason about effortlessly.",
        "eli5_metaphor_tr": "Eğer evinde çoraplar mutfakta, tencereler yatak odasında, kitaplar ise banyoda duruyorsa akıllı temizlik robotu (AI) evi temizlerken kafayı yer ve her şeyi birbirine katar. Ama evinde her şeyin yeri belliyse robot 10 dakikada evi pırıl pırıl yapar. Clean Architecture, kod evinin düzenidir.",
        "eli5_metaphor_en": "If socks live in the refrigerator, soup pots in the bedroom, and toothbrushes inside the couch, a smart robot vacuum loses its mind. If every item has a labeled compartment, the robot cleans in 10 minutes. Clean Architecture is setting up tidy rooms so AI agents can work with surgical precision.",
        "comparison_table": [
            {"topic": "Mimari Yapı", "old_way": "Veritabanı tablolarına göbekten bağlı Anemic Domain modelleri.", "ai_way": "İş kurallarını dış dünyadan (DB, Framework) izole eden Rich Domain modelleri."},
            {"topic": "AI'ın Anlama Hızı", "old_way": "Controller içinde 2000 satırlık karmaşık SQL sorguları ve logic.", "ai_way": "Her use-case'in tek bir sorumluluğu olması (Single Responsibility) sayesinde AI'ın %99 doğrulukla kod üretmesi."},
            {"topic": "Test Edilebilirlik", "old_way": "Test yazmak için tüm veritabanını ayağa kaldırma zorunluluğu.", "ai_way": "Saf domain mantığının sıfır bağımlılıkla milisaniyeler içinde test edilmesi."}
        ],
        "framework_steps_tr": [
            "1. Bağımlılık Kuralı (Dependency Inversion): İç katmanlar (Domain Entity ve Use Case) dış katmanları (DB, Web Framework) ASLA bilmemelidir.",
            "2. Ubiquitous Language (Ortak Dil): Kod içindeki sınıf isimleri ile iş biriminin konuştuğu kelimeler birebir aynı olmalıdır.",
            "3. Bounded Context Sınırları: Her servisin veya paketin net bir iş sınırı olmalıdır; sınırları aşan veri transferleri DTO'lar ile yapılmalıdır.",
            "4. AI-Friendly Repolar: Kod tabanını temiz modüllere böldüğünde, LLM'e sadece ilgili modülü bağlam (context) olarak verip kusursuz çıktılar alabilirsin."
        ],
        "framework_steps_en": [
            "1. The Core Dependency Inversion Rule: Business domain models and use cases must never depend on infrastructure, databases, or frameworks.",
            "2. Ubiquitous Language: Ensure code entities mirror exact business domain terminology spoken by customers and product managers.",
            "3. Strict Bounded Contexts: Model distinct domains independently; decouple cross-boundary communication with immutable DTO contracts.",
            "4. AI-Friendly Modularity: Clean modular architectures allow you to feed targeted module slices into LLMs without blowing context limits."
        ],
        "case_study_tr": "Bir kargo takip uygulamasında tüm iş mantığı veritabanı stored procedure'leri içine yazılmıştı. Geliştiriciler Copilot'a bir şey sorduğunda Copilot sürekli saçmalıyordu çünkü bağlamı göremiyordu. Lead Nilay, takımla birlikte Hexagonal (Ports & Adapters) mimariye geçti; iş mantığını saf Java domain sınıflarına topladı. Sonuç: Hem test coverage %92'ye çıktı hem de AI asistanlarının kod tamamlama doğruluğu %35'ten %94'e yükseldi.",
        "case_study_en": "A logistics app had its business logic buried in 5,000-line database stored procedures. LLM copilots failed constantly because they lacked contextual visibility. Lead Nilay orchestrated a refactoring into Hexagonal Architecture (Ports & Adapters), centralizing logic in pure, framework-free domain aggregates. Outcome: test coverage hit 92%, and AI code-completion accuracy soared from 35% to 94%.",
        "ai_prompts": [
            {
                "title": "Domain-Driven Design (DDD) ve Clean Architecture Dönüştürücü",
                "prompt": "Aşağıdaki kod veritabanı ve controller ile sıkı sıkıya bağlı (tightly coupled) bir yapıdadır: [KODU EKLEYİN]. Bu kodu Clean Architecture prensiplerine göre yeniden tasarla: 1) Saf Domain Entity sınıfı, 2) Use Case / Application Service katmanı, 3) Port (Interface) tanımları, 4) Neden bu yapının AI kodlama araçları için çok daha hatasız sonuç verdiğini açıkla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Architecture is dead, AI writes everything' diyen acemi yazılımcı ile 'Tam tersine, AI çağında kötü mimari ölüm fermanıdır!' diyen Software Architect. Clean Architecture ve DDD'nin yapay zekanın gücünü nasıl 10 katına çıkardığını anlatan derin bir sohbet.",
        "udemy_outline": [
            "00:00 - AI Neden Spagetti Kodda Boğulur?",
            "04:20 - Clean Architecture'ın 4 Katmanı: Domain'i Korumak",
            "08:45 - Domain-Driven Design (DDD) ve Bounded Context Mantığı",
            "13:30 - Egzersiz: Takımınızın en kritik 1 servisini Hexagonal mimariye dönüştürün"
        ]
    },

    # LESSON 24
    {
        "id": 24,
        "module_id": 4,
        "module_title_tr": "Bölüm 4: Mimari Liderlik ve Kod Kalitesi Standartları",
        "module_title_en": "Module 4: Architectural Stewardship & AI Code Quality",
        "title_tr": "Ders 24: Güvenlik (SecOps) ve Lisanslama: AI Üretimi Kodda Hallucination & Vulnerability Avı",
        "title_en": "Lesson 24: Security, License Compliance & Hunting Hallucinated CVEs in AI Code",
        "level": "İleri / Advanced Lead",
        "summary_tr": "Yapay zekanın ürettiği güvenlik açıkları (SQL Injection, XSS, insecure deserialization) ve telif hakkı (GPL sızıntısı) risklerine karşı Lead'in savunma kalkanı.",
        "summary_en": "Preventing catastrophic zero-days in AI-generated code: Neutralizing hallucinated packages, insecure deserialization, SQLi, and GPL viral license contamination.",
        "eli5_metaphor_tr": "Yolda bulduğun parlak bir USB belleği getirip şirketin sunucusuna takar mısın? Takmazsın; çünkü içinde virüs olabilir. Yapay zekanın sana internetten derleyip sunduğu her kod parçası da o sahipsiz USB bellek gibidir. İçinde gizli bir açık, eski bir kütüphane veya şirketinizi mahkemelik edecek lisanslı bir telif kodu olabilir.",
        "eli5_metaphor_en": "Would you pick up a random USB drive from a parking lot and plug it into your corporate production server? Of course not. An unverified AI code snippet is that mysterious USB stick. It might harbor stealth injection flaws or toxic GPL viral licenses that expose your IP.",
        "comparison_table": [
            {"topic": "Güvenlik Denetimi", "old_way": "Yılda bir kez penetrasyon testi yaptırıp çıkan 200 sayfalık PDF'i okumak.", "ai_way": "Her PR açıldığında otomatik SAST/DAST ve AI güvenlik ajanlarını çalıştırmak."},
            {"topic": "Lisans Riskleri", "old_way": "Yazılımcıların GPL/AGPL kod kopyalayıp şirketi telif davası riskine sokması.", "ai_way": "Telif koruma filtreleri (Public Code Filter) ve otomatik lisans tarayıcılar (FOSSA) kullanmak."},
            {"topic": "Paket Halüsinasyonu", "old_way": "Geliştiricinin AI'ın önerdiği paketi sorgulamadan npm install etmesi.", "ai_way": "Paketin indirilme sayısı, yazarı ve GitHub reposunu doğrulamadan kurulamayan şirket içi repo registry'si."}
        ],
        "framework_steps_tr": [
            "1. Slopsquatting Koruması: AI modelleri bazen var olmayan paket isimleri uydurur. Hackerlar bu isimlerde zararlı paketler yayınlar. Asla indirilme sayısı ve doğrulanmış yazarı olmayan paketi kurma.",
            "2. Public Code Filter'ı Açık Tut: GitHub Copilot ve Cursor'da 'Match public code' filtresini daima blokla; şirketin fikri mülkiyetini koru.",
            "3. DevSecOps Pipeline'ı: Git commit anında Secret Scanning (Trufflehog), PR anında SAST (Semgrep) ve bağımlılık taraması (Snyk) zorunlu olsun.",
            "4. LLM Özel Açıkları (OWASP Top 10 for LLM): Prompt injection ve veri sızıntısı senaryolarına karşı güvenlik eğitimleri düzenle."
        ],
        "framework_steps_en": [
            "1. Slopsquatting Defense: LLMs hallucinate non-existent package names. Threat actors register these exact package names with malware. Block unverified packages.",
            "2. Enforce Public Code Filters: Turn on GitHub Copilot / Cursor 'Block public code suggestions' to prevent GPL license contamination.",
            "3. Multi-Layered DevSecOps: Gate every PR on automated secret scanners (TruffleHog), SAST (Semgrep), and container dependency auditing (Snyk).",
            "4. Guard Against OWASP Top 10 for LLMs: Train your team against prompt injection, insecure output handling, and training data poisoning."
        ],
        "case_study_tr": "Bir sağlık teknolojisi start-up'ında yazılımcı, Claude'un önerdiği `fast-health-validator` isimli bir npm paketini projeye ekledi. Meğerse Claude o paketi halüsinasyon olarak uydurmuştu ve bir Rus hacker grubu o isimle zararlı bir paket açmıştı. Paket production'a çıktı ve 10.000 hastanın verisi dışarı sızdı. Şirket büyük bir ceza aldı. Yeni gelen lead Kerem, şirkete özel JFrog Artifactory kurdu ve onaylanmamış paketlerin yüklenmesini tamamen engelledi.",
        "case_study_en": "At a healthtech startup, an engineer installed `fast-health-validator` recommended by Claude. The LLM had hallucinated the package name; malicious actors had registered it with trojan spyware. It shipped to production, exfiltrating 10,000 patient records. Regulatory fines followed. Lead Kerem locked down the build pipeline: routed all dependencies through a curated private Artifactory proxy with zero-trust vetting.",
        "ai_prompts": [
            {
                "title": "SecOps Kapsamlı Güvenlik Açığı ve Lisans Riski Denetçisi",
                "prompt": "Aşağıdaki kod ve kullanılan kütüphaneleri incele: [KOD VE BAĞIMLILIKLAR]. Sen bir Ethical Hacker ve Baş Bilgi Güvenliği Yöneticisisin (CISO). 1) Bu kodda OWASP Top 10'a giren güvenlik açıkları (SQLi, XSS, SSRF, Deserialization) var mı? 2) Kullanılan kütüphanelerde lisans riski (GPL/AGPL) veya sahte paket riski var mı? 3) Kodun güvenli versiyonunu ve güvenlik açıklarını kapatan düzeltmeleri sun."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Yapay zeka bana kod yazdı, artık güvendeyiz' diyen naif yazılımcı ile AI'ın uydurduğu sahte paketlerle şirketlerin nasıl hacklendiğini anlatan siber güvenlik uzmanı. Tüyleri ürperten ama bilgilendirici ve eğlenceli bir podcast bölümü.",
        "udemy_outline": [
            "00:00 - Slopsquatting Nedir? Yapay Zekanın Sahte Paket Tuzağı",
            "04:20 - Telif Hakları ve GPL Riski: Şirketinizi Mahkemelik Olmaktan Koruyun",
            "08:45 - DevSecOps Hattı Kurmak: Semgrep ve Trufflehog ile Otomatik Güvenlik",
            "13:30 - Egzersiz: Takımınızın reposunda Semgrep taraması çalıştırıp güvenlik karnesi çıkarın"
        ]
    }
]
