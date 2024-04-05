"use client"
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/">
          <div className="flex-shrink-0 mr-6 cursor-pointer">
            <img className="h-10" src="/logo/cue.png" alt="cue" />
          </div>
        </Link>
        <div className="hidden md:flex items-baseline space-x-6">
          <Link href="/features">
            <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-300">
              Features
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-300">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;