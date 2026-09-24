"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Faculties", href: "/staff" },
    { name: "Council members", href: "/council" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="top-header sticky top-0 z-50 w-full h-[85px] flex items-center px-5 md:px-10 bg-white/12 backdrop-blur-md border-b border-white/20">
      <div className="nav-container w-full max-w-[1500px] mx-auto flex items-center justify-between">
        {/* LEFT: LOGOS */}
        <div className="navbar-logos flex items-center gap-3 shrink-0">
          <Link href="/" className="navbar-logo w-[65px] h-[65px] flex items-center justify-center">
            <img
              src="/images/mcwlogo.png"
              alt="College Logo"
              className="w-[60px] h-[60px] object-contain transition-transform duration-300 hover:scale-108"
            />
          </Link>
          <Link href="/" className="navbar-logo w-[65px] h-[65px] flex items-center justify-center">
            <img
              src="/images/logo3.png"
              alt="MI Club Logo"
              className="w-[60px] h-[60px] object-contain transition-transform duration-300 hover:scale-108"
            />
          </Link>
        </div>

        {/* CENTER: DESKTOP MENU */}
        <nav className="hidden lg:flex items-center justify-center gap-8 md:gap-14 mx-8 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[18px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive ? "text-white font-semibold underline underline-offset-8" : "text-[#d4d6e1] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: SIGN IN */}
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="signin bg-[#35247b] text-white px-[23px] py-[12px] rounded-lg text-[15px] font-medium whitespace-nowrap transition-all duration-300 hover:bg-[#1d70e5] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1d70e5]/25"
          >
            Sign In →
          </Link>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[85px] left-0 w-full bg-[#1e1b4b]/95 backdrop-blur-xl border-b border-white/20 py-4 px-6 flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[16px] font-medium py-1 text-center ${
                pathname === link.href ? "text-white font-bold" : "text-[#d4d6e1] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
