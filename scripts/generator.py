# -*- coding: utf-8 -*-
"""
Master Generator Script:
- Compiles 60 individual Markdown files in Turkish (content/tr/module-XX/lesson-YY.md)
- Compiles 60 individual Markdown files in English (content/en/module-XX/lesson-YY.md)
- Compiles merged single-file Markdown books (books/tr/ & books/en/)
- Compiles print-ready HTML versions with executive cover and styling
- Runs headless Google Chrome to produce pixel-perfect PDFs
- Exports web/data.js and docs/data.js for GitHub Pages
"""

import os
import sys
import json
import subprocess
from pathlib import Path

# Add scripts directory to path
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))

from modules_01_02 import LESSONS_01_02
from modules_03_04 import LESSONS_03_04
from modules_05_06 import LESSONS_05_06
from modules_07_08 import LESSONS_07_08
from modules_09_10 import LESSONS_09_10

ALL_LESSONS = LESSONS_01_02 + LESSONS_03_04 + LESSONS_05_06 + LESSONS_07_08 + LESSONS_09_10

def format_lesson_markdown(lesson, lang="tr"):
    is_tr = (lang == "tr")
    
    title = lesson["title_tr"] if is_tr else lesson["title_en"]
    module_title = lesson["module_title_tr"] if is_tr else lesson["module_title_en"]
    summary = lesson["summary_tr"] if is_tr else lesson["summary_en"]
    eli5 = lesson["eli5_metaphor_tr"] if is_tr else lesson["eli5_metaphor_en"]
    steps = lesson["framework_steps_tr"] if is_tr else lesson["framework_steps_en"]
    case_study = lesson["case_study_tr"] if is_tr else lesson["case_study_en"]
    
    sec_summary_title = "Kısa Özet & Zihniyet Dönüşümü" if is_tr else "Executive Summary & Mindset Shift"
    sec_eli5_title = "Aptala Anlatır Gibi (ELI5) & Hikaye" if is_tr else "ELI5 Metaphor & Intuitive Story"
    sec_comparison_title = "Eski Usul vs. AI Destekli Yaklaşım" if is_tr else "The Legacy Way vs. The AI-Driven Way"
    col_topic = "Konu / Boyut" if is_tr else "Dimension"
    col_old = "Eski Usul (Legacy Lead)" if is_tr else "The Legacy Way"
    col_ai = "AI Destekli Modern Yaklaşım" if is_tr else "The AI-Driven Way"
    sec_framework_title = "Adım Adım Eylem Çerçevesi (Actionable Framework)" if is_tr else "Step-by-Step Actionable Framework"
    sec_case_title = "Gerçek Hayat Vaka / Kriz Analizi (Case Study)" if is_tr else "Real-World War Story / Case Study"
    sec_prompts_title = "Kullanıma Hazır AI Promptları & Şablonlar" if is_tr else "Battle-Tested AI Prompts & Templates"
    sec_notebooklm_title = "NotebookLM Podcast Tartışma Komutu (Deep Dive Audio)" if is_tr else "NotebookLM Audio Deep Dive Discussion Prompts"
    sec_udemy_title = "Udemy Ders Özeti & Takım Egzersizi" if is_tr else "Udemy Lecture Blueprint & Action Exercise"
    
    # Table rows
    table_lines = [
        f"| {col_topic} | {col_old} | {col_ai} |",
        "|---|---|---|"
    ]
    for row in lesson["comparison_table"]:
        table_lines.append(f"| **{row['topic']}** | {row['old_way']} | {row['ai_way']} |")
    table_str = "\n".join(table_lines)
    
    # Framework steps
    steps_str = "\n".join([f"- {s}" for s in steps])
    
    # Prompts
    prompts_blocks = []
    for p in lesson["ai_prompts"]:
        prompts_blocks.append(f"#### 🛠️ {p['title']}\n```text\n{p['prompt']}\n```")
    prompts_str = "\n\n".join(prompts_blocks)
    
    # Udemy outline
    udemy_str = "\n".join([f"- {u}" for u in lesson["udemy_outline"]])
    
    md = f"""# {title}

> **{module_title}** | *Seviye / Level: {lesson['level']}*

---

### 📌 {sec_summary_title}
{summary}

---

### 💡 {sec_eli5_title}
> {eli5}

---

### ⚖️ {sec_comparison_title}
{table_str}

---

### 🚀 {sec_framework_title}
{steps_str}

---

### 🚨 {sec_case_title}
{case_study}

---

### 🤖 {sec_prompts_title}
{prompts_str}

---

### 🎙️ {sec_notebooklm_title}
> **NotebookLM Audio Overview Komutu:**
> {lesson['notebooklm_prompts']}

---

### 🎓 {sec_udemy_title}
{udemy_str}
"""
    return md

def build_individual_markdowns():
    print("Generating 60 individual markdown files for TR and EN...")
    for lesson in ALL_LESSONS:
        mod_num = f"module-{lesson['module_id']:02d}"
        less_num = f"lesson-{lesson['id']:02d}.md"
        
        # TR
        tr_dir = BASE_DIR / "content" / "tr" / mod_num
        tr_dir.mkdir(parents=True, exist_ok=True)
        tr_file = tr_dir / less_num
        with open(tr_file, "w", encoding="utf-8") as f:
            f.write(format_lesson_markdown(lesson, "tr"))
            
        # EN
        en_dir = BASE_DIR / "content" / "en" / mod_num
        en_dir.mkdir(parents=True, exist_ok=True)
        en_file = en_dir / less_num
        with open(en_file, "w", encoding="utf-8") as f:
            f.write(format_lesson_markdown(lesson, "en"))

    print("Individual markdowns successfully generated!")

def build_consolidated_books():
    print("Generating consolidated books (TR & EN)...")
    
    # Turkish Merged
    tr_header = """# AI Çağında Software Team Lead Olmak: Sıfırdan Uzmanlığa 60 Derslik Rehber
*Yazar: Ali Turgut Bozkurt | Principal Software Engineer & Engineering Leader*
*Tarih: 2026*

---

## Önsöz
Yazılım mühendisliği tarihi boyunca pek çok devrim yaşadı: Derleyiciler, kişisel bilgisayarlar, açık kaynak, internet, bulut bilişim ve mikroservisler... Ancak hiçbir devrim, yapay zekanın getirdiği sarsıntı kadar hızlı ve radikal olmadı.

Eski dünyada bir Team Lead, takımın "en hızlı kod yazan", "en kıdemli" ve "her soruya cevabı olan" kişisiydi. Yeni dünyada ise kod yazmanın birim maliyeti sıfıra yaklaşırken; takım liderinin rolü bir kod amelesi olmaktan çıkıp, otonom ajanları, insan psikolojisini, mimari sınırları ve iş değerini orkestre eden bir **Sistem Orkestratörüne** dönüştü.

Bu kitap, ilk gün kıdemli yazılımcılıktan liderliğe terfi ettiğiniz o panik dolu andan; çoklu takımları (Squad of Squads) yöneten ve CTO koltuğuna oturan bir teknoloji liderine dönüşeceğiniz güne kadar size rehberlik etmek için tasarlandı.

Kitap 10 ana bölüm ve 60 bağımsız ama birbirini tamamlayan dersten oluşmaktadır. Her ders; kavramı aptala anlatır gibi (ELI5) somutlaştıran bir analoji, eski usul ile AI destekli yaklaşımın kıyaslama tablosu, adım adım uygulanabilir bir çerçeve, yaşanmış bir kriz hikayesi, kopyalayıp kullanabileceğiniz üretim seviyesinde AI promptları, **NotebookLM** ile iki sunuculu podcast oluşturabileceğiniz sesli tartışma komutları ve **Udemy** eğitim müfredatını içerir.

Keyifli okumalar ve harika bir liderlik yolculuğu dilerim!

---

## İçindekiler
"""
    # TOC TR
    toc_tr = []
    current_mod = 0
    for l in ALL_LESSONS:
        if l['module_id'] != current_mod:
            current_mod = l['module_id']
            toc_tr.append(f"\n### {l['module_title_tr']}\n")
        toc_tr.append(f"- [{l['title_tr']}](#{l['title_tr'].lower().replace(' ', '-').replace(':', '').replace('?', '').replace('\'', '').replace('\"', '').replace('.', '')})")
    
    tr_full = tr_header + "\n".join(toc_tr) + "\n\n---\n\n"
    for l in ALL_LESSONS:
        tr_full += format_lesson_markdown(l, "tr") + "\n\n<div style=\"page-break-after: always;\"></div>\n\n---\n\n"
        
    tr_book_path = BASE_DIR / "books" / "tr" / "AI_Driven_Software_Team_Lead_TR.md"
    tr_book_path.parent.mkdir(parents=True, exist_ok=True)
    with open(tr_book_path, "w", encoding="utf-8") as f:
        f.write(tr_full)

    # English Merged
    en_header = """# AI-Driven Software Team Lead: Zero to Hero Handbook (60 Comprehensive Lessons)
*Author: Ali Turgut Bozkurt | Principal Software Engineer & Engineering Leader*
*Year: 2026*

---

## Preface
Throughout history, software engineering has weathered seismic evolutions: compilers, personal computing, open source, the web, cloud infrastructure, and microservices. Yet no inflection point has transformed our craft with the ferocious velocity of Generative AI.

In the legacy era, a Team Lead was the fastest typist in the trench—the hero engineer who hoarded context and swooped in to solve every ticket. In the AI era, where the marginal cost of syntax generation collapses toward zero, the team lead's mandate fundamentally shifts from syntax monkey to **System Orchestrator**: governing context boundaries, psychological safety, multi-agent swarms, and high-leverage business value.

This handbook is engineered to take you from your terrifying first day as a newly promoted tech lead all the way to enterprise-wide engineering stewardship and the CTO seat.

Structured into 10 cohesive modules spanning 60 practical lessons, each chapter delivers: an intuitive ELI5 metaphor, an Old Way vs. AI Way trade-off matrix, a step-by-step framework, battle-tested war stories, copy-paste prompts for Claude/Cursor, **NotebookLM** 2-host audio podcast prompts, and ready-to-run **Udemy** lecture breakdowns.

Welcome to the future of software leadership.

---

## Table of Contents
"""
    toc_en = []
    current_mod = 0
    for l in ALL_LESSONS:
        if l['module_id'] != current_mod:
            current_mod = l['module_id']
            toc_en.append(f"\n### {l['module_title_en']}\n")
        toc_en.append(f"- [{l['title_en']}](#{l['title_en'].lower().replace(' ', '-').replace(':', '').replace('?', '').replace('\'', '').replace('\"', '').replace('.', '')})")

    en_full = en_header + "\n".join(toc_en) + "\n\n---\n\n"
    for l in ALL_LESSONS:
        en_full += format_lesson_markdown(l, "en") + "\n\n<div style=\"page-break-after: always;\"></div>\n\n---\n\n"

    en_book_path = BASE_DIR / "books" / "en" / "AI_Driven_Software_Team_Lead_EN.md"
    en_book_path.parent.mkdir(parents=True, exist_ok=True)
    with open(en_book_path, "w", encoding="utf-8") as f:
        f.write(en_full)

    print("Consolidated markdown books successfully created!")
    return tr_full, en_full

def generate_html_and_pdf(tr_md, en_md):
    import markdown
    
    print("Compiling print-ready HTML and rendering PDFs using Google Chrome headless...")
    
    html_template = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>{title}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

@page {{
    size: A4;
    margin: 18mm 16mm 20mm 16mm;
    @bottom-right {{
        content: counter(page);
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        color: #64748b;
    }}
    @top-left {{
        content: "{title}";
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        font-weight: 600;
        color: #94a3b8;
    }}
}}

body {{
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1e293b;
    line-height: 1.65;
    font-size: 10pt;
    background: #ffffff;
}}

.cover-page {{
    page-break-after: always;
    text-align: center;
    padding-top: 60px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}}

.cover-badge {{
    display: inline-block;
    background: #6366f1;
    color: white;
    font-size: 11pt;
    font-weight: 700;
    padding: 6px 18px;
    border-radius: 9999px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
}}

.cover-title {{
    font-size: 30pt;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.2;
    margin-bottom: 15px;
    max-width: 650px;
}}

.cover-subtitle {{
    font-size: 14pt;
    font-weight: 500;
    color: #475569;
    margin-bottom: 30px;
    max-width: 580px;
}}

.cover-img {{
    width: 90%;
    max-width: 550px;
    border-radius: 12px;
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.15);
    margin-bottom: 35px;
}}

.cover-meta {{
    font-size: 11pt;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
}}

h1 {{
    font-size: 18pt;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 2px solid #6366f1;
    padding-bottom: 6px;
    margin-top: 30px;
    page-break-after: avoid;
}}

h2 {{
    font-size: 15pt;
    font-weight: 700;
    color: #1e1b4b;
    margin-top: 25px;
    page-break-after: avoid;
}}

h3 {{
    font-size: 12pt;
    font-weight: 700;
    color: #4338ca;
    margin-top: 18px;
    margin-bottom: 6px;
    page-break-after: avoid;
}}

h4 {{
    font-size: 10pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 12px;
    margin-bottom: 4px;
}}

blockquote {{
    border-left: 4px solid #6366f1;
    background-color: #f8fafc;
    padding: 10px 14px;
    margin: 12px 0;
    border-radius: 0 8px 8px 0;
    color: #334155;
    font-style: italic;
    page-break-inside: avoid;
}}

table {{
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 8.5pt;
    page-break-inside: avoid;
}}

th, td {{
    border: 1px solid #cbd5e1;
    padding: 8px 10px;
    text-align: left;
}}

th {{
    background-color: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
}}

pre, code {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
}}

pre {{
    background-color: #0f172a;
    color: #e2e8f0;
    padding: 12px;
    border-radius: 6px;
    overflow-x: auto;
    page-break-inside: avoid;
    white-space: pre-wrap;
    word-break: break-all;
}}

code {{
    background-color: #f1f5f9;
    color: #4f46e5;
    padding: 2px 4px;
    border-radius: 4px;
}}

pre code {{
    background-color: transparent;
    color: inherit;
    padding: 0;
}}

hr {{
    border: 0;
    height: 1px;
    background: #e2e8f0;
    margin: 20px 0;
}}

ul, ol {{
    padding-left: 20px;
    margin: 8px 0;
}}

li {{
    margin-bottom: 4px;
}}

.page-break {{
    page-break-after: always;
}}
</style>
</head>
<body>

<div class="cover-page">
    <div class="cover-badge">{badge}</div>
    <div class="cover-title">{title}</div>
    <div class="cover-subtitle">{subtitle}</div>
    <img src="{cover_img}" class="cover-img" alt="Cover">
    <div class="cover-meta">
        <strong>Ali Turgut Bozkurt</strong> | Principal Software Engineer<br>
        60 Lessons • 10 Core Modules • NotebookLM Audio & Udemy Ready
    </div>
</div>

<div class="content">
{content}
</div>

</body>
</html>
"""

    # Turkish HTML & PDF
    tr_html_content = markdown.markdown(tr_md, extensions=['tables', 'fenced_code'])
    tr_full_html = html_template.format(
        lang="tr",
        title="AI Çağında Software Team Lead Olmak",
        badge="Sıfırdan Uzmanlığa 60 Derslik Rehber",
        subtitle="Modern Yazılım Liderliği, Multi-Agent İş Akışları, İletişim ve Mimari Strateji",
        cover_img=str(BASE_DIR / "books" / "cover.jpg"),
        content=tr_html_content
    )
    
    tr_html_file = BASE_DIR / "books" / "tr" / "AI_Driven_Software_Team_Lead_TR.html"
    with open(tr_html_file, "w", encoding="utf-8") as f:
        f.write(tr_full_html)
        
    tr_pdf_file = BASE_DIR / "books" / "tr" / "AI_Driven_Software_Team_Lead_TR.pdf"
    cmd_tr = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        "--disable-gpu",
        "--allow-file-access-from-files",
        f"--print-to-pdf={tr_pdf_file}",
        str(tr_html_file)
    ]
    print("Compiling Turkish PDF with Chrome headless...")
    subprocess.run(cmd_tr, check=True)
    print(f"Turkish PDF generated: {tr_pdf_file} (Size: {os.path.getsize(tr_pdf_file)} bytes)")

    # English HTML & PDF
    en_html_content = markdown.markdown(en_md, extensions=['tables', 'fenced_code'])
    en_full_html = html_template.format(
        lang="en",
        title="AI-Driven Software Team Lead Handbook",
        badge="Zero to Hero • 60 Lessons",
        subtitle="Modern Engineering Leadership, Multi-Agent Pipelines, Empathy & Architectural Mastery",
        cover_img=str(BASE_DIR / "books" / "cover.jpg"),
        content=en_html_content
    )
    
    en_html_file = BASE_DIR / "books" / "en" / "AI_Driven_Software_Team_Lead_EN.html"
    with open(en_html_file, "w", encoding="utf-8") as f:
        f.write(en_full_html)
        
    en_pdf_file = BASE_DIR / "books" / "en" / "AI_Driven_Software_Team_Lead_EN.pdf"
    cmd_en = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        "--disable-gpu",
        "--allow-file-access-from-files",
        f"--print-to-pdf={en_pdf_file}",
        str(en_html_file)
    ]
    print("Compiling English PDF with Chrome headless...")
    subprocess.run(cmd_en, check=True)
    print(f"English PDF generated: {en_pdf_file} (Size: {os.path.getsize(en_pdf_file)} bytes)")

    # Copy to web and docs
    for target in [BASE_DIR / "web" / "books", BASE_DIR / "docs" / "books"]:
        target.mkdir(parents=True, exist_ok=True)
        import shutil
        shutil.copy(tr_pdf_file, target / "AI_Driven_Software_Team_Lead_TR.pdf")
        shutil.copy(en_pdf_file, target / "AI_Driven_Software_Team_Lead_EN.pdf")
        shutil.copy(tr_book_path := BASE_DIR / "books" / "tr" / "AI_Driven_Software_Team_Lead_TR.md", target / "AI_Driven_Software_Team_Lead_TR.md")
        shutil.copy(en_book_path := BASE_DIR / "books" / "en" / "AI_Driven_Software_Team_Lead_EN.md", target / "AI_Driven_Software_Team_Lead_EN.md")
    print("PDF and Markdown books copied to web/books/ and docs/books/!")

def build_web_data():
    print("Generating web/data.js and docs/data.js...")
    web_data = {
        "title_tr": "AI Çağında Software Team Lead Olmak",
        "title_en": "AI-Driven Software Team Lead",
        "author": "Ali Turgut Bozkurt",
        "total_lessons": len(ALL_LESSONS),
        "total_modules": 10,
        "lessons": ALL_LESSONS
    }
    
    js_content = "const COURSE_DATA = " + json.dumps(web_data, ensure_ascii=False, indent=2) + ";"
    
    with open(BASE_DIR / "web" / "data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    with open(BASE_DIR / "docs" / "data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("Web dataset successfully built!")

if __name__ == "__main__":
    build_individual_markdowns()
    tr_md, en_md = build_consolidated_books()
    generate_html_and_pdf(tr_md, en_md)
    build_web_data()
    print("✨ All generation stages completed successfully!")
