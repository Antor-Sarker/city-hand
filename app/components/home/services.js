import Image from "next/image";
import Link from "next/link";

export default async function HomeServices() {
  const data = await fetch("http://localhost:3000/api/services?category=all", {
    cache: "force-cache",
  });

  const services = (await data.json())?.slice(0, 7);

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Browse <span className="text-red-700">Services</span>
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Trusted professionals available 7 days a week, right at your
            doorstep.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Service Cards */}
          {services?.map((service) => (
            <Link
              key={service?._id}
              href={`/services/${service?._id}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-red-200 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-gray-100">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              </div>

              {/* Title */}
              <div className="flex items-center justify-between gap-2 px-4 py-3.5">
                <span className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-red-700 transition-colors duration-200">
                  {service?.title}
                </span>
                <span className=" flex shrink-0 items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-gray-300 text-xs group-hover:border-red-600 group-hover:text-red-600 group-hover:bg-red-50 transition-all duration-200">
                  ↗
                </span>
              </div>
            </Link>
          ))}

          {/* See More Card */}
          <Link
            href="/services?category=all"
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 hover:border-red-500 hover:bg-red-50 hover:-translate-y-1 transition-all duration-200 min-h-1/5 sm:min-h-2/6"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-gray-200 text-gray-300 group-hover:border-red-500 group-hover:text-red-600 group-hover:bg-white transition-all duration-200">
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
            <div className="text-center">
              <p className="text-sm font-bold text-gray-400 group-hover:text-red-700 transition-colors duration-200">
                See More
              </p>
              <p className="text-xs text-gray-300 mt-0.5">All Services →</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
