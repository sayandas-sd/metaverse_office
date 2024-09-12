import React from "react";
import Link from "next/link"; // Import the Link component

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-lg py-4 rounded-xl">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        {/* Navbar Links */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 text-base">
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/career"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Careers
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Blog
          </Link>
        </div>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#5854b2] transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
