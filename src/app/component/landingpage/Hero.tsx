'use client';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EAF3FF] via-white to-[#F5FFF7]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
        
        {/* LEFT TEXT */}
        <div className="flex-1 mt-10 lg:mt-0 text-center lg:text-left">
          <div className="flex gap-2 justify-center lg:justify-start font-normal mb-4">
            <p className="text-[#24A148]">Fast.</p>
            <p className="text-gray-700">Secure.</p>
            <p className="text-gray-700">Easy.</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C1B33] leading-tight mb-6">
            One <span className="text-[#0C1B33]">Wallet</span> for <br className="hidden sm:block" /> 
            All Your Digital Payments.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Fund your wallet once and enjoy seamless transactions for data bundles,
            airtime top-ups, electricity bills, and cable subscriptions — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href="/get-started">Get started</Button>
            <button className="border border-[#007aff] text-[#007aff] px-6 py-3 rounded-full font-medium hover:bg-[#007aff]/10 transition">
              See how it works
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-10 lg:mt-0">
          <Image
            src="/hero image (2).svg"
            alt="hero image"
            width={500}
            height={500}
            className="w-[300px] sm:w-[400px] lg:w-[600px] h-auto"
          />
        </div>

      </div>
    </section>
  );
}
