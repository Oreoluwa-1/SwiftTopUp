"use client";

import InviteCard from "./InviteCard";
import ReferralStats from "./ReferralStats";
import PendingBonus from "./PendingBonus";
import HowItWorks from "./HowItWorks";
import TransactionHistory from "./TransactionHistory";

export default function ReferralPage() {
  return (
    <div className="w-full bg-gray-50 p-5 md:p-4 min-h-screen">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/*  COLUMN 1: Invite & Earn */}
        <InviteCard />

        {/*  COLUMN 2: Total Referrals & Total Earned */}
        <ReferralStats />

        {/* COLUMN 3: Pending Bonus & How It Works*/}
        <div className="flex flex-col gap-5">
          <PendingBonus />
          <HowItWorks />
        </div>

        {/* ROW 2: Transaction History */}
        <div
          className="
            lg:col-span-2 
            mt-8 sm:mt-10 md:mt-12 lg:mt-[-100px]
            order-last lg:order-none
          "
        >
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
