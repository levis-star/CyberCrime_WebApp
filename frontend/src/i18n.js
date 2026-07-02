import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      /* ── Navbar ─────────────────────────────────────────── */
      report:    'Report incident',
      awareness: 'Awareness',
      chatbot:   'Guidance',
      track:     'Track case',
      admin:     'Admin',
      about:     'About us',
      login:     'Login',

      /* ── Citizen Portal ─────────────────────────────────── */
      portalEyebrow: 'Tanzania public safety portal',
      headline: 'Report cybercrime, learn prevention, and follow your case safely.',
      subhead:  'A mobile-first public safety portal for scams, mobile money fraud, harassment, phishing, and identity theft.',

      portalHighlights: [
        { title: 'Anonymous or verified',       sub: 'Submit safely — no account required.' },
        { title: 'Live scam alerts',            sub: 'Regional alerts for fraud and phishing.' },
        { title: 'Bilingual guidance',          sub: 'NLP support in English and Kiswahili.' },
        { title: 'Works on any device',         sub: 'Low-bandwidth friendly, mobile-first.' },
      ],

      chooseSection: { eyebrow: 'Where would you like to go?', heading: 'Choose your action' },

      navCards: [
        { title: 'Report incident',  text: 'Submit a cybercrime report safely and anonymously.' },
        { title: 'Track your case',  text: 'Check the status of a report using your tracking code.' },
        { title: 'Awareness hub',    text: 'Bilingual guides on fraud, phishing, and how to stay safe.' },
        { title: 'Get guidance',     text: 'Ask the AI chatbot what to do and how to preserve evidence.' },
      ],

      howSection: {
        eyebrow:    'Step by step',
        heading:    'How to report a cybercrime',
        para:       'The full reporting process takes about five minutes. Here is exactly what happens.',
        ctaReport:  'Open report wizard',
        ctaChatbot: 'Ask the chatbot first',
      },

      howCards: [
        { step: '01', title: 'Report the crime',              text: 'Fill in our guided wizard — takes about 5 minutes. Report anonymously or as a verified citizen. No technical knowledge required.' },
        { step: '02', title: 'Receive your tracking code',    text: 'After submission you instantly receive a unique case number like TZ-CC-2026-0001. Keep it safe — it is your only key to follow your report.' },
        { step: '03', title: 'Investigators review your case', text: 'Our analysts assess severity and assign your case to the correct authority — police, TCRA, FIA, or another task force — for your region.' },
        { step: '04', title: 'Track progress anytime',        text: 'Use your tracking code on the Track Case page at any time to see status updates, which task force is handling your case, and their region.' },
      ],

      crimeSection: {
        eyebrow: 'We handle',
        heading: 'Types of cybercrime you can report',
        para:    'Our system supports all major categories of digital crime affecting Tanzanians.',
      },

      crimeItems: [
        { label: 'Mobile Money Fraud',            desc: 'Fake M-Pesa requests, fraudulent transfers, agent impersonation.' },
        { label: 'SIM Swap Attack',               desc: 'Criminals port your number to steal mobile banking access.' },
        { label: 'Phishing & Fake Links',         desc: 'Fraudulent websites, fake bank portals, deceptive SMS links.' },
        { label: 'Identity Theft',                desc: 'Stolen personal data used to open accounts or commit fraud.' },
        { label: 'Online Job Scams',              desc: 'Fake employment offers demanding registration or advance fees.' },
        { label: 'Cyberbullying / Harassment',    desc: 'Threats, blackmail, or targeted online abuse of any person.' },
        { label: 'Hacking / Unauthorised Access', desc: 'Breach of personal accounts, devices, or business systems.' },
        { label: 'Online Extortion',              desc: 'Sextortion, ransomware, or threats to publish private content.' },
      ],

      whoSection: { eyebrow: 'Who it serves', heading: 'Built for every Tanzanian' },

      whoItems: [
        { title: 'Citizens',           text: 'Any Tanzanian who has experienced or witnessed a cybercrime.' },
        { title: 'Businesses',         text: 'Small businesses, banks, mobile money agents targeted by fraud.' },
        { title: 'Students',           text: 'Young people facing cyberbullying, fake scholarships, or harassment.' },
        { title: 'Community leaders',  text: 'Ward leaders and teachers reporting on behalf of community members.' },
      ],

      tipsSection: {
        eyebrow: 'Stay protected',
        heading: 'Three rules every Tanzanian should know',
        readAll: 'Read all safety guides',
      },

      tipItems: [
        { title: 'Never share your PIN',  text: 'No legitimate bank, mobile money service, or government office will ever call to ask for your PIN or password.' },
        { title: 'Verify before you pay', text: "Always double-check payment requests via a separate call to the person's known number before transferring money." },
        { title: 'Screenshot everything', text: 'If you suspect a crime, screenshot all messages, calls, and transactions immediately — before anything is deleted.' },
      ],

      legalNote: {
        heading: 'Legal framework & your rights',
        text:    'This portal operates under the Tanzania Cybercrimes Act No. 14 of 2015, the Electronic and Postal Communications Act (EPOCA) 2010, and the Personal Data Protection Act 2022. All reports are handled with full confidentiality. Your identity is never published. Evidence is retained only for active investigations.',
        policy:  'Read our full privacy policy →',
      },

      /* ── About Us ───────────────────────────────────────── */
      aboutHero: {
        eyebrow: 'Tanzania public safety system',
        heading: 'About CyberSafe TZ',
        para:    'CyberSafe TZ is a bilingual cybercrime reporting and awareness portal built to help Tanzanian citizens, businesses, and communities report digital offences safely, learn how to protect themselves online, and follow their case status — all without requiring technical knowledge or a registered account.',
        visual:  "Protecting Tanzania's digital community",
      },

      aboutMission: {
        eyebrow: 'Our mission',
        heading: 'What this system is built to do',
        para:    'CyberSafe TZ was built to close the gap between Tanzanians experiencing cybercrime and the authorities who can act on it.',
      },

      missionItems: [
        { title: 'Safe, private reporting',    text: 'Any citizen can submit a cybercrime report anonymously — no name or account needed. A private tracking code is issued immediately so victims can follow their case without revealing their identity.' },
        { title: 'Bilingual public awareness', text: 'Prevention guides and real-case breakdowns are available in both English and Kiswahili, covering mobile money fraud, phishing, fake jobs, SIM swap, and identity theft.' },
        { title: 'Intelligent NLP guidance',   text: 'An AI-powered chatbot helps victims understand what steps to take, how to preserve digital evidence, and when to escalate their case to law enforcement.' },
        { title: 'Full case transparency',     text: 'Citizens track their report status at any time using only their tracking code — no login required. Status updates include which task force has been assigned and in which region.' },
      ],

      aboutCommit: {
        eyebrow: 'Our promise to you',
        heading: 'Our commitment to every citizen',
        para:    'We built CyberSafe TZ around one principle: every Tanzanian deserves to report crime safely, without fear.',
      },

      commitItems: [
        { heading: 'Your identity stays private',       text: 'Reports can be submitted fully anonymously — no account, no name, no personal details required. A private tracking code is issued so only you can follow your case.' },
        { heading: 'Your data is never sold or shared', text: 'Information you submit is shared only with the assigned law enforcement authority handling your specific case. It is never sold, published, or disclosed to any third party.' },
        { heading: 'Cases reviewed within 48 hours',    text: 'Every submitted report is reviewed by a trained analyst within 48 hours. High-severity incidents — such as active fraud or financial theft — are escalated immediately.' },
        { heading: 'Reports archived, never destroyed', text: "Submitted reports and attached evidence are securely archived after case closure — never permanently deleted. Case records may be required as legal exhibits in court proceedings and are retained in compliance with Tanzania's evidence preservation laws." },
      ],

      aboutAuthorities: {
        eyebrow: 'Official contacts',
        heading: 'Cybercrime reporting authorities',
        para:    'For urgent threats, active financial theft, or cases involving violence — contact these authorities directly in addition to submitting a report here.',
        open:    'Open: ',
      },

      /* ── Track Case ─────────────────────────────────────── */
      trackHero: {
        eyebrow: 'Case status',
        heading: 'Track your report',
        para:    'Enter the unique case number you received after submitting your report.',
      },
      trackPlaceholder:  'e.g. TZ-CC-2026-0001',
      trackSearch:       'Search',
      trackSearching:    'Searching…',
      trackNotFound:     'No case found with that tracking code. Please check the code and try again.',
      trackLabels: {
        region:          'Region (Mkoa)',
        district:        'District (Wilaya)',
        severity:        'Severity score',
        submitted:       'Submitted',
        taskForce:       'Task force',
        assignedRegion:  'Assigned region (Mkoa)',
        assignedDistrict:'Assigned district (Wilaya)',
        assignedOn:      'Assigned on',
      },
      trackAwaiting: {
        heading: 'Awaiting assignment',
        para:    'Your case is in the review queue and will be assigned to the relevant authority shortly.',
      },
      trackAssignedHeading: 'Case assigned to task force',
      trackEvidence:        'Attached evidence',

      /* ── Report Wizard ──────────────────────────────────── */
      wizardHero:  { eyebrow: 'Incident intake', heading: 'Report wizard' },
      wizardSteps: ['Category', 'Details', 'Location', 'Identity', 'Review'],
      wizardCategory: 'Crime category',
      wizardDetails: {
        label:       'What happened?',
        minChar:     'min',
        placeholder: 'Describe the incident in detail — what happened, when, and how…',
        hasEvidence: 'I have screenshots, PDFs, phone numbers, links, or transaction references.',
      },
      wizardLocation: {
        region:          'Mkoa (Region)',
        district:        'Wilaya (District)',
        street:          'Street / Mtaa',
        phone:           'Phone number / Namba ya simu',
        streetPh:        'Enter street or mtaa name',
        phonePh:         'e.g. +255 7XX XXX XXX',
        districtDefault: '— select district —',
      },
      wizardIdentity: {
        anonTitle:   'Anonymous',
        anonSub:     'No account identity is attached to this report.',
        verifiedTitle:'Verified',
        verifiedSub: 'Attach your identity so investigators can follow up with you.',
        hint:        'Your details are kept confidential and only shared with assigned investigators.',
        name:        'Full name',
        phone:       'Current phone number',
        namePh:      'Enter your full name',
        phonePh:     'e.g. +255 7XX XXX XXX',
      },
      wizardReview: {
        category:     'Category',
        description:  'Description',
        region:       'Region',
        district:     'District',
        street:       'Street / Mtaa',
        phone:        'Phone number',
        identity:     'Identity',
        name:         'Full name',
        verifiedPhone:'Verified phone',
        hasEvidence:  'Has evidence',
        yes:          'Yes',
        no:           'No',
        none:         '—',
      },
      wizardNav: { back: 'Back', next: 'Next', submit: 'Submit report' },
      wizardBlocker: {
        heading: 'Leave this page?',
        para:    'You have started a crime report. If you leave now, your progress will be lost and cannot be recovered.',
        stay:    'Continue reporting',
        leave:   'Discard & leave',
      },
      wizardSuccess: {
        eyebrow:      'Case registered successfully',
        heading:      'Your case number',
        copy:         'Copy',
        copied:       'Copied!',
        instructions: 'Save this number carefully. It is the only way to check your case status without revealing your identity. Write it down or copy it now.',
        category:     'Category',
        region:       'Region',
        district:     'District',
        severity:     'Severity score',
      },
      wizardEvidence: {
        heading:   'Attach evidence',
        optional:  'optional',
        hint:      'Upload screenshots, PDFs, or text files (max 5 MB each). PNG, JPG, WEBP, PDF, TXT.',
        choose:    'Choose file',
        uploading: 'Uploading…',
      },

      /* ── Chatbot ────────────────────────────────────────── */
      chatbotHero:    { eyebrow: 'Fraud guidance', heading: 'Rule-based chatbot' },
      chatbotInitial: 'Describe the cybercrime concern.',
      chatbotPh:      'Describe your concern…',
      chatbotSend:    'Send',
      chatbotThinking:'Thinking…',
      chatbotError:   'Sorry, the guidance service is unavailable right now. Please try again.',
      chatbotEscalation: {
        heading: 'This situation may require immediate action',
        para:    'Contact your service provider or relevant authority immediately. Submit a formal report here to open an investigation.',
      },

      /* ── Awareness Hub ──────────────────────────────────── */
      awarenessHero:  { eyebrow: 'Prevention library', heading: 'Awareness hub' },
      awarenessEmpty: { heading: 'No content available', para: 'Try switching the language or check back later.' },

      /* ── Policy ─────────────────────────────────────────── */
      policyHero: {
        eyebrow: 'Compliance and citizen guidance',
        heading: 'Privacy and responsible reporting',
        para:    'These guidelines help citizens protect themselves, preserve evidence, and submit reports that can be reviewed safely and professionally.',
      },
      policySections: [
        { title: 'Protect yourself before an incident',
          text: 'Use strong passwords, avoid reusing the same password on many services, and enable two-step verification where it is available. Keep your mobile money PIN, OTP codes, and recovery codes private. Be careful with public Wi-Fi, shared computers, and links sent through SMS or social media. A person who pressures you to act immediately, send money, or reveal private information should be treated as suspicious until verified through an official channel.' },
        { title: 'Preserve evidence correctly',
          text: 'If you believe an offense has happened, do not delete messages, block accounts before saving details, or edit screenshots. Keep phone numbers, usernames, profile links, transaction IDs, dates, times, email addresses, website links, and screenshots. Evidence is stronger when it shows the full context of the conversation and the original source of the request.' },
        { title: 'Report with accurate information',
          text: 'A report should explain what happened in simple order: how the contact started, what the suspect requested, what information or money was shared, and when you discovered the problem. Do not exaggerate or include unrelated personal information. If you report anonymously, keep your tracking code safe because it is the only way to follow the case without revealing identity.' },
        { title: 'Privacy and responsible use',
          text: 'This system should collect only the information needed for case intake and awareness response. Administrators must protect victim identity, avoid publishing private evidence, and use access only for lawful review. Public alerts should warn citizens about patterns of fraud without exposing victims, suspects, or sensitive investigation details.' },
        { title: 'When to escalate quickly',
          text: 'Urgent cases include active financial theft, SIM swap, threats of violence, child safety concerns, identity theft, blackmail, or ongoing harassment. In those cases, contact the relevant service provider or authority immediately while also submitting a structured report with evidence.' },
      ],

      /* ── Footer ─────────────────────────────────────────── */
      footerTagline: 'Tanzania Cybercrime Reporting Portal',
      footerLinks: [
        { to: '/report',    label: 'Report incident' },
        { to: '/awareness', label: 'Awareness hub' },
        { to: '/chatbot',   label: 'Guidance' },
        { to: '/track',     label: 'Track case' },
        { to: '/policy',    label: 'Privacy & policy' },
      ],
      footerContacts: {
        heading: 'Emergency contacts',
        police:  'Police',
        unit:    'Cybercrime unit',
        email:   'Email',
        about:   'About this system →',
      },
      footerCopyright: 'Tanzania Cybercrime Reporting System',
      footerAct:       'Built under Tanzania Cybercrimes Act 2015',

      /* ── Login ──────────────────────────────────────────── */
      loginHero: {
        eyebrow: 'Restricted access',
        heading: 'Admin operations login',
        para:    'Authorized staff can review incoming cybercrime reports, monitor public alerts, and verify case activity. Citizen reporting remains available only while logged out.',
      },
      loginForm: {
        heading:    'Sign in',
        email:      'Email',
        password:   'Password',
        submit:     'Login',
        submitting: 'Signing in…',
        error:      'Invalid email or password.',
      },
    },
  },

  /* ════════════════════════════════════════════════════════ */
  /*  KISWAHILI                                              */
  /* ════════════════════════════════════════════════════════ */
  sw: {
    translation: {
      /* ── Navbar ─────────────────────────────────────────── */
      report:    'Ripoti tukio',
      awareness: 'Elimu',
      chatbot:   'Msaada',
      track:     'Fuatilia kesi',
      admin:     'Usimamizi',
      about:     'Kuhusu sisi',
      login:     'Ingia',

      /* ── Citizen Portal ─────────────────────────────────── */
      portalEyebrow: 'Mfumo wa usalama wa Tanzania',
      headline: 'Ripoti uhalifu mtandao, jifunze kujikinga, na fuatilia kesi yako kwa usalama.',
      subhead:  'Mfumo rahisi kwa simu kwa utapeli, wizi wa fedha mtandao, unyanyasaji, hadaa, na wizi wa utambulisho.',

      portalHighlights: [
        { title: 'Bila jina au imethibitishwa',        sub: 'Wasilisha kwa usalama — hakuna akaunti inayohitajika.' },
        { title: 'Tahadhari za utapeli moja kwa moja', sub: 'Tahadhari za kikanda kwa udanganyifu na hadaa.' },
        { title: 'Msaada wa lugha mbili',              sub: 'Msaada kwa Kiingereza na Kiswahili.' },
        { title: 'Inafanya kazi kwenye kifaa chochote', sub: 'Inafaa kwa mtandao mdogo, simu kwanza.' },
      ],

      chooseSection: { eyebrow: 'Unataka kwenda wapi?', heading: 'Chagua hatua yako' },

      navCards: [
        { title: 'Ripoti tukio',       text: 'Wasilisha ripoti ya uhalifu wa mtandao kwa usalama na bila kutambulika.' },
        { title: 'Fuatilia kesi yako', text: 'Angalia hali ya ripoti kwa kutumia nambari yako ya ufuatiliaji.' },
        { title: 'Kituo cha elimu',    text: 'Miongozo ya lugha mbili kuhusu udanganyifu, hadaa, na jinsi ya kukaa salama.' },
        { title: 'Pata ushauri',       text: 'Uliza roboti ya AI nini cha kufanya na jinsi ya kuhifadhi ushahidi.' },
      ],

      howSection: {
        eyebrow:    'Hatua kwa hatua',
        heading:    'Jinsi ya kuripoti uhalifu wa mtandao',
        para:       'Mchakato wote wa kuripoti unachukua karibu dakika tano. Hapa ni hasa kinachotokea.',
        ctaReport:  'Fungua kisaidizi cha ripoti',
        ctaChatbot: 'Uliza roboti kwanza',
      },

      howCards: [
        { step: '01', title: 'Ripoti uhalifu',                   text: 'Jaza kisaidizi chetu — inachukua karibu dakika 5. Ripoti bila jina au kama raia aliyethibitishwa. Hakuna ujuzi wa kiufundi unaohitajika.' },
        { step: '02', title: 'Pokea nambari yako ya ufuatiliaji', text: 'Baada ya kutuma unapokea mara moja nambari ya kipekee ya kesi kama TZ-CC-2026-0001. Ihifadhi salama — ndiyo ufunguo wako pekee wa kufuatilia ripoti yako.' },
        { step: '03', title: 'Wachunguzi wanakagua kesi yako',   text: 'Wachambuzi wetu wanatathmini ukali na kuweka kesi yako kwa mamlaka sahihi — polisi, TCRA, FIA, au kikosi kingine — kwa mkoa wako.' },
        { step: '04', title: 'Fuatilia maendeleo wakati wowote',  text: 'Tumia nambari yako ya ufuatiliaji kwenye ukurasa wa Fuatilia Kesi wakati wowote kuona masasisho ya hali, ni kikosi gani kinashughulikia kesi yako, na mkoa wao.' },
      ],

      crimeSection: {
        eyebrow: 'Tunashughulikia',
        heading: 'Aina za uhalifu wa mtandao unazoweza kuripoti',
        para:    'Mfumo wetu unasaidia makundi yote makuu ya uhalifu wa kidijitali unaoathiri Watanzania.',
      },

      crimeItems: [
        { label: 'Udanganyifu wa Fedha kwa Simu',     desc: 'Maombi ya M-Pesa bandia, uhamisho wa kiulaghai, kujifanya wakala.' },
        { label: 'Shambulio la Kubadilisha SIM',       desc: 'Wahalifu wanahamisha nambari yako ili kuiba upatikanaji wa benki ya simu.' },
        { label: 'Hadaa na Viungo Bandia',             desc: 'Tovuti za kiulaghai, mfumo wa benki bandia, viungo vya SMS vya kudanganya.' },
        { label: 'Wizi wa Utambulisho',                desc: 'Data ya kibinafsi iliyoibiwa kutumika kufungua akaunti au kufanya udanganyifu.' },
        { label: 'Udanganyifu wa Kazi Mtandaoni',      desc: 'Matangazo bandia ya ajira yanayohitaji ada ya usajili au malipo ya awali.' },
        { label: 'Unyanyasaji wa Mtandao',             desc: 'Vitisho, maudhui ya kutisha, au unyanyasaji wa makusudi dhidi ya mtu yeyote.' },
        { label: 'Uvamizi / Upatikanaji Usioruhusiwa', desc: 'Uvunjaji wa akaunti za kibinafsi, vifaa, au mifumo ya biashara.' },
        { label: 'Unyakuzi wa Mtandao',                desc: 'Vitisho vya picha za siri, programu ya kukomba, au vitisho vya kuchapisha maudhui ya kibinafsi.' },
      ],

      whoSection: { eyebrow: 'Inawahudumia nani', heading: 'Imejengwa kwa kila Mtanzania' },

      whoItems: [
        { title: 'Raia',              text: 'Mtanzania yeyote aliyepitia au kushuhudia uhalifu wa mtandao.' },
        { title: 'Biashara',          text: 'Biashara ndogo, benki, mawakala wa fedha kwa simu waliokusudiwa na udanganyifu.' },
        { title: 'Wanafunzi',         text: 'Vijana wanaokabili unyanyasaji wa mtandao, udanganyifu wa ufadhili, au unyanyasaji.' },
        { title: 'Viongozi wa jamii', text: 'Viongozi wa mtaa na walimu wanaoripoti kwa niaba ya wanajamii.' },
      ],

      tipsSection: {
        eyebrow: 'Jilinde',
        heading: 'Kanuni tatu kila Mtanzania anapaswa kujua',
        readAll: 'Soma miongozo yote ya usalama',
      },

      tipItems: [
        { title: 'Usishiriki PIN yako kamwe',        text: 'Hakuna benki halisi, huduma ya fedha kwa simu, au ofisi ya serikali itakayokupigia simu kuomba PIN au nywila yako.' },
        { title: 'Thibitisha kabla ya kulipa',        text: 'Daima angalia mara mbili maombi ya malipo kupitia simu tofauti kwa nambari inayojulikana ya mtu kabla ya kuhamisha pesa.' },
        { title: 'Piga picha ya skrini ya kila kitu', text: 'Ukishuku uhalifu, piga picha ya skrini ya ujumbe wote, simu, na miamala mara moja — kabla ya kitu chochote kufutwa.' },
      ],

      legalNote: {
        heading: 'Mfumo wa kisheria na haki zako',
        text:    'Mfumo huu unafanya kazi chini ya Sheria ya Uhalifu wa Mtandao ya Tanzania Nambari 14 ya 2015, Sheria ya Mawasiliano ya Kielektroniki na Posta (EPOCA) ya 2010, na Sheria ya Ulinzi wa Data Binafsi ya 2022. Ripoti zote zinashughulikiwa kwa usiri kamili. Utambulisho wako hauchapishwi. Ushahidi huhifadhiwa kwa uchunguzi unaoendelea tu.',
        policy:  'Soma sera yetu kamili ya faragha →',
      },

      /* ── About Us ───────────────────────────────────────── */
      aboutHero: {
        eyebrow: 'Mfumo wa usalama wa Tanzania',
        heading: 'Kuhusu CyberSafe TZ',
        para:    'CyberSafe TZ ni mfumo wa kuripoti uhalifu wa mtandao na kuhamasisha kwa lugha mbili, uliojengwa kusaidia raia wa Tanzania, biashara, na jamii kuripoti makosa ya kidijitali kwa usalama, kujifunza jinsi ya kujilinda mtandaoni, na kufuatilia hali ya kesi yao — bila kuhitaji ujuzi wa kiufundi au akaunti iliyosajiliwa.',
        visual:  'Kulinda jamii ya kidijitali ya Tanzania',
      },

      aboutMission: {
        eyebrow: 'Dhamira yetu',
        heading: 'Mfumo huu umejengwa kufanya nini',
        para:    'CyberSafe TZ ulijengwa kuziba pengo kati ya Watanzania wanaopitia uhalifu wa mtandao na mamlaka zinazoweza kuchukua hatua.',
      },

      missionItems: [
        { title: 'Kuripoti kwa usalama na faragha', text: 'Raia yeyote anaweza kutuma ripoti ya uhalifu wa mtandao bila kutoa jina — hakuna jina au akaunti inayohitajika. Nambari ya siri ya ufuatiliaji inatolewa mara moja ili wahanga waweze kufuatilia kesi yao bila kufichua utambulisho wao.' },
        { title: 'Uhamasishaji wa lugha mbili',      text: 'Miongozo ya kuzuia na uchambuzi wa kesi halisi unapatikana kwa Kiingereza na Kiswahili, ukishughulikia udanganyifu wa fedha kwa simu, hadaa, kazi bandia, kubadilisha SIM, na wizi wa utambulisho.' },
        { title: 'Mwongozo wa akili ya bandia',      text: 'Roboti ya mazungumzo inayotumia AI inasaidia wahanga kuelewa hatua za kuchukua, jinsi ya kuhifadhi ushahidi wa kidijitali, na wakati wa kupeleka kesi kwa polisi.' },
        { title: 'Uwazi kamili wa kesi',             text: 'Raia wanafuatilia hali ya ripoti yao wakati wowote kwa kutumia nambari yao ya ufuatiliaji peke yake — hakuna kuingia kuhitajika. Masasisho ya hali yanajumuisha ni kikosi gani kimeteuliwa na katika mkoa gani.' },
      ],

      aboutCommit: {
        eyebrow: 'Ahadi yetu kwako',
        heading: 'Ahadi yetu kwa kila raia',
        para:    'Tulijenga CyberSafe TZ kuzunguka kanuni moja: kila Mtanzania anastahili kuripoti uhalifu kwa usalama, bila hofu.',
      },

      commitItems: [
        { heading: 'Utambulisho wako unabaki siri',           text: 'Ripoti zinaweza kutumwa bila kutoa jina kabisa — hakuna akaunti, hakuna jina, hakuna maelezo ya kibinafsi yanayohitajika. Nambari ya siri ya ufuatiliaji inatolewa ili wewe peke yako uweze kufuatilia kesi yako.' },
        { heading: 'Data yako haitauzwa wala kushirikiwa',    text: 'Taarifa unazotuma zinashirikiwa tu na mamlaka ya utekelezaji wa sheria iliyoteuliwa kushughulikia kesi yako maalum. Hazitauzwi, kuchapishwa, wala kufichuliwa kwa mtu yeyote wa tatu.' },
        { heading: 'Kesi zinapitiwa ndani ya masaa 48',      text: 'Kila ripoti iliyotumwa inapitiwa na mchambuzi aliyefunzwa ndani ya masaa 48. Matukio ya ukali mkubwa — kama udanganyifu unaoendelea au wizi wa fedha — yanafufuliwa mara moja.' },
        { heading: 'Ripoti zinawekwa kumbukumbu, hazifutwa', text: "Ripoti zilizotumwa na ushahidi uliounganishwa huhifadhiwa salama baada ya kufunga kesi — hazifutwa kabisa. Rekodi za kesi zinaweza kuhitajika kama ushahidi mahakamani na zinahifadhiwa kwa kufuata sheria za Tanzania za uhifadhi wa ushahidi." },
      ],

      aboutAuthorities: {
        eyebrow: 'Mawasiliano rasmi',
        heading: 'Mamlaka za kuripoti uhalifu wa mtandao',
        para:    'Kwa vitisho vya haraka, wizi wa fedha unaoendelea, au kesi zinazohusisha udhalimu — wasiliana na mamlaka hizi moja kwa moja pamoja na kutuma ripoti hapa.',
        open:    'Wazi: ',
      },

      /* ── Track Case ─────────────────────────────────────── */
      trackHero: {
        eyebrow: 'Hali ya kesi',
        heading: 'Fuatilia ripoti yako',
        para:    'Ingiza nambari ya kipekee ya kesi uliyopewa baada ya kutuma ripoti yako.',
      },
      trackPlaceholder:  'mfano: TZ-CC-2026-0001',
      trackSearch:       'Tafuta',
      trackSearching:    'Inatafuta…',
      trackNotFound:     'Hakuna kesi iliyopatikana kwa nambari hiyo ya ufuatiliaji. Tafadhali angalia nambari na ujaribu tena.',
      trackLabels: {
        region:          'Mkoa',
        district:        'Wilaya',
        severity:        'Kiwango cha ukali',
        submitted:       'Imetumwa',
        taskForce:       'Kikosi',
        assignedRegion:  'Mkoa uliowekwa',
        assignedDistrict:'Wilaya iliyowekwa',
        assignedOn:      'Imeteuliwa tarehe',
      },
      trackAwaiting: {
        heading: 'Inasubiri uteuzi',
        para:    'Kesi yako iko kwenye foleni ya ukaguzi na itateuliwa kwa mamlaka husika hivi karibuni.',
      },
      trackAssignedHeading: 'Kesi imeteuliwa kwa kikosi',
      trackEvidence:        'Ushahidi uliounganishwa',

      /* ── Report Wizard ──────────────────────────────────── */
      wizardHero:  { eyebrow: 'Kuingiza tukio', heading: 'Kisaidizi cha ripoti' },
      wizardSteps: ['Kategoria', 'Maelezo', 'Mahali', 'Utambulisho', 'Mapitio'],
      wizardCategory: 'Kategoria ya uhalifu',
      wizardDetails: {
        label:       'Nini kimetokea?',
        minChar:     'kiwango cha chini',
        placeholder: 'Eleza tukio kwa kina — nini kilitokea, lini, na jinsi gani…',
        hasEvidence: 'Nina picha za skrini, PDF, namba za simu, viungo, au marejeleo ya miamala.',
      },
      wizardLocation: {
        region:          'Mkoa',
        district:        'Wilaya',
        street:          'Mtaa / Barabara',
        phone:           'Namba ya simu',
        streetPh:        'Ingiza jina la mtaa au barabara',
        phonePh:         'mfano: +255 7XX XXX XXX',
        districtDefault: '— chagua wilaya —',
      },
      wizardIdentity: {
        anonTitle:    'Bila jina',
        anonSub:      'Hakuna utambulisho uliounganishwa kwenye ripoti hii.',
        verifiedTitle:'Imethibitishwa',
        verifiedSub:  'Unganisha utambulisho wako ili wachunguzi waweze kukufuatilia.',
        hint:         'Maelezo yako yanawekwa siri na yanashirikiwa tu na wachunguzi waliowekwa.',
        name:         'Jina kamili',
        phone:        'Namba ya simu ya sasa',
        namePh:       'Ingiza jina lako kamili',
        phonePh:      'mfano: +255 7XX XXX XXX',
      },
      wizardReview: {
        category:     'Kategoria',
        description:  'Maelezo',
        region:       'Mkoa',
        district:     'Wilaya',
        street:       'Mtaa / Barabara',
        phone:        'Namba ya simu',
        identity:     'Utambulisho',
        name:         'Jina kamili',
        verifiedPhone:'Simu iliyothibitishwa',
        hasEvidence:  'Ana ushahidi',
        yes:          'Ndiyo',
        no:           'Hapana',
        none:         '—',
      },
      wizardNav: { back: 'Rudi', next: 'Endelea', submit: 'Wasilisha ripoti' },
      wizardBlocker: {
        heading: 'Kutoka ukurasa huu?',
        para:    'Umeanza ripoti ya uhalifu. Ukiondoka sasa, maendeleo yako yatapotea na hayawezi kurejeshwa.',
        stay:    'Endelea kuripoti',
        leave:   'Acha na utoke',
      },
      wizardSuccess: {
        eyebrow:      'Kesi imesajiliwa kwa mafanikio',
        heading:      'Nambari yako ya kesi',
        copy:         'Nakili',
        copied:       'Imenakiliwa!',
        instructions: 'Hifadhi nambari hii kwa uangalifu. Ndiyo njia pekee ya kuangalia hali ya kesi yako bila kufichua utambulisho wako. Iandike au inakili sasa.',
        category:     'Kategoria',
        region:       'Mkoa',
        district:     'Wilaya',
        severity:     'Kiwango cha ukali',
      },
      wizardEvidence: {
        heading:   'Unganisha ushahidi',
        optional:  'si lazima',
        hint:      'Pakia picha za skrini, PDF, au faili za maandishi (kiwango cha juu 5 MB kila moja). PNG, JPG, WEBP, PDF, TXT.',
        choose:    'Chagua faili',
        uploading: 'Inapakia…',
      },

      /* ── Chatbot ────────────────────────────────────────── */
      chatbotHero:    { eyebrow: 'Mwongozo wa udanganyifu', heading: 'Roboti ya mwongozo' },
      chatbotInitial: 'Eleza tatizo lako la mtandao.',
      chatbotPh:      'Andika swali lako…',
      chatbotSend:    'Tuma',
      chatbotThinking:'Inafikiri…',
      chatbotError:   'Samahani, huduma haipatikani sasa hivi. Tafadhali jaribu tena.',
      chatbotEscalation: {
        heading: 'Hali hii inaweza kuhitaji hatua za haraka',
        para:    'Wasiliana na mtoa huduma wako au mamlaka husika mara moja. Tuma ripoti rasmi hapa ili uchunguzi uanze.',
      },

      /* ── Awareness Hub ──────────────────────────────────── */
      awarenessHero:  { eyebrow: 'Maktaba ya kuzuia', heading: 'Kituo cha elimu' },
      awarenessEmpty: { heading: 'Hakuna maudhui yanayopatikana', para: 'Jaribu kubadilisha lugha au angalia tena baadaye.' },

      /* ── Policy ─────────────────────────────────────────── */
      policyHero: {
        eyebrow: 'Uzingatifu na mwongozo wa raia',
        heading: 'Faragha na kuripoti kwa uwajibikaji',
        para:    'Miongozo hii inasaidia raia kujilinda, kuhifadhi ushahidi, na kutuma ripoti zinazoweza kupitiwa kwa usalama na kwa kiwango cha kitaalamu.',
      },
      policySections: [
        { title: 'Jilinde kabla ya tukio',
          text: 'Tumia nywila kali, epuka kutumia nywila ile ile kwenye huduma nyingi, na washa uthibitishaji wa hatua mbili iwapo inapatikana. Weka PIN yako ya fedha kwa simu, msimbo wa OTP, na msimbo wa kurejesha kwa siri. Kuwa makini na Wi-Fi ya umma, kompyuta za kushirikiana, na viungo vilivyotumwa kupitia SMS au mitandao ya kijamii. Mtu anayekushinikiza kuchukua hatua mara moja, kutuma pesa, au kufichua taarifa za kibinafsi anapaswa kutiwa shaka hadi uthibitishwe kupitia njia rasmi.' },
        { title: 'Hifadhi ushahidi kwa usahihi',
          text: 'Ukiamini kosa limetokea, usifute ujumbe, usizuie akaunti kabla ya kuhifadhi maelezo, wala kusihariri picha za skrini. Hifadhi namba za simu, majina ya watumiaji, viungo vya wasifu, vitambulisho vya miamala, tarehe, nyakati, anwani za barua pepe, viungo vya tovuti, na picha za skrini. Ushahidi una nguvu zaidi unapoonyesha muktadha kamili wa mazungumzo na chanzo asili cha ombi.' },
        { title: 'Ripoti kwa taarifa sahihi',
          text: 'Ripoti inapaswa kueleza kilichotokea kwa mpangilio rahisi: jinsi mawasiliano yalivyoanza, mtuhumiwa alitaka nini, taarifa au pesa gani zilishirikiwa, na ulipogundua tatizo. Usizidishe wala kujumuisha taarifa za kibinafsi zisizohusiana. Ukiwasilisha bila kutoa jina, hifadhi nambari yako ya ufuatiliaji kwa sababu ndiyo njia pekee ya kufuatilia kesi bila kufichua utambulisho.' },
        { title: 'Faragha na matumizi ya kuwajibika',
          text: 'Mfumo huu unapaswa kukusanya taarifa zinazohitajika tu kwa kuingiza kesi na majibu ya uhamasishaji. Wasimamizi lazima walinde utambulisho wa wahanga, waepuke kuchapisha ushahidi wa kibinafsi, na watumie upatikanaji kwa ukaguzi wa kisheria tu. Tahadhari za umma zinapaswa kuonya raia kuhusu mifumo ya udanganyifu bila kufichua wahanga, watuhumiwa, au maelezo ya uchunguzi nyeti.' },
        { title: 'Wakati wa kupanda haraka',
          text: 'Kesi za haraka ni pamoja na wizi wa fedha unaoendelea, kubadilisha SIM, vitisho vya udhalimu, wasiwasi wa usalama wa watoto, wizi wa utambulisho, maudhui ya kutisha, au unyanyasaji unaoendelea. Katika hali hizo, wasiliana na mtoa huduma au mamlaka husika mara moja huku ukituma ripoti iliyopangwa yenye ushahidi.' },
      ],

      /* ── Footer ─────────────────────────────────────────── */
      footerTagline: 'Mfumo wa Kuripoti Uhalifu wa Mtandao Tanzania',
      footerLinks: [
        { to: '/report',    label: 'Ripoti tukio' },
        { to: '/awareness', label: 'Kituo cha elimu' },
        { to: '/chatbot',   label: 'Msaada' },
        { to: '/track',     label: 'Fuatilia kesi' },
        { to: '/policy',    label: 'Faragha na sera' },
      ],
      footerContacts: {
        heading: 'Mawasiliano ya dharura',
        police:  'Polisi',
        unit:    'Kitengo cha uhalifu wa mtandao',
        email:   'Barua pepe',
        about:   'Kuhusu mfumo huu →',
      },
      footerCopyright: 'Mfumo wa Kuripoti Uhalifu wa Mtandao Tanzania',
      footerAct:       'Umejengwa chini ya Sheria ya Uhalifu wa Mtandao ya Tanzania 2015',

      /* ── Login ──────────────────────────────────────────── */
      loginHero: {
        eyebrow: 'Upatikanaji wa kikwazo',
        heading: 'Ingia kwa uendeshaji wa usimamizi',
        para:    'Wafanyakazi walioidhinishwa wanaweza kupitia ripoti zinazoingia za uhalifu wa mtandao, kufuatilia tahadhari za umma, na kuthibitisha shughuli za kesi. Kuripoti kwa raia kunapatikana tu bila kuingia.',
      },
      loginForm: {
        heading:    'Ingia',
        email:      'Barua pepe',
        password:   'Nywila',
        submit:     'Ingia',
        submitting: 'Inaingia…',
        error:      'Barua pepe au nywila si sahihi.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
