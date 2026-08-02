import { SeoProgrammaticPage } from "@/lib/seoTypes";

export const nichePages: SeoProgrammaticPage[] = [
  {
    slug: "dentists",
    name: "Dentists",
    metaTitle: "AI Voice Agent for Dentists | SvaraCall",
    metaDescription:
      "Confirm cleanings, recover no-shows, and follow up after procedures — in Telugu, Hindi, or English. SvaraCall AI keeps dental chairs full without hiring night-shift reception.",
    eyebrow: "For · Dentists",
    headline: "AI voice agents for dentists",
    subcopy:
      "Solo and group dental practices in India lose slots when patients miss reminders or call after OPD hours. SvaraCall AI handles booking confirmations, post-extraction check-ins, and recall campaigns on your DLT-registered header.",
    primaryCta: "Book a dental pilot",
    chips: ["Appointment reminders", "Recall campaigns", "Multilingual", "TRAI/DLT ready"],
    stats: [
      { value: "−31%", label: "No-show rate in 30-day clinic pilots" },
      { value: "68%", label: "Recall connect rate on 6-month cleaning lists" },
      { value: "3 langs", label: "Telugu, Hindi, English live" },
      { value: "<90 sec", label: "Median time to confirmed slot" },
    ],
    problemTitle: "Empty chairs cost more than marketing",
    problem:
      "Dental practices across Hyderabad, Pune, and Delhi run tight schedules — one missed root canal slot is ₹3,000–₹8,000 gone. Front desks cannot call every patient in three languages after 7 PM, and WhatsApp reminders get ignored.",
    currentTitle: "How dental desks operate today",
    currentSteps: [
      "Receptionist manually dials tomorrow's list between walk-ins.",
      "English-only IVR fails on Telugu or Hindi-speaking families.",
      "Post-procedure follow-up slips when the clinic is short-staffed.",
      "Six-month recall lists sit in Excel until someone has time.",
      "Cancellations never backfill — the chair stays empty.",
    ],
    aiTitle: "How SvaraCall works for dentists",
    aiSteps: [
      "Sync Practo, clinic HMS, or Google Calendar for live slot availability.",
      "Day-before reminder calls confirm, reschedule, or cancel in patient's language.",
      "Post-extraction and implant check-ins run on a fixed timeline automatically.",
      "Recall campaigns dial patients due for cleaning with DLT-approved scripts.",
      "Outcomes, recordings, and transcripts log to your dashboard and CRM.",
    ],
    benefitsTitle: "Outcomes for dental practices",
    benefits: [
      { title: "Higher chair utilization", body: "Reschedule on the same call when a patient cancels — fill gaps before the day starts." },
      { title: "Multilingual patient access", body: "Telugu and Hindi speakers get the same clarity as English callers — no accent mismatch hang-ups." },
      { title: "Recall revenue without telecallers", body: "Automated six-month cleaning reminders recover hygiene visits your front desk never reaches." },
      { title: "TRAI-compliant outbound", body: "DLT templates, consent capture, and instant opt-out per Telecom Commercial Communications norms." },
    ],
    roiTitle: "Dental pilot economics (illustrative)",
    roi: [
      { value: "+14%", label: "Chair utilization on practitioner calendars" },
      { value: "₹1.2L", label: "Monthly recovered revenue at 30-slot/day practice" },
      { value: "₹22–₹40", label: "Cost per connected reminder vs ₹70+ manual dial" },
    ],
    implTitle: "Go live in four steps",
    implementation: [
      { title: "Connect calendar", body: "Integrate your HMS or Google Calendar with provider and chair mapping." },
      { title: "Script workflows", body: "Define reminder, recall, and post-procedure scripts with disclosure lines." },
      { title: "Pilot 200 patients", body: "Run reminders for two weeks — compare no-show rate to baseline." },
      { title: "Scale recall", body: "Upload dormant patient lists and chain into ongoing hygiene campaigns." },
    ],
    relatedTitle: "Related for dental practices",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Calendar booking", href: "/features/calendar-booking" },
      { name: "Clinic reminder script", href: "/templates/appointment-reminder-clinic" },
    ],
    faqsTitle: "Dentist AI voice FAQs",
    faqs: [
      { q: "Can SvaraCall integrate with Practo or local HMS?", a: "Yes — via API, webhook, or CSV upload depending on your clinic management system." },
      { q: "Does it handle multiple dentists in one clinic?", a: "Provider routing maps each campaign to the correct doctor's calendar and slot rules." },
      { q: "Are post-surgery follow-ups automated?", a: "Timeline-based workflows trigger 24h, 48h, and 7-day check-ins after extraction or implant procedures." },
      { q: "What languages do patients hear?", a: "Telugu, Hindi, and English with natural code-switching when callers mix languages." },
      { q: "Is outbound TRAI compliant?", a: "All campaigns use DLT-registered templates and headers with consent and opt-out honored instantly." },
    ],
    scriptTitle: "Sample reminder call (Telugu-English)",
    scriptExcerpt: `Agent: Namaskaram, nenu Smile Dental nundi Priya matladutunnanu — repu morning 10 ki mee cleaning appointment undi. Confirm cheyagalara?
Customer: Avunu, kani oka hour late avvali.
Agent: Parvaledu — 11 AM slot available undi. Confirm chesanu, SMS pampinanu.
Customer: Thanks.
Agent: Meeku baga unte chalu — repu kaluddam.`,
    ctaTitle: "Stop losing chair time to",
    ctaAccent: "missed reminders",
    ctaBody: "Connect your calendar and run a two-week reminder pilot — measure no-shows before and after.",
  },

  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    metaTitle: "AI Voice Agent for Dental Clinics | SvaraCall",
    metaDescription:
      "Multi-chair dental clinics use SvaraCall AI for inbound triage, outbound reminders, and insurance document chase — in Indian languages, on DLT-approved lines.",
    eyebrow: "For · Dental Clinics",
    headline: "AI voice agents for dental clinics",
    subcopy:
      "Multi-location dental groups juggle high call volume, insurance paperwork, and per-chair utilization. SvaraCall AI acts as a multilingual front desk that never drops a booking enquiry or recall list.",
    primaryCta: "Book a clinic-group demo",
    chips: ["Multi-location", "Inbound triage", "Insurance chase", "Recall at scale"],
    stats: [
      { value: "4 chairs", label: "Average pilot starts with one location" },
      { value: "−58%", label: "Front-desk overflow calls in 60-day pilots" },
      { value: "82%", label: "Insurance doc reminder connect rate" },
      { value: "24/7", label: "After-hours booking capture" },
    ],
    problemTitle: "Scale breaks the front desk first",
    problem:
      "Dental clinic chains in Bengaluru and Mumbai see 200+ calls daily across branches. Shared reception teams miss inbound leads, forget insurance pre-auth follow-ups, and cannot run recall across 5,000+ patient records in three languages.",
    currentTitle: "Multi-chair clinic bottlenecks",
    currentSteps: [
      "Central call center handles all branches — long hold times.",
      "Insurance pre-auth documents chased manually once a week.",
      "Branch A runs recalls; Branch B never touches dormant lists.",
      "Walk-in overflow means outbound lists wait until Friday.",
      "No unified log — managers cannot see connect rates by location.",
    ],
    aiTitle: "Clinic-group AI workflows",
    aiSteps: [
      "Route inbound by branch DID with location-aware slot lookup.",
      "Outbound reminders and recalls run per branch with unified reporting.",
      "Insurance document chase triggers 48h before scheduled procedures.",
      "Warm-transfer hot enquiries to branch coordinators with whisper summary.",
      "Dashboard shows connect, booking, and no-show metrics by location.",
    ],
    benefitsTitle: "Why clinic groups choose SvaraCall",
    benefits: [
      { title: "Branch-level control", body: "Each location keeps its own calendar, scripts, and DLT template mapping." },
      { title: "Insurance admin relief", body: "Automated pre-auth and document reminders cut coordinator hours per week." },
      { title: "Unified analytics", body: "Compare no-show and recall conversion across all branches from one view." },
      { title: "After-hours lead capture", body: "Booking enquiries at 9 PM get a callback in minutes, not next morning." },
    ],
    roiTitle: "Clinic-group impact (illustrative)",
    roi: [
      { value: "₹3.8L", label: "Monthly recovered revenue across 4-chair pilot site" },
      { value: "12 hrs", label: "Weekly coordinator hours saved on doc chase" },
      { value: "+21%", label: "Recall booking rate vs manual quarterly blitz" },
    ],
    implTitle: "Roll out across branches",
    implementation: [
      { title: "Map locations", body: "Configure branch DIDs, calendars, and provider rosters." },
      { title: "Unify scripts", body: "Shared disclosure and brand tone with branch-specific slot rules." },
      { title: "Pilot one site", body: "Run 30 days at highest-volume branch — benchmark against others." },
      { title: "Expand playbook", body: "Clone winning workflows to remaining locations with local language tuning." },
    ],
    relatedTitle: "Related for dental clinics",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Insurance doc script", href: "/templates/insurance-document-chase" },
    ],
    faqsTitle: "Dental clinic FAQs",
    faqs: [
      { q: "Can one dashboard manage five branches?", a: "Yes — branch filters, separate calendars, and roll-up reporting are built in." },
      { q: "Does inbound routing know which clinic the patient wants?", a: "PIN code, prior visit, or IVR selection routes to the correct branch availability." },
      { q: "How are insurance reminders handled?", a: "Pre-procedure workflows chase PAN, policy copy, and pre-auth status with structured outcomes." },
      { q: "Can we use different languages per city?", a: "Telugu for Hyderabad branches, Hindi for Delhi, English default — configured per campaign." },
      { q: "What about DPDP patient data rules?", a: "Recordings and transcripts stay on India-hosted infrastructure with role-based access." },
    ],
    scriptTitle: "Insurance doc chase (Hindi)",
    scriptExcerpt: `Agent: Namaste, main City Dental Clinic se bol rahi hoon. Aapka root canal kal scheduled hai — insurance pre-auth ke liye policy copy abhi pending hai.
Customer: Main shaam tak bhej deta hoon WhatsApp par.
Agent: Dhanyavaad. Agar aaj nahi mili to slot shift ho sakta hai — kya main 5 baje follow-up kar loon?
Customer: Haan, theek hai.
Agent: Noted. SMS par upload link bhej di hai.`,
    ctaTitle: "Stop clinic growth from breaking",
    ctaAccent: "your front desk",
    ctaBody: "Pilot one branch for 30 days — compare no-shows, recalls, and inbound capture to your current baseline.",
  },

  {
    slug: "hospitals",
    name: "Hospitals",
    metaTitle: "AI Voice Agent for Hospitals | SvaraCall",
    metaDescription:
      "Hospitals use SvaraCall AI for OPD reminders, discharge follow-ups, lab report alerts, and bed-management callbacks — multilingual, TRAI-aware, India-hosted.",
    eyebrow: "For · Hospitals",
    headline: "AI voice agents for hospitals",
    subcopy:
      "Multi-specialty hospitals face relentless call volume — OPD confirmations, report collections, post-discharge care, and insurance queries. SvaraCall AI scales patient communication without adding ward coordinators.",
    primaryCta: "Book a hospital workflow review",
    chips: ["OPD reminders", "Discharge follow-up", "Lab alerts", "Triage handoff"],
    stats: [
      { value: "−26%", label: "OPD no-shows in pilot departments" },
      { value: "1,200+", label: "Daily outbound capacity per campaign" },
      { value: "94%", label: "Recording disclosure compliance in audits" },
      { value: "3 langs", label: "Telugu, Hindi, English with escalation" },
    ],
    problemTitle: "Patient communication does not scale with bed count",
    problem:
      "Tier-2 hospitals in Andhra Pradesh and Maharashtra run 300+ OPD slots daily. Nurses and coordinators spend hours on reminder calls instead of bedside care. Discharge instructions get lost, lab reports sit uncollected, and follow-up compliance drops within a week.",
    currentTitle: "Hospital communication gaps",
    currentSteps: [
      "OPD reminder lists printed nightly — half never get dialed.",
      "Discharge patients receive a paper sheet but no structured follow-up call.",
      "Lab calls report-ready only when a staff member has free time.",
      "Insurance and billing queries clog the main hospital switchboard.",
      "Regional language patients rely on family translators at the desk.",
    ],
    aiTitle: "Hospital-grade AI voice workflows",
    aiSteps: [
      "HMS or CSV feed triggers OPD reminders 24 hours before visit.",
      "Discharge timeline fires day-1, day-3, and day-7 wellness check-ins.",
      "Lab-ready alerts notify patients when reports can be collected or viewed online.",
      "Triage keywords escalate chest pain, bleeding, or emergency phrases to live staff.",
      "All calls log with department, outcome, and recording for audit trails.",
    ],
    benefitsTitle: "Hospital outcomes",
    benefits: [
      { title: "OPD utilization", body: "Confirm or reschedule before the slot — reduce empty consultant hours." },
      { title: "Post-discharge compliance", body: "Structured follow-up catches complications early and improves readmission metrics." },
      { title: "Lab throughput", body: "Report-ready calls cut front-desk queues and speed collections." },
      { title: "Language equity", body: "Telugu and Hindi speakers receive the same instructions as English patients." },
    ],
    roiTitle: "Hospital pilot metrics (illustrative)",
    roi: [
      { value: "+18%", label: "OPD slot utilization in pilot department" },
      { value: "₹6.2L", label: "Annualized recovered OPD revenue at 400 slots/week" },
      { value: "40 hrs", label: "Weekly nursing coordinator hours redeployed" },
    ],
    implTitle: "Hospital deployment path",
    implementation: [
      { title: "Select department", body: "Start with OPD or lab — highest volume, clearest ROI." },
      { title: "Integrate HMS", body: "Connect via API, HL7 middleware, or secure CSV export." },
      { title: "Define escalation", body: "Map clinical red-flag phrases to live nurse or on-call line." },
      { title: "Audit and expand", body: "Review recordings with quality team; roll to discharge and IPD workflows." },
    ],
    relatedTitle: "Related for hospitals",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Discharge follow-up script", href: "/templates/discharge-follow-up" },
    ],
    faqsTitle: "Hospital AI voice FAQs",
    faqs: [
      { q: "Can SvaraCall integrate with our HMS?", a: "Common Indian HMS platforms connect via API or scheduled CSV — we map during discovery." },
      { q: "How are clinical emergencies handled?", a: "Keyword triage immediately warm-transfers to your defined escalation line — AI does not diagnose." },
      { q: "Is patient data DPDP compliant?", a: "India-hosted storage, encryption in transit, role-based access, and configurable retention windows." },
      { q: "Can we run department-specific scripts?", a: "Cardiology, ortho, and general OPD each get tailored scripts and slot rules." },
      { q: "Do calls disclose recording?", a: "Yes — every outbound opens with AI and recording disclosure per hospital policy and TRAI norms." },
    ],
    scriptTitle: "Discharge follow-up (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main Apollo City Hospital se bol rahi hoon — aap kal discharge hue the. Kaisa feel ho raha hai?
Patient: Thoda pain hai operation site par.
Agent: Pain 1 se 10 mein kitna hai? Kya bleeding ya fever hai?
Patient: Pain 4, bleeding nahi hai.
Agent: Theek hai — doctor ne diya painkiller continue kijiye. Agar pain badhe to is number par call kijiye. Main nurse ko note kar deti hoon.`,
    ctaTitle: "Free coordinators for",
    ctaAccent: "bedside care",
    ctaBody: "Start with one OPD department — measure no-shows and follow-up compliance against your current manual process.",
  },

  {
    slug: "clinics",
    name: "Clinics",
    metaTitle: "AI Voice Agent for Clinics | SvaraCall",
    metaDescription:
      "Single and multi-specialty clinics automate reminders, report alerts, and repeat-visit nudges with SvaraCall AI — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Clinics",
    headline: "AI voice agents for clinics",
    subcopy:
      "General and specialty clinics lose revenue when patients no-show, ignore WhatsApp pings, or cannot reach the desk during peak OPD. SvaraCall AI confirms visits, chases reports, and books follow-ups in the patient's language.",
    primaryCta: "Start a clinic pilot",
    chips: ["OPD reminders", "Report alerts", "Follow-up booking", "Multilingual"],
    stats: [
      { value: "−29%", label: "No-show reduction in 30-day pilots" },
      { value: "76%", label: "Report collection connect rate" },
      { value: "2.1×", label: "Follow-up booking vs SMS-only nudges" },
      { value: "<5 min", label: "Inbound callback on missed enquiries" },
    ],
    problemTitle: "Small clinics cannot afford a call center",
    problem:
      "A 3-doctor clinic in Visakhapatnam or Indore handles 80 OPD slots daily with two receptionists. Reminder calls slip, chronic-care follow-ups never happen, and patients who miss a visit rarely rebook without a personal call.",
    currentTitle: "Typical clinic phone workflow",
    currentSteps: [
      "Receptionist prints tomorrow's list when the day ends.",
      "Morning rush means reminders wait until afternoon.",
      "Report-ready patients never get a proactive call.",
      "Chronic patients miss quarterly check-in nudges.",
      "Language mismatch on the phone leads to hang-ups.",
    ],
    aiTitle: "Clinic AI call flows",
    aiSteps: [
      "Calendar sync pulls tomorrow's OPD list for automated reminders.",
      "Report-ready workflow triggers when lab marks status complete.",
      "Chronic-care lists dial quarterly with reschedule offers.",
      "Missed inbound calls get callback within minutes in preferred language.",
      "Dashboard tracks confirm, reschedule, no-answer, and opt-out per doctor.",
    ],
    benefitsTitle: "Clinic-specific benefits",
    benefits: [
      { title: "No new headcount", body: "Parallel outbound on reminders while desk handles walk-ins." },
      { title: "Report collection speed", body: "Patients collect reports faster — fewer repeat visits clogging the queue." },
      { title: "Chronic-care adherence", body: "Diabetes, hypertension, and post-treatment follow-ups on autopilot." },
      { title: "Compliance built in", body: "DLT templates, consent logs, and opt-out suppression per TRAI rules." },
    ],
    roiTitle: "Clinic economics (illustrative)",
    roi: [
      { value: "₹95K", label: "Monthly recovered OPD revenue at 60 slots/day" },
      { value: "₹28", label: "Average cost per connected reminder" },
      { value: "+16%", label: "Repeat visit rate on chronic-care lists" },
    ],
    implTitle: "Clinic go-live",
    implementation: [
      { title: "Connect schedule", body: "Google Calendar, Practo, or clinic software export." },
      { title: "Script three flows", body: "Reminder, report-ready, and chronic follow-up with disclosures." },
      { title: "Pilot one doctor", body: "Benchmark no-shows for one consultant before rolling clinic-wide." },
      { title: "Expand", body: "Add inbound callback and seasonal flu-shot campaigns." },
    ],
    relatedTitle: "Related for clinics",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Calendar booking", href: "/features/calendar-booking" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "OPD reminder script", href: "/templates/appointment-reminder-clinic" },
    ],
    faqsTitle: "Clinic FAQs",
    faqs: [
      { q: "Do we need new phone hardware?", a: "No — SvaraCall uses your existing DLT-registered numbers and SIP trunks." },
      { q: "Can each doctor have separate scripts?", a: "Yes — provider-level routing and script variants per consultant." },
      { q: "What if a patient needs to speak to a nurse?", a: "Warm transfer to your clinic line with context summary on every handoff." },
      { q: "How fast can we start?", a: "Most clinic pilots go live within 5–7 business days after calendar connect." },
      { q: "Are metrics illustrative or guaranteed?", a: "All ROI figures on this page are pilot benchmarks — your results depend on list quality and scripts." },
    ],
    scriptTitle: "Report-ready alert (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee blood test report ready ayyindi. Collection ki repu 9 nundi 6 varaku raavachu.
Patient: Online chudagalama?
Agent: Avunu — SMS lo portal link pampinanu. In-person collection kavalante counter 2 ki raandi.
Patient: Link chustanu, thanks.
Agent: Meeku help avasaram unte malli call cheyandi.`,
    ctaTitle: "Stop no-shows from draining",
    ctaAccent: "OPD revenue",
    ctaBody: "Run reminders for one consultant for 14 days — compare confirmed visits to your current baseline.",
  },

  {
    slug: "pharmacies",
    name: "Pharmacies",
    metaTitle: "AI Voice Agent for Pharmacies | SvaraCall",
    metaDescription:
      "Retail pharmacies use SvaraCall AI for refill reminders, chronic medication nudges, and delivery confirmations — in Telugu, Hindi, English, on DLT lines.",
    eyebrow: "For · Pharmacies",
    headline: "AI voice agents for pharmacies",
    subcopy:
      "Neighborhood pharmacies lose repeat revenue when chronic patients skip refills or forget pickup. SvaraCall AI calls with refill reminders, confirms home delivery windows, and logs outcomes for your billing desk.",
    primaryCta: "Book a pharmacy pilot",
    chips: ["Refill reminders", "Delivery confirm", "Chronic care", "DLT outbound"],
    stats: [
      { value: "+23%", label: "Refill pickup rate on chronic lists" },
      { value: "71%", label: "Connect rate on 7-day-before-empty reminders" },
      { value: "−44%", label: "Expired stock write-offs in pilot stores" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Refill revenue walks out silently",
    problem:
      "Independent pharmacies in Tier-2 cities serve hundreds of chronic patients — diabetes, hypertension, thyroid. When a 30-day strip runs out, patients switch to a closer store unless someone calls. Counter staff cannot dial 200 refills daily in local languages.",
    currentTitle: "Pharmacy follow-up today",
    currentSteps: [
      "Billing software flags refills — nobody calls until patient walks in.",
      "WhatsApp broadcast gets muted or blocked.",
      "Home delivery slots confirmed by chaotic phone tag.",
      "Insurance reimbursement docs chased manually once a month.",
      "No log of who was reminded vs who opted out.",
    ],
    aiTitle: "Pharmacy AI workflows",
    aiSteps: [
      "POS or billing export triggers refill reminder 5–7 days before expected empty date.",
      "Agent confirms pickup, home delivery window, or transfer to another branch.",
      "Insurance reimbursement doc chase runs on a fixed schedule.",
      "Delivery confirmation calls verify address and OTP handoff.",
      "Opt-out and DND respected instantly per TRAI registry check.",
    ],
    benefitsTitle: "Pharmacy outcomes",
    benefits: [
      { title: "Repeat revenue retention", body: "Chronic patients reorder before switching to competitors." },
      { title: "Delivery efficiency", body: "Confirmed windows cut failed delivery attempts and rider idle time." },
      { title: "Counter time saved", body: "Staff focus on in-store customers instead of reminder dialing." },
      { title: "Audit-ready logs", body: "Every reminder, consent, and opt-out tracked for compliance review." },
    ],
    roiTitle: "Pharmacy pilot ROI (illustrative)",
    roi: [
      { value: "₹1.8L", label: "Monthly incremental refill revenue at busy store" },
      { value: "−35%", label: "Failed home delivery attempts" },
      { value: "₹18", label: "Cost per connected refill reminder" },
    ],
    implTitle: "Pharmacy rollout",
    implementation: [
      { title: "Export refills", body: "Connect billing software or weekly CSV of chronic patient lists." },
      { title: "Script reminders", body: "Medication name, days remaining, pickup vs delivery choice." },
      { title: "Pilot 500 patients", body: "Measure refill rate vs control group not called." },
      { title: "Add delivery", body: "Chain delivery confirmation and OTP verify on outbound." },
    ],
    relatedTitle: "Related for pharmacies",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Refill reminder script", href: "/templates/medication-refill-reminder" },
    ],
    faqsTitle: "Pharmacy FAQs",
    faqs: [
      { q: "Can we remind without naming the drug on the call?", a: "Scripts can use generic 'chronic medication refill' phrasing for privacy — configurable per campaign." },
      { q: "Does it integrate with Marg or local billing tools?", a: "CSV export works day one; API integrations vary by vendor." },
      { q: "How is patient consent handled?", a: "Refill reminders typically use existing pharmacy relationship consent — DLT template and opt-out on every call." },
      { q: "Can riders get confirmed addresses?", a: "Delivery workflow confirms landmark, PIN, and preferred time window before dispatch." },
      { q: "What languages are supported?", a: "Telugu, Hindi, and English with regional phrasing for medication terms." },
    ],
    scriptTitle: "Refill reminder (Hindi)",
    scriptExcerpt: `Agent: Namaste, main Apollo Pharmacy se bol rahi hoon. Aapki blood pressure ki dawai khatam hone wali hai — refill chahiye?
Customer: Haan, kal aa jaunga.
Agent: Theek hai. Store 9 baje khulta hai — aapka order ready rakhenge. Home delivery chahiye to boliye.
Customer: Main khud aa jaunga.
Agent: Dhanyavaad — kal milte hain.`,
    ctaTitle: "Recover refill revenue before patients",
    ctaAccent: "switch stores",
    ctaBody: "Upload your chronic patient list and run a 30-day refill pilot — compare pickup rate to baseline.",
  },

  {
    slug: "diagnostic-labs",
    name: "Diagnostic Labs",
    metaTitle: "AI Voice Agent for Diagnostic Labs | SvaraCall",
    metaDescription:
      "Diagnostic labs use SvaraCall AI for home collection scheduling, report-ready alerts, and fasting test reminders — multilingual, TRAI-compliant, India-hosted.",
    eyebrow: "For · Diagnostic Labs",
    headline: "AI voice agents for diagnostic labs",
    subcopy:
      "Pathology and radiology labs depend on timely collections and report pickups. SvaraCall AI confirms home phlebotomist slots, reminds patients about fasting protocols, and alerts when reports are ready — in Telugu, Hindi, or English.",
    primaryCta: "Book a lab workflow demo",
    chips: ["Home collection", "Fasting reminders", "Report alerts", "Corporate camps"],
    stats: [
      { value: "−33%", label: "Missed home collection slots in pilots" },
      { value: "89%", label: "Fasting protocol reminder acknowledgment" },
      { value: "+27%", label: "Report download within 48h of alert" },
      { value: "800+", label: "Daily outbound capacity per campaign" },
    ],
    problemTitle: "Failed collections waste phlebotomist routes",
    problem:
      "Labs across Chennai and Ahmedabad dispatch phlebotomists on tight routes. Patients forget fasting rules, are not home at the slot, or never collect reports — forcing repeat draws and delayed diagnosis for referring doctors.",
    currentTitle: "Lab communication today",
    currentSteps: [
      "Collection coordinator manually calls next day's home visits.",
      "Fasting instructions sent via SMS — patients still eat by mistake.",
      "Report-ready status waits for front desk to free up.",
      "Corporate camp participants never get follow-up on abnormal flags.",
      "Referring doctor never notified when patient ignores critical results.",
    ],
    aiTitle: "Lab AI call workflows",
    aiSteps: [
      "Home collection booking confirms address, landmark, and fasting status.",
      "Evening-before reminder reinforces NPO rules in patient's language.",
      "Report-ready alert offers portal link, WhatsApp PDF, or branch pickup.",
      "Abnormal flag workflow prompts patient to schedule doctor consult.",
      "Corporate camp lists get batch scheduling with DLT-approved scripts.",
    ],
    benefitsTitle: "Lab outcomes",
    benefits: [
      { title: "Route efficiency", body: "Confirmed slots mean phlebotomists hit more homes per shift." },
      { title: "Fewer redraws", body: "Fasting reminders cut invalid samples and repeat visit cost." },
      { title: "Faster report uptake", body: "Voice alerts beat email for Tier-2 and Tier-3 patients." },
      { title: "Corporate camp scale", body: "Batch dial thousands of employees for slot selection post-camp." },
    ],
    roiTitle: "Lab pilot metrics (illustrative)",
    roi: [
      { value: "₹2.4L", label: "Monthly savings on redraws and idle routes" },
      { value: "+19%", label: "Report collection within 72 hours" },
      { value: "₹24", label: "Cost per connected collection confirm" },
    ],
    implTitle: "Lab deployment",
    implementation: [
      { title: "Connect LIS", body: "Lab information system export or API for orders and report status." },
      { title: "Map test types", body: "Fasting vs non-fasting scripts per panel." },
      { title: "Pilot home collection", body: "Run 200 visits — measure missed slots vs baseline." },
      { title: "Add report alerts", body: "Chain report-ready workflow after collection pilot proves ROI." },
    ],
    relatedTitle: "Related for diagnostic labs",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Fasting test script", href: "/templates/lab-fasting-reminder" },
    ],
    faqsTitle: "Diagnostic lab FAQs",
    faqs: [
      { q: "Can we alert patients about critical values?", a: "Abnormal flag workflows prompt consult booking — final clinical communication stays with your medical team." },
      { q: "Does home collection scheduling sync with phlebotomist apps?", a: "Slot confirmation exports to your routing tool via webhook or CSV." },
      { q: "How are corporate camps handled?", a: "Batch upload of employee lists with slot-selection IVR or two-option voice choice." },
      { q: "Is patient data encrypted?", a: "India-hosted AWS Mumbai with encryption in transit and configurable retention." },
      { q: "Which languages for fasting instructions?", a: "Telugu, Hindi, and English with plain-language NPO explanations." },
    ],
    scriptTitle: "Home collection confirm (Telugu-English)",
    scriptExcerpt: `Agent: Namaskaram, Thyrocare nundi — repu morning 7 ki home blood collection undi. Fasting 10 hours maintain cheyandi — only water allowed.
Customer: Address correct aa?
Agent: Hi yes — Flat 402, Green Heights, Madhapur. Phlebotomist 7 to 7:30 reach avtaru.
Customer: Okay, ready ga untanu.
Agent: SMS lo phlebotomist number pampinanu. Thanks!`,
    ctaTitle: "Cut redraw costs and idle",
    ctaAccent: "collection routes",
    ctaBody: "Pilot home collection confirmations for two weeks — measure missed slots against your current process.",
  },

  {
    slug: "physiotherapists",
    name: "Physiotherapists",
    metaTitle: "AI Voice Agent for Physiotherapists | SvaraCall",
    metaDescription:
      "Physio clinics and home-visit practices use SvaraCall AI for session reminders, exercise adherence check-ins, and package renewal nudges — Telugu, Hindi, English.",
    eyebrow: "For · Physiotherapists",
    headline: "AI voice agents for physiotherapists",
    subcopy:
      "Physiotherapy depends on session attendance and home exercise compliance. SvaraCall AI reminds patients before each session, checks pain levels post-visit, and nudges package renewals before lapses — freeing therapists to focus on treatment.",
    primaryCta: "Book a physio pilot",
    chips: ["Session reminders", "Adherence check-ins", "Package renewals", "Home visit confirm"],
    stats: [
      { value: "−34%", label: "Session no-shows in clinic pilots" },
      { value: "67%", label: "Home exercise adherence on check-in calls" },
      { value: "+31%", label: "Package renewal before expiry" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Drop-off kills rehab outcomes and revenue",
    problem:
      "Physio practices in Pune and Kochi sell 10–20 session packages, but patients skip mid-course. Therapists lack time to call every patient about home exercises. Home-visit physios lose slots when patients are not ready or address is wrong.",
    currentTitle: "Physio follow-up gaps",
    currentSteps: [
      "Front desk sends WhatsApp reminder — ignored if muted.",
      "Therapist asks about exercises only during the next visit.",
      "Package expiry sneaks up — patient drops off instead of renewing.",
      "Home visit coordinator calls manually the night before.",
      "Post-surgery patients miss critical early mobilization sessions.",
    ],
    aiTitle: "Physio AI workflows",
    aiSteps: [
      "Session reminder 24h ahead with confirm, reschedule, or cancel.",
      "Post-session day-2 check-in captures pain score and exercise completion.",
      "Package renewal call at session 8 of 10 with booking offer.",
      "Home visit confirm verifies address, caregiver presence, and equipment ready.",
      "Post-ortho surgery lists get priority reminder sequences.",
    ],
    benefitsTitle: "Physio practice benefits",
    benefits: [
      { title: "Better clinical outcomes", body: "Adherence check-ins catch drop-off before patients abandon rehab." },
      { title: "Fuller schedules", body: "Reschedule on the reminder call — backfill cancelled slots." },
      { title: "Renewal revenue", body: "Proactive package extension before the last session." },
      { title: "Home visit reliability", body: "Confirmed visits mean therapists spend time treating, not waiting." },
    ],
    roiTitle: "Physio economics (illustrative)",
    roi: [
      { value: "₹1.1L", label: "Monthly recovered package revenue at 20-patient/day clinic" },
      { value: "+22%", label: "Course completion rate vs SMS-only" },
      { value: "₹26", label: "Cost per connected session reminder" },
    ],
    implTitle: "Physio go-live",
    implementation: [
      { title: "Import schedule", body: "Clinic software or calendar export with package session counts." },
      { title: "Script adherence", body: "Pain scale questions and exercise yes/no with escalation rules." },
      { title: "Pilot one therapist", body: "Measure no-shows and renewals for 30 days." },
      { title: "Add home visits", body: "Extend to mobile physio routes with address confirm flow." },
    ],
    relatedTitle: "Related for physiotherapists",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Patient follow-up", href: "/use-cases/patient-follow-up" },
      { name: "Custom prompts", href: "/features/custom-prompts" },
      { name: "Session reminder script", href: "/templates/physio-session-reminder" },
    ],
    faqsTitle: "Physiotherapist FAQs",
    faqs: [
      { q: "Can the AI ask about pain levels?", a: "Yes — structured 1–10 scale with escalation to therapist if above threshold." },
      { q: "Does it work for home-visit-only practices?", a: "Address confirm and caregiver availability checks run the evening before." },
      { q: "Can we track package session counts?", a: "CRM fields update remaining sessions; renewal triggers at your defined threshold." },
      { q: "What if patient needs clinical advice?", a: "Medical questions warm-transfer to your therapist line — AI does not prescribe." },
      { q: "TRAI compliance for wellness calls?", a: "Existing patient relationship plus DLT template; opt-out honored on every call." },
    ],
    scriptTitle: "Exercise adherence check-in (Hindi)",
    scriptExcerpt: `Agent: Namaste, main FitLife Physio se bol rahi hoon. Kal aapka session tha — kya aapne home exercises kiye?
Patient: Do din skip kar diya, pain zyada tha.
Agent: Pain ab 1 se 10 mein kitna hai?
Patient: Ab 5 hai, pehle 8 tha.
Agent: Achha. Therapist ne diye stretches aaj try kijiye — agar pain 7 se upar jaye to clinic call kijiye. Next session Thursday 4 PM confirm hai.`,
    ctaTitle: "Improve completion rates without hiring",
    ctaAccent: "a follow-up desk",
    ctaBody: "Run session reminders and adherence check-ins for 30 days — measure no-shows and renewals vs baseline.",
  },

  {
    slug: "hotels",
    name: "Hotels",
    metaTitle: "AI Voice Agent for Hotels | SvaraCall",
    metaDescription:
      "Hotels use SvaraCall AI for booking confirmations, pre-arrival calls, upsell nudges, and post-stay feedback — in Telugu, Hindi, English, TRAI-aware.",
    eyebrow: "For · Hotels",
    headline: "AI voice agents for hotels",
    subcopy:
      "Business and leisure hotels lose bookings to no-response and miss upsell revenue on airport transfers and late checkout. SvaraCall AI confirms reservations, captures pre-arrival preferences, and collects feedback after checkout — in the guest's language.",
    primaryCta: "Book a hotel pilot",
    chips: ["Pre-arrival calls", "Booking confirm", "Upsell flows", "Guest feedback"],
    stats: [
      { value: "−41%", label: "OTA booking churn on unconfirmed leads" },
      { value: "+18%", label: "Ancillary upsell attach on pre-arrival calls" },
      { value: "62%", label: "Post-stay feedback completion rate" },
      { value: "24/7", label: "Inbound enquiry callback" },
    ],
    problemTitle: "Unconfirmed bookings and silent upsells",
    problem:
      "Hotels in Goa, Jaipur, and Hyderabad receive OTA and direct bookings around the clock. Front office cannot call every guest before arrival. Upsells for airport pickup, spa, and early check-in go unsold. Negative experiences surface only on public reviews.",
    currentTitle: "Hotel guest communication today",
    currentSteps: [
      "Confirmation email ignored — guest no-shows without cancellation.",
      "Front desk too busy at check-in to offer upgrades.",
      "WhatsApp upsell messages feel spammy and get blocked.",
      "Post-stay feedback survey emailed — 4% response rate.",
      "Group booking coordinators chase rooming lists manually.",
    ],
    aiTitle: "Hotel AI guest workflows",
    aiSteps: [
      "Booking trigger fires pre-arrival call 48h before check-in.",
      "Agent confirms dates, guest count, ETA, and offers airport transfer.",
      "Same call captures dietary preferences and special requests.",
      "Post-checkout feedback call within 24h — issues routed to manager live.",
      "Group coordinators get rooming list confirmation calls in batch.",
    ],
    benefitsTitle: "Hotel outcomes",
    benefits: [
      { title: "Lower no-show rate", body: "Voice confirmation beats email for domestic leisure travelers." },
      { title: "Ancillary revenue", body: "Pre-arrival upsell for transfer, spa, and late checkout on a natural call." },
      { title: "Review prevention", body: "Catch service issues on the feedback call before TripAdvisor posts." },
      { title: "Multilingual guests", body: "Telugu and Hindi business travelers get the same pre-arrival experience." },
    ],
    roiTitle: "Hotel pilot ROI (illustrative)",
    roi: [
      { value: "₹3.2L", label: "Quarterly ancillary revenue uplift at 80-room property" },
      { value: "−28%", label: "No-show rate on direct bookings" },
      { value: "₹32", label: "Cost per connected pre-arrival call" },
    ],
    implTitle: "Hotel deployment",
    implementation: [
      { title: "Connect PMS", body: "Integrate reservation feed from your property management system." },
      { title: "Script upsells", body: "Airport transfer, breakfast, spa — priced and bookable on-call." },
      { title: "Pilot weekend arrivals", body: "Run pre-arrival for high-no-show segment first." },
      { title: "Add feedback loop", body: "Chain post-checkout calls with manager escalation rules." },
    ],
    relatedTitle: "Related for hotels",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Pre-arrival script", href: "/templates/hotel-pre-arrival" },
    ],
    faqsTitle: "Hotel FAQs",
    faqs: [
      { q: "Does it integrate with Opera or local PMS?", a: "Reservation export via API, webhook, or nightly CSV depending on your PMS." },
      { q: "Can upsells charge to room folio?", a: "Confirmed upsells log to PMS notes — payment capture stays with your front desk policy." },
      { q: "How is guest consent handled for marketing calls?", a: "Transactional pre-arrival and feedback use booking relationship; promotional calls need separate DLT consent." },
      { q: "Can it handle group block rooming lists?", a: "Batch dial coordinators to confirm room assignments and special requests." },
      { q: "What languages for inbound tourists?", a: "Telugu, Hindi, and English today — additional languages on roadmap per demand." },
    ],
    scriptTitle: "Pre-arrival call (English-Hindi)",
    scriptExcerpt: `Agent: Good evening, calling from Lakeview Hotel regarding your check-in on Friday. Is 2 PM arrival still correct?
Guest: Actually 6 PM — flight lands late.
Agent: Noted — late check-in flagged. Would you like airport pickup at ₹1,200?
Guest: Yes, please.
Agent: Pickup confirmed. SMS with driver details will arrive on landing day. Anything else for your stay?`,
    ctaTitle: "Sell more before guests",
    ctaAccent: "reach the lobby",
    ctaBody: "Connect your PMS and run pre-arrival calls for one month — measure no-shows and upsell attach rate.",
  },

  {
    slug: "restaurants",
    name: "Restaurants",
    metaTitle: "AI Voice Agent for Restaurants | SvaraCall",
    metaDescription:
      "Restaurants and cloud kitchens use SvaraCall AI for reservation confirmations, large-party callbacks, and loyalty win-back — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Restaurants",
    headline: "AI voice agents for restaurants",
    subcopy:
      "Full-service restaurants and cloud kitchens miss covers when reservations go unconfirmed and lapsed diners never return. SvaraCall AI confirms table bookings, recovers no-shows, and win-backs dormant loyalty members — without tying up the host stand.",
    primaryCta: "Book a restaurant demo",
    chips: ["Reservation confirm", "No-show recovery", "Large party", "Loyalty win-back"],
    stats: [
      { value: "−37%", label: "Reservation no-shows with day-before calls" },
      { value: "+24%", label: "Large-party confirmation rate" },
      { value: "19%", label: "Win-back redemption on 90-day lapsed diners" },
      { value: "<3 min", label: "Missed call callback during service hours" },
    ],
    problemTitle: "Empty tables on Saturday night hurt most",
    problem:
      "Restaurants in Bengaluru and Mumbai hold tables for unconfirmed bookings. Host stands cannot call every party during service rush. Cloud kitchens lose repeat orders when busy signals go unanswered on Swiggy and Zomato overflow lines.",
    currentTitle: "Restaurant phone ops today",
    currentSteps: [
      "Reservation book written in diary — no confirmation call.",
      "Large party of 12 no-shows — table sat empty 90 minutes.",
      "Loyalty SMS for dormant diners — 2% walk-in rate.",
      "Missed calls during dinner rush — no callback until next day.",
      "Festival set-menu upsell never pitched to prior banquet guests.",
    ],
    aiTitle: "Restaurant AI workflows",
    aiSteps: [
      "Day-before reservation confirm with cancel-or-hold choice.",
      "Large party (8+) gets coordinator call with menu pre-selection.",
      "No-show recovery calls same evening to offer alternate slot.",
      "90-day lapsed loyalty list gets personalized win-back offer.",
      "Missed inbound during rush gets callback with booking offer.",
    ],
    benefitsTitle: "Restaurant outcomes",
    benefits: [
      { title: "Higher cover count", body: "Confirm or release tables early — seat walk-ins faster." },
      { title: "Banquet revenue", body: "Large-party pre-calls reduce day-of surprises and no-shows." },
      { title: "Repeat visits", body: "Voice win-back beats generic SMS for high-AOV diners." },
      { title: "Host stand relief", body: "AI handles confirmations while staff focus on in-house guests." },
    ],
    roiTitle: "Restaurant economics (illustrative)",
    roi: [
      { value: "₹2.1L", label: "Monthly recovered covers at 120-seat restaurant" },
      { value: "+₹450", label: "Average upsell per confirmed large party" },
      { value: "₹20", label: "Cost per connected reservation confirm" },
    ],
    implTitle: "Restaurant rollout",
    implementation: [
      { title: "Connect booking source", body: "Dineout, EazyDiner, or in-house reservation export." },
      { title: "Script occasions", body: "Birthday, anniversary, and festival set-menu pitches." },
      { title: "Pilot Friday-Saturday", body: "Highest no-show nights first — measure cover delta." },
      { title: "Add loyalty win-back", body: "Upload CRM lapsed list with offer code tracking." },
    ],
    relatedTitle: "Related for restaurants",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Win-back campaigns", href: "/use-cases/win-back" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Reservation confirm script", href: "/templates/restaurant-reservation-confirm" },
    ],
    faqsTitle: "Restaurant FAQs",
    faqs: [
      { q: "Can it confirm Dineout and EazyDiner bookings?", a: "CSV or API export from your reservation platforms — unified confirm workflow." },
      { q: "Does it work for cloud kitchens?", a: "Missed-call callback and repeat-order nudges for direct channels." },
      { q: "How are offers tracked?", a: "Unique verbal codes logged per call — reconcile against POS redemptions." },
      { q: "Will calls interrupt dinner service?", a: "Outbound runs 11 AM–5 PM for next-day confirms; inbound callback rules you define." },
      { q: "TRAI rules for promotional win-back?", a: "Separate DLT template with prior consent; transactional confirms use booking relationship." },
    ],
    scriptTitle: "Reservation confirm (Hinglish)",
    scriptExcerpt: `Agent: Hi, main Spice Route se bol rahi hoon — kal raat 8 baje aapka table 4 logon ke liye booked hai. Confirm hai?
Customer: Haan, ek guest vegetarian hai.
Agent: Noted — veg set menu option add kar diya. Agar cancel karna ho to abhi bata dijiye taaki table release ho sake.
Customer: Confirmed, aa rahe hain.
Agent: Perfect — kal milte hain!`,
    ctaTitle: "Fill more tables on",
    ctaAccent: "peak nights",
    ctaBody: "Run day-before confirmation calls for four weekends — compare no-shows and covers to your baseline.",
  },

  {
    slug: "travel-agencies",
    name: "Travel Agencies",
    metaTitle: "AI Voice Agent for Travel Agencies | SvaraCall",
    metaDescription:
      "Travel agencies use SvaraCall AI for enquiry follow-up, visa document chase, and departure reminders — in Telugu, Hindi, English, on DLT-approved lines.",
    eyebrow: "For · Travel Agencies",
    headline: "AI voice agents for travel agencies",
    subcopy:
      "Travel agents lose packages when enquiry follow-up is slow and visa paperwork stalls departures. SvaraCall AI calls fresh leads within minutes, chases pending documents, and confirms travelers before departure — in their preferred language.",
    primaryCta: "Book a travel agency pilot",
    chips: ["Lead follow-up", "Visa doc chase", "Departure confirm", "Multilingual"],
    stats: [
      { value: "<8 min", label: "Average first callback on web enquiries" },
      { value: "34%", label: "Pilot connect rate on fresh holiday leads" },
      { value: "−52%", label: "Visa delay from missing documents" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Slow follow-up loses holiday bookings",
    problem:
      "Travel agencies in Hyderabad and Delhi receive peak-season enquiries after hours. By morning the customer booked elsewhere. Visa document gaps surface three days before departure — chaos for coordinators and angry travelers.",
    currentTitle: "Agency sales workflow today",
    currentSteps: [
      "Enquiry sits in CRM until agent arrives next morning.",
      "Telecaller uses English script on Telugu-speaking family — hang up.",
      "Visa checklist emailed — half the documents never arrive.",
      "Departure reminder is a generic SMS — travelers miss flight prep details.",
      "No structured log of who was qualified vs tyre-kicker.",
    ],
    aiTitle: "Travel agency AI flows",
    aiSteps: [
      "Webhook triggers instant callback on website or WhatsApp enquiry.",
      "Qualification captures destination, budget, dates, and traveler count.",
      "Visa workflow chases passport, bank statement, and photo on schedule.",
      "Departure call 72h before confirms tickets, insurance, and forex needs.",
      "Hot leads warm-transfer to senior agent with full conversation summary.",
    ],
    benefitsTitle: "Agency outcomes",
    benefits: [
      { title: "Speed-to-lead", body: "Call within minutes — beat competitors still sleeping." },
      { title: "Document compliance", body: "Structured visa chase cuts last-minute embassy rejections." },
      { title: "Language match", body: "Telugu and Hindi families stay on the line through qualification." },
      { title: "Agent productivity", body: "Human closers only talk to scored, document-ready leads." },
    ],
    roiTitle: "Travel agency ROI (illustrative)",
    roi: [
      { value: "+26%", label: "Enquiry-to-booking conversion in 60-day pilot" },
      { value: "₹4.5L", label: "Recovered package revenue from speed-to-lead" },
      { value: "6 hrs", label: "Daily coordinator hours saved on doc chase" },
    ],
    implTitle: "Agency deployment",
    implementation: [
      { title: "Connect CRM", body: "Zoho, custom CRM, or form webhook for instant lead ingest." },
      { title: "Script qualification", body: "Budget band, destination, and timeline scoring rules." },
      { title: "Pilot peak season", body: "Run 300 enquiries — compare booking rate to manual baseline." },
      { title: "Add visa chase", body: "Template per destination country document checklist." },
    ],
    relatedTitle: "Related for travel agencies",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Visa doc chase script", href: "/templates/visa-document-chase" },
    ],
    faqsTitle: "Travel agency FAQs",
    faqs: [
      { q: "Can AI quote package prices?", a: "Scripts capture budget and preferences — pricing and offers stay with your licensed agent on transfer." },
      { q: "How fast on after-hours enquiries?", a: "Webhook-triggered calls typically fire within 2–8 minutes in configured windows." },
      { q: "Does visa chase vary by country?", a: "Separate document checklists per destination with escalation if deadline approaches." },
      { q: "Can senior agents receive warm transfers?", a: "Yes — whisper summary includes destination, budget, and traveler count." },
      { q: "TRAI compliance for promotional holiday offers?", a: "DLT-registered templates with consent; enquiry callbacks use established interest." },
    ],
    scriptTitle: "Enquiry follow-up (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee Dubai package enquiry receive ayyindi — two minutes matladagalara?
Customer: Avunu, December lo family trip plan chestunnam.
Agent: Budget roughly entha, eppatiki travel cheyali?
Customer: Laksha rupayala daka, Dec 20 around.
Agent: Bagundi — senior travel advisor meeku options pampistaru. Ippudu connect cheyala leda evening call aa?
Customer: Evening 6 ki call cheyandi.
Agent: Fixed — 6 PM ki callback schedule chesanu.`,
    ctaTitle: "Win bookings with",
    ctaAccent: "faster follow-up",
    ctaBody: "Connect your enquiry form and run a 300-lead pilot — compare booking conversion to your current speed.",
  },

  {
    slug: "schools",
    name: "Schools",
    metaTitle: "AI Voice Agent for Schools | SvaraCall",
    metaDescription:
      "K-12 schools use SvaraCall AI for admission follow-ups, fee reminders, PTM alerts, and absentee callbacks — Telugu, Hindi, English, TRAI-aware.",
    eyebrow: "For · Schools",
    headline: "AI voice agents for schools",
    subcopy:
      "Private schools across India juggle admission season chaos, fee collection, and parent communication in multiple languages. SvaraCall AI follows up enquiry forms, reminds on fee dues, and confirms PTM attendance — without overloading the admin office.",
    primaryCta: "Book a school pilot",
    chips: ["Admission follow-up", "Fee reminders", "PTM alerts", "Absentee callback"],
    stats: [
      { value: "+29%", label: "Admission enquiry-to-visit conversion in pilots" },
      { value: "−38%", label: "Fee default in first reminder cycle" },
      { value: "74%", label: "PTM confirm rate on voice calls" },
      { value: "3 langs", label: "Telugu, Hindi, English for parents" },
    ],
    problemTitle: "Admin offices drown during admission season",
    problem:
      "Schools in Tier-2 cities receive hundreds of admission enquiries in April–May. Admin staff cannot call every parent in Telugu or Hindi. Fee reminders via SMS get ignored. Absent students' parents never get a same-day welfare call.",
    currentTitle: "School communication today",
    currentSteps: [
      "Enquiry forms pile up — callbacks happen days later.",
      "Fee reminder SMS blasted — parents pay after late fine anyway.",
      "PTM attendance unpredictable — teachers prepare for half the parents.",
      "Absentee notification is WhatsApp — unread by evening.",
      "Transport route changes never reach every parent by phone.",
    ],
    aiTitle: "School AI parent workflows",
    aiSteps: [
      "Admission enquiry triggers callback within hours in parent's language.",
      "Qualification captures grade, board preference, and campus visit slot.",
      "Fee reminder calls 7 days and 1 day before due date with payment link.",
      "PTM confirm call 48h ahead with reschedule option.",
      "Absentee same-day welfare check — escalate if illness reported.",
    ],
    benefitsTitle: "School outcomes",
    benefits: [
      { title: "Higher admission yield", body: "Fast multilingual follow-up before parents visit competitor schools." },
      { title: "Improved fee collection", body: "Voice reminder with payment link beats passive SMS." },
      { title: "Better PTM turnout", body: "Confirmed parents mean prepared teachers and fewer repeat sessions." },
      { title: "Child safety signal", body: "Same-day absent callback shows duty of care to parents." },
    ],
    roiTitle: "School pilot metrics (illustrative)",
    roi: [
      { value: "₹8.5L", label: "Incremental admission revenue from 40 converted enquiries" },
      { value: "−22%", label: "Fee collection lag vs SMS-only baseline" },
      { value: "₹19", label: "Cost per connected parent call" },
    ],
    implTitle: "School deployment",
    implementation: [
      { title: "Connect ERP", body: "School management system export for fees, attendance, and enquiries." },
      { title: "Script per audience", body: "Admission, fee, PTM, and absentee flows with disclosure." },
      { title: "Pilot admission season", body: "Run enquiry follow-up for 200 leads — measure visit rate." },
      { title: "Add fee reminders", body: "Chain term-fee workflow after admission pilot." },
    ],
    relatedTitle: "Related for schools",
    related: [
      { name: "Education industry", href: "/industries/education" },
      { name: "Education admissions", href: "/use-cases/education-admissions" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Fee reminder script", href: "/templates/school-fee-reminder" },
    ],
    faqsTitle: "School FAQs",
    faqs: [
      { q: "Can we call parents in Telugu for Hyderabad schools?", a: "Yes — language preference per student record or campaign default." },
      { q: "Does it integrate with Fedena or local school ERP?", a: "CSV export works immediately; API varies by vendor." },
      { q: "How is child data protected?", a: "DPDP-aligned storage, minimal PII in scripts, configurable retention." },
      { q: "Can absentee calls escalate to class teacher?", a: "Illness or concern keywords trigger warm transfer to defined staff line." },
      { q: "TRAI rules for fee reminders?", a: "Existing parent relationship with DLT template; opt-out on every call." },
    ],
    scriptTitle: "Admission follow-up (Hindi)",
    scriptExcerpt: `Agent: Namaste, main Delhi Public School se bol rahi hoon — aapne Class 3 admission ke liye enquiry ki thi.
Parent: Haan, campus visit karna chahte hain.
Agent: Achha. Kal 10 baje ya parso 4 baje slot hai — kaunsa theek rahega?
Parent: Kal 10 baje.
Agent: Confirm — campus tour kal 10 AM. SMS mein gate pass bhej diya.`,
    ctaTitle: "Convert more enquiries during",
    ctaAccent: "admission season",
    ctaBody: "Run 200 enquiry follow-ups in your peak window — compare campus visit rate to last year.",
  },

  {
    slug: "coaching-centers",
    name: "Coaching Centers",
    metaTitle: "AI Voice Agent for Coaching Centers | SvaraCall",
    metaDescription:
      "JEE, NEET, and competitive exam coaching centers use SvaraCall AI for demo class follow-up, fee reminders, and batch alerts — Telugu, Hindi, English.",
    eyebrow: "For · Coaching Centers",
    headline: "AI voice agents for coaching centers",
    subcopy:
      "Coaching institutes in Kota, Hyderabad, and Delhi compete on speed-to-lead and parent communication. SvaraCall AI calls fresh enquiries fast, reminds on installment dues, and alerts batch schedule changes — in the language parents actually speak.",
    primaryCta: "Book a coaching pilot",
    chips: ["Demo follow-up", "Fee installments", "Batch alerts", "Parent updates"],
    stats: [
      { value: "<10 min", label: "First callback on website leads" },
      { value: "+33%", label: "Demo-to-enrollment in 45-day pilots" },
      { value: "−41%", label: "Installment defaults after voice reminders" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Every hour lost is a seat given away",
    problem:
      "Coaching centers spend heavily on ads but telecallers reach leads next day. Parents comparing three institutes enroll where someone answered in Hindi tonight. Installment defaults spike mid-batch when SMS reminders fail.",
    currentTitle: "Coaching center sales ops",
    currentSteps: [
      "Lead lands at 9 PM — telecaller sees it at 10 AM.",
      "English-only pitch loses Telugu-speaking parent in Secunderabad.",
      "Demo scheduled but never confirmed — 30% no-show.",
      "Fee installment SMS ignored until access blocked.",
      "Batch shift or holiday never communicated to all parents.",
    ],
    aiTitle: "Coaching center AI flows",
    aiSteps: [
      "Instant enquiry callback qualifies exam, target year, and center preference.",
      "Demo confirm call day-before with directions and what to bring.",
      "Installment reminder 5 days and 1 day before due with payment link.",
      "Batch alert calls for schedule change, test date, or faculty update.",
      "Hot leads transfer to counselor with score and parent concerns logged.",
    ],
    benefitsTitle: "Coaching outcomes",
    benefits: [
      { title: "Faster seat fill", body: "Night enquiries get morning-ready demos booked overnight." },
      { title: "Lower demo no-show", body: "Voice confirm beats WhatsApp for anxious JEE parents." },
      { title: "Cash flow stability", body: "Installment reminders reduce mid-course dropouts from payment gaps." },
      { title: "Parent trust", body: "Proactive batch alerts in local language reduce front-desk chaos." },
    ],
    roiTitle: "Coaching ROI (illustrative)",
    roi: [
      { value: "₹12L", label: "Incremental enrollment from 25 converted demos" },
      { value: "+28%", label: "Demo attendance vs unconfirmed invites" },
      { value: "₹21", label: "Cost per connected enquiry callback" },
    ],
    implTitle: "Coaching rollout",
    implementation: [
      { title: "Connect lead source", body: "Website form, Meta leads, or CRM webhook." },
      { title: "Script by exam", body: "JEE, NEET, EAMCET variants with center and batch logic." },
      { title: "Pilot 500 leads", body: "Measure demo booking and enrollment vs manual team." },
      { title: "Chain fee reminders", body: "Add installment workflow for enrolled batch." },
    ],
    relatedTitle: "Related for coaching centers",
    related: [
      { name: "Education industry", href: "/industries/education" },
      { name: "Education admissions", href: "/use-cases/education-admissions" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Demo class script", href: "/templates/coaching-demo-follow-up" },
    ],
    faqsTitle: "Coaching center FAQs",
    faqs: [
      { q: "Can it qualify JEE vs NEET automatically?", a: "First questions capture target exam, class, and year — routes to correct script." },
      { q: "Does it handle multiple centers?", a: "Location-aware routing offers nearest branch slots." },
      { q: "Can counselors receive live transfers?", a: "Hot leads transfer with parent budget and exam timeline summary." },
      { q: "Fee reminder without blocking LMS access?", a: "Gentle reminder cadence before hard cutoff — timing you configure." },
      { q: "TRAI compliance for admission calls?", a: "Enquiry relationship plus DLT template; promotional blasts need separate consent." },
    ],
    scriptTitle: "Demo confirm (Telugu-English)",
    scriptExcerpt: `Agent: Hi, Sri Chaitanya nundi — repu 4 PM ki mee NEET demo class confirm cheyali. Ready ga ravachu?
Parent: Avunu, address cheppandi.
Agent: Ameerpet branch, 3rd floor — SMS lo map pin pampinanu. Parent optional attend avochu.
Parent: Okay, vastam.
Agent: Thanks — repu meet avdam!`,
    ctaTitle: "Fill batches faster with",
    ctaAccent: "instant follow-up",
    ctaBody: "Connect your lead form and run 500 callbacks — compare demo bookings to your telecaller baseline.",
  },

  {
    slug: "universities",
    name: "Universities",
    metaTitle: "AI Voice Agent for Universities | SvaraCall",
    metaDescription:
      "Universities use SvaraCall AI for admission enquiry follow-up, document collection, fee reminders, and alumni outreach — multilingual, TRAI-compliant.",
    eyebrow: "For · Universities",
    headline: "AI voice agents for universities",
    subcopy:
      "Private and deemed universities manage thousands of admission enquiries, document gaps, and fee deadlines across states. SvaraCall AI scales parent and student communication in Telugu, Hindi, and English — without expanding the admissions call center.",
    primaryCta: "Book a university demo",
    chips: ["Admission follow-up", "Document chase", "Fee deadlines", "Alumni outreach"],
    stats: [
      { value: "2,000+", label: "Daily outbound capacity for admission season" },
      { value: "+24%", label: "Application completion after doc chase" },
      { value: "−35%", label: "Fee deadline misses with voice reminders" },
      { value: "68%", label: "Connect rate on regional language campaigns" },
    ],
    problemTitle: "Admission season overwhelms every channel",
    problem:
      "Universities in South and North India receive pan-India enquiries. Admissions teams cannot callback every WhatsApp lead. Document gaps — migration certificate, TC, entrance rank proof — delay seat confirmation. Hostel and fee deadlines slip when SMS alone is used.",
    currentTitle: "University admissions ops",
    currentSteps: [
      "Enquiry CRM backlog grows 500+ during peak week.",
      "Document checklist emailed — students submit incomplete packets.",
      "Fee deadline SMS at scale — low open rates outside metros.",
      "Counseling round updates never reach waitlisted candidates by phone.",
      "Alumni donation drives get one bulk email per year.",
    ],
    aiTitle: "University AI workflows",
    aiSteps: [
      "Enquiry callback qualifies program, entrance exam, and domicile.",
      "Document chase workflow tracks pending items with deadline urgency.",
      "Fee installment reminders with payment portal link on-call.",
      "Waitlist and counseling round alerts with accept-or-decline capture.",
      "Alumni giving campaigns with consent-first DLT scripts.",
    ],
    benefitsTitle: "University outcomes",
    benefits: [
      { title: "Seat yield improvement", body: "Fast follow-up converts enquiries before competitor offers land." },
      { title: "Cleaner applications", body: "Structured doc chase reduces incomplete files at verification desk." },
      { title: "Fee collection discipline", body: "Voice reminders with link beat passive notice board posts." },
      { title: "Regional reach", body: "Telugu and Hindi campaigns reach Tier-2 districts SMS cannot." },
    ],
    roiTitle: "University metrics (illustrative)",
    roi: [
      { value: "₹45L", label: "Incremental tuition from 60 additional enrollments" },
      { value: "−18 days", label: "Average application completion time" },
      { value: "₹25", label: "Cost per connected admission call" },
    ],
    implTitle: "University deployment",
    implementation: [
      { title: "Integrate admissions CRM", body: "LeadSquared, Meritto, or custom ERP export." },
      { title: "Map programs", body: "Separate scripts per school — engineering, management, pharmacy." },
      { title: "Pilot one intake", body: "Run enquiry and doc chase for single program cohort." },
      { title: "Scale seasonally", body: "Expand to fee and counseling workflows post-pilot." },
    ],
    relatedTitle: "Related for universities",
    related: [
      { name: "Education industry", href: "/industries/education" },
      { name: "Education admissions", href: "/use-cases/education-admissions" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Document chase script", href: "/templates/admission-document-chase" },
    ],
    faqsTitle: "University FAQs",
    faqs: [
      { q: "Can we run separate campaigns per campus?", a: "Multi-campus routing with program-specific scripts and DLT templates." },
      { q: "How is student PII handled?", a: "DPDP-aligned India hosting with role-based access and redaction options." },
      { q: "Does document chase list specific pending items?", a: "Yes — dynamic fields per applicant from CRM export." },
      { q: "Can waitlisted students accept by phone?", a: "Structured yes/no capture logs to admissions CRM for seat allocation." },
      { q: "Alumni fundraising TRAI rules?", a: "Separate consent-based DLT campaign — distinct from transactional admission calls." },
    ],
    scriptTitle: "Document chase (English-Hindi)",
    scriptExcerpt: `Agent: Good afternoon, calling from XYZ University admissions. Your B.Tech application is pending migration certificate upload.
Student: I'll submit tomorrow.
Agent: Deadline is Friday 5 PM — after that seat may move to waitlist. SMS has portal link.
Student: Understood, submitting tonight.
Agent: Thank you — you'll get SMS confirmation once verified.`,
    ctaTitle: "Scale admissions without",
    ctaAccent: "tripling call center",
    ctaBody: "Pilot enquiry follow-up and document chase for one program intake — measure completion rate vs last year.",
  },

  {
    slug: "banks",
    name: "Banks",
    metaTitle: "AI Voice Agent for Banks | SvaraCall",
    metaDescription:
      "Banks use SvaraCall AI for KYC completion, loan document chase, EMI reminders, and service callback — Telugu, Hindi, English, TRAI/DPDP aligned.",
    eyebrow: "For · Banks",
    headline: "AI voice agents for banks",
    subcopy:
      "Public and private sector banks need scalable outbound for KYC pending, loan disbursal documents, and EMI nudges — without overloading branch staff. SvaraCall AI runs compliant, recorded calls in regional languages on DLT-registered headers.",
    primaryCta: "Book a banking workflow review",
    chips: ["KYC chase", "Loan docs", "EMI reminders", "Service callback"],
    stats: [
      { value: "−44%", label: "KYC pending aging in pilot branches" },
      { value: "78%", label: "Connect rate on loan doc reminders" },
      { value: "−31%", label: "EMI bounce follow-up lag" },
      { value: "100%", label: "Recording disclosure on outbound" },
    ],
    problemTitle: "Branch staff cannot dial thousands daily",
    problem:
      "Banks across India hold lakhs of accounts with incomplete KYC, pending loan documents, and overdue EMI. Branch managers assign 'calling duty' that competes with walk-in service. Customers in Tier-2 towns prefer Telugu or Hindi — English SMS fails.",
    currentTitle: "Bank outbound today",
    currentSteps: [
      "KYC pending list exported monthly — half never called.",
      "Loan doc reminder is generic SMS — disbursal delayed weeks.",
      "EMI bounce gets one letter — no structured follow-up call.",
      "Missed toll-free calls queue until agents free up.",
      "No unified log across branches for audit.",
    ],
    aiTitle: "Banking AI voice workflows",
    aiSteps: [
      "KYC pending workflow explains missing items and branch visit slot.",
      "Loan doc chase lists specific pending proofs with upload link SMS.",
      "EMI reminder 3 days before due with payment channel options.",
      "Soft bounce follow-up captures PTP date without aggressive tone.",
      "Missed IVR callback within SLA in customer's preferred language.",
    ],
    benefitsTitle: "Banking outcomes",
    benefits: [
      { title: "Regulatory hygiene", body: "Structured KYC chase reduces compliance aging reports." },
      { title: "Faster disbursal", body: "Document reminders unblock loan files stuck in ops queue." },
      { title: "Collections courtesy", body: "Recorded, disclosure-first EMI calls align with fair practice codes." },
      { title: "Branch relief", body: "Staff focus on complex service while AI handles repetitive outreach." },
    ],
    roiTitle: "Banking pilot metrics (illustrative)",
    roi: [
      { value: "₹2.8Cr", label: "Accelerated disbursal value from doc chase pilot" },
      { value: "−26%", label: "KYC pending >90 days in branch cohort" },
      { value: "₹35", label: "Cost per connected service reminder" },
    ],
    implTitle: "Bank deployment path",
    implementation: [
      { title: "Compliance review", body: "Legal and IT sign-off on scripts, disclosure, and data flow." },
      { title: "Pilot one branch", body: "KYC or loan doc workflow on controlled list." },
      { title: "Integrate core", body: "Secure file exchange or middleware — no PAN readout on open lines." },
      { title: "Audit and scale", body: "Review recordings with quality team; expand region-wise." },
    ],
    relatedTitle: "Related for banks",
    related: [
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "KYC reminder script", href: "/templates/bank-kyc-reminder" },
    ],
    faqsTitle: "Bank FAQs",
    faqs: [
      { q: "Is SvaraCall RBI audit ready?", a: "Recording, disclosure, consent logs, and India hosting support audit requirements — final approval stays with your compliance team." },
      { q: "Does AI read full account numbers aloud?", a: "No — scripts use masked identifiers; sensitive data stays in secure SMS links." },
      { q: "Can calls escalate to branch manager?", a: "Dispute or distress keywords trigger warm transfer to defined line." },
      { q: "TRAI/DLT template approval?", a: "We support DLT registration workflow — templates submitted under your entity header." },
      { q: "Which languages for rural branches?", a: "Telugu, Hindi, and English with regional phrasing configurable per circle." },
    ],
    scriptTitle: "Loan document chase (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee home loan application lo income proof pending ga undi — disbursement hold lo undi.
Customer: Office nundi salary slip teeskostanu.
Agent: Friday 5 PM lopu upload cheste next week lo disbursal process start avutundi. SMS lo secure link pampinanu.
Customer: Friday lopu chestanu.
Agent: Dhanyavaadalu — upload ayyaka confirmation SMS vastundi.`,
    ctaTitle: "Clear KYC and loan backlogs with",
    ctaAccent: "compliant outreach",
    ctaBody: "Pilot KYC or loan doc chase at one branch — measure aging reduction against your current manual process.",
  },

  {
    slug: "nbfcs",
    name: "NBFCs",
    metaTitle: "AI Voice Agent for NBFCs | SvaraCall",
    metaDescription:
      "NBFCs use SvaraCall AI for EMI reminders, collections follow-up, KYC refresh, and loan application nurture — multilingual, TRAI-compliant, audit-ready.",
    eyebrow: "For · NBFCs",
    headline: "AI voice agents for NBFCs",
    subcopy:
      "NBFCs and microfinance lenders scale portfolio outreach for EMI dues, soft collections, and application document chase — in Telugu, Hindi, and English — with recorded calls and PTP capture on DLT lines.",
    primaryCta: "Book an NBFC pilot",
    chips: ["EMI reminders", "Soft collections", "App nurture", "KYC refresh"],
    stats: [
      { value: "−27%", label: "DPD 1–30 roll rate in reminder pilots" },
      { value: "83%", label: "PTP capture rate on connected soft calls" },
      { value: "+19%", label: "Application doc completion after chase" },
      { value: "100%", label: "Call recording with disclosure" },
    ],
    problemTitle: "Portfolio growth outpaces collection desks",
    problem:
      "NBFCs lending across Bharat serve borrowers who prefer voice over app notifications. Field agents cannot visit every DPD-1 account. Application pipelines stall when salary slips and bank statements never arrive. Manual telecallers burn out on repetitive EMI scripts.",
    currentTitle: "NBFC outreach today",
    currentSteps: [
      "EMI due SMS ignored — bounce hits before human call.",
      "Collections team starts at DPD-15 — relationship already strained.",
      "Loan application pending docs sit 20+ days untouched.",
      "KYC refresh campaign is one email blast per quarter.",
      "No consistent Telugu/Hindi script across franchise partners.",
    ],
    aiTitle: "NBFC AI workflows",
    aiSteps: [
      "Pre-due EMI reminder 3 days and 1 day before with UPI/link options.",
      "Soft collections at DPD 1–7 captures promise-to-pay date and amount.",
      "Application nurture chases specific pending documents with upload link.",
      "KYC refresh explains re-verification steps and branch/digital options.",
      "All outcomes sync to LMS with recording URL for audit.",
    ],
    benefitsTitle: "NBFC outcomes",
    benefits: [
      { title: "Lower early delinquency", body: "Gentle pre-due reminders reduce bounce before bureau impact." },
      { title: "Scalable soft collections", body: "Parallel dial on DPD buckets without hiring seasonal teams." },
      { title: "Faster disbursal", body: "Doc chase unblocks files in credit ops queue." },
      { title: "Partner consistency", body: "Same compliant script whether Mumbai HQ or Vijayawada franchise." },
    ],
    roiTitle: "NBFC economics (illustrative)",
    roi: [
      { value: "₹1.2Cr", label: "Recovered EMI value from 30-day soft-call pilot" },
      { value: "−22%", label: "Application drop-off after sanction" },
      { value: "₹30", label: "Cost per connected EMI reminder" },
    ],
    implTitle: "NBFC rollout",
    implementation: [
      { title: "LMS integration", body: "Secure export or API for dues, applications, and KYC status." },
      { title: "Script compliance", body: "Legal review of disclosure, tone, and escalation boundaries." },
      { title: "Pilot one product", body: "Personal loan EMI reminders on 5,000 accounts." },
      { title: "Expand buckets", body: "Add soft collections and application nurture post-audit." },
    ],
    relatedTitle: "Related for NBFCs",
    related: [
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "EMI reminder script", href: "/templates/nbfc-emi-reminder" },
    ],
    faqsTitle: "NBFC FAQs",
    faqs: [
      { q: "Does SvaraCall handle RBI fair practice tone?", a: "Scripts are configurable — no threats, harassment, or misrepresentation; recordings available for audit." },
      { q: "Can field agents see PTP captured on AI calls?", a: "Outcomes sync to LMS with date, amount, and recording link." },
      { q: "How is borrower consent managed?", a: "Loan agreement consent plus DLT template; opt-out honored immediately." },
      { q: "Does AI negotiate settlement amounts?", a: "No — captures intent and PTP; human agent handles negotiation on transfer." },
      { q: "Regional language for microfinance portfolios?", a: "Telugu, Hindi, and English with glossary control for financial terms." },
    ],
    scriptTitle: "Pre-due EMI reminder (Hindi)",
    scriptExcerpt: `Agent: Namaste, main ABC Finance se bol rahi hoon. Aapka EMI kal due hai — ₹8,450. Payment link bhej doon?
Borrower: Haan, kal subah kar dunga UPI se.
Agent: Dhanyavaad. Kal 12 baje tak expect karenge — agar issue ho to is number par call kijiye. Yeh call record ho rahi hai.`,
    ctaTitle: "Reduce early delinquency with",
    ctaAccent: "scalable reminders",
    ctaBody: "Pilot pre-due EMI reminders on 5,000 accounts — compare bounce rate to your SMS-only baseline.",
  },

  {
    slug: "insurance-agencies",
    name: "Insurance Agencies",
    metaTitle: "AI Voice Agent for Insurance Agencies | SvaraCall",
    metaDescription:
      "Insurance agents and agencies use SvaraCall AI for renewal reminders, policy document chase, and cross-sell follow-up — Telugu, Hindi, English, IRDAI-aware scripts.",
    eyebrow: "For · Insurance Agencies",
    headline: "AI voice agents for insurance agencies",
    subcopy:
      "Insurance agencies lose renewals when premium reminders go unread and policy documents stay incomplete. SvaraCall AI calls policyholders before lapse, chases KYC and nomination updates, and follows up cross-sell leads — in regional languages on DLT lines.",
    primaryCta: "Book an insurance agency demo",
    chips: ["Renewal reminders", "Policy doc chase", "Cross-sell follow-up", "Lapse prevention"],
    stats: [
      { value: "+32%", label: "Renewal conversion on voice vs SMS-only" },
      { value: "−48%", label: "Lapse in 30-day pre-renewal pilot" },
      { value: "71%", label: "Document upload after voice chase" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Lapsed policies are lost commissions",
    problem:
      "Agency channels in India manage thousands of policies across motor, health, and life. WhatsApp renewal links get ignored. Incomplete proposal forms delay issuance. Cross-sell leads from branch referrals never get a structured callback in the customer's language.",
    currentTitle: "Agency follow-up today",
    currentSteps: [
      "Renewal SMS 7 days before — customer pays after grace period anyway.",
      "Agent manually calls top 50 policies — rest lapse silently.",
      "Proposal pending docs chased once by email.",
      "Cross-sell health lead from motor client sits in diary.",
      "No recording when customer disputes what was promised.",
    ],
    aiTitle: "Insurance agency AI workflows",
    aiSteps: [
      "Renewal reminder at T-30, T-7, and T-1 with payment link on-call.",
      "Lapse-risk policy gets priority callback with premium breakdown.",
      "Proposal doc chase lists pending KYC, medical, or vehicle inspection items.",
      "Cross-sell follow-up qualifies need and transfers to licensed agent.",
      "Every call discloses recording — outcomes log to agency CRM.",
    ],
    benefitsTitle: "Agency outcomes",
    benefits: [
      { title: "Renewal retention", body: "Voice reminder with amount and link beats passive SMS for Tier-2 policyholders." },
      { title: "Issuance speed", body: "Doc chase unblocks proposals stuck in underwriting queue." },
      { title: "Cross-sell pipeline", body: "Structured follow-up on warm referrals without agent idle time." },
      { title: "Dispute protection", body: "Recorded calls with disclosure support IRDAI conduct norms." },
    ],
    roiTitle: "Agency ROI (illustrative)",
    roi: [
      { value: "₹6.8L", label: "Saved renewal commission on 400-policy pilot" },
      { value: "+18%", label: "Cross-sell connect rate on referral lists" },
      { value: "₹28", label: "Cost per connected renewal reminder" },
    ],
    implTitle: "Agency deployment",
    implementation: [
      { title: "Import book", body: "Policy admin system or CRM export with renewal dates." },
      { title: "Script by product", body: "Motor, health, and term variants — no investment advice on AI." },
      { title: "Pilot renewal cohort", body: "Run T-30 reminders on 500 policies expiring next month." },
      { title: "Add cross-sell", body: "Upload referral leads with licensed agent handoff rules." },
    ],
    relatedTitle: "Related for insurance agencies",
    related: [
      { name: "Insurance industry", href: "/industries/insurance" },
      { name: "Insurance renewals", href: "/use-cases/insurance-renewals" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Renewal reminder script", href: "/templates/insurance-renewal-reminder" },
    ],
    faqsTitle: "Insurance agency FAQs",
    faqs: [
      { q: "Can AI give policy advice or recommend products?", a: "No — renewal and admin workflows only; product advice stays with your licensed agent on transfer." },
      { q: "Does it integrate with PolicyBazaar agent tools or local CRM?", a: "CSV and webhook integrations — specific connectors vary by stack." },
      { q: "IRDAI conduct compliance?", a: "Disclosure, recording, and no mis-selling scripts — your compliance team approves final wording." },
      { q: "Can customers pay on the call?", a: "Payment link sent via SMS during call — no card capture on voice line." },
      { q: "TRAI rules for renewal calls?", a: "Existing policyholder relationship with DLT template; opt-out immediate." },
    ],
    scriptTitle: "Motor renewal reminder (Telugu-English)",
    scriptExcerpt: `Agent: Namaskaram, mee car insurance March 15 ki expire avutundi — renewal amount ₹12,400. Link pampala?
Customer: Avunu, WhatsApp lo pampandi.
Agent: Link pampinanu — 5 minutes lo pay cheste instant policy PDF vastundi. Claim history same ga continue avutundi.
Customer: Okay, ippudu chestanu.
Agent: Thanks — renewal confirm ayyaka SMS vastundi.`,
    ctaTitle: "Protect renewal commissions before",
    ctaAccent: "policies lapse",
    ctaBody: "Run T-30 renewal calls on 500 expiring policies — compare retention to your SMS baseline.",
  },

  {
    slug: "real-estate-brokers",
    name: "Real Estate Brokers",
    metaTitle: "AI Voice Agent for Real Estate Brokers | SvaraCall",
    metaDescription:
      "Real estate brokers use SvaraCall AI for portal lead follow-up, site visit confirmation, and buyer qualification — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Real Estate Brokers",
    headline: "AI voice agents for real estate brokers",
    subcopy:
      "Brokers lose deals when 99acres and MagicBricks leads go cold overnight. SvaraCall AI calls fresh enquiries in minutes, qualifies budget and timeline, and confirms site visits — then hands hot buyers to your closers with full context.",
    primaryCta: "Book a broker pilot",
    chips: ["Portal lead speed", "Site visit confirm", "Buyer qualification", "Multilingual"],
    stats: [
      { value: "<6 min", label: "First callback on portal leads" },
      { value: "36%", label: "Pilot connect rate on fresh property leads" },
      { value: "+41%", label: "Site visit show rate with voice confirm" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "The fastest broker wins the site visit",
    problem:
      "Hyderabad and NCR brokers compete on the same portal inventory. Leads submitted at 10 PM get four calls by 9 AM — if you are fifth, you lose. Site visits no-show when WhatsApp location pins are ignored. Senior brokers waste time on unqualified ₹30 lakh budget buyers for ₹1.2 crore listings.",
    currentTitle: "Broker follow-up today",
    currentSteps: [
      "Portal lead email arrives — broker sees it next morning.",
      "Telecaller uses Hindi script on Telugu buyer — disconnect.",
      "Site visit booked but never confirmed — empty Sunday drive.",
      "No structured budget capture — CRM fields blank.",
      "Duplicate leads from two portals called twice — annoyed buyer.",
    ],
    aiTitle: "Broker AI workflows",
    aiSteps: [
      "Portal webhook triggers callback within minutes on new lead.",
      "Qualification captures budget, BHK, location, and possession timeline.",
      "Site visit booking offers two slot options with SMS map pin.",
      "Day-before confirm reduces no-show — reschedule on same call.",
      "Hot lead warm-transfers to broker with whisper summary.",
    ],
    benefitsTitle: "Broker outcomes",
    benefits: [
      { title: "Speed-to-lead edge", body: "Beat competing brokers still asleep when enquiry arrives at night." },
      { title: "Qualified site visits", body: "Budget filter before you drive to the project." },
      { title: "Higher show rate", body: "Voice confirm beats WhatsApp for Sunday visit commitments." },
      { title: "Language match", body: "Telugu buyers in Gachibowli stay engaged through qualification." },
    ],
    roiTitle: "Broker economics (illustrative)",
    roi: [
      { value: "₹18L", label: "Incremental brokerage from 3 extra closures in 90 days" },
      { value: "+35%", label: "Qualified visit rate vs unfiltered leads" },
      { value: "₹22", label: "Cost per connected lead follow-up" },
    ],
    implTitle: "Broker rollout",
    implementation: [
      { title: "Connect portals", body: "99acres, MagicBricks, Housing webhook or email parser." },
      { title: "Define qualification", body: "Budget band, purpose, and timeline scoring thresholds." },
      { title: "Pilot 300 leads", body: "Measure visit booking and show rate vs manual team." },
      { title: "Scale projects", body: "Separate campaigns per developer inventory." },
    ],
    relatedTitle: "Related for real estate brokers",
    related: [
      { name: "Real estate industry", href: "/industries/real-estate" },
      { name: "Real estate site visit", href: "/use-cases/real-estate-site-visit" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Site visit confirm script", href: "/templates/real-estate-site-visit-confirm" },
    ],
    faqsTitle: "Real estate broker FAQs",
    faqs: [
      { q: "Can AI quote prices or negotiate?", a: "No — captures preferences and budget; pricing and negotiation stay with licensed broker on transfer." },
      { q: "Does it dedupe leads across portals?", a: "Phone-based dedup prevents double-calling same buyer same day." },
      { q: "Site visit confirm with map link?", a: "SMS with Google Maps pin sent during confirm call." },
      { q: "RERA compliance on calls?", a: "Scripts avoid false promises; project RERA ID referenced where configured." },
      { q: "Which languages for Hyderabad/NCR?", a: "Telugu, Hindi, and English with code-switching support." },
    ],
    scriptTitle: "Portal lead follow-up (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee 3BHK enquiry Gachibowli project ki — budget range cheppagalara?
Buyer: 1.2 crore daka, December lo shift.
Agent: Bagundi — repu 11 AM site visit slot undi. Project RERA approved — map link SMS lo pampistaa.
Buyer: Okay, vastanu.
Agent: Confirm — repu 11 AM, sales office gate 2. Broker Rajesh meet avtaru.`,
    ctaTitle: "Win site visits with",
    ctaAccent: "faster callbacks",
    ctaBody: "Connect portal leads and run 300 follow-ups — compare qualified visit rate to your current speed.",
  },

  {
    slug: "property-developers",
    name: "Property Developers",
    metaTitle: "AI Voice Agent for Property Developers | SvaraCall",
    metaDescription:
      "Property developers use SvaraCall AI for launch lead nurture, site visit scheduling, and booking follow-up — multilingual, TRAI-compliant, CRM-synced.",
    eyebrow: "For · Property Developers",
    headline: "AI voice agents for property developers",
    subcopy:
      "Developers running pre-launch and inventory sell-through need speed and scale on lead nurture. SvaraCall AI qualifies channel partner and direct leads, confirms experience center visits, and chases token booking documents — in Telugu, Hindi, and English.",
    primaryCta: "Book a developer demo",
    chips: ["Launch nurture", "Experience center", "Token follow-up", "Partner leads"],
    stats: [
      { value: "5,000+", label: "Daily outbound capacity per launch campaign" },
      { value: "+27%", label: "Experience center show rate with confirm calls" },
      { value: "−39%", label: "Token drop-off after voice doc chase" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Launch spend wasted on slow nurture",
    problem:
      "Developers in Pune and Bangalore spend crores on launch ads but call centers qualify leads over days. Experience center slots go empty on weekdays. Token buyers stall on cheque and KYC submission — inventory gets blocked without revenue recognition.",
    currentTitle: "Developer sales ops today",
    currentSteps: [
      "Launch leads pooled — FIFO calling over a week.",
      "Channel partner leads mixed with direct — no priority routing.",
      "Experience center visit is SMS invite — 40% no-show.",
      "Token booking docs chased manually by one coordinator.",
      "Post-visit feedback never captured systematically.",
    ],
    aiTitle: "Developer AI sales workflows",
    aiSteps: [
      "Launch lead instant callback with project, config, and budget qualification.",
      "Experience center slot booking with day-before voice confirm.",
      "Token follow-up chases cheque, PAN, and agreement signature status.",
      "Channel partner leads tagged separately for partner CRM sync.",
      "Post-visit NPS call within 24h — hot buyer flagged for RM transfer.",
    ],
    benefitsTitle: "Developer outcomes",
    benefits: [
      { title: "Launch velocity", body: "Parallel qualification on ad spike without 50 new telecallers." },
      { title: "Inventory momentum", body: "Token doc chase reduces blocked units sitting unsold." },
      { title: "Partner alignment", body: "Separate workflows for CP leads with attribution intact." },
      { title: "Visit yield", body: "Confirmed experience center traffic improves conversion analytics." },
    ],
    roiTitle: "Developer ROI (illustrative)",
    roi: [
      { value: "₹2.4Cr", label: "Accelerated booking value from token chase pilot" },
      { value: "+22%", label: "Lead-to-visit conversion in launch month" },
      { value: "₹26", label: "Cost per connected nurture call" },
    ],
    implTitle: "Developer deployment",
    implementation: [
      { title: "Connect CRM", body: "Salesforce, LeadSquared, or custom pre-sales system." },
      { title: "Map inventory", body: "Tower, config, and price band logic per campaign." },
      { title: "Pilot one tower", body: "Run launch nurture on single phase inventory." },
      { title: "Scale post-RERA", body: "Expand to channel partner and referral workflows." },
    ],
    relatedTitle: "Related for property developers",
    related: [
      { name: "Real estate industry", href: "/industries/real-estate" },
      { name: "Real estate site visit", href: "/use-cases/real-estate-site-visit" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Token booking script", href: "/templates/property-token-follow-up" },
    ],
    faqsTitle: "Property developer FAQs",
    faqs: [
      { q: "Can AI share pricing and offers?", a: "Scripts reference approved price bands — final offer and negotiation stay with RM on transfer." },
      { q: "Channel partner lead attribution?", a: "CP ID tagged on ingest — separate reporting per partner." },
      { q: "Experience center capacity management?", a: "Live slot cap prevents overbooking per time window." },
      { q: "RERA and disclosure on calls?", a: "Project RERA number and recording disclosure in opening — compliance team approves script." },
      { q: "Multilingual for local launches?", a: "Telugu for Hyderabad, Hindi for NCR, English default — per project config." },
    ],
    scriptTitle: "Experience center confirm (Hinglish)",
    scriptExcerpt: `Agent: Namaste, ABC Heights se bol rahi hoon — kal 4 PM ka site visit confirm hai?
Buyer: Haan, wife ke saath aa rahe hain.
Agent: Perfect. Address SMS mein hai — sample flat 12th floor dikhega. Token offer 31 tak valid hai — documents saath layiye.
Buyer: PAN aur cheque ready hai.
Agent: Bahut achha — relationship manager Vikram aapka wait karenge.`,
    ctaTitle: "Convert launch spend into",
    ctaAccent: "booked inventory",
    ctaBody: "Pilot lead nurture and visit confirm for one tower — measure token conversion vs your current call center.",
  },

  {
    slug: "logistics-companies",
    name: "Logistics Companies",
    metaTitle: "AI Voice Agent for Logistics Companies | SvaraCall",
    metaDescription:
      "Logistics and freight companies use SvaraCall AI for pickup scheduling, delivery confirmation, and POD chase — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Logistics Companies",
    headline: "AI voice agents for logistics companies",
    subcopy:
      "3PL and freight operators lose margin on failed pickups, address mismatches, and POD delays. SvaraCall AI confirms pickup windows, verifies delivery OTP, and chases pending proof-of-delivery — at scale in regional languages.",
    primaryCta: "Book a logistics pilot",
    chips: ["Pickup confirm", "Delivery OTP", "POD chase", "Exception alerts"],
    stats: [
      { value: "−36%", label: "Failed first-attempt delivery in pilots" },
      { value: "81%", label: "Pickup window confirm connect rate" },
      { value: "−45%", label: "POD submission lag after voice chase" },
      { value: "1,500+", label: "Daily outbound per dispatch campaign" },
    ],
    problemTitle: "First-attempt failure erodes margin",
    problem:
      "Logistics firms moving B2B freight and last-mile across India fight address errors, consignee unavailable, and COD disputes. Dispatchers cannot call every shipment. Telugu and Hindi consignees miss English SMS alerts.",
    currentTitle: "Logistics communication today",
    currentSteps: [
      "Pickup scheduled in TMS — driver arrives, shipper not ready.",
      "Delivery SMS ignored — rider makes failed attempt.",
      "COD amount disputed at door — no prior confirm call.",
      "POD photo pending — invoice billing delayed two weeks.",
      "Exception codes entered without consignee contact attempt logged.",
    ],
    aiTitle: "Logistics AI workflows",
    aiSteps: [
      "Pickup confirm call evening before with ready-time and dock gate.",
      "Out-for-delivery alert with narrow window and COD amount confirm.",
      "OTP or verbal confirm at delivery attempt documentation.",
      "POD pending chase to consignee and shipper with upload link.",
      "Exception workflow captures reschedule preference on failed attempt.",
    ],
    benefitsTitle: "Logistics outcomes",
    benefits: [
      { title: "Higher FAD", body: "Confirmed availability cuts failed delivery attempts and return cost." },
      { title: "Pickup reliability", body: "Shipper ready when truck arrives — less driver idle time." },
      { title: "Faster billing", body: "POD chase accelerates invoice trigger for enterprise shippers." },
      { title: "COD clarity", body: "Amount confirmed before rider reaches gate — fewer disputes." },
    ],
    roiTitle: "Logistics ROI (illustrative)",
    roi: [
      { value: "₹4.2L", label: "Monthly savings on re-attempt cost at mid-size 3PL" },
      { value: "+14%", label: "First-attempt delivery rate" },
      { value: "₹16", label: "Cost per connected delivery confirm" },
    ],
    implTitle: "Logistics rollout",
    implementation: [
      { title: "TMS integration", body: "Webhook or CSV from dispatch system on shipment events." },
      { title: "Script by mode", body: "FTL pickup, last-mile COD, and B2B POD variants." },
      { title: "Pilot one lane", body: "Run delivery confirm on Hyderabad–Bangalore lane." },
      { title: "Scale network", body: "Expand to pickup confirm and POD chase nationally." },
    ],
    relatedTitle: "Related for logistics companies",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Delivery confirm script", href: "/templates/logistics-delivery-confirm" },
    ],
    faqsTitle: "Logistics FAQs",
    faqs: [
      { q: "Does it integrate with Shiprocket or custom TMS?", a: "Event webhooks and CSV exports — connector depth varies by platform." },
      { q: "COD amount confirmation on call?", a: "Agent states exact rupee amount — consignee confirms before rider dispatch." },
      { q: "Regional language for consignees?", a: "Telugu, Hindi, and English per destination pin code rules." },
      { q: "POD upload link security?", a: "Time-limited secure link — no AWB details read aloud beyond last four digits." },
      { q: "TRAI rules for transactional delivery calls?", a: "Shipment relationship plus DLT template; marketing separate." },
    ],
    scriptTitle: "Delivery window confirm (Hindi)",
    scriptExcerpt: `Agent: Namaste, aapka shipment aaj deliver hoga — 2 se 5 baje available hain? COD ₹1,850 hai.
Consignee: Haan, ghar pe hoon. Cash ready hai.
Agent: Rider 2-5 ke beech aayega — OTP SMS par aayega delivery par.
Consignee: Theek hai.
Agent: Dhanyavaad — track link SMS mein bhej diya.`,
    ctaTitle: "Improve first-attempt delivery with",
    ctaAccent: "voice confirms",
    ctaBody: "Pilot delivery confirmation on one lane for 30 days — measure FAD rate vs SMS-only baseline.",
  },

  {
    slug: "courier-services",
    name: "Courier Services",
    metaTitle: "AI Voice Agent for Courier Services | SvaraCall",
    metaDescription:
      "Courier and express parcel services use SvaraCall AI for pickup scheduling, delivery alerts, and undelivered recovery — multilingual, TRAI-compliant.",
    eyebrow: "For · Courier Services",
    headline: "AI voice agents for courier services",
    subcopy:
      "Express courier brands handling documents and parcels need consignees available when riders arrive. SvaraCall AI confirms pickup slots, narrows delivery windows, and recovers undelivered shipments — in Telugu, Hindi, and English.",
    primaryCta: "Book a courier pilot",
    chips: ["Pickup slots", "Delivery alerts", "Undelivered recovery", "COD confirm"],
    stats: [
      { value: "−32%", label: "Undelivered rate after voice alert pilot" },
      { value: "77%", label: "Pickup slot adherence with confirm calls" },
      { value: "+21%", label: "Same-day reattempt success" },
      { value: "2,000+", label: "Daily alerts per hub campaign" },
    ],
    problemTitle: "Riders lose hours on missed consignees",
    problem:
      "Courier hubs in metro and Tier-2 cities run tight SLAs for same-day and next-day. Consignees miss calls from unknown numbers. Pickup requests sit unconfirmed — rider reaches empty office. Document couriers face highest cost per failed attempt.",
    currentTitle: "Courier ops communication",
    currentSteps: [
      "Tracking SMS sent — consignee does not read before meeting.",
      "Rider calls from personal phone — marked spam, ignored.",
      "Pickup scheduled online — no confirm, shipper out for lunch.",
      "Undelivered returned to hub — manual reschedule next day.",
      "Enterprise client SLA breach with no contact attempt proof.",
    ],
    aiTitle: "Courier AI call flows",
    aiSteps: [
      "Out-for-delivery call narrows 4-hour window to 1-hour slot.",
      "Pickup confirm verifies contact person, floor, and document readiness.",
      "Undelivered same-day recovery offers evening reattempt slot.",
      "Enterprise shipper gets batch exception report with call logs.",
      "COD and document-handoff instructions confirmed before rider dispatch.",
    ],
    benefitsTitle: "Courier outcomes",
    benefits: [
      { title: "SLA improvement", body: "Consignee availability confirmed — fewer hub returns." },
      { title: "Rider productivity", body: "Less idle driving between failed attempts." },
      { title: "Enterprise proof", body: "Logged contact attempts support client SLA audits." },
      { title: "Document reliability", body: "Critical legal and bank couriers get confirm priority." },
    ],
    roiTitle: "Courier economics (illustrative)",
    roi: [
      { value: "₹3.1L", label: "Monthly rider productivity gain at busy hub" },
      { value: "+17%", label: "Same-day delivery success rate" },
      { value: "₹14", label: "Cost per connected delivery alert" },
    ],
    implTitle: "Courier deployment",
    implementation: [
      { title: "Hub integration", body: "Connect sorting system export on OFD scan event." },
      { title: "Segment flows", body: "Document, parcel, and COD scripts with priority tiers." },
      { title: "Pilot one hub", body: "Run OFD alerts for 30 days — measure undelivered rate." },
      { title: "Enterprise rollout", body: "Dedicated reporting for key account SLAs." },
    ],
    relatedTitle: "Related for courier services",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Courier OFD script", href: "/templates/courier-out-for-delivery" },
    ],
    faqsTitle: "Courier FAQs",
    faqs: [
      { q: "Caller ID shows our brand number?", a: "Yes — DLT-registered header configured to your courier brand." },
      { q: "Can consignee reschedule on the call?", a: "Alternate slot offered and pushed back to routing system via webhook." },
      { q: "Document courier priority queue?", a: "Shipment type flag triggers express confirm workflow." },
      { q: "Proof of contact attempt for SLA?", a: "Timestamp, outcome, and recording URL exportable per AWB." },
      { q: "Languages per delivery city?", a: "Telugu, Hindi, English mapped by hub territory." },
    ],
    scriptTitle: "Out-for-delivery alert (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee document shipment ee roju deliver avutundi — 3 to 4 PM available unnara?
Consignee: Avunu, office lo untanu — reception lo drop cheyandi.
Agent: Noted — rider 3:30 ki reach avtaru. OTP SMS vastundi — ID kuda teesukondi.
Consignee: Okay.
Agent: Thanks — tracking link SMS lo undi.`,
    ctaTitle: "Cut undelivered returns at the",
    ctaAccent: "hub level",
    ctaBody: "Pilot out-for-delivery voice alerts at one hub — compare same-day success to SMS baseline.",
  },

  {
    slug: "ecommerce-brands",
    name: "E-commerce Brands",
    metaTitle: "AI Voice Agent for E-commerce Brands | SvaraCall",
    metaDescription:
      "E-commerce brands use SvaraCall AI for COD verification, order updates, and cart abandonment recovery — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · E-commerce Brands",
    headline: "AI voice agents for e-commerce brands",
    subcopy:
      "Marketplace and D2C brands lose margin on COD refusals, WISMO calls, and abandoned carts. SvaraCall AI verifies COD intent before dispatch, proactive order updates, and recovers high-value carts — in the languages your buyers speak.",
    primaryCta: "Book an ecommerce pilot",
    chips: ["COD verify", "Order updates", "Cart recovery", "Returns callback"],
    stats: [
      { value: "−42%", label: "COD RTO after verification calls" },
      { value: "+19%", label: "High-value cart recovery in 7-day window" },
      { value: "−55%", label: "WISMO tickets after proactive updates" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "COD and silence drain marketplace margin",
    problem:
      "E-commerce brands selling on Shopify, Amazon, and Flipkart fight RTO on impulse COD orders. Support inboxes flood with 'where is my order' in Hindi. Cart abandoners at ₹5,000+ AOV never get a personal callback — only email.",
    currentTitle: "E-commerce communication today",
    currentSteps: [
      "COD order ships without confirmation — refused at door.",
      "Tracking SMS in English — Tier-2 buyer does not understand.",
      "Cart abandonment email — 3% recovery on mobile shoppers.",
      "Return request processed — no feedback call on reason.",
      "Sale spike overwhelms support — chat queue 2 hours.",
    ],
    aiTitle: "E-commerce AI workflows",
    aiSteps: [
      "COD verify call before dispatch confirms intent and address landmark.",
      "Shipped and out-for-delivery proactive calls in buyer's language.",
      "High-AOV cart abandonment callback within 2 hours with offer code.",
      "Return initiated follow-up captures reason for product team.",
      "VIP repeat buyer proactive delay alert before they contact support.",
    ],
    benefitsTitle: "E-commerce outcomes",
    benefits: [
      { title: "RTO reduction", body: "COD verify filters fake and changed-mind orders pre-ship." },
      { title: "Support deflection", body: "Proactive updates cut WISMO volume and CSAT drops." },
      { title: "Cart revenue", body: "Voice recovery beats email for ₹3,000+ abandoned carts." },
      { title: "Regional buyers", body: "Telugu and Hindi updates build trust beyond metro English SMS." },
    ],
    roiTitle: "E-commerce ROI (illustrative)",
    roi: [
      { value: "₹8.5L", label: "Monthly RTO savings at 2,000 orders/day brand" },
      { value: "+₹2.1L", label: "Recovered cart revenue in 30-day pilot" },
      { value: "₹18", label: "Cost per connected COD verify" },
    ],
    implTitle: "E-commerce rollout",
    implementation: [
      { title: "Connect OMS", body: "Shopify, Unicommerce, or marketplace webhook on order events." },
      { title: "Segment rules", body: "COD verify threshold, AOV cart recovery, VIP flags." },
      { title: "Pilot COD lane", body: "Verify 1,000 COD orders — measure RTO vs control." },
      { title: "Add proactive", body: "Chain shipped and OFD updates post-verify win." },
    ],
    relatedTitle: "Related for e-commerce brands",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "COD verify script", href: "/templates/ecommerce-cod-verify" },
    ],
    faqsTitle: "E-commerce FAQs",
    faqs: [
      { q: "Shopify and Unicommerce integration?", a: "Webhook on order placed, shipped, and OFD events — setup in days." },
      { q: "Does COD verify delay dispatch?", a: "Unverified orders hold in queue — SLA you configure per warehouse cut-off." },
      { q: "Cart recovery offer codes?", a: "Unique verbal codes logged per call — reconcile in OMS." },
      { q: "Marketplace orders or own site only?", a: "Own-site and D2C first; marketplace where buyer phone available per policy." },
      { q: "TRAI rules for promotional cart calls?", a: "Separate DLT consent campaign; transactional order calls use purchase relationship." },
    ],
    scriptTitle: "COD verification (Hinglish)",
    scriptExcerpt: `Agent: Hi, StyleKart se bol rahi hoon — aapne ek kurta COD ₹1,899 par order kiya. Confirm karna hai?
Customer: Haan, ghar pe deliver karna — Green Park gate 3.
Agent: Noted landmark. Kal ship hoga — delivery 3-4 din. Cancel chahiye to abhi bata dijiye.
Customer: Nahi, chahiye.
Agent: Dhanyavaad — tracking SMS jayega.`,
    ctaTitle: "Cut RTO before packages",
    ctaAccent: "leave the warehouse",
    ctaBody: "Pilot COD verify on 1,000 orders — compare RTO rate to your current dispatch process.",
  },

  {
    slug: "d2c-brands",
    name: "D2C Brands",
    metaTitle: "AI Voice Agent for D2C Brands | SvaraCall",
    metaDescription:
      "D2C brands use SvaraCall AI for subscription renewals, replenishment nudges, and VIP customer callbacks — Telugu, Hindi, English, TRAI-aware.",
    eyebrow: "For · D2C Brands",
    headline: "AI voice agents for D2C brands",
    subcopy:
      "Direct-to-consumer brands live on repeat purchase and community trust. SvaraCall AI nudges replenishment before product runs out, confirms subscription renewals, and callbacks high-LTV customers — in regional languages on compliant outbound lines.",
    primaryCta: "Book a D2C pilot",
    chips: ["Replenishment", "Subscription renew", "VIP callback", "Win-back"],
    stats: [
      { value: "+26%", label: "Repeat purchase rate on replenishment calls" },
      { value: "−34%", label: "Subscription churn with pre-renew voice" },
      { value: "22%", label: "Win-back redemption on 90-day lapsed buyers" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "One-time buyers never become subscribers",
    problem:
      "D2C skincare, nutrition, and home brands acquire expensively on Meta but churn when customers forget to reorder. Subscription boxes lapse silently. High-LTV customers with delivery issues tweet before support sees the ticket.",
    currentTitle: "D2C retention today",
    currentSteps: [
      "Replenishment email at day-25 — opened by 8% on mobile.",
      "Subscription renewal fails on card — one SMS, then churn.",
      "VIP customer complaint on Instagram — no proactive outreach.",
      "Win-back discount blasted to full list — margin destroyed.",
      "WhatsApp broadcast blocked after third promotional message.",
    ],
    aiTitle: "D2C AI retention workflows",
    aiSteps: [
      "Replenishment call 5 days before estimated product empty date.",
      "Subscription pre-renew confirm with payment link and skip option.",
      "Failed payment retry call with alternate UPI suggestion.",
      "VIP delay or damage proactive callback before support ticket.",
      "Segmented win-back on 90-day lapsed with personalized offer cap.",
    ],
    benefitsTitle: "D2C outcomes",
    benefits: [
      { title: "LTV lift", body: "Voice replenishment beats passive email for habit-forming products." },
      { title: "Subscription save", body: "Pre-renew confirm catches skip intent before billing fails." },
      { title: "Brand love", body: "Proactive VIP callback turns complaints into retention." },
      { title: "Margin-safe win-back", body: "Targeted offers to lapsed cohorts — not full-list blasts." },
    ],
    roiTitle: "D2C economics (illustrative)",
    roi: [
      { value: "₹5.2L", label: "Incremental repeat revenue in 60-day pilot" },
      { value: "−28%", label: "Subscription involuntary churn" },
      { value: "₹24", label: "Cost per connected replenishment call" },
    ],
    implTitle: "D2C deployment",
    implementation: [
      { title: "Connect Shopify", body: "Order history and subscription app webhook for triggers." },
      { title: "Define replenishment", body: "SKU-to-day mapping for consumable cycle length." },
      { title: "Pilot 500 customers", body: "Replenishment on top SKU cohort — measure repeat rate." },
      { title: "Add subscription", body: "Pre-renew workflow for active subscribers." },
    ],
    relatedTitle: "Related for D2C brands",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Win-back campaigns", href: "/use-cases/win-back" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Replenishment script", href: "/templates/d2c-replenishment-nudge" },
    ],
    faqsTitle: "D2C FAQs",
    faqs: [
      { q: "Recharge, Bold, or Appstle subscription integration?", a: "Webhook on renewal event — connector setup during onboarding." },
      { q: "Can customers skip or pause on the call?", a: "Structured capture logs skip reason to subscription app." },
      { q: "Offer caps on win-back?", a: "Max discount percent configured — agent cannot exceed approved offer." },
      { q: "TRAI consent for replenishment calls?", a: "Prior purchase relationship plus DLT template; opt-out immediate." },
      { q: "Which languages for Tier-2 D2C buyers?", a: "Telugu, Hindi, and English based on shipping state or preference." },
    ],
    scriptTitle: "Replenishment nudge (English-Telugu)",
    scriptExcerpt: `Agent: Hi, NutriGlow nundi — mee vitamin gummies almost aipoyayi anukuntunnam. Reorder cheyala?
Customer: Avunu, same flavour kavali.
Agent: Perfect — last order lo 60-count jar. Payment link SMS lo pampinanu — 10% loyalty discount apply ayyindi.
Customer: Link open chestanu ippudu.
Agent: Thanks for being a repeat customer!`,
    ctaTitle: "Turn one-time buyers into",
    ctaAccent: "repeat subscribers",
    ctaBody: "Pilot replenishment calls on 500 customers — compare repeat purchase rate to email-only nudges.",
  },

  {
    slug: "manufacturing",
    name: "Manufacturing",
    metaTitle: "AI Voice Agent for Manufacturing | SvaraCall",
    metaDescription:
      "Manufacturers use SvaraCall AI for dealer order confirm, dispatch alerts, and payment collection follow-up — Telugu, Hindi, English, B2B-ready.",
    eyebrow: "For · Manufacturing",
    headline: "AI voice agents for manufacturing",
    subcopy:
      "Manufacturers selling through dealer networks need reliable outbound for order confirmation, dispatch intimation, and outstanding collection. SvaraCall AI scales dealer communication in regional languages — with recorded calls and CRM sync.",
    primaryCta: "Book a manufacturing demo",
    chips: ["Dealer orders", "Dispatch alerts", "Collection follow-up", "Scheme notify"],
    stats: [
      { value: "−38%", label: "Order ambiguity disputes after confirm calls" },
      { value: "82%", label: "Dispatch alert acknowledgment rate" },
      { value: "−29%", label: "Outstanding aging >60 days in pilot region" },
      { value: "900+", label: "Daily dealer calls per campaign" },
    ],
    problemTitle: "Dealer network chaos costs working capital",
    problem:
      "FMCG, auto components, and industrial manufacturers rely on hundreds of dealers across states. Order errors from phone miscommunication cause returns. Dispatch arrives unannounced — no warehouse staff. Outstanding balances age because regional sales teams cannot call every account monthly.",
    currentTitle: "Manufacturer dealer comms today",
    currentSteps: [
      "Dealer order taken on WhatsApp voice note — SKU errors common.",
      "Dispatch intimation is SMS — dealer warehouse closed.",
      "Collection visit monthly — overdue accounts never hear between visits.",
      "New scheme launch email — 15% dealers aware by month end.",
      "No audit trail when dealer disputes quantity shipped.",
    ],
    aiTitle: "Manufacturing AI workflows",
    aiSteps: [
      "Order confirm call reads back SKU, quantity, and delivery date.",
      "Dispatch alert notifies dealer warehouse with ETA and vehicle number.",
      "Outstanding reminder captures PTP date before field visit.",
      "Scheme launch call explains slab benefit and order cutoff.",
      "Dispute keyword escalates to regional sales manager live.",
    ],
    benefitsTitle: "Manufacturing outcomes",
    benefits: [
      { title: "Order accuracy", body: "Verbal read-back reduces wrong-SKU returns and credit notes." },
      { title: "Receiving readiness", body: "Dealer warehouse staffed when truck arrives." },
      { title: "Cash flow", body: "Structured outstanding reminders complement field collection." },
      { title: "Scheme uptake", body: "Voice explain beats PDF circular for Tier-2 dealers." },
    ],
    roiTitle: "Manufacturing ROI (illustrative)",
    roi: [
      { value: "₹22L", label: "Recovered outstanding in 90-day pilot region" },
      { value: "−41%", label: "Order dispute tickets" },
      { value: "₹32", label: "Cost per connected dealer call" },
    ],
    implTitle: "Manufacturing rollout",
    implementation: [
      { title: "ERP export", body: "Order, dispatch, and ledger export from SAP or Tally integration." },
      { title: "Territory map", body: "Language and RM escalation rules per sales region." },
      { title: "Pilot one region", body: "Run dispatch alert and collection in Andhra Pradesh." },
      { title: "Scale network", body: "Expand to scheme launch and order confirm nationally." },
    ],
    relatedTitle: "Related for manufacturing",
    related: [
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Dealer dispatch script", href: "/templates/manufacturing-dispatch-alert" },
    ],
    faqsTitle: "Manufacturing FAQs",
    faqs: [
      { q: "SAP or Tally integration?", a: "Scheduled secure export or middleware — read-only order and ledger feeds." },
      { q: "Can dealer confirm order changes on call?", a: "Amendment captured and flagged for human approval in ERP." },
      { q: "Collection tone for long-standing dealers?", a: "Relationship-aware scripts — reminder not threat; RM escalation available." },
      { q: "Multi-language by dealer state?", a: "Telugu, Hindi, and English per territory configuration." },
      { q: "TRAI B2B outbound rules?", a: "DLT template under manufacturer entity; opt-out honored on dealer request." },
    ],
    scriptTitle: "Dispatch alert (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee order #4521 dispatch ayyindi — 12 ton cement kalu repu morning 8 ki reach avutundi. Warehouse ready ga unda?
Dealer: Avunu, labour unnaru.
Agent: Vehicle AP09XX1234 — driver number SMS lo pampinanu. Receipt sign cheyandi delivery app lo.
Dealer: Okay, noted.`,
    ctaTitle: "Tighten dealer ops and",
    ctaAccent: "collections",
    ctaBody: "Pilot dispatch alerts and outstanding reminders in one region — measure dispute and aging reduction.",
  },

  {
    slug: "automobile-dealers",
    name: "Automobile Dealers",
    metaTitle: "AI Voice Agent for Automobile Dealers | SvaraCall",
    metaDescription:
      "Car and bike dealers use SvaraCall AI for test drive follow-up, service reminders, and insurance renewal — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Automobile Dealers",
    headline: "AI voice agents for automobile dealers",
    subcopy:
      "Auto dealerships lose showroom traffic when web leads go cold and service bays sit idle. SvaraCall AI follows up enquiry and test drive leads, reminds on service due, and nudges insurance renewal — in the languages buyers prefer.",
    primaryCta: "Book an auto dealer pilot",
    chips: ["Test drive follow-up", "Service due", "Insurance renew", "Lead speed"],
    stats: [
      { value: "<12 min", label: "First callback on website leads" },
      { value: "+31%", label: "Test drive booking from voice follow-up" },
      { value: "−24%", label: "Service no-show with reminder calls" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Showroom leads expire by morning",
    problem:
      "Dealerships in Hyderabad and Delhi NCR receive car and bike enquiries around the clock. Sales executives call back next day — customer already visited competitor. Service advisors cannot remind every customer due for 10,000 km check — bays run at 60% utilization.",
    currentTitle: "Dealer follow-up today",
    currentSteps: [
      "Website lead sits in DMS until salesperson free.",
      "Test drive booked — 35% no-show on weekends.",
      "Service due SMS ignored — customer goes to local garage.",
      "Insurance renewal on sold vehicle never chased — lost commission.",
      "Post-delivery satisfaction call skipped during delivery rush.",
    ],
    aiTitle: "Auto dealer AI workflows",
    aiSteps: [
      "Enquiry callback within minutes qualifies model, budget, and exchange.",
      "Test drive confirm day-before with showroom directions.",
      "Service due reminder offers slot booking on live calendar.",
      "Insurance renewal nudge on vehicles sold 11 months ago.",
      "Hot buyer warm-transfers to sales executive with summary.",
    ],
    benefitsTitle: "Dealer outcomes",
    benefits: [
      { title: "Showroom traffic", body: "Speed-to-lead converts night enquiries to weekend test drives." },
      { title: "Service revenue", body: "Proactive service reminders fill bay capacity." },
      { title: "F&I attach", body: "Insurance renewal calls recover lost commission on sold fleet." },
      { title: "Language comfort", body: "Telugu and Hindi buyers stay engaged through qualification." },
    ],
    roiTitle: "Dealer economics (illustrative)",
    roi: [
      { value: "₹14L", label: "Incremental margin from 8 extra retails in quarter" },
      { value: "+₹2.8L", label: "Service labor revenue from reminder pilot" },
      { value: "₹23", label: "Cost per connected lead follow-up" },
    ],
    implTitle: "Dealer deployment",
    implementation: [
      { title: "Connect DMS", body: "Lead, service, and sold-vehicle export from dealer system." },
      { title: "Script by outlet", body: "New vehicle, service, and insurance workflows per brand policy." },
      { title: "Pilot sales leads", body: "300 enquiry callbacks — measure test drive rate." },
      { title: "Add service", body: "Chain service due reminders to bay calendar." },
    ],
    relatedTitle: "Related for automobile dealers",
    related: [
      { name: "Automotive industry", href: "/industries/automotive" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Insurance renewals", href: "/use-cases/insurance-renewals" },
      { name: "Calendar booking", href: "/features/calendar-booking" },
      { name: "Test drive script", href: "/templates/auto-test-drive-confirm" },
    ],
    faqsTitle: "Automobile dealer FAQs",
    faqs: [
      { q: "OEM DMS integration?", a: "Varies by brand — CSV export works day one for most dealer systems." },
      { q: "Can AI quote on-road price?", a: "No — captures preferences; pricing and offers stay with sales executive on transfer." },
      { q: "Service slot booking live?", a: "Bay calendar sync offers two slot options on reminder call." },
      { q: "Insurance renewal without advice?", a: "Renewal reminder and link only — no product recommendation on AI." },
      { q: "TRAI rules for service reminders?", a: "Existing customer relationship with DLT template; promotional offers separate consent." },
    ],
    scriptTitle: "Test drive confirm (Hindi)",
    scriptExcerpt: `Agent: Namaste, Metro Motors se bol rahi hoon — kal 11 baje Creta test drive confirm hai?
Customer: Haan, wife ke saath aaenge.
Agent: Perfect. Showroom Sector 18 — SMS mein map hai. DL saath layiye. Sales executive Rahul wait karenge.
Customer: Okay, confirmed.
Agent: Kal milte hain!`,
    ctaTitle: "Fill showrooms and service bays with",
    ctaAccent: "faster follow-up",
    ctaBody: "Connect DMS leads and run 300 callbacks — compare test drive bookings to your current response time.",
  },

  {
    slug: "salons",
    name: "Salons",
    metaTitle: "AI Voice Agent for Salons | SvaraCall",
    metaDescription:
      "Salons and spas use SvaraCall AI for appointment reminders, membership renewals, and rebooking nudges — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Salons",
    headline: "AI voice agents for salons",
    subcopy:
      "Salon chains and independent stylists lose revenue on no-shows and lapsed memberships. SvaraCall AI confirms tomorrow's appointments, nudges members before expiry, and win-backs clients overdue for a visit — without tying up the front desk.",
    primaryCta: "Book a salon pilot",
    chips: ["Appointment confirm", "Membership renew", "Rebooking nudge", "No-show recovery"],
    stats: [
      { value: "−35%", label: "No-show rate with day-before voice confirm" },
      { value: "+28%", label: "Membership renewal before expiry" },
      { value: "18%", label: "Win-back on 60-day lapsed clients" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Empty stylist chairs on Saturday hurt",
    problem:
      "Salons in urban India run back-to-back bookings but clients no-show without canceling. Membership packages expire silently. Front desk cannot call every tomorrow appointment while checking in walk-ins.",
    currentTitle: "Salon booking ops today",
    currentSteps: [
      "WhatsApp reminder muted — client no-shows at 4 PM slot.",
      "Membership expires — client discovers at next visit months later.",
      "Festive package upsell never pitched to regulars.",
      "Waitlist not called when cancellation happens mid-day.",
      "Google booking enquiry missed during peak hours.",
    ],
    aiTitle: "Salon AI workflows",
    aiSteps: [
      "Day-before appointment confirm with cancel-or-reschedule choice.",
      "Same-day no-show recovery offers alternate slot within the week.",
      "Membership T-7 renewal call with payment link.",
      "60-day lapsed client win-back with stylist-specific offer.",
      "Missed Google enquiry callback within 15 minutes.",
    ],
    benefitsTitle: "Salon outcomes",
    benefits: [
      { title: "Chair utilization", body: "Early cancel releases slot for waitlist backfill." },
      { title: "Membership revenue", body: "Pre-expiry voice beats passive SMS for package renewals." },
      { title: "Stylist loyalty", body: "Personalized rebooking nudge mentions preferred stylist by name." },
      { title: "Front desk focus", body: "AI handles confirm volume during rush hours." },
    ],
    roiTitle: "Salon ROI (illustrative)",
    roi: [
      { value: "₹1.4L", label: "Monthly recovered revenue at 8-chair salon" },
      { value: "+22%", label: "Membership renewal rate" },
      { value: "₹17", label: "Cost per connected appointment confirm" },
    ],
    implTitle: "Salon rollout",
    implementation: [
      { title: "Connect booking", body: "Fresha, Zenoti, or Google Calendar export." },
      { title: "Script occasions", body: "Bridal, festive, and membership variants." },
      { title: "Pilot weekends", body: "Friday-Saturday confirm for highest no-show nights." },
      { title: "Add membership", body: "Renewal workflow for active package holders." },
    ],
    relatedTitle: "Related for salons",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Win-back campaigns", href: "/use-cases/win-back" },
      { name: "Calendar booking", href: "/features/calendar-booking" },
      { name: "Salon confirm script", href: "/templates/salon-appointment-confirm" },
    ],
    faqsTitle: "Salon FAQs",
    faqs: [
      { q: "Fresha and Zenoti integration?", a: "Calendar export or webhook depending on your salon software tier." },
      { q: "Can client pick stylist on confirm call?", a: "Preferred stylist noted — reschedule offers their next available slot." },
      { q: "Membership payment on call?", a: "Payment link via SMS — no card capture on voice." },
      { q: "Promotional festive offers TRAI?", a: "Separate DLT consent for marketing; appointment confirms use booking relationship." },
      { q: "Languages for salon clients?", a: "Telugu, Hindi, and English configurable per location." },
    ],
    scriptTitle: "Appointment confirm (Hinglish)",
    scriptExcerpt: `Agent: Hi, Glow Studio se — kal 3 baje aapka hair color appointment hai. Confirm?
Client: Haan, lekin 4 baje possible hai?
Agent: 4 baje slot hai with stylist Pooja — shift kar diya. SMS confirm bhej diya.
Client: Perfect, thanks.
Agent: Kal milte hain!`,
    ctaTitle: "Fill chairs by cutting",
    ctaAccent: "no-shows",
    ctaBody: "Run day-before confirms for four weekends — compare no-show rate to WhatsApp-only reminders.",
  },

  {
    slug: "gyms",
    name: "Gyms",
    metaTitle: "AI Voice Agent for Gyms | SvaraCall",
    metaDescription:
      "Gyms and fitness studios use SvaraCall AI for trial follow-up, membership renewal, and attendance nudges — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Gyms",
    headline: "AI voice agents for gyms",
    subcopy:
      "Gyms fight churn when trials never convert and members stop showing up silently. SvaraCall AI follows up trial signups, reminds on renewal dues, and nudges inactive members — in the languages your locality speaks.",
    primaryCta: "Book a gym pilot",
    chips: ["Trial follow-up", "Renewal remind", "Churn nudge", "PT session confirm"],
    stats: [
      { value: "+34%", label: "Trial-to-membership in voice follow-up pilots" },
      { value: "−39%", label: "Renewal lapse with pre-expiry calls" },
      { value: "21%", label: "Reactivation on 30-day inactive members" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Silent churn kills gym economics",
    problem:
      "Fitness centers in Tier-2 cities sell annual memberships but members fade by month three. Trial walk-ins leave fake numbers. Front desk cannot call 200 expiring memberships and 500 inactive members every month in Telugu and Hindi.",
    currentTitle: "Gym retention today",
    currentSteps: [
      "Trial signup — no follow-up call within 48 hours.",
      "Renewal SMS at expiry — member already joined competitor.",
      "Inactive 30 days — no personal outreach.",
      "PT session booked — 25% no-show without confirm.",
      "Corporate membership admin never chased on bulk renewal.",
    ],
    aiTitle: "Gym AI retention workflows",
    aiSteps: [
      "Trial follow-up within 24h captures feedback and offers join call with manager.",
      "Renewal reminder at T-14 and T-3 with payment link and freeze option.",
      "Inactive member nudge at 21 and 45 days with free session offer.",
      "PT session day-before confirm reduces trainer idle time.",
      "Corporate admin renewal call for bulk contract 30 days before expiry.",
    ],
    benefitsTitle: "Gym outcomes",
    benefits: [
      { title: "Trial conversion", body: "Fast voice follow-up while motivation is high post-visit." },
      { title: "Renewal save", body: "Pre-expiry call offers freeze or downgrade before cancel." },
      { title: "Reactivation", body: "Inactive nudge brings members back before habit is lost." },
      { title: "Trainer utilization", body: "PT confirm fills slots trainers would lose to no-show." },
    ],
    roiTitle: "Gym economics (illustrative)",
    roi: [
      { value: "₹3.6L", label: "Saved renewal revenue on 120-member pilot cohort" },
      { value: "+26%", label: "Trial conversion vs SMS-only" },
      { value: "₹20", label: "Cost per connected renewal reminder" },
    ],
    implTitle: "Gym deployment",
    implementation: [
      { title: "Connect gym software", body: "Mindbody, Gym365, or member CSV export." },
      { title: "Segment cohorts", body: "Trial, renewal, inactive, and PT session triggers." },
      { title: "Pilot renewals", body: "T-14 calls on 200 expiring memberships." },
      { title: "Add trials", body: "Chain trial follow-up after renewal workflow wins." },
    ],
    relatedTitle: "Related for gyms",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Win-back campaigns", href: "/use-cases/win-back" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Membership renew script", href: "/templates/gym-membership-renewal" },
    ],
    faqsTitle: "Gym FAQs",
    faqs: [
      { q: "Mindbody or local gym software?", a: "Member export and webhook triggers — integration depth varies." },
      { q: "Can member freeze on the call?", a: "Freeze request captured and routed to manager approval workflow." },
      { q: "Inactive member offer caps?", a: "Max free-session or discount configured — cannot exceed approved limit." },
      { q: "TRAI rules for renewal marketing?", a: "Existing membership relationship with DLT template; cold promo needs separate consent." },
      { q: "Languages for local gyms?", a: "Telugu, Hindi, and English per branch configuration." },
    ],
    scriptTitle: "Trial follow-up (Telugu-English)",
    scriptExcerpt: `Agent: Hi, FitZone nundi — ninna trial session attend chesaru. Ela anipinchindi?
Member: Equipment bagundi, join alochistunnam.
Agent: Great — annual plan lo launch offer undi till Sunday. Manager call schedule cheyala?
Member: Avunu, evening 6 ki.
Agent: Fixed — 6 PM ki manager Teja call chestaru. Welcome to FitZone soon!`,
    ctaTitle: "Reduce churn with proactive",
    ctaAccent: "member outreach",
    ctaBody: "Pilot renewal reminders on 200 expiring memberships — compare save rate to SMS-only nudges.",
  },

  {
    slug: "hvac-services",
    name: "HVAC Services",
    metaTitle: "AI Voice Agent for HVAC Services | SvaraCall",
    metaDescription:
      "HVAC and AC service companies use SvaraCall AI for AMC reminders, service booking, and seasonal tune-up campaigns — Telugu, Hindi, English.",
    eyebrow: "For · HVAC Services",
    headline: "AI voice agents for HVAC services",
    subcopy:
      "AC installation and AMC providers lose recurring revenue when customers forget annual service and breakdown calls go unanswered in peak summer. SvaraCall AI reminds on AMC due, books technician slots, and runs pre-summer tune-up campaigns — in regional languages.",
    primaryCta: "Book an HVAC pilot",
    chips: ["AMC reminders", "Service booking", "Seasonal campaigns", "Breakdown callback"],
    stats: [
      { value: "+37%", label: "AMC renewal on pre-expiry voice calls" },
      { value: "−43%", label: "Missed inbound during peak summer week" },
      { value: "68%", label: "Pre-summer tune-up booking connect rate" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Summer rush breaks the phone line",
    problem:
      "HVAC companies in Hyderabad and Delhi face 10× call volume in April–May. Office staff cannot answer every breakdown call or remind 5,000 AMC customers due for service. Customers go to the competitor who picks up first.",
    currentTitle: "HVAC service ops today",
    currentSteps: [
      "AMC expiry SMS ignored — customer calls competitor next breakdown.",
      "Peak season hold queue — 20-minute wait, customer hangs up.",
      "Technician dispatched without confirm — customer not home.",
      "Pre-summer campaign email — 5% booking rate.",
      "No structured follow-up on quoted installation leads.",
    ],
    aiTitle: "HVAC AI workflows",
    aiSteps: [
      "AMC T-30 and T-7 reminder with slot booking on technician calendar.",
      "Missed inbound callback within 5 minutes with urgency triage.",
      "Technician visit confirm evening before with access instructions.",
      "Pre-summer tune-up outbound to lapsed AMC and new homeowner lists.",
      "Installation quote follow-up on leads older than 48 hours.",
    ],
    benefitsTitle: "HVAC outcomes",
    benefits: [
      { title: "AMC retention", body: "Voice reminder with instant booking beats passive expiry SMS." },
      { title: "Peak season capture", body: "Missed-call callback recovers breakdown revenue competitors would take." },
      { title: "First-visit success", body: "Confirm call cuts wasted technician trips." },
      { title: "Off-season revenue", body: "Pre-summer campaign fills March-April schedule before rush." },
    ],
    roiTitle: "HVAC ROI (illustrative)",
    roi: [
      { value: "₹4.8L", label: "AMC renewal revenue in 60-day pilot" },
      { value: "+31%", label: "Breakdown lead capture vs voicemail-only" },
      { value: "₹27", label: "Cost per connected AMC reminder" },
    ],
    implTitle: "HVAC rollout",
    implementation: [
      { title: "Import AMC book", body: "Service CRM or spreadsheet with install date and AMC expiry." },
      { title: "Map technicians", body: "Calendar sync with territory and skill routing." },
      { title: "Pilot AMC renewals", body: "T-30 calls on 300 expiring contracts." },
      { title: "Add peak callback", body: "Missed-call recovery during summer surge." },
    ],
    relatedTitle: "Related for HVAC services",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "AMC reminder script", href: "/templates/hvac-amc-reminder" },
    ],
    faqsTitle: "HVAC FAQs",
    faqs: [
      { q: "Can customers book technician on the call?", a: "Live calendar offers two slot windows — confirmed on-call with SMS." },
      { q: "Emergency breakdown escalation?", a: "Urgency keywords priority-route callback or live transfer to dispatcher." },
      { q: "Multi-city technician routing?", a: "PIN-based territory maps to nearest available technician pool." },
      { q: "Pre-summer campaign TRAI consent?", a: "Existing customer AMC relationship or separate DLT consent for cold lists." },
      { q: "Languages for service calls?", a: "Telugu, Hindi, and English per city configuration." },
    ],
    scriptTitle: "AMC renewal (Hindi)",
    scriptExcerpt: `Agent: Namaste, CoolAir Services se bol rahi hoon — aapki AC AMC 20 tarikh ko khatam ho rahi hai. Renew karke service slot book karein?
Customer: Haan, is weekend chahiye.
Agent: Saturday 10 baje ya 2 baje technician available hai.
Customer: 10 baje theek hai.
Agent: Renew link aur slot confirm SMS bhej diya — ₹2,400 annual AMC.`,
    ctaTitle: "Lock AMC revenue before",
    ctaAccent: "summer breakdowns",
    ctaBody: "Pilot AMC renewal calls on 300 expiring contracts — compare renewal rate to SMS reminders.",
  },

  {
    slug: "plumbers",
    name: "Plumbers",
    metaTitle: "AI Voice Agent for Plumbers | SvaraCall",
    metaDescription:
      "Plumbing service businesses use SvaraCall AI for job confirm, missed-call callback, and maintenance reminders — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Plumbers",
    headline: "AI voice agents for plumbers",
    subcopy:
      "Plumbing contractors miss jobs when they cannot answer calls mid-installation. SvaraCall AI callbacks missed enquiries fast, confirms tomorrow's visits, and reminds customers on annual maintenance — in local languages.",
    primaryCta: "Book a plumbing pilot",
    chips: ["Missed-call callback", "Job confirm", "Maintenance remind", "Quote follow-up"],
    stats: [
      { value: "<4 min", label: "Missed-call callback in business hours" },
      { value: "−38%", label: "Job no-show with evening confirm calls" },
      { value: "+29%", label: "Quote-to-job on 48h follow-up" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Missed calls are lost ₹5,000 jobs",
    problem:
      "Independent plumbers and small firms in Indian cities work on-site with one mobile line. Customer calls twice, then books someone else. Tomorrow's job address is wrong because nobody confirmed. Annual geyser service customers forget until leak happens.",
    currentTitle: "Plumber phone ops today",
    currentSteps: [
      "Missed call while under sink — no callback until evening.",
      "Customer books competitor who answered first.",
      "Tomorrow visit — wrong flat number, wasted trip.",
      "Quote given on WhatsApp — never followed up.",
      "Maintenance list in notebook — never dialed.",
    ],
    aiTitle: "Plumbing AI workflows",
    aiSteps: [
      "Missed-call instant callback qualifies issue and books slot.",
      "Evening-before confirm verifies address, landmark, and access.",
      "Quote follow-up at 48h captures accept-or-decline.",
      "Annual maintenance reminder for geysers and overhead tanks.",
      "Emergency leak triage escalates to on-call plumber live.",
    ],
    benefitsTitle: "Plumber outcomes",
    benefits: [
      { title: "Lead capture", body: "Callback while customer still has the leak — before competitor wins." },
      { title: "Trip efficiency", body: "Address confirm cuts wasted travel between jobs." },
      { title: "Quote conversion", body: "Structured follow-up closes WhatsApp quotes sitting idle." },
      { title: "Recurring maintenance", body: "Annual reminder builds predictable off-season revenue." },
    ],
    roiTitle: "Plumbing ROI (illustrative)",
    roi: [
      { value: "₹2.2L", label: "Recovered job revenue from missed-call pilot" },
      { value: "+18 jobs", label: "Extra bookings per month from faster callback" },
      { value: "₹19", label: "Cost per connected callback" },
    ],
    implTitle: "Plumber rollout",
    implementation: [
      { title: "Forward missed calls", body: "Configure mobile or landline to trigger SvaraCall callback." },
      { title: "Script job types", body: "Leak emergency, installation, and maintenance variants." },
      { title: "Pilot one week", body: "Measure jobs booked from missed-call recovery." },
      { title: "Add maintenance", body: "Upload annual service customer list." },
    ],
    relatedTitle: "Related for plumbers",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Service confirm script", href: "/templates/plumber-job-confirm" },
    ],
    faqsTitle: "Plumber FAQs",
    faqs: [
      { q: "Works with single mobile number?", a: "Yes — missed-call trigger on your existing business line." },
      { q: "Emergency leak handling?", a: "Urgency detected — immediate transfer to your on-call number." },
      { q: "Can plumber see job details on transfer?", a: "Whisper summary with address and issue type on warm transfer." },
      { q: "Quote amounts on AI call?", a: "Ballpark only if you configure — final quote stays with plumber." },
      { q: "TRAI for service marketing?", a: "Existing customer maintenance uses service relationship; cold promo needs DLT consent." },
    ],
    scriptTitle: "Missed-call callback (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee call miss ayyindi — plumbing service kavala?
Customer: Avunu, kitchen pipe leak undi.
Agent: Urgent aa — ippudu technician assign cheyala leda repu morning aa?
Customer: Ippudu possible aa?
Agent: 90 minutes lo technician reach avutaru — address confirm cheyandi.
Customer: Flat 302, Rainbow Apartments, Miyapur.`,
    ctaTitle: "Stop losing jobs to",
    ctaAccent: "missed calls",
    ctaBody: "Enable missed-call callback for two weeks — count jobs booked vs your current callback rate.",
  },

  {
    slug: "staffing-agencies",
    name: "Staffing Agencies",
    metaTitle: "AI Voice Agent for Staffing Agencies | SvaraCall",
    metaDescription:
      "Staffing and recruitment agencies use SvaraCall AI for candidate screening, interview scheduling, and shift confirmation — Telugu, Hindi, English.",
    eyebrow: "For · Staffing Agencies",
    headline: "AI voice agents for staffing agencies",
    subcopy:
      "Staffing firms screening hundreds of candidates daily burn recruiter hours on basic fit checks and no-show interviews. SvaraCall AI runs first-round phone screens, schedules interviews, and confirms shift attendance — in regional languages at scale.",
    primaryCta: "Book a staffing pilot",
    chips: ["Candidate screen", "Interview schedule", "Shift confirm", "Bulk outreach"],
    stats: [
      { value: "500+", label: "Daily screening calls per campaign" },
      { value: "−64%", label: "Recruiter hours on first-round screens" },
      { value: "−42%", label: "Interview no-show with confirm calls" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Recruiters screen instead of closing",
    problem:
      "Staffing agencies filling blue-collar and white-collar roles in India dial thousands of candidates per requisition. Recruiters spend 70% of time on salary-fit and availability checks that AI can structure. Interview no-shows waste client SLA credibility.",
    currentTitle: "Agency recruiting today",
    currentSteps: [
      "Recruiter manually dials 100 candidates for one role.",
      "English-only screen fails on Hindi-speaking warehouse candidates.",
      "Interview scheduled — candidate no-shows without cancel.",
      "Shift confirmation for temp staff is WhatsApp — 20% absent.",
      "Client SLA missed because pipeline was thin on paper only.",
    ],
    aiTitle: "Staffing agency AI workflows",
    aiSteps: [
      "Bulk upload triggers structured screen: experience, salary, notice, location.",
      "Pass threshold schedules interview with calendar sync to recruiter.",
      "Interview day-before confirm with directions and document checklist.",
      "Temp shift T-1 confirm captures accept-or-decline for workforce planning.",
      "Hot candidate warm-transfers to recruiter with score summary.",
    ],
    benefitsTitle: "Staffing outcomes",
    benefits: [
      { title: "Recruiter leverage", body: "Humans close and negotiate — AI handles repetitive fit screens." },
      { title: "SLA reliability", body: "Higher show rate protects client relationship and repeat business." },
      { title: "Regional reach", body: "Telugu and Hindi screens unlock Tier-2 candidate pools." },
      { title: "Audit trail", body: "Recorded screens support client compliance and dispute resolution." },
    ],
    roiTitle: "Staffing ROI (illustrative)",
    roi: [
      { value: "120 hrs", label: "Monthly recruiter hours saved per active req" },
      { value: "+35%", label: "Interview show rate with voice confirm" },
      { value: "₹21", label: "Cost per completed screen" },
    ],
    implTitle: "Staffing deployment",
    implementation: [
      { title: "Connect ATS", body: "Zoho Recruit, Freshteam, or CSV candidate upload." },
      { title: "Define rubric", body: "Must-have skills, salary band, and location per requisition." },
      { title: "Pilot one req", body: "Screen 200 candidates — compare pass quality to manual team." },
      { title: "Add shift confirm", body: "Temp staffing T-1 workflow for active workforce." },
    ],
    relatedTitle: "Related for staffing agencies",
    related: [
      { name: "HR tech industry", href: "/industries/hr-tech" },
      { name: "Recruitment screening", href: "/use-cases/recruitment-screening" },
      { name: "Interview scheduling", href: "/use-cases/interview-scheduling" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Candidate screen script", href: "/templates/staffing-candidate-screen" },
    ],
    faqsTitle: "Staffing agency FAQs",
    faqs: [
      { q: "Can AI ask salary and notice period?", a: "Yes — structured capture maps to ATS fields; no offer negotiation on AI." },
      { q: "Bulk dial TRAI compliance?", a: "Candidate applied or consented — DLT template with opt-out on every call." },
      { q: "Interview calendar sync?", a: "Recruiter availability feeds slot offers on passed screens." },
      { q: "Blue-collar Hindi screens?", a: "Telugu, Hindi, and English with simple vocabulary for warehouse and field roles." },
      { q: "Client audit of screens?", a: "Recording and transcript export per candidate on request." },
    ],
    scriptTitle: "Candidate screen (Hindi)",
    scriptExcerpt: `Agent: Namaste, main TalentFirst se bol rahi hoon — aapne warehouse associate ke liye apply kiya tha. 5 minute screen ho sakti hai?
Candidate: Haan.
Agent: Kitne saal experience hai aur last salary kya thi?
Candidate: 3 saal, 18 hazaar.
Agent: Notice period kitna hai? Gurgaon join kar sakte hain?
Candidate: 15 din notice, Gurgaon theek hai.
Agent: Achha — interviewer kal 11 baje call karega. Documents: Aadhaar aur last payslip.`,
    ctaTitle: "Free recruiters to close roles, not",
    ctaAccent: "dial screens",
    ctaBody: "Pilot AI screening on one open req — compare qualified pass rate and recruiter hours to manual baseline.",
  },

  {
    slug: "bpo-companies",
    name: "BPO Companies",
    metaTitle: "AI Voice Agent for BPO Companies | SvaraCall",
    metaDescription:
      "BPOs use SvaraCall AI for outbound campaign scale, QA sampling callbacks, and client lead follow-up — multilingual, TRAI-compliant, India-hosted.",
    eyebrow: "For · BPO Companies",
    headline: "AI voice agents for BPO companies",
    subcopy:
      "BPOs serving domestic and offshore clients need compliant, scalable voice for overflow campaigns, after-hours coverage, and pilot programs before full seat ramp. SvaraCall AI runs Telugu, Hindi, and English outbound with recording, disclosure, and CRM sync built in.",
    primaryCta: "Book a BPO partnership call",
    chips: ["Overflow dialer", "After-hours", "Pilot campaigns", "Compliance-first"],
    stats: [
      { value: "10K+", label: "Daily outbound capacity per workspace" },
      { value: "−48%", label: "Pilot seat ramp time for new campaigns" },
      { value: "100%", label: "Recording + disclosure on every call" },
      { value: "3 langs", label: "Telugu, Hindi, English native" },
    ],
    problemTitle: "Seat ramp lag loses client contracts",
    problem:
      "Domestic BPOs in Noida and Hyderabad win pilot campaigns but need two weeks to hire and train seats. Clients expect Day-3 dial volume. Night-shift hiring for US overlap is expensive. Compliance audits demand consistent disclosure scripts across rotating agents.",
    currentTitle: "BPO campaign launch today",
    currentSteps: [
      "Client signs — recruiting starts for 20 seats.",
      "Training completes day 12 — pilot window half gone.",
      "Agent script drift — QA catches inconsistent disclosure.",
      "Overflow spike on festival sale — abandon rate spikes.",
      "After-hours inbound client leads go to voicemail.",
    ],
    aiTitle: "BPO AI voice layer",
    aiSteps: [
      "Day-1 AI dial on approved script while human seats ramp.",
      "Standardized disclosure and opt-out on every call — no agent drift.",
      "Overflow burst handling for seasonal client campaigns.",
      "After-hours lead callback in client-approved languages.",
      "Transcript and recording feed to client CRM and QA dashboard.",
    ],
    benefitsTitle: "BPO outcomes",
    benefits: [
      { title: "Faster pilot proof", body: "Show connect and conversion metrics to client before full seat hire." },
      { title: "Compliance consistency", body: "Same disclosure every call — audit-ready from day one." },
      { title: "Burst elasticity", body: "Scale outbound 10× for festival without 10× hiring." },
      { title: "Margin on overflow", body: "AI handles tier-1 confirm and remind — humans on complex close." },
    ],
    roiTitle: "BPO economics (illustrative)",
    roi: [
      { value: "₹8L", label: "Saved recruiting cost on 30-day pilot deferral" },
      { value: "−9 days", label: "Average time-to-first-dial on new campaign" },
      { value: "₹15", label: "Cost per connected tier-1 call" },
    ],
    implTitle: "BPO integration path",
    implementation: [
      { title: "Client script approval", body: "Legal sign-off on disclosure, DLT template, and data flow." },
      { title: "CRM bridge", body: "Connect client or BPO dialer CRM via API or webhook." },
      { title: "Pilot 5K records", body: "Parallel run against human team — compare QA scores." },
      { title: "Hybrid model", body: "AI tier-1 + human tier-2 transfer on defined triggers." },
    ],
    relatedTitle: "Related for BPO companies",
    related: [
      { name: "HR tech industry", href: "/industries/hr-tech" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "Outbound disclosure script", href: "/templates/bpo-compliance-disclosure" },
    ],
    faqsTitle: "BPO FAQs",
    faqs: [
      { q: "White-label for BPO client delivery?", a: "Workspace isolation with client branding on scripts — discuss partner model." },
      { q: "QA integration?", a: "Recording, transcript, and score export to your QA platform via API." },
      { q: "DLT under BPO or end-client entity?", a: "Typically end-client header — BPO facilitates template registration workflow." },
      { q: "Can AI warm-transfer to human agent?", a: "Yes — SIP handoff to your dialer seat with whisper context." },
      { q: "Data residency for offshore clients?", a: "India-hosted AWS Mumbai — DPDP aligned; client DPA on request." },
    ],
    scriptTitle: "Standard disclosure open (English-Hindi)",
    scriptExcerpt: `Agent: Good afternoon, this is a recorded call from [Client Name] regarding your recent enquiry. This call uses an AI assistant. May I continue?
Customer: Haan, boliye.
Agent: Dhanyavaad. Main aapki service activation ke baare mein 2 minute baat karna chahti hoon. Agar aap future calls nahi chahte to abhi bata dijiye.`,
    ctaTitle: "Win client pilots with",
    ctaAccent: "day-one dial volume",
    ctaBody: "Run a 5,000-record parallel pilot against your human team — compare connect, QA, and cost per outcome.",
  },

  {
    slug: "saas-companies",
    name: "SaaS Companies",
    metaTitle: "AI Voice Agent for SaaS Companies | SvaraCall",
    metaDescription:
      "SaaS companies use SvaraCall AI for trial follow-up, onboarding nudges, and renewal reminders — Telugu, Hindi, English for India-first PLG and inside sales.",
    eyebrow: "For · SaaS Companies",
    headline: "AI voice agents for SaaS companies",
    subcopy:
      "India-first SaaS products lose trial conversions when signup follow-up is email-only and Hindi-speaking SMB owners never reach onboarding. SvaraCall AI calls trial users, chases activation milestones, and reminds on renewal — with CRM sync.",
    primaryCta: "Book a SaaS growth demo",
    chips: ["Trial follow-up", "Activation nudges", "Renewal remind", "CRM sync"],
    stats: [
      { value: "+28%", label: "Trial activation in voice follow-up pilots" },
      { value: "<15 min", label: "First callback on high-intent signup" },
      { value: "−33%", label: "Involuntary churn with pre-renew calls" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Trials expire in silence",
    problem:
      "SaaS companies selling to Indian SMBs see signups from Tier-2 cities who prefer a phone walkthrough over English onboarding docs. SDR teams cannot call every trial. Renewal fails on expired cards with one automated email.",
    currentTitle: "SaaS outbound today",
    currentSteps: [
      "Trial signup — lifecycle email day 1, 3, 7 — low open rates.",
      "SDR calls only enterprise tier — SMB trials ignored.",
      "Activation milestone stuck — nobody notices until churn.",
      "Renewal card fail — passive dunning email sequence.",
      "Support ticket opened before proactive success call.",
    ],
    aiTitle: "SaaS AI growth workflows",
    aiSteps: [
      "Trial signup triggers callback within 15 minutes in user's language.",
      "Activation nudge at day 3 if key milestone not completed.",
      "Renewal T-14 and T-3 with payment link and plan downgrade option.",
      "Failed payment retry call with UPI or alternate card suggestion.",
      "High-intent PQL warm-transfers to AE with product usage summary.",
    ],
    benefitsTitle: "SaaS outcomes",
    benefits: [
      { title: "PLG conversion", body: "Voice onboarding unlocks SMB owners who won't read docs." },
      { title: "Activation lift", body: "Milestone nudges before trial expiry — not after." },
      { title: "Renewal save", body: "Pre-expiry call offers downgrade vs silent churn." },
      { title: "SDR leverage", body: "AI qualifies and activates — humans close expansion." },
    ],
    roiTitle: "SaaS economics (illustrative)",
    roi: [
      { value: "+42", label: "Extra paid conversions in 60-day trial pilot" },
      { value: "−26%", label: "Involuntary churn on annual plans" },
      { value: "₹29", label: "Cost per connected activation call" },
    ],
    implTitle: "SaaS deployment",
    implementation: [
      { title: "Connect product analytics", body: "Segment, Mixpanel, or webhook on signup and milestone events." },
      { title: "Define PQL rules", body: "Usage threshold for AE transfer vs AI-only nurture." },
      { title: "Pilot 300 trials", body: "Measure activation rate vs email-only cohort." },
      { title: "Add renewal", body: "Chain pre-expiry workflow for annual subscribers." },
    ],
    relatedTitle: "Related for SaaS companies",
    related: [
      { name: "HR tech industry", href: "/industries/hr-tech" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Trial activation script", href: "/templates/saas-trial-follow-up" },
    ],
    faqsTitle: "SaaS FAQs",
    faqs: [
      { q: "HubSpot and Salesforce sync?", a: "Native CRM sync — trial stage, call outcome, and recording on contact record." },
      { q: "Can AI demo the product?", a: "Guided activation checklist only — live demo stays with AE on transfer." },
      { q: "Product usage in call context?", a: "Webhook passes milestone status — agent references specific stuck step." },
      { q: "TRAI for trial outreach?", a: "Signup consent plus DLT template; marketing blasts separate." },
      { q: "Languages for Bharat SMB?", a: "Telugu, Hindi, and English based on signup region or preference." },
    ],
    scriptTitle: "Trial follow-up (Hinglish)",
    scriptExcerpt: `Agent: Namaste, main InvoicePro se Ananya bol rahi hoon — aapne kal trial start kiya. GST invoice module setup mein help chahiye?
User: Haan, customer add nahi ho raha.
Agent: Achha — main step-by-step SMS bhej rahi hoon. Agar 10 minute mein na ho to callback schedule kar doon?
User: Abhi try karta hoon, nahi hua to call karna.
Agent: Perfect — link SMS mein hai. Trial 12 din baaki hain.`,
    ctaTitle: "Activate more trials with",
    ctaAccent: "voice onboarding",
    ctaBody: "Pilot trial follow-up on 300 signups — compare activation rate to your email-only cohort.",
  },

  {
    slug: "ngos",
    name: "NGOs",
    metaTitle: "AI Voice Agent for NGOs | SvaraCall",
    metaDescription:
      "NGOs use SvaraCall AI for donor thank-you calls, pledge reminders, and volunteer coordination — Telugu, Hindi, English, consent-first, TRAI-compliant.",
    eyebrow: "For · NGOs",
    headline: "AI voice agents for NGOs",
    subcopy:
      "Non-profits in India rely on donor relationships and volunteer turnout but lack call center capacity. SvaraCall AI runs thank-you calls, pledge reminders, and event volunteer confirms — with consent-first scripts and DLT compliance.",
    primaryCta: "Book an NGO outreach demo",
    chips: ["Donor thank-you", "Pledge remind", "Volunteer confirm", "Consent-first"],
    stats: [
      { value: "+18%", label: "Repeat donation rate after thank-you call pilot" },
      { value: "72%", label: "Pledge fulfillment on voice reminder" },
      { value: "−45%", label: "Volunteer no-show with confirm calls" },
      { value: "100%", label: "Opt-out honored on every call" },
    ],
    problemTitle: "Donor relationships need voice at scale",
    problem:
      "NGOs running education, health, and disaster relief campaigns in India cannot personally thank every ₹500 donor. Pledge commitments made at events slip. Volunteer drives on Saturday see 30% no-show because WhatsApp confirm was ignored.",
    currentTitle: "NGO communication today",
    currentSteps: [
      "Bulk thank-you email — impersonal, low re-donation.",
      "Pledge reminder one SMS — donor forgets commitment.",
      "Volunteer WhatsApp group — 50 messages, no confirm.",
      "Beneficiary survey by paper — low reach in rural areas.",
      "No audit trail for donor consent on outreach.",
    ],
    aiTitle: "NGO AI voice workflows",
    aiSteps: [
      "Donation webhook triggers thank-you call within 48 hours.",
      "Pledge reminder at agreed date with payment link or UPI.",
      "Volunteer event T-1 confirm with directions and what to bring.",
      "Survey workflow collects verbal feedback with consent disclosure.",
      "Opt-out captured instantly — suppressed across future campaigns.",
    ],
    benefitsTitle: "NGO outcomes",
    benefits: [
      { title: "Donor retention", body: "Personal thank-you in donor's language builds repeat giving." },
      { title: "Pledge fulfillment", body: "Gentle voice reminder on committed date — not aggressive collections tone." },
      { title: "Volunteer reliability", body: "Confirmed turnout means food packs and supplies are not wasted." },
      { title: "Compliance trust", body: "DLT, consent logs, and opt-out protect NGO reputation." },
    ],
    roiTitle: "NGO impact (illustrative)",
    roi: [
      { value: "+₹4.2L", label: "Repeat donations in 90-day thank-you pilot" },
      { value: "81%", label: "Pledge collected vs 54% SMS-only baseline" },
      { value: "₹16", label: "Cost per connected donor call" },
    ],
    implTitle: "NGO deployment",
    implementation: [
      { title: "Consent audit", body: "Verify donor and volunteer outreach consent and DLT templates." },
      { title: "Script tone review", body: "Grateful, non-pushy language approved by leadership." },
      { title: "Pilot thank-you", body: "Run on last month's donor list — measure repeat rate." },
      { title: "Add volunteer", body: "Event confirm workflow for next drive." },
    ],
    relatedTitle: "Related for NGOs",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Donor thank-you script", href: "/templates/ngo-donor-thank-you" },
    ],
    faqsTitle: "NGO FAQs",
    faqs: [
      { q: "Is outbound legal for donation asks?", a: "Prior donor consent and DLT-registered template required — we support compliant setup." },
      { q: "Can rural beneficiaries receive survey calls?", a: "Telugu, Hindi, and English with simple vocabulary — consent disclosure first." },
      { q: "80G receipt follow-up?", a: "Transactional receipt notification separate from fundraising consent rules." },
      { q: "Volunteer under 18?", a: "Parent confirm workflow configurable for youth volunteer events." },
      { q: "Data protection for beneficiary PII?", a: "DPDP-aligned storage with minimal data in scripts and configurable retention." },
    ],
    scriptTitle: "Donor thank-you (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, mee ₹2,000 donation kosam manam call chestunnam — school kit program ki. Meeru help chesaru, daniki kruthagnathalu.
Donor: Parvaledu, pillalu baga chaduvukuntunnara?
Agent: Avunu — 120 students ki kits distribute ayyayi. Meeku impact report SMS lo pampistam. Malli support kavalante cheppandi.
Donor: Happy to help.
Agent: Meeku shubhankaram — have a good day!`,
    ctaTitle: "Strengthen donor relationships with",
    ctaAccent: "personal voice",
    ctaBody: "Pilot thank-you calls on last month's donors — measure repeat giving vs email-only cohort.",
  },

  {
    slug: "political-campaigns",
    name: "Political Campaigns",
    metaTitle: "AI Voice Agent for Political Campaigns | SvaraCall",
    metaDescription:
      "Political campaigns use SvaraCall AI for voter outreach, rally reminders, and volunteer mobilization — TRAI/DLT compliant, consent-first, India-hosted.",
    eyebrow: "For · Political Campaigns",
    headline: "AI voice agents for political campaigns",
    subcopy:
      "Election campaigns and political organizations need massive compliant outreach — booth worker coordination, rally attendance, and voter information — in Telugu, Hindi, and English. SvaraCall AI scales voice with DLT templates, disclosure, and opt-out built in.",
    primaryCta: "Book a campaign compliance review",
    chips: ["Voter outreach", "Rally remind", "Volunteer mobilize", "DLT compliant"],
    stats: [
      { value: "50K+", label: "Daily outbound capacity per approved campaign" },
      { value: "100%", label: "DLT template + opt-out on every call" },
      { value: "68%", label: "Volunteer confirm rate on voice vs SMS" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Scale without compliance risk",
    problem:
      "Campaigns in Andhra Pradesh, Uttar Pradesh, and Maharashtra must reach lakhs of voters and workers before polling day. Manual calling teams cannot scale. Non-compliant robocalls trigger TRAI penalties and public backlash. Volunteer no-shows leave booths understaffed.",
    currentTitle: "Campaign outreach today",
    currentSteps: [
      "Volunteer WhatsApp groups — 500 unread messages.",
      "Unregistered bulk dialers — TRAI complaint risk.",
      "Rally SMS ignored — ground show smaller than expected.",
      "Booth agent training reminder never reaches rural workers.",
      "No centralized opt-out — repeated calls annoy voters.",
    ],
    aiTitle: "Campaign AI voice workflows",
    aiSteps: [
      "DLT-registered template approved under party or candidate entity.",
      "Voter information and rally invite with mandatory disclosure and opt-out.",
      "Volunteer T-1 confirm for booth duty with location pin.",
      "Training session reminder for polling agents with attendance capture.",
      "Suppression list updated instantly on opt-out per TRAI norms.",
    ],
    benefitsTitle: "Campaign outcomes",
    benefits: [
      { title: "Compliant scale", body: "DLT-approved scripts — audit trail for election commission scrutiny." },
      { title: "Ground game reliability", body: "Confirmed booth workers reduce day-of surprises." },
      { title: "Multilingual reach", body: "Telugu and Hindi outreach matches constituency demographics." },
      { title: "Central control", body: "One dashboard for connect rates, opt-outs, and recordings by constituency." },
    ],
    roiTitle: "Campaign metrics (illustrative)",
    roi: [
      { value: "−72%", label: "TRAI complaint risk vs unregistered dialers" },
      { value: "+41%", label: "Volunteer booth attendance with confirm calls" },
      { value: "₹12", label: "Cost per connected voter information call" },
    ],
    implTitle: "Campaign deployment",
    implementation: [
      { title: "DLT registration", body: "Entity header and template approval before any dial." },
      { title: "Legal review", body: "ECI and TRAI compliance sign-off on script content." },
      { title: "Pilot one AC", body: "Run volunteer confirm in one assembly segment." },
      { title: "Scale constituency", body: "Expand to voter outreach with daily opt-out audit." },
    ],
    relatedTitle: "Related for political campaigns",
    related: [
      { name: "Telecom industry", href: "/industries/telecom" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "Volunteer confirm script", href: "/templates/campaign-volunteer-confirm" },
    ],
    faqsTitle: "Political campaign FAQs",
    faqs: [
      { q: "Is AI voice allowed for political outreach?", a: "Subject to TRAI DLT, consent, disclosure, and ECI guidelines — legal review required per campaign." },
      { q: "Opt-out handling?", a: "Instant suppression across all campaign lists — logged for audit." },
      { q: "Recording for dispute resolution?", a: "Full recording with disclosure — retention per campaign policy." },
      { q: "Can we target one assembly constituency?", a: "Geo-segmented lists with separate templates per language and region." },
      { q: "Does SvaraCall advise on speech content?", a: "No — we provide compliant delivery infrastructure; content approved by your legal team." },
    ],
    scriptTitle: "Volunteer booth confirm (Hindi)",
    scriptExcerpt: `Agent: Namaste, main [Campaign] se bol rahi hoon — kal polling booth 142 par aapki duty hai. Confirm hain? Yeh call record ho rahi hai.
Volunteer: Haan, 6 baje pahunchunga.
Agent: Dhanyavaad. Booth address SMS mein hai — agent kit saath layiye. Agar call nahi chahiye to abhi bata dijiye.
Volunteer: Theek hai, aaunga.
Agent: Shukriya — kal milte hain.`,
    ctaTitle: "Mobilize ground teams with",
    ctaAccent: "compliant voice",
    ctaBody: "Start with volunteer confirm in one segment — measure booth attendance vs WhatsApp-only mobilization.",
  },

  {
    slug: "government-helplines",
    name: "Government Helplines",
    metaTitle: "AI Voice Agent for Government Helplines | SvaraCall",
    metaDescription:
      "Government departments use SvaraCall AI for helpline overflow, scheme awareness, and callback completion — Telugu, Hindi, English, DPDP-aligned, India-hosted.",
    eyebrow: "For · Government Helplines",
    headline: "AI voice agents for government helplines",
    subcopy:
      "State and municipal helplines face surge volume on scheme launches and disaster response. SvaraCall AI handles tier-1 FAQ, status checks, and outbound callback completion — in citizens' languages with recording and audit trails.",
    primaryCta: "Book a gov helpline review",
    chips: ["Overflow tier-1", "Scheme awareness", "Callback complete", "Multilingual"],
    stats: [
      { value: "−52%", label: "Abandon rate on overflow pilots" },
      { value: "78%", label: "Tier-1 containment without human agent" },
      { value: "3 langs", label: "Telugu, Hindi, English citizen service" },
      { value: "100%", label: "Recording + disclosure configurable" },
    ],
    problemTitle: "Citizen calls exceed agent capacity",
    problem:
      "Government helplines for pensions, ration, electricity, and health schemes receive lakhs of calls during enrollment windows. Hold times exceed 30 minutes. Rural citizens in Telangana and Bihar need Telugu and Hindi — English IVR excludes them.",
    currentTitle: "Gov helpline ops today",
    currentSteps: [
      "Citizen holds 25 minutes — hangs up unresolved.",
      "Scheme awareness is poster and SMS — low uptake in villages.",
      "Callback promise made — never dialed back.",
      "English-only IVR — citizen presses 0 repeatedly.",
      "No audit log for grievance resolution timeline.",
    ],
    aiTitle: "Government helpline AI layer",
    aiSteps: [
      "Overflow AI answers tier-1: hours, eligibility, document list, status check.",
      "Outbound callback completes abandoned calls within SLA window.",
      "Scheme launch awareness in regional language with opt-out.",
      "Grievance intake captures reference number and routes to department.",
      "Full recording and transcript for RTI and audit compliance.",
    ],
    benefitsTitle: "Citizen service outcomes",
    benefits: [
      { title: "Shorter wait", body: "AI absorbs tier-1 volume — humans handle complex cases." },
      { title: "Inclusive access", body: "Telugu and Hindi service for citizens IVR excluded." },
      { title: "Callback integrity", body: "Abandoned calls get outbound completion — not forgotten." },
      { title: "Audit readiness", body: "Recording, reference numbers, and outcome logs for oversight." },
    ],
    roiTitle: "Helpline impact (illustrative)",
    roi: [
      { value: "−38%", label: "Average wait time during scheme launch week" },
      { value: "+31%", label: "First-contact resolution on tier-1 queries" },
      { value: "₹9", label: "Cost per contained tier-1 call" },
    ],
    implTitle: "Government deployment",
    implementation: [
      { title: "Knowledge base", body: "Upload scheme FAQ, eligibility, and process docs in all languages." },
      { title: "Compliance review", body: "IT and legal sign-off on recording, data flow, and retention." },
      { title: "Pilot overflow", body: "AI tier-1 on one scheme helpline for 30 days." },
      { title: "Scale + callback", body: "Add abandoned-call outbound completion workflow." },
    ],
    relatedTitle: "Related for government helplines",
    related: [
      { name: "Telecom industry", href: "/industries/telecom" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Knowledge base", href: "/features/knowledge-base" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Scheme FAQ script", href: "/templates/gov-scheme-awareness" },
    ],
    faqsTitle: "Government helpline FAQs",
    faqs: [
      { q: "MeitY and DPDP compliance?", a: "India-hosted infrastructure with encryption, access control, and retention policies — department DPA supported." },
      { q: "Can AI decide scheme eligibility?", a: "No — provides criteria and document list; final eligibility stays with department officer." },
      { q: "Integration with existing toll-free?", a: "SIP overflow routing to SvaraCall on queue threshold." },
      { q: "RTI and recording retention?", a: "Configurable retention window with export for grievance audit." },
      { q: "Disaster surge scaling?", a: "Burst capacity for flood, heatwave, or epidemic helpline spikes." },
    ],
    scriptTitle: "Scheme eligibility FAQ (Telugu)",
    scriptExcerpt: `Agent: Namaskaram, Pensions helpline — ela help cheyagalanu? Yeh call record avutundi.
Citizen: Old age pension apply cheyali — documents enti?
Agent: Aadhaar, ration card, age proof, bank passbook — Mee secretariat lo submit cheyandi. Status check cheyala?
Citizen: Application number undi.
Agent: Okka nimisham — status 'processing' undi. 15 rojullo update vastundi. SMS lo details pampistam.`,
    ctaTitle: "Serve more citizens without",
    ctaAccent: "long hold times",
    ctaBody: "Pilot AI tier-1 overflow on one scheme helpline — measure wait time and containment vs baseline.",
  },

  {
    slug: "law-firms",
    name: "Law Firms",
    metaTitle: "AI Voice Agent for Law Firms | SvaraCall",
    metaDescription:
      "Law firms use SvaraCall AI for client intake, hearing reminders, and document collection follow-up — Telugu, Hindi, English, confidential and recorded.",
    eyebrow: "For · Law Firms",
    headline: "AI voice agents for law firms",
    subcopy:
      "Litigation and corporate law firms miss client intake when phones ring during court hours. SvaraCall AI qualifies new matters, reminds on hearing dates and document deadlines, and chases pending affidavits — with confidential recording and disclosure.",
    primaryCta: "Book a law firm demo",
    chips: ["Client intake", "Hearing remind", "Document chase", "Confidential"],
    stats: [
      { value: "<8 min", label: "Intake callback on missed enquiries" },
      { value: "−46%", label: "Missed hearing prep from doc gaps" },
      { value: "81%", label: "Document upload after voice chase" },
      { value: "100%", label: "Recording disclosure on every call" },
    ],
    problemTitle: "Court hours kill phone availability",
    problem:
      "Advocates and firm intake teams in Delhi, Mumbai, and Hyderabad are in court 10 AM–4 PM. Potential clients call once and hire the firm that answers. Associates chase affidavits and vakalatnama by email — clients submit day before hearing.",
    currentTitle: "Law firm communication today",
    currentSteps: [
      "Missed call during argument — no callback until evening.",
      "Intake paralegal calls back — client already retained competitor.",
      "Hearing date in email — client forgets to appear for commission.",
      "Document checklist sent — half items pending 48h before filing.",
      "No structured log of client communication for matter file.",
    ],
    aiTitle: "Law firm AI workflows",
    aiSteps: [
      "Missed enquiry callback qualifies matter type, urgency, and jurisdiction.",
      "Conflict check flag before scheduling partner consult.",
      "Hearing T-7 and T-1 reminder with court name, time, and documents to carry.",
      "Document chase lists pending items with secure upload link.",
      "Warm transfer urgent matters to duty advocate with summary.",
    ],
    benefitsTitle: "Law firm outcomes",
    benefits: [
      { title: "Intake capture", body: "Callback within minutes — win matters competitors lose to voicemail." },
      { title: "Hearing readiness", body: "Client and witness reminders reduce adjournment from no-show." },
      { title: "Filing discipline", body: "Doc chase unblocks associates waiting on client submissions." },
      { title: "Matter file audit", body: "Recording and transcript attach to client matter record." },
    ],
    roiTitle: "Law firm ROI (illustrative)",
    roi: [
      { value: "₹9L", label: "Incremental fee from 4 captured intake matters in quarter" },
      { value: "−33%", label: "Adjournment from client document delay" },
      { value: "₹34", label: "Cost per connected intake callback" },
    ],
    implTitle: "Law firm deployment",
    implementation: [
      { title: "Intake rubric", body: "Matter types, conflict questions, and escalation to partner rules." },
      { title: "Matter system sync", body: "Clio, PracticeLeague, or secure CSV matter export." },
      { title: "Pilot intake", body: "Missed-call callback for 30 days — count retained matters." },
      { title: "Add hearing", body: "Reminder workflow for active litigation docket." },
    ],
    relatedTitle: "Related for law firms",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Client intake script", href: "/templates/law-firm-intake" },
    ],
    faqsTitle: "Law firm FAQs",
    faqs: [
      { q: "Can AI provide legal advice?", a: "No — intake and admin only; legal advice stays with advocate on consult." },
      { q: "Client confidentiality?", a: "Encrypted storage, access control, and retention per firm policy and BCI norms." },
      { q: "Conflict check on intake?", a: "Structured party names captured — flagged for human conflict review before engagement." },
      { q: "Recording admissibility?", a: "Disclosure at call start — firm determines use per applicable rules." },
      { q: "Regional language clients?", a: "Telugu, Hindi, and English intake with transfer to matching-language advocate." },
    ],
    scriptTitle: "Hearing reminder (English-Hindi)",
    scriptExcerpt: `Agent: Good morning, calling from Sharma & Associates regarding your case — Family Court hearing on Thursday 10:30 AM.
Client: Haan, yaad hai.
Agent: Please bring original marriage certificate and last 3 salary slips. Advocate Mehta will meet you at Gate 2.
Client: Thursday 10:30, noted.
Agent: SMS confirmation sent. Call this number if you need to reschedule.`,
    ctaTitle: "Capture intake and prep clients before",
    ctaAccent: "hearing day",
    ctaBody: "Enable missed-call intake callback for 30 days — measure retained matters vs current response time.",
  },

  {
    slug: "accounting-firms",
    name: "Accounting Firms",
    metaTitle: "AI Voice Agent for Accounting Firms | SvaraCall",
    metaDescription:
      "CA firms and accounting practices use SvaraCall AI for GST/ITR document chase, deadline reminders, and client onboarding — Telugu, Hindi, English.",
    eyebrow: "For · Accounting Firms",
    headline: "AI voice agents for accounting firms",
    subcopy:
      "Chartered accountant firms serving SMBs drown in document collection every March and GST due date. SvaraCall AI chases pending proofs, reminds on filing deadlines, and onboard new clients — in the languages business owners understand.",
    primaryCta: "Book a CA firm demo",
    chips: ["Document chase", "Deadline remind", "Client onboard", "GST/ITR season"],
    stats: [
      { value: "−51%", label: "Filing delay from missing docs in pilot" },
      { value: "76%", label: "Document upload within 48h of voice chase" },
      { value: "−40%", label: "Partner hours on reminder calls in peak season" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Peak season document chase never ends",
    problem:
      "CA firms with 500+ SMB clients face the same March panic every year — bank statements, Form 16, and GST invoices arrive last minute. Staff manually call top 50 clients; rest file late with interest. Telugu and Hindi speaking clients miss English email checklists.",
    currentTitle: "CA firm client comms today",
    currentSteps: [
      "Bulk email checklist — 30% open rate from SMB owners.",
      "Articled assistant calls 20 clients daily — list never finishes.",
      "GST due date SMS — documents still pending on due day.",
      "New client onboarding docs chased over three weeks of WhatsApp.",
      "No log of who was reminded vs who claimed they sent.",
    ],
    aiTitle: "Accounting firm AI workflows",
    aiSteps: [
      "Client-specific pending doc list read on call with secure upload link SMS.",
      "GST and ITR deadline reminder T-14, T-7, and T-1 with penalty context.",
      "New client onboarding sequence chases KYC, DSC, and bank auth.",
      "Payment reminder for professional fees before filing release.",
      "Escalation to partner on high-value client non-response.",
    ],
    benefitsTitle: "CA firm outcomes",
    benefits: [
      { title: "On-time filing", body: "Structured doc chase reduces late fees and client blame." },
      { title: "Partner time saved", body: "Articled staff focus on returns — not reminder dialing." },
      { title: "Client clarity", body: "Telugu and Hindi explanations of what document is needed and why." },
      { title: "Audit trail", body: "Recording proves reminder was made before penalty filing." },
    ],
    roiTitle: "CA firm economics (illustrative)",
    roi: [
      { value: "120 hrs", label: "Partner and staff hours saved in March pilot" },
      { value: "−68%", label: "Late filings in chased cohort vs control" },
      { value: "₹22", label: "Cost per connected document chase" },
    ],
    implTitle: "CA firm rollout",
    implementation: [
      { title: "Import client ledger", body: "Pending doc status from practice management or spreadsheet." },
      { title: "Script by filing", body: "ITR, GST, TDS variants with deadline-specific urgency." },
      { title: "Pilot 200 clients", body: "March doc chase — compare submission rate to email-only." },
      { title: "Year-round", body: "GST monthly and advance tax reminder workflows." },
    ],
    relatedTitle: "Related for accounting firms",
    related: [
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "ITR document script", href: "/templates/ca-itr-document-chase" },
    ],
    faqsTitle: "Accounting firm FAQs",
    faqs: [
      { q: "Can AI discuss tax liability?", a: "No — deadline and document admin only; tax advice stays with CA." },
      { q: "Secure document upload?", a: "Time-limited encrypted link — no full PAN or account numbers on open call." },
      { q: "Integration with ClearTax or practice software?", a: "CSV export day one; API varies by platform." },
      { q: "Client refuses to upload?", a: "Escalation to partner flagged after configured attempt count." },
      { q: "Peak season capacity?", a: "Parallel dial on full client book — thousands per day per campaign." },
    ],
    scriptTitle: "GST document chase (Hindi)",
    scriptExcerpt: `Agent: Namaste, main Gupta & Co se bol rahi hoon — aapka GST return is mahine ke liye pending hai. Sales invoice aur bank statement abhi upload nahi hua.
Client: Kal bhej dunga.
Agent: Due date 20 tarikh hai — penalty lag sakta hai. Secure link SMS par bhej diya hai.
Client: Aaj shaam tak kar dunga.
Agent: Dhanyavaad — upload hone par aapko confirmation milega.`,
    ctaTitle: "Survive peak season with",
    ctaAccent: "automated doc chase",
    ctaBody: "Pilot document chase on 200 clients this filing season — compare on-time submission to email-only cohort.",
  },

  {
    slug: "event-planners",
    name: "Event Planners",
    metaTitle: "AI Voice Agent for Event Planners | SvaraCall",
    metaDescription:
      "Event planners use SvaraCall AI for vendor confirm, guest RSVP, and timeline reminders — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Event Planners",
    headline: "AI voice agents for event planners",
    subcopy:
      "Corporate and social event planners coordinate dozens of vendors and hundreds of guests. SvaraCall AI confirms vendor arrival windows, chases RSVPs, and reminds clients on payment milestones — freeing planners to manage on-site.",
    primaryCta: "Book an event planner demo",
    chips: ["Vendor confirm", "Guest RSVP", "Payment milestone", "Timeline remind"],
    stats: [
      { value: "−39%", label: "Vendor no-show with day-before confirm" },
      { value: "+44%", label: "RSVP response on voice vs email invite" },
      { value: "−52%", label: "Last-minute guest count surprises" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "One vendor no-show ruins the gala",
    problem:
      "Event agencies in Mumbai and Bangalore juggle caterers, AV, and décor with WhatsApp chaos. Corporate guests ignore Evite links — headcount wrong by 50. Client milestone payments slip — planner floats vendor costs.",
    currentTitle: "Event coordination today",
    currentSteps: [
      "Vendor confirmed on WhatsApp — no-show on event morning.",
      "RSVP email — 40% response by T-2 days.",
      "Client payment milestone missed — planner chases manually.",
      "Guest dietary preference never collected.",
      "Post-event feedback survey emailed — ignored.",
    ],
    aiTitle: "Event planner AI workflows",
    aiSteps: [
      "Vendor T-1 confirm captures arrival time, contact, and load-in gate.",
      "Guest RSVP call with attend-decline and plus-one capture.",
      "Dietary and accessibility question on confirm call.",
      "Client payment milestone reminder with invoice link.",
      "Post-event thank-you and NPS call within 48 hours.",
    ],
    benefitsTitle: "Event outcomes",
    benefits: [
      { title: "Vendor reliability", body: "Voice confirm holds vendors accountable before load-in." },
      { title: "Accurate headcount", body: "RSVP calls beat email for corporate delegate lists." },
      { title: "Cash flow", body: "Milestone payment reminders reduce planner float stress." },
      { title: "Guest experience", body: "Dietary capture prevents day-of F&B scrambles." },
    ],
    roiTitle: "Event planner ROI (illustrative)",
    roi: [
      { value: "₹1.8L", label: "Avoided vendor penalty and rush cost per major event" },
      { value: "+38%", label: "RSVP accuracy vs email-only" },
      { value: "₹21", label: "Cost per connected guest RSVP" },
    ],
    implTitle: "Event planner rollout",
    implementation: [
      { title: "Import guest list", body: "CSV from registration platform or client delegate sheet." },
      { title: "Vendor roster", body: "Separate confirm workflow per vendor category." },
      { title: "Pilot one event", body: "Run RSVP and vendor confirm for next corporate gala." },
      { title: "Template library", body: "Reuse scripts for conference, launch, and gala formats." },
    ],
    relatedTitle: "Related for event planners",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Guest RSVP script", href: "/templates/event-guest-rsvp" },
    ],
    faqsTitle: "Event planner FAQs",
    faqs: [
      { q: "Can AI handle 500 guest RSVP calls?", a: "Yes — batch campaign with parallel dial and real-time RSVP dashboard." },
      { q: "Vendor confirm in regional language?", a: "Telugu, Hindi, and English per vendor contact preference." },
      { q: "Client payment without awkward tone?", a: "Professional milestone reminder referencing contract schedule." },
      { q: "Integration with Cvent or Eventbrite?", a: "CSV export and webhook on registration events." },
      { q: "TRAI for guest outreach?", a: "Corporate delegate relationship or invite consent with DLT template." },
    ],
    scriptTitle: "Guest RSVP (English)",
    scriptExcerpt: `Agent: Good afternoon, calling regarding the Tech Summit on March 15 at Hyderabad Convention Centre. Will you attend?
Guest: Yes, I'll be there.
Agent: Wonderful — any dietary preference? Vegetarian, vegan, or allergies?
Guest: Vegetarian please.
Agent: Noted. QR entry pass will SMS shortly. Plus-one?
Guest: Just me.
Agent: See you on the 15th — registration desk opens at 8 AM.`,
    ctaTitle: "Deliver flawless events with",
    ctaAccent: "confirmed vendors and guests",
    ctaBody: "Pilot RSVP and vendor confirm on your next event — compare headcount accuracy to email invites.",
  },

  {
    slug: "wedding-planners",
    name: "Wedding Planners",
    metaTitle: "AI Voice Agent for Wedding Planners | SvaraCall",
    metaDescription:
      "Wedding planners use SvaraCall AI for vendor coordination, guest RSVP, and payment milestone reminders — Telugu, Hindi, English for Indian weddings.",
    eyebrow: "For · Wedding Planners",
    headline: "AI voice agents for wedding planners",
    subcopy:
      "Indian wedding planners manage multi-day events with hundreds of vendors and guests. SvaraCall AI confirms mehendi, sangeet, and reception attendance, chases vendor timelines, and reminds clients on milestone payments — in family-preferred languages.",
    primaryCta: "Book a wedding planner demo",
    chips: ["Multi-day RSVP", "Vendor coord", "Payment milestone", "Guest confirm"],
    stats: [
      { value: "+47%", label: "Guest RSVP on voice vs WhatsApp group" },
      { value: "−42%", label: "Vendor delay on day-before confirm calls" },
      { value: "−35%", label: "Headcount mismatch at reception" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Shaadi logistics break on communication gaps",
    problem:
      "Wedding planners in Delhi, Jaipur, and Hyderabad coordinate 15+ vendors across three-day functions. Family WhatsApp groups miss RSVPs from out-of-town guests. Caterer confirms 300 — 420 show up. Client milestone payment delayed — vendor deposits at risk.",
    currentTitle: "Wedding coordination today",
    currentSteps: [
      "Guest list in Excel — nobody calls NRI cousins for RSVP.",
      "Vendor WhatsApp mute — decorator late to sangeet.",
      "Meal count wrong — extra 80 plates rushed day-of.",
      "Client payment milestone — planner floats ₹5 lakh vendor deposit.",
      "Family coordinator overwhelmed — calls go unanswered.",
    ],
    aiTitle: "Wedding planner AI workflows",
    aiSteps: [
      "Per-event RSVP: mehendi, sangeet, ceremony, reception with meal preference.",
      "Vendor T-1 confirm for each function with load-in time and contact.",
      "Out-of-town guest travel confirm and hotel block reminder.",
      "Client milestone payment reminder tied to contract schedule.",
      "Final headcount sync to caterer 48 hours before each function.",
    ],
    benefitsTitle: "Wedding outcomes",
    benefits: [
      { title: "Accurate meal count", body: "RSVP per function — not one number for whole wedding." },
      { title: "Vendor punctuality", body: "Voice confirm day-before reduces sangeet-night panic." },
      { title: "Family relief", body: "AI handles guest calls — coordinator focuses on bride-side drama." },
      { title: "Planner cash flow", body: "Milestone reminders keep client payments on schedule." },
    ],
    roiTitle: "Wedding planner ROI (illustrative)",
    roi: [
      { value: "₹2.5L", label: "Saved rush F&B and vendor overtime on one reception" },
      { value: "+52%", label: "Complete RSVP data vs WhatsApp poll" },
      { value: "₹23", label: "Cost per connected guest RSVP" },
    ],
    implTitle: "Wedding planner rollout",
    implementation: [
      { title: "Import guest book", body: "Family-provided list with function assignment per guest." },
      { title: "Vendor roster", body: "Decorator, caterer, DJ, photographer confirm per event day." },
      { title: "Pilot one function", body: "Run sangeet RSVP for next wedding — validate headcount." },
      { title: "Full wedding", body: "Expand to all functions and vendor confirms." },
    ],
    relatedTitle: "Related for wedding planners",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Wedding RSVP script", href: "/templates/wedding-guest-rsvp" },
    ],
    faqsTitle: "Wedding planner FAQs",
    faqs: [
      { q: "Separate RSVP for mehendi and reception?", a: "Yes — per-function attendance and meal type captured independently." },
      { q: "Telugu family in Hyderabad?", a: "Telugu, Hindi, and English scripts with respectful family address forms." },
      { q: "NRI guests in different time zones?", a: "Call window scheduling per guest timezone segment." },
      { q: "Vendor confirm for multiple days?", a: "Separate T-1 workflow per function with vendor-specific load-in." },
      { q: "TRAI for guest calls?", a: "Wedding invite relationship with DLT template; opt-out honored." },
    ],
    scriptTitle: "Sangeet RSVP (Hinglish)",
    scriptExcerpt: `Agent: Namaste, Sharma-Verma wedding ki taraf se bol rahi hoon — 12 tarikh sangeet ko aap aa rahe hain?
Guest: Haan, husband ke saath aayenge.
Agent: Bahut achha! Dinner veg ya non-veg?
Guest: Dono veg hain.
Agent: Noted — 2 guests veg. Venue Leela Palace, 7 PM. QR pass SMS par aayega.`,
    ctaTitle: "Plan shaadis with accurate",
    ctaAccent: "headcounts and vendors",
    ctaBody: "Pilot sangeet RSVP on your next wedding — compare meal count accuracy to WhatsApp polls.",
  },

  {
    slug: "pharmacies-online",
    name: "Online Pharmacies",
    metaTitle: "AI Voice Agent for Online Pharmacies | SvaraCall",
    metaDescription:
      "Online pharmacies use SvaraCall AI for prescription verify, refill reminders, and delivery confirm — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Online Pharmacies",
    headline: "AI voice agents for online pharmacies",
    subcopy:
      "E-pharmacy platforms lose orders when prescriptions are unclear, chronic refills lapse, and cold-chain delivery fails. SvaraCall AI verifies Rx details, reminds on refill cycles, and confirms delivery windows — in languages patients trust.",
    primaryCta: "Book an e-pharmacy pilot",
    chips: ["Rx verify", "Refill remind", "Delivery confirm", "Cold-chain alert"],
    stats: [
      { value: "−38%", label: "Order cancel from Rx issues after verify calls" },
      { value: "+25%", label: "Chronic refill repeat rate on voice nudges" },
      { value: "−31%", label: "Failed cold-chain delivery attempts" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Rx friction kills e-pharmacy conversion",
    problem:
      "Online pharmacies serving Bharat face prescription validation delays, doctor callback requirements, and delivery failures when patients are not home for insulin and cold-chain orders. SMS tracking in English loses Tier-2 patients mid-checkout.",
    currentTitle: "E-pharmacy ops today",
    currentSteps: [
      "Rx upload unclear — order sits in queue until manual call.",
      "Chronic refill reminder is app push — disabled by user.",
      "Cold-chain rider arrives — patient at work, product wasted.",
      "Doctor verification pending — nobody calls patient to clarify.",
      "COD medicine order ships without confirm — refused at door.",
    ],
    aiTitle: "Online pharmacy AI workflows",
    aiSteps: [
      "Rx verify call clarifies dosage, doctor name, and missing upload items.",
      "Chronic medication refill reminder 5 days before estimated empty date.",
      "Cold-chain delivery narrow window confirm with fridge-ready check.",
      "Doctor callback coordination captures availability for verification.",
      "COD confirm before dispatch for high-value medicine orders.",
    ],
    benefitsTitle: "E-pharmacy outcomes",
    benefits: [
      { title: "Faster order unlock", body: "Rx clarify on call — order moves to pharmacist queue same hour." },
      { title: "Chronic LTV", body: "Voice refill beats silenced app notifications." },
      { title: "Cold-chain integrity", body: "Confirmed availability prevents spoiled product and re-ship cost." },
      { title: "Inclusive access", body: "Telugu and Hindi support for patients uncomfortable with English app UX." },
    ],
    roiTitle: "E-pharmacy ROI (illustrative)",
    roi: [
      { value: "₹6.1L", label: "Monthly recovered orders from Rx verify pilot" },
      { value: "+21%", label: "Chronic refill retention vs push-only" },
      { value: "₹20", label: "Cost per connected Rx verify" },
    ],
    implTitle: "E-pharmacy deployment",
    implementation: [
      { title: "Connect OMS", body: "Order webhook on Rx pending, refill due, and cold-chain flag." },
      { title: "Pharmacist escalation", body: "Clinical questions warm-transfer to registered pharmacist line." },
      { title: "Pilot Rx queue", body: "Verify 500 pending orders — measure unlock rate." },
      { title: "Add refill", body: "Chronic cohort replenishment workflow." },
    ],
    relatedTitle: "Related for online pharmacies",
    related: [
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Rx verify script", href: "/templates/epharma-rx-verify" },
    ],
    faqsTitle: "Online pharmacy FAQs",
    faqs: [
      { q: "Can AI recommend medicines?", a: "No — Rx admin and logistics only; clinical advice stays with registered pharmacist." },
      { q: "Drug name privacy on calls?", a: "Generic 'chronic medication' or masked name — configurable per policy." },
      { q: "Schedule H/H1 handling?", a: "Strict script boundaries — verify only, no promotion of controlled substances." },
      { q: "Cold-chain confirm workflow?", a: "Patient confirms fridge availability and 2-hour delivery window." },
      { q: "TRAI for refill reminders?", a: "Prior purchase relationship with DLT template; opt-out immediate." },
    ],
    scriptTitle: "Rx verify call (Telugu-English)",
    scriptExcerpt: `Agent: Namaskaram, PharmEasy nundi — mee order lo doctor prescription partial ga undi. Metformin 500mg — daily entha dosage?
Patient: Morning one tablet.
Agent: Doctor name upload cheyandi — photo lo clear ga ledu. SMS lo re-upload link pampinanu.
Patient: Ippudu pampistanu.
Agent: Upload ayyaka order 2 hours lo dispatch avutundi. Thanks!`,
    ctaTitle: "Unlock orders and retain chronic patients with",
    ctaAccent: "voice support",
    ctaBody: "Pilot Rx verify on 500 pending orders — compare conversion to queue-only processing.",
  },

  {
    slug: "home-services",
    name: "Home Services",
    metaTitle: "AI Voice Agent for Home Services | SvaraCall",
    metaDescription:
      "Home service marketplaces use SvaraCall AI for booking confirm, technician dispatch, and service feedback — Telugu, Hindi, English, TRAI-compliant.",
    eyebrow: "For · Home Services",
    headline: "AI voice agents for home services",
    subcopy:
      "Urban Company-style and local home service providers lose jobs to missed calls and no-shows. SvaraCall AI confirms bookings, verifies address and access, dispatches technician ETA updates, and collects post-service feedback — at scale in regional languages.",
    primaryCta: "Book a home services demo",
    chips: ["Booking confirm", "Technician ETA", "No-show recovery", "Service feedback"],
    stats: [
      { value: "−36%", label: "Job no-show with day-before confirm" },
      { value: "<5 min", label: "Missed-call callback in business hours" },
      { value: "+24%", label: "Repeat booking from feedback call nudge" },
      { value: "3 langs", label: "Telugu, Hindi, English" },
    ],
    problemTitle: "Missed calls and no-shows waste technician routes",
    problem:
      "Home cleaning, pest control, and appliance repair platforms in Indian metros route technicians across the city. Customer not home means ₹800 job lost. Missed inbound during peak booking hours goes to competitor app. English SMS confirm ignored in Tier-2 suburbs.",
    currentTitle: "Home services ops today",
    currentSteps: [
      "Customer books app — no confirm call — not home at slot.",
      "Technician calls from personal number — marked spam.",
      "Missed peak-hour enquiry — no callback for 4 hours.",
      "Service completed — no feedback call — repeat booking lost.",
      "Subscription AMC renewal via app push — churn silent.",
    ],
    aiTitle: "Home services AI workflows",
    aiSteps: [
      "Booking confirm evening before with address, gate code, and parking note.",
      "Technician en-route call with 30-minute ETA narrow window.",
      "Missed inbound callback qualifies service type and books slot.",
      "Post-service feedback and rebook offer within 24 hours.",
      "AMC renewal reminder with slot booking for annual deep clean.",
    ],
    benefitsTitle: "Home services outcomes",
    benefits: [
      { title: "Route efficiency", body: "Confirmed jobs mean technicians hit more addresses per day." },
      { title: "Lead capture", body: "Missed-call callback wins enquiries still searching for provider." },
      { title: "Repeat revenue", body: "Post-service rebook nudge while satisfaction is high." },
      { title: "Subscription save", body: "AMC voice renewal before silent app churn." },
    ],
    roiTitle: "Home services ROI (illustrative)",
    roi: [
      { value: "₹3.4L", label: "Monthly recovered job value at 50-tech marketplace" },
      { value: "+19%", label: "Repeat booking within 60 days" },
      { value: "₹17", label: "Cost per connected booking confirm" },
    ],
    implTitle: "Home services rollout",
    implementation: [
      { title: "Connect booking API", body: "Webhook on book, assign, and complete events." },
      { title: "Script by category", body: "Cleaning, pest, AC, plumbing with category-specific checklists." },
      { title: "Pilot one city", body: "Confirm calls in Hyderabad zone — measure no-show delta." },
      { title: "Add missed-call", body: "Inbound recovery for peak booking hours." },
    ],
    relatedTitle: "Related for home services",
    related: [
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Surveys & feedback", href: "/use-cases/surveys-feedback" },
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Booking confirm script", href: "/templates/home-service-booking-confirm" },
    ],
    faqsTitle: "Home services FAQs",
    faqs: [
      { q: "Integration with Urban Company or custom app?", a: "Webhook on standard booking events — custom app API supported." },
      { q: "Technician en-route updates?", a: "Triggered on technician start navigation — ETA spoken on call." },
      { q: "Gate code and pet notes?", a: "Confirm call captures access instructions for technician app." },
      { q: "AMC subscription renewal?", a: "Pre-expiry voice with rebook slot — separate DLT if promotional." },
      { q: "Languages per service zone?", a: "Telugu, Hindi, and English mapped by city zone." },
    ],
    scriptTitle: "Booking confirm (Hinglish)",
    scriptExcerpt: `Agent: Hi, CleanHome se bol rahi hoon — kal 10 baje deep cleaning confirm hai. Ghar par koi hoga?
Customer: Haan, main rahungi. Gate code 4521.
Agent: Noted — 2 BHK, kitchen include. Technician Priya 10-10:30 tak pahunchegi. Pet hai ghar par?
Customer: Ek dog hai, friendly hai.
Agent: Technician ko bata diya. Kal milte hain!`,
    ctaTitle: "Fill technician routes and win",
    ctaAccent: "missed enquiries",
    ctaBody: "Pilot booking confirms in one city zone for 30 days — compare no-show rate to app-only reminders.",
  },

];

export function getNichePage(slug: string): SeoProgrammaticPage | undefined {
  return nichePages.find((p) => p.slug === slug);
}
