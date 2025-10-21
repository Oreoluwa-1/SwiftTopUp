"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` flex justify-between items-center p-6 bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 ml-5 sm:ml-14">
        <Image src="/logo.svg" alt="logo" width={50} height={100} />
        <h1 className="font-semibold text-[#36454F] text-2xl">SwiftTopUp</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex gap-10 text-[#36454F] font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-1 hover:text-[#007aff] transition ${
              pathname === link.href ? "text-[#007aff]" : ""
            }`}
          >
            {link.name}
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#007aff] transition-all duration-300 ${
                pathname === link.href ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* CTA Button (Desktop) */}
      <div className="hidden sm:block mr-5 sm:mr-14">
        <Button href="/get-started">Get started</Button>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="sm:hidden mr-4">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-7 h-7 text-[#36454F]" /> : <Menu className="w-7 h-7 text-[#36454F]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-white z-50 flex flex-col items-center gap-6 py-6 sm:hidden shadow-md transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`relative pb-1 hover:text-[#007aff] transition ${
              pathname === link.href ? "text-[#007aff]" : ""
            }`}
          >
            {link.name}
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#007aff] transition-all duration-300 ${
                pathname === link.href ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        ))}
        <Button href="/get-started">Get started</Button>
      </div>
    </nav>
  );
}
