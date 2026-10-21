# Lesson 27: Standardizing .cursorrules, System Prompts & Team AI Configs

> **Module 5: Autonomous Pipelines, CI/CD & Agentic Dev** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Ending chaotic prompt divergence: Centralizing team engineering standards via `.cursorrules`, copilot instructions, and shared agent configs checked into Git.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Handing every musician in an orchestra a different symphony score creates unbearable cacophony. A `.cursorrules` file is the unified sheet music: it instructs every AI pair-programmer on exact architectural patterns, forbidden libraries, and test conventions.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Prompt Kalitesi** | Her mühendisin AI'a kafasına göre 'Şunu yaz' diye rastgele prompt atması. | Repoda commit'lenmiş kurallar sayesinde AI'ın projenin mimarisini ve kurallarını otomatik bilmesi. |
| **Mimari Tutarlılık** | AI'ın projede Lombok varken elle getter-setter yazması veya eski kütüphaneleri getirmesi. | Kurallar dosyasında yasaklı pattern'ların belirtilmesi sayesinde sıfır tutarsızlık. |
| **Onboarding** | Yeni gelen yazılımcının takım standartlarını öğrenmek için aylarca debelenmesi. | IDE'yi açtığı ilk dakika AI'ın takım standartlarına uygun kod üretmeye başlaması. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Single Source of Context: Commit `.cursorrules` or `.github/copilot-instructions.md` into the repository root.
- 2. Explicit Negative Constraints: Ban vague wishes like 'write clean code'; enforce 'Always use Java 21 Records, never Lombok `@Data`, return domain results.'
- 3. The Banned Dependencies Blocklist: Explicitly list forbidden libraries and deprecated patterns in the config file.
- 4. Treat Prompts as Code: System configs must evolve via Pull Requests, subjected to team code reviews and semantic versioning.

---

### 🚨 Real-World War Story / Case Study
In an iOS fintech project, half the team used modern Swift Concurrency (async/await) while the other half generated legacy Combine publishers because their individual AI assistants suggested different styles. Code became unmaintainable. Lead Mert committed a concise 40-line `.cursorrules` file forbidding Combine and locking in async/await standards. Within one sprint, 100% of generated code unified.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Üretim Düzeyinde .cursorrules ve Copilot Instruction Üretici
```text
Biz şu teknoloji yığınını kullanan profesyonel bir ekibiz: [DİL, FRAMEWORK, DB, TEST KÜTÜPHANESİ]. Ekibimiz için projenin kök dizinine konulacak kusursuz bir `.cursorrules` dosyası hazırla. Şunları içersin: 1) Kod stili ve mimari katman kuralları, 2) Kesinlikle yasaklanmış (deprecated) pattern'lar ve kütüphaneler, 3) Test yazma standartları (Given-When-Then), 4) Git commit ve PR formatı.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: Projesine `.cursorrules` koymayan bir takımda yaşanan 'Babil Kulesi' karmaşası. Herkesin AI'ının farklı bir dilde kod ürettiği komedi ve 40 satırlık bir kural dosyasının bir takımı nasıl kaostan kurtardığı üzerine keyifli bir analiz.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - AI ile Babil Kulesi Sendromu: Mimari Tutarsızlık
- 04:10 - `.cursorrules` ve Copilot Instructions Anatomisi
- 08:35 - Yasaklı Pattern'lar: AI'a 'Ne Yapmaması Gerektiğini' Söylemek
- 13:20 - Egzersiz: Takımınızın reposu için ilk resmi `.cursorrules` dosyasını oluşturun
