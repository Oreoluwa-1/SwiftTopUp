"use client";

import {
  Search,
  Bell,
  Menu,
  X,
  LayoutDashboard,
  Users,
  Tag,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mounted, setMounted] = useState(false); // 👈 NEW
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Referrals", href: "/dashboard/referrals", icon: Users },
    { label: "Price List", href: "/dashboard/price-list", icon: Tag },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  if (!mounted) return null; 

  return (
    <>
      {/*  TOP BAR */}
      <header className="flex justify-between items-center bg-white shadow-sm px-4 md:px-6 py-4 sticky top-0 z-30">
        <h1 className="text-sm md:text-2xl text-gray-700">
          Welcome back, <span className="font-semibold">Ifunanya</span>
        </h1>

        <div className="flex items-center gap-4">
          {/* Search Icon (Mobile) */}
          <div className="relative md:hidden">
            <Search
              size={20}
              className="text-gray-700 cursor-pointer"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            {showSearch && (
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-md rounded-md border border-gray-200 p-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-1">
                  <Search size={16} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm w-full outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center border border-gray-200 rounded-md px-3 py-1.5 bg-gray-50">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search anything"
              className="text-sm outline-none w-48 bg-transparent placeholder-gray-400 text-gray-700"
            />
          </div>

          <Bell size={20} className="text-gray-600 hidden md:block cursor-pointer" />

          <Image
            src="/profile-image.svg"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover hidden md:block"
          />

          <Menu
            size={24}
            className="text-gray-700 cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between p-5 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="SwiftTop Logo" width={30} height={30} />
            <h1 className="text-lg font-semibold text-gray-800">SwiftTop</h1>
          </div>
          <X
            size={22}
            className="cursor-pointer text-gray-600"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-3 text-base font-medium px-3 py-2 rounded-md text-left transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-gray-100 mt-6 pt-5">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/profile-image.svg"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">
                Chukwuemeka Blessing
              </h4>
              <button className="text-xs text-blue-600 hover:underline">
                View Profile
              </button>
            </div>
          </div>
          <button
            onClick={() => alert("Logged out")}
            className="flex items-center gap-3 text-gray-600 hover:text-red-600 text-sm font-medium px-3 py-2 rounded-md transition"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}
