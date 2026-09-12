# SvaraCall — Annexure A
## Telephony and AI Voice Compliance Addendum (India)

**Sarwagyna Private Limited**
**Effective Date: 12 September 2026**
**Version 1.0**

This Addendum forms part of the SvaraCall Terms of Service and applies to all use of the Services involving outbound or inbound telephone calls, automated dialling, AI-generated voice, or call recording. Where this Addendum conflicts with the Terms of Service on these subjects, this Addendum prevails.

---

## 1. Why This Addendum Exists

India regulates commercial telephone communications tightly, and the framework applies to AI voice agents exactly as it applies to human callers. **Using an AI agent does not create an exemption from any obligation that would apply to a human telecaller.**

Enforcement has moved from complaint-driven to proactive. The regulator can act directly against the business initiating the calls — not only against its vendors. Consequences include financial penalties, blacklisting of headers, and disconnection of telecom resources.

**You are the Principal Entity.** We are a software platform. The regulatory exposure sits with you.

---

## 2. Regulatory Framework

Your use of the Services is subject to, at minimum:

- **Telecommunications Act, 2023** and rules made under it;
- **Telecom Commercial Communications Customer Preference Regulations, 2018 ("TCCCPR")**, as amended, including the **Second Amendment Regulations, 2025** (notified 12 February 2025);
- TRAI directions issued from time to time on unsolicited commercial communication, auto-dialled and robo-calls, and AI-generated calling;
- **Digital Personal Data Protection Act, 2023** and rules made under it;
- **Information Technology Act, 2000** and rules made under it;
- **Consumer Protection Act, 2019**, including provisions on misleading representations and unfair trade practice;
- **Indian Telegraph Act / DoT instructions** on the use of telecom resources, SIM boxes, and unauthorised routing of traffic;
- sectoral regulation applicable to your industry;
- the law of any other jurisdiction into which you place calls.

**This Addendum is a summary of obligations, not a substitute for advice. The regulatory position changes. You are responsible for verifying current requirements with your access provider and your own counsel before each campaign.**

---

## 3. Registration and Number Series

**3.1 DLT registration.** Where you place commercial communications, you must be registered as a Principal Entity on the Distributed Ledger Technology platform of an access provider, must register your headers, and must register and obtain approval for content templates where required for the communication type.

**3.2 Number series.** Commercial calls must originate from the number series prescribed for the call type:

| Call type | Prescribed series |
|---|---|
| Promotional / marketing (any commercial offer) | 140-series |
| Transactional / service (order updates, EMI reminders, KYC, policy updates, appointment confirmations) | 1600-series |

**Using an ordinary mobile or landline number for commercial calling is a violation. Using the wrong series for the call type is a violation.** You must classify each campaign correctly before launch. If you are uncertain whether a campaign is promotional or transactional, treat it as promotional.

**3.3 Telemarketer limits.** The TCCCPR limits the number of registered telemarketers a Principal Entity may appoint. If you appoint us or any vendor in a registered telemarketer capacity, you must confirm in writing that doing so does not exceed your permitted limit.

**3.4 Verification.** We may require evidence of your DLT registration, registered headers, and approved templates before provisioning numbers or enabling campaigns, and may re-verify at any time.

---

## 4. Consent

**4.1 You obtain it, not us.** We do not obtain, verify, or hold consent on your behalf. You must obtain a lawful basis before contacting each End User.

**4.2 Standard.** Consent must be explicit, informed, specific, freely given, unambiguous, and capable of withdrawal. Bundled or pre-ticked consent is not valid. Consent obtained for one purpose does not extend to another.

**4.3 Consent must cover AI voice.** Where you rely on consent, the disclosure presented to the End User at the point of collection must make clear that they may receive calls placed using an automated or artificial voice system. **Consent obtained without that disclosure is not consent to AI calling.**

**4.4 Validity windows.** Consent is not indefinite. Under the TCCCPR as amended:

- **inferred consent** arising from an existing contractual relationship is valid only for the duration of that relationship;
- **explicit consent** obtained in connection with a specific commercial transaction has a short statutory validity window;
- consent withdrawn by the End User is invalid from the moment of withdrawal.

You must track consent expiry and must not call on stale consent. We do not track it for you.

**4.5 Evidence.** You must record, for every consent: the identity of the End User, the number consented for, the exact disclosure text shown, the date and time, the channel, and the method (web form, signed document, IVR confirmation, recorded verbal). You must retain this for the period required by law and in any event for no less than five (5) years, and produce it within five (5) business days of our request.

---

## 5. AI Disclosure — Mandatory

**5.1 Opening disclosure.** Every outbound call placed through the Services must open by stating:

(a) the name of the business on whose behalf the call is made;
(b) the purpose of the call; and
(c) **that the caller is an automated or AI voice system**, where the TCCCPR, TRAI direction, or other applicable law requires disclosure of auto-dialled, robo-called, or artificially generated communication.

Given the current direction of regulation, **we require AI disclosure on every outbound call placed through SvaraCall as a condition of using the Services, whether or not a specific regulation compels it in your use case.**

**5.2 Honest response on challenge.** Your AI Agent must answer truthfully at any point in the call if the End User asks whether they are speaking to a person, a machine, a bot, a recording, or AI.

**5.3 Prohibited configurations.** You must not:

(a) instruct or prompt an AI Agent to deny being AI, to assert that it is human, or to give a human employee name in a way calculated to create that belief;
(b) deploy scripts that evade, deflect, or talk past a direct question about whether the caller is AI;
(c) **use, request, or enable any feature that injects background ambience, office noise, keyboard sounds, breathing, or similar artefacts for the purpose of causing an End User to believe they are speaking to a human being.**

**5.4 Ambient audio.** Where the Services offer ambient or background audio features, they are provided to improve perceived audio naturalness and reduce listener fatigue. Enabling them **does not** relieve you of the disclosure obligations in Sections 5.1 and 5.2, and using them in combination with a non-disclosed or falsely-disclosed agent is a material breach of this Addendum and of the Acceptable Use Policy.

---

## 6. Do Not Disturb and Suppression

**6.1 Scrubbing.** Before launching any promotional campaign, and at intervals no longer than those required by regulation, you must scrub your calling list against:

(a) the National Customer Preference Register / DND registry maintained by the access providers;
(b) your own internal suppression list; and
(c) any suppression list applicable to your sector or imposed by a regulator.

**6.2 Internal suppression list.** You must maintain one. Any End User who asks not to be called must be added. You must honour the request within the period required by regulation and in any event within seven (7) days. Opt-out applies to the Principal Entity, not merely to the campaign.

**6.3 Capturing opt-outs from the conversation.** Your AI Agent must be configured to recognise opt-out intent in every language you operate in, in natural phrasing — not only in a scripted keyword. It must acknowledge, end the call politely, and flag the record for suppression. Failing to recognise a clearly expressed opt-out is treated as a failure to honour it.

**6.4 Complaint thresholds.** A small number of complaints against a header or number can trigger regulatory action, including blacklisting and disconnection of telecom resources. The current thresholds are low and were tightened by the 2025 amendment. **We monitor complaint and spam-flag signals at account level and will suspend campaigns that approach them.**

---

## 7. Calling Hours and Frequency

**7.1** Do not place outbound commercial calls before **9:00 a.m.** or after **9:00 p.m.** in the End User's local time, or within any narrower window set by regulation, by sectoral code, or by the End User.

**7.2** Do not place repeated calls to a number that is not answering in a way that constitutes harassment. Set and respect retry caps. We recommend no more than three attempts per contact per campaign and no more than one attempt per day.

**7.3** Where the End User asks you to call at a different time, honour it.

---

## 8. Call Recording

**8.1 Announcement.** Where recording is enabled, the End User must be told at the start of the call that the call is being recorded. If they object, either disable recording for that call or end the call.

**8.2 Lawful basis.** Recording a conversation is processing of personal data, and voice is capable of identifying a person. You need a lawful basis for recording independent of your basis for calling.

**8.3 Retention.** You configure retention. Do not retain recordings longer than you need them. Set the shortest retention that meets your operational and statutory needs.

**8.4 Access.** You control who in your organisation can access recordings. Restrict it.

**8.5 Cross-border.** If you call End Users outside India, recording consent requirements may be stricter than Indian law and may require all-party consent. You are responsible for determining and meeting them.

---

## 9. Prohibited Calls

You must not use the Services to place automated or AI voice calls to:

- emergency service numbers (including 100, 101, 102, 108, 112) or emergency helplines;
- hospital, nursing home, or emergency department lines;
- patient rooms, intensive care units, or elderly care facility lines;
- paging services;
- any number designated by a regulator or carrier as unavailable for automated calling.

---

## 10. Voice Rights

**10.1** You must not clone, synthesise, or deploy the voice of a real, identifiable person without that person's documented, specific, informed consent covering the intended use.

**10.2** You must not deploy a synthesised voice that is confusingly similar to a public figure, celebrity, or any identifiable individual.

**10.3** Where we supply a voice-cloning capability, you must produce evidence of consent from the voice donor before we enable it, and must indemnify us against any claim arising from that voice.

---

## 11. Data Minimisation in Campaigns

**11.1** Upload only the fields the campaign needs. A calling campaign generally needs a phone number, a name, and a small number of context fields.

**11.2** Do not upload, and do not configure agents to capture, the restricted data categories listed in Section 4 of the Acceptable Use Policy.

**11.3** Where your agent extracts structured data from the conversation, extract only what you have a lawful basis to collect and a stated purpose for.

---

## 12. International Calling

Where you place calls outside India, you are responsible for compliance with the law of the destination — which may include, without limitation, the TCPA and FCC rules and state telemarketing law in the United States, the GDPR and ePrivacy rules in the European Economic Area, PECR in the United Kingdom, and equivalent regimes elsewhere. Several of these treat AI-generated voice as a prerecorded or artificial voice requiring prior express written consent, impose their own calling-hour restrictions, and require all-party consent to recording.

**We make no representation that the Services, or any configuration of them, satisfy the law of any jurisdiction outside India.** Tell us in writing before you begin calling outside India.

---

## 13. Our Rights

**13.1 Verification.** We may require evidence of registration, consent, and suppression practice before enabling or continuing a campaign.

**13.2 Sampling.** We may review call recordings, transcripts, scripts, and agent configurations where we have reasonable grounds to suspect non-compliance, where complaint signals are elevated, or where a carrier or regulator requires it.

**13.3 Intervention.** We may pause a campaign, disable a number, throttle traffic, or suspend an account without prior notice where we assess a material compliance risk. We will tell you the reason as soon as practicable.

**13.4 Cooperation.** We will cooperate with lawful regulatory and carrier enquiries and may disclose your identity, registration details, campaign configuration, and traffic records in response to them. Where lawful, we will notify you.

**13.5 No obligation to monitor.** Nothing in this Section obliges us to monitor your use, and our failure to detect a breach is not approval of it.

---

## 14. Allocation of Liability

**14.1** Penalties, fines, or damages arising from your calling programme — including non-registration, wrong number series, absent or invalid consent, failure to disclose AI, DND violations, harassment, out-of-hours calling, or recording without consent — are your responsibility, and your indemnity in Section 12.1 of the Terms of Service covers them.

**14.2** The compliance controls we provide are tools. Enabling and configuring them correctly is your responsibility. **Availability of a control is not a warranty of your compliance.**

---

## 15. Acknowledgement

By enabling telephony on your account, you confirm that you have read this Addendum, that you understand you are the Principal Entity, that you have or will obtain the registrations described in Section 3, and that you will configure AI disclosure in accordance with Section 5.

---

**Sarwagyna Private Limited** | compliance@svaracall.com | +91 6305036991
