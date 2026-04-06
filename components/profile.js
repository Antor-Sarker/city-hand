"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
      </div>
    </div>
  );
}

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    try {
      (async function () {
        const res = await api.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/profile`,
        );
        if (res.success) setProfileData(res.data);
      })();
    } catch (error) {
      console.log("profile data not found");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ── Banner ─*/}
      <div className="relative h-44 sm:h-56 bg-red-600 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-red-500 opacity-40" />
        <div className="absolute top-4 right-24 w-40 h-40 rounded-full bg-red-400 opacity-25" />
        <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full bg-red-700 opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-16 pb-14">
        {/* Avatar + Name */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
          <div className="relative flex shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-4 border-white shadow-xl bg-linear-to-br from-red-400 to-red-700 flex items-center justify-center">
              <span className="text-white text-4xl font-black select-none tracking-tight">
                {profileData?.name[0]?.toUpperCase()}
              </span>
            </div>
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
          </div>

          <div className="sm:pb-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight capitalize">
                {profileData?.name}
              </h1>

              {profileData?.role === "admin" && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-600 text-white">
                  {profileData?.role}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 truncate">
              {profileData?.email}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-200 mb-6">
          {["Overview", "Edit"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-all ${
                activeTab === tab
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview  */}
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-4">
            {/* Details card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
                Account Details
              </p>

              <InfoRow
                label="Full Name"
                value={profileData?.name}
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              />
              <InfoRow
                label="Email"
                value={profileData?.email}
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
              <InfoRow
                label="Phone"
                value={profileData?.phone}
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              />
              <InfoRow
                label="Address"
                value={profileData?.address}
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        )}

        {/*  Edit */}
        {activeTab === "Edit" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-5">
              Edit Profile
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Full Name",
                  defaultValue: profileData?.name,
                  type: "text",
                  span: false,
                },
                {
                  label: "Email Address",
                  defaultValue: profileData?.email,
                  type: "email",
                  span: false,
                },
                {
                  label: "Phone",
                  defaultValue: profileData?.phone,
                  type: "tel",
                  span: false,
                },
                {
                  label: "Address",
                  defaultValue: profileData?.address,
                  type: "text",
                  span: false,
                },
              ].map((field) => (
                <div
                  key={field.label}
                  className={field.span ? "sm:col-span-2" : ""}
                >
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    defaultValue={field.defaultValue}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 font-medium bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                  />
                </div>
              ))}

              {/* Role — read only */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  Role
                </label>
                <div className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-400 font-medium flex items-center gap-2 cursor-not-allowed select-none">
                  <span className="capitalize">{profileData?.role}</span>
                  <span className="text-xs text-gray-300">
                    · cannot be changed here
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="px-6 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-all shadow-md shadow-red-100">
                Save Changes
              </button>
              <button
                onClick={() => setActiveTab("Overview")}
                className="px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-bold hover:border-red-300 hover:text-red-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
