# Lesson 26: TDD in the AI Era: Mutation Testing & Prompt-Driven Specification

> **Module 5: Autonomous Pipelines, CI/CD & Agentic Dev** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Did AI kill TDD or unleash its golden age? The human writes the executable specification, the AI synthesizes the code, and mutation tests verify truth.

---

### 💡 ELI5 Metaphor & Intuitive Story
> You are a master architect providing an exact laser mold: 'The table must measure exactly 120 cm with 4 load-bearing legs.' The automated machine (AI) shapes the wood instantly. You place it in the mold: if it clicks in, it ships. Without the mold, you have no clue if the table fits the dining room.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **TDD Rol Dağılımı** | Aynı mühendisin hem testi hem kodu yazması (zihinsel yorgunluk ve önyargı). | İnsan mühendisin kusursuz test senaryolarını yazması; AI'ın testi geçecek kodu üretmesi. |
| **Test Kalitesi Ölçümü** | Sadece Code Coverage yüzdesine bakmak (boş testler bile %100 gösterir). | Mutation Testing (Pitest/Stryker) ile testlerin kodu gerçekten denetleyip denetlemediğini ölçmek. |
| **Geliştirme Hızı** | TDD'nin 'zaman kaybı' olarak görülmesi. | AI ile kod üretildiği için TDD döngüsünün 10 kat hızlanması. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. The AI Red-Green-Refactor Cycle: 1) Human engineers the executable spec (Red), 2) LLM synthesizes implementation (Green), 3) Human & AI optimize (Refactor).
- 2. Tests as Unambiguous Prompts: Unit tests are the highest-fidelity, zero-ambiguity prompts you can ever feed to an LLM.
- 3. Mutation Testing Validation: Run Stryker or Pitest to inject intentional defects into the code. If your tests stay green, your tests are worthless vanity.
- 4. Beware Over-Mocking: Avoid fragile mock-everything testing; verify domain aggregates with real instances and external systems via Testcontainers.

---

### 🚨 Real-World War Story / Case Study
Developers at a payments provider abandoned TDD, claiming it crippled speed. Production regressions escalated. Lead Burcu hosted an 'AI-Driven TDD Hackathon': engineers wrote comprehensive unit tests first, then instructed Cursor: 'Generate minimal code passing these exact specs.' Developers realized implementation time shrank by 70%, with zero regressions on deploy. TDD adoption leaped to 100%.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ TDD Test Senaryosundan Kod Üretici ve Refactor Motoru
```text
Aşağıda yeni bir iş kuralı için yazdığım JUnit 5 / Jest testleri yer almaktadır: [TEST KODU]. Bu testler şu an patlamaktadır (RED). 1) Bu testleri başarıyla geçirecek (GREEN) en sade, temiz ve SOLID uyumlu kodu yaz, 2) Kodu over-engineering yapmadan minimal tut, 3) Testin kaçırmış olabileceği 2 kritik sınır durum (edge-case) için ek test senaryosu öner.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'TDD öldü mü?' tartışmasını yapan iki yazılımcı. AI çağında test yazmanın neden bir angarya değil, yapay zekayı yöneten bir sihirli değnek haline geldiğini anlatan coşkulu ve esprili bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - TDD'nin Yeniden Doğuşu: Testler Artık En Güçlü Prompt!
- 04:15 - AI Destekli Red-Green-Refactor Döngüsü
- 08:30 - Mutasyon Testi Nedir? Sahte Testleri İfşa Etmek
- 13:40 - Egzersiz: 3 test yazıp AI'a kodu ürettirerek ilk TDD döngünüzü tamamlayın
