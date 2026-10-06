# New Page SEO + AI Rules (Required)

Apply these rules to every new public page so the same search optimizations stay consistent across the site.

## 1) Metadata is mandatory

Every page needs a route-level `layout.tsx` with:
- `title` targeted to one primary intent
- `description` with clear value + location/context
- `alternates.canonical` pointing to the final URL
- `openGraph.title`, `openGraph.description`, and `openGraph.url`

Use the existing pattern in:
- `app/casadelmare/layout.tsx`
- `app/casadelmare/availability/layout.tsx`
- `app/casadelmare/book-now/layout.tsx`

## 2) One page = one primary search intent

- Do not target multiple competing intents on one page.
- Use a clear H1 aligned with the page intent.
- Keep title/H1/body language consistent with that intent.

## 3) Answer-first page structure

- Start sections with a direct answer in 1–3 sentences.
- Use descriptive H2/H3s phrased like real traveler questions when possible.
- Add scannable factual blocks (capacity, beds, parking, policies, distance, timing).

## 4) Internal-link requirements

Each new page must link to at least two relevant pages in the booking path:
- `/casadelmare`
- `/casadelmare/availability`
- `/casadelmare/book-now`

Use descriptive anchor text (not generic "click here").

## 5) Structured data requirements

- Add/update JSON-LD when content introduces canonical facts (FAQ, policies, rental details).
- Use valid schema types only and keep values consistent with visible page content.
- Keep business/entity details identical to canonical site details.

## 6) Media requirements

- Use descriptive image filenames and alt text tied to traveler intent.
- Use optimized image delivery (Next `Image`) and avoid oversized assets.

## 7) Indexing and crawl rules

- Page must be public and indexable (no accidental `noindex`).
- Canonical URL must resolve without redirects/loops.
- Ensure page is included in sitemap generation where applicable.

## 8) Tracking requirements

If a page contains conversion actions (book, inquiry, phone, email), wire GA4 events using existing naming conventions.

## 9) Publish checklist (ship gate)

Before launch, confirm:
1. Metadata + canonical + OG are present.
2. H1 matches primary intent.
3. Internal links to booking path are present.
4. Any relevant schema validates and matches visible content.
5. Images are optimized and have descriptive alt text.
6. Page is indexable and reachable without redirect issues.
7. If CTA exists, analytics events are firing.

## 10) Ongoing optimization rule

After publishing, include the new page in the weekly/monthly loop from `docs/SEO_MEASUREMENT_LOOP.md` and iterate based on Search Console + GA4 data.
