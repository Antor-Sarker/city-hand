import Image from "next/image";

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

const services = [
  {
    id: 1,
    title: "AC & Refrigerator Repair",
    category: "appliance",
    categoryLabel: "Appliance Repair",
    price: "From ৳500",
    description:
      "Expert diagnosis and repair for all major appliance brands. Fast turnaround guaranteed.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    id: 2,
    title: "Washing Machine Service",
    category: "appliance",
    categoryLabel: "Appliance Repair",
    price: "From ৳400",
    description:
      "Complete washing machine repair, drum replacement, motor fix and maintenance.",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
  },
  {
    id: 3,
    title: "Home Wiring & Rewiring",
    category: "electrical",
    categoryLabel: "Electrical Services",
    price: "From ৳800",
    description:
      "Safe, certified electrical wiring services for homes, apartments and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    title: "Circuit Breaker & Panel",
    category: "electrical",
    categoryLabel: "Electrical Services",
    price: "From ৳1,200",
    description:
      "Panel upgrades, circuit breaker installation, load balancing and electrical safety checks.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
  },
  {
    id: 5,
    title: "Pipe Leak & Repair",
    category: "plumbing",
    categoryLabel: "Plumbing Services",
    price: "From ৳350",
    description:
      "Emergency and scheduled pipe repair, leak detection and water pressure optimization.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
  },
  {
    id: 6,
    title: "Bathroom Fitting",
    category: "plumbing",
    categoryLabel: "Plumbing Services",
    price: "From ৳600",
    description:
      "Complete bathroom fixture installation — toilets, showers, basins, water heaters.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    id: 7,
    title: "Deep Home Cleaning",
    category: "cleaning",
    categoryLabel: "Cleaning Services",
    price: "From ৳1,500",
    description:
      "Full apartment deep clean — floors, kitchen, bathrooms, windows and furniture.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    id: 8,
    title: "Sofa & Carpet Cleaning",
    category: "cleaning",
    categoryLabel: "Cleaning Services",
    price: "From ৳800",
    description:
      "Professional steam cleaning and stain removal for sofas, carpets and upholstery.",
    image:
      "https://images.unsplash.com/photo-1558618047-f4e70e4c3b4e?w=600&q=80",
  },
  {
    id: 9,
    title: "CCTV Installation",
    category: "installation",
    categoryLabel: "Installation & Security",
    price: "From ৳2,500",
    description:
      "HD CCTV camera setup with remote viewing, motion detection and night vision.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  },
  {
    id: 10,
    title: "Smart Lock & Door Security",
    category: "installation",
    categoryLabel: "Installation & Security",
    price: "From ৳1,800",
    description:
      "Digital smart lock installation, access control systems and door reinforcement.",
    image:
      "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=600&q=80",
  },
  {
    id: 11,
    title: "Computer Repair & Setup",
    category: "it",
    categoryLabel: "IT & Tech Support",
    price: "From ৳500",
    description:
      "Hardware repair, OS installation, virus removal, data recovery and performance tuning.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80",
  },
  {
    id: 12,
    title: "WiFi & Network Setup",
    category: "it",
    categoryLabel: "IT & Tech Support",
    price: "From ৳700",
    description:
      "Home and office WiFi installation, router config, range extenders and LAN cabling.",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80",
  },
  {
    id: 13,
    title: "Home Shifting Service",
    category: "moving",
    categoryLabel: "Moving & Relocation",
    price: "From ৳3,000",
    description:
      "Safe and professional home relocation with packing, loading, transport and unloading.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
  },
  {
    id: 14,
    title: "Office Relocation",
    category: "moving",
    categoryLabel: "Moving & Relocation",
    price: "From ৳5,000",
    description:
      "Complete office moving — furniture dismantling, packing, IT setup at new location.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 15,
    title: "AC Installation & Service",
    category: "installation",
    categoryLabel: "Installation & Security",
    price: "From ৳1,000",
    description:
      "Split AC, window AC installation, gas refill, coil cleaning and annual maintenance.",
    image:
      "https://images.unsplash.com/photo-1631017283776-e2a7a8aa3de5?w=600&q=80",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden cursor-pointer">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-red-600 hover:text-white hover:bg-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100 cursor-pointer">
            {service.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-tight group-hover:text-red-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3">
          <div className="">
            <span className="bg-white/90 backdrop-blur-sm text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
              {service.price}
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

export default function Services() {
  const activeCategory = "all";
  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

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
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0  ${
                      cat.id === activeCategory
                        ? "bg-red-600 text-white border-red-600 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                  </button>
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
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all group ${
                        cat.id === activeCategory
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      <span className="text-base w-6 text-center">
                        {cat.icon}
                      </span>
                      <span className="flex-1 text-left">{cat.label}</span>
                      {cat.id === activeCategory && (
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      )}
                    </button>
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
                    {services.length} services
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
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
