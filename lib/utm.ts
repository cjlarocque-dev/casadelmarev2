// Captures UTM parameters (and click IDs) from the URL on landing and
// persists them in sessionStorage so later GA4 events (e.g. booking clicks
// on /casadelmare/book-now) can be attributed to the original campaign,
// even if the visitor navigated through multiple internal pages first.

const STORAGE_KEY = 'cdm_utm_params';

const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const;

export type UtmParams = Partial<Record<(typeof TRACKED_PARAMS)[number], string>>;

/**
 * Reads UTM/click-id params from the current URL. If any are present,
 * stores them in sessionStorage (overwriting any previously stored set),
 * so the most recent campaign link a visitor clicked wins attribution for
 * that session.
 */
export function captureUtmParams(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const found: UtmParams = {};

    TRACKED_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        found[key] = value;
      }
    });

    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    // sessionStorage may be unavailable (e.g. private browsing); fail silently.
  }
}

/**
 * Returns the UTM/click-id params captured earlier in this session, if any.
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
