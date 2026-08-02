import type { SeoProgrammaticPage } from "@/lib/seoTypes";
import {
  integrations,
  type Integration,
  type IntegrationCategory,
} from "@/lib/integrations";
import { allSolutionCards } from "@/lib/solutions";

const categoryPlaybooks: Record<
  IntegrationCategory,
  {
    problem: string;
    current: string[];
    ai: string[];
    benefitTitles: [string, string, string, string];
    faqExtra: { q: string; a: string };
  }
> = {
  CRM: {
    problem:
      "Call outcomes live in dialer notes or WhatsApp chats — not on the lead record — so sales leaders cannot see what happened after each attempt.",
    current: [
      "Rep dials from a separate console or phone.",
      "Outcome typed later (or never) into the CRM.",
      "Transcripts and recordings stay siloed.",
      "Managers audit sample calls manually.",
    ],
    ai: [
      "SvaraCall places the call from your registered number.",
      "Disposition, summary, and recording attach to the CRM record.",
      "Hot intents create tasks or live-transfer to an owner.",
      "Dashboards show connect and conversion by campaign.",
    ],
    benefitTitles: [
      "Closed-loop calling",
      "Cleaner pipeline hygiene",
      "Faster coaching",
      "Fewer missed follow-ups",
    ],
    faqExtra: {
      q: "Does every call create a CRM activity?",
      a: "Yes — successful and failed attempts can log with disposition codes, so your funnel stays honest.",
    },
  },
  Automation: {
    problem:
      "Voice campaigns are triggered by humans clicking 'start' instead of events in your ops stack — so speed-to-lead and renewal nudges slip.",
    current: [
      "Ops exports a CSV when someone remembers.",
      "Dialer campaigns are rebuilt by hand.",
      "Failures need manual retries.",
      "No single audit of who was called why.",
    ],
    ai: [
      "Zapier/Make/n8n (or native) fires when a record hits a stage.",
      "SvaraCall queues the call with the right script and language.",
      "Outcomes write back to the automation for branching.",
      "Retries respect quiet hours and DNC rules.",
    ],
    benefitTitles: [
      "Event-driven dials",
      "Fewer spreadsheet drops",
      "Consistent retries",
      "Auditable triggers",
    ],
    faqExtra: {
      q: "Can I branch automation on call outcome?",
      a: "Yes — use dispositions (connected, interested, callback, DNC) as triggers for the next step in your workflow tool.",
    },
  },
  Calendar: {
    problem:
      "Bookings require a human to juggle slots while the customer is still on the line — or a form they never complete.",
    current: [
      "Agent checks calendar in another tab.",
      "Offers 2–3 times from memory.",
      "Double-books or leaves gaps.",
      "No-shows stay unfilled.",
    ],
    ai: [
      "SvaraCall reads availability from your calendar tool.",
      "Offers real open slots in the customer's language.",
      "Writes the event with source and notes.",
      "Reminder workflows can fire automatically.",
    ],
    benefitTitles: [
      "Live slot offers",
      "Fewer double-books",
      "Language-aware booking",
      "Reminder-ready events",
    ],
    faqExtra: {
      q: "Which calendars are supported?",
      a: "Google Calendar, Outlook, Calendly, Cal.com, and Zoho Calendar paths are available — confirm your stack on the pilot call.",
    },
  },
  Communication: {
    problem:
      "Teams miss call escalations because voice outcomes never reach Slack or Teams where work actually happens.",
    current: [
      "Someone pastes a summary into chat.",
      "Urgent handoffs get buried.",
      "No standard channel for hot leads.",
      "Night calls wait until morning standup.",
    ],
    ai: [
      "High-intent outcomes post to a channel or DM.",
      "Include recording link and CRM deep-link.",
      "Tag the right owner automatically.",
      "Keep noise low with severity filters.",
    ],
    benefitTitles: [
      "Instant hot-lead alerts",
      "Context in-channel",
      "Owner routing",
      "Less status chasing",
    ],
    faqExtra: {
      q: "Will this spam our Slack?",
      a: "No — configure which dispositions notify, and route others to the dashboard only.",
    },
  },
  "E-commerce": {
    problem:
      "COD verification and order confirmations lag behind checkout, driving returns and fake orders.",
    current: [
      "Support dials a fraction of COD orders.",
      "Addresses stay unverified.",
      "WhatsApp templates feel ignored.",
      "Returns hit margin after dispatch.",
    ],
    ai: [
      "Order event triggers a confirmation call.",
      "Agent verifies address, COD willingness, and ETA expectations.",
      "Cancels or flags risky orders before warehouse pick.",
      "Logs outcome back to the store or OMS.",
    ],
    benefitTitles: [
      "Lower COD returns",
      "Pre-dispatch verification",
      "Multilingual confirmations",
      "OMS-friendly outcomes",
    ],
    faqExtra: {
      q: "Can we skip prepaid orders?",
      a: "Yes — filter triggers by payment method, risk score, or SKU so you only call where it pays.",
    },
  },
  Helpdesk: {
    problem:
      "Ticket backlogs grow because simple status and FAQ calls still need an agent seat.",
    current: [
      "IVR dumps into long queues.",
      "Agents re-ask for ticket IDs.",
      "After-hours coverage is email-only.",
      "Notes are inconsistent.",
    ],
    ai: [
      "Inbound or callback voice agent resolves common intents.",
      "Looks up ticket context via helpdesk APIs.",
      "Updates the ticket and escalates edge cases.",
      "Hands off live when sentiment or policy requires it.",
    ],
    benefitTitles: [
      "Containment on FAQs",
      "After-hours coverage",
      "Cleaner ticket notes",
      "Human for exceptions",
    ],
    faqExtra: {
      q: "Does the agent open tickets?",
      a: "It can create or update tickets with transcript summaries — your pilot defines which queues are in scope.",
    },
  },
  Productivity: {
    problem:
      "Campaign lists and call notes live in sheets and tasks apps without a closed loop to voice.",
    current: [
      "Ops maintains a master sheet.",
      "Callers mark status in a second place.",
      "Follow-ups rely on memory.",
      "Reporting is weekend Excel work.",
    ],
    ai: [
      "Pull eligible rows or tasks into a campaign.",
      "Write dispositions back to the source of truth.",
      "Create follow-up tasks automatically.",
      "Keep managers on live outcome views.",
    ],
    benefitTitles: [
      "Sheet-to-dial pipelines",
      "Task hygiene",
      "Less dual entry",
      "Live reporting",
    ],
    faqExtra: {
      q: "Can we start from Google Sheets alone?",
      a: "Yes — many pilots begin with a sheet upload or live sheet sync before a full CRM cutover.",
    },
  },
  SMS: {
    problem:
      "SMS reminders without a voice path underperform for older audiences and high-stakes payments.",
    current: [
      "Template SMS fires once.",
      "No conversation if the customer is confused.",
      "Opt-outs are messy across channels.",
      "Delivery ≠ understanding.",
    ],
    ai: [
      "Coordinate SMS + voice in one journey.",
      "Call when SMS is ignored or bounced.",
      "Honor DND and channel preferences.",
      "Log both touches to the same record.",
    ],
    benefitTitles: [
      "Multichannel nudges",
      "Voice when SMS fails",
      "Shared opt-out logic",
      "Higher confirmation rates",
    ],
    faqExtra: {
      q: "Do you replace our SMS vendor?",
      a: "No — SvaraCall orchestrates voice and can work alongside your existing SMS stack.",
    },
  },
  Telephony: {
    problem:
      "You already own numbers and SIP, but agents still read scripts — voice AI never sits on the trunk you paid for.",
    current: [
      "Human dialer on CPaaS legs.",
      "Scripts drift per agent.",
      "Concurrency limits wasted at night.",
      "No structured AI containment.",
    ],
    ai: [
      "SvaraCall agents dial over your telephony provider.",
      "Keep existing DIDs and DLT headers where required.",
      "Scale concurrency for campaigns.",
      "Fall back to human agents on the same stack.",
    ],
    benefitTitles: [
      "Use numbers you own",
      "AI on your SIP/CPaaS",
      "Campaign scale",
      "Human backup path",
    ],
    faqExtra: {
      q: "Can we keep Exotel/Twilio/Plivo?",
      a: "Yes — SvaraCall is the voice agent layer; your telephony provider can remain the connectivity layer.",
    },
  },
  WhatsApp: {
    problem:
      "WhatsApp threads stall when customers will not type — voice is faster for confirmations and collections.",
    current: [
      "Agent waits on chat replies.",
      "Templates expire or feel robotic.",
      "No bridge from chat intent to call.",
      "Context lost across channels.",
    ],
    ai: [
      "Trigger a call from WhatsApp intent or silence.",
      "Pass chat context into the voice prompt.",
      "Offer WhatsApp follow-up after the call.",
      "Keep one customer timeline.",
    ],
    benefitTitles: [
      "Chat-to-call handoff",
      "Faster confirmations",
      "Shared context",
      "Higher completion",
    ],
    faqExtra: {
      q: "Is this Meta Cloud API officially listed?",
      a: "WhatsApp paths run through supported BSP/cloud integrations — we confirm your BSP during onboarding.",
    },
  },
  Payments: {
    problem:
      "Collectors explain dues well, then lose the customer before a payment link is opened.",
    current: [
      "Call ends with 'I will pay later'.",
      "Link sent manually on WhatsApp.",
      "No confirmation the link was seen.",
      "Promise-to-pay not structured.",
    ],
    ai: [
      "Agent states dues clearly with consent.",
      "Sends payment link mid-call or immediately after.",
      "Captures PTP date and amount.",
      "Logs gateway reference where available.",
    ],
    benefitTitles: [
      "Pay-while-talking journeys",
      "Structured PTP",
      "Fewer drop-offs",
      "Audit-friendly notes",
    ],
    faqExtra: {
      q: "Do you store card data on the call?",
      a: "No — customers complete payment on your gateway. Voice agents avoid collecting full PAN/CVV on the call.",
    },
  },
  Email: {
    problem:
      "Email campaigns get opens, but high-intent replies still wait for a human callback.",
    current: [
      "SDR sees reply hours later.",
      "Timezone mismatches kill momentum.",
      "No automatic voice follow-up.",
      "Attribution is fuzzy.",
    ],
    ai: [
      "Positive reply or click can trigger a call.",
      "Agent references the email context.",
      "Books meetings or qualifies live.",
      "Writes outcome back for attribution.",
    ],
    benefitTitles: [
      "Reply-to-dial speed",
      "Context continuity",
      "Meeting booking",
      "Clearer attribution",
    ],
    faqExtra: {
      q: "Which ESPs work?",
      a: "Common paths include SendGrid, Mailgun, SES, Resend, and Gmail-based ops — scoped in the pilot.",
    },
  },
  Databases: {
    problem:
      "Eligible call lists sit in warehouses and product DBs without a safe, governed dial path.",
    current: [
      "Analysts export cohorts weekly.",
      "PII travels in CSVs.",
      "Stale lists waste dials.",
      "No row-level outcome writeback.",
    ],
    ai: [
      "Query or sync eligible cohorts securely.",
      "Respect suppression and consent flags.",
      "Write dispositions to a results table.",
      "Keep engineers out of daily dial ops.",
    ],
    benefitTitles: [
      "Warehouse-native cohorts",
      "Less PII in email",
      "Fresh eligibility",
      "Outcome writeback",
    ],
    faqExtra: {
      q: "Do you need production DB credentials?",
      a: "Prefer read replicas, views, or reverse-ETL. Production write access is scoped and reviewed with your team.",
    },
  },
  Finance: {
    problem:
      "Finance systems know who is overdue, but collections still depend on spreadsheet dialers.",
    current: [
      "Aging reports exported to Excel.",
      "Collectors pick accounts manually.",
      "Receipts lag behind promises.",
      "Language coverage is thin.",
    ],
    ai: [
      "Pull overdue balances from books/ERP.",
      "Prioritize by amount and risk.",
      "Negotiate PTP in the customer's language.",
      "Sync notes for reconciliation.",
    ],
    benefitTitles: [
      "Aging-driven dials",
      "Vernacular collections",
      "PTP discipline",
      "Cleaner reconciliations",
    ],
    faqExtra: {
      q: "Is this RBI-compliant collections advice?",
      a: "SvaraCall supports compliant outreach patterns you define — legal review of scripts remains your responsibility for regulated collections.",
    },
  },
  Healthcare: {
    problem:
      "Clinic systems know appointment and report status, but patients still miss slots without a voice nudge.",
    current: [
      "SMS reminders only.",
      "Front desk dials a fraction of the list.",
      "Reports sit uncollected.",
      "No structured reschedule path.",
    ],
    ai: [
      "Sync appointments from the practice system.",
      "Confirm, reschedule, or recover no-shows by voice.",
      "Respect clinical disclosure boundaries.",
      "Log outcomes back for the front desk.",
    ],
    benefitTitles: [
      "Fewer empty slots",
      "Report pickup nudges",
      "Reschedule on-call",
      "Desk workload relief",
    ],
    faqExtra: {
      q: "Do you give medical advice?",
      a: "No — agents stick to scheduling, reminders, and approved FAQs. Clinical questions escalate to staff.",
    },
  },
  Analytics: {
    problem:
      "Voice performance is invisible in the product analytics stack you already trust.",
    current: [
      "Dialer CSV downloads weekly.",
      "Marketing cannot see call influence.",
      "No funnel from impression → call → sale.",
      "Experiments lack voice metrics.",
    ],
    ai: [
      "Emit call events to your analytics tools.",
      "Join on lead or order IDs.",
      "Compare campaigns with containment and booking rates.",
      "Feed product and growth dashboards.",
    ],
    benefitTitles: [
      "Voice in your BI",
      "Campaign attribution",
      "Experiment metrics",
      "Shared definitions",
    ],
    faqExtra: {
      q: "What events do you send?",
      a: "Typical events: call_started, connected, disposition, duration, transfer — mapped to your schema in onboarding.",
    },
  },
};

function relatedFor(item: Integration): SeoProgrammaticPage["related"] {
  const peers = integrations
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 2)
    .map((i) => ({
      name: i.name,
      href: `/integrations/${i.id}`,
    }));

  return [
    { name: "All integrations", href: "/integrations" },
    { name: "CRM logging", href: "/features/crm-integration" },
    { name: "Webhooks", href: "/features/webhooks" },
    { name: "Campaigns", href: "/features/campaign-management" },
    { name: "Use cases", href: "/use-cases" },
    ...peers,
  ].slice(0, 6);
}

function buildIntegrationPage(item: Integration): SeoProgrammaticPage {
  const play = categoryPlaybooks[item.category];
  const statusLabel =
    item.status === "ready" ? "Ready to connect" : "Enterprise setup";

  return {
    slug: item.id,
    name: item.name,
    metaTitle: `${item.name} AI Voice Agent Integration | SvaraCall`,
    metaDescription: `${item.description} Connect ${item.name} to SvaraCall AI voice agents for outbound and inbound calling with logged outcomes.`,
    eyebrow: `Integrations · ${item.category}`,
    headline: `${item.name} + SvaraCall AI voice agents`,
    subcopy: `${item.description} Keep ${item.name} as your system of record while SvaraCall handles natural phone conversations in Telugu, Hindi, and English.`,
    primaryCta: `Pilot with ${item.name}`,
    chips: [item.category, statusLabel, "Outcome sync", "India-ready"],
    stats: [
      { value: String(integrations.length), label: "Integrations in the catalog" },
      { value: item.category, label: "Primary category" },
      {
        value: item.status === "ready" ? "Standard" : "Enterprise",
        label: "Onboarding path",
      },
      { value: "API / webhook", label: "Typical connection style" },
    ],
    problemTitle: `The gap between ${item.name} and the phone`,
    problem: play.problem,
    currentTitle: "How teams work without a voice agent layer",
    currentSteps: play.current,
    aiTitle: `How SvaraCall works with ${item.name}`,
    aiSteps: play.ai,
    benefitsTitle: `Why teams connect ${item.name}`,
    benefits: play.benefitTitles.map((title, i) => ({
      title,
      body:
        i === 0
          ? `${item.name} stays authoritative while SvaraCall executes and returns structured call outcomes.`
          : i === 1
            ? `Reduce dual entry between dialers and ${item.name} so reps trust the record.`
            : i === 2
              ? `Managers coach from recordings and dispositions tied to ${item.name} objects.`
              : `Automate the next step in ${item.name} when a call hits a target disposition.`,
    })),
    roiTitle: "What usually improves",
    roi: [
      { value: "Minutes", label: "Faster trigger-to-first-dial on hot events" },
      { value: "1 system", label: "Source of truth for outcomes" },
      { value: "Less CSV", label: "Fewer manual list exports" },
      { value: "Audit trail", label: "Who was called, when, and why" },
    ],
    implTitle: "Implementation outline",
    implementation: [
      {
        title: "Map objects & events",
        body: `Identify which ${item.name} records and statuses should start or stop calls.`,
      },
      {
        title: "Connect auth securely",
        body: "OAuth, API keys, or SIP credentials — scoped to the minimum permissions needed.",
      },
      {
        title: "Pilot a narrow journey",
        body: "One campaign (e.g. reminders or lead follow-up) with human review of recordings.",
      },
      {
        title: "Scale & govern",
        body: "Add quiet hours, DNC sync, and disposition taxonomies your ops team owns.",
      },
    ],
    relatedTitle: "Related",
    related: relatedFor(item),
    faqsTitle: `${item.name} integration FAQs`,
    faqs: [
      {
        q: `Is ${item.name} available on SvaraCall today?`,
        a:
          item.status === "ready"
            ? `Yes — ${item.name} is in the ready catalog for standard pilots.`
            : `${item.name} is offered on an enterprise path — we scope credentials, security review, and SLAs during onboarding.`,
      },
      {
        q: "What data syncs back?",
        a: "Typically disposition, timestamp, duration, recording/transcript links, and a short summary — field mapping is confirmed in the pilot.",
      },
      play.faqExtra,
      {
        q: "Does this work with Indian DLT headers?",
        a: "Voice still originates from your compliant calling setup. The integration layer does not replace TRAI/DLT obligations.",
      },
      {
        q: "How long does setup take?",
        a: "Ready connectors often pilot in days once credentials and scripts are ready. Enterprise connectors follow your security review timeline.",
      },
    ],
    tableTitle: `${item.name} integration at a glance`,
    tableHeaders: ["Topic", "Detail"],
    tableRows: [
      ["Category", item.category],
      ["Status", statusLabel],
      ["Primary job", item.description],
      ["Voice languages", "Telugu, Hindi, English (more on roadmap)"],
      ["Outcomes", "Logged to dashboard + optional writeback"],
    ],
    ctaTitle: `Connect ${item.name}.`,
    ctaAccent: "Hear a live pilot call.",
    ctaBody: `We will map a single ${item.category.toLowerCase()} journey on ${item.name} and place a SvaraCall to your phone.`,
  };
}

export const integrationPages: SeoProgrammaticPage[] =
  integrations.map(buildIntegrationPage);

export function getIntegrationPage(slug: string) {
  return integrationPages.find((page) => page.slug === slug);
}

export function getIntegration(slug: string): Integration | undefined {
  return integrations.find((item) => item.id === slug);
}

/** Solution detail pages derived from catalog cards with unique SEO modules. */
export function buildSolutionPage(
  card: (typeof allSolutionCards)[number],
): SeoProgrammaticPage {
  const mappedUseCase =
    card.id === "surveys"
      ? "/use-cases/surveys-feedback"
      : card.id === "order-updates"
        ? "/use-cases/order-updates"
        : card.id === "crm-logging"
          ? "/features/crm-integration"
          : card.id === "escalation"
            ? "/features/agent-handoff"
            : card.id === "compliance"
              ? "/compliance"
              : card.id === "data-collection"
                ? "/use-cases/surveys-feedback"
                : `/use-cases/${card.id}`;

  return {
    slug: card.id,
    name: card.title,
    metaTitle: `${card.title} AI Voice Solution | SvaraCall`,
    metaDescription: `${card.body} Deploy SvaraCall AI voice agents for ${card.title.toLowerCase()} with CRM logging and India-ready compliance.`,
    eyebrow: `Solutions · ${card.filter}`,
    headline: card.title,
    subcopy: card.body,
    primaryCta: "Book a solution pilot",
    chips: [card.filter, "Voice AI", "Outcome logged", "Multilingual"],
    stats: [
      { value: "Minutes", label: "Typical time-to-first-pilot dial" },
      { value: "3 langs", label: "Telugu, Hindi, English on day one" },
      { value: "CRM", label: "Outcomes written back automatically" },
      { value: "24/7", label: "Coverage without night-shift headcount" },
    ],
    problemTitle: `When ${card.title.toLowerCase()} falls behind`,
    problem: `Manual teams under-cover ${card.title.toLowerCase()} because lists grow faster than dialing capacity — especially across languages and after hours. ${card.body}`,
    currentTitle: "Manual bottleneck",
    currentSteps: [
      "Work queues build in CRM or sheets.",
      "Agents dial what they can before shift end.",
      "Scripts vary; notes are inconsistent.",
      "Managers lack a clean conversion picture.",
    ],
    aiTitle: "SvaraCall solution flow",
    aiSteps: [
      "Define eligibility and quiet hours.",
      "Launch AI voice agents on your registered number.",
      "Capture structured dispositions and transcripts.",
      "Escalate or book humans when intent is high.",
    ],
    benefitsTitle: "Outcomes this solution targets",
    benefits: [
      {
        title: "Coverage",
        body: "Reach the full eligible list, not just the top of the spreadsheet.",
      },
      {
        title: "Consistency",
        body: "One approved script with controlled variation — not thirty agent improvisations.",
      },
      {
        title: "Language fit",
        body: "Speak Telugu, Hindi, or English based on customer preference.",
      },
      {
        title: "Visibility",
        body: "Every attempt lands on the dashboard with recording and outcome.",
      },
    ],
    roiTitle: "Pilot metrics to watch",
    roi: [
      { value: "Connect %", label: "Answered / dialed" },
      { value: "Success %", label: "Target disposition rate" },
      { value: "Cost/connect", label: "Vs human telecaller baseline" },
      { value: "Escalations", label: "Human handoffs that convert" },
    ],
    implTitle: "How we roll it out",
    implementation: [
      {
        title: "Scope the bottleneck",
        body: `Confirm volume, languages, and success definition for ${card.title.toLowerCase()}.`,
      },
      {
        title: "Script & guardrails",
        body: "Approve disclosures, opt-out language, and escalation rules.",
      },
      {
        title: "Connect data",
        body: "CRM, sheet, or webhook — plus suppression lists.",
      },
      {
        title: "Pilot & scale",
        body: "Start on a slice, review recordings, then expand concurrency.",
      },
    ],
    relatedTitle: "Go deeper",
    related: [
      { name: "Matching use case", href: mappedUseCase },
      { name: "All solutions", href: "/solutions" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Integrations", href: "/integrations" },
      { name: "Industries", href: "/industries" },
    ],
    faqsTitle: `${card.title} FAQs`,
    faqs: [
      {
        q: `What is included in the ${card.title} solution?`,
        a: `${card.body} Scripts, scheduling, logging, and escalation are configured in the pilot.`,
      },
      {
        q: "Can we keep humans for edge cases?",
        a: "Yes — live transfer and agent handoff are first-class. AI handles coverage; humans handle judgment.",
      },
      {
        q: "Is this TRAI/DLT aware?",
        a: "Outbound still uses your compliant calling setup. Consent and opt-out language are part of script design.",
      },
      {
        q: "Where do outcomes go?",
        a: "Dashboard by default, with optional CRM/helpdesk writeback through integrations.",
      },
      {
        q: "How is this different from the use-case page?",
        a: "Solutions are productized offers. The detailed workflow deep-dive lives on the linked use-case or feature page.",
      },
    ],
    ctaTitle: `Run ${card.title.toLowerCase()}.`,
    ctaAccent: "On AI voice agents.",
    ctaBody:
      "Book a pilot and we will place a live SvaraCall to your phone for this workflow.",
  };
}

export const solutionPages: SeoProgrammaticPage[] =
  allSolutionCards.map(buildSolutionPage);

export function getSolutionPage(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
