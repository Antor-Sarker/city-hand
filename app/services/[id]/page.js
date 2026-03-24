import Image from "next/image";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.API_BASE_URL}/api/service/${id}`);
  const service = await res.json();

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative bg-red-400 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full opacity-40" />

        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-red-500 rounded-full opacity-30" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {service?.categoryLabel}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
              {service?.title}
            </h1>
            <p className="text-red-100 text-base leading-relaxed mb-8 max-w-md">
              {service?.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <p className="text-red-200 text-xs uppercase tracking-widest mb-1">
                  Starting at
                </p>
                <p className="text-3xl font-black">
                  From ৳{service?.price?.basic}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/40 border-4 border-white/20">
            <Image
              fill
              src={service?.image}
              alt={service?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-red-900/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* whats included */}
      <section className="max-w-6xl mx-auto my-5 px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inclusions */}
          <div className="bg-red-50 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📋</span>
              </div>
              <h2 className="text-xl font-black text-gray-900">
                Whats Included
              </h2>
            </div>
            <ul className="space-y-3">
              {service?.serviceInclusions?.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center *:shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Card */}
          <div className="bg-white border-2 border-red-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-red-100">
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
                Pricing
              </p>
              <p className="text-4xl font-black text-gray-900 mb-1">
                ৳{service?.price?.basic}
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Price may vary based on property size & condition.
              </p>

              {/* price */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-red-50">
                  <span className="text-sm text-gray-600 font-medium">
                    Basic
                  </span>
                  <span className="text-sm font-bold text-red-600">
                    ৳{service?.price?.basic}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-red-50">
                  <span className="text-sm text-gray-600 font-medium">
                    Standard
                  </span>
                  <span className="text-sm font-bold text-red-600">
                    ৳{service?.price?.standard}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-red-50">
                  <span className="text-sm text-gray-600 font-medium">
                    Premium
                  </span>
                  <span className="text-sm font-bold text-red-600">
                    ৳{service?.price?.premium}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-black text-lg py-4 rounded-2xl shadow-lg shadow-red-300">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
