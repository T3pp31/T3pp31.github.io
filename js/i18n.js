/*!
 * Simple JA / EN i18n for the portfolio
 */
(function () {
  const STORAGE_KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'ja';

  const translations = {
    ja: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.interests': 'Interests',
      'nav.libraries': 'Libraries',
      'nav.security': 'Security',
      'nav.projects': 'Projects',
      'nav.publications': 'Publications',
      'nav.awards': 'Awards',
      'nav.toggle': 'メニューを開閉',

      'about.role': 'Full-Stack Engineer',
      'about.lead': 'メーカーでソフトウェアエンジニアをしています．現在はネットワークスペシャリスト取得に向けて取り組んでいます．',
      'about.kaggle': 'Kaggle Competition Expert',

      'experience.title': 'Experience',
      'experience.company1.name': 'メーカー',
      'experience.company1.desc': 'ソフトウェアエンジニア，データ解析，予測などの開発を行っています．',
      'experience.company1.date': '2026.2 - 現在',
      'experience.company2.name': '一般社団法人共同通信社',
      'experience.company2.desc': '内製開発，AWSを活用した開発，保守運用，外部ベンダとの開発を行ってきました．',
      'experience.company2.date': '2023.4 - 2026.1',
      'experience.company3.name': 'SAgri',
      'experience.company3.role': 'インターン，データサイエンティスト，データクレンジング',
      'experience.company3.desc': 'Pythonを用いてデータクレンジングを行っていました．その他，解析作業なども適宜行っていました．QGISを用いてマッピングも行っていました．',
      'experience.company3.date': '2021.10 - 2023.3',
      'experience.company4.name': 'N高校',
      'experience.company4.role': 'プログラミングTA',
      'experience.company4.desc': 'インターンシップで，プログラミングTAを行っていました．',
      'experience.company4.date': '2021.7 - 2022.10',

      'education.title': 'Education',
      'education.school': '中央大学',
      'education.degree': '国際情報学士',
      'education.fields': 'コンピュータサイエンス，情報法学，セキュリティ',
      'education.date': '2019.4 - 2023.3',

      'skills.title': 'Skills',
      'skills.subtitle': 'Programming Languages & Tools',

      'interests.title': 'Interests',
      'interests.p1': '技術全般に興味があります．特にセキュリティには面白さを感じ，独学を行っています．また，Kaggleコンペティションに意欲的に参加し，データ分析の知見を深めているところです．．',
      'interests.p2': 'セキュリティを理解するために，技術の特性について，深く学んでいく必要があると考えています．',

      'libraries.title': 'Libraries',
      'libraries.intro': 'コントリビュートしているライブラリ一覧です。（名称とURL、任意で簡単な説明）',
      'libraries.caesar': ' — シーザー暗号を簡単に使うためのライブラリ in Rust.',
      'libraries.input_py': ' — Python用の入力補助ライブラリ in Rust.',
      'libraries.scapy': ' — Python用のパケット操作ライブラリ.気が向いたときにコントリビュートしています．大学時代お世話になりました．',

      'security.title': 'Security Research',
      'security.intro': '脆弱性報告および修正に関わった CVE / アドバイザリです。',
      'security.loadError': 'CVE 一覧の読み込みに失敗しました。',

      'projects.title': 'Projects',
      'projects.intro': '開発した実績です。題目とURLを掲載しています。',
      'projects.loadError': 'プロジェクト一覧の読み込みに失敗しました。',

      'publications.title': 'Publications',
      'publications.paper1.title': 'Bluetooth Low Energy, Blockchainを用いた勤怠管理システムの提案',
      'publications.paper1.authors': '福富 哲平，宮前 圭吾, 大塚主浩, 吉野 満理絵, 松崎 和賢',
      'publications.paper1.journal': '情報処理学会 第85回全国大会講演論文集, 巻 2023, 号 1, p. 657-658, 発行日 2023-02-16',
      'publications.paper1.abstract': '近年の労働現場での勤怠を正確に把握するシステムの需要に対して、プライベートブロックチェーン技術とBluetooth Low Energyを利用したシステムを提案する。本研究では、従業員の出退勤を自動的に記録し、改ざん防止のためにブロックチェーン技術を活用します。',
      'publications.paper1.linkPaper': '論文ページ',
      'publications.paper1.linkOrg': '情報処理学会',

      'awards.title': 'Awards & Certifications',
      'awards.item1': 'データ分析フェスティバル（主催：中央大学理工学部データサイエンス・AIクラスター）において，奨励賞受賞',
      'awards.item2': 'TOEIC 735 2021年11月',
      'awards.item3': 'ITパスポート',
      'awards.item4': '基本情報技術者 2021年3月',
      'awards.item5': '応用情報技術者 2024年4月',
      'awards.item6': '情報処理安全確保支援士試験合格 2025年10月',
      'awards.item7': 'AWS Certified Cloud Practitioner - 2023/07/20',
      'awards.item8': 'AWS Certified Solutions Architect - Associate 2025/05/26',
      'awards.item9': 'AWS Certified Solutions Architect - Professional 2025/11/21',
      'awards.item10': '技術局長努力賞，スポーツ系システム 2024年4月',
      'awards.item11': '事業局長努力賞，放送局向けシステム開発 2025年4月',
      'awards.item12': 'Kaggle,Yale/UNC-CH - Geophysical Waveform Inversion 38th/1365 銀メダル 2025年7月',
      'awards.item13': 'Kaggle,CMI - Detect Behavior with Sensor Data 92th/2657 銀メダル 2025年9月',
      'awards.item14': 'Kaggle,NeurIPS - Open Polymer Prediction 2025 120th/2240 銅メダル 2025年9月',
      'awards.item15': 'Kaggle,Stanford RNA 3D Folding Part 2 33th/1867 銀メダル 2025年9月',
      'awards.item16': 'Kaggle,Jigsaw - Agile Community Rules Classification 28th/2445 銀メダル 2025年10月',
      'awards.item17': 'Kaggle,MAP - Charting Student Math Misunderstandings 15th/1857 銀メダル 2025年10月',
      'awards.item18': 'Kaggle,CAFA 6 Protein Function Prediction 36th/2259 銀メダル 2026年5月',
      'awards.item19': 'Kaggle,NVIDIA Nemotron Model Reasoning Challenge 90th/4182 銀メダル 2026年6月',
      'awards.item20': 'Kaggle,The 2026 NeuroGolf Championship 50th/2963 銀メダル 2026年7月',
      'awards.item21': '防衛省サイバーセキュリティコンテスト 10位 588 Team_Ichigaya',
      'awards.item21.alt': '防衛省サイバーセキュリティコンテスト',
    },
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.interests': 'Interests',
      'nav.libraries': 'Libraries',
      'nav.security': 'Security',
      'nav.projects': 'Projects',
      'nav.publications': 'Publications',
      'nav.awards': 'Awards',
      'nav.toggle': 'Toggle navigation',

      'about.role': 'Full-Stack Engineer',
      'about.lead': 'I work as a software engineer at a manufacturer. I am currently studying for the Network Specialist exam.',
      'about.kaggle': 'Kaggle Competition Expert',

      'experience.title': 'Experience',
      'experience.company1.name': 'Manufacturer',
      'experience.company1.desc': 'Working on software engineering, data analysis, and prediction systems.',
      'experience.company1.date': 'Feb 2026 – Present',
      'experience.company2.name': 'Kyodo News',
      'experience.company2.desc': 'Built and maintained in-house systems on AWS, and collaborated with external vendors.',
      'experience.company2.date': 'Apr 2023 – Jan 2026',
      'experience.company3.name': 'SAgri',
      'experience.company3.role': 'Intern, Data Scientist, Data Cleansing',
      'experience.company3.desc': 'Performed data cleansing in Python, analysis tasks as needed, and mapping with QGIS.',
      'experience.company3.date': 'Oct 2021 – Mar 2023',
      'experience.company4.name': 'N High School',
      'experience.company4.role': 'Programming Teaching Assistant',
      'experience.company4.desc': 'Served as a programming TA during an internship.',
      'experience.company4.date': 'Jul 2021 – Oct 2022',

      'education.title': 'Education',
      'education.school': 'Chuo University',
      'education.degree': 'B.A. in Global Informatics',
      'education.fields': 'Computer Science, Information Law, Security',
      'education.date': 'Apr 2019 – Mar 2023',

      'skills.title': 'Skills',
      'skills.subtitle': 'Programming Languages & Tools',

      'interests.title': 'Interests',
      'interests.p1': 'I am broadly interested in technology. Security is especially engaging, and I study it independently. I also actively join Kaggle competitions to deepen my data analysis skills.',
      'interests.p2': 'I believe understanding security requires a deep grasp of how technologies actually behave.',

      'libraries.title': 'Libraries',
      'libraries.intro': 'Libraries I contribute to (name, URL, and a short description).',
      'libraries.caesar': ' — A Rust library for simple Caesar cipher encryption/decryption.',
      'libraries.input_py': ' — A Rust-backed input helper library for Python.',
      'libraries.scapy': ' — A Python packet manipulation library. I contribute when I can; it helped me a lot in university.',

      'security.title': 'Security Research',
      'security.intro': 'CVEs and advisories I reported or helped fix.',
      'security.loadError': 'Failed to load CVE list.',

      'projects.title': 'Projects',
      'projects.intro': 'Selected projects I have built, with titles and links.',
      'projects.loadError': 'Failed to load projects.',

      'publications.title': 'Publications',
      'publications.paper1.title': 'A Proposal for an Attendance Management System Using Bluetooth Low Energy and Blockchain',
      'publications.paper1.authors': 'Teppei Fukutomi, Keigo Miyamae, Kazuhiro Otsuka, Marie Yoshino, Kazutaka Matsuzaki',
      'publications.paper1.journal': 'IPSJ 85th National Convention Proceedings, Vol. 2023, No. 1, pp. 657–658, Feb 16, 2023',
      'publications.paper1.abstract': 'To meet demand for accurate workplace attendance tracking, we propose a system that uses private blockchain and Bluetooth Low Energy. The system automatically records employee check-in/out and leverages blockchain for tamper resistance.',
      'publications.paper1.linkPaper': 'Paper page',
      'publications.paper1.linkOrg': 'IPSJ',

      'awards.title': 'Awards & Certifications',
      'awards.item1': 'Encouragement Award, Data Analysis Festival (Chuo University Faculty of Science and Engineering Data Science / AI Cluster)',
      'awards.item2': 'TOEIC 735 — November 2021',
      'awards.item3': 'IT Passport',
      'awards.item4': 'Fundamental Information Technology Engineer — March 2021',
      'awards.item5': 'Applied Information Technology Engineer — April 2024',
      'awards.item6': 'Information Security Specialist exam passed — October 2025',
      'awards.item7': 'AWS Certified Cloud Practitioner — 2023/07/20',
      'awards.item8': 'AWS Certified Solutions Architect – Associate — 2025/05/26',
      'awards.item9': 'AWS Certified Solutions Architect – Professional — 2025/11/21',
      'awards.item10': 'Technical Director Effort Award, sports systems — April 2024',
      'awards.item11': 'Business Director Effort Award, broadcast systems — April 2025',
      'awards.item12': 'Kaggle, Yale/UNC-CH – Geophysical Waveform Inversion 38th/1365 Silver — July 2025',
      'awards.item13': 'Kaggle, CMI – Detect Behavior with Sensor Data 92th/2657 Silver — September 2025',
      'awards.item14': 'Kaggle, NeurIPS – Open Polymer Prediction 2025 120th/2240 Bronze — September 2025',
      'awards.item15': 'Kaggle, Stanford RNA 3D Folding Part 2 33th/1867 Silver — September 2025',
      'awards.item16': 'Kaggle, Jigsaw – Agile Community Rules Classification 28th/2445 Silver — October 2025',
      'awards.item17': 'Kaggle, MAP – Charting Student Math Misunderstandings 15th/1857 Silver — October 2025',
      'awards.item18': 'Kaggle, CAFA 6 Protein Function Prediction 36th/2259 Silver — May 2026',
      'awards.item19': 'Kaggle, NVIDIA Nemotron Model Reasoning Challenge 90th/4182 Silver — June 2026',
      'awards.item20': 'Kaggle, The 2026 NeuroGolf Championship 50th/2963 Silver — July 2026',
      'awards.item21': 'MOD Cybersecurity Contest 10th place — 588 Team_Ichigaya',
      'awards.item21.alt': 'MOD Cybersecurity Contest',
    },
  };

  let currentLang = DEFAULT_LANG;

  function getPreferredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ja' || stored === 'en') return stored;
    return DEFAULT_LANG;
  }

  function getLang() {
    return currentLang;
  }

  function t(key, lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return dict[key] ?? translations[DEFAULT_LANG][key] ?? key;
  }

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key, lang);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(key, lang));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      el.setAttribute('alt', t(key, lang));
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang-btn');
      const active = btnLang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function setLang(lang) {
    if (lang !== 'ja' && lang !== 'en') return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function initLangToggle() {
    const lang = getPreferredLang();
    applyTranslations(lang);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  window.PortfolioI18n = {
    t,
    setLang,
    getLang,
    init: initLangToggle,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }
})();
