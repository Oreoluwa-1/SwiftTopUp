"use client";

import { useEffect, useState } from "react";
import { Users, Wallet, Loader2, AlertCircle } from "lucide-react";

export default function ReferralStats() {
  const [stats, setStats] = useState<{ totalReferrals: number; totalEarned: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated API call (replace with real endpoint)
  useEffect(() => {
    const fetchReferralStats = async () => {
      try {
        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock API response
        const response = {
          totalReferrals: 12,
          totalEarned: 6000,
        };

        setStats(response);
      } catch (err) {
        setError("Failed to load referral stats");
      } finally {
        setLoading(false);
      }
    };

    fetchReferralStats();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* Total Referrals*/}
      <div className="rounded-xl bg-white p-5 shadow-sm flex items-center gap-4 transition hover:shadow-md">
        <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
          <Users className="text-blue-600" size={22} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Referrals</p>
          {loading ? (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Loader2 className="animate-spin" size={16} /> Loading...
            </div>
          ) : error ? (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle size={16} /> {error}
            </div>
          ) : (
            <h3 className="text-2xl font-semibold text-gray-800">
              {stats?.totalReferrals.toLocaleString()}
            </h3>
          )}
        </div>
      </div>

      {/* Total Earned */}
      <div className="rounded-xl bg-white p-5 shadow-sm flex items-center gap-4 transition hover:shadow-md">
        <div className="bg-[#FFF1F1] p-3 rounded-full flex items-center justify-center">
          <Wallet className="text-[#DA1E28]" size={22} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Earned</p>
          {loading ? (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Loader2 className="animate-spin" size={16} /> Loading...
            </div>
          ) : error ? (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle size={16} /> {error}
            </div>
          ) : (
            <h3 className="text-2xl font-semibold text-gray-800">
              ₦{stats?.totalEarned.toLocaleString()}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
