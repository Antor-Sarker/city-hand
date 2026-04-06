import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import UserIcon from "./userIcon";

export default function UserMenu({ userData, logOut }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  //close menu for out side click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative hidden md:block" ref={ref}>
      {/* User Button */}
      <button
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all"
      >
        <div className="w-7 h-7 rounded-full bg-red-700 flex items-center justify-center shrink-0">
          <UserIcon />
        </div>
        <span className="text-[13px] font-medium text-gray-800">
          {userData.name.split(" ")[0]}
        </span>
        <svg
          className="w-3.5 h-3.5 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-[calc(100%+6px)] w-52 bg-white border border-gray-100 rounded-xl shadow-lg shadow-black/5 p-1.5 z-50">
          <div className="px-3 py-2 border-b border-gray-100 mb-1">
            <p className="text-[13px] font-medium text-gray-900">
              {userData?.name}
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {userData?.email}
            </p>
          </div>

          <Link
            onClick={() => setOpen(false)}
            href={`${userData?.role === "client" ? "/client/dashboard/profile" : "/admin/dashboard/profile"}`}
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            Profile
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href={`${
              userData?.role === "client"
                ? "/client/dashboard"
                : "/admin/dashboard"
            }`}
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            Dashboard
          </Link>

          <div className="h-px bg-gray-100 my-1" />
          <button
            className="w-full flex items-center gap-2 text-[13px] text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            onClick={() => logOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
