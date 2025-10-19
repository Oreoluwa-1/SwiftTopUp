"use client";

import { ShieldCheck, Zap, Handshake } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#F7931A]" />,
      title: "Secure Transactions",
      desc: "Your safety comes first. Every payment is protected with bank-grade encryption and multi-factor authentication, so you can fund your wallet and pay with total confidence.",
    },
    {
      icon: <Zap className="w-10 h-10 text-[#4C9BFF]" />,
      title: "Instant Delivery",
      desc: "No more waiting or failed attempts. Whether you're buying data, topping up airtime, or paying bills, your transactions are processed and confirmed in seconds.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-[#3BB273]" />,
      title: "Trusted & Reliable",
      desc: "Thousands of users rely on us daily. Our system verifies every detail to eliminate errors, ensuring your money always goes exactly where it should.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1B33] mb-4">
          Why choose <span className="text-[#0C1B33]">SwiftTop?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We’re more than just a payment platform — we’re your trusted partner
          for secure, instant, and reliable digital transactions.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#0C1B33] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
