import { get5DigitId } from "@/utils/get5DigitId";
import EmptyBooking from "./emptyBooking";
import { EyeIcon, PencilIcon } from "./icons";

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
    className: "bg-gray-100 text-gray-500 border border-gray-200",
  },
};

export default function BookingTable({ bookings }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
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
            {bookings?.map((booking) => (
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
                  <button className="flex items-center gap-1 px-2.5 py-1 text-sm bg-violet-100 text-violet-600 rounded hover:bg-violet-200 transition cursor-pointer">
                    <EyeIcon />
                    View
                  </button>

                  {/* Edit Button */}
                  <button className="flex items-center gap-1 px-2.5 py-1 text-sm bg-rose-100 text-rose-600 rounded hover:bg-rose-200 transition cursor-pointer">
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
        {bookings?.map((booking) => (
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
              <button className="flex items-center gap-1 p-1 text-xs bg-violet-100 text-violet-600 rounded">
                <EyeIcon />
                View
              </button>

              {/* Edit Button */}
              <button className="flex items-center gap-1 p-1 text-xs bg-rose-100 text-rose-600 rounded">
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
