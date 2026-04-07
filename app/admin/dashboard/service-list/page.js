"use client";
import api from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceManagement() {
  const [services, setServices] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [filteredService, setFilteredService] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const res = await api.get("/api/service");
        setServices(res);
        setFilteredService(res);
      } catch (error) {
        console.log(error, " failed to fetch services data");
      }
    })();
  }, []);

  function handelFilterByCategory(e) {
    const category = e.target.value;
    const filteredData =
      category === "all"
        ? services
        : services.filter((service) => service.category === category);
    setFilteredService(filteredData);
  }

  function handelFilterByStatus(e) {
    const status = e.target.value;
    const filteredData =
      status === "all"
        ? services
        : services.filter((service) => service.status === status);
    setFilteredService(filteredData);
  }

  function handelSearch(e) {
    const query = e.target.value;
    const filteredData = services.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredService(filteredData);
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Manage <span className="text-red-600">Services</span>
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md shadow-red-200 transition-all duration-150 cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Service
          </button>
        </div>

        {/* ── FILTER SECTION ── */}
        <div className="bg-white rounded-xl border max-w-screen border-gray-100 px-4 py-4 flex flex-col md:flex-row items-center gap-2.5 mb-6">
          {/* Search */}
          <div className="relative flex-1 w-full md:w-auto">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="6" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-8.5 pr-3 py-2.5 text-[13.5px] rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:bg-white transition"
              onChange={handelSearch}
            />
          </div>

          {/* Selects row */}
          <div className="w-full md:w-auto flex justify-between gap-2 flex-wrap sm:flex-nowrap">
            {/* Category filter */}
            <div className="relative">
              <select
                className="appearance-none pl-3 pr-8 py-2.5 text-[13.5px] rounded-lg border border-gray-200 bg-gray-50 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:bg-white transition min-w-32"
                onChange={handelFilterByCategory}
              >
                <option value="all">All Categories</option>
                <option value="appliance">Appliance Repair</option>
                <option value="electrical">Electrical Services</option>
                <option value="plumbing">Plumbing Services</option>
                <option value="cleaning">Cleaning Services</option>
                <option value="installation">Installation & Security</option>
                <option value="moving">Moving & Relocation</option>
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Status filter */}
            <div className="relative">
              <select
                className="appearance-none pl-3 pr-8 py-2.5 text-[13.5px] rounded-lg border border-gray-200 bg-gray-50 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:bg-white transition min-w-30"
                onChange={handelFilterByStatus}
              >
                <option value="all">All status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── TABLE ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-scroll">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              {/* Table Head */}
              <thead>
                <tr className="bg-gray-500 text-white">
                  {["Cover", "Name", "Price", "Status", "Action"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-widest first:rounded-tl-none last:rounded-tr-none"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-50">
                {filteredService?.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-16 text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          className="w-10 h-10 text-gray-200"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                          />
                        </svg>
                        <span className="text-sm">No services found</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredService?.map((service) => (
                    <tr
                      key={service._id}
                      className={`group transition-colors duration-100 bg-white hover:bg-gray-100`}
                    >
                      {/* Image */}
                      <td className="px-5 py-3.5">
                        <div className="w-20 h-16 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white flex items-center justify-center">
                          <Image
                            width={20}
                            height={16}
                            src={service.image}
                            alt={service.title}
                            className="w-20 h-16 object-contain"
                          />
                        </div>
                      </td>

                      {/* Name */}
                      <td>
                        <span className="font-semibold text-gray-800">
                          {service.title}
                        </span>
                      </td>

                      {/* Price */}
                      <td className=" px-5 py-3.5">
                        <span className=" text-red-600">
                          ৳
                          {`${service?.price.basic} - ${service?.price.standard}`}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            service.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${service.status === "active" ? "bg-green-500" : "bg-gray-400"}`}
                          />
                          {service.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <>
                            <button className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer">
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.232 5.232l3.536 3.536M9 13l6.071-6.071a2 2 0 1 1 2.829 2.828L11.828 15.83a4 4 0 0 1-2.243 1.12l-3 .5.5-3A4 4 0 0 1 9 13z"
                                />
                              </svg>
                              Edit
                            </button>
                            <button
                              className={`flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-lg border cursor-pointer transition-all active:scale-95 ${
                                service.status === "active"
                                  ? "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200"
                                  : "bg-green-50 hover:bg-green-100 text-green-600 border-green-200"
                              }`}
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M18.364 18.364A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                                />
                              </svg>
                              {service?.status === "active"
                                ? "Inactive"
                                : "Activate"}
                            </button>
                          </>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── ADD SERVICE MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Modal header */}
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">Add New Service</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Service Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Logo Design"
                  value={newService.name}
                  onChange={(e) =>
                    setNewService({ ...newService, name: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Price (৳) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 3500"
                  value={newService.price}
                  onChange={(e) =>
                    setNewService({ ...newService, price: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Image URL <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={newService.image}
                  onChange={(e) =>
                    setNewService({ ...newService, image: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
                />
              </div>
            </div>

            {/* Modal footer */}
            <div className="px-6 pb-5 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleAddService}
                disabled={!newService.name || !newService.price}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-sm font-semibold transition-all active:scale-95 shadow-md shadow-red-100"
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
