'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I fund my wallet?',
    answer:
      'You can fund your wallet using bank transfer, card payment, or USSD. Each user gets a unique virtual account number for instant top-ups.',
  },
  {
    question: 'How fast are transactions?',
    answer:
      'Transactions are processed instantly, but network delays can cause slight variations.',
  },
  {
    question: 'Is my money safe?',
    answer:
      'Yes, your funds are securely stored and protected using bank-grade encryption and security standards.',
  },
  {
    question: 'Do I earn rewards for referrals?',
    answer:
      'Yes, you earn points and bonuses for every successful referral. Terms and conditions apply.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-4 py-20 md:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#0F0F0F] md:text-4xl">
          Find clear answers <br className="hidden md:block" />
          <span className="text-[#0F0F0F] ">for your Important Questions</span>
         
        </h2>
        <p className="mb-10 text-[#475467]">
          Find quick answers to common questions, explore solutions and get clear
          guidance to enhance your overall experiences.
        </p>

        <div className="space-y-3 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-lg border transition-colors ${
                  isOpen
                    ? 'border-[#1D4ED8] bg-[#F0F7FF]'
                    : 'border-[#E5E7EB] bg-[#FAFAFA]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-[#0F0F0F] font-medium"
                >
                  {faq.question}
                  {isOpen ? (
                    <Minus className="h-5 w-5 " />
                  ) : (
                    <Plus className="h-5 w-5 " />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 text-[#475467] text-sm md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
