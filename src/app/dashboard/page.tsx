"use client";

import OverviewCard from "../component/dashboard/OverviewCard";
import InviteEarnCard from "../component/dashboard/InviteEarnCard";
import QuickActions from "../component/dashboard/QuickActions";
import ThisMonthStats from "../component/dashboard/ThisMonthStats";
import TransactionHistory from "../component/dashboard/TransactionHistory";

export default function DashboardPage() {
  return (
    <div>
     

      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left (2 columns span) */}
        <div className="lg:col-span-2">
          <OverviewCard />
        </div>

        {/* Right */}
        <InviteEarnCard />
      </div>


     
      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <QuickActions />
        </div>

 {/* This Month Stats */}
        <ThisMonthStats />
      </div>

 {/*Transaction Table */}
      <TransactionHistory />
    </div>
       
      

     
      
 
  );
}
