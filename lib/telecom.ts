export const telecomHero = {
  eyebrow: "SvaraCall for Telecom & IT",
  title: "Handle the high-volume calls humans shouldn't have to.",
  subcopy:
    "SvaraCall AI covers bill reminders, outage alerts, SIM activation, and basic IT support — in Telugu, Hindi, and English — so your team only takes the calls that need a human.",
} as const;

export const telecomStats = [
  {
    value: "24/7",
    label: "Coverage for after-hours care, outage blasts, and usage alerts",
  },
  {
    value: "Minutes",
    label: "Average handle time on routine bill, plan, and ticket calls",
  },
  {
    value: "Lower",
    label: "Cost per contact vs staffing for peak and night shifts",
  },
] as const;

export type TelecomWorkflow = {
  id: string;
  title: string;
  body: string;
  tag: string;
};

export type TelecomWorkflowGroup = {
  id: string;
  title: string;
  description: string;
  items: TelecomWorkflow[];
};

export const telecomWorkflowGroups: TelecomWorkflowGroup[] = [
  {
    id: "telecom",
    title: "Telecom",
    description: "Customer care, sales, and logistics for subscribers.",
    items: [
      {
        id: "after-hours",
        title: "After-hours support",
        body: "Answer simple queries overnight so tickets don't pile up until morning.",
        tag: "Customer care",
      },
      {
        id: "outage-notify",
        title: "Service outage notification",
        body: "Blast affected subscribers with ETA and status before the call center floods.",
        tag: "Customer care",
      },
      {
        id: "bill-payments",
        title: "Bill payment support",
        body: "Remind about dues, share balance, and guide customers to pay before disconnect.",
        tag: "Customer care",
      },
      {
        id: "basic-tech",
        title: "Basic technical support",
        body: "Walk through reboot, APN, and coverage checks before escalating to L2.",
        tag: "Customer care",
      },
      {
        id: "feedback",
        title: "Feedback & survey collection",
        body: "Capture CSAT after support interactions and log scores on the account.",
        tag: "Feedback",
      },
      {
        id: "inbound-sales",
        title: "Inbound sales inquiries",
        body: "Qualify plan interest and hand hot upgrades to a live sales agent.",
        tag: "Sales",
      },
      {
        id: "sim-activation",
        title: "SIM activation & delivery tracking",
        body: "Confirm KYC steps and track SIM delivery so activations don't stall.",
        tag: "Logistics",
      },
      {
        id: "usage-alerts",
        title: "Usage alerts & notifications",
        body: "Warn subscribers before data or call packs lapse into overage.",
        tag: "Customer care",
      },
    ],
  },
  {
    id: "it-saas",
    title: "IT & SaaS",
    description: "Routine support and renewals for product and helpdesk teams.",
    items: [
      {
        id: "ticket-status",
        title: "Ticket status updates",
        body: "Proactive voice updates so users aren't stuck refreshing the portal.",
        tag: "Support",
      },
      {
        id: "password-unlock",
        title: "Account unlock & password reset",
        body: "Verify identity and guide resets on high-volume access issues.",
        tag: "Support",
      },
      {
        id: "onboarding-calls",
        title: "Onboarding check-ins",
        body: "Confirm setup steps and book a specialist when activation stalls.",
        tag: "Success",
      },
      {
        id: "renewal-nudges",
        title: "Subscription renewal nudges",
        body: "Remind before lapse and collect renew / cancel intent for the CSM.",
        tag: "Revenue",
      },
      {
        id: "downtime-alerts",
        title: "Incident & downtime alerts",
        body: "Notify affected accounts with status and next update window.",
        tag: "Ops",
      },
      {
        id: "feature-adoption",
        title: "Feature adoption follow-up",
        body: "Check whether key features are live and offer a guided next step.",
        tag: "Success",
      },
    ],
  },
];

export const telecomFaqs = [
  {
    q: "Can SvaraCall handle telecom bill and outage call volume?",
    a: "Yes. It runs outbound bill reminders, usage alerts, and outage notifications at scale, and can answer routine inbound questions after hours — escalating anything complex to your team with the transcript intact.",
  },
  {
    q: "Does it work for IT helpdesk and SaaS support too?",
    a: "The same voice layer covers ticket status, account unlocks, onboarding check-ins, and renewal nudges. Start from a contact list or ticket export; connect deeper systems once the pilot proves out.",
  },
  {
    q: "What languages does it speak for Indian subscribers?",
    a: "Telugu, Hindi, and English on every call, matched to the customer. Conversations stay two-way — not IVR menus — so bill and plan conversations feel natural.",
  },
  {
    q: "Is outbound telecom calling compliant in India?",
    a: "When done right, yes. SvaraCall uses TRAI/DLT-registered calling, dials with consent, discloses recording, honors opt-outs, and keeps data DPDP-aligned on AWS Mumbai.",
  },
] as const;

export const telecomLanguages = [
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

export const telecomCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 441" },
  { t: 3, kind: "status" as const, text: "Connected · Bill reminder" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "hi" as const,
    text: "नमस्ते — आपकी पोस्टपेड बिल ₹849 कल तक बकाया है।",
    gloss: "Namaste — your postpaid bill of ₹849 is due by tomorrow.",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, yaad dilaya. UPI se pay kar sakta hoon?",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Yes — I can send the payment link on WhatsApp and SMS right now.",
  },
  {
    t: 30,
    kind: "customer" as const,
    text: "Theek hai, bhej do. Aaj shaam tak pay karunga.",
  },
  {
    t: 36,
    kind: "agent" as const,
    text: "Done. Link sent. Your line stays active once paid. Thank you!",
  },
];

export const telecomCallLength = 42;
