"use client";

import { useEffect, useState } from "react";
import { Banknote, Loader2, AlertCircle } from "lucide-react";

export default function PendingBonus() {
  const [pendingBonus, setPendingBonus] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated API call (replace with real endpoint )
  useEffect(() => {
    const fetchPendingBonus = async () => {
      try {
        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock API response
        const response = { bonus: 1500 };

        // Update state
        setPendingBonus(response.bonus);
      } catch (err) {
        setError("Failed to load pending bonus");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingBonus();
  }, []);

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm flex items-center gap-4 transition hover:shadow-md">
      {/* Icon */}
      <div className="bg-[#B6F6C8] p-3 rounded-full flex items-center justify-center">
        <Banknote className="text-[#028743]" size={22} />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Pending Bonus</p>

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
            ₦{pendingBonus?.toLocaleString()}
          </h3>
        )}
      </div>
    </div>
  );
}
