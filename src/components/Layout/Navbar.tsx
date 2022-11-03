import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full shadow-sm">
      <div className="max-w-[90%] mx-auto w-full flex justify-between items-center py-6">
        <div className="logo">
          <Link href="/">
            <img src="/logo.svg" alt="Kontist Movie" />
          </Link>
        </div>

        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link href="/" className="text-gray-900 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-900 hover:text-gray-900">
              Landing page
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-900 hover:text-gray-900">
              Top 10 Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
