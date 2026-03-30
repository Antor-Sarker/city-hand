"use client";

import { useUserData } from "@/context/authContex";
import api from "@/lib/api";
import { useEffect } from "react";

function IconCalendar({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}
function IconClock({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconCheck({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
function IconXCircle({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
function IconTrending({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function IconChevron({ size = 15, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
function IconWrench({ size = 14, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconArrowUpRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const stats = [
  {
    label: "Total Bookings",
    value: 8,
    icon: IconCalendar,
    color: "bg-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    change: "+2 this month",
  },
  {
    label: "Pending",
    value: 2,
    icon: IconClock,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    change: "Awaiting confirmation",
  },
  {
    label: "Completed",
    value: 3,
    icon: IconCheck,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    change: "+1 this week",
  },
  {
    label: "Cancelled",
    value: 1,
    icon: IconXCircle,
    color: "bg-gray-400",
    lightColor: "bg-gray-50",
    textColor: "text-gray-500",
    change: "Last 30 days",
  },
];

const recentBookings = [
  {
    id: "#BK-0041",
    service: "AC Repair & Servicing",
    provider: "Karim Electric",
    date: "Mar 25, 2025",
    time: "10:00 AM",
    status: "pending",
    price: "৳1,200",
  },
  {
    id: "#BK-0040",
    service: "Home Deep Cleaning",
    provider: "CleanPro BD",
    date: "Mar 22, 2025",
    time: "9:00 AM",
    status: "completed",
    price: "৳2,500",
  },
  {
    id: "#BK-0039",
    service: "Plumbing Fix",
    provider: "Dhaka Plumbers",
    date: "Mar 18, 2025",
    time: "2:00 PM",
    status: "completed",
    price: "৳800",
  },
  {
    id: "#BK-0038",
    service: "Electrician Visit",
    provider: "Volt BD",
    date: "Mar 15, 2025",
    time: "11:30 AM",
    status: "cancelled",
    price: "৳600",
  },
  {
    id: "#BK-0037",
    service: "Painting Service",
    provider: "ColorCraft",
    date: "Mar 10, 2025",
    time: "8:00 AM",
    status: "completed",
    price: "৳4,500",
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-amber-100 text-amber-700 border border-amber-200",
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

export default function Dashboard() {
  // const { userData } = useUserData();
useEffect(()=>{
  (async function (){
    const res = await api.get("/api/user/bookings")
    console.log(res)

  })()

},[])

  return (
    <div>cliend dashboard</div>
    // <div className="min-h-screen bg-gray-50/60 px-6 lg:px-8 py-8 max-w-6xl mx-auto">
    //   {/* Welcome Banner */}
    //   <div className="rounded-2xl bg-red-600 p-6 lg:p-8 mb-8 shadow-lg shadow-red-200">
    //     <p className="text-red-100 text-sm font-medium mb-1">Welcome back</p>
    //     <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
    //       {userData?.name}
    //     </h2>
    //     <p className="text-red-50 text-sm mt-2 max-w-xs">
    //       You have{" "}
    //       <span className="font-semibold text-white">2 pending bookings</span>{" "}
    //       waiting for confirmation.
    //     </p>
    //     <button className="mt-4 flex items-center gap-2 bg-white text-red-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-50 transition-colors cursor-pointer">
    //       View Bookings <IconChevron size={15} />
    //     </button>
    //   </div>

    //   {/* Stats Grid */}
    //   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    //     {stats.map(
    //       ({ label, value, icon: Icon, lightColor, textColor, change }) => (
    //         <div
    //           key={label}
    //           className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
    //         >
    //           <div className="flex items-start justify-between mb-4">
    //             <div
    //               className={`w-11 h-11 rounded-xl ${lightColor} flex items-center justify-center`}
    //             >
    //               <Icon size={20} className={textColor} />
    //             </div>
    //             <IconArrowUpRight className="text-gray-300" />
    //           </div>
    //           <p className="text-3xl font-bold text-gray-900 tracking-tight">
    //             {value}
    //           </p>
    //           <p className="text-sm font-medium text-gray-600 mt-0.5">
    //             {label}
    //           </p>
    //           <p className={`text-xs mt-2 font-medium ${textColor} opacity-80`}>
    //             {change}
    //           </p>
    //         </div>
    //       ),
    //     )}
    //   </div>

    //   {/* Progress Overview */}
    //   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
    //     <div className="flex items-center justify-between mb-5">
    //       <div className="flex items-center gap-2">
    //         <IconTrending className="text-red-600" />
    //         <h3 className="text-base font-bold text-gray-900">
    //           Booking Overview
    //         </h3>
    //       </div>
    //       <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
    //         8 Total
    //       </span>
    //     </div>
    //     <div className="space-y-4">
    //       {[
    //         { label: "Completed", value: 3, total: 8, color: "bg-emerald-500" },
    //         { label: "Pending", value: 2, total: 8, color: "bg-amber-400" },
    //         { label: "Cancelled", value: 1, total: 8, color: "bg-gray-300" },
    //       ].map(({ label, value, total, color }) => (
    //         <div key={label}>
    //           <div className="flex justify-between items-center mb-1.5">
    //             <span className="text-sm text-gray-600 font-medium">
    //               {label}
    //             </span>
    //             <span className="text-sm font-bold text-gray-800">
    //               {value}
    //               <span className="text-gray-400 font-normal"> / {total}</span>
    //             </span>
    //           </div>
    //           <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
    //             <div
    //               className={`${color} h-2.5 rounded-full transition-all duration-700`}
    //               style={{ width: `${(value / total) * 100}%` }}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Recent Bookings Table */}
    //   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    //     <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
    //       <div className="flex items-center gap-2">
    //         <IconCalendar className="text-red-600" />
    //         <h3 className="text-base font-bold text-gray-900">
    //           Recent Bookings
    //         </h3>
    //       </div>
    //       <button className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors">
    //         View All <IconChevron size={13} />
    //       </button>
    //     </div>

    //     {/* Desktop Table */}
    //     <div className="hidden md:block overflow-x-auto">
    //       <table className="w-full">
    //         <thead>
    //           <tr className="bg-gray-50/70 border-b border-gray-100">
    //             {[
    //               "Booking ID",
    //               "Service",
    //               "Provider",
    //               "Date",
    //               "Amount",
    //               "Status",
    //             ].map((h) => (
    //               <th
    //                 key={h}
    //                 className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3.5"
    //               >
    //                 {h}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody className="divide-y divide-gray-50">
    //           {recentBookings.map((b) => (
    //             <tr
    //               key={b.id}
    //               className="hover:bg-red-50/30 transition-colors group"
    //             >
    //               <td className="px-6 py-4 text-sm font-bold text-red-600">
    //                 {b.id}
    //               </td>
    //               <td className="px-6 py-4">
    //                 <div className="flex items-center gap-2.5">
    //                   <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
    //                     <IconWrench size={14} className="text-red-500" />
    //                   </div>
    //                   <span className="text-sm font-semibold text-gray-800">
    //                     {b.service}
    //                   </span>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 text-sm text-gray-500 font-medium">
    //                 {b.provider}
    //               </td>
    //               <td className="px-6 py-4">
    //                 <p className="text-sm text-gray-700 font-medium">
    //                   {b.date}
    //                 </p>
    //                 <p className="text-xs text-gray-400">{b.time}</p>
    //               </td>
    //               <td className="px-6 py-4 text-sm font-bold text-gray-800">
    //                 {b.price}
    //               </td>
    //               <td className="px-6 py-4">
    //                 <span
    //                   className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${statusConfig[b.status].className}`}
    //                 >
    //                   {statusConfig[b.status].label}
    //                 </span>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>

    //     {/* Mobile Cards */}
    //     <div className="md:hidden divide-y divide-gray-50">
    //       {recentBookings.map((b) => (
    //         <div
    //           key={b.id}
    //           className="px-5 py-4 hover:bg-red-50/20 transition-colors"
    //         >
    //           <div className="flex items-start justify-between mb-2">
    //             <div className="flex items-center gap-2.5">
    //               <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
    //                 <IconWrench size={15} className="text-red-500" />
    //               </div>
    //               <div>
    //                 <p className="text-sm font-bold text-gray-800">
    //                   {b.service}
    //                 </p>
    //                 <p className="text-xs text-gray-400">{b.provider}</p>
    //               </div>
    //             </div>
    //             <span
    //               className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-semibold ${statusConfig[b.status].className}`}
    //             >
    //               {statusConfig[b.status].label}
    //             </span>
    //           </div>
    //           <div className="flex items-center justify-between mt-2 pl-11">
    //             <div className="flex items-center gap-3">
    //               <span className="text-xs font-bold text-red-600">{b.id}</span>
    //               <span className="text-xs text-gray-400">
    //                 {b.date} · {b.time}
    //               </span>
    //             </div>
    //             <span className="text-sm font-bold text-gray-800">
    //               {b.price}
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
