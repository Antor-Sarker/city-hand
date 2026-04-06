import { get5DigitId } from "@/utils/get5DigitId";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditBookingModal from "../service/editBookingModal";
import BookingDetailsModal from "./bookingDetailsModal";
import EmptyBooking from "./emptyBooking";
import { EyeIcon, IconCalendar, PencilIcon } from "./icons";

const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },
  completed: {
    label: "Completed",
    className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-100 text-red-500 border border-gray-200",
  },
};

export default function BookingTable({ bookings, setBookingData }) {
  const [detailsModalData, setDetailsModalData] = useState(null);
  const [editBookingData, setEditBookingData] = useState(null);
  const [filteredBookings, setFilteredBookings] = useState(null);
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const status = searchParam.get("status") ?? "all";

  useEffect(() => {
    const data =
      status === "all"
        ? bookings
        : bookings.filter((booking) => booking.status === status);
    setFilteredBookings(data);
  }, [bookings, status]);

  // bookings filter
  function handelFilter(e) {
    const filterBy = e.target.value;
    router.push(pathName + `?status=${filterBy}`);
  }

  return (
    <>
      {/* view booking details */}
      {detailsModalData && (
        <BookingDetailsModal
          data={detailsModalData}
          setData={setDetailsModalData}
        />
      )}

      {/* edit booking  */}
      {editBookingData && (
        <EditBookingModal
          data={editBookingData}
          onClose={() => setEditBookingData(null)}
          bookings={bookings}
          setBookingData={setBookingData}
        />
      )}
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        {searchParam.get("status") && (
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <IconCalendar className="text-red-600" />
              <h3 className="text-base font-bold text-gray-900">Bookings</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:block">
                Filter by:
              </span>
              <select
                value={status}
                className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                onChange={handelFilter}
              >
                <option>all</option>
                <option>pending</option>
                <option>confirmed</option>
                <option>completed</option>
                <option>cancelled</option>
              </select>
            </div>
          </div>
        )}

        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-100">
              {["Booking ID", "Service", "Date", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3.5"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          {/* bookins data */}
          <tbody className="divide-y divide-gray-50">
            {filteredBookings?.map((booking) => (
              <tr
                key={booking?._id}
                className="hover:bg-red-50/30 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-bold text-red-600">
                  {get5DigitId(booking?._id)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-semibold text-gray-800">
                      {booking?.serviceName}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <p className="text-sm text-gray-700 font-medium">
                    {booking?.bookingDate}
                  </p>
                  <p className="text-xs text-gray-400">
                    {booking?.bookingTime}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${statusConfig[booking?.status]?.className}`}
                  >
                    {statusConfig[booking?.status]?.label}
                  </span>
                </td>

                {/* actions */}
                <td className="px-6 py-4 flex gap-1">
                  {/* View Button */}
                  <button
                    className="flex items-center gap-1 px-2.5 py-1 text-sm bg-violet-100 text-violet-600 rounded hover:bg-violet-200 transition cursor-pointer"
                    onClick={() => setDetailsModalData(booking)}
                  >
                    <EyeIcon />
                    View
                  </button>

                  {/* Edit Button */}
                  <button
                    className="flex items-center gap-1 px-2.5 py-1 text-sm bg-rose-100 text-rose-600 rounded hover:bg-rose-200 transition cursor-pointer"
                    onClick={() => setEditBookingData(booking)}
                  >
                    <PencilIcon />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-50">
        {searchParam.get("status") && (
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <IconCalendar className="text-red-600" />
              <h3 className="text-base font-bold text-gray-900">Bookings</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:block">
                Filter by:
              </span>
              <select
                value={status}
                className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
                onChange={handelFilter}
              >
                <option>all</option>
                <option>pending</option>
                <option>confirmed</option>
                <option>completed</option>
                <option>cancelled</option>
              </select>
            </div>
          </div>
        )}
        {filteredBookings?.map((booking) => (
          <div
            key={booking?._id}
            className="px-5 py-4 hover:bg-red-50/20 transition-colors"
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <p className="text-sm font-bold text-gray-800">
                  {booking?.serviceName}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-semibold ${statusConfig[booking?.status]?.className}`}
              >
                {statusConfig[booking?.status]?.label}
              </span>
            </div>
            <div className="flex mt-2">
              <div className="flex gap-3">
                <span className="text-xs font-bold text-red-600">
                  {get5DigitId(booking?._id)}
                </span>
                <span className="text-xs text-gray-400">
                  {booking?.bookingDate} · {booking?.bookingTime}
                </span>
              </div>
            </div>

            {/* actions */}
            <div className="flex justify-between px-6 py-4 gap-1">
              {/* View Button */}
              <button
                className="flex items-center gap-1 p-1 text-xs bg-violet-100 text-violet-600 rounded"
                onClick={() => setDetailsModalData(booking)}
              >
                <EyeIcon />
                View
              </button>

              {/* Edit Button */}
              <button
                className="flex items-center gap-1 p-1 text-xs bg-rose-100 text-rose-600 rounded"
                onClick={() => setEditBookingData(booking)}
              >
                <PencilIcon />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* when booking is empty */}
      {bookings?.length === 0 && <EmptyBooking />}
    </>
  );
}
