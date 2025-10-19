"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Wifi,
  Smartphone,
  CreditCard,
  Tv,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Buy Data",
      icon: Wifi,
      desc: "Stay connected anytime. Purchase affordable data bundles across all major networks instantly.",
    },
    {
      title: "Airtime Top-Up",
      icon: Smartphone,
      desc: "Top-up airtime across all networks in seconds, with instant delivery.",
    },
    {
      title: "Pay Bills",
      icon: CreditCard,
      desc: "Pay your electricity, internet, and other utility bills securely and without delays.",
    },
    {
      title: "Cable TV Subscription",
      icon: Tv,
      desc: "Subscribe or renew your DSTV, GOTV, or Startimes in just one tap.",
    },
  ];

  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white px-4 py-20 md:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#0F0F0F] md:text-4xl">
          Our Services
        </h2>
        <p className="mb-12 text-[#5E5E5E] md:text-lg">
          We’re more than just a payment platform — we’re your trusted partner
          for secure, instant, and reliable digital transactions.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT (Accordion) */}
          <div className="space-y-4 text-left">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleService(index)}
                  className={`rounded-lg p-5 cursor-pointer transition ${
                    isActive ? "bg-[#4DA46F] text-white" : "bg-[#F9FAFB] text-[#0F0F0F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          isActive ? "text-white" : "text-[#4DA46F]"
                        }`}
                      />
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    {isActive ? (
                      <ChevronUp className="h-5 w-5 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#4DA46F]" />
                    )}
                  </div>

                  {isActive && (
                    <p className="mt-2 text-sm leading-relaxed">{service.desc}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT (Images) */}
          <div className="flex w-full justify-center gap-4 md:justify-end">
            <div className="flex flex-row items-center justify-center gap-4 sm:flex-row">
              <div className="rounded-xl bg-[#F9FAFB] p-3 shadow-sm mt-20">
                <Image
                  src="/service-image.svg"
                  alt="Buy data preview"
                  width={230}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div className="rounded-xl bg-[#F9FAFB] p-3 shadow-sm">
                <Image
                  src="/services-image2.svg"
                  alt="Buy data confirmation preview"
                  width={230}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
