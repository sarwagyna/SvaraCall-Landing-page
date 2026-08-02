export const ecommerceHero = {
  eyebrow: "SvaraCall for E-commerce",
  title: "Kill RTO before it kills your margins.",
  subcopy:
    "SvaraCall AI verifies COD orders, confirms addresses, and recovers abandoned carts — in Telugu, Hindi, and English — so fewer parcels come back unpaid.",
} as const;

export const ecommerceStats = [
  {
    value: "20–30%",
    label: "RTO reduction observed by merchants who verify before dispatch",
  },
  {
    value: "Same-day",
    label: "Pilot live on your list — no new hardware, no long IT cycle",
  },
  {
    value: "24/7",
    label: "Voice coverage through sale peaks without overtime staffing",
  },
] as const;

export type EcommerceWorkflow = {
  id: string;
  title: string;
  body: string;
};

export type EcommerceWorkflowGroup = {
  id: string;
  title: string;
  description: string;
  items: EcommerceWorkflow[];
};

export const ecommerceWorkflowGroups: EcommerceWorkflowGroup[] = [
  {
    id: "cod-rto",
    title: "Collect · COD · verify",
    description: "Confirm intent and address before the courier leaves.",
    items: [
      {
        id: "cod-verification",
        title: "COD verification",
        body: "Call to confirm the order and payment mode before dispatch.",
      },
      {
        id: "address-confirmation",
        title: "Address confirmation",
        body: "Verify landmark, pin, and phone so fewer parcels bounce.",
      },
      {
        id: "rto-prevention",
        title: "RTO prevention",
        body: "Flag doubtful COD and high-risk pin codes before they ship.",
      },
      {
        id: "ndr-follow-up",
        title: "NDR follow-up",
        body: "Re-attempt failed deliveries with a fresh confirmation call.",
      },
      {
        id: "delivery-slot",
        title: "Delivery window confirm",
        body: "Lock a time window so the customer is home when it arrives.",
      },
    ],
  },
  {
    id: "carts-returns",
    title: "Carts · returns · recovery",
    description: "Win back drop-offs and close the loop on returns.",
    items: [
      {
        id: "cart-recovery",
        title: "Abandoned cart recovery",
        body: "Call high-value drop-offs with a reason to finish checkout.",
      },
      {
        id: "payment-failure",
        title: "Payment failure follow-up",
        body: "Reach shoppers whose UPI or card attempt failed mid-checkout.",
      },
      {
        id: "returns-exchanges",
        title: "Returns & exchanges",
        body: "Guide pickup scheduling and reason capture without an agent.",
      },
      {
        id: "wismo",
        title: "Where is my order",
        body: "Answer status calls from live order data, any hour.",
      },
      {
        id: "feedback",
        title: "Post-delivery feedback",
        body: "Collect CSAT after delivery and log it on the order record.",
      },
    ],
  },
];

export const ecommerceFaqs = [
  {
    q: "Can SvaraCall verify COD orders before dispatch?",
    a: "Yes. It dials the customer, confirms the order and address, and logs the outcome so your warehouse only ships verified COD — cutting RTO before the courier leaves.",
  },
  {
    q: "Does it work with our OMS or store stack?",
    a: "SvaraCall works from a contact sheet or CRM export to start, and can connect to your order system for status and confirmation workflows. Most merchants begin with a pilot list the same day.",
  },
  {
    q: "What languages does it speak for Indian shoppers?",
    a: "Telugu, Hindi, and English on every call, matched to the customer. Conversations stay natural — not IVR menus — so confirmation rates stay high.",
  },
  {
    q: "Is outbound calling compliant for e-commerce in India?",
    a: "When done right, yes. SvaraCall uses TRAI/DLT-registered calling, dials with consent, discloses recording, honors opt-outs, and keeps data DPDP-aligned on AWS Mumbai.",
  },
] as const;

export const ecommerceLanguages = [
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

export const ecommerceCallScript = [
  { t: 0, kind: "status" as const, text: "Dialing +91 98•• ••• 642" },
  { t: 3, kind: "status" as const, text: "Connected · COD verify" },
  {
    t: 5,
    kind: "agent" as const,
    lang: "hi" as const,
    text: "नमस्ते, FashionKart से बोल रहा हूँ — आपका ऑर्डर कन्फर्म करना था।",
    gloss: "Namaste — calling from FashionKart to confirm your order.",
  },
  {
    t: 14,
    kind: "customer" as const,
    text: "Haan, COD hi rakha tha.",
  },
  {
    t: 20,
    kind: "agent" as const,
    text: "Address is Hyderabad, Madhapur — Landmark near Cyber Towers. Correct?",
  },
  {
    t: 28,
    kind: "customer" as const,
    text: "Haan, theek hai. Kal evening mein deliver karo.",
  },
  {
    t: 36,
    kind: "agent" as const,
    text: "Confirmed. We'll deliver tomorrow evening. Thank you!",
  },
];

export const ecommerceCallLength = 42;
