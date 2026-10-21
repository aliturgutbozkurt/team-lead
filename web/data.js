const COURSE_DATA = {
  "title_tr": "AI Çağında Software Team Lead Olmak",
  "title_en": "AI-Driven Software Team Lead",
  "author": "Ali Turgut Bozkurt",
  "total_lessons": 60,
  "total_modules": 10,
  "lessons": [
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
        {
          "topic": "Başarı Ölçütü",
          "old_way": "Günde kaç satır kod yazdım, kaç karmaşık PR kapattım.",
          "ai_way": "Takımım ne kadar kesintisiz değer üretti, AI araçlarıyla kaç kat hızlandı."
        },
        {
          "topic": "Tıkanıklık Yaklaşımı",
          "old_way": "'Çekil kenara ben 10 dakikada yazarım' deyip klavyeyi kapmak.",
          "ai_way": "Mühendise doğru prompt ve mimari bağlamı vererek onun çözmesini sağlamak."
        },
        {
          "topic": "Zaman Yönetimi",
          "old_way": "Tüm gün IDE'ye gömülüp kulaklıkla dünyayı kapatmak.",
          "ai_way": "Stratejik bloklar, asenkron AI özetleri ve kesintisiz odak zamanı tasarlamak."
        }
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
        {
          "topic": "Kod Üretimi",
          "old_way": "Her fonksiyonu sıfırdan el yordamıyla yazmak.",
          "ai_way": "Spec ve test kontratı tanımlayıp AI ajanlarına ürettirmek ve denetlemek."
        },
        {
          "topic": "Bilgi Paylaşımı",
          "old_way": "Haftalarca süren eski wiki sayfaları ve kulaktan kulağa aktarım.",
          "ai_way": "Kod tabanı RAG sistemi ve living context reposu oluşturmak."
        },
        {
          "topic": "Hata Ayıklama",
          "old_way": "Loglara 4 saat bakıp print satırları eklemek.",
          "ai_way": "Trace ve log bağlamını LLM'e besleyip hipotezleri saniyeler içinde doğrulamak."
        }
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
        {
          "topic": "İlk 30 Gün",
          "old_way": "Hemen mimariyi baştan yazma planı açıklayıp ekibi korkutmak.",
          "ai_way": "Herkesle 30 dk 1-on-1 yapıp transkriptleri AI ile analiz ederek gizli acıları bulmak."
        },
        {
          "topic": "İlk 60 Gün",
          "old_way": "Büyük vaatler verip üst yönetimi gereksiz beklentiye sokmak.",
          "ai_way": "Geliştirici ortamındaki en büyük 2 sürtünmeyi (CI süresi, flaky test) çözmek."
        },
        {
          "topic": "İlk 90 Gün",
          "old_way": "Yalnız kovboy gibi her kararı tek başına almaya çalışmak.",
          "ai_way": "Takımla mutabık kalınan ortak AI vizyonunu ve çeyreklik hedefleri sunmak."
        }
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
        {
          "topic": "İş Verme",
          "old_way": "'Şu bileti al yap' deyip detay vermeden yalnız bırakmak.",
          "ai_way": "Net Context + Kabul Kriterleri + AI Başlangıç Promptu ile görevi devretmek."
        },
        {
          "topic": "Hata Toleransı",
          "old_way": "İlk hatada sinirlenip kodu kendisi devralmak.",
          "ai_way": "Kritik yolda olmayan işlerde hata yapmasına ve AI ile debug etmesine izin vermek."
        },
        {
          "topic": "Öğrenme Desteği",
          "old_way": "Junior'ın yanına oturup 3 saat boyunca klavyede ne yapacağını dikte etmek.",
          "ai_way": "Junior'a bir LLM eşlikçi tanımlayıp sadece mimari kontrol noktalarında inceleme yapmak."
        }
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
        {
          "topic": "AI Algısı",
          "old_way": "'AI kullanan yazılımcı hile yapıyordur, gerçek mühendis değildir.'",
          "ai_way": "'AI kullanmayan mühendis, at arabasıyla Formula 1 yarışına girmeye çalışıyordur.'"
        },
        {
          "topic": "Hata Paylaşımı",
          "old_way": "AI halüsinasyonu yüzünden çıkan hatayı gizlemek, cezalandırmak.",
          "ai_way": "'Haftanın En Komik AI Hatası' oturumu yapıp promptları birlikte iyileştirmek."
        },
        {
          "topic": "Takım Güveni",
          "old_way": "Metrik olarak kimin kaç satır kod commit'lediğine bakmak.",
          "ai_way": "Kimin problemi ne kadar yaratıcı ve sürdürülebilir çözdüğünü takdir etmek."
        }
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
        {
          "topic": "IDE Entegrasyonu",
          "old_way": "Sadece satır içi autocomplete eklentisi kullanmak.",
          "ai_way": "Multi-file context ve repo indeksleme yapabilen Cursor/Copilot Workspace kullanmak."
        },
        {
          "topic": "Mimari Analiz",
          "old_way": "Saatlerce Google ve StackOverflow sayfalarında kaybolmak.",
          "ai_way": "Claude 3.7 Sonnet / Reasoning modelleriyle karmaşık mimari senaryoları modellemek."
        },
        {
          "topic": "Dokümantasyon & Öğrenme",
          "old_way": "PDF ve Confluence sayfalarını kimsenin okumaması.",
          "ai_way": "Tüm şirket dokümanlarını NotebookLM'e yükleyip sesli podcast ve interaktif SSS üretmek."
        }
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
        {
          "topic": "Gündem Belirleme",
          "old_way": "Toplantıya hazırlıksız girip 'Eee, ne var ne yok?' demek.",
          "ai_way": "Önceki notlar, PR ritmi ve hedeflerden AI ile kişiselleştirilmiş 3 odak sorusu üretmek."
        },
        {
          "topic": "İçerik",
          "old_way": "30 dakikanın 25 dakikasını sprint durumunu anlatarak harcamak.",
          "ai_way": "Zamanın %80'ini kariyer, motivasyon, takım ilişkileri ve öğrenmeye ayırmak."
        },
        {
          "topic": "Aksiyon Takibi",
          "old_way": "Alınan kararların unutulup gitmesi.",
          "ai_way": "Görüşme sonrasında AI ile 3 maddelik aksiyon e-postası çıkarıp takvime işlemek."
        }
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
        {
          "topic": "Geri Bildirim Tarzı",
          "old_way": "'Sen çok dikkatsizsin, kodların sürekli patlıyor' (Kişiliğe saldırı).",
          "ai_way": "'Dünkü release'de (Durum), test yazmadan PR açtın (Davranış), ödeme servisi 12 dk çöktü (Etki)' (SBI)."
        },
        {
          "topic": "Zamanlama",
          "old_way": "6 ay biriktirip yıllık performans değerlendirmesinde yüzüne vurmak.",
          "ai_way": "Olaydan sonraki en geç 48 saat içinde sıcağı sıcağına konuşmak."
        },
        {
          "topic": "Hazırlık",
          "old_way": "Spontane konuşup öfkelenmek veya konuyu yumuşatıp mesajı kaybetmek.",
          "ai_way": "Görüşme öncesi LLM ile rol yapıp adayın vereceği olası tepkileri simüle etmek."
        }
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
        {
          "topic": "Tartışma Ekseni",
          "old_way": "'Ben 10 yıldır böyle yapıyorum, en doğrusu bu' (Kıdem egosu).",
          "ai_way": "'Gereksinimlerimiz X, Y, Z. Bu iki yaklaşımın gecikme, maliyet ve bakım metriklerini kıyaslayalım.'"
        },
        {
          "topic": "Karar Mekanizması",
          "old_way": "Kimin sesi daha çok çıkarsa veya kim daha kıdemliyse onun dediği olur.",
          "ai_way": "AI ile tarafsız bir Trade-off Matrisi çıkarıp Architecture Decision Record (ADR) imzalamak."
        },
        {
          "topic": "Sonuç",
          "old_way": "Kaybeden tarafın projeyi pasif-agresif sabote etmesi.",
          "ai_way": "'Disagree and Commit' ilkesiyle herkesin kararı sahiplenmesi."
        }
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
        {
          "topic": "Performans Tespiti",
          "old_way": "'Gözüme tembel görünüyor' hissiyle hareket etmek.",
          "ai_way": "PR teslim süreleri, blokaj kayıtları ve 1-on-1 notlarını objektif incelemek."
        },
        {
          "topic": "İyileştirme Planı (PIP)",
          "old_way": "İşten çıkarmak için bahane olarak uydurma hedefler koymak.",
          "ai_way": "Başarılabilir, ölçülebilir 30-60 günlük net gelişim kilometre taşları ve AI eşleşmesi koymak."
        },
        {
          "topic": "İletişim",
          "old_way": "Son güne kadar her şey yolundaymış gibi davranıp aniden şok etmek.",
          "ai_way": "Açık, şeffaf ve haftalık düzenli durum değerlendirmesi yapmak."
        }
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
        {
          "topic": "Sorulan Soruya Cevap",
          "old_way": "'Git config dosyasındaki 42. satırı değiştir' deyip kestirip atmak.",
          "ai_way": "'Sence bu hata neden kaynaklanıyor olabilir? LLM ile hangi hipotezleri test ettin?'"
        },
        {
          "topic": "Öğrenme Hızı",
          "old_way": "Junior'ın lead'in boş vaktini saatlerce beklemesi.",
          "ai_way": "Junior'ın takım bağlamıyla eğitilmiş repo RAG botuna sorup anında öğrenmesi."
        },
        {
          "topic": "Bağımsızlık",
          "old_way": "Sürekli lead'e bağımlı, inisiyatif alamayan mühendisler.",
          "ai_way": "Kendi çözümünü üretip lead'e sadece onay ve mimari doğrulama için gelen mühendisler."
        }
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
        {
          "topic": "Üretkenlik Beklentisi",
          "old_way": "'Sprint bitti, hadi hemen dinlenmeden diğerine başlayalım.'",
          "ai_way": "'AI ile kazandığımız zamanı daha fazla bilet açmak için değil, dinlenmek ve refactor etmek için kullanacağız.'"
        },
        {
          "topic": "Mesai Dışı İletişim",
          "old_way": "Gece 23:00'te Slack'ten mesaj atıp anında cevap beklemek.",
          "ai_way": "Kesin sessizlik saatleri (No-Ping Hours) ve zamanlanmış mesaj kuralı koymak."
        },
        {
          "topic": "Tükenmişlik Tespiti",
          "old_way": "Mühendis istifa dilekçesini verene kadar hiçbir şey fark etmemek.",
          "ai_way": "Git commit saatleri, PR yorumlarındaki ton değişimi ve 1-on-1 sinyallerinden AI ile yorgunluk tespiti."
        }
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
    },
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
        {
          "topic": "Format",
          "old_way": "Her sabah herkesin kamerasını açıp sırayla dün ne yaptığını okuması.",
          "ai_way": "Slack botuna 3 madde yazmak; AI'ın bunu 30 saniyelik liderlik özetine çevirmesi."
        },
        {
          "topic": "Blokaj Çözümü",
          "old_way": "İki kişinin spesifik teknik tartışmasını 8 kişinin dinlemesi.",
          "ai_way": "Blokaj anında ilgili iki kişinin yapay zeka eşliğinde hemen ayrı bir kanala geçmesi."
        },
        {
          "topic": "Zaman Kazanımı",
          "old_way": "Takım başına haftada 7.5 saat boşa harcanan toplantı süresi.",
          "ai_way": "Haftada 1 saat canlı strateji kahvesi, geri kalan her şey asenkron ve AI özetli."
        }
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
        {
          "topic": "Kabul Kriteri (AC)",
          "old_way": "1 cümle: 'Kullanıcı şifresini sıfırlayabilmeli.'",
          "ai_way": "Given-When-Then formatında 8 adet sınır durum (rate limit, süresi dolmuş token, brute-force vb.)."
        },
        {
          "topic": "Hata Tespiti",
          "old_way": "Edge case'leri QA test ederken veya canlı ortamda müşteriler patlayınca öğrenmek.",
          "ai_way": "Bilet yazılırken AI ile 20 olası uç senaryoyu simüle edip tasarım aşamasında engellemek."
        },
        {
          "topic": "Geliştirici Netliği",
          "old_way": "Yazılımcının 3 gün boyunca PM'e 'Burada ne demek istediniz?' diye soru sorması.",
          "ai_way": "Bileti alan mühendisin sıfır sürtünmeyle doğrudan koda ve teste başlayabilmesi."
        }
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
        {
          "topic": "Tahmin Yöntemi",
          "old_way": "Planning Poker kartı fırlatıp 5 mi olsun 8 mi olsun diye 40 dakika kavga etmek.",
          "ai_way": "Biletin karmaşıklığını benzer geçmiş 50 PR ile kıyaslayıp güven aralığı çıkarmak."
        },
        {
          "topic": "Kapasite Hesabı",
          "old_way": "'8 kişi x 8 saat = 64 saatlik iş alırız' yanılgısı.",
          "ai_way": "Toplantılar, PR review ve destek nöbetlerini düşerek net odak kapasitesini (Focus Factor) hesaplamak."
        },
        {
          "topic": "Doğruluk",
          "old_way": "Her sprintin son günü yetiştirilemeyen biletlerin sonraki sprinte sarkması.",
          "ai_way": "Monte Carlo simülasyonu ile %85 kesinlikle bitiş tarihi vermek."
        }
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
        {
          "topic": "Katılım",
          "old_way": "Aynı 2 kişinin konuşması, içe kapanık mühendislerin susması.",
          "ai_way": "Anonim dijital retro kartlarının AI ile gruplanıp tarafsızca oylanması."
        },
        {
          "topic": "Aksiyon Takibi",
          "old_way": "Retro panosunda unutulan 'İletişimi artıralım' gibi soyut temenniler.",
          "ai_way": "Maksimum 2 adet somut, sahibi ve bitiş tarihi olan Jira taskına dönüştürmek."
        },
        {
          "topic": "Süreç İlerlemesi",
          "old_way": "Sprintler geçtikçe aynı sorunların sürekli tekrar etmesi.",
          "ai_way": "Son 5 retronun duygu ve konu haritasını AI ile karşılaştırıp iyileşmeyi ölçmek."
        }
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
        {
          "topic": "İletişim Dili",
          "old_way": "'Design pattern'larımız çok kötü, clean code prensiplerine uymuyor.'",
          "ai_way": "'Bu modül yüzünden her yeni özellik %40 daha geç çıkıyor ve ayda 40.000$ geliştirme maliyeti yakıyoruz.'"
        },
        {
          "topic": "Zaman Tahsisi",
          "old_way": "Yönetimden gizli gizli kod temizliği yapıp yakalanınca azar işitmek.",
          "ai_way": "Her sprint kapasitesinin %20'sini resmi olarak 'Teknik Sağlık ve Borç Ödeme'ye sabitlemek."
        },
        {
          "topic": "Gerekçelendirme",
          "old_way": "Sübjektif yazılımcı rahatsızlığı.",
          "ai_way": "AI ile kod karmaşıklığı (cyclomatic complexity), hata geçmişi ve maliyet simülasyonu raporu sunmak."
        }
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
        {
          "topic": "Yol Haritası Yapısı",
          "old_way": "Aylara bölünmüş katı Gantt şemaları hazırlayıp ilk gecikmede paniklemek.",
          "ai_way": "Şimdi / Sonra / Gelecek (Now / Next / Later) sütunlarıyla dinamik önceliklendirme."
        },
        {
          "topic": "Kapasite Tamponu",
          "old_way": "Herkesin %100 kapasiteyle çalışacağını varsaymak (hastalık, izin, kriz yokmuş gibi).",
          "ai_way": "Tarihsel volatiliteye göre %25 'Bilinmeyenler Tamponu' (Unplanned Buffer) koymak."
        },
        {
          "topic": "Öncelik Değişimi",
          "old_way": "Yönetim yeni fikirle geldiğinde 'Tüm planımız bozuldu' diye kavga etmek.",
          "ai_way": "AI ile senaryo analizi yapıp: 'X'i eklersek Y 3 hafta sarkar, hangisini seçelim?' diyebilmek."
        }
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
        {
          "topic": "Kod Kabul Kriteri",
          "old_way": "'Çalışıyorsa ve testi geçiyorsa merge edelim.'",
          "ai_way": "'Mühendis kodu tam olarak anladı mı, mimari sınırlara uyuyor mu, gereksiz soyutlama var mı?'"
        },
        {
          "topic": "Bağımlılık Yönetimi",
          "old_way": "Paket yöneticisine kütüphaneleri sorgusuz eklemek.",
          "ai_way": "AI'ın uydurduğu sahte (hallucinated) npm/pip paketlerine ve güvenlik açıklarına karşı otomatik tarama."
        },
        {
          "topic": "Kod İnceleme Odağı",
          "old_way": "Noktalı virgül ve isimlendirme gibi yüzeysel şeyleri kontrol etmek.",
          "ai_way": "Sistem sınırları, domain bütünlüğü ve gelecekteki bakım maliyetini denetlemek."
        }
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
        {
          "topic": "PR İnceleme Süresi",
          "old_way": "PR'ın 4 gün boyunca listede bekleyip unutulması.",
          "ai_way": "AI botunun ilk 60 saniyede inceleme yapması, insanın 20 dakikada onaylaması."
        },
        {
          "topic": "İnceleme İçeriği",
          "old_way": "Yorumların %80'inin formatlama, isimlendirme ve küçük detaylar olması.",
          "ai_way": "Formatlamayı botun düzeltmesi; insanların sadece domain mimarisine odaklanması."
        },
        {
          "topic": "PR Boyutu",
          "old_way": "80 dosyalık devasa PR'lar ('Looks Good To Me' deyip geçilirdi).",
          "ai_way": "Maksimum 250 satırlık küçük, atomik ve AI özetli PR standartı."
        }
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
        {
          "topic": "Karar Belgeleme",
          "old_way": "Kararın Slack konuşmalarında kaybolup gitmesi, kimsenin hatırlamaması.",
          "ai_way": "Karar anında 10 dakikada AI ile şablon doldurulup repoya markdown olarak commit'lenmesi."
        },
        {
          "topic": "Format",
          "old_way": "Kimsenin okumadığı 40 sayfalık ağır Confluence belgeleri.",
          "ai_way": "1 sayfalık net ADR: Bağlam (Context), Karar (Decision), Sonuçlar (Consequences)."
        },
        {
          "topic": "Geri Bildirim",
          "old_way": "Mühendislerin çekinip fikir belirtmemesi.",
          "ai_way": "RFC taslağını LLM'e verip 'Bu mimarideki 3 gizli riski bul' diyerek tartışmayı açmak."
        }
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
        {
          "topic": "Modernizasyon Yaklaşımı",
          "old_way": "'Tüm projeyi çöpe atıp sıfırdan yazacağız' (Büyük Yeniden Yazım Felaketi).",
          "ai_way": "Strangler Fig deseniyle modülleri parça parça, canlı trafiği bozmadan ayırmak."
        },
        {
          "topic": "Test Stratejisi",
          "old_way": "Hiç test olmadan dua ederek kodu değiştirmek.",
          "ai_way": "AI ile mevcut davranışın röntgenini çeken Karakterizasyon (Characterization) testleri üretmek."
        },
        {
          "topic": "Dokümantasyon Çözümleme",
          "old_way": "Emekli olmuş yazılımcıyı arayıp 'Bu fonksiyon ne yapıyordu?' diye sormak.",
          "ai_way": "Eski kodu LLM'e besleyip iş mantığı kurallarını ve edge-case'leri metin olarak deşifre etmek."
        }
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
        {
          "topic": "Mimari Yapı",
          "old_way": "Veritabanı tablolarına göbekten bağlı Anemic Domain modelleri.",
          "ai_way": "İş kurallarını dış dünyadan (DB, Framework) izole eden Rich Domain modelleri."
        },
        {
          "topic": "AI'ın Anlama Hızı",
          "old_way": "Controller içinde 2000 satırlık karmaşık SQL sorguları ve logic.",
          "ai_way": "Her use-case'in tek bir sorumluluğu olması (Single Responsibility) sayesinde AI'ın %99 doğrulukla kod üretmesi."
        },
        {
          "topic": "Test Edilebilirlik",
          "old_way": "Test yazmak için tüm veritabanını ayağa kaldırma zorunluluğu.",
          "ai_way": "Saf domain mantığının sıfır bağımlılıkla milisaniyeler içinde test edilmesi."
        }
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
        {
          "topic": "Güvenlik Denetimi",
          "old_way": "Yılda bir kez penetrasyon testi yaptırıp çıkan 200 sayfalık PDF'i okumak.",
          "ai_way": "Her PR açıldığında otomatik SAST/DAST ve AI güvenlik ajanlarını çalıştırmak."
        },
        {
          "topic": "Lisans Riskleri",
          "old_way": "Yazılımcıların GPL/AGPL kod kopyalayıp şirketi telif davası riskine sokması.",
          "ai_way": "Telif koruma filtreleri (Public Code Filter) ve otomatik lisans tarayıcılar (FOSSA) kullanmak."
        },
        {
          "topic": "Paket Halüsinasyonu",
          "old_way": "Geliştiricinin AI'ın önerdiği paketi sorgulamadan npm install etmesi.",
          "ai_way": "Paketin indirilme sayısı, yazarı ve GitHub reposunu doğrulamadan kurulamayan şirket içi repo registry'si."
        }
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
    },
    {
      "id": 25,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 25: Modern CI/CD Hattı ve AI Gatekeeper'lar: Yeşil Pipeline Koruması",
      "title_en": "Lesson 25: Autonomous CI/CD: AI Gatekeepers, Flaky Test Fixers & Green Pipeline Shield",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Kırmızı pipeline'ı görünce 'Tekrar çalıştır düzelir' diyen kültüre son: Flaky testleri AI ile yakalamak, build süresini 5 dakikanın altına indirmek ve otomatik rollback.",
      "summary_en": "Eradicating the 'just re-run CI until it turns green' disease: Flaky test auto-isolation, keeping build times sub-5 minutes, and automated canary rollbacks.",
      "eli5_metaphor_tr": "Havalimanında bir uçağın kalkıştan önce 50 farklı sensör kontrolünden geçmesi gibidir. Eğer sensörlerden biri rastgele kırmızı yanıyor ve teknisyen 'Boşver o bazen öyle yapar, kalkışa devam' diyorsa o uçak düşer. CI/CD hattı senin uçuş kontrol merkezindir; kırmızı yandığında bütün fabrika durur.",
      "eli5_metaphor_en": "Pre-flight aviation diagnostics: If a landing gear warning light flashes red intermittently and the chief mechanic shrugs: 'Oh, that sensor is just flaky, clear for takeoff!' the jet crashes. Your CI/CD is flight control; a red build halts the factory.",
      "comparison_table": [
        {
          "topic": "Kırmızı Build Tavrı",
          "old_way": "'Başka biri düzeltir' deyip görmezden gelmek, üstüne kod merge etmek.",
          "ai_way": "Pipeline patladığı an master branch'e merge'ü kilitlemek ve AI botunun PR sahibine anında kök neden ve yama göndermesi."
        },
        {
          "topic": "Flaky Testler",
          "old_way": "Rastgele patlayan testleri `@Ignore` edip halının altına süpürmek.",
          "ai_way": "AI ile flaky testleri otomatik karantinaya alıp zamanlama/async hatalarını düzeltmek."
        },
        {
          "topic": "Build Süresi",
          "old_way": "45 dakika süren hantal build ve test adımları.",
          "ai_way": "Değişen dosyalara göre sadece etkilenen testleri koşan akıllı test seçimi (Test Impact Analysis) ile 4 dakika."
        }
      ],
      "framework_steps_tr": [
        "1. Kırmızı Pipeline Acil Durumu (Andon Cord): Master/main branch asla kırmızı kalamaz; kırmızı build 15 dakika içinde yeşile dönmezse commit otomatik revert edilir.",
        "2. 10 Dakika Kuralı: Bir CI/CD pipeline'ı 10 dakikadan uzun sürüyorsa geliştiriciler bağlam kopması yaşar; adımları paralelleştir.",
        "3. Flaky Test Karantinası: Rastgele patlayan testleri ana akıştan ayırıp ayrı bir AI onarım havuzuna al.",
        "4. GitOps ve Otomatik Rollback: Kubernetes deployment'larında hata oranı %1'i geçtiğinde insan müdahalesi olmadan anında önceki sürüme dönen akıllı bekçi (ArgoCD/Flux)."
      ],
      "framework_steps_en": [
        "1. The Andon Cord Protocol: Main branch must never linger in red. If a broken build isn't resolved in 15 minutes, auto-revert the offender.",
        "2. The 10-Minute Velocity Ceiling: Any pipeline exceeding 10 minutes causes disastrous context switching; parallelize container test suites.",
        "3. Autonomous Flaky Test Quarantine: Automatically isolate nondeterministic tests into a quarantine lane paired with an auto-fix prompt worker.",
        "4. GitOps with Canary Auto-Rollback: Configure ArgoCD/Flux and Prometheus to instantly roll back releases if p99 latency or error spikes exceed 1%."
      ],
      "case_study_tr": "Bir video streaming platformunda CI süresi 48 dakikaydı ve her 3 build'den biri flaky test yüzünden patlıyordu. Mühendisler günde en fazla 1 kez deploy alabiliyordu. Yeni lead Kerem, Testcontainers ve Gradle build cache optimizasyonu yaptı; ardından LLM destekli Test Impact Analysis entegre etti. Build süresi 48 dakikadan 6 dakikaya indi. Deployment frekansı günde 1'den günde 14'e çıktı; hata oranı %70 azaldı.",
      "case_study_en": "A media streaming platform's CI runs dragged on for 48 minutes, failing one out of three runs due to timing race conditions in selenium suites. Developers deployed once a day at best. Lead Kerem implemented Testcontainers, remote build caching, and AI-driven Test Impact Analysis. Build runs dropped to 6 minutes, unlocking 14 production deploys per day while reducing regressions by 70%.",
      "ai_prompts": [
        {
          "title": "CI/CD Flaky Test ve Pipeline Hata Analiz Ajanı",
          "prompt": "Aşağıdaki CI/CD build logunda patlayan test çıktısı ve hata izi (stack trace) bulunmaktadır: [LOG DETAYI]. Sen bir Site Reliability ve Build Engineer uzmanısın. 1) Bu hatanın flaky (deterministik olmayan - örn: port çakışması, async await eksikliği, time zone farkı) olma ihtimalini değerlendir, 2) Kök nedeni netleştir, 3) Testi deterministik ve hatasız hale getirecek kod düzeltmesini sun."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Kırmızı pipeline görünce tekrar butona basan' yazılımcı komedisi ve modern GitOps dünyasında saniyeler içinde deployment yapmanın getirdiği huzur. Test kültürünün ve yeşil pipeline korumasının şirket kültüründeki yeri.",
      "udemy_outline": [
        "00:00 - Kırmızı Pipeline Hastalığı: Şirketler Neden Yavaşlar?",
        "04:15 - 10 Dakika Kuralı: Testleri Paralelleştirme ve Akıllı Cache",
        "08:35 - Flaky Testleri AI ile Avlamak ve Karantinaya Almak",
        "13:20 - Egzersiz: Takımınızın CI/CD hattındaki en yavaş 2 adımı tespit edip süreyi yarıya indirin"
      ]
    },
    {
      "id": 26,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 26: Test Driven Development (TDD) ve AI: Testi Kim Yazıyor, Kodu Kim?",
      "title_en": "Lesson 26: TDD in the AI Era: Mutation Testing & Prompt-Driven Specification",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Yapay zeka çağında TDD öldü mü yoksa altın çağını mı yaşıyor? İnsanın test ve spec yazdığı, yapay zekanın kodu ürettiği en hızlı geliştirme döngüsü.",
      "summary_en": "Did AI kill TDD or unleash its golden age? The human writes the executable specification, the AI synthesizes the code, and mutation tests verify truth.",
      "eli5_metaphor_tr": "Sen bir mimarsın ve inşaat ustasına 'Bu odaya koyacağım masa tam 120 cm genişliğinde ve 4 bacaklı olacak' diye bir kalıp (test) veriyorsun. Usta (AI) saniyeler içinde o masayı yapıyor. Masayı kalıba sokuyorsun; tık diye oturursa işlem tamamdır. Kalıbı sen tasarlamazsan ustanın yaptığı masanın odaya sığıp sığmayacağını bilemezsin.",
      "eli5_metaphor_en": "You are a master architect providing an exact laser mold: 'The table must measure exactly 120 cm with 4 load-bearing legs.' The automated machine (AI) shapes the wood instantly. You place it in the mold: if it clicks in, it ships. Without the mold, you have no clue if the table fits the dining room.",
      "comparison_table": [
        {
          "topic": "TDD Rol Dağılımı",
          "old_way": "Aynı mühendisin hem testi hem kodu yazması (zihinsel yorgunluk ve önyargı).",
          "ai_way": "İnsan mühendisin kusursuz test senaryolarını yazması; AI'ın testi geçecek kodu üretmesi."
        },
        {
          "topic": "Test Kalitesi Ölçümü",
          "old_way": "Sadece Code Coverage yüzdesine bakmak (boş testler bile %100 gösterir).",
          "ai_way": "Mutation Testing (Pitest/Stryker) ile testlerin kodu gerçekten denetleyip denetlemediğini ölçmek."
        },
        {
          "topic": "Geliştirme Hızı",
          "old_way": "TDD'nin 'zaman kaybı' olarak görülmesi.",
          "ai_way": "AI ile kod üretildiği için TDD döngüsünün 10 kat hızlanması."
        }
      ],
      "framework_steps_tr": [
        "1. Red-Green-Refactor AI Döngüsü: 1) Mühendis testi yazar (Red), 2) AI testi geçiren kodu üretir (Green), 3) Mühendis ve AI kodu sadeleştirir (Refactor).",
        "2. Spec As Code: Testler artık sadece doğrulama aracı değil; yapay zekaya verilen en net, en hatasız prompttur.",
        "3. Mutasyon Testi (Mutation Testing): Koda kasten bug enjekte eden araçlar çalıştır; eğer testlerin bu bugları yakalayamıyorsa o testler çöp demektir.",
        "4. Mocking Tuzaklarına Dikkat: Her şeyi mock'lamak yerine Domain mantığında gerçek nesneleri, dış servislerde ise WireMock/Testcontainers kullan."
      ],
      "framework_steps_en": [
        "1. The AI Red-Green-Refactor Cycle: 1) Human engineers the executable spec (Red), 2) LLM synthesizes implementation (Green), 3) Human & AI optimize (Refactor).",
        "2. Tests as Unambiguous Prompts: Unit tests are the highest-fidelity, zero-ambiguity prompts you can ever feed to an LLM.",
        "3. Mutation Testing Validation: Run Stryker or Pitest to inject intentional defects into the code. If your tests stay green, your tests are worthless vanity.",
        "4. Beware Over-Mocking: Avoid fragile mock-everything testing; verify domain aggregates with real instances and external systems via Testcontainers."
      ],
      "case_study_tr": "Bir ödeme şirketinde geliştiriciler 'TDD bizi yavaşlatıyor' diyerek test yazmayı bırakmıştı. Kod kalitesi düştü. Yeni lead Burcu bir yarışma düzenledi: 'AI Destekli TDD Günü'. Mühendisler sadece test yazdı ve Cursor'a 'Bu testleri geçecek en temiz Spring Boot kodunu yaz' dedi. Mühendisler kod yazma süresinin %70 kısaldığını, üstelik ilk denemede sıfır hata ile production'a çıkabildiklerini görünce takımdaki tüm direnç kırıldı.",
      "case_study_en": "Developers at a payments provider abandoned TDD, claiming it crippled speed. Production regressions escalated. Lead Burcu hosted an 'AI-Driven TDD Hackathon': engineers wrote comprehensive unit tests first, then instructed Cursor: 'Generate minimal code passing these exact specs.' Developers realized implementation time shrank by 70%, with zero regressions on deploy. TDD adoption leaped to 100%.",
      "ai_prompts": [
        {
          "title": "TDD Test Senaryosundan Kod Üretici ve Refactor Motoru",
          "prompt": "Aşağıda yeni bir iş kuralı için yazdığım JUnit 5 / Jest testleri yer almaktadır: [TEST KODU]. Bu testler şu an patlamaktadır (RED). 1) Bu testleri başarıyla geçirecek (GREEN) en sade, temiz ve SOLID uyumlu kodu yaz, 2) Kodu over-engineering yapmadan minimal tut, 3) Testin kaçırmış olabileceği 2 kritik sınır durum (edge-case) için ek test senaryosu öner."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'TDD öldü mü?' tartışmasını yapan iki yazılımcı. AI çağında test yazmanın neden bir angarya değil, yapay zekayı yöneten bir sihirli değnek haline geldiğini anlatan coşkulu ve esprili bir bölüm.",
      "udemy_outline": [
        "00:00 - TDD'nin Yeniden Doğuşu: Testler Artık En Güçlü Prompt!",
        "04:15 - AI Destekli Red-Green-Refactor Döngüsü",
        "08:30 - Mutasyon Testi Nedir? Sahte Testleri İfşa Etmek",
        "13:40 - Egzersiz: 3 test yazıp AI'a kodu ürettirerek ilk TDD döngünüzü tamamlayın"
      ]
    },
    {
      "id": 27,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 27: Cursor Rules, Copilot Workspace ve Repo Bazlı AI Konfigürasyonu",
      "title_en": "Lesson 27: Standardizing .cursorrules, System Prompts & Team AI Configs",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Takımdaki her yazılımcının AI'dan farklı kalitede kod alması karmaşasına son: `.cursorrules`, GitHub Copilot instructions ve repo bazlı sistem kurallarını standartlaştırma.",
      "summary_en": "Ending chaotic prompt divergence: Centralizing team engineering standards via `.cursorrules`, copilot instructions, and shared agent configs checked into Git.",
      "eli5_metaphor_tr": "Bir orkestradaki her müzisyenin önüne farklı bir bestenin notasını koyarsan korkunç bir gürültü çıkar. `.cursorrules` dosyası, tüm yapay zekaların önüne koyduğun ortak orkestra notasıdır. Hangi dili konuşacaklar, hangi kütüphaneleri kullanacaklar, hangi hataları asla yapmayacaklar hepsi o tek kağıtta yazar.",
      "eli5_metaphor_en": "Handing every musician in an orchestra a different symphony score creates unbearable cacophony. A `.cursorrules` file is the unified sheet music: it instructs every AI pair-programmer on exact architectural patterns, forbidden libraries, and test conventions.",
      "comparison_table": [
        {
          "topic": "Prompt Kalitesi",
          "old_way": "Her mühendisin AI'a kafasına göre 'Şunu yaz' diye rastgele prompt atması.",
          "ai_way": "Repoda commit'lenmiş kurallar sayesinde AI'ın projenin mimarisini ve kurallarını otomatik bilmesi."
        },
        {
          "topic": "Mimari Tutarlılık",
          "old_way": "AI'ın projede Lombok varken elle getter-setter yazması veya eski kütüphaneleri getirmesi.",
          "ai_way": "Kurallar dosyasında yasaklı pattern'ların belirtilmesi sayesinde sıfır tutarsızlık."
        },
        {
          "topic": "Onboarding",
          "old_way": "Yeni gelen yazılımcının takım standartlarını öğrenmek için aylarca debelenmesi.",
          "ai_way": "IDE'yi açtığı ilk dakika AI'ın takım standartlarına uygun kod üretmeye başlaması."
        }
      ],
      "framework_steps_tr": [
        "1. Tek Hakikat Kaynağı (Single Source of Context): Projenin kök dizinine `.cursorrules` veya `.github/copilot-instructions.md` ekle.",
        "2. Açık ve Net Kısıtlar: 'Clean code yaz' gibi muğlak lafları bırak; 'Daima Java 21 Record kullan, Lombok `@Data` kullanma, Controller katmanında ResponseEntity dön' de.",
        "3. Yasaklı Kütüphaneler Listesi: Halüsinasyon veya eski sürüm riskine karşı yasaklı paketleri kurallar dosyasına açıkça yaz.",
        "4. Kuralları Versiyonla: AI kuralları da kod gibidir; PR ile açılır, takımla tartışılır ve repo ile birlikte versiyonlanır."
      ],
      "framework_steps_en": [
        "1. Single Source of Context: Commit `.cursorrules` or `.github/copilot-instructions.md` into the repository root.",
        "2. Explicit Negative Constraints: Ban vague wishes like 'write clean code'; enforce 'Always use Java 21 Records, never Lombok `@Data`, return domain results.'",
        "3. The Banned Dependencies Blocklist: Explicitly list forbidden libraries and deprecated patterns in the config file.",
        "4. Treat Prompts as Code: System configs must evolve via Pull Requests, subjected to team code reviews and semantic versioning."
      ],
      "case_study_tr": "Bir mobil fintech projesinde 6 mühendisten 3'ü Swift Concurrency (async/await), 3'ü ise eski Combine kütüphanesini kullanıyordu çünkü AI araçları farklı önerilerde bulunuyordu. Proje tam bir çorbaya döndü. Lead Mert, kök dizine 40 satırlık kapsamlı bir `.cursorrules` dosyası yazdı. AI'ın Combine önermesini yasakladı ve modern async/await standartlarını bağladı. 1 hafta içinde tüm yeni kodlar tek bir mimari standartta birleşti.",
      "case_study_en": "In an iOS fintech project, half the team used modern Swift Concurrency (async/await) while the other half generated legacy Combine publishers because their individual AI assistants suggested different styles. Code became unmaintainable. Lead Mert committed a concise 40-line `.cursorrules` file forbidding Combine and locking in async/await standards. Within one sprint, 100% of generated code unified.",
      "ai_prompts": [
        {
          "title": "Üretim Düzeyinde .cursorrules ve Copilot Instruction Üretici",
          "prompt": "Biz şu teknoloji yığınını kullanan profesyonel bir ekibiz: [DİL, FRAMEWORK, DB, TEST KÜTÜPHANESİ]. Ekibimiz için projenin kök dizinine konulacak kusursuz bir `.cursorrules` dosyası hazırla. Şunları içersin: 1) Kod stili ve mimari katman kuralları, 2) Kesinlikle yasaklanmış (deprecated) pattern'lar ve kütüphaneler, 3) Test yazma standartları (Given-When-Then), 4) Git commit ve PR formatı."
        }
      ],
      "notebooklm_prompts": "İki sunucu: Projesine `.cursorrules` koymayan bir takımda yaşanan 'Babil Kulesi' karmaşası. Herkesin AI'ının farklı bir dilde kod ürettiği komedi ve 40 satırlık bir kural dosyasının bir takımı nasıl kaostan kurtardığı üzerine keyifli bir analiz.",
      "udemy_outline": [
        "00:00 - AI ile Babil Kulesi Sendromu: Mimari Tutarsızlık",
        "04:10 - `.cursorrules` ve Copilot Instructions Anatomisi",
        "08:35 - Yasaklı Pattern'lar: AI'a 'Ne Yapmaması Gerektiğini' Söylemek",
        "13:20 - Egzersiz: Takımınızın reposu için ilk resmi `.cursorrules` dosyasını oluşturun"
      ]
    },
    {
      "id": 28,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 28: Kendi Kod Tabanınızı Konuşulabilir Yapmak: Kod Tabanı RAG ve Knowledge Base",
      "title_en": "Lesson 28: Building Internal Codebase RAG & Conversational Knowledge Repositories",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Milyonlarca satırlık şirket kodunu ve Confluence belgelerini akıllı bir arama ve sohbet motoruna dönüştürmek: Kod tabanı embedding'leri ve yerel RAG mimarileri.",
      "summary_en": "Turning millions of lines of proprietary code and stale wikis into a queryable semantic brain: Codebase embeddings, AST indexing, and private RAG architectures.",
      "eli5_metaphor_tr": "100.000 ciltlik dev bir kütüphanede aradığın tek bir bilgiyi bulmak için aylarca rafları taramak yerine; kütüphanedeki her cümlenin nerede olduğunu ezbere bilen bir kütüphane görevlisine 'Bana 3 numaralı ödeme akışındaki komisyon hesaplamasını getir' dediğinde sana 3 saniyede o sayfayı açıp önüne koymasıdır.",
      "eli5_metaphor_en": "Instead of wandering endlessly through a 100,000-volume labyrinthine library to find one obscure paragraph, you ask the omniscient head librarian: 'Show me where we calculate merchant fees in workflow 3,' and they open the exact page within 3 seconds.",
      "comparison_table": [
        {
          "topic": "Kod Tabanını Anlama",
          "old_way": "Senior mühendisin 'O kısma Ahmet bakıyordu, ona sor' demesi (Ahmet tatile gidince tıkanmak).",
          "ai_way": "Kod tabanı RAG sistemine doğal dille soru sorup dosya ve satır referanslarıyla anında yanıt almak."
        },
        {
          "topic": "İndeksleme",
          "old_way": "Sadece düz metin arama (grep / ctrl+f) ile kelime eşleştirmek.",
          "ai_way": "AST (Abstract Syntax Tree) ve semantik vektör embedding'leri ile mimari bağıntıları sorgulamak."
        },
        {
          "topic": "Güvenlik",
          "old_way": "Şirket kodlarını izinsiz açık LLM'lere yapıştırma riski.",
          "ai_way": "Yerel (On-premise / VPC içi) embedding ve RAG modelleriyle sıfır veri sızıntısı."
        }
      ],
      "framework_steps_tr": [
        "1. Semantik İndeksleme: Kodları sadece düz metin olarak değil; AST yapısı, fonksiyon imzaları ve mimari ilişkileriyle vektör veritabanına (Qdrant/Chroma/Pinecone) indeksle.",
        "2. Çok Katmanlı Arama (Hybrid Search): Düz anahtar kelime araması (BM25) ile semantik vektör aramasını birleştir.",
        "3. Gizlilik ve Güvenlik Sınırları: Şirketin kaynak kodlarının dışarıya çıkmadığından emin olmak için şirket içi VPC veya onaylı kurumsal LLM API'leri kullan.",
        "4. Dokümantasyonla Birleştir: Sadece kodu değil; mimari kararları (ADR), PR açıklamalarını ve post-mortem raporlarını da aynı bilgi havuzuna bağla."
      ],
      "framework_steps_en": [
        "1. Semantic AST Indexing: Index code not merely as raw text, but as Abstract Syntax Trees, function signatures, and call-graphs in a vector DB.",
        "2. Implement Hybrid Search: Combine lexical keyword search (BM25) with dense semantic embeddings to maximize retrieval precision.",
        "3. Zero-Data-Leakage Guardrails: Keep embeddings and inference inside your private VPC or enterprise-shielded LLM endpoints.",
        "4. Unified Knowledge Graph: Ingest code repositories alongside ADRs, PR descriptions, and incident post-mortems for holistic team recall."
      ],
      "case_study_tr": "Bir bankanın 4 milyon satırlık monolitik ödeme sisteminde yeni başlayan yazılımcıların ilk PR'ını açması ortalama 3 ay sürüyordu çünkü kimse kodun nereye bağlandığını bilmiyordu. Lead Cenk, açık kaynaklı bir RAG pipeline'ı kurarak tüm repo ve Confluence dokümanlarını indeksledi. Yeni katılanlar 'Döviz dönüşüm kuru hangi servisten okunuyor?' gibi soruları bot üzerinden anında çözmeye başladı. Onboarding süresi 3 aydan 2 haftaya indi.",
      "case_study_en": "At a major bank with a 4-million-line legacy core, new hires spent 3 months before opening their first PR because the system's dependencies were undocumented. Lead Cenk engineered an internal Codebase RAG pipeline indexing repos and wikis into an on-prem vector store. New engineers asked natural language queries and received exact code paths. Time-to-first-PR plummeted from 90 days to 14 days.",
      "ai_prompts": [
        {
          "title": "Kod Tabanı RAG Arama ve Semantik Sorgulama Şablonu",
          "prompt": "Sen bizim dahili mikroservis kod tabanımızı adım adım bilen Kıdemli Sistem Mimarı RAG botusun. Soru: '[SORU BURAYA GELECEK: Örn: Sipariş iptal edildiğinde fatura iadesi hangi kuyruktan tetikleniyor?]'. Bana yanıt verirken: 1) Doğrudan ilgili dosya ve sınıf referanslarını ver, 2) İş akışını adım adım numaralandır, 3) Dikkat edilmesi gereken olası concurrency ve veri tabanı kısıtlarını belirt."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Eski projenin kodlarını sadece şirketten 5 yıl önce ayrılan efsanevi yazılımcı biliyordu' trajedisi. Kod tabanı RAG sistemlerinin kurumsal cehaleti nasıl yok ettiği ve yeni katılan yazılımcılara süper güçler verdiği üzerine harika bir sohbet.",
      "udemy_outline": [
        "00:00 - Kurumsal Cehalet: Milyonlarca Satır Kodda Kaybolmak",
        "04:10 - Kod Tabanı RAG Mimarisi: AST + Vektör Arama Nasıl Çalışır?",
        "08:45 - Şirket Verisini Sızdırmadan Yerel RAG Kurma Rehberi",
        "13:30 - Egzersiz: Takımınızın en karmaşık reposu için bir prototip RAG pipeline'ı tasarlayın"
      ]
    },
    {
      "id": 29,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 29: AI Ajanları ile Gece Boyu Hata Çözümü: Autonomous Bug-Fixing",
      "title_en": "Lesson 29: Autonomous Bug-Fixing Agents & Overnight Pull Request Creators",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Sen uyurken Sentry loglarını inceleyen, repro testini yazan, kodu düzelten ve sabah masana hazır PR bırakan otonom ajan iş akışları tasarlamak.",
      "summary_en": "Designing autonomous bug-hunting swarms: Agents that detect Sentry alerts, synthesize reproducing tests, generate the patch, and open a ready-to-review PR while you sleep.",
      "eli5_metaphor_tr": "Gece dükkanı kapatıp gittiğinde içeri giren akıllı tamir robotları gibidir. Kırık bir sandalye (bug) gördüklerinde önce sandalyenin neden kırıldığını test ederler, doğru vidayı bulup sıkarlar ve sabah geldiğinde masanın üzerine 'Vidaları sıktım, sağlamlığını test ettim, onaylıyorsanız kullanıma açıyorum' notunu bırakırlar.",
      "eli5_metaphor_en": "Autonomous elves in the workshop overnight: When they spot a broken chair (production bug), they stress-test why the leg snapped, machine a reinforced dowel, and leave a neat note on your morning desk: 'Repaired and load-tested. Sign off here to return to service.'",
      "comparison_table": [
        {
          "topic": "Hata Çözüm Süresi",
          "old_way": "Bug'ın Jira'ya düşmesi, sprint planlamasını beklemesi (ortalama 2 hafta).",
          "ai_way": "Otonom ajanın gece hatayı analiz edip sabah 08:00'de test edilmiş PR ile karşına çıkarması."
        },
        {
          "topic": "Repro Testi",
          "old_way": "Geliştiricinin hatayı lokalinde yeniden canlandırmak (reproduce) için saatlerce uğraşması.",
          "ai_way": "Ajanın prod hata logundan otomatik bir unit/integration testi üretmesi."
        },
        {
          "topic": "İnsan Rolü",
          "old_way": "Yazılımcının tüm gece log kazıyıp stres yaşaması.",
          "ai_way": "Yazılımcının sadece sabah kahvesini içerken açılan PR'ı ve test sonuçlarını onaylaması."
        }
      ],
      "framework_steps_tr": [
        "1. Hata Yakalama Tetikleyicisi (Sentry / Datadog Webhook): 500 hatası çıktığında stack trace ve istek gövdesi otomatik olarak AI ajanına iletilir.",
        "2. Repro-First İlkesi: Ajan kodu düzeltmeden ÖNCE hatayı ispatlayan bir unit test yazmak zorundadır (Test önce patlamalıdır).",
        "3. Güvenli Sandbox Alanı: Ajan izole bir Docker container içinde kodu düzeltir, tüm testleri çalıştırır ve güvenlik taramasından geçirir.",
        "4. Asla Otomatik Merge Etme: Otonom ajanlar asla doğrudan production'a basamaz; daima insan lead onayına PR olarak sunulur."
      ],
      "framework_steps_en": [
        "1. Observability Webhook Trigger: Production exceptions in Sentry/Datadog trigger a cloud webhook feeding the stack trace to an autonomous worker.",
        "2. The Repro-First Mandate: The agent is forbidden from touching code until it authors a failing unit test that faithfully reproduces the crash.",
        "3. Isolated Sandbox Execution: The agent spins up an ephemeral container, applies the surgical fix, and runs regression suites.",
        "4. Mandatory Human Gate: Autonomous agents must never merge to main directly; they submit pristine PRs for human approval."
      ],
      "case_study_tr": "Bir e-ticaret şirketinde kullanıcıların belirli UTF-8 karakterli adres girdiğinde siparişin patlaması bug'ı 3 haftadır çözülememişti. Lead Tayfun bir otonom bug-fix ajanı kurdu. Gece Sentry'den gelen hatayı yakalayan ajan, sorunun regex parsing hatası olduğunu tespit etti; patlayan bir test yazdı, regex'i düzeltti ve tüm testleri yeşile çevirip sabah 07:30'da PR açtı. Sabah işe gelen nöbetçi mühendis 5 dakikada inceleyip merge etti; kriz bitti.",
      "case_study_en": "An e-commerce team wrestled for 3 weeks with a recurring edge-case checkout crash triggered by unusual UTF-8 shipping characters. Lead Tayfun wired an autonomous bug-fixing agent to Sentry. Overnight, the agent isolated the regex crash, authored a reproducing unit test, sanitized the unicode parser, verified regression suites, and opened a PR at 07:30 AM. The on-call dev reviewed and merged it in 4 minutes.",
      "ai_prompts": [
        {
          "title": "Otonom Hata Çözücü ve Repro Testi Oluşturucu Promptu",
          "prompt": "Aşağıda production ortamında patlayan bir hatanın Sentry logu ve ilgili kaynak kod dosyası yer almaktadır: [LOG VE KOD]. Bir Autonomous Bug-Fix Agent olarak: 1) Hatayı %100 doğrulayan ve şu an patlayan bir 'Reproduction Test' yaz, 2) Koddaki kök nedeni en minimal ve yan etkisiz şekilde düzelt, 3) Düzeltmenin tüm edge-case'leri kapsadığını kanıtla, 4) GitHub PR için net bir 'Kök Neden ve Çözüm Özeti' hazırla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Sen uyurken çalışan robot yazılımcılar' hayali gerçek mi? Otonom bug-fixing ajanlarının sınırları, neden asla doğrudan deploy etmemeleri gerektiği ve sabah kahvesinde hazır PR onaylamanın keyfi üzerine büyüleyici bir diyalog.",
      "udemy_outline": [
        "00:00 - Gece Boyu Çalışan Ajanlar: Bilim Kurgu Değil, Gerçek!",
        "04:20 - Otonom Bug-Fix Hattının Mimarisi: Sentry -> Agent -> PR",
        "08:45 - Repro-First İlkesi: Hatayı İspatlamadan Düzeltemezsin",
        "13:30 - Egzersiz: Takımınız için webhook tabanlı bir AI PR oluşturucu tasarlayın"
      ]
    },
    {
      "id": 30,
      "module_id": 5,
      "module_title_tr": "Bölüm 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları",
      "module_title_en": "Module 5: Autonomous Pipelines, CI/CD & Agentic Dev",
      "title_tr": "Ders 30: Dokümantasyon Kabusunu Bitirmek: Kendi Kendini Güncelleyen Living Docs",
      "title_en": "Lesson 30: Living Documentation: Zero-Manual-Documentation Pipelines",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Yazıldıktan 2 hafta sonra eskiyen ve kimsenin güncellemediği ölü Confluence sayfalarına son: Kod değiştikçe kendi mimari diyagramlarını ve API spec'lerini güncelleyen sistemler.",
      "summary_en": "Killing the stale documentation graveyard: Architecting automated living docs where code updates continuously regenerate Mermaid diagrams and OpenAPI specs.",
      "eli5_metaphor_tr": "Bir şehrin haritasını kağıda çizip duvara asarsan 1 yıl sonra yeni yapılan yollar ve köprüler o haritada görünmez. Living Documentation ise canlı uydu görüntüsü gibidir; yola bir asfalt döküldüğü an harita kendi kendini anında günceller.",
      "eli5_metaphor_en": "Drawing a paper map of a boomtown: within a year, new bridges and highways render the paper map useless. Living documentation is an automated satellite link; the second a road is paved, the satellite map updates in real time.",
      "comparison_table": [
        {
          "topic": "Doküman Güncelliği",
          "old_way": "Confluence'taki mimari diyagramların 2021 yılından kalması ve yanlış yönlendirmesi.",
          "ai_way": "Her git commit ve PR merge anında otomatik güncellenen Mermaid.js diyagramları."
        },
        {
          "topic": "Yazma Sorumluluğu",
          "old_way": "Yazılımcıların doküman yazmaktan nefret etmesi ve sürekli ertelemesi.",
          "ai_way": "Koddan ve testlerden beslenen AI pipeline'ının dokümantasyonu otomatik derlemesi."
        },
        {
          "topic": "Erişilebilirlik",
          "old_way": "PDF ve dağınık Confluence klasörlerinde bilgi aramak.",
          "ai_way": "Repo içinde kodla yan yana yaşayan, interaktif ve doğrulanabilir markdown belgeleri."
        }
      ],
      "framework_steps_tr": [
        "1. Docs-as-Code Felsefesi: Dokümantasyon kodun dışında bir yerde yaşayamaz; `/docs` dizininde kodla aynı repoda tutulmalıdır.",
        "2. Mermaid.js ile Yaşayan Diyagramlar: Statik PNG resimleri yasakla; kod gibi versiyonlanan ve text tabanlı çizilen Mermaid diyagramları kullan.",
        "3. CI/CD Dokümantasyon Kapısı: Kodda bir API değiştiğinde OpenAPI/Swagger ve README güncellenmemişse PR merge edilemez.",
        "4. AI Doküman Bekçisi: PR kapandığında diff'i inceleyip mimari dokümantasyonu otomatik güncelleyen bir GitHub Action botu çalıştır."
      ],
      "framework_steps_en": [
        "1. Docs-as-Code Doctrine: Documentation must never live in isolated silos; it lives in the `/docs` folder alongside the code in Git.",
        "2. Declarative Mermaid.js Diagrams: Outlaw binary PNG exports; model architectures using version-controlled text diagrams.",
        "3. Automated CI Documentation Gates: Fail PR builds if controller signatures change without corresponding OpenAPI spec diffs.",
        "4. The AI Living Doc Worker: An automated pipeline triggered on merge that scans diffs and submits PR updates to architectural guides."
      ],
      "case_study_tr": "Büyük bir fintech firmasında yeni bir regülasyon denetimi geldi. Denetçiler sistem mimarisi dokümanını istedi; mevcut Confluence sayfası 3 yıl öncesine aitti ve şirkete 250.000 TL ceza kesilmek üzereydi. Lead Sevgi devreye girdi. 2 gün içinde bir LLM betiğiyle tüm Spring Boot servislerini taratarak canlı OpenAPI ve Mermaid mimari diyagramlarını koddan otomatik türeten bir pipeline kurdu. Denetçiler hayran kaldı; ceza iptal edildi.",
      "case_study_en": "During a banking audit, regulators requested up-to-date system architecture schematics. The company's Confluence pages were 3 years obsolete, putting them on the hook for heavy regulatory penalties. Lead Sevgi acted fast: engineered a pipeline that parsed Spring Boot controllers and Kafka topics into real-time Mermaid diagrams and OpenAPI specs. Regulators praised the automated rigor and dropped the sanctions.",
      "ai_prompts": [
        {
          "title": "Kod Tabanından Otomatik Mermaid Mimari Diyagramı ve Living Doc Üretici",
          "prompt": "Aşağıdaki kod dosyaları ve servisler arasındaki bağımlılıkları incele: [KOD DOSYALARI / DTO'LAR]. 1) Bu servislerin veri akışını gösteren temiz bir Mermaid.js sequence / flowchart diyagramı üret, 2) Bu modülün amacını, girdilerini ve çıktılarını anlatan 1 sayfalık kusursuz bir README markdown dokümanı hazırla, 3) Geliştiricilerin dikkat etmesi gereken 3 kritik kullanım kuralını listele."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Doküman yazmaktan nefret eden yazılımcılar' ve 'Eski dokümana bakıp 3 gününü çöpe atan yeni yazılımcı'. Docs-as-Code kültürü ve yapay zekanın dokümantasyon kabusunu nasıl ebediyen bitirdiği üzerine ilham dolu bir podcast.",
      "udemy_outline": [
        "00:00 - Confluence Mezarlığı: Dokümanlar Neden 2 Haftada Ölür?",
        "04:10 - Docs-as-Code ve Mermaid.js ile Yaşayan Mimari",
        "08:35 - CI/CD Hattına Otomatik Dokümantasyon Botu Bağlamak",
        "13:20 - Egzersiz: Takımınızın en kritik servisi için otomatik güncellenen bir Mermaid diyagramı üretin"
      ]
    },
    {
      "id": 31,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 31: LeetCode Öldü mü?: AI Çağında Yazılımcı Mülakatı Nasıl Yapılır?",
      "title_en": "Lesson 31: Revamping Technical Interviews: Evaluating AI Fluency & System Sense",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Adayın ikili arama ağacını (binary tree) ters çevirmesini istemek artık anlamsız; çünkü AI bunu 2 saniyede yapıyor. Adayın sistem muhakemesini, mimari vizyonunu ve AI ile çalışma yeteneğini ölçme.",
      "summary_en": "Inverting a binary tree on a whiteboard is irrelevant when an LLM writes it in 2 seconds. Rebuilding interviews to assess system trade-offs, code auditing, and AI fluency.",
      "eli5_metaphor_tr": "Bir pilot işe alırken ona uçak kanadının kaç kilo demirden yapıldığını ezberden sormazsın; onu uçuş simülatörüne oturtur, fırtına çıkarır ve uçağı nasıl yönlendirdiğine bakarsın. LeetCode ezber sorusudur; modern mülakat ise adayı fırtınalı sistem simülatörüne oturtmaktır.",
      "eli5_metaphor_en": "When hiring an airline pilot, you don't make them calculate wing aerodynamics with a slide rule on a whiteboard. You strap them into a flight simulator, kill an engine in a thunderstorm, and watch their decision-making. LeetCode is trivia; modern interviews are full-system flight simulations.",
      "comparison_table": [
        {
          "topic": "Mülakat Sorusu",
          "old_way": "LeetCode Medium/Hard algoritmalarını tahtada ezbere yazdırmak.",
          "ai_way": "Gerçek bir prod bug'ını veya mimari açığı verip adayın AI ile bunu nasıl çözdüğünü izlemek."
        },
        {
          "topic": "AI Araç Kullanımı",
          "old_way": "'Google ve ChatGPT kullanmak yasaktır' deyip adayı körleştirmek.",
          "ai_way": "'Cursor veya Claude kullanmak serbesttir; çözümü nasıl yönettiğinizi görelim' demek."
        },
        {
          "topic": "Ölçülen Beceriler",
          "old_way": "Sentaks ezberi ve anlık stres yönetimi.",
          "ai_way": "Mimari muhakeme, kod okuma ve AI halüsinasyonlarını yakalama yeteneği."
        }
      ],
      "framework_steps_tr": [
        "1. AI'ı Yasaklama, Tam Tersine Zorunlu Kıl: Adaya: 'Bu mülakatta istediğin AI aracını kullanabilirsin, ancak yazdığın her satırın hesabını soracağım' de.",
        "2. Hata Bulma ve Code Review Mülakatı: Adayın önüne kasıtlı olarak mantık hataları ve halüsinasyonlar içeren AI üretimi bir kod koy; hataları bulmasını iste.",
        "3. Sistem Tasarımı ve Trade-off Odaklılık: 'Bu mimaride Redis çökerse ne olur? p99 gecikmesini nasıl düşürürsün?' gibi derin sorular sor.",
        "4. İletişim ve Empati Değerlendirmesi: Teknik olarak ne kadar zeki olursa olsun; dinlemeyi bilmeyen, egosu tavan yapmış kişileri (brilliant jerks) doğrudan ele."
      ],
      "framework_steps_en": [
        "1. Mandate AI Tooling: Tell the candidate: 'Use Claude, Cursor, or ChatGPT freely; our job is to evaluate your editorial judgment and speed.'",
        "2. The Code-Auditing Challenge: Hand the candidate an AI-generated PR laced with subtle race conditions and memory leaks; evaluate their detection skills.",
        "3. Real-World Architecture Gauntlets: Drill into failure modes: 'What happens when Redis evicts under load? How do we preserve idempotency?'",
        "4. Reject Brilliant Jerks: Technical genius never compensates for arrogance. Screen relentlessly for active listening and collaborative humility."
      ],
      "case_study_tr": "Bir fintech firması LeetCode Hard soruları sorarak 3 yazılımcı aldı. Yazılımcılar şirkete gelince hiçbir iş teslim edemedi çünkü şirket mimarisi karmaşık mikroservislerden oluşuyordu ve gerçek hayat kod okuma gerektiriyordu. Lead Kemal mülakat sürecini değiştirdi: Adaylara 'Bozuk bir faturalama servisi PR'ı' verip AI kullanarak 45 dakikada düzeltmelerini istedi. Yeni sistemle alınan yazılımcıların verimliliği 3 kat yüksek çıktı.",
      "case_study_en": "A payments startup hired 3 engineers who crushed LeetCode Hard puzzles. On the job, they froze: real production microservices required reading sprawling codebases and evaluating distributed failure modes. Lead Kemal redesigned the interview: handed candidates a broken billing PR and said: 'Use any AI tool to diagnose and repair this in 45 minutes.' Candidates hired via this method proved 3x more productive.",
      "ai_prompts": [
        {
          "title": "AI Çağı İçin Gerçekçi Yazılımcı Mülakat Senaryosu ve Puanlama Rubriği",
          "prompt": "Kıdemli bir Backend Mühendisi (Go / Java) işe alacağız. LeetCode ezberi içermeyen, adayın AI araçlarıyla birlikte çalışma, mimari kısıtları anlama ve kod denetleme becerisini ölçecek 45 dakikalık bir 'Canlı Mülakat Vaka Çalışması' ve 5 kriterli objektif bir değerlendirme rubriği (Puanlama ölçeği) hazırla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'LeetCode'un çöküşü' üzerine iki kıdemli mühendisin kahkahalarla dolu sohbeti. Tahtaya algoritma yazdıran eski kafalı şirketlerin neden en kötü mühendisleri işe aldığı ve modern mülakatın nasıl olması gerektiği.",
      "udemy_outline": [
        "00:00 - LeetCode'un Sonu: Algoritma Ezberi Neden İflas Etti?",
        "04:20 - AI Serbest Mülakat Tasarımı: Adayın Muhakemesini Ölçmek",
        "08:45 - Kod Denetimi (Auditing) Mülakatı Nasıl Yapılır?",
        "13:30 - Egzersiz: Takımınız için 1 adet gerçek hayat mülakat senaryosu ve rubriği hazırlayın"
      ]
    },
    {
      "id": 32,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 32: Take-Home Task ve Canlı Kodlama: Adayın AI ile Birlikte Çalışma Yeteneğini Ölçmek",
      "title_en": "Lesson 32: Designing AI-Resilient Hiring Challenges & Pair-Prompting",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Adayın 5 dakikada ChatGPT'ye yaptırıp gönderdiği sahte ev ödevlerine son: Timeboxed, interaktif ve adayın prompting zekasını ölçen canlı eşleşme (pair-programming).",
      "summary_en": "Eliminating fraudulent take-home assignments where candidates copy-paste ChatGPT: Interactive timeboxed challenges and live pair-prompting sessions.",
      "eli5_metaphor_tr": "Bir şefe ev ödevi olarak 'Evde kek yap getir' dersen, gidip pastaneden en pahalı keki alıp kutusunu değiştirerek sana getirebilir. Ama şefi mutfağa sokup 'Önünde un, şeker ve akıllı fırın var; hadi birlikte 30 dakikada sufle yapalım' dersen ustanın gerçek hünerini gözlerinle görürsün.",
      "eli5_metaphor_en": "Giving a pastry chef a homework assignment: 'Bake a cake at home' means they can buy a cake at a gourmet bakery and claim they made it. Inviting them into your kitchen for 30 minutes to make a souffle using the smart oven reveals their true mastery instantly.",
      "comparison_table": [
        {
          "topic": "Take-Home Formatı",
          "old_way": "Adaya 3 günlük devasa ödev verip bedava amelelik yaptırmak.",
          "ai_way": "Maksimum 2 saatlik, sınırları net ve AI kullanımının serbest olduğu odaklı bir problem."
        },
        {
          "topic": "Değerlendirme",
          "old_way": "Kodun çalışıp çalışmadığına bakmak.",
          "ai_way": "Adayın git commit geçmişine, AI ile konuşma loglarına ve aldığı mimari kararlara bakmak."
        },
        {
          "topic": "Canlı Eşleşme",
          "old_way": "Adayı kamerada tek başına terletip sessizce izlemek.",
          "ai_way": "Birlikte bir AI ajanını yönlendirerek (Pair-Prompting) problem çözmek."
        }
      ],
      "framework_steps_tr": [
        "1. 2 Saatlik Tavan Kuralı: Asla adayın hafta sonunu çalan 20 saatlik ev ödevleri verme; 2 saati aşan her ödev yetenekli adayları kaçırır.",
        "2. Prompt Günlüğü İste: 'AI kullandıysan hangi promptları verdin ve çıkan kodda neyi düzelttin?' sorusunu ödev teslimine eklet.",
        "3. Canlı Kodlamada Pair-Prompting: Mülakatta adayla birlikte bir feature yazın; adayın AI'a verdiği bağlamı ve geri bildirim döngüsünü gözlemle.",
        "4. Savunma Oturumu (15 Dakika): Adaya: 'Bu kodu neden böyle böldün? AI sana başka ne önerdi ve sen neden reddettin?' sorusunu sor."
      ],
      "framework_steps_en": [
        "1. The 2-Hour Ceiling: Never assign grueling 20-hour weekend take-home projects; top-tier senior engineers will simply decline your process.",
        "2. The Prompt Changelog: Require candidates to submit their prompt history: evaluate how they steered the model when it hallucinated.",
        "3. Live Pair-Prompting: Sit together and drive an AI assistant collaboratively; observe how the candidate crafts context and verifies outputs.",
        "4. The 15-Minute Architecture Defense: Ask: 'Why did you reject the LLM's first suggestion? What were the hidden performance trade-offs?'"
      ],
      "case_study_tr": "Bir yapay zeka şirketi adaylara 3 günlük take-home task veriyordu. Gelen 20 ödevin 18'i neredeyse birbirinin kopyası Claude kodlarıydı ve kimin iyi olduğunu anlamak imkansızdı. Lead Onur sistemi değiştirdi: 1 saatlik canlı 'Pair-Prompting' seansı başlattı. Adayla birlikte Cursor üzerinden gerçek bir WebSocket entegrasyonu yaptılar. Onur, adayın prompt yeteneğini, test refleksini ve soğukkanlılığını 40 dakikada anladı; işe alım kalitesi %200 arttı.",
      "case_study_en": "An AI scaleup used a 3-day take-home test. 18 of 20 submissions were identical, boilerplate Claude outputs; separating elite talent from posers was impossible. Lead Onur replaced it with a 1-hour live Pair-Prompting session on Zoom. Together, they tackled an active WebSocket edge-case in Cursor. Observing how candidates steered context, challenged buggy LLM suggestions, and verified edge-cases made hiring accuracy skyrocket.",
      "ai_prompts": [
        {
          "title": "2 Saatlik AI Uyumlu Mülakat Görevi ve Değerlendirme Soruları",
          "prompt": "Bir Senior Fullstack (React + Node.js / Go) pozisyonu için 2 saati aşmayacak, adayın hem kodlama hem de AI kullanım zekasını ölçecek bir 'Mini Take-Home Task' hazırla. Şunları içersin: 1) Görev tanımı ve başlangıç şablonu, 2) Adaydan istenecek 'Prompt Günlüğü' formatı, 3) Canlı görüşmede sorulacak 3 derin mimari savunma sorusu."
        }
      ],
      "notebooklm_prompts": "İki sunucu: Adayların ChatGPT'ye yaptırdığı ödevlerle şirketleri kandırması trajedisi ve 'Pair-Prompting' mülakatlarının bu tiyatroyu nasıl bitirdiği. Gerçek mühendislik zekasını mülakatta anlamanın püf noktaları.",
      "udemy_outline": [
        "00:00 - Take-Home Ödevlerinin İflası ve Yeni Dönem",
        "04:15 - 2 Saat Kuralı: Saygılı ve Etkili Görev Tasarımı",
        "08:35 - Pair-Prompting Nedir? Canlı Mülakatta AI Kullanımı",
        "13:20 - Egzersiz: Takımınız için 1 adet Pair-Prompting mülakat kartı tasarlayın"
      ]
    },
    {
      "id": 33,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 33: 1 Günde İlk PR: AI Destekli Roket Hızında Onboarding Süreci",
      "title_en": "Lesson 33: The 24-Hour First PR: High-Velocity AI-Assisted Onboarding",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Yeni başlayan bir yazılımcının lokal ortam kurmak için 2 hafta debelenmesi skandalına son: DevContainer'lar, AI onboarding asistanı ve ilk 24 saatte merge edilen ilk PR.",
      "summary_en": "Ending the disgrace of spending 2 weeks installing dependencies: DevContainers, AI buddy bots, and celebrating their first merged PR within 24 hours.",
      "eli5_metaphor_tr": "Yeni kiraladığın eve taşındığında evin elektriği, suyu, interneti açık olmalıdır; anahtarı çevirip içeri girersin. Eğer ev sahibi sana 'Git sokaktan su borusu döşe, elektrik trafosuna kablo çek' derse oradan kaçarsın. Harika bir onboarding, mühendisin ilk gün tek tıkla kodlamaya başlayabilmesidir.",
      "eli5_metaphor_en": "Moving into a newly rented apartment should mean turning the key with electricity, water, and fiber internet already humming. If the landlord hands you a shovel saying 'dig your own sewage trench,' you walk away. World-class onboarding gives new hires a running environment in one click.",
      "comparison_table": [
        {
          "topic": "Ortam Kurulumu",
          "old_way": "40 sayfalık eski wiki sayfasına bakıp 3 gün boyunca eksik kütüphane aramak.",
          "ai_way": "DevContainers / Codespaces ile tek tıkla 2 dakikada ayağa kalkan Docker ortamı."
        },
        {
          "topic": "İlk Teslimat",
          "old_way": "Yeni yazılımcının ilk ay sadece izlemesi, koda dokunmaya korkması.",
          "ai_way": "İlk 24 saat içinde ufak bir düzeltme veya test ile ilk PR'ını açıp kutlamak."
        },
        {
          "topic": "Soru Sorma",
          "old_way": "Kıdemlileri rahatsız etmekten korkup saatlerce ekrana boş bakmak.",
          "ai_way": "Şirket içi AI Onboarding Botu'na sınırsızca ve çekinmeden soru sormak."
        }
      ],
      "framework_steps_tr": [
        "1. 24 Saat / İlk PR Kuralı: Yeni mühendisin ilk gün mesai bitmeden küçük de olsa bir PR'ı prod/staging hattına merge edilmelidir (Psikolojik zafer).",
        "2. Tek Tıkla Ortam (DevContainers): 'Benim makinemde çalışıyordu' bahanesini yok et; tüm bağımlılıkları tek bir konfigürasyonda otomatikleştir.",
        "3. AI Onboarding Buddy: Yeni çalışana projenin mimarisini, git akışını ve terminolojisini anlatan özel sistem promptlu bir LLM asistanı ver.",
        "4. 30 Günlük Yol Haritası: Gün gün ne yapacağını belirten net bir 'Onboarding Checklist' hazırla."
      ],
      "framework_steps_en": [
        "1. The 24-Hour First PR Rule: Every new engineer merges an atomic PR (bug fix, test, doc improvement) before their first sunset—a massive psychological win.",
        "2. One-Click DevContainers: Eliminate 'works on my machine' syndrome; package SDKs, database seeds, and tooling into DevContainers or cloud workspaces.",
        "3. The AI Onboarding Buddy: Provide an internal assistant pre-loaded with team glossary, deployment scripts, and architecture FAQs.",
        "4. The Structured 30-Day Checklist: Provide a self-serve, measurable onboarding dashboard with daily checkpoints."
      ],
      "case_study_tr": "Bir ödeme kuruluşunda yeni işe başlayan mühendisler ortalama 18 günde ilk commit'ini atabiliyordu çünkü veritabanı izinleri ve lokal ortam kabustu. Yeni lead Gamze bir devrim yaptı: Projeyi DevContainer'a taşıdı ve 'İlk Gün Görevi' olarak bir test biletini hazırladı. Yeni katılan junior mühendis Mert, sabah 09:00'da işe başladı, 11:00'de ortamı kuruldu, 15:30'da ilk PR'ını açtı ve 17:00'de canlıya çıktı. Takımın morali ve şirketin onboarding skoru rekor kırdı.",
      "case_study_en": "At a fintech firm, new hires lingered 18 days before shipping their first commit due to fragmented database permissions and broken setup scripts. Lead Gamze stepped in: packaged the entire stack into a Docker DevContainer and crafted a Day-One starter card. New joiner Mert clocked in at 09:00 AM, had a working stack by 11:00, opened his first PR at 15:30, and merged to staging by 17:00. Onboarding velocity broke all company records.",
      "ai_prompts": [
        {
          "title": "Yeni Katılan Mühendis İçin 24 Saatte İlk PR Onboarding Kılavuzu",
          "prompt": "Biz şu teknolojileri kullanan bir ekibiz: [DİL, FRAMEWORK, VERİTABANI]. Ekibimize yeni katılacak bir mühendisin ilk 24 saatte ilk PR'ını açmasını sağlayacak kusursuz bir 'Onboarding Yol Haritası ve İlk Gün Rehberi' hazırla. Şunları içersin: 1) DevContainer kurulum adımları, 2) İlk gün seçilebilecek 3 örnek risksiz görev tipi, 3) Takım içi AI onboarding asistanına sorabileceği 5 kritik başlangıç sorusu."
        }
      ],
      "notebooklm_prompts": "İki sunucu: İlk iş gününde 'Şu 40 sayfalık Confluence dokümanını oku' denilerek köşeye atılan yazılımcı travması ve ilk 24 saatte ilk PR'ını merge ettiren modern liderlik anlayışı üzerine ilham verici bir bölüm.",
      "udemy_outline": [
        "00:00 - Onboarding Felaketi: Yeni Başlayanlar Neden İlk Ayda Soğur?",
        "04:15 - DevContainers ile Tek Tıkla Ortam Kurulumu",
        "08:35 - 24 Saatte İlk PR Kuralının Psikolojik Gücü",
        "13:20 - Egzersiz: Takımınız için 1 günlük 'First PR' onboarding kiti hazırlayın"
      ]
    },
    {
      "id": 34,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 34: Kariyer Merdiveni ve Rol Tanımları: Junior, Mid, Senior, AI-Specialist Lead",
      "title_en": "Lesson 34: Modern Engineering Career Ladders in the LLM Era",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Eski 'yıl bazlı' kıdem tanımları çöktü: Bir mühendisin kıdemi artık kaç yıl kod yazdığıyla değil; ne kadar karmaşık sistemleri orkestre ettiği ve AI ile yarattığı kaldıraçla ölçülür.",
      "summary_en": "Tenure-based seniority is extinct. Rebuilding engineering career ladders based on system impact, architectural judgment, and AI leverage multipliers.",
      "eli5_metaphor_tr": "Bir marangozun kıdemini atölyede kaç yıl oturduğuna bakarak ölçmezsin. Çırak tek bir sandalyenin bacağını zımparalar (Junior). Kalfa tüm masayı kendi başına yapar (Mid). Usta tüm evin mobilyalarını tasarlar ve çıraklara yol gösterir (Senior). Baş usta ise fabrikanın robotik hatlarını kurar ve üretimi 10 katına çıkarır (Staff / AI Lead).",
      "eli5_metaphor_en": "You don't evaluate a master carpenter by how many years they sat on a stool. An apprentice sands a chair leg (Junior). A journeyman builds the dining table autonomously (Mid). A master craftsman designs entire interior architecture and mentors the shop (Senior). The principal engineer designs the automated timber mill (Staff/AI Lead).",
      "comparison_table": [
        {
          "topic": "Kıdem Tanımı",
          "old_way": "'5 yıl tecrübesi olan otomatik olarak Senior olur.'",
          "ai_way": "Yıl önemsizdir; problem çözme kapsamı (Scope of Impact) ve otonomluk belirler."
        },
        {
          "topic": "Junior Rolü",
          "old_way": "Basit HTML/CSS ve CRUD işleri yazan amele.",
          "ai_way": "AI eşlikçileriyle tam kapsamlı modül geliştiren, öğrenme hızı yüksek mühendis."
        },
        {
          "topic": "Senior / Staff Rolü",
          "old_way": "En zor fonksiyonları tek başına karanlık odada yazan kişi.",
          "ai_way": "Mimari sınırları çizen, AI ajanlarını takıma entegre eden ve iş birimleriyle strateji kuran lider."
        }
      ],
      "framework_steps_tr": [
        "1. Yıl Bazlı Değil Kapsam Bazlı (Scope-Based): Junior (Kendi taskını yapar), Mid (Bağımsız bir özelliği bitirir), Senior (Takımın mimarisini ve kalitesini yönetir), Staff (Şirket çapında etki yaratır).",
        "2. AI Kaldıraç Çarpanı (AI Leverage): Her seviyedeki mühendisin AI araçlarını ne kadar ustaca kullandığı kariyer ilerleme kriteri haline getirilmelidir.",
        "3. Şeffaf Kariyer Matrisi: Kimin ne zaman terfi edeceğini sübjektif hislerle değil; açık, net ve ölçülebilir bir rubrikle belirle.",
        "4. İkili Kariyer Yolu (Dual-Track): Herkes yönetici olmak zorunda değildir; teknik derinlikte kalmak isteyenler için Staff/Principal Engineer yolunu açık tut."
      ],
      "framework_steps_en": [
        "1. Scope of Impact Over Years on Seat: Junior (Executes defined tasks), Mid (Owns end-to-end features), Senior (Multiplies squad architecture), Staff (Transforms org-wide systems).",
        "2. AI Leverage as Core Competency: Evaluate how effectively engineers amplify their velocity, testing thoroughness, and context synthesis via modern AI tools.",
        "3. Transparent Engineering Rubrics: Eliminate subjective promotion favoritism with published behavioral criteria and tangible evidence portfolios.",
        "4. Enforce the Dual-Track Ladder: Great individual contributors shouldn't be forced into people management; protect the Staff+ Technical Track."
      ],
      "case_study_tr": "Bir şirkette 2 yıldır çalışan hevesli bir yazılımcı, AI araçlarını ustalıkla kullanarak 8 yıllık eski kafalı bir kıdemliden daha fazla ve kaliteli mimari iş üretiyordu ama şirket politikası '5 yıl dolmadan Senior olamazsın' diyordu. Genç yetenek istifa etmek üzereydi. Lead Tolga yönetimle savaştı; kariyer merdivenini 'Yıl değil Etki ve Kaldıraç' esasına göre yeniden yazdı. Genç mühendis hak ettiği terfiyi aldı, şirket içi inovasyon patlaması yaşandı.",
      "case_study_en": "A 2-year junior engineer mastered LLM workflows and architected higher-throughput distributed modules than an 8-year legacy senior who refused modern tools. Company policy blocked promotions: 'Minimum 5 years for Senior title.' The junior was fielding external offers. Lead Tolga rewrote the company's career ladder around measurable system scope and AI leverage. The junior was promoted; high-performing talent retention soared.",
      "ai_prompts": [
        {
          "title": "Modern Yazılım Mühendisliği Kariyer Merdiveni ve Rubrik Tasarımcısı",
          "prompt": "Yazılım şirketimiz için modern, AI çağının dinamiklerine uygun 4 seviyeli bir 'Mühendislik Kariyer Merdiveni' (Junior, Mid, Senior, Staff/Lead) hazırla. Her seviye için şu 4 boyutta somut, ölçülebilir beklentileri tanımla: 1) Teknik Etki ve Mimari, 2) AI Araçları Kullanımı ve Kaldıraç, 3) İletişim ve Takım Liderliği, 4) Teslimat Güvenilirliği."
        }
      ],
      "notebooklm_prompts": "İki sunucu: '5 yıl çalıştı diye Senior olan ama iki satır mimari kararı savunamayan' yazılımcılar ve yeni dünyada tecrübenin nasıl yeniden tanımlandığı üzerine çarpıcı bir kariyer analizi.",
      "udemy_outline": [
        "00:00 - Yıl Bazlı Kıdemin İflası: Senior Kime Denir?",
        "04:20 - Kapsam (Scope) Modeli: Junior'dan Staff Engineer'a 4 Aşama",
        "08:35 - AI Kaldıraç Çarpanı: Küçük Ekiplerle Büyük İşler Başarmak",
        "13:20 - Egzersiz: Takımınız için 1 sayfalık objektif terfi değerlendirme rubriği oluşturun"
      ]
    },
    {
      "id": 35,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 35: Takım Yetenek Matrisi ve Gap Analizi: Takımın Geleceğini Tasarlamak",
      "title_en": "Lesson 35: Skills Matrix & Upskilling Team Members into AI-Native Engineers",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Takımınızda kim neyi biliyor, hangi kritik teknolojide tek bir kişiye bağımlısınız (Bus Factor)? Yetenek matrisi çıkarmak ve ekibi AI ile eğitmek.",
      "summary_en": "Eliminating fatal single-points-of-failure (Bus Factor): Mapping team competencies via skills matrices and executing tailored AI upskilling sprints.",
      "eli5_metaphor_tr": "Takımında sadece bir kişi arabanın motorunu tamir etmeyi biliyorsa ve o kişiye piyango çıkıp tatile giderse yolda kalırsınız. Akıllı lider, her kritik parçayı en az iki kişinin bilmesini sağlar; motoru tamir eden ustanın yanına diğerlerini çırak verir ve yapay zeka simülatörüyle herkesi makinist yapar.",
      "eli5_metaphor_en": "If only one person on a flight crew knows how to deploy the landing gear and they pass out from food poisoning, you crash. High-reliability engineering teams map their Bus Factor: ensure every critical domain has secondary coverage backed by AI flight simulators.",
      "comparison_table": [
        {
          "topic": "Yetenek Tespiti",
          "old_way": "Kimin ne bildiğini bilmemek, kriz anında şans eseri öğrenmek.",
          "ai_way": "Her çeyrek güncellenen görsel Yetenek Matrisi (Skills Matrix) tutmak."
        },
        {
          "topic": "Bus Factor Riski",
          "old_way": "Ödeme sistemini sadece Ahmet'in bilmesi ve Ahmet'in üzerinde aşırı baskı olması.",
          "ai_way": "Bilgiyi Ahmet'ten çıkarıp AI destekli dokümana dökmek ve yanına bir yedek mühendis eğitmek."
        },
        {
          "topic": "Eğitim Stratejisi",
          "old_way": "Yılda bir kez kimsenin izlemediği sıkıcı video kursları satın almak.",
          "ai_way": "Takımın gerçek kod tabanı üzerinde haftalık 1 saatlik hands-on AI pratikleri yapmak."
        }
      ],
      "framework_steps_tr": [
        "1. Bus Factor Analizi: 'Eğer X kişisine yarın araba çarparsa veya tatile giderse hangi servisimiz çöker?' sorusunu sor ve kırmızı alarm ver.",
        "2. Becerileri 3 Seviyede Haritala: 1 (Temel / Yardım alarak yapar), 2 (Bağımsız yapar), 3 (Başkasına öğretir ve mimarisini kurar).",
        "3. Çapraz Eğitim (Cross-Training): Frontend mühendisine backend, backend mühendisine CI/CD pratikleri yaptırarak T-Shaped (geniş vizyonlu) mühendisler yetiştir.",
        "4. AI Destekli Kişisel Gelişim Planı: Her mühendise kendi eksiklerine özel kişiselleştirilmiş 3 aylık öğrenme rotası çiz."
      ],
      "framework_steps_en": [
        "1. The Bus Factor Audit: Ask: 'If developer X is struck by lightning tomorrow, which critical subsystem grinds to an absolute halt?'",
        "2. 3-Tier Competency Mapping: Level 1 (Needs pairing), Level 2 (Autonomous owner), Level 3 (System architect and team mentor).",
        "3. Cultivate T-Shaped Engineers: Pair backend devs with cloud infra and frontend devs with API contracts to build resilient generalists.",
        "4. Hyper-Personalized AI Upskilling: Generate quarterly learning curriculums tailored to each engineer's specific gap profile."
      ],
      "case_study_tr": "Bir fintech şirketinde Kubernetes altyapısını sadece tek bir DevOps mühendisi biliyordu. O mühendis aniden başka bir şirkete geçtiği gün production kilitlendi ve 2 gün boyunca kimse müdahale edemedi. Şirket milyonlarca lira kaybetti. Yeni lead Hakan göreve gelince ilk iş olarak Yetenek Matrisi çıkardı. Takımdaki her backend mühendisine Kubernetes ve Terraform görevleri verdi; LLM destekli simülasyon ortamlarında eğitim aldırdı. Bus Factor 1'den 4'e çıktı.",
      "case_study_en": "At a fintech platform, only one engineer understood their bare-metal Kubernetes deployment. The day he resigned to join a competitor, a cluster outage struck; the team sat paralyzed for 48 hours, hemorrhaging hundreds of thousands in transactions. Incoming lead Hakan conducted an emergency Skills Matrix audit: mandated that every backend engineer rotate through infrastructure tickets guided by AI runbooks. Bus factor jumped from 1 to 4.",
      "ai_prompts": [
        {
          "title": "Takım Yetenek Matrisi ve Gap Analiz Raporlayıcı",
          "prompt": "7 kişilik bir yazılım takımı lideriyim. Takımımın mevcut teknik yetenek seviyeleri şunlardır: [EKİP VE BİLGİ DÜZEYLERİ]. Yaklaşan hedeflerimiz ise şunlar: [KUBERNETES, KAFKA, AI AGENT GELİŞTİRME]. Bana: 1) Takımın en büyük 2 kritik yetenek açığını (Gap) gösteren matris analizi çıkar, 2) Bus Factor risklerini işaretle, 3) 60 günlük somut bir çapraz eğitim (cross-training) planı öner."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Tüm projeyi tek bir adam biliyordu, o da askere gitti' faciası. Takımlarda bilgi tekelleşmesini kırmanın yolları ve yapay zeka ile her mühendisi nasıl çok yönlü bir süper kahramana dönüştürebileceğimiz üzerine harika bir sohbet.",
      "udemy_outline": [
        "00:00 - Bus Factor Tehlikesi: Şirketinizi Tek Kişiye Bağımlı Kılmayın",
        "04:20 - Takım Yetenek Matrisi (Skills Matrix) Nasıl Çıkarılır?",
        "08:35 - T-Shaped Mühendis Yetiştirme: Backend'ciye DevOps Öğretmek",
        "13:20 - Egzersiz: Kendi takımınızın 1 sayfalık Yetenek Matrisini oluşturun"
      ]
    },
    {
      "id": 36,
      "module_id": 6,
      "module_title_tr": "Bölüm 6: İşe Alım, Onboarding ve Yetenek Yönetimi",
      "module_title_en": "Module 6: AI-Era Hiring, Onboarding & Talent Strategy",
      "title_tr": "Ders 36: Kültürel Uyum ve Çeşitlilik: Toksik Yıldızları ve Sessiz Ayrılanları Yönetmek",
      "title_en": "Lesson 36: Culture, Retention & Dealing with Brilliant Jerks",
      "level": "İleri / Advanced Lead",
      "summary_tr": "Çok iyi kod yazan ama herkesin hayatını zindan eden 'Toksik Yıldız' (Brilliant Jerk) ve ruhen şirketten kopmuş 'Sessiz Ayrılan' (Quiet Quitter) mühendisleri yönetme sanatı.",
      "summary_en": "Protecting squad psychology from toxic high-performers: Coaching or expelling brilliant jerks and re-igniting checked-out quiet quitters.",
      "eli5_metaphor_tr": "Bir sepetteki en lezzetli elma eğer çürük kokuyorsa ve yanındaki diğer 10 elmayı da çürütüyorsa; o elmanın ne kadar lezzetli olduğunun hiçbir önemi yoktur. O elmayı sepetten çıkarmazsan tüm sepet çöpe gider. Kültür, en yetenekli kişinin bile takıma saygısızlık yapamayacağı sınırdır.",
      "eli5_metaphor_en": "If the sweetest apple in the barrel radiates mold that rots every neighboring fruit, its sweetness is completely irrelevant. If you don't remove that apple, you lose the entire barrel. Culture is the non-negotiable boundary ensuring no lone genius poisons team psychological safety.",
      "comparison_table": [
        {
          "topic": "Toksik Yıldız Tavrı",
          "old_way": "'Çok iyi kod yazıyor, idare edelim' deyip diğer 5 kişinin istifasını izlemek.",
          "ai_way": "Net davranış sınırları koymak; düzelmezse ne kadar iyi kod yazarsa yazsın takımdan göndermek."
        },
        {
          "topic": "Sessiz Ayrılık (Quiet Quitting)",
          "old_way": "Tembel deyip etiketlemek ve arkasından dedikodu yapmak.",
          "ai_way": "Derindeki kırgınlığı veya ilgisizliği 1-on-1 ile anlamak, yeni bir meydan okuma ile enerjisini canlandırmak."
        },
        {
          "topic": "Kültür Koruması",
          "old_way": "Kültürü şirket duvarına asılan süslü afişlerden ibaret sanmak.",
          "ai_way": "Kültürü 'Hangi davranışları tolere ettiğin ve kimi ödüllendirdiğin' ile inşa etmek."
        }
      ],
      "framework_steps_tr": [
        "1. Sıfır Toksik Toleransı: Hiçbir kod performansı, bir takım arkadaşını aşağılamayı, PR'larda alay etmeyi veya bilgi saklamayı haklı gösteremez.",
        "2. Davranış Sözleşmesi: Toksik yıldıza teknik değil davranışsal KPI koy: 'Takıma ne kadar mentörlük ettin, PR yorumlarında ne kadar yapıcıydın?'",
        "3. Sessiz Ayrılanı Yeniden Ateşle: Sessiz ayrılan mühendis genelde fikirleri dinlenmediği için küsmüştür; ona otonomi ve sahipleneceği bir AI inovasyon projesi ver.",
        "4. Hızlı Karar Al: Çürük elma düzelmiyorsa vedalaşmakta 1 gün bile gecikme; gidişinin ertesi günü takımın nasıl rahatladığını ve verimin nasıl arttığını göreceksin."
      ],
      "framework_steps_en": [
        "1. Zero Tolerance for Toxicity: No degree of architectural brilliance justifies humiliating peers, gatekeeping knowledge, or caustic PR reviews.",
        "2. Behavioral Scorecards: Evaluate senior engineers on psychological safety multipliers: 'How effectively do you elevate associate engineers?'",
        "3. Re-Ignite Disengaged Talent: Quiet quitting is often a symptom of feeling unheard; offer true autonomy and a greenfield AI project to reignite their fire.",
        "4. Cut Ties Decisively: If a toxic engineer refuses to reform, fire them without hesitation. The collective relief and output explosion the following week will validate your move."
      ],
      "case_study_tr": "Bir yapay zeka start-up'ında baş mimar, herkesin kodunu aşağılıyor, toplantılarda insanları susturuyordu ama şirketin en kritik modelini o yazmıştı. 6 ayda 4 yetenekli mühendis onun yüzünden istifa etti. Yeni gelen lead Selim, mimarla yüzleşti; açık davranış kuralları koydu. Mimar 'Bensiz bu şirket batar' diyerek tehdit etti. Selim mimarın görevine son verdi; mimarın tekeline aldığı kodu AI yardımıyla takımla birlikte 1 haftada belgeledi. Takım moral kazandı ve sonraki çeyrek şirket tarihinin en yüksek ürün hızına ulaştı.",
      "case_study_en": "At an AI startup, the lead architect bullied peers and mocked PRs, boasting: 'This firm dies without me.' Four stellar engineers quit within 6 months. Incoming lead Selim confronted him, presenting an ultimatum for professional conduct. The architect doubled down. Selim terminated him immediately, mobilized the team to reverse-engineer his siloed modules via AI, and watched team delivery break all historic records the very next quarter.",
      "ai_prompts": [
        {
          "title": "Toksik Yıldız (Brilliant Jerk) Davranış Düzeltme ve Ayrılık Görüşmesi Planı",
          "prompt": "Takımımda teknik olarak dahi seviyesinde ama takım arkadaşlarına karşı aşağılayıcı, kibirli ve toksik davranan bir kıdemli mühendis var. Bir mühendislik lideri olarak: 1) Onunla yapacağım 1-on-1 için hem onun yeteneğini takdir eden hem de toksik davranışın kabul edilemez olduğunu net çizgilerle belirten bir konuşma taslağı yaz, 2) 30 günlük somut davranış hedefleri koy, 3) Düzelmezse şirket onurunu koruyarak yolları ayırma protokolü oluştur."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Çok iyi kod yazıyor diye her türlü kabalığına katlanılan yazılımcı' klişesi. Toksik dâhilerin şirketlere verdiği gizli milyon dolarlık zararlar ve onları takımdan göndermenin getirdiği ferahlama üzerine cesur bir podcast.",
      "udemy_outline": [
        "00:00 - Toksik Yıldızın Gerçek Maliyeti: Kaçan Yetenekler",
        "04:15 - Kültür Nedir? 'Neyi Tolere Ettiğinizdir!'",
        "08:35 - Sessiz Ayrılanları (Quiet Quitters) Yeniden Kazanma Stratejisi",
        "13:20 - Egzersiz: Takımınız için 5 maddelik 'Kültürel Anayasa' hazırlayın"
      ]
    },
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
        {
          "topic": "Kriz Anı Davranışı",
          "old_way": "Slack kanalında 15 kişinin aynı anda bağırması, herkesin rastgele sunucuları restart etmesi.",
          "ai_way": "Tek bir Incident Commander (IC), sessiz War Room ve rollere ayrılmış net kriz disiplini."
        },
        {
          "topic": "Kök Neden Tespiti",
          "old_way": "3 saat boyunca milyonlarca log satırında kaybolup kimin ne yaptığına bakmak.",
          "ai_way": "Son deployment diff'i ve hata loglarını LLM'e verip 2 dakikada şüpheli commit'i bulmak."
        },
        {
          "topic": "Öncelik Sırası",
          "old_way": "Sistem çökmüşken neden çöktüğünü tartışıp kavga etmek.",
          "ai_way": "Önce yangını söndürmek (Rollback / Traffic Drain); nedenini sonra araştırmak."
        }
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
        {
          "topic": "Hedef Uptime",
          "old_way": "'Sistem asla durmamalı, %100 çalışmalı' (Gerçek dışı baskı).",
          "ai_way": "'%99.9 SLO hedefliyoruz; bu ay 43 dakika kesinti hakkımız (Error Budget) var.'"
        },
        {
          "topic": "Bütçe Tükendiğinde",
          "old_way": "Herkesin birbirini suçlaması, yine de yeni özellik çıkarmaya devam edilmesi.",
          "ai_way": "Hata bütçesi %0'a indiğinde tüm yeni özelliklerin durdurulup sadece stabilite çalışılması."
        },
        {
          "topic": "Müşteri Sözleşmesi",
          "old_way": "SLA cezalarını cepten ödemek.",
          "ai_way": "SLI ve SLO'ları AI anomali tespitiyle proaktif izleyip SLA ihlalini önceden engellemek."
        }
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
        {
          "topic": "Sorun Arama Yolu",
          "old_way": "Kibana'da rastgele anahtar kelimelerle arama yapıp binlerce ilgisiz log arasında kaybolmak.",
          "ai_way": "Correlation ID ve Trace ID ile tek bir isteğin mikroservisler arasındaki tüm yolculuğunu haritalamak."
        },
        {
          "topic": "Log Yoğunluğu",
          "old_way": "Gereksiz her şeyi loglayıp ayda 20.000$ Datadog/Splunk faturası ödemek.",
          "ai_way": "Akıllı örnekleme (Tail-based sampling) ve AI ile sadece anomalileri saklayarak %70 maliyet tasarrufu."
        },
        {
          "topic": "Kök Neden Çözümü",
          "old_way": "Farklı servislerin loglarını birleştiremeyip suçu diğer takıma atmak.",
          "ai_way": "AI özetleyicinin zincirleme hatanın ilk hangi serviste başladığını ispatlaması."
        }
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
        {
          "topic": "Odak Noktası",
          "old_way": "'Hatayı kim yaptı?' (Cadı avı, insanları korkutmak ve hataları gizletmek).",
          "ai_way": "'Sistemimiz neden bu hatayı engelleyemedi?' (Sistemik ve mimari iyileştirme)."
        },
        {
          "topic": "Toplantı Atmosferi",
          "old_way": "Mahkeme salonu gibi gergin, herkesin mazeret ürettiği ortam.",
          "ai_way": "Merak ve öğrenme odaklı, herkesin şeffafça süreci incelediği bilimsel laboratuvar."
        },
        {
          "topic": "Çıktı",
          "old_way": "Kimsenin okumadığı suçlayıcı bir rapor.",
          "ai_way": "AI ile çıkarılmış net zaman çizelgesi, 5 Neden analizi ve takvimlenmiş 3 önleyici Jira bileti."
        }
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
        {
          "topic": "Dayanıklılık Testi",
          "old_way": "'Umarım sunucular çökmez' diye dua etmek.",
          "ai_way": "Chaos Mesh veya Gremlin ile kasten pod öldürmek, gecikme (latency) enjekte etmek."
        },
        {
          "topic": "Test Zamanı",
          "old_way": "Canlı ortamda beklenmedik felaket anında öğrenmek.",
          "ai_way": "Salı günü öğlen 14:00'te tüm ekibin hazır olduğu kontrollü GameDay seansında test etmek."
        },
        {
          "topic": "AI Rolü",
          "old_way": "Manuel olarak senaryo düşünmek.",
          "ai_way": "AI ajanlarının sistemin en zayıf mimari halkasını bulup oraya özel saldırı ve kesinti simülasyonu üretmesi."
        }
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
        {
          "topic": "İletişim Tonu",
          "old_way": "Sessiz kalıp hiçbir şey söylememek veya panik dolu belirsiz mesajlar atmak.",
          "ai_way": "Düzenli aralıklarla, teknik terimlerden arındırılmış, kontrolün elde olduğunu gösteren mesajlar."
        },
        {
          "topic": "Status Page",
          "old_way": "Her yer çökmüşken status page'in 'All Systems Operational' (yeşil) göstermesi.",
          "ai_way": "Kullanıcıya dürüstçe 'Ödeme servisimizde yavaşlık var, mühendislerimiz inceliyor' demek."
        },
        {
          "topic": "Yönetici Yönetimi",
          "old_way": "CEO'nun kriz kanalına girip yazılımcıları soru yağmuruna tutarak yavaşlatması.",
          "ai_way": "CEO için ayrı bir yönetici özet kanalı açıp oraya AI ile filtrelenmiş net bilgiler akıtmak."
        }
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
        {
          "topic": "Teknik Raporlama",
          "old_way": "'Kubernetes cluster'ımızı 1.28 sürümüne yükselttik.'",
          "ai_way": "'Altyapı otomasyonu sayesinde sunucu maliyetlerimizi ayda 8.000$ düşürdük ve runway'imizi 2 ay uzattık.'"
        },
        {
          "topic": "Odak Noktası",
          "old_way": "Kullanılan süslü teknolojiler ve framework isimleri.",
          "ai_way": "Gelir artışı, maliyet düşüşü veya operasyonel risk azaltımı (The Big 3)."
        },
        {
          "topic": "Talep İletişimi",
          "old_way": "'Takıma yeni lisanslar ve sunucular lazım.'",
          "ai_way": "'Yapacağımız 10.000$'lık AI yatırımı, takıma yılda 120.000$'lık mühendislik mesaisi kazandıracak.'"
        }
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
        {
          "topic": "Zararlı Metrikler",
          "old_way": "Commit sayısı, yazılan satır sayısı (LOC), kapatılan bilet sayısı.",
          "ai_way": "Bu metrikleri ölçerseniz yazılımcılar yapay zekaya 10.000 satır çöp kod yazdırıp sistemi kandırır."
        },
        {
          "topic": "DORA Metrikleri",
          "old_way": "Yılda bir kez release çıkıp hızını bilmemek.",
          "ai_way": "Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service."
        },
        {
          "topic": "SPACE Çerçevesi",
          "old_way": "Sadece çıktıya (Output) odaklanıp insanların tükenmesini görmemek.",
          "ai_way": "Satisfaction, Performance, Activity, Communication, Efficiency boyutlarını dengeli ölçmek."
        }
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
        {
          "topic": "Maliyet Takibi",
          "old_way": "Ay sonunda fatura geldiğinde CFO'nun bağırışlarıyla öğrenmek.",
          "ai_way": "Günlük bütçe alarmları, etiketleme (Tagging) ve takım bazlı maliyet panoları."
        },
        {
          "topic": "Model Seçimi",
          "old_way": "Her basit işlem için en pahalı modeli (GPT-4o / Claude Opus) çağırmak.",
          "ai_way": "Model Router ile basit işleri ucuz/hızlı modellere (Haiku / 4o-mini), sadece zor işleri pahalı modellere göndermek."
        },
        {
          "topic": "Prompt Optimizasyonu",
          "old_way": "Her istekte 50 sayfalık aynı sistem promptunu baştan göndermek.",
          "ai_way": "Prompt Caching kullanarak token maliyetini %90 düşürmek."
        }
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
        {
          "topic": "Tepki Biçimi",
          "old_way": "Korkudan 'Yetiştiririz' deyip takımı hafta sonu dahil sabahlara kadar çalıştırmak.",
          "ai_way": "'Demir Üçgen' kuralını masaya koyup tarih sabitse neleri kapsamdan çıkaracağımızı sormak."
        },
        {
          "topic": "Kalite Tavizi",
          "old_way": "Yetişsin diye test yazmamak, dokümantasyonu silmek (Teknik borç patlaması).",
          "ai_way": "Kaliteden asla taviz vermemek; sadece işlevsellik kapsamını (scope) küçültmek."
        },
        {
          "topic": "İlişki Dinamiği",
          "old_way": "Yazılımcılar ve PM'in iki düşman kampa bölünmesi.",
          "ai_way": "Aynı gemideki iki stratejik ortak olarak AI ile hızlı prototip (MVP) seçenekleri üretmek."
        }
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
        {
          "topic": "Sunum Yapısı",
          "old_way": "Kronolojik anlatım: 'Önce şunu yaptık, sonra buraya baktık...' (Sonuç 50. dakikada gelir).",
          "ai_way": "Piramit Prensibi (Minto Pyramid): Önce ana mesaj ve karar talebi, sonra 3 kanıt."
        },
        {
          "topic": "Görsel Tasarım",
          "old_way": "Küçük fontlarla dolu, okunmayan devasa tablolar ve log ekran görüntüleri.",
          "ai_way": "Tek bir net mesaj veren temiz grafikler ve AI ile üretilmiş görsel metaforlar."
        },
        {
          "topic": "Soru-Cevap",
          "old_way": "Beklenmeyen zor bir soru geldiğinde terleyip konuyu dağıtmak.",
          "ai_way": "Yönetim kurulunun soracağı 10 zor soruyu önceden AI ile simüle edip hazırlıklı olmak."
        }
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
        {
          "topic": "Reddetme Şekli",
          "old_way": "Kaba ve tepkisel bir şekilde 'Yapamayız, vaktimiz yok' demek (Düşman kazanmak).",
          "ai_way": "Stratejik seçenek sunarak: 'Bunu yapabiliriz ama X projesini 3 hafta öteleriz, şirket için hangisi daha öncelikli?'"
        },
        {
          "topic": "Takım Koruması",
          "old_way": "Her şeyi kabul edip sonra gizlice takıma mobbing yapmak.",
          "ai_way": "Takımın odak kapasitesini bir kale gibi savunmak ve takdiri üzerine almak."
        },
        {
          "topic": "Saygınlık",
          "old_way": "Her şeye boyun eğen 'Yes-Man' olarak görülüp saygı görmemek.",
          "ai_way": "Şirketin stratejik hedeflerini koruyan olgun bir lider olarak görülmek."
        }
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
    },
    {
      "id": 49,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 49: Takıma Özel Yerel LLM ve Ajan Gateway Kurulumu: Güvenli & KVKK Uyumlu AI",
      "title_en": "Lesson 49: Private Local LLMs, Ollama & Internal Proxy Gateways for Zero-Data-Leakage AI",
      "level": "Yönetici / Director Level",
      "summary_tr": "Şirketin hassas müşteri ve finansal verilerini kamuya açık yapay zekalara kaptırmadan; Ollama, vLLM ve dahili LiteLLM Proxy ile %100 güvenli AI altyapısı kurmak.",
      "summary_en": "Preventing confidential customer PII from leaking to public models: Deploying Ollama, vLLM, and an internal LiteLLM Proxy gateway with data redaction.",
      "eli5_metaphor_tr": "Şirketin tüm gizli muhasebe defterlerini şehrin ortasındaki umumi fotokopiciye götürüp 'Bunu çoğalt' dersen polis de basar, hırsız da çalar. Yerel AI kurmak, şirketin kendi bodrum katına yüksek güvenlikli, kapalı devre bir fotokopi makinesi koymaktır; hiçbir kağıt binadan dışarı çıkmaz.",
      "eli5_metaphor_en": "Carrying corporate ledgers to a public photocopier shop down the street exposes everything to leaks and regulatory raids. Hosting private models via Ollama and vLLM is putting an air-gapped, high-speed printing press in your own vault. Zero bits escape company custody.",
      "comparison_table": [
        {
          "topic": "Veri Güvenliği",
          "old_way": "Yazılımcıların müşteri kredi kartı loglarını izinsiz açık ChatGPT'ye yapıştırması.",
          "ai_way": "LiteLLM Proxy üzerinde çalışan otomatik PII Redaction (Veri Maskeleme) ile sıfır sızıntı."
        },
        {
          "topic": "Model Barındırma",
          "old_way": "Sadece dış API'lara bağımlı olmak (İnternet veya sağlayıcı kopunca işin durması).",
          "ai_way": "Kritik servislerde kurum içi sunucularda koşan açık kaynaklı modeller (Llama 3.3, Qwen, DeepSeek)."
        },
        {
          "topic": "Maliyet ve Denetim",
          "old_way": "Kimin hangi modele ne kadar token harcadığının bilinememesi.",
          "ai_way": "Merkezi Gateway üzerinden kullanıcı bazlı kota, bütçe ve log denetimi."
        }
      ],
      "framework_steps_tr": [
        "1. Merkezi AI Gateway Katmanı (LiteLLM / Portkey): Tüm takım isteklerini tek bir şirket içi proxy üzerinden geçir; API anahtarlarını geliştiricilere değil gateway'e ver.",
        "2. Otomatik PII Maskeleme: Koddaki API key'leri, kimlik numaralarını ve e-postaları LLM'e gitmeden önce regex ve Presidio ile yıldızla (`***`).",
        "3. Yerel Çıkarım (Local Inference): Geliştirici laptoplarında veya iç Kubernetes kümesinde Ollama / vLLM ile Llama 3 veya DeepSeek modellerini barındır.",
        "4. KVKK / GDPR Uyumluluk Politikası: Şirketin hukuk birimiyle onaylı bir 'Yapay Zeka Veri İşleme Politikası' yayınla; çalışanların neyi nerede kullanacağını netleştir."
      ],
      "framework_steps_en": [
        "1. Establish an Internal AI Gateway (LiteLLM / Portkey): Route all team requests through a unified reverse proxy; never distribute master vendor keys to dev laptops.",
        "2. Automated PII Anonymization: Scrub passwords, credit cards, and emails in-flight using Microsoft Presidio before payloads leave the gateway.",
        "3. On-Premises Inference: Host self-hosted weights via vLLM or Ollama on private Kubernetes GPU clusters for sensitive domain workloads.",
        "4. GDPR & Regulatory Compliance: Partner with corporate legal to establish an explicit, certified AI Data Processing Agreement across engineering."
      ],
      "case_study_tr": "Bir sağlık teknolojisi firmasında bir yazılımcı, hasta röntgen tahlil kodunu debug etmek için açık bir yapay zekaya yapıştırdı. Sağlık Bakanlığı denetiminde veri ihlali tespit edildi ve şirkete 1.5 milyon TL ceza kesildi. Lead Alperen hemen bir AI Gateway projesi başlattı. Şirketin VPC'si içine LiteLLM ve yerel Llama modelleri kuruldu; tüm dış çağrılarda otomatik kimlik anonimleştirici devreye alındı. Şirket 'Sağlık Verisi Uyumlu AI' sertifikası aldı ve rakiplerinin önüne geçti.",
      "case_study_en": "At a healthtech startup, an engineer pasted a patient pathology parser with raw patient identifiers into a public LLM. Regulators caught the leak, issuing a $400K penalty. Lead Alperen engineered an internal AI Gateway: deployed private Llama models on internal GPU nodes via vLLM, paired with automated PII masking on LiteLLM. The company earned full HIPAA/GDPR AI certification, converting a near-fatal crisis into a massive enterprise sales moat.",
      "ai_prompts": [
        {
          "title": "LiteLLM Gateway ve PII Veri Maskeleme Konfigüratörü",
          "prompt": "Biz 20 kişilik bir mühendislik takımıyız. Takımımızın OpenAI, Claude ve yerel Ollama modellerini güvenli, KVKK uyumlu ve merkezi bütçe kotalı kullanabilmesi için bir `docker-compose.yml` ve `litellm_config.yaml` mimarisi hazırla. Şunları içersin: 1) Model fallback zinciri, 2) API key ve PII maskeleme kuralları, 3) Geliştirici başına aylık 50$ kullanım limiti."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Şirket kodunu yapay zekaya kaptıran acemi yazılımcı' paniği. Yerel modellerin (Ollama/vLLM) inanılmaz yükselişi ve şirketlerin kendi güvenli AI kalelerini nasıl kurabileceği üzerine sürükleyici bir sohbet.",
      "udemy_outline": [
        "00:00 - KVKK ve GDPR Kabusu: Veri Sızıntısı Şirketleri Nasıl Batırır?",
        "04:15 - LiteLLM Proxy ile Merkezi AI Gateway Kurulumu",
        "08:35 - Yerel Modeller: Ollama ve vLLM ile Şirket İçi Çıkarım",
        "13:20 - Egzersiz: Lokalinizde Ollama ile ilk gizli kodlama asistanınızı ayağa kaldırın"
      ]
    },
    {
      "id": 50,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 50: Context Engineering ve Prompt Yönetimi: Şirket Hafızasını LLM'e Yedirmek",
      "title_en": "Lesson 50: Context Engineering: System Prompts, Repositories & Dynamic Context Injection",
      "level": "Yönetici / Director Level",
      "summary_tr": "Prompt mühendisliği öldü, yaşasın Bağlam Mühendisliği (Context Engineering): Modele ne istediğini değil, karar vermesi için gereken doğru veri ve sistem sınırlarını besleme sanatı.",
      "summary_en": "Prompt engineering is trivial; Context Engineering is the real discipline: Assembling the precise dynamic state, schema slice, and architectural boundaries an LLM needs to act flawlessly.",
      "eli5_metaphor_tr": "Bir avukata mahkemeye çıkmadan önce 'Müvekkilimi savun' demek boş bir prompttur. Ama avukatın önüne olayın polis tutanağını, kamera kayıtlarını, adli tıp raporunu ve ilgili kanun maddesini koyarsan (Context Engineering), avukat mahkemede harikalar yaratır. Yapay zeka bağlam olmadan sadece laf kalabalığı yapar.",
      "eli5_metaphor_en": "Telling a defense attorney walking into court: 'Win this trial!' is a useless prompt. Handing that attorney the exact police ballistics report, security camera timestamps, and precedent rulings (Context Engineering) guarantees victory. LLMs without context are just hallucinating blowhards.",
      "comparison_table": [
        {
          "topic": "Yaklaşım",
          "old_way": "'Sen kıdemli yazılımcısın, lütfen kodu hatasız yaz' gibi süslü laflar (Prompt Eng).",
          "ai_way": "İlgili DTO'lar, DB şeması, son hata logu ve testleri dinamik bağlam olarak enjekte etmek (Context Eng)."
        },
        {
          "topic": "Hata Sebebi",
          "old_way": "'Model aptal, halüsinasyon gördü' diye modele kızmak.",
          "ai_way": "'Biz modele doğru bağlamı ve kısıtları veremedik' diyerek veri akışını düzeltmek."
        },
        {
          "topic": "Bağlam Yönetimi",
          "old_way": "Tüm repoyu rastgele LLM penceresine tıkıp modelin aklını karıştırmak.",
          "ai_way": "Sadece gerekli 200 satırlık dilimi cerrahi hassasiyetle seçen akıllı RAG ve parser'lar."
        }
      ],
      "framework_steps_tr": [
        "1. Çöp Girerse Çöp Çıkar (Garbage In, Garbage Out): LLM'in performansı, promptun edebi güzelliğine değil, içine konan bağlamın saflığına bağlıdır.",
        "2. Dinamik Bağlam Enjeksiyonu: Mühendisin IDE'sindeki açık dosya, ilgili git diff'i ve aktif Jira biletinin kabul kriterlerini otomatik toplayan scriptler yaz.",
        "3. Sistem Promptlarını Kod Gibi Versiyonla: Şirketin sistem promptlarını Git'te tut, PR ile incele ve CI/CD ile test et.",
        "4. Token Bütçesi Dağılımı: 100k tokenlık pencerede: %10 Sistem kuralları, %60 Temiz bağlam ve örnekler (Few-shot), %10 Kullanıcı sorusu, %20 Üretim alanı."
      ],
      "framework_steps_en": [
        "1. Garbage In, Garbage Out: Model fidelity depends on context purity, not flamboyant adjectives in your prompt.",
        "2. Dynamic Context Injection: Author CLI tools that gather open editor buffers, git diffs, and Jira acceptance criteria into a surgical prompt envelope.",
        "3. System Prompts as Versioned Code: Maintain prompt registries in Git; test prompt mutations against evaluation suites before deployment.",
        "4. Token Window Budgeting: Allocate your 100K token budget: 10% System invariants, 60% dynamic code/schema context, 10% query, 20% generation headroom."
      ],
      "case_study_tr": "Bir e-ticaret takımında yazılımcılar 'Claude bizim projeyi anlamıyor, sürekli var olmayan metotları çağırıyor' diye şikayet ediyordu. Lead Ceyda projeyi inceledi: Yazılımcılar Claude'a sadece 'Şu servisi yaz' diyordu. Ceyda takıma özel bir CLI aracı yazdı (`team-ctx`). Bu araç, yazılımcının çalıştığı dosyanın bağımlılık ağacını, veritabanı migration dosyasını ve son OpenAPI spec'ini otomatik toplayıp bağlam olarak LLM'e yüklüyordu. Halüsinasyon oranı %80 azaldı, ilk denemede derlenen kod oranı %92'ye çıktı.",
      "case_study_en": "Developers at an e-commerce squad grumbled: 'Claude keeps hallucinating nonexistent methods in our codebase.' Lead Ceyda discovered they were issuing naive prompts without context. She authored a custom internal CLI (`team-ctx`) that parsed AST call-graphs, database schemas, and OpenAPI contracts into a structured context bundle. Hallucinations plummeted by 80%; first-compile success hit 92%.",
      "ai_prompts": [
        {
          "title": "Dinamik Context Assembler ve Sistem Promptu Optimizatörü",
          "prompt": "Bir yazılım takımı için Bağlam Mühendisliği (Context Engineering) şablonu tasarlıyoruz. Şu bilgileri girdi olarak alıp en optimize bağlam zarfını (Context Envelope) üreten bir yapı kur: 1) Sistem Kuralları (Maksimum 500 token), 2) İlgili Veritabanı Şeması ve DTO'lar, 3) 2 adet kusursuz Few-Shot örnek, 4) Kullanıcının spesifik task'ı. Bu bağlamın neden halüsinasyonu sıfırladığını açıkla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Prompt mühendisliği bitti mi?' tartışması. Süslü prompt yazarları ile veriyi ve bağlamı doğru kurgulayan gerçek sistem mimarları arasındaki fark üzerine ufuk açıcı bir diyalog.",
      "udemy_outline": [
        "00:00 - Prompt Engineering Efsanesi vs. Context Engineering Gerçeği",
        "04:15 - Bağlam Zarfı (Context Envelope) Mimarisi",
        "08:35 - Token Bütçesini Yönetmek: Halüsinasyonu Matematikle Engellemek",
        "13:20 - Egzersiz: Takımınız için otomatik bağlam toplayan 1 sayfalık script yazın"
      ]
    },
    {
      "id": 51,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 51: Multi-Agent İş Akışları: Planlayan, Yazan, Test Eden ve İnceleyen Ajan Ekibi",
      "title_en": "Lesson 51: Multi-Agent Software Squads: Orchestrating Planner, Coder, Tester & Reviewer Agents",
      "level": "Yönetici / Director Level",
      "summary_tr": "Tek bir yapay zekadan her şeyi yapmasını beklemek yerine; uzmanlaşmış ajanlardan oluşan otonom bir sanal mühendislik takımı kurmak.",
      "summary_en": "Moving beyond single-prompt monolithic assistants: Orchestrating specialized multi-agent swarms with distinct roles: Planner, Architect, Coder, Tester, and SecOps Auditor.",
      "eli5_metaphor_tr": "Bir şirkette tek bir kişinin hem şirket başkanı, hem muhasebeci, hem garson, hem de aşçı olduğunu düşün. Çorbanın içine fatura düşürür, şirketi batırır. Ama biri planlar (Aşçıbaşı), biri malzemeyi doğrar (Yamak), biri pişirir (Usta), biri de tadına bakar ve onaylar (Gurme) ise ortaya Michelin yıldızlı yemek çıkar. Çoklu ajan sistemi bu uzmanlar mutfağıdır.",
      "eli5_metaphor_en": "A restaurant where a single person takes reservations, cooks the steak, pours the wine, washes dishes, and balances the books will burn down. When you deploy a kitchen brigade—Head Chef plans, Sous Chef preps, Line Cook fires, Sommelier pairs, and Expeditor inspects—you earn Michelin stars. Multi-agent architecture is that kitchen brigade.",
      "comparison_table": [
        {
          "topic": "Mimari",
          "old_way": "Tek bir dev promptla kod, test, dokümantasyon ve güvenlik istemek (Modelin saçmalaması).",
          "ai_way": "Her ajanın tek bir görevi ve çıktısını diğer ajana aktardığı deterministik iş akışı."
        },
        {
          "topic": "Hata Yakalama",
          "old_way": "Modelin kendi hatasını görememesi (kendi yazdığı koda 'harika' demesi).",
          "ai_way": "Test Ajanı ve Güvenlik Ajanının Kodlayan Ajanı acımasızca eleştirip kodu reddetmesi."
        },
        {
          "topic": "Kalite Çıktısı",
          "old_way": "Orta kalitede yüzeysel çözümler.",
          "ai_way": "İnsan müdahalesi olmadan 4 denetimden geçmiş, testleri yazılmış üretim kalitesinde kod."
        }
      ],
      "framework_steps_tr": [
        "1. Rol Ayrılığı İlkesi: 1) Planner (Taskı alt parçalara böler), 2) Architect (Sistem sınırlarını çizer), 3) Coder (Kodu yazar), 4) Tester (Testleri yazar ve koşturur), 5) Reviewer (PR standartlarını denetler).",
        "2. State Management (LangGraph / CrewAI): Ajanlar arasındaki durum geçişlerini ve hafızayı güvenli bir state makinesinde yönet.",
        "3. Hakem Döngüsü (Refinement Loop): Tester ajanı hata bulursa işi insan lead'e değil, doğrudan Coder ajana geri fırlatır ('Şu 2 test patladı, düzelt').",
        "4. Human-in-the-Loop (HITL) Kapısı: Tüm ajanlar anlaştıktan sonra nihai onay ve merge yetkisi daima insan takım liderindedir."
      ],
      "framework_steps_en": [
        "1. Separation of Concerns Brigade: 1) Planner (Decomposes Jira specs), 2) Architect (Enforces ADR boundaries), 3) Coder (Generates implementation), 4) Tester (Authors mutation tests), 5) Reviewer (Applies PR checklists).",
        "2. State Machine Coordination: Wire agent transitions and message memory through stateful frameworks like LangGraph or temporal workflows.",
        "3. Autonomous Rejection Loops: When Tester or SecOps rejects output, the patch routes back to Coder agent with execution logs—zero human interruption required.",
        "4. Mandatory Human-in-the-Loop Gate: The multi-agent swarm produces a pull request; the human lead retains exclusive authority to merge."
      ],
      "case_study_tr": "Bir finans platformunda yeni vergi hesaplama formülleri geldiğinde yazılımcılar 2 hafta harcıyordu. Lead Barış 3 ajanlı bir LangGraph iş akışı kurdu: 1. Ajan vergi kanununu okuyup JSON test senaryolarına çeviriyor, 2. Ajan bu testleri geçecek Python kodunu yazıyor, 3. Ajan ise güvenlik ve edge-case kontrolü yapıyordu. 2 haftalık iş akışı 35 dakikaya indi; üstelik ilk çalıştırmada sıfır hesaplama hatası çıktı.",
      "case_study_en": "Updating fiscal tax calculation rules previously consumed two weeks of senior engineering per quarter. Lead Baris orchestrated a 3-agent LangGraph pipeline: Agent 1 parsed statutory legal text into JSON edge-case test matrices; Agent 2 synthesized Python domain logic; Agent 3 executed mutation coverage and static audits. A two-week manual grind shrank to 35 minutes with flawless mathematical accuracy.",
      "ai_prompts": [
        {
          "title": "Multi-Agent Yazılım Geliştirme Orkestrasyon Şablonu",
          "prompt": "Biz bir yazılım takımında şu görevi otonom ajanlarla çözmek istiyoruz: [GÖREV TANIMI]. Bana LangGraph / CrewAI mantığıyla çalışan 4 ajanlı bir mimari kur: 1) Planner Agent sistem promptu ve çıktı formatı, 2) Coder Agent sistem promptu, 3) Critic & Tester Agent sistem promptu, 4) Ajanlar arasındaki geri besleme (feedback loop) ve insan onay kapısı (Human-in-the-Loop) kuralları."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Geleceğin yazılım takımı: 1 insan lider ve 10 sanal AI ajan!' Bu vizyon ne kadar gerçekçi? Ajanların birbiriyle kavga edip sonsuz döngüye girmesi komedisi ve multi-agent mimarilerin doğru tasarımı üzerine nefis bir bölüm.",
      "udemy_outline": [
        "00:00 - Tek Prompt Devri Bitti: Multi-Agent Devrimi",
        "04:15 - Ajanların Görev Dağılımı: Planner, Coder, Tester, Reviewer",
        "08:35 - Geri Besleme Döngüleri (Feedback Loops) ve Sonsuz Döngü Koruması",
        "13:20 - Egzersiz: Takımınız için 2 ajanlı bir 'Yazan ve Denetleyen' prototipi kurun"
      ]
    },
    {
      "id": 52,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 52: AI Çıktılarını Otomatik Değerlendirme (Evals) ve Benchmark Sistemleri",
      "title_en": "Lesson 52: Automated Evaluation Pipelines: LLM-as-a-Judge & Benchmark Harnesses",
      "level": "Yönetici / Director Level",
      "summary_tr": "'Bence bu prompt daha iyi çalışıyor' gibi sübjektif hislere son: AI sistemlerinin kalitesini matematiksel olarak ölçen Eval pipeline'ları ve LLM-as-a-Judge mimarisi.",
      "summary_en": "Eliminating 'vibes-based engineering': Building automated Eval test harnesses, ground-truth benchmarks, and LLM-as-a-Judge validation pipelines.",
      "eli5_metaphor_tr": "Bir sporcunun iyi koşup koşmadığını 'Bence bugün çok havalı koştu' diyerek ölçemezsin; eline kronometreyi alır, 100 metreyi kaç saniyede koştuğunu salisesine kadar kaydedersin. Evals, yapay zekanın eline tuttuğun o kronometredir. Promptu değiştirdiğinde sistem daha mı iyi oldu yoksa geriye mi gitti rakamlarla görürsün.",
      "eli5_metaphor_en": "You don't assess an Olympic sprinter by saying: 'Her stride looked super majestic today.' You click the digital stopwatch and record 9.82 seconds. Evaluation harnesses (Evals) are your automated stopwatch. When you tweak prompts or models, Evals tell you with statistical certainty whether you improved or broke the system.",
      "comparison_table": [
        {
          "topic": "Kalite Kararı",
          "old_way": "Geliştiricinin 3 prompt deneyip 'Güzel çalışıyor' diyerek canlıya basması (Vibes-based).",
          "ai_way": "100 adet gerçek test vakasından oluşan Eval veri setinde %94 başarı puanı alma şartı."
        },
        {
          "topic": "Regresyon Tespiti",
          "old_way": "Promptu değiştirince başka bir özelliğin bozulduğunu müşterilerden öğrenmek.",
          "ai_way": "CI/CD hattında çalışan otomatik eval testleri ile anında kırmızı alarm almak."
        },
        {
          "topic": "Değerlendirme Hakemi",
          "old_way": "İnsanların yüzlerce satır çıktıyı tek tek okumaya çalışıp yorulması.",
          "ai_way": "Katı bir rubrikle puanlama yapan tarafsız LLM-as-a-Judge mimarisi."
        }
      ],
      "framework_steps_tr": [
        "1. Altın Veri Seti (Golden Dataset) Oluştur: Sistemin karşılaşacağı en zor 50 gerçek senaryoyu, girdileri ve beklenen doğru çıktıları JSON olarak kaydet.",
        "2. LLM-as-a-Judge: Daha güçlü bir akıl yürütme modelini (GPT-4o / Claude Sonnet) hakem yap; üretilen kodları güvenlik, doğruluk ve stil rubriğine göre 1-5 arası puanlat.",
        "3. CI/CD'ye Eval Kapısı: Prompt veya model değiştiğinde Eval skoru %90'ın altına düşerse PR merge edilemez.",
        "4. Hata Analizi: Patlayan eval senaryolarını kümeleyip prompttaki hangi kuralın eksik olduğunu tespit et."
      ],
      "framework_steps_en": [
        "1. Curate a Golden Dataset: Hand-craft 50 representative, grueling edge-case scenarios with known-good ground truth assertions.",
        "2. Architect LLM-as-a-Judge: Employ an advanced reasoning model with an explicit scoring rubric to grade candidate outputs on correctness, brevity, and safety.",
        "3. Enforce Eval CI Gates: Fail automated PR builds if an evaluation run drops benchmark accuracy below the 90% threshold.",
        "4. Failure Mode Clustering: Group failing eval cases automatically to diagnose whether regressions stem from context truncation, ambiguity, or model drift."
      ],
      "case_study_tr": "Bir müşteri hizmetleri yapay zeka botu yapan start-up'ta bir yazılımcı promptu 'biraz daha samimi olsun' diye değiştirdi. Canlıya geçince bot kullanıcılara yanlışlıkla %50 indirim kodu dağıtmaya başladı; şirket 80.000$ zarar etti. Lead Damla şirkete anında 'Prompt Evals' altyapısı kurdu. 150 adet geçmiş kriz senaryosu benchmark haline getirildi. Artık hiçbir prompt değişikliği bu 150 testten tam puan almadan canlıya çıkamıyor.",
      "case_study_en": "An engineer at a customer support scaleup edited their core prompt to make the bot 'friendlier.' In production, the bot hallucinatory promised 50% discount codes to anyone who asked, costing $80,000 in lost revenue. Lead Damla deployed an automated Eval harness: created 150 adversarial test cases. Today, no prompt change merges without passing 100% of safety and business boundary benchmarks.",
      "ai_prompts": [
        {
          "title": "LLM-as-a-Judge ve Otomatik Eval Puanlama Rubriği",
          "prompt": "Sen dünyanın en tarafsız ve titiz Baş Hakem AI'ısın (LLM-as-a-Judge). Görevin, bir yapay zekanın ürettiği şu çıktıyı: [ÜRETİLEN ÇIKTI], verilen şu zemin gerçekle (Ground Truth): [DOĞRU ÇIKTI] kıyaslamak. Şu rubrik üzerinden 1-5 arası puan ver ve gerekçeni yaz: 1) Teknik Doğruluk, 2) Güvenlik ve Halüsinasyon Yokluğu, 3) Domain Kısıtlarına Uyum. Çıktını JSON formatında `{score: number, reasoning: string, pass: boolean}` olarak üret."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Hislerle prompt yazan' amatör yazılımcı ile 'Bana rakamlarla gel!' diyen bilimsel Lead. Eval sistemlerinin yapay zekayı bir falcılık olmaktan çıkarıp gerçek bir mühendislik disiplinine nasıl dönüştürdüğü üzerine çarpıcı bir analiz.",
      "udemy_outline": [
        "00:00 - 'Hislerle Mühendislik' Yapmaya Son: Evals Nedir?",
        "04:15 - Altın Veri Seti (Golden Dataset) Nasıl Hazırlanır?",
        "08:35 - LLM-as-a-Judge Mimarisi ve Puanlama Rubrikleri",
        "13:20 - Egzersiz: Takımınızın en kritik promptu için 5 testlik bir Eval veri seti yazın"
      ]
    },
    {
      "id": 53,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 53: Fine-Tuning vs. RAG: Takımınız Hangi Senaryoda Hangisini Seçmeli?",
      "title_en": "Lesson 53: Fine-Tuning vs. RAG vs. In-Context Learning: The Architectural Decision Framework",
      "level": "Yönetici / Director Level",
      "summary_tr": "Her şeye 'Hemen bir model eğitelim (fine-tune)' diyen hype kurbanlarına son: Ne zaman RAG, ne zaman Fine-Tuning, ne zaman sadece Few-Shot prompt seçilmeli?",
      "summary_en": "Halting premature, budget-burning fine-tuning projects: The definitive trade-off framework for choosing between In-Context Prompting, RAG, and Parameter Fine-Tuning.",
      "eli5_metaphor_tr": "Bir öğrenciye sınavı kazandırmak gibidir. Öğrencinin eline açık kitap sınavında kitaptan ilgili sayfayı açıp verirsen bu RAG'dir (Hızlı, güncel, kolay). Öğrenciye tıp fakültesi jargonu veya özel bir cerrahi el becerisi kazandırmak için aylarca eğitim verirsen bu Fine-Tuning'dir (Pahalı, üslup değiştirir ama yeni bilgiyi ezberletemez). Bilgi için RAG, üslup ve biçim için Fine-Tuning seçilir.",
      "eli5_metaphor_en": "Preparing a student for an exam: Handing them the exact textbook chapter during an open-book test is RAG (Fast, dynamic, zero-training). Putting the student through 6 years of surgical residency to internalize medical jargon and reflexes is Fine-Tuning (Costly, teaches style and behavior, but poor for updating fast-changing facts). Use RAG for knowledge; use Fine-Tuning for style and form.",
      "comparison_table": [
        {
          "topic": "Bilgi Kaynağı",
          "old_way": "Her yeni bilgide modeli tekrar eğitmeye (Fine-Tuning) çalışıp batmak.",
          "ai_way": "Dinamik şirket verileri için RAG, format ve üslup için hafif Fine-Tuning kullanmak."
        },
        {
          "topic": "Maliyet ve Bakım",
          "old_way": "Aylarca GPU kirası ödeyip modeli sürekli drift ile uğraştırmak.",
          "ai_way": "Vektör veritabanı (Qdrant/Pinecone) ve anlık context enjeksiyonu ile %90 daha ucuza çözmek."
        },
        {
          "topic": "Güncellik Hızı",
          "old_way": "Statik model ağırlıklarının ilk haftada eskimesi.",
          "ai_way": "Doküman değiştiği an saniyesinde güncellenen RAG indeksleri."
        }
      ],
      "framework_steps_tr": [
        "1. Altın Kural: Daima en basitten başla: 1) Few-Shot Prompt -> 2) RAG -> 3) Fine-Tuning. Asla doğrudan fine-tuning ile başlama.",
        "2. Bilgi mi, Biçim mi? (Fact vs Form): Eğer modele yeni bir bilgi öğretmek istiyorsan RAG seç. Modelin konuşma biçimini veya özel bir kod sözdizimini öğretmek istiyorsan Fine-Tuning seç.",
        "3. Hibrit Yaklaşım: Büyük şirketlerde en iyi sonuç: Küçük bir açık kaynaklı modeli şirket kod stiliyle fine-tune edip, şirket dokümanlarını RAG ile beslemektir.",
        "4. Maliyet-Getiri Analizi: Fine-tune yapmadan önce hesapla: 20.000$ GPU ve mühendislik maliyetine değer mi, yoksa RAG ile ayda 50$ API parası vermek mi daha karlı?"
      ],
      "framework_steps_en": [
        "1. The Ladder of Simplicity: Always climb in order: 1) In-Context Few-Shot -> 2) RAG -> 3) Parameter Fine-Tuning. Never jump straight to training.",
        "2. The Fact vs. Form Heuristic: If you need to inject volatile facts or proprietary records, use RAG. If you need rigid output syntax, specialized domain style, or extreme latency reduction, fine-tune.",
        "3. The Hybrid Pattern: The gold enterprise standard: fine-tune a small compact model on your internal coding conventions, then hydrate it dynamically via RAG.",
        "4. Cold ROI Ledger: Calculate the true total cost of ownership: Does a $25K GPU fine-tuning cycle yield a measurable edge over a $50/month vector search pipeline?"
      ],
      "case_study_tr": "Bir hukuk yazılımı şirketi 'Tüm kanunları yapay zekaya ezberleteceğiz' diyerek 6 ay ve 120.000$ harcayıp Llama modelini fine-tune etti. 1 ay sonra Meclis yeni bir kanun çıkarınca model anında eskidi ve çöp oldu. Yeni lead Murat projeyi devraldı: Fine-tune modelini çöpe attı; 2 haftada standart bir Claude API + Qdrant RAG mimarisi kurdu. Kanunlar değiştikçe vektör veritabanı 1 saniyede güncellendi. Sistem %100 güncel kaldı ve maliyet %90 düştü.",
      "case_study_en": "A legaltech startup spent 6 months and $120,000 fine-tuning a custom Llama model to 'memorize all corporate statutes.' Four weeks post-launch, the legislature enacted sweeping corporate code reforms, rendering the expensive model obsolete. Incoming lead Murat decommissioned the static weights, deploying a vector RAG pipeline via Qdrant and Claude Sonnet in 14 days. Legislative updates now index in sub-seconds at 10% of the cost.",
      "ai_prompts": [
        {
          "title": "Mimari Karar Matrisi: Fine-Tuning mi yoksa RAG mi?",
          "prompt": "Şirketimizde şu problemi yapay zeka ile çözmek istiyoruz: [PROBLEM VE VERİ TİPİ: Örn: 10 yıllık kurum içi Java kütüphanemizi yazılımcılara hatasız kullandırmak]. Sen bir Baş AI Mimarısın. Bize: 1) Bu senaryoda RAG vs Fine-Tuning vs Few-Shot seçeneklerini maliyet, güncellik, bakım zorluğu ve başarı oranı kriterleriyle karşılaştıran bir ADR (Architecture Decision Record) hazırla, 2) Nihai tavsiyeni ve nedenini açıkla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Hemen kendi yapay zekamızı eğitelim!' diye milyon dolarları yakan vizyonsuz CTO'lar komedisi. RAG ve Fine-Tuning arasındaki farkın en basit analojilerle anlatımı ve şirketlerin parasını koruyan mühendislik aklı.",
      "udemy_outline": [
        "00:00 - Fine-Tuning Modası ve Boşa Harcanan Milyon Dolarlar",
        "04:15 - Bilgi vs. Biçim (Fact vs Form) Kuralı",
        "08:35 - RAG Mimarisi Ne Zaman Rakipsizdir?",
        "13:20 - Egzersiz: Takımınızın kullanım senaryosu için 1 sayfalık RAG vs Fine-Tuning karar belgesi hazırlayın"
      ]
    },
    {
      "id": 54,
      "module_id": 9,
      "module_title_tr": "Bölüm 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak",
      "module_title_en": "Module 9: Engineering the Team's AI Agent Infrastructure",
      "title_tr": "Ders 54: Etik, Telif Hakları ve Şirket Fikri Mülkiyetini (IP) Koruma Rehberi",
      "title_en": "Lesson 54: Intellectual Property, Legal Guardrails & Responsible AI Governance",
      "level": "Yönetici / Director Level",
      "summary_tr": "Şirketinizi gelecekteki telif davalarından, fikri mülkiyet (IP) kaybından ve regülasyon cezalarından koruyacak kurumsal yapay zeka yönetişimi ve etik manifestosu.",
      "summary_en": "Shielding your company from enterprise copyright lawsuits, proprietary IP loss, and EU AI Act penalties: Building responsible engineering governance.",
      "eli5_metaphor_tr": "Fabrikana ham madde alırken kaçak, çalıntı veya zehirli malzeme sokmazsın; çünkü polis fabrikayı mühürler. Yapay zekaya da nereden geldiği belirsiz korsan kodları veya başkalarının telifli algoritmalarını sokamazsın. Lider fabrikanın kapısındaki gümrük muhafızıdır; şirketin namusunu ve fikri mülkiyetini korur.",
      "eli5_metaphor_en": "You don't purchase toxic or stolen industrial chemicals for your factory floor; regulators will seize your plant and lock the gates. You cannot allow untraceable, pirated code fragments or proprietary competitor secrets into your company repos. The engineering lead is the chief customs inspector protecting corporate IP.",
      "comparison_table": [
        {
          "topic": "Telif Riski",
          "old_way": "Yazılımcıların AI çıktısını kontrolsüzce şirketin patentli ürününe yapıştırması.",
          "ai_way": "Telif hakları filtreleri açık (Public Code Match: OFF) ve lisans taraması zorunlu geliştirme."
        },
        {
          "topic": "Model Eğitimi İzni",
          "old_way": "Ücretsiz AI servislerine veri verip şirketin gizli algoritmalarını üçüncü partilere eğitmek.",
          "ai_way": "'Zero Data Retention' (ZDR) kurumsal sözleşmeleri ile verinin model eğitiminde kullanılmasını yasal olarak yasaklamak."
        },
        {
          "topic": "Etik ve Önyargı",
          "old_way": "Kredi veya işe alım algoritmalarındaki cinsiyet/ırk önyargılarını umursamamak.",
          "ai_way": "Yapay zeka modellerine düzenli Fairness ve Bias testleri uygulamak."
        }
      ],
      "framework_steps_tr": [
        "1. Zero Data Retention (ZDR) Sözleşmeleri: OpenAI, Anthropic veya AWS ile kurumsal anlaşma yaparken 'Verilerimiz asla model eğitiminde kullanılamaz' maddesini şart koş.",
        "2. Fikri Mülkiyet (IP) Kalkanı: Geliştiricilere açık kaynak ve AI kod kullanım sınırlarını anlatan 'Kurumsal AI Politikası' belgesini imzalat.",
        "3. EU AI Act ve Regülasyon Uyumu: Sisteminizin risk kategorisini (Minimal, Sınırlı, Yüksek Risk) belirle; yüksek riskli kararlarda insan denetimini şart koş.",
        "4. Hallucination Disclaimers: Müşteriye sunulan yapay zeka çıktılarında yasal sorumluluk reddi ve denetim kayıtları (Audit Trail) tut."
      ],
      "framework_steps_en": [
        "1. Mandatory Zero Data Retention (ZDR): Demand ironclad enterprise contract clauses ensuring vendor models never train on your telemetry or code prompts.",
        "2. Corporate IP Shield: Ratify a developer policy governing permissible AI code adoption, licensing hygiene, and competitive IP boundaries.",
        "3. EU AI Act Compliance: Classify system risk tiers (Minimal, Specific Transparency, High Risk); enforce human oversight on algorithmic decisions impacting users.",
        "4. Transparent Audit Trails: Persist immutable audit logs and explainability records for model predictions in compliance-regulated flows."
      ],
      "case_study_tr": "Bir fintech şirketi, kredi onaylama motoruna bir yapay zeka modeli entegre etti. 3 ay sonra denetçiler, modelin kadın başvuranlara haksız yere %40 daha düşük kredi skoru verdiğini (algoritmik önyargı) ortaya çıkardı. Şirket büyük bir skandalla sarsıldı ve ceza aldı. Yeni lead Ece duruma el koydu: Yapay zeka yönetişim komitesi kurdu, modele Fairness ve Debiasing testleri getirdi ve kredi kararlarında son onayı insan uzmanlara bağlayan bir denetim süreci başlattı. Şirketin itibarı kurtarıldı.",
      "case_study_en": "A consumer lending fintech integrated an LLM risk scorer. Regulators audited the decisions, revealing algorithmic bias: women were systematically assigned 40% lower credit lines. A media storm and regulatory fines hit the firm. Lead Ece intervened: instituted a Responsible AI Governance Council, introduced algorithmic bias evaluation suites, and mandated human-in-the-loop sign-offs on credit limits. Corporate credibility was restored.",
      "ai_prompts": [
        {
          "title": "Mühendislik Takımı İçin Kurumsal AI Kullanım ve Etik Politikası",
          "prompt": "Yazılım şirketimiz için hem yenilikçiliği destekleyen hem de fikri mülkiyeti, telif haklarını ve müşteri verilerini %100 koruyan 1 sayfalık 'Kurumsal AI ve Etik Kullanım Politikası' hazırla. Şunları içersin: 1) Onaylı ve yasaklı araçlar, 2) Müşteri verisi ve kaynak kod paylaşım kuralları, 3) Açık kaynak lisans risklerine karşı önlemler, 4) İhlal durumunda yaptırımlar."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Şirket sırrını ChatGPT'ye anlatan yazılımcı' fiyaskosu. Telif davaları, algoritmik önyargılar ve modern bir liderin şirketini yasal felaketlerden nasıl koruyabileceği üzerine düşündürücü ve esprili bir sohbet.",
      "udemy_outline": [
        "00:00 - Fikri Mülkiyet Kabusu: AI Üretimi Kod Kime Aittir?",
        "04:15 - Zero Data Retention ve Kurumsal Gizlilik Sözleşmeleri",
        "08:35 - Algoritmik Önyargı ve EU AI Act Uyum Rehberi",
        "13:20 - Egzersiz: Takımınız için 1 sayfalık 'Onaylı AI Kullanım Manifestosu' yazın"
      ]
    },
    {
      "id": 55,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 55: Mikro Yönetici Olmadan Yüksek Otonomi Sağlamak: Extreme Ownership & Autonomous Pods",
      "title_en": "Lesson 55: Extreme Ownership & Autonomous Pods: The Anti-Micromanagement Playbook",
      "level": "Yönetici / Director Level",
      "summary_tr": "Mühendislerin tepesinde dikilip 'Şu değişkenin adını şöyle yap' demek liderlik değil, acizliktir. Bağlam verip kontrolü devretmek (Context over Control) ve otonom hücreler kurmak.",
      "summary_en": "Hovering over shoulders to nitpick variable names is managerial bankruptcy. Leading via Context over Control and cultivating high-velocity autonomous pods.",
      "eli5_metaphor_tr": "Bir futbol teknik direktörünün maç sırasında sahaya girip futbolcunun ayağını tutup 'Topa şöyle vur' demesine benzer. Sahaya girersen kırmızı kart görürsün. Teknik direktör taktiği verir, antrenmanda oyuncuyu hazırlar, maç başladığında ise kenardan oyunu okur ve oyuncunun inisiyatif almasına güvenir.",
      "eli5_metaphor_en": "A football manager sprinting onto the pitch during a championship match to physically grab a player's ankle and direct their kick. The referee ejects them immediately. A great coach defines the tactical strategy, drills the squad in training, and trusts players to execute autonomously during live play.",
      "comparison_table": [
        {
          "topic": "Yönetim Tarzı",
          "old_way": "Kontrol (Control): 'Nasıl yapacağını ben söyleyeceğim, sadece dediklerimi yap.'",
          "ai_way": "Bağlam (Context): 'Hedefimiz bu, kısıtlarımız bunlar; nasıl çözeceğinizi siz belirleyin.'"
        },
        {
          "topic": "Hata Durumunda",
          "old_way": "Mühendisi azarlayıp tüm yetkilerini elinden almak.",
          "ai_way": "Extreme Ownership: 'Lider olarak yeterli bağlamı ve guardrail'ı veremediğim için sorumluluk benimdir.'"
        },
        {
          "topic": "Takım Hızı",
          "old_way": "Her karar için lead'in onayının beklenmesi (Devasa darboğaz).",
          "ai_way": "Otonom hücrelerin (Pods) bağımsız kararlar alıp hızla ilerlemesi."
        }
      ],
      "framework_steps_tr": [
        "1. Netflix Modeli (Context Not Control): Mühendise ne yapacağını değil; iş hedefini, müşteri acısını ve bütçe sınırlarını açıkla.",
        "2. Extreme Ownership (Jocko Willink): Bir şey patladığında suçu astlarına atma; 'Ben lider olarak neyi eksik anlattım?' sorusuyla sorumluluğu al.",
        "3. Otonom Pod Yapısı: Takımı 3-4 kişilik küçük, kendi içinde ürün, tasarım ve mühendislik kararını alabilen bağımsız hücrelere (Pods) böl.",
        "4. Guardrail ile Güvenlik Sağla: Otonomi kaos demek değildir; katı testler, linterlar ve otomatik CI/CD kapıları otonominin emniyet kemeridir."
      ],
      "framework_steps_en": [
        "1. Netflix Doctrine: Lead with Context, Not Control. Clarify strategic outcomes, customer pain, and architectural invariants—leave implementation tactics to the team.",
        "2. Extreme Ownership: When a release fails, never scapegoat developers. Stand before leadership and take full command responsibility.",
        "3. Autonomous Pod Architecture: Partition squads into cross-functional 3-4 engineer pods empowered with end-to-end mission ownership.",
        "4. Guardrails Enable Speed: Autonomy without automated guardrails is reckless anarchy; ironclad CI gates, linters, and SLOs are the safety nets that make speed possible."
      ],
      "case_study_tr": "Bir e-ticaret lead'i her PR'ı bizzat inceliyor, her teknik kararı tek başına veriyordu. Takım günde en fazla 2 PR kapatabiliyordu ve mühendisler inisiyatif almayı tamamen bırakmıştı. Lead tatile çıktığı 1 haftada hiçbir iş yapılmadı. Döndüğünde şok oldu ve yönetim tarzını değiştirdi: Takımı 'Ödeme Podu' ve 'Kargo Podu' olarak ikiye böldü. Her poda karar alma otonomisi verdi, CI kapılarını güçlendirdi. 2 ayda takımın PR hızı 5 katına çıktı; mühendisler işlerine yeniden aşık oldu.",
      "case_study_en": "A micro-managing team lead personally audited every PR line and dictated every database column name. Throughput throttled at 2 PRs per day; developers stopped thinking. When the lead took a 1-week vacation, all delivery froze completely. Humbled, the lead dismantled his approval bottlenecks: split the squad into an autonomous 'Payments Pod' and 'Fulfillment Pod' governed by automated CI guardrails. Velocity leaped 5x, and team ownership revived.",
      "ai_prompts": [
        {
          "title": "Mikro Yönetimden Otonom Pod Yapısına Geçiş Kılavuzu",
          "prompt": "Ben 10 kişilik bir yazılım takımının lideriyim. Kendimi sürekli takımın her işine müdahale ederken ve darboğaz oluştururken buluyorum. Takımımı mikro yönetimden kurtarıp yüksek otonomili 2 bağımsız 'Pod' haline getirmek istiyorum. Bana: 1) Netflix'in 'Context Not Control' ilkesini takımıma uygulayacak 4 adımlık dönüşüm planı yaz, 2) Takımın karar almasını hızlandıracak 'Yetki Devir Matrisi' (Delegation Poker) hazırla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Tüm gün yazılımcıların başında dikilen kontrol delisi patron' parodisi. Mikro yönetimin yetenekleri nasıl öldürdüğü ve Extreme Ownership ile otonom takım kurmanın yarattığı inanılmaz özgürlük üzerine ilham dolu bir podcast.",
      "udemy_outline": [
        "00:00 - Mikro Yönetim Hastalığı: Kendi Takımınızın Darboğazı Olmayın",
        "04:15 - Netflix Felsefesi: Kontrol Değil Bağlam Yönetimi (Context Not Control)",
        "08:35 - Extreme Ownership: Başarı Takımın, Hata Liderindir",
        "13:20 - Egzersiz: Takımınız için 1 adet 'Yetki Devir ve Otonomi Sözleşmesi' hazırlayın"
      ]
    },
    {
      "id": 56,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 56: Bireysel Öğrenme ve AI Trendlerini Filtreleme: FOMO'ya Kapılmadan Öncü Kalmak",
      "title_en": "Lesson 56: Curating Technical Knowledge: Avoiding AI Hype & FOMO to Stay Ahead",
      "level": "Yönetici / Director Level",
      "summary_tr": "Her gün Twitter/X ve LinkedIn'de çıkan 50 yeni AI aracının yarattığı bilgi obezitesi ve FOMO (Gelişmeleri kaçırma korkusu) ile başa çıkmak: Sinyali gürültüden ayıran bilgi filtresi.",
      "summary_en": "Conquering AI fatigue and information overload: Constructing a high-signal information filter to discern enduring paradigms from ephemeral Twitter hype.",
      "eli5_metaphor_tr": "Açık büfe bir restorana gittiğinde masadaki 200 çeşit yemeğin hepsini aynı anda tabağına doldurmaya çalışırsan miden bulanır, hiçbirinin tadını alamazsın. Akıllı gurme sadece en taze, en besleyici 2 yemeği seçer ve afiyetle yer. Bilgi dünyasında da her trende atlamak bilgi obezliği yapar; sadece derinliği olanı seçeceksin.",
      "eli5_metaphor_en": "Arriving at an all-you-can-eat buffet and piling all 200 greasy dishes onto one plate guarantees severe indigestion. A discerning gourmet selects two exquisitely prepared, high-nutrition entrees. Chasing every daily AI trend produces intellectual bloat; master the timeless fundamentals.",
      "comparison_table": [
        {
          "topic": "Bilgi Tüketimi",
          "old_way": "Günde 3 saat sosyal medyada hype tweetleri okuyup sürekli yetersiz hissetmek (FOMO).",
          "ai_way": "Haftada 2 saat akademik makale özetleri, resmi release logları ve gerçek vaka analizleri okumak."
        },
        {
          "topic": "Teknoloji Seçimi",
          "old_way": "Her yeni çıkan framework'ü hemen production'a sokup sistemi kobay faresi yapmak.",
          "ai_way": "Teknolojiyi en az 6 ay izleyip topluluk ve üretim olgunluğuna baktıktan sonra benimsemek."
        },
        {
          "topic": "Öğrenme Stratejisi",
          "old_way": "Yüzeysel araç isimlerini ezberlemek.",
          "ai_way": "Değişmeyen temel bilgisayar bilimi ilkelerini (Dağıtık sistemler, veri yapıları, mimari) derinleştirmek."
        }
      ],
      "framework_steps_tr": [
        "1. Lindy Etkisi (The Lindy Effect): Bir teknoloji ne kadar uzun süredir hayattaysa, gelecekte de o kadar uzun süre yaşar. Linux, SQL ve HTTP'yi anlamak, bugün çıkan süslü bir AI kütüphanesinden 100 kat daha değerlidir.",
        "2. Sinyal / Gürültü Filtresi: Sosyal medya gürültüsünü kapat; küratörlü bültenleri (InfoQ, Thoughtworks Tech Radar, Pragmatic Engineer) takip et.",
        "3. 5 Saat Kuralı: Haftada en az 5 saatini yeni bir teknoloji üzerinde bizzat ellerini kirleterek (Hands-on POC) deneysel prototipler yapmaya ayır.",
        "4. NotebookLM ile Haftalık Sentez: Haftanın en önemli 5 teknik makalesini NotebookLM'e atıp sesli özetini dinle; zamanını 10 kat verimli kullan."
      ],
      "framework_steps_en": [
        "1. Harness the Lindy Effect: Technologies that have survived for decades (Linux, SQL, HTTP, C) will likely outlive current hype. Master fundamentals first.",
        "2. Aggressive Signal-to-Noise Curation: Silence Twitter influencers; rely on curated technical intelligence like Thoughtworks Tech Radar and The Pragmatic Engineer.",
        "3. The 5-Hour Rule: Invest 5 hours weekly building real, hands-on proof-of-concept prototypes rather than reading passive opinions.",
        "4. AI Synthesis Streams: Slurp top whitepapers into NotebookLM for audio podcast overviews during commutes to maintain a strategic intellectual edge."
      ],
      "case_study_tr": "Bir yazılım lead'i her gördüğü yeni yapay zeka framework'ünü takıma zorla kullandırmaya çalışıyordu. 1 yılda takım 4 farklı framework değiştirdi; hiçbir proje tamamlanamadı ve mühendisler isyan etti. Şirketin CTO'su lead ile konuştu ve Thoughtworks Tech Radar disiplinini getirdi: Bir teknoloji 'Adopt' seviyesine gelmeden production'a sokulamaz kuralı konuldu. Lead enerjisini mimari temellere yöneltti; takım üzerindeki baskı kalktı ve teslimatlar düzene girdi.",
      "case_study_en": "An engineering lead forced his team to adopt every trending AI framework he discovered on Hacker News. Over 12 months, the squad churned through 4 incompatible agent libraries; zero projects shipped, and morale tanked. The CTO intervened, implementing the Thoughtworks Tech Radar policy: no library touches production without passing structured 'Assess -> Trial' gates. Stability returned, and delivery velocity stabilized.",
      "ai_prompts": [
        {
          "title": "Haftalık Teknik Trend ve Makale Sentezleyici Prompt",
          "prompt": "Aşağıda bu hafta yazılım dünyasında çok konuşulan 3 yeni teknoloji ve makale özeti yer almaktadır: [ÖZETLER]. Sen bir Principal Technology Strategist'sin. 1) Bu teknolojilerin hangisinin geçici bir 'Hype / Gürültü', hangisinin kalıcı bir 'Mimari Sinyal' olduğunu Lindy Etkisi prensibiyle analiz et, 2) Bir mühendislik takımı için somut uygulanabilirlik puanı ver (1-10), 3) Lider olarak bilmem gereken en kritik 3 stratejik çıkarımı yaz."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Her hafta yeni bir Javascript framework'ü veya AI kütüphanesi çıkmasından kafayı yiyen yazılımcı' feryadı. Bilgi obezitesinden kurtulmanın yolları, Lindy etkisi ve 20 yıl sonra da dimdik ayakta kalacak mühendislik bilgelikleri üzerine harika bir podcast.",
      "udemy_outline": [
        "00:00 - AI Bilgi Obezitesi ve FOMO Tuzağı",
        "04:15 - Lindy Etkisi: Değişmeyen Mühendislik İlkelerine Odaklanmak",
        "08:35 - Thoughtworks Tech Radar ile Takım Teknolojilerini Filtrelemek",
        "13:20 - Egzersiz: Takımınız için 1 sayfalık 'Teknoloji Kabul ve Değerlendirme Radarı' oluşturun"
      ]
    },
    {
      "id": 57,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 57: Şirket İçi Mühendislik Kültürü Yaratmak: Hackathonlar, Guildler ve AI Labs",
      "title_en": "Lesson 57: Building High-Octane Culture: Guilds, Internal Hackathons & AI Labs",
      "level": "Yönetici / Director Level",
      "summary_tr": "Mühendisleri sadece bilet kapatan mutsuz işçiler olmaktan çıkarıp inovasyon motoruna dönüştürmek: Spotify tarzı Guild yapılanması, çeyreklik Hackathonlar ve iç AI laboratuvarları.",
      "summary_en": "Transforming burned-out ticket punchers into an innovation powerhouse: Spotify-style guilds, quarterly hackathons, and internal AI experimentation labs.",
      "eli5_metaphor_tr": "Toprağa sadece tohum ekip su vermezsen orası çöl kalır; ama toprağı gübreler, güneş almasını sağlar ve etrafına çit çekersen orası yemyeşil bir meyve bahçesine dönüşür. Şirket kültürü o topraktır. Sadece bilet verirsen fabrika olursun; hackathon ve guild ortamı yaratırsan dünyanın en parlak beyinlerini çeken bir akademi olursun.",
      "eli5_metaphor_en": "Throwing seeds into unfertilized hard clay yields a barren dust bowl. Tilling the soil, adding rich compost, and protecting it from pests yields a bountiful orchard. Engineering culture is your soil. If you only assign Jira tickets, you run a sweatshop; foster guilds and hackathons, and you become an elite talent magnet.",
      "comparison_table": [
        {
          "topic": "Takım İçi İnovasyon",
          "old_way": "'Bizde yeni fikirleri sadece ürün yöneticileri düşünür, siz koda bakın.'",
          "ai_way": "Her çeyrek 2 günlük Hackathon düzenleyip en iyi projeleri doğrudan production'a almak."
        },
        {
          "topic": "Bilgi Paylaşımı",
          "old_way": "Takımların birbirinden habersiz, kendi silolarında yaşaması.",
          "ai_way": "Frontend, Backend, AI ve Güvenlik Guildleri kurup şirket çapında standartları yaymak."
        },
        {
          "topic": "Motivasyon Kaynağı",
          "old_way": "Sadece maaş ve zorunlu mesai baskısı.",
          "ai_way": "Teknik prestij, öğrenme heyecanı ve patent/açık kaynak üretme gururu."
        }
      ],
      "framework_steps_tr": [
        "1. Guild (Lonca) Yapılanması: Farklı takımlardaki aynı uzmanlıkları (örn: AI Guild, Backend Guild) ayda 1 kez bir araya getirip ortak standartları tartıştır.",
        "2. Çeyreklik Hackathon: Her çeyreğin sonunda 48 saatlik 'Gemiye Bindir' (Ship-It) hackathonu yap; birinci olan projeyi canlıya al.",
        "3. Mühendislik Blogu ve Tech Talks: Takım üyelerinin öğrendiklerini şirket blogunda yazmasını ve dış konferanslarda konuşmasını teşvik et.",
        "4. AI Labs İnovasyon Fonu: Mühendislere mesai saatlerinin %10'unu şirketin verimliliğini artıracak deneysel yapay zeka ajanları geliştirmeye ayırma hakkı tanı."
      ],
      "framework_steps_en": [
        "1. Spotify-Style Guilds: Connect domain peers across squads (AI Guild, Security Guild, Architecture Guild) monthly to harmonize standards.",
        "2. Quarterly Ship-It Hackathons: Dedicate 48 unbroken hours every quarter for engineers to prototype bold ideas; immediately fund and ship winners.",
        "3. Engineering Blog & Public Bragging: Incentivize engineers to author architecture posts on your engineering blog and speak at conferences.",
        "4. Internal AI Labs Sandboxes: Protect a 10% time budget for engineers to experiment with internal workflow automation agents."
      ],
      "case_study_tr": "Geleneksel bir sigorta şirketinde yazılımcılar sıkıntıdan patlıyordu ve en iyi mühendisler start-up'lara kaçıyordu. Yeni lead Melike göreve geldiğinde 'AI İnovasyon Guild'i' ve ilk şirket içi Hackathon'u başlattı. Bir junior mühendis hackathon'da hasar tespiti yapan bir AI görüntü işleme prototipi yaptı. Şirket CEO'su projeyi gördü ve 500.000$ bütçe ayırarak ana ürüne entegre etti. Şirket içi işten ayrılma oranı %45'ten %6'ya düştü; dışarıdan yüzlerce kıdemli yazılımcı şirkete başvurmaya başladı.",
      "case_study_en": "At a legacy insurance firm, developer disengagement was toxic; top talent fled to startups. Lead Melike launched an 'AI Innovation Guild' and the company's first 48-hour Hackathon. An associate engineer built an AI computer vision prototype assessing car crash damage. The CEO was ecstatic, allocating $500K to ship it as a flagship product. Engineering turnover collapsed from 45% to 6%, while inbound senior applications tripled.",
      "ai_prompts": [
        {
          "title": "Şirket İçi Mühendislik Hackathonu ve Guild Kurulum Kılavuzu",
          "prompt": "50 kişilik bir mühendislik departmanında çalışanları heyecanlandıracak, siloları kıracak ve yapay zeka odaklı yenilikçi fikirler üretecek 2 günlük bir 'İç Mühendislik Hackathonu (Ship-It Days)' ve 'AI Guild Tüzüğü' planı hazırla. Şunları içersin: 1) Hackathon kuralları, değerlendirme jürisi ve ödülleri, 2) Aylık Guild toplantı gündem formatı, 3) Şirket yönetimine bu kültürün getireceği iş faydasını anlatan 3 argüman."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Pazartesi sendromuyla sadece bilet kapatmaya gelen zombi mühendisler' tablosu. Hackathonların ve Guildlerin bir şirketi nasıl Silikon Vadisi enerjisiyle doldurduğu üzerine coşkulu ve motive edici bir sohbet.",
      "udemy_outline": [
        "00:00 - Bilet Fabrikasından İnovasyon Akademisine Dönüşüm",
        "04:15 - Guild Mimarisi: Siloları Kırmak ve Standart Yaymak",
        "08:35 - 48 Saatlik Hackathon Nasıl Düzenlenir? (Ship-It Days)",
        "13:20 - Egzersiz: Takımınız için ilk AI Guild buluşmasının gündemini hazırlayın"
      ]
    },
    {
      "id": 58,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 58: Çoklu Takımları (Squad of Squads) Yönetmek: Staff+ Mühendislerle Eşleşme",
      "title_en": "Lesson 58: Scaling from 1 Team to Many: Partnering with Staff+ Engineers & Directors",
      "level": "Yönetici / Director Level",
      "summary_tr": "Tek bir 6 kişilik takımı yönetmekle, 5 farklı takımdaki 40 mühendisi orkestre etmek arasındaki uçurum: Staff/Principal mühendislerle stratejik ittifak kurmak ve organizasyonel ölçeklenme.",
      "summary_en": "The chasm between managing one 6-person squad and leading an org of 40 across multiple teams: Partnering with Staff+ archetypes and scaling architectural alignment.",
      "eli5_metaphor_tr": "Tekne kaptanı olmakla dev bir uçak gemisi filosunun amirali olmak arasındaki farktır. Tekne kaptanı dümeni bizzat tutar; ama amiral 10 farklı geminin kaptanına telsizle stratejiyi bildirir. Staff mühendisler o gemilerin baş seyir subaylarıdır; amiral onlarla yan yana çalışmazsa filo birbirine çarpar.",
      "eli5_metaphor_en": "Skippering a speedboat vs. commanding an aircraft carrier strike group. On a speedboat, you grasp the wheel directly; as an Admiral, you issue strategic intents to captains of 10 distinct warships. Staff+ engineers are your chief fleet navigators; without tight alignment with them, the fleet collides.",
      "comparison_table": [
        {
          "topic": "Yönetim Kapsamı",
          "old_way": "Her takımdaki her yazılımcının biletini ve 1-on-1'ını tek tek yapmaya çalışıp boğulmak.",
          "ai_way": "Takım liderleri ve Staff mühendisler üzerinden kaldıraçlı liderlik yapmak."
        },
        {
          "topic": "Karar Mekanizması",
          "old_way": "Tüm mimari kararları yukarıdan dikte etmek (Fildişi kule mimarlığı).",
          "ai_way": "Staff mühendislerle 'Mimari Konsey' (Architecture Review Board) kurup konsensüsle ilerlemek."
        },
        {
          "topic": "İletişim Ritmi",
          "old_way": "Haftada 40 saat toplantı maratonunda erimek.",
          "ai_way": "Asenkron durum panoları, AI çapraz bağımlılık analizleri ve haftalık 1 strateji brifingi."
        }
      ],
      "framework_steps_tr": [
        "1. İkili Liderlik Modeli (EM + Staff Archetype): Engineering Manager/Lead insanı ve teslimatı yönetir; Staff Engineer ise teknik vizyonu ve derinliği yönetir. Bu iki rol rakip değil, simbiyotik ortaktır.",
        "2. Çapraz Takım Bağımlılıkları (Cross-Team Dependencies): Takımlar arasındaki tıkanıklıkları erkenden teşhis eden ortak API sözleşmeleri ve bağımlılık matrisi kur.",
        "3. Mimari İnceleme Kurulu (Architecture Review Board - ARB): Şirket çapında kritik değişiklikler için haftalık 1 saatlik hafif (lightweight) RFC onay kurulu topla.",
        "4. Lider Yetiştiren Lider Ol: Başarın artık kodla değil; yetiştirdiğin ve yetki devrettiğin yeni takım liderlerinin başarısıyla ölçülür."
      ],
      "framework_steps_en": [
        "1. The Symbiotic Duumvirate (EM + Staff): The Engineering Director drives delivery velocity, hiring, and culture; the Staff Engineer drives technical strategy and system coherence.",
        "2. Map Cross-Team Coupling: Eliminate hidden dependencies between squads via immutable API contracts and shared OpenAPI registries.",
        "3. Lightweight Architecture Councils: Form weekly, non-bureaucratic RFC syncs where Staff+ engineers evaluate cross-cutting structural trade-offs.",
        "4. Multiplier of Multipliers: Your legacy is no longer personal brilliance; it is the caliber of engineering leaders you mentor and unleash."
      ],
      "case_study_tr": "Hızla büyüyen bir unicorn start-up'ta mühendis sayısı 1 yılda 10'dan 60'a çıktı. Eski lead tüm kararları tek başına almaya devam edince tüm projeler durma noktasına geldi ve takımlar birbirinin kodunu ezmeye başladı. Yeni gelen Director Eren, Staff mühendisleri belirledi. 'Takımların Takımı' modeline geçti: 5 bağımsız squad kurdu, her squad'ın başına bir Team Lead, teknik koordinasyon için ise 2 Principal Engineer atadı. AI ile takımlar arası bağımlılık radarı kurdu. Teslimat hızı 4 katına çıktı ve kaos düzene dönüştü.",
      "case_study_en": "During a hyper-growth phase, a fintech scaled from 10 to 60 engineers in 12 months. The founding lead attempted to micro-approve every design, freezing the entire engineering org while teams trampled over each other's APIs. Incoming Director Eren partnered with two senior Staff engineers, segmented the org into 5 autonomous domain squads with designated team leads, and formed a lightweight Architecture Board. Throughput jumped 4x and chaos transformed into rhythm.",
      "ai_prompts": [
        {
          "title": "Çoklu Takım (Squad of Squads) Çapraz Bağımlılık ve Mimari Hizalanma Planlayıcı",
          "prompt": "40 yazılımcıdan oluşan ve 5 farklı mikroservis takımına bölünmüş bir mühendislik departmanını yönetiyorum. Takımlar arasındaki mimari uyumsuzlukları ve gizli bağımlılıkları engellemek için: 1) Staff+ mühendislerle Engineering Manager'lar arasındaki rol paylaşım protokolünü tanımla, 2) Haftalık 45 dakikalık 'Architecture Review Board (ARB)' tüzüğü ve karar şablonu hazırla, 3) Takımlar arası blokajları AI ile asenkron takip etme mekanizması tasarla."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Şirket büyüyünce her şeyin kilitlenmesi' kabusu. 1 takımı yönetmekle 5 takımı yönetmek arasındaki uçurum, Staff mühendislerle kurulan stratejik ortaklık ve orkestrasyon dehası üzerine derin bir yönetim analizi.",
      "udemy_outline": [
        "00:00 - Ölçeklenme Tuzağı: 10 Kişiden 50 Kişiye Geçerken Şirketler Neden Kilitlenir?",
        "04:15 - EM ve Staff+ Mühendis Ortaklığı: Görev Dağılımı",
        "08:35 - Çapraz Takım Bağımlılıklarını Asenkron Yönetmek",
        "13:20 - Egzersiz: 3 takımın ortak çalışacağı bir proje için Architecture Review Board (ARB) şablonu hazırlayın"
      ]
    },
    {
      "id": 59,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 59: CTO Yol Haritası: Teknik Derinlikten Şirket Vizyonu Belirleyiciliğine",
      "title_en": "Lesson 59: The CTO Trajectory: Merging Technical Depth with Boardroom Vision",
      "level": "Yönetici / Director Level",
      "summary_tr": "Team Lead'likten CTO koltuğuna uzanan kariyer yolculuğu: Kodun efendisi olmaktan; şirket stratejisini, sermaye tahsisini ve teknolojik vizyonu belirleyen tepe yöneticiye dönüşüm.",
      "summary_en": "The definitive evolutionary journey from Team Lead to Chief Technology Officer: Transcending code to master capital allocation, board governance, and technological vision.",
      "eli5_metaphor_tr": "Bir şantiyede harç karan ustabaşı olmaktan (Junior), inşaatın mühendisi olmaya (Senior), oradan tüm şantiyelerin koordinatörlüğüne (Lead), en sonunda ise tüm kentin imar planını çizen ve parayı yöneten şehircilik bakanı olmaya (CTO) benzer. CTO kentin sadece bugünkü binalarını değil, 20 yıl sonra nereden metro geçeceğini planlayan vizyonerdir.",
      "eli5_metaphor_en": "Evolving from the bricklayer mixing mortar (Junior), to the structural engineer (Senior), to the site superintendent (Lead), to the Secretary of Urban Planning shaping the 30-year transit grid and municipal budget of an entire metropolis (CTO). The CTO doesn't pour concrete; they design the future economic horizon.",
      "comparison_table": [
        {
          "topic": "Zaman Ufku",
          "old_way": "Gelecek sprint veya gelecek ay (Taktiksel).",
          "ai_way": "Önümüzdeki 2 ila 5 yılın teknoloji ve iş vizyonu (Stratejik)."
        },
        {
          "topic": "Sorumluluk Alanı",
          "old_way": "Kodun çalışması ve pipeline'ın yeşil olması.",
          "ai_way": "Şirketin piyasa değeri, karlılığı, regülasyon güvenliği ve sektördeki teknolojik rekabet gücü."
        },
        {
          "topic": "Yetenek Odaklılık",
          "old_way": "Bireysel kodlama becerisi.",
          "ai_way": "Dünyanın en iyi liderlerini ve mimarlarını şirkete çeken bir kültür ve vizyon inşa etmek."
        }
      ],
      "framework_steps_tr": [
        "1. Üç Ayaklı CTO Taburesi: 1) İş Vizyonu (Şirket nasıl para kazanacak?), 2) Teknoloji Stratejisi (Hangi mimari bizi geleceğe taşır?), 3) İnsan & Kültür (Bu vizyonu kim inşa edecek?).",
        "2. Sermaye Tahsisi (Capital Allocation): Mühendislik bütçesini (Maaşlar, Bulut, AI harcamaları) bir yatırımcı gibi yönet; her harcanan doların şirket değerine çarpan etkisini hesapla.",
        "3. Kurumsal Diplomasi: CEO, CFO ve Yönetim Kurulu ile güvene dayalı, şeffaf bir ortaklık kur; teknolojiyi bir maliyet merkezi değil, şirketin ana gelir motoru yap.",
        "4. Geleceği Bugünden Görmek: AI devrimi gibi sismik dalgaları erkenden görüp şirketin iş modelini tehditler fırsata dönüşmeden önce dönüştür."
      ],
      "framework_steps_en": [
        "1. The 3-Legged CTO Stool: 1) Commercial Business Vision, 2) Multi-Year Architecture Horizon, 3) Elite Engineering Talent Magnetism.",
        "2. Master Capital Allocation: Treat the R&D budget (headcount, cloud infrastructure, AI token spend) like a venture fund partner seeking compounding returns.",
        "3. Boardroom Statesmanship: Forge an unshakable triumvirate with the CEO and CFO; position engineering not as a cost center, but as the premier engine of enterprise valuation.",
        "4. Anticipate Paradigm Shifts: Detect tectonic plate movements—like foundational AI agents—and pivot company architecture before competitors make you obsolete."
      ],
      "case_study_tr": "Geleneksel bir lojistik şirketi batmak üzereydi çünkü rakipleri yapay zeka ile rota optimizasyonu yapıyordu. Şirketin kıdemli Team Lead'i Selçuk, CEO'nun karşısına çıktı ve 3 yıllık 'Otonom Lojistik ve AI Dönüşüm Manifestosu' sundu. Şirketin tüm eski filo yazılımını modernize edecek planı sundu. CEO onu CTO koltuğuna getirdi. Selçuk şirketi 2 yılda bölgenin en teknolojik lojistik platformuna dönüştürdü; şirketin cirosu 4 katına çıktı ve 100 milyon dolarlık rekor değerlemeyle yabancı bir fona satıldı.",
      "case_study_en": "A legacy freight enterprise faced bankruptcy as digital native competitors deployed automated routing models. Senior lead Selcuk bypassed tactical status meetings to pitch the Board a bold 3-year 'Autonomous Freight Transformation Plan.' The Board named him Chief Technology Officer. Selcuk modernized legacy fleet systems, engineered real-time agent dispatchers, and quad-doubled EBITDA. The company was acquired for $100M.",
      "ai_prompts": [
        {
          "title": "CTO Seviyesi 3 Yıllık Teknoloji Stratejisi ve Dönüşüm Manifestosu",
          "prompt": "Ben bir yazılım şirketinde CTO koltuğuna hazırlanan bir Mühendislik Direktörüyüm. Şirketimiz şu sektörde faaliyet göstermektedir: [SEKTÖR: E-ticaret / Fintech / SaaS]. Yönetim Kuruluna sunulmak üzere 3 yıllık bir 'Stratejik Teknoloji ve AI Dönüşüm Manifestosu' hazırla. Şunları içersin: 1) Sektördeki AI tehditleri ve fırsatları, 2) 3 yıllık mimari modernizasyon fazları, 3) Sermaye tahsisi ve ROI projeksiyonu, 4) Şirketi en iyi mühendislerin çalışmak istediği bir mıknatısa dönüştürecek kültür vizyonu."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 'Kod yazmayı bırakan yazılımcı ne iş yapar?' sorusuna yanıt arayan iki uzman. Bir Team Lead'in nasıl adım adım düşünce ufkunu genişleterek bir şirketin kaderini belirleyen bir CTO'ya dönüştüğü üzerine ilham dolu ve ufuk açıcı bir diyalog.",
      "udemy_outline": [
        "00:00 - Zirveye Yolculuk: Team Lead'likten CTO Koltuğuna",
        "04:15 - Üç Ayaklı CTO Taburesi (İş, Teknoloji, İnsan)",
        "08:35 - Sermaye Tahsisi: Mühendislik Bütçesini Yatırımcı Gibi Yönetmek",
        "13:20 - Egzersiz: Şirketiniz için 3 yıllık 1 sayfalık 'CTO Teknoloji Vizyon Belgesi' yazın"
      ]
    },
    {
      "id": 60,
      "module_id": 10,
      "module_title_tr": "Bölüm 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa",
      "module_title_en": "Module 10: The Executive Horizon: From Lead to VP & CTO",
      "title_tr": "Ders 60: Geleceğin Yazılım Mühendisliği Ekosistemi: İnsan-Yapay Zeka Ortaklığı Manifestosu",
      "title_en": "Lesson 60: The Future of Engineering: The Human-AI Symbiosis Manifesto",
      "level": "Yönetici / Director Level",
      "summary_tr": "Yolculuğun son dersi ve yeni dönemin başlangıcı: Yazılım mühendisliği ölmüyor, kabuk değiştiriyor. İnsanın empati, yaratıcılık ve sistem aklıyla; yapay zekanın sonsuz hızının birleştiği büyük gelecek manifestosu.",
      "summary_en": "The capstone manifesto: Software engineering is not dying—it is undergoing its greatest metamorphosis. Uniting human empathy, creativity, and system ethics with boundless AI execution.",
      "eli5_metaphor_tr": "İnsanlığın ateşi bulduğu gün çiğ et yemek bitti ve medeniyet başladı. Elektriğin bulunduğu gün karanlık bitti ve sanayi devrimi başladı. Yapay zeka yazılımın elektriğidir. Karanlıkta tek tek tuşlara basıp kod ameleliği yaptığımız ilkel dönem bitti; artık yapay zekanın ışığında galaksileri inşa eden modern mimarlar olma çağı başladı.",
      "eli5_metaphor_en": "The discovery of fire ended raw survival and ignited civilization. The harnessing of electricity banished darkness and birthed modern industry. AI is the electricity of software engineering. The primitive age of manual syntax labor is drawing to a close; the era of architectural human-AI symbiosis has arrived.",
      "comparison_table": [
        {
          "topic": "Mühendislik Tanımı",
          "old_way": "Kod yazan, döngü kuran, syntax ezberleyen insan teknisyen.",
          "ai_way": "Karmaşık problemleri anlayan, empati kuran, sistemleri tasarlayan ve AI ordusunu yöneten orkestra şefi."
        },
        {
          "topic": "Gelecek Korkusu",
          "old_way": "'Yapay zeka beni işsiz bırakacak' korkusuyla teknolojiye direnmek.",
          "ai_way": "'Yapay zekayı kullanan mühendisler, kullanmayanların yerini alacak' bilinciyle öncü olmak."
        },
        {
          "topic": "Kalıcı Değer",
          "old_way": "Ezberlenmiş programlama dili bilgisi.",
          "ai_way": "Karakter, etik, eleştirel düşünme, sistem tasarımı ve insani liderlik."
        }
      ],
      "framework_steps_tr": [
        "1. İnsan-AI Simbiyozu Manifestosu: Yapay zeka kuluçkadaki motorumuzdur; ancak direksiyon, ahlak, yön ve vizyon daima insanın elindedir.",
        "2. Asla Vazgeçilmeyecek İnsani Süper Güçler: 1) Derin Empati (Kullanıcının gerçek acısını hissetmek), 2) Eleştirel Şüphecilik (AI çıktısını sorgulamak), 3) Yaratıcı Cesaret (Henüz var olmayan mimarileri hayal etmek).",
        "3. Öğrenmeyi Öğrenmek: Geleceğin en büyük lideri en çok şeyi bilen değil; yeni bir paradigmayı en hızlı öğrenip takımına aşılayandır.",
        "4. Mezuniyet Andı: Bugünden itibaren klavyene sadece kod yazmak için değil; insanlara ilham vermek, sistemleri adil kılmak ve dünyayı daha iyi bir yer haline getirmek için dokunacaksın."
      ],
      "framework_steps_en": [
        "1. The Human-AI Symbiosis Manifesto: AI is our hyper-drive propulsion; ethical judgment, compass heading, and moral purpose belong strictly to humanity.",
        "2. The Irreplaceable Human Moats: 1) Radical Empathy (Feeling raw customer anguish), 2) Relentless Skepticism (Auditing model veracity), 3) Creative Audacity (Imagining architectures that do not yet exist).",
        "3. Meta-Learning: The supreme leader of the future is not the walking encyclopedia, but the rapid paradigm synthesist who elevates their entire organization.",
        "4. The Leader's Oath: From this day forward, touch your terminal not merely to generate syntax, but to inspire human beings, govern systems with integrity, and build enduring technology."
      ],
      "case_study_tr": "Bir yazılım mühendisi 10 yıl boyunca 'Sadece kodumu yazarım, gerisine karışmam' diyerek yaşadı. AI çıktığında derin bir varoluşsal krize girdi. Bu kitabın ilk dersinden son dersine kadar olan metodolojileri uyguladı: İletişimini güçlendirdi, mimari vizyon kazandı, takımına AI guardrail'ları kurdu ve organizasyonel bir lider haline geldi. 1 yıl sonra şirketin Mühendislik Direktörlüğüne terfi ettiğinde ekibine şöyle dedi: 'Yapay zeka kodumu elimden almadı; yapay zeka beni kod ameleliğinden kurtarıp gerçek bir mühendis ve lider yaptı.'",
      "case_study_en": "A developer spent 10 years hiding behind screens whispering: 'I just write code; leave me alone.' When generative models dropped, existential terror paralyzed him. Over 12 months, he adopted the zero-to-hero curriculum of this book: refined human empathy, mastered system boundary modeling, deployed automated agent guardrails, and stepped into servant leadership. Promoted to VP of Engineering, he addressed his organization: 'AI did not take my job; AI liberated me from syntax drudgery to become the leader and architect I was always meant to be.'",
      "ai_prompts": [
        {
          "title": "AI Çağında Yazılım Liderliği Nihai Yemini ve Gelecek Manifestosu",
          "prompt": "Bu kitabı tamamlayan bir yazılım lideri olarak kendime ve takımıma rehberlik edecek 'İnsan-AI Ortaklığı ve Mühendislik Liderliği Manifestosu' hazırla. Şunları içersin: 1) Kod yazmaktan sistem tasarlamaya geçiş andı, 2) Yapay zekayı bir köle veya tehdit değil, güçlü bir çarpan olarak kullanma ilkeleri, 3) İnsan onurunu, psikolojik güvenliği ve sürekli öğrenmeyi koruma taahhüdü, 4) Son söz: Geleceğe cesaretle adım atma çağrısı."
        }
      ],
      "notebooklm_prompts": "İki sunucu: 60 derslik bu devasa serüvenin muhteşem finali. İlk dersteki o korku dolu, klavyeyi bırakamayan kıdemli yazılımcıdan; multi-agent ordularını yöneten, C-Level ile aynı dili konuşan, ilham veren bir lidere dönüşümün epik hikayesi. Gözleri dolduran, güldüren ve ayağa kalkıp harekete geçiren unutulmaz bir veda ve başlangıç bölümü.",
      "udemy_outline": [
        "00:00 - Büyük Final: 60 Derslik Yolculuğun Zirvesi",
        "04:15 - İnsan-Yapay Zeka Ortaklığı Manifestosu",
        "08:35 - Geleceğin Yazılım Liderinin 3 Süper Gücü",
        "13:20 - Mezuniyet Egzersizi: Kendi Kişisel Liderlik Manifestonuzu İmzalayın!"
      ]
    }
  ]
};