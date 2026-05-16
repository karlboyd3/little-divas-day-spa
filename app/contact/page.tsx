import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Contact | Little Divas Day Spa",
  description: "Contact Little Divas Day Spa in Haymarket, Virginia. Call, email, or find directions to our spa.",
};

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday – Friday", hours: "10:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 6:00 PM" },
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "(703) 600-0000",
    href: "tel:7036000000",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@littledivasdayspa.com",
    href: "mailto:info@littledivasdayspa.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Address",
    value: "Haymarket, Virginia",
    href: "https://maps.google.com/?q=Little+Divas+Day+Spa+Haymarket+VA",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-blush via-cream to-lavender pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Get in Touch ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            We&apos;d love to hear from you
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            Questions, bookings, or just want to say hi — reach out and our team will get back to you as soon as possible.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-5">
            <SectionTitle
              eyebrow="Contact"
              title="Reach us here"
            />

            <div className="space-y-3">
              {contactItems.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 bg-white rounded-2xl border border-blush px-5 py-4">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-diva-pink flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-sans text-xs text-plum/40 uppercase tracking-widest mb-0.5">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith("https") ? "_blank" : undefined}
                      rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="font-sans text-sm font-semibold text-plum hover:text-diva-pink transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-blush p-5">
              <p className="font-sans text-xs font-bold text-diva-pink tracking-widest uppercase mb-3">Hours</p>
              <div className="space-y-2">
                {hours.map(({ day, hours: h }) => (
                  <div key={day} className="flex justify-between gap-4 flex-wrap">
                    <span className="font-sans text-sm text-plum/60">{day}</span>
                    <span className={`font-sans text-sm font-semibold ${h === "Closed" ? "text-plum/30" : "text-plum"}`}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking note */}
            <div className="bg-diva-pink/10 border border-diva-pink/20 rounded-2xl px-5 py-4">
              <p className="font-sans text-sm text-plum/80">
                <strong className="text-plum">Booking reminder:</strong> All packages and services must be booked online or by phone. Birthday parties are available on weekends only.
              </p>
            </div>
          </div>

          {/* Directions */}
          <div className="space-y-5">
            <SectionTitle
              eyebrow="Directions"
              title="Find us in Haymarket"
            />

            <div className="bg-white rounded-2xl border border-blush p-5 space-y-4">
              <p className="font-sans text-sm text-plum/70 leading-relaxed">
                Little Divas Day Spa is located in Haymarket, Virginia. Use the link below for step-by-step directions.
              </p>
              <a
                href="https://maps.google.com/?q=Little+Divas+Day+Spa+Haymarket+VA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Open in Google Maps →
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl border border-blush p-5">
              <p className="font-sans text-xs font-bold text-diva-pink tracking-widest uppercase mb-3">Follow Us</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/littledivasdayspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-plum/70 hover:text-diva-pink transition-colors"
                >
                  Instagram: @littledivasdayspa
                </a>
                <a
                  href="https://www.facebook.com/littledivasdayspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-plum/70 hover:text-diva-pink transition-colors"
                >
                  Facebook: Little Divas Day Spa
                </a>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="bg-gradient-to-br from-diva-pink to-plum rounded-2xl p-6 text-center">
              <p className="font-display font-bold text-white text-xl mb-2">Ready to book?</p>
              <p className="font-sans text-white/70 text-sm mb-4">All bookings are made online. Birthday parties on weekends only.</p>
              <a
                href="https://www.littledivasdayspa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-sans font-bold text-sm bg-white text-diva-pink px-7 py-3 rounded-full hover:bg-blush transition-colors"
              >
                Book Online →
              </a>
            </div>
          </div>
        </div>
      </main>

      <CTASection
        eyebrow="Questions?"
        title="Browse our FAQ"
        subtitle="We've answered the most common questions about our spa, services, and policies."
        primaryLabel="View FAQ"
        primaryHref="/faq"
        secondaryLabel="View Packages"
        secondaryHref="/packages"
      />
    </>
  );
}
