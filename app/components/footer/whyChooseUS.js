export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Verified Professionals",
      desc: "Every technician is background-checked, certified, and vetted before joining our platform.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Affordable Pricing",
      desc: "Transparent rates with no hidden fees. Quality service that fits every budget.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fast Service",
      desc: "Same-day availability for urgent requests. We value your time as much as you do.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "24/7 Customer Support",
      desc: "Round-the-clock support via chat, call, or email. We're always here when you need us.",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-red-500 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-red-500 inline-block" /> Our Advantage
          </span>
          <h2 className="text-base md:text-xl font-extrabold text-gray-900 leading-tight">
            Why Clients <span className="text-red-600">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-lg leading-relaxed">
            We combine skill, speed, and integrity — so you get results you can
            trust, every single time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 flex flex-col gap-5 border border-red-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
            >
              {/* Colored top-left */}
              <div className="absolute top-0 left-0 w-16 h-1 rounded-br-full bg-red-500" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-500">
                {feature?.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-900 font-bold text-base leading-snug">
                  {feature?.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature?.desc}
                </p>
              </div>

              {/* Bottom dot */}
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-400 opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
