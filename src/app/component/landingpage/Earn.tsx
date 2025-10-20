import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Earn() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl font-semibold text-[#0F0F0F] md:text-3xl lg:text-3xl">
            Earn Rewards When You Invite Friends
          </h1>

          <p className="mt-6 text-[#36454F] text-sm md:text-base leading-relaxed">
            Share your referral link or code, and both you and your friend get
            rewarded when they complete their first transaction.
          </p>

          <p className="mt-6 text-[#36454F] text-sm md:text-base leading-relaxed">
            Turn your network into extra value. Every successful referral puts
            bonus credit into your wallet — ready to spend on data, airtime,
            bills, or cable. The more friends you invite, the more you earn.
          </p>

          <div className="mt-8">
            <Button href="/get-started">Start Referring</Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/Earn-image.svg"
            alt="image showing earning rewards"
            width={500}
            height={400}
            className="w-[80%] max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
