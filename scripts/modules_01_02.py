# -*- coding: utf-8 -*-
"""
Modules 01 & 02:
Module 1: Koddan İnsana ve Yapay Zekaya Geçiş (The Transition: From Coder to AI-Augmented Leader)
Module 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi (AI-Powered People Leadership & 1-on-1s)
"""

LESSONS_01_02 = [
    # LESSON 1
    {
        "id": 1,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 01: 'Dün En İyi Koddum, Bugün Ne Yapıyorum?': Senior Dev Sendromu ve Team Lead Rolünün Şifreleri",
        "title_en": "Lesson 01: 'Yesterday I Was the Best Coder, What Now?': Senior Dev Syndrome & Cracking the Team Lead Code",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "En iyi kod yazan kişinin otomatik olarak yönetici yapıldığı o meşhur gün: Kod yazma bağımlılığından sistem ve insan orkestrasyonuna geçişin psikolojisi.",
        "summary_en": "The classic promotion trap: turning the best coder into an anxious manager. Breaking the coding dopamine addiction and shifting to people and system orchestration.",
        "eli5_metaphor_tr": "Bir restoranda en lezzetli pizzayı sen açıyordun diye seni restoran şefi yaptılar. Şimdi mutfakta hamur açmaya devam edersen siparişler yanar, garsonlar birbirine girer, müşteriler kaçar. Senin işin artık hamura dokunmak değil; fırının ısısını, tedarik zincirini, mutfak ekibinin motivasyonunu ve yapay zeka destekli akıllı sipariş fırınlarını yönetmektir.",
        "eli5_metaphor_en": "Just because you baked the crispiest pizza in the kitchen, they promoted you to Head Chef. If you keep kneading dough all night, orders burn, waiters fight, and guests leave. Your job is no longer touching the flour; it is orchestrating temperature, supply chains, team morale, and smart AI prep stations.",
        "comparison_table": [
            {"topic": "Başarı Ölçütü", "old_way": "Günde kaç satır kod yazdım, kaç karmaşık PR kapattım.", "ai_way": "Takımım ne kadar kesintisiz değer üretti, AI araçlarıyla kaç kat hızlandı."},
            {"topic": "Tıkanıklık Yaklaşımı", "old_way": "'Çekil kenara ben 10 dakikada yazarım' deyip klavyeyi kapmak.", "ai_way": "Mühendise doğru prompt ve mimari bağlamı vererek onun çözmesini sağlamak."},
            {"topic": "Zaman Yönetimi", "old_way": "Tüm gün IDE'ye gömülüp kulaklıkla dünyayı kapatmak.", "ai_way": "Stratejik bloklar, asenkron AI özetleri ve kesintisiz odak zamanı tasarlamak."}
        ],
        "framework_steps_tr": [
            "1. Dopamin Detoksu: IDE'de commit atmaktan gelen anlık tatmin yerine takımın ivmesinden (velocity) haz almayı öğren.",
            "2. %70 / %30 Kuralı: Zamanının %70'ini takım blokajlarını kaldırmaya, mimariye ve insanlara; %30'unu teknik vizyona ve AI deneysel prototiplerine ayır.",
            "3. Multiplier Mindset (Çarpan Etkisi): Kendi başına 10x mühendis olamazsın, ama 5 kişilik bir takımı AI ile 2x yaparak 10x etki yaratabilirsin.",
            "4. Görünmez İşleri Görünür Kıl: 1-on-1'lar, PR inceleme standartları ve mimari netlik şirket için koddan daha değerlidir."
        ],
        "framework_steps_en": [
            "1. Dopamine Detox: Swap the instant rush of git push for the compounding thrill of team velocity and unblocked engineers.",
            "2. The 70/30 Rule: Spend 70% of energy on unblocking, architecture, culture & 1-on-1s; reserve 30% for strategic AI prototyping.",
            "3. The Multiplier Mindset: You cannot be a lone 10x coder anymore; your mandate is enabling five developers to operate at 2x leverage.",
            "4. Surface Invisible Work: 1-on-1 coaching, clean ADRs, and automated dev guardrails produce vastly more business value than your lone commits."
        ],
        "case_study_tr": "Fintech ölçeğinde bir ödeme gateway projesinde yeni lead olan Barış, ilk 2 hafta boyunca sprintteki en zor 4 taskı üzerine aldı. Sonuç: Kendi tasklarını bitirdi ama takımdaki 3 junior mühendis bloklandığı için sprint %40 eksikle bitti. Barış tükenmişlik yaşadı. Çözüm: Barış ertesi sprint sıfır feature taskı aldı; AI tabanlı PR reviewer botları kurdu, mühendislerle eşleşti ve sprint başarısı %95'e fırladı.",
        "case_study_en": "At a fast-growing payment gateway, newly minted lead Baris assigned himself the 4 heaviest architectural tickets. He finished his own PRs at 2 AM, but his 3 junior engineers sat blocked waiting for reviews, causing a 40% sprint failure. By stepping back from feature cards next sprint and orchestrating AI review flows and pairing, team output leaped by 95%.",
        "ai_prompts": [
            {
                "title": "Senior Dev'den Team Lead'e Geçiş Zihniyet Koçu (Claude 3.7 / ChatGPT)",
                "prompt": "Sen dünyanın en deneyimli Mühendislik Direktörüsün. Dün kıdemli yazılımcıydım, bugün 6 kişilik bir takımın lideri oldum. Şu an sürekli kod yazma isteği ve 'ben yapmazsam yetişmeyecek' kaygısı duyuyorum. Bana bu haftaki önceliklerimi düzenlemem için 5 maddelik bir delegasyon ve zaman yönetimi eylem planı hazırla. Tonun samimi, esprili ama tavizsiz olsun."
            }
        ],
        "notebooklm_prompts": "İki podcast sunucusu: Biri eski 'hardcore' kodcu yeni Team Lead, diğeri deneyimli AI mühendislik koçu. 'Kod bağımlısı bir yazılımcının liderliğe geçtiğinde klavyeyi bırakamaması ve her şeye burnunu sokması' trajikomik hikayesini tartışın. Neden AI çağında kod yazan değil orkestrasyonu yapan kazanır?",
        "udemy_outline": [
            "00:00 - Hoş Geldiniz: Tebrikler, artık resmi olarak 'en yalnız' yazılımcısınız!",
            "03:15 - Dopamin Tuzağı: IDE'yi kapatamayan liderin yarattığı darboğaz",
            "07:40 - Multiplier Etkisi: 10x Coder Efsanesi vs. 10x Takım Gerçeği",
            "12:20 - İlk Hafta Egzersizi: Görev Listeni AI ile 3 Kategoriye Ayır (Delege et, Otomatize et, Sahiplen)"
        ]
    },

    # LESSON 2
    {
        "id": 2,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 02: AI Çağında Liderlik: Kod Yazan mı, Sistemi Orkestre Eden mi?",
        "title_en": "Lesson 02: Leadership in the AI Era: Code Writer vs. System Orchestrator",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "Birim kodun maliyetinin sıfıra yaklaştığı bir dünyada takım liderinin gerçek rolü: Mimari guardrail'lar, prompt standartları ve bağlam mühendisliği.",
        "summary_en": "When the marginal cost of syntax drops toward zero, a lead's value shifts from writing loops to defining context boundaries, guardrails, and agent orchestration.",
        "eli5_metaphor_tr": "Geleneksel lider bir kazma kürek takımının en hızlı kazan amelesiydi. AI çağındaki lider ise ekskavatör, dron ve otonom iş makineleri filosunu koordine eden şantiye şefidir. Kazmayı ameleden kapıp 'bana ver ben daha hızlı kazarım' diyen şantiye şefi komiktir.",
        "eli5_metaphor_en": "The legacy lead was the fastest digger in the trench. The AI-era lead is the mission controller directing a fleet of autonomous excavators and drones. Stepping down into the mud to grab a shovel shouting 'I dig faster!' is absurd.",
        "comparison_table": [
            {"topic": "Kod Üretimi", "old_way": "Her fonksiyonu sıfırdan el yordamıyla yazmak.", "ai_way": "Spec ve test kontratı tanımlayıp AI ajanlarına ürettirmek ve denetlemek."},
            {"topic": "Bilgi Paylaşımı", "old_way": "Haftalarca süren eski wiki sayfaları ve kulaktan kulağa aktarım.", "ai_way": "Kod tabanı RAG sistemi ve living context reposu oluşturmak."},
            {"topic": "Hata Ayıklama", "old_way": "Loglara 4 saat bakıp print satırları eklemek.", "ai_way": "Trace ve log bağlamını LLM'e besleyip hipotezleri saniyeler içinde doğrulamak."}
        ],
        "framework_steps_tr": [
            "1. Sözdiziminden (Syntax) Anlama (Semantics) Geç: Takımının başarısı artık dildeki noktalı virgüllerle değil, doğru iş mantığı modellemesiyle ölçülür.",
            "2. Guardrail Mimarisi Kur: Takımın önüne serbest AI bıraktığında kod çöplüğü oluşur. Linter, statik analiz ve test kapılarını zorunlu kıl.",
            "3. Context Is King: Takımına AI araçları dağıtmadan önce projenin mimari kurallarını `.cursorrules` veya sistem promptu haline getir.",
            "4. Orkestrasyon Liderliği: İş parçalarını bağımsız promptlanabilir modüllere bölme becerisini takımına aşıla."
        ],
        "framework_steps_en": [
            "1. Shift from Syntax to Semantics: Your team wins on business domain fidelity and sound abstractions, not raw typing speed.",
            "2. Build Robust Guardrails: Unchecked AI generation yields toxic code sprawl; enforce ironclad linter, mutation tests, and arch-unit rules.",
            "3. Context Is King: Before giving the team LLM access, formalize your system architecture rules into `.cursorrules` or context packs.",
            "4. Orchestrator Craftsmanship: Train your engineers to decompose complex business problems into verifiable, agent-ready sub-specs."
        ],
        "case_study_tr": "E-ticaret sepet servisinde çalışan 5 kişilik bir ekip, Copilot geldikten sonra PR sayısını 3 katına çıkardı ama production bug sayısı %60 arttı. Yeni lead Zeynep, kod yazmayı bıraktı; 2 gün boyunca ekibe özel 'Prompting & Verification' rehberi ve mimari test kapısı (ArchUnit) yazdı. Sonuç: Bug oranı sıfıra yaklaşırken net özellik teslim hızı 2.5 kat arttı.",
        "case_study_en": "An e-commerce team tripled their PR throughput after introducing LLM copilots, but production regressions spiked by 60%. Newly promoted lead Zeynep stepped in: she halted manual coding, introduced ArchUnit boundary constraints, and codified a Prompt Verification checklist. Production incidents plummeted back to zero while delivery remained 2.5x faster.",
        "ai_prompts": [
            {
                "title": "Takım İçi AI Kodlama Standartları ve Guardrail Oluşturucu",
                "prompt": "Biz modern bir mikroservis mimarisi (Spring Boot / TypeScript / PostgreSQL) kullanan 7 kişilik bir ekibiz. Takım üyelerimizin Cursor ve Copilot kullanırken kod kalitesini düşürmemesi için 'AI-Assisted Development Best Practices' manifestosu hazırla. Kurallar net, ölçülebilir ve PR kontrol listesi içerecek şekilde olsun."
            }
        ],
        "notebooklm_prompts": "Podcast sunucuları: Biri 'Yapay zeka yazılımcılığı bitirecek mi?' paniğinde olan geleneksel mühendis, diğeri ise 'Hayır, artık her mühendis küçük bir ekibin yöneticisi gibi çalışıyor' diyen AI Team Lead. Kod yazmaktan orkestrasyona geçişin sancılarını çarpıcı esprilerle masaya yatırın.",
        "udemy_outline": [
            "00:00 - Giriş: Kod yazmanın birim maliyeti sıfırlanırken lider ne yapar?",
            "04:10 - Kod Hamallığı vs. Sistem Mimarlığı",
            "08:35 - Guardrail Stratejisi: AI'ın ürettiği spagettiyi engellemek",
            "14:00 - Egzersiz: Takımınız için 5 maddelik AI Kullanım Sözleşmesi oluşturun"
        ]
    },

    # LESSON 3
    {
        "id": 3,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 03: İlk 90 Gün Hayatta Kalma Kiti: AI ile Hızlı Takım Analizi ve Güven İnşası",
        "title_en": "Lesson 03: The First 90 Days Survival Kit: AI Stakeholder Mapping & Rapid Trust Building",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "İlk 3 ayda takımı batırmadan güven kazanmak: Dinleme turları, gizli dinamikleri AI ile haritalama ve 'Quick Win' stratejisi.",
        "summary_en": "Securing early credibility without breaking production: listening tours, AI-assisted stakeholder mapping, and executing high-impact quick wins.",
        "eli5_metaphor_tr": "Yeni bir eve taşındığında ilk gün duvarları balyozla yıkıp açık mutfak yapmaya kalkışmazsın. Önce su boruları nereden geçiyor, komşular saat kaçta uyuyor, evin temeli sağlam mı onu anlarsın. İlk 90 gün balyoz günü değil, röntgen çekme ve güven inşa etme günüdür.",
        "eli5_metaphor_en": "When you buy an old house, you don't smash load-bearing walls on night one. You inspect the electrical panel, test water pressure, and see which floorboards creak. Your first 90 days are an MRI scan and trust-building phase, not a demolition derby.",
        "comparison_table": [
            {"topic": "İlk 30 Gün", "old_way": "Hemen mimariyi baştan yazma planı açıklayıp ekibi korkutmak.", "ai_way": "Herkesle 30 dk 1-on-1 yapıp transkriptleri AI ile analiz ederek gizli acıları bulmak."},
            {"topic": "İlk 60 Gün", "old_way": "Büyük vaatler verip üst yönetimi gereksiz beklentiye sokmak.", "ai_way": "Geliştirici ortamındaki en büyük 2 sürtünmeyi (CI süresi, flaky test) çözmek."},
            {"topic": "İlk 90 Gün", "old_way": "Yalnız kovboy gibi her kararı tek başına almaya çalışmak.", "ai_way": "Takımla mutabık kalınan ortak AI vizyonunu ve çeyreklik hedefleri sunmak."}
        ],
        "framework_steps_tr": [
            "1. 30 Günlük Dinleme Turu: Takım üyeleri, PM, QA ve komşu takım liderleriyle 'Seni en çok ne yavaşlatıyor?' görüşmesi yap.",
            "2. AI Destekli Acı Noktası Sentezi: Görüşme notlarındaki anonim temaları LLM ile analiz edip frekans matrisi çıkar.",
            "3. Düşük Risk, Yüksek Görünürlük (Quick Win): CI/CD süresini 25 dakikadan 7 dakikaya indirmek gibi herkesin hissedeceği bir zafer kazan.",
            "4. Güven Hesabına Yatırım: Mühendisleri toplantı bombardımanından koru; onların odak zamanını savunduğunu ilk günden göster."
        ],
        "framework_steps_en": [
            "1. 30-Day Listening Tour: Interview engineers, PMs, designers, and sibling leads: 'What single thing slows you down the most?'",
            "2. AI Pain-Point Synthesis: Pass anonymized notes to an LLM to extract recurring organizational bottlenecks and cognitive blockers.",
            "3. High-Leverage Quick Win: Fix something visceral—like cutting build times from 25m to 6m or killing a hated flaky test.",
            "4. Deposit into the Trust Bank: Shield the squad from calendar spam; prove on day one that you protect their deep focus."
        ],
        "case_study_tr": "Can, banka projesine lead olarak transfer oldu. İlk hafta kimseyle konuşmadan 'Tüm servisi Rust'a taşıyacağız' dediği için takım içi isyan çıktı ve 2 kıdemli istifa eşiğine geldi. Durumu toparlamak için Can dinleme turu başlattı. AI analizinde asıl sorunun Rust değil, haftalık 14 saat süren anlamsız durum toplantıları olduğu anlaşıldı. Toplantıları asenkron AI bültenine çevirdi; takımla barıştı ve istifalar durdu.",
        "case_study_en": "Can joined a tier-1 banking team and decreed on day three: 'We are rewriting everything in Rust.' Senior devs revolted, leading to two pending resignations. To rescue the team, Can pivoted to structured listening. An AI synthesis of 1-on-1 notes revealed the real friction was 14 hours of weekly status theater. He slashed meetings via async AI digests, earned trust, and prevented key attrition.",
        "ai_prompts": [
            {
                "title": "İlk 90 Gün Paydaş Haritalama ve Acı Noktası Analiz Promptu",
                "prompt": "Yeni bir yazılım takımının lideri oldum. 6 yazılımcı ve 1 ürün yöneticisiyle yaptığım 1-on-1 görüşmelerin ham notları aşağıdadır [NOTLARI BURAYA EKLEYİN]. Bu notları analiz et: 1) Takımın en büyük 3 operasyonel tıkanıklığı nedir? 2) İlk 30 günde çözebileceğim 2 somut 'Quick Win' önerisi ver. 3) Takım içindeki örtük kültürel endişeleri maddeler halinde özetle."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Bir şirkete paraşütle inen ve ilk günden her şeyi değiştirmeye çalışıp duvara toslayan tecrübesiz lead ile 'İlk 90 gün sadece kulaklarını açacaksın' diyen mentor lead. Efsanevi ilk 90 gün taktikleri ve güven inşası üzerine kahkahalarla dolu bir analiz.",
        "udemy_outline": [
            "00:00 - İlk 90 Gün Sendromu: Neden ilk izlenim sonraki 2 yılı belirler?",
            "03:45 - 30-60-90 Gün Planının Matematiksel Şablonu",
            "08:10 - Dinleme Turlarından Çıkan Ham Veriyi AI ile Eyleme Dönüştürmek",
            "13:30 - Quick Win Seçme Kriteri: Ne zaman mimariye dokunmalı, ne zaman dokunmamalı?"
        ]
    },

    # LESSON 4
    {
        "id": 4,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 04: 'Ben Yapsam 10 Dakika Sürerdi': Delege Etmenin ve AI ile Geri Çekilmenin Sanatı",
        "title_en": "Lesson 04: 'I Could Do It in 10 Minutes': The Art of Delegation & AI Pair Prompts",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "En tehlikeli cümle: 'Ben yapsam 10 dakika sürerdi'. Mühendisin öğrenme hakkını çalmadan, AI destekli eşleşme ile işleri güvenle devretmek.",
        "summary_en": "The most toxic leadership trap: 'It's faster if I just do it myself.' Stop stealing growth opportunities; delegate safely with AI-guided pairing frameworks.",
        "eli5_metaphor_tr": "Çocuğun ayakkabısını bağlamayı öğrenirken ilk hafta 10 dakika uğraşır. 'Çekil kenara ben iki saniyede bağlarım' dersen, o çocuk 25 yaşına geldiğinde hala ayakkabısını sen bağlamak zorunda kalırsın. Delege etmek o 10 dakikalık sabrı göstermek ve gerekirse yapay zeka ile ona kılavuzluk etmektir.",
        "eli5_metaphor_en": "When a toddler learns to tie shoelaces, it takes forever. If you shove them aside shouting 'I'll just do it in two seconds,' you will still be tying their shoes when they are 25. Delegation is accepting that initial slowdown and scaffolding them with AI guides.",
        "comparison_table": [
            {"topic": "İş Verme", "old_way": "'Şu bileti al yap' deyip detay vermeden yalnız bırakmak.", "ai_way": "Net Context + Kabul Kriterleri + AI Başlangıç Promptu ile görevi devretmek."},
            {"topic": "Hata Toleransı", "old_way": "İlk hatada sinirlenip kodu kendisi devralmak.", "ai_way": "Kritik yolda olmayan işlerde hata yapmasına ve AI ile debug etmesine izin vermek."},
            {"topic": "Öğrenme Desteği", "old_way": "Junior'ın yanına oturup 3 saat boyunca klavyede ne yapacağını dikte etmek.", "ai_way": "Junior'a bir LLM eşlikçi tanımlayıp sadece mimari kontrol noktalarında inceleme yapmak."}
        ],
        "framework_steps_tr": [
            "1. Eisenhower Matrisi + AI: Acil ve kritik olmayan işleri ASLA kendin yapma; potansiyeli olan mühendislere büyüme fırsatı olarak delege et.",
            "2. Görev Devir Sözleşmesi: 'Ne yapılacak' ve 'Neden yapılacak' kısmını net tanımla, 'Nasıl yapılacağı' kısmını mühendise bırak.",
            "3. AI Scaffolding (İskele Desteği): Junior mühendise görevi verirken bir Claude/Cursor prompt şablonu ver: 'Takıldığında önce bu promptla hipotez üret.'",
            "4. Geri Çekil ve İzle: Günde 5 kez 'bitti mi?' diye sormak yerine, async check-in ve PR taslağı (Draft PR) üzerinden geri bildirim ver."
        ],
        "framework_steps_en": [
            "1. AI-Enhanced Eisenhower Matrix: Never touch tasks that are urgent but low strategic leverage; delegate them as growth assignments.",
            "2. The 'What & Why' Contract: Clarify business outcomes and boundary constraints; leave the implementation path to the engineer.",
            "3. AI Scaffolding: Hand junior developers verified prompt templates alongside the Jira ticket: 'Bounce your architecture hypotheses here first.'",
            "4. Anti-Micromanagement: Replace pinging 'is it done?' with async Draft PR checkpoints and observable CI signal."
        ],
        "case_study_tr": "SaaS şirketinde lead olan Melis, hafta sonu bile kritik faturalama modülünü kimseye güvenemediği için kendisi yazıyordu. Tükenmişlikten hastanelik olunca takım 2 hafta kilitlendi. İyileşince karar aldı: Faturalama mikroservisini parçalara böldü, her parçaya test senaryolarını yazıp 2 junior mühendise delege etti ve onlara Cursor prompt kılavuzu verdi. İş 3 gün gecikmeyle ama başarıyla bitti, Melis hafta sonu ailesiyle tatil yapabildi.",
        "case_study_en": "Melis, lead at a billing SaaS, worked every weekend because 'billing logic is too critical for juniors.' Severe burnout put her on medical leave, paralyzing the sprint. Upon return, she partitioned the module, wrote comprehensive integration test specs, and delegated slices to two juniors backed by a Cursor prompt guide. It shipped with zero defects—and Melis reclaimed her weekends.",
        "ai_prompts": [
            {
                "title": "Görev Delegasyon ve Junior Mühendis AI Kılavuz Hazırlayıcı",
                "prompt": "Takımımdaki Junior/Mid-Level bir yazılımcıya şu özelliği delege etmek istiyorum: [ÖZELLİK DETAYI]. Bana şunları üret: 1) Görevin 'Ne' ve 'Neden'ini açıklayan net kabul kriterleri, 2) Bu mühendisin takıldığında LLM'e sorabileceği 3 adet hedefe yönelik prompt, 3) Benim incelemem gereken kritik mimari risk kontrol listesi."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Ben yapsam 10 dakika sürerdi' krizine giren kontrol delisi bir lead ile onu terapiye alan tecrübeli VP of Engineering. Kontrolü bırakamayan mühendislerin nasıl takımın büyümesini baltaladığını ve AI'ın delege etmeyi nasıl güvenli hale getirdiğini mizahi bir dille anlatın.",
        "udemy_outline": [
            "00:00 - Klavyeyi Bırakamama Hastalığı: Teşhis ve Tedavi",
            "04:20 - Delegasyon Seviyeleri (Emir vermekten Otonomiye 5 Aşama)",
            "09:15 - AI Scaffolding Nedir? Junior mühendise kılavuz prompt vermek",
            "14:40 - Egzersiz: Üzerinizdeki 3 görevi AI destekli delegasyon formatına çevirin"
        ]
    },

    # LESSON 5
    {
        "id": 5,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 05: Takım Dinamikleri ve Psikolojik Güvenlik: AI Korkusunu Yenmek",
        "title_en": "Lesson 05: Team Dynamics & Psychological Safety: Conquering AI Paranoia",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "'Yapay zeka işimizi elimizden mi alacak?' paniğiyle sessizleşen, kodunu gizleyen veya AI kullanmaktan utanan takımlarda güven ve şeffaflık kültürü.",
        "summary_en": "'Will LLMs replace us?' Calming team paranoia, eliminating prompt-shame, and engineering high psychological safety for aggressive AI experimentation.",
        "eli5_metaphor_tr": "Hesap makinesi ilk çıktığında muhasebeciler 'mesleğimiz bitti' diye paniklemişti. Halbuki hesap makinesini ilk çözen muhasebeciler dev şirketlerin finans direktörü oldu. Takımına AI'ın onların yerini alacak bir rakip değil, sırtlarındaki hamal çuvallarını taşıyan elektrikli bir vinç olduğunu hissettirmelisin.",
        "eli5_metaphor_en": "When electronic spreadsheets launched, accountants panicked that their careers were dead. Those who mastered spreadsheets became modern CFOs. Your developers must understand that AI is not their replacement—it is a hydraulic exoskeleton lifting repetitive drudgery.",
        "comparison_table": [
            {"topic": "AI Algısı", "old_way": "'AI kullanan yazılımcı hile yapıyordur, gerçek mühendis değildir.'", "ai_way": "'AI kullanmayan mühendis, at arabasıyla Formula 1 yarışına girmeye çalışıyordur.'"},
            {"topic": "Hata Paylaşımı", "old_way": "AI halüsinasyonu yüzünden çıkan hatayı gizlemek, cezalandırmak.", "ai_way": "'Haftanın En Komik AI Hatası' oturumu yapıp promptları birlikte iyileştirmek."},
            {"topic": "Takım Güveni", "old_way": "Metrik olarak kimin kaç satır kod commit'lediğine bakmak.", "ai_way": "Kimin problemi ne kadar yaratıcı ve sürdürülebilir çözdüğünü takdir etmek."}
        ],
        "framework_steps_tr": [
            "1. Prompt Utancını (Prompt-Shaming) Yok Et: 'AI'a kod yazdırdı' diye alay edilmesini sıfır toleransla engelle; en iyi prompt yazanı ödüllendir.",
            "2. Fail-Safe Ortam Yarat: Hata yapmanın serbest olduğu sandbox ortamları ve AI deneme günleri (Hack Friday) düzenle.",
            "3. Açık Kapı AI Politikası: Şirket verisini dışarı sızdırmadan hangi araçların yasal ve serbest olduğunu netleştir (kurumsal gizlilik sınırları).",
            "4. İnsan Odaklı Değerleme: Ekibe sürekli hatırlat: Şirket onları for-döngüsü yazdıkları için değil; empati, domain mantığı ve sistem muhakemesi için tutuyor."
        ],
        "framework_steps_en": [
            "1. Eradicate Prompt-Shame: Stamp out snark about 'copy-pasting from Claude'; actively celebrate team members with exceptional prompt craftsmanship.",
            "2. Establish Fail-Safe Sandboxes: Launch fortnightly AI Sandbox Days where devs experiment with agent workflows without sprint pressure.",
            "3. Clear Legal Guardrails: Clarify company policies on IP, confidential data, and approved models so devs experiment without fear of reprisal.",
            "4. Reinforce Human Moats: Emphasize that engineers are valued for domain insight, trade-off analysis, and product intuition—not raw syntax generation."
        ],
        "case_study_tr": "Bir telekom firmasında yönetim 'Copilot kullananlar %50 daha fazla bilet bitirecek' diye duyuru yapınca takım panikledi. Juniorlar promptlarını gizledi, birbirlerine kod göstermemeye başladı. Yeni lead Arda araya girdi: Yönetimle konuşup anlamsız hız kotalarını iptal ettirdi. Takım içinde 'Haftanın AI Fiyaskoları ve Zaferleri' adında eğlenceli cuma kahveleri başlattı. 1 ayda takım birbirine en iyi promptları öğretti ve verimlilik doğal olarak %80 arttı.",
        "case_study_en": "Executives at a telecom announced: 'Engineers using Copilot must deliver 50% more story points or face layoffs.' Panic ensued: developers hid their prompt techniques and siloed their work. Newly hired lead Arda intervened, killed the toxic point quotas with leadership, and initiated 'Weekly AI Blunders & Breakthroughs' demos. Psychological safety returned, sparking peer learning and organic 80% delivery gains.",
        "ai_prompts": [
            {
                "title": "Psikolojik Güvenlik ve AI Kültürü Değerlendirme Anketi Hazırlayıcı",
                "prompt": "Yazılım takımımda üyelerin AI araçlarını rahatça denemesi, halüsinasyon risklerini korkmadan raporlaması ve birbirine destek olması için 5 soruluk anonim bir 'Psikolojik Güvenlik ve AI Kültürü Anketi' hazırla. Sorular samimi, suçlamayan ve takım dinamiklerini ortaya çıkaracak derinlikte olsun."
            }
        ],
        "notebooklm_prompts": "İki sunucu: AI paranoyası yaşayan ('Seneye hepimiz işsiziz!') bir kıdemli yazılımcı ile onu sakinleştiren ve yeni rolünün gücünü anlatan Lead. Komik diyaloglar, geçmiş teknolojik devrimler (derleyiciler, bulut, StackOverflow) ve psikolojik güvenliğin önemi.",
        "udemy_outline": [
            "00:00 - Takımdaki Fil: 'Yapay zeka işimi elimden mi alacak?'",
            "04:00 - Prompt Utancı Nedir ve Nasıl Yok Edilir?",
            "08:15 - Psikolojik Güvenliğin 4 Aşaması (Amy Edmondson Modeli + AI Entegrasyonu)",
            "13:50 - Pratik: Takımınızla yapacağınız ilk AI Güvenlik Retrospektifi Planı"
        ]
    },

    # LESSON 6
    {
        "id": 6,
        "module_id": 1,
        "module_title_tr": "Bölüm 1: Koddan İnsana ve Yapay Zekaya Geçiş",
        "module_title_en": "Module 1: The Transition: From Coder to AI-Augmented Leader",
        "title_tr": "Ders 06: Takım Liderinin AI Alet Çantası: Cursor, Claude 3.7, Copilot, NotebookLM ve Deep Research Ekosistemi",
        "title_en": "Lesson 06: The Modern Lead's AI Stack: Cursor, Claude 3.7, Copilot, NotebookLM & Deep Research",
        "level": "Başlangıç / Beginner Lead",
        "summary_tr": "Hangi araç ne işe yarar? Kaos yaratmadan takıma doğru AI yığınını (stack) seçmek, bütçelendirmek ve iş akışına entegre etmek.",
        "summary_en": "Cutting through the tooling frenzy: selecting, budgeting, and weaving Cursor, Claude 3.7, Copilot, NotebookLM, and research agents into high-impact daily cadences.",
        "eli5_metaphor_tr": "Takımına her gün çıkan yeni bir yapay zeka aracını aldırmak, marangoz atölyesini her gün yeni çıkan 50 farklı süslü testereyle doldurmaya benzer. Marangozlar iş yapamaz, testere denemekten masa üretemez. Liderin görevi 3 temel alet seçip onların ustası olmaktır: biri hızlı keser (IDE), biri büyük resmi planlar (Claude), biri de atölyenin hafızasını tutar (NotebookLM).",
        "eli5_metaphor_en": "Buying every hyped AI tool is like flooding a woodworking shop with 50 specialty Japanese saws every week. Nobody builds furniture; they just argue over blade teeth. A great lead standardizes on three core instruments: the surgical IDE assistant, the strategic reasoning engine, and the organizational research memory.",
        "comparison_table": [
            {"topic": "IDE Entegrasyonu", "old_way": "Sadece satır içi autocomplete eklentisi kullanmak.", "ai_way": "Multi-file context ve repo indeksleme yapabilen Cursor/Copilot Workspace kullanmak."},
            {"topic": "Mimari Analiz", "old_way": "Saatlerce Google ve StackOverflow sayfalarında kaybolmak.", "ai_way": "Claude 3.7 Sonnet / Reasoning modelleriyle karmaşık mimari senaryoları modellemek."},
            {"topic": "Dokümantasyon & Öğrenme", "old_way": "PDF ve Confluence sayfalarını kimsenin okumaması.", "ai_way": "Tüm şirket dokümanlarını NotebookLM'e yükleyip sesli podcast ve interaktif SSS üretmek."}
        ],
        "framework_steps_tr": [
            "1. Temel Katman (IDE): Kod yazarken ve refactor ederken Cursor veya GitHub Copilot.",
            "2. Akıl Yürütme Katmanı (Reasoning & Arch): RFC ve tasarım belgeleri için Claude 3.7 Sonnet veya OpenAI o-serisi modeller.",
            "3. Takım Hafızası Katmanı (Research & Onboarding): Proje belgelerini, API spec'lerini ve retro notlarını NotebookLM'e bağlayıp hızlı oryantasyon sağla.",
            "4. Bütçe ve Lisanslama Yönetimi: Kişi başı aylık 20-40$ AI bütçesinin şirkete sağladığı ROI'yi yönetime tek bir metrikle kanıtla: Geliştirici başına haftada kazanılan 6 saat."
        ],
        "framework_steps_en": [
            "1. Tactical Layer (IDE): Multi-file indexing and surgical refactoring via Cursor or GitHub Copilot.",
            "2. Strategic Reasoning Layer: Architectural trade-offs, ADR reviews, and edge-case modeling with Claude 3.7 Sonnet / o-series.",
            "3. Collective Memory Layer: Slurp architecture specs, PRDs, and incident post-mortems into NotebookLM for instant audio and interactive team syntheses.",
            "4. ROI Justification: Defend a $20-40/seat/month AI spend with cold metrics: 6+ engineering focus hours reclaimed per dev each week."
        ],
        "case_study_tr": "Bir fintech ekibi 12 farklı AI aracına lisans parası ödüyordu ama kimse neyi nerede kullanacağını bilmiyordu. Lead Elif bir konsolidasyon yaptı: Takımı Cursor + Claude + NotebookLM üçlüsünde standartlaştırdı. Takımın tüm mimari dokümanlarını NotebookLM'e yükleyip yeni katılan juniorların projenin iş mantığını 2 günde öğrenmesini sağladı. Araç maliyeti %40 düştü, takım memnuniyeti tavan yaptı.",
        "case_study_en": "A fintech squad was paying licenses for 12 disparate AI subscriptions with zero workflow consistency. Lead Elif enacted an AI consolidation: standardized on Cursor + Claude 3.7 + NotebookLM. She imported the entire architecture repo into NotebookLM, enabling new joiners to master payment flows in 48 hours. Tooling costs dropped 40% while onboarding velocity spiked.",
        "ai_prompts": [
            {
                "title": "Mühendislik Takımı AI Alet Çantası ROI ve Seçim Kılavuzu",
                "prompt": "10 kişilik bir yazılım mühendisliği takımı için şirket CFO'suna sunulmak üzere 'AI Tooling ROI ve Standartlaşma Raporu' hazırla. Cursor ($20/ay), Claude Pro ($20/ay) ve NotebookLM kullanımının haftalık zaman kazanımı, kod kalitesi ve onboarding süresi üzerindeki etkilerini rakamlarla ve net argümanlarla formüle et."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri her gün çıkan yeni AI araçlarını deneyip hiçbir iş bitiremeyen 'AI Tool Junkie', diğeri ise sadece 3 aracı ustaca kullanıp harikalar yaratan kıdemli Lead. Hangi aracın nerede parladığını, hangisinin vakit kaybı olduğunu keyifli bir üslupla tartışın.",
        "udemy_outline": [
            "00:00 - AI Araç Çılgınlığı: FOMO'ya kapılmadan takım yığını seçmek",
            "03:50 - Taktiksel Katman: Cursor ve Copilot'u repo kurallarıyla konfigüre etmek",
            "08:10 - Stratejik Katman: Claude 3.7 ile mimari tartışmalar",
            "12:45 - Bilgi Katmanı: NotebookLM'i takımın ikinci beyni haline getirmek",
            "16:20 - Egzersiz: Takımınız için 1 sayfalık 'Onaylı AI Araç Matrisi' hazırlayın"
        ]
    },

    # LESSON 7
    {
        "id": 7,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 07: Sıkıcı 1-on-1'ları Bırak: Büyüme Odaklı, AI Destekli Birebir Görüşme Çerçevesi",
        "title_en": "Lesson 07: Ditch Boring 1-on-1s: Growth-Centric, AI-Assisted One-on-One Frameworks",
        "level": "Orta / Mid Lead",
        "summary_tr": "1-on-1'lar durum güncelleme toplantısı değildir. Mühendisin kariyer hedeflerini, tıkanıklıklarını takip eden ve AI ile aksiyona dönüşen görüşme modeli.",
        "summary_en": "1-on-1s are not status meetings. Build high-empathy, growth-focused cadences with AI action tracking and recurring topic synthesis.",
        "eli5_metaphor_tr": "1-on-1 toplantısında mühendise 'Jira'daki 42 numaralı bilet ne oldu?' diye sormak, doktora gidip sadece saatin kaç olduğunu sormaya benzer. O biletin durumunu zaten Jira'da görüyorsun. 1-on-1, mühendisin kariyer nabzını ölçtüğün, stres seviyesine baktığın ve önündeki taşları temizlediğin kutsal alandır.",
        "eli5_metaphor_en": "Asking 'What's the status of ticket #42?' in a 1-on-1 is like going to a cardiology check-up just to ask what time it is. Jira already shows ticket status. The 1-on-1 is sacred space to check career vitals, unearth hidden anxiety, and clear roadblocks.",
        "comparison_table": [
            {"topic": "Gündem Belirleme", "old_way": "Toplantıya hazırlıksız girip 'Eee, ne var ne yok?' demek.", "ai_way": "Önceki notlar, PR ritmi ve hedeflerden AI ile kişiselleştirilmiş 3 odak sorusu üretmek."},
            {"topic": "İçerik", "old_way": "30 dakikanın 25 dakikasını sprint durumunu anlatarak harcamak.", "ai_way": "Zamanın %80'ini kariyer, motivasyon, takım ilişkileri ve öğrenmeye ayırmak."},
            {"topic": "Aksiyon Takibi", "old_way": "Alınan kararların unutulup gitmesi.", "ai_way": "Görüşme sonrasında AI ile 3 maddelik aksiyon e-postası çıkarıp takvime işlemek."}
        ],
        "framework_steps_tr": [
            "1. 10-10-10 Kuralı: 10 dakika onun gündemi (dertleri, fikirleri), 10 dakika senin gündemin (geri bildirim, strateji), 10 dakika gelecek ve kariyer gelişimi.",
            "2. Durum Güncellemesini Yasakla: 'İş durumu konuşmak istiyorsan Slack'ten yaz veya standup'ta söyle, burası senin büyüme alanın.'",
            "3. AI Destekli Hazırlık: Görüşmeye girmeden son 3 haftanın notlarını LLM'e verip: 'Bu mühendisin son dönemdeki motivasyon düşüş sinyalleri neler?' analizi al.",
            "4. Kapanış Ritüeli: 'Ben bir lider olarak senin işini kolaylaştırmak için bu hafta neyi farklı yapabilirim?' sorusuyla bitir."
        ],
        "framework_steps_en": [
            "1. The 10-10-10 Protocol: 10m their agenda (frustrations, ideas), 10m your coaching agenda, 10m future career progression.",
            "2. Ban Status Reports: 'If it lives on a Jira board, keep it off our 1-on-1 calendar. This time is for your growth.'",
            "3. AI-Assisted Prep: Prompt an LLM with previous 1-on-1 takeaways: 'Identify recurring blockages or subtle signs of disengagement.'",
            "4. The Inversion Closing: End every session with: 'What is one thing I can start or stop doing to make your work life easier this week?'"
        ],
        "case_study_tr": "Mid-level backend mühendisi Kerem, 6 aydır aynı takımdaydı ama hiç konuşmuyordu. Eski lead'i her 1-on-1'da sadece bilet soruyordu. Yeni lead Seda, ilk görüşmede 10-10-10 kuralını uyguladı ve Kerem'in aslında distributed systems öğrenmek istediğini ama sürekli frontend taskları verildiği için gizlice iş aradığını öğrendi. Seda, Kerem'in task dağılımını yeniden düzenledi; Kerem şirkette kaldı ve takımın en kritik caching mimarisini kurdu.",
        "case_study_en": "Kerem, a talented backend dev, was mentally checked out and interviewing elsewhere. His previous lead used 1-on-1s solely to audit Jira cards. Incoming lead Seda introduced the 10-10-10 framework. Within 15 minutes, Kerem confessed he was starving for distributed systems work but trapped in legacy UI fixes. Seda realigned his roadmap; Kerem stayed and engineered the company's highest-throughput caching engine.",
        "ai_prompts": [
            {
                "title": "Büyüme Odaklı 1-on-1 Görüşme Asistanı ve Aksiyon Çıkarıcı",
                "prompt": "Yazılım mühendislerimle yapacağım 1-on-1 görüşmeleri derinleştirmek istiyorum. Mühendisin kıdemi: [Junior/Mid/Senior], Son dönem performansı: [Detaylar]. Bana şunları üret: 1) Mühendisin kendini güvende hissedip içini açmasını sağlayacak 3 koçluk sorusu, 2) Kariyer tıkanıklığını teşhis eden 2 derin soru, 3) Görüşme sonrası notlarımı özetleyip Jira/Slack aksiyonuna dönüştürecek bir şablon."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri her 1-on-1'ı bilet sorgulamasına çeviren kabus gibi bir yöneticiyi canlandırırken, diğeri harika bir koçluk görüşmesinin nasıl yapıldığını gösteren deneyimli Lead. 1-on-1'ların nasıl bir mühendisin kaderini değiştirebileceğine dair ilham verici diyalog.",
        "udemy_outline": [
            "00:00 - Neden Mühendislerin %70'i 1-on-1'lardan Nefret Eder?",
            "03:30 - Durum Güncellemesinden Kurtulmak: 10-10-10 Formülü",
            "07:45 - Görüşme Notlarını AI ile Trend Analizine Çevirmek",
            "12:15 - Canlı Rol Yapma: İçe Kapanık Bir Yazılımcıyla İlk Derin Görüşme"
        ]
    },

    # LESSON 8
    {
        "id": 8,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 08: Zorlu Konuşmalar ve Geri Bildirim: SBI Modeli + AI Simülasyonu",
        "title_en": "Lesson 08: Difficult Conversations & Constructive Feedback: The SBI Model + AI Roleplay",
        "level": "Orta / Mid Lead",
        "summary_tr": "Kötü performansı veya negatif tutumu olan bir mühendisle konuşmaktan korkan liderler için rehber: Durum-Davranış-Etki (SBI) modeli ve AI ile ön prova.",
        "summary_en": "Overcoming conflict avoidance: Mastering Situation-Behavior-Impact (SBI) feedback and stress-testing difficult conversations via AI roleplay.",
        "eli5_metaphor_tr": "Dişinde maydanoz kalmış bir arkadaşına bunu söylememek kibarlık değildir; onun tüm gün öyle gezmesine izin verip rezil olmasını izlemektir. Geri bildirim vermek kavga etmek değil, arkadaşının dişindeki maydanozu nazikçe ve özelde göstermektir.",
        "eli5_metaphor_en": "Not telling your coworker they have spinach stuck between their teeth isn't kindness—it's letting them walk around embarrassing themselves all day. Constructive feedback is quietly pointing out the spinach with empathy and zero judgment.",
        "comparison_table": [
            {"topic": "Geri Bildirim Tarzı", "old_way": "'Sen çok dikkatsizsin, kodların sürekli patlıyor' (Kişiliğe saldırı).", "ai_way": "'Dünkü release'de (Durum), test yazmadan PR açtın (Davranış), ödeme servisi 12 dk çöktü (Etki)' (SBI)."},
            {"topic": "Zamanlama", "old_way": "6 ay biriktirip yıllık performans değerlendirmesinde yüzüne vurmak.", "ai_way": "Olaydan sonraki en geç 48 saat içinde sıcağı sıcağına konuşmak."},
            {"topic": "Hazırlık", "old_way": "Spontane konuşup öfkelenmek veya konuyu yumuşatıp mesajı kaybetmek.", "ai_way": "Görüşme öncesi LLM ile rol yapıp adayın vereceği olası tepkileri simüle etmek."}
        ],
        "framework_steps_tr": [
            "1. SBI Çerçevesini Kullan: Situation (Hangi olayda?), Behavior (Hangi somut eylemi yaptı?), Impact (Takıma ve işe etkisi ne oldu?).",
            "2. Kişiliği Değil Eylemi Eleştir: 'Sen sorumsuzsun' deme; 'Toplantıya 20 dakika geç gelmen takımın motivasyonunu düşürdü' de.",
            "3. AI ile Rol Yapma Simülasyonu: Claude veya ChatGPT'ye 'Sen savunmacı ve sinirli bir senior mühendissin, ben lead'inim' de ve geri bildirim provası yap.",
            "4. Birlikte Çözüm Üret: 'Bu durumun tekrar etmemesi için sence nasıl bir önlem almalıyız?' diyerek topu ona at."
        ],
        "framework_steps_en": [
            "1. Apply the SBI Model: Ground your feedback in observable reality: Situation -> Behavior -> Impact.",
            "2. Critique the Action, Never the Person: Never utter 'You are lazy'; state 'Missing two consecutive PR reviews stalled our staging deployment.'",
            "3. Pre-Game via AI Roleplay: Feed Claude the context: 'Roleplay as a defensive senior dev reacting to negative feedback. Challenge my points.'",
            "4. Co-Create the Remedy: Ask: 'What mechanisms can we put in place so this friction doesn't repeat?' Make them the author of the fix."
        ],
        "case_study_tr": "Bir fintech takımında yetenekli ama hırçın bir Senior Dev, PR incelemelerinde juniorlara 'Bu ne biçim kod, bunu yazan stajyer bile olamaz' şeklinde aşağılayıcı yorumlar yazıyordu. Lead Ozan çekindiği için 3 ay sustu. Sonunda bir junior ağlayarak istifa etti. Ozan AI simülasyonu ile zorlu konuşma provası yaptı. Ertesi gün Senior ile SBI modeline göre konuştu; yorumların takım üzerindeki yıkıcı etkisini gösterdi ve net sınırlar koydu. Senior davranışını düzeltti.",
        "case_study_en": "In an insurtech squad, a brilliant but arrogant senior engineer left caustic PR comments: 'Who wrote this garbage? A child could do better.' Lead Ozan hesitated to confront him for 3 months until an associate engineer handed in a tearful resignation. Desperate, Ozan stress-tested the confrontation using Claude roleplay, then delivered an SBI debrief. The senior realized his blind spot, apologized, and re-anchored team norms.",
        "ai_prompts": [
            {
                "title": "SBI Geri Bildirim Simülatörü ve Rol Yapma Partneri",
                "prompt": "Sen dünyanın en zorlu, çabuk savunmaya geçen kıdemli yazılımcısısın. Ben senin takım liderinim. Dün production'a test yazmadan hotfix çıktın ve sepet servisi 30 dakika durdu. Şimdi seninle bu durumu konuşacağız. Ben ilk cümlemi kuracağım, sen gerçekçi bir yazılımcı gibi savunma yap, mazeretler üret. Konuşmanın sonunda bana performansım hakkında koçluk geri bildirimi ver."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Çatışmadan kaçan kibar lider' ile 'Herkesi azarlayan kırıcı lider' arasındaki fark. SBI modelinin zarafeti ve AI ile zor konuşma provaları yapmanın bir liderin hayatını nasıl kurtardığı üzerine etkileyici bir diyalog.",
        "udemy_outline": [
            "00:00 - Çatışmadan Kaçmanın Ağır Maliyeti: Sessiz Kanser",
            "03:40 - SBI (Situation-Behavior-Impact) Formülünün Matematiği",
            "07:30 - Canlı AI Simülasyonu: Savunmacı Mühendise Nasıl Yaklaşılır?",
            "12:00 - Egzersiz: Takımınızda ertelediğiniz 1 zorlu konuşmayı SBI formatında yazın"
        ]
    },

    # LESSON 9
    {
        "id": 9,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 09: Takım İçi Çatışma Çözümü: Sessiz Kırgınlıkları ve Ego Savaşlarını Önlemek",
        "title_en": "Lesson 09: Resolving Technical Debates & Ego Clashes with Objective Data",
        "level": "Orta / Mid Lead",
        "summary_tr": "İki senior mühendis farklı kütüphaneler veya mimariler için birbirine girdiğinde: Kutsal savaşları (tabs vs spaces, REST vs GraphQL) rasyonel veriye ve ADR'a dönüştürme.",
        "summary_en": "When senior engineers wage religious architectural wars (REST vs GraphQL, SQL vs NoSQL): defusing ego clashes with matrix trade-offs and AI-guided ADRs.",
        "eli5_metaphor_tr": "İki şoförün otobüsün rengi sarı mı olsun kırmızı mı olsun diye yolun ortasında kavga edip yolcuları bekletmesine izin veremezsin. Önemli olan otobüsün rengi değil, yolcuları vaktinde ve güvenle gideceği yere götürmesidir. Lider, tartışmayı zevklerden çıkarıp müşteri ihtiyacı tablosuna taşır.",
        "eli5_metaphor_en": "Allowing two drivers to stop a bus full of passengers to brawl over whether the bus should be painted crimson or navy is unacceptable. The passengers care about arriving safely on time. A lead redirects religious arguments toward objective passenger criteria.",
        "comparison_table": [
            {"topic": "Tartışma Ekseni", "old_way": "'Ben 10 yıldır böyle yapıyorum, en doğrusu bu' (Kıdem egosu).", "ai_way": "'Gereksinimlerimiz X, Y, Z. Bu iki yaklaşımın gecikme, maliyet ve bakım metriklerini kıyaslayalım.'"},
            {"topic": "Karar Mekanizması", "old_way": "Kimin sesi daha çok çıkarsa veya kim daha kıdemliyse onun dediği olur.", "ai_way": "AI ile tarafsız bir Trade-off Matrisi çıkarıp Architecture Decision Record (ADR) imzalamak."},
            {"topic": "Sonuç", "old_way": "Kaybeden tarafın projeyi pasif-agresif sabote etmesi.", "ai_way": "'Disagree and Commit' ilkesiyle herkesin kararı sahiplenmesi."}
        ],
        "framework_steps_tr": [
            "1. Dini Savaşı Mühendislik Problemine Çevir: 'Hangisi daha iyi?' sorusunu yasakla; 'Bizim yükümüz ve ekibimiz için hangi kısıtlar var?' diye sor.",
            "2. Tarafsız Hakem Olarak AI Trade-Off Matrisi: İki yaklaşımın da avantaj ve dezavantajlarını kurumsal kısıtlarla LLM'e analiz ettir.",
            "3. 48 Saatlik Timebox ve Spike: Tartışmayı uzatmak yerine iki tarafa da 1'er günlük prototip (spike) süresi ver; metriklerle masaya oturt.",
            "4. Disagree and Commit Kültürü: Karar verildikten sonra tartışma biter; herkes kararın arkasında durur."
        ],
        "framework_steps_en": [
            "1. Convert Religious Dogma to Trade-off Engineering: Ban subjective debates like 'Which is cleaner?'; ask 'Which satisfies our p99 SLA under our cloud budget?'",
            "2. Impartial AI Trade-Off Matrix: Prompt an LLM with both technical proposals and architectural constraints to generate an unbiased scorecard.",
            "3. 48-Hour Spike Timebox: End endless Slack debates by assigning a 24-hour POC spike; let benchmark data break the tie.",
            "4. Enforce Disagree & Commit: Once an ADR is logged, all parties rally behind the chosen design without lingering passive aggression."
        ],
        "case_study_tr": "SaaS şirketinde iki kıdemli mühendis GraphQL mi yoksa REST mi kullanılmalı diye 3 hafta boyunca Slack'te kavga etti, sprint durdu. Yeni lead Burak devreye girdi. İki taraftan da 1 sayfalık teknik tezlerini istedi. Bu tezleri Claude'a verip takımın mobil client kısıtlarına ve caching gereksinimlerine göre tarafsız bir matris çıkarttı. Matriste REST + partial responses seçeneğinin %30 daha az maliyetli olduğu netleşti. İki mühendis de el sıkıştı ve 3 haftalık kriz 2 saatte bitti.",
        "case_study_en": "Two lead engineers at a retail platform fought for 3 weeks over REST vs GraphQL, paralyzing client-side progress. Lead Burak intervened: requested a 1-page design brief from each dev, fed both into Claude with their specific mobile bandwidth and edge-caching constraints, and generated an objective comparison matrix. The data made REST with selective fields the obvious victor. Friction evaporated in one afternoon.",
        "ai_prompts": [
            {
                "title": "Teknik Çatışma Çözücü ve Tarafsız Mimari Karar Matrisi",
                "prompt": "Takımımda iki kıdemli mühendis şu konuda anlaşmazlığa düştü: [A Seçeneği] vs [B Seçeneği]. Projemizin kısıtları: [Teknoloji yığını, bütçe, ekip deneyimi, beklenen trafik]. Bu iki seçeneği şu kriterlere göre tarafsız bir puanlama tablosu (1-5) ve gerekçeleriyle analiz et: 1) Öğrenme eğrisi, 2) Bakım maliyeti, 3) Performans, 4) Ekip içi riskler. Sonunda bir uzlaşı önerisi getir."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri koyu bir 'Microservices ve Kafka' fanatiği, diğeri fanatik bir 'Modular Monolith' savunucusu. İki egonun çarpışmasını taklit edip araya giren Team Lead'in veriye dayalı analiziyle nasıl uzlaştıklarını kahkahalarla anlatan bir bölüm.",
        "udemy_outline": [
            "00:00 - Yazılımcı Egosunun Anatomisi: Kutsal Teknolojik Savaşlar",
            "04:15 - 'Disagree and Commit' (Amazon İlkesi) Nasıl Uygulanır?",
            "08:30 - AI Destekli ADR (Architecture Decision Record) Hazırlama",
            "13:00 - Egzersiz: Takımınızdaki geçmiş bir teknik tartışmayı matrisle yeniden değerlendirin"
        ]
    },

    # LESSON 10
    {
        "id": 10,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 10: Performans Yönetimi ve PIP Dönemi: Veriyle ve Empatiyle Konuşmak",
        "title_en": "Lesson 10: Empathetic Performance Tracking & Navigating PIPs with Data",
        "level": "Orta / Mid Lead",
        "summary_tr": "Performansı düşen bir takım arkadaşını geri kazanmak veya kaçınılmaz PIP sürecini insan onuruna yakışır, veri odaklı ve şeffaf şekilde yönetmek.",
        "summary_en": "Turning around underperformers with radical empathy or executing dignified, data-backed Performance Improvement Plans (PIPs).",
        "eli5_metaphor_tr": "Bir futbolcunun son 3 maçta gol atamaması onun yeteneksiz olduğunu göstermez; belki ayakkabısı vuruyordur, belki ailesinde bir hastalık vardır, belki de yanlış mevkide oynatılıyordur. Lider hemen oyuncuyu kadro dışı bırakmaz; önce kramponuna ve psikolojisine bakar. Eğer her destek verilmesine rağmen koşmuyorsa, o zaman profesyonelce yolları ayırır.",
        "eli5_metaphor_en": "A striker who fails to score for 3 matches isn't suddenly incompetent. Their boots might be pinching, family issues might be weighing them down, or they're playing in the wrong tactical position. A coach checks fundamentals and mindset first before initiating a transfer.",
        "comparison_table": [
            {"topic": "Performans Tespiti", "old_way": "'Gözüme tembel görünüyor' hissiyle hareket etmek.", "ai_way": "PR teslim süreleri, blokaj kayıtları ve 1-on-1 notlarını objektif incelemek."},
            {"topic": "İyileştirme Planı (PIP)", "old_way": "İşten çıkarmak için bahane olarak uydurma hedefler koymak.", "ai_way": "Başarılabilir, ölçülebilir 30-60 günlük net gelişim kilometre taşları ve AI eşleşmesi koymak."},
            {"topic": "İletişim", "old_way": "Son güne kadar her şey yolundaymış gibi davranıp aniden şok etmek.", "ai_way": "Açık, şeffaf ve haftalık düzenli durum değerlendirmesi yapmak."}
        ],
        "framework_steps_tr": [
            "1. Kök Neden Analizi (Skill vs Will): Sorun yetenek (Skill) eksikliği mi, yoksa motivasyon/kişisel sorun (Will) mu? Teşhisi doğru koy.",
            "2. Erken Uyarı Sistemi: Düşüş sinyali gördüğün an 1-on-1'da konuyu aç; asla 6 ay sonraya erteleme.",
            "3. SMART Hedeflerle PIP Tasarımı: AI kullanarak muğlak olmayan hedefler yaz ('2 hafta içinde şu 3 servisin test coverage'ını %80'e çıkaracak').",
            "4. Kazan-Kazan Zihniyeti: PIP'in amacı insan kovmak değil; personeli takıma geri kazandırmaktır. Başarırsa kutla, başaramazsa onuruyla vedalaş."
        ],
        "framework_steps_en": [
            "1. Diagnose 'Skill vs. Will': Is this a technical capability gap that training cures, or an existential burnout/motivation slump?",
            "2. Early Warning Velocity: Never let underperformance simmer unnoticed; bring factual observations to light within the first off-track sprint.",
            "3. Architect Concrete SMART PIP Milestones: Generate unambiguous criteria via AI ('Deliver 2 tested PRs adhering to our team SLA over 30 days').",
            "4. Dignified Off-Ramps: Treat PIPs as genuine rescue missions, not corporate firing pretexts. If it fails, conduct a respectful parting."
        ],
        "case_study_tr": "Senior Java Developer Tolga, son 2 sprintte hiçbir bilet bitiremedi ve toplantılarda agresifleşti. Eski yönetim doğrudan kovmayı önerdi. Yeni lead Deniz, Tolga ile samimi bir görüşme yaptı; Tolga'nın annesinin ağır bir hastalık geçirdiğini ve geceleri hastanede kaldığını öğrendi. Deniz, Tolga'ya 2 hafta esnek çalışma izni verdi ve görevlerini asenkron tasklara çevirdi. Tolga toparlandı ve sonraki çeyrekte takımın en yüksek performanslı mühendisi seçildi.",
        "case_study_en": "Tolga, a senior backend developer, missed sprint deliverables for two straight cycles and snapped during standup. HR recommended immediate PIP termination. New lead Deniz dug deeper in private: Tolga was managing nightly hospital care for an ailing parent. Deniz restructured his workload to asynchronous backlog tasks and granted flexible hours. Tolga rebounded, shipping the squad's most reliable payment migration.",
        "ai_prompts": [
            {
                "title": "Empatik Performans İyileştirme Planı (PIP) ve SMART Hedef Tasarımcısı",
                "prompt": "Bir yazılım takımı lideriyim. Takımımdaki bir mühendisin son 6 haftadır teslimatlarında ciddi düşüş var: PR'ları çok geç açıyor, test yazmıyor ve standup'lara katılmıyor. Bu mühendis için hem empatik hem de profesyonel sınırları koruyan 30 günlük bir 'Performans İyileştirme ve Destek Planı' hazırla. Şunları içersin: 1) Mühendisle yapılacak ilk görüşmenin konuşma taslağı, 2) 3 adet ölçülebilir SMART hedef, 3) Haftalık takip çizelgesi."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri şirketlerin PIP sürecini çalışanları kovmak için bir formalite olarak kullanmasını eleştiren, diğeri ise gerçek bir liderin PIP ile bir mühendisi nasıl dipten zirveye taşıyabileceğini anlatan iki uzman. İnsan odaklı liderliğin çarpıcı örnekleri.",
        "udemy_outline": [
            "00:00 - Performans Düşüklüğü: Tembellik mi, Yardım Çığlığı mı?",
            "04:10 - Skill vs Will Matrisi: Mühendisin Neye İhtiyacı Var?",
            "08:20 - AI ile Kusursuz ve Objektif PIP Dokümanı Hazırlamak",
            "13:15 - Veda Gerektiğinde: İnsan Onurunu Koruyarak Yolları Ayırmak"
        ]
    },

    # LESSON 11
    {
        "id": 11,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 11: Mentorluk vs. Koçluk: Junior ve Mid-Level Mühendisleri AI ile 3x Hızlandırmak",
        "title_en": "Lesson 11: Mentorship vs. Coaching: Accelerating Junior & Mid-Level Engineers 3x with AI",
        "level": "Orta / Mid Lead",
        "summary_tr": "Cevabı vermek (Mentorluk) ile düşündürmek (Koçluk) arasındaki fark. Junior mühendislerin kendi AI mentorlarını kurarak bağımsızlaşmasını sağlamak.",
        "summary_en": "Telling the answer (mentorship) vs. asking powerful questions (coaching). Enabling junior and mid-level devs to build custom AI pair-coaches.",
        "eli5_metaphor_tr": "Birine balık verirsen bir gün doyar (Cevabı söylemek). Balık tutmayı öğretirsen ömür boyu doyar (Koçluk). Ona yapay zeka destekli bir balık bulma radarı verir ve nasıl kullanacağını öğretirsen kendi filosunu kurar (AI Çağında Liderlik).",
        "eli5_metaphor_en": "Give someone a fish, they eat for a day. Teach them to fish, they eat for life. Equip them with an AI sonar tracker and train their intuition, and they build their own fishing fleet.",
        "comparison_table": [
            {"topic": "Sorulan Soruya Cevap", "old_way": "'Git config dosyasındaki 42. satırı değiştir' deyip kestirip atmak.", "ai_way": "'Sence bu hata neden kaynaklanıyor olabilir? LLM ile hangi hipotezleri test ettin?'"},
            {"topic": "Öğrenme Hızı", "old_way": "Junior'ın lead'in boş vaktini saatlerce beklemesi.", "ai_way": "Junior'ın takım bağlamıyla eğitilmiş repo RAG botuna sorup anında öğrenmesi."},
            {"topic": "Bağımsızlık", "old_way": "Sürekli lead'e bağımlı, inisiyatif alamayan mühendisler.", "ai_way": "Kendi çözümünü üretip lead'e sadece onay ve mimari doğrulama için gelen mühendisler."}
        ],
        "framework_steps_tr": [
            "1. GROW Koçluk Modelini Uygula: Goal (Hedef), Reality (Mevcut Durum), Options (Seçenekler), Will (Hangi adımı atacaksın?).",
            "2. Doğrudan Cevap Vermeyi Bırak: Soruyla gelen mühendise: 'Harika bir soru. Sence en mantıklı 2 alternatif ne olabilir?' diye sor.",
            "3. Kişisel AI Eşleşmesi Kur: Junior mühendise kodlama yaparken ona 'Sokratik Yöntemle' soru soran özel bir Cursor / ChatGPT sistem promptu tanımlat.",
            "4. Tersine Mentorluk: Junior mühendislerin yeni keşfettiği AI araçlarını ve prompt hilelerini ayda bir tüm takıma anlatmasını sağla."
        ],
        "framework_steps_en": [
            "1. Deploy the GROW Framework: Goal -> Reality -> Options -> Will (Which path will you commit to?).",
            "2. Break the 'Answer Dispenser' Habit: When an engineer asks for a fix, counter with: 'What two hypotheses have you formulated so far?'",
            "3. Configure Socratic AI Prompts: Guide your junior devs to set up system instructions that query their reasoning rather than vomiting boilerplate answers.",
            "4. Reverse Mentorship: Have junior developers host monthly show-and-tells on novel LLM plugins and prompt hacks they discovered."
        ],
        "case_study_tr": "Bir start-up'ta yeni başlayan junior geliştirici Ece, her 20 dakikada bir lead'ine soru soruyordu. Lead bunalmıştı, Ece ise yetersiz hissediyordu. Lead, Ece ile bir koçluk oturumu yaptı. Ece'ye projenin mimari dokümanlarıyla beslenmiş yerel bir AI RAG botu kurdular ve 'Sokratik Öğrenme Promptu' hediye ettiler. Ece sorularını önce bu bota sormaya, hipotezlerini not alıp lead'e sadece günde 1 kez onay için gelmeye başladı. 2 ay sonra Ece, takımdaki en bağımsız mid-level adayı haline geldi.",
        "case_study_en": "Associate engineer Ece pinged her team lead every 20 minutes with syntax questions, exhausting her lead and eroding her own confidence. Her lead pivoted from spoon-feeding to coaching: set up a local codebase RAG tool and gave Ece a Socratic reasoning prompt. Ece bounced ideas off the model first, distilling her questions to high-level trade-offs once a day. Within 60 days, she was promoted to Mid-Level engineer.",
        "ai_prompts": [
            {
                "title": "Sokratik Yazılım Koçu Sistem Promptu (Junior Geliştiriciler İçin)",
                "prompt": "Sen dünyanın en iyi yazılım mühendisliği koçusun. Sana kod veya mimariyle ilgili bir soru sorduğumda, doğrudan cevabı ve hazır kodu ASLA verme. Bunun yerine: 1) Sorunun kökündeki temel bilgisayar bilimi kavramını açıkla, 2) Bana düşünmemi sağlayacak 2 yönlendirici soru sor, 3) Doğru yönde ilerlediğimde beni tebrik edip bir sonraki adımı keşfetmemi sağla."
            }
        ],
        "notebooklm_prompts": "İki sunucu: Biri her soruya anında hazır kod veren 'Spoon-feeding' mentorun yarattığı bağımlılık felaketini anlatırken, diğeri Sokratik koçluk ve AI kombinasyonunun bir juniorı nasıl 6 ayda yıldız mühendise dönüştürdüğünü inceliyor. İlham verici bir sohbet.",
        "udemy_outline": [
            "00:00 - Neden Cevabı Söylemek Mühendisi Tembelleştirir?",
            "03:45 - GROW Koçluk Modelinin Yazılım Takımlarına Uyarlanması",
            "08:10 - Junior Mühendisler İçin Sokratik AI Öğrenme Asistanı",
            "13:30 - Egzersiz: Takımınızdaki bir junior mühendisle Sokratik koçluk denemesi"
        ]
    },

    # LESSON 12
    {
        "id": 12,
        "module_id": 2,
        "module_title_tr": "Bölüm 2: AI Destekli İletişim, 1-on-1 ve İnsan Yönetimi",
        "module_title_en": "Module 2: AI-Powered People Leadership & 1-on-1s",
        "title_tr": "Ders 12: Burnout ve AI Yorgunluğu: Takımın Ruh Sağlığını Koruma Kılavuzu",
        "title_en": "Lesson 12: Preventing AI Fatigue, Cognitive Overload & Burnout",
        "level": "Orta / Mid Lead",
        "summary_tr": "AI araçları hızlandıkça beklentiler de katlandı: 'Her şeyi 10 dakikada yapabiliyorsan neden daha fazla yapmıyorsun?' baskısı ve zihinsel tükenmişliği yönetmek.",
        "summary_en": "As AI compresses coding time, organizational expectations skyrocket. Combating 'hyper-productivity exhaustion' and safeguarding mental health.",
        "eli5_metaphor_tr": "Bir arabanın motoruna turbo takarsan araba iki kat hızlı gider. Ama o arabayı 24 saat boyunca kırmızı çizgide (redline) devirde sürersen motor patlar, araba hurdaya döner. AI takımın turbosudur; liderin görevi arabayı sürekli son gaz sürmek değil, harareti kontrol altında tutmaktır.",
        "eli5_metaphor_en": "Bolting a turbocharger onto an engine lets it accelerate twice as fast. But if you hold the tachometer in the redline 24/7, the pistons melt. AI is your team's turbocharger; a lead's prime duty is monitoring coolant temps and preventing engine seizures.",
        "comparison_table": [
            {"topic": "Üretkenlik Beklentisi", "old_way": "'Sprint bitti, hadi hemen dinlenmeden diğerine başlayalım.'", "ai_way": "'AI ile kazandığımız zamanı daha fazla bilet açmak için değil, dinlenmek ve refactor etmek için kullanacağız.'"},
            {"topic": "Mesai Dışı İletişim", "old_way": "Gece 23:00'te Slack'ten mesaj atıp anında cevap beklemek.", "ai_way": "Kesin sessizlik saatleri (No-Ping Hours) ve zamanlanmış mesaj kuralı koymak."},
            {"topic": "Tükenmişlik Tespiti", "old_way": "Mühendis istifa dilekçesini verene kadar hiçbir şey fark etmemek.", "ai_way": "Git commit saatleri, PR yorumlarındaki ton değişimi ve 1-on-1 sinyallerinden AI ile yorgunluk tespiti."}
        ],
        "framework_steps_tr": [
            "1. Jevons Paradoksu Tuzağına Düşme: Bir kaynağı verimli kullanmak talebi artırır. AI kod yazmayı kolaylaştırdı diye takıma 3 kat daha fazla iş yükleme.",
            "2. Odak Günleri (Focus Days): Çarşamba günlerini sıfır toplantı ve sıfır Slack günü ilan et; mühendislerin derin düşünmesine alan aç.",
            "3. Slack/Teams Hijyeni: Gece ve hafta sonu bildirimlerini kapatmayı teşvik et; sen lead olarak gece mesaj atıyorsan bile 'Zamanlanmış Mesaj' ile sabah 09:00'a kur.",
            "4. Ruh Sağlığı İndikatörleri: Sürekli geç saatte PR açan, toplantılarda kamerası kapanan ve alaycı espriler yapmaya başlayan mühendise hemen ulaş ve nefes aldır."
        ],
        "framework_steps_en": [
            "1. Guard Against Jevons Paradox: Making code generation cheaper creates an endless appetite for feature bloat. Resist the temptation to double sprint volume.",
            "2. Ironclad Focus Days: Institute 'No-Meeting Wednesdays' with Slack notifications muted to allow regenerative deep work.",
            "3. Asynchronous Leadership Hygiene: Never send off-hours alerts; schedule communications for the next working morning.",
            "4. Early Exhaustion Signals: Monitor erratic late-night git pushes, camera-off withdrawals, and cynicism spikes; step in with mandatory comp time."
        ],
        "case_study_tr": "Yapay zeka araçlarını devreye alan bir oyun stüdyosunda yönetim 'Artık 1 haftada oyun bitirebilirsiniz' diyerek takımı 2 ay boyunca hafta sonları dahil çalıştırdı. 8 kişilik ekibin 3 en kıdemli mühendisi aynı hafta tükenmişlik raporu alarak işi bıraktı. Yeni gelen lead Tolga ilk iş olarak 'Haftalık Maksimum 40 Saat' kuralı getirdi, hafta sonu deployment'larını yasakladı ve takımın sprint hızını %30 düşürerek insanileştirdi. Kalan ekip toparlandı ve 3 ay içinde şirketin en karlı oyununu çıkardı.",
        "case_study_en": "A gaming startup leadership declared: 'With generative AI, we expect whole mini-games built weekly!' The team ground through 60-hour weeks for 2 months. Result: three key staff engineers walked out simultaneously on medical stress leave. The new lead, Tolga, immediately enforced a strict 40-hour ceiling, outlawed Friday deployments, and throttled sprint commitments to sustainable levels. Morale recovered and the squad shipped their highest-grossing title.",
        "ai_prompts": [
            {
                "title": "Takım Bilişsel Yük ve Tükenmişlik Risk Analizörü",
                "prompt": "Bir yazılım takımı lideriyim. Takımımın son 1 aydaki çalışma ritmi şöyle: [Sprint tamamlama oranı, gece açılan PR sayısı, son retro yorumları]. Bu verileri analiz et: 1) Takımda bilişsel aşırı yüklenme (cognitive overload) ve tükenmişlik belirtisi var mı? 2) Takımın nefes almasını sağlayacak 3 somut operasyonel kural önerisi getir, 3) Şirket yönetimine mühendislerin tükenmesini engellemenin neden uzun vadede karlılık getirdiğini anlatan 3 maddelik yönetici özeti yaz."
            }
        ],
        "notebooklm_prompts": "İki sunucu: 'Sürekli hızlanıyoruz ama nereye koşuyoruz?' sorusunu soran iki deneyimli lider. AI çağında tükenmişliğin yeni yüzü (Cognitive Overload) ve takımı korumanın liderin en birinci görevi olduğu üzerine sarsıcı ve insani bir değerlendirme.",
        "udemy_outline": [
            "00:00 - AI Çağının Gizli Tuzağı: Jevons Paradoksu ve Aşırı Üretkenlik Baskısı",
            "04:20 - Tükenmişliğin 5 Erken Teşhis Belirtisi",
            "08:40 - Takımınızı Koruma Kalkanı: Odak Günleri ve Bildirim Hijyeni",
            "13:50 - Egzersiz: Takımınız için 'Sürdürülebilir Çalışma Sözleşmesi' hazırlayın"
        ]
    }
]
