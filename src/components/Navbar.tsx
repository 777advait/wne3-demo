import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="px-12 py-8">
      <Link
        href="/"
        className="font-russoOne bg-[linear-gradient(90deg,_rgb(156,_109,_255),_rgb(223,_95,_255))] bg-clip-text text-4xl font-extrabold text-transparent"
      >
        Live
      </Link>
    </nav>
  );
}
