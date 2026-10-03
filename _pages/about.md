---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<style>
    #research-interests,
    #news,
    #experience,
    #publications,
    #awards,
    #services,
    #misc {
        scroll-margin-top: 80px;
    }

    /* ===== News Scroll Box ===== */
    .news-box {
      max-height: 220px;
      overflow-y: auto;
      padding: 10px 14px;
      background: #f7f7f7;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .news-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .news-list li {
      margin-bottom: 10px;
      line-height: 1.5;
    }

    .news-date {
      display: inline-block;
      min-width: 70px;
      font-weight: 400;
      color: #ca6f6f;
    }

    .experience-card {
        display: flex;
        align-items: center;
        background: #f9f9f9;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 0px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .experience-card:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .experience-logo {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: contain;
    }
    .experience-info {
        font-family: "Segoe UI", sans-serif;
    }
    .experience-info strong {
        font-size: 1.1em;
    }
    .experience-info a {
        text-decoration: none;
        color: #ca6f6f;
    }
    .exp-focus {
        margin-top: 6px;
        color: #5f6368;
        font-size: 14px;
        line-height: 1.55;
    }
    .experience-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .experience-card {
        box-sizing: border-box;
    }

    .publication-card {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 1.5px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-sizing: border-box;
        margin-bottom: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        color: #5f6368;
    }
    .publication-card > div > strong,
    .publication-card > div > div > strong {
        color: #202124;
    }
    .publication-card i {
        color: #6b7280;
    }

    .pub-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
        margin-left: 8px;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 650;
        line-height: 1.4;
        letter-spacing: 0.01em;
        vertical-align: middle;
        white-space: nowrap;
        border: 1px solid transparent;
        background: rgba(107, 114, 128, 0.08);
        color: #6b7280;
    }

    .pub-badge::before {
        content: "";
        width: 0.45em;
        height: 0.45em;
        border-radius: 999px;
        background: currentColor;
        opacity: 0.75;
    }

    .publication-card:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .pub-button-container {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-wrap: wrap;
    }

    .pub-button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .pub-button:hover {
        background-color: #e0e0e0;
    }

    .pub-button.active {
        background-color: #ca6f6f;
        color: white;
        border-color: #ca6f6f;
    }

    .publication-view[hidden] {
        display: none !important;
    }

    #full-publications {
        max-height: 380px;
        overflow-y: auto;
        padding-right: 8px;
        margin-bottom: 24px;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: rgba(185, 95, 61, 0.45) rgba(254, 245, 241, 0.7);
    }

    #full-publications::-webkit-scrollbar {
        width: 8px;
    }

    #full-publications::-webkit-scrollbar-track {
        background: rgba(254, 245, 241, 0.7);
        border-radius: 999px;
    }

    #full-publications::-webkit-scrollbar-thumb {
        background: rgba(185, 95, 61, 0.45);
        border-radius: 999px;
    }

    #full-publications::-webkit-scrollbar-thumb:hover {
        background: rgba(185, 95, 61, 0.65);
    }

    .full-publication-list {
        margin: 0;
        padding-left: 1.25rem;
        color: #5f6368;
        font-size: 15px;
        line-height: 1.55;
    }

    .full-publication-list li {
        margin-bottom: 14px;
    }

    .pub-list-badge {
        display: inline-block;
        margin-right: 6px;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid rgba(245, 187, 167, 0.75);
        background: #fef5f1;
        color: #b95f3d;
        font-size: 11px;
        font-weight: 650;
        line-height: 1.35;
        vertical-align: 1px;
        white-space: nowrap;
    }

    .full-publication-list .pub-list-title {
        color: #202124;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.45;
        text-decoration: none !important;
    }

    .pub-list-authors {
        color: #6b7280;
        font-size: 13px;
        font-style: italic;
    }

    /* Own name: bold accent; corresponding author: accent; everyone else: grey */
    .au-me {
        color: #ca6f6f;
        font-weight: 700;
    }
    .au-corr {
        color: #ca6f6f;
    }

    .pub-list-note {
        color: #c7774c;
        font-style: italic;
        font-weight: 650;
    }

    .pub-list-links {
        white-space: nowrap;
    }

    .pub-list-links a {
        margin-left: 4px;
        color: #c7774c !important;
        font-weight: 600;
    }

    .pub-list-links a:hover {
        color: #b65f36 !important;
    }

    .experience-logos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        flex: 0 0 60px;
        width: 60px;
        margin-right: 20px;
    }
    .experience-logos img {
        width: 48px;
        height: 48px;
        object-fit: contain;
    }

    @media (max-width: 720px) {
        .publication-card {
            align-items: stretch;
            padding: 8px;
        }

        .publication-card > div {
            flex-direction: column;
            align-items: stretch !important;
            width: 100%;
        }

        .publication-card .pub-media-rotator {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 16 / 9;
            margin-right: 0 !important;
            margin-bottom: 12px;
        }

        .publication-card .pub-media-rotator > img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
        }

        .full-publication-list {
            padding-left: 1rem;
        }

        .pub-list-badge {
            margin-bottom: 4px;
        }
    }

    /* ===== Section Headings ===== */
    .section-heading {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 36px 0 18px;
        padding: 6px 0 6px 14px;
        border-left: 4px solid var(--accent, #ca6f6f);
        font-size: 1.25em;
        font-weight: 700;
        color: #202124;
        font-family: "Segoe UI", sans-serif;
        letter-spacing: -0.01em;
    }

    /* ===== Pub card left-border accents ===== */
    .pub-card--conference {
        border: 1.5px solid #b8cfe8 !important;
        border-left: 4px solid #83a1c7 !important;
        background: linear-gradient(to right, #f0f5fb 0px, #fff 240px) !important;
    }
    .pub-card--journal {
        border: 1.5px solid #e8d9b0 !important;
        border-left: 4px solid #d4a847 !important;
        background: linear-gradient(to right, #fdf8ee 0px, #fff 240px) !important;
    }

    /* ===== Oral nominee pulse animation ===== */
    @keyframes oral-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(202,111,111,0.45); }
        55%       { box-shadow: 0 0 0 5px rgba(202,111,111,0); }
    }
    .oral-badge {
        line-height: 1.3;
        animation: oral-pulse 2.4s ease-in-out infinite;
    }

    /* ===== Equal-contribution marker ===== */
    .eq-contrib {
        color: #ca6f6f;
        font-weight: 800;
        font-size: 1.05em;
        margin: 0 1px;
    }

    /* ===== Award & Service lists ===== */
    .award-list, .service-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .award-list li, .service-list li {
        padding: 6px 2px;
        line-height: 1.6;
        border-bottom: 1px solid #f0f0f0;
        font-size: 14.5px;
    }
    .award-list li:last-child, .service-list li:last-child {
        border-bottom: none;
    }
    .award-year {
        color: #ca6f6f;
        font-style: italic;
        font-size: 0.88em;
        margin-right: 2px;
    }

    /* ===== Miscellaneous / hobbies ===== */
    .misc-intro {
        margin: 0 0 18px;
        color: #202124;
        font-size: 15.5px;
    }
    .hobby-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
    }
    .hobby-card {
        display: flex;
        gap: 18px;
        align-items: center;
        padding: 16px;
        border-radius: 12px;
        background: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        transition: box-shadow 0.3s;
    }
    .hobby-card:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .hobby-visual {
        flex: 0 0 112px;
        width: 112px;
        height: 184px;
        border-radius: 8px;
        overflow: hidden;
    }
    .hobby-visual img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .hobby-title {
        margin-bottom: 6px;
        color: #202124;
        font-family: "Segoe UI", sans-serif;
        font-size: 1.05em;
        font-weight: 700;
    }
    .hobby-title .hobby-zh {
        margin-left: 4px;
        color: #ca6f6f;
        font-weight: 600;
    }
    .hobby-text {
        color: #5f6368;
        font-size: 14px;
        line-height: 1.6;
    }
    @media (max-width: 720px) {
        .hobby-grid {
            grid-template-columns: 1fr;
        }
    }

    /* ===== Research roadmap figure ===== */
    .agi-roadmap {
        margin: 8px 0 22px;
    }
    .agi-title {
        margin-bottom: 4px;
        text-align: center;
        color: #202124;
        font-family: "Permanent Marker", cursive;
        font-size: 24px;
    }
    .agi-panels {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 8px;
    }
    /* Both panels share one viewBox size and flex basis, so they render at the same width and height */
    .agi-explore,
    .agi-vision {
        flex: 1 1 320px;
        min-width: 0;
        height: auto;
    }
    .agi-roadmap svg text {
        font-family: Georgia, "Times New Roman", serif;
        fill: #202124;
    }
    .agi-roadmap .agi-panel-title {
        font-size: 19px;
        font-weight: 700;
    }
    .agi-roadmap .agi-goal {
        font-size: 19px;
        font-weight: 700;
    }
    .agi-roadmap .agi-branch {
        font-size: 18px;
        font-weight: 700;
    }
    .agi-roadmap .agi-topic {
        font-size: 13.5px;
    }
    .agi-roadmap .agi-future {
        fill: #7b8794;
        font-style: italic;
    }
    .agi-roadmap .agi-pill rect {
        fill: #fff;
        stroke-width: 1.6;
    }
    .agi-roadmap .agi-pill text {
        font-size: 12.5px;
        text-anchor: middle;
        stroke: none;
    }
    .agi-roadmap .agi-node {
        font-size: 20px;
        font-weight: 700;
    }
    .agi-roadmap .agi-caption {
        fill: #5f6368;
        font-size: 14px;
        font-style: italic;
    }
    .agi-roadmap .agi-synergy {
        font-family: "Permanent Marker", cursive;
        font-size: 20px;
    }

    /* ===== "Under review" notice for unreleased papers ===== */
    .pub-review-toast {
        position: fixed;
        left: 50%;
        bottom: 28px;
        z-index: 9999;
        max-width: calc(100vw - 32px);
        padding: 10px 18px;
        border-radius: 8px;
        background: #202124;
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        opacity: 0;
        transform: translate(-50%, 8px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        pointer-events: none;
    }
    .pub-review-toast.is-visible {
        opacity: 1;
        transform: translate(-50%, 0);
    }
</style>

<html>
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        body {
            background-color: #FFFFFF;
            font-family: 'Arial Rounded MT Bold', 'Verdana', sans-serif;
            font-size: 15px;
        }
        .main-heading {
            font-family: 'Permanent Marker', cursive;
            text-align: center;
            color: #ca6f6f;
        }
        div.markdown-body a, a {
            text-decoration: none !important;
            color: #ca6f6f;
            transition: all 0.3s ease;
        }
        div.markdown-body a:hover, a:hover {
            color: #c71585;
            text-decoration: underline;
        }
    </style>
</head>
<body>
<h1 class="main-heading">Hi there <img src="images/Hi.gif" width="40px"> Welcome to my Homepage!</h1>
</body>
</html>

Hi! I am Qifan Liang (Simon Leong), a Master of Computing (AI) student at the National University of Singapore (expected Jan 2027), working in the [Sound and Music Computing Lab](https://smcnus.comp.nus.edu.sg/) with Prof. [Ye Wang](https://www.comp.nus.edu.sg/cs/people/wangye/). I received my B.Eng. in Computer Science from Wuhan University, where I worked with Prof. [Zhen Han](https://dblp.org/pid/62/302-2.html) and Prof. [Zhongyuan Wang](https://cs.whu.edu.cn/info/1019/2495.htm) at the [National Engineering Research Center for Multimedia Software](https://multimedia.whu.edu.cn/index.htm). I have also worked with surgeons from Zhongnan Hospital of Wuhan University on laparoscopic video analysis, collaborated with Prof. [Yixuan Yuan](https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan)'s AIM Group at The Chinese University of Hong Kong on surgical video restoration and surgical intent understanding, and worked with Prof. [Jens Rittscher](https://ibme.ox.ac.uk/person/jens-rittscher/) at the Big Data Institute, University of Oxford, on learning from scarce data.

Feel free to reach out if you are interested in collaboration or potential opportunities!

<div class="section-heading" style="--accent:#ca6f6f;" id="research-interests">🔬 Research Interests</div>

> "Computer vision will open our eyes to a new world of possibilities, where machines not only see but understand the world as we do." — Inspired by Fei-Fei Li

My long-term goal is to build **Surgical AGI**, an AI system that can see the surgical scene clearly, understand what the surgeon intends, and interact naturally with the people around it. My work so far covers these three parts:

{% include agi_roadmap.html %}

- **Surgical Low-Level Vision**: all-in-one surgical video restoration for robust perception in the operating room.
- **Human-Centric AI Agents**: trustworthy multi-agent collaboration and multi-agent post-training.
- **Multimodal Generation and Understanding**: controllable generation and 3D human motion generation.

<div style="margin-top: 12px; padding: 10px 16px; background: #fef5f1; border-left: 3px solid #ca6f6f; border-radius: 6px; font-size: 14px; color: #5f6368;">
  📢 I am actively looking for <strong style="color: #202124;">27 Fall PhD positions</strong> and <strong style="color: #202124;">research internship opportunities</strong>. Feel free to reach out!
</div>

<div class="section-heading" style="--accent:#ca6f6f;" id="news">📰 News</div>

<div class="news-box">
  <ul class="news-list">
    <li><span class="news-date"><em>2026.09</em></span> 🎉🎉 Three papers submitted to <strong>ICLR 2027</strong>: <strong>SurgOmni</strong>, <strong>AIMPACT</strong>, and <strong>SurgIntent</strong>. Thanks to all co-authors!</li>
    <li><span class="news-date"><em>2026.07</em></span> 🎤 I presented TED-TTS at <img src="images/acl_logo.svg" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>ACL 2026</strong> (online).</li>
    <li><span class="news-date"><em>2026.04</em></span> 🎉🎉 One paper accepted to <img src="images/acl_logo.svg" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>ACL 2026</strong>, <span style="color:#ca6f6f;font-weight:600;">nominated for Oral by SAC (Scores: 9/10)</span>. Thanks to all co-authors!</li>
    <li><span class="news-date"><em>2026.01</em></span> 🎤 I presented our surgical desmoking paper at <img src="images/new/AAAI-26_logo.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>AAAI 2026</strong> in Singapore.</li>
    <li><span class="news-date"><em>2026.01</em></span> 🤝 I started collaborating with Prof. <a href="https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan">Yixuan Yuan</a>'s <strong>AIM Group</strong> at <strong>The Chinese University of Hong Kong</strong> on surgical video restoration and surgical intent reasoning.</li>
    <li><span class="news-date"><em>2025.12</em></span> 🎉🎉 One paper accepted to <img src="images/new/AAAI-26_logo.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>AAAI 2026</strong>. Thanks to all co-authors!</li>
    <li><span class="news-date"><em>2025.11</em></span> 🎉 I joined the <a href="https://smcnus.comp.nus.edu.sg/">Sound and Music Computing Lab</a> at <img src="images/NUS.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>National University of Singapore</strong>, supervised by Prof. <a href="https://www.comp.nus.edu.sg/cs/people/wangye/">Ye Wang</a>.</li>
    <li><span class="news-date"><em>2025.08</em></span> 🎉 I joined the <strong>MComp AI</strong> program at <img src="images/NUS.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>National University of Singapore</strong>.</li>
    <li><span class="news-date"><em>2025.05</em></span> My undergraduate thesis was awarded as an <strong>Outstanding Undergraduate Thesis</strong> at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2025.05</em></span> I received the <strong>Lei Jun Computer Innovation and Development Grant</strong> and the <strong>Lei Jun Computer Research Grant</strong> from <img src="images/xiaomi_logo.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>Xiaomi</strong>.</li>
    <li><span class="news-date"><em>2025.03</em></span> I received the honor of <strong>Outstanding Graduate</strong> of the School of Computer Science at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2024.11</em></span> I won the <img src="images/didi_logo.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>DiDi Inc. Outstanding Undergraduate Scholarship</strong> (<strong>1/254</strong>, major-wide) at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2024.10</em></span> I won the <strong>Merit Student Scholarship</strong> (<strong>Top 5%</strong>, school-wide) at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2024.09</em></span> One <strong>Chinese Software Copyright</strong> "All-weather High-precision Transmission Tower Vibration Monitoring System" has been published.</li>
    <li><span class="news-date"><em>2024.06</em></span> My project has won <strong>2</strong> national awards in 2024.</li>
    <li><span class="news-date"><em>2024.05</em></span> 🎉🎉 One paper accepted by <a href="https://dl.acm.org/doi/10.1145/3672400"><strong>ACM TOMM</strong></a>. Thanks to all co-authors!</li>
    <li><span class="news-date"><em>2024.03</em></span> I won the <img src="images/xiaomi_logo.png" style="height:14px; vertical-align:middle; margin: 0 2px;"> <strong>Lei Jun Computer Innovation and Development Fund</strong> (<strong>Top 7.2%</strong>, major-wide) at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2023.11</em></span> I won the <img src="images/samsung_logo.png" style="height:11px; vertical-align:middle; margin: 0 2px;"> <strong>Samsung Group Outstanding Undergraduate Scholarship</strong> (<strong>1/254</strong>, major-wide) at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2023.10</em></span> I won the <strong>First-Class Scholarship</strong> (<strong>Top 5%</strong>, school-wide) at <img src="images/WHU.png" style="height:13px; vertical-align:middle; margin: 0 2px;"> <strong>Wuhan University</strong>.</li>
    <li><span class="news-date"><em>2023.09</em></span> One <strong>Chinese Software Copyright</strong> "Innovative Integrated Platform for Emergency Monitoring of Forest Fires" has been published.</li>
    <li><span class="news-date"><em>2023.06</em></span> <a href="https://github.com/Simon-leong/SenHuo-Forest-Fire-Intelligence-Integration-Software-System-UI">My project</a> has won <strong>3</strong> national awards in 2023.</li>
  </ul>
</div>

<div class="section-heading" style="--accent:#83a1c7;" id="experience">🎓 Experience</div>

<div class="experience-container">

  <div class="experience-card">
    <div class="experience-logos">
      <img src="images/new/cuhk_emblem.png" alt="CUHK logo">
      <img src="images/new/whu_emblem.png" alt="Wuhan University logo">
    </div>
    <div class="experience-info">
      <strong>AIM Group, The Chinese University of Hong Kong × Wuhan University</strong><br>
      <em>2026.01 – 2026.09 · Remote</em><br>
      Student Researcher in collaboration with Prof. <a href="https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-yixuan-yuan"><em>Yixuan Yuan</em></a>'s AIM Group (CUHK), advised by Prof. <a href="https://dblp.org/pid/62/302-2.html"><em>Zhen Han</em></a> and Prof. <a href="https://cs.whu.edu.cn/info/1019/2495.htm"><em>Zhongyuan Wang</em></a> (WHU)
      <div class="exp-focus">Surgical perception and understanding: restoring clear operating scenes under smoke, splash, blur and uneven lighting (ICLR 2027), and inferring the intent behind surgical maneuvers with knowledge-guided agents (ICLR 2027).</div>
    </div>
  </div>

  <div class="experience-card">
    <img src="images/smc_lab_logo.png" alt="SMC Lab logo" class="experience-logo">
    <div class="experience-info">
      <strong>Sound and Music Computing Lab, National University of Singapore</strong><br>
      <em>2025.11 – Present · Singapore</em><br>
      Student Researcher at <a href="https://smcnus.comp.nus.edu.sg/"><em>SMC Lab</em></a>, advised by Prof. <a href="https://www.comp.nus.edu.sg/cs/people/wangye/"><em>Ye Wang</em></a>
      <div class="exp-focus">Multimodal interaction: expert-aligned agents that assess human communication in presentations (ICLR 2027), expressive speech synthesis (ACL 2026), and personalized speech-driven 3D gestures (IEEE TMM).</div>
    </div>
  </div>

  <div class="experience-card">
    <img src="images/new/NERCMS.png" alt="NERCMS logo" class="experience-logo">
    <div class="experience-info">
      <strong>National Engineering Research Center for Multimedia Software, Wuhan University</strong><br>
      <em>2022.09 – 2025.06 · Wuhan, China</em><br>
      Student Researcher at <a href="http://multimedia.whu.edu.cn/"><em>NERCMS</em></a>, advised by Prof. <a href="https://dblp.org/pid/62/302-2.html"><em>Zhen Han</em></a> and Prof. <a href="https://cs.whu.edu.cn/info/1019/2495.htm"><em>Zhongyuan Wang</em></a>
      <div class="exp-focus">Surgical low-level vision: smoke-type-aware laparoscopic video desmoking, supported by a dataset built with surgeons from Zhongnan Hospital of Wuhan University (AAAI 2026), together with few-shot face synthesis (ACM TOMM).</div>
    </div>
  </div>

  <div class="experience-card">
    <img src="images/Oxford.jpg" alt="Oxford logo" class="experience-logo">
    <div class="experience-info">
      <strong>Quantitative Imaging Group, Big Data Institute, University of Oxford</strong><br>
      <em>2024.06 – 2025.01 · Remote</em><br>
      Student Researcher at <a href="https://www.bdi.ox.ac.uk/"><em>Oxford Big Data Institute</em></a>, advised by Prof. <a href="https://ibme.ox.ac.uk/person/jens-rittscher/"><em>Jens Rittscher</em></a>
    </div>
  </div>

</div>

<div class="section-heading" style="--accent:#83a1c7;" id="publications">📄 Publications</div>

<button class="pub-button active" onclick="filterPublications(event, 'all')">Core Publications</button>
<button class="pub-button" onclick="filterPublications(event, 'list')">Full Publications List</button>

(<span class="eq-contrib">*</span> equal contribution &nbsp;·&nbsp; † corresponding author)

<div id="core-publications" class="publication-view" data-publication-view="core">

<div class="publication-card pub-card--conference" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/surgomni.jpg" alt="SurgOmni" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>SurgOmni: Towards All-in-One Surgical Video Restoration</strong><br>
      <i style="font-size: 13px;">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, J Lyu<sup class="eq-contrib">*</sup>, J Li<sup class="eq-contrib">*</sup>, S Li<sup class="eq-contrib">*</sup>, …, J Hao, <span class="au-corr">Zhen Han<sup>†</sup></span>, Yixuan Yuan, Zhongyuan Wang
      </i><br>
      A unified dataset and benchmark suite for all-in-one surgical video restoration: a 44K-frame paired training set synthesized in a 3D engine from the physical formation of smoke, haze, splash, motion blur and non-uniform illumination, a 10K-frame real-world test set covering 6 surgery types, 10 organs and 27 scenes, and a benchmark of 15 restoration methods that provides a practical foundation for future surgical restoration.
      <br>
      <b><i style="color:#83a1c7;">ICLR 2027 (Under Review) &nbsp;</i></b>
      <a href="#" class="pub-review-link" role="button"><em>[paper]</em></a>
      <a href="https://simon-leong.github.io/SurgOmni_website/" target="_blank"><em>[website]</em></a>
    </div>
  </div>
</div>

<div class="publication-card pub-card--conference" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/aimpact.jpg" alt="AIMPACT" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>AIMPACT: An Evidence-Grounded Multi-Agent Framework for Automated Presentation Assessment</strong><br>
      <i style="font-size: 13px;">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, N Ang<sup class="eq-contrib">*</sup>, Z Wang, S Luan, B Yuen, <span class="au-corr">Ye Wang<sup>†</sup></span>
      </i><br>
      An evidence-to-judgment multi-agent framework that coordinates seven specialist agents over traceable multimodal evidence through reliability-guided graph collaboration, with RC-MEPO, a reinforcement learning strategy that aligns rubric-based judgments with confidence-weighted expert preferences and achieves the strongest expert alignment among MLLMs.
      <br>
      <b><i style="color:#83a1c7;">ICLR 2027 (Under Review) &nbsp;</i></b>
      <a href="#" class="pub-review-link" role="button"><em>[paper]</em></a>
      <a href="https://simon-leong.github.io/AIMPACT_website/" target="_blank"><em>[website]</em></a>
    </div>
  </div>
</div>

<div class="publication-card pub-card--conference" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/surgintent.jpg" alt="SurgIntent" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>Towards Higher-Level Surgical Intelligence: A Comprehensive Benchmark and Multi-Agent Framework for Surgical Intent Understanding</strong><br>
      <i style="font-size: 13px;">
        P Hao, S Li, Y Li, …, J Hao, <span class="au-me">Qifan Liang</span>, Z Kou, …, Yixuan Yuan, <span class="au-corr">L Zhu<sup>†</sup></span>
      </i><br>
A benchmark for understanding the intent behind surgical maneuvers across anatomical, functional, coordinative and prospective dimensions. The proposed SurgIntent-Agent combines visual evidence with retrieved surgical knowledge and probes the video to verify its hypotheses, achieving 67.62%
accuracy and outperforming the strongest general-purpose MLLM by 10.3%.
      <br>
      <b><i style="color:#83a1c7;">ICLR 2027 (Under Review) &nbsp;</i></b>
    </div>
  </div>
</div>

<div class="publication-card pub-card--conference" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/aaai.jpg" alt="STSVD" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>Rethinking Surgical Smoke: A Smoke-Type-Aware Laparoscopic Video Desmoking Method and Dataset</strong><br>
      <i style="font-size: 13px;">
        <span class="au-me">Qifan Liang</span>, Junlin Li, <span class="au-corr">Zhen Han<sup>†</sup></span>, Xihao Wang, Zhongyuan Wang, Bin Mei
      </i><br>
Categorizes surgical smoke into Diffusion and Ambient types based on temporal motion patterns, proposes a spatio-temporal disentanglement network for state-of-the-art smoke-type-aware video desmoking, and introduces the first large-scale synthetic video desmoking dataset with smoke-type annotations, developed in collaboration with surgeons from Zhongnan Hospital.
      <br>
      <b><i style="color:#83a1c7;">AAAI 2026 &nbsp;</i></b>
      <a href="https://ojs.aaai.org/index.php/AAAI/article/view/37617" target="_blank"><em>[paper]</em></a>
      <a href="https://arxiv.org/abs/2512.02780" target="_blank"><em>[arXiv]</em></a>
      <a href="https://simon-leong.github.io/STSVD/" target="_blank"><em>[website]</em></a>
      <a href="https://github.com/Simon-leong/STSVD" target="_blank"><em>[code]</em></a>
    </div>
  </div>
</div>

<div class="publication-card pub-card--conference" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/acl.png" alt="TED-TTS" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>TED-TTS: Training-Free Intra-Utterance Emotion and Duration Control for Text-to-Speech Synthesis</strong><br>
      <i style="font-size: 13px;">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, Y Liu<sup class="eq-contrib">*</sup>, R Wei<sup class="eq-contrib">*</sup>, N Lu, <span class="au-corr">Junchuan Zhao<sup>†</sup></span>, Ye Wang
      </i><br>
      The first training-free framework for inference-time controllable generation in zero-shot text-to-speech, using segment-aware conditioning with a 2D causal attention mask and online text-speech alignment to achieve state-of-the-art segment-level emotion and duration control while preserving speech quality.
      <br>
      <b><i style="color:#83a1c7;">ACL 2026 &nbsp;</i></b>
      <span class="oral-badge" style="display:inline-block;padding:1px 8px;border-radius:999px;background:#fef5f1;border:1px solid #f5bba7;color:#ca6f6f;font-size:11px;font-weight:700;vertical-align:middle;">🎙 Oral Nominee (SAC)</span>
      <a href="https://aclanthology.org/2026.acl-long.1077/" target="_blank"><em>[paper]</em></a>
      <a href="https://arxiv.org/abs/2601.03170" target="_blank"><em>[arXiv]</em></a>
      <a href="https://simon-leong.github.io/TED-TTS-DemoPage/" target="_blank"><em>[website]</em></a>
      <a href="https://github.com/Simon-leong/TED-TTS" target="_blank"><em>[code]</em></a>
      <a href="https://huggingface.co/datasets/Chanson-0803/MED-TTS" target="_blank"><em>[dataset]</em></a>
    </div>
  </div>
</div>

<div class="publication-card pub-card--journal" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/personagest.jpg" alt="PersonaGest" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>PersonaGest: Personalized Co-Speech Gesture Generation with Semantic-Guided Hierarchical Motion Representation</strong><br>
      <i style="font-size: 13px;">
        Junchuan Zhao<sup class="eq-contrib">*</sup>, <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, <span class="au-corr">Ye Wang<sup>†</sup></span>
      </i><br>
      Disentangles 3D motion content and style with a semantic-aware RVQ-VAE codebook and generates personalized whole-body co-speech gestures through masked generative and style residual transformers, achieving state-of-the-art objective and subjective results with fine-grained part-wise style control.
      <br>
      <b><i style="color:#83a1c7;">IEEE TMM (Under Review) &nbsp;</i></b>
      <a href="https://arxiv.org/abs/2605.07252" target="_blank"><em>[arXiv]</em></a>
      <a href="https://danny-nus.github.io/PersonaGest/" target="_blank"><em>[website]</em></a>
    </div>
  </div>
</div>

<div class="publication-card pub-card--journal" data-category="all">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/new/tomm.png" alt="TOMM" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>Few-Shot Face Sketch-to-Photo Synthesis via Global-Local Asymmetric Image-to-Image Translation</strong><br>
      <i style="font-size: 13px;">
        Yongkang Li, <span class="au-me">Qifan Liang</span>, <span class="au-corr">Zhen Han<sup>†</sup></span>, Wenjun Mai, Zhongyuan Wang
      </i><br>
      A global-local asymmetric image-to-image translation framework for few-shot face sketch-to-photo synthesis, combining a global-local fusion network with a style transfer network under a pre-training and fine-tuning scheme to generate realistic, structurally faithful photos from only a few paired training samples.
      <br>
      <b><i style="color:#83a1c7;">ACM TOMM &nbsp;</i></b>
      <a href="https://dl.acm.org/doi/full/10.1145/3672400" target="_blank"><em>[paper]</em></a>
    </div>
  </div>
</div>


</div>

<div id="full-publications" class="publication-view" data-publication-view="list" hidden>
  <ul class="full-publication-list">
    <li>
      <span class="pub-list-badge">ICLR 2027 · Under Review</span>
      <span class="pub-list-title">SurgOmni: Towards All-in-One Surgical Video Restoration</span><br>
      <span class="pub-list-authors">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, J Lyu<sup class="eq-contrib">*</sup>, J Li<sup class="eq-contrib">*</sup>, S Li<sup class="eq-contrib">*</sup>, …, J Hao, <span class="au-corr">Zhen Han<sup>†</sup></span>, Yixuan Yuan, Zhongyuan Wang.
      </span>
      <span class="pub-list-links">
        <a href="#" class="pub-review-link" role="button">[paper]</a>
        <a href="https://simon-leong.github.io/SurgOmni_website/" target="_blank">[website]</a>
      </span>
    </li>
    <li>
      <span class="pub-list-badge">ICLR 2027 · Under Review</span>
      <span class="pub-list-title">AIMPACT: An Evidence-Grounded Multi-Agent Framework for Automated Presentation Assessment</span><br>
      <span class="pub-list-authors">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, N Ang<sup class="eq-contrib">*</sup>, Z Wang, S Luan, B Yuen, <span class="au-corr">Ye Wang<sup>†</sup></span>.
      </span>
      <span class="pub-list-links">
        <a href="#" class="pub-review-link" role="button">[paper]</a>
        <a href="https://simon-leong.github.io/AIMPACT_website/" target="_blank">[website]</a>
      </span>
    </li>
    <li>
      <span class="pub-list-badge">ICLR 2027 · Under Review</span>
      <span class="pub-list-title">Towards Higher-Level Surgical Intelligence: A Comprehensive Benchmark and Multi-Agent Framework for Surgical Intent Understanding</span><br>
      <span class="pub-list-authors">
        P Hao, S Li, Y Li, …, J Hao, <span class="au-me">Qifan Liang</span>, Z Kou, …, Yixuan Yuan, <span class="au-corr">L Zhu<sup>†</sup></span>.
      </span>
    </li>
    <li>
      <span class="pub-list-badge">AAAI 2026</span>
      <span class="pub-list-title">Rethinking Surgical Smoke: A Smoke-Type-Aware Laparoscopic Video Desmoking Method and Dataset</span><br>
      <span class="pub-list-authors">
        <span class="au-me">Qifan Liang</span>, Junlin Li, <span class="au-corr">Zhen Han<sup>†</sup></span>, Xihao Wang, Zhongyuan Wang, Bin Mei.
      </span>
      <span class="pub-list-links">
        <a href="https://ojs.aaai.org/index.php/AAAI/article/view/37617" target="_blank">[paper]</a>
        <a href="https://arxiv.org/abs/2512.02780" target="_blank">[arXiv]</a>
        <a href="https://simon-leong.github.io/STSVD/" target="_blank">[website]</a>
        <a href="https://github.com/Simon-leong/STSVD" target="_blank">[code]</a>
      </span>
    </li>
    <li>
      <span class="pub-list-badge">ACL 2026</span>
      <span style="display:inline-block;padding:1px 7px;border-radius:999px;background:#fef5f1;border:1px solid #f5bba7;color:#ca6f6f;font-size:10px;font-weight:700;vertical-align:middle;margin-right:4px;">🎙 Oral Nominee (SAC)</span>
      <span class="pub-list-title">TED-TTS: Training-Free Intra-Utterance Emotion and Duration Control for Text-to-Speech Synthesis</span><br>
      <span class="pub-list-authors">
        <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, Y Liu<sup class="eq-contrib">*</sup>, R Wei<sup class="eq-contrib">*</sup>, N Lu, <span class="au-corr">Junchuan Zhao<sup>†</sup></span>, Ye Wang.
      </span>
      <span class="pub-list-links">
        <a href="https://aclanthology.org/2026.acl-long.1077/" target="_blank">[paper]</a>
        <a href="https://arxiv.org/abs/2601.03170" target="_blank">[arXiv]</a>
        <a href="https://simon-leong.github.io/TED-TTS-DemoPage/" target="_blank">[website]</a>
        <a href="https://github.com/Simon-leong/TED-TTS" target="_blank">[code]</a>
        <a href="https://huggingface.co/datasets/Chanson-0803/MED-TTS" target="_blank">[dataset]</a>
      </span>
    </li>
    <li>
      <span class="pub-list-badge">IEEE TMM · Under Review</span>
      <span class="pub-list-title">PersonaGest: Personalized Co-Speech Gesture Generation with Semantic-Guided Hierarchical Motion Representation</span><br>
      <span class="pub-list-authors">
        Junchuan Zhao<sup class="eq-contrib">*</sup>, <span class="au-me">Qifan Liang</span><sup class="eq-contrib">*</sup>, <span class="au-corr">Ye Wang<sup>†</sup></span>.
      </span>
      <span class="pub-list-links">
        <a href="https://arxiv.org/abs/2605.07252" target="_blank">[arXiv]</a>
        <a href="https://danny-nus.github.io/PersonaGest/" target="_blank">[website]</a>
      </span>
    </li>
    <li>
      <span class="pub-list-badge">ACM TOMM</span>
      <span class="pub-list-title">Few-Shot Face Sketch-to-Photo Synthesis via Global-Local Asymmetric Image-to-Image Translation</span><br>
      <span class="pub-list-authors">
        Yongkang Li, <span class="au-me">Qifan Liang</span>, <span class="au-corr">Zhen Han<sup>†</sup></span>, Wenjun Mai, Zhongyuan Wang.
      </span>
      <span class="pub-list-links"><a href="https://dl.acm.org/doi/full/10.1145/3672400" target="_blank">[paper]</a></span>
    </li>
  </ul>
</div>

<script src="assets/js/show_publications.js"></script>
<script src="assets/js/pub_media_rotator.js"></script>


<div class="section-heading" style="--accent:#d4a847;" id="awards">🏆 Honors &amp; Awards</div>

- *2025.05* **Outstanding Undergraduate Thesis** · *Wuhan University*
- *2025.05* **Lei Jun Computer Innovation and Development Fund** & **Lei Jun Computer Research Grant** (Rate: 7.2%, major-wide) · *Xiaomi Corporation*
- *2025.03* **Outstanding Graduate** (Top 5%) · *School of Computer Science, Wuhan University*
- *2024.11* **Outstanding Undergraduate Scholarship** (1/254, major-wide) · *DiDi Inc.*
- *2024, 2023.10* **Merit Student** (Top 5%, school-wide) · *Wuhan University*
- *2024.05* **National University Students' Innovation & Entrepreneurship Fund** (Top 3%, school-wide) · *Wuhan University*
- *2024.03* **Lei Jun Computer Innovation and Development Fund** (Rate: 7.2%, major-wide) · *Xiaomi Corporation*
- *2023.11* **Outstanding Undergraduate Scholarship** (1/254, major-wide) · *Samsung Group, South Korea*
- *2023.10* **First-Class Scholarship** (Top 5%, school-wide) · *Wuhan University*
- *2023.06* **National Grand Prize** (Top 0.5%, nation-wide) · *2023 National University Student Surveying & Mapping Competition*


<div class="section-heading" style="--accent:#9b7ec8;" id="services">🤝 Services</div>

- Conference Reviewer: AAAI 2026, NeurIPS 2026, AAAI 2027, ICLR 2027
- Presenter, AAAI Conference on Artificial Intelligence (AAAI 2026), Singapore, Jan 2026
- Presenter, Annual Meeting of the Association for Computational Linguistics (ACL 2026), Online, Jul 2026
- Conference Participant, China Computer Federation (CCF) Computer Networking Conference, Wenzhou, China, 2023
- Conference Participant, Intelligent Transportation Networking and Telematics Yongjia Forum, Yongjia, China, 2023

<div class="section-heading" style="--accent:#5b9a7d;" id="misc">🎨 Miscellaneous</div>

<p class="misc-intro">Outside the lab, I spend most of my free time on calligraphy and badminton.</p>

<div class="hobby-grid">
  <div class="hobby-card">
    <div class="hobby-visual">
      <img src="images/new/calligraphy.jpg" alt="My calligraphy scroll reading 宁静致远, laid over practice sheets" loading="lazy">
    </div>
    <div>
      <div class="hobby-title">🖌️ Calligraphy<span class="hobby-zh">书法</span></div>
      <div class="hobby-text">
I turn to calligraphy when I want to slow down. I lay out a sheet of rice paper and write a few characters at a time. Once a stroke is on the paper, there is no taking it back, so I have to stay focused. By the time I put the brush down, I usually feel much calmer.
      </div>
    </div>
  </div>
  <div class="hobby-card">
    <div class="hobby-visual" aria-hidden="true">
      <svg viewBox="0 0 112 184" width="112" height="184" role="img">
        <rect width="112" height="184" fill="#5a9f78"/>
        <g fill="none" stroke="#fff" stroke-width="1.6" opacity="0.9">
          <rect x="8" y="8" width="96" height="168"/>
          <line x1="16" y1="8" x2="16" y2="176"/>
          <line x1="96" y1="8" x2="96" y2="176"/>
          <line x1="8" y1="64" x2="104" y2="64"/>
          <line x1="8" y1="120" x2="104" y2="120"/>
          <line x1="56" y1="8" x2="56" y2="64"/>
          <line x1="56" y1="120" x2="56" y2="176"/>
        </g>
        <line x1="2" y1="92" x2="110" y2="92" stroke="#f3f3f3" stroke-width="3"/>
        <path d="M30 160 Q 20 70 82 34" fill="none" stroke="#fff6c8" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="74" y="40" font-size="20">🏸</text>
      </svg>
    </div>
    <div>
      <div class="hobby-title">🏸 Badminton<span class="hobby-zh">羽毛球</span></div>
      <div class="hobby-text">
Badminton is the sport I play most often. After a long week of experiments, spending a couple of hours on the court with friends is one of my favorite ways to switch off and recharge.
      </div>
    </div>
  </div>
</div>

<div style="margin-top: 48px; text-align: center; max-width: 320px; margin-left: auto; margin-right: auto;">
  <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=E19svFXhNl-NvlQ9D8WYML9reL0DgcN2SeacEpzMfX4&cl=ffffff&w=320"></script>
</div>
