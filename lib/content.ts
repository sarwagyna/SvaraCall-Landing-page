// Single source of truth for entity facts and content reused across
// page copy, JSON-LD, footer, and llms.txt. Keep every fact identical
// wherever it appears (GEO entity consistency).

export const site = {
  name: "SvaraCall AI",
  url: "https://svaracall.sarwagyna.com",
  tagline: "AI outbound calling agent for Indian businesses",
  legalName: "Sarwagyna Private Limited",
  city: "Ongole",
  state: "Andhra Pradesh",
  country: "India",
  cin: "U62013AP2026PTC124652",
  languages: ["Telugu", "Hindi", "English"] as const,
  lastUpdated: "August 2026",
  dateModified: "2026-08-02",
  email: "contact@sarwagyna.com",
  whatsapp: "916305036991",
  parentUrl: "https://sarwagyna.com",
  // TODO: verify — replace with real profile URLs before launch
  social: {
    linkedin: "{PLACEHOLDER}",
    x: "{PLACEHOLDER}",
    instagram: "{PLACEHOLDER}",
  },
  svaraRxUrl: "https://svararx.sarwagyna.com",
} as const;

// Canonical entity sentence — used at least twice on the page, plus schema + llms.txt.
export const canonicalSentence = `SvaraCall AI is a product of Sarwagyna Private Limited, Ongole, Andhra Pradesh, India.`;

// Answer-first paragraphs following each question-form H2 (40-60 words).
export const answers = {
  howItWorks:
    "SvaraCall AI works in four steps: you upload a contact list or connect your CRM, it dials from your registered number on your schedule, it speaks naturally in the customer's language to confirm or reschedule, and it logs every outcome, recording, and transcript to one dashboard.",
  useCases:
    "Businesses automate routine outbound calls with SvaraCall AI — lead follow-ups, appointment and booking reminders, no-show recovery, payment and renewal reminders, order confirmations, feedback calls, event reminders, and win-back calls. Each call runs in Telugu, Hindi, or English, and every outcome is logged automatically.",
  industries:
    "AI outbound calling is used across Indian industries — clinics and hospitals, real estate, education and coaching, finance and NBFCs, D2C and retail, and service businesses. SvaraCall AI adapts the same reminder, follow-up, and confirmation calls to each vertical, in the customer's language, and logs every outcome.",
  compliance:
    "Yes — AI outbound calling is compliant in India when done right. SvaraCall AI uses TRAI and DLT-registered headers, dials with consent, honors opt-outs immediately, and discloses recording on every call. Data aligns with the DPDP Act and is hosted in India on AWS Mumbai.",
  whyUs:
    "Businesses work with SvaraCall AI because it delivers premium, human-grade calling at a fraction of the cost of a manual calling team or other voice vendors. It is built for how India calls — TRAI and DLT-compliant, DPDP-aligned, and multilingual — escalates complex calls to a human, and logs every outcome. You pay for results, not headcount.",
} as const;

export const whyUs: Card[] = [
  {
    title: "Premium quality, not premium price",
    body: "Human-grade conversations at a fraction of what a manual calling team or other voice vendors cost — you pay for outcomes, not headcount.",
  },
  {
    title: "Outcome-driven, not per-seat",
    body: "Priced around results and calls that convert, so more of your budget goes to reaching customers, not overhead.",
  },
  {
    title: "Built for India's rules",
    body: "TRAI and DLT-registered calling, DPDP-aligned, with data hosted in India on AWS Mumbai.",
  },
  {
    title: "Speaks their language",
    body: "Natural two-way calls in Telugu, Hindi, and English, matched to each customer.",
  },
  {
    title: "A human when it matters",
    body: "Complex calls escalate to your team instead of the AI guessing.",
  },
  {
    title: "Every call accountable",
    body: "Outcome, recording, and transcript logged for each call on one dashboard.",
  },
];

export type Card = { title: string; body: string };

export const problems: Card[] = [
  {
    title: "Cold leads",
    body: "A lead called in hours, not minutes, goes cold. Your team can't dial fast enough, all day.",
  },
  {
    title: "No-shows",
    body: "Booked, never confirmed, slot wasted. Nobody had time to call and check.",
  },
  {
    title: "The language wall",
    body: "English IVRs get cut in seconds. People stay on when someone speaks their language.",
  },
];

export type Step = { n: number; title: string; body: string };

export const steps: Step[] = [
  {
    n: 1,
    title: "Upload your list",
    body: "Upload your contacts as a sheet, or connect your CRM. No new hardware.",
  },
  {
    n: 2,
    title: "SvaraCall dials",
    body: "SvaraCall dials on your schedule, from your own registered number.",
  },
  {
    n: 3,
    title: "It speaks naturally",
    body: "It confirms, reschedules, and answers basics in the customer's language, and hands off to your team when it should.",
  },
  {
    n: 4,
    title: "You see everything",
    body: "Every call's outcome, recording, and transcript land on one dashboard.",
  },
];

// The 8 use cases — also used as SoftwareApplication.featureList.
export const useCases: Card[] = [
  {
    title: "Lead follow-up & qualification",
    body: "Call new leads within minutes, qualify intent, and route hot ones to your team.",
  },
  {
    title: "Appointment & booking reminders",
    body: "Confirm or reschedule bookings a day ahead so slots don't sit empty.",
  },
  {
    title: "No-show recovery",
    body: "Call back the people who didn't turn up and put them on a new slot.",
  },
  {
    title: "Payment & renewal reminders",
    body: "Nudge customers about due payments and renewals before they lapse.",
  },
  {
    title: "Order & delivery confirmations",
    body: "Verify orders, confirm addresses, and cut COD returns before dispatch.",
  },
  {
    title: "Feedback & NPS calls",
    body: "Ask customers how it went and log the score against each record.",
  },
  {
    title: "Event & webinar reminders",
    body: "Remind registrants the day before so more of them actually show up.",
  },
  {
    title: "Win-back calls",
    body: "Reach dormant customers with a reason to come back.",
  },
];

export const industries: Card[] = [
  {
    title: "Clinics & hospitals",
    body: "Appointment reminders, post-visit follow-ups, and report-ready alerts.",
  },
  {
    title: "Real estate",
    body: "Site-visit confirmations and fast qualification of new property leads.",
  },
  {
    title: "Education & coaching",
    body: "Admissions follow-ups, fee reminders, and batch or class alerts.",
  },
  {
    title: "Finance & NBFC",
    body: "EMI reminders, document collection, and KYC follow-ups.",
  },
  {
    title: "Insurance",
    body: "Renewal reminders, claim updates, and premium nudges that retain.",
  },
  {
    title: "Brokerage",
    body: "KYC chase, account activation, and margin alerts — never advice.",
  },
  {
    title: "D2C & retail",
    body: "Order confirmation, COD verification, and win-back of lapsed buyers.",
  },
  {
    title: "Services",
    body: "Booking confirmations, service-due reminders, and feedback calls.",
  },
  {
    title: "Automotive",
    body: "Service bay booking, PSF follow-ups, and sales callbacks that convert.",
  },
];

export const compliance: Card[] = [
  {
    title: "TRAI / DLT",
    body: "Calls go out on DLT-registered templates and headers approved for your sender identity.",
  },
  {
    title: "Consent-first",
    body: "SvaraCall dials only contacts who have consented, and stops the moment someone opts out.",
  },
  {
    title: "Disclosure",
    body: "Every call opens with a recording disclosure, so the customer knows they're on a recorded line.",
  },
  {
    title: "DPDP Act",
    body: "Customer data is handled in line with the DPDP Act and hosted in India on AWS Mumbai.",
  },
];

export type CallRow = {
  name: string;
  purpose: string;
  language: string;
  outcome: string;
  tone: "positive" | "neutral";
  duration: string;
};

// Illustrative sample dashboard log (demo UI content, not performance data).
export const dashboardCalls: CallRow[] = [
  {
    name: "Ramesh K.",
    purpose: "Booking reminder",
    language: "Telugu",
    outcome: "Rescheduled",
    tone: "positive",
    duration: "0:47",
  },
  {
    name: "Priya S.",
    purpose: "Payment reminder",
    language: "Hindi",
    outcome: "Confirmed",
    tone: "positive",
    duration: "0:32",
  },
  {
    name: "Arjun M.",
    purpose: "Lead follow-up",
    language: "English",
    outcome: "Escalated to team",
    tone: "neutral",
    duration: "1:12",
  },
  {
    name: "Sana R.",
    purpose: "Feedback call",
    language: "Telugu",
    outcome: "Completed",
    tone: "positive",
    duration: "0:58",
  },
];

export type Stat = { value: string; label: string };

// Impact metrics — numeric outcomes are placeholders until measured on a pilot.
export const impactStats: Stat[] = [
  // TODO: verify — replace with measured pilot result
  { value: "{X}%", label: "Fewer no-shows after reminder calls" },
  // TODO: verify — replace with measured pilot result
  { value: "{X}%", label: "More leads reached within the hour" },
  { value: "3", label: "Languages at launch — Telugu, Hindi, English" },
  { value: "100%", label: "Calls logged with recording and transcript" },
];

export type VoiceAgent = {
  title: string;
  body: string;
  icon: "inbound" | "outbound" | "custom";
};

export const voiceAgents: VoiceAgent[] = [
  {
    title: "Inbound AI Voice Agent",
    body: "24/7 intelligent answering and lead routing.",
    icon: "inbound",
  },
  {
    title: "Outbound AI Voice Agent",
    body: "Scalable proactive calling and engagement.",
    icon: "outbound",
  },
  {
    title: "Custom Voice Agent",
    body: "Complex voice logic and deep system integrations.",
    icon: "custom",
  },
];

export type TuningStep = {
  title: string;
  body: string;
  icon: "document" | "sliders" | "users" | "bolt";
};

export const tuningSteps: TuningStep[] = [
  {
    title: "Script setup",
    body: "Your calls mapped to DLT-registered templates.",
    icon: "document",
  },
  {
    title: "Conversation refinement",
    body: "Tone and replies tuned in Telugu, Hindi, and English.",
    icon: "sliders",
  },
  {
    title: "Real-call feedback",
    body: "Test calls to your team surface what to fix.",
    icon: "users",
  },
  {
    title: "Workflow tuning",
    body: "Escalation, scheduling, and logging set to your process.",
    icon: "bolt",
  },
];

export type ComparisonRow = {
  capability: string;
  svaracall: string;
  traditional: string;
};

export const comparison: ComparisonRow[] = [
  {
    capability: "Response speed",
    svaracall: "Calls new leads within minutes",
    traditional: "Callbacks slip by hours",
  },
  {
    capability: "Availability",
    svaracall: "Runs on your schedule, every day",
    traditional: "Limited to staff hours",
  },
  {
    capability: "Call volume",
    svaracall: "Places many calls at the same time",
    traditional: "Capped by team size",
  },
  {
    capability: "Languages",
    svaracall: "Telugu, Hindi, and English on every call",
    traditional: "Depends who is free to call",
  },
  {
    capability: "Consistency & logging",
    svaracall: "Same disclosure every time, every call logged",
    traditional: "Varies by caller, notes often missed",
  },
  {
    capability: "Cost to run",
    svaracall: "A fraction of a manual calling team",
    traditional: "Salaries, training, and constant attrition",
  },
  {
    capability: "What you pay for",
    svaracall: "Outcomes and calls that convert",
    traditional: "Hours on the clock, dialed or not",
  },
];

export type Voice = {
  id: string;
  langLabel: string;
  name: string; // native script (Telugu — covered by Noto Sans Telugu)
  nameEn: string;
  style: string;
  duration: number; // seconds
  icon: "target" | "calendar" | "phone";
  // TODO: verify — drop real samples in public/audio/ and set src to enable sound
  src?: string;
};

export const voices: Voice[] = [
  {
    id: "shanti",
    langLabel: "Native Telugu",
    name: "శాంతి",
    nameEn: "Shanti",
    style: "Warm & conversational",
    duration: 45,
    icon: "target",
  },
  {
    id: "bhaskar",
    langLabel: "Native Telugu",
    name: "భాస్కర్",
    nameEn: "Bhaskar",
    style: "Energetic & upbeat",
    duration: 60,
    icon: "calendar",
  },
  {
    id: "sahana",
    langLabel: "Native Telugu",
    name: "సహన",
    nameEn: "Sahana",
    style: "Deep & professional",
    duration: 45,
    icon: "phone",
  },
];

// Full voice roster shown on the Voice agents page.
export type VoiceUseCase =
  | "Lead follow-up"
  | "Reminders & confirmations"
  | "Win-back & offers"
  | "Onboarding & guidance"
  | "Feedback & surveys";

export type AgentVoice = {
  name: string;
  style: string;
  useCase: VoiceUseCase;
  gender: "Male" | "Female";
  // TODO: add the demo audio URL for each voice (e.g. "/audio/shubh.mp3" or a full URL).
  src?: string;
};

export const agentVoices: AgentVoice[] = [
  { name: "Shubh", style: "Confident & Bold", useCase: "Lead follow-up", gender: "Male", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/shubh.wav?se=2026-07-07T18%3A15%3A32Z&sp=r&sv=2026-04-06&sr=b&sig=549yHTj54sgqq5vF6v616d4f6Ofi4IBbBKomepqlNSo%3D" },
  { name: "Aditya", style: "Modern & Crisp", useCase: "Onboarding & guidance", gender: "Male", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/aditya.wav?se=2026-07-07T18%3A23%3A49Z&sp=r&sv=2026-04-06&sr=b&sig=4zJBbCkX9mdNZNNfsDnQxbSnjqYxxAoDBdyI8v7w2CI%3D" },
  { name: "Ritu", style: "Expressive & Lively", useCase: "Lead follow-up", gender: "Female", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/ritu.wav?se=2026-07-07T18%3A24%3A38Z&sp=r&sv=2026-04-06&sr=b&sig=z2z0bN7Dq%2BQy9sIgxs0gShmQ3RcTXGZ2OZnhlEsjq7M%3D" },
  { name: "Priya", style: "Cheerful & Engaging", useCase: "Lead follow-up", gender: "Female", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/priya.wav?se=2026-07-07T18%3A27%3A15Z&sp=r&sv=2026-04-06&sr=b&sig=aabGh8WOsEwYbIrzm0yxREiylnxGXjOLgiOY49fjX7k%3D" },
  { name: "Neha", style: "Energetic & Warm", useCase: "Feedback & surveys", gender: "Female", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/neha.wav?se=2026-07-07T18%3A27%3A51Z&sp=r&sv=2026-04-06&sr=b&sig=bRqawMrv2/Qhhy7gaRJCOU7O7/X9IloWwpP4LJvoHHM%3D" },
  { name: "Rahul", style: "Deep & Authoritative", useCase: "Lead follow-up", gender: "Male" },
  { name: "Pooja", style: "Cheerful & Engaging", useCase: "Lead follow-up", gender: "Female" },
  { name: "Rohan", style: "Confident & Bold", useCase: "Win-back & offers", gender: "Male" },
  { name: "Simran", style: "Rich & Mature", useCase: "Lead follow-up", gender: "Female" },
  { name: "Kavya", style: "Polished & Articulate", useCase: "Lead follow-up", gender: "Female" },
  { name: "Amit", style: "Steady & Trustworthy", useCase: "Lead follow-up", gender: "Male" },
  { name: "Dev", style: "Casual & Relatable", useCase: "Win-back & offers", gender: "Male" },
  { name: "Ishita", style: "Polished & Articulate", useCase: "Lead follow-up", gender: "Female", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/ishita.wav?se=2026-07-07T18%3A28%3A14Z&sp=r&sv=2026-04-06&sr=b&sig=9KIAiTJt3M0Q7b%2BQsO9dHXj7wikOG9REWfTN6OnpVT8%3D" },
  { name: "Shreya", style: "Energetic & Warm", useCase: "Lead follow-up", gender: "Female" },
  { name: "Ratan", style: "Rich & Mature", useCase: "Lead follow-up", gender: "Male" },
  { name: "Varun", style: "Casual & Relatable", useCase: "Feedback & surveys", gender: "Male", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/varun.wav?se=2026-07-07T18%3A28%3A32Z&sp=r&sv=2026-04-06&sr=b&sig=boFCf5qN1b8vheURMptdDe9q3eWPjJzIdTznUWXlJHE%3D" },
  { name: "Manan", style: "Clear & Professional", useCase: "Lead follow-up", gender: "Male", src: "https://saasprodstudiopublicsa.blob.core.windows.net/voice-clone/data/catalog-samples/manan.wav?se=2026-07-07T18%3A28%3A43Z&sp=r&sv=2026-04-06&sr=b&sig=Zu0/eDfQc3Dlz7bkwXuENaotakWEIGD4IcbguPq55Ts%3D" },
  { name: "Sumit", style: "Deep & Authoritative", useCase: "Lead follow-up", gender: "Male" },
  { name: "Roopa", style: "Gentle & Soothing", useCase: "Onboarding & guidance", gender: "Female" },
  { name: "Kabir", style: "Rich & Cinematic", useCase: "Feedback & surveys", gender: "Male" },
  { name: "Aayan", style: "Professional & Clear", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Ashutosh", style: "Traditional & Narrative", useCase: "Onboarding & guidance", gender: "Male" },
  { name: "Advait", style: "Contemporary & Storytelling", useCase: "Onboarding & guidance", gender: "Male" },
  { name: "Anand", style: "Warm & Reassuring", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Tanya", style: "Friendly & Modern", useCase: "Onboarding & guidance", gender: "Female" },
  { name: "Tarun", style: "Professional & Clear", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Sunny", style: "Cheerful & Upbeat", useCase: "Win-back & offers", gender: "Male" },
  { name: "Mani", style: "Calm & Composed", useCase: "Feedback & surveys", gender: "Male" },
  { name: "Gokul", style: "Trustworthy & Dependable", useCase: "Onboarding & guidance", gender: "Male" },
  { name: "Vijay", style: "Confident & Authoritative", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Shruti", style: "Sweet & Melodious", useCase: "Lead follow-up", gender: "Female" },
  { name: "Suhani", style: "Pleasant & Soothing", useCase: "Onboarding & guidance", gender: "Female" },
  { name: "Mohit", style: "Versatile & Adaptable", useCase: "Feedback & surveys", gender: "Male" },
  { name: "Kavitha", style: "Graceful & Articulate", useCase: "Onboarding & guidance", gender: "Female" },
  { name: "Rehan", style: "Youthful & Energetic", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Soham", style: "Balanced & Natural", useCase: "Reminders & confirmations", gender: "Male" },
  { name: "Rupali", style: "Elegant & Refined", useCase: "Feedback & surveys", gender: "Female" },
];

// Dedicated industry landing pages, reachable from the "Industries" nav
// dropdown at /industries/<slug>. Order here drives the dropdown order.
export type IndustryStat = { value: string; label: string };

export type IndustryPage = {
  slug: string;
  name: string; // dropdown + breadcrumb label
  eyebrow: string;
  heroTitle: string;
  heroAccent: string; // second headline line, rendered in accent
  heroSubcopy: string;
  heroMetric: IndustryStat; // highlighted number in the hero panel
  heroTiles: IndustryStat[]; // 4 supporting stat tiles
  standardTitle: string;
  standardAccent: string;
  standardBody: string;
  bigStat: IndustryStat & { points: string[] };
  workflows: Card[]; // 6 workflow cards
  results: {
    title: string;
    accent: string;
    body: string;
    stats: IndustryStat[]; // 4 outcome stats
    quote: string;
    author: string;
  };
  ctaTitle: string;
  ctaAccent: string;
  ctaSubcopy: string;
  metaTitle: string;
  metaDescription: string;
};

export const industryPages: IndustryPage[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "SvaraCall for Healthcare",
    heroTitle: "Patient care starts",
    heroAccent: "before the visit",
    heroSubcopy:
      "SvaraCall AI confirms appointments, recovers no-shows, and follows up after visits — in Telugu, Hindi, and English — so your front desk stays free and slots stay full.",
    heroMetric: { value: "<5 min", label: "Average lead callback time" },
    heroTiles: [
      { value: "24/7", label: "Reminder coverage" },
      { value: "3×", label: "Languages spoken" },
      { value: "DPDP", label: "Data compliant" },
      { value: "0", label: "New hardware" },
    ],
    standardTitle: "The standard of",
    standardAccent: "patient access",
    standardBody:
      "Clinics and hospitals handle high call volume with fewer staff. SvaraCall AI runs reminders, follow-ups, and rescheduling in the patient's language, and logs every outcome to one dashboard.",
    bigStat: {
      value: "500+",
      label: "Clinic hours saved monthly",
      points: [
        "Confirm and reschedule appointments automatically",
        "Recover no-shows with a fresh slot the same day",
        "Log every call outcome, recording, and transcript",
      ],
    },
    workflows: [
      {
        title: "Appointment reminders",
        body: "Confirm or reschedule bookings a day ahead so slots don't sit empty.",
      },
      {
        title: "No-show recovery",
        body: "Call back patients who missed a visit and put them on a new slot.",
      },
      {
        title: "Post-visit follow-up",
        body: "Check on recovery and prompt report collection after the visit.",
      },
      {
        title: "Report-ready alerts",
        body: "Tell patients when reports or prescriptions are ready to collect.",
      },
      {
        title: "Camp & drive reminders",
        body: "Remind registrants the day before so more of them actually show up.",
      },
      {
        title: "Feedback calls",
        body: "Ask how the visit went and log the score against each record.",
      },
    ],
    results: {
      title: "HealthPlus clinics",
      accent: "cut no-shows",
      body: "HealthPlus used SvaraCall AI to confirm appointments and recover missed slots, keeping the front desk focused on patients in the waiting room.",
      stats: [
        { value: "40%", label: "Fewer no-shows" },
        { value: "500+", label: "Calls saved monthly" },
        { value: "24/7", label: "Reminder coverage" },
        { value: "DPDP", label: "Ready" },
      ],
      quote:
        "The agent handles every reminder so our staff can focus on patients in the clinic.",
      author: "Operations lead, multi-specialty clinic",
    },
    ctaTitle: "Deploy your healthcare",
    ctaAccent: "voice stack",
    ctaSubcopy:
      "We'll place a live SvaraCall to your own phone, in Telugu, Hindi, or English.",
    metaTitle:
      "SvaraCall AI for Healthcare — Appointment Reminders & No-Show Recovery",
    metaDescription:
      "AI voice agent for clinics and hospitals in India. Confirm appointments, recover no-shows, and follow up after visits in Telugu, Hindi & English. DPDP-ready.",
  },
  {
    slug: "fintech",
    name: "Fintech",
    eyebrow: "SvaraCall for Fintech",
    heroTitle: "Next-gen banking",
    heroAccent: "voice protocol",
    heroSubcopy:
      "SvaraCall AI delivers secure financial support — fraud alerts, loan operations, and account service — in Telugu, Hindi, and English, without adding to your queue time.",
    heroMetric: { value: "85%", label: "Automated resolution rate" },
    heroTiles: [
      { value: "2FA", label: "Identity verified" },
      { value: "24/7", label: "Fraud monitoring" },
      { value: "API", label: "Core integrations" },
      { value: "DPDP", label: "Data compliant" },
    ],
    standardTitle: "Trust is the",
    standardAccent: "primary currency",
    standardBody:
      "In fintech, latency isn't just a technical metric — it's a trust metric. SvaraCall AI absorbs fraud-alert spikes and account-service calls without degrading experience, integrates with your banking core, and completes sensitive actions only after structured verification.",
    bigStat: {
      value: "70%",
      label: "Lower operating cost",
      points: [
        "Verify suspicious transactions instantly with secure callbacks",
        "Handle balances, card activation, and loan status in one flow",
        "Escalate high-value queries to live support with context intact",
      ],
    },
    workflows: [
      {
        title: "Fraud alerts",
        body: "Let customers verify suspicious transactions immediately with a secure voice callback.",
      },
      {
        title: "Balance inquiries",
        body: "Share balances and recent activity after PIN or identity verification.",
      },
      {
        title: "Loan support",
        body: "Answer inbound loan-status checks and guide customers to the next step.",
      },
      {
        title: "Card activation",
        body: "Activate and reissue cards over a fast, verified call.",
      },
      {
        title: "Payment reminders",
        body: "Nudge customers about EMIs and dues before they slip past the date.",
      },
      {
        title: "Priority routing",
        body: "Route high-value callers straight to a live agent with context intact.",
      },
    ],
    results: {
      title: "A neobank",
      accent: "scaled to a million users",
      body: "A fast-growing digital bank used SvaraCall AI to absorb rising support volume while keeping service quality high — without building a massive voice-ops team.",
      stats: [
        { value: "70%", label: "Lower cost" },
        { value: "85%", label: "Auto resolution" },
        { value: "DPDP", label: "Compliant" },
        { value: "24/7", label: "Availability" },
      ],
      quote:
        "We handle high-volume support calls now — well beyond what our old call center could take.",
      author: "Support lead, digital bank",
    },
    ctaTitle: "Protect your customer",
    ctaAccent: "voice channel",
    ctaSubcopy:
      "Deploy banking-grade AI voice agents that protect trust while improving speed, escalation, and support efficiency.",
    metaTitle:
      "SvaraCall AI for Fintech — Fraud Alerts, Loan Support & Secure Voice",
    metaDescription:
      "AI voice agent for banks and NBFCs in India. Handle fraud alerts, balance inquiries, loan support, and reminders in Telugu, Hindi & English. TRAI-registered, DPDP-ready.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    eyebrow: "SvaraCall for Insurance",
    heroTitle: "Renewals that stick.",
    heroAccent: "Servicing that scales.",
    heroSubcopy:
      "SvaraCall AI reminds policyholders, collects documents, and updates claim status — in Telugu, Hindi, and English — so renewals close and service queues stay short.",
    heroMetric: { value: "Higher", label: "Renewal conversion" },
    heroTiles: [
      { value: "Motor", label: "Renewal calls" },
      { value: "Life", label: "Premium nudges" },
      { value: "Health", label: "Claim updates" },
      { value: "24/7", label: "Coverage" },
    ],
    standardTitle: "Keep policies",
    standardAccent: "from lapsing",
    standardBody:
      "Missed renewal calls cost retention. SvaraCall AI dials on schedule, speaks the customer's language, collects the next step, and logs every outcome so advisors only handle the conversations that need a human.",
    bigStat: {
      value: "Faster",
      label: "Turnaround on renewals and claim updates",
      points: [
        "Remind before expiry and nudge premium payment",
        "Chase KYC and claim documents until complete",
        "Qualify new leads and book advisor appointments",
      ],
    },
    workflows: [
      {
        title: "Policy renewal reminders",
        body: "Call before expiry, confirm intent, and nudge payment before lapse.",
      },
      {
        title: "Premium due nudges",
        body: "Polite, scheduled reminders so premiums don't slip past the due date.",
      },
      {
        title: "Claim status updates",
        body: "Proactive voice updates so customers aren't stuck checking portals.",
      },
      {
        title: "Document collection",
        body: "Chase KYC, medicals, and claim docs until the file is complete.",
      },
      {
        title: "Lead qualification",
        body: "Score intent, budget, and product fit before an advisor picks up.",
      },
      {
        title: "Advisor appointment booking",
        body: "Book and confirm meetings so fewer prospects go cold.",
      },
    ],
    results: {
      title: "Retention without",
      accent: "dialer headcount",
      body: "A multi-line broker used SvaraCall AI to run renewal and document-chase calls at scale — advisors only saw the conversations ready to close.",
      stats: [
        { value: "Higher", label: "Renewal conversion" },
        { value: "Faster", label: "Doc collection" },
        { value: "Clearer", label: "Call accountability" },
        { value: "3 langs", label: "Telugu · Hindi · English" },
      ],
      quote:
        "Renewal calls finally happen on time — in the customer's language — and our advisors only see the ones ready to close.",
      author: "Operations head, multi-line insurance broker",
    },
    ctaTitle: "Hear a renewal call",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that renews a policy the way your customers actually speak.",
    metaTitle:
      "SvaraCall AI for Insurance — Renewals, Claims & Premium Nudges",
    metaDescription:
      "AI voice agent for insurers and brokers in India. Run renewals, claim updates, document collection, and lead qualification in Telugu, Hindi & English.",
  },
  {
    slug: "brokerage",
    name: "Brokerage",
    eyebrow: "SvaraCall for Brokerage & Capital Markets",
    heroTitle: "Activate accounts. Clear KYC.",
    heroAccent: "Never give advice.",
    heroSubcopy:
      "SvaraCall AI runs onboarding, KYC chases, and margin alerts — in Telugu, Hindi, and English — with hard guardrails so every call stays operational, never advisory.",
    heroMetric: { value: "0", label: "Investment advice given" },
    heroTiles: [
      { value: "KYC", label: "Doc chase calls" },
      { value: "SEBI", label: "Advice-free scripts" },
      { value: "24/7", label: "Activation coverage" },
      { value: "DPDP", label: "Data in India" },
    ],
    standardTitle: "Operational voice,",
    standardAccent: "never advisory",
    standardBody:
      "Brokerage books drown in incomplete KYC and dormant activations. SvaraCall AI dials on schedule, clears operational steps, and escalates anything that sounds like advice to a licensed human — with every outcome logged.",
    bigStat: {
      value: "Advice-free",
      label: "Guardrails on every scripted call",
      points: [
        "Activate accounts and chase pending KYC documents",
        "Notify margin shortfalls without recommending trades",
        "Escalate advice-seeking questions to licensed staff",
      ],
    },
    workflows: [
      {
        title: "Account activation",
        body: "Walk new clients through activation steps and confirm when live.",
      },
      {
        title: "KYC / document collection",
        body: "Chase pending KYC and eSign docs until the file clears.",
      },
      {
        title: "Margin call notifications",
        body: "Alert clients to margin shortfalls and approved next steps.",
      },
      {
        title: "Funding & SIP reminders",
        body: "Remind clients to fund accounts or continue instructed SIPs.",
      },
      {
        title: "RM appointment booking",
        body: "Book relationship-manager calls without product recommendations.",
      },
      {
        title: "Advice-free escalation",
        body: "Route advice-like asks to a licensed human with full context.",
      },
    ],
    results: {
      title: "Faster onboarding,",
      accent: "cleaner compliance",
      body: "A brokerage desk used SvaraCall AI to clear KYC and activation queues — without risking advisory language on automated calls.",
      stats: [
        { value: "Faster", label: "KYC completion" },
        { value: "0 advice", label: "On automated calls" },
        { value: "Logged", label: "Audit trail per call" },
        { value: "3 langs", label: "Telugu · Hindi · English" },
      ],
      quote:
        "Activation and KYC finally move without putting advisory language on an automated line.",
      author: "Compliance lead, retail brokerage",
    },
    ctaTitle: "Hear an activation call",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that clears KYC steps — with advice-free guardrails intact.",
    metaTitle:
      "SvaraCall AI for Brokerage — KYC, Activation & Advice-Free Voice",
    metaDescription:
      "AI voice agent for brokers in India. Activate accounts, chase KYC, notify margin calls — never give investment advice. Telugu, Hindi & English. TRAI & DPDP ready.",
  },
  {
    slug: "consultation",
    name: "Consultation",
    eyebrow: "SvaraCall for Consultations",
    heroTitle: "Every enquiry",
    heroAccent: "answered fast",
    heroSubcopy:
      "SvaraCall AI qualifies new enquiries, books consultations, and confirms sessions — in Telugu, Hindi, and English — so no lead waits and no slot sits empty.",
    heroMetric: { value: "<5 min", label: "Lead callback time" },
    heroTiles: [
      { value: "24/7", label: "Booking coverage" },
      { value: "3×", label: "Languages" },
      { value: "0", label: "Missed enquiries" },
      { value: "DPDP", label: "Compliant" },
    ],
    standardTitle: "Turn enquiries into",
    standardAccent: "booked sessions",
    standardBody:
      "Consultants and advisory firms lose leads that call in and never hear back. SvaraCall AI calls within minutes, qualifies intent, books the session, and logs everything.",
    bigStat: {
      value: "500+",
      label: "Consultations booked monthly",
      points: [
        "Call new enquiries within minutes to qualify intent",
        "Book, confirm, and reschedule consultation slots",
        "Route high-intent leads straight to your team",
      ],
    },
    workflows: [
      {
        title: "Lead qualification",
        body: "Call new enquiries within minutes and score intent before handoff.",
      },
      {
        title: "Consultation booking",
        body: "Offer open slots and confirm the session on the call.",
      },
      {
        title: "Session reminders",
        body: "Confirm the day before so fewer consultations are missed.",
      },
      {
        title: "Reschedule handling",
        body: "Move sessions to a new slot without the back-and-forth.",
      },
      {
        title: "Follow-up calls",
        body: "Check in after the session and prompt the next step.",
      },
      {
        title: "Feedback calls",
        body: "Ask how it went and log the response on the record.",
      },
    ],
    results: {
      title: "An advisory firm",
      accent: "filled its calendar",
      body: "They routed every web enquiry to SvaraCall AI for instant qualification and booking, so consultants spent time in sessions, not on the phone.",
      stats: [
        { value: "<5 min", label: "Callback time" },
        { value: "500+", label: "Sessions booked" },
        { value: "24/7", label: "Coverage" },
        { value: "3×", label: "Languages" },
      ],
      quote:
        "Leads get a call back in minutes now, not the next day — and the calendar fills itself.",
      author: "Founder, advisory practice",
    },
    ctaTitle: "Deploy your consultation",
    ctaAccent: "voice stack",
    ctaSubcopy:
      "We'll place a live SvaraCall to your own phone, in Telugu, Hindi, or English.",
    metaTitle:
      "SvaraCall AI for Consultations — Lead Qualification & Booking",
    metaDescription:
      "AI voice agent for consultants and advisory firms in India. Qualify enquiries, book consultations, and confirm sessions in Telugu, Hindi & English. DPDP-ready.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    eyebrow: "SvaraCall for E-commerce",
    heroTitle: "Kill RTO before it",
    heroAccent: "kills your margins",
    heroSubcopy:
      "SvaraCall AI verifies COD orders, confirms addresses, and recovers abandoned carts — in Telugu, Hindi, and English — so fewer parcels come back unpaid.",
    heroMetric: { value: "20–30%", label: "RTO reduction" },
    heroTiles: [
      { value: "COD", label: "Pre-dispatch verify" },
      { value: "Same-day", label: "Pilot go-live" },
      { value: "24/7", label: "Peak coverage" },
      { value: "NDR", label: "Re-attempt calls" },
    ],
    standardTitle: "Verify before",
    standardAccent: "you ship",
    standardBody:
      "COD and wrong addresses drain margin. SvaraCall AI confirms intent and delivery details before dispatch, follows up on NDRs, and recovers high-value carts — so your warehouse ships orders that stick.",
    bigStat: {
      value: "20–30%",
      label: "RTO reduction from pre-dispatch verify",
      points: [
        "Confirm COD and address before the courier leaves",
        "Re-attempt NDR deliveries with a fresh call",
        "Recover abandoned carts and failed payments by voice",
      ],
    },
    workflows: [
      {
        title: "COD verification",
        body: "Call to confirm the order and payment mode before dispatch.",
      },
      {
        title: "Address confirmation",
        body: "Verify landmark, pin, and phone so fewer parcels bounce.",
      },
      {
        title: "RTO / NDR follow-up",
        body: "Re-attempt failed deliveries with a fresh confirmation call.",
      },
      {
        title: "Abandoned cart recovery",
        body: "Call high-value drop-offs with a reason to finish checkout.",
      },
      {
        title: "WISMO automation",
        body: "Answer 'where is my order' calls instantly from live order data.",
      },
      {
        title: "Returns & exchanges",
        body: "Guide pickup scheduling and reason capture without an agent.",
      },
    ],
    results: {
      title: "Lower RTO,",
      accent: "higher kept orders",
      body: "A D2C brand used SvaraCall AI to verify COD before dispatch and recover carts — cutting returns without adding a calling team for peak season.",
      stats: [
        { value: "20–30%", label: "RTO reduction" },
        { value: "24/7", label: "Verify & recover" },
        { value: "Same-day", label: "Pilot live" },
        { value: "COD", label: "Pre-ship confirm" },
      ],
      quote:
        "We stopped shipping doubtful COD. Returns dropped and the warehouse finally trusted the order list.",
      author: "Ops lead, D2C apparel brand",
    },
    ctaTitle: "Hear a COD verify",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that confirms an order the way your shoppers actually speak.",
    metaTitle:
      "SvaraCall AI for E-commerce — COD Verify, RTO Cut & Cart Recovery",
    metaDescription:
      "AI voice agent for D2C and retail in India. Verify COD, confirm addresses, cut RTO, recover abandoned carts — in Telugu, Hindi & English.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    eyebrow: "SvaraCall for Real Estate",
    heroTitle: "Answer every portal lead",
    heroAccent: "in seconds — before it dies",
    heroSubcopy:
      "SvaraCall AI calls Magicbricks, 99acres, and website leads instantly, qualifies budget and timeline, and books site visits — in Telugu, Hindi, and English — before the next broker dials.",
    heroMetric: { value: "Seconds", label: "Speed to lead" },
    heroTiles: [
      { value: "25–45%", label: "Visit conversion lift" },
      { value: "24/7", label: "Portal coverage" },
      { value: "3 langs", label: "Telugu · Hindi · English" },
      { value: "CRM", label: "Outcome logged" },
    ],
    standardTitle: "Win the first",
    standardAccent: "five minutes",
    standardBody:
      "In high-intent real estate, the first conversation often decides who wins the lead. SvaraCall AI calls immediately, verifies fit, and keeps the prospect moving while intent is fresh — qualifying timeline, budget, and property fit before live-transferring to an agent or booking the site visit directly.",
    bigStat: {
      value: "25–45%",
      label: "Higher lead-to-visit conversion with instant response",
      points: [
        "Call portal leads within seconds, while intent is fresh",
        "Book site visits straight into your agents' calendars",
        "Re-engage dormant CRM leads without burning agent time",
      ],
    },
    workflows: [
      {
        title: "Portal lead auto-dial",
        body: "Call Magicbricks, 99acres, and Housing leads the moment they enquire.",
      },
      {
        title: "Lead qualification",
        body: "Verify budget, timeline, and property fit before handoff.",
      },
      {
        title: "Site-visit scheduling",
        body: "Book and confirm showings into agent calendars.",
      },
      {
        title: "Missed-call callbacks",
        body: "Return every missed enquiry so no warm lead goes unanswered.",
      },
      {
        title: "Visit reminders",
        body: "Confirm tomorrow's site visits so no-shows don't empty the calendar.",
      },
      {
        title: "Dormant CRM reactivation",
        body: "Wake cold inventory with a reason to tour again.",
      },
    ],
    results: {
      title: "Faster response,",
      accent: "more showings",
      body: "Brokerages used SvaraCall AI to call faster than competitors, qualify leads consistently, and keep agents focused on closing instead of chasing callbacks.",
      stats: [
        { value: "Seconds", label: "Speed to lead" },
        { value: "25–45%", label: "Visit conversion" },
        { value: "24/7", label: "Lead coverage" },
        { value: "CRM", label: "Outcomes logged" },
      ],
      quote:
        "We answer every new lead in seconds now — buyers book a visit before a rival even calls back.",
      author: "Sales head, property brokerage",
    },
    ctaTitle: "Hear a portal lead call",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that qualifies a buyer and books a site visit — in their language.",
    metaTitle:
      "SvaraCall AI for Real Estate — Instant Portal Leads & Site Visits",
    metaDescription:
      "AI voice agent for real estate in India. Answer Magicbricks and 99acres leads in seconds, qualify buyers, and book site visits in Telugu, Hindi & English.",
  },
  {
    slug: "hr-tech",
    name: "HR Tech",
    eyebrow: "SvaraCall for HR Tech",
    heroTitle: "Screen candidates",
    heroAccent: "at global scale",
    heroSubcopy:
      "SvaraCall AI interviews every applicant, assesses communication quality, and schedules the top tier automatically — in Telugu, Hindi, and English — before great candidates slip away.",
    heroMetric: { value: "60%", label: "Time-to-hire reduction" },
    heroTiles: [
      { value: "100%", label: "Applicant coverage" },
      { value: "Top 10%", label: "Fast shortlist" },
      { value: "24/7", label: "Candidate reach" },
      { value: "Bias-free", label: "Consistent script" },
    ],
    standardTitle: "Hiring is a",
    standardAccent: "speed game",
    standardBody:
      "Top candidates are often off the market in days, not weeks. SvaraCall AI engages every applicant minutes after they apply, so your pipeline keeps moving while attention is high. It runs consistent screening calls, captures salary, availability, and verbal-fit signals, and surfaces the strongest candidates to your hiring managers.",
    bigStat: {
      value: "10d",
      label: "Top talent off the market",
      points: [
        "Standardize first-round phone screening across every role",
        "Book interviews without a coordinator in the loop",
        "Ask consistent salary and fit questions to reduce bias",
      ],
    },
    workflows: [
      {
        title: "Initial screening",
        body: "Run consistent first-round screening on your questions, at scale.",
      },
      {
        title: "Smart scheduling",
        body: "Book interview slots into recruiter and manager calendars.",
      },
      {
        title: "Candidate FAQ",
        body: "Answer role, location, CTC, and process questions any time.",
      },
      {
        title: "Onboarding logic",
        body: "Guide new hires through documents and first-day steps.",
      },
      {
        title: "Reference checks",
        body: "Run structured reference calls and log the responses.",
      },
      {
        title: "Policy helpdesk",
        body: "Answer employee HR and policy questions in their language.",
      },
    ],
    results: {
      title: "A faster",
      accent: "shortlisting engine",
      body: "HR teams used SvaraCall AI to keep recruiters focused on serious candidates while the voice layer handled the first round at scale.",
      stats: [
        { value: "60%", label: "Faster hire" },
        { value: "100%", label: "Applicant reach" },
        { value: "24/7", label: "Candidate reach" },
        { value: "Top 10%", label: "Shortlist focus" },
      ],
      quote:
        "We screen the whole funnel in the candidate's language now — recruiters only spend time on the shortlist that matters.",
      author: "Talent lead, staffing firm",
    },
    ctaTitle: "Build a stronger",
    ctaAccent: "recruiting engine",
    ctaSubcopy:
      "Deploy AI voice screening and scheduling so your team can hire from live-moving candidates without chasing calendars.",
    metaTitle:
      "SvaraCall AI for HR Tech — Candidate Screening & Interview Scheduling",
    metaDescription:
      "AI voice agent for recruiters and staffing teams in India. Screen candidates, schedule interviews, and answer FAQs in Telugu, Hindi & English. DPDP-ready.",
  },
  {
    slug: "education",
    name: "Education",
    eyebrow: "SvaraCall for Education",
    heroTitle: "Every lead called in 60 seconds,",
    heroAccent: "in their language",
    heroSubcopy:
      "SvaraCall AI dials new enquiries instantly, answers course and fee questions, and books counseling — in Telugu, Hindi, and English — so admissions never wait until morning.",
    heroMetric: { value: "<60s", label: "Time to first call" },
    heroTiles: [
      { value: "2.7×", label: "Conversion lift" },
      { value: "24/7", label: "Enquiry coverage" },
      { value: "Fee", label: "Clarity on call" },
      { value: "Demo", label: "Auto booking" },
    ],
    standardTitle: "Empower your",
    standardAccent: "human counselors",
    standardBody:
      "Institutes lose a large share of leads outside operating hours. SvaraCall AI answers every enquiry instantly, with the same accuracy every time. By offloading repetitive syllabus, fee, and schedule questions, your counselors spend more time on the high-conversion conversations that actually close enrollments.",
    bigStat: {
      value: "2.7×",
      label: "Higher conversion with sub-minute response",
      points: [
        "Call every new enquiry within 60 seconds",
        "Book demos and counseling without a live counselor on first touch",
        "Chase fees and documents until the seat is confirmed",
      ],
    },
    workflows: [
      {
        title: "Welcome & introduction",
        body: "Greet new enquiries and set expectations for the next step.",
      },
      {
        title: "Course & fee clarity",
        body: "Answer syllabus, eligibility, and fee questions any time of day.",
      },
      {
        title: "Demo / counseling booking",
        body: "Book sessions into counselor calendars without manual chase.",
      },
      {
        title: "Document collection",
        body: "Chase marksheets and forms until the admissions file is complete.",
      },
      {
        title: "Fee payment reminders",
        body: "Nudge pending fees and installments before seats lapse.",
      },
      {
        title: "Exam & schedule updates",
        body: "Notify date changes, results windows, and batch shifts.",
      },
    ],
    results: {
      title: "Faster admissions,",
      accent: "fuller batches",
      body: "Coaching institutes used SvaraCall AI to answer enquiries immediately, book demos faster, and keep counselors focused on high-intent prospects.",
      stats: [
        { value: "<60s", label: "First call" },
        { value: "2.7×", label: "Conversion lift" },
        { value: "24/7", label: "Coverage" },
        { value: "3 langs", label: "Telugu · Hindi · English" },
      ],
      quote:
        "Every enquiry gets an instant answer now, in the family's language — counselors only take the calls that convert.",
      author: "Director, coaching institute",
    },
    ctaTitle: "Hear an admissions call",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that qualifies a student enquiry and books counseling — in their language.",
    metaTitle:
      "SvaraCall AI for Education — 60-Second Admissions Outreach",
    metaDescription:
      "AI voice agent for schools, colleges, and coaching centers in India. Call every lead in 60 seconds, explain fees, book counseling — in Telugu, Hindi & English.",
  },
  {
    slug: "automotive",
    name: "Automotive",
    eyebrow: "SvaraCall for Automotive",
    heroTitle: "Every service bay full.",
    heroAccent: "Every PSF call covered.",
    heroSubcopy:
      "SvaraCall AI books service slots, reminds customers, and runs post-service follow-ups — in Telugu, Hindi, and English — so dealerships fill bays without adding dialer seats.",
    heroMetric: { value: "100%", label: "PSF coverage" },
    heroTiles: [
      { value: "Bay", label: "Service booking" },
      { value: "PSF", label: "Post-service NPS" },
      { value: "Fewer", label: "No-shows" },
      { value: "24/7", label: "Callback coverage" },
    ],
    standardTitle: "Fill the bay,",
    standardAccent: "cover every PSF",
    standardBody:
      "Idle bays and missed post-service calls drain dealership revenue. SvaraCall AI dials due vehicles, confirms slots, and closes the loop after every job — escalating only what needs a human advisor.",
    bigStat: {
      value: "Fuller",
      label: "Service calendars with fewer empty bays",
      points: [
        "Book periodic service before the week fills",
        "Remind appointments the day before to cut no-shows",
        "Cover 100% of delivered jobs with PSF / NPS calls",
      ],
    },
    workflows: [
      {
        title: "Periodic service booking",
        body: "Call due vehicles, offer slots, and lock the bay before the week fills.",
      },
      {
        title: "Appointment reminders",
        body: "Confirm tomorrow's jobs so no-shows don't leave bays idle.",
      },
      {
        title: "Post-service feedback (PSF)",
        body: "Cover every delivered job with a polite outcome-logged follow-up.",
      },
      {
        title: "Test-drive scheduling",
        body: "Book and confirm test drives into salesperson calendars.",
      },
      {
        title: "Sales lead qualification",
        body: "Score budget, timeline, and model interest before an SE spends a slot.",
      },
      {
        title: "Insurance renewals",
        body: "Remind policy expiry and route hot renewals to the desk.",
      },
    ],
    results: {
      title: "Fuller bays,",
      accent: "complete PSF",
      body: "Dealerships used SvaraCall AI to book due service, cut no-shows, and cover every delivered job with a follow-up — without hiring another dialer shift.",
      stats: [
        { value: "Fuller", label: "Service bays" },
        { value: "100%", label: "PSF coverage" },
        { value: "Fewer", label: "No-shows" },
        { value: "3 langs", label: "Telugu · Hindi · English" },
      ],
      quote:
        "Service bays stay full and every delivered job gets a PSF call — without hiring another dialer shift.",
      author: "Service manager, multi-brand dealership",
    },
    ctaTitle: "Hear a service booking",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that books a service bay the way your customers actually speak.",
    metaTitle:
      "SvaraCall AI for Automotive — Service Booking, PSF & Sales Callbacks",
    metaDescription:
      "AI voice agent for dealerships in India. Fill service bays, cover PSF calls, remind appointments, and qualify sales leads — in Telugu, Hindi & English.",
  },
  {
    slug: "telecom",
    name: "Telecom & IT",
    eyebrow: "SvaraCall for Telecom & IT",
    heroTitle: "Handle the high-volume calls",
    heroAccent: "humans shouldn't have to",
    heroSubcopy:
      "SvaraCall AI covers bill reminders, outage alerts, SIM activation, and basic IT support — in Telugu, Hindi, and English — so your team only takes the calls that need a human.",
    heroMetric: { value: "24/7", label: "After-hours coverage" },
    heroTiles: [
      { value: "Bill", label: "Payment nudges" },
      { value: "Outage", label: "Status blasts" },
      { value: "SIM", label: "Activation track" },
      { value: "IT", label: "Ticket updates" },
    ],
    standardTitle: "Absorb peak",
    standardAccent: "without overtime",
    standardBody:
      "Telecom and IT queues spike on bill cycles, outages, and product incidents. SvaraCall AI runs the routine voice work at scale and escalates only what needs a specialist.",
    bigStat: {
      value: "Lower",
      label: "Cost per routine contact vs night-shift staffing",
      points: [
        "Remind bills and usage before disconnect or overage",
        "Notify outages and incidents before the queue floods",
        "Handle after-hours FAQs and escalate with full context",
      ],
    },
    workflows: [
      {
        title: "Bill payment support",
        body: "Remind about dues and guide customers to pay before disconnect.",
      },
      {
        title: "Service outage notification",
        body: "Blast affected subscribers with ETA before the call center floods.",
      },
      {
        title: "After-hours support",
        body: "Answer simple queries overnight so tickets don't pile up until morning.",
      },
      {
        title: "SIM activation tracking",
        body: "Confirm KYC steps and track SIM delivery so activations don't stall.",
      },
      {
        title: "Ticket status updates",
        body: "Proactive voice updates so users aren't stuck refreshing the portal.",
      },
      {
        title: "Subscription renewal nudges",
        body: "Remind before lapse and collect renew or cancel intent for the CSM.",
      },
    ],
    results: {
      title: "Fewer queues,",
      accent: "clearer outcomes",
      body: "A regional ISP used SvaraCall AI for bill reminders and outage blasts — agents only handled complex faults while every call stayed logged.",
      stats: [
        { value: "24/7", label: "Care coverage" },
        { value: "Faster", label: "Outage notify" },
        { value: "Lower", label: "Cost per contact" },
        { value: "3 langs", label: "Telugu · Hindi · English" },
      ],
      quote:
        "Bill and outage calls finally run on schedule — in the subscriber's language — and L2 only sees what needs a human.",
      author: "Customer ops lead, regional ISP",
    },
    ctaTitle: "Hear a bill reminder",
    ctaAccent: "on your number",
    ctaSubcopy:
      "We'll place a live SvaraCall that handles a telecom reminder the way your subscribers actually speak.",
    metaTitle:
      "SvaraCall AI for Telecom & IT — Bills, Outages & Support Calls",
    metaDescription:
      "AI voice agent for telecom and IT in India. Run bill reminders, outage alerts, SIM activation, and IT ticket updates in Telugu, Hindi & English.",
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((industry) => industry.slug === slug);
}

export type Faq = { q: string; a: string };

// FAQs — visible text MUST match FAQPage JSON-LD word-for-word (both are
// generated from this array). No explicit price figures by design; cost
// questions are answered with value positioning.
export const faqs: Faq[] = [
  {
    q: "What is SvaraCall AI?",
    a: "SvaraCall AI is an AI voice agent that makes a business's outbound calls automatically — lead follow-ups, appointment reminders, payment reminders, and confirmations — in Telugu, Hindi, and English. It holds a natural two-way conversation, hands off to your team when needed, and logs every call with an outcome, recording, and transcript. SvaraCall AI is a product of Sarwagyna Private Limited, Ongole, Andhra Pradesh, India.",
  },
  {
    q: "How much does SvaraCall AI cost?",
    a: "SvaraCall AI is built to deliver premium, human-grade calling at a fraction of the cost of running a manual calling team or hiring other voice vendors. Pricing is outcome-driven — you pay for calls that convert, not per seat or per hour — so more of your budget goes to reaching customers instead of overhead. The best way to see the value is a pilot on your own contacts; talk to us for a quote matched to your call volume.",
  },
  {
    q: "Is SvaraCall AI cheaper than hiring a calling team or call center?",
    a: "Yes. A human calling team carries salaries, training, and constant attrition, and is capped by headcount and working hours. SvaraCall AI places many calls at once, runs on your schedule every day, speaks Telugu, Hindi, and English, and logs every outcome — at a fraction of the cost of a manual team, with higher consistency and no drop in quality. You get enterprise-grade calling without an enterprise-grade bill.",
  },
  {
    q: "How do AI outbound calls work?",
    a: "SvaraCall AI dials from your registered number on a schedule you set, greets the customer in their language, and states its purpose. It confirms, reschedules, or answers basic questions, and hands complex calls to your team. Every call is recorded and transcribed, and the outcome is logged to one dashboard so you can see exactly what happened.",
  },
  {
    q: "Which languages does SvaraCall speak?",
    a: "SvaraCall AI speaks Telugu, Hindi, and English at launch, and matches the customer's language during the call. Each conversation is two-way, so a customer can reply, ask a basic question, or request a different time and the agent responds naturally. More Indian languages are planned after launch.",
  },
  {
    q: "Is AI outbound calling legal and TRAI-compliant in India?",
    a: "Yes. SvaraCall AI runs on TRAI and DLT-registered templates and headers, dials only with consent, and honors opt-outs immediately. Every call carries a recording disclosure, and data is handled in line with the DPDP Act and hosted in India on AWS Mumbai. Compliance is built into how calls are placed, not added afterward.",
  },
  {
    q: "How does SvaraCall protect customer data under the DPDP Act?",
    a: "SvaraCall AI aligns with India's DPDP Act: it dials on consent, honors opt-outs at once, and discloses call recording on every call. Customer data is hosted in India on AWS Mumbai, access is limited, and each call's recording and transcript stay tied to your account. You stay the data fiduciary for your customers' information.",
  },
  {
    q: "What happens when a customer asks something the AI can't handle?",
    a: "When a call goes beyond routine confirmation or rescheduling, SvaraCall AI escalates to a human on your team instead of guessing. The agent handles the common cases — confirm, reschedule, answer basics — and flags anything complex. The full recording and transcript are logged, so your staff can pick up with complete context.",
  },
  {
    q: "Does SvaraCall integrate with my CRM or existing software?",
    a: "SvaraCall AI works from a simple contact sheet on day one, and integrates with your CRM or existing software so calls trigger from your own records. Outcomes, recordings, and transcripts sync back to one dashboard. You can start with an upload and connect deeper systems later, without new hardware or a change to your phone number.",
  },
  {
    q: "Which industries can use SvaraCall?",
    a: "SvaraCall AI is used across industries in India — clinics and hospitals, real estate, education and coaching, finance and NBFCs, insurance, D2C and retail, telecom and IT, and service businesses. Any business that calls customers at scale for reminders, follow-ups, confirmations, or collections can automate those calls, in the customer's language, while keeping every outcome logged.",
  },
];
