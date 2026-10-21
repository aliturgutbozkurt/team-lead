# Lesson 50: Context Engineering: System Prompts, Repositories & Dynamic Context Injection

> **Module 9: Engineering the Team's AI Agent Infrastructure** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Executive Summary & Mindset Shift
Prompt engineering is trivial; Context Engineering is the real discipline: Assembling the precise dynamic state, schema slice, and architectural boundaries an LLM needs to act flawlessly.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Telling a defense attorney walking into court: 'Win this trial!' is a useless prompt. Handing that attorney the exact police ballistics report, security camera timestamps, and precedent rulings (Context Engineering) guarantees victory. LLMs without context are just hallucinating blowhards.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Yaklaşım** | 'Sen kıdemli yazılımcısın, lütfen kodu hatasız yaz' gibi süslü laflar (Prompt Eng). | İlgili DTO'lar, DB şeması, son hata logu ve testleri dinamik bağlam olarak enjekte etmek (Context Eng). |
| **Hata Sebebi** | 'Model aptal, halüsinasyon gördü' diye modele kızmak. | 'Biz modele doğru bağlamı ve kısıtları veremedik' diyerek veri akışını düzeltmek. |
| **Bağlam Yönetimi** | Tüm repoyu rastgele LLM penceresine tıkıp modelin aklını karıştırmak. | Sadece gerekli 200 satırlık dilimi cerrahi hassasiyetle seçen akıllı RAG ve parser'lar. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Garbage In, Garbage Out: Model fidelity depends on context purity, not flamboyant adjectives in your prompt.
- 2. Dynamic Context Injection: Author CLI tools that gather open editor buffers, git diffs, and Jira acceptance criteria into a surgical prompt envelope.
- 3. System Prompts as Versioned Code: Maintain prompt registries in Git; test prompt mutations against evaluation suites before deployment.
- 4. Token Window Budgeting: Allocate your 100K token budget: 10% System invariants, 60% dynamic code/schema context, 10% query, 20% generation headroom.

---

### 🚨 Real-World War Story / Case Study
Developers at an e-commerce squad grumbled: 'Claude keeps hallucinating nonexistent methods in our codebase.' Lead Ceyda discovered they were issuing naive prompts without context. She authored a custom internal CLI (`team-ctx`) that parsed AST call-graphs, database schemas, and OpenAPI contracts into a structured context bundle. Hallucinations plummeted by 80%; first-compile success hit 92%.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Dinamik Context Assembler ve Sistem Promptu Optimizatörü
```text
Bir yazılım takımı için Bağlam Mühendisliği (Context Engineering) şablonu tasarlıyoruz. Şu bilgileri girdi olarak alıp en optimize bağlam zarfını (Context Envelope) üreten bir yapı kur: 1) Sistem Kuralları (Maksimum 500 token), 2) İlgili Veritabanı Şeması ve DTO'lar, 3) 2 adet kusursuz Few-Shot örnek, 4) Kullanıcının spesifik task'ı. Bu bağlamın neden halüsinasyonu sıfırladığını açıkla.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Prompt mühendisliği bitti mi?' tartışması. Süslü prompt yazarları ile veriyi ve bağlamı doğru kurgulayan gerçek sistem mimarları arasındaki fark üzerine ufuk açıcı bir diyalog.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Prompt Engineering Efsanesi vs. Context Engineering Gerçeği
- 04:15 - Bağlam Zarfı (Context Envelope) Mimarisi
- 08:35 - Token Bütçesini Yönetmek: Halüsinasyonu Matematikle Engellemek
- 13:20 - Egzersiz: Takımınız için otomatik bağlam toplayan 1 sayfalık script yazın
