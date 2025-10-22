"use client";

import OverviewCard from "../component/dashboard/OverviewCard";
import InviteEarnCard from "../component/dashboard/InviteEarnCard";
import QuickActions from "../component/dashboard/QuickActions";
import ThisMonthStats from "../component/dashboard/ThisMonthStats";
import TransactionHistory from "../component/dashboard/TransactionHistory";

export default function DashboardPage() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6">
      {/*First Row*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Overview (Left, 2 columns) */}
        <div className="lg:col-span-2">
          <OverviewCard />
        </div>

        {/* Invite & Earn (Right) */}
        <div>
          <InviteEarnCard />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick Actions (Left, 2 columns) */}
        <div className="lg:col-span-2">
          <QuickActions />
        </div>

        {/* This Month Stats (Right) */}
        <div>
          <ThisMonthStats />
        </div>
      </div>

      {/* Transaction Table  */}
      <div className="mt-8">
        <TransactionHistory />
      </div>
    </div>
  );
}
