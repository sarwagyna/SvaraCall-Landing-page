export const brokerageHero = {
  eyebrow: "SvaraCall for Brokerage & Capital Markets",
  title: "Activate accounts. Clear KYC. Never give advice.",
  subcopy:
    "SvaraCall AI runs onboarding, KYC chases, and margin alerts — in Telugu, Hindi, and English — with hard guardrails so every call stays operational, never advisory.",
} as const;

export const brokerageStats = [
  {
    value: "Frictionless",
    label: "Same-day pilot from your contact list — no new hardware",
  },
  {
    value: "Secure",
    label: "Recordings, transcripts, and outcomes logged on every call",
  },
  {
    value: "Compliant",
    label: "Consent-first, TRAI/DLT-ready, DPDP-aligned — never investment advice",
  },
] as const;

export type BrokerageTab =
  | "onboarding"
  | "account"
  | "ops"
  | "compliance";

export type BrokerageWorkflow = {
  id: string;
  title: string;
  body: string;
  tab: BrokerageTab;
};

export const brokerageTabs: { id: BrokerageTab; label: string }[] = [
  { id: "onboarding", label: "Onboarding" },
  { id: "account", label: "Account management" },
  { id: "ops", label: "Operations & retention" },
  { id: "compliance", label: "Compliance & risk" },
];

export const brokerageWorkflows: BrokerageWorkflow[] = [
  {
    id: "account-activation",
    title: "Account activation",
    body: "Walk new clients through activation steps and confirm when the account is live.",
    tab: "onboarding",
  },
  {
    id: "kyc-collection",
    title: "KYC / document collection",
    body: "Chase pending KYC and eSign docs until the file clears — no advice, just status.",
    tab: "onboarding",
  },
  {
    id: "welcome-calls",
    title: "Welcome & onboarding calls",
    body: "Confirm contact details, preferred language, and next operational steps.",
    tab: "onboarding",
  },
  {
    id: "aml-verify",
    title: "Identity verification callbacks",
    body: "Secure callbacks to confirm identity markers already on file.",
    tab: "onboarding",
  },
  {
    id: "margin-calls",
    title: "Margin call notifications",
    body: "Alert clients to margin shortfalls and point them to approved next steps.",
    tab: "account",
  },
  {
    id: "portfolio-updates",
    title: "Statement & portfolio updates",
    body: "Notify when statements are ready — without discussing buy/sell recommendations.",
    tab: "account",
  },
  {
    id: "fund-reminders",
    title: "Funding & SIP reminders",
    body: "Remind clients to fund accounts or continue SIPs already instructed.",
    tab: "account",
  },
  {
    id: "dormant-reactivation",
    title: "Dormant account reactivation",
    body: "Reach inactive accounts with reactivation steps and compliance disclosures.",
    tab: "ops",
  },
  {
    id: "support-triage",
    title: "Support triage",
    body: "Answer routine account questions and escalate anything that needs a human.",
    tab: "ops",
  },
  {
    id: "appointment-booking",
    title: "RM appointment booking",
    body: "Book relationship-manager calls without discussing product recommendations.",
    tab: "ops",
  },
  {
    id: "disclosures",
    title: "Mandatory disclosures",
    body: "Deliver recording disclosure and approved scripts on every outbound call.",
    tab: "compliance",
  },
  {
    id: "opt-out",
    title: "Consent & opt-out handling",
    body: "Honor opt-outs immediately and stop the dial sequence for that contact.",
    tab: "compliance",
  },
  {
    id: "call-logging",
    title: "Voice logging & audit trail",
    body: "Outcome, recording, and transcript stored for review and supervision.",
    tab: "compliance",
  },
  {
    id: "escalation-guardrails",
    title: "Advice-free escalation",
    body: "Any ask that sounds like advice routes to a licensed human with context intact.",
    tab: "compliance",
  },
];

export const brokerageFaqs = [
  {
    q: "Does SvaraCall ever give investment advice?",
    a: "No. Scripts stay operational — activation, KYC, margin alerts, appointments. Anything that looks like advice escalates to a licensed human with the transcript already logged.",
  },
  {
    q: "Is outbound calling suitable for SEBI-regulated brokers in India?",
    a: "When done right, yes. SvaraCall uses TRAI/DLT-registered calling, dials with consent, discloses recording, honors opt-outs, and keeps data DPDP-aligned on AWS Mumbai. Your compliance team reviews scripts before go-live.",
  },
  {
    q: "How does it handle accents and code-mixed speech?",
    a: "Calls run in Telugu, Hindi, and English — including natural Hinglish-style exchanges — so KYC and activation conversations feel familiar to Indian clients.",
  },
  {
    q: "Can it connect to our CRM or back office?",
    a: "Start from a contact sheet or CRM export. Outcomes, recordings, and transcripts land on one dashboard; deeper OMS/CRM hooks can follow once the pilot workflows prove out.",
  },
] as const;

export const brokerageLanguages = [
  "Hindi",
  "Hinglish",
  "Telugu",
  "Tamil",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
] as const;

export const brokerageUniques = [
  "Never gives advice",
  "Multilingual",
  "Outcome-logged",
  "Human escalation",
] as const;

export const brokerageCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 704" },
  { t: 3, kind: "status" as const, text: "Connected · Account activation" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "hi" as const,
    text: "नमस्ते — TradeDesk से बोल रहा हूँ। आपका अकाउंट एक्टिवेशन पेंडिंग है।",
    gloss: "Namaste — calling from TradeDesk. Your account activation is pending.",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, KYC incomplete dikha raha hai.",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Please upload your PAN and cancelled cheque in the app today. I won't discuss any trades — only activation steps.",
  },
  {
    t: 32,
    kind: "customer" as const,
    text: "Theek hai, aaj evening tak upload kar deta hoon.",
  },
  {
    t: 38,
    kind: "agent" as const,
    text: "Thank you. Once docs clear, activation completes. Have a good day.",
  },
];

export const brokerageCallLength = 44;
