import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function HamburgerMenu({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const menuItems = ["About", "Services", "Process", "Work", "Pricing", "FAQs"];

  return (
    <div
      className={`absolute right-4 top-24 z-50 flex flex-col rounded-lg bg-[#101C5C] p-4 font-medium shadow-lg max-md:w-48 md:hidden ${isNavOpen ? "block" : "hidden"}`}
    >
      {menuItems.map((menu, index) => (
        <Link
          key={index}
          href="#"
          className="rounded px-4 py-2 text-white transition duration-200 hover:bg-[#6A35FF]"
          onClick={() => setIsNavOpen(false)}
        >
          {menu}
        </Link>
      ))}
    </div>
  );
}
