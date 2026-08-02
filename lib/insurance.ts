export const insuranceHero = {
  eyebrow: "SvaraCall for Insurance",
  title: "Renewals that stick. Servicing that scales.",
  subcopy:
    "SvaraCall AI reminds policyholders, collects documents, and updates claim status — in Telugu, Hindi, and English — so renewals close and service queues stay short.",
} as const;

export const insuranceStats = [
  {
    value: "Higher",
    label: "Retention and renewal conversion without adding dialer seats",
  },
  {
    value: "Faster",
    label: "Turnaround on claims status, KYC chases, and premium nudges",
  },
  {
    value: "Clearer",
    label: "Every call logged with outcome, recording, and transcript",
  },
] as const;

export type InsuranceLine = "all" | "motor" | "life" | "health" | "general";

export type InsuranceWorkflow = {
  id: string;
  title: string;
  body: string;
  lines: InsuranceLine[];
  category: "renewals" | "sales";
  metric: string;
};

export const insuranceLineTabs: { id: InsuranceLine; label: string }[] = [
  { id: "all", label: "All lines" },
  { id: "motor", label: "Motor" },
  { id: "life", label: "Life" },
  { id: "health", label: "Health" },
  { id: "general", label: "General" },
];

export const insuranceWorkflows: InsuranceWorkflow[] = [
  {
    id: "policy-renewal",
    title: "Policy renewal reminders",
    body: "Call before expiry, confirm intent, and nudge payment before lapse.",
    lines: ["motor", "life", "health", "general"],
    category: "renewals",
    metric: "92%",
  },
  {
    id: "premium-due",
    title: "Premium due nudges",
    body: "Polite, scheduled reminders so premiums don't slip past the due date.",
    lines: ["life", "health", "general"],
    category: "renewals",
    metric: "88%",
  },
  {
    id: "claim-status",
    title: "Claim status updates",
    body: "Proactive voice updates so customers aren't stuck checking portals.",
    lines: ["motor", "health", "general"],
    category: "renewals",
    metric: "85%",
  },
  {
    id: "document-collection",
    title: "Document collection",
    body: "Chase KYC, medicals, and claim docs until the file is complete.",
    lines: ["life", "health", "motor"],
    category: "renewals",
    metric: "80%",
  },
  {
    id: "lead-qualification",
    title: "Lead qualification",
    body: "Score intent, budget, and product fit before an advisor picks up.",
    lines: ["life", "health", "general", "motor"],
    category: "sales",
    metric: "3×",
  },
  {
    id: "appointment-scheduling",
    title: "Advisor appointment booking",
    body: "Book and confirm meetings so fewer prospects go cold.",
    lines: ["life", "health", "general"],
    category: "sales",
    metric: "2×",
  },
  {
    id: "cross-sell",
    title: "Cross-sell & upsell",
    body: "Offer add-ons and related covers when renewal intent is high.",
    lines: ["motor", "health", "general"],
    category: "sales",
    metric: "18%",
  },
  {
    id: "motor-renewal",
    title: "Motor insurance renewal",
    body: "Confirm vehicle details and renew before the RC cover expires.",
    lines: ["motor"],
    category: "renewals",
    metric: "90%",
  },
];

export const insuranceFaqs = [
  {
    q: "Can SvaraCall handle renewals across motor, life, and health?",
    a: "Yes. The same outbound agent runs renewal reminders, premium nudges, and document chases — scripted per product line — in Telugu, Hindi, or English.",
  },
  {
    q: "How do complex claim questions get handled?",
    a: "Routine status updates stay with the AI. Anything ambiguous or high-stakes escalates to your team with the transcript and outcome already logged.",
  },
  {
    q: "Is outbound insurance calling compliant in India?",
    a: "When done right, yes. SvaraCall uses TRAI/DLT-registered calling, dials with consent, discloses recording, honors opt-outs, and keeps data DPDP-aligned on AWS Mumbai.",
  },
  {
    q: "How fast can we pilot on our book?",
    a: "Most insurers and brokers start with a contact list the same day — no new hardware. We tune the script to your products, then scale the workflows that convert.",
  },
] as const;

export const insuranceQuote = {
  text: "Renewal calls finally happen on time — in the customer's language — and our advisors only see the ones ready to close.",
  author: "Operations head, multi-line insurance broker",
  tags: ["High quality", "Scalable", "Outcome-logged", "Multilingual"],
} as const;

export const insuranceCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 318" },
  { t: 3, kind: "status" as const, text: "Connected · Policy renewal" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "hi" as const,
    text: "नमस्ते शर्मा जी — आपकी मोटर पॉलिसी अगले हफ्ते खत्म हो रही है।",
    gloss: "Namaste Sharma ji — your motor policy expires next week.",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, renew karna hai. Premium kitna hoga?",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Same cover renews at ₹8,420. I can send the payment link now — shall I?",
  },
  {
    t: 30,
    kind: "customer" as const,
    text: "Haan, bhej do. Evening mein pay karunga.",
  },
  {
    t: 36,
    kind: "agent" as const,
    text: "Done. Link sent. Your cover stays active once paid. Thank you!",
  },
];

export const insuranceCallLength = 42;
