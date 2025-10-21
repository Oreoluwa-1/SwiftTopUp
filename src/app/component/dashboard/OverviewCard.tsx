"use client";

import { Eye, EyeOff, Copy, PlusCircle, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function OverviewCard() {
  const [showBalance, setShowBalance] = useState(true);
  const [copied, setCopied] = useState(false);
  const [accountNumber] = useState("0103994367");
  const [bankName] = useState("Fidelity Bank");
  const [balance, setBalance] = useState(24500);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy account number:", err);
    }
  };

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* Header */}
      <h2 className="font-medium text-gray-800 mb-3">Overview</h2>

      {/* Wallet Balance Row */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Wallet balance</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-[26px] font-semibold text-[#0F0F0F]">
              {showBalance
                ? `NGN${balance.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                  })}`
                : "•••••••••"}
            </h3>

            <button
              onClick={() => setShowBalance(!showBalance)}
              className="hover:bg-gray-100 p-1 rounded-md transition"
            >
              {showBalance ? (
                <EyeOff size={18} className="text-gray-500" />
              ) : (
                <Eye size={18} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Fund Wallet Button */}
        <Button className="bg-[#16A34A] hover:bg-green-700 flex items-center gap-2 font-medium text-white">
          <PlusCircle size={18} /> Fund wallet
        </Button>
      </div>

      {/* Virtual Account Info */}
      <div className="rounded-lg border border-gray-200 p-4 text-sm">
        <p className="text-gray-600 mb-1">Virtual account number (VAN)</p>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-[#0F0F0F] tracking-wide">
            {accountNumber}
          </p>

          <button
            onClick={handleCopy}
            className="p-1 rounded-md hover:bg-gray-100 transition"
          >
            {copied ? (
              <Check size={16} className="text-green-600" />
            ) : (
              <Copy size={16} className="text-gray-600" />
            )}
          </button>
        </div>

        <p className="text-gray-500 mt-1">{bankName}</p>
      </div>
    </div>
  );
}
