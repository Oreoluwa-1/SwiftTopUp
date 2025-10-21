"use client";

import { Wifi, Phone, Zap, Tv } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: Wifi,
    label: "Buy data",
    desc: "Purchase bundles instantly",
    href: "/buy-data",
    bg: "bg-[#DFF3FF]",
    iconColor: "text-[#027FFF]",
  },
  {
    icon: Phone,
    label: "Buy airtime",
    desc: "Top up any number",
    href: "/buy-airtime",
    bg: "bg-[#FFE2CC]",
    iconColor: "text-[#EB6200]",
  },
  {
    icon: Zap,
    label: "Buy electricity",
    desc: "Electricity & utilities",
    href: "/buy-electricity",
    bg: "bg-[#FFF1F1]",
    iconColor: "text-[#B81922]",
  },
  {
    icon: Tv,
    label: "TV",
    desc: "Cable TV subscription",
    href: "/buy-tv",
    bg: "bg-[#B6F6C8]",
    iconColor: "text-[#166F31]",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="font-medium text-gray-800 mb-4">Quick actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg border p-4 hover:border-blue-500 hover:shadow-sm transition cursor-pointer text-center group"
            >
              <div
                className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} group-hover:opacity-90 transition`}
              >
                <Icon size={20} className={item.iconColor} />
              </div>
              <p className="font-medium text-gray-800 group-hover:text-blue-600">
                {item.label}
              </p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
