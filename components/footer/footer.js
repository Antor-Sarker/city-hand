import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services?category=all" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/#privacy" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Logo*/}
            <div className="flex flex-col gap-3 max-w-xs">
              <div className="flex items-end gap-0.5 shrink-0">
                <span className="font-extrabold text-xl tracking-tight text-gray-900">
                  City
                </span>
                <span className="font-extrabold text-xl tracking-tight text-red-500">
                  Hand
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mb-1 ml-0.5" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trusted home services at your doorstep. Fast, affordable, and
                professional.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <span className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-1">
                Quick Links
              </span>
              {navLinks?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-150 w-fit"
                >
                  {link?.label}
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <span className="text-gray-900 font-bold text-sm uppercase tracking-widest">
                Follow Us
              </span>
              <div className="flex flex-col gap-3">
                {socials?.map((s) => (
                  <Link
                    key={s?.label}
                    href={s?.href}
                    className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors duration-150 group"
                  >
                    <div className="w-8 h-8 rounded-lg border border-red-100 bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-150">
                      {s?.icon}
                    </div>
                    <span className="text-sm">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="mt-10 pt-6 border-t border-red-100 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-gray-400 text-xs">
              © 2026{" "}
              <span className="font-semibold text-gray-600">CityHand</span>. All
              rights reserved.
            </p>
            <div className="w-8 h-1 rounded-full bg-red-500" />
          </div>
        </div>
      </footer>
    </>
  );
}
