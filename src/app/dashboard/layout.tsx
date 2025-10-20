import React from "react";
import Sidebar from "../component/dashboard/Sidebar";
import Topbar from "../component/dashboard/Topbar";


export const metadata = {
  title: "Dashboard | SwiftTop",
  description: "Manage your account and transactions easily.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

