# SvaraCall Legal Suite — Implementation Notes and Risk Flags

**Internal document. Do not publish.**
**Prepared: 11 September 2026**

---

## Part 1 — What the Three Competitors Actually Do

### Vapi (Vapi Inc., Delaware)

Sources reviewed: Terms of Service (last updated 17 April 2026), Privacy Policy, GDPR and HIPAA docs.

- Positions itself explicitly as a **control layer**, not the provider of the AI. Disclaims all responsibility for the transcription, LLM, and TTS providers the customer selects. Customers can bring their own provider credentials, at which point Vapi disclaims even more.
- Has a tiered **data-management architecture as a contractual feature**: data residency selection, Zero Data Retention mode, and HIPAA mode. This is the most commercially useful idea in their document set.
- **No uptime warranty** unless a separate SLA exists.
- Explicitly states that unlimited inbound traffic is billable — customer must set limits. Worth copying; SvaraCall has done so.
- Liability capped at the greater of US$100 or 12 months' fees.
- Californian law, AAA arbitration in San Francisco, class action and jury waivers.
- Prohibits using their service to produce training datasets for third parties.

### Retell AI (Retell AI Inc., Redwood City)

Sources reviewed: Terms of Service (1 June 2026), Privacy Policy (20 July 2026), compliance docs.

- **The strongest document set of the three by a wide margin.** Their Addendum 1 (Calling, Texting, and AI-Generated Voice Compliance) is the model. It runs through TCPA classification of AI voice as "artificial or prerecorded voice", consent standards, disclosure at call initiation, DNC scrubbing intervals, calling hours, consent revocation handling including natural-language opt-out recognition, two-party recording consent, caller ID accuracy, five-year consent record retention, and data minimisation for campaign uploads.
- Privacy policy is unusually granular on **telephony-specific data categories** — carrier data, routing information, traffic records, SIM status, portability data. Most SaaS policies miss this entirely.
- Explicit **KYC requirement** tied to termination rights.
- Defines **"Prohibited Data"** — PHI, PCI, biometrics — as a category the customer may not submit absent a BAA.
- Has an actual **99.5% uptime** figure in the ToS, with a capped maintenance window.
- Holds SOC 2 Type 1 and 2, HIPAA, and claims ISO 27001. Honest about the GDPR gap: says they rely on AWS's DPA and do not operate in the EU.
- Governing law California, exclusive jurisdiction Delaware — a mismatch that looks like a drafting artefact, not a model to copy.

### Ringg AI (Stoic AI Private Limited, Bengaluru)

Sources reviewed: Privacy Policy (11 July 2026), Terms and Conditions (19 December 2024).

- The only Indian comparator, and the most useful structurally: their privacy policy is drafted around the **IT Act 2000 and IT Rules 2021**, includes the **electronic-record recital**, a named **Grievance Officer / DPO** with a 48-hour acknowledgement and 15-day resolution commitment, and a cross-border transfer section referencing Indian law.
- Claims ISO 27001 and SOC 2.
- Has a detailed Google Workspace API / Limited Use section — relevant if you ever add Google Sheets or Calendar integrations.
- **Their Terms and Conditions are startlingly thin.** Roughly nine short paragraphs, last updated December 2024 — before their Peak XV round. No IP clause, no indemnity, no data processing terms, no acceptable use policy, no telephony compliance provisions at all, no liability cap that would survive challenge, and jurisdiction in Delhi despite a Bengaluru registered office.

**The conclusion that matters:** the best-funded Indian competitor in this category has effectively no commercial terms. The regulated-sector compliance angle you have been claiming as SvaraCall's differentiator is genuinely open in the Indian market. The documents attached are a real asset in enterprise procurement — provided the substance behind them is real.

---

## Part 2 — Risk Flags You Need to Deal With

These are ordered by how likely they are to hurt you.

### 🔴 1. Ambient noise injection is a legal liability, not a feature

Your notes describe injecting call-centre and office ambience into the AI's voice output "so it sounds like a natural human agent." Put plainly: a system designed to make a synthetic caller sound human, deployed into a market where the regulator is actively tightening AI disclosure rules, is a deceptive-practice finding waiting to happen. It is exposure under the Consumer Protection Act 2019 (misleading representation), it sits against the direction of TRAI's 2025 amendments on auto-dialler and robo-call disclosure, and it is the single fastest way to fail a hospital or bank procurement review.

I have drafted Annexure A Section 5.4 to permit ambient audio **only** as an audio-quality feature and to prohibit its use for deception. That is the defensible framing.

**Decide before launch:** is ambient audio a naturalness feature or a human-impersonation feature? If it is the second, cut it. You cannot sell "compliance architecture is our moat" and ship a human-impersonation feature in the same product. A technical buyer will find the contradiction, and it will cost you more than the feature is worth.

### 🔴 2. Reselling telephone numbers may require authorisation you do not hold

Your model resells VoBiz numbers to customers, and you are negotiating a wholesale margin. Reselling telecom resources in India touches the **Telecommunications Act, 2023** and DoT authorisation requirements. There is a real question whether buying carriage wholesale and reselling it under your own commercial arrangement puts you into a category requiring a licence or authorisation, or requires you to operate strictly as VoBiz's agent.

**Get this answered by a telecom regulatory lawyer before 14 September.** It affects your revenue model, not just your paperwork. The safe interim structure is to act as a facilitator, with the carrier contracting directly with the customer and you billing a platform fee — but that kills the margin you are negotiating for.

### 🔴 3. Number series classification

Under the TCCCPR as amended: 140-series for promotional, 1600-series for transactional and service calls. Using an ordinary mobile number for commercial calling is a violation, and so is using the wrong series for the call type. If your VoBiz numbers are not in the correct series for the campaign type your customers run, every call is non-compliant from minute one — and TRAI can now act directly against the Principal Entity without going through the access provider.

**Verify with VoBiz, in writing, which series your provisioned numbers sit in.** Then build campaign classification into the product so a promotional campaign cannot be launched on a 1600-series number.

### 🟠 4. You are claiming to be the compliance-first platform. Ship the controls.

Annexure A commits you to providing AI-disclosure configuration, opt-out recognition, suppression list management, calling-hour enforcement, and recording announcement. If those controls do not exist in the product on the day you publish these documents, the documents become evidence against you rather than for you.

Build a pre-launch checklist mapping each obligation in Annexure A to a shipped feature. Where a control does not exist yet, either build it or remove the commitment.

### 🟠 5. Certification claims

I have written "not currently ISO 27001 certified or SOC 2 attested" into the Privacy Policy and DPA. Both Ringg and Retell claim certifications. You will feel pressure to match them. **Do not.** A false certification claim in a published privacy policy is a misrepresentation that survives forever in the Wayback Machine, and it is the kind of thing a hostile enterprise buyer or an acquirer's diligence team finds immediately. Your stated positioning principle — transparency over impressive-sounding claims — is the right call and it is also the commercially safer one here.

### 🟠 6. LLM inference leaves India

Groq is US-hosted. Every transcript fragment sent for inference crosses the border. Under the DPDP Act that is permitted, subject to any government restriction under Section 16, but it must be **disclosed** — and healthcare and BFSI buyers will ask. The Subprocessor List has a residency table for exactly this. Fill it in truthfully.

If you want to sell into hospitals, an in-country inference path (Sarvam's models, or self-hosted) eventually becomes a commercial requirement, not a nice-to-have.

### 🟠 7. The 48-hour breach notification commitment

DPA Section 8.1 commits to notifying customers of a breach within 48 hours. That is a real operational obligation. It requires detection capability, an on-call path, and a documented runbook. If you have none of those, either build them or widen the commitment to "without undue delay" — but 48 hours is what enterprise buyers expect to see, so building the capability is the better answer.

### 🟡 8. Arbitration seat

I have set Ongole as the arbitration seat and jurisdiction, matching your registered office. It is defensible and inexpensive for you. Be aware that an enterprise counterparty in Bengaluru or Mumbai will push back and ask for Bengaluru or Hyderabad. Decide in advance what you will concede — seat is usually worth trading for something else.

### 🟡 9. Liability cap

I have set ₹50,000 or twelve months' fees, whichever is greater. At your current pricing, twelve months of a mid-size customer is roughly ₹2–5 lakh. That is your genuine exposure per customer. Given ₹80,000 in the bank, consider whether you need professional indemnity / technology errors and omissions insurance before you sign anything meaningful. Most enterprise contracts will ask for proof of cover.

### 🟡 10. Grievance Officer must be a named person

IT Rules 2021 require the name, designation, and contact of a Grievance Officer to be published. "Support team" does not satisfy it. Ringg names their CTO. You will likely name yourself. Put the name in before publishing — the placeholders are marked `[INSERT NAME]`.

---

## Part 3 — Pre-Launch Checklist

**Before you publish (blocking):**

- [ ] Fill every `[INSERT]` placeholder — effective dates, Grievance Officer name and designation, subprocessor list URL, notification subscription URL
- [ ] Create and route the email aliases: privacy@, grievance@, billing@, abuse@, security@, compliance@ — all currently referenced in the documents and none confirmed to exist
- [ ] Verify every row of the Subprocessor List against actual contracts; delete unverified rows rather than guessing
- [ ] Complete the data-residency table and the model-training table in the Subprocessor List
- [ ] Confirm with VoBiz, in writing, the number series of your provisioned numbers
- [ ] Decide the ambient-audio question (Flag 1)
- [ ] Map each Annexure A obligation to a shipped product control; remove commitments you cannot honour
- [ ] Have an Indian commercial lawyer review all six public documents. **These are drafted to a usable standard, but I am not a lawyer and this is not legal advice.** Budget one review cycle; this is not an area to skip.

**Before you sign your first paying customer:**

- [ ] Telecom regulatory opinion on the number-reselling model (Flag 2)
- [ ] Breach detection and notification runbook capable of meeting 48 hours
- [ ] Written KYC procedure, with a record of what you collect and where you store it
- [ ] Decide on professional indemnity insurance
- [ ] Draft Annexure 2 (SCCs) only if and when you have a first EU customer — not before

**Product work implied by these documents:**

- [ ] Spend and concurrency limits, customer-configurable
- [ ] AI disclosure toggle, on by default, with the disclosure text in the call opening
- [ ] Natural-language opt-out detection in every language you support — not keyword matching
- [ ] Suppression list per workspace, with automatic addition on opt-out
- [ ] Calling-hour enforcement at campaign level, with timezone handling
- [ ] Recording announcement at call start when recording is enabled
- [ ] Per-agent retention configuration for recordings and transcripts
- [ ] Data export endpoint covering the thirty-day post-termination window
- [ ] Campaign type classification gated against number series

---

## Part 4 — Where to Put Them

| Document | Location |
|---|---|
| Terms of Service | svaracall.sarwagyna.com/terms — linked in footer and at signup |
| Privacy Policy | svaracall.sarwagyna.com/privacy — linked in footer, signup, and cookie banner |
| Acceptable Use Policy | svaracall.sarwagyna.com/aup — linked from Terms |
| Annexure A | svaracall.sarwagyna.com/telephony-compliance — linked from Terms; **also surface at the point of enabling telephony, with a separate acknowledgement checkbox** |
| Data Processing Addendum | svaracall.sarwagyna.com/dpa — linked from Terms and Privacy |
| Subprocessor List | svaracall.sarwagyna.com/subprocessors — linked from Privacy and DPA |
| Refund and Cancellation | svaracall.sarwagyna.com/refunds — required by payment gateway onboarding |

**Signup acceptance:** use an unticked checkbox with the text "I have read and agree to the Terms of Service, Privacy Policy and Acceptable Use Policy", each hyperlinked. Log the timestamp, IP address, and document version accepted. Store it. That log is what makes the agreement enforceable.

**Telephony enablement:** a second, separate acknowledgement for Annexure A. Log it the same way. This is the record that protects you when a customer's calling programme goes wrong.
