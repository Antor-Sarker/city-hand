"use client";
import { useUserData } from "@/context/authContex";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminAlert } from "./adminAlert";
import BookingModal from "./bookingModal";
export default function Booking({ serviceData }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenAdminAlert, setIsOpenAdminAlert] = useState(false);
  const { userData } = useUserData();
  const router = useRouter();

  function handelOpenModal() {
    if (!userData) router?.push("/login");
    else if (userData?.role === "admin") setIsOpenAdminAlert(true);
    else setIsOpenModal(true);
  }
  return (
    <>
      {isOpenModal && (
        <BookingModal
          serviceData={serviceData}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      {isOpenAdminAlert && (
        <AdminAlert onClose={() => setIsOpenAdminAlert(false)} />
      )}
      <button
        className="w-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-black text-md py-4 rounded-2xl shadow-lg shadow-red-300 cursor-pointer"
        onClick={handelOpenModal}
      >
        Book Now
      </button>
    </>
  );
}
