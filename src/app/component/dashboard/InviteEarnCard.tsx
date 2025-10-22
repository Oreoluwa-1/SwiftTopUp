"use client";

import { Copy, Share2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function InviteEarnCard() {
  const [referralCode, setReferralCode] = useState("RD2024JD");
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState(15);
  const [earnings, setEarnings] = useState(12000);

  // Copy referral code function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };


  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="font-medium mb-3 text-gray-800">Invite & earn</h2>

      {/* Referral Code Card */}
      <div className="rounded-lg bg-gradient-to-r from-[#E2EEFF] to-[#C4F4DC] p-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Your referral code</p>
          <p className="font-semibold text-[#0F0F0F]">{referralCode}</p>
        </div>
        <button onClick={handleCopy} className="p-2 rounded-md hover:bg-white/40 transition">
          {copied ? (
            <Check className="text-green-600" size={18} />
          ) : (
            <Copy className="text-gray-600" size={18} />
          )}
        </button>
      </div>

      {/* Referral Stats */}
      <div className="mt-4 text-sm">
        <div className="flex justify-between mb-1">
          <p className="text-gray-600">Total Referrals</p>
          <p className="font-medium text-gray-800">{referrals}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Earnings</p>
          <p className="text-green-600 font-semibold">
            NGN{earnings.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Share Button */}
      <Button className="mt-5 w-full flex items-center gap-2 justify-center rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
        <Share2 size={16} /> Share link
      </Button>
    </div>
  );
}
