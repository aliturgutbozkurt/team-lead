# Lesson 51: Multi-Agent Software Squads: Orchestrating Planner, Coder, Tester & Reviewer Agents

> **Module 9: Engineering the Team's AI Agent Infrastructure** | *Seviye / Level: Yönetici / Director Level*

---

### 📌 Executive Summary & Mindset Shift
Moving beyond single-prompt monolithic assistants: Orchestrating specialized multi-agent swarms with distinct roles: Planner, Architect, Coder, Tester, and SecOps Auditor.

---

### 💡 ELI5 Metaphor & Intuitive Story
> A restaurant where a single person takes reservations, cooks the steak, pours the wine, washes dishes, and balances the books will burn down. When you deploy a kitchen brigade—Head Chef plans, Sous Chef preps, Line Cook fires, Sommelier pairs, and Expeditor inspects—you earn Michelin stars. Multi-agent architecture is that kitchen brigade.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Mimari** | Tek bir dev promptla kod, test, dokümantasyon ve güvenlik istemek (Modelin saçmalaması). | Her ajanın tek bir görevi ve çıktısını diğer ajana aktardığı deterministik iş akışı. |
| **Hata Yakalama** | Modelin kendi hatasını görememesi (kendi yazdığı koda 'harika' demesi). | Test Ajanı ve Güvenlik Ajanının Kodlayan Ajanı acımasızca eleştirip kodu reddetmesi. |
| **Kalite Çıktısı** | Orta kalitede yüzeysel çözümler. | İnsan müdahalesi olmadan 4 denetimden geçmiş, testleri yazılmış üretim kalitesinde kod. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Separation of Concerns Brigade: 1) Planner (Decomposes Jira specs), 2) Architect (Enforces ADR boundaries), 3) Coder (Generates implementation), 4) Tester (Authors mutation tests), 5) Reviewer (Applies PR checklists).
- 2. State Machine Coordination: Wire agent transitions and message memory through stateful frameworks like LangGraph or temporal workflows.
- 3. Autonomous Rejection Loops: When Tester or SecOps rejects output, the patch routes back to Coder agent with execution logs—zero human interruption required.
- 4. Mandatory Human-in-the-Loop Gate: The multi-agent swarm produces a pull request; the human lead retains exclusive authority to merge.

---

### 🚨 Real-World War Story / Case Study
Updating fiscal tax calculation rules previously consumed two weeks of senior engineering per quarter. Lead Baris orchestrated a 3-agent LangGraph pipeline: Agent 1 parsed statutory legal text into JSON edge-case test matrices; Agent 2 synthesized Python domain logic; Agent 3 executed mutation coverage and static audits. A two-week manual grind shrank to 35 minutes with flawless mathematical accuracy.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ Multi-Agent Yazılım Geliştirme Orkestrasyon Şablonu
```text
Biz bir yazılım takımında şu görevi otonom ajanlarla çözmek istiyoruz: [GÖREV TANIMI]. Bana LangGraph / CrewAI mantığıyla çalışan 4 ajanlı bir mimari kur: 1) Planner Agent sistem promptu ve çıktı formatı, 2) Coder Agent sistem promptu, 3) Critic & Tester Agent sistem promptu, 4) Ajanlar arasındaki geri besleme (feedback loop) ve insan onay kapısı (Human-in-the-Loop) kuralları.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Geleceğin yazılım takımı: 1 insan lider ve 10 sanal AI ajan!' Bu vizyon ne kadar gerçekçi? Ajanların birbiriyle kavga edip sonsuz döngüye girmesi komedisi ve multi-agent mimarilerin doğru tasarımı üzerine nefis bir bölüm.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Tek Prompt Devri Bitti: Multi-Agent Devrimi
- 04:15 - Ajanların Görev Dağılımı: Planner, Coder, Tester, Reviewer
- 08:35 - Geri Besleme Döngüleri (Feedback Loops) ve Sonsuz Döngü Koruması
- 13:20 - Egzersiz: Takımınız için 2 ajanlı bir 'Yazan ve Denetleyen' prototipi kurun
