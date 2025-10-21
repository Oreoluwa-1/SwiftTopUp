"use client";

import {
  LayoutDashboard,
  Users,
  Tag,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const topMenu = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Referrals", href: "/dashboard/referrals", icon: Users },
  { label: "Price List", href: "/dashboard/price-list", icon: Tag },
];

const middleMenu = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Log out", href: "/dashboard/logout", icon: LogOut },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col bg-white shadow-sm h-screen w-60 p-5">
      {/* LOGO SECTION */}
      <div className="flex items-center gap-2 mb-10">
        <Image
          src="/logo.svg"
          alt="SwiftTop Logo"
          width={30}
          height={30}
        />
        <h1 className="text-lg font-semibold text-gray-800">SwiftTop</h1>
      </div>

      {/* MAIN MENU */}
      <nav className="flex flex-col gap-1">
        {topMenu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* SETTINGS and LOGOUT */}
      <div className="mt-10 flex flex-col gap-1">
        <div className="my-3 h-px bg-gray-100" />
        {middleMenu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              } ${item.label === "Log out" ? "hover:text-red-600" : ""}`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* PROFILE AT BOTTOM */}
      <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4">
        <Image
          src="/profile-image.svg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-sm font-medium text-gray-800">
            Ifunaya Eze
          </h2>
          <Link
            href="/profile"
            className="text-xs text-blue-600 hover:underline"
          >
            View Profile
          </Link>
        </div>
      </div>
    </aside>
  );
}
