import { useUserData } from "@/context/authContex";
import api from "@/lib/api";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, IconCalendar, IconXCircle } from "../dashboard/icons";

const TIME_SLOTS = [
  { value: "", label: "--Select time--" },
  { value: "08:00 AM", label: "08:00 AM" },
  { value: "09:00 AM", label: "09:00 AM" },
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
  { value: "12:00 PM", label: "12:00 PM" },
  { value: "01:00 PM", label: "01:00 PM" },
  { value: "02:00 PM", label: "02:00 PM" },
  { value: "03:00 PM", label: "03:00 PM" },
  { value: "04:00 PM", label: "04:00 PM" },
  { value: "05:00 PM", label: "05:00 PM" },
];

const FocusInput = ({ type = "text", placeholder = "", value, onChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className={`w-full bg-white text-sm text-gray-800 rounded-lg py-2.5 pr-3 outline-none border transition-colors duration-200 pl-3 ${focused ? "border-red-500" : "border-gray-200"}`}
      />
    </div>
  );
};

const FocusSelect = ({ value, onChange, children }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className={`w-full appearance-none bg-white text-sm text-gray-800 rounded-lg py-2.5 pr-8 outline-none border transition-colors duration-200 cursor-pointer pl-3 ${focused ? "border-red-500" : "border-gray-200"}`}
      >
        {children}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 flex">
        <ChevronDown />
      </span>
    </div>
  );
};

const FocusTextarea = ({ value, onChange, placeholder }) => {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      rows={3}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      required
      className={`w-full bg-white text-sm text-gray-800 rounded-lg px-3 py-2.5 outline-none border resize-y transition-colors duration-200 leading-relaxed ${focused ? "border-red-500" : "border-gray-200"}`}
    />
  );
};

export default function EditBookingModal({
  data,
  onClose,
  bookings,
  setBookingData,
}) {
  const [plans, setPlans] = useState(null);
  const [form, setForm] = useState({
    plan: data?.plan,
    price: data?.price,
    bookingDate: data?.bookingDate,
    bookingTime: data?.bookingTime,
    phone: data?.phone,
    address: data?.address,
    notes: data?.notes,
    status: data?.status,
  });

  const [error, setError] = useState("");
  const errorRef = useRef(null);
  const { userData } = useUserData();

  useEffect(() => {
    (async function () {
      try {
        const serviceData = await api.get(`/api/service/${data?.serviceId}`);
        setPlans([
          `basic ${serviceData?.price?.basic}`,
          `standard ${serviceData?.price?.standard}`,
          `premium ${serviceData?.price?.premium}`,
        ]);
      } catch (error) {
        console.log("fetch service error ", error);
      }
    })();
  }, [data?.serviceId]);

  const set = (key) => (e) => {
    if (key === "plan") {
      setForm((prevState) => ({
        ...prevState,
        plan: e.target.value.split(" ")[0],
        price: e.target.value.split(" ")[1],
      }));
    } else setForm((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  async function handelSubmit(e) {
    e.preventDefault();

    const updateBooking = {
      ...form,
      plan: form?.plan,
      price: Number(form?.price),
      serviceId: data?.serviceId,
      serviceName: data?.serviceName,
      serviceCategory: data?.serviceCategory,
    };

    try {
      const res = await api.patch(
        `/api/booking/update/${data?._id}`,
        updateBooking,
      );
      if (res.success) {
        const updatedBooking = res.data;

        const updatedBookings = bookings.map((booking) => {
          if (booking._id === updatedBooking._id) return updatedBooking;
          else return booking;
        });
        setBookingData(updatedBookings);
        onClose();
      }
    } catch (error) {
      setError("please try again");
      errorRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <form
        className="bg-white rounded-2xl w-full max-w-lg h-full md:max-h-11/12 overflow-y-scroll shadow-2xl"
        onSubmit={handelSubmit}
      >
        {/* Header */}
        <div className="bg-linear-to-br from-red-400 to-red-800 px-5 py-4 flex items-center justify-between rounded-t-2xl sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <IconCalendar />
            </div>
            <div>
              <p className="text-white font-semibold text-base leading-tight">
                Edit Booking
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer border-0 outline-none"
          >
            <IconXCircle
              className={"w-16 h-16 text-white/70 hover:text-red-900"}
            />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 flex flex-col gap-4">
          {/* Service Name + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Service Name
              </label>

              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm font-medium text-red-700">
                {data?.serviceName}
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Service Category
              </label>

              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm font-medium text-red-700">
                {data?.serviceCategory}
              </div>
            </div>
          </div>

          {/* plan + status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Plan */}
            <div ref={errorRef}>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Plan
              </label>
              <FocusSelect
                value={`${form?.plan} ${form?.price}`}
                onChange={set("plan")}
              >
                {plans?.map((plan) => (
                  <option key={plan} value={plan}>
                    {plan}
                  </option>
                ))}
              </FocusSelect>
            </div>
            {/* status */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                status
              </label>
              <FocusSelect value={form?.status} onChange={set("status")}>
                <option value="pending">{"pending"}</option>
                <option value="cancelled">{"cancelled"}</option>

                {userData?.role === "admin" && (
                  <>
                    <option value="confirmed">{"confirmed"}</option>
                    <option value="completed">{"completed"}</option>
                  </>
                )}
              </FocusSelect>
            </div>{" "}
          </div>

          {/* error message for already booking */}
          {error && <div className="text-xl text-red-600">{error}</div>}
          {/* Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Booking Date
              </label>
              <FocusInput
                type="date"
                placeholder=""
                value={form?.bookingDate}
                onChange={set("bookingDate")}
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Booking Time
              </label>

              <FocusSelect
                value={form.bookingTime}
                onChange={set("bookingTime")}
              >
                {TIME_SLOTS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </FocusSelect>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Phone Number
            </label>

            <FocusInput
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Address
            </label>
            <FocusInput
              type="text"
              placeholder="Your address"
              value={form.address}
              onChange={set("address")}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Notes
            </label>
            <FocusTextarea
              placeholder="notes..."
              value={form.notes}
              onChange={set("notes")}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-end gap-3 flex-wrap sticky bottom-0 bg-white rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-200 rounded-lg bg-transparent hover:bg-gray-50 text-sm font-medium text-gray-500 transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-linear-to-br from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 cursor-pointer border-0 outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
