import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="border-b px-8 py-4">
      <Link href="/" className="font-inter text-2xl font-semibold">
        WNE3 <span className="text-accent">Live</span>
      </Link>
    </nav>
  );
}
