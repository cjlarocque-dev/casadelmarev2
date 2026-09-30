import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

// Use numeric property ID, not the UUID from the widget
const PROPERTY_ID = '496831';
const PAT_FILE = join(homedir(), '.ownerrez', 'CDM_site');
const OWNERREZ_EMAIL = 'clarocque06@gmail.com';

// Your nightly rate - update this to match your actual pricing
const NIGHTLY_RATE = 350; // Set to your base nightly rate

function getPAT(): string {
  try {
    const token = readFileSync(PAT_FILE, 'utf-8').trim();
    if (!token) throw new Error('PAT file is empty');
    return token;
  } catch (error) {
    console.error('Failed to read OwnerRez PAT:', error);
    throw new Error('OwnerRez PAT not configured');
  }
}

export async function GET() {
  try {
    const pat = getPAT();
    
    // Create Basic Auth header with email:token format
    const auth = Buffer.from(`${OWNERREZ_EMAIL}:${pat}`).toString('base64');
    
    // Fetch property details from OwnerRez API
    const response = await fetch(
      `https://api.ownerrez.com/v2/properties/${PROPERTY_ID}`,
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Casa-Del-Mare-Website/1.0',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OwnerRez API error (${response.status}):`, errorText);
      return Response.json(
        { error: `OwnerRez API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Use configured nightly rate
    const nightlyRate = NIGHTLY_RATE;

    // Calculate platform fees (industry standard)
    const airbnbFee = nightlyRate * 0.18; // 18% Airbnb commission + payment processing
    const vrboFee = nightlyRate * 0.20; // 20% VRBO commission + payment processing
    
    return Response.json({
      directRate: nightlyRate,
      airbnbEstimate: Math.round((nightlyRate + airbnbFee) * 100) / 100,
      vrboEstimate: Math.round((nightlyRate + vrboFee) * 100) / 100,
      airbnbSavings: Math.round(airbnbFee * 100) / 100,
      vrboSavings: Math.round(vrboFee * 100) / 100,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('OwnerRez API error:', error);
    return Response.json(
      { error: 'Failed to fetch pricing data' },
      { status: 500 }
    );
  }
}
