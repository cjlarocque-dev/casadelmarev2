// Use environment variables for secure configuration
const NIGHTLY_RATE = parseFloat(process.env.NIGHTLY_RATE || '350');

export async function GET() {
  try {
    // Calculate platform fees (industry standard)
    const airbnbFee = NIGHTLY_RATE * 0.18; // 18% Airbnb commission + payment processing
    const vrboFee = NIGHTLY_RATE * 0.20; // 20% VRBO commission + payment processing
    
    return Response.json({
      directRate: NIGHTLY_RATE,
      airbnbEstimate: Math.round((NIGHTLY_RATE + airbnbFee) * 100) / 100,
      vrboEstimate: Math.round((NIGHTLY_RATE + vrboFee) * 100) / 100,
      airbnbSavings: Math.round(airbnbFee * 100) / 100,
      vrboSavings: Math.round(vrboFee * 100) / 100,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Pricing API error:', error);
    return Response.json(
      { error: 'Failed to fetch pricing data' },
      { status: 500 }
    );
  }
}

