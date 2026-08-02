export const educationHero = {
  eyebrow: "SvaraCall for Education",
  title: "Every lead called in 60 seconds, in their language.",
  subcopy:
    "SvaraCall AI dials new enquiries instantly, answers course and fee questions, and books counseling — in Telugu, Hindi, and English — so admissions never wait until morning.",
} as const;

export const educationStats = [
  {
    value: "<60s",
    label: "Time to first call on a new enquiry — while intent is still hot",
  },
  {
    value: "2.7×",
    label: "Higher conversion when counselors only take pre-qualified leads",
  },
  {
    value: "24/7",
    label: "Coverage on nights, weekends, and peak counseling season",
  },
] as const;

export type EducationGroup = {
  id: string;
  title: string;
  items: { id: string; title: string; body: string }[];
};

export const educationWorkflowGroups: EducationGroup[] = [
  {
    id: "admissions",
    title: "Admission teams",
    items: [
      {
        id: "welcome",
        title: "Welcome & introduction",
        body: "Greet new enquiries and set expectations for the next step.",
      },
      {
        id: "application-status",
        title: "Application status updates",
        body: "Tell applicants where their file stands without a portal chase.",
      },
      {
        id: "scholarship",
        title: "Scholarship & financial aid",
        body: "Explain aid options and collect the documents counselors need.",
      },
      {
        id: "campus-tour",
        title: "Campus / demo scheduling",
        body: "Book tours and demo classes into counselor calendars.",
      },
    ],
  },
  {
    id: "intake",
    title: "Intake department",
    items: [
      {
        id: "screening",
        title: "Initial screening",
        body: "Check course interest, batch timing, and basic eligibility.",
      },
      {
        id: "documents",
        title: "Document collection",
        body: "Chase marksheets, ID proofs, and forms until the file is complete.",
      },
      {
        id: "eligibility",
        title: "Eligibility verification",
        body: "Confirm prerequisites before a counselor spends a slot.",
      },
      {
        id: "fee-reminders",
        title: "Fee payment reminders",
        body: "Nudge pending fees and installments before seats lapse.",
      },
    ],
  },
  {
    id: "support",
    title: "Student support",
    items: [
      {
        id: "enrollment",
        title: "Enrollment assistance",
        body: "Guide confirmed students through the last enrollment steps.",
      },
      {
        id: "exam-updates",
        title: "Exam & schedule updates",
        body: "Notify date changes, results windows, and batch shifts.",
      },
      {
        id: "feedback",
        title: "Student & parent feedback",
        body: "Collect CSAT after counseling or demo and log it on the record.",
      },
      {
        id: "alumni",
        title: "Alumni re-engagement",
        body: "Invite alumni to events, referrals, and higher programs.",
      },
    ],
  },
];

export const educationFaqs = [
  {
    q: "How does the voice AI sound to students and parents?",
    a: "Natural two-way conversation in Telugu, Hindi, or English — not IVR menus — so families stay on the line long enough to book counseling.",
  },
  {
    q: "Can it handle complex course and fee questions?",
    a: "It covers syllabus, eligibility, batch timing, and fee structures from your scripted knowledge. Anything ambiguous escalates to a counselor with the transcript intact.",
  },
  {
    q: "Will it integrate with our admissions CRM?",
    a: "Start from a sheet or CRM export. Outcomes, recordings, and transcripts land on one dashboard; deeper CRM hooks follow once the pilot workflows prove out.",
  },
  {
    q: "How fast can we go live for peak season?",
    a: "Most institutes pilot the same day on a live enquiry list — no new hardware — then scale the workflows that convert.",
  },
] as const;

export const educationLanguages = [
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

export const educationCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 556" },
  { t: 3, kind: "status" as const, text: "Connected · Admissions enquiry" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "te" as const,
    text: "నమస్తే — మీరు NEET కోచింగ్ కోసం ఎంక్వైరీ చేశారు కదా?",
    gloss: "Namaste — you enquired about NEET coaching, right?",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, fee structure and batch timings kavali.",
  },
  {
    t: 22,
    kind: "agent" as const,
    text: "Two-year batch starts Monday, 6–9 AM. Fees are ₹1.2L with EMI options. Shall I book a counselor call tomorrow?",
  },
  {
    t: 34,
    kind: "customer" as const,
    text: "Evening lo book cheyyandi.",
  },
  {
    t: 40,
    kind: "agent" as const,
    text: "Done — tomorrow 6 PM with Admissions. You'll get a confirmation SMS.",
  },
];

export const educationCallLength = 46;
