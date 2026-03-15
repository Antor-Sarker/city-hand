"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./searchResult";

export default function Navbar({ searchInput, setSearchInput }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const inputRef = useRef(null);
  const pathName = usePathname();

  // close mobile menu when change path name
  useEffect(() => {
    setMobileOpen(false);
  }, [pathName]);

  async function handelSearch(input) {
    //for production build time 
    if (process.env.NEXT_PHASE === "phase-production-build") return [];

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services?search=${input}`
    );
    const results = await res.json();
    setSearchResult(results);
    setSearchInput(input);
  }

  function handelClearSearch() {
    setSearchInput("");
    inputRef.current.value = "";
  }

  const activeLinkStyle =
    "relative px-4 py-2 text-sm font-semibold text-red-500 rounded-lg after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-500 after:rounded-full";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 bg-linear-to-br from-white/95 via-white to-red-50 backdrop-blur-md border-b border-gray-100">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-end gap-0.5 shrink-0">
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            City
          </span>
          <span className="font-extrabold text-xl tracking-tight text-red-500">
            Hand
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mb-1 ml-0.5" />
        </Link>

        {/* Search */}
        <div className="relative flex-1 max-w-xs hidden md:block">
          <svg
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
              searchFocused ? "text-red-500" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search services..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            onChange={(e) => handelSearch(e.target.value)}
            ref={inputRef}
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 border-2 border-transparent rounded-xl outline-none text-gray-800 placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={
              pathName === "/"
                ? activeLinkStyle
                : "px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            }
          >
            Home
          </Link>
          <Link
            href="/services?category=all"
            className={
              pathName === "/services"
                ? activeLinkStyle
                : "px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            }
          >
            Services
          </Link>
          <Link
            href="/my-booking"
            className={
              pathName === "/my-booking"
                ? activeLinkStyle
                : "px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            }
          >
            My Booking
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:text-red-500 hover:border-red-400 hover:bg-red-50 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-sm font-semibold text-white bg-red-500 rounded-xl shadow-[0_2px_10px_rgba(239,68,68,0.3)] hover:bg-red-600 hover:shadow-[0_4px_16px_rgba(239,68,68,0.4)] hover:-translate-y-px active:translate-y-0 transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button*/}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200"
        >
          {mobileOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-1">
          {/* Mobile Search */}
          <div className="relative mb-3">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              onChange={(e) => handelSearch(e.target.value)}
              ref={inputRef}
              type="text"
              placeholder="Search services..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-gray-100 border-2 border-transparent rounded-xl outline-none placeholder-gray-400 transition-all duration-200 focus:bg-white focus:border-red-500"
            />
          </div>

          {/* Mobile Nav Links */}
          <Link
            href="/"
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/services"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            Services
          </Link>
          <Link
            href="/my-booking"
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/my-booking"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            My Booking
          </Link>

          {/* Mobile Auth */}
          <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
            <Link
              href="/login"
              className="flex-1 text-center py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:text-red-500 hover:border-red-400 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center py-2.5 text-sm font-semibold text-white bg-red-500 rounded-xl shadow-[0_2px_10px_rgba(239,68,68,0.25)] hover:bg-red-600 transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* search results */}
      {searchInput && (
        <SearchModal
          searchInput={searchInput}
          searchResult={searchResult}
          handelClearSearch={handelClearSearch}
        />
      )}
    </nav>
  );
}
