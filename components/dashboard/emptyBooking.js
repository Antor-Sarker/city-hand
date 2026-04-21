import { useUserData } from "@/context/authContex";
import { useRouter } from "next/navigation";

export default function EmptyBooking({ status }) {
  const { userData } = useUserData();
  const router = useRouter();

  const clientTitle =
    status === "all" ? "No bookings yet" : `No ${status} bookings`;
  const adminTitle =
    status === "all" ? "No bookings found" : `No ${status} bookings`;

  const clientMessage =
    status === "all"
      ? "You haven’t made any bookings yet. Start by booking a service."
      : `You don’t have any ${status} bookings yet.`;
  const adminMessage =
    status === "all"
      ? "There are no bookings from users yet. Once users start booking services, they will appear here."
      : "Try selecting a different filter.";

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h2 className="text-xl font-semibold text-gray-700">
        {userData?.role === "client" ? clientTitle : adminTitle}
      </h2>
      <p className="text-gray-500 mt-2">
        {userData?.role === "client" ? clientMessage : adminMessage}
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
