"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },   
  { href: "/music", label: "Music" },
  { href: "/blog", label: "Blog" },
  { href: "/drawings", label: "Drawings" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-2 flex gap-4 text-sm">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              "transition-colors " +
              (isActive
                ? "text-cyan-300"
                : "text-slate-300 hover:text-cyan-300")
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}