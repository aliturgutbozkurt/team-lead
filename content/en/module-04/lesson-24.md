# Lesson 24: Security, License Compliance & Hunting Hallucinated CVEs in AI Code

> **Module 4: Architectural Stewardship & AI Code Quality** | *Seviye / Level: İleri / Advanced Lead*

---

### 📌 Executive Summary & Mindset Shift
Preventing catastrophic zero-days in AI-generated code: Neutralizing hallucinated packages, insecure deserialization, SQLi, and GPL viral license contamination.

---

### 💡 ELI5 Metaphor & Intuitive Story
> Would you pick up a random USB drive from a parking lot and plug it into your corporate production server? Of course not. An unverified AI code snippet is that mysterious USB stick. It might harbor stealth injection flaws or toxic GPL viral licenses that expose your IP.

---

### ⚖️ The Legacy Way vs. The AI-Driven Way
| Dimension | The Legacy Way | The AI-Driven Way |
|---|---|---|
| **Güvenlik Denetimi** | Yılda bir kez penetrasyon testi yaptırıp çıkan 200 sayfalık PDF'i okumak. | Her PR açıldığında otomatik SAST/DAST ve AI güvenlik ajanlarını çalıştırmak. |
| **Lisans Riskleri** | Yazılımcıların GPL/AGPL kod kopyalayıp şirketi telif davası riskine sokması. | Telif koruma filtreleri (Public Code Filter) ve otomatik lisans tarayıcılar (FOSSA) kullanmak. |
| **Paket Halüsinasyonu** | Geliştiricinin AI'ın önerdiği paketi sorgulamadan npm install etmesi. | Paketin indirilme sayısı, yazarı ve GitHub reposunu doğrulamadan kurulamayan şirket içi repo registry'si. |

---

### 🚀 Step-by-Step Actionable Framework
- 1. Slopsquatting Defense: LLMs hallucinate non-existent package names. Threat actors register these exact package names with malware. Block unverified packages.
- 2. Enforce Public Code Filters: Turn on GitHub Copilot / Cursor 'Block public code suggestions' to prevent GPL license contamination.
- 3. Multi-Layered DevSecOps: Gate every PR on automated secret scanners (TruffleHog), SAST (Semgrep), and container dependency auditing (Snyk).
- 4. Guard Against OWASP Top 10 for LLMs: Train your team against prompt injection, insecure output handling, and training data poisoning.

---

### 🚨 Real-World War Story / Case Study
At a healthtech startup, an engineer installed `fast-health-validator` recommended by Claude. The LLM had hallucinated the package name; malicious actors had registered it with trojan spyware. It shipped to production, exfiltrating 10,000 patient records. Regulatory fines followed. Lead Kerem locked down the build pipeline: routed all dependencies through a curated private Artifactory proxy with zero-trust vetting.

---

### 🤖 Battle-Tested AI Prompts & Templates
#### 🛠️ SecOps Kapsamlı Güvenlik Açığı ve Lisans Riski Denetçisi
```text
Aşağıdaki kod ve kullanılan kütüphaneleri incele: [KOD VE BAĞIMLILIKLAR]. Sen bir Ethical Hacker ve Baş Bilgi Güvenliği Yöneticisisin (CISO). 1) Bu kodda OWASP Top 10'a giren güvenlik açıkları (SQLi, XSS, SSRF, Deserialization) var mı? 2) Kullanılan kütüphanelerde lisans riski (GPL/AGPL) veya sahte paket riski var mı? 3) Kodun güvenli versiyonunu ve güvenlik açıklarını kapatan düzeltmeleri sun.
```

---

### 🎙️ NotebookLM Audio Deep Dive Discussion Prompts
> **NotebookLM Audio Overview Komutu:**
> İki sunucu: 'Yapay zeka bana kod yazdı, artık güvendeyiz' diyen naif yazılımcı ile AI'ın uydurduğu sahte paketlerle şirketlerin nasıl hacklendiğini anlatan siber güvenlik uzmanı. Tüyleri ürperten ama bilgilendirici ve eğlenceli bir podcast bölümü.

---

### 🎓 Udemy Lecture Blueprint & Action Exercise
- 00:00 - Slopsquatting Nedir? Yapay Zekanın Sahte Paket Tuzağı
- 04:20 - Telif Hakları ve GPL Riski: Şirketinizi Mahkemelik Olmaktan Koruyun
- 08:45 - DevSecOps Hattı Kurmak: Semgrep ve Trufflehog ile Otomatik Güvenlik
- 13:30 - Egzersiz: Takımınızın reposunda Semgrep taraması çalıştırıp güvenlik karnesi çıkarın
