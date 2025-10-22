"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function InviteCard() {
  const [copied, setCopied] = useState(false);
  const referralCode = "RD2024JD";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100 flex flex-col gap-5">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Invite & Earn</h2>
        <p className="text-sm text-gray-500">
          Get ₦500 bonus each time someone signs up and transacts with your link
        </p>
      </div>

      {/* Referral Section */}
      <div className="rounded-xl bg-gradient-to-l from-[#86BFFF80] to-[#86D49B80] p-4 flex flex-col gap-3">
        {/* Label */}
        <p className="text-xs text-gray-600">Your referral code</p>

        {/* Code, Copy, and Share in one straight line */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Code Display */}
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium text-[#0062D9] bg-white px-2 py-2 rounded-lg border border-gray-200">
              {referralCode}
            </p>

            {/* Copy And Check icon */}
            {copied ? (
              <Check
                size={22}
                className="text-green-600 transition-all duration-200"
              />
            ) : (
              <Copy
                size={22}
                onClick={handleCopy}
                className="text-blue-600 hover:text-blue-700 cursor-pointer transition-all duration-200"
              />
            )}
          </div>

          {/* Share Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200">
            Share link
          </button>
        </div>
      </div>

      {/* Copied Message */}
      {copied && (
        <p className="text-xs text-green-600 transition-all duration-200">
          Copied to clipboard!
        </p>
      )}
    </div>
  );
}
