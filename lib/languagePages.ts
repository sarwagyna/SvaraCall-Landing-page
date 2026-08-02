export type LanguageCallLine =
  | { t: number; kind: "status"; text: string }
  | {
      t: number;
      kind: "agent" | "customer";
      text: string;
      gloss?: string;
    };

export type LanguagePage = {
  slug: string;
  name: string;
  nativeName: string;
  scriptLabel: string;
  locale: string;
  langAttr: string;
  script: "devanagari" | "gurmukhi" | "bengali" | "tamil" | "telugu" | "kannada" | "malayalam" | "gujarati" | "latin";
  status: "live" | "roadmap";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subcopy: string;
  primaryCta: string;
  heroChips?: string[];
  stats: { value: string; label: string }[];
  useCasesTitle: string;
  useCases: { title: string; body: string }[];
  voicesTitle: string;
  voices: { name: string; gender: "Male" | "Female"; locale: string; accent?: string }[];
  dialectsTitle: string;
  dialectsBody: string;
  dialectSample: string;
  dialectSampleGloss: string;
  dialectQuote: string;
  faqsTitle: string;
  faqs: { q: string; a: string }[];
  callLabel: string;
  callLength: number;
  callOutcome: string;
  callScript: LanguageCallLine[];
  bandImage: string;
};

export const languagePages: LanguagePage[] = [
  {
    slug: "hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    scriptLabel: "Devanagari",
    locale: "hi-IN",
    langAttr: "hi",
    script: "devanagari",
    status: "live",
    metaTitle: "Hindi Voice Agents — AI Calling in हिन्दी",
    metaDescription:
      "Hindi voice agents that sound local. Human-sounding, low-latency, multi-dialect outbound calls with Hinglish code-switching — premium quality at a fraction of a calling team's cost.",
    eyebrow: "Languages · Hindi (Devanagari)",
    headline: "Hindi voice agents that sound local",
    subcopy:
      "Human-sounding, low-latency Hindi agents across dialects — with Hinglish when callers mix English mid-sentence.",
    primaryCta: "Start a free trial call",
    heroChips: [
      "Multi-dialect",
      "Hinglish ready",
      "Low latency",
      "24/7 reach",
    ],
    stats: [
      { value: "60 Cr+", label: "Hindi speakers addressable across India" },
      { value: "4+", label: "Regional dialects supported" },
      { value: "2+", label: "Production voices available" },
      { value: "<800ms", label: "Typical response latency" },
    ],
    useCasesTitle: "Where Hindi voice agents win business",
    useCases: [
      {
        title: "Multi-dialect focus",
        body: "Cover Delhi–NCR, UP, MP, and more — so callers hear Hindi that matches how they actually speak.",
      },
      {
        title: "Local-sounding speech",
        body: "Natural pacing and phrasing that feel like a trained agent, not a scripted IVR.",
      },
      {
        title: "24/7 reachability",
        body: "Reminders, follow-ups, and confirmations around the clock without growing the calling desk.",
      },
    ],
    voicesTitle: "Production voices in Hindi",
    voices: [
      {
        name: "Priya",
        gender: "Female",
        locale: "hi-IN",
        accent: "Hindi–Indian",
      },
      {
        name: "Arjun",
        gender: "Male",
        locale: "hi-IN",
        accent: "Hindi–Indian",
      },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Handles regional Hindi variation and switches into Hinglish when customers mix English — without breaking the turn or sounding scripted.",
    dialectSample: "आपका EMI due है — should I send the payment link?",
    dialectSampleGloss: "Your EMI is due — should I send the payment link?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Hindi voice AI, common questions",
    faqs: [
      {
        q: "Which Hindi dialects do you support?",
        a: "Delhi–NCR, UP, and MP coverage ships with the live Hindi stack, with escalation when speech is unclear. Tell us your regions on the pilot.",
      },
      {
        q: "Can it switch into Hinglish?",
        a: "Yes. Most urban callers code-switch. The agent follows their mix while keeping compliance phrases on-script.",
      },
      {
        q: "How natural does the Hindi voice sound?",
        a: "Two-way conversation with natural pacing — not IVR menus. Book a pilot and we'll place a live Hindi call to your number.",
      },
      {
        q: "How do I integrate Hindi agents?",
        a: "Upload a contact sheet or connect your CRM, pick a workflow, and start. Hindi ships today alongside Telugu and English.",
      },
    ],
    callLabel: "Outbound · EMI reminder",
    callLength: 28,
    callOutcome: "Promise-to-pay · Link sent · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "नमस्ते, मैं प्रिया बोल रही हूँ — आपके लोन के बारे में एक छोटा सा रिमाइंडर है।",
        gloss: "Hello, this is Priya — a short reminder about your loan.",
      },
      {
        t: 10,
        kind: "customer",
        text: "हाँ बोलिए, कितना बाकी है?",
        gloss: "Yes, how much is pending?",
      },
      {
        t: 16,
        kind: "agent",
        text: "इस महीने का EMI ₹4,200 due है। क्या मैं payment link WhatsApp पर भेज दूँ?",
        gloss: "This month's EMI of ₹4,200 is due. Shall I send the payment link on WhatsApp?",
      },
      {
        t: 24,
        kind: "customer",
        text: "हाँ, भेज दीजिए।",
        gloss: "Yes, please send it.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "hinglish",
    name: "Hinglish",
    nativeName: "Hinglish",
    scriptLabel: "Hindi–English",
    locale: "hi-IN",
    langAttr: "hi",
    script: "latin",
    status: "live",
    metaTitle: "Hinglish Voice Agents — Codeswitching AI for Indian Phones",
    metaDescription:
      "Hinglish voice agents built for the phone — codeswitching, mixed accents, and natural Hindi–English turns for urban India outbound calls.",
    eyebrow: "Optimised for India",
    headline: "Voice agents built for codeswitching on the phone",
    subcopy:
      "The voice stack for Indian phones — codeswitching, mixed accents, and dual particles. Hindi for warmth, English for product terms, mid-sentence when callers switch.",
    primaryCta: "Try a demo on call",
    heroChips: [
      "Codeswitching",
      "Mixed accents",
      "Urban metros",
      "Low latency",
    ],
    stats: [
      { value: "35 Cr+", label: "Urban population addressable in India" },
      { value: "8", label: "Major city accents planned" },
      { value: "2+", label: "Accent variations available" },
      { value: "<800ms", label: "Typical response latency" },
    ],
    useCasesTitle: "Where Hinglish voice agents win business",
    useCases: [
      {
        title: "Urban main calls",
        body: "Handle mixed-language calls in metros where customers flip between Hindi and English every turn.",
      },
      {
        title: "Financial services",
        body: "Insurance, EMI, and banking follow-ups that keep product terms in English and empathy in Hindi.",
      },
      {
        title: "Debt recovery",
        body: "Sensitive collection conversations that sound human — firm on the ask, respectful in the mix.",
      },
    ],
    voicesTitle: "Production voices in Hinglish",
    voices: [
      { name: "Geeta", gender: "Female", locale: "hi-IN", accent: "Neutral" },
      { name: "Kavya", gender: "Female", locale: "hi-IN", accent: "Urban" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Switches between Hindi and English naturally mid-sentence — product nouns in English, empathy and closings in Hindi — without awkward full-language flips.",
    dialectSample: "Aapka trial expire ho raha hai — should I extend it for a week?",
    dialectSampleGloss: "Your trial is about to expire — should I extend it for a week?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Hinglish voice AI, common questions",
    faqs: [
      {
        q: "How well is Hinglish understood?",
        a: "Agents are tuned for bilingual turns common in NCR, Mumbai, and Bangalore — English product terms inside Hindi sentences, following the caller's mix.",
      },
      {
        q: "Can it speak only in Hindi or only in English?",
        a: "Yes. Use our Hindi agent for primarily Hindi regions, English when needed, or Hinglish when CRM tags show urban bilingual preference.",
      },
      {
        q: "What kind of accents are supported?",
        a: "Metro-leaning Hinglish with major city accent coverage. Brand names and compliance phrases stay in English by design.",
      },
      {
        q: "How fast can it respond in Hinglish?",
        a: "Typical response latency is under 800ms. Book a pilot and we'll place a live Hinglish call to your number.",
      },
    ],
    callLabel: "Outbound · Trial win-back",
    callLength: 26,
    callOutcome: "Trial extended · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "Hi, main Geeta bol rahi hoon from LearnPro — aapka free trial kal expire ho raha hai.",
        gloss: "Hi, this is Geeta from LearnPro — your free trial expires tomorrow.",
      },
      {
        t: 10,
        kind: "customer",
        text: "Haan, thoda busy tha. Kya extend kar sakte ho?",
        gloss: "Yeah, I was busy. Can you extend it?",
      },
      {
        t: 16,
        kind: "agent",
        text: "Bilkul — main ek week extend kar deti hoon. Confirmation SMS aa jayega.",
        gloss: "Absolutely — I'll extend it by a week. You'll get a confirmation SMS.",
      },
      {
        t: 22,
        kind: "customer",
        text: "Perfect, thanks.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "telugu",
    name: "Telugu",
    nativeName: "తెలుగు",
    scriptLabel: "Telugu",
    locale: "te-IN",
    langAttr: "te",
    script: "telugu",
    status: "live",
    metaTitle: "Telugu Voice Agents — AI Calling in తెలుగు",
    metaDescription:
      "Telugu voice agents that sound local across Andhra Pradesh and Telangana. Natural, fluent outbound calls for callbacks, EdTech counseling, and clinic booking.",
    eyebrow: "Languages · Telugu",
    headline: "Telugu voice agents that sound local",
    subcopy:
      "Our AI sounds like native speakers — natural, fluent Telugu conversations with English when callers switch.",
    primaryCta: "Start building for free",
    heroChips: [
      "Telangana",
      "Coastal Andhra",
      "Rayalaseema",
      "Nellore",
      "Hyderabadi",
    ],
    stats: [
      { value: "8.1 Cr+", label: "Native Telugu speakers in India" },
      { value: "5+", label: "Dialects & accents supported" },
      { value: "2+", label: "Telugu production voices" },
      { value: "<800ms", label: "Typical response latency" },
    ],
    useCasesTitle: "Where Telugu voice agents win business",
    useCases: [
      {
        title: "Callbacks & lead sales",
        body: "Reach hot intent fast — qualify and book the next step before the lead goes cold.",
      },
      {
        title: "EdTech counseling",
        body: "Follow up student enquiries, answer fee questions, and book counselor slots in Telugu.",
      },
      {
        title: "Finance & clinic booking",
        body: "Schedule appointments and send reminders patients and borrowers actually confirm.",
      },
    ],
    voicesTitle: "Production voices in Telugu",
    voices: [
      { name: "Lakshmi", gender: "Female", locale: "te-IN", accent: "Neutral" },
      { name: "Ravi", gender: "Male", locale: "te-IN", accent: "Neutral" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Handles Telangana, coastal Andhra, Rayalaseema, Nellore, and Hyderabadi speech — and mixes English for fees, dates, and product names when callers do.",
    dialectSample: "మీ appointment రేపు 10:30 కి ఉంది — confirm చేస్తారా?",
    dialectSampleGloss: "Your appointment is tomorrow at 10:30 — will you confirm?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Telugu voice AI, common questions",
    faqs: [
      {
        q: "How natural does the Telugu voice sound?",
        a: "Two-way conversation with natural pacing and prosody — not IVR menus. Hear a live call on your number when you book a pilot.",
      },
      {
        q: "Can it respond to technical Telugu or dialect variation?",
        a: "Yes. Prompting covers common regional variation across AP and Telangana, with escalation when speech is unclear.",
      },
      {
        q: "What makes a Telugu voice agent local?",
        a: "Accent accuracy, cultural phrasing, and code-switching the way Hyderabad and coastal callers already speak on the phone.",
      },
      {
        q: "How fast can I set up a Telugu campaign?",
        a: "Telugu ships today. Upload a sheet or connect your CRM, pick a workflow, and we can place a sample call within your pilot kickoff.",
      },
    ],
    callLabel: "Outbound · Appointment confirm",
    callLength: 28,
    callOutcome: "Confirmed · Calendar updated",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "నమస్కారం, నేను లక్ష్మి — రేపటి డాక్టర్ అపాయింట్‌మెంట్ గురించి కాల్ చేశాను.",
        gloss: "Hello, I'm Lakshmi — calling about tomorrow's doctor appointment.",
      },
      {
        t: 10,
        kind: "customer",
        text: "అవును, ఎప్పుడు ఉంది?",
        gloss: "Yes, when is it?",
      },
      {
        t: 16,
        kind: "agent",
        text: "రేపు ఉదయం 10:30. మీరు వస్తారా అని confirm చేయండి.",
        gloss: "Tomorrow morning at 10:30. Please confirm if you'll come.",
      },
      {
        t: 24,
        kind: "customer",
        text: "అవును, వస్తాను.",
        gloss: "Yes, I'll come.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "tamil",
    name: "Tamil",
    nativeName: "தமிழ்",
    scriptLabel: "Tamil",
    locale: "ta-IN",
    langAttr: "ta",
    script: "tamil",
    status: "roadmap",
    metaTitle: "Tamil Voice Agents — AI Calling in தமிழ்",
    metaDescription:
      "Tamil voice agents that sound local. SvaraCall is expanding outbound AI calling in natural Tamil for NBFC, hospital front desk, and media workflows.",
    eyebrow: "AI voice agents for Tamil",
    headline: "Tamil voice agents that sound local",
    subcopy:
      "Build and scale voice agents in Tamil that understand local accents and keep conversations natural — from Chennai metros to statewide callers.",
    primaryCta: "Build your Tamil voice agent",
    stats: [
      { value: "6.9 Cr+", label: "Tamil speakers in India" },
      { value: "5+", label: "Tamil dialect options planned" },
      { value: "2+", label: "Voice model options in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Tamil voice agents win business",
    useCases: [
      {
        title: "NBFC & vertical finance",
        body: "Guide loans, credit cards, and EMI follow-ups in Tamil customers trust on the phone.",
      },
      {
        title: "Media & multimedia",
        body: "Power interactive Tamil voice experiences for campaigns, characters, and audience engagement.",
      },
      {
        title: "Hospital front desk",
        body: "Streamline patient check-ins, reminders, and confirmations without growing the calling desk.",
      },
    ],
    voicesTitle: "Production voices in Tamil",
    voices: [
      { name: "Meena", gender: "Female", locale: "ta-IN", accent: "Neutral" },
      { name: "Karthik", gender: "Male", locale: "ta-IN", accent: "Neutral" },
    ],
    dialectsTitle: "Dialects & accent switching",
    dialectsBody:
      "Handles Chennai and western TN speech patterns, and switches accents when callers do — with English mixed in for fees, dates, and brand terms.",
    dialectSample: "உங்க appointment நாளை 11 மணிக்கு — confirm பண்ணலாமா?",
    dialectSampleGloss: "Your appointment is tomorrow at 11 — shall we confirm?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Tamil voice AI, common questions",
    faqs: [
      {
        q: "How real does the Tamil voice agent sound?",
        a: "Conversational Tamil with natural pacing — not IVR menus — at the same bar as our live Telugu and Hindi agents, with human handoff for complex turns.",
      },
      {
        q: "Will it switch between Tamil dialects and accents?",
        a: "That's the plan — regional coverage with escalation when speech is unclear. Share your markets when you book a pilot.",
      },
      {
        q: "What do I need to do to get started?",
        a: "Upload a contact sheet or connect your CRM, pick a workflow, and we place a sample call to your number. Tamil ships on the roadmap after Telugu, Hindi, and English.",
      },
      {
        q: "How long does it take to create a Tamil campaign?",
        a: "Live languages can pilot within days. For Tamil, book a pilot to join the priority list — we'll share timelines for your use case.",
      },
    ],
    callLabel: "Outbound · Hospital check-in",
    callLength: 28,
    callOutcome: "Confirmed · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "வணக்கம், நான் மீனா — நாளை மருத்துவ அப்பாயின்ட்மென்ட் பற்றி அழைக்கிறேன்.",
        gloss: "Hello, I'm Meena — calling about tomorrow's medical appointment.",
      },
      {
        t: 10,
        kind: "customer",
        text: "ஆமா, என்ன நேரம்?",
        gloss: "Yes, what time?",
      },
      {
        t: 16,
        kind: "agent",
        text: "காலை 11 மணி. வர முடியுமா confirm பண்ணுங்க.",
        gloss: "11 in the morning. Please confirm if you can come.",
      },
      {
        t: 24,
        kind: "customer",
        text: "சரி, வருகிறேன்.",
        gloss: "Okay, I'll come.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "bengali",
    name: "Bengali",
    nativeName: "বাংলা",
    scriptLabel: "Bengali",
    locale: "bn-IN",
    langAttr: "bn",
    script: "bengali",
    status: "roadmap",
    metaTitle: "Bengali Voice Agents — AI Calling in বাংলা",
    metaDescription:
      "Bengali voice agents that sound local. SvaraCall is expanding outbound AI calling in Bangla with local dialects for cart recovery, COD, and feedback calls.",
    eyebrow: "Built for local context",
    headline: "Bengali voice agents that sound local",
    subcopy:
      "AI voice agents built for calling people in India — using local Bengali context and dialects, not generic English scripts.",
    primaryCta: "Book a Bengali voice call",
    stats: [
      { value: "9.7 Cr+", label: "Bengali speakers in India" },
      { value: "4", label: "Major dialects planned" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Bengali voice agents win business",
    useCases: [
      {
        title: "Abandoned cart & signups",
        body: "Recover revenue with persuasive Bangla reminders while intent is still hot.",
      },
      {
        title: "Promotions & COD",
        body: "Validate Cash-on-Delivery orders and drive repeat purchases with clear local calls.",
      },
      {
        title: "Feedback & reminders",
        body: "Collect rich feedback and send appointment or payment reminders families understand.",
      },
    ],
    voicesTitle: "Production voices in Bengali",
    voices: [
      { name: "Miya", gender: "Female", locale: "bn-IN", accent: "Neutral" },
      { name: "Arif", gender: "Male", locale: "bn-IN", accent: "Dhaka" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Switches between Bangla and English mid-turn when callers do — so product names, fees, and addresses stay natural without sounding scripted.",
    dialectSample: "আপনার EMI বাকি আছে — payment link পাঠাবো?",
    dialectSampleGloss: "Your EMI is pending — shall I send the payment link?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Bengali voice AI, common questions",
    faqs: [
      {
        q: "How many dialects of Bengali do you support?",
        a: "We're planning coverage for major Indian Bangla varieties used on the phone, with escalation when speech is unclear. Tell us your region when you book a pilot.",
      },
      {
        q: "Will I be able to detect the difference between AI and a human?",
        a: "Conversations are two-way with natural pacing — not IVR menus. The bar matches our live Telugu and Hindi agents: local feel, with human handoff for complex turns.",
      },
      {
        q: "What data is a Bengali voice agent trained on?",
        a: "Scripts and prompts are grounded in your use case — cart recovery, COD, reminders — plus Bangla conversational patterns. Outcomes and transcripts stay on your dashboard.",
      },
      {
        q: "How fast can I start using Bengali voice agents?",
        a: "Bengali is on the roadmap. Telugu, Hindi, and English ship today — book a pilot to prioritize Bangla and hear a sample call on your number.",
      },
    ],
    callLabel: "Outbound · COD confirm",
    callLength: 28,
    callOutcome: "COD confirmed · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "নমস্কার, আমি মিয়া — আপনার order confirm করতে কল করেছি।",
        gloss: "Hello, I'm Miya — calling to confirm your order.",
      },
      {
        t: 10,
        kind: "customer",
        text: "হ্যাঁ, কখন আসবে?",
        gloss: "Yes, when will it arrive?",
      },
      {
        t: 16,
        kind: "agent",
        text: "কাল সন্ধ্যার আগে। COD ₹899 — ঠিক আছে তো?",
        gloss: "Before tomorrow evening. COD ₹899 — is that okay?",
      },
      {
        t: 24,
        kind: "customer",
        text: "হ্যাঁ, ঠিক আছে।",
        gloss: "Yes, that's fine.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "marathi",
    name: "Marathi",
    nativeName: "मराठी",
    scriptLabel: "Devanagari",
    locale: "mr-IN",
    langAttr: "mr",
    script: "devanagari",
    status: "roadmap",
    metaTitle: "Marathi Voice Agents — AI Calling in मराठी",
    metaDescription:
      "Marathi voice agents that sound local. SvaraCall is expanding outbound AI calling in natural Marathi for e-commerce, real estate follow-ups, and agri-tech outreach.",
    eyebrow: "Languages · Marathi",
    headline: "Marathi voice agents that sound local",
    subcopy:
      "Build Marathi AI voice agents that converse naturally — just like a local would. Every time.",
    primaryCta: "Book a demo",
    stats: [
      { value: "8.3 Cr+", label: "Marathi speakers across Maharashtra" },
      { value: "5", label: "Regional coverage areas planned" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Marathi voice agents win business",
    useCases: [
      {
        title: "E-commerce & retail",
        body: "Manage orders, process returns, and upsell effortlessly in Marathi.",
      },
      {
        title: "Real estate follow-ups",
        body: "Capture and qualify leads, then schedule site visits in the language buyers prefer.",
      },
      {
        title: "Agri-tech outreach",
        body: "Deliver critical information to farmers in the language they trust.",
      },
    ],
    voicesTitle: "Production voices in Marathi",
    voices: [
      {
        name: "Manasi",
        gender: "Female",
        locale: "mr-IN",
        accent: "Professional",
      },
      { name: "Aarav", gender: "Male", locale: "mr-IN", accent: "Friendly" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Supports different Marathi dialects across the state and switches seamlessly between Marathi and English when callers mix languages.",
    dialectSample: "तुमचा EMI बाकी आहे — payment link पाठवू का?",
    dialectSampleGloss: "Your EMI is pending — shall I send the payment link?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Marathi voice AI, common questions",
    faqs: [
      {
        q: "How natural does the Marathi voice sound?",
        a: "Conversational Marathi with natural pacing — not IVR menus — at the same bar as our live Telugu and Hindi agents, with human handoff for complex turns.",
      },
      {
        q: "Can it switch between Marathi and English?",
        a: "Yes. Code-switching is built in — product names, fees, and technical terms stay clear inside Marathi sentences.",
      },
      {
        q: "Which regions will you cover?",
        a: "Pune–Mumbai formal Marathi first, then broader Maharashtra coverage. Share your districts when you book a pilot.",
      },
      {
        q: "How do I get started?",
        a: "Marathi is on the roadmap. Telugu, Hindi, and English ship today — book a demo to prioritize Marathi and hear a sample on your number.",
      },
    ],
    callLabel: "Outbound · Site visit",
    callLength: 28,
    callOutcome: "Visit booked · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "नमस्कार, मी मानसी — पुणे प्रकल्पाच्या site visit बद्दल बोलत आहे.",
        gloss: "Hello, I'm Manasi — calling about the Pune project site visit.",
      },
      {
        t: 10,
        kind: "customer",
        text: "हो, कधी येता येईल?",
        gloss: "Yes, when can I come?",
      },
      {
        t: 16,
        kind: "agent",
        text: "शनिवारी सकाळी 11 वाजता slot आहे. ठरवूया का?",
        gloss: "There's a Saturday 11 AM slot. Shall we lock it?",
      },
      {
        t: 24,
        kind: "customer",
        text: "हो, ठरलं.",
        gloss: "Yes, done.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "gujarati",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    scriptLabel: "Gujarati",
    locale: "gu-IN",
    langAttr: "gu",
    script: "gujarati",
    status: "roadmap",
    metaTitle: "Gujarati Voice Agents — AI Calling in ગુજરાતી",
    metaDescription:
      "Gujarati voice agents that sound local. SvaraCall is expanding outbound AI calling built for Gujarat — customer support, CRM sales, and tele-collections.",
    eyebrow: "Languages · Gujarati",
    headline: "Gujarati voice agents that sound local",
    subcopy:
      "Voice agents built specifically for Gujarat and its native speakers — warm Gujarati on the phone, with English when callers mix.",
    primaryCta: "Free demo call on cell",
    stats: [
      { value: "5.5 Cr+", label: "Gujarati speakers addressable" },
      { value: "3", label: "Live languages today — more on roadmap" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Gujarati voice agents win business",
    useCases: [
      {
        title: "Customer support",
        body: "Resolve status and service queries in Gujarati callers prefer — fewer repeats, faster closes.",
      },
      {
        title: "Sales and marketing (CRM)",
        body: "Qualify leads and follow up from your CRM in the language Ahmedabad and Surat pick up.",
      },
      {
        title: "Tele-collections",
        body: "Payment reminders that keep dignity intact and lift promise-to-pay rates.",
      },
    ],
    voicesTitle: "Production voices in Gujarati",
    voices: [
      { name: "Hansal", gender: "Male", locale: "gu-IN", accent: "Neutral" },
      { name: "Aditi", gender: "Female", locale: "gu-IN", accent: "Neutral" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Understands regional Gujarati variation and switches to English for invoice, product, and bank terms when callers do — without breaking the turn.",
    dialectSample: "તમારું payment બાકી છે — link મોકલું?",
    dialectSampleGloss: "Your payment is pending — shall I send the link?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Gujarati voice AI, common questions",
    faqs: [
      {
        q: "How accurate is Gujarati speech understanding?",
        a: "Agents are tuned for conversational Gujarati on the phone, with escalation when speech is unclear. Same bar as our live Telugu and Hindi stack.",
      },
      {
        q: "Can it integrate with our CRM?",
        a: "Start from a sheet or CRM export on day one. Outcomes, recordings, and transcripts land on one dashboard; deeper hooks follow once the pilot proves out.",
      },
      {
        q: "Is calling data secure?",
        a: "Calls run on your registered numbers with TRAI-ready workflows. Recordings and transcripts stay on your dashboard under DPDP-minded controls.",
      },
      {
        q: "How fast can I try a Gujarati agent?",
        a: "Gujarati is on the roadmap. Telugu, Hindi, and English ship today — book a pilot to prioritize Gujarati and hear a sample on your number.",
      },
    ],
    callLabel: "Outbound · Collection reminder",
    callLength: 28,
    callOutcome: "Promise-to-pay · Link sent",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "નમસ્તે, હું અદિતિ — તમારા EMI ની યાદ અપાવવા કૉલ કરું છું.",
        gloss: "Hello, I'm Aditi — calling to remind you about your EMI.",
      },
      {
        t: 10,
        kind: "customer",
        text: "હા, કેટલું બાકી?",
        gloss: "Yes, how much is pending?",
      },
      {
        t: 16,
        kind: "agent",
        text: "આ મહિનાનું EMI ₹4,200. WhatsApp પર payment link મોકલું?",
        gloss: "This month's EMI is ₹4,200. Shall I send the payment link on WhatsApp?",
      },
      {
        t: 24,
        kind: "customer",
        text: "હા, મોકલો.",
        gloss: "Yes, send it.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "kannada",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    scriptLabel: "Kannada",
    locale: "kn-IN",
    langAttr: "kn",
    script: "kannada",
    status: "roadmap",
    metaTitle: "Kannada Voice Agents — AI Calling in ಕನ್ನಡ",
    metaDescription:
      "Kannada voice agents that sound local. SvaraCall is expanding outbound AI calling in natural Kannada for service CX, housing societies, and anti-fraud verification.",
    eyebrow: "Languages · Kannada",
    headline: "Kannada voice agents that sound local",
    subcopy:
      "Human-like Kannada voice agents for customer experience — clear enough for Bengaluru metros and warm enough for callers across Karnataka.",
    primaryCta: "Build a Kannada agent now",
    stats: [
      { value: "4.4 Cr+", label: "Kannada speakers in India" },
      { value: "6", label: "Northern Karnataka dialects planned" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Kannada voice agents win business",
    useCases: [
      {
        title: "Service CX at scale",
        body: "Automate support follow-ups and status calls in Kannada without growing the desk overnight.",
      },
      {
        title: "Housing societies & rentals",
        body: "Handle community notices, rental enquiries, and visit confirms residents actually answer.",
      },
      {
        title: "Anti-fraud",
        body: "Verify identities and confirm high-risk transactions with structured Kannada voice checks.",
      },
    ],
    voicesTitle: "Production voices in Kannada",
    voices: [
      { name: "Adithi", gender: "Female", locale: "kn-IN", accent: "Neutral" },
      {
        name: "Gautham",
        gender: "Male",
        locale: "kn-IN",
        accent: "Authoritative",
      },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Handles Bengaluru, Hubli, and other Karnataka speech patterns, and mixes English for product and technical terms the way callers already do.",
    dialectSample: "ನಿಮ್ಮ appointment ನಾಳೆ 10:30 — confirm ಮಾಡುತ್ತೀರಾ?",
    dialectSampleGloss: "Your appointment is tomorrow at 10:30 — will you confirm?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Kannada voice AI, common questions",
    faqs: [
      {
        q: "Which Kannada dialects and accents do you support?",
        a: "We're planning Bengaluru and northern Karnataka coverage first, with escalation when speech is unclear. Share your regions when you book a pilot.",
      },
      {
        q: "How does it handle technical terms and English words?",
        a: "Code-switching is built in — brand names, fees, and tech terms stay in English inside Kannada sentences, matching how metro callers speak.",
      },
      {
        q: "What makes the voice agents sound human?",
        a: "Two-way conversation with natural pacing — not IVR trees — at the same bar as our live Telugu and Hindi agents, with human handoff for complex turns.",
      },
      {
        q: "How do I start a Kannada outbound campaign?",
        a: "Kannada is on the roadmap. Telugu, Hindi, and English ship today — book a pilot to prioritize Kannada and hear a sample on your number.",
      },
    ],
    callLabel: "Outbound · Society notice",
    callLength: 28,
    callOutcome: "Confirmed · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "ನಮಸ್ಕಾರ, ನಾನು ಅದಿತಿ — ನಾಳೆಯ society meeting ಬಗ್ಗೆ reminder ಕರೆ.",
        gloss: "Hello, I'm Adithi — a reminder call about tomorrow's society meeting.",
      },
      {
        t: 10,
        kind: "customer",
        text: "ಹೌದು, ಯಾವಾಗ?",
        gloss: "Yes, when?",
      },
      {
        t: 16,
        kind: "agent",
        text: "ಸಂಜೆ 6 ಗಂಟೆಗೆ clubhouse ನಲ್ಲಿ. ಬರುತ್ತೀರಾ confirm ಮಾಡಿ.",
        gloss: "6 PM at the clubhouse. Please confirm if you'll come.",
      },
      {
        t: 24,
        kind: "customer",
        text: "ಹೌದು, ಬರುತ್ತೇನೆ.",
        gloss: "Yes, I'll come.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "malayalam",
    name: "Malayalam",
    nativeName: "മലയാളം",
    scriptLabel: "Malayalam",
    locale: "ml-IN",
    langAttr: "ml",
    script: "malayalam",
    status: "roadmap",
    metaTitle: "Malayalam Voice Agents — AI Calling in മലയാളം",
    metaDescription:
      "Malayalam voice agents that sound local. SvaraCall is expanding outbound AI calling that understands Kerala accents, slang, and Manglish for retail, BFSI, and lead gen.",
    eyebrow: "SvaraCall for AI voice agents",
    headline: "Malayalam voice agents that sound local",
    subcopy:
      "Build and deploy AI voice agents that understand the local Malayalam accent, slang, and dialect — including Manglish when callers mix English mid-sentence.",
    primaryCta: "Free Malayalam demo call",
    stats: [
      { value: "3.5 Cr+", label: "Malayalam speakers in India" },
      { value: "3", label: "Live languages today — more on roadmap" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Malayalam voice agents win business",
    useCases: [
      {
        title: "Retail and e-commerce",
        body: "COD confirms, delivery reschedules, and order follow-ups in Malayalam shoppers actually answer.",
      },
      {
        title: "BFSI & customer support",
        body: "EMI reminders, KYC nudges, and policy queries handled in warm, clear Malayalam.",
      },
      {
        title: "Agencies and lead generation",
        body: "Automated cold calling and follow-ups that qualify leads before your team dials.",
      },
    ],
    voicesTitle: "Production voices in Malayalam",
    voices: [
      { name: "Sheeba", gender: "Female", locale: "ml-IN" },
      { name: "Rahul", gender: "Male", locale: "ml-IN" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Handles Kerala regional speech and Manglish — Malayalam mixed with English — so product names, dates, and fees stay clear without sounding robotic.",
    dialectSample: "നിങ്ങളുടെ appointment നാളെ 11 മണിക്ക് — confirm ചെയ്യാമോ?",
    dialectSampleGloss: "Your appointment is tomorrow at 11 — shall we confirm?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Malayalam voice AI, common questions",
    faqs: [
      {
        q: "Do Malayalam voice agents sound realistic?",
        a: "They're built for conversational Malayalam — natural pacing, local phrasing, and Manglish when callers mix English — not stiff IVR menus. Complex turns escalate to your team with a transcript.",
      },
      {
        q: "Is Malayalam available now?",
        a: "Malayalam is on our expansion roadmap. Telugu, Hindi, and English ship today — book a pilot and we'll prioritize Malayalam for your account.",
      },
      {
        q: "Can it handle Manglish?",
        a: "Yes. Agents follow Malayalam–English code-switching the way Kerala callers actually speak on the phone.",
      },
      {
        q: "Which businesses benefit most?",
        a: "Retail and e-commerce, BFSI support, and lead-gen agencies where Malayalam connect rates beat English-only scripts.",
      },
    ],
    callLabel: "Outbound · Order confirm",
    callLength: 28,
    callOutcome: "Confirmed · Logged",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "നമസ്കാരം, ഞാൻ ഷീബ — നിങ്ങളുടെ order confirm ചെയ്യാൻ വിളിക്കുന്നു.",
        gloss: "Hello, I'm Sheeba — calling to confirm your order.",
      },
      {
        t: 10,
        kind: "customer",
        text: "അതെ, എപ്പോൾ deliver ചെയ്യും?",
        gloss: "Yes, when will it be delivered?",
      },
      {
        t: 16,
        kind: "agent",
        text: "നാളെ വൈകുന്നേരം 5 മണിക്ക് മുമ്പ്. COD ആണ് — OK ആണോ?",
        gloss: "Tomorrow before 5 PM. It's COD — is that okay?",
      },
      {
        t: 24,
        kind: "customer",
        text: "ശരി, OK.",
        gloss: "Alright, OK.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "punjabi",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    scriptLabel: "Gurmukhi",
    locale: "pa-IN",
    langAttr: "pa",
    script: "gurmukhi",
    status: "roadmap",
    metaTitle: "Punjabi Voice Agents — AI Calling in ਪੰਜਾਬੀ",
    metaDescription:
      "Punjabi voice agents that sound local. SvaraCall is expanding outbound AI calling in Gurmukhi Punjabi for agri finance, study-abroad, and logistics.",
    eyebrow: "Languages · Punjabi (Gurmukhi)",
    headline: "Punjabi voice agents that sound local",
    subcopy:
      "From Ludhiana to Amritsar, callers trust Punjabi that feels familiar. SvaraCall is building agents for agri collections, study-abroad screening, and driver coordination.",
    primaryCta: "Join the Punjabi waitlist",
    stats: [
      { value: "3.3 Cr+", label: "Punjabi speakers addressable in India" },
      { value: "5", label: "Dialects planned" },
      { value: "2+", label: "Voices in design" },
      { value: "<800ms", label: "Target response latency" },
    ],
    useCasesTitle: "Where Punjabi voice agents win business",
    useCases: [
      {
        title: "Tractor & agri finance",
        body: "Collection and renewal calls in Punjabi that keep farmer relationships intact.",
      },
      {
        title: "Study-abroad counselling",
        body: "Screen leads, confirm documents, and book counselor slots for Punjab's education consultancies.",
      },
      {
        title: "Transport & logistics",
        body: "Coordinate drivers and delivery confirms without a large calling desk.",
      },
    ],
    voicesTitle: "Voices planned for Punjabi",
    voices: [
      { name: "Gurnam", gender: "Male", locale: "pa-IN" },
      { name: "Harpreet", gender: "Female", locale: "pa-IN" },
    ],
    dialectsTitle: "Dialects & code-switching",
    dialectsBody:
      "Majhi and Doabi coverage planned, with English for fees, visas, and product terms when callers mix Punjabi and English.",
    dialectSample: "ਤੁਹਾਡਾ EMI ਬਾਕੀ ਹੈ — payment link ਭੇਜਾਂ?",
    dialectSampleGloss: "Your EMI is pending — shall I send the payment link?",
    dialectQuote:
      "Your customers should feel like they are talking to a local person, not a robot.",
    faqsTitle: "Punjabi voice AI, common questions",
    faqs: [
      {
        q: "Is Punjabi available today?",
        a: "Punjabi is on our expansion roadmap. Live languages today are Telugu, Hindi, and English — join the waitlist to prioritize Punjabi.",
      },
      {
        q: "Will it use Gurmukhi script in transcripts?",
        a: "Yes. Call transcripts and CRM notes will support Gurmukhi alongside English glosses for your ops team.",
      },
      {
        q: "Can it handle Punjabi–English mix?",
        a: "Yes — same code-switching approach as our live Hindi agents.",
      },
      {
        q: "How do I get early access?",
        a: "Book a pilot and mention Punjabi. We'll align your agri, education, or logistics workflows to the rollout.",
      },
    ],
    callLabel: "Outbound · Study-abroad screen",
    callLength: 28,
    callOutcome: "Qualified · Counselor booked",
    callScript: [
      { t: 0, kind: "status", text: "Connected" },
      {
        t: 2,
        kind: "agent",
        text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਹਰਪ੍ਰੀਤ — ਤੁਹਾਡੇ Canada enquiry ਬਾਰੇ ਗੱਲ ਕਰਨ ਲਈ ਕਾਲ ਕੀਤੀ ਹੈ।",
        gloss: "Sat Sri Akal, I'm Harpreet — calling about your Canada enquiry.",
      },
      {
        t: 10,
        kind: "customer",
        text: "ਹਾਂ ਜੀ, fees ਕਿੰਨੀ ਹੈ?",
        gloss: "Yes, what's the fee?",
      },
      {
        t: 16,
        kind: "agent",
        text: "Counseling ਮੁਫ਼ਤ ਹੈ। ਕੀ ਮੈਂ ਕੱਲ੍ਹ ਲਈ slot ਬੁੱਕ ਕਰ ਦਿਆਂ?",
        gloss: "Counseling is free. Shall I book a slot for tomorrow?",
      },
      {
        t: 24,
        kind: "customer",
        text: "ਹਾਂ, ਸ਼ਾਮ ਨੂੰ ਠੀਕ ਹੈ।",
        gloss: "Yes, evening works.",
      },
    ],
    bandImage:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=400&fit=crop&q=80",
  },
];

export function getLanguagePage(slug: string): LanguagePage | undefined {
  return languagePages.find((page) => page.slug === slug);
}

export function languageHref(slug: string) {
  return `/languages/${slug}`;
}
