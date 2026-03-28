import { useUserData } from "@/context/authContex";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ inputRef }) {
  const { userData, logOut } = useUserData();
  const pathName = usePathname();

  return (
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

      {/* public Nav Links */}
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

      {/* for loged in user*/}
      {userData ? (
        <>
          {/* for common role user*/}
          <Link
            href={`${userData.role === "client" ? "/client/dashboard/profile" : "/admin/dashboard/profile"}`}
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/client/dashboard/profile" ||
              pathName === "/admin/dashboard/profile"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            Profile
          </Link>
          <Link
            href={`${userData.role === "client" ? "/client/dashboard" : "/admin/dashboard"}`}
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/client/dashboard" ||
              pathName === "/admin/dashboard"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href={`${userData?.role === "client" ? "/client/dashboard/my-booking" : "/admin/dashboard/bookings"}`}
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/client/dashboard/my-booking" ||
              pathName === "/admin/dashboard/bookings"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            {userData?.role === "client" ? "My Booking" : "Manage Booking"}
          </Link>

          {/* for admin */}
          {userData.role === "admin" && (
            <>
              <Link
                href="/admin/dashboard/service-list"
                className={`px-3 py-3 text-sm rounded-xl ${
                  pathName === "/admin/dashboard/service-list"
                    ? "font-semibold text-red-500 bg-red-50"
                    : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                }`}
              >
                Manage Service
              </Link>

              <Link
                href="/admin/dashboard/clients"
                className={`px-3 py-3 text-sm rounded-xl ${
                  pathName === "/admin/dashboard/clients"
                    ? "font-semibold text-red-500 bg-red-50"
                    : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                }`}
              >
                Clients
              </Link>
            </>
          )}

          <button
            className="flex-1 py-2.5 px-5 w-max text-left text-sm font-semibold text-red-500 rounded-xl shadow-[0_2px_10px_rgba(239,68,68,0.25)] transition-all duration-200"
            onClick={() => logOut()}
          >
            Log out
          </button>
        </>
      ) : (
        <>
          {/* without login */}
          <Link
            href="/client/dashboard/my-booking"
            className={`px-3 py-3 text-sm rounded-xl ${
              pathName === "/client/dashboard/my-booking"
                ? "font-semibold text-red-500 bg-red-50"
                : "font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            }`}
          >
            My Booking
          </Link>
          {/* log in and sign up */}
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
        </>
      )}
    </div>
  );
}
