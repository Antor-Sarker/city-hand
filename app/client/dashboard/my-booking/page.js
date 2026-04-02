"use client";
import BookingTable from "@/components/dashboard/bookingTable";
import api from "@/lib/api";
import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await api.get("/api/user/bookings");
        setBookingData(res?.data);
      } catch (error) {
        console.log("booking data not found");
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/60 px-6 lg:px-8 py-8 max-w-6xl mx-auto">
      {/* Bookings Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <BookingTable bookings={bookingData} />
      </div>
    </div>
  );
}