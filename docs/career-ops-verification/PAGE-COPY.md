# Hermes Career Ops — proposed page copy

**Draft for owner review only. Do not publish, deploy, or submit.** Prepared 10 October 2026. This copy distinguishes the owner's declared setup from the reviewed local implementation. Pending operational facts must be resolved before a final policy is approved. Internal notes below are not visitor-facing copy.

This is the sole retained verification document: proposed page text plus brief supporting findings. No inspection scripts or runtime changes are included.

## Application homepage — `/career-ops`

### Hermes Career Ops

A private personal job-search tool by Camilo Oviedo. It helps discover employment opportunities from forwarded SEEK and LinkedIn job alerts, assess them against Camilo's professional profile, and prepare materials for his review.

This overview, our [Privacy Policy](/career-ops/privacy) and [Terms of Service](/career-ops/terms-of-service) are public and require no login. Reading this website does not connect Gmail or grant email access. The private tool is initially for one user and has no public registration.

### How it works

1. Read forwarded job alerts in the dedicated Gmail mailbox authorised by the owner.
2. Extract job links and relevant opportunity information, then retrieve and assess the job posting.
3. Use a dedicated OpenAI Codex CLI within the Hermes `camilo` profile to assist with evaluation. Camilo decides whether to pursue an opportunity and reviews any application materials himself.

The reviewed evaluation workflow does not automatically submit applications or send messages. The owner's approved design also prohibits deleting or modifying Gmail messages and marking them as read.

### Why Gmail access is requested

The specified permission is `https://www.googleapis.com/auth/gmail.readonly` only. It allows the application to read Gmail messages and relevant message content so it can extract opportunities from job alerts. This permission is broader than a job-alert label or sender filter; Google does not restrict it to SEEK or LinkedIn emails. It does not permit sending, deleting, modifying messages or changing their read status.

The Gmail API migration and the exact active production grant are being verified. The reviewed local workflow still contains a separate IMAP ingestion path. The Privacy Policy explains the current evidence and outstanding data-handling details.

### Processing and contact

The owner identifies the hosting location as a DigitalOcean VPS in Sydney, Australia. Evaluation uses OpenAI, so information sent for evaluation is processed by an external service and is not confined to that VPS. Provider retention, account data controls and effective server access controls are still being verified.

Contact Camilo Oviedo at [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com). Read the [Privacy Policy](/career-ops/privacy) before authorising access.

## Privacy Policy — `/career-ops/privacy`

### Hermes Career Ops Privacy Policy

Last reviewed: 10 October 2026.

Hermes Career Ops is Camilo Oviedo's private personal job-search workflow, initially for one user. This policy covers the tool's Gmail/job-alert handling and AI-assisted evaluation. It is separate from unrelated portfolio content. Questions and deletion requests: [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com).

### Access and information processed

The owner specifies a dedicated Gmail mailbox for forwarded SEEK and LinkedIn alerts and only the Gmail read-only permission, `https://www.googleapis.com/auth/gmail.readonly`. The production grant and Gmail API migration have not yet been independently verified. The reviewed code contains both an IMAP alert reader and a separate Gmail API plugin.

The readers access message content to extract job information. This includes bodies and relevant headers; the Gmail API plugin requests the full message representation. The intended purpose is job discovery and assessment. The granted Gmail read-only scope is not limited by Google to a particular label, sender or job-alert category.

The reviewed Hermes ingestion path retains parsed job titles, company names, locations, canonical job links, dates, sources, deduplication hashes and retry identifiers. Its state format excludes raw email bodies. The separate Gmail plugin retains processed message IDs and passes extracted leads to the pipeline. Some plugin diagnostics can include message subjects, IDs or response excerpts; absence of email content from all production logs has not been verified.

### How information is used and shared

Job information helps discover opportunities, assess fit against Camilo's professional sources, and support decisions about application preparation. The owner identifies the infrastructure as a DigitalOcean VPS in Sydney, Australia. Effective administrator access and infrastructure controls are still being verified.

The reviewed evaluator sends OpenAI the job title, company, location, canonical posting URL, retrieved job description, configured professional-profile sources and evaluation instructions. Title/company/location/link information can originate in email alerts. The evaluator does not explicitly include raw email bodies, sender or subject headers, message identifiers or Gmail OAuth tokens in its prompt. Exact runtime payloads and unrelated personal information still require verification.

OpenAI is an external processing provider. Its applicable retention and training controls depend on authentication, the account and service settings. The dedicated Codex profile and ephemeral local sessions do not themselves establish training opt-out or zero provider retention. Those account-specific controls remain unconfirmed. Any other provider or private notification recipient must be identified before the final policy is approved.

### Storage and retention

The reviewed workflow stores parsed alert records, evaluation state and cached results, job-description captures, pipeline/history records and structured run receipts. Profile sources and evaluation evidence can contain personal information. Temporary evaluation files are removed during normal cleanup; interrupted runs can leave files behind.

No implemented expiry schedule has been established for persistent alert records, receipts, evaluations, logs, credentials or backups. Automatic 30-day or 90-day deletion is not currently claimed. Retention and deletion controls are being reviewed before an operational policy is approved. Removing temporary files is separate from deleting persistent records and provider copies.

### Security

The reviewed Hermes code separates its private data from the application Git checkout, checks path containment, limits subprocess execution and restricts evaluator actions and inherited credentials. These are local source controls whose production deployment remains to be checked.

The evaluator currently requires file-based Codex authentication storage. Encryption of Google data and access/refresh tokens at rest, encryption/key management for other credentials, firewall configuration, effective SSH controls, administrative access and backup protection have not been verified. File permissions and private hosting alone do not establish encryption. No independent security assessment or certification is claimed.

### Control, revocation and deletion requests

Viewing these public pages does not authorise Gmail. The account owner can withdraw Google's grant through [Google Account connections](https://myaccount.google.com/connections). Revocation does not automatically remove existing local records, backups or information already sent to a provider. It also does not revoke a separate IMAP password or grant.

For deletion requests, email [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com) with the account and records concerned. Do not send passwords, access tokens or unnecessary email content. The application's deletion procedure, completion time and backup/provider deletion limits have not yet been established; no automatic or immediate removal is promised.

The application must not delete original Gmail messages. The mailbox owner manages those directly in Gmail.

### Google data-use requirements and policy updates

The owner's required policy prohibits using Gmail data to train or improve general-purpose AI models. Google-derived information and its derivations must be limited to the disclosed personal job-search features and permitted transfers. Implementation and provider-setting evidence are still needed before an affirmative compliance statement is published.

The final policy will be updated when actual transport, provider settings, security controls and data lifecycle procedures are confirmed. This draft does not claim Google verification or approval.

## Terms of Service — `/career-ops/terms-of-service`

### Hermes Career Ops Terms of Service

Last reviewed: 10 October 2026.

Hermes Career Ops is a private personal job-search workflow operated by Camilo Oviedo, initially for one user. It is not a commercial SaaS service and does not offer public registration. Reading its public pages does not grant access to the private tool or authorise Gmail.

Use is limited to authorised job-search activities with an account the user owns or has permission to access. The approved design requests only Gmail read-only access for forwarded SEEK/LinkedIn alerts and prohibits sending, deleting or modifying Gmail messages, changing their read status and automatically submitting job applications. The Gmail migration and active production permissions remain under review.

The workflow assists with opportunity discovery, assessment and application preparation. AI output can be incomplete or incorrect. Camilo must review job information, factual claims and any materials before relying on or submitting them. No outcome, interview, employment, continuous availability or support response time is guaranteed.

The workflow integrates Gmail, Hermes and OpenAI Codex, with owner-declared hosting on DigitalOcean in Sydney. Third-party services have their own policies, permissions and availability. Naming them does not imply endorsement or verification by Google, OpenAI, DigitalOcean, SEEK or LinkedIn.

Only process information you are entitled to use. Do not use the tool for unauthorised access, spam, impersonation or unlawful disclosure. Application materials must accurately represent the applicant's qualifications and experience.

Read the [Privacy Policy](/career-ops/privacy) for actual data categories, provider transfers, security limitations and pending retention/deletion controls. Revoking Google's grant stops access through that grant but does not remove already retained data or revoke a separate IMAP credential. Contact [oviedocamilo94@gmail.com](mailto:oviedocamilo94@gmail.com) for privacy or deletion requests.

The private workflow may change or stop. These terms do not exclude rights that cannot lawfully be excluded. Material changes to data use or permissions require updated disclosures and any applicable consent.

## Editorial instructions — do not include in public pages

- Match the approved application name **Hermes Career Ops** across the page title, layout title/navigation, footer and OAuth consent screen. Keep the existing `/career-ops` routes.
- Preserve small, readable footer links and prominent app-page privacy navigation. Suggested footer: “Hermes Career Ops — Camilo's private job-search tool for discovering and assessing opportunities from forwarded job alerts.” Links: “About Hermes Career Ops”, “Privacy Policy”, “Terms of Service”.
- The dedicated mailbox address belongs in the private audit/config record; publishing it is unnecessary for explaining the app or providing support. The existing operator contact remains the contact above.
- Resolve the explicitly pending operational facts before approving publication. Replace migration/unknowns with supported facts, not assumed guarantees.
- Once implementation and provider controls are evidenced, proposed Limited Use commitment: “Hermes Career Ops' use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Google Workspace API data is not used to develop, improve or train general-purpose AI or machine-learning models.” **This is proposed final wording, not an assertion that the current installation satisfies it.**
- Only after effective expiry/deletion tests, publish the actual 30-day/90-day rules, exceptions, completion times and backup/provider limits. Keep independently retrieved descriptions/evaluations distinct from any Google-derived fields they contain.
- Public website analytics/theme storage require a separate documented check if incorporated into this policy; this draft is scoped to the job-search workflow.

## Supporting findings — internal only

Local source reviewed: `C:/Projects/job searcher/career-ops`, commit `39b1cbdfc5f6e1100269746ba38d0f64e21e4ce3`. References below are relative to that checkout. Source evidence does not establish the deployed VPS version or account settings.

- **CONFIRMED:** Default ingestion uses Himalaya IMAP (`hermes-cycle.mjs:177`, `ingest-alerts.mjs:179`). The separate Gmail plugin refreshes tokens, lists messages and requests full message content (`plugins/gmail/index.mjs:32`, `:90`, `:112`); it does not establish the effective OAuth grant.
- **CONFIRMED:** Parsed alerts, cycle state, job-description captures and receipts persist locally (`ingest-alerts.mjs:282`, `hermes-cycle.mjs:156`, `:331`, `:351`). Raw bodies are excluded from the Hermes alert schema, but plugin diagnostics may expose subjects or response excerpts (`plugins/gmail/index.mjs:44`, `:122`).
- **CONFIRMED:** The evaluator includes job fields, retrieved descriptions and professional-profile sources in its OpenAI prompt; it requires file-based Codex credentials (`lib/hermes-evaluator.mjs:8`, `:88`). Neither this storage mode nor ephemeral sessions proves encryption or provider training opt-out.
- **UNCONFIRMED:** Production transport, granted scopes, Codex authentication mode, account-specific training/retention settings, encryption, administrative access and backup protection.
- **REQUIRES IMPLEMENTATION:** Complete the intended Gmail migration; minimise AI inputs and diagnostics; establish encrypted credential/data storage; implement explicit retention, deletion, revocation and backup handling. Proposed 30-day receipt and 90-day alert retention must not be published as active rules.

The prior audit passed 48 existing offline tests with synthetic fixtures. No production inspection, deployment, policy publication or Google submission occurred. Resolve the outstanding facts before approving final page text.

Official references: [Google homepage requirements](https://support.google.com/cloud/answer/13807376), [privacy policy requirements](https://support.google.com/cloud/answer/13806988), [Workspace user data policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy), [OpenAI authentication](https://learn.chatgpt.com/docs/auth) and [API data controls](https://developers.openai.com/api/docs/guides/your-data).
