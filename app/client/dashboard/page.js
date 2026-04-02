"use client";

import BookingTable from "@/components/dashboard/bookingTable";
import { IconCalendar, IconChevron } from "@/components/dashboard/icons";
import StatisticsCard from "@/components/dashboard/statisticsCard";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [bookingData, setBookingData] = useState([]);
  const router = useRouter()
  useEffect(() => {
    try {
      (async function () {
        const res = await api.get("/api/user/bookings");
        setBookingData(res?.data);
        console.log(res)
      })();
    } catch (error) {
      console.log("booking data not found");
    }
  }, []);

  const count = {
    total: bookingData?.length,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  };
  bookingData?.forEach((data) => {
    count[data.status] += 1;
  });
  const bookings = bookingData.slice(0,3)

  return (
    <div className="min-h-screen bg-gray-50/60 px-6 lg:px-8 py-8 max-w-6xl mx-auto">
       

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <StatisticsCard count={count} />
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <IconCalendar className="text-red-600" />
            <h3 className="text-base font-bold text-gray-900">
              Recent Bookings
            </h3>
          </div>
          <button className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer" onClick={()=>router.push("/client/dashboard/my-booking")}>
            View All <IconChevron size={13} />
          </button>
        </div>
        <BookingTable bookings={bookings} />
      </div>
    </div>
  );
}
