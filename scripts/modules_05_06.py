# -*- coding: utf-8 -*-
"""
Modules 05 & 06:
Module 5: Otonom Geliştirme Hatları: CI/CD, GitOps & AI Ajanları (Autonomous Pipelines, CI/CD & Agentic Dev)
Module 6: İşe Alım, Onboarding ve Yetenek Yönetimi (AI-Era Hiring, Onboarding & Talent Strategy)
"""

LESSONS_05_06 = [
    # LESSON 25
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
            {"topic": "Kırmızı Build Tavrı", "old_way": "'Başka biri düzeltir' deyip görmezden gelmek, üstüne kod merge etmek.", "ai_way": "Pipeline patladığı an master branch'e merge'ü kilitlemek ve AI botunun PR sahibine anında kök neden ve yama göndermesi."},
            {"topic": "Flaky Testler", "old_way": "Rastgele patlayan testleri `@Ignore` edip halının altına süpürmek.", "ai_way": "AI ile flaky testleri otomatik karantinaya alıp zamanlama/async hatalarını düzeltmek."},
            {"topic": "Build Süresi", "old_way": "45 dakika süren hantal build ve test adımları.", "ai_way": "Değişen dosyalara göre sadece etkilenen testleri koşan akıllı test seçimi (Test Impact Analysis) ile 4 dakika."}
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

    # LESSON 26
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
            {"topic": "TDD Rol Dağılımı", "old_way": "Aynı mühendisin hem testi hem kodu yazması (zihinsel yorgunluk ve önyargı).", "ai_way": "İnsan mühendisin kusursuz test senaryolarını yazması; AI'ın testi geçecek kodu üretmesi."},
            {"topic": "Test Kalitesi Ölçümü", "old_way": "Sadece Code Coverage yüzdesine bakmak (boş testler bile %100 gösterir).", "ai_way": "Mutation Testing (Pitest/Stryker) ile testlerin kodu gerçekten denetleyip denetlemediğini ölçmek."},
            {"topic": "Geliştirme Hızı", "old_way": "TDD'nin 'zaman kaybı' olarak görülmesi.", "ai_way": "AI ile kod üretildiği için TDD döngüsünün 10 kat hızlanması."}
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

    # LESSON 27
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
            {"topic": "Prompt Kalitesi", "old_way": "Her mühendisin AI'a kafasına göre 'Şunu yaz' diye rastgele prompt atması.", "ai_way": "Repoda commit'lenmiş kurallar sayesinde AI'ın projenin mimarisini ve kurallarını otomatik bilmesi."},
            {"topic": "Mimari Tutarlılık", "old_way": "AI'ın projede Lombok varken elle getter-setter yazması veya eski kütüphaneleri getirmesi.", "ai_way": "Kurallar dosyasında yasaklı pattern'ların belirtilmesi sayesinde sıfır tutarsızlık."},
            {"topic": "Onboarding", "old_way": "Yeni gelen yazılımcının takım standartlarını öğrenmek için aylarca debelenmesi.", "ai_way": "IDE'yi açtığı ilk dakika AI'ın takım standartlarına uygun kod üretmeye başlaması."}
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

    # LESSON 28
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
            {"topic": "Kod Tabanını Anlama", "old_way": "Senior mühendisin 'O kısma Ahmet bakıyordu, ona sor' demesi (Ahmet tatile gidince tıkanmak).", "ai_way": "Kod tabanı RAG sistemine doğal dille soru sorup dosya ve satır referanslarıyla anında yanıt almak."},
            {"topic": "İndeksleme", "old_way": "Sadece düz metin arama (grep / ctrl+f) ile kelime eşleştirmek.", "ai_way": "AST (Abstract Syntax Tree) ve semantik vektör embedding'leri ile mimari bağıntıları sorgulamak."},
            {"topic": "Güvenlik", "old_way": "Şirket kodlarını izinsiz açık LLM'lere yapıştırma riski.", "ai_way": "Yerel (On-premise / VPC içi) embedding ve RAG modelleriyle sıfır veri sızıntısı."}
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

    # LESSON 29
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
            {"topic": "Hata Çözüm Süresi", "old_way": "Bug'ın Jira'ya düşmesi, sprint planlamasını beklemesi (ortalama 2 hafta).", "ai_way": "Otonom ajanın gece hatayı analiz edip sabah 08:00'de test edilmiş PR ile karşına çıkarması."},
            {"topic": "Repro Testi", "old_way": "Geliştiricinin hatayı lokalinde yeniden canlandırmak (reproduce) için saatlerce uğraşması.", "ai_way": "Ajanın prod hata logundan otomatik bir unit/integration testi üretmesi."},
            {"topic": "İnsan Rolü", "old_way": "Yazılımcının tüm gece log kazıyıp stres yaşaması.", "ai_way": "Yazılımcının sadece sabah kahvesini içerken açılan PR'ı ve test sonuçlarını onaylaması."}
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

    # LESSON 30
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
            {"topic": "Doküman Güncelliği", "old_way": "Confluence'taki mimari diyagramların 2021 yılından kalması ve yanlış yönlendirmesi.", "ai_way": "Her git commit ve PR merge anında otomatik güncellenen Mermaid.js diyagramları."},
            {"topic": "Yazma Sorumluluğu", "old_way": "Yazılımcıların doküman yazmaktan nefret etmesi ve sürekli ertelemesi.", "ai_way": "Koddan ve testlerden beslenen AI pipeline'ının dokümantasyonu otomatik derlemesi."},
            {"topic": "Erişilebilirlik", "old_way": "PDF ve dağınık Confluence klasörlerinde bilgi aramak.", "ai_way": "Repo içinde kodla yan yana yaşayan, interaktif ve doğrulanabilir markdown belgeleri."}
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

    # LESSON 31
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
            {"topic": "Mülakat Sorusu", "old_way": "LeetCode Medium/Hard algoritmalarını tahtada ezbere yazdırmak.", "ai_way": "Gerçek bir prod bug'ını veya mimari açığı verip adayın AI ile bunu nasıl çözdüğünü izlemek."},
            {"topic": "AI Araç Kullanımı", "old_way": "'Google ve ChatGPT kullanmak yasaktır' deyip adayı körleştirmek.", "ai_way": "'Cursor veya Claude kullanmak serbesttir; çözümü nasıl yönettiğinizi görelim' demek."},
            {"topic": "Ölçülen Beceriler", "old_way": "Sentaks ezberi ve anlık stres yönetimi.", "ai_way": "Mimari muhakeme, kod okuma ve AI halüsinasyonlarını yakalama yeteneği."}
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

    # LESSON 32
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
            {"topic": "Take-Home Formatı", "old_way": "Adaya 3 günlük devasa ödev verip bedava amelelik yaptırmak.", "ai_way": "Maksimum 2 saatlik, sınırları net ve AI kullanımının serbest olduğu odaklı bir problem."},
            {"topic": "Değerlendirme", "old_way": "Kodun çalışıp çalışmadığına bakmak.", "ai_way": "Adayın git commit geçmişine, AI ile konuşma loglarına ve aldığı mimari kararlara bakmak."},
            {"topic": "Canlı Eşleşme", "old_way": "Adayı kamerada tek başına terletip sessizce izlemek.", "ai_way": "Birlikte bir AI ajanını yönlendirerek (Pair-Prompting) problem çözmek."}
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

    # LESSON 33
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
            {"topic": "Ortam Kurulumu", "old_way": "40 sayfalık eski wiki sayfasına bakıp 3 gün boyunca eksik kütüphane aramak.", "ai_way": "DevContainers / Codespaces ile tek tıkla 2 dakikada ayağa kalkan Docker ortamı."},
            {"topic": "İlk Teslimat", "old_way": "Yeni yazılımcının ilk ay sadece izlemesi, koda dokunmaya korkması.", "ai_way": "İlk 24 saat içinde ufak bir düzeltme veya test ile ilk PR'ını açıp kutlamak."},
            {"topic": "Soru Sorma", "old_way": "Kıdemlileri rahatsız etmekten korkup saatlerce ekrana boş bakmak.", "ai_way": "Şirket içi AI Onboarding Botu'na sınırsızca ve çekinmeden soru sormak."}
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

    # LESSON 34
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
            {"topic": "Kıdem Tanımı", "old_way": "'5 yıl tecrübesi olan otomatik olarak Senior olur.'", "ai_way": "Yıl önemsizdir; problem çözme kapsamı (Scope of Impact) ve otonomluk belirler."},
            {"topic": "Junior Rolü", "old_way": "Basit HTML/CSS ve CRUD işleri yazan amele.", "ai_way": "AI eşlikçileriyle tam kapsamlı modül geliştiren, öğrenme hızı yüksek mühendis."},
            {"topic": "Senior / Staff Rolü", "old_way": "En zor fonksiyonları tek başına karanlık odada yazan kişi.", "ai_way": "Mimari sınırları çizen, AI ajanlarını takıma entegre eden ve iş birimleriyle strateji kuran lider."}
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

    # LESSON 35
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
            {"topic": "Yetenek Tespiti", "old_way": "Kimin ne bildiğini bilmemek, kriz anında şans eseri öğrenmek.", "ai_way": "Her çeyrek güncellenen görsel Yetenek Matrisi (Skills Matrix) tutmak."},
            {"topic": "Bus Factor Riski", "old_way": "Ödeme sistemini sadece Ahmet'in bilmesi ve Ahmet'in üzerinde aşırı baskı olması.", "ai_way": "Bilgiyi Ahmet'ten çıkarıp AI destekli dokümana dökmek ve yanına bir yedek mühendis eğitmek."},
            {"topic": "Eğitim Stratejisi", "old_way": "Yılda bir kez kimsenin izlemediği sıkıcı video kursları satın almak.", "ai_way": "Takımın gerçek kod tabanı üzerinde haftalık 1 saatlik hands-on AI pratikleri yapmak."}
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

    # LESSON 36
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
            {"topic": "Toksik Yıldız Tavrı", "old_way": "'Çok iyi kod yazıyor, idare edelim' deyip diğer 5 kişinin istifasını izlemek.", "ai_way": "Net davranış sınırları koymak; düzelmezse ne kadar iyi kod yazarsa yazsın takımdan göndermek."},
            {"topic": "Sessiz Ayrılık (Quiet Quitting)", "old_way": "Tembel deyip etiketlemek ve arkasından dedikodu yapmak.", "ai_way": "Derindeki kırgınlığı veya ilgisizliği 1-on-1 ile anlamak, yeni bir meydan okuma ile enerjisini canlandırmak."},
            {"topic": "Kültür Koruması", "old_way": "Kültürü şirket duvarına asılan süslü afişlerden ibaret sanmak.", "ai_way": "Kültürü 'Hangi davranışları tolere ettiğin ve kimi ödüllendirdiğin' ile inşa etmek."}
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
    }
]
