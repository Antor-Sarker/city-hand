"use client";
import { useUserData } from "@/context/authContex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBooking,
  IconBriefcase,
  IconClients,
  IconGrid,
  IconLogout,
  IconUser,
} from "./icons";

const clientNavLinks = [
  { label: "Dashboard", href: "/client/dashboard", icon: IconGrid },
  {
    label: "My Bookings",
    href: "/client/dashboard/my-booking",
    icon: IconBooking,
  },
  {
    label: "Profile",
    href: "/client/dashboard/profile",
    icon: IconUser,
  },
];

const adminNavLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: IconGrid },
  {
    label: "Manage Bookings",
    href: "/admin/dashboard/bookings",
    icon: IconBooking,
  },
  {
    label: "Manage Service",
    href: "/admin/dashboard/service-list",
    icon: IconBriefcase,
  },
  {
    label: "Clients",
    href: "/admin/dashboard/clients",
    icon: IconClients,
  },
  {
    label: "Profile",
    href: "/admin/dashboard/profile",
    icon: IconUser,
  },
];

export default function Sidebar({ role }) {
  const pathName = usePathname();
  const { logOut } = useUserData();
  const navLinks = role === "client" ? clientNavLinks : adminNavLinks;
  return (
    <aside className="hidden basis-1/6 md:flex flex-col w-48 xl:w-64 2xl:w-80 min-h-screen bg-white border-r border-gray-100 top-0 left-0">
      {/* Nav links */}
      <nav className="flex px-3 py-6 flex-col gap-1">
        {navLinks?.map((navLink) => {
          return (
            <Link
              key={navLink?.href}
              href={navLink?.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                navLink?.href === pathName
                  ? "bg-red-600 text-white shadow-sm shadow-red-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {/* nav icon */}
              {navLink?.icon(
                `${navLink?.href === pathName ? "text-white" : "text-gray-400"}`,
              )}
              {navLink?.label}
            </Link>
          );
        })}

        {/* log out button */}
        <div
          className="px-3 py-4 border-t border-gray-100"
          onClick={() => logOut()}
        >
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer group">
            <p className="text-sm font-semibold text-gray-500 hover:text-red-800 truncate">
              Log out
            </p>
            <IconLogout className="text-gray-300 group-hover:text-red-500 transition-colors" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
