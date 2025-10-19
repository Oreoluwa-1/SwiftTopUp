import { Facebook, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {/*  Logo and Description*/}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-md  p-2">
              <Image src={'/logo.svg'} width={24} height={24}
              alt={'logo'}
              ></Image>
            </div>
            <h2 className="text-lg font-semibold">SwiftTop</h2>
          </div>

          <p className="text-sm text-[#D1D5DB] leading-relaxed max-w-xs">
            Reliable Data is your trusted partner for fast, secure, and seamless
            digital payments — from buying data and airtime to paying bills and
            cable subscriptions, with more financial solutions on the way.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="#"
              className="rounded-md bg-[#1F1F1F] p-2 hover:bg-[#2563EB] transition"
            >
              <Facebook className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-md bg-[#1F1F1F] p-2 hover:bg-[#2563EB] transition"
            >
              <Twitter className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-md bg-[#1F1F1F] p-2 hover:bg-[#2563EB] transition"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-md bg-[#1F1F1F] p-2 hover:bg-[#2563EB] transition"
            >
              <Instagram className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-medium">About us</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        {/*  Policy Links */}
        <div>
          <h3 className="mb-4 font-medium">Privacy & Policy</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li>
              <Link href="#">Terms & Condition</Link>
            </li>
          </ul>
        </div>

        {/*  Contact Info */}
        <div className="text-sm text-[#D1D5DB]">
          <p className="mb-4 font-medium text-white">info@swifttop.com</p>
          <p>No 7, 123 Ademola Adetokunto Street, Wuse 2, Abuja</p>
        </div>
      </div>

      {/*  Bottom Line */}
      <div className="mt-12 border-t border-[#1F2937] pt-6 text-center text-xs text-[#9CA3AF]">
        © 2025 SwiftTop. All rights reserved.
      </div>
    </footer>
  );
}
