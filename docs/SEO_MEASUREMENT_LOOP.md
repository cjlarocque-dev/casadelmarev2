# SEO + GA4 Measurement Loop (Casa Del Mare)

Use this playbook weekly and monthly to turn Search Console + GA4 data into concrete optimization actions.

## 1) Core KPIs to Track

### Search Console (organic discovery)
- **Total clicks**
- **Total impressions**
- **Average CTR**
- **Average position**
- **Top queries for /casadelmare, /casadelmare/availability, /casadelmare/book-now**

### GA4 (on-site intent and conversion path)
- **Organic sessions**
- **ownerrez_book_now_click**
- **ownerrez_inquiry_click**
- **ownerrez_cta_click** (diagnostic)
- **Email click / phone click events** (when enabled)

## 2) Weekly Routine (30–45 min)

1. **Search Console → Performance**
   - Filter by page:
     - `/casadelmare`
     - `/casadelmare/availability`
     - `/casadelmare/book-now`
   - Export top queries for each page.

2. **Flag low-CTR opportunities**
   - Prioritize queries with:
     - **High impressions**, and
     - **CTR below page average**.

3. **GA4 Realtime/Reports sanity checks**
   - Confirm booking intent events are firing:
     - `ownerrez_book_now_click`
     - `ownerrez_inquiry_click`
   - Confirm traffic source split still looks reasonable.

4. **Action queue**
   - Add 1–3 changes for next cycle (title/meta tweak, FAQ addition, internal link copy update).

## 3) Monthly Routine (60–90 min)

1. **Compare month-over-month**
   - Organic clicks, impressions, CTR, and booking-intent events.

2. **Funnel review**
   - Home → Availability → Book Now
   - Identify largest drop-off step.

3. **Snippet iteration**
   - Refresh one page title/meta at a time to test CTR lift.
   - Keep changes isolated so impact is measurable.

4. **Content expansion**
   - Add FAQ entries and local-intent copy for top rising queries.

5. **Technical checks**
   - Verify:
     - `/robots.txt`
     - `/sitemap.xml`
     - Search Console enhancement/indexing warnings

## 4) Action Thresholds (When to Intervene)

- **CTR problem:** query has 200+ impressions in 28 days and CTR is notably below page average → revise title/meta and first-screen copy.
- **Ranking drift:** position worsens for core terms over 2+ consecutive periods → expand on-page relevance (FAQ/internal links).
- **Intent drop:** `ownerrez_book_now_click` drops while organic sessions hold steady → tighten CTA placement/copy and validate widget tracking.

## 5) Source of Truth Notes

- Search Console = search demand and SERP behavior.
- GA4 = on-site behavior and booking intent.
- OwnerRez system reporting = final booking/inquiry outcomes (authoritative for completed transactions).

## 6) Reporting Template (Monthly)

Track these in a simple spreadsheet:

- Month
- Organic clicks
- Organic impressions
- Organic CTR
- Avg position
- `ownerrez_book_now_click` count
- `ownerrez_inquiry_click` count
- Top 5 winning queries
- Top 5 opportunities
- Changes shipped this month

Use this template each month so optimization stays consistent and comparable over time.
