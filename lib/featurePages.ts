import type { SeoProgrammaticPage } from "@/lib/seoTypes";

export const featurePages: SeoProgrammaticPage[] = [
  {
    slug: "voice-cloning",
    name: "Voice Cloning",
    metaTitle: "Voice Cloning for AI Voice Agents | SvaraCall",
    metaDescription:
      "Clone approved brand voices for SvaraCall AI agents — consent-first, India-hosted, and TRAI/DPDP aligned. Sound like your team without scaling headcount.",
    eyebrow: "Features · Voice Cloning",
    headline: "Your brand voice, on every outbound call",
    subcopy:
      "Train SvaraCall agents on approved voice samples so callers hear a consistent, human tone — with explicit consent capture and audit trails built in.",
    primaryCta: "Book a voice pilot",
    chips: ["Consent-first", "Brand-safe", "India-hosted", "Audit-ready"],
    stats: [
      { value: "1 voice", label: "Approved clone per agent profile" },
      { value: "3 langs", label: "Telugu, Hindi, and English today" },
      { value: "<800ms", label: "Typical turn latency on cloned voices" },
      { value: "100%", label: "Calls disclose AI + recording where required" },
    ],
    problemTitle: "Generic TTS kills trust on the first hello",
    problem:
      "Indian customers hang up when a call sounds like a foreign IVR. Teams want a familiar voice — their advisor, their clinic receptionist — but recording new prompts for every script change does not scale.",
    currentTitle: "How teams handle voice today",
    currentSteps: [
      "Record hundreds of static prompts in a studio, then re-record when scripts change.",
      "Use stock TTS that sounds robotic in Telugu or Hindi regional accents.",
      "Swap voices per campaign manually with no central approval workflow.",
      "Hope callers do not notice the mismatch between brand and bot.",
    ],
    aiTitle: "How SvaraCall voice cloning works",
    aiSteps: [
      "Submit approved voice samples with signed consent from the speaker.",
      "SvaraCall trains a dedicated voice profile locked to your workspace.",
      "Agents speak dynamically from prompts — no re-recording per script edit.",
      "Every call logs which voice profile was used for compliance review.",
    ],
    benefitsTitle: "Why teams clone voices on SvaraCall",
    benefits: [
      {
        title: "Brand continuity",
        body: "Callers hear the same warmth as your best telecaller — not a generic cloud voice.",
      },
      {
        title: "Dynamic scripts",
        body: "Change offers, dates, and names without booking another studio session.",
      },
      {
        title: "Consent built in",
        body: "Speaker authorization, usage scope, and revocation are tracked per profile.",
      },
      {
        title: "Multilingual parity",
        body: "One approved speaker can extend across Telugu, Hindi, and English workflows.",
      },
    ],
    roiTitle: "Voice cloning impact",
    roi: [
      { value: "70%", label: "Less studio re-recording after script changes" },
      { value: "2×", label: "Higher answer rates vs stock TTS in pilots" },
      { value: "0", label: "Unapproved voices — profiles are workspace-locked" },
      { value: "24h", label: "Typical profile review turnaround on pilot" },
    ],
    implTitle: "Roll out cloned voices in four steps",
    implementation: [
      {
        title: "Capture consent",
        body: "Collect signed authorization from the speaker and define allowed use cases.",
      },
      {
        title: "Upload samples",
        body: "Provide 10–15 minutes of clean audio; SvaraCall validates quality and accent fit.",
      },
      {
        title: "Assign to workflows",
        body: "Map the voice profile to campaigns — renewal reminders, lead follow-up, and more.",
      },
      {
        title: "Monitor and iterate",
        body: "Review transcripts, CSAT, and opt-outs; adjust scripts without re-cloning.",
      },
    ],
    scriptTitle: "Consent disclosure on a cloned-voice call",
    scriptExcerpt:
      "Agent: Namaste, main Priya bol rahi hoon — yeh call aapke loan renewal ke baare mein hai.\nAgent: Yeh call record ho rahi hai aur ek AI assistant ki awaaz use ho rahi hai. Kya main aage badh sakti hoon?\nCustomer: Haan, boliye.\nAgent: Dhanyavaad. Aapka premium 15 August ko due hai — kya main payment link bhej doon?",
    relatedTitle: "Related capabilities",
    related: [
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Custom prompts", href: "/features/custom-prompts" },
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Insurance renewals", href: "/use-cases/payment-reminders" },
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "Voice agents pillar", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Voice cloning FAQs",
    faqs: [
      {
        q: "Is voice cloning legal for outbound calls in India?",
        a: "Yes, when the speaker consents, callers are informed, and usage follows TRAI/DLT and DPDP requirements. SvaraCall blocks unapproved profiles from dialing.",
      },
      {
        q: "Can we clone a celebrity or public figure's voice?",
        a: "No. SvaraCall only accepts voices with documented consent from the speaker or your organization.",
      },
      {
        q: "How fast can we go live with a cloned voice?",
        a: "Most pilots review samples within one business day and assign the profile to a test campaign the same week.",
      },
      {
        q: "What if we need to retire a voice profile?",
        a: "Revoke the profile in one click — active campaigns fall back to your approved default voice immediately.",
      },
    ],
    ctaTitle: "Sound like your team on",
    ctaAccent: "every call",
    ctaBody:
      "Book a pilot with your approved voice samples. We will place a live test call in Telugu, Hindi, or English.",
  },
  {
    slug: "multilingual-ai",
    name: "Multilingual AI",
    metaTitle: "Multilingual AI for AI Voice Agents | SvaraCall",
    metaDescription:
      "Telugu, Hindi, and English AI voice agents with code-switching and regional pacing — built for how India actually talks on the phone.",
    eyebrow: "Features · Multilingual AI",
    headline: "Speak Telugu, Hindi, and English on one agent",
    subcopy:
      "SvaraCall detects language mid-call, handles Hinglish code-switching, and keeps compliance phrases on-script — without three separate dialer teams.",
    primaryCta: "Hear a multilingual demo",
    chips: ["Telugu", "Hindi", "English", "Code-switch ready"],
    stats: [
      { value: "3", label: "Production languages live today" },
      { value: "4+", label: "Hindi dialect regions supported" },
      { value: "Auto", label: "Language detection per caller turn" },
      { value: "1 agent", label: "Runs all languages — no separate bots" },
    ],
    problemTitle: "English-only bots lose Indian callers in seconds",
    problem:
      "Most voice AI stacks were built for US English. Teams either hire trilingual callers or run three parallel IVR trees — both expensive and inconsistent when customers mix languages mid-sentence.",
    currentTitle: "How multilingual calling works today",
    currentSteps: [
      "Route calls by region to separate Hindi, Telugu, or English teams.",
      "Play English IVR menus that callers abandon before option two.",
      "Maintain three script libraries that drift out of sync.",
      "Escalate whenever a caller switches to Hinglish or Tanglish.",
    ],
    aiTitle: "How SvaraCall multilingual AI works",
    aiSteps: [
      "One agent profile loads Telugu, Hindi, and English prompts together.",
      "ASR detects the caller's language each turn and responds in kind.",
      "Code-switching is handled naturally — EMI due hai, should I send the link?",
      "Transcripts tag each turn with detected locale for QA and CRM sync.",
    ],
    benefitsTitle: "Why India-first multilingual matters",
    benefits: [
      {
        title: "Higher containment",
        body: "Callers stay on when the agent matches their language from the first word.",
      },
      {
        title: "One workflow",
        body: "Upload one contact list; SvaraCall picks the right language per record or live.",
      },
      {
        title: "Consistent compliance",
        body: "Recording disclosure and opt-out phrases ship in every supported language.",
      },
      {
        title: "Regional nuance",
        body: "Pacing and phrasing tuned for Andhra, Telangana, Delhi-NCR, and beyond.",
      },
    ],
    roiTitle: "Multilingual ROI",
    roi: [
      { value: "40%", label: "Longer average talk time vs English-only IVR" },
      { value: "3→1", label: "Teams consolidated into one AI dialer" },
      { value: "92%", label: "Containment on routine reminders in Hindi pilots" },
      { value: "0", label: "Extra per-language seat licenses" },
    ],
    implTitle: "Enable multilingual agents",
    implementation: [
      {
        title: "Pick default language",
        body: "Set Telugu, Hindi, or English as primary; enable auto-detect for mixed lists.",
      },
      {
        title: "Localize scripts",
        body: "Translate core flows; SvaraCall keeps compliance blocks consistent across langs.",
      },
      {
        title: "Test code-switch paths",
        body: "Run pilot calls where agents deliberately mix English — validate handoffs.",
      },
      {
        title: "Measure by locale",
        body: "Analytics break down connect, containment, and conversion per language.",
      },
    ],
    relatedTitle: "Explore related topics",
    related: [
      { name: "Voice cloning", href: "/features/voice-cloning" },
      { name: "Real-time transcription", href: "/features/real-time-transcription" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Education industry", href: "/industries/education" },
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "Knowledge base", href: "/features/knowledge-base" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Multilingual AI FAQs",
    faqs: [
      {
        q: "Which Indian languages does SvaraCall support?",
        a: "Telugu, Hindi, and English are live in production. Additional languages are on the roadmap — tell us your priority on the pilot form.",
      },
      {
        q: "Can one call switch languages mid-conversation?",
        a: "Yes. The agent follows the caller when they code-switch, while keeping mandatory compliance lines accurate.",
      },
      {
        q: "Do we need separate phone numbers per language?",
        a: "No. One registered TRAI/DLT header can run multilingual campaigns from a single workspace.",
      },
      {
        q: "How are transcripts stored for mixed-language calls?",
        a: "Each turn is tagged with detected locale; full transcripts export to CRM and analytics with language metadata.",
      },
    ],
    ctaTitle: "Reach customers in",
    ctaAccent: "their language",
    ctaBody:
      "Book a pilot and we will place live calls in Telugu, Hindi, and English to your test numbers.",
  },
  {
    slug: "real-time-transcription",
    name: "Real-Time Transcription",
    metaTitle: "Real-Time Transcription for AI Voice Agents | SvaraCall",
    metaDescription:
      "Live speech-to-text on every SvaraCall AI voice agent call — Telugu, Hindi, and English transcripts streamed to dashboards, CRM, and QA in real time.",
    eyebrow: "Features · Real-Time Transcription",
    headline: "Read every word while the call is still live",
    subcopy:
      "SvaraCall streams dual-channel transcripts as the agent and caller speak — so supervisors, CRM automations, and compliance teams act on facts, not memory.",
    primaryCta: "See live transcripts",
    chips: ["Live STT", "Dual-channel", "CRM-ready", "Searchable"],
    stats: [
      { value: "Live", label: "Transcript stream during active calls" },
      { value: "3 langs", label: "Telugu, Hindi, English ASR" },
      { value: "<2s", label: "Typical lag from speech to text" },
      { value: "100%", label: "Calls indexed for search and export" },
    ],
    problemTitle: "Post-call notes miss what actually happened",
    problem:
      "Supervisors replay recordings hours later. CRM notes are incomplete. QA teams cannot coach in the moment when a Telugu caller raises a billing dispute.",
    currentTitle: "How teams capture call content today",
    currentSteps: [
      "Agents type summaries after hang-up — often incomplete or biased.",
      "Recordings sit in folders until someone has time to listen.",
      "Supervisors barge in blind because they cannot read the live thread.",
      "Compliance audits scramble to find the exact consent phrase.",
    ],
    aiTitle: "How SvaraCall real-time transcription works",
    aiSteps: [
      "Dual-channel audio feeds ASR for agent and caller separately.",
      "Transcript lines appear in the live dashboard within seconds.",
      "Keywords trigger alerts — payment dispute, cancel, supervisor.",
      "Final transcript locks to the call record and syncs to CRM.",
    ],
    benefitsTitle: "Why live transcripts change operations",
    benefits: [
      {
        title: "Supervisor visibility",
        body: "Read the thread before barge-in or live transfer — no guessing.",
      },
      {
        title: "Instant CRM notes",
        body: "Disposition fields populate from transcript summaries automatically.",
      },
      {
        title: "Faster QA",
        body: "Search by phrase across thousands of calls instead of scrubbing audio.",
      },
      {
        title: "Compliance proof",
        body: "Find recording disclosure and opt-out lines with full-text search.",
      },
    ],
    roiTitle: "Transcription ROI",
    roi: [
      { value: "85%", label: "Less after-call manual note entry" },
      { value: "50%", label: "Faster QA review cycles in pilot teams" },
      { value: "3 min", label: "Average time saved per supervised call" },
      { value: "24/7", label: "Searchable archive on AWS Mumbai" },
    ],
    implTitle: "Turn on live transcription",
    implementation: [
      {
        title: "Enable on workspace",
        body: "Toggle transcription in settings — applies to all new campaigns.",
      },
      {
        title: "Set keyword alerts",
        body: "Define phrases that ping Slack, email, or supervisor queues.",
      },
      {
        title: "Connect CRM",
        body: "Map transcript summaries to Salesforce, HubSpot, or Zoho fields.",
      },
      {
        title: "Train QA on search",
        body: "Use full-text filters by language, outcome, and compliance tags.",
      },
    ],
    relatedTitle: "Works well with",
    related: [
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "BPO & telecom", href: "/industries/telecom" },
      { name: "Salesforce integration", href: "/integrations/salesforce" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Real-time transcription FAQs",
    faqs: [
      {
        q: "Is transcription accurate for Hindi and Telugu?",
        a: "Production ASR is tuned for Indian accents and code-switching. Pilots include accuracy review on your actual call samples.",
      },
      {
        q: "Can supervisors read transcripts during live calls?",
        a: "Yes. The live dashboard streams turns as they happen — ideal before barge-in or transfer.",
      },
      {
        q: "Where is transcript data stored?",
        a: "Encrypted on AWS Mumbai, aligned with DPDP data-localization expectations for Indian customers.",
      },
      {
        q: "Can we redact sensitive fields in transcripts?",
        a: "Yes. Pair with PII redaction to mask Aadhaar, PAN, and card numbers in text and audio.",
      },
    ],
    ctaTitle: "Never miss a word on",
    ctaAccent: "live calls",
    ctaBody:
      "Book a pilot and watch transcripts stream on a live outbound campaign to your test list.",
  },
  {
    slug: "call-recording",
    name: "Call Recording",
    metaTitle: "Call Recording for AI Voice Agents | SvaraCall",
    metaDescription:
      "TRAI-aware call recording on every SvaraCall AI voice agent call — consent disclosed upfront, encrypted storage in India, DPDP-aligned retention controls.",
    eyebrow: "Features · Call Recording",
    headline: "Record every AI call with consent built in",
    subcopy:
      "SvaraCall records dual-channel audio on every outbound and inbound agent call — with mandatory disclosure, India hosting, and retention policies you control.",
    primaryCta: "Review recording compliance",
    chips: ["TRAI-aware", "Dual-channel", "DPDP-aligned", "Encrypted"],
    stats: [
      { value: "100%", label: "Calls with configurable recording" },
      { value: "Dual", label: "Agent and caller channels separated" },
      { value: "AWS IN", label: "Storage in Mumbai region" },
      { value: "On-demand", label: "Export for audits and disputes" },
    ],
    problemTitle: "Unrecorded AI calls are a compliance blind spot",
    problem:
      "Regulators and customers expect proof of what was said — especially for collections, insurance, and healthcare. Ad-hoc recording on legacy dialers often skips disclosure or stores files offshore.",
    currentTitle: "How recording works on legacy stacks",
    currentSteps: [
      "Enable recording per campaign with inconsistent disclosure scripts.",
      "Store files on local servers with no encryption or retention policy.",
      "Manually attach recordings to CRM — many calls never get linked.",
      "Scramble during TRAI or DPDP audits with incomplete consent logs.",
    ],
    aiTitle: "How SvaraCall call recording works",
    aiSteps: [
      "Agent opens with recording disclosure in the caller's language.",
      "Dual-channel audio captures both sides with synchronized timestamps.",
      "Files encrypt at rest in AWS Mumbai with workspace retention rules.",
      "Recording URL, transcript, and outcome sync to CRM automatically.",
    ],
    benefitsTitle: "Why compliant recording matters",
    benefits: [
      {
        title: "Audit-ready",
        body: "Prove consent, offer, and outcome with one click during disputes.",
      },
      {
        title: "India-hosted",
        body: "Data stays in-country — aligned with DPDP expectations for voice data.",
      },
      {
        title: "Linked records",
        body: "Every recording ties to transcript, disposition, and campaign metadata.",
      },
      {
        title: "Retention control",
        body: "Set auto-delete windows per vertical — healthcare vs collections.",
      },
    ],
    roiTitle: "Recording ROI",
    roi: [
      { value: "100%", label: "Calls with linked recording + transcript" },
      { value: "60%", label: "Faster dispute resolution in finance pilots" },
      { value: "0", label: "Manual upload steps to CRM on integrated stacks" },
      { value: "7 yr", label: "Configurable max retention for regulated verticals" },
    ],
    implTitle: "Deploy compliant recording",
    implementation: [
      {
        title: "Set disclosure script",
        body: "Localize the recording notice for Telugu, Hindi, and English campaigns.",
      },
      {
        title: "Define retention",
        body: "Choose auto-delete schedules per campaign or industry policy.",
      },
      {
        title: "Restrict access",
        body: "Role-based playback — only QA and compliance roles export raw audio.",
      },
      {
        title: "Audit quarterly",
        body: "Run sample checks that disclosure played before substantive dialog.",
      },
    ],
    relatedTitle: "Related features",
    related: [
      { name: "Real-time transcription", href: "/features/real-time-transcription" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "Insurance industry", href: "/industries/insurance" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Call recording FAQs",
    faqs: [
      {
        q: "Do we have to disclose recording on every AI call in India?",
        a: "Best practice — and SvaraCall default — is to disclose at call open in the caller's language before continuing the conversation.",
      },
      {
        q: "Where are recordings stored?",
        a: "Encrypted in AWS Mumbai. Export is available for authorized roles under your retention policy.",
      },
      {
        q: "Can callers opt out of recording?",
        a: "Workflows can branch to non-recorded paths or end the call — configurable per campaign with DNC logging.",
      },
      {
        q: "Does recording work on TRAI/DLT registered numbers?",
        a: "Yes. Recording is independent of header registration — both are required for compliant outbound.",
      },
    ],
    ctaTitle: "Record with confidence on",
    ctaAccent: "every call",
    ctaBody:
      "Book a compliance walkthrough — we will show disclosure flows, storage, and retention on a live pilot.",
  },
  {
    slug: "live-transfer",
    name: "Live Transfer",
    metaTitle: "Live Transfer for AI Voice Agents | SvaraCall",
    metaDescription:
      "Warm-transfer callers from SvaraCall AI agents to your human team with full context — transcript, CRM record, and reason code delivered before pickup.",
    eyebrow: "Features · Live Transfer",
    headline: "Warm transfer to humans without losing context",
    subcopy:
      "When the AI hits a complex question, SvaraCall bridges your agent with a whisper summary — so customers never repeat themselves.",
    primaryCta: "Test a live transfer",
    chips: ["Warm transfer", "Whisper summary", "CRM context", "Queue routing"],
    stats: [
      { value: "<5s", label: "Typical bridge time to available rep" },
      { value: "100%", label: "Transcript forwarded on transfer" },
      { value: "Smart", label: "Queue routing by skill and language" },
      { value: "24/7", label: "AI handles overflow; humans on escalation" },
    ],
    problemTitle: "Cold transfers destroy customer trust",
    problem:
      "IVR blind transfers force customers to explain everything again. Sales and support teams lose hot leads when the handoff drops context — especially on Hindi calls about policy exceptions.",
    currentTitle: "How transfers work on legacy dialers",
    currentSteps: [
      "IVR dumps callers into a queue with no context on the screen.",
      "Reps ask customers to repeat account numbers and issue details.",
      "Supervisors cannot see why the call was escalated until after replay.",
      "Transfers fail silently when queues are full — callers hang up.",
    ],
    aiTitle: "How SvaraCall live transfer works",
    aiSteps: [
      "AI detects escalation triggers — complex query, angry sentiment, buyer ready.",
      "Whisper plays a summary to the human rep before the customer joins.",
      "Customer hears a brief hold message in their language, then connects warm.",
      "CRM task opens with transcript, disposition draft, and recording link.",
    ],
    benefitsTitle: "Why warm transfer wins",
    benefits: [
      {
        title: "No repeat loops",
        body: "Customers hear the rep already knows their issue — CSAT jumps.",
      },
      {
        title: "Higher close rates",
        body: "Hot leads reach sales with intent and budget already captured.",
      },
      {
        title: "Skill-based routing",
        body: "Send Telugu billing issues to Telugu reps automatically.",
      },
      {
        title: "Overflow safety net",
        body: "AI handles volume spikes; humans take only what needs a person.",
      },
    ],
    roiTitle: "Live transfer ROI",
    roi: [
      { value: "35%", label: "Higher conversion on qualified lead transfers" },
      { value: "2 min", label: "Saved per call — no re-authentication" },
      { value: "90%", label: "Transfer success rate when queues staffed" },
      { value: "50%", label: "Fewer repeat calls within 24 hours" },
    ],
    implTitle: "Configure live transfer",
    implementation: [
      {
        title: "Define escalation rules",
        body: "Set keywords, intents, and sentiment thresholds that trigger transfer.",
      },
      {
        title: "Map queues",
        body: "Connect SIP extensions or softphone groups by language and skill.",
      },
      {
        title: "Write whisper scripts",
        body: "Template what the human hears — account ID, intent, next best action.",
      },
      {
        title: "Measure handoff quality",
        body: "Track transfer success, talk time, and outcome in analytics.",
      },
    ],
    scriptTitle: "Warm transfer sample flow",
    scriptExcerpt:
      "Agent: Samajh gaya — main aapko hamare senior advisor se connect kar rahi hoon. Ek minute hold kijiye.\n[Whisper to rep: Customer Rajesh, policy #8821, wants to increase sum insured before renewal Friday. Budget confirmed ₹12L.]\nRep: Namaste Rajesh ji, main Anil bol raha hoon — Priya ne bataya aap coverage badhana chahte hain. Main abhi options share karta hoon.",
    relatedTitle: "Related workflows",
    related: [
      { name: "Agent handoff", href: "/features/agent-handoff" },
      { name: "Barge-in", href: "/features/barge-in" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Insurance industry", href: "/industries/insurance" },
      { name: "HubSpot integration", href: "/integrations/hubspot" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Live transfer FAQs",
    faqs: [
      {
        q: "Can SvaraCall transfer to our existing PBX or contact center?",
        a: "Yes. Configure SIP extensions, mobile numbers, or softphone queues — we support warm and cold transfer modes.",
      },
      {
        q: "Does the customer stay on the same call leg?",
        a: "On warm transfer, yes — the AI bridges the rep before dropping. Cold transfer is available when required.",
      },
      {
        q: "What if no rep is available?",
        a: "Fallback paths include callback scheduling, voicemail capture, or continued AI handling — you define the policy.",
      },
      {
        q: "Is whisper audible to the customer?",
        a: "No. Whisper plays only to the receiving rep before the customer is connected.",
      },
    ],
    ctaTitle: "Hand off without friction on",
    ctaAccent: "complex calls",
    ctaBody:
      "Book a pilot with live transfer to your team — we will escalate a test call with full whisper context.",
  },
  {
    slug: "agent-handoff",
    name: "Agent Handoff",
    metaTitle: "Agent Handoff for AI Voice Agents | SvaraCall",
    metaDescription:
      "Structured AI-to-human agent handoff on SvaraCall — disposition drafts, open tasks, and full call context synced to CRM before your rep picks up.",
    eyebrow: "Features · Agent Handoff",
    headline: "Structured handoffs, not dropped calls",
    subcopy:
      "SvaraCall packages everything the AI learned — intent, entities, transcript, and next steps — into a handoff record your team accepts with one click.",
    primaryCta: "See handoff records",
    chips: ["CRM tasks", "Context bundle", "Accept/decline", "SLA tracking"],
    stats: [
      { value: "Full", label: "Context bundle on every handoff" },
      { value: "1-click", label: "Accept handoff in dashboard or CRM" },
      { value: "SLA", label: "Track time-to-accept per queue" },
      { value: "Async", label: "Handoff to humans minutes after AI ends" },
    ],
    problemTitle: "AI escalations lose context in the handoff gap",
    problem:
      "Even when calls transfer, CRM tasks are empty. Reps start from zero. Async callbacks — common in Indian B2B sales — forget what the AI already confirmed.",
    currentTitle: "How handoffs fail today",
    currentSteps: [
      "AI ends the call with a vague note like 'customer wants callback'.",
      "CRM tasks lack phone number, intent, and transcript link.",
      "Managers cannot measure how long reps take to accept escalations.",
      "Different teams use different note formats — no standard bundle.",
    ],
    aiTitle: "How SvaraCall agent handoff works",
    aiSteps: [
      "AI compiles a handoff packet — intent, entities, transcript, recording.",
      "Task creates in SvaraCall dashboard and syncs to connected CRM.",
      "Assigned rep accepts or declines; declined tasks reroute by rules.",
      "Outcome after human touch closes the loop in analytics.",
    ],
    benefitsTitle: "Why structured handoff matters",
    benefits: [
      {
        title: "CRM-native tasks",
        body: "Salesforce and HubSpot tasks arrive pre-filled — no copy-paste.",
      },
      {
        title: "Async callbacks",
        body: "Reps call back hours later with full AI context still attached.",
      },
      {
        title: "Manager visibility",
        body: "SLA dashboards show accept time and resolution by queue.",
      },
      {
        title: "Closed-loop analytics",
        body: "Track AI-to-human conversion separately from pure AI containment.",
      },
    ],
    roiTitle: "Agent handoff ROI",
    roi: [
      { value: "45%", label: "Faster rep prep time vs blank escalations" },
      { value: "28%", label: "Higher callback connect rate with context SMS" },
      { value: "100%", label: "Handoffs linked to source call ID" },
      { value: "3×", label: "More manager oversight without listening to all calls" },
    ],
    implTitle: "Set up agent handoff",
    implementation: [
      {
        title: "Define handoff triggers",
        body: "Intent-based, sentiment-based, or explicit customer request.",
      },
      {
        title: "Map CRM owners",
        body: "Route tasks by territory, product line, or language.",
      },
      {
        title: "Configure accept SLAs",
        body: "Alert managers when handoffs sit unaccepted beyond threshold.",
      },
      {
        title: "Close the loop",
        body: "Require disposition after human touch for accurate funnel metrics.",
      },
    ],
    relatedTitle: "Related capabilities",
    related: [
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Memory", href: "/features/memory" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Real estate industry", href: "/industries/real-estate" },
      { name: "Salesforce integration", href: "/integrations/salesforce" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Agent handoff FAQs",
    faqs: [
      {
        q: "What's the difference between live transfer and agent handoff?",
        a: "Live transfer bridges the caller to a human in real time. Agent handoff creates a structured task — useful for async callbacks or when queues are busy.",
      },
      {
        q: "Can handoffs sync to Salesforce and HubSpot?",
        a: "Yes. Tasks, contacts, and custom fields populate via native integrations.",
      },
      {
        q: "What happens if a rep declines a handoff?",
        a: "Reroute rules send the task to backup queues or notify a team lead.",
      },
      {
        q: "Is the full transcript attached?",
        a: "Every handoff includes transcript, recording link, and AI-generated summary.",
      },
    ],
    ctaTitle: "Escalate with context on",
    ctaAccent: "every handoff",
    ctaBody:
      "Connect your CRM and book a pilot — watch handoff tasks land pre-filled on a live campaign.",
  },
  {
    slug: "call-scheduling",
    name: "Call Scheduling",
    metaTitle: "Call Scheduling for AI Voice Agents | SvaraCall",
    metaDescription:
      "Schedule AI voice agent outbound calls by timezone, quiet hours, and TRAI-compliant windows — batch, recurring, and callback campaigns on SvaraCall.",
    eyebrow: "Features · Call Scheduling",
    headline: "Dial at the right moment, every time",
    subcopy:
      "SvaraCall schedules outbound AI calls around customer time zones, DND preferences, and your business hours — so reminders land when people actually answer.",
    primaryCta: "Plan a scheduled campaign",
    chips: ["Quiet hours", "Timezone aware", "Recurring", "Callback slots"],
    stats: [
      { value: "IST+", label: "Timezone rules per contact record" },
      { value: "TRAI", label: "Quiet-hour defaults for India outbound" },
      { value: "Recurring", label: "Daily, weekly, and custom cadences" },
      { value: "Auto", label: "Retry windows when no answer" },
    ],
    problemTitle: "Bad timing wastes dials and annoys customers",
    problem:
      "Blasting lists at 9 AM Sunday triggers opt-outs. Collections teams need staggered retries. Appointment reminders must fire 24 hours before the slot — manual scheduling does not scale.",
    currentTitle: "How scheduling works on legacy dialers",
    currentSteps: [
      "Upload a list and dial immediately — ignoring local time and DND.",
      "Manually split CSVs by region for staggered calling.",
      "Set callbacks on sticky notes — many never happen.",
      "Miss retry windows because agents forget to re-queue no-answers.",
    ],
    aiTitle: "How SvaraCall call scheduling works",
    aiSteps: [
      "Attach schedule rules to campaigns — start time, end time, days of week.",
      "Per-contact timezone and quiet-hour flags respected automatically.",
      "Recurring jobs run EMI reminders, appointment nudges, and renewals.",
      "No-answer paths schedule smart retries within compliant windows.",
    ],
    benefitsTitle: "Why smart scheduling lifts connect rates",
    benefits: [
      {
        title: "Higher answer rates",
        body: "Reach people during lunch breaks or evenings when they pick up.",
      },
      {
        title: "Fewer complaints",
        body: "Honor DND and opt-outs — reduce TRAI complaints and brand damage.",
      },
      {
        title: "Hands-free recurrence",
        body: "Set once — daily payment nudges run until promise-to-pay or opt-out.",
      },
      {
        title: "Callback promises kept",
        body: "When AI offers a callback slot, the dialer fires on time automatically.",
      },
    ],
    roiTitle: "Scheduling ROI",
    roi: [
      { value: "22%", label: "Higher connect rate with timezone-aware dialing" },
      { value: "40%", label: "Fewer DND complaints in scheduled vs blast campaigns" },
      { value: "0", label: "Manual CSV splits for regional timing" },
      { value: "3×", label: "More retry attempts within compliant windows" },
    ],
    implTitle: "Configure call scheduling",
    implementation: [
      {
        title: "Set campaign windows",
        body: "Define legal calling hours aligned with TRAI guidance and your policy.",
      },
      {
        title: "Map contact timezones",
        body: "Use pincode, state, or explicit timezone fields on your list.",
      },
      {
        title: "Build retry logic",
        body: "Configure intervals for busy, no-answer, and voicemail outcomes.",
      },
      {
        title: "Monitor adherence",
        body: "Analytics show dials by hour — tune windows with data.",
      },
    ],
    relatedTitle: "Related features",
    related: [
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Calendar booking", href: "/features/calendar-booking" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Call scheduling FAQs",
    faqs: [
      {
        q: "Does SvaraCall respect TRAI quiet hours automatically?",
        a: "Default India campaigns block dials outside configurable windows — typically 9 AM to 9 PM local, adjustable per vertical.",
      },
      {
        q: "Can we schedule callbacks promised during a live AI call?",
        a: "Yes. The agent books a slot and the scheduler queues the follow-up automatically.",
      },
      {
        q: "How do retries work for no-answer?",
        a: "Define max attempts, intervals, and stop conditions — all within your approved calling windows.",
      },
      {
        q: "Can different campaigns use different schedules?",
        a: "Each campaign has independent windows, retry rules, and holiday blackouts.",
      },
    ],
    ctaTitle: "Dial smarter with",
    ctaAccent: "scheduled AI",
    ctaBody:
      "Book a pilot and we will run a timezone-aware reminder campaign on your test list.",
  },
  {
    slug: "campaign-management",
    name: "Campaign Management",
    metaTitle: "Campaign Management for AI Voice Agents | SvaraCall",
    metaDescription:
      "Orchestrate AI voice agent outbound campaigns on SvaraCall — lists, scripts, schedules, DNC scrubbing, and live performance dashboards in one workspace.",
    eyebrow: "Features · Campaign Management",
    headline: "Run outbound AI campaigns from one control room",
    subcopy:
      "Upload lists, assign scripts, set schedules, and watch connect rates live — SvaraCall campaign management replaces spreadsheet chaos and legacy dialer sprawl.",
    primaryCta: "Launch a test campaign",
    chips: ["List upload", "Live dashboard", "A/B scripts", "Pause/resume"],
    stats: [
      { value: "1 hub", label: "Lists, scripts, schedules, and reports" },
      { value: "Live", label: "Connect and containment metrics" },
      { value: "A/B", label: "Split tests on scripts and voices" },
      { value: "Instant", label: "Pause or resume without engineering" },
    ],
    problemTitle: "Campaign ops should not need a dialer engineer",
    problem:
      "Marketing uploads a list. Ops fixes the CSV. Compliance checks DNC. Engineering deploys a script change. By launch day, the window passed — common for Indian growth teams running weekly EMI and renewal waves.",
    currentTitle: "How campaigns run on legacy stacks",
    currentSteps: [
      "Email CSVs between teams with version names like final_v3_REAL.",
      "Wait for IT to push IVR prompt changes to production.",
      "Track results in separate spreadsheets disconnected from CRM.",
      "Cannot pause a bad script mid-flight without opening a ticket.",
    ],
    aiTitle: "How SvaraCall campaign management works",
    aiSteps: [
      "Create a campaign — attach list, script, voice, schedule, and DNC rules.",
      "Launch with one click; monitor live connect, talk time, and outcomes.",
      "A/B test openings or offers; promote winners without redeploying code.",
      "Export results or sync dispositions to CRM when the wave completes.",
    ],
    benefitsTitle: "Why unified campaign control wins",
    benefits: [
      {
        title: "Ops autonomy",
        body: "Business users pause, resume, and clone campaigns without dev tickets.",
      },
      {
        title: "Compliance gates",
        body: "DNC scrub and consent flags block bad numbers before dial.",
      },
      {
        title: "Script agility",
        body: "Edit prompts in the dashboard — active on the next dial batch.",
      },
      {
        title: "Cross-team visibility",
        body: "Sales, ops, and compliance share one live truth on performance.",
      },
    ],
    roiTitle: "Campaign management ROI",
    roi: [
      { value: "80%", label: "Less launch time vs legacy dialer change requests" },
      { value: "15%", label: "Lift from A/B script tests in finance campaigns" },
      { value: "100%", label: "Campaigns with audit trail of list and script versions" },
      { value: "Same day", label: "Typical time from list upload to first dial on pilot" },
    ],
    implTitle: "Launch your first AI campaign",
    implementation: [
      {
        title: "Prepare your list",
        body: "CSV with phone, name, timezone, and CRM ID — DNC scrub runs on import.",
      },
      {
        title: "Choose script and voice",
        body: "Pick a template or custom prompt; assign Telugu, Hindi, or English.",
      },
      {
        title: "Set schedule and caps",
        body: "Define windows, concurrency, and max attempts per contact.",
      },
      {
        title: "Go live and iterate",
        body: "Watch the dashboard; pause if needed; sync results to CRM.",
      },
    ],
    relatedTitle: "Related platform features",
    related: [
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Win-back calls", href: "/use-cases/win-back" },
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Campaign management FAQs",
    faqs: [
      {
        q: "How large can contact lists be?",
        a: "Pilot campaigns typically start at hundreds to tens of thousands of rows. Enterprise tiers scale with concurrency controls.",
      },
      {
        q: "Can we run multiple campaigns simultaneously?",
        a: "Yes. Separate campaigns with independent scripts, schedules, and number pools.",
      },
      {
        q: "Does SvaraCall dedupe against DNC on import?",
        a: "Yes. Workspace DNC lists and campaign-level scrubs block suppressed numbers before dial.",
      },
      {
        q: "Can we clone a winning campaign?",
        a: "One-click clone copies script, schedule, and voice settings — swap the list and relaunch.",
      },
    ],
    ctaTitle: "Run campaigns from",
    ctaAccent: "one dashboard",
    ctaBody:
      "Upload a test list and launch a pilot campaign — live metrics in under an hour.",
  },
  {
    slug: "analytics",
    name: "Analytics",
    metaTitle: "Analytics for AI Voice Agents | SvaraCall",
    metaDescription:
      "AI voice agent analytics on SvaraCall — connect rates, containment, transfer rates, language breakdowns, and ROI dashboards for Indian outbound teams.",
    eyebrow: "Features · Analytics",
    headline: "Measure every dial, disposition, and rupee",
    subcopy:
      "SvaraCall analytics turns call outcomes into actionable dashboards — by campaign, language, script variant, and rep handoff — so ops teams optimize with data, not gut feel.",
    primaryCta: "See sample dashboards",
    chips: ["Live metrics", "Funnel view", "Language split", "Export ready"],
    stats: [
      { value: "Live", label: "Campaign pulse during active dials" },
      { value: "15+", label: "Standard KPI widgets out of the box" },
      { value: "CSV", label: "Export and API for BI tools" },
      { value: "Lang", label: "Breakdown by Telugu, Hindi, English" },
    ],
    problemTitle: "Flying blind on AI call performance",
    problem:
      "Leadership asks for connect rate and cost per promise-to-pay. Legacy dialers export raw CDRs that someone pivots in Excel — days late, error-prone, and missing AI-specific metrics like containment.",
    currentTitle: "How teams report call metrics today",
    currentSteps: [
      "Export CDR files and manually join with CRM in spreadsheets.",
      "Count connects and conversions by hand each week.",
      "Cannot compare script A vs B without custom engineering.",
      "Language performance is invisible — all locales lumped together.",
    ],
    aiTitle: "How SvaraCall analytics works",
    aiSteps: [
      "Dashboard ingests every dial, talk second, outcome, and transfer.",
      "Funnel view shows connect → contain → convert → handoff.",
      "Filter by campaign, script version, voice, language, and time window.",
      "Export or webhook metrics to your BI stack and executive slides.",
    ],
    benefitsTitle: "Why voice analytics matter",
    benefits: [
      {
        title: "Ops tuning",
        body: "Spot underperforming windows and shift schedules with evidence.",
      },
      {
        title: "Script optimization",
        body: "A/B results visible without SQL — promote winners same day.",
      },
      {
        title: "Executive clarity",
        body: "Cost per outcome and containment rate ready for board reviews.",
      },
      {
        title: "Compliance audit",
        body: "Track opt-out rate, disclosure completion, and DNC hits.",
      },
    ],
    roiTitle: "Analytics ROI",
    roi: [
      { value: "10 hrs", label: "Saved weekly on manual reporting in pilot ops teams" },
      { value: "12%", label: "Average containment lift after data-driven script edits" },
      { value: "100%", label: "Calls attributed to campaign and script version" },
      { value: "Real-time", label: "Alerts when connect rate drops below threshold" },
    ],
    implTitle: "Get value from analytics fast",
    implementation: [
      {
        title: "Baseline a campaign",
        body: "Run one week unchanged — establish connect and containment benchmarks.",
      },
      {
        title: "Set alert thresholds",
        body: "Notify Slack or email when KPIs breach limits mid-campaign.",
      },
      {
        title: "Run one A/B test",
        body: "Change only the opening line — compare funnel in the dashboard.",
      },
      {
        title: "Wire to BI",
        body: "Export scheduled reports or use webhooks for Looker, Power BI, or Metabase.",
      },
    ],
    tableTitle: "Core KPI definitions",
    tableHeaders: ["Metric", "Definition", "Typical target"],
    tableRows: [
      ["Connect rate", "Answered dials ÷ attempted dials", "18–35% outbound"],
      ["Containment", "Resolved without human ÷ connected", "70–90% reminders"],
      ["Transfer rate", "Live transfers ÷ connected", "<15% for routine flows"],
      ["Opt-out rate", "DNC requests ÷ connected", "<2% compliant campaigns"],
    ],
    relatedTitle: "Related features",
    related: [
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Real-time transcription", href: "/features/real-time-transcription" },
      { name: "Payment reminders", href: "/use-cases/payment-reminders" },
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "Salesforce integration", href: "/integrations/salesforce" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Analytics FAQs",
    faqs: [
      {
        q: "Can we see metrics split by Telugu, Hindi, and English?",
        a: "Yes. Language filters apply to connect, containment, and conversion across all dashboards.",
      },
      {
        q: "Does analytics update in real time during campaigns?",
        a: "Live campaign view refreshes as dials complete — no overnight batch delay.",
      },
      {
        q: "Can we export data for custom reports?",
        a: "CSV export and webhooks feed your BI tools. API access on enterprise tiers.",
      },
      {
        q: "How is cost per outcome calculated?",
        a: "Configure your per-minute or per-call cost model — dashboard shows cost per connect, PTP, and booked appointment.",
      },
    ],
    ctaTitle: "Optimize with",
    ctaAccent: "real data",
    ctaBody:
      "Book a pilot and we will walk through live dashboards on your first campaign week.",
  },
  {
    slug: "crm-integration",
    name: "CRM Integration",
    metaTitle: "CRM Integration for AI Voice Agents | SvaraCall",
    metaDescription:
      "Sync SvaraCall AI voice agents with Salesforce, HubSpot, Zoho, and more — dispositions, transcripts, and recordings logged automatically on every call.",
    eyebrow: "Features · CRM Integration",
    headline: "Every call logged to CRM automatically",
    subcopy:
      "SvaraCall pushes outcomes, transcripts, recordings, and next steps to your CRM — so sales and service teams work from one timeline, not parallel spreadsheets.",
    primaryCta: "Connect your CRM",
    chips: ["Salesforce", "HubSpot", "Zoho", "Auto-logging"],
    stats: [
      { value: "90+", label: "Integration catalog entries" },
      { value: "Auto", label: "Disposition sync after every call" },
      { value: "Bi-dir", label: "Pull lists and push outcomes" },
      { value: "0", label: "Manual note entry on integrated flows" },
    ],
    problemTitle: "CRM timelines lie when calls are not logged",
    problem:
      "Reps chase leads without knowing an AI already called twice. Managers forecast on stale data. Indian inside-sales teams lose hours copying call notes from dialer exports into Salesforce or HubSpot.",
    currentTitle: "How CRM logging works today",
    currentSteps: [
      "Reps manually type call notes — often skipped on busy days.",
      "Dialer and CRM stay disconnected — two sources of truth.",
      "Transcripts and recordings live in a folder reps never open.",
      "Marketing automation cannot trigger on voice outcomes.",
    ],
    aiTitle: "How SvaraCall CRM integration works",
    aiSteps: [
      "Connect CRM with OAuth — map objects, fields, and owners.",
      "Pull contact lists or trigger calls from CRM workflows.",
      "After each call, disposition, transcript, and recording URL write back.",
      "Handoff tasks create with full context for human follow-up.",
    ],
    benefitsTitle: "Why CRM-native voice wins",
    benefits: [
      {
        title: "Single timeline",
        body: "Every AI attempt visible on the lead — no duplicate outreach.",
      },
      {
        title: "Trigger automations",
        body: "Fire email, WhatsApp, or rep tasks based on voice disposition.",
      },
      {
        title: "Manager trust",
        body: "Pipeline reviews use actual call data, not rep memory.",
      },
      {
        title: "Faster onboarding",
        body: "New reps inherit full AI context before their first callback.",
      },
    ],
    roiTitle: "CRM integration ROI",
    roi: [
      { value: "85%", label: "Reduction in manual CRM logging time" },
      { value: "30%", label: "Fewer duplicate dials to same lead" },
      { value: "2×", label: "Faster rep callback prep with attached transcripts" },
      { value: "Same day", label: "Typical Salesforce or HubSpot connect on pilot" },
    ],
    implTitle: "Connect CRM in four steps",
    implementation: [
      {
        title: "Authorize integration",
        body: "OAuth to Salesforce, HubSpot, or Zoho — least-privilege scopes.",
      },
      {
        title: "Map fields",
        body: "Match disposition, recording URL, and custom fields to your schema.",
      },
      {
        title: "Test on five records",
        body: "Run pilot calls; verify timeline entries and task creation.",
      },
      {
        title: "Scale campaigns",
        body: "Pull segments from CRM views; push results on campaign completion.",
      },
    ],
    relatedTitle: "Integrations and related features",
    related: [
      { name: "Salesforce", href: "/integrations/salesforce" },
      { name: "HubSpot", href: "/integrations/hubspot" },
      { name: "Agent handoff", href: "/features/agent-handoff" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Lead qualification", href: "/use-cases/lead-qualification" },
      { name: "Brokerage industry", href: "/industries/brokerage" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "CRM integration FAQs",
    faqs: [
      {
        q: "Which CRMs does SvaraCall support natively?",
        a: "Salesforce, HubSpot, and Zoho CRM are ready today. Additional CRMs connect via webhooks and Zapier-style middleware.",
      },
      {
        q: "Can we trigger calls from CRM automations?",
        a: "Yes. New lead, stage change, or renewal date can enqueue an AI call via webhook or native workflow action.",
      },
      {
        q: "What gets written back after each call?",
        a: "Disposition, duration, transcript summary, recording link, and custom mapped fields — configurable per integration.",
      },
      {
        q: "Is CRM data stored outside India?",
        a: "SvaraCall call artifacts stay on AWS Mumbai. CRM storage follows your CRM vendor's region settings.",
      },
    ],
    ctaTitle: "Sync calls to",
    ctaAccent: "your CRM",
    ctaBody:
      "Connect Salesforce or HubSpot on a pilot — see the first AI dispositions land on live leads.",
  },
  {
    slug: "knowledge-base",
    name: "Knowledge Base",
    metaTitle: "Knowledge Base for AI Voice Agents | SvaraCall",
    metaDescription:
      "Ground SvaraCall AI voice agents in your knowledge base — policies, FAQs, and product docs retrieved in real time for accurate Telugu, Hindi, and English answers.",
    eyebrow: "Features · Knowledge Base",
    headline: "Agents that know your business, not generic guesses",
    subcopy:
      "Upload policies, FAQs, and product sheets — SvaraCall RAG retrieves the right answer on live calls instead of hallucinating rates, return windows, or clinic hours.",
    primaryCta: "Upload your KB",
    chips: ["RAG retrieval", "Source citations", "Version control", "Multilingual"],
    stats: [
      { value: "Live", label: "Retrieval during active calls" },
      { value: "PDF+URL", label: "Docs, sheets, and web pages ingested" },
      { value: "Cited", label: "Source chunk referenced in QA review" },
      { value: "3 langs", label: "Answer in caller's language" },
    ],
    problemTitle: "Generic LLMs invent facts on regulated calls",
    problem:
      "An AI that guesses EMI amounts or clinic timings creates complaints and compliance risk. Static IVR trees cannot cover thousands of SKU and policy variants across Indian product catalogs.",
    currentTitle: "How teams share knowledge today",
    currentSteps: [
      "Maintain PDF playbooks reps memorize inconsistently.",
      "IVR trees with hundreds of branches nobody updates.",
      "Chatbots with stale FAQ pages disconnected from voice.",
      "No audit trail when an agent states the wrong policy.",
    ],
    aiTitle: "How SvaraCall knowledge base works",
    aiSteps: [
      "Ingest docs, URLs, and structured FAQ pairs into workspace KB.",
      "Agent retrieves relevant chunks per caller question in real time.",
      "Responses stay within retrieved context — citations logged for QA.",
      "Update a doc once — next call uses the new policy automatically.",
    ],
    benefitsTitle: "Why grounded answers matter",
    benefits: [
      {
        title: "Fewer escalations",
        body: "Routine policy questions resolve without live transfer.",
      },
      {
        title: "Audit trail",
        body: "QA sees which KB chunk supported each spoken answer.",
      },
      {
        title: "Fast updates",
        body: "Rate change on Monday is live on Tuesday's renewal calls.",
      },
      {
        title: "Multilingual parity",
        body: "Same source truth answers in Telugu, Hindi, or English.",
      },
    ],
    roiTitle: "Knowledge base ROI",
    roi: [
      { value: "25%", label: "Higher containment on policy-heavy flows" },
      { value: "90%", label: "Reduction in 'wrong information' QA flags in pilots" },
      { value: "1 hr", label: "Typical doc-to-live turnaround after upload" },
      { value: "0", label: "Engineering deploys for FAQ text changes" },
    ],
    implTitle: "Build your voice knowledge base",
    implementation: [
      {
        title: "Curate sources",
        body: "Start with top 20 FAQs and policy PDFs that drive escalations today.",
      },
      {
        title: "Upload and index",
        body: "SvaraCall chunks and embeds content — tag by product line.",
      },
      {
        title: "Test retrieval",
        body: "Run simulation calls with edge-case questions before production.",
      },
      {
        title: "Govern updates",
        body: "Assign owners to approve doc changes with version history.",
      },
    ],
    relatedTitle: "Related capabilities",
    related: [
      { name: "Custom prompts", href: "/features/custom-prompts" },
      { name: "Memory", href: "/features/memory" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Insurance industry", href: "/industries/insurance" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Knowledge base FAQs",
    faqs: [
      {
        q: "What file types can we upload?",
        a: "PDF, DOCX, CSV FAQ sheets, and public URLs. Structured Q&A pairs import cleanly for voice retrieval.",
      },
      {
        q: "Can the agent answer outside the knowledge base?",
        a: "Configurable guardrails restrict answers to retrieved context — escalates when confidence is low.",
      },
      {
        q: "How do we prevent outdated policies from being spoken?",
        a: "Version tags and publish workflow — deprecated docs are excluded from retrieval immediately.",
      },
      {
        q: "Does KB work in Telugu and Hindi?",
        a: "Sources can be English; answers localize to the caller's language using retrieved facts.",
      },
    ],
    ctaTitle: "Answer accurately with",
    ctaAccent: "your KB",
    ctaBody:
      "Upload your top FAQs on a pilot — we will demo retrieval on live test calls.",
  },
  {
    slug: "custom-prompts",
    name: "Custom Prompts",
    metaTitle: "Custom Prompts for AI Voice Agents | SvaraCall",
    metaDescription:
      "Author custom prompts and scripts for SvaraCall AI voice agents — brand tone, compliance blocks, and vertical workflows without redeploying code.",
    eyebrow: "Features · Custom Prompts",
    headline: "Your script, your tone, your compliance lines",
    subcopy:
      "SvaraCall custom prompts let ops teams edit agent behavior, openings, objection handling, and mandatory disclosures — versioned, A/B testable, and live on the next dial batch.",
    primaryCta: "Draft your first prompt",
    chips: ["Version control", "Compliance blocks", "A/B ready", "No code"],
    stats: [
      { value: "No code", label: "Prompt edits without engineering" },
      { value: "Versions", label: "Rollback any script change instantly" },
      { value: "A/B", label: "Split traffic across prompt variants" },
      { value: "Locked", label: "Mandatory TRAI disclosure lines" },
    ],
    problemTitle: "Hard-coded bots cannot keep up with campaigns",
    problem:
      "Marketing launches a new offer Monday. Engineering queues a prompt change for Friday. Compliance adds a disclosure line that never reaches production. Indian seasonal campaigns — Diwali renewals, admission drives — need same-day script agility.",
    currentTitle: "How script changes work today",
    currentSteps: [
      "File tickets for developers to edit JSON or code-based flows.",
      "Copy-paste Word docs to call centers — drift within days.",
      "No version history when a bad script tanks connect rates.",
      "Compliance phrases live in footnotes reps skip.",
    ],
    aiTitle: "How SvaraCall custom prompts work",
    aiSteps: [
      "Author prompts in the dashboard with sections for open, body, close, escalate.",
      "Lock compliance blocks — recording disclosure, opt-out — non-editable by ops.",
      "Publish to campaign; previous version archived with one-click rollback.",
      "A/B assign variants and read funnel impact in analytics.",
    ],
    benefitsTitle: "Why prompt control belongs with ops",
    benefits: [
      {
        title: "Same-day launches",
        body: "New offer copy live on the next dial batch — no deploy window.",
      },
      {
        title: "Brand voice",
        body: "Formal NBFC tone or friendly D2C style — encoded in system prompts.",
      },
      {
        title: "Safe compliance",
        body: "Legal-approved lines cannot be deleted by accident.",
      },
      {
        title: "Learn faster",
        body: "Test openings weekly; promote winners with evidence.",
      },
    ],
    roiTitle: "Custom prompts ROI",
    roi: [
      { value: "5 days→1 hr", label: "Typical script change cycle compression" },
      { value: "18%", label: "Connect lift from opening-line A/B tests" },
      { value: "100%", label: "Campaigns with prompt version audit trail" },
      { value: "0", label: "Developer hours for routine copy edits" },
    ],
    implTitle: "Ship custom prompts safely",
    implementation: [
      {
        title: "Start from template",
        body: "Clone vertical templates — EMI reminder, appointment confirm, lead qualify.",
      },
      {
        title: "Add brand and compliance",
        body: "Layer tone guidelines and locked disclosure blocks.",
      },
      {
        title: "Simulate before dial",
        body: "Run test calls against your prompt before attaching to live list.",
      },
      {
        title: "Iterate with analytics",
        body: "Compare variants; rollback instantly if metrics dip.",
      },
    ],
    relatedTitle: "Related features",
    related: [
      { name: "Knowledge base", href: "/features/knowledge-base" },
      { name: "Voice cloning", href: "/features/voice-cloning" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Lead follow-up", href: "/use-cases/lead-follow-up" },
      { name: "Education industry", href: "/industries/education" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Custom prompts FAQs",
    faqs: [
      {
        q: "Can compliance lock certain lines from editing?",
        a: "Yes. Admins mark disclosure and opt-out blocks as mandatory — ops cannot remove them.",
      },
      {
        q: "How do we test prompts before going live?",
        a: "Simulation mode runs test calls to your team with the draft prompt — no customer dials.",
      },
      {
        q: "Can prompts differ by language?",
        a: "Each campaign language has its own prompt variant — Telugu, Hindi, and English maintained separately.",
      },
      {
        q: "What if a bad prompt hurts performance?",
        a: "One-click rollback to the previous version; A/B traffic can shift instantly.",
      },
    ],
    ctaTitle: "Ship scripts at",
    ctaAccent: "ops speed",
    ctaBody:
      "Book a workshop — we will draft your first compliant prompt and run test calls same week.",
  },
  {
    slug: "memory",
    name: "Memory",
    metaTitle: "Memory for AI Voice Agents | SvaraCall",
    metaDescription:
      "Persistent memory for SvaraCall AI voice agents — recall prior calls, preferences, and promises across touchpoints so customers never repeat themselves.",
    eyebrow: "Features · Memory",
    headline: "Agents that remember the last conversation",
    subcopy:
      "SvaraCall memory stores caller context across calls — last promise-to-pay date, preferred language, open ticket — so follow-ups feel continuous, not cold.",
    primaryCta: "See memory in action",
    chips: ["Cross-call", "CRM-aware", "Consent-scoped", "TTL control"],
    stats: [
      { value: "Cross-call", label: "Context carries to follow-up dials" },
      { value: "CRM", label: "Syncs with contact timeline fields" },
      { value: "TTL", label: "Configurable retention per data class" },
      { value: "DPDP", label: "Delete-on-request supported" },
    ],
    problemTitle: "Every AI call feels like the first — customers hate it",
    problem:
      "A customer promised to pay Friday. Monday's AI asks again from scratch. Trust erodes. Indian collections and healthcare follow-ups need continuity without building custom CRM middleware.",
    currentTitle: "How context persists today",
    currentSteps: [
      "Reps read CRM notes if they exist — AI has no shared memory.",
      "Each dialer campaign treats every call as net-new.",
      "Callback scripts ignore what the customer said yesterday.",
      "No unified delete path when customers exercise DPDP rights.",
    ],
    aiTitle: "How SvaraCall memory works",
    aiSteps: [
      "Key facts extract from each call — dates, amounts, preferences, objections.",
      "Memory attaches to contact ID with TTL and consent scope.",
      "Next call loads context — agent references prior promise naturally.",
      "Deletion API clears memory on opt-out or erasure request.",
    ],
    benefitsTitle: "Why memory improves outcomes",
    benefits: [
      {
        title: "Higher PTP keep rates",
        body: "Collections calls reference agreed dates instead of restarting negotiation.",
      },
      {
        title: "Warmer follow-ups",
        body: "Lead nurture picks up mid-funnel — not from cold openers.",
      },
      {
        title: "Less repetition",
        body: "CSAT rises when customers are not asked the same question twice.",
      },
      {
        title: "Privacy control",
        body: "TTL and erasure hooks align with DPDP data-minimization expectations.",
      },
    ],
    roiTitle: "Memory ROI",
    roi: [
      { value: "20%", label: "Higher promise-to-pay adherence with contextual follow-up" },
      { value: "15%", label: "Shorter average talk time on repeat contacts" },
      { value: "100%", label: "Memory scoped to workspace consent rules" },
      { value: "Instant", label: "Erasure on verified DPDP request" },
    ],
    implTitle: "Enable agent memory",
    implementation: [
      {
        title: "Define memory fields",
        body: "Choose what to persist — PTP date, language pref, open case ID.",
      },
      {
        title: "Set TTL policies",
        body: "Auto-expire sensitive facts; keep benign prefs longer if allowed.",
      },
      {
        title: "Wire CRM sync",
        body: "Mirror memory to CRM custom fields for human rep visibility.",
      },
      {
        title: "Test continuity",
        body: "Run two-call pilot — verify second call references first naturally.",
      },
    ],
    relatedTitle: "Related features",
    related: [
      { name: "Knowledge base", href: "/features/knowledge-base" },
      { name: "Agent handoff", href: "/features/agent-handoff" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "EMI reminders", href: "/use-cases/emi-reminders" },
      { name: "Fintech industry", href: "/industries/fintech" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Memory FAQs",
    faqs: [
      {
        q: "Is memory shared across campaigns?",
        a: "Yes, scoped to the contact within your workspace — so follow-up campaigns inherit prior context.",
      },
      {
        q: "How does memory comply with DPDP?",
        a: "TTL limits, purpose binding, and erasure APIs let you delete stored facts on request.",
      },
      {
        q: "Can humans see what the AI remembers?",
        a: "Memory fields sync to CRM and appear in the call detail view for reps.",
      },
      {
        q: "What if memory is wrong?",
        a: "Reps and admins can override or clear fields; corrections propagate to the next call.",
      },
    ],
    ctaTitle: "Follow up with",
    ctaAccent: "context",
    ctaBody:
      "Book a two-call pilot — see memory carry from first dial to scheduled follow-up.",
  },
  {
    slug: "webhooks",
    name: "Webhooks",
    metaTitle: "Webhooks for AI Voice Agents | SvaraCall",
    metaDescription:
      "SvaraCall webhooks stream AI voice agent events — call started, ended, disposition, transfer — to your stack in real time for automations and custom workflows.",
    eyebrow: "Features · Webhooks",
    headline: "Wire voice events into your stack instantly",
    subcopy:
      "SvaraCall webhooks POST structured JSON on call lifecycle events — trigger Slack alerts, update data warehouses, or enqueue follow-up jobs without polling.",
    primaryCta: "Set up a webhook",
    chips: ["Real-time", "Signed payloads", "Retry logic", "Event filters"],
    stats: [
      { value: "<1s", label: "Typical delivery after call event" },
      { value: "HMAC", label: "Signed payloads for verification" },
      { value: "Retry", label: "Automatic backoff on 5xx responses" },
      { value: "10+", label: "Event types — start, end, transfer, opt-out" },
    ],
    problemTitle: "Polling call logs slows automations",
    problem:
      "Engineering cron jobs scrape dialer exports every hour. Payment systems learn about promise-to-pay too late. Indian ops teams want WhatsApp nudges and ledger updates the moment an AI call completes.",
    currentTitle: "How integrations work without webhooks",
    currentSteps: [
      "Schedule batch exports from dialer to SFTP overnight.",
      "Write custom scrapers that break when APIs change.",
      "Miss hot leads because CRM updates lag by hours.",
      "No reliable signal when customers opt out mid-call.",
    ],
    aiTitle: "How SvaraCall webhooks work",
    aiSteps: [
      "Register HTTPS endpoints in workspace settings with event filters.",
      "SvaraCall POSTs signed JSON on call.started, call.ended, call.transferred, etc.",
      "Your service ACKs 200 — retries with backoff on failures.",
      "Payload includes call ID, disposition, transcript URL, and custom metadata.",
    ],
    benefitsTitle: "Why event-driven voice wins",
    benefits: [
      {
        title: "Real-time automations",
        body: "Trigger WhatsApp, SMS, or email the second disposition is set.",
      },
      {
        title: "Custom stacks",
        body: "Connect internal ERP, ledger, or data lake without native CRM.",
      },
      {
        title: "Reliable delivery",
        body: "Retries and dead-letter logs — no silent drops.",
      },
      {
        title: "Secure verification",
        body: "HMAC signatures let you reject forged payloads.",
      },
    ],
    roiTitle: "Webhooks ROI",
    roi: [
      { value: "Hours→sec", label: "Disposition-to-downstream-system latency" },
      { value: "0", label: "Batch export jobs for integrated workflows" },
      { value: "99.9%", label: "Delivery target with retry policy" },
      { value: "1 day", label: "Typical webhook integration on pilot" },
    ],
    implTitle: "Integrate via webhooks",
    implementation: [
      {
        title: "Expose an endpoint",
        body: "HTTPS receiver with idempotency on call_id event pairs.",
      },
      {
        title: "Register in SvaraCall",
        body: "Select events, paste URL, store signing secret securely.",
      },
      {
        title: "Verify signatures",
        body: "Validate HMAC before processing — reject tampered payloads.",
      },
      {
        title: "Go live on one campaign",
        body: "Watch events flow; expand filters once stable.",
      },
    ],
    relatedTitle: "Related integrations",
    related: [
      { name: "REST API", href: "/features/api" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "Order updates", href: "/use-cases/order-updates" },
      { name: "E-commerce industry", href: "/industries/ecommerce" },
      { name: "HubSpot integration", href: "/integrations/hubspot" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Webhooks FAQs",
    faqs: [
      {
        q: "Which events can webhooks subscribe to?",
        a: "Call started, ringing, answered, ended, disposition set, transfer, opt-out, and recording ready — filter per endpoint.",
      },
      {
        q: "How do we verify webhook authenticity?",
        a: "Each payload includes an HMAC signature using your workspace secret — verify before processing.",
      },
      {
        q: "What happens if our endpoint is down?",
        a: "SvaraCall retries with exponential backoff and logs failures in the dashboard for replay.",
      },
      {
        q: "Can one workspace have multiple webhook URLs?",
        a: "Yes. Route different events to different services — CRM to one URL, data warehouse to another.",
      },
    ],
    ctaTitle: "Automate on",
    ctaAccent: "every event",
    ctaBody:
      "Register a test webhook on pilot — watch call.end events hit your endpoint live.",
  },
  {
    slug: "api",
    name: "REST API",
    metaTitle: "REST API for AI Voice Agents | SvaraCall",
    metaDescription:
      "Programmatic control of SvaraCall AI voice agents via REST API — launch campaigns, fetch transcripts, manage DNC, and embed voice into your product.",
    eyebrow: "Features · REST API",
    headline: "Build voice calling into your product",
    subcopy:
      "SvaraCall REST API lets engineering teams trigger calls, pull outcomes, and manage lists from code — with API keys, rate limits, and India-hosted data paths.",
    primaryCta: "Read API docs",
    chips: ["REST", "API keys", "Idempotent", "India region"],
    stats: [
      { value: "REST", label: "JSON API with OpenAPI spec" },
      { value: "Idempotent", label: "Safe retries on call create" },
      { value: "Mumbai", label: "Low-latency region for India apps" },
      { value: "SLA", label: "Enterprise uptime commitments available" },
    ],
    problemTitle: "No API means voice stays siloed from your product",
    problem:
      "Fintech apps want to trigger KYC reminder calls from a backend job. Marketplaces want delivery confirmation on shipment scan. Without APIs, teams export CSVs manually — slow and error-prone.",
    currentTitle: "How teams integrate voice today",
    currentSteps: [
      "Ops uploads CSVs through a dashboard — engineering not involved.",
      "Custom dialer integrations require opaque vendor SDKs.",
      "No programmatic access to transcripts or dispositions.",
      "Sandbox environments missing — test in production dangerously.",
    ],
    aiTitle: "How SvaraCall REST API works",
    aiSteps: [
      "Generate API keys with scoped permissions — read, write, admin.",
      "POST /calls to enqueue single or batch outbound with script ID.",
      "GET /calls/{id} for status, transcript, recording, disposition.",
      "Manage DNC, lists, and campaigns programmatically from your backend.",
    ],
    benefitsTitle: "Why developers choose SvaraCall API",
    benefits: [
      {
        title: "Product-native voice",
        body: "Embed calling into loan, commerce, or health apps without a separate dialer UI.",
      },
      {
        title: "Predictable contracts",
        body: "OpenAPI spec, versioning, and changelog — build with confidence.",
      },
      {
        title: "Secure access",
        body: "Rotating keys, IP allowlists, and audit logs on enterprise tiers.",
      },
      {
        title: "Full lifecycle",
        body: "Create, monitor, cancel, and analyze calls from one API surface.",
      },
    ],
    roiTitle: "API ROI",
    roi: [
      { value: "Days→hrs", label: "Integration time vs custom dialer middleware" },
      { value: "100%", label: "Disposition parity between UI and API paths" },
      { value: "0", label: "Manual CSV uploads for automated workflows" },
      { value: "Sandbox", label: "Test environment on every pilot account" },
    ],
    implTitle: "Integrate with the REST API",
    implementation: [
      {
        title: "Get API keys",
        body: "Create scoped keys in workspace settings — separate read and write.",
      },
      {
        title: "Enqueue test call",
        body: "POST a single call to your mobile with a sandbox script ID.",
      },
      {
        title: "Poll or webhook",
        body: "Fetch outcome via GET or subscribe to call.ended webhooks.",
      },
      {
        title: "Scale to production",
        body: "Batch enqueue with rate limits; monitor via analytics API.",
      },
    ],
    relatedTitle: "Developer resources",
    related: [
      { name: "SDK", href: "/features/sdk" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Delivery confirmation", href: "/use-cases/delivery-confirmation" },
      { name: "HR tech industry", href: "/industries/hr-tech" },
      { name: "Salesforce integration", href: "/integrations/salesforce" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "REST API FAQs",
    faqs: [
      {
        q: "Is there an OpenAPI specification?",
        a: "Yes. Full OpenAPI 3 spec with examples ships on pilot — covers calls, campaigns, lists, and DNC.",
      },
      {
        q: "Can we trigger single ad-hoc calls via API?",
        a: "Yes. POST /calls with contact payload and script ID — ideal for app-triggered reminders.",
      },
      {
        q: "How are API keys secured?",
        a: "Rotate keys anytime; enterprise adds IP allowlisting and separate read-only keys.",
      },
      {
        q: "Where does API traffic terminate?",
        a: "India-region endpoints for low latency; data residency aligns with AWS Mumbai storage.",
      },
    ],
    ctaTitle: "Build with the",
    ctaAccent: "SvaraCall API",
    ctaBody:
      "Request sandbox access — enqueue your first programmatic test call same week.",
  },
  {
    slug: "sdk",
    name: "SDK",
    metaTitle: "SDK for AI Voice Agents | SvaraCall",
    metaDescription:
      "Official SvaraCall SDKs for Node.js and Python — typed clients to launch AI voice agent calls, handle webhooks, and embed voice workflows faster.",
    eyebrow: "Features · SDK",
    headline: "Ship voice integrations faster with typed SDKs",
    subcopy:
      "SvaraCall SDKs wrap the REST API with idiomatic Node.js and Python clients — retries, typing, and webhook verification built in so your team focuses on product logic.",
    primaryCta: "Install the SDK",
    chips: ["Node.js", "Python", "Typed", "Webhook helpers"],
    stats: [
      { value: "2 langs", label: "Official SDKs — Node.js and Python" },
      { value: "Typed", label: "Full TypeScript definitions" },
      { value: "Built-in", label: "Retry and idempotency helpers" },
      { value: "Verify", label: "Webhook signature utilities included" },
    ],
    problemTitle: "Raw HTTP integrations slow every sprint",
    problem:
      "Engineers reimplement auth, retries, and pagination for each voice feature. Bugs hide in hand-rolled JSON parsing. Indian product teams need to ship calling in days, not quarters.",
    currentTitle: "How teams integrate without SDKs",
    currentSteps: [
      "Copy-paste curl examples into services with no typing.",
      "Reimplement HMAC verification differently in each microservice.",
      "Miss API version changes until production breaks.",
      "No shared error handling — transient 503s lose calls.",
    ],
    aiTitle: "How SvaraCall SDKs work",
    aiSteps: [
      "Install @svaracall/node or svaracall-python from registry.",
      "Initialize client with API key — methods map 1:1 to REST resources.",
      "Use built-in retries and idempotency keys on call.create.",
      "Verify webhooks with one-line signature check helpers.",
    ],
    benefitsTitle: "Why SDKs beat raw REST",
    benefits: [
      {
        title: "Faster shipping",
        body: "First call enqueued in under an hour from npm or pip install.",
      },
      {
        title: "Fewer bugs",
        body: "Typed requests catch field errors at compile time.",
      },
      {
        title: "Consistent security",
        body: "Webhook verification matches docs — no drift across services.",
      },
      {
        title: "Version clarity",
        body: "Semver SDK releases track API changes with migration notes.",
      },
    ],
    roiTitle: "SDK ROI",
    roi: [
      { value: "60%", label: "Less integration code vs raw HTTP clients" },
      { value: "1 hr", label: "Typical time to first successful SDK call" },
      { value: "0", label: "Custom HMAC implementations needed" },
      { value: "Same week", label: "Production pilot on Node or Python stacks" },
    ],
    implTitle: "Get started with the SDK",
    implementation: [
      {
        title: "Install package",
        body: "npm install @svaracall/node or pip install svaracall — use sandbox key.",
      },
      {
        title: "Enqueue test call",
        body: "Five lines to create a call — run against your mobile number.",
      },
      {
        title: "Handle webhook",
        body: "Use verifySignature helper in your Express or FastAPI route.",
      },
      {
        title: "Promote to prod",
        body: "Swap API key; enable rate limits; monitor via analytics.",
      },
    ],
    relatedTitle: "Developer toolkit",
    related: [
      { name: "REST API", href: "/features/api" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "CRM integration", href: "/features/crm-integration" },
      { name: "AI receptionist", href: "/use-cases/ai-receptionist" },
      { name: "Consultation industry", href: "/industries/consultation" },
      { name: "HubSpot integration", href: "/integrations/hubspot" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "SDK FAQs",
    faqs: [
      {
        q: "Which languages have official SDKs?",
        a: "Node.js (TypeScript) and Python today. Community wrappers for Go and Java on roadmap — REST API always available.",
      },
      {
        q: "Do SDKs support async operations?",
        a: "Yes. Promise-based Node client and async Python client for modern frameworks.",
      },
      {
        q: "How are SDK versions tied to API versions?",
        a: "Semver SDK releases document compatible API versions — breaking changes bump major.",
      },
      {
        q: "Can we verify webhooks with the SDK?",
        a: "Yes. verifyWebhookSignature helpers ship in both packages with test vectors in docs.",
      },
    ],
    ctaTitle: "Integrate faster with",
    ctaAccent: "official SDKs",
    ctaBody:
      "Request sandbox keys and sample repo — first SDK call on your stack in one session.",
  },
  {
    slug: "barge-in",
    name: "Barge-In",
    metaTitle: "Barge-In for AI Voice Agents | SvaraCall",
    metaDescription:
      "Natural barge-in on SvaraCall AI voice agents — callers interrupt mid-sentence, agent stops, listens, and responds without IVR lag.",
    eyebrow: "Features · Barge-In",
    headline: "Let callers interrupt — the agent actually listens",
    subcopy:
      "SvaraCall barge-in detects caller speech during agent turns, stops TTS immediately, and processes the new intent — essential for natural Hindi and Telugu conversations.",
    primaryCta: "Hear barge-in demo",
    chips: ["Low latency", "Full-duplex", "Natural turns", "No talk-over"],
    stats: [
      { value: "<300ms", label: "Typical stop latency on barge-in" },
      { value: "Full", label: "Duplex audio on supported trunks" },
      { value: "Natural", label: "Turn-taking vs robotic monologue" },
      { value: "3 langs", label: "Barge-in tuned per language" },
    ],
    problemTitle: "Robotic agents talk over customers",
    problem:
      "Legacy voicebots finish their paragraph while the caller shouts 'stop' or 'haan boliye'. Indian callers expect conversational turn-taking — especially on collections and support calls where emotions run high.",
    currentTitle: "How legacy bots handle interruption",
    currentSteps: [
      "Play fixed audio clips — caller must wait for menu to end.",
      "Detect DTMF only — speech barge-in unsupported or laggy.",
      "Agent repeats from the top after interruption — frustrating loops.",
      "Supervisors cannot coach because talk-over ruins recordings.",
    ],
    aiTitle: "How SvaraCall barge-in works",
    aiSteps: [
      "Full-duplex stream monitors caller audio during agent speech.",
      "VAD detects caller voice — TTS stops within milliseconds.",
      "ASR captures the interruption and routes to intent handling.",
      "Agent responds to the new input without restarting the script.",
    ],
    benefitsTitle: "Why barge-in matters in India",
    benefits: [
      {
        title: "Natural feel",
        body: "Conversations flow like human telecallers — not lecture mode.",
      },
      {
        title: "Faster resolution",
        body: "Callers correct the agent immediately — fewer wrong-path minutes.",
      },
      {
        title: "Higher containment",
        body: "Less hang-up when people can jump in with 'payment already done'.",
      },
      {
        title: "Cleaner recordings",
        body: "Less talk-over noise — better QA and transcription quality.",
      },
    ],
    roiTitle: "Barge-in ROI",
    roi: [
      { value: "30%", label: "Lower hang-up rate vs non-barge-in IVR replacements" },
      { value: "20%", label: "Shorter calls when callers interrupt early" },
      { value: "<300ms", label: "Stop latency on production Hindi paths" },
      { value: "Higher", label: "CSAT on support flows in pilot benchmarks" },
    ],
    implTitle: "Enable barge-in on campaigns",
    implementation: [
      {
        title: "Confirm trunk capability",
        body: "Full-duplex SIP or CPaaS path required — we validate on pilot.",
      },
      {
        title: "Tune sensitivity",
        body: "Adjust VAD thresholds for noisy mobile networks common in India.",
      },
      {
        title: "Script for interrupts",
        body: "Prompts acknowledge barge-in — 'Ji, sun raha hoon' before new intent.",
      },
      {
        title: "Measure in analytics",
        body: "Track barge-in rate, subsequent containment, and hang-up delta.",
      },
    ],
    scriptTitle: "Barge-in during an EMI reminder",
    scriptExcerpt:
      "Agent: Namaste, aapka EMI payment 10 August ko due hai, main—\nCustomer: [interrupts] Main kal pay kar chuka hoon!\nAgent: [stops immediately] Ji, dhanyavaad — main abhi check karti hoon. Kya aap transaction ID share kar sakte hain?\nCustomer: TXN88291.\nAgent: Note kar liya. Hamari team verify karegi aur SMS bhejegi.",
    relatedTitle: "Related voice features",
    related: [
      { name: "Live transfer", href: "/features/live-transfer" },
      { name: "Multilingual AI", href: "/features/multilingual-ai" },
      { name: "Real-time transcription", href: "/features/real-time-transcription" },
      { name: "Customer support", href: "/use-cases/customer-support" },
      { name: "Telecom industry", href: "/industries/telecom" },
      { name: "Voice agents pillar", href: "/voice-agents" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Barge-in FAQs",
    faqs: [
      {
        q: "Does barge-in work on mobile networks in India?",
        a: "Yes. VAD is tuned for typical mobile noise profiles — validated on pilot calls across carriers.",
      },
      {
        q: "Can we disable barge-in for compliance scripts?",
        a: "Mandatory disclosure blocks can be marked non-interruptible — configurable per prompt section.",
      },
      {
        q: "What latency should we expect?",
        a: "Sub-300ms stop times on supported trunks — measured on Hindi and Telugu production paths.",
      },
      {
        q: "Does barge-in affect recording quality?",
        a: "Dual-channel recording captures clean handoffs — less overlap than legacy talk-over bots.",
      },
    ],
    ctaTitle: "Conversations that feel",
    ctaAccent: "human",
    ctaBody:
      "Book a barge-in demo — interrupt the agent live on a Hindi or Telugu test call.",
  },
  {
    slug: "pii-redaction",
    name: "PII Redaction",
    metaTitle: "PII Redaction for AI Voice Agents | SvaraCall",
    metaDescription:
      "Automatic PII redaction on SvaraCall AI voice agent recordings and transcripts — mask Aadhaar, PAN, cards, and health data with DPDP-aligned controls.",
    eyebrow: "Features · PII Redaction",
    headline: "Redact sensitive data before it spreads",
    subcopy:
      "SvaraCall detects and masks Aadhaar, PAN, payment cards, and custom PII patterns in audio and transcripts — so QA, CRM, and analytics stay compliant with DPDP minimization.",
    primaryCta: "Review redaction policy",
    chips: ["Aadhaar/PAN", "Audio + text", "DPDP-aware", "Custom patterns"],
    stats: [
      { value: "Auto", label: "Detection on record and transcript" },
      { value: "IN IDs", label: "Aadhaar and PAN patterns built in" },
      { value: "Dual", label: "Redact audio beeps and text masks" },
      { value: "Audit", label: "Log of redaction events per call" },
    ],
    problemTitle: "Raw recordings leak PII into every system",
    problem:
      "Customers speak Aadhaar numbers aloud on KYC calls. Transcripts land in CRM visible to entire sales teams. DPDP expects data minimization — not full PAN in a searchable note field.",
    currentTitle: "How teams handle PII today",
    currentSteps: [
      "Store full recordings accessible to all dialer users.",
      "Transcripts copy verbatim into CRM custom fields.",
      "Manual redaction in audio tools — never scaled.",
      "No audit when unmasked data exports to BI.",
    ],
    aiTitle: "How SvaraCall PII redaction works",
    aiSteps: [
      "Real-time classifiers detect Indian ID and payment patterns on speech.",
      "Audio redaction replaces sensitive spans with tone beeps.",
      "Transcripts show masked tokens — XXXX-XXXX-1234 style.",
      "Export policies block raw audio for roles without clearance.",
    ],
    benefitsTitle: "Why redaction protects everyone",
    benefits: [
      {
        title: "DPDP alignment",
        body: "Minimize personal data in systems that do not need full values.",
      },
      {
        title: "Safer QA",
        body: "Reviewers hear intent without seeing full Aadhaar or card numbers.",
      },
      {
        title: "CRM hygiene",
        body: "Synced notes carry redacted values — fewer data breach paths.",
      },
      {
        title: "Custom patterns",
        body: "Add hospital MRN, loan account, or internal ID formats.",
      },
    ],
    roiTitle: "PII redaction ROI",
    roi: [
      { value: "100%", label: "Transcripts exported with masks by default" },
      { value: "70%", label: "Less manual redaction labor in QA teams" },
      { value: "0", label: "Full PAN in standard CRM field mappings" },
      { value: "Audit", label: "Trail for regulators and internal InfoSec" },
    ],
    implTitle: "Deploy PII redaction",
    implementation: [
      {
        title: "Enable default patterns",
        body: "Turn on Aadhaar, PAN, card, and phone redaction workspace-wide.",
      },
      {
        title: "Add custom entities",
        body: "Regex or dictionary for account numbers unique to your vertical.",
      },
      {
        title: "Restrict playback roles",
        body: "Only compliance roles access unredacted audio — if ever required.",
      },
      {
        title: "Validate on pilot calls",
        body: "Run KYC test scenarios — confirm masks in CRM sync.",
      },
    ],
    relatedTitle: "Compliance-related features",
    related: [
      { name: "Call recording", href: "/features/call-recording" },
      { name: "Real-time transcription", href: "/features/real-time-transcription" },
      { name: "DNC management", href: "/features/dnc-management" },
      { name: "Debt collection", href: "/use-cases/debt-collection" },
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "PII redaction FAQs",
    faqs: [
      {
        q: "Which Indian ID formats are detected?",
        a: "Aadhaar, PAN, common payment card patterns, and phone numbers — plus custom regex you define.",
      },
      {
        q: "Is redaction applied to audio, text, or both?",
        a: "Both. Audio beeps over sensitive spans; transcripts show masked tokens.",
      },
      {
        q: "Can compliance teams access unredacted recordings?",
        a: "Role-gated access on enterprise tiers — every access logged for audit.",
      },
      {
        q: "Does redaction help with DPDP compliance?",
        a: "Redaction supports data-minimization principles — pair with retention policies and erasure workflows.",
      },
    ],
    ctaTitle: "Protect caller data with",
    ctaAccent: "automatic redaction",
    ctaBody:
      "Book a compliance demo — run KYC test calls and review redacted CRM exports.",
  },
  {
    slug: "dnc-management",
    name: "DNC Management",
    metaTitle: "DNC Management for AI Voice Agents | SvaraCall",
    metaDescription:
      "TRAI-aligned DNC and opt-out management for SvaraCall AI voice agents — scrub lists, honor STOP requests instantly, and sync suppression across campaigns.",
    eyebrow: "Features · DNC Management",
    headline: "Honor every opt-out the moment it is spoken",
    subcopy:
      "SvaraCall DNC management scrubs lists before dial, captures verbal opt-outs live, and blocks future attempts workspace-wide — aligned with TRAI DND expectations and DPDP consent principles.",
    primaryCta: "Configure DNC rules",
    chips: ["TRAI-aware", "Instant opt-out", "List scrub", "Workspace-wide"],
    stats: [
      { value: "Pre-dial", label: "Scrub against workspace DNC list" },
      { value: "Live", label: "Verbal opt-out logged mid-call" },
      { value: "Instant", label: "Block future dials on same number" },
      { value: "Import", label: "Merge national DND and internal lists" },
    ],
    problemTitle: "One missed opt-out becomes a TRAI complaint",
    problem:
      "Customers say 'don't call again' but the next campaign dials anyway. National DND registries and internal suppressions live in spreadsheets. Indian outbound teams need ironclad DNC — not batch updates overnight.",
    currentTitle: "How DNC is handled on legacy dialers",
    currentSteps: [
      "Scrub lists manually before upload — errors slip through.",
      "Verbal opt-outs logged on paper — never reach the dialer.",
      "Separate DNC lists per campaign — duplicates call suppressed numbers.",
      "Complaints discovered weeks later via regulator notices.",
    ],
    aiTitle: "How SvaraCall DNC management works",
    aiSteps: [
      "Import and merge DNC sources — internal, campaign, and external files.",
      "Pre-dial scrub blocks suppressed numbers before ring.",
      "Agent recognizes opt-out phrases in Telugu, Hindi, and English live.",
      "Workspace DNC updates instantly — all campaigns honor the block.",
    ],
    benefitsTitle: "Why DNC discipline protects revenue",
    benefits: [
      {
        title: "Fewer complaints",
        body: "Instant suppression reduces TRAI and consumer forum exposure.",
      },
      {
        title: "Brand trust",
        body: "Customers believe 'don't call' sticks — reputation preserved.",
      },
      {
        title: "Ops efficiency",
        body: "No manual scrub — automated gates on every import and dial.",
      },
      {
        title: "Audit trail",
        body: "Prove when and how opt-out was captured on disputes.",
      },
    ],
    roiTitle: "DNC management ROI",
    roi: [
      { value: "99.9%", label: "Suppression accuracy on scrubbed lists in pilots" },
      { value: "0", label: "Same-day re-dials after verbal opt-out when configured" },
      { value: "80%", label: "Less manual list prep time for ops teams" },
      { value: "↓", label: "Complaint rate vs non-scrubbed benchmark campaigns" },
    ],
    implTitle: "Stand up DNC management",
    implementation: [
      {
        title: "Import suppressions",
        body: "Upload existing DNC CSV and connect national DND exports if applicable.",
      },
      {
        title: "Configure opt-out phrases",
        body: "Localize STOP phrases across Telugu, Hindi, and English scripts.",
      },
      {
        title: "Enable pre-dial scrub",
        body: "Mandatory gate on all campaigns — block on match.",
      },
      {
        title: "Audit monthly",
        body: "Sample calls with opt-outs; verify no subsequent dials.",
      },
    ],
    relatedTitle: "Compliance stack",
    related: [
      { name: "Call recording", href: "/features/call-recording" },
      { name: "PII redaction", href: "/features/pii-redaction" },
      { name: "Campaign management", href: "/features/campaign-management" },
      { name: "Win-back calls", href: "/use-cases/win-back" },
      { name: "Automotive industry", href: "/industries/automotive" },
      { name: "Compliance hub", href: "/compliance" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "DNC management FAQs",
    faqs: [
      {
        q: "Does SvaraCall integrate with India's National DND registry?",
        a: "Import national DND exports into workspace suppressions — pre-dial scrub blocks matches. Consult your legal team on registry obligations for your category.",
      },
      {
        q: "How fast is verbal opt-out honored?",
        a: "Instant. The call ends politely and the number is workspace-blocked before the next campaign batch.",
      },
      {
        q: "Can customers opt back in?",
        a: "Yes with explicit re-consent — logged with timestamp and source for audit.",
      },
      {
        q: "Is DNC data stored in India?",
        a: "Suppression lists and opt-out logs reside on AWS Mumbai alongside call data.",
      },
    ],
    ctaTitle: "Dial responsibly with",
    ctaAccent: "ironclad DNC",
    ctaBody:
      "Book a compliance review — import your suppressions and run a scrubbed pilot campaign.",
  },
  {
    slug: "calendar-booking",
    name: "Calendar Booking",
    metaTitle: "Calendar Booking for AI Voice Agents | SvaraCall",
    metaDescription:
      "AI voice agents that book appointments on SvaraCall — check Google Calendar and Outlook availability live, confirm slots in Telugu, Hindi, and English.",
    eyebrow: "Features · Calendar Booking",
    headline: "Book appointments while you have them on the phone",
    subcopy:
      "SvaraCall calendar booking checks real availability, offers slots in the caller's language, and writes confirmed meetings to Google Calendar or Outlook — no back-and-forth SMS threads.",
    primaryCta: "Connect your calendar",
    chips: ["Google Calendar", "Outlook", "Live availability", "Confirmations"],
    stats: [
      { value: "Live", label: "Availability check during call" },
      { value: "2-way", label: "Google Calendar and Outlook sync" },
      { value: "Auto", label: "Confirmation SMS or email after book" },
      { value: "TZ", label: "IST-aware slot presentation" },
    ],
    problemTitle: "Promised callbacks rarely become booked slots",
    problem:
      "AI or reps say 'we'll call to schedule' but calendars stay empty. Clinics, advisors, and coaches lose revenue when booking requires a separate web link customers ignore.",
    currentTitle: "How appointment booking works today",
    currentSteps: [
      "Send SMS links — most never clicked.",
      "Reps play phone tag across three calls to find a slot.",
      "Calendars updated manually — double-bookings happen.",
      "No-show rate stays high without immediate confirmation.",
    ],
    aiTitle: "How SvaraCall calendar booking works",
    aiSteps: [
      "Connect Google or Outlook calendar per resource or team pool.",
      "During call, agent reads open slots in caller's timezone and language.",
      "Caller picks a time — agent books live and reads confirmation.",
      "Invite sends automatically; reminder campaign fires before appointment.",
    ],
    benefitsTitle: "Why voice booking converts",
    benefits: [
      {
        title: "Higher show rates",
        body: "Immediate confirmation while intent is hot — fewer drop-offs.",
      },
      {
        title: "No double booking",
        body: "Live availability prevents clashes with existing events.",
      },
      {
        title: "Multilingual UX",
        body: "'Kal subah 10 baje theek hai?' — natural slot negotiation.",
      },
      {
        title: "Closed loop",
        body: "Pair with appointment reminder campaigns automatically.",
      },
    ],
    roiTitle: "Calendar booking ROI",
    roi: [
      { value: "40%", label: "More booked slots vs send-a-link SMS flows" },
      { value: "25%", label: "Lower no-show with instant confirm + reminder" },
      { value: "3→1", label: "Calls to book — often single conversation" },
      { value: "0", label: "Manual calendar entry on integrated bookings" },
    ],
    implTitle: "Enable calendar booking",
    implementation: [
      {
        title: "Connect calendars",
        body: "OAuth Google or Microsoft — map to advisors, doctors, or sales reps.",
      },
      {
        title: "Define bookable rules",
        body: "Slot length, buffers, working hours, and holiday blackouts.",
      },
      {
        title: "Script slot offers",
        body: "Prompt templates for offering two options then confirming choice.",
      },
      {
        title: "Chain reminders",
        body: "Auto-enroll booked contacts into appointment reminder campaign.",
      },
    ],
    relatedTitle: "Booking workflows",
    related: [
      { name: "Call scheduling", href: "/features/call-scheduling" },
      { name: "Appointment reminders", href: "/use-cases/appointment-reminders" },
      { name: "Appointment booking", href: "/use-cases/appointment-booking" },
      { name: "No-show recovery", href: "/use-cases/no-show-recovery" },
      { name: "Healthcare industry", href: "/industries/healthcare" },
      { name: "Real estate industry", href: "/industries/real-estate" },
      { name: "Voice agents", href: "/voice-agents" },
      { name: "How it works", href: "/how-it-works" },
    ],
    faqsTitle: "Calendar booking FAQs",
    faqs: [
      {
        q: "Which calendars are supported?",
        a: "Google Calendar and Microsoft Outlook via OAuth — team pools and individual resources.",
      },
      {
        q: "Can the agent offer slots in Hindi or Telugu?",
        a: "Yes. Slot times are spoken naturally in the caller's language with IST timezone clarity.",
      },
      {
        q: "What if two callers pick the same slot simultaneously?",
        a: "Live availability re-checks before confirm — second caller gets alternate slots.",
      },
      {
        q: "Does booking trigger reminder calls automatically?",
        a: "Configurable — enroll confirmed appointments into your reminder campaign with one toggle.",
      },
    ],
    ctaTitle: "Fill calendars with",
    ctaAccent: "voice booking",
    ctaBody:
      "Connect your calendar on a pilot — book test appointments via live AI calls this week.",
  },
];

export function getFeaturePage(slug: string): SeoProgrammaticPage | undefined {
  return featurePages.find((page) => page.slug === slug);
}
