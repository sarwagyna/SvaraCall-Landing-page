export const automotiveHero = {
  eyebrow: "SvaraCall for Automotive",
  title: "Every service bay full. Every PSF call covered.",
  subcopy:
    "SvaraCall AI books service slots, reminds customers, and runs post-service follow-ups — in Telugu, Hindi, and English — so dealerships fill bays without adding dialer seats.",
} as const;

export const automotiveStats = [
  {
    value: "Fuller bays",
    label: "Service appointments booked and confirmed before the day starts",
  },
  {
    value: "100%",
    label: "PSF coverage — every delivered job gets a follow-up call",
  },
  {
    value: "Fewer",
    label: "No-shows with day-before reminders in the customer's language",
  },
] as const;

export type AutomotiveTab = "service" | "sales";

export type AutomotiveWorkflow = {
  id: string;
  title: string;
  body: string;
  tab: AutomotiveTab;
};

export const automotiveTabs: { id: AutomotiveTab; label: string }[] = [
  { id: "service", label: "Service & maintenance" },
  { id: "sales", label: "Sales & support" },
];

export const automotiveWorkflows: AutomotiveWorkflow[] = [
  {
    id: "service-booking",
    title: "Periodic service booking",
    body: "Call due vehicles, offer slots, and lock the bay before the week fills.",
    tab: "service",
  },
  {
    id: "appointment-reminders",
    title: "Appointment reminders",
    body: "Confirm tomorrow's jobs so no-shows don't leave bays idle.",
    tab: "service",
  },
  {
    id: "psf-nps",
    title: "Post-service feedback (PSF / NPS)",
    body: "Cover every delivered job with a polite outcome-logged follow-up.",
    tab: "service",
  },
  {
    id: "warranty-reminders",
    title: "Warranty & AMC reminders",
    body: "Nudge expiring cover and annual maintenance before customers lapse.",
    tab: "service",
  },
  {
    id: "parts-ready",
    title: "Parts-ready callbacks",
    body: "Notify when spare parts arrive so jobs don't stall in the workshop.",
    tab: "service",
  },
  {
    id: "lead-qualification",
    title: "Sales lead qualification",
    body: "Score budget, timeline, and model interest before an SE spends a slot.",
    tab: "sales",
  },
  {
    id: "test-drive",
    title: "Test-drive scheduling",
    body: "Book and confirm test drives into salesperson calendars.",
    tab: "sales",
  },
  {
    id: "insurance-renewal",
    title: "Vehicle insurance renewals",
    body: "Remind policy expiry and route hot renewals to the desk.",
    tab: "sales",
  },
  {
    id: "exchange-leads",
    title: "Exchange / upgrade follow-up",
    body: "Re-engage owners due for upgrade without burning SE dial time.",
    tab: "sales",
  },
  {
    id: "missed-callback",
    title: "Missed-call callbacks",
    body: "Return every missed enquiry so warm buyers don't go to the next dealer.",
    tab: "sales",
  },
];

export const automotiveFaqs = [
  {
    q: "Will it handle complex service or sales questions?",
    a: "Routine booking, reminders, and PSF stay with the AI. Anything ambiguous — diagnostics, pricing exceptions, negotiation — escalates to your team with the transcript intact.",
  },
  {
    q: "How is this better than an IVR for dealerships?",
    a: "Customers get a natural two-way call in Telugu, Hindi, or English — not menu trees. Confirmations and reschedules happen in one conversation, and every outcome is logged.",
  },
  {
    q: "Can it work with our DMS or CRM?",
    a: "Start from a contact sheet or CRM export of due vehicles and leads. Outcomes land on one dashboard; deeper DMS hooks can follow once the pilot workflows prove out.",
  },
  {
    q: "How fast can a workshop go live?",
    a: "Most dealerships pilot the same day on a live due-service list — no new hardware — then scale PSF and sales callbacks that convert.",
  },
] as const;

export const automotiveLanguages = [
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

export const automotiveQuote = {
  text: "Service bays stay full and every delivered job gets a PSF call — without hiring another dialer shift.",
  author: "Service manager, multi-brand dealership",
  tags: ["Service booking", "PSF coverage", "Multilingual", "Outcome-logged"],
} as const;

export const automotiveCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 812" },
  { t: 3, kind: "status" as const, text: "Connected · Service booking" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "te" as const,
    text: "నమస్తే రవి గారు — శ్రీ మోటార్స్ నుండి. మీ కారు సర్వీస్ డ్యూ అయింది.",
    gloss: "Namaste Ravi garu — calling from Sree Motors. Your car service is due.",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Weekend lo slot unda?",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Saturday 10 AM or 3 PM — which works? Free pickup available in your area.",
  },
  {
    t: 32,
    kind: "customer" as const,
    text: "10 AM fine. Pickup kavali.",
  },
  {
    t: 38,
    kind: "agent" as const,
    text: "Booked — Saturday 10 AM with pickup. You'll get a confirmation SMS.",
  },
];

export const automotiveCallLength = 44;
