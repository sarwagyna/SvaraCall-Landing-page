export type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export const SVARACALL_CHAT_SYSTEM = `You are SvaraCall AI's solutions assistant for Indian businesses.
Help visitors map calling bottlenecks to outbound voice workflows.
Stay concise (2–4 short paragraphs or bullet points).
Recommend concrete SvaraCall workflows: lead follow-up, appointment reminders, no-show recovery, payment/renewal reminders, COD/order confirmations, KYC chase, insurance renewals, admissions outreach.
Always note calls run in Telugu, Hindi, or English, with outcomes logged.
Never invent pricing. If asked for a demo, suggest booking a pilot at /book-a-pilot.
If unsure, ask one clarifying question about their industry and call volume.`;

export const chatStarters = [
  "I want to cut COD returns before dispatch",
  "Cold portal leads go quiet overnight",
  "No-shows are emptying my calendar",
  "Renewals lapse before we call back",
] as const;

/** Local fallback when SVARACALL_LLM_API_URL is not configured. */
export function localChatReply(userText: string): string {
  const q = userText.toLowerCase();

  if (/cod|rto|order|delivery|cart/.test(q)) {
    return [
      "For e-commerce, start with **COD verification** and **address confirmation** before dispatch — that cuts RTO without adding dialer seats.",
      "Pair it with abandoned-cart recovery for high-value drop-offs. Every call runs in Telugu, Hindi, or English, and the outcome is logged.",
      "Next step: open /industries/ecommerce or ask me to outline a same-day pilot list.",
    ].join("\n\n");
  }

  if (/lead|portal|enquiry|inquiry|sales|qualify/.test(q)) {
    return [
      "Speed-to-lead wins. SvaraCall can **auto-dial new enquiries within minutes**, qualify budget/timeline, and book the next step.",
      "Hot leads route to your team; tire-kickers stay logged. Works for real estate portals, coaching admissions, and consultation desks.",
      "Tell me your industry and daily lead volume — I'll map the exact workflow.",
    ].join("\n\n");
  }

  if (/no-?show|appointment|reminder|slot|calendar/.test(q)) {
    return [
      "Use **appointment reminders** a day ahead, then **no-show recovery** to refill empty slots.",
      "Confirmations and reschedules happen in the customer's language — Telugu, Hindi, or English — with every outcome on your dashboard.",
      "This play fits clinics, consultations, and site-visit calendars.",
    ].join("\n\n");
  }

  if (/renew|premium|emi|payment|collect|insurance/.test(q)) {
    return [
      "Run **payment / renewal reminders** on schedule so dues don't lapse quietly.",
      "For insurance, add document chase and claim-status updates. Scripts stay operational; complex cases escalate to a human.",
      "Share whether you're fintech, insurance, or education fees — I'll tune the script outline.",
    ].join("\n\n");
  }

  if (/kyc|broker|demat|margin|sebi|advice/.test(q)) {
    return [
      "For brokerage, SvaraCall clears **account activation** and **KYC document chase** — and never gives investment advice.",
      "Anything that sounds advisory escalates to a licensed human with the transcript intact.",
      "See /industries/brokerage or ask me for an advice-free script checklist.",
    ].join("\n\n");
  }

  return [
    "Tell me the calling bottleneck — cold leads, no-shows, COD/RTO, renewals, KYC, or admissions — and I'll map a SvaraCall workflow.",
    "Calls run in Telugu, Hindi, or English, with every outcome logged. When you're ready, book a pilot at /book-a-pilot.",
  ].join("\n\n");
}
