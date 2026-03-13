"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    id: "appliance",
    title: "Appliance Repair",
    subtitle: "AC, Fridge & More",
    services: "4+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437"
        />
      </svg>
    ),
  },
  {
    id: "electrical",
    title: "Electrical Services",
    subtitle: "Wiring, Installation & More",
    services: "3+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    subtitle: "Pipes, Leaks & Drains",
    services: "3+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 3v6a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v6"
        />
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="19" r="2" />
      </svg>
    ),
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    subtitle: "Home, Office & Deep Clean",
    services: "5+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 1.338v.03c0 .392-.149.765-.416 1.044a2.25 2.25 0 0 1-1.618.683H5.986a2.25 2.25 0 0 1-1.618-.683 1.498 1.498 0 0 1-.416-1.043v-.031c0-.484.177-.948.45-1.338L5 14.5m14.8.5-3.75-4m-9.8 4 3.75-4"
        />
      </svg>
    ),
  },
  {
    id: "installation",
    title: "Installation & Security",
    subtitle: "CCTV, Locks & Setup",
    services: "2+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    id: "it",
    title: "IT & Tech Support",
    subtitle: "Network, PC & Software",
    services: "3+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    id: "moving",
    title: "Moving & Relocation",
    subtitle: "Packing, Home Shifting & More",
    services: "2+",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
];

export default function Category() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* title */}
        <div className="mb-12">
          {/* description */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-lg sm:text-2xl font-extrabold text-gray-950 leading-tight tracking-tight">
              Browse Service <span className="text-red-700">Categories</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Certified professionals available 7 days a week — fast, reliable,
              and at your doorstep.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {categories?.map((cat) => {
            const isHovered = hovered === cat?.id;
            return (
              <Link
                href={`/services?category=${cat.id}`}
                key={cat?.id}
                onMouseEnter={() => setHovered(cat?.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  group relative flex flex-col items-start text-left p-5 rounded-2xl
                  border transition-all duration-200 cursor-pointer outline-none overflow-hidden
                  shadow-sm
                  ${
                    isHovered
                      ? "border-red-200 shadow-red-100 shadow-lg -translate-y-1"
                      : "border-gray-100 hover:border-red-200"
                  }
                  bg-white
                `}
              >
                {/* Top red bar — slides on hover */}
                <span
                  className={`
                    absolute top-0 left-0 h-0.5 bg-red-700 rounded-t-2xl
                    transition-all duration-300
                    ${isHovered ? "w-full" : "w-0"}
                  `}
                />

                {/* Icon row + arrow */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div
                    className={`
                      flex items-center justify-center w-12 h-12 rounded-xl
                      transition-all duration-200
                      ${
                        isHovered
                          ? "bg-red-700 text-white"
                          : "bg-red-50 text-red-700"
                      }
                    `}
                  >
                    {cat?.icon}
                  </div>
                  <span
                    className={`
                      flex items-center justify-center w-7 h-7 rounded-full border text-xs
                      transition-all duration-200
                      ${
                        isHovered
                          ? "border-red-700 text-red-700 bg-red-50"
                          : "border-gray-200 text-gray-300"
                      }
                    `}
                  >
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 leading-snug tracking-tight mb-1">
                  {cat?.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4">
                  {cat?.subtitle}
                </p>

                {/* service badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-50 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  {cat?.services} Services
                </span>
              </Link>
            );
          })}

          {/* View All card */}
          <Link
            href="/services?category=all"
            onMouseEnter={() => setHovered("all")}
            onMouseLeave={() => setHovered(null)}
            className={`
              flex flex-col items-center justify-center gap-2 p-5 rounded-2xl
              border-2 border-dashed transition-all duration-200 cursor-pointer outline-none
              ${
                hovered === "all"
                  ? "border-red-400 bg-red-50 -translate-y-1"
                  : "border-gray-200 bg-gray-50"
              }
            `}
          >
            <span
              className={`
                flex items-center justify-center w-11 h-11 rounded-full border-2
                transition-all duration-200
                ${
                  hovered === "all"
                    ? "border-red-500 text-red-600 bg-white"
                    : "border-gray-200 text-gray-300"
                }
              `}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <span
              className={`text-sm font-bold transition-colors duration-200 ${hovered === "all" ? "text-red-700" : "text-gray-400"}`}
            >
              View All
            </span>
            <span className="text-xs text-gray-300">Explore more →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
