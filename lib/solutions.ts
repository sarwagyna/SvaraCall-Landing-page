export type SolutionTone = "deep" | "mid" | "pale";

export type SolutionFilter =
  | "all"
  | "revenue"
  | "experience"
  | "operations";

export type SolutionCard = {
  id: string;
  title: string;
  body: string;
  filter: Exclude<SolutionFilter, "all">;
  tone: SolutionTone;
  keywords: string[];
  href?: string;
};

export type SolutionGroup = {
  id: string;
  title: string;
  cards: SolutionCard[];
};

export const solutionFilters: {
  id: SolutionFilter;
  label: string;
}[] = [
  { id: "all", label: "All bottlenecks" },
  { id: "revenue", label: "Revenue generating" },
  { id: "experience", label: "Customer experience" },
  { id: "operations", label: "Operations & logistics" },
];

export const bottleneckPrompts = [
  "Cold leads going quiet",
  "No-shows emptying my calendar",
  "COD returns eating margin",
  "Renewals slipping through",
];

export const solutionGroups: SolutionGroup[] = [
  {
    id: "revenue",
    title: "Revenue generation",
    cards: [
      {
        id: "lead-follow-up",
        title: "Lead follow-up",
        body: "Call new leads within minutes, qualify intent, and route hot ones to your team.",
        filter: "revenue",
        tone: "deep",
        keywords: ["lead", "follow", "cold", "enquiry", "inquiry", "sales"],
        href: "/solutions/lead-follow-up",
      },
      {
        id: "lead-qualification",
        title: "Lead qualification",
        body: "Score budget, timeline, and fit before a human picks up the conversation.",
        filter: "revenue",
        tone: "mid",
        keywords: ["qualify", "qualification", "score", "intent", "sales"],
        href: "/solutions/lead-qualification",
      },
      {
        id: "appointment-booking",
        title: "Appointment scheduling",
        body: "Book, confirm, or reschedule slots so your calendar stays full.",
        filter: "revenue",
        tone: "pale",
        keywords: ["appointment", "booking", "schedule", "calendar", "slot"],
        href: "/solutions/appointment-booking",
      },
      {
        id: "win-back",
        title: "Win-back calls",
        body: "Reach dormant customers with a reason to come back — before the competitor does.",
        filter: "revenue",
        tone: "deep",
        keywords: ["win-back", "winback", "dormant", "lapsed", "churn", "upsell"],
        href: "/solutions/win-back",
      },
      {
        id: "event-reminders",
        title: "Event & webinar reminders",
        body: "Remind registrants the day before so more of them actually show up.",
        filter: "revenue",
        tone: "mid",
        keywords: ["event", "webinar", "reminder", "attendance"],
        href: "/solutions/event-reminders",
      },
      {
        id: "surveys",
        title: "Surveying & polling",
        body: "Ask customers how it went and log the score against each record.",
        filter: "revenue",
        tone: "pale",
        keywords: ["survey", "nps", "feedback", "poll", "score"],
        href: "/solutions/surveys",
      },
    ],
  },
  {
    id: "experience",
    title: "Customer experience",
    cards: [
      {
        id: "appointment-reminders",
        title: "Appointment reminders",
        body: "Confirm bookings a day ahead so slots don't sit empty.",
        filter: "experience",
        tone: "mid",
        keywords: ["reminder", "appointment", "confirm", "no-show", "noshow"],
        href: "/solutions/appointment-reminders",
      },
      {
        id: "no-show-recovery",
        title: "No-show recovery",
        body: "Call back the people who didn't turn up and put them on a new slot.",
        filter: "experience",
        tone: "deep",
        keywords: ["no-show", "noshow", "missed", "recovery", "reschedule"],
        href: "/solutions/no-show-recovery",
      },
      {
        id: "order-updates",
        title: "Order & delivery updates",
        body: "Verify orders, confirm addresses, and cut COD returns before dispatch.",
        filter: "experience",
        tone: "pale",
        keywords: ["order", "delivery", "cod", "status", "wismo", "shipping"],
        href: "/solutions/order-updates",
      },
      {
        id: "payment-reminders",
        title: "Payment & renewal reminders",
        body: "Nudge customers about due payments and renewals before they lapse.",
        filter: "experience",
        tone: "mid",
        keywords: ["payment", "renewal", "emi", "due", "collection", "invoice"],
        href: "/solutions/payment-reminders",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & control",
    cards: [
      {
        id: "crm-logging",
        title: "CRM outcome logging",
        body: "Every call's outcome, recording, and transcript lands on one dashboard.",
        filter: "operations",
        tone: "deep",
        keywords: ["crm", "log", "dashboard", "outcome", "transcript", "recording"],
        href: "/solutions/crm-logging",
      },
      {
        id: "data-collection",
        title: "Customer data collection",
        body: "Capture confirmations, preferences, and feedback without a form chase.",
        filter: "operations",
        tone: "pale",
        keywords: ["data", "collect", "form", "preference", "feedback"],
        href: "/solutions/data-collection",
      },
      {
        id: "escalation",
        title: "Human handoff",
        body: "Complex calls escalate to your team instead of the AI guessing.",
        filter: "operations",
        tone: "mid",
        keywords: ["escalation", "handoff", "human", "transfer", "agent"],
        href: "/solutions/escalation",
      },
      {
        id: "compliance",
        title: "Consent & disclosure",
        body: "TRAI/DLT-ready calling with recording disclosure and instant opt-outs.",
        filter: "operations",
        tone: "deep",
        keywords: ["compliance", "consent", "trai", "dlt", "dpdp", "opt-out", "verify"],
        href: "/solutions/compliance",
      },
    ],
  },
];

export const allSolutionCards = solutionGroups.flatMap((g) => g.cards);

export function matchSolution(query: string): SolutionCard | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  let best: SolutionCard | null = null;
  let bestScore = 0;

  for (const card of allSolutionCards) {
    let score = 0;
    if (card.title.toLowerCase().includes(q)) score += 4;
    if (card.body.toLowerCase().includes(q)) score += 2;
    for (const keyword of card.keywords) {
      if (q.includes(keyword) || keyword.includes(q)) score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      best = card;
    }
  }

  return bestScore > 0 ? best : allSolutionCards[0] ?? null;
}

export const solutionsProcess = [
  {
    label: "Strategy",
    title: "Define your bottlenecks",
    points: [
      "Map the calls your team never finishes",
      "Prioritize by revenue or no-show impact",
      "Choose Telugu, Hindi, English — or mix",
      "Set escalation rules for complex cases",
    ],
  },
  {
    label: "Execution",
    title: "Deploy AI voice agents",
    points: [
      "Upload contacts or connect your CRM",
      "Configure script, tone, and schedule",
      "Dial from your registered number",
      "Pilot on a live slice of your list",
    ],
  },
  {
    label: "Optimization",
    title: "Drive continuous ROI",
    points: [
      "Review outcomes, recordings, transcripts",
      "Tighten scripts where drop-offs happen",
      "Scale the workflows that convert",
      "Keep humans for the calls that matter",
    ],
  },
] as const;

export const solutionsPlays = [
  {
    category: "Automate",
    title: "Lead follow-up that never sleeps",
    body: "New enquiries get a natural call in minutes — in the customer's language — so intent doesn't go cold overnight.",
    href: "/solutions/lead-follow-up",
    cta: "See lead follow-up",
  },
  {
    category: "Recover",
    title: "Fill the slots no-shows leave empty",
    body: "Remind the day before, then recover the ones who miss — and put them back on the calendar.",
    href: "/industries/healthcare",
    cta: "See healthcare play",
  },
  {
    category: "Collect",
    title: "Payment reminders without the chase",
    body: "Polite, consistent renewal and EMI nudges on schedule — logged to your dashboard automatically.",
    href: "/industries/fintech",
    cta: "See fintech play",
  },
  {
    category: "Retain",
    title: "Renewals that close before lapse",
    body: "Remind policyholders in their language, collect intent, and hand hot renewals to advisors.",
    href: "/industries/insurance",
    cta: "See insurance play",
  },
  {
    category: "Activate",
    title: "Clear KYC without giving advice",
    body: "Chase documents and activate accounts — escalate anything that sounds like investment guidance.",
    href: "/industries/brokerage",
    cta: "See brokerage play",
  },
  {
    category: "Confirm",
    title: "Cut COD returns before dispatch",
    body: "Verify orders and addresses by voice so fewer packages come back unpaid.",
    href: "/industries/ecommerce",
    cta: "See e-commerce play",
  },
  {
    category: "Qualify",
    title: "Site-visit leads, pre-scored",
    body: "Budget, timeline, and property fit checked before your broker spends a site visit.",
    href: "/industries/real-estate",
    cta: "See real estate play",
  },
  {
    category: "Educate",
    title: "Admissions follow-up that converts",
    body: "Answer course questions and nudge fee payments so counselling seats don't go empty.",
    href: "/industries/education",
    cta: "See education play",
  },
  {
    category: "Support",
    title: "Bills and outages without the queue",
    body: "Remind dues, blast outage status, and cover after-hours FAQs before L2 gets involved.",
    href: "/industries/telecom",
    cta: "See telecom play",
  },
  {
    category: "Service",
    title: "Fill every bay — cover every PSF",
    body: "Book due service, cut no-shows, and follow up after every delivered job in the customer's language.",
    href: "/industries/automotive",
    cta: "See automotive play",
  },
] as const;

export const verticalBars = [
  { name: "Healthcare", slug: "healthcare", from: "#163300", to: "#9fe870" },
  { name: "Insurance", slug: "insurance", from: "#1a3d2e", to: "#77db93" },
  { name: "Automotive", slug: "automotive", from: "#0e2a1c", to: "#c5edab" },
  { name: "Real estate", slug: "real-estate", from: "#1e4a12", to: "#cdffad" },
  { name: "E-commerce", slug: "ecommerce", from: "#142820", to: "#9fe870" },
  { name: "Education", slug: "education", from: "#0f1f18", to: "#77db93" },
  { name: "Telecom & IT", slug: "telecom", from: "#12261c", to: "#9fe870" },
  { name: "Brokerage", slug: "brokerage", from: "#18301f", to: "#c5edab" },
] as const;
