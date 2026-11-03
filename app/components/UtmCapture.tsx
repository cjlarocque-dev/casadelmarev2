'use client';

import { useEffect } from 'react';

import { captureUtmParams } from '@/lib/utm';

/**
 * Captures UTM/click-id params from the landing URL into sessionStorage on
 * every page load. Rendered once in the root layout so attribution works
 * no matter which page a campaign link points to.
 */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
