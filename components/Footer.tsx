import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display font-bold text-diva-pink text-xl mb-1">Little Divas</p>
            <p className="font-sans text-white/50 text-xs tracking-widest uppercase mb-4">Day Spa</p>
            <p className="font-sans text-white/70 text-sm leading-relaxed">
              A magical kids&apos; spa experience for your little diva — parties, mini makeovers, and glam fun in Haymarket, VA.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans font-bold text-xs text-diva-pink tracking-widest uppercase mb-3">Explore</p>
            <ul className="space-y-2">
              {[
                { label: "Birthday Packages", href: "/packages" },
                { label: "Mini Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Gift Certificates", href: "/shop" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-sans font-bold text-xs text-diva-pink tracking-widest uppercase mb-3">Info</p>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans font-bold text-xs text-diva-pink tracking-widest uppercase mb-3">Visit Us</p>
            <div className="space-y-2 font-sans text-sm text-white/70">
              <p>Haymarket, Virginia</p>
              <a href="tel:7037533200" className="block hover:text-white transition-colors">(703) 753-3200</a>
              <a href="mailto:littledivashaymarket@gmail.com" className="block hover:text-white transition-colors">
                littledivashaymarket@gmail.com
              </a>
              <div className="pt-1">
                <p className="font-semibold text-white/50 text-xs uppercase tracking-widest mb-1">Hours</p>
                <p>Mon, Thu, Fri: 2–6 PM</p>
                <p>Sat–Sun: 11 AM–6 PM</p>
                <p>Tue–Wed: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Little Divas Day Spa. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/40 text-center">
            Services are for entertainment purposes only. Not performed by licensed cosmetologists.
          </p>
        </div>
      </div>
    </footer>
  );
}
