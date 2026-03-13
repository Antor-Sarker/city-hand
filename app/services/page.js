import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Services", icon: "⊞" },
  { id: "appliance", label: "Appliance Repair", icon: "🛠️" },
  { id: "electrical", label: "Electrical Services", icon: "⚡" },
  { id: "plumbing", label: "Plumbing Services", icon: "🪛" },
  { id: "cleaning", label: "Cleaning Services", icon: "🪣" },
  { id: "installation", label: "Installation & Security", icon: "🔒" },
  { id: "it", label: "IT & Tech Support", icon: "💻" },
  { id: "moving", label: "Moving & Relocation", icon: "📦" },
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden cursor-pointer">
        <Image
          src={service?.image}
          alt={service?.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-red-600 hover:text-white hover:bg-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100 cursor-pointer">
            {service?.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-tight group-hover:text-red-600 transition-colors">
          {service?.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {service?.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3">
          <div className="">
            <span className="bg-white/90 backdrop-blur-sm text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
              {service?.price}
            </span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function Services({ searchParams }) {
  const category = (await searchParams).category;

  const data = await fetch("http://localhost:3000/api/services", {
    cache: "force-cache",
  });
  const services = await data.json();

  const filteredSevices =
    category === "all"
      ? services
      : services.filter((item) => item.category === category);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 xl:w-72 shrink-0">
            {/*small device: Horizontal scroll categories */}
            <div className="lg:hidden mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Filter by Category
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories?.map((cat) => (
                  <Link
                    href={`/services?category=${cat?.id}`}
                    key={cat?.id}
                    className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0  ${
                      cat?.id === category
                        ? "bg-red-600 text-white border-red-600 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
                    }`}
                  >
                    <span>{cat?.icon}</span>
                    {cat?.label}
                  </Link>
                ))}
              </div>
            </div>

            {/*big screen: Sidebar — Category Filter*/}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50">
                  <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                      />
                    </svg>
                    Categories
                  </h3>
                </div>
                <div className="p-2">
                  {categories?.map((cat) => (
                    <Link
                      href={`/services?category=${cat?.id}`}
                      key={cat?.id}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all group ${
                        cat?.id === category
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      <span className="text-base w-6 text-center">
                        {cat?.icon}
                      </span>
                      <span className="flex-1 text-left">{cat?.label}</span>
                      {cat?.id === "activeCategory" && (
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Services Grid */}
          <div className="flex-1 min-w-0">
            {/*services count and sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  All Services
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Showing{" "}
                  <span className="text-red-600 font-semibold">
                    {filteredSevices?.length} services
                  </span>{" "}
                  available
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden sm:block">
                  Sort by:
                </span>
                <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/*Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredSevices?.map((service) => (
                <ServiceCard key={service?._id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
