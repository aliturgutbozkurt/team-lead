# -*- coding: utf-8 -*-
"""
Modules 09 & 10:
Module 9: Takım İçi AI Ekosistemi ve Ajan Mimarileri Kurmak (Engineering the Team's AI Agent Infrastructure)
Module 10: Liderin Kendi Geleceği: Team Lead'likten VP of Eng & CTO'luğa (The Executive Horizon: From Lead to VP & CTO)
"""

LESSONS_09_10 = [
    # LESSON 49
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
            {"topic": "Veri Güvenliği", "old_way": "Yazılımcıların müşteri kredi kartı loglarını izinsiz açık ChatGPT'ye yapıştırması.", "ai_way": "LiteLLM Proxy üzerinde çalışan otomatik PII Redaction (Veri Maskeleme) ile sıfır sızıntı."},
            {"topic": "Model Barındırma", "old_way": "Sadece dış API'lara bağımlı olmak (İnternet veya sağlayıcı kopunca işin durması).", "ai_way": "Kritik servislerde kurum içi sunucularda koşan açık kaynaklı modeller (Llama 3.3, Qwen, DeepSeek)."},
            {"topic": "Maliyet ve Denetim", "old_way": "Kimin hangi modele ne kadar token harcadığının bilinememesi.", "ai_way": "Merkezi Gateway üzerinden kullanıcı bazlı kota, bütçe ve log denetimi."}
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

    # LESSON 50
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
            {"topic": "Yaklaşım", "old_way": "'Sen kıdemli yazılımcısın, lütfen kodu hatasız yaz' gibi süslü laflar (Prompt Eng).", "ai_way": "İlgili DTO'lar, DB şeması, son hata logu ve testleri dinamik bağlam olarak enjekte etmek (Context Eng)."},
            {"topic": "Hata Sebebi", "old_way": "'Model aptal, halüsinasyon gördü' diye modele kızmak.", "ai_way": "'Biz modele doğru bağlamı ve kısıtları veremedik' diyerek veri akışını düzeltmek."},
            {"topic": "Bağlam Yönetimi", "old_way": "Tüm repoyu rastgele LLM penceresine tıkıp modelin aklını karıştırmak.", "ai_way": "Sadece gerekli 200 satırlık dilimi cerrahi hassasiyetle seçen akıllı RAG ve parser'lar."}
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

    # LESSON 51
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
            {"topic": "Mimari", "old_way": "Tek bir dev promptla kod, test, dokümantasyon ve güvenlik istemek (Modelin saçmalaması).", "ai_way": "Her ajanın tek bir görevi ve çıktısını diğer ajana aktardığı deterministik iş akışı."},
            {"topic": "Hata Yakalama", "old_way": "Modelin kendi hatasını görememesi (kendi yazdığı koda 'harika' demesi).", "ai_way": "Test Ajanı ve Güvenlik Ajanının Kodlayan Ajanı acımasızca eleştirip kodu reddetmesi."},
            {"topic": "Kalite Çıktısı", "old_way": "Orta kalitede yüzeysel çözümler.", "ai_way": "İnsan müdahalesi olmadan 4 denetimden geçmiş, testleri yazılmış üretim kalitesinde kod."}
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

    # LESSON 52
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
            {"topic": "Kalite Kararı", "old_way": "Geliştiricinin 3 prompt deneyip 'Güzel çalışıyor' diyerek canlıya basması (Vibes-based).", "ai_way": "100 adet gerçek test vakasından oluşan Eval veri setinde %94 başarı puanı alma şartı."},
            {"topic": "Regresyon Tespiti", "old_way": "Promptu değiştirince başka bir özelliğin bozulduğunu müşterilerden öğrenmek.", "ai_way": "CI/CD hattında çalışan otomatik eval testleri ile anında kırmızı alarm almak."},
            {"topic": "Değerlendirme Hakemi", "old_way": "İnsanların yüzlerce satır çıktıyı tek tek okumaya çalışıp yorulması.", "ai_way": "Katı bir rubrikle puanlama yapan tarafsız LLM-as-a-Judge mimarisi."}
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

    # LESSON 53
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
            {"topic": "Bilgi Kaynağı", "old_way": "Her yeni bilgide modeli tekrar eğitmeye (Fine-Tuning) çalışıp batmak.", "ai_way": "Dinamik şirket verileri için RAG, format ve üslup için hafif Fine-Tuning kullanmak."},
            {"topic": "Maliyet ve Bakım", "old_way": "Aylarca GPU kirası ödeyip modeli sürekli drift ile uğraştırmak.", "ai_way": "Vektör veritabanı (Qdrant/Pinecone) ve anlık context enjeksiyonu ile %90 daha ucuza çözmek."},
            {"topic": "Güncellik Hızı", "old_way": "Statik model ağırlıklarının ilk haftada eskimesi.", "ai_way": "Doküman değiştiği an saniyesinde güncellenen RAG indeksleri."}
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

    # LESSON 54
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
            {"topic": "Telif Riski", "old_way": "Yazılımcıların AI çıktısını kontrolsüzce şirketin patentli ürününe yapıştırması.", "ai_way": "Telif hakları filtreleri açık (Public Code Match: OFF) ve lisans taraması zorunlu geliştirme."},
            {"topic": "Model Eğitimi İzni", "old_way": "Ücretsiz AI servislerine veri verip şirketin gizli algoritmalarını üçüncü partilere eğitmek.", "ai_way": "'Zero Data Retention' (ZDR) kurumsal sözleşmeleri ile verinin model eğitiminde kullanılmasını yasal olarak yasaklamak."},
            {"topic": "Etik ve Önyargı", "old_way": "Kredi veya işe alım algoritmalarındaki cinsiyet/ırk önyargılarını umursamamak.", "ai_way": "Yapay zeka modellerine düzenli Fairness ve Bias testleri uygulamak."}
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

    # LESSON 55
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
            {"topic": "Yönetim Tarzı", "old_way": "Kontrol (Control): 'Nasıl yapacağını ben söyleyeceğim, sadece dediklerimi yap.'", "ai_way": "Bağlam (Context): 'Hedefimiz bu, kısıtlarımız bunlar; nasıl çözeceğinizi siz belirleyin.'"},
            {"topic": "Hata Durumunda", "old_way": "Mühendisi azarlayıp tüm yetkilerini elinden almak.", "ai_way": "Extreme Ownership: 'Lider olarak yeterli bağlamı ve guardrail'ı veremediğim için sorumluluk benimdir.'"},
            {"topic": "Takım Hızı", "old_way": "Her karar için lead'in onayının beklenmesi (Devasa darboğaz).", "ai_way": "Otonom hücrelerin (Pods) bağımsız kararlar alıp hızla ilerlemesi."}
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

    # LESSON 56
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
            {"topic": "Bilgi Tüketimi", "old_way": "Günde 3 saat sosyal medyada hype tweetleri okuyup sürekli yetersiz hissetmek (FOMO).", "ai_way": "Haftada 2 saat akademik makale özetleri, resmi release logları ve gerçek vaka analizleri okumak."},
            {"topic": "Teknoloji Seçimi", "old_way": "Her yeni çıkan framework'ü hemen production'a sokup sistemi kobay faresi yapmak.", "ai_way": "Teknolojiyi en az 6 ay izleyip topluluk ve üretim olgunluğuna baktıktan sonra benimsemek."},
            {"topic": "Öğrenme Stratejisi", "old_way": "Yüzeysel araç isimlerini ezberlemek.", "ai_way": "Değişmeyen temel bilgisayar bilimi ilkelerini (Dağıtık sistemler, veri yapıları, mimari) derinleştirmek."}
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

    # LESSON 57
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
            {"topic": "Takım İçi İnovasyon", "old_way": "'Bizde yeni fikirleri sadece ürün yöneticileri düşünür, siz koda bakın.'", "ai_way": "Her çeyrek 2 günlük Hackathon düzenleyip en iyi projeleri doğrudan production'a almak."},
            {"topic": "Bilgi Paylaşımı", "old_way": "Takımların birbirinden habersiz, kendi silolarında yaşaması.", "ai_way": "Frontend, Backend, AI ve Güvenlik Guildleri kurup şirket çapında standartları yaymak."},
            {"topic": "Motivasyon Kaynağı", "old_way": "Sadece maaş ve zorunlu mesai baskısı.", "ai_way": "Teknik prestij, öğrenme heyecanı ve patent/açık kaynak üretme gururu."}
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

    # LESSON 58
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
            {"topic": "Yönetim Kapsamı", "old_way": "Her takımdaki her yazılımcının biletini ve 1-on-1'ını tek tek yapmaya çalışıp boğulmak.", "ai_way": "Takım liderleri ve Staff mühendisler üzerinden kaldıraçlı liderlik yapmak."},
            {"topic": "Karar Mekanizması", "old_way": "Tüm mimari kararları yukarıdan dikte etmek (Fildişi kule mimarlığı).", "ai_way": "Staff mühendislerle 'Mimari Konsey' (Architecture Review Board) kurup konsensüsle ilerlemek."},
            {"topic": "İletişim Ritmi", "old_way": "Haftada 40 saat toplantı maratonunda erimek.", "ai_way": "Asenkron durum panoları, AI çapraz bağımlılık analizleri ve haftalık 1 strateji brifingi."}
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

    # LESSON 59
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
            {"topic": "Zaman Ufku", "old_way": "Gelecek sprint veya gelecek ay (Taktiksel).", "ai_way": "Önümüzdeki 2 ila 5 yılın teknoloji ve iş vizyonu (Stratejik)."},
            {"topic": "Sorumluluk Alanı", "old_way": "Kodun çalışması ve pipeline'ın yeşil olması.", "ai_way": "Şirketin piyasa değeri, karlılığı, regülasyon güvenliği ve sektördeki teknolojik rekabet gücü."},
            {"topic": "Yetenek Odaklılık", "old_way": "Bireysel kodlama becerisi.", "ai_way": "Dünyanın en iyi liderlerini ve mimarlarını şirkete çeken bir kültür ve vizyon inşa etmek."}
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

    # LESSON 60
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
            {"topic": "Mühendislik Tanımı", "old_way": "Kod yazan, döngü kuran, syntax ezberleyen insan teknisyen.", "ai_way": "Karmaşık problemleri anlayan, empati kuran, sistemleri tasarlayan ve AI ordusunu yöneten orkestra şefi."},
            {"topic": "Gelecek Korkusu", "old_way": "'Yapay zeka beni işsiz bırakacak' korkusuyla teknolojiye direnmek.", "ai_way": "'Yapay zekayı kullanan mühendisler, kullanmayanların yerini alacak' bilinciyle öncü olmak."},
            {"topic": "Kalıcı Değer", "old_way": "Ezberlenmiş programlama dili bilgisi.", "ai_way": "Karakter, etik, eleştirel düşünme, sistem tasarımı ve insani liderlik."}
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
