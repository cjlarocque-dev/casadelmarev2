# UTM Parameters Guide (Casa Del Mare)

Reference for tagging any marketing link (social posts, email, QR codes, ads) so traffic source shows up correctly in Google Analytics 4 (GA4).

## 1) What UTM Parameters Are

UTM (Urchin Tracking Module) parameters are query-string tags appended to a URL. GA4 reads them automatically on page load — no extra code is needed on our end. Format:

```
https://www.familybeachtrips.com/casadelmare?utm_source=instagram&utm_medium=social&utm_campaign=fall_special
```

## 2) The 5 Standard Parameters

| Parameter | Required? | Definition | Example values |
|---|---|---|---|
| `utm_source` | Yes | The specific platform/publisher sending the traffic. | `instagram`, `facebook`, `tiktok`, `newsletter`, `google` |
| `utm_medium` | Yes | The general marketing channel/category. | `social`, `email`, `cpc`, `qr_code`, `print` |
| `utm_campaign` | Yes | The specific campaign or promotion name. Use the same value across all platforms for one push so GA4 groups them together. | `fall_special`, `summer2027`, `qr_flyer_launch` |
| `utm_content` | Optional | Distinguishes between multiple links within the same source/campaign (A/B links, ad variants, bio link vs. story). | `bio_link`, `story_swipeup`, `button_a` |
| `utm_term` | Optional | Paid search keyword being targeted. Mainly used for Google/Bing Ads. | `myrtle_beach_rental` |

## 3) Non-UTM Params We Also Capture

The site also auto-captures these ad-platform click IDs when present, for consistency with paid campaigns:

| Parameter | Source | Purpose |
|---|---|---|
| `gclid` | Google Ads | Google's own click identifier; enables Google Ads conversion tracking. |
| `fbclid` | Meta (Facebook/Instagram) Ads | Meta's own click identifier; supports Meta Pixel attribution. |

## 4) Naming Rules (Keep Reports Clean)

- Lowercase only, no spaces — use underscores or hyphens (`fall_special`, not `Fall Special`).
- Keep `utm_campaign` identical across every platform promoting the same push.
- Keep a running list of past campaign names (below) to avoid near-duplicate variants (`fall_special` vs `fall-special` vs `FallSpecial` will show as 3 separate campaigns in GA4).
- Always include `utm_source` + `utm_medium` + `utm_campaign` at minimum; add `utm_content` only when you need to compare two links from the same source.

## 5) Quick Templates by Platform

Replace `fall_special` with the active campaign name.

```
Instagram bio:    ?utm_source=instagram&utm_medium=social&utm_campaign=fall_special&utm_content=bio_link
Instagram story:  ?utm_source=instagram&utm_medium=social&utm_campaign=fall_special&utm_content=story_swipeup
Facebook post:    ?utm_source=facebook&utm_medium=social&utm_campaign=fall_special&utm_content=feed_post
TikTok bio:       ?utm_source=tiktok&utm_medium=social&utm_campaign=fall_special&utm_content=video_bio
Pinterest pin:    ?utm_source=pinterest&utm_medium=social&utm_campaign=fall_special&utm_content=pin_link
Email newsletter: ?utm_source=newsletter&utm_medium=email&utm_campaign=fall_special
QR code / print:  ?utm_source=qr_code&utm_medium=print&utm_campaign=fall_special
```

## 6) Where to View Results in GA4

- **Reports → Acquisition → Traffic acquisition** — session-level source/medium/campaign breakdown.
- **Reports → Acquisition → User acquisition** — first-touch attribution (which campaign brought the user in originally).
- **Explore reports** — add `Session campaign`, `Session source`, `Session medium` as dimensions for custom breakdowns.
- Booking-intent events (`ownerrez_book_now_click`, `ownerrez_inquiry_click`, `ownerrez_cta_click`) carry the same UTM values as event parameters, so campaign attribution is visible down to the actual booking click, not just the pageview. See `lib/utm.ts` for the capture/persistence logic.

## 7) Campaign Name Log

Track every campaign name used here so naming stays consistent over time.

| Campaign name | Date launched | Platforms used | Notes |
|---|---|---|---|
| `fall_special` | 2026-10 | Instagram, Facebook | 10% off promo, hot-deal modal |

## 8) Free Tool

Google's **Campaign URL Builder** (search "ga campaign url builder") generates correctly formatted tagged links — paste the destination URL and fill in the fields.
