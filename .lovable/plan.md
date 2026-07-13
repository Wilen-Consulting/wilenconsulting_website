## Changes to `src/routes/index.tsx` and `src/styles.css`

### 1. Remove decorative dashes
- Delete the green `::before` line in the `.eyebrow` utility (`src/styles.css`) so every "SOUND FAMILIAR?" / "MEET THE FOUNDER" eyebrow renders as plain uppercase text with no green tick in front.
- Sweep the copy for em dashes (`—`) and replace with commas or periods. Affected strings:
  - Hero subhead: "time, money, and aggravation by automating…" (already no em-dash, keep)
  - Pain intro: "The frustration is real — and it's fixable." → "The frustration is real, and it's fixable." (matches test-site copy)
  - Hero paragraph "the processes, workflows, and communication that keep your business running" → revert to original live-site copy: "Save yourself time, money, and aggravation by automating processes, workflows, and communication."
  - Testimonials intro: remove the added "Business owners across industries…" paragraph (user said don't add text).
  - Any other agent-authored connective sentences that don't appear on either source site get removed so the page only carries copy that exists on the live site or the test site.

### 2. Keep the logo exactly as-is
- Header + footer both use `@/assets/logo.png` (the original `Full-logoWilen-Consulting.png` downloaded from the live site). Confirm no `brightness-0 invert` filter is applied in the footer — remove that class so the footer logo renders with its true colors on the navy footer (matches live-site treatment).

### 3. Add "Top Industries" section (new)
Insert between the Case Study band and the About section, id `#industries`. Nav link "Top Industries" points here. Cards use only test-site copy:
- Medical Billing — "Claims tracking, payment reconciliation, and HIPAA-compliant paperwork, automated end to end."
- Retail / E-Commerce — "Accounting integrations, inventory reconciliation, and order processing built for how you actually sell."
- Warehouse Management — "Software built for warehouse and logistics operations, keeping stock and fulfillment in sync."
- ABA — "Software built for ABA therapy practices, from scheduling to session documentation."

Section eyebrow "Who We Serve", heading "Industries we know inside and out." Small footer line: "Don't see your industry here? Tell us how your business runs. If it can be systematized, we can probably help." with a "Book a consultation" link to `#contact`.

### 4. Expand Services section with the new offerings
Rename current "Professional / Personal / Practical" block to keep the Wilen Promise, and add a new Services grid directly beneath it (id `#services`, nav "Services" points here). Eyebrow "What We Do", heading "What will propel your business forward?" Grid of 8 cards using test-site copy verbatim:
- Custom Portals
- Integrations
- Custom Solutions
- Software Support
- Process Management
- Workflow Improvements
- Financial Services
- Human Resources
- Data Management

(9 total — 3-column grid on desktop.) Each card = title + one-line description from test site, no added copy.

### 5. Nav update
Nav links become: About · Services · Top Industries · Case Studies · Testimonials. Mobile menu mirrors the same list.

## Out of scope
- No new copywriting beyond what exists on the live or test site.
- No logo redesign, recolor, or filter.
- No new illustrations generated.
- Colors, typography, layout system unchanged.
