import type { SeoProgrammaticPage } from "@/lib/seoTypes";

export const useCasePages: SeoProgrammaticPage[] = [
  {
    slug: "lead-follow-up",
    name: "Lead Follow-Up",
    metaTitle: "Lead Follow-Up with AI Voice Agents | SvaraCall",
    metaDescription:
      "Call new leads within minutes in Telugu, Hindi, or English. SvaraCall AI qualifies intent, logs outcomes to your CRM, and routes hot prospects before they go cold.",
    eyebrow: "Use case · Revenue",
    headline: "Lead follow-up that hits before intent fades",
    subcopy:
      "Web form, WhatsApp enquiry, or missed inbound — SvaraCall AI dials back in minutes, speaks naturally in the customer's language, and hands warm leads to your team with context.",
    primaryCta: "Book a lead follow-up pilot",
    chips: ["Speed-to-lead", "Multilingual", "CRM sync", "TRAI/DLT ready"],
    stats: [
      { value: "<5 min", label: "Typical first callback after enquiry" },
      { value: "38%", label: "Pilot connect rate on fresh leads" },
      { value: "3×", label: "More qualified callbacks vs next-day manual dial" },
      { value: "24/7", label: "Coverage without night-shift telecallers" },
    ],
    problemTitle: "Why leads go cold overnight",
    problem:
      "Most Indian sales teams cannot call every fresh enquiry within the golden hour — especially when leads arrive after hours or in a different language. Spreadsheets pile up, CRM tasks slip, and by morning the prospect has already spoken to a competitor.",
    currentTitle: "How teams follow up today",
    currentSteps: [
      "Lead lands in CRM or WhatsApp — often after business hours.",
      "Telecaller sees the list next morning and starts manual dialing.",
      "English-only scripts fail on Telugu or Hindi speakers who hang up fast.",
      "No structured qualification — just 'interested / not interested' notes.",
      "Hot leads sit in queue while reps chase wrong numbers first.",
    ],
    aiTitle: "How SvaraCall AI follows up",
    aiSteps: [
      "Webhook or CRM trigger fires the moment a lead is created.",
      "Agent calls within minutes from your DLT-registered header.",
      "Two-way conversation confirms need, budget band, and timeline in their language.",
      "Scores intent and books a human callback or live-transfers on the spot.",
      "Outcome, recording, and transcript sync back to CRM automatically.",
    ],
    benefitsTitle: "What changes on a pilot",
    benefits: [
      {
        title: "Speed without headcount",
        body: "Parallel outbound on fresh lists — no hiring a night shift for after-hours enquiries.",
      },
      {
        title: "Language-matched outreach",
        body: "Telugu, Hindi, and English agents follow the caller's preference, not your IVR default.",
      },
      {
        title: "Structured qualification",
        body: "Budget, authority, timeline captured on every connected call — not free-text chaos.",
      },
      {
        title: "Audit-ready logs",
        body: "Recording disclosure, consent capture, and opt-out honored instantly per TRAI norms.",
      },
    ],
    roiTitle: "Pilot economics (illustrative)",
    roi: [
      { value: "₹18–₹35", label: "Typical cost per connected follow-up vs ₹80–₹120 manual" },
      { value: "+22%", label: "Qualified-meeting rate uplift in 30-day pilots" },
      { value: "4 hrs", label: "Daily telecaller hours redeployed to closing" },
    ],
    implTitle: "Go live in four steps",
    implementation: [
      { title: "Map triggers", body: "Connect CRM, form tool, or sheet upload for new-lead events." },
      { title: "Script & score", body: "Define qualification questions, hot-lead thresholds, and handoff rules." },
      { title: "Pilot 200 leads", body: "Run a controlled slice — compare connect and meeting rates to baseline." },
      { title: "Scale winners", body: "Expand to all inbound channels once scripts and routing are tuned." },
    ],
    relatedTitle: "Related workflows",
    related: [
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Real estate", href: "/industries/real-estate" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "TRAI compliance", href: "/compliance" },
    ],
    faqsTitle: "Lead follow-up FAQs",
    faqs: [
      {
        q: "How fast can SvaraCall call a new lead?",
        a: "Most pilots trigger within 2–5 minutes of CRM or webhook ingestion. You control windows — e.g., 9 AM–9 PM local.",
      },
      {
        q: "Can it hand off to my sales rep live?",
        a: "Yes. Hot leads can warm-transfer to an available rep with a whisper summary of what was already discussed.",
      },
      {
        q: "Does it work with HubSpot, Zoho, or Salesforce?",
        a: "CRM sync via native connectors or webhooks — outcomes and recordings attach to the lead record.",
      },
      {
        q: "What if the lead opts out?",
        a: "Opt-out is captured on-call and suppressed immediately across future campaigns per DLT rules.",
      },
      {
        q: "Which languages ship today?",
        a: "Telugu, Hindi, and English with natural code-switching when callers mix languages mid-sentence.",
      },
    ],
    scriptTitle: "Sample follow-up dialog (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main SvaraCall se Ananya bol rahi hoon — aapne kal hamari website par enquiry ki thi. Two minute baat ho sakti hai?
Customer: Haan, actually property dekh raha tha Hyderabad mein.
Agent: Achha. Aapka budget roughly kitna hai aur kab tak shift plan hai?
Customer: Around 80 lakh, six months mein.
Agent: Perfect — main aapko senior advisor se connect kar deti hoon jo exact locations suggest karega. Ek minute hold kijiye.`,
    ctaTitle: "Stop losing leads to",
    ctaAccent: "slow follow-up",
    ctaBody: "Run a 200-lead pilot and compare connect rates to your current process — in the languages your market actually speaks.",
  },

  {
    slug: "lead-qualification",
    name: "Lead Qualification",
    metaTitle: "Lead Qualification with AI Voice Agents | SvaraCall",
    metaDescription:
      "Score budget, timeline, and fit before a human picks up. SvaraCall AI runs structured qualification calls in Indian languages and routes only sales-ready leads.",
    eyebrow: "Use case · Revenue",
    headline: "Qualify leads on the phone before reps dial",
    subcopy:
      "Stop burning senior sales time on tyre-kickers. AI voice agents run your BANT-style checklist in Telugu, Hindi, or English — then route scored leads with full context.",
    primaryCta: "Start a qualification pilot",
    chips: ["BANT scoring", "Fit filters", "Disqualify politely", "CRM fields"],
    stats: [
      { value: "64%", label: "Of raw leads disqualified in typical B2B lists" },
      { value: "12 min", label: "Average human time saved per unqualified lead" },
      { value: "91%", label: "Field completion rate on connected qualification calls" },
      { value: "2.4×", label: "Rep productivity when only hot leads surface" },
    ],
    problemTitle: "Unqualified leads drain your pipeline",
    problem:
      "Sales reps in India often spend half their day on leads who lack budget, wrong geography, or no decision authority. Manual qualification is inconsistent — every telecaller asks different questions and CRM data stays incomplete.",
    currentTitle: "Manual qualification gaps",
    currentSteps: [
      "Rep opens CRM — half the fields are blank or copied from the form.",
      "Telecaller improvises questions; scoring varies by person and shift.",
      "Senior AE joins discovery calls that should never have been booked.",
      "Disqualified leads get ghosted instead of nurtured properly.",
      "No recording — disputes over what the lead actually said.",
    ],
    aiTitle: "Structured AI qualification",
    aiSteps: [
      "Load qualification rubric: budget band, timeline, authority, need, geography.",
      "Agent calls list with DLT-approved script and disclosure.",
      "Captures answers in structured CRM fields — no manual re-entry.",
      "Applies score threshold: hot → book/rep, warm → nurture, cold → close lost.",
      "Escalates edge cases to human when answers conflict or sentiment spikes.",
    ],
    benefitsTitle: "Pipeline quality gains",
    benefits: [
      {
        title: "Consistent scoring",
        body: "Same questions, same weights — every lead judged by one rubric.",
      },
      {
        title: "Rep time reclaimed",
        body: "AEs only talk to leads that pass your minimum score.",
      },
      {
        title: "Polite disqualification",
        body: "Agents thank and exit gracefully — brand stays intact.",
      },
      {
        title: "Rich CRM records",
        body: "Transcripts backfill fields your web forms never capture.",
      },
    ],
    roiTitle: "Qualification ROI (pilot benchmarks)",
    roi: [
      { value: "−41%", label: "Discovery calls that end in 'not a fit'" },
      { value: "+31%", label: "Close rate on rep-handled qualified leads" },
      { value: "₹2.1L", label: "Monthly AE hours recovered at 800-lead/month scale" },
      { value: "48 hr", label: "Typical pilot to first scored pipeline report" },
    ],
    implTitle: "Qualification rollout",
    implementation: [
      { title: "Define rubric", body: "Document must-have vs nice-to-have criteria with score weights." },
      { title: "Map CRM fields", body: "Align agent questions to Salesforce/Zoho custom fields." },
      { title: "Set thresholds", body: "Configure hot/warm/cold routing and nurture triggers." },
      { title: "Review & tune", body: "Weekly script edits from drop-off points in transcripts." },
    ],
    relatedTitle: "Works well with",
    related: [
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Brokerage", href: "/industries/brokerage" },
      { name: "Real estate site visits", href: "/use-cases/real-estate-site-visit" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Education admissions", href: "/use-cases/education-admissions" },
    ],
    faqsTitle: "Lead qualification FAQs",
    faqs: [
      {
        q: "Can I use my existing BANT or MEDDIC framework?",
        a: "Yes. Questions and scoring weights are fully configurable per campaign.",
      },
      {
        q: "What happens to leads that fail qualification?",
        a: "They are tagged, optionally added to nurture, and never routed to senior reps.",
      },
      {
        q: "Can the agent book a meeting if the lead qualifies?",
        a: "Calendar integration books slots directly or hands off to a rep with pre-filled notes.",
      },
      {
        q: "How do you handle gatekeepers or wrong numbers?",
        a: "Wrong-party and gatekeeper flows update CRM status and suppress bad numbers.",
      },
      {
        q: "Is outbound qualification TRAI-compliant?",
        a: "Only consented contacts are dialed on DLT-registered templates with opt-out on every call.",
      },
      {
        q: "Can qualification run in Telugu?",
        a: "Telugu, Hindi, and English are live — agents code-switch when callers mix languages.",
      },
    ],
    scriptTitle: "Qualification excerpt (Telugu–English)",
    scriptExcerpt: `Agent: Namaskaram, nenu Meera — meeru maa coaching demo ki register ayyaru. Meeku NEET preparation aa leka EAMCET aa?
Customer: NEET, 2027 exam target.
Agent: Bagundi. Monthly budget entha range lo consider chestunnaru?
Customer: Ten to fifteen thousand max.
Agent: Perfect fit — nenu mee counsellor ki slot book chestanu. Repu 4 PM convenient aa?`,
    tableTitle: "Sample qualification scorecard",
    tableHeaders: ["Criterion", "Weight", "Pass threshold"],
    tableRows: [
      ["Budget match", "30%", "Within product tier band"],
      ["Timeline", "25%", "Decision within 90 days"],
      ["Authority", "20%", "Decision-maker or influencer"],
      ["Geography", "15%", "Serviceable pin code"],
      ["Need confirmed", "10%", "Stated pain or use case"],
    ],
    ctaTitle: "Give reps only",
    ctaAccent: "qualified conversations",
    ctaBody: "Pilot 500 leads with your rubric — see how many hours your AEs get back in the first month.",
  },

  {
    slug: "appointment-booking",
    name: "Appointment Booking",
    metaTitle: "Appointment Booking with AI Voice Agents | SvaraCall",
    metaDescription:
      "Book, confirm, and reschedule appointments by voice in Telugu, Hindi, or English. SvaraCall AI syncs slots to your calendar and cuts empty-chair revenue loss.",
    eyebrow: "Use case · Scheduling",
    headline: "Fill your calendar without a booking desk",
    subcopy:
      "Outbound and inbound AI agents check availability, offer slots, and confirm appointments — then push events to Google Calendar, Practo, or your clinic management system.",
    primaryCta: "Book a scheduling demo",
    chips: ["Calendar sync", "Reschedule flows", "Waitlist fill", "Reminder chain"],
    stats: [
      { value: "73%", label: "Booking completion on connected scheduling calls" },
      { value: "−28%", label: "Empty slots in 30-day clinic pilots" },
      { value: "<90 sec", label: "Median time to confirmed slot" },
      { value: "3 langs", label: "Telugu, Hindi, English live booking" },
    ],
    problemTitle: "Phone tag kills utilization",
    problem:
      "Clinics, salons, and consultants lose revenue when patients call during OPD hours, get busy tones, or abandon WhatsApp threads. Manual coordinators cannot offer instant slots across languages after 7 PM.",
    currentTitle: "Today's booking friction",
    currentSteps: [
      "Patient calls front desk — line busy during peak OPD.",
      "Receptionist checks paper diary or toggles between three apps.",
      "Language mismatch slows the conversation or causes hang-ups.",
      "Slot offered but never confirmed — patient forgets.",
      "Cancellation doesn't backfill — chair sits empty.",
    ],
    aiTitle: "AI-powered booking flow",
    aiSteps: [
      "Patient triggers booking via missed call, form, or outbound campaign.",
      "Agent reads live calendar availability in real time.",
      "Offers two slot options in patient's preferred language.",
      "Confirms name, reason, and sends SMS/WhatsApp confirmation.",
      "Logs appointment and chains to reminder workflow automatically.",
    ],
    benefitsTitle: "Scheduling outcomes",
    benefits: [
      {
        title: "After-hours capture",
        body: "Book at 10 PM when your desk is closed — slots fill overnight.",
      },
      {
        title: "Fewer double bookings",
        body: "Live calendar sync prevents two patients on the same chair.",
      },
      {
        title: "Instant reschedules",
        body: "Cancellations trigger alternate slot offers on the same call.",
      },
      {
        title: "Multilingual front desk",
        body: "Telugu and Hindi speakers get the same experience as English callers.",
      },
    ],
    roiTitle: "Booking impact (illustrative)",
    roi: [
      { value: "+19%", label: "Utilization on practitioner calendars" },
      { value: "₹1.4L", label: "Monthly recovered revenue at 40-slot/day clinic" },
      { value: "−62%", label: "Front-desk booking call volume" },
    ],
    implTitle: "Booking deployment",
    implementation: [
      { title: "Connect calendar", body: "Integrate Google, Outlook, or clinic HMS availability API." },
      { title: "Define slot rules", body: "Duration, buffer, provider mapping, and blackout dates." },
      { title: "Script slot offers", body: "Two-option choice architecture reduces decision fatigue." },
      { title: "Chain reminders", body: "Auto-enroll confirmed bookings into day-before reminder flow." },
    ],
    relatedTitle: "Scheduling ecosystem",
    related: [
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Automotive service bays", href: "/industries/automotive" },
    ],
    faqsTitle: "Appointment booking FAQs",
    faqs: [
      {
        q: "Which calendar systems integrate?",
        a: "Google Calendar, Microsoft 365, and common clinic HMS platforms via API or middleware.",
      },
      {
        q: "Can patients reschedule on the same call?",
        a: "Yes — cancel-and-rebook flows release the old slot and offer the next available times.",
      },
      {
        q: "Does it handle multiple doctors or locations?",
        a: "Provider and branch routing is configured per campaign with separate availability feeds.",
      },
      {
        q: "What about emergency or urgent cases?",
        a: "Triage keywords trigger immediate live transfer to your on-call coordinator.",
      },
      {
        q: "Are booking calls recorded?",
        a: "Yes, with disclosure at call start — recordings attach to the patient or lead record.",
      },
    ],
    scriptTitle: "Booking dialog (Hindi)",
    scriptExcerpt: `Agent: Namaste, main City Dental se bol rahi hoon. Aap cleaning ke liye slot chahte hain — kal 11 baje ya parso 4 baje available hai.
Customer: Kal 11 theek hai.
Agent: Confirm — Ankit Sharma, kal 11 AM, Dr. Mehta. SMS bhej diya. Kuch aur?
Customer: Nahi, dhanyavaad.
Agent: Aapka din shubh ho — kal milte hain.`,
    ctaTitle: "Stop losing bookings to",
    ctaAccent: "busy lines",
    ctaBody: "Connect your calendar and run a two-week pilot — measure empty slots before and after.",
  },

  {
    slug: "appointment-reminders",
    name: "Appointment Reminders",
    metaTitle: "Appointment Reminders with AI Voice Agents | SvaraCall",
    metaDescription:
      "Confirm appointments a day ahead in Telugu, Hindi, or English. SvaraCall AI cuts no-shows with natural reminder calls that reschedule on the spot.",
    eyebrow: "Use case · Experience",
    headline: "Day-before reminders that actually get answered",
    subcopy:
      "SMS gets ignored. SvaraCall AI places conversational reminder calls — confirms attendance, reschedules no-conflicts, and updates your calendar before the slot goes waste.",
    primaryCta: "Reduce no-shows with a pilot",
    chips: ["T-24h calls", "Confirm / reschedule", "Waitlist backfill", "DLT templates"],
    stats: [
      { value: "−34%", label: "No-show rate in 60-day healthcare pilots" },
      { value: "52%", label: "Reminder connect rate vs 8% SMS click-through" },
      { value: "81%", label: "Confirmed-on-call without human intervention" },
      { value: "₹0", label: "Extra headcount for evening reminder shifts" },
    ],
    problemTitle: "Silent no-shows drain capacity",
    problem:
      "Indian clinics and service businesses lose 15–30% of booked capacity to no-shows. Text reminders are easy to ignore; staff rarely have time to call every patient the evening before.",
    currentTitle: "Reminder methods that fail",
    currentSteps: [
      "Automated SMS sent — no reply, no confirmation signal.",
      "Staff intended to call but OPD ran late; list half-finished.",
      "Patient meant to come but forgot — no frictionless reschedule path.",
      "Empty slot discovered only when patient doesn't show.",
      "Lost revenue and staff idle time with no recovery attempt.",
    ],
    aiTitle: "Voice reminder workflow",
    aiSteps: [
      "T-24h trigger pulls tomorrow's appointment list from calendar or HMS.",
      "Agent calls with DLT-approved reminder template and recording disclosure.",
      "Confirms attendance or offers two alternate slots immediately.",
      "Updates calendar and sends SMS confirmation of any change.",
      "Flags high-risk no-shows for priority recovery call if they won't commit.",
    ],
    benefitsTitle: "Reminder advantages",
    benefits: [
      {
        title: "Higher confirm rates",
        body: "Two-way voice beats one-way SMS — patients respond when spoken to.",
      },
      {
        title: "Same-call reschedule",
        body: "Capture cancellations early and offer the slot to waitlist.",
      },
      {
        title: "Language comfort",
        body: "Telugu or Hindi reminders reduce hang-ups vs English-only IVR.",
      },
      {
        title: "Compliance built in",
        body: "TRAI/DLT templates, consent checks, and instant opt-out handling.",
      },
    ],
    roiTitle: "No-show reduction economics",
    roi: [
      { value: "₹95K", label: "Monthly recovered at 20-slot/day clinic, 25% no-show baseline" },
      { value: "−34%", label: "No-shows after voice reminders vs SMS-only" },
      { value: "6:1", label: "Typical pilot ROI within first quarter" },
    ],
    implTitle: "Reminder rollout",
    implementation: [
      { title: "Sync schedule", body: "Pull tomorrow's bookings nightly from calendar or HMS." },
      { title: "Set call window", body: "Evening calls 5–8 PM local — configurable per vertical." },
      { title: "Reschedule rules", body: "Define how far out alternate slots can be offered." },
      { title: "Measure delta", body: "Track no-show rate weekly against pre-pilot baseline." },
    ],
    relatedTitle: "Connected workflows",
    related: [
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Education", href: "/industries/education" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Appointment reminder FAQs",
    faqs: [
      {
        q: "When should reminder calls go out?",
        a: "Most pilots use T-24 hours evening window; T-2h SMS backup optional for high-value slots.",
      },
      {
        q: "Can reminders run in Telugu?",
        a: "Yes — Telugu, Hindi, and English with per-patient language preference from CRM.",
      },
      {
        q: "What if the patient doesn't answer?",
        a: "Retry once in two hours, then flag for staff or chain to no-show recovery next day.",
      },
      {
        q: "Does rescheduling update Practo or Google Calendar?",
        a: "Bi-directional sync via integration — slot changes reflect in your source system.",
      },
      {
        q: "Are these calls TRAI-compliant?",
        a: "Transactional reminder templates on registered headers with prior consent only.",
      },
    ],
    scriptTitle: "Reminder call (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, nenu Sunrise Clinic nundi — mee repu 10:30 appointment gurinchi confirm cheyadaniki call chesanu.
Customer: Avunu, vastanu.
Agent: Chala baagundi. Meeru raakapothe cheppandi — vere slot book chesukuntam.
Customer: Repu confirm, thanks.
Agent: SMS lo details pampanu. Repu kaluddam.`,
    ctaTitle: "Cut no-shows with",
    ctaAccent: "voice confirmation",
    ctaBody: "Run reminders on next week's schedule — compare show rates to your SMS baseline.",
  },

  {
    slug: "no-show-recovery",
    name: "No-Show Recovery",
    metaTitle: "No-Show Recovery with AI Voice Agents | SvaraCall",
    metaDescription:
      "Recover missed appointments with same-day AI callback in Indian languages. SvaraCall AI reschedules no-shows and backfills your calendar before revenue is lost.",
    eyebrow: "Use case · Recovery",
    headline: "Turn missed appointments into rebooked slots",
    subcopy:
      "Patient didn't show? SvaraCall AI calls within hours — no guilt trip, just a helpful reschedule in Telugu, Hindi, or English. Empty chairs get filled the same week.",
    primaryCta: "Pilot no-show recovery",
    chips: ["Same-day callback", "Empathetic scripts", "Waitlist fill", "Outcome logging"],
    stats: [
      { value: "41%", label: "No-shows rebooked within 72 hours in pilots" },
      { value: "<4 hr", label: "Median callback after missed appointment" },
      { value: "₹1.8L", label: "Quarterly recovered revenue at mid-size clinic" },
      { value: "88%", label: "Patients rate recovery calls as helpful, not pushy" },
    ],
    problemTitle: "No-shows rarely get a second chance",
    problem:
      "When a patient or customer misses an appointment, most Indian practices simply note 'DNA' in the file and move on. Staff are too busy with walk-ins to chase rebooking — so lifetime value walks out the door.",
    currentTitle: "What happens after a no-show",
    currentSteps: [
      "Front desk marks no-show in register — no outbound follow-up.",
      "Coordinator meant to call but prioritizes tomorrow's reminders instead.",
      "Patient feels awkward calling back — goes to competitor.",
      "Slot revenue written off with no recovery attempt.",
      "No data on why they missed — pattern never fixed.",
    ],
    aiTitle: "Recovery call sequence",
    aiSteps: [
      "No-show event triggers from calendar or check-in system within 2 hours.",
      "Agent calls with empathetic, non-judgmental recovery script.",
      "Offers nearest available slots — same week preferred.",
      "Captures reason code: forgot, transport, work conflict, other provider.",
      "Rebooks or adds to nurture; logs outcome for analytics.",
    ],
    benefitsTitle: "Recovery benefits",
    benefits: [
      {
        title: "Revenue recapture",
        body: "41% of no-shows rebook when called same day — pilot median.",
      },
      {
        title: "Reason intelligence",
        body: "Structured reason codes reveal fixable patterns — e.g., evening slots work better.",
      },
      {
        title: "Brand warmth",
        body: "Helpful tone keeps patients loyal vs punitive SMS.",
      },
      {
        title: "Zero staff burden",
        body: "Recovery runs parallel — coordinators focus on in-clinic patients.",
      },
    ],
    roiTitle: "Recovery ROI",
    roi: [
      { value: "+₹62K", label: "Monthly at 8 no-shows/week, 40% rebook rate, ₹2K avg ticket" },
      { value: "3.2×", label: "Return on recovery campaign spend" },
      { value: "−18%", label: "Repeat no-show rate after reason-based slot offers" },
    ],
    implTitle: "Recovery setup",
    implementation: [
      { title: "Define trigger", body: "Calendar no-show or manual flag kicks recovery within 4 hours." },
      { title: "Script empathy", body: "Non-blaming language tested for your vertical and region." },
      { title: "Slot inventory", body: "Offer only slots you want filled — priority waitlist optional." },
      { title: "Track rebook rate", body: "Weekly dashboard: recovered revenue vs recovery call cost." },
    ],
    relatedTitle: "Recovery stack",
    related: [
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Real estate site visits", href: "/use-cases/real-estate-site-visit" },
    ],
    faqsTitle: "No-show recovery FAQs",
    faqs: [
      {
        q: "How soon after a no-show should we call?",
        a: "Same-day within 2–4 hours performs best — patient still remembers the appointment.",
      },
      {
        q: "Will patients find recovery calls annoying?",
        a: "Empathetic scripts framed as 'we saved a slot for you' outperform guilt-based messaging in pilots.",
      },
      {
        q: "Can we limit recovery to high-value appointments?",
        a: "Yes — filter by service type, ticket size, or patient tier.",
      },
      {
        q: "What if they no-show again?",
        a: "Flag repeat offenders; optional deposit policy trigger for third miss.",
      },
      {
        q: "Does it work for salon and automotive service bays?",
        a: "Yes — any appointment-based business with calendar integration.",
      },
    ],
    scriptTitle: "Recovery dialog (English–Hindi)",
    scriptExcerpt: `Agent: Hi Rahul, this is SvaraCall from FitLife Gym — we noticed you couldn't make today's session. Everything okay?
Customer: Haan, office meeting aa gayi thi.
Agent: No problem — Thursday 7 PM ya Saturday 9 AM open hai. Kaunsa better?
Customer: Thursday works.
Agent: Done — Thursday 7 PM confirmed. SMS bhej diya.`,
    ctaTitle: "Don't write off",
    ctaAccent: "missed appointments",
    ctaBody: "Enable recovery on last month's no-shows and measure how many slots you win back.",
  },

  {
    slug: "payment-reminders",
    name: "Payment Reminders",
    metaTitle: "Payment Reminders with AI Voice Agents | SvaraCall",
    metaDescription:
      "Nudge customers about due invoices and renewals before they lapse. Polite AI payment reminders in Telugu, Hindi, and English with payment-link capture on call.",
    eyebrow: "Use case · Collections lite",
    headline: "Payment reminders that preserve relationships",
    subcopy:
      "Not aggressive collections — consistent, polite nudges about due invoices, subscription renewals, and overdue balances. SvaraCall AI sends payment links and logs promise-to-pay on every call.",
    primaryCta: "Pilot payment reminders",
    chips: ["Invoice due", "Renewal nudge", "Payment link", "PTP logging"],
    stats: [
      { value: "+27%", label: "On-time payment rate vs email-only nudges" },
      { value: "44%", label: "Connect rate on due-date reminder calls" },
      { value: "68%", label: "Promise-to-pay captured when link sent on call" },
      { value: "−52%", label: "Days sales outstanding in 90-day SaaS pilots" },
    ],
    problemTitle: "Invoices slip through quiet inboxes",
    problem:
      "Indian SMBs and subscription businesses lose cash flow when reminders stay buried in email and WhatsApp. Manual calling is inconsistent — polite with some customers, skipped for others — and finance teams lack visibility until accounts go seriously overdue.",
    currentTitle: "Manual reminder pain",
    currentSteps: [
      "Finance exports overdue list weekly — calls happen in bursts.",
      "Staff avoid awkward conversations; large balances get priority only.",
      "No payment link sent on call — customer must find invoice email.",
      "Promises to pay never logged — same customer called twice or not at all.",
      "English-only outreach fails on vernacular-speaking account holders.",
    ],
    aiTitle: "Automated payment nudges",
    aiSteps: [
      "Trigger on due date, T+3, and T+7 from billing or ERP system.",
      "Agent states amount, due date, and purpose in customer's language.",
      "Offers SMS payment link or UPI collect on confirmed intent.",
      "Captures promise-to-pay date and partial payment plans.",
      "Escalates disputed balances to human finance with transcript.",
    ],
    benefitsTitle: "Cash flow improvements",
    benefits: [
      {
        title: "Consistent tone",
        body: "Every customer gets the same polite reminder — no mood-dependent calls.",
      },
      {
        title: "Instant payment path",
        body: "Link sent while on call — friction drops vs 'check your email'.",
      },
      {
        title: "PTP discipline",
        body: "Structured promise dates feed collections workflow and suppress duplicate dials.",
      },
      {
        title: "Multilingual reach",
        body: "Hindi and Telugu reminders for tier-2 and tier-3 account bases.",
      },
    ],
    roiTitle: "Reminder economics",
    roi: [
      { value: "₹4.2L", label: "Accelerated collections in 500-account pilot" },
      { value: "−19 days", label: "Average DSO reduction in subscription businesses" },
      { value: "₹12", label: "Cost per connected reminder vs ₹45 manual telecaller" },
    ],
    implTitle: "Payment reminder setup",
    implementation: [
      { title: "Connect billing", body: "Sync due invoices from Zoho Books, Tally, or Stripe." },
      { title: "Tier cadence", body: "Light touch at due date; firmer but compliant at T+7." },
      { title: "Payment rails", body: "Configure UPI, Razorpay, or bank link delivery via SMS." },
      { title: "Escalation path", body: "Disputes and hardship route to human with full context." },
    ],
    relatedTitle: "Related collections flows",
    related: [
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "Fintech", href: "/industries/fintech" },
      { name: "Insurance renewals", href: "/use-cases/insurance-renewals" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Payment reminder FAQs",
    faqs: [
      {
        q: "Is this the same as debt collection?",
        a: "Payment reminders are pre-delinquency nudges. Hard collections use separate scripts and compliance guardrails.",
      },
      {
        q: "Can customers pay on the call?",
        a: "Agent sends payment link via SMS; UPI collect optional with customer consent on recorded line.",
      },
      {
        q: "What about GST invoice disputes?",
        a: "Dispute keywords trigger transfer to finance — agent does not argue tax details.",
      },
      {
        q: "Are reminder calls DLT-compliant?",
        a: "Transactional templates on registered headers for consented business relationships only.",
      },
      {
        q: "Which languages are supported?",
        a: "Telugu, Hindi, and English with amount read clearly in Indian numbering format.",
      },
    ],
    scriptTitle: "Payment reminder (Hindi)",
    scriptExcerpt: `Agent: Namaste, main CloudDesk billing se bol rahi hoon. Aapka ₹12,400 ka invoice 3 din se due hai — aaj pay kar sakte hain?
Customer: Haan, link bhej do.
Agent: Link SMS par bhej diya — UPI ya card dono chalega. Confirm kar lena payment ke baad.
Customer: Theek hai, shaam tak kar dunga.
Agent: Noted — 6 PM tak ka promise log kar liya. Dhanyavaad.`,
    ctaTitle: "Get paid faster with",
    ctaAccent: "polite voice nudges",
    ctaBody: "Connect billing and run due-date reminders for one cohort — measure on-time payment delta in 30 days.",
  },

  {
    slug: "debt-collection",
    name: "Debt Collection",
    metaTitle: "Debt Collection with AI Voice Agents | SvaraCall",
    metaDescription:
      "Compliant AI collection calls for NBFCs and lenders in India. SvaraCall AI follows RBI-aware scripts in Telugu, Hindi, and English with PTP capture and human escalation.",
    eyebrow: "Use case · Collections",
    headline: "Collections calls that stay compliant and human",
    subcopy:
      "Delinquent accounts need persistent, respectful outreach — not robocall rage. SvaraCall AI runs RBI-aware collection scripts, captures promise-to-pay, and escalates hardship to licensed agents.",
    primaryCta: "Discuss collections pilot",
    chips: ["RBI-aware scripts", "PTP / broken PTP", "Hardship routing", "Audit trail"],
    stats: [
      { value: "36%", label: "Promise-to-pay rate on connected collection calls" },
      { value: "−24%", label: "Roll-forward to NPA in 180+ DPD pilots" },
      { value: "100%", label: "Calls recorded with disclosure for audit" },
      { value: "0", label: "Tolerance for abusive or threatening language" },
    ],
    problemTitle: "Collections scale breaks compliance",
    problem:
      "NBFCs and lenders face a dual challenge: recover overdue EMIs at scale while staying inside RBI fair-practices and TRAI telemarketing rules. Manual agencies vary wildly in tone; high attrition means script drift and reputational risk.",
    currentTitle: "Legacy collection gaps",
    currentSteps: [
      "Agency dialers blast lists with minimal personalization.",
      "Agents threaten or misstate legal consequences — brand risk.",
      "Broken promises not tracked — same account over-called or under-called.",
      "No language match in tier-2 portfolios — connect rates collapse.",
      "Audit requests struggle to produce consistent call evidence.",
    ],
    aiTitle: "Compliant AI collection workflow",
    aiSteps: [
      "Segment by DPD bucket with script intensity matched to stage.",
      "Agent identifies self, lender, outstanding amount, and recording disclosure.",
      "Negotiates payment plan or full settlement within approved parameters.",
      "Captures PTP with date and amount; schedules auto follow-up.",
      "Hardship, dispute, or legal keywords → licensed human collector.",
    ],
    benefitsTitle: "Controlled collections",
    benefits: [
      {
        title: "Script lock",
        body: "No agent improvisation — approved language only, every call.",
      },
      {
        title: "PTP discipline",
        body: "Automated follow-up on broken promises without manual list prep.",
      },
      {
        title: "Portfolio language match",
        body: "Telugu and Hindi for AP, Telangana, UP, Bihar-heavy books.",
      },
      {
        title: "Audit-ready",
        body: "Full recording, transcript, and outcome tied to loan account ID.",
      },
    ],
    roiTitle: "Collection performance (illustrative)",
    roi: [
      { value: "+₹1.1Cr", label: "Recovered in 10K-account pilot over 6 months" },
      { value: "−31%", label: "Cost per rupee collected vs manual agency" },
      { value: "−42%", label: "Customer complaint rate vs prior agency" },
      { value: "99.2%", label: "Script adherence in QA sampling" },
    ],
    implTitle: "Collections deployment",
    implementation: [
      { title: "Legal review", body: "Scripts approved by your compliance team per DPD stage." },
      { title: "Data ingest", body: "Secure loan tape sync — account ID, balance, DPD, language pref." },
      { title: "PTP automation", body: "Broken PTP triggers next call; kept PTP suppresses dial." },
      { title: "Human overlay", body: "Licensed collectors take hardship and settlement above threshold." },
    ],
    relatedTitle: "Collections ecosystem",
    related: [
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Fintech", href: "/industries/fintech" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Debt collection FAQs",
    faqs: [
      {
        q: "Does SvaraCall replace licensed collection agencies?",
        a: "It automates early and mid-stage outreach; licensed humans handle legal and hardship per your policy.",
      },
      {
        q: "Are scripts RBI fair-practices aligned?",
        a: "Base scripts follow common RBI guidance; your compliance team finalizes wording before go-live.",
      },
      {
        q: "Can AI negotiate settlement discounts?",
        a: "Only within pre-approved discount matrices — no ad-hoc concessions on call.",
      },
      {
        q: "How is borrower data protected?",
        a: "DPDP-aligned hosting in India; PII masked in dashboards; role-based access to recordings.",
      },
      {
        q: "What languages for regional portfolios?",
        a: "Telugu, Hindi, English live; Tamil and Kannada on roadmap for select pilots.",
      },
      {
        q: "TRAI rules for promotional vs service calls?",
        a: "Collection outreach uses consented transactional templates on DLT-registered headers.",
      },
    ],
    scriptTitle: "Collection call (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, nenu XYZ Finance nundi — mee loan EMI ₹8,200 45 rojulu overdue undi. Record avutundi. Eroju pay cheyagalara?
Customer: Salary delay ayyindi, next week istanu.
Agent: Next Friday ki ₹8,200 promise log chesanu — link SMS lo pampanu. Kastam unte human counsellor ki connect chestanu.`,
    tableTitle: "DPD stage script intensity",
    tableHeaders: ["DPD bucket", "Call frequency", "Escalation"],
    tableRows: [
      ["1–30 days", "Every 3 days", "PTP follow-up only"],
      ["31–60 days", "Every 2 days", "Payment plan offer"],
      ["61–90 days", "Daily", "Human collector at dispute"],
      ["90+ days", "Per legal policy", "Licensed agency handoff"],
    ],
    ctaTitle: "Scale collections with",
    ctaAccent: "compliant voice AI",
    ctaBody: "Review scripts with your compliance team and pilot one DPD bucket — measure PTP and recovery vs baseline.",
  },

  {
    slug: "emi-reminders",
    name: "EMI Reminders",
    metaTitle: "EMI Reminders with AI Voice Agents | SvaraCall",
    metaDescription:
      "Reduce EMI bounce rates with proactive voice reminders in Telugu, Hindi, and English. SvaraCall AI nudges before due date and captures promise-to-pay for NBFCs and lenders.",
    eyebrow: "Use case · Lending ops",
    headline: "EMI reminders before the bounce hits",
    subcopy:
      "NACH failures are expensive. SvaraCall AI calls borrowers 2–3 days before EMI due date — confirms balance, sends payment link, and logs intent so collections teams focus on real risk.",
    primaryCta: "Reduce EMI bounces",
    chips: ["Pre-due nudge", "NACH backup", "UPI link", "Bounce prevention"],
    stats: [
      { value: "−22%", label: "NACH bounce rate in 60-day NBFC pilots" },
      { value: "51%", label: "Borrowers who pay after pre-due voice nudge" },
      { value: "T-3", label: "Optimal reminder window before due date" },
      { value: "₹9", label: "Average cost per prevented bounce vs ₹350 penalty + ops" },
    ],
    problemTitle: "Bounces are predictable — and preventable",
    problem:
      "Most EMI failures in India are liquidity timing issues, not wilful default. SMS reminders get ignored; borrowers forget until the debit fails. Each bounce triggers penalty, manual follow-up, and portfolio quality drag.",
    currentTitle: "Why bounces keep happening",
    currentSteps: [
      "SMS sent T-1 — no balance check conversation.",
      "Borrower assumes salary will credit — doesn't maintain buffer.",
      "NACH fails; collections team dials 5 days later — relationship already strained.",
      "No vernacular outreach for rural and semi-urban borrowers.",
      "Repeat bouncers not flagged for early intervention.",
    ],
    aiTitle: "Pre-due EMI workflow",
    aiSteps: [
      "Pull EMI schedule T-3 days before debit date.",
      "Agent confirms amount, due date, and account balance awareness.",
      "Offers UPI or net-banking link for manual pay if NACH balance low.",
      "Captures promise-to-pay or hardship signal for restructuring route.",
      "Success suppresses collection dial; bounce triggers recovery sequence.",
    ],
    benefitsTitle: "Portfolio health gains",
    benefits: [
      {
        title: "Lower bounce rate",
        body: "Proactive voice beats passive SMS for salaried borrower segments.",
      },
      {
        title: "Cheaper than post-bounce",
        body: "Prevent ₹350+ penalty cycles with a ₹9 reminder call.",
      },
      {
        title: "Early hardship flag",
        body: "Capture 'salary delayed' before NPA trajectory starts.",
      },
      {
        title: "Regional language",
        body: "Telugu and Hindi for microfinance and gold-loan portfolios.",
      },
    ],
    roiTitle: "EMI reminder ROI",
    roi: [
      { value: "₹18L", label: "Penalty + ops savings on 5K-loan monthly book" },
      { value: "−22%", label: "Bounce rate vs SMS-only cohort" },
      { value: "+0.4%", label: "Portfolio yield improvement from fewer delays" },
    ],
    implTitle: "EMI reminder rollout",
    implementation: [
      { title: "Tape sync", body: "Nightly EMI schedule with borrower language preference." },
      { title: "T-3 cadence", body: "Call window aligned to salary credit patterns in your segment." },
      { title: "Payment rails", body: "UPI deep link + optional partial pay for tight months." },
      { title: "Bounce bridge", body: "Failed NACH auto-enrolls in soft collection script." },
    ],
    relatedTitle: "Lending workflows",
    related: [
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Fintech", href: "/industries/fintech" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "EMI reminder FAQs",
    faqs: [
      {
        q: "When should EMI reminder calls go out?",
        a: "T-3 days before debit performs best for salaried segments; T-1 SMS as backup optional.",
      },
      {
        q: "Can borrowers pay partial EMI on call?",
        a: "If your policy allows, agent sends partial-pay link and logs arrangement.",
      },
      {
        q: "Does this work for gold loans and LAP?",
        a: "Yes — any fixed EMI product with schedule data and consented contact.",
      },
      {
        q: "TRAI compliance for loan reminders?",
        a: "Transactional DLT templates for existing borrower relationships with opt-out honored.",
      },
      {
        q: "Integration with LMS platforms?",
        a: "Webhook and SFTP ingest from common Indian LMS and core banking middleware.",
      },
    ],
    scriptTitle: "EMI reminder (Hinglish)",
    scriptExcerpt: `Agent: Namaste, XYZ Finance se — aapka ₹6,500 ka EMI parso debit hoga. Account mein balance hai?
Customer: Abhi nahi, salary kal aayegi.
Agent: Kal credit hone ke baad maintain kijiye — warna bounce charge lag sakta hai. Link bhej du manual pay ke liye?
Customer: Haan bhej do.
Agent: Link SMS par — kal confirm kar lena. Dhanyavaad.`,
    ctaTitle: "Prevent bounces with",
    ctaAccent: "pre-due voice nudges",
    ctaBody: "Pilot T-3 reminders on one EMI cohort — compare bounce rate to your control group.",
  },

  {
    slug: "customer-support",
    name: "Customer Support",
    metaTitle: "Customer Support with AI Voice Agents | SvaraCall",
    metaDescription:
      "Deflect tier-1 support calls with AI voice agents in Telugu, Hindi, and English. SvaraCall AI answers FAQs, checks order status, and escalates complex issues to humans.",
    eyebrow: "Use case · Support",
    headline: "Tier-1 support without the hold queue",
    subcopy:
      "Order status, refund policy, account basics — handled on first call in the customer's language. SvaraCall AI pulls from your knowledge base and live-transfers when the issue needs a human.",
    primaryCta: "Pilot support deflection",
    chips: ["FAQ containment", "Order lookup", "Sentiment routing", "24/7 coverage"],
    stats: [
      { value: "58%", label: "Tier-1 containment in ecommerce pilots" },
      { value: "−43%", label: "Average handle time for escalated calls" },
      { value: "<45 sec", label: "Median time to first meaningful response" },
      { value: "24/7", label: "After-hours coverage without BPO night shift" },
    ],
    problemTitle: "Support queues crush CSAT",
    problem:
      "Indian D2C and SaaS brands face support spikes during sales and outages. Tier-1 queries — WISMO, return policy, password reset — clog lines while complex cases wait. English-only IVR frustrates vernacular customers who abandon and churn.",
    currentTitle: "Support bottlenecks today",
    currentSteps: [
      "Customer waits 8+ minutes — half give up before agent answers.",
      "Rep reads from macro doc — inconsistent answers across shifts.",
      "After 9 PM, only email — no voice for urgent order issues.",
      "Telugu/Hindi callers routed to English queue — bad experience.",
      "No transcript — repeat callers re-explain the same problem.",
    ],
    aiTitle: "AI support workflow",
    aiSteps: [
      "Inbound or callback campaign connects customer to knowledge-grounded agent.",
      "Agent authenticates with order ID or registered mobile.",
      "Resolves tier-1: tracking, return window, refund status, basic troubleshooting.",
      "Sentiment or complexity threshold triggers warm transfer with summary.",
      "Ticket auto-created in Zendesk/Freshdesk with recording attached.",
    ],
    benefitsTitle: "Support transformation",
    benefits: [
      {
        title: "Queue relief",
        body: "58% of tier-1 never reaches human — reps handle hard cases only.",
      },
      {
        title: "Consistent answers",
        body: "Knowledge-base grounding — same policy, every call.",
      },
      {
        title: "Multilingual CSAT",
        body: "Telugu and Hindi support without hiring trilingual BPO benches.",
      },
      {
        title: "Rich handoffs",
        body: "Human gets whisper summary — customer doesn't repeat themselves.",
      },
    ],
    roiTitle: "Support economics",
    roi: [
      { value: "−38%", label: "Cost per resolved contact in 90-day pilot" },
      { value: "+12 pts", label: "CSAT uplift vs pre-pilot IVR" },
      { value: "4 FTE", label: "Equivalent capacity without new hires" },
    ],
    implTitle: "Support go-live",
    implementation: [
      { title: "Knowledge ingest", body: "Sync FAQs, policies, and order API for live lookup." },
      { title: "Containment map", body: "Define tier-1 intents vs mandatory human routes." },
      { title: "Escalation rules", body: "Sentiment, VIP tier, and legal keywords to live queue." },
      { title: "QA loop", body: "Weekly transcript review to expand containment safely." },
    ],
    relatedTitle: "Support stack",
    related: [
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "E-commerce", href: "/industries/ecommerce" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Telecom", href: "/industries/telecom" },
    ],
    faqsTitle: "Customer support FAQs",
    faqs: [
      {
        q: "Can AI handle angry customers?",
        a: "Sentiment detection routes frustration early to human agents with full context.",
      },
      {
        q: "Does it integrate with Freshdesk or Zendesk?",
        a: "Ticket creation, status update, and recording attachment via native connectors.",
      },
      {
        q: "Can it look up live order status?",
        a: "Yes — Shopify, WooCommerce, and custom OMS APIs supported via webhook.",
      },
      {
        q: "What about after-hours support?",
        a: "24/7 tier-1 containment; complex cases create callback tickets for morning queue.",
      },
      {
        q: "Is call recording disclosed?",
        a: "Mandatory disclosure at call start per TRAI and DPDP best practice.",
      },
    ],
    scriptTitle: "Support call (English–Telugu)",
    scriptExcerpt: `Agent: Hello, SvaraMart support — order number cheppagalara?
Customer: SM-88421 — delivery eppudu vastundi?
Agent: Tracking prakaram repu Hyderabad lo untundi. Address correct aa — Kukatpally?
Customer: Avunu, correct.
Agent: Repu evening ki expect cheyandi. Inkemi help?
Customer: Ledu, thanks.`,
    ctaTitle: "Clear the queue with",
    ctaAccent: "AI tier-1 support",
    ctaBody: "Connect your FAQ and order API — measure containment on 500 support calls in two weeks.",
  },

  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    metaTitle: "AI Receptionist with AI Voice Agents | SvaraCall",
    metaDescription:
      "Answer every inbound call with an AI receptionist in Telugu, Hindi, and English. Route callers, book appointments, and capture messages — 24/7 without hold music.",
    eyebrow: "Use case · Inbound",
    headline: "Never miss an inbound call again",
    subcopy:
      "Your front desk is busy with walk-ins; the phone rings unanswered. SvaraCall AI acts as virtual receptionist — greets, routes, books, and takes messages in natural Indian languages.",
    primaryCta: "Try AI receptionist",
    chips: ["Inbound answer", "Smart routing", "Message capture", "After-hours"],
    stats: [
      { value: "100%", label: "Inbound answer rate vs 34% missed-call baseline" },
      { value: "67%", label: "Calls resolved without human transfer" },
      { value: "<3 ring", label: "Average answer time" },
      { value: "24/7", label: "Coverage including lunch and after-hours" },
    ],
    problemTitle: "Missed calls are missed revenue",
    problem:
      "Clinics, law firms, and service businesses in India lose enquiries when reception is overwhelmed. Voicemail is dead — callers dial the next Google result. Multilingual callers hang up on English-only auto-attendants.",
    currentTitle: "Reception gaps",
    currentSteps: [
      "Phone rings during patient intake — goes to voicemail.",
      "Caller selects IVR option — presses 0 repeatedly, hangs up.",
      "After 7 PM, calls go unanswered until next morning.",
      "Wrong department transfers frustrate Hindi-speaking callers.",
      "Messages scribbled on paper — never reach the right person.",
    ],
    aiTitle: "Virtual receptionist flow",
    aiSteps: [
      "Every inbound call answered on first ring with branded greeting.",
      "Agent identifies intent: appointment, billing, new enquiry, existing case.",
      "Routes via warm transfer, books slot, or captures structured message.",
      "SMS confirmation to caller and staff notification with transcript.",
      "After-hours mode takes messages and offers emergency escalation path.",
    ],
    benefitsTitle: "Reception outcomes",
    benefits: [
      {
        title: "Zero missed enquiries",
        body: "Every call answered — competitor doesn't get the dial-back.",
      },
      {
        title: "Smart routing",
        body: "Right department first time — fewer transfers and hang-ups.",
      },
      {
        title: "Multilingual greet",
        body: "Detects or asks language preference — Telugu, Hindi, English.",
      },
      {
        title: "Staff liberation",
        body: "Front desk focuses on in-person visitors while AI handles phone.",
      },
    ],
    roiTitle: "Receptionist ROI",
    roi: [
      { value: "+23%", label: "New enquiry capture vs voicemail baseline" },
      { value: "₹45K", label: "Monthly saved vs hiring second receptionist" },
      { value: "−71%", label: "Missed-call rate in 30-day pilot" },
    ],
    implTitle: "Receptionist setup",
    implementation: [
      { title: "Number config", body: "Forward existing DID or provision new inbound line." },
      { title: "Routing map", body: "Department extensions, hours, and emergency override." },
      { title: "Booking link", body: "Optional calendar integration for direct appointment capture." },
      { title: "Staff alerts", body: "WhatsApp or email on message capture and warm transfers." },
    ],
    relatedTitle: "Inbound ecosystem",
    related: [
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Voice cloning", href: "/features/voice-cloning" },
      { name: "Real estate", href: "/industries/real-estate" },
    ],
    faqsTitle: "AI receptionist FAQs",
    faqs: [
      {
        q: "Can callers tell it's AI?",
        a: "Natural conversational voice — most callers don't notice; disclosure optional per your policy.",
      },
      {
        q: "Does it work with my existing phone system?",
        a: "SIP forwarding from EPABX, Exotel, or Knowlarity — no hardware change.",
      },
      {
        q: "Can it book appointments directly?",
        a: "Yes with calendar integration — same flows as outbound booking.",
      },
      {
        q: "What about emergency calls?",
        a: "Keyword and intent detection bypasses AI to on-call human immediately.",
      },
      {
        q: "Custom voice for my brand?",
        a: "Voice cloning available for approved brand voices on enterprise plans.",
      },
    ],
    scriptTitle: "Receptionist dialog (Hindi)",
    scriptExcerpt: `Agent: Namaste, Sharma Law Associates — main Ananya bol rahi hoon. Kaise madad kar sakti hoon?
Customer: Property case ke liye consultation chahiye.
Agent: Naya case hai — pehle available slot check karti hoon. Kal 11 AM ya 3 PM?
Customer: 3 PM theek hai.
Agent: Confirm — Rajesh Kumar, kal 3 PM. SMS bhej diya. Kuch aur?
Customer: Bas, dhanyavaad.`,
    ctaTitle: "Answer every call with",
    ctaAccent: "AI reception",
    ctaBody: "Forward your main line for one week — compare captured enquiries to your missed-call log.",
  },

  {
    slug: "order-updates",
    name: "Order Updates",
    metaTitle: "Order Updates with AI Voice Agents | SvaraCall",
    metaDescription:
      "Proactive order status calls for D2C and ecommerce in India. SvaraCall AI confirms dispatch, shares tracking, and resolves WISMO before customers call you.",
    eyebrow: "Use case · E-commerce ops",
    headline: "Proactive order updates — before WISMO floods support",
    subcopy:
      "Dispatch confirmed? Out for delivery? Delayed? SvaraCall AI calls customers with live order status in Telugu, Hindi, or English — cutting inbound 'where is my order' volume.",
    primaryCta: "Pilot order update calls",
    chips: ["Dispatch notify", "ETA share", "Address confirm", "WISMO deflect"],
    stats: [
      { value: "−47%", label: "Inbound WISMO tickets in 60-day D2C pilots" },
      { value: "62%", label: "Connect rate on dispatch notification calls" },
      { value: "+8%", label: "Repeat purchase rate after proactive updates" },
      { value: "2 min", label: "Average call length for status-only updates" },
    ],
    problemTitle: "Silence breeds support tickets",
    problem:
      "Indian D2C brands spend heavily on support when customers don't know order status. SMS tracking links go unopened; WhatsApp bots feel impersonal. Proactive voice updates build trust and cut ticket volume before frustration peaks.",
    currentTitle: "Passive update problems",
    currentSteps: [
      "Dispatch SMS sent — customer never opens tracking link.",
      "Delay discovered at hub — customer finds out only when they call.",
      "COD orders ship without address verification — returns spike.",
      "Support team manually calls high-value orders only.",
      "No vernacular update for tier-2 pin codes.",
    ],
    aiTitle: "Proactive order workflow",
    aiSteps: [
      "Webhook from OMS on dispatch, out-for-delivery, and delay events.",
      "Agent calls with order ID, items, carrier, and ETA in customer language.",
      "Confirms delivery address for COD and high-value shipments.",
      "Captures alternate delivery instructions or reschedule requests.",
      "Creates support ticket only when issue cannot be resolved on call.",
    ],
    benefitsTitle: "E-commerce outcomes",
    benefits: [
      {
        title: "WISMO deflection",
        body: "Customers who hear status proactively rarely open support tickets.",
      },
      {
        title: "COD verification",
        body: "Address confirm on call cuts RTO before dispatch completes.",
      },
      {
        title: "Delay transparency",
        body: "Bad news delivered with empathy — fewer chargebacks and bad reviews.",
      },
      {
        title: "Multilingual D2C",
        body: "Telugu and Hindi updates for Bharat buyers, not just metro English.",
      },
    ],
    roiTitle: "Order update ROI",
    roi: [
      { value: "−47%", label: "Support ticket volume vs reactive-only" },
      { value: "₹2.8L", label: "Annual support cost saved at 2K orders/month" },
      { value: "−19%", label: "RTO on COD cohort with voice verification" },
    ],
    implTitle: "Order update deployment",
    implementation: [
      { title: "OMS webhook", body: "Shopify, Shiprocket, or custom OMS event triggers." },
      { title: "Event map", body: "Dispatch, OFD, delay, and failed delivery each get tailored script." },
      { title: "COD filter", body: "Priority voice verify on high-value and high-RTO pincodes." },
      { title: "Support bridge", body: "Unresolved issues create Freshdesk ticket with call transcript." },
    ],
    relatedTitle: "E-commerce workflows",
    related: [
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "E-commerce", href: "/industries/ecommerce" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Win-back", href: "/use-cases/win-back" },
    ],
    faqsTitle: "Order update FAQs",
    faqs: [
      {
        q: "Which ecommerce platforms integrate?",
        a: "Shopify, WooCommerce, Magento via webhook; Shiprocket and Delhivery status feeds supported.",
      },
      {
        q: "Do customers find proactive calls intrusive?",
        a: "Transactional update scripts perform well when tied to their active order — opt-out honored.",
      },
      {
        q: "Can it handle delayed shipments?",
        a: "Delay script includes revised ETA and optional compensation per your policy.",
      },
      {
        q: "TRAI rules for order calls?",
        a: "Service transactional templates for consented buyers on registered headers.",
      },
      {
        q: "Languages for Bharat ecommerce?",
        a: "Telugu, Hindi, English — language from shipping address or CRM preference.",
      },
    ],
    scriptTitle: "Dispatch update (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee SvaraMart order #SM-4421 dispatch ayyindi — repu Hyderabad ki vastundi.
Customer: Address correct aa — Kukatpally?
Agent: Avunu, same address. COD ₹1,299 — cash ready pettandi. Tracking SMS pampanu.
Customer: Okay, thanks.`,
    ctaTitle: "Cut WISMO with",
    ctaAccent: "proactive order calls",
    ctaBody: "Connect OMS webhooks and call dispatch events for two weeks — measure support ticket delta.",
  },

  {
    slug: "delivery-confirmation",
    name: "Delivery Confirmation",
    metaTitle: "Delivery Confirmation with AI Voice Agents | SvaraCall",
    metaDescription:
      "Confirm COD deliveries and capture proof-of-delivery by voice. SvaraCall AI verifies receipt, reduces RTO, and logs outcomes for Indian ecommerce and logistics.",
    eyebrow: "Use case · Last mile",
    headline: "Confirm delivery before RTO becomes revenue loss",
    subcopy:
      "Courier marked 'delivered' but customer denies receipt? SvaraCall AI calls on delivery day — confirms handover, captures issues, and triggers reattempt before RTO charges hit.",
    primaryCta: "Reduce RTO with voice confirm",
    chips: ["COD verify", "POD capture", "RTO prevention", "Same-day callback"],
    stats: [
      { value: "−24%", label: "RTO rate on COD with voice confirmation pilots" },
      { value: "78%", label: "Delivery confirmed on first attempt call" },
      { value: "₹280", label: "Average RTO cost avoided per prevented return" },
      { value: "Same day", label: "Issue capture before courier marks RTO" },
    ],
    problemTitle: "RTO erodes D2C margins",
    problem:
      "Cash-on-delivery returns are the silent killer of Indian ecommerce unit economics. Fake unavailability, wrong addresses, and buyer remorse drive RTO — often discovered only after the courier has already initiated return-to-origin.",
    currentTitle: "Delivery confirmation gaps",
    currentSteps: [
      "Courier attempts once — customer unavailable, no callback.",
      "WhatsApp message unread — shipment marked for RTO.",
      "Merchant learns of RTO from courier dashboard — too late.",
      "High-value COD shipped without verbal address confirm.",
      "No structured issue log — same pincodes fail repeatedly.",
    ],
    aiTitle: "Voice delivery confirmation",
    aiSteps: [
      "Trigger on 'out for delivery' or failed first attempt from courier API.",
      "Agent confirms customer availability, address, and COD amount ready.",
      "Captures alternate slot or neighbor handover instructions.",
      "Flags dispute or refusal before RTO initiation.",
      "Logs outcome to OMS and triggers reattempt or cancellation per rules.",
    ],
    benefitsTitle: "Last-mile gains",
    benefits: [
      {
        title: "RTO reduction",
        body: "Voice confirm on delivery day catches unavailability early.",
      },
      {
        title: "COD confidence",
        body: "Customer verbally commits to cash — lower refusal at door.",
      },
      {
        title: "Issue intelligence",
        body: "Pincode and SKU-level RTO patterns surface from call reason codes.",
      },
      {
        title: "Courier coordination",
        body: "Reattempt instructions passed to logistics before cutoff.",
      },
    ],
    roiTitle: "Delivery confirmation ROI",
    roi: [
      { value: "₹6.4L", label: "RTO savings on 1K COD orders/month pilot" },
      { value: "−24%", label: "RTO rate vs control cohort" },
      { value: "+11%", label: "Successful first-attempt delivery rate" },
    ],
    implTitle: "Confirmation rollout",
    implementation: [
      { title: "Courier API", body: "Shiprocket, Delhivery, BlueDart OFD and attempt events." },
      { title: "COD priority", body: "Voice confirm on orders above ₹999 or high-RTO pincodes." },
      { title: "Reattempt rules", body: "Auto-schedule second attempt when customer confirms availability." },
      { title: "RTO dashboard", body: "Weekly prevented-RTO report with reason breakdown." },
    ],
    relatedTitle: "Logistics workflows",
    related: [
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "E-commerce", href: "/industries/ecommerce" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Delivery confirmation FAQs",
    faqs: [
      {
        q: "When is the best time to call?",
        a: "Morning of delivery day or within 2 hours of failed first attempt — before RTO cutoff.",
      },
      {
        q: "Does this work for prepaid orders?",
        a: "Yes — confirm availability and address to reduce failed attempts on prepaid too.",
      },
      {
        q: "Can customer reschedule delivery on call?",
        a: "Agent captures preferred slot and passes to courier via OMS integration.",
      },
      {
        q: "Proof of verbal confirmation?",
        a: "Recording and transcript attached to order ID for dispute resolution.",
      },
      {
        q: "Languages for tier-2 delivery?",
        a: "Telugu, Hindi, English — matched to customer preference or pincode default.",
      },
    ],
    scriptTitle: "COD delivery confirm (Hindi)",
    scriptExcerpt: `Agent: Namaste, aapka Flipkart order aaj deliver hoga — ₹2,499 COD. Ghar par rahenge?
Customer: Haan, shaam 6 baje tak ghar par hoon.
Agent: Courier ko note kar diya. Cash ready rakhiyega. Koi issue ho to is number par call kijiye.
Customer: Theek hai.`,
    ctaTitle: "Protect margins from",
    ctaAccent: "preventable RTO",
    ctaBody: "Run voice confirmation on your COD cohort for 30 days — measure RTO rate vs control.",
  },

  {
    slug: "surveys-feedback",
    name: "Surveys & Feedback",
    metaTitle: "Surveys & Feedback with AI Voice Agents | SvaraCall",
    metaDescription:
      "Collect NPS and CSAT by voice in Telugu, Hindi, and English. SvaraCall AI runs conversational surveys, logs scores to CRM, and flags detractors for human follow-up.",
    eyebrow: "Use case · Voice of customer",
    headline: "Surveys people actually complete",
    subcopy:
      "Email NPS gets 4% response. SvaraCall AI runs 90-second conversational feedback calls — captures score, reason, and permission to follow up — logged to your dashboard automatically.",
    primaryCta: "Pilot voice surveys",
    chips: ["NPS / CSAT", "Detractor alert", "Verbatim capture", "CRM score sync"],
    stats: [
      { value: "34%", label: "Survey completion on connected calls vs 4% email" },
      { value: "90 sec", label: "Median survey call duration" },
      { value: "89%", label: "Scores synced to CRM without manual entry" },
      { value: "2.1×", label: "Detractor recovery when called within 24 hours" },
    ],
    problemTitle: "Feedback channels are broken",
    problem:
      "Indian businesses send post-purchase emails that die in promotions tabs. SMS links feel spammy. You lack verbatims from vernacular customers who won't type long feedback — so product and ops fly blind on tier-2 markets.",
    currentTitle: "Why surveys fail",
    currentSteps: [
      "Email survey sent — 4% open, 1% complete.",
      "SMS link flagged as spam — zero responses from Android users.",
      "Phone surveys manual — 20 calls/day max, inconsistent script.",
      "Detractors never contacted — churn happens silently.",
      "No Telugu/Hindi verbatim — English-only text feedback skews insights.",
    ],
    aiTitle: "Voice survey workflow",
    aiSteps: [
      "Trigger T+2 after purchase, service, or support ticket close.",
      "Agent asks scaled question (0–10 NPS or 1–5 CSAT) conversationally.",
      "Captures open-ended reason in customer's language.",
      "Detractor (0–6) flags for human callback within 24 hours.",
      "Score and transcript push to CRM, Zendesk, or analytics warehouse.",
    ],
    benefitsTitle: "Feedback advantages",
    benefits: [
      {
        title: "Higher completion",
        body: "Voice beats email — customers answer when asked politely on phone.",
      },
      {
        title: "Rich verbatims",
        body: "Open-ended reasons captured in Telugu and Hindi — not lost in translation.",
      },
      {
        title: "Detractor rescue",
        body: "Auto-alert human team before bad review goes public.",
      },
      {
        title: "Zero manual entry",
        body: "Scores land in CRM — no spreadsheet copy-paste.",
      },
    ],
    roiTitle: "Survey program ROI",
    roi: [
      { value: "8×", label: "Response volume vs email-only program" },
      { value: "+14 pts", label: "NPS recovery on detractors contacted within 24h" },
      { value: "₹8", label: "Cost per completed survey vs ₹35 manual phone survey" },
    ],
    implTitle: "Survey deployment",
    implementation: [
      { title: "Define trigger", body: "Post-purchase, post-service, or quarterly relationship NPS." },
      { title: "Script design", body: "Keep under 2 minutes — scale question plus one open follow-up." },
      { title: "Detractor SLA", body: "Human callback queue for scores 0–6 within 24 hours." },
      { title: "Analytics sync", body: "Push to Mixpanel, Looker, or CRM custom fields." },
    ],
    relatedTitle: "Feedback ecosystem",
    related: [
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Win-back", href: "/use-cases/win-back" },
      { name: "Automotive PSF", href: "/industries/automotive" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Healthcare", href: "/industries/healthcare" },
    ],
    faqsTitle: "Survey & feedback FAQs",
    faqs: [
      {
        q: "NPS or CSAT — which works better on voice?",
        a: "NPS for relationship surveys; CSAT for single-interaction feedback — both supported.",
      },
      {
        q: "Will customers find survey calls annoying?",
        a: "Post-service timing and 90-second scripts keep complaint rates under 2% in pilots.",
      },
      {
        q: "Can we survey in Telugu?",
        a: "Telugu, Hindi, English — open-ended responses transcribed and translated for analytics.",
      },
      {
        q: "GDPR/DPDP for feedback data?",
        a: "Consent captured on call; data retained per your policy; hosted in India.",
      },
      {
        q: "Integration with Qualtrics or Typeform?",
        a: "Webhook export to existing survey tools or direct CRM field update.",
      },
    ],
    scriptTitle: "NPS survey (English)",
    scriptExcerpt: `Agent: Hi Priya, quick feedback on your SvaraMart delivery — 30 seconds. How likely are you to recommend us, 0 to 10?
Customer: I'd say 8.
Agent: What would make it a 10?
Customer: Faster delivery to my area.
Agent: Noted — thank you. Have a great day!`,
    ctaTitle: "Hear customers in",
    ctaAccent: "their own language",
    ctaBody: "Run post-purchase voice NPS on 500 orders — compare completion to your email baseline.",
  },

  {
    slug: "win-back",
    name: "Win-Back",
    metaTitle: "Win-Back with AI Voice Agents | SvaraCall",
    metaDescription:
      "Reactivate dormant customers with AI win-back calls in Telugu, Hindi, and English. SvaraCall AI offers personalized reasons to return before competitors do.",
    eyebrow: "Use case · Retention",
    headline: "Win back lapsed customers before they're gone for good",
    subcopy:
      "90 days inactive? Subscription lapsed? SvaraCall AI reaches dormant accounts with a relevant offer, captures objection, and reactivates — in the language they originally bought in.",
    primaryCta: "Pilot win-back campaign",
    chips: ["Lapsed cohort", "Offer delivery", "Objection capture", "Reactivation track"],
    stats: [
      { value: "18%", label: "Reactivation rate on connected win-back calls" },
      { value: "4.2×", label: "ROI vs email win-back in D2C pilots" },
      { value: "52%", label: "Connect rate on lapsed 60–90 day cohort" },
      { value: "₹340", label: "Average reactivated order value in retail pilots" },
    ],
    problemTitle: "Silent churn is expensive",
    problem:
      "Acquiring a customer in India costs 5–8× reactivating one — yet most brands send one email and give up. Lapsed buyers in tier-2 cities never see English win-back campaigns. Manual telecalling win-back is sporadic and off-brand.",
    currentTitle: "Failed win-back attempts",
    currentSteps: [
      "One 'we miss you' email — 2% open rate.",
      "Discount code in SMS — feels generic, no conversation.",
      "Sales team too busy with new leads to call lapsed list.",
      "No vernacular outreach — Telugu buyers ignored.",
      "Reactivated customers churn again — no objection captured.",
    ],
    aiTitle: "Win-back call sequence",
    aiSteps: [
      "Segment lapsed customers by recency, LTV, and product category.",
      "Agent references past purchase and offers relevant incentive.",
      "Captures objection: price, competitor, bad experience, no need.",
      "Bad experience → human callback; price → offer code on SMS.",
      "Reactivation logged; non-responders enter nurture or suppress.",
    ],
    benefitsTitle: "Win-back wins",
    benefits: [
      {
        title: "Cheaper than acquisition",
        body: "Reactivate at fraction of new CAC — pilot median 4.2× email ROI.",
      },
      {
        title: "Objection intelligence",
        body: "Know why they left — fix product, not just discount.",
      },
      {
        title: "Multilingual lapsed base",
        body: "Telugu and Hindi win-back for Bharat cohorts email never reached.",
      },
      {
        title: "Controlled offers",
        body: "Discount matrix enforced — no unauthorized concessions.",
      },
    ],
    roiTitle: "Win-back economics",
    roi: [
      { value: "₹4.8L", label: "Revenue from 2K-lapsed cohort pilot in 90 days" },
      { value: "18%", label: "Reactivation on connected calls" },
      { value: "−63%", label: "Cost vs equivalent new-customer acquisition" },
    ],
    implTitle: "Win-back rollout",
    implementation: [
      { title: "Define lapsed", body: "60, 90, or 180-day inactivity rules per product cycle." },
      { title: "Offer matrix", body: "Tiered incentives by LTV — no blanket 50% off." },
      { title: "Objection routing", body: "Bad experience to human; price to automated code." },
      { title: "Measure LTV", body: "Track 90-day LTV of reactivated vs never-lapsed cohort." },
    ],
    relatedTitle: "Retention stack",
    related: [
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "E-commerce", href: "/industries/ecommerce" },
      { name: "Insurance renewals", href: "/use-cases/insurance-renewals" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
    ],
    faqsTitle: "Win-back FAQs",
    faqs: [
      {
        q: "How long inactive before win-back?",
        a: "Most D2C pilots start at 60–90 days; SaaS at subscription lapse plus 14 days.",
      },
      {
        q: "Won't discount train customers to wait?",
        a: "Tier offers by LTV; test holdout cohort to measure discount dependency.",
      },
      {
        q: "TRAI compliance for promotional win-back?",
        a: "Prior consent required; DLT promotional templates with opt-out on every call.",
      },
      {
        q: "Can win-back run in Hindi?",
        a: "Telugu, Hindi, English — matched to original purchase language preference.",
      },
      {
        q: "What if they had a bad experience?",
        a: "Detractor path warm-transfers to retention specialist with purchase history.",
      },
    ],
    scriptTitle: "Win-back dialog (Hinglish)",
    scriptExcerpt: `Agent: Hi Ankit, SvaraMart se — 3 mahine se order nahi aaya. Kuch issue hua ya bas busy?
Customer: Delivery slow thi last time.
Agent: Samajh gaya — ab Hyderabad mein 2-day delivery hai. 15% off code SMS kar du try karne ke liye?
Customer: Haan, bhej do.
Agent: Code WELCOME15 — 7 din valid. Khushi hogi wapas dekh kar.`,
    ctaTitle: "Bring customers back with",
    ctaAccent: "conversational win-back",
    ctaBody: "Export your 90-day lapsed cohort — pilot 500 win-back calls and measure reactivation rate.",
  },

  {
    slug: "recruitment-screening",
    name: "Recruitment Screening",
    metaTitle: "Recruitment Screening with AI Voice Agents | SvaraCall",
    metaDescription:
      "Screen job applicants by phone in Telugu, Hindi, and English. SvaraCall AI runs first-round HR questions, scores fit, and schedules interviews with qualified candidates.",
    eyebrow: "Use case · HR tech",
    headline: "First-round screening without recruiter burnout",
    subcopy:
      "500 applications per role? SvaraCall AI calls applicants within hours — verifies basics, runs knockout questions, and passes qualified candidates to hiring managers with structured scorecards.",
    primaryCta: "Pilot recruitment screening",
    chips: ["Knockout questions", "Salary band", "Notice period", "Scorecard sync"],
    stats: [
      { value: "72%", label: "Recruiter hours saved on initial phone screens" },
      { value: "340", label: "Applicants screened per day vs 25 manual" },
      { value: "41%", label: "Pass rate to hiring manager in IT hiring pilots" },
      { value: "<24 hr", label: "Time from apply to first screen call" },
    ],
    problemTitle: "Recruiters drown in unqualified applicants",
    problem:
      "Indian hiring teams face volume spikes — campus season, bulk hiring, gig onboarding. Recruiters spend 70% of time on candidates who fail basic knockout criteria. Manual screening is slow, inconsistent, and often English-only while applicants speak Hindi or Telugu.",
    currentTitle: "Screening bottlenecks",
    currentSteps: [
      "500 CVs uploaded — recruiter calls 20, rest sit for weeks.",
      "Inconsistent questions — bias and compliance risk.",
      "Salary and notice period discovered late — wasted manager time.",
      "Applicants ghost after long wait — accept competitor offer.",
      "No recording — dispute over what candidate said.",
    ],
    aiTitle: "AI screening workflow",
    aiSteps: [
      "Application trigger fires screen call within 24 hours of apply.",
      "Agent verifies identity, role interest, location, and availability.",
      "Runs knockout: experience years, certification, salary expectation, notice.",
      "Scores pass/fail/ hold; schedules hiring manager slot for pass.",
      "Transcript and scorecard sync to Darwinbox, Keka, or Greenhouse.",
    ],
    benefitsTitle: "Hiring velocity gains",
    benefits: [
      {
        title: "Speed to screen",
        body: "Every applicant contacted within 24 hours — no pile-up.",
      },
      {
        title: "Consistent knockout",
        body: "Same criteria, same questions — reduced bias and audit trail.",
      },
      {
        title: "Manager time protected",
        body: "Only pre-qualified candidates reach interview stage.",
      },
      {
        title: "Multilingual applicants",
        body: "Telugu and Hindi screens for Hyderabad, Pune, and NCR bulk hiring.",
      },
    ],
    roiTitle: "Screening ROI",
    roi: [
      { value: "−18 days", label: "Time-to-hire in 200-hire bulk campaign" },
      { value: "₹3.2L", label: "Recruiter cost saved per 500-applicant role" },
      { value: "+29%", label: "Offer acceptance from faster candidate experience" },
    ],
    implTitle: "Screening deployment",
    implementation: [
      { title: "Knockout rubric", body: "Define must-have vs disqualify criteria with HR and legal." },
      { title: "ATS connect", body: "Webhook from Darwinbox, Lever, or Greenhouse on new apply." },
      { title: "Schedule bridge", body: "Pass candidates auto-book hiring manager calendar slot." },
      { title: "Bias audit", body: "Monthly score distribution review across demographics." },
    ],
    relatedTitle: "HR workflows",
    related: [
      { name: "Interview scheduling", href: "/use-cases/interview-scheduling" },
      { name: "HR tech", href: "/industries/hr-tech" },
      { name: "Education admissions", href: "/use-cases/education-admissions" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Recruitment screening FAQs",
    faqs: [
      {
        q: "Is AI screening legally compliant in India?",
        a: "Knockout questions approved by HR; no discriminatory criteria; full audit trail with consent.",
      },
      {
        q: "Can candidates request human recruiter?",
        a: "Yes — opt-in to human screen captured on call and routed accordingly.",
      },
      {
        q: "Which ATS platforms integrate?",
        a: "Darwinbox, Keka, Greenhouse, Lever via webhook and API.",
      },
      {
        q: "Salary negotiation on screen call?",
        a: "Agent captures expectation range only — no offer made by AI.",
      },
      {
        q: "Languages for bulk hiring?",
        a: "Telugu, Hindi, English — code-switching for mixed responses.",
      },
      {
        q: "Recording and data retention?",
        a: "Disclosed on call; retention per your HR policy; DPDP-aligned storage.",
      },
    ],
    scriptTitle: "Screening call (English)",
    scriptExcerpt: `Agent: Hi Suresh, calling about your application for Field Sales at ABC Corp. Two minutes for basic questions?
Customer: Yes, go ahead.
Agent: You listed 3 years experience — current notice period?
Customer: 30 days, negotiable to 15.
Agent: Expected CTC range?
Customer: 6 to 7 lakh.
Agent: You fit our band — scheduling interview with manager tomorrow 11 AM. SMS confirmation sent.`,
    tableTitle: "Sample knockout scorecard",
    tableHeaders: ["Criterion", "Required", "Candidate"],
    tableRows: [
      ["Experience", "2+ years", "3 years ✓"],
      ["Location", "Hyderabad", "Hyderabad ✓"],
      ["Notice", "≤45 days", "30 days ✓"],
      ["CTC band", "₹5–8L", "₹6–7L ✓"],
      ["Two-wheeler", "Required", "Yes ✓"],
    ],
    ctaTitle: "Hire faster with",
    ctaAccent: "AI first-round screens",
    ctaBody: "Connect your ATS and screen the next 200 applicants — compare time-to-interview to manual baseline.",
  },

  {
    slug: "interview-scheduling",
    name: "Interview Scheduling",
    metaTitle: "Interview Scheduling with AI Voice Agents | SvaraCall",
    metaDescription:
      "Schedule job interviews by voice in Telugu, Hindi, and English. SvaraCall AI coordinates candidate and panel availability, sends confirmations, and cuts scheduling email ping-pong.",
    eyebrow: "Use case · HR ops",
    headline: "Interview scheduling without the email ping-pong",
    subcopy:
      "Candidate passed screen — now coordinate three panelists and a timezone. SvaraCall AI calls candidates, offers live slots from calendar, and confirms — with reminders chained automatically.",
    primaryCta: "Automate interview scheduling",
    chips: ["Panel sync", "Candidate confirm", "Reminder chain", "Reschedule flow"],
    stats: [
      { value: "−76%", label: "Scheduling emails per hire in pilot teams" },
      { value: "89%", label: "Interviews booked on first scheduling call" },
      { value: "2.1 days", label: "Average schedule-to-interview vs 6.4 manual" },
      { value: "−31%", label: "Interview no-show with voice reminders" },
    ],
    problemTitle: "Scheduling kills hiring velocity",
    problem:
      "After screening, Indian hiring teams lose days in email threads — candidate proposes times, panelist unavailable, reschedule loop. Candidates accept other offers while waiting. Coordinators manually chase five stakeholders per interview.",
    currentTitle: "Manual scheduling pain",
    currentSteps: [
      "Recruiter emails candidate three slot options — 48-hour silence.",
      "Panelist calendar changes — candidate not notified until day before.",
      "Phone tag between candidate and coordinator across languages.",
      "No-show because reminder was email only.",
      "Bulk hiring collapses scheduling into spreadsheet chaos.",
    ],
    aiTitle: "AI scheduling workflow",
    aiSteps: [
      "Screen-pass trigger pulls panel availability from Google or Outlook.",
      "Agent calls candidate with two concrete slot options.",
      "Books slot, sends calendar invite and SMS to candidate and panel.",
      "T-24h voice reminder to candidate with reschedule option.",
      "No-show triggers recovery call and alternate slot offer.",
    ],
    benefitsTitle: "Scheduling outcomes",
    benefits: [
      {
        title: "Faster book rate",
        body: "89% booked on first call — no email round-trips.",
      },
      {
        title: "Panel coordination",
        body: "Live calendar sync prevents double-booked interviewers.",
      },
      {
        title: "Candidate experience",
        body: "Quick scheduling signals professional employer brand.",
      },
      {
        title: "Multilingual candidates",
        body: "Telugu and Hindi scheduling for non-metro applicant pools.",
      },
    ],
    roiTitle: "Scheduling ROI",
    roi: [
      { value: "−4.3 days", label: "Schedule-to-interview latency" },
      { value: "₹1.1L", label: "Coordinator hours saved per 100-hire campaign" },
      { value: "−31%", label: "Interview no-show rate with voice reminders" },
    ],
    implTitle: "Scheduling setup",
    implementation: [
      { title: "Calendar mesh", body: "Connect panel calendars with buffer and room rules." },
      { title: "Slot architecture", body: "Two-option offers reduce decision paralysis on call." },
      { title: "Reminder chain", body: "T-24h voice plus T-2h SMS for high-stakes panels." },
      { title: "ATS update", body: "Interview stage and datetime sync to hiring record." },
    ],
    relatedTitle: "Hiring workflows",
    related: [
      { name: "Recruitment screening", href: "/use-cases/recruitment-screening" },
      { name: "HR tech", href: "/industries/hr-tech" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
    ],
    faqsTitle: "Interview scheduling FAQs",
    faqs: [
      {
        q: "Multi-panel interviews with sequential slots?",
        a: "Panel availability mesh books back-to-back or parallel rounds per your workflow.",
      },
      {
        q: "Video vs in-person scheduling?",
        a: "Script confirms mode and sends Zoom or office address in SMS.",
      },
      {
        q: "Candidate reschedules on reminder call?",
        a: "Same-call reschedule releases old slot and offers next available times.",
      },
      {
        q: "Bulk campus hiring scale?",
        a: "Parallel outbound on 500+ candidates with shared panel calendar pools.",
      },
      {
        q: "Integration with Greenhouse or Darwinbox?",
        a: "Stage update and interview datetime push via ATS webhook.",
      },
    ],
    scriptTitle: "Interview schedule (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, ABC Tech interview schedule cheyadaniki call chesanu — repu 10 AM leda 3 PM panel available.
Customer: 3 PM better.
Agent: Confirm — video interview, Zoom link SMS lo vastundi. Panel: two members. Questions?
Customer: Ledu, thanks.
Agent: Reminder repu morning call avutundi. All the best!`,
    ctaTitle: "Stop losing candidates to",
    ctaAccent: "scheduling delays",
    ctaBody: "Connect panel calendars and schedule the next 50 interviews by voice — measure days saved.",
  },

  {
    slug: "insurance-renewals",
    name: "Insurance Renewals",
    metaTitle: "Insurance Renewals with AI Voice Agents | SvaraCall",
    metaDescription:
      "Boost policy renewals with AI voice agents in Telugu, Hindi, and English. SvaraCall AI reminds policyholders, explains premium, and routes hot renewals to advisors.",
    eyebrow: "Use case · Insurance ops",
    headline: "Renewals that close before lapse date",
    subcopy:
      "Motor, health, and life policies lapse silently when reminders stay in email. SvaraCall AI calls policyholders in their language — confirms intent, sends payment link, and warm-transfers high-value renewals to advisors.",
    primaryCta: "Pilot renewal calls",
    chips: ["Pre-lapse nudge", "Premium explain", "Advisor handoff", "Lapse prevention"],
    stats: [
      { value: "+19%", label: "Renewal rate uplift in 90-day motor pilots" },
      { value: "48%", label: "Connect rate on T-15 renewal calls" },
      { value: "₹1.2L", label: "Premium retained per 1K-policy renewal cohort" },
      { value: "73%", label: "Renewals completed without human advisor" },
    ],
    problemTitle: "Lapsed policies are lost forever",
    problem:
      "Indian insurers lose persistency when renewal notices sit unread. Agents call high-premium policies only; mass books get SMS that fail on DND. Policyholders in tier-2 cities need vernacular explanation of premium changes and add-on value — not English-only IVR.",
    currentTitle: "Renewal leakage today",
    currentSteps: [
      "Renewal notice email — 12% open rate.",
      "SMS with payment link — blocked or ignored.",
      "Agent calls only top 20% premium policies manually.",
      "Policyholder confused about NCB or premium hike — no one explains.",
      "Grace period expires — re-acquisition costs 3× retention.",
    ],
    aiTitle: "Renewal outreach workflow",
    aiSteps: [
      "T-30, T-15, and T-7 triggers from policy administration system.",
      "Agent states policy type, premium, due date, and key benefits in local language.",
      "Answers basic FAQ: NCB, IDV, cashless network — within approved script.",
      "Sends payment link or schedules advisor callback for complex cases.",
      "Lapse risk flag escalates to human agent with full call context.",
    ],
    benefitsTitle: "Persistency gains",
    benefits: [
      {
        title: "Mass personalized outreach",
        body: "Every policyholder called — not just high-premium manual subset.",
      },
      {
        title: "Premium clarity",
        body: "Voice explanation reduces 'surprise hike' non-renewals.",
      },
      {
        title: "Advisor efficiency",
        body: "Humans handle only complex or high-value warm transfers.",
      },
      {
        title: "IRDAI-aware scripts",
        body: "No mis-selling — disclosure and opt-out on every call.",
      },
    ],
    roiTitle: "Renewal economics",
    roi: [
      { value: "+19%", label: "Renewal rate vs SMS-only control" },
      { value: "₹42L", label: "Premium retained on 10K motor policies annually" },
      { value: "−55%", label: "Cost per renewed policy vs manual telecalling" },
    ],
    implTitle: "Renewal deployment",
    implementation: [
      { title: "PAS sync", body: "Policy data, premium, and lapse date from core admin system." },
      { title: "Cadence map", body: "T-30 soft nudge; T-7 firm reminder with payment link." },
      { title: "FAQ guardrails", body: "Approved answers only — no coverage advice beyond script." },
      { title: "Advisor queue", body: "Warm transfer rules for premium > threshold or FAQ miss." },
    ],
    relatedTitle: "Insurance workflows",
    related: [
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Insurance industry", href: "/industries/insurance" },
      { name: "Win-back", href: "/use-cases/win-back" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Insurance renewal FAQs",
    faqs: [
      {
        q: "Can AI explain premium increases?",
        a: "Within approved script — NCB, IDV, claim history factors. Complex disputes go to licensed advisor.",
      },
      {
        q: "IRDAI mis-selling concerns?",
        a: "Scripts legal-reviewed; no new product pitch on renewal call unless explicitly approved.",
      },
      {
        q: "Motor vs health renewal scripts?",
        a: "Separate workflows per LOB with LOB-specific FAQ and payment rails.",
      },
      {
        q: "TRAI/DLT for renewal calls?",
        a: "Service transactional templates for existing policyholder relationships.",
      },
      {
        q: "Payment on call?",
        a: "UPI or insurer payment gateway link via SMS during connected call.",
      },
    ],
    scriptTitle: "Motor renewal (Hindi)",
    scriptExcerpt: `Agent: Namaste, SecureLife Insurance — aapki car policy 15 din mein expire ho rahi hai. Premium ₹14,200 hai, NCB 35% apply hai.
Customer: Last year se zyada kyun?
Agent: IDV update hua hai — detail SMS mein hai. Aaj renew kar du link bhej kar?
Customer: Haan, bhej do.
Agent: Link bhej diya — 7 din mein payment complete kijiye. Dhanyavaad.`,
    ctaTitle: "Protect persistency with",
    ctaAccent: "voice renewal outreach",
    ctaBody: "Sync PAS and run T-15 renewal calls on one LOB — measure lapse rate vs control cohort.",
  },

  {
    slug: "patient-follow-up",
    name: "Patient Follow-Up",
    metaTitle: "Patient Follow-Up with AI Voice Agents | SvaraCall",
    metaDescription:
      "Post-visit patient follow-up calls in Telugu, Hindi, and English. SvaraCall AI checks recovery, medication adherence, and lab report readiness — with clinical escalation rules.",
    eyebrow: "Use case · Healthcare",
    headline: "Post-visit follow-up that scales beyond your nursing desk",
    subcopy:
      "Discharged yesterday? Started new medication? SvaraCall AI calls patients at T+1 and T+7 — checks symptoms, reminds medication, and flags concerning responses for clinical callback.",
    primaryCta: "Pilot patient follow-up",
    chips: ["Post-discharge", "Med adherence", "Symptom triage", "Lab ready alert"],
    stats: [
      { value: "68%", label: "Follow-up completion vs 22% manual callback rate" },
      { value: "−26%", label: "30-day readmission signals caught early in pilots" },
      { value: "4 min", label: "Median follow-up call duration" },
      { value: "100%", label: "Concerning symptoms escalated within 15 minutes" },
    ],
    problemTitle: "Follow-up falls through after discharge",
    problem:
      "Indian clinics and hospitals intend to call every post-op and chronic-care patient — but nursing staff are stretched. Patients forget medication, miss warning signs, and readmit. English SMS instructions fail on vernacular-speaking elderly patients.",
    currentTitle: "Follow-up gaps",
    currentSteps: [
      "Discharge summary given — patient doesn't read medication schedule.",
      "Nurse intended to call T+1 — only 20% of list completed.",
      "Symptom worsening discovered at emergency revisit — preventable.",
      "Lab report ready — patient never notified, doesn't collect.",
      "No structured triage — every call treated same urgency.",
    ],
    aiTitle: "Clinical follow-up workflow",
    aiSteps: [
      "Discharge or procedure event triggers T+1 and T+7 call schedule.",
      "Agent checks pain level, medication taken, diet, and red-flag symptoms.",
      "Red-flag responses → immediate nurse callback with transcript.",
      "Lab-ready trigger calls patient to collect report or explains tele-report.",
      "All outcomes logged to HMS — no advice beyond approved script.",
    ],
    benefitsTitle: "Care continuity outcomes",
    benefits: [
      {
        title: "Complete follow-up coverage",
        body: "Every discharged patient called — not just VIP manual subset.",
      },
      {
        title: "Early escalation",
        body: "Red-flag triage routes to nurse before ER visit.",
      },
      {
        title: "Medication adherence",
        body: "Voice reminder beats paper discharge summary for elderly patients.",
      },
      {
        title: "Vernacular care",
        body: "Telugu and Hindi follow-up for AP, Telangana, and UP patient bases.",
      },
    ],
    roiTitle: "Follow-up program ROI",
    roi: [
      { value: "−26%", label: "Preventable readmission signals in pilot cohort" },
      { value: "₹2.3L", label: "Nursing hours redeployed quarterly at 40-bed facility" },
      { value: "+18 pts", label: "Patient satisfaction on post-visit experience" },
    ],
    implTitle: "Follow-up deployment",
    implementation: [
      { title: "Clinical script review", body: "Red-flag keywords and escalation paths approved by medical lead." },
      { title: "HMS trigger", body: "Discharge, procedure, and lab-ready events from hospital system." },
      { title: "Escalation SLA", body: "Nurse callback within 15 minutes on flagged symptoms." },
      { title: "No-advice guardrail", body: "Agent never diagnoses — only approved check-in questions." },
    ],
    relatedTitle: "Healthcare workflows",
    related: [
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqsTitle: "Patient follow-up FAQs",
    faqs: [
      {
        q: "Can AI give medical advice?",
        a: "No. Follow-up scripts are check-in only — any clinical question escalates to licensed staff.",
      },
      {
        q: "HIPAA or Indian healthcare data rules?",
        a: "DPDP-aligned storage; recordings access-controlled; PHI handling per your DPA.",
      },
      {
        q: "Post-surgery vs chronic care scripts?",
        a: "Separate workflows with procedure-specific red-flag lists.",
      },
      {
        q: "Patient opts out of follow-up calls?",
        a: "Honored immediately; alternative SMS reminder optional per policy.",
      },
      {
        q: "Telugu for rural patient base?",
        a: "Telugu, Hindi, English — language from admission record or ask on call.",
      },
    ],
    scriptTitle: "Post-discharge follow-up (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, Sunrise Hospital nundi — mee surgery tarvata ela unnaru?
Customer: Konchem pain undi, manageable.
Agent: Prescribed tablets time ki teesukuntunnara?
Customer: Avunu, morning and night.
Agent: Pain penchithe immediately call cheyandi — nurse ki escalate chestam. Repu check-in call vastundi.`,
    ctaTitle: "Extend care beyond discharge with",
    ctaAccent: "scaled follow-up calls",
    ctaBody: "Connect HMS discharge events and run T+1 follow-up on next week's patients — measure callback completion.",
  },

  {
    slug: "education-admissions",
    name: "Education Admissions",
    metaTitle: "Education Admissions with AI Voice Agents | SvaraCall",
    metaDescription:
      "Admissions follow-up for coaching and schools in Telugu, Hindi, and English. SvaraCall AI nurtures enquiries, answers course FAQs, and nudges fee payment before seats fill.",
    eyebrow: "Use case · Edtech",
    headline: "Admissions follow-up that fills every counselling seat",
    subcopy:
      "Form filled, demo attended — then silence. SvaraCall AI calls prospects in their language, answers batch and fee questions, and pushes payment link before the admission window closes.",
    primaryCta: "Pilot admissions outreach",
    chips: ["Enquiry nurture", "Fee nudge", "Demo follow-up", "Seat urgency"],
    stats: [
      { value: "+24%", label: "Admission conversion vs email-only nurture" },
      { value: "56%", label: "Connect rate on coaching enquiry lists" },
      { value: "−38%", label: "Counsellor time on cold enquiries" },
      { value: "₹8.2L", label: "Fee collected in 30-day NEET batch pilot" },
    ],
    problemTitle: "Admission enquiries go cold fast",
    problem:
      "Indian coaching institutes and schools generate hundreds of enquiries during admission season. Counsellors can't call everyone; WhatsApp broadcasts feel spammy. Parents in tier-2 cities need Telugu or Hindi explanation of batch timing, faculty, and fee structure — not English brochure links.",
    currentTitle: "Admissions funnel leaks",
    currentSteps: [
      "Enquiry form submitted — counsellor calls 30% of list.",
      "Parent asks fee on WhatsApp — reply comes next day, competitor enrolled.",
      "Demo attended — no follow-up until seat almost full.",
      "Fee deadline approaching — single SMS, no conversation.",
      "English-only outreach loses vernacular-speaking families.",
    ],
    aiTitle: "Admissions nurture workflow",
    aiSteps: [
      "Enquiry, demo, and waitlist triggers fire within 24 hours.",
      "Agent answers approved FAQs: batch, timing, fee, scholarship, hostel.",
      "Captures intent score and preferred admission date.",
      "Hot prospects warm-transfer to counsellor or send payment link.",
      "T-3 fee deadline reminder with seat-availability urgency.",
    ],
    benefitsTitle: "Admissions outcomes",
    benefits: [
      {
        title: "Every enquiry contacted",
        body: "100% outreach in 24 hours — no lead left to competitor.",
      },
      {
        title: "Counsellor focus",
        body: "Humans handle closing conversations only — AI nurtures cold pool.",
      },
      {
        title: "Vernacular parents",
        body: "Telugu and Hindi for AP, Telangana, UP coaching markets.",
      },
      {
        title: "Fee acceleration",
        body: "Payment link on call during deadline week — less drop-off.",
      },
    ],
    roiTitle: "Admissions ROI",
    roi: [
      { value: "+24%", label: "Conversion vs email nurture control" },
      { value: "₹8.2L", label: "Fees in 30-day pilot at mid-size coaching center" },
      { value: "−38%", label: "Counsellor hours on unqualified enquiries" },
    ],
    implTitle: "Admissions rollout",
    implementation: [
      { title: "FAQ corpus", body: "Approved answers for courses, fees, batches — no unapproved claims." },
      { title: "CRM trigger", body: "LeadSquared, ExtraaEdge, or sheet upload on enquiry event." },
      { title: "Score routing", body: "Hot leads to counsellor; warm to nurture sequence." },
      { title: "Fee deadline cadence", body: "T-7 and T-3 voice plus payment link delivery." },
    ],
    relatedTitle: "Education workflows",
    related: [
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Education", href: "/industries/education" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "CRM integration", href: "/features/crm-integration" },
    ],
    faqsTitle: "Education admissions FAQs",
    faqs: [
      {
        q: "Can AI answer course-specific questions?",
        a: "Only from approved FAQ corpus — unknown questions route to human counsellor.",
      },
      {
        q: "K-12 vs coaching institute scripts?",
        a: "Separate workflows: school admission vs competitive exam batch nurture.",
      },
      {
        q: "Scholarship and discount on call?",
        a: "Within pre-approved matrix only — no ad-hoc fee concessions.",
      },
      {
        q: "Integration with LeadSquared?",
        a: "Native connector plus webhook for enquiry and payment status sync.",
      },
      {
        q: "Parent prefers Telugu — supported?",
        a: "Telugu, Hindi, English with natural code-switching for mixed responses.",
      },
    ],
    scriptTitle: "Admissions follow-up (Telugu–English)",
    scriptExcerpt: `Agent: Namaskaram, meeru maa NEET batch demo attend chesaru — admission gurinchi follow-up call.
Customer: Fee entha, installment unda?
Agent: ₹1.2 lakh full, leda 3 installments — details SMS lo pampanu. Batch June 15 start, 20 seats left.
Customer: Counsellor tho matladali.
Agent: Sure — mee notes tho connect chestanu. Hold cheyandi.`,
    ctaTitle: "Fill seats with",
    ctaAccent: "admissions voice nurture",
    ctaBody: "Connect enquiry CRM and call this week's leads — measure admission conversion vs last season.",
  },

  {
    slug: "real-estate-site-visit",
    name: "Real Estate Site Visits",
    metaTitle: "Real Estate Site Visits with AI Voice Agents | SvaraCall",
    metaDescription:
      "Confirm and qualify property site visits in Telugu, Hindi, and English. SvaraCall AI pre-scores buyers, reduces broker no-shows, and fills weekend visit slots.",
    eyebrow: "Use case · Real estate",
    headline: "Site visits with buyers who are actually ready",
    subcopy:
      "Brokers waste Saturdays on tyre-kickers. SvaraCall AI qualifies budget and timeline by phone, confirms site visits, sends location pins, and recovers no-shows — in the buyer's language.",
    primaryCta: "Pilot site visit workflow",
    chips: ["Buyer qualify", "Visit confirm", "No-show recovery", "Broker handoff"],
    stats: [
      { value: "−42%", label: "Wasted site visits from unqualified leads" },
      { value: "71%", label: "Visit confirmation rate with T-1 voice reminder" },
      { value: "₹85L", label: "Broker time value saved in 90-day Hyderabad pilot" },
      { value: "38%", label: "No-show recovery within 48 hours" },
    ],
    problemTitle: "Brokers burn weekends on wrong leads",
    problem:
      "Indian real estate teams generate massive portal enquiries — but half the site visits are curiosity trips with no budget. Manual qualification is inconsistent; buyers no-show without reminder. Telugu and Hindi buyers get English-only follow-up and go to the next broker who calls in their language.",
    currentTitle: "Site visit inefficiency",
    currentSteps: [
      "99acres lead arrives — broker calls 40% of list days later.",
      "Site visit booked — no budget or timeline verified.",
      "Saturday drive to project — buyer doesn't show, no recovery call.",
      "English WhatsApp brochure — Telugu buyer stops responding.",
      "Hot buyer lost to faster broker while team chases cold leads.",
    ],
    aiTitle: "Site visit workflow",
    aiSteps: [
      "Portal or CRM enquiry triggers qualification call within 2 hours.",
      "Agent confirms budget band, possession timeline, and configuration need.",
      "Qualified leads offered two site visit slots with location SMS.",
      "T-1 voice reminder with reschedule option and Google Maps pin.",
      "No-show triggers recovery call; hot leads warm-transfer to broker with scorecard.",
    ],
    benefitsTitle: "Broker productivity gains",
    benefits: [
      {
        title: "Pre-qualified visits",
        body: "Brokers meet buyers with confirmed budget — not window shoppers.",
      },
      {
        title: "No-show reduction",
        body: "T-1 voice reminder cuts empty Saturday slots.",
      },
      {
        title: "Speed to lead",
        body: "2-hour callback beats competitors still sorting Monday's list.",
      },
      {
        title: "Vernacular buyers",
        body: "Telugu and Hindi for Hyderabad, Pune, and NCR projects.",
      },
    ],
    roiTitle: "Site visit ROI",
    roi: [
      { value: "−42%", label: "Unqualified visits in broker calendar" },
      { value: "+31%", label: "Visit-to-token conversion on qualified cohort" },
      { value: "₹85L", label: "Broker hour value recovered in 90-day pilot" },
    ],
    implTitle: "Site visit deployment",
    implementation: [
      { title: "Qualify rubric", body: "Budget, timeline, config, and finance status questions." },
      { title: "CRM ingest", body: "99acres, MagicBricks, or Salesforce lead webhook." },
      { title: "Visit logistics", body: "Slot booking, maps pin, and T-1 reminder chain." },
      { title: "Broker handoff", body: "Warm transfer with buyer scorecard on visit day morning." },
    ],
    relatedTitle: "Real estate stack",
    related: [
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Real estate", href: "/industries/real-estate" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Live transfer", href: "/features/live-transfer" },
    ],
    faqsTitle: "Site visit FAQs",
    faqs: [
      {
        q: "Minimum budget to qualify for visit?",
        a: "Configurable per project — agent disqualified politely below threshold.",
      },
      {
        q: "RERA project details on call?",
        a: "Approved project facts only — no unverified claims; legal review recommended.",
      },
      {
        q: "Multiple projects in portfolio?",
        a: "Routing by enquiry source and project ID with separate qualify rubrics.",
      },
      {
        q: "Broker live on visit day?",
        a: "Morning warm transfer with buyer notes 30 minutes before slot.",
      },
      {
        q: "Telugu for Hyderabad projects?",
        a: "Telugu, Hindi, English — default by project city or buyer preference.",
      },
      {
        q: "TRAI compliance for property marketing calls?",
        a: "Consent-based outreach on DLT templates; opt-out immediate.",
      },
    ],
    scriptTitle: "Site visit qualify (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, Green Valley project enquiry chesaru — budget range cheppagalara?
Customer: 80 lakh to 1 crore, December lo shift.
Agent: Perfect fit — ee Saturday 11 AM site visit book cheyala? Location SMS lo pampanu.
Customer: Avunu, vastanu.
Agent: Broker Rajesh meet avutaru — repu reminder call vastundi.`,
    tableTitle: "Buyer qualification tiers",
    tableHeaders: ["Tier", "Criteria", "Action"],
    tableRows: [
      ["Hot", "Budget match + 90-day timeline", "Priority visit + broker handoff"],
      ["Warm", "Budget stretch + 6-month timeline", "Visit + nurture sequence"],
      ["Cold", "Below budget or exploratory", "Brochure SMS, no visit slot"],
    ],
    ctaTitle: "Stop wasting site visits on",
    ctaAccent: "unqualified buyers",
    ctaBody: "Connect portal leads and qualify plus confirm visits for two weekends — measure token conversion delta.",
  },
];

export function getUseCasePage(slug: string): SeoProgrammaticPage | undefined {
  return useCasePages.find((p) => p.slug === slug);
}
