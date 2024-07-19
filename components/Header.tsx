"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <header className="flex h-20 w-full items-center justify-between bg-black bg-opacity-20 px-4 backdrop-blur-[25px] max-md:pt-1 md:px-16">
      <div className="flex w-full items-center justify-between gap-5 max-md:flex-wrap">
        <Image
          src="/header-logo.png"
          alt="header-logo"
          width={87}
          height={54}
        />

        <nav className="my-auto flex min-w-max gap-5 text-lg text-[#E4E6F2] max-md:hidden">
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Process</Link>
          <Link href="#">Work</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">FAQs</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#6881FF] p-2 text-sm md:hidden"
          >
            <Image
              src="/hamburger-icon.svg"
              alt="Hamburger Icon"
              width={50}
              height={80}
            />
          </button>

          <button className="min-w-max rounded-xl border border-[#6881FF] px-4 py-3 text-[#FFFFFF]">
            Book a call
          </button>
        </div>
      </div>
      {isNavOpen ? (
        <HamburgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      ) : null}
    </header>
  );
}
