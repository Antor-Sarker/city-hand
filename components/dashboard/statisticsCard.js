import { useUserData } from "@/context/authContex";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconCalendar,
  IconCheck,
  IconClock,
  IconConfirmed,
  IconXCircle,
} from "./icons";

const stats = [
  {
    name: "total",
    label: "Total Bookings",
    icon: IconCalendar,
    color: "bg-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    name: "pending",
    label: "Pending",
    icon: IconClock,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    name: "confirmed",
    label: "Confirmed",
    icon: IconConfirmed,
    color: "bg-gray-400",
    lightColor: "bg-blue-50",
    textColor: "text-blue-500",
  },
  {
    name: "completed",
    label: "Completed",
    icon: IconCheck,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },

  {
    name: "cancelled",
    label: "Cancelled",
    icon: IconXCircle,
    color: "bg-gray-400",
    lightColor: "bg-red-50",
    textColor: "text-red-500",
  },
];

export default function StatisticsCard({ count }) {
  const { userData } = useUserData();
  return stats?.map((data) => (
    <Link
      href={
        userData?.role === "client"
          ? `/client/dashboard/my-booking?status=${data.name === "total" ? "all" : data.name}`
          : `/admin/dashboard/bookings?status=${data.name === "total" ? "all" : data.name}`
      }
      key={data?.label}
      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-11 h-11 rounded-xl ${data?.lightColor} flex items-center justify-center`}
        >
          {data?.icon(data?.textColor)}
        </div>
        <IconArrowUpRight className="text-gray-300" />
      </div>
      <p className="text-3xl font-bold text-gray-900 tracking-tight">
        {count[data?.name]}
      </p>
      <p className="text-sm font-medium text-gray-600 mt-0.5">{data?.label}</p>
    </Link>
  ));
}
