import { SeoProgrammaticPage } from "@/lib/seoTypes";

type TemplateConfig = {
  slug: string;
  name: string;
  metaDescription: string;
  headline: string;
  subcopy: string;
  chips: string[];
  stats: { value: string; label: string }[];
  problem: string;
  currentSteps: string[];
  aiSteps: string[];
  benefits: { title: string; body: string }[];
  roi: { value: string; label: string }[];
  implementation: { title: string; body: string }[];
  related: { name: string; href: string }[];
  faqs: { q: string; a: string }[];
  scriptTitle: string;
  scriptExcerpt: string;
  tableRows: string[][];
  ctaTitle: string;
  ctaAccent: string;
  ctaBody: string;
  primaryCta?: string;
};

function buildTemplatePage(c: TemplateConfig): SeoProgrammaticPage {
  return {
    slug: c.slug,
    name: c.name,
    metaTitle: `${c.name} — AI Call Script Template | SvaraCall`,
    metaDescription: c.metaDescription,
    eyebrow: "Template · Call script",
    headline: c.headline,
    subcopy: c.subcopy,
    primaryCta: c.primaryCta ?? "Deploy this script on SvaraCall",
    chips: c.chips,
    stats: c.stats,
    problemTitle: "Why teams need a structured script",
    problem: c.problem,
    currentTitle: "What goes wrong without a script",
    currentSteps: c.currentSteps,
    aiTitle: "How SvaraCall runs this script",
    aiSteps: c.aiSteps,
    benefitsTitle: "Script advantages on AI voice",
    benefits: c.benefits,
    roiTitle: "Operational outcomes",
    roi: c.roi,
    implTitle: "Deploy in four steps",
    implementation: c.implementation,
    relatedTitle: "Related resources",
    related: c.related,
    faqsTitle: `${c.name} FAQs`,
    faqs: c.faqs,
    scriptTitle: c.scriptTitle,
    scriptExcerpt: c.scriptExcerpt,
    tableTitle: "Disposition codes",
    tableHeaders: ["Code", "Meaning", "Next action"],
    tableRows: c.tableRows,
    ctaTitle: c.ctaTitle,
    ctaAccent: c.ctaAccent,
    ctaBody: c.ctaBody,
  };
}

const templateConfigs: TemplateConfig[] = [
  {
    slug: "appointment-reminder-script",
    name: "Appointment Reminder Script",
    metaDescription:
      "Free AI call script template for day-before appointment reminders in Telugu, Hindi, or English. Includes TRAI disclosure, opt-out, confirm/reschedule branches, and disposition codes.",
    headline: "Appointment reminder call script you can deploy today",
    subcopy:
      "Confirm tomorrow's bookings with a natural voice reminder — not a ignored SMS. This template covers disclosure, attendance confirmation, same-call reschedule, and TRAI-compliant opt-out.",
    chips: ["T-24h reminder", "Confirm / reschedule", "TRAI disclosure", "Multilingual"],
    stats: [
      { value: "12–16", label: "Script turns including disclosure and opt-out" },
      { value: "−34%", label: "Typical no-show drop vs SMS-only reminders" },
      { value: "81%", label: "Confirm-on-call rate in healthcare pilots" },
      { value: "3", label: "Languages — Telugu, Hindi, English" },
    ],
    problem:
      "Clinics and service businesses lose capacity when patients forget appointments. Staff rarely have time to call every booking the evening before, and improvised reminders miss disclosure, opt-out, and reschedule paths.",
    currentSteps: [
      "SMS reminder sent — no confirmation signal returned.",
      "Reception tries to call but OPD runs late; half the list untouched.",
      "No standard disclosure or opt-out language on manual calls.",
      "Patient cancels mentally but never tells you — slot goes empty.",
      "Outcomes logged inconsistently — no show-rate analytics.",
    ],
    aiSteps: [
      "Pull tomorrow's appointments from calendar or HMS at 5 PM.",
      "Agent opens with brand ID, recording disclosure, and purpose.",
      "Confirm attendance or offer two alternate slots on the same call.",
      "Capture opt-out if requested and suppress future reminders instantly.",
      "Log disposition and sync calendar plus SMS confirmation.",
    ],
    benefits: [
      { title: "Higher confirm rates", body: "Two-way voice beats one-way SMS — patients respond when spoken to naturally." },
      { title: "Same-call reschedule", body: "Capture cancellations early and backfill from waitlist before the slot is lost." },
      { title: "Compliance built in", body: "TRAI/DLT transactional templates, consent checks, and instant opt-out handling." },
      { title: "Structured outcomes", body: "Every call maps to a disposition code for no-show analytics." },
    ],
    roi: [
      { value: "₹95K", label: "Monthly recovered at 20-slot/day clinic with 25% baseline no-shows" },
      { value: "6:1", label: "Typical pilot ROI within first quarter" },
      { value: "0", label: "Extra headcount for evening reminder shifts" },
    ],
    implementation: [
      { title: "Clone script", body: "Import this template into SvaraCall and set your clinic name and slot rules." },
      { title: "Sync calendar", body: "Connect Practo, Google Calendar, or HMS for nightly appointment pull." },
      { title: "Register DLT template", body: "Use transactional reminder template on your registered header." },
      { title: "Pilot one week", body: "Run on next week's schedule and compare show rates to SMS baseline." },
    ],
    related: [
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "TRAI compliance", href: "/compliance" },
    ],
    faqs: [
      { q: "Is this script TRAI-compliant?", a: "Yes — use it on DLT-registered transactional templates with prior consent. Recording disclosure and opt-out are included in the opening turns." },
      { q: "When should reminder calls go out?", a: "Most clinics use T-24 hours in a 5–8 PM window. You can add T-2h SMS backup for high-value slots." },
      { q: "Can the agent reschedule on the call?", a: "Yes — configure two alternate slots the agent may offer when the patient cannot attend." },
      { q: "What if the patient opts out?", a: "The agent confirms suppression immediately. SvaraCall removes the number from future reminder campaigns per DLT rules." },
      { q: "Does this provide medical advice?", a: "No — this script confirms logistics only. Triage or clinical questions must warm-transfer to licensed staff." },
    ],
    scriptTitle: "Full reminder script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main Sunrise Clinic se Ananya bol rahi hoon. Yeh call quality aur training ke liye record ho sakti hai. Kya main aapke saath do minute baat kar sakti hoon?
Customer: Haan, boliye.
Agent: Aapka kal subah 10:30 baje Dr. Mehta ke saath appointment hai — kya aap aa paayenge?
Customer: Haan, aa jaaunga.
Agent: Bahut achha. Agar kisi wajah se nahi aa paayenge to abhi bata dijiye — hum doosra slot book kar denge.
Customer: Nahi, kal confirm hai.
Agent: Dhanyavaad. SMS mein details bhej di hain. Ek baat — agar aap future mein hamari reminder calls nahi chahte, to abhi keh dijiye; hum turant band kar denge.
Customer: Nahi, reminders theek hain.
Agent: Theek hai. Kal milte hain — aapka din shubh ho.`,
    tableRows: [
      ["CONF", "Confirmed attendance", "Mark confirmed; send SMS recap"],
      ["RESCH", "Rescheduled on call", "Update calendar; send new slot SMS"],
      ["NORESP", "No answer after retry", "Flag for staff or no-show recovery"],
      ["OPT_OUT", "Requested no future calls", "Suppress across campaigns immediately"],
      ["TRANS", "Needs human help", "Warm-transfer to reception"],
    ],
    ctaTitle: "Cut no-shows with",
    ctaAccent: "voice reminders",
    ctaBody: "Clone this script into SvaraCall and run it on next week's schedule — compare show rates to your SMS baseline.",
  },
  {
    slug: "no-show-recovery-script",
    name: "No-Show Recovery Script",
    metaDescription:
      "AI call script template to recover missed appointments same-day in Indian languages. Empathetic reschedule flow with TRAI disclosure, opt-out, and disposition codes.",
    headline: "No-show recovery script that rebooks without guilt",
    subcopy:
      "Patient missed their slot? This template calls back within hours — empathetic tone, quick reschedule, and full compliance language for Indian outbound.",
    chips: ["Same-day callback", "Empathetic tone", "Reschedule", "DLT ready"],
    stats: [
      { value: "41%", label: "No-shows rebooked within 72 hours in pilots" },
      { value: "<4 hr", label: "Typical callback after missed appointment" },
      { value: "14", label: "Script turns with disclosure and opt-out" },
      { value: "3", label: "Languages supported" },
    ],
    problem:
      "Missed appointments mean lost revenue and idle staff. Most teams never call no-shows back — or they use blunt scripts that damage patient trust.",
    currentSteps: [
      "Empty slot discovered only when patient doesn't arrive.",
      "Staff too busy to chase every no-show the same day.",
      "Callback scripts vary by receptionist — inconsistent outcomes.",
      "No structured path from 'missed' to 'rebooked'.",
      "Compliance language skipped on rushed manual dials.",
    ],
    aiSteps: [
      "Trigger fires when appointment marked no-show in HMS or calendar.",
      "Agent calls within hours with empathetic opener and disclosure.",
      "Offer two rebook slots without blame or pressure.",
      "Honor opt-out and log disposition for recovery analytics.",
      "Sync new booking and notify waitlist if slot stays empty.",
    ],
    benefits: [
      { title: "Revenue recovery", body: "Turn missed slots into rebooked visits before the week ends." },
      { title: "Consistent empathy", body: "Every no-show hears the same respectful, non-judgmental script." },
      { title: "Waitlist backfill", body: "Unrecovered slots can trigger waitlist calls automatically." },
      { title: "Audit trail", body: "Recording, transcript, and disposition on every recovery attempt." },
    ],
    roi: [
      { value: "₹42K", label: "Monthly recovered at 15 no-shows/week, 40% rebook rate" },
      { value: "+18%", label: "Calendar utilization vs no recovery calls" },
      { value: "2 days", label: "Typical time to deploy from template" },
    ],
    implementation: [
      { title: "Set trigger", body: "Mark no-show in HMS or upload daily no-show list." },
      { title: "Tune empathy", body: "Adjust brand name and slot rules; keep disclosure and opt-out intact." },
      { title: "Connect waitlist", body: "Optional second campaign to fill unrebooked slots." },
      { title: "Measure rebook rate", body: "Track RESCH vs DECLINE dispositions weekly." },
    ],
    related: [
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
    ],
    faqs: [
      { q: "Is calling no-shows allowed under TRAI?", a: "Yes for existing patient relationships on transactional service templates with prior consent. Promotional headers are not appropriate here." },
      { q: "How soon after a no-show should we call?", a: "Most pilots call within 2–4 hours same day, or next morning for evening no-shows." },
      { q: "Can the script discuss treatment?", a: "No — keep to scheduling only. Clinical questions warm-transfer to staff." },
      { q: "What if they opt out?", a: "Suppress immediately. Recovery calls stop; transactional account alerts may still apply per your policy." },
      { q: "Does this work in Telugu?", a: "Yes — deploy in Telugu, Hindi, or English per patient preference." },
    ],
    scriptTitle: "Full no-show recovery script (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, nenu Sunrise Clinic nundi Ananya matladutunnanu. Ee call record avachu — mee appointment miss ayyindi ani follow-up cheyadaniki call chesanu. Rendu nimishalu matladacha?
Customer: Sorry, nenu marchipoya.
Agent: Parvaledu — meeku convenient ayina slot lo reschedule cheddam. Ee vaaram Thursday 4 PM leda Friday 11 AM available undi.
Customer: Friday 11 AM okay.
Agent: Confirm — Friday 11 AM, Dr. Mehta. SMS lo details pampanu. Future lo ma calls kavali ante cheppandi; ippude chepthe immediately stop chestam.
Customer: Reminders okay, kani marketing calls vaddu.
Agent: Ardam ayyindi — marketing calls suppress chestam. Friday kaluddam, dhanyavaadalu.`,
    tableRows: [
      ["RESCH", "Rebooked on call", "Update calendar; send confirmation SMS"],
      ["DECLINE", "Declined rebook", "Close recovery; optional waitlist fill"],
      ["CALLBK", "Asked callback later", "Schedule retry in CRM window"],
      ["OPT_OUT", "No future outreach", "Suppress per DLT rules"],
      ["TRANS", "Clinical question", "Warm-transfer to nurse or front desk"],
    ],
    ctaTitle: "Recover missed slots with",
    ctaAccent: "empathetic callbacks",
    ctaBody: "Deploy this no-show script on SvaraCall and measure rebook rate against your current process.",
  },
  {
    slug: "lead-qualification-script",
    name: "Lead Qualification Script",
    metaDescription:
      "BANT-style AI lead qualification call script for Indian outbound. Budget, timeline, and fit questions with TRAI consent, opt-out, and CRM disposition codes.",
    headline: "Lead qualification script that filters before reps dial",
    subcopy:
      "Stop burning senior sales time on tyre-kickers. This template runs structured BANT-style questions in Telugu, Hindi, or English — then routes scored leads with full context.",
    chips: ["BANT scoring", "Fit filters", "CRM fields", "TRAI compliant"],
    stats: [
      { value: "64%", label: "Raw leads disqualified in typical B2B lists" },
      { value: "12 min", label: "Human time saved per unqualified lead" },
      { value: "15", label: "Script turns including disclosure" },
      { value: "91%", label: "Field completion on connected calls" },
    ],
    problem:
      "Sales reps spend half their day on leads who lack budget, wrong geography, or no decision authority. Manual qualification is inconsistent and CRM data stays incomplete.",
    currentSteps: [
      "Rep opens CRM — half the fields are blank.",
      "Telecaller improvises questions; scoring varies by shift.",
      "Senior AE joins calls that should never have been booked.",
      "Disqualified leads get ghosted instead of nurtured.",
      "No recording — disputes over what the lead said.",
    ],
    aiSteps: [
      "Load rubric: budget band, timeline, authority, need, geography.",
      "Agent calls with DLT-approved script and recording disclosure.",
      "Capture answers in structured CRM fields automatically.",
      "Apply score threshold: hot → book, warm → nurture, cold → close.",
      "Honor opt-out and sync disposition plus transcript.",
    ],
    benefits: [
      { title: "Consistent scoring", body: "Same rubric on every call — no shift-to-shift variance." },
      { title: "Rep time back", body: "Only hot leads reach human closers with full context." },
      { title: "Polite disqualify", body: "Cold leads get a respectful close, not silence." },
      { title: "Evidence on disputes", body: "Recording and transcript attached to CRM record." },
    ],
    roi: [
      { value: "2.4×", label: "Rep productivity when only hot leads surface" },
      { value: "₹18–₹35", label: "Cost per connected qualification vs ₹80–₹120 manual" },
      { value: "+22%", label: "Qualified-meeting rate uplift in 30-day pilots" },
    ],
    implementation: [
      { title: "Define rubric", body: "Set budget bands, geography filters, and hot-lead threshold." },
      { title: "Map CRM fields", body: "Connect HubSpot, Zoho, or Salesforce field mapping." },
      { title: "Register DLT template", body: "Promotional or service template per consent type." },
      { title: "Pilot 200 leads", body: "Compare meeting rate to manual qualification baseline." },
    ],
    related: [
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Real estate", href: "/industries/real-estate" },
    ],
    faqs: [
      { q: "Do I need consent before qualification calls?", a: "Yes — only dial opted-in leads on DLT-registered templates. The script includes disclosure and opt-out." },
      { q: "Can it score leads automatically?", a: "Yes — configure thresholds that route hot, warm, and cold dispositions to different CRM actions." },
      { q: "Does it give investment advice?", a: "No — qualification captures intent and fit only. Product or investment details stay with licensed reps." },
      { q: "What languages work best?", a: "Telugu, Hindi, and English with natural code-switching when callers mix languages." },
      { q: "What if the lead opts out mid-call?", a: "Agent confirms suppression; SvaraCall removes them from all future campaigns immediately." },
    ],
    scriptTitle: "Full qualification script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main SvaraCall se Ananya bol rahi hoon — aapne hamari website par property enquiry ki thi. Yeh call record ho sakti hai. Do minute baat ho sakti hai?
Customer: Haan, Hyderabad mein dekh raha hoon.
Agent: Achha. Aapka budget roughly kitna hai aur kab tak possession chahiye?
Customer: Around 80 lakh, six months mein shift.
Agent: Aur decision aap khud lenge ya family ke saath?
Customer: Main hi final karunga.
Agent: Perfect — aap qualified buyer lagte hain. Senior advisor se kal 11 baje call schedule kar doon?
Customer: Haan, theek hai.
Agent: Agar aap future marketing calls nahi chahte, abhi bol dijiye — hum list se hata denge.
Customer: Nahi, theek hai continue karo.
Agent: Dhanyavaad — kal 11 baje call aayegi. Aapka din shubh ho.`,
    tableRows: [
      ["HOT", "Meets all criteria", "Book AE call or live transfer"],
      ["WARM", "Partial fit", "Nurture sequence; callback in 7 days"],
      ["COLD", "No budget or timeline", "Polite close; brochure SMS optional"],
      ["OPT_OUT", "Requested DNC", "Suppress across all campaigns"],
      ["CALLBK", "Busy now", "Schedule retry in agreed window"],
    ],
    ctaTitle: "Qualify leads before",
    ctaAccent: "reps waste time",
    ctaBody: "Deploy this qualification script on 200 leads and compare meeting rates to your manual process.",
  },
  {
    slug: "lead-follow-up-script",
    name: "Lead Follow-Up Script",
    metaDescription:
      "Speed-to-lead AI follow-up call script for fresh enquiries in India. Multilingual dialog with TRAI disclosure, opt-out, and CRM disposition logging.",
    headline: "Lead follow-up script that hits before intent fades",
    subcopy:
      "Web form, WhatsApp enquiry, or missed inbound — this template dials back in minutes, qualifies intent, and hands warm leads to your team with context.",
    chips: ["Speed-to-lead", "Multilingual", "CRM sync", "<5 min callback"],
    stats: [
      { value: "<5 min", label: "Typical first callback after enquiry" },
      { value: "38%", label: "Pilot connect rate on fresh leads" },
      { value: "3×", label: "More qualified callbacks vs next-day manual" },
      { value: "16", label: "Script turns with full compliance language" },
    ],
    problem:
      "Most Indian sales teams cannot call every fresh enquiry within the golden hour. By morning the prospect has already spoken to a competitor.",
    currentSteps: [
      "Lead lands in CRM after hours — sits until morning.",
      "Telecaller starts manual dialing with inconsistent scripts.",
      "English-only outreach fails on Telugu or Hindi speakers.",
      "No structured qualification — just interested / not interested.",
      "Hot leads wait while reps chase wrong numbers.",
    ],
    aiSteps: [
      "Webhook fires the moment a lead is created.",
      "Agent calls within minutes from DLT-registered header.",
      "Two-way conversation confirms need and timeline in their language.",
      "Scores intent and books human callback or live-transfers.",
      "Outcome, recording, and transcript sync to CRM.",
    ],
    benefits: [
      { title: "Speed without headcount", body: "Parallel outbound on fresh lists — no night shift required." },
      { title: "Language-matched outreach", body: "Telugu, Hindi, and English follow the caller's preference." },
      { title: "Structured capture", body: "Budget, timeline, and need logged on every connected call." },
      { title: "Instant opt-out", body: "DNC captured on-call and honored across campaigns." },
    ],
    roi: [
      { value: "+22%", label: "Qualified-meeting rate uplift in 30-day pilots" },
      { value: "4 hrs", label: "Daily telecaller hours redeployed to closing" },
      { value: "₹18–₹35", label: "Cost per connected follow-up vs manual" },
    ],
    implementation: [
      { title: "Connect trigger", body: "Webhook from CRM, form tool, or sheet upload." },
      { title: "Clone script", body: "Set brand name, product context, and handoff rules." },
      { title: "Define hot threshold", body: "Configure live transfer or booked callback criteria." },
      { title: "Pilot 200 leads", body: "Compare connect and meeting rates to baseline." },
    ],
    related: [
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
    ],
    faqs: [
      { q: "How fast can this script run after form submit?", a: "Most pilots trigger within 2–5 minutes of CRM ingestion. You control calling windows." },
      { q: "Is prior consent required?", a: "Yes — follow-up calls require opt-in captured at form submit or prior relationship, on DLT-registered templates." },
      { q: "Can it hand off live to a rep?", a: "Yes — hot leads warm-transfer with whisper summary of what was discussed." },
      { q: "Does it make product promises?", a: "No — the script confirms interest and schedules human conversation. Pricing and commitments stay with reps." },
      { q: "What if they opt out?", a: "Suppress immediately per DLT rules; disposition logged on lead record." },
    ],
    scriptTitle: "Full follow-up script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main SvaraCall se Ananya bol rahi hoon — aapne abhi website par enquiry ki thi. Yeh call record ho sakti hai. Ek minute baat ho sakti hai?
Customer: Haan, course fees jaanna tha.
Agent: Zaroor. Aap NEET coaching ke liye dekh rahe hain ya JEE?
Customer: NEET, 2026 batch.
Agent: Achha. Aapka preferred batch timing kya hai — morning ya evening?
Customer: Evening chalega.
Agent: Main aapko counsellor se connect kar deti hoon jo fees aur demo class explain karega. Hold kijiye ek minute.
Customer: Theek hai.
Agent: Agar aap future mein hamari calls nahi chahte, abhi keh dijiye — hum turant band kar denge.
Customer: Nahi, theek hai.
Agent: Dhanyavaad — counsellor abhi join karenge.`,
    tableRows: [
      ["HOT", "Ready to talk now", "Live transfer or book immediate callback"],
      ["WARM", "Interested, not now", "Schedule callback; send brochure SMS"],
      ["COLD", "Wrong fit or not interested", "Close lost; no further dial"],
      ["OPT_OUT", "Do not call", "Suppress immediately"],
      ["NORESP", "No answer", "Retry per campaign rules"],
    ],
    ctaTitle: "Stop losing leads to",
    ctaAccent: "slow follow-up",
    ctaBody: "Clone this script and run a 200-lead pilot — compare connect rates to your current process.",
  },
  {
    slug: "collection-call-script",
    name: "Collection Call Script",
    metaDescription:
      "Ethical AI collection call script template for NBFCs and lenders in India. Promise-to-pay flow with RBI tone guidelines, TRAI consent, and no harassment language.",
    headline: "Collection call script that secures PTP without harassment",
    subcopy:
      "Recover overdue EMIs with a firm-but-fair voice script — RBI-aligned tone, recording disclosure, opt-out for promotional follow-ups, and structured promise-to-pay capture.",
    chips: ["Promise to pay", "RBI tone", "DPD stages", "No threats"],
    stats: [
      { value: "28%", label: "PTP rate on connected collection calls in pilots" },
      { value: "0", label: "Threat or harassment language in template" },
      { value: "14", label: "Script turns with compliance branches" },
      { value: "TRAI", label: "Transactional template for existing borrowers" },
    ],
    problem:
      "Manual collection desks in India vary wildly in tone — some skip disclosure, others use language that triggers complaints. Inconsistent scripts hurt recovery and compliance.",
    currentSteps: [
      "Agents improvise — tone ranges from too soft to aggressive.",
      "No standard PTP capture or payment-link handoff.",
      "Borrowers complain about missing recording disclosure.",
      "DPD-stage messaging not differentiated.",
      "Outcomes logged as free text — no analytics.",
    ],
    aiSteps: [
      "Segment list by DPD bucket with stage-appropriate script variant.",
      "Agent identifies lender, states recording disclosure, and purpose.",
      "Confirm overdue amount and offer payment link or date commitment.",
      "Capture PTP with explicit confirmation — no threats or shame.",
      "Log disposition; escalate hardship cases to human specialist.",
    ],
    benefits: [
      { title: "Consistent tone", body: "RBI-aligned language on every call — no rogue agent scripts." },
      { title: "PTP capture", body: "Structured promise-to-pay with date and amount confirmation." },
      { title: "Payment link handoff", body: "SMS payment link sent on-call when borrower agrees." },
      { title: "Complaint reduction", body: "Disclosure and opt-out reduce TRAI and banking ombudsman issues." },
    ],
    roi: [
      { value: "+12%", label: "Recovery rate uplift vs inconsistent manual desk" },
      { value: "₹45", label: "Typical cost per connected collection attempt" },
      { value: "−30%", label: "Complaint volume when tone is standardized" },
    ],
    implementation: [
      { title: "Map DPD buckets", body: "T+1, T+7, T+30 script variants with escalating urgency, not threats." },
      { title: "Connect payment gateway", body: "Trigger SMS payment link on PTP disposition." },
      { title: "Register template", body: "Transactional DLT template for existing borrower relationships." },
      { title: "Human escalation path", body: "Hardship keywords route to trained collection specialist." },
    ],
    related: [
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Finance", href: "/industries/finance" },
      { name: "Payment recovery", href: "/use-cases/payment-recovery" },
    ],
    faqs: [
      { q: "Is AI collection legal in India?", a: "Outbound to existing borrowers on transactional templates with consent is permitted. This script avoids threats, abuse, or false legal claims per RBI fair-practices guidance." },
      { q: "Can the agent discuss legal action?", a: "No — legal escalation language must be reviewed by your compliance team and delivered only by authorized humans." },
      { q: "What about TRAI and DND?", a: "Service transactional templates for existing credit relationships apply. Promotional headers are not used for collection." },
      { q: "Does it collect card numbers on the call?", a: "No — payment happens via secure SMS link. Never capture PAN, CVV, or OTP on voice." },
      { q: "Can borrowers opt out?", a: "Yes — opt-out stops promotional follow-ups. Transactional overdue notices may continue per your policy and regulator guidance." },
    ],
    scriptTitle: "Full collection script (Hindi)",
    scriptExcerpt: `Agent: Namaste, main ABC Finance se bol rahi hoon — aapke loan account ke baare mein. Yeh call record ho sakti hai. Kya main aapke saath do minute baat kar sakti hoon?
Customer: Haan, boliye.
Agent: Aapke account par ₹12,450 ki overdue EMI hai — due date 5 din pehle thi. Kya aap aaj payment kar paayenge?
Customer: Salary abhi nahi aayi.
Agent: Samajh sakti hoon. Aap kab tak pay kar sakte hain — 15 tarikh tak theek rahega?
Customer: Haan, 15 ko kar dunga.
Agent: Confirm — ₹12,450 payment 15 tarikh tak. SMS mein payment link bhej rahi hoon. Agar aap future reminder calls band karna chahte hain, abhi bata dijiye.
Customer: Reminders theek hain.
Agent: Dhanyavaad — link check kijiye. Koi dikkat ho to is number par callback kijiye.`,
    tableRows: [
      ["PTP", "Promise to pay captured", "Schedule reminder; send payment link SMS"],
      ["PAID", "Already paid", "Verify in LMS; close ticket"],
      ["HARDSHIP", "Financial difficulty", "Transfer to human hardship team"],
      ["DISPUTE", "Disputes balance", "Transfer to support; pause dial"],
      ["OPT_OUT", "No further calls", "Suppress per policy; log complaint risk"],
    ],
    ctaTitle: "Recover overdue EMIs with",
    ctaAccent: "compliant scripts",
    ctaBody: "Deploy this collection template on a DPD segment and measure PTP rate vs your current desk.",
  },
  {
    slug: "emi-reminder-script",
    name: "EMI Reminder Script",
    metaDescription:
      "Pre-due EMI reminder AI call script for NBFCs and banks in India. Friendly nudge with amount, due date, payment link, TRAI disclosure, and opt-out.",
    headline: "EMI reminder script that pays before the due date",
    subcopy:
      "Nudge borrowers T-3 and T-1 with a clear, friendly reminder — amount, due date, and payment link on the same call. Transactional, TRAI-compliant, no collection pressure.",
    chips: ["T-3 / T-1", "Payment link SMS", "Transactional", "Multilingual"],
    stats: [
      { value: "−19%", label: "Delinquency drop in 90-day reminder pilots" },
      { value: "67%", label: "Borrowers confirm payment date on call" },
      { value: "13", label: "Script turns with disclosure" },
      { value: "₹8", label: "Typical cost per connected reminder" },
    ],
    problem:
      "Borrowers forget EMIs until they are overdue — then collection costs spike. SMS reminders get ignored; manual reminder calls do not scale.",
    currentSteps: [
      "SMS sent — no open, no action.",
      "Call center tries pre-due reminders but prioritizes overdue.",
      "Amount and due date not always stated clearly.",
      "No payment link on the same touchpoint.",
      "Inconsistent opt-out handling.",
    ],
    aiSteps: [
      "Pull pre-due list T-3 and T-1 from LMS.",
      "Agent states lender name, recording disclosure, and EMI details.",
      "Confirm payment plan or send payment link via SMS.",
      "Capture opt-out for non-essential follow-ups.",
      "Log disposition back to LMS.",
    ],
    benefits: [
      { title: "Prevent delinquency", body: "Friendly pre-due nudge reduces first-day bounce." },
      { title: "Payment link on call", body: "Borrower pays immediately via SMS link while on phone." },
      { title: "Scale without agents", body: "Thousands of reminders nightly without adding headcount." },
      { title: "Transactional compliance", body: "DLT service templates for existing borrower relationships." },
    ],
    roi: [
      { value: "−19%", label: "DPD shift in 90-day pilot" },
      { value: "6:1", label: "ROI vs cost of early-stage collection" },
      { value: "0", label: "Harassment complaints when tone stays service-oriented" },
    ],
    implementation: [
      { title: "Connect LMS", body: "Sync pre-due accounts with amount and date fields." },
      { title: "Set reminder windows", body: "T-3 morning and T-1 evening — configurable." },
      { title: "Payment link integration", body: "Trigger SMS link on confirm or request." },
      { title: "Measure DPD delta", body: "Compare 30/60 DPD rates pre and post pilot." },
    ],
    related: [
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Collection call script", href: "/templates/collection-call-script" },
      { name: "Finance", href: "/industries/finance" },
      { name: "Payment link script", href: "/templates/payment-link-script" },
    ],
    faqs: [
      { q: "Is this different from collection calls?", a: "Yes — this is pre-due service reminder tone, not overdue collection. Use the collection script for DPD buckets." },
      { q: "TRAI template type?", a: "Transactional service template for existing borrowers with prior consent." },
      { q: "Can it quote new interest rates?", a: "No — state only account-specific due amount and date from LMS. Rate changes need human or approved notice." },
      { q: "Does it collect card data?", a: "No — payment via secure link only. Never capture OTP or card numbers on voice." },
      { q: "Opt-out impact?", a: "Opt-out stops reminder calls; mandatory regulatory notices may still apply per your compliance policy." },
    ],
    scriptTitle: "Full EMI reminder script (Hindi)",
    scriptExcerpt: `Agent: Namaste, main ABC Finance se Priya bol rahi hoon — aapke loan ki EMI reminder ke liye. Yeh call record ho sakti hai. Ek minute mil sakta hai?
Customer: Haan, boliye.
Agent: Aapki agle hafte 8 tarikh ko ₹8,750 ki EMI due hai. Kya aap time par pay kar paayenge?
Customer: Haan, salary aa jaayegi tab.
Agent: Bahut achha. Main abhi SMS mein payment link bhej deti hoon — UPI se bhi kar sakte hain.
Customer: Link bhej do.
Agent: Bhej diya. Agar aap future reminder calls nahi chahte, abhi keh dijiye — hum band kar denge.
Customer: Nahi, reminders theek hain.
Agent: Dhanyavaad. Koi sawaal ho to customer care par call kijiye. Namaste.`,
    tableRows: [
      ["CONF", "Will pay on time", "Send link; no further action"],
      ["LINK", "Requested payment link", "SMS link sent; log timestamp"],
      ["LATE", "Will pay after due date", "Flag for soft collection path"],
      ["PAID", "Already paid", "Verify LMS; close reminder"],
      ["OPT_OUT", "Stop reminder calls", "Suppress per DLT and policy"],
    ],
    ctaTitle: "Prevent delinquency with",
    ctaAccent: "pre-due reminders",
    ctaBody: "Run this EMI reminder script T-3 and T-1 on a pilot cohort and measure DPD shift.",
  },
  {
    slug: "insurance-renewal-script",
    name: "Insurance Renewal Script",
    metaDescription:
      "Health and motor insurance renewal AI call script for India. Premium reminder with IRDAI-aligned language, no investment advice, TRAI consent, and opt-out.",
    headline: "Insurance renewal script that retains policies on time",
    subcopy:
      "Call policyholders before lapse with premium amount, due date, and renewal link — compliant language, no coverage guarantees, and warm handoff to licensed agents for advice.",
    chips: ["Pre-lapse reminder", "IRDAI tone", "Renewal link", "No advice"],
    stats: [
      { value: "+24%", label: "On-time renewal rate in 60-day pilots" },
      { value: "58%", label: "Connect rate on consented policyholder lists" },
      { value: "15", label: "Script turns with disclosure branches" },
      { value: "0", label: "Investment or medical advice in template" },
    ],
    problem:
      "Policies lapse silently when renewal SMS goes unread. Agents who do call often over-promise coverage or skip IRDAI-mandated disclaimers.",
    currentSteps: [
      "Renewal notice posted — no confirmation of receipt.",
      "Telecaller improvises — inconsistent IRDAI language.",
      "Policyholder asks coverage questions agent cannot answer.",
      "Lapse discovered only at claim time.",
      "No structured disposition for renewal analytics.",
    ],
    aiSteps: [
      "Pull T-30 and T-7 renewal lists from policy admin system.",
      "Agent states insurer name, recording disclosure, and renewal purpose.",
      "Share premium, due date, and payment link — no product advice.",
      "Warm-transfer coverage questions to licensed agent.",
      "Log renewal intent and honor opt-out on promotional calls.",
    ],
    benefits: [
      { title: "Lapse prevention", body: "Voice reminder beats email for renewal confirmation." },
      { title: "Compliant language", body: "No guarantees, no investment advice — logistics only." },
      { title: "Licensed handoff", body: "Coverage and recommendation questions route to humans." },
      { title: "Renewal analytics", body: "Disposition codes track intent vs lapsed." },
    ],
    roi: [
      { value: "+24%", label: "On-time renewal uplift" },
      { value: "₹1.2L", label: "Annual premium retained per 100-policy pilot cohort" },
      { value: "−40%", label: "Lapse rate vs SMS-only renewal nudges" },
    ],
    implementation: [
      { title: "Sync policy admin", body: "Pull renewal date, premium, and policy number fields." },
      { title: "Legal review", body: "Have compliance approve insurer-specific disclaimers." },
      { title: "Handoff queue", body: "Route advice requests to licensed agents only." },
      { title: "Pilot T-30 cohort", body: "Measure renewal rate vs control group." },
    ],
    related: [
      { name: "Insurance renewals", href: "/use-cases/insurance-renewals" },
      { name: "Insurance", href: "/industries/insurance" },
      { name: "Payment link script", href: "/templates/payment-link-script" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqs: [
      { q: "Can the AI recommend a different plan?", a: "No — this script covers renewal logistics only. Product recommendations require a licensed insurance agent." },
      { q: "IRDAI compliance?", a: "Script avoids misleading claims and directs advice questions to licensed staff. Have your compliance team approve final wording." },
      { q: "TRAI requirements?", a: "Service transactional templates for existing policyholders with consent. Opt-out honored on promotional follow-ups." },
      { q: "Medical advice on health policies?", a: "Never — redirect clinical questions to healthcare providers, not the voice agent." },
      { q: "Can it process payment on call?", a: "Send secure payment link via SMS — do not capture card or OTP on voice." },
    ],
    scriptTitle: "Full insurance renewal script (English)",
    scriptExcerpt: `Agent: Good afternoon, I'm calling from SecureLife Insurance regarding your policy renewal. This call may be recorded for quality. Do you have two minutes?
Customer: Yes, go ahead.
Agent: Your health policy number ending 4821 renews on March 15th with a premium of ₹18,400. Would you like me to send a payment link?
Customer: What exactly is covered this year?
Agent: I'm not able to advise on coverage details — I'll connect you to our licensed advisor for that. For now, shall I send the renewal link so your policy doesn't lapse?
Customer: Yes, send the link.
Agent: Done — you'll receive an SMS shortly. If you prefer not to receive future renewal reminder calls, tell me now and we'll stop immediately.
Customer: Reminders are fine.
Agent: Thank you for renewing with us. Have a good day.`,
    tableRows: [
      ["RENEW", "Will renew via link", "Send payment SMS; confirm in PAS"],
      ["ADVICE", "Needs product advice", "Transfer to licensed agent"],
      ["LAPSE", "Declined renewal", "Log lapse risk; nurture workflow"],
      ["PAID", "Already renewed", "Verify PAS; close reminder"],
      ["OPT_OUT", "Stop reminder calls", "Suppress promotional dials"],
    ],
    ctaTitle: "Retain policies with",
    ctaAccent: "renewal reminders",
    ctaBody: "Deploy this renewal script on your T-30 cohort and measure lapse rate vs SMS-only.",
  },
  {
    slug: "sales-call-script",
    name: "Sales Call Script",
    metaDescription:
      "Outbound AI sales call script template for Indian B2B and B2C teams. Discovery, objection handling, and meeting book with TRAI disclosure and opt-out.",
    headline: "Sales call script that books meetings, not arguments",
    subcopy:
      "Structured discovery, polite objection branches, and demo booking — with recording disclosure, opt-out, and no unauthorized discount promises.",
    chips: ["Discovery", "Objection branches", "Demo book", "DLT ready"],
    stats: [
      { value: "12%", label: "Meeting book rate on connected outbound sales calls" },
      { value: "18", label: "Script turns with objection paths" },
      { value: "3×", label: "More dials per day vs single human rep" },
      { value: "TRAI", label: "Promotional template with consent required" },
    ],
    problem:
      "Outbound sales scripts vary by rep — some skip disclosure, others over-promise pricing. Inconsistent discovery means bad meetings and wasted AE time.",
    currentSteps: [
      "Rep opens with ad-hoc pitch — no standard discovery.",
      "Objections handled inconsistently or aggressively.",
      "Discount promises made without approval.",
      "No opt-out language on cold outreach.",
      "Meetings booked with unqualified prospects.",
    ],
    aiSteps: [
      "Open with brand ID, disclosure, and permission to continue.",
      "Run discovery: pain, timeline, budget band, decision maker.",
      "Handle top three objections with approved responses.",
      "Book demo or warm-transfer hot prospects.",
      "Log disposition; honor opt-out immediately.",
    ],
    benefits: [
      { title: "Consistent discovery", body: "Same questions on every dial — comparable pipeline data." },
      { title: "Approved objections", body: "No rogue discount promises — compliance-safe responses." },
      { title: "Scale outbound", body: "Parallel dials without linear headcount growth." },
      { title: "Better meetings", body: "Only qualified prospects reach your closers." },
    ],
    roi: [
      { value: "12%", label: "Meeting rate on connected calls" },
      { value: "₹22–₹40", label: "Cost per connected sales conversation" },
      { value: "4 hrs", label: "Daily rep time saved on unqualified demos" },
    ],
    implementation: [
      { title: "Load ICP filters", body: "Geography, company size, and vertical targeting." },
      { title: "Approve objection tree", body: "Legal sign-off on pricing and competitor responses." },
      { title: "Register DLT promo template", body: "Consent-based promotional header required." },
      { title: "Pilot 500 dials", body: "Compare meeting quality score to human baseline." },
    ],
    related: [
      { name: "Sales outbound", href: "/use-cases/sales-outbound" },
      { name: "Lead qualification", href: "/templates/lead-qualification-script" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Campaign management", href: "/features/campaign-management" },
    ],
    faqs: [
      { q: "TRAI rules for sales outbound?", a: "Promotional DLT templates with prior explicit consent only. Script includes disclosure and opt-out on every call." },
      { q: "Can AI commit to pricing?", a: "No — quote ranges only if pre-approved. Final pricing stays with human sales." },
      { q: "Investment product sales?", a: "Do not use this template for securities or mutual funds — requires SEBI-regulated scripts and licensed personnel." },
      { q: "Can it cold-call purchased lists?", a: "Only scrubbed, consented lists on registered templates. SvaraCall supports DNC sync." },
      { q: "Opt-out handling?", a: "Immediate suppression across all campaigns when requested on-call." },
    ],
    scriptTitle: "Full sales call script (English)",
    scriptExcerpt: `Agent: Good morning, this is Ananya from SvaraCall — we help teams automate outbound calls in Indian languages. This call may be recorded. Do you have 90 seconds?
Customer: We're already using a dialer.
Agent: Understood. What's not working well — connect rates, language coverage, or CRM logging?
Customer: Mostly Hindi and Telugu quality on our leads.
Agent: That's exactly what we solve — natural Telugu and Hindi agents with TRAI-compliant outbound. Would a 20-minute demo with your ops lead make sense next week?
Customer: Maybe Tuesday works.
Agent: Tuesday 3 PM — I'll send a calendar invite. If you'd prefer not to receive future calls from us, say so now and we'll remove you immediately.
Customer: No, Tuesday is fine.
Agent: Perfect — invite coming shortly. Thank you.`,
    tableRows: [
      ["MEET", "Demo or meeting booked", "Send calendar invite; CRM task"],
      ["INTEREST", "Interested, callback later", "Schedule follow-up in 3 days"],
      ["OBJ", "Objection unresolved", "Send case study SMS; retry once"],
      ["NOTFIT", "Wrong ICP", "Close lost; no redial"],
      ["OPT_OUT", "Do not call", "Suppress immediately"],
    ],
    ctaTitle: "Book more meetings with",
    ctaAccent: "structured outbound",
    ctaBody: "Deploy this sales script on 500 consented leads and compare meeting book rate to your current team.",
  },
  {
    slug: "customer-support-script",
    name: "Customer Support Script",
    metaDescription:
      "AI customer support call script template for tier-1 issue triage in India. Order status, returns, and escalation with recording disclosure and opt-out.",
    headline: "Customer support script that resolves tier-1 without hold music",
    subcopy:
      "Handle order status, returns eligibility, and FAQ answers — escalate complex cases to humans with full context. Disclosure, opt-out, and no unauthorized refunds.",
    chips: ["Tier-1 triage", "Order lookup", "Escalation", "24/7 coverage"],
    stats: [
      { value: "73%", label: "Tier-1 containment in ecommerce pilots" },
      { value: "−45%", label: "Average hold time vs queue-only IVR" },
      { value: "16", label: "Script turns with escalation branch" },
      { value: "24/7", label: "Support coverage without night shift" },
    ],
    problem:
      "Support queues spike after sales events. Tier-1 questions — where is my order, how do I return — clog lines while complex cases wait.",
    currentSteps: [
      "Customer waits in IVR loop — presses 0 repeatedly.",
      "Agent asks for order ID already provided in app.",
      "Inconsistent answers on return policy.",
      "No recording disclosure on some outsourced desks.",
      "Escalations lose context — customer repeats story.",
    ],
    aiSteps: [
      "Agent greets with brand, disclosure, and order ID prompt.",
      "Lookup order status via API integration.",
      "Answer FAQ from knowledge base — grounded, not guessed.",
      "Escalate refunds and disputes to human with transcript.",
      "Offer opt-out for satisfaction survey callbacks.",
    ],
    benefits: [
      { title: "Faster tier-1", body: "Order status and return eligibility answered in under two minutes." },
      { title: "Grounded answers", body: "Knowledge-base RAG reduces hallucinated policy answers." },
      { title: "Clean escalation", body: "Human gets transcript and disposition — no repeat story." },
      { title: "After-hours coverage", body: "24/7 tier-1 without Bangalore night shift." },
    ],
    roi: [
      { value: "73%", label: "Tier-1 containment rate" },
      { value: "−45%", label: "Hold time reduction" },
      { value: "₹12", label: "Cost per contained support call" },
    ],
    implementation: [
      { title: "Connect order API", body: "Shopify, WooCommerce, or custom OMS lookup." },
      { title: "Load knowledge base", body: "Return policy, shipping SLAs, and warranty terms." },
      { title: "Define escalation rules", body: "Refund > ₹5000, legal threat, or angry sentiment → human." },
      { title: "Pilot peak week", body: "Run during sale event and measure CSAT delta." },
    ],
    related: [
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Knowledge base", href: "/features/knowledge-base" },
      { name: "Agent handoff", href: "/features/agent-handoff" },
      { name: "Commerce", href: "/industries/commerce" },
    ],
    faqs: [
      { q: "Can the AI issue refunds?", a: "No — it explains eligibility and escalates approved refund requests to human agents with order context." },
      { q: "TRAI compliance for support callbacks?", a: "Service transactional templates for existing customers. Survey callbacks need separate consent." },
      { q: "Medical or legal advice?", a: "Never — escalate health, legal, or safety issues to qualified staff immediately." },
      { q: "Recording disclosure?", a: "Required at call start per script — recordings attach to ticket." },
      { q: "Opt-out from survey calls?", a: "Honored immediately; transactional order updates may continue per policy." },
    ],
    scriptTitle: "Full support script (English)",
    scriptExcerpt: `Agent: Hello, thank you for calling BrandCo support — I'm Ananya, an AI assistant. This call may be recorded for quality. How can I help you today?
Customer: Where is my order? Number 78432.
Agent: One moment — order 78432 shipped yesterday via Delhivery, expected delivery tomorrow by 6 PM.
Customer: I want to return one item.
Agent: That item is eligible for return within 7 days of delivery. I'll send a return link by SMS — or I can transfer you to an agent for instant refund approval.
Customer: SMS link is fine.
Agent: Sent. Anything else I can help with?
Customer: No, that's all.
Agent: If you'd prefer not to receive post-call satisfaction surveys, tell me now and we'll skip them.
Customer: Skip surveys, thanks.
Agent: Done. Thank you for calling BrandCo — have a great day.`,
    tableRows: [
      ["RESOLVED", "Issue resolved tier-1", "Close ticket; optional CSAT SMS"],
      ["RETURN", "Return initiated", "Send return link; log RMA"],
      ["ESC", "Escalated to human", "Warm transfer with transcript"],
      ["FOLLOW", "Needs callback", "Schedule human callback window"],
      ["OPT_OUT", "No survey calls", "Suppress satisfaction callbacks"],
    ],
    ctaTitle: "Resolve tier-1 with",
    ctaAccent: "AI support scripts",
    ctaBody: "Connect your order API and run this support script through a peak week — measure containment vs queue baseline.",
  },
  {
    slug: "feedback-nps-script",
    name: "Feedback NPS Script",
    metaDescription:
      "Post-service NPS and feedback AI call script for India. 0–10 score capture, verbatim feedback, TRAI consent for survey calls, and opt-out.",
    headline: "NPS feedback script that gets scores SMS cannot",
    subcopy:
      "Call after delivery, appointment, or support ticket — capture 0–10 score and one verbatim reason. Survey consent, disclosure, and instant opt-out included.",
    chips: ["0–10 NPS", "Verbatim capture", "Post-service", "Survey consent"],
    stats: [
      { value: "34%", label: "Response rate on voice NPS vs 8% email" },
      { value: "12", label: "Script turns — under 90 seconds" },
      { value: "+15", label: "NPS data points per day per 1K customers" },
      { value: "TRAI", label: "Survey template with explicit consent" },
    ],
    problem:
      "Email and SMS NPS get single-digit response rates. Phone surveys work but manual CATI is expensive and inconsistent.",
    currentSteps: [
      "Email survey sent — 5% open, 2% complete.",
      "Manual phone surveys cost ₹80–120 per complete.",
      "Interviewers lead respondents — biased scores.",
      "No standard opt-out on survey callbacks.",
      "Detractor follow-up delayed days.",
    ],
    aiSteps: [
      "Trigger T+1 after service event from CRM or OMS.",
      "Agent asks permission, states disclosure, and survey purpose.",
      "Capture 0–10 score and one open-ended reason.",
      "Flag detractors (0–6) for human callback queue.",
      "Honor opt-out from all future surveys.",
    ],
    benefits: [
      { title: "Higher response", body: "Voice surveys outperform email for Indian consumers." },
      { title: "Unbiased script", body: "Same neutral wording every time — no interviewer bias." },
      { title: "Fast detractor alert", body: "Scores 0–6 trigger human recovery within hours." },
      { title: "CRM sync", body: "Score and verbatim attach to customer record." },
    ],
    roi: [
      { value: "34%", label: "Complete rate on connected survey calls" },
      { value: "₹15–₹25", label: "Cost per complete vs ₹80+ manual CATI" },
      { value: "−48 hr", label: "Detractor response time vs weekly batch" },
    ],
    implementation: [
      { title: "Define trigger", body: "Post-delivery, post-appointment, or ticket-close event." },
      { title: "Survey consent", body: "Ensure prior consent for feedback calls on DLT template." },
      { title: "Detractor queue", body: "Route 0–6 scores to customer recovery team." },
      { title: "Dashboard NPS", body: "Track weekly score trend from dispositions." },
    ],
    related: [
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Customer support script", href: "/templates/customer-support-script" },
    ],
    faqs: [
      { q: "TRAI rules for NPS calls?", a: "Survey and feedback calls require consent and DLT-registered templates. Script includes disclosure and opt-out." },
      { q: "Can customers decline mid-survey?", a: "Yes — partial responses are logged; no pressure to continue." },
      { q: "Anonymous responses?", a: "Configure whether verbatim is attributed or anonymized in CRM." },
      { q: "Call timing?", a: "Avoid early morning and late night — typical window 10 AM–7 PM local." },
      { q: "Opt-out scope?", a: "Stops all future survey calls; transactional service calls unaffected per policy." },
    ],
    scriptTitle: "Full NPS script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main BrandCo se Ananya bol rahi hoon — aapke recent order ke baare mein ek chhota feedback lena tha. Yeh call record ho sakti hai. 30 second de sakte hain?
Customer: Haan, quick bolo.
Agent: 0 se 10 mein — 10 matlab definitely recommend, 0 matlab bilkul nahi. Aap kya score denge?
Customer: 8.
Agent: Achha. Ek reason batayiye — kya achha laga ya kya improve ho sakta hai?
Customer: Delivery fast thi, packing thodi weak.
Agent: Dhanyavaad — yeh note kar liya. Agar aap future survey calls nahi chahte, abhi bol dijiye.
Customer: Surveys band kar do.
Agent: Theek hai — aage se survey calls nahi aayengi. Aapka din shubh ho.`,
    tableRows: [
      ["PROM", "Score 9–10", "Log promoter; optional referral SMS"],
      ["PASS", "Score 7–8", "Log passive; aggregate only"],
      ["DET", "Score 0–6", "Alert recovery team within 4 hours"],
      ["DECLINE", "Refused survey", "No score; no redial this cycle"],
      ["OPT_OUT", "Stop all surveys", "Suppress survey campaigns"],
    ],
    ctaTitle: "Capture NPS with",
    ctaAccent: "voice surveys",
    ctaBody: "Trigger this NPS script post-delivery for two weeks and compare response rate to email.",
  },
  {
    slug: "win-back-script",
    name: "Win-Back Script",
    metaDescription:
      "Churned customer win-back AI call script for subscriptions and SaaS in India. Empathetic re-engagement with TRAI promotional consent, opt-out, and offer handoff.",
    headline: "Win-back script that reactivates churned customers",
    subcopy:
      "Call lapsed subscribers with empathy — understand why they left, offer approved incentive, and book reactivation. Promotional consent, disclosure, and opt-out required.",
    chips: ["Churn recovery", "Empathetic tone", "Offer handoff", "Promo DLT"],
    stats: [
      { value: "18%", label: "Win-back rate on connected churn calls" },
      { value: "14", label: "Script turns with churn-reason capture" },
      { value: "3×", label: "Cheaper than human win-back desk" },
      { value: "TRAI", label: "Promotional template with consent" },
    ],
    problem:
      "Churned customers rarely hear from you again — or they get aggressive discount blasts that feel spammy. Win-back needs empathy plus structured offer rules.",
    currentSteps: [
      "Email blast with discount — low open, lower click.",
      "Manual win-back calls are expensive and inconsistent.",
      "Reps over-discount without approval.",
      "No capture of churn reason for product team.",
      "Opt-out ignored on repeated promo dials.",
    ],
    aiSteps: [
      "Pull lapsed cohort 30–90 days from billing system.",
      "Agent opens with empathy, disclosure, and permission.",
      "Ask churn reason — price, feature, support, competitor.",
      "Offer pre-approved incentive within guardrails.",
      "Reactivate or log reason; honor opt-out.",
    ],
    benefits: [
      { title: "Structured empathy", body: "Listen first, offer second — not discount-first spam." },
      { title: "Churn intelligence", body: "Reason codes feed product and retention teams." },
      { title: "Guardrailed offers", body: "Only pre-approved discounts — no rogue promises." },
      { title: "Compliance-safe promo", body: "DLT promotional template with consent and opt-out." },
    ],
    roi: [
      { value: "18%", label: "Reactivation on connected win-back calls" },
      { value: "₹28–₹45", label: "Cost per win-back attempt vs ₹100+ manual" },
      { value: "LTR", label: "Recovered lifetime value on successful reactivations" },
    ],
    implementation: [
      { title: "Define cohort", body: "Lapsed 30, 60, 90-day segments with different offers." },
      { title: "Approve offer matrix", body: "Max discount and eligibility rules in script logic." },
      { title: "Billing integration", body: "Reactivate subscription on WIN disposition." },
      { title: "Measure reactivation", body: "Track win-back rate and 90-day retention." },
    ],
    related: [
      { name: "Win-back", href: "/use-cases/win-back" },
      { name: "Subscription renewals", href: "/use-cases/subscription-renewals" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Feedback NPS script", href: "/templates/feedback-nps-script" },
    ],
    faqs: [
      { q: "TRAI rules for win-back calls?", a: "Promotional DLT templates with prior consent required. Script includes disclosure and immediate opt-out." },
      { q: "Can AI change subscription terms?", a: "No — offer pre-approved incentives only. Contract changes need human or self-serve portal." },
      { q: "Investment or insurance win-back?", a: "Use vertical-specific scripts with compliance review — no generic promises on returns or coverage." },
      { q: "How many win-back attempts?", a: "Configure max 2 attempts per lapsed customer per quarter to avoid harassment complaints." },
      { q: "Opt-out impact?", a: "Full suppression from promotional campaigns including win-back." },
    ],
    scriptTitle: "Full win-back script (English)",
    scriptExcerpt: `Agent: Hi, this is Ananya from StreamPlus — you cancelled last month and I wanted to check in. This call may be recorded. Do you have a minute?
Customer: I left because it got too expensive.
Agent: I understand — price matters. We have a returning-member plan at ₹299 for three months. Would that bring you back?
Customer: What about my watchlist data?
Agent: Your account is paused 90 days — everything is still there if you reactivate today.
Customer: Okay, let's try it.
Agent: Great — I'll send a reactivation link by SMS. If you'd rather not receive future promotional calls from us, say so now.
Customer: No more promo calls after this.
Agent: Understood — promotional calls stopped. Welcome back to StreamPlus.`,
    tableRows: [
      ["WIN", "Reactivated", "Send link; confirm in billing system"],
      ["REASON", "Declined with reason", "Log churn code for product team"],
      ["OFFER", "Interested, needs time", "Send offer SMS; callback in 48 hr"],
      ["HARD", "Hard no", "Close; no redial this quarter"],
      ["OPT_OUT", "Stop promo calls", "Suppress all promotional campaigns"],
    ],
    ctaTitle: "Win back churned users with",
    ctaAccent: "empathetic scripts",
    ctaBody: "Run this win-back script on your 30-day lapsed cohort and measure reactivation vs email-only.",
  },
  {
    slug: "order-confirmation-script",
    name: "Order Confirmation Script",
    metaDescription:
      "Post-purchase order confirmation AI call script for ecommerce in India. Verify address, COD confirmation, and delivery window with TRAI service template and opt-out.",
    headline: "Order confirmation script that cuts COD returns",
    subcopy:
      "Confirm high-value and COD orders by voice — verify address, expected delivery, and payment readiness. Service-template compliant with disclosure and opt-out.",
    chips: ["COD verify", "Address confirm", "Post-purchase", "Service template"],
    stats: [
      { value: "−31%", label: "COD RTO rate in confirmation pilots" },
      { value: "71%", label: "Address corrections captured on call" },
      { value: "13", label: "Script turns with verification branches" },
      { value: "₹9", label: "Typical cost per confirmation call" },
    ],
    problem:
      "COD orders fail when customers are not home or address is wrong. SMS confirmations get ignored; manual confirmation does not scale during sale peaks.",
    currentSteps: [
      "Order packs before customer confirms COD intent.",
      "Wrong pincode discovered at delivery — RTO.",
      "SMS confirmation — no response assumed as yes.",
      "Customer surprised by delivery — refuses COD.",
      "No structured logging of confirmation outcomes.",
    ],
    aiSteps: [
      "Trigger on high-value or COD orders from OMS.",
      "Agent confirms order details, address, and COD amount.",
      "Offer address correction or delivery window preference.",
      "Mark confirmed or flag cancel-before-ship.",
      "Log disposition and sync OMS.",
    ],
    benefits: [
      { title: "Lower RTO", body: "COD intent verified before pick-pack-ship." },
      { title: "Address fixes", body: "Catch pincode errors before courier handoff." },
      { title: "Peak scalability", body: "Thousands of confirmations during sale events." },
      { title: "Service compliance", body: "Transactional template for existing buyer relationship." },
    ],
    roi: [
      { value: "−31%", label: "COD RTO reduction" },
      { value: "₹85", label: "Saved per prevented RTO on ₹1,200 AOV" },
      { value: "2 days", label: "Deploy time from template" },
    ],
    implementation: [
      { title: "Connect OMS", body: "Webhook on COD or AOV > threshold orders." },
      { title: "Set confirm window", body: "Call within 30 minutes of order placement." },
      { title: "Cancel-before-ship rule", body: "Unconfirmed COD held 2 hours then auto-cancel." },
      { title: "Measure RTO", body: "Compare RTO rate confirmed vs unconfirmed cohorts." },
    ],
    related: [
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Delivery confirmation script", href: "/templates/delivery-confirmation-script" },
      { name: "Commerce", href: "/industries/commerce" },
      { name: "Payment link script", href: "/templates/payment-link-script" },
    ],
    faqs: [
      { q: "TRAI template for order confirmation?", a: "Service transactional template — existing customer relationship from purchase. Disclosure and opt-out included." },
      { q: "Can customer cancel on call?", a: "Yes — CANCEL disposition triggers hold or cancel in OMS before ship." },
      { q: "Prepaid orders too?", a: "Optional for address verify on high-AOV prepaid — same script, skip COD branch." },
      { q: "Product advice on call?", a: "No — confirm logistics only. Product questions escalate to support." },
      { q: "Opt-out from marketing?", a: "Captured on call; transactional order updates may continue per policy." },
    ],
    scriptTitle: "Full order confirmation script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main BrandCo se Ananya bol rahi hoon — aapne abhi ₹2,499 ka COD order place kiya. Yeh call record ho sakti hai. Confirm karne ke liye call kiya hai.
Customer: Haan, order sahi hai.
Agent: Delivery address — Flat 402, Green Heights, Hyderabad 500032 — sahi hai?
Customer: Haan, lekin pincode 500081 hai, 500032 nahi.
Agent: Update kar diya — 500081. Kal tak delivery expected hai. COD ₹2,499 ready rakhenge?
Customer: Haan, ready hoga.
Agent: Agar aap future marketing calls nahi chahte, abhi bol dijiye — hum band kar denge.
Customer: Marketing mat karo, order updates theek hain.
Agent: Noted. SMS mein updated details bhej di hain. Dhanyavaad.`,
    tableRows: [
      ["CONF", "Order confirmed", "Release for fulfillment"],
      ["ADDR", "Address corrected", "Update OMS; reconfirm SMS"],
      ["CANCEL", "Cancel before ship", "Hold order; refund if prepaid"],
      ["RESCH", "Delivery window change", "Update courier preference"],
      ["OPT_OUT", "Stop marketing calls", "Suppress promo; keep transactional"],
    ],
    ctaTitle: "Cut COD returns with",
    ctaAccent: "voice confirmation",
    ctaBody: "Run this order confirmation script on COD orders for one sale week and measure RTO delta.",
  },
  {
    slug: "delivery-confirmation-script",
    name: "Delivery Confirmation Script",
    metaDescription:
      "Out-for-delivery confirmation AI call script for logistics and ecommerce in India. Customer availability check with TRAI service template, disclosure, and opt-out.",
    headline: "Delivery confirmation script that stops failed last-mile",
    subcopy:
      "Call when the package is out for delivery — confirm someone is home, rescheduling if needed, and reduce failed attempts and RTO.",
    chips: ["Out-for-delivery", "Availability check", "Reschedule", "Last-mile"],
    stats: [
      { value: "−26%", label: "Failed delivery attempts in pilots" },
      { value: "68%", label: "Customers confirm availability on call" },
      { value: "12", label: "Script turns" },
      { value: "Same-day", label: "Reschedule option when unavailable" },
    ],
    problem:
      "Couriers arrive when nobody is home — especially COD. A quick availability check before the attempt saves second trips and RTO.",
    currentSteps: [
      "Courier attempts delivery — customer at work.",
      "Second attempt next day — same problem.",
      "SMS 'out for delivery' ignored.",
      "COD refused because customer forgot order.",
      "RTO after two failed attempts.",
    ],
    aiSteps: [
      "Trigger when AWB scans 'out for delivery'.",
      "Agent confirms customer availability today.",
      "Offer alternate slot or neighbor authorization.",
      "Send live tracking link via SMS.",
      "Log disposition for courier notes.",
    ],
    benefits: [
      { title: "Fewer failed attempts", body: "Confirm home availability before rider arrives." },
      { title: "COD readiness", body: "Remind COD amount so customer has cash or UPI ready." },
      { title: "Reschedule path", body: "Same-call alternate date reduces RTO." },
      { title: "Courier notes", body: "Disposition syncs to delivery app when integrated." },
    ],
    roi: [
      { value: "−26%", label: "Failed attempt rate" },
      { value: "₹40", label: "Saved per avoided second attempt" },
      { value: "+12%", label: "First-attempt delivery success" },
    ],
    implementation: [
      { title: "Courier webhook", body: "Connect Delhivery, Shiprocket, or custom TMS event." },
      { title: "Call timing", body: "Trigger 60–90 minutes before estimated delivery." },
      { title: "Reschedule rules", body: "Max next-day slot if unavailable today." },
      { title: "Pilot one city", body: "Compare first-attempt success vs control pin codes." },
    ],
    related: [
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Order confirmation script", href: "/templates/order-confirmation-script" },
      { name: "Commerce", href: "/industries/commerce" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    faqs: [
      { q: "TRAI compliance?", a: "Service transactional template for active order relationship. Disclosure and opt-out in script." },
      { q: "Can customer change address on call?", a: "Minor notes only — major address change routes to support before delivery." },
      { q: "International shipments?", a: "Adapt script for customs and duty — no legal advice on import rules." },
      { q: "Medical product delivery?", a: "Confirm availability only — no dosage or clinical guidance on call." },
      { q: "Opt-out?", a: "Marketing suppressed; active delivery updates continue until order complete." },
    ],
    scriptTitle: "Full delivery confirmation script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main BrandCo delivery se bol rahi hoon — aapka order aaj deliver ho raha hai. Yeh call record ho sakti hai. Aaj ghar par koi receive kar payega?
Customer: Main office mein hoon, shaam ko 6 baje tak.
Agent: Courier aaj 5 baje tak pahunch sakta hai — 6 baje se pehle possible nahi. Kal subah 10–12 slot book kar doon?
Customer: Haan, kal subah theek hai.
Agent: COD ₹1,899 — kal ready rakhenge? SMS mein tracking link bhej diya.
Customer: Haan, UPI se kar dunga.
Agent: Agar aap future promotional calls nahi chahte, abhi keh dijiye.
Customer: Promo mat karo.
Agent: Done. Kal subah delivery hogi. Dhanyavaad.`,
    tableRows: [
      ["HOME", "Available today", "Confirm to courier; proceed"],
      ["RESCH", "Rescheduled", "Update TMS slot; notify rider"],
      ["NEIGH", "Neighbor authorized", "Add delivery note for rider"],
      ["FAIL", "Unreachable", "Second attempt rule; flag RTO risk"],
      ["OPT_OUT", "Stop promo calls", "Suppress marketing post-delivery"],
    ],
    ctaTitle: "Improve first-attempt delivery with",
    ctaAccent: "availability checks",
    ctaBody: "Trigger this script on out-for-delivery events in one city and measure failed-attempt rate.",
  },
  {
    slug: "patient-follow-up-script",
    name: "Patient Follow-Up Script",
    metaDescription:
      "Post-visit patient follow-up AI call script for clinics in India. Recovery check-in without medical advice, TRAI service template, disclosure, and opt-out.",
    headline: "Patient follow-up script that cares without diagnosing",
    subcopy:
      "Check on patients after procedure or visit — recovery status, medication adherence reminder, and schedule follow-up. No medical advice; escalate clinical concerns to staff.",
    chips: ["Post-visit", "No medical advice", "Schedule follow-up", "HIPAA-minded"],
    stats: [
      { value: "89%", label: "Patients appreciate post-visit call in pilots" },
      { value: "0", label: "Medical diagnosis language in template" },
      { value: "15", label: "Script turns with escalation branch" },
      { value: "−22%", label: "Missed follow-up visits when voice used" },
    ],
    problem:
      "Post-visit follow-up improves outcomes but nurses lack time to call every patient. Improvised calls sometimes cross into unauthorized medical advice.",
    currentSteps: [
      "Discharge instructions on paper — half unread.",
      "Staff intend to call but OPD volume prevents it.",
      "No standard script — advice quality varies.",
      "Red-flag symptoms missed until ER visit.",
      "No logging for care-coordination audits.",
    ],
    aiSteps: [
      "Trigger T+1 or T+3 after visit from HMS.",
      "Agent checks general recovery — no diagnosis.",
      "Remind medication schedule from approved list only.",
      "Escalate pain, fever, or bleeding keywords to nurse.",
      "Book follow-up slot and honor opt-out.",
    ],
    benefits: [
      { title: "Scale compassion", body: "Every patient gets a check-in — not just VIP cases." },
      { title: "Safe boundaries", body: "Logistics and adherence only — clinical escalation to staff." },
      { title: "Red-flag routing", body: "Symptom keywords trigger immediate nurse callback." },
      { title: "Follow-up booking", body: "Schedule review appointment on the same call." },
    ],
    roi: [
      { value: "−22%", label: "Missed follow-up appointments" },
      { value: "+14%", label: "Medication adherence self-report" },
      { value: "6:1", label: "Patient satisfaction ROI in clinic pilots" },
    ],
    implementation: [
      { title: "HMS integration", body: "Pull post-visit cohort with procedure type tags." },
      { title: "Clinical review", body: "Medical director approves allowed reminder phrases." },
      { title: "Escalation queue", body: "Nurse on-call for red-flag dispositions." },
      { title: "Pilot one department", body: "Start with day-surgery cohort; measure follow-up rate." },
    ],
    related: [
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Appointment reminder script", href: "/templates/appointment-reminder-script" },
      { name: "Compliance", href: "/compliance" },
    ],
    faqs: [
      { q: "Can the AI diagnose or prescribe?", a: "Never — this script checks general recovery and reminds approved discharge instructions only. Clinical questions escalate to licensed staff." },
      { q: "TRAI and patient consent?", a: "Service transactional template with consent captured at registration. Disclosure and opt-out required." },
      { q: "Telemedicine regulations?", a: "This is follow-up coordination, not teleconsultation. Do not use for new symptom assessment." },
      { q: "Recording sensitive health data?", a: "Recordings stored per DPDP and clinic policy — minimize PHI in transcripts where possible." },
      { q: "Patient opts out?", a: "Suppress follow-up calls; emergency contact paths remain via clinical policy." },
    ],
    scriptTitle: "Full patient follow-up script (English)",
    scriptExcerpt: `Agent: Hello, this is Ananya calling from City Hospital follow-up care. This call may be recorded. I'm checking in after your visit on Monday — do you have two minutes?
Customer: Yes, I'm okay mostly.
Agent: Glad to hear it. Are you taking the prescribed medication at the scheduled times?
Customer: Yes, twice daily after meals.
Agent: Good. Any severe pain, fever above 101, or unusual bleeding since the visit?
Customer: No, nothing like that.
Agent: I cannot provide medical advice — if anything worsens, please call our nurse line at 1800-XXX. Shall I book your review appointment for next Thursday?
Customer: Yes, Thursday works.
Agent: Booked — SMS confirmation sent. If you'd prefer not to receive future follow-up calls, tell me now.
Customer: Follow-ups are fine.
Agent: Thank you — take care and we'll see you Thursday.`,
    tableRows: [
      ["WELL", "Recovering as expected", "Confirm meds; book follow-up"],
      ["ESC", "Red-flag symptoms", "Immediate nurse callback queue"],
      ["BOOK", "Follow-up scheduled", "Update HMS calendar"],
      ["ADVICE", "Clinical question", "Transfer to nurse — no AI answer"],
      ["OPT_OUT", "Stop follow-up calls", "Suppress; document in chart"],
    ],
    ctaTitle: "Scale post-visit care with",
    ctaAccent: "safe follow-up scripts",
    ctaBody: "Run this patient follow-up script on one surgical cohort and measure follow-up appointment attendance.",
  },
  {
    slug: "pharmacy-refill-script",
    name: "Pharmacy Refill Script",
    metaDescription:
      "Chronic medication refill reminder AI call script for pharmacies in India. Prescription refill logistics without medical advice, TRAI consent, and opt-out.",
    headline: "Pharmacy refill script that keeps adherence on track",
    subcopy:
      "Remind patients when refills are due — confirm pickup or delivery, no dosage changes, escalate clinical questions to pharmacist. Service-template compliant.",
    chips: ["Refill reminder", "Pickup / delivery", "No dosage advice", "Pharmacy"],
    stats: [
      { value: "+19%", label: "On-time refill rate in pharmacy pilots" },
      { value: "0", label: "Dosage change language in template" },
      { value: "14", label: "Script turns" },
      { value: "62%", label: "Pickup confirmed on connected calls" },
    ],
    problem:
      "Chronic patients miss refills when life gets busy. SMS reminders are ignored; pharmacists cannot call every due prescription.",
    currentSteps: [
      "Refill due flag in system — no outbound action.",
      "Patient runs out — emergency visit or gap in therapy.",
      "Staff call only VIP or high-value accounts.",
      "Dosage questions answered inconsistently on phone.",
      "No opt-out on reminder campaigns.",
    ],
    aiSteps: [
      "Pull T-3 refill due list from pharmacy system.",
      "Agent states pharmacy name, disclosure, and refill purpose.",
      "Confirm pickup time or schedule delivery.",
      "Escalate dosage or side-effect questions to pharmacist.",
      "Log disposition and honor opt-out.",
    ],
    benefits: [
      { title: "Adherence support", body: "Timely refills reduce therapy gaps for chronic conditions." },
      { title: "Pharmacist escalation", body: "Clinical questions never answered by AI." },
      { title: "Pickup scheduling", body: "Queue orders before patient arrives." },
      { title: "Delivery option", body: "Same-call delivery slot for home-bound patients." },
    ],
    roi: [
      { value: "+19%", label: "On-time refill rate" },
      { value: "₹120", label: "Average revenue per recovered refill" },
      { value: "−15%", label: "Stock-out emergency purchases elsewhere" },
    ],
    implementation: [
      { title: "Pharmacy software sync", body: "Connect Rx due dates and patient contact preferences." },
      { title: "Pharmacist queue", body: "Transfer clinical questions in business hours." },
      { title: "Delivery integration", body: "Optional slot booking for home delivery." },
      { title: "Pilot chronic cohort", body: "Diabetes or hypertension list for 30 days." },
    ],
    related: [
      { name: "Pharmacy refill", href: "/use-cases/pharmacy-refill" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Patient follow-up script", href: "/templates/patient-follow-up-script" },
      { name: "Delivery confirmation script", href: "/templates/delivery-confirmation-script" },
    ],
    faqs: [
      { q: "Can AI change prescription dosage?", a: "Never — refill logistics only. Dosage or drug interaction questions transfer to licensed pharmacist." },
      { q: "TRAI compliance?", a: "Service transactional template with consent from pharmacy registration. Opt-out honored." },
      { q: "Controlled substances?", a: "Exclude Schedule X/H from automated refill campaigns — human pharmacist only per state rules." },
      { q: "Medical advice boundary?", a: "Agent may remind 'as prescribed' timing from record — not interpret symptoms." },
      { q: "Opt-out?", a: "Stops refill reminder calls; patient may still receive legally required notices." },
    ],
    scriptTitle: "Full pharmacy refill script (Hindi)",
    scriptExcerpt: `Agent: Namaste, main Apollo Pharmacy se Ananya bol rahi hoon — aapki diabetes ki dawai refill due hai. Yeh call record ho sakti hai. Ek minute baat ho sakti hai?
Customer: Haan, kal khatam ho jaayegi.
Agent: Aapke liye refill ready kar doon — aaj shaam 6 baje tak pickup ya home delivery?
Customer: Pickup kar lunga, 5 baje.
Agent: 5 baje tak ready rahegi. Koi dosage change ya side effect ke baare mein sawaal hai to pharmacist se connect kar sakti hoon.
Customer: Nahi, same dose continue hai.
Agent: Theek hai. Agar aap future refill reminder calls band karna chahte hain, abhi bata dijiye.
Customer: Reminders theek hain.
Agent: SMS mein pickup details bhej di hain. Dhanyavaad.`,
    tableRows: [
      ["PICKUP", "Pickup scheduled", "Prepare order; SMS when ready"],
      ["DEL", "Delivery scheduled", "Book delivery slot; confirm address"],
      ["PHARM", "Clinical question", "Transfer to pharmacist"],
      ["DECLINE", "Not ready to refill", "Callback in 7 days or doctor visit note"],
      ["OPT_OUT", "Stop refill reminders", "Suppress; log in pharmacy system"],
    ],
    ctaTitle: "Boost refill adherence with",
    ctaAccent: "voice reminders",
    ctaBody: "Deploy this refill script on your chronic medication cohort and measure on-time refill rate.",
  },
  {
    slug: "recruitment-screening-script",
    name: "Recruitment Screening Script",
    metaDescription:
      "AI phone screening script template for HR teams in India. Knockout questions, salary band, notice period, with disclosure, opt-out, and disposition codes.",
    headline: "Recruitment screening script that filters before interviews",
    subcopy:
      "Phone-screen every applicant with consistent knockout questions — experience, notice period, salary expectations, and location — then pass qualified candidates to recruiters.",
    chips: ["Knockout questions", "Notice period", "Salary band", "HR screening"],
    stats: [
      { value: "58%", label: "Applicants screened out before recruiter time" },
      { value: "8 min", label: "Recruiter time saved per screened-out candidate" },
      { value: "16", label: "Script turns with knockout branches" },
      { value: "91%", label: "Field completion on connected screens" },
    ],
    problem:
      "Recruiters spend hours on candidates who fail basic knockout criteria — wrong location, salary mismatch, or immediate notice impossible.",
    currentSteps: [
      "Resume reviewed — basic knockouts missed.",
      "30-minute recruiter screen repeats same questions.",
      "Inconsistent salary discussion — bias risk.",
      "No recording for compliance disputes.",
      "Ghosted candidates after silent reject.",
    ],
    aiSteps: [
      "Trigger on application received from ATS.",
      "Agent confirms role, disclosure, and screening purpose.",
      "Ask knockout: experience, notice, salary, location, work mode.",
      "Pass qualified candidates to recruiter calendar.",
      "Send polite rejection SMS to disqualified; honor opt-out.",
    ],
    benefits: [
      { title: "Recruiter time back", body: "Only qualified candidates reach human interview." },
      { title: "Consistent knockouts", body: "Same criteria for every applicant — fairer process." },
      { title: "Fast turnaround", body: "Screen within hours of application, not days." },
      { title: "Audit trail", body: "Recording and disposition for HR compliance." },
    ],
    roi: [
      { value: "8 min", label: "Saved per screened-out applicant" },
      { value: "2.1×", label: "Recruiter interviews per day when pre-screened" },
      { value: "−3 days", label: "Time-to-first-screen vs manual backlog" },
    ],
    implementation: [
      { title: "Define knockouts", body: "Min experience, max notice, salary band, hybrid/onsite rules." },
      { title: "ATS integration", body: "Greenhouse, Lever, or Zoho Recruit webhook." },
      { title: "Recruiter calendar", body: "Auto-book PASS dispositions into available slots." },
      { title: "Pilot one role", body: "Run on high-volume opening; measure recruiter hours saved." },
    ],
    related: [
      { name: "Recruitment screening", href: "/use-cases/recruitment-screening" },
      { name: "Interview scheduling script", href: "/templates/interview-scheduling-script" },
      { name: "HR & staffing", href: "/industries/staffing" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
    ],
    faqs: [
      { q: "DPDP and candidate consent?", a: "Screening requires consent at application. Script includes recording disclosure and opt-out from future calls." },
      { q: "Discrimination risk?", a: "Knockout criteria must be job-related only — legal review recommended. No questions on religion, caste, or marital status." },
      { q: "Salary negotiation on AI?", a: "Capture expectation range only — offers made by human recruiters." },
      { q: "TRAI for recruitment calls?", a: "Service or promotional template depending on consent captured at apply. Opt-out required." },
      { q: "Candidate opts out?", a: "Suppress from automated screening; manual recruiter may still email per policy." },
    ],
    scriptTitle: "Full screening script (English)",
    scriptExcerpt: `Agent: Hello, I'm Ananya calling from TechCorp HR about your application for Software Engineer. This call may be recorded. Do you have five minutes for a quick phone screen?
Customer: Yes, sure.
Agent: How many years of production Java experience do you have?
Customer: About four years.
Agent: What's your current notice period and expected CTC range in lakhs per annum?
Customer: One month notice, expecting 18–20 LPA.
Agent: This role is hybrid in Bangalore — three days office. Does that work?
Customer: Yes, I can relocate.
Agent: Great — you're qualified for the next round. I'll send a recruiter interview slot by SMS. If you'd prefer no future calls from us, say so now.
Customer: No, that's fine.
Agent: Thank you — good luck with the next step.`,
    tableRows: [
      ["PASS", "Meets knockouts", "Book recruiter interview; ATS advance"],
      ["FAIL", "Failed knockout", "Polite rejection SMS; close application"],
      ["MAYBE", "Borderline", "Recruiter review queue within 24 hr"],
      ["CALLBK", "Busy — retry", "Schedule callback in 48 hr"],
      ["OPT_OUT", "Stop calls", "Suppress; email-only communication"],
    ],
    ctaTitle: "Screen faster with",
    ctaAccent: "consistent knockouts",
    ctaBody: "Run this screening script on your highest-volume role and measure recruiter hours saved.",
  },
  {
    slug: "interview-scheduling-script",
    name: "Interview Scheduling Script",
    metaDescription:
      "Interview scheduling AI call script for recruiters in India. Calendar slot offer, confirm, and reschedule with disclosure, opt-out, and ATS disposition sync.",
    headline: "Interview scheduling script that fills recruiter calendars",
    subcopy:
      "Offer two interview slots, confirm attendance, and send calendar invite — no more email ping-pong. Disclosure, opt-out, and ATS sync included.",
    chips: ["Slot offer", "Calendar sync", "Reschedule", "ATS logging"],
    stats: [
      { value: "76%", label: "Interviews booked on first connected call" },
      { value: "−4 days", label: "Scheduling latency vs email-only" },
      { value: "13", label: "Script turns" },
      { value: "2", label: "Slot options offered per call" },
    ],
    problem:
      "Interview scheduling stalls in email threads. Candidates miss invites; recruiters chase confirmations manually.",
    currentSteps: [
      "Recruiter emails three time options — no reply for days.",
      "Candidate confirms wrong timezone or format.",
      "No-show interview with no reminder call.",
      "Reschedule requests lost in WhatsApp threads.",
      "ATS status not updated from scheduling chaos.",
    ],
    aiSteps: [
      "Trigger when candidate passes phone screen.",
      "Agent offers two slots from recruiter calendar API.",
      "Confirm timezone, mode (video/onsite), and email for invite.",
      "Send calendar invite and SMS recap.",
      "T-24 reminder optional; honor opt-out.",
    ],
    benefits: [
      { title: "Instant booking", body: "Interview locked on first connected call." },
      { title: "Calendar sync", body: "Google or Outlook invite sent automatically." },
      { title: "Fewer no-shows", body: "Pair with appointment reminder script T-24." },
      { title: "ATS update", body: "Disposition syncs interview stage automatically." },
    ],
    roi: [
      { value: "76%", label: "First-call book rate" },
      { value: "−4 days", label: "Time-to-interview scheduled" },
      { value: "−18%", label: "Interview no-show with voice reminder add-on" },
    ],
    implementation: [
      { title: "Connect calendar", body: "Recruiter availability from Google or Outlook." },
      { title: "Define slot rules", body: "30/45/60 min blocks; buffer between interviews." },
      { title: "ATS webhook", body: "Advance stage on BOOK disposition." },
      { title: "Add T-24 reminder", body: "Optional appointment reminder for interview day." },
    ],
    related: [
      { name: "Interview scheduling", href: "/use-cases/interview-scheduling" },
      { name: "Recruitment screening script", href: "/templates/recruitment-screening-script" },
      { name: "Appointment reminder script", href: "/templates/appointment-reminder-script" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
    ],
    faqs: [
      { q: "Candidate consent for scheduling calls?", a: "Consent from application process. Recording disclosure and opt-out in script." },
      { q: "TRAI compliance?", a: "Service template for active recruitment relationship with prior consent." },
      { q: "Reschedule on call?", a: "Yes — agent offers two new slots if candidate cannot make original time." },
      { q: "Video link included?", a: "Calendar invite carries Zoom/Meet link from recruiter template." },
      { q: "Opt-out?", a: "Suppress automated calls; recruiter may email per HR policy." },
    ],
    scriptTitle: "Full interview scheduling script (English)",
    scriptExcerpt: `Agent: Hi, this is Ananya from TechCorp HR — congratulations on passing the phone screen. This call may be recorded. I'd like to schedule your technical interview. Do you have a minute?
Customer: Yes, please.
Agent: We have Tuesday 2 PM or Wednesday 11 AM available — both are 45-minute video calls. Which works?
Customer: Wednesday 11 AM.
Agent: Confirmed — Wednesday 11 AM IST, video link included. I'll send a calendar invite to the email on your application. Anything that would prevent you from attending?
Customer: No, I'll be there.
Agent: If you'd prefer not to receive future automated HR calls, tell me now.
Customer: Automated calls are fine.
Agent: Perfect — invite sent. Good luck preparing.`,
    tableRows: [
      ["BOOK", "Interview scheduled", "Send invite; update ATS stage"],
      ["RESCH", "Rescheduled on call", "Cancel old slot; send new invite"],
      ["DECLINE", "Candidate withdrew", "Close application; polite SMS"],
      ["CALLBK", "Needs to check calendar", "Retry in 24 hr with two new slots"],
      ["OPT_OUT", "Stop automated calls", "Email-only scheduling"],
    ],
    ctaTitle: "Schedule interviews without",
    ctaAccent: "email ping-pong",
    ctaBody: "Deploy this scheduling script on your qualified candidate queue and measure time-to-interview.",
  },
  {
    slug: "education-admission-script",
    name: "Education Admission Script",
    metaDescription:
      "Admission enquiry follow-up AI call script for schools and coaching centers in India. Course fit, demo class booking, TRAI consent, and opt-out.",
    headline: "Education admission script that converts enquiries to demos",
    subcopy:
      "Follow up on admission forms and walk-in enquiries — confirm course fit, book campus visit or demo class, and hand hot parents to counsellors with context.",
    chips: ["Demo booking", "Course fit", "Parent outreach", "Multilingual"],
    stats: [
      { value: "32%", label: "Demo class booking rate on connected calls" },
      { value: "3×", label: "Faster follow-up vs next-day manual" },
      { value: "15", label: "Script turns" },
      { value: "3", label: "Languages — Telugu, Hindi, English" },
    ],
    problem:
      "Admission season floods coaching centers with enquiries. Manual counsellors cannot call every lead same day — competitors do.",
    currentSteps: [
      "Form submitted — callback happens 24–48 hours later.",
      "Counsellor asks different questions each time.",
      "Demo slots offered inconsistently.",
      "Fee discussion before fit assessment.",
      "No opt-out on promotional admission campaigns.",
    ],
    aiSteps: [
      "Trigger on form submit or walk-in CRM entry.",
      "Agent confirms student class, target exam, and batch preference.",
      "Offer two demo class or campus visit slots.",
      "Warm-transfer hot leads to senior counsellor.",
      "Log disposition; honor opt-out.",
    ],
    benefits: [
      { title: "Speed-to-lead", body: "Call within minutes during admission peak." },
      { title: "Structured fit check", body: "Class, board, and exam goal captured every time." },
      { title: "Demo fill rate", body: "Same-call slot booking reduces drop-off." },
      { title: "Language comfort", body: "Telugu and Hindi for tier-2 city parents." },
    ],
    roi: [
      { value: "32%", label: "Demo booking on connected calls" },
      { value: "+28%", label: "Enrolment conversion vs delayed callback" },
      { value: "₹15–₹30", label: "Cost per connected admission call" },
    ],
    implementation: [
      { title: "Connect CRM", body: "Form tool or sheet upload for enquiry trigger." },
      { title: "Demo calendar", body: "Batch-wise demo slots with capacity limits." },
      { title: "Counsellor handoff", body: "Hot leads transfer with student profile summary." },
      { title: "Peak season pilot", body: "Run during admission window; measure demo show rate." },
    ],
    related: [
      { name: "Education admissions", href: "/use-cases/education-admissions" },
      { name: "Education", href: "/industries/education" },
      { name: "Lead follow-up script", href: "/templates/lead-follow-up-script" },
      { name: "Event reminder script", href: "/templates/event-reminder-script" },
    ],
    faqs: [
      { q: "TRAI for admission marketing calls?", a: "Promotional DLT template with consent from form opt-in. Disclosure and opt-out required." },
      { q: "Can AI guarantee admission or rank?", a: "Never — no outcome promises. Script books demos and captures fit only." },
      { q: "Fee quotes on call?", a: "Share approved fee sheet ranges only — detailed negotiation with counsellor." },
      { q: "Calling minors?", a: "Prefer parent/guardian contact from form; verify authority on call." },
      { q: "Opt-out?", a: "Immediate suppression from admission campaigns." },
    ],
    scriptTitle: "Full admission script (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main Bright Academy se Ananya bol rahi hoon — aapne NEET 2026 batch ke liye enquiry ki thi. Yeh call record ho sakti hai. Do minute baat ho sakti hai?
Customer: Haan, bete ke liye dekh rahe hain — Class 12.
Agent: Achha. Aapka target NEET 2026 hai? Batch timing morning ya evening prefer karenge?
Customer: Evening, PCB stream.
Agent: Kal shaam 5 baje demo class hai ya parso 11 baje — kya suit karega?
Customer: Kal 5 baje theek hai.
Agent: Confirm — kal 5 PM demo, NEET evening batch. SMS bhej diya. Agar aap future admission calls nahi chahte, abhi bol dijiye.
Customer: Nahi, theek hai.
Agent: Kal milte hain — dhanyavaad.`,
    tableRows: [
      ["DEMO", "Demo class booked", "Send SMS; remind T-24"],
      ["VISIT", "Campus visit booked", "Counsellor assignment; directions SMS"],
      ["HOT", "Ready to enrol", "Transfer to senior counsellor"],
      ["COLD", "Not fit or not interested", "Nurture or close lost"],
      ["OPT_OUT", "Stop admission calls", "Suppress promotional dials"],
    ],
    ctaTitle: "Fill demo classes with",
    ctaAccent: "fast admission follow-up",
    ctaBody: "Run this admission script on peak-season enquiries and compare demo show rate to manual callback.",
  },
  {
    slug: "real-estate-site-visit-script",
    name: "Real Estate Site Visit Script",
    metaDescription:
      "Real estate site visit confirmation AI call script for India. Qualify buyer, confirm visit slot, send directions with TRAI consent, disclosure, and opt-out.",
    headline: "Site visit script that confirms serious buyers",
    subcopy:
      "Call portal leads to qualify budget and timeline, confirm site visit slot, and send location pin — reduce broker time wasted on casual walk-ins.",
    chips: ["Visit confirm", "Buyer qualify", "Directions SMS", "Broker handoff"],
    stats: [
      { value: "44%", label: "Visit show rate uplift vs unconfirmed leads" },
      { value: "61%", label: "Budget captured on connected calls" },
      { value: "16", label: "Script turns" },
      { value: "2", label: "Visit slots offered per call" },
    ],
    problem:
      "Real estate brokers drive to site visits that no-show or were never serious. Portal leads go cold before anyone calls back.",
    currentSteps: [
      "Lead from 99acres — broker calls next day.",
      "Visit scheduled on WhatsApp — no formal confirm.",
      "Buyer no-shows without cancellation.",
      "Budget and timeline unknown until visit.",
      "No compliance language on outbound dials.",
    ],
    aiSteps: [
      "Trigger on portal lead or website form.",
      "Qualify budget band, timeline, and configuration need.",
      "Offer two site visit slots with project name.",
      "Send Google Maps pin and broker contact SMS.",
      "T-24 voice confirm; honor opt-out.",
    ],
    benefits: [
      { title: "Qualified visits", body: "Budget and timeline captured before broker drives out." },
      { title: "Higher show rate", body: "Voice confirmation beats WhatsApp maybe." },
      { title: "Broker prep", body: "Rep arrives knowing configuration and budget band." },
      { title: "Compliance", body: "DLT promotional consent with disclosure and opt-out." },
    ],
    roi: [
      { value: "44%", label: "Visit show rate uplift" },
      { value: "3 hrs", label: "Broker time saved daily on no-shows" },
      { value: "+19%", label: "Token conversion on qualified visits" },
    ],
    implementation: [
      { title: "Portal webhook", body: "Connect 99acres, MagicBricks, or website CRM." },
      { title: "Visit calendar", body: "Project-wise slot capacity with broker assignment." },
      { title: "Qualify thresholds", body: "Min budget band before booking visit." },
      { title: "T-24 confirm", body: "Pair with appointment reminder script." },
    ],
    related: [
      { name: "Real estate site visit", href: "/use-cases/real-estate-site-visit" },
      { name: "Real estate", href: "/industries/real-estate" },
      { name: "Lead qualification script", href: "/templates/lead-qualification-script" },
      { name: "Appointment reminder script", href: "/templates/appointment-reminder-script" },
    ],
    faqs: [
      { q: "RERA compliance on calls?", a: "Script avoids unregistered project claims — broker handles RERA disclosures on visit. No guaranteed returns." },
      { q: "TRAI for property marketing?", a: "Promotional template with form consent. Opt-out immediate." },
      { q: "Investment advice?", a: "Never — no ROI or appreciation promises. Logistics and visit booking only." },
      { q: "Can AI negotiate price?", a: "No — price discussion with licensed broker on site." },
      { q: "Opt-out?", a: "Suppress from all property promotional campaigns." },
    ],
    scriptTitle: "Full site visit script (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, nenu Green Valley Homes nundi Ananya matladutunnanu — mee 3BHK enquiry gurinchi. Ee call record avachu. Rendu nimishalu matladacha?
Customer: Avunu, Gachibowli lo chustunnam.
Agent: Mee budget roughly entha? Possession eppudu kavali?
Customer: 1.2 crore, one year lo.
Agent: Ee Saturday 10 AM leda Sunday 4 PM site visit ki available unda?
Customer: Saturday 10 AM okay.
Agent: Confirm — Saturday 10 AM, Green Valley sample flat. SMS lo location pin pampanu. Future lo ma calls kavali ante cheppandi; ippude chepthe stop chestam.
Customer: Site visit calls okay, marketing vaddu.
Agent: Ardam ayyindi. Saturday kaluddam.`,
    tableRows: [
      ["VISIT", "Site visit confirmed", "SMS pin; assign broker; T-24 remind"],
      ["RESCH", "Visit rescheduled", "Update calendar; notify broker"],
      ["NOFIT", "Budget/timeline mismatch", "Send brochure; nurture sequence"],
      ["NOSHOW", "Confirmed but missed", "Trigger recovery call same day"],
      ["OPT_OUT", "Stop promo calls", "Suppress DLT promotional list"],
    ],
    ctaTitle: "Confirm site visits with",
    ctaAccent: "qualified buyers",
    ctaBody: "Deploy this site visit script on portal leads for two weekends and measure show rate vs unconfirmed.",
  },
  {
    slug: "hotel-reservation-script",
    name: "Hotel Reservation Script",
    metaDescription:
      "Hotel booking confirmation AI call script for India. Stay details, early check-in, upsell with service template, disclosure, and opt-out.",
    headline: "Hotel reservation script that confirms guests before arrival",
    subcopy:
      "Call confirmed bookings T-1 — verify arrival time, special requests, and optional upsell. Reduce no-shows and prep front desk with guest preferences.",
    chips: ["T-1 confirm", "Arrival time", "Special requests", "Upsell optional"],
    stats: [
      { value: "−21%", label: "No-show rate on confirmed bookings" },
      { value: "73%", label: "Early check-in requests captured on call" },
      { value: "14", label: "Script turns" },
      { value: "12%", label: "Upsell attach rate on connected calls" },
    ],
    problem:
      "Hotels hold inventory for no-shows during peak season. Email confirmations go unread; front desk learns preferences only at check-in.",
    currentSteps: [
      "Booking confirmed online — no pre-arrival contact.",
      "Guest no-shows — room goes unsold same day.",
      "Special requests buried in OTA notes.",
      "Upsell only at check-in — too late for spa prep.",
      "No opt-out on pre-stay promotional calls.",
    ],
    aiSteps: [
      "Pull T-1 arrival list from PMS.",
      "Agent confirms guest name, dates, and arrival window.",
      "Capture special requests — bed type, airport pickup.",
      "Offer approved upsell — breakfast, late checkout.",
      "Log disposition; honor opt-out from promo calls.",
    ],
    benefits: [
      { title: "No-show reduction", body: "Voice confirm secures commitment before arrival day." },
      { title: "Front desk prep", body: "Requests logged before guest walks in." },
      { title: "Revenue upsell", body: "Spa and breakfast offers pre-arrival." },
      { title: "OTA and direct", body: "Works for both booking channels." },
    ],
    roi: [
      { value: "−21%", label: "No-show reduction" },
      { value: "₹1,800", label: "Average upsell revenue per attached call" },
      { value: "94%", label: "Guest satisfaction on pre-arrival call pilots" },
    ],
    implementation: [
      { title: "PMS integration", body: "Connect Cloudbeds, Oracle OPERA, or custom PMS." },
      { title: "Upsell catalog", body: "Pre-approved add-ons with dynamic pricing rules." },
      { title: "Call window", body: "T-1 between 4–7 PM local property time." },
      { title: "Measure no-show", body: "Compare confirmed-call cohort vs control." },
    ],
    related: [
      { name: "Hotel reservations", href: "/use-cases/hotel-reservations" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Restaurant booking script", href: "/templates/restaurant-booking-script" },
      { name: "Event reminder script", href: "/templates/event-reminder-script" },
    ],
    faqs: [
      { q: "TRAI for hotel confirmation calls?", a: "Service transactional template for active reservation relationship. Promo upsell needs separate consent." },
      { q: "OTA guest contact?", a: "Use phone from booking; respect OTA communication policies." },
      { q: "Payment on call?", a: "Send secure payment link for upsell — no card capture on voice." },
      { q: "Cancellation on call?", a: "Agent explains policy and logs cancel disposition — human may confirm charges." },
      { q: "Opt-out?", a: "Stops promotional pre-stay calls; transactional confirm may still apply per policy." },
    ],
    scriptTitle: "Full hotel reservation script (English)",
    scriptExcerpt: `Agent: Good evening, I'm calling from Seaside Resort to confirm your reservation arriving tomorrow. This call may be recorded. Is this Mr. Sharma?
Customer: Yes, that's me.
Agent: We have you for one deluxe room, March 12–14, booking reference SR-8842. What time do you expect to arrive?
Customer: Around 3 PM, maybe earlier if flight is on time.
Agent: I've noted early arrival request — we'll text if room is ready sooner. Would you like to add breakfast for two at ₹899 per day?
Customer: Yes, add breakfast both days.
Agent: Done — updated total sent by SMS. If you'd prefer not to receive promotional pre-stay calls in future, tell me now.
Customer: Confirmations only, no promos.
Agent: Understood. We look forward to welcoming you tomorrow.`,
    tableRows: [
      ["CONF", "Arrival confirmed", "Update PMS; prep front desk"],
      ["UPSELL", "Add-on purchased", "Charge link sent; confirm in PMS"],
      ["EARLY", "Early check-in request", "Flag housekeeping priority"],
      ["CANCEL", "Cancellation requested", "Transfer to front desk for policy"],
      ["OPT_OUT", "Stop promo calls", "Transactional confirm only"],
    ],
    ctaTitle: "Reduce no-shows with",
    ctaAccent: "pre-arrival confirmation",
    ctaBody: "Run this hotel script T-1 on next week's arrivals and measure no-show rate delta.",
  },
  {
    slug: "restaurant-booking-script",
    name: "Restaurant Booking Script",
    metaDescription:
      "Restaurant table reservation AI call script for India. Party size, slot confirm, special requests with service template, disclosure, and opt-out.",
    headline: "Restaurant booking script that fills tables reliably",
    subcopy:
      "Confirm reservations, capture party size and dietary notes, and reduce empty tables from no-shows — natural voice beats SMS for premium dining.",
    chips: ["Table confirm", "Party size", "Dietary notes", "T-2 reminder"],
    stats: [
      { value: "−27%", label: "Reservation no-shows with voice confirm" },
      { value: "81%", label: "Special requests captured on call" },
      { value: "12", label: "Script turns" },
      { value: "90 sec", label: "Average call duration" },
    ],
    problem:
      "Restaurants hold prime tables for no-shows on busy nights. Hosts lack time to call every reservation; SMS confirmations get ignored.",
    currentSteps: [
      "Online booking — no confirmation call.",
      "Party of 8 no-shows on Saturday — revenue lost.",
      "Allergy info missing until guest arrives.",
      "Waitlist not backfilled when cancel happens late.",
      "Walk-ins turned away for held no-show tables.",
    ],
    aiSteps: [
      "Trigger T-2 or same-day for high-cover bookings.",
      "Agent confirms name, party size, time, and occasion.",
      "Capture dietary restrictions and seating preference.",
      "Offer to release table if plans changed — backfill waitlist.",
      "Log disposition; honor opt-out from promo calls.",
    ],
    benefits: [
      { title: "No-show cut", body: "Voice commitment reduces empty tables on peak nights." },
      { title: "Kitchen prep", body: "Allergy and dietary notes before service." },
      { title: "Waitlist fill", body: "Same-call cancel releases slot to waitlist campaign." },
      { title: "Premium CX", body: "Personal touch for fine dining and cloud kitchen pop-ups." },
    ],
    roi: [
      { value: "−27%", label: "No-show rate" },
      { value: "₹4,200", label: "Average recovered revenue per saved Saturday table" },
      { value: "2 days", label: "Setup from template to live calls" },
    ],
    implementation: [
      { title: "Booking system sync", body: "Connect Dineout, EazyDiner, or custom reservation tool." },
      { title: "Cover threshold", body: "Call parties of 4+ or high-demand time slots first." },
      { title: "Waitlist integration", body: "Auto-offer released slots to waitlist script." },
      { title: "Peak night pilot", body: "Run Friday–Saturday for two weeks." },
    ],
    related: [
      { name: "Restaurant booking", href: "/use-cases/restaurant-booking" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Hotel reservation script", href: "/templates/hotel-reservation-script" },
      { name: "Appointment reminder script", href: "/templates/appointment-reminder-script" },
    ],
    faqs: [
      { q: "TRAI for reservation calls?", a: "Service transactional template for guests with active booking. Disclosure and opt-out included." },
      { q: "Menu or health advice?", a: "No — capture dietary restrictions only; allergen details confirmed by staff on arrival." },
      { q: "Deposit collection?", a: "Send payment link for large-party deposit — no card on voice." },
      { q: "Same-day bookings?", a: "Trigger confirm call within 30 minutes of online book." },
      { q: "Opt-out?", a: "Suppress promo/event calls; booking confirmations per policy." },
    ],
    scriptTitle: "Full restaurant booking script (English)",
    scriptExcerpt: `Agent: Hello, I'm calling from Spice Route to confirm your table reservation this Saturday at 8 PM. This call may be recorded. Is this Priya?
Customer: Yes, party of six.
Agent: Perfect — six guests, Saturday 8 PM, indoor seating. Any dietary restrictions or allergies we should prepare for?
Customer: Two guests are vegetarian, one nut allergy.
Agent: Noted — nut-free prep for one guest. Still planning to join us at 8?
Customer: Yes, confirmed.
Agent: If your plans change, please call us — we'll release the table. Prefer not to receive future promotional calls from us? Say so now.
Customer: No promos, thanks.
Agent: Done. See you Saturday — thank you.`,
    tableRows: [
      ["CONF", "Table confirmed", "Update reservation; kitchen notes"],
      ["CANCEL", "Cancelled on call", "Release table; trigger waitlist"],
      ["RESCH", "Time changed", "Update booking; SMS confirm"],
      ["NOTES", "Special request added", "Flag service team"],
      ["OPT_OUT", "Stop promo calls", "Booking confirms only"],
    ],
    ctaTitle: "Fill more tables with",
    ctaAccent: "reservation confirms",
    ctaBody: "Run this restaurant script on weekend reservations and measure no-show rate vs SMS-only.",
  },
  {
    slug: "payment-link-script",
    name: "Payment Link Script",
    metaDescription:
      "Payment link collection AI call script for India. Send secure UPI or payment URL on call with TRAI service template, no card capture, disclosure, and opt-out.",
    headline: "Payment link script that collects without card-on-phone",
    subcopy:
      "Call with amount due, send secure payment link via SMS while on phone, confirm receipt — never capture card, CVV, or OTP on voice. PCI-safe and TRAI-compliant.",
    chips: ["SMS payment link", "UPI ready", "No card capture", "PCI safe"],
    stats: [
      { value: "31%", label: "Payment completion within 24 hr of link send" },
      { value: "0", label: "Card or OTP capture in template" },
      { value: "13", label: "Script turns" },
      { value: "TRAI", label: "Service transactional template" },
    ],
    problem:
      "Teams chase payments over phone but capturing card details on voice is unsafe and non-compliant. SMS links get sent without confirmation the customer received them.",
    currentSteps: [
      "Agent reads bank details — customer distrusts.",
      "Payment link emailed — never opened.",
      "No confirmation customer received SMS.",
      "Follow-up calls lack structured disposition.",
      "Card numbers spoken on recorded lines — PCI risk.",
    ],
    aiSteps: [
      "Agent states amount due, purpose, and recording disclosure.",
      "Confirm customer mobile for SMS link delivery.",
      "Send secure payment link while customer on phone.",
      "Wait for confirm-received; offer to stay on line until paid.",
      "Log PAID or PTP disposition; honor opt-out.",
    ],
    benefits: [
      { title: "PCI safe", body: "Zero card, CVV, or OTP capture on voice — link only." },
      { title: "Instant delivery", body: "Customer confirms SMS received during call." },
      { title: "Higher conversion", body: "Voice nudge plus link beats email invoice alone." },
      { title: "Reconciliation", body: "Payment webhook closes disposition automatically." },
    ],
    roi: [
      { value: "31%", label: "24-hour payment completion after link send" },
      { value: "−90%", label: "PCI exposure vs card-on-phone" },
      { value: "₹12", label: "Cost per payment reminder call" },
    ],
    implementation: [
      { title: "Payment gateway", body: "Razorpay, PayU, or Cashfree link API integration." },
      { title: "Amount from ERP", body: "Pull open invoice or EMI due from billing system." },
      { title: "Webhook close", body: "Auto-set PAID disposition on successful payment." },
      { title: "Pilot overdue cohort", body: "Compare collection rate vs email invoice only." },
    ],
    related: [
      { name: "Payment recovery", href: "/use-cases/payment-recovery" },
      { name: "EMI reminder script", href: "/templates/emi-reminder-script" },
      { name: "Collection call script", href: "/templates/collection-call-script" },
      { name: "Finance", href: "/industries/finance" },
    ],
    faqs: [
      { q: "PCI compliance?", a: "Never capture card number, CVV, or OTP on voice. Payment completes only via secure hosted link." },
      { q: "TRAI template type?", a: "Service transactional for existing customer or borrower relationship with consent." },
      { q: "UPI vs card link?", a: "Configure gateway for UPI deep link, net banking, or card — customer chooses on secure page." },
      { q: "Investment or insurance premium?", a: "State amount from system only — no product advice. Insurance handoff for coverage questions." },
      { q: "Opt-out?", a: "Suppress reminder calls; legally required payment notices may continue per policy." },
    ],
    scriptTitle: "Full payment link script (Hindi)",
    scriptExcerpt: `Agent: Namaste, main ABC Services se bol rahi hoon — aapke invoice INV-4421 par ₹5,600 baaki hai. Yeh call record ho sakti hai. Ek minute mil sakta hai?
Customer: Haan, abhi pay kar deta hoon.
Agent: Main aapke registered mobile par secure payment link SMS kar rahi hoon — UPI ya card se pay kar sakte hain. Link aaya?
Customer: Haan, aa gaya.
Agent: Main line par hoon — jab payment complete ho jaye to batayiye. Card number ya OTP mujhe mat batayiye.
Customer: Ho gaya, payment successful dikha raha hai.
Agent: Confirm — payment receive ho gaya. Receipt SMS bhej di. Agar aap future payment reminder calls band karna chahte hain, abhi keh dijiye.
Customer: Reminders theek hain.
Agent: Dhanyavaad. Namaste.`,
    tableRows: [
      ["PAID", "Payment completed on call", "Close invoice; send receipt SMS"],
      ["LINK", "Link sent, pending", "Retry reminder in 24 hr"],
      ["PTP", "Will pay later", "Schedule follow-up; resend link"],
      ["DISPUTE", "Disputes amount", "Transfer to billing support"],
      ["OPT_OUT", "Stop reminder calls", "Suppress per DLT and policy"],
    ],
    ctaTitle: "Collect payments safely with",
    ctaAccent: "voice plus link",
    ctaBody: "Deploy this payment link script on open invoices and measure 24-hour completion vs email-only.",
  },
  {
    slug: "event-reminder-script",
    name: "Event Reminder Script",
    metaDescription:
      "Event and webinar reminder AI call script for India. T-24 attendance confirm with TRAI consent, disclosure, opt-out, and RSVP disposition codes.",
    headline: "Event reminder script that fills seats and webinars",
    subcopy:
      "Remind registrants before your event — confirm attendance, send calendar link, and backfill from waitlist when someone cancels. Promotional consent and opt-out required.",
    chips: ["T-24 reminder", "RSVP confirm", "Waitlist backfill", "Webinar"],
    stats: [
      { value: "+23%", label: "Show rate vs email reminder only" },
      { value: "67%", label: "Confirm-on-call for paid events" },
      { value: "14", label: "Script turns" },
      { value: "TRAI", label: "Promo or service template per consent" },
    ],
    problem:
      "Event registrants forget or no-show — especially free webinars. Email reminders have low open rates; manual reminder calls do not scale.",
    currentSteps: [
      "Registration captured — no reminder until email blast.",
      "30% webinar attendance typical for email-only.",
      "Waitlist not notified when seat opens.",
      "No opt-out on event promo series.",
      "Venue over/under capacity from poor confirm data.",
    ],
    aiSteps: [
      "Pull T-24 registrant list from event platform.",
      "Agent confirms event name, time, and virtual vs venue.",
      "Confirm attendance or release seat to waitlist.",
      "Send SMS with map link or webinar URL.",
      "Honor opt-out from future event promos.",
    ],
    benefits: [
      { title: "Higher show rate", body: "Voice confirm beats passive email RSVP." },
      { title: "Waitlist automation", body: "Cancel on call triggers waitlist invite immediately." },
      { title: "Venue accuracy", body: "Headcount confirmed before catering and seating." },
      { title: "Webinar join boost", body: "Reminder plus link on phone reduces login friction." },
    ],
    roi: [
      { value: "+23%", label: "Attendance vs email-only" },
      { value: "₹850", label: "Value per filled seat at paid workshops" },
      { value: "−40%", label: "Catering waste from over-count" },
    ],
    implementation: [
      { title: "Event platform sync", body: "Connect Zoom, Townscript, or custom registration API." },
      { title: "T-24 window", body: "Call evening before morning events; morning before evening." },
      { title: "Waitlist campaign", body: "Auto-dial waitlist on CANCEL disposition." },
      { title: "Measure show rate", body: "Compare voice-reminded vs email-only cohorts." },
    ],
    related: [
      { name: "Event reminders", href: "/use-cases/event-reminders" },
      { name: "Education admission script", href: "/templates/education-admission-script" },
      { name: "Appointment reminder script", href: "/templates/appointment-reminder-script" },
      { name: "Campaign management", href: "/features/campaign-management" },
    ],
    faqs: [
      { q: "TRAI for event reminder calls?", a: "Promotional template if marketing event; service template if paid ticket confirmation. Consent and opt-out required." },
      { q: "Political rallies or campaigns?", a: "Use political-outreach-script with separate compliance review — not this generic event template." },
      { q: "Send webinar link on call?", a: "Yes — SMS with join URL while confirming attendance." },
      { q: "Paid event refunds on cancel?", a: "Agent logs cancel disposition — refund policy handled by human or self-serve." },
      { q: "Opt-out scope?", a: "Suppress future event promotional calls; transactional ticket emails may continue." },
    ],
    scriptTitle: "Full event reminder script (English)",
    scriptExcerpt: `Agent: Hi, I'm Ananya calling from TechSummit — you registered for tomorrow's AI workshop at 10 AM. This call may be recorded. Do you still plan to attend?
Customer: Yes, I'll be there.
Agent: Great — it's at HICC Hyderabad, Hall B. I'll SMS the map pin and your QR pass now.
Customer: Is parking available?
Agent: Yes — basement parking included with registration. Anything else?
Customer: All set.
Agent: If you'd prefer not to receive future event promotional calls from us, tell me now.
Customer: Event updates are fine, no sales promos.
Agent: Noted. See you tomorrow at 10 AM — thank you.`,
    tableRows: [
      ["ATTEND", "Confirmed attending", "Send map/QR SMS; check-in prep"],
      ["CANCEL", "Not attending", "Release seat; trigger waitlist"],
      ["MAYBE", "Uncertain", "SMS reminder morning-of; soft confirm"],
      ["LINK", "Webinar link resent", "Log virtual join support"],
      ["OPT_OUT", "Stop event promos", "Suppress marketing event dials"],
    ],
    ctaTitle: "Boost event attendance with",
    ctaAccent: "voice reminders",
    ctaBody: "Run this event reminder script T-24 on your next registration list and measure show rate.",
  },
  {
    slug: "ai-receptionist-script",
    name: "AI Receptionist Script",
    metaDescription:
      "AI receptionist phone script template for Indian businesses. Greet, route, book appointments, and capture messages with disclosure, opt-out, and escalation.",
    headline: "AI receptionist script that answers like your front desk",
    subcopy:
      "Replace hold music with intelligent greeting — route by department, book appointments, capture messages, and warm-transfer when needed. Disclosure and after-hours coverage included.",
    chips: ["24/7 answer", "Route by intent", "Book appointment", "Warm transfer"],
    stats: [
      { value: "68%", label: "Calls contained without human in SMB pilots" },
      { value: "0 sec", label: "Hold time on answered AI receptionist" },
      { value: "18", label: "Script turns with routing branches" },
      { value: "24/7", label: "Coverage including holidays" },
    ],
    problem:
      "Small businesses miss calls when front desk is busy or closed. Generic IVR frustrates callers; voicemail loses leads.",
    currentSteps: [
      "Phone rings — staff busy with walk-in.",
      "Caller gets voicemail — hangs up, calls competitor.",
      "IVR press-1 maze — caller presses 0 repeatedly.",
      "After-hours calls go unanswered.",
      "No logging of missed call intent.",
    ],
    aiSteps: [
      "Agent answers with brand greeting and recording disclosure.",
      "Identify intent — book, support, billing, speak to person.",
      "Book appointment or capture message with callback number.",
      "Warm-transfer urgent or VIP callers per rules.",
      "Log disposition and offer opt-out from marketing callbacks.",
    ],
    benefits: [
      { title: "Never miss a ring", body: "Every call answered in under two rings, 24/7." },
      { title: "Smart routing", body: "Intent-based transfer — not digit hunting." },
      { title: "Appointment book", body: "Same-call slot booking from calendar integration." },
      { title: "Lead capture", body: "After-hours enquiries logged with full context." },
    ],
    roi: [
      { value: "68%", label: "Call containment without human" },
      { value: "+35%", label: "Lead capture vs voicemail-only" },
      { value: "₹8K", label: "Monthly saved vs part-time receptionist" },
    ],
    implementation: [
      { title: "Port main DID", body: "Route business line to SvaraCall AI receptionist." },
      { title: "Define departments", body: "Sales, support, billing transfer numbers and hours." },
      { title: "Calendar connect", body: "Booking branch syncs available slots." },
      { title: "Test every path", body: "Dial each intent branch before go-live." },
    ],
    related: [
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Knowledge base", href: "/features/knowledge-base" },
    ],
    faqs: [
      { q: "TRAI for inbound receptionist?", a: "Inbound answering has no outbound DLT requirement. Outbound callbacks from messages need consent and registered templates." },
      { q: "Recording disclosure?", a: "Required at greeting per script — standard for business recorded lines in India." },
      { q: "Medical or legal intake?", a: "Route clinical and legal intake to licensed staff — AI captures message and urgency flag only." },
      { q: "Can it quote prices?", a: "Share approved rate card ranges only — complex quotes transfer to human." },
      { q: "Marketing callback opt-out?", a: "If receptionist returns marketing calls, opt-out captured and honored per DLT." },
    ],
    scriptTitle: "Full AI receptionist script (English)",
    scriptExcerpt: `Agent: Thank you for calling City Dental — I'm Ananya, the virtual receptionist. This call may be recorded. How can I help you today?
Customer: I need to book a cleaning appointment.
Agent: I'd be happy to help. Are you a new patient or returning?
Customer: Returning — last visit was six months ago.
Agent: I have Thursday 11 AM or Friday 3 PM available with Dr. Mehta. Which works?
Customer: Thursday 11 AM.
Agent: Booked — Thursday 11 AM cleaning with Dr. Mehta. Confirmation SMS sent. Would you like to speak to someone now?
Customer: No, that's all.
Agent: If you'd prefer we don't call you for promotional offers, say so now.
Customer: No promotional calls please.
Agent: Understood — promotional calls stopped. See you Thursday.`,
    tableRows: [
      ["BOOK", "Appointment booked", "Update calendar; SMS confirm"],
      ["TRANS", "Transferred to human", "Warm transfer with intent summary"],
      ["MSG", "Message captured", "Create callback task for staff"],
      ["FAQ", "FAQ answered tier-1", "Log topic; close if resolved"],
      ["OPT_OUT", "No promo callbacks", "Suppress marketing outbound"],
    ],
    ctaTitle: "Answer every call with",
    ctaAccent: "AI reception",
    ctaBody: "Port your main line to this receptionist script and measure lead capture vs voicemail baseline.",
  },
  {
    slug: "political-outreach-script",
    name: "Political Outreach Script",
    metaDescription:
      "Political campaign voter outreach AI call script template for India. Neutral informational tone, TRAI promotional consent, disclosure, opt-out, and no persuasion guarantees.",
    headline: "Political outreach script with compliance-first design",
    subcopy:
      "Voter information calls — event invite, survey, or volunteer ask — with mandatory disclosure, instant opt-out, and content reviewed for election commission norms. No false claims or opponent attacks in template.",
    chips: ["Voter info", "Survey branch", "Strict opt-out", "Legal review required"],
    stats: [
      { value: "100%", label: "Opt-out offered on every call in template" },
      { value: "0", label: "Opponent attack language in base script" },
      { value: "16", label: "Script turns with survey branch" },
      { value: "Legal", label: "Requires campaign legal sign-off before use" },
    ],
    problem:
      "Campaigns need scale for voter outreach but manual call centers deliver inconsistent scripts, miss opt-outs, and risk EC and TRAI violations.",
    currentSteps: [
      "Volunteers use different talking points — message drift.",
      "DND and opt-out requests ignored on repeated dials.",
      "No recording disclosure on some campaign calls.",
      "Opposition research lines cross into disinformation risk.",
      "No centralized disposition for field team follow-up.",
    ],
    aiSteps: [
      "Dial consented voter list on DLT-registered promotional template.",
      "Agent identifies campaign, states disclosure, and informational purpose.",
      "Deliver approved script — event invite, survey, or volunteer ask.",
      "Capture survey response or volunteer interest disposition.",
      "Instant opt-out suppresses number for remainder of campaign.",
    ],
    benefits: [
      { title: "Message discipline", body: "One approved script — no volunteer improvisation." },
      { title: "Opt-out compliance", body: "Every call offers immediate DNC per TRAI." },
      { title: "Scale with governance", body: "Thousands of calls with centralized logging." },
      { title: "Field team intel", body: "Survey dispositions feed volunteer walk lists." },
    ],
    roi: [
      { value: "10×", label: "Reach vs volunteer-only phone bank" },
      { value: "−60%", label: "Complaint risk when opt-out is systematic" },
      { value: "48 hr", label: "Deploy after legal and DLT template approval" },
    ],
    implementation: [
      { title: "Legal review", body: "Election counsel approves script for EC norms in your state." },
      { title: "DLT registration", body: "Promotional template and header registered before any dial." },
      { title: "Consented list only", body: "Scrub against DND; honor party opt-out registry." },
      { title: "Monitor dispositions", body: "Daily review of OPT_OUT and complaint flags." },
    ],
    related: [
      { name: "Political outreach", href: "/use-cases/political-outreach" },
      { name: "Citizen outreach", href: "/use-cases/citizen-outreach" },
      { name: "Feedback NPS script", href: "/templates/feedback-nps-script" },
      { name: "TRAI compliance", href: "/compliance" },
    ],
    faqs: [
      { q: "Is AI political calling legal in India?", a: "Subject to TRAI/DLT promotional rules, consent, opt-out, and Election Commission guidelines for your election type and state. Legal review mandatory before use." },
      { q: "TRAI and DND?", a: "Dial only consented numbers on registered templates. Offer opt-out on every call; suppress immediately across campaign." },
      { q: "Can script attack opponents?", a: "Base template excludes opponent attacks and unverified claims. Any comparative content requires separate legal approval." },
      { q: "Investment or policy promises?", a: "No guaranteed outcomes — informational and survey language only unless counsel approves specific factual statements with sources." },
      { q: "Recording disclosure?", a: "Required at call open per script. Retention policy must align with campaign privacy rules." },
    ],
    scriptTitle: "Full political outreach script (Hindi)",
    scriptExcerpt: `Agent: Namaste, main [Campaign Name] se bol rahi hoon — aapke area ke voter information ke liye call kar rahi hoon. Yeh call record ho sakti hai. Kya main aapke saath ek minute share kar sakti hoon?
Customer: Haan, boliye.
Agent: 15 March ko aapke ward mein town hall hai — local issues par baat hogi, subah 10 baje community hall mein. Kya aap aane mein interested hain?
Customer: Shayad, time mila to aaunga.
Agent: Ek chhota survey — aapke liye sabse important issue kya hai: sadak, paani, ya rozgar?
Customer: Paani ki problem zyada hai.
Agent: Dhanyavaad — note kar liya. Agar aap future mein hamari kisi bhi call ko nahi chahte, to abhi keh dijiye — hum aapka number turant hata denge.
Customer: Election ke baad calls band kar dena.
Agent: Theek hai — campaign calls ke baad suppress kar denge. Town hall ki details SMS par bhej di hain. Dhanyavaad.`,
    tableRows: [
      ["EVENT", "Interested in event", "Send invite SMS; field team flag"],
      ["SURVEY", "Survey completed", "Log issue code for analytics"],
      ["VOL", "Volunteer interest", "Transfer to volunteer coordinator"],
      ["DECLINE", "Not interested", "No redial this campaign cycle"],
      ["OPT_OUT", "Do not call again", "Permanent suppress; DND sync"],
    ],
    ctaTitle: "Run compliant outreach with",
    ctaAccent: "approved scripts",
    ctaBody: "After legal and DLT approval, deploy this political outreach script on a consented voter pilot segment.",
  },
];

export const templatePages: SeoProgrammaticPage[] = templateConfigs.map(buildTemplatePage);

export function getTemplatePage(slug: string): SeoProgrammaticPage | undefined {
  return templatePages.find((p) => p.slug === slug);
}
