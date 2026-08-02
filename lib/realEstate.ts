export const realEstateHero = {
  eyebrow: "SvaraCall for Real Estate",
  title: "Answer every portal lead in seconds — before it dies.",
  subcopy:
    "SvaraCall AI calls Magicbricks, 99acres, and website leads instantly, qualifies budget and timeline, and books site visits — in Telugu, Hindi, and English — before the next broker dials.",
} as const;

export const realEstateStats = [
  {
    value: "Seconds",
    label: "Speed-to-lead on new portal enquiries — while intent is still hot",
  },
  {
    value: "25–45%",
    label: "Lift in lead-to-visit conversion when first response is instant",
  },
  {
    value: "24/7",
    label: "Coverage on nights and weekends without overtime staffing",
  },
] as const;

export type RealEstateGroup = {
  id: string;
  title: string;
  items: { id: string; title: string; body: string }[];
};

export const realEstateWorkflowGroups: RealEstateGroup[] = [
  {
    id: "inbound",
    title: "Inbound leads",
    items: [
      {
        id: "portal-response",
        title: "Portal lead auto-dial",
        body: "Call Magicbricks, 99acres, and Housing leads the moment they enquire.",
      },
      {
        id: "lead-qualification",
        title: "Lead qualification",
        body: "Verify budget, timeline, and property fit before an agent spends a visit.",
      },
      {
        id: "site-visit-booking",
        title: "Site-visit scheduling",
        body: "Book and confirm showings straight into agent calendars.",
      },
    ],
  },
  {
    id: "outbound",
    title: "Outbound & follow-up",
    items: [
      {
        id: "missed-callback",
        title: "Missed-call callbacks",
        body: "Return every missed enquiry so no warm lead goes unanswered.",
      },
      {
        id: "open-house",
        title: "Open-house follow-up",
        body: "Re-engage walk-ins and event leads while interest is fresh.",
      },
      {
        id: "visit-reminders",
        title: "Visit reminders",
        body: "Confirm tomorrow's site visits so no-shows don't empty the calendar.",
      },
    ],
  },
  {
    id: "reengage",
    title: "Re-engagement",
    items: [
      {
        id: "dormant-leads",
        title: "Dormant CRM reactivation",
        body: "Wake cold inventory with a reason to tour again.",
      },
      {
        id: "new-listings",
        title: "New listing alerts",
        body: "Notify matched buyers when a fitting inventory hits the market.",
      },
      {
        id: "tenant-screening",
        title: "Tenant pre-screening",
        body: "Check budget, move-in date, and eligibility before a viewing.",
      },
    ],
  },
];

export const realEstateFaqs = [
  {
    q: "How fast does SvaraCall dial a new portal lead?",
    a: "As soon as the lead hits your list or CRM webhook — typically within seconds — so the prospect hears from you before a competing broker calls back.",
  },
  {
    q: "Can it book site visits into our agents' calendars?",
    a: "Yes. It qualifies fit, offers available slots, confirms the visit, and logs the outcome so agents show up prepared.",
  },
  {
    q: "Does it speak the languages buyers actually use?",
    a: "Telugu, Hindi, and English on every call — including natural code-mixed speech — so conversations feel local, not like an IVR.",
  },
  {
    q: "Will it push junk leads to our sales team?",
    a: "No. Budget, timeline, and intent are scored first. Hot leads route to agents; tire-kickers stay logged without burning a site visit.",
  },
] as const;

export const realEstateLanguages = [
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

export const realEstateCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 441" },
  { t: 3, kind: "status" as const, text: "Connected · Portal lead" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "te" as const,
    text: "నమస్తే — మీరు 99acres లో 2BHK కోసం ఎంక్వైరీ చేశారు కదా?",
    gloss: "Namaste — you enquired for a 2BHK on 99acres, right?",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, Madhapur lo chuddam anukuntunnanu.",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Budget around 85 lakhs? I can book a site visit tomorrow at 11 AM or 5 PM.",
  },
  {
    t: 32,
    kind: "customer" as const,
    text: "5 PM fine. Confirm cheyyandi.",
  },
  {
    t: 38,
    kind: "agent" as const,
    text: "Done — tomorrow 5 PM, Madhapur. Our agent will call before arrival.",
  },
];

export const realEstateCallLength = 44;
