# Software Requirements Specification (SRS) / Product Requirements Document (PRD)
## EWBNLI Website — "Empower Lives"
**Prepared for:** Empowering Women To Begin New Life Initiative (EWBNLI)
**Prepared by:** Business Analyst / Technical Writer
**Date:** July 2026
**Version:** 1.0

---

## 1. Executive Summary

EWBNLI needs a **simple, trustworthy, mobile-friendly website** that helps Ms. Anietie Mbosowo tell the story of her organization and receive donations — without needing a developer, a big budget, or a team.

The site has **one main job**: turn a visitor into a donor, a volunteer, or a partner — in that order.

Because EWBNLI is a small, one-woman-run NGO, the biggest challenge is not technology — it's **trust**. Most visitors have never heard of EWBNLI before. The website's design, content, and structure must work hard to prove EWBNLI is real, registered, and doing genuine work — using real photos, the CAC registration date, the physical address, and transparent bank details.

This document describes **what the website must do**, **who it's for**, **what pages it needs**, and **how it should be built** — in plain language, so the founder can review and approve every part of it.

**Guiding principle:** If a feature can't be explained to Ms. Anietie in one sentence, and she can't manage it from her phone, it doesn't belong in Version 1.

---

## 2. Project Goals and Success Metrics

### Primary Goal
Get people to **donate** or **contact EWBNLI** after visiting the site.

### Secondary Goals
- Clearly explain the mission so people trust and understand the cause.
- Make it dead simple to donate via bank transfer.
- Give diaspora Nigerians and churches/organizations a reason and a way to partner.
- Be so simple to maintain that Ms. Anietie can update it herself from her phone.

### Success Metrics (What We'll Track)

| Metric | How We Measure It | Target (First 6 Months) |
|---|---|---|
| WhatsApp donation clicks | Click count on WhatsApp button | 20+ clicks/month |
| "Copy Account Number" clicks | Click count on copy button | 30+ clicks/month |
| Contact form / email submissions | Form entries or mailto clicks | 5+/month |
| Average visit duration | Google Analytics / Plausible | 1.5+ minutes |
| Mobile page load speed | Google PageSpeed/Lighthouse | Under 1.5 seconds LCP |
| Bounce rate on homepage | Analytics | Under 60% |
| Repeat visitors | Analytics | 10%+ |

> **Note:** We are not tracking "amount donated online" because Version 1 uses bank transfer, not an automatic payment system. Paystack (optional) can give us this number later.

---

## 3. User Personas

### Persona 1: "Blessing" — Local Lagos Donor
- **Age:** 28–45
- **Device:** Android phone, moderate data plan
- **Behaviour:** Found EWBNLI through a friend, church WhatsApp group, or Instagram. Wants to give ₦5,000–₦20,000 quickly.
- **Needs:** Fast page load, clear bank account details, easy way to confirm she sent money, reassurance the NGO is real.
- **Fear:** "Is this a scam? Will my money actually help anyone?"

### Persona 2: "Chidinma" — Diaspora Donor (UK/US/Canada)
- **Age:** 30–55
- **Device:** iPhone or laptop, good internet
- **Behaviour:** Found the site through a Nigerian community group or family referral. Wants to support a cause "back home" but is cautious about international transfers.
- **Needs:** Clear mission story, proof of registration (CAC), photos of real work, an easy international-friendly donation option (Paystack link, or bank details for international transfer).
- **Fear:** "I can't verify this NGO from abroad. I need strong proof it's legitimate."

### Persona 3: "Pastor Emeka" — Church / Organization Partner
- **Age:** 35–60
- **Device:** Mix of phone and desktop
- **Behaviour:** Represents a church, foundation, or corporate CSR team looking for a vetted local NGO to support with funding, goods, or volunteers.
- **Needs:** Clear mission and impact story, contact information, a sense of long-term credibility (founded 2008, registered 2013), a way to reach the founder directly.
- **Fear:** "Will this look bad if my organization is publicly associated with them? Is there any documentation?"

---

## 4. Sitemap (Maximum 4 Pages)

```
Home (/)
 ├── About Us & Our Story (/about)
 ├── Get Involved / Donate (/donate)
 └── Contact Us (/contact)
```

**Why only 4 pages?** Fewer pages = faster to build, easier to maintain, and less chance of a visitor getting lost. Every page links back to Donate and Contact. Home is a "highlight reel" that quickly funnels visitors to About (to build trust) or Donate (if they're already convinced).

---

## 5. Detailed Page-by-Page Requirements

### 5.1 Home Page

**Purpose:** Grab attention in 5 seconds, build instant trust, and push visitors to Donate or About.

**Sections (top to bottom):**

| # | Section | Content |
|---|---|---|
| 1 | Header | Logo, tagline "Empower Lives," simple menu (Home, About, Donate, Contact), WhatsApp icon button always visible |
| 2 | Hero Banner | Real photo of founder or program activity + headline + one-line mission + "Donate Now" and "Learn Our Story" buttons |
| 3 | Trust Strip | Small row of badges: "Founded 2008" · "CAC Registered 2013" · "Based in Lagos, Nigeria" |
| 4 | What We Do | 3–4 short icon cards: Rescue, Shelter & Feed, Educate, Vocational Skills |
| 5 | The Need (Current Appeal) | Short, honest section about needing a permanent building, dormitory, and vocational classroom — with a "Support This Appeal" button |
| 6 | Impact / Photos | A small real photo gallery (3–6 images) of activities (dignified, no exploitative imagery) |
| 7 | Call to Donate | Repeat donate button + short trust line ("100% of local donations go directly to the girls in our care") |
| 8 | Footer | Address, phone numbers, email, bank details (short version), social links, copyright |

**Content Rewrite Suggestion (Hero):**
> **Original tone (long-form letter):** Formal, detailed narrative about the founder's calling and the organization's full history.
>
> **New Web Copy (short, punchy):**
> - Headline: **"Every woman deserves a new beginning."**
> - Subtext: "We rescue, shelter, and empower young women trapped in prostitution, street life, and abuse — helping them build a self-reliant, dignified future."
> - Button 1: `Donate Now`
> - Button 2: `Read Our Story`

---

### 5.2 About Us & Our Story Page

**Purpose:** Build deep trust. This is where skeptical visitors (diaspora donors, church partners) go to verify legitimacy.

**Sections:**

| # | Section | Content |
|---|---|---|
| 1 | Founder's Story | Short bio of Ms. Anietie Mbosowo — why she started EWBNLI (2–3 short paragraphs, warm tone) |
| 2 | Our Mission | Rewritten mission statement (see below) |
| 3 | How the Program Works | Simple 3-step visual: Rescue → Rehabilitate (2–3 years: housing, feeding, education, vocational training) → Reintegrate as self-reliant women |
| 4 | Registration & Trust Info | CAC Registration Number & Date (16 April 2013), Founded 2008, full address |
| 5 | Photos | Real photos of the founder and/or facility (with consent, dignified) |
| 6 | CTA | "Want to help us do more? Donate" button |

**Content Rewrite Suggestion (Mission):**
> **New Web Copy:**
> "Many young women in Lagos are trapped in prostitution, street life, drug abuse, or abuse — often with nowhere else to turn. EWBNLI exists to rescue them, give them a safe home, feed and educate them, and teach them a trade. In 2–3 years, they leave our program self-reliant, skilled, and ready for a new life."

---

### 5.3 Get Involved / Donate Page

**Purpose:** Make giving as fast and frictionless as possible — this is the money page.

**Sections:**

| # | Section | Content |
|---|---|---|
| 1 | Why Give | 1-2 sentence emotional reminder of impact |
| 2 | Current Appeal | Building/dormitory/classroom appeal with photo if available |
| 3 | Bank Transfer (Primary Method) | Access Bank & Zenith Bank details in copy-friendly boxes (see Section 7) |
| 4 | Confirm Your Donation (WhatsApp) | Button: "I've Donated — Notify Us on WhatsApp" (pre-filled message) |
| 5 | Optional: Pay Online (Paystack) | Optional Paystack payment link/button, clearly marked "for card/international payments" |
| 6 | Other Ways to Help | Volunteer, donate goods (food, clothing, learning materials), partner as a church/organization — each with a WhatsApp or email contact link |
| 7 | Transparency Note | Short line: "We are a registered NGO (CAC: [number], registered 16 April 2013). Every donation is used directly for our girls' housing, feeding, education, and training." |

---

### 5.4 Contact Us Page

**Purpose:** Give every type of visitor a way to reach Ms. Anietie directly, and show the physical address for legitimacy.

**Sections:**

| # | Section | Content |
|---|---|---|
| 1 | Contact Details | Phone numbers (click-to-call), WhatsApp button, email (click-to-email) |
| 2 | Address | Full address, written clearly (no interactive map in V1 — see Section 12) |
| 3 | Simple Contact Form | Name, Email/Phone, Message, Submit (sends to founder's email) |
| 4 | Social Media Links | If available (Facebook/Instagram icons) |
| 5 | Office Hours (optional) | Simple text, e.g., "Monday–Saturday, 9am–5pm" |

---

## 6. Functional Requirements

| ID | Requirement | Priority (MoSCoW) | Acceptance Criteria |
|---|---|---|---|
| FR-01 | Site must have exactly 4 pages: Home, About, Donate, Contact | Must | All 4 pages exist, linked in main navigation |
| FR-02 | WhatsApp click-to-chat button visible on every page | Must | Clicking opens WhatsApp app/web with pre-filled message to founder's number |
| FR-03 | Click-to-call links on phone numbers | Must | Tapping a phone number on mobile initiates a call |
| FR-04 | Click-to-email links on email address | Must | Tapping opens default mail app with address pre-filled |
| FR-05 | Bank account details displayed with a "Copy" button next to each account number | Must | Tapping "Copy" copies the account number to clipboard and shows a confirmation ("Copied!") |
| FR-06 | Donate page shows both Access Bank and Zenith Bank details clearly labeled | Must | Both banks visible with account number, bank name, and account name |
| FR-07 | Simple contact form on Contact page | Should | Form submits and sends an email/notification to founder without needing a database |
| FR-08 | CAC registration number and date shown on About and footer | Must | Text visible: "CAC Registered: 16 April 2013" |
| FR-09 | Physical address shown on Home footer, About, and Contact | Must | Full address text visible and correct on all 3 pages |
| FR-10 | Photo gallery on Home and/or About page | Should | At least 3 real photos load correctly, compressed for fast loading |
| FR-11 | Optional Paystack "Donate Online" button | Could | Button links to a working Paystack payment page (if set up) |
| FR-12 | Founder can edit text/photos herself without code | Must | Founder can log in and update text/images using a simple editor (WordPress/Wix dashboard or equivalent) |
| FR-13 | Site must work well on small/slow Android phones | Must | Pages load fully under 1.5 seconds on a simulated 3G/slow connection |
| FR-14 | Site is mobile-responsive | Must | No horizontal scrolling, buttons are tap-friendly, text is readable without zoom |
| FR-15 | "Donate Now" button appears at least 3 times across the site | Should | Present in header/hero, mid-page, and footer or Donate page |
| FR-16 | Basic SEO tags (title, description) on all pages | Should | Each page has a unique, descriptive title & meta description |
| FR-17 | Privacy note on contact form re: data usage (NDPR) | Must | Short text near form: how the founder will use submitted info |
| FR-18 | Social media icons (if applicable) in footer | Could | Icons link to correct, active social profiles |

---

## 7. Donation Flow — Detailed UX

The donation flow is the **most important interaction on the site**. It must feel safe, fast, and require zero technical know-how from the donor.

### Step-by-Step Flow

**Step 1 — Visitor lands on Donate page**
Sees a short emotional appeal + the current need (building/dormitory/classrooms).

**Step 2 — Visitor picks a bank**
Two clearly labeled boxes, side by side (or stacked on mobile):

```
┌───────────────────────────────┐
│ 🏦 ACCESS BANK                │
│ Account Name: EMPOWERING      │
│ WOMEN TO BEGIN NEW LIFE       │
│ INITIATIVE                    │
│ Account Number: 0690292602    │
│ [ 📋 Copy Account Number ]    │
└───────────────────────────────┘

┌───────────────────────────────┐
│ 🏦 ZENITH BANK                │
│ Account Name: EMPOWERING      │
│ WOMEN TO BEGIN NEW LIFE       │
│ INITIATIVE                    │
│ Account Number: 1017711497    │
│ [ 📋 Copy Account Number ]    │
└───────────────────────────────┘
```

- Tapping **"Copy Account Number"** copies just the digits to the clipboard.
- A small confirmation message appears for 2 seconds: **"Copied! Paste it in your bank app."**
- This removes the frustration of manually retyping long account numbers on mobile.

**Step 3 — Visitor makes the transfer**
Using their own banking app (outside our site — no risk to us, no payment processing needed).

**Step 4 — Visitor confirms the donation**
A prominent button: **"✅ I've Sent My Donation — Notify Us"**
- This opens WhatsApp with a **pre-filled message** to the founder's number, e.g.:
  > "Hi EWBNLI, I just sent a donation via [Bank Name]. Here's my name: ___. Thank you for the work you do! 🙏"
- This lets Ms. Anietie manually confirm receipt and say thank you — building a personal relationship with every donor, which small NGOs benefit from a lot.

**Step 5 (Optional) — Card/International Donors**
A clearly separate button: **"💳 Prefer to Pay by Card? Donate via Paystack"**
- For diaspora or non-bank-transfer donors.
- Opens a Paystack payment link (no need for a full payment gateway integration — Paystack's hosted payment page/button handles this).
- Optional for V1; can be added later without disrupting the rest of the site.

**Step 6 — Thank You Confirmation**
After clicking the WhatsApp button or completing Paystack payment, show a simple thank-you message on the page:
> "Thank you! Your support helps a young woman rebuild her life. 💛"

### UX Requirements Summary

| Element | Requirement |
|---|---|
| Copy button | Must copy only the account number (not the whole card text) |
| Confirmation feedback | Must show visual confirmation ("Copied!") for 2 seconds |
| WhatsApp button | Must pre-fill a friendly message; must use the correct founder number |
| Button size | Minimum 44x44px tap target (mobile accessibility standard) |
| Trust reminder | Short transparency line must appear directly below/near bank details |
| No forced signup | Donor must never be required to create an account or log in |

---

## 8. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Google Lighthouse score of 90+ on Mobile for Performance, Accessibility, Best Practices, SEO. Largest Contentful Paint (LCP) under 1.5 seconds on 3G-equivalent connection. All images compressed/optimized (WebP format preferred). |
| **Security** | HTTPS (SSL certificate) enabled site-wide. No sensitive data (passwords, card numbers) ever stored on the site. Contact form protected from spam (basic honeypot or CAPTCHA). |
| **Accessibility** | WCAG 2.1 Level AA where feasible: sufficient color contrast, readable font sizes (16px+ body text), alt text on all images, buttons/links usable via keyboard and screen readers. |
| **SEO** | Unique page titles & meta descriptions per page. Proper heading structure (H1, H2, H3). Google Business Profile listing recommended (free, boosts local search trust). Image alt text describing content. |
| **NDPR Compliance (Nigeria Data Protection Regulation)** | Simple, plain-language Privacy Notice describing what data is collected (name, email/phone, message) and how it's used (only to respond to inquiries/donations — never sold or shared). Consent checkbox or notice near contact form. No unnecessary data collection (no need for date of birth, ID numbers, etc.). |
| **Maintainability** | Founder must be able to log in from her phone and: change text, replace photos, update phone/bank numbers — without needing a developer or code knowledge. |
| **Uptime/Reliability** | Site should aim for 99%+ uptime (standard with reputable low-cost hosting). |
| **Backup** | Automatic or easy manual backup option so content isn't lost if something breaks. |

---

## 9. Content & Assets Checklist (What the Founder Must Provide)

### 📸 Photos (Required)
- [ ] 1 clear, warm photo of Ms. Anietie Mbosowo (for About page)
- [ ] 3–6 real photos of program activities, facility, or group settings (dignified — no faces of vulnerable girls unless full consent is documented; consider photos from behind, of hands doing craftwork, group activities, or facility spaces instead of identifiable faces)
- [ ] 1 photo representing "the current need" (existing space, vacant land, or a relevant sketch/plan if available)
- [ ] Logo file (if one exists) in PNG format with transparent background; if no logo exists, a simple text-based logo can be designed

### ✍️ Text Content (Required)
- [ ] Short founder bio (3–5 sentences) — her story, why she started EWBNLI
- [ ] Full CAC registration number (in addition to the date already provided)
- [ ] Confirmation of current bank details (double-check account numbers before publishing)
- [ ] 2–3 sentence description of "the current need" (building/dormitory/classroom appeal)
- [ ] Any short testimonials or quotes (anonymized/dignified — e.g., "One of our graduates now runs her own tailoring shop")
- [ ] Office hours (if applicable)
- [ ] Any social media handles (Facebook, Instagram, etc.)

### 📄 Documents (Optional but Builds Trust)
- [ ] Scanned copy of CAC registration certificate (can be shown as an image or linked as a PDF — builds major trust with diaspora/church donors)
- [ ] Any partnership or reference letters (optional)

### 🔑 Access Needed
- [ ] Access to the email address (anietembosowo@gmail.com) for site login/notifications
- [ ] Confirmation of preferred domain name (e.g., www.ewbnli.org or www.empowerlives.ng)

---

## 10. Tech Stack Recommendation

| Option | Description | Monthly Cost (Approx.) | Ease for Founder | Recommended? |
|---|---|---|---|---|
| **A: WordPress + Free Theme + GiveWP** | Full CMS, huge plugin ecosystem, GiveWP handles donation forms | ₦3,000–₦8,000/month (hosting + domain) | Moderate — needs a short training session | Good if she wants long-term flexibility |
| **B: Google Sites / Wix** | Drag-and-drop website builders, very beginner-friendly | Wix: ₦5,000–₦10,000/month · Google Sites: Free (but less polished) | **Easiest** — true drag-and-drop, phone-editable | ✅ **Recommended for V1** |
| **C: Static Site on Netlify** | Fast, free hosting, but requires a developer for any content change (not phone-editable without extra tools) | Free–₦2,000/month | Hard — not suitable without ongoing developer support | ❌ Not recommended (violates "one-woman managed" requirement) |

### ✅ Final Recommendation: **Option B — Wix (or Google Sites as a free fallback)**

**Why:**
1. **No developer needed ever again** — Ms. Anietie can edit text, swap photos, and update numbers directly from the **Wix mobile app**.
2. **Low cost** — a basic Wix plan covers hosting, a custom domain, and mobile optimization in one predictable monthly fee.
3. **Fast enough** — Wix's modern templates are mobile-optimized out of the box, and with light content (per this SRS) can meet the <1.5s target with care (compressed images, minimal animations).
4. **Built-in contact forms** — no need for custom coding or database setup.
5. **Simple to add Paystack later** — Wix supports embedding a Paystack payment button/link without needing a plugin ecosystem.

**If budget must be ₦0:** Use **Google Sites** (completely free, connects to a free Google Workspace/Gmail account) as a stripped-down version of this same structure, then upgrade to Wix once the first donations come in.

**When WordPress (Option A) makes sense:** If, in Phase 2, EWBNLI wants a real blog, event listings, or more advanced donation tracking (recurring donations, donor receipts), migrating to WordPress + GiveWP becomes worthwhile. Not needed for V1.

---

## 11. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| **Low donor trust** (small/unknown NGO) | Fewer donations | Show CAC date, real address, real photos, founder's story, and a scanned registration certificate prominently |
| **Bank detail fraud/scam impersonation** (someone copies EWBNLI's identity and sets up fake accounts to defraud donors) | Reputational and financial harm to real donors | Clearly state "Always confirm you are on [official domain]" on the site; keep bank details identical everywhere (site, social media, printed materials); encourage donors to WhatsApp-confirm before/after sending |
| **Founder cannot maintain the site** (limited tech confidence) | Site becomes outdated, broken links, wrong numbers | Choose the easiest platform (Wix), provide a simple one-page "How to Edit Your Website" guide with screenshots |
| **Site goes down / domain expires** | Total loss of online presence | Set up auto-renewal for domain and hosting; remind founder via calendar/email before renewal dates |
| **Photos of vulnerable girls used without consent, or in an exploitative way** | Serious harm to beneficiaries, legal/ethical risk | Never publish identifiable photos of girls in the program without signed consent; favor photos of the founder, facility, activities, and hands-only/back-view shots |
| **Spam through contact form** | Wastes founder's time, clutters inbox | Add a honeypot field or simple CAPTCHA; keep the form to only 3 fields |
| **Slow internet for visitors (data cost sensitivity)** | Visitors leave before page loads, lost donations | Compress all images, avoid autoplay video, avoid heavy animations/plugins |
| **Outdated bank details or phone numbers** | Missed donations, confusion | Do a quarterly manual review of all contact/bank info on the site |
| **NDPR non-compliance** | Legal risk, loss of trust | Keep a simple, honest privacy notice; collect only the minimum data needed |

---

## 12. Future Phase — What NOT to Build in V1

To keep the site simple, low-cost, and manageable by one person, the following are **explicitly out of scope for Version 1** and should be considered only in later phases (if the organization grows, gets funding, or hires help):

- ❌ **Member/donor login portals** (accounts, dashboards, donation history for donors)
- ❌ **Interactive maps** (embedded Google Maps with pins — a simple text address is enough for now)
- ❌ **Headless CMS or custom-built backend/database**
- ❌ **Recurring/subscription donation system**
- ❌ **Blog or news section** (can be added later once there's time to maintain it regularly)
- ❌ **Multi-language site** (English is sufficient for now)
- ❌ **Live chat widgets** (WhatsApp click-to-chat is sufficient and simpler)
- ❌ **Volunteer application system with automated workflows** (a simple WhatsApp/email contact is enough for now)
- ❌ **E-commerce (selling program-made goods online)** — good future idea, but adds real complexity (inventory, shipping, payments)
- ❌ **Automated email newsletters/mailing list system**
- ❌ **Advanced analytics dashboards** — basic free tools (Google Analytics or Plausible) are enough

**Guiding rule for future phases:** Only add a new feature once the founder has the time, help, or budget to maintain it — otherwise it becomes a broken link or outdated page that hurts trust instead of building it.

---

## Appendix: Quick Reference — Key Organization Details

| Field | Value |
|---|---|
| Organization Name | EMPOWERING WOMEN TO BEGIN NEW LIFE INITIATIVE (EWBNLI) |
| Tagline | "Empower Lives" |
| Founder | Ms. Anietie Mbosowo |
| Founded | 2008 |
| CAC Registered | 16 April 2013 |
| Address | 3, Omotayo Street, Off Church Street, Fagbile Estate, Ijegun, Lagos, Nigeria |
| Phone 1 | 0803 303 6124 |
| Phone 2 | 0812 382 9317 |
| Email | anietembosowo@gmail.com |
| Access Bank | 0690292602 |
| Zenith Bank | 1017711497 |
| Account Name (both banks) | EMPOWERING WOMEN TO BEGIN NEW LIFE INITIATIVE |

---

*End of Document*
