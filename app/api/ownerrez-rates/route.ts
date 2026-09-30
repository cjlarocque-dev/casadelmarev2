import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const PROPERTY_ID = '934d8c678417484ea626901fabf33f9a';
const PAT_FILE = join(homedir(), '.ownerrez', 'CDM_site');

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
    
    // Fetch property rates from OwnerRez API
    const response = await fetch(
      `https://api.ownerrez.com/v2/properties/${PROPERTY_ID}`,
      {
        headers: {
          'Authorization': `Bearer ${pat}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: `OwnerRez API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract nightly rate
    const nightlyRate = data.rate || data.baseRate || 0;

    // Calculate platform fees
    const airbnbFee = nightlyRate * 0.18; // 18% Airbnb + payment processing
    const vrboFee = nightlyRate * 0.20; // 20% VRBO + payment processing
    
    return Response.json({
      directRate: nightlyRate,
      airbnbEstimate: nightlyRate + airbnbFee,
      vrboEstimate: nightlyRate + vrboFee,
      airbnbSavings: airbnbFee,
      vrboSavings: vrboFee,
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
