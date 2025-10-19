
import Image from "next/image";

export default function EssentialFeatures() {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#0F0F0F] md:text-4xl">
          Essential Features
        </h2>
        <p className="mb-12 text-[#5E5E5E] md:text-lg">
          We’re more than just a payment platform — we’re your trusted partner
          for secure, instant, and reliable digital transactions.
        </p>

        {/* ==== Top Section ==== */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {/* Left Text Section */}
          <div className="rounded-2xl bg-[#F9FAFB] p-8 text-left shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold text-[#0F0F0F]">
              Fund Fast, Pay Instantly
            </h3>
            <p className="mb-4 text-[#5E5E5E]">
              Add money to your wallet in seconds using bank transfer, card, or
              USSD, and enjoy seamless payments across all services without
              re-entering your details every time.
            </p>
            <p className="mb-6 text-[#5E5E5E]">
              Every wallet comes with a unique virtual account number linked to
              your profile. When you fund it, payments reflect instantly and are
              verified for accuracy, giving you speed, security, and peace of
              mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
                <p className="font-medium text-[#0F0F0F]">
                  Multiple Funding Options
                </p>
                <p className="text-[#5E5E5E]">Bank Transfer, Card, or USSD.</p>
              </div>
              <div className="rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
                <p className="font-medium text-[#0F0F0F]">
                  Unique Virtual Account
                </p>
                <p className="text-[#5E5E5E]">
                  Your personal account number for instant top-ups.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex justify-center">
            <Image
             src={"/essential-image.svg"} 
            alt={"image"}
            width={500}
            height={100}
            ></Image>
          </div>
        </div>

        {/* ==== Bottom Section ==== */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {/* Left Image Placeholder */}
          <div className="flex justify-center">
           <Image
             src={"/essential-image2.svg"} 
            alt={"image"}
            width={500}
            height={100}
            ></Image>
          </div>

          {/* Right Text Section */}
          <div className="rounded-2xl bg-[#F9FAFB] p-8 text-left shadow-sm">
            <h3 className="mb-3 text-2xl font-semibold text-[#0F0F0F]">
              All Your Digital Payments in One Place
            </h3>
            <p className="mb-6 text-[#5E5E5E]">
              Buy data, top up airtime, pay electricity bills, and renew cable
              subscriptions — all from a single, secure wallet. Transactions are
              instant, reliable, and completely hassle-free.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
                <p className="font-medium text-[#0F0F0F]">Instant Transactions</p>
                <p className="text-[#5E5E5E]">
                  Payments delivered in seconds.
                </p>
              </div>
              <div className="rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
                <p className="font-medium text-[#0F0F0F]">Secure Wallet</p>
                <p className="text-[#5E5E5E]">
                  Bank-grade security for your money.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[#5E5E5E]">
              Every payment you make is verified and delivered instantly, so you
              never have to worry about delays or errors. Plus, you earn rewards
              when you invite friends — giving you more value with every
              transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
