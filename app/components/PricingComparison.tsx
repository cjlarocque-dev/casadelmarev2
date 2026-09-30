'use client';

import { useEffect, useState } from 'react';

interface PricingData {
  directRate: number;
  airbnbEstimate: number;
  vrboEstimate: number;
  airbnbSavings: number;
  vrboSavings: number;
}

export default function PricingComparison() {
  const [pricing, setPricing] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch('/api/ownerrez-rates');
        if (!response.ok) throw new Error('Failed to fetch pricing');
        const data = await response.json();
        setPricing(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading pricing...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;
  if (!pricing) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Save Money Booking Direct
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Compare our direct rates with what you'd pay on major platforms
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Direct Booking */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mb-4">Book Direct</h3>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">Per Night Rate</p>
            <p className="text-4xl font-bold text-green-600">
              ${pricing.directRate.toFixed(2)}
            </p>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition">
            Book Now
          </button>
          <p className="text-center text-green-700 font-semibold mt-4">✓ Best Price</p>
        </div>

        {/* Airbnb Estimate */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Airbnb</h3>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">Estimated Total</p>
            <p className="text-4xl font-bold text-gray-600">
              ${pricing.airbnbEstimate.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              +${pricing.airbnbSavings.toFixed(2)} in fees
            </p>
          </div>
          <button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg opacity-50 cursor-not-allowed">
            View on Airbnb
          </button>
        </div>

        {/* VRBO Estimate */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-700 mb-4">VRBO</h3>
          <div className="mb-4">
            <p className="text-gray-600 text-sm">Estimated Total</p>
            <p className="text-4xl font-bold text-gray-600">
              ${pricing.vrboEstimate.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              +${pricing.vrboSavings.toFixed(2)} in fees
            </p>
          </div>
          <button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg opacity-50 cursor-not-allowed">
            View on VRBO
          </button>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-lg font-bold text-blue-900 mb-3">Your Savings</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-blue-700 font-semibold">Save vs Airbnb:</p>
            <p className="text-2xl font-bold text-green-600">
              ${pricing.airbnbSavings.toFixed(2)}/night
            </p>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">Save vs VRBO:</p>
            <p className="text-2xl font-bold text-green-600">
              ${pricing.vrboSavings.toFixed(2)}/night
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl mb-2">💰</div>
          <p className="font-semibold text-gray-700">Better Price</p>
          <p className="text-sm text-gray-600">No platform fees</p>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-2">🤝</div>
          <p className="font-semibold text-gray-700">Direct Contact</p>
          <p className="text-sm text-gray-600">Personal support</p>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-2">✨</div>
          <p className="font-semibold text-gray-700">Special Offers</p>
          <p className="text-sm text-gray-600">Exclusive deals</p>
        </div>
      </div>
    </div>
  );
}
