import { useUserData } from "@/context/authContex";
import { useRouter } from "next/navigation";

export default function EmptyBooking() {
  const { userData } = useUserData();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h2 className="text-xl font-semibold text-gray-700">
        {userData?.role === "client" ? "No bookings yet" : "No bookings found"}
      </h2>
      <p className="text-gray-500 mt-2">
        {userData?.role === "client"
          ? "You haven’t made any bookings yet. Start by booking a service."
          : `There are no bookings from users yet. Once users start booking
          services, they will appear here.`}
      </p>
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
        onClick={() => router.push("/services?category=all")}
      >
        {userData?.role === "client" ? "Book a Service" : "View Services"}
      </button>
    </div>
  );
}
