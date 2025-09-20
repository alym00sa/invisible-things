"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/orbit", label: "Orbit" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-white hover:opacity-70 transition-opacity duration-200 font-inter font-bold text-sm uppercase tracking-wider ${
              pathname === link.href ? "opacity-100" : "opacity-60"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}