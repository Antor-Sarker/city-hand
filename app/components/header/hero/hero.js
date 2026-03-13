import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-red-50 to-red-100 py-16 sm:py-20 lg:py-24">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-red-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Heading */}
        <h1 className="text-[1.8rem] sm:text-3xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
          Find Trusted Home Service{" "}
          <span className="text-red-600">Instantly</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-9">
          Connect with verified local professionals for plumbing, electrical,
          cleaning &amp; more — in minutes, not days.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/services?category=all"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-200 hover:shadow-red-300"
          >
            Get Started
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/services?category=all"
            className="inline-flex items-center font-semibold text-sm px-6 py-2 rounded-lg border-[1.5px] border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
