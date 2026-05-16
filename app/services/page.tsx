import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata = {
  title: "Mini Services | Little Divas Day Spa",
  description: "Mini spa experiences for kids including Single Diva, BFF Package, Mommy & Me, and more in Haymarket, Virginia.",
};

const miniPackages = [
  {
    emoji: "👑",
    name: "Single Diva Package",
    price: "$165",
    duration: "2 hrs",
    description: "A solo spa experience for one little diva — the perfect treat for any special day.",
    includes: ["Mini manicure", "Mini pedicure", "Mini facial", "Lip gloss", "Party favor"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/single-diva-package",
  },
  {
    emoji: "💅",
    name: "BFF Package",
    price: "$230.95",
    duration: "1 hr 30 min",
    description: "Two besties enjoying the diva life together — because everything is better with your bestie.",
    includes: ["Mini manicure (x2)", "Mini pedicure (x2)", "Lip gloss (x2)", "Party favors"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/bff-package",
  },
  {
    emoji: "💗",
    name: "Mommy & Me Package",
    price: "$250",
    duration: "1 hr 30 min",
    description: "A beautiful bonding experience for mom and daughter — relax and enjoy a little pampering together.",
    includes: ["Mini manicure (x2)", "Mini pedicure (x2)", "Spa treatment", "Lip gloss", "Take-home favor"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/mommy-me-package",
  },
  {
    emoji: "🎀",
    name: "Daddy & Me Day",
    price: "$250",
    duration: "1 hr 30 min",
    description: "Who says spa days are just for moms? Dads and daughters share in the fun — a unique and unforgettable bonding experience.",
    includes: ["Mini manicure (x2)", "Mini pedicure (x2)", "Spa treatment", "Lip gloss", "Take-home favor"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/daddy-me-day",
  },
];

const aLaCarteServices = [
  { name: "Mani & Pedi Express", price: "$55", desc: "1 hr 15 min express mani-pedi for your little one." },
  { name: "Manicure", price: "$35", desc: "Light filing, buffing, massage & polish application." },
  { name: "Pedicure", price: "$35", desc: "Light filing, buffing, foot massage & polish application." },
  { name: "Mini Facial", price: "$15", desc: "A gentle, kid-friendly facial using non-toxic products." },
  { name: "Light Makeup", price: "$20", desc: "Fun, light makeup application using kid-safe products." },
  { name: "Spa Gift Bag", price: "$10", desc: "Take-home spa gift bag — perfect party favor." },
  { name: "Additional Time", price: "$50", desc: "Add 30 extra minutes to any service or party." },
  { name: "Party Room Rental", price: "$85/30 min", desc: "Party room usage for non-birthday package events." },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-lavender via-blush to-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Mini Experiences ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Spa days for every occasion
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            No party required. Treat your little one to a mini spa experience — solo, with a bestie, or with mom or dad.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream">
        {/* Mini Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              eyebrow="Mini Packages"
              title="Packages for every little diva"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {miniPackages.map((pkg, i) => (
                <div key={pkg.name} className={`rounded-3xl border p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow ${i === 0 ? "bg-gradient-to-br from-diva-pink to-plum text-white border-diva-pink" : "bg-white border-blush"}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{pkg.emoji}</span>
                    <div>
                      <h2 className={`font-display font-bold text-xl mb-1 ${i === 0 ? "text-white" : "text-plum"}`}>{pkg.name}</h2>
                      <div className={`flex gap-3 text-xs font-semibold ${i === 0 ? "text-white/70" : "text-plum/50"}`}>
                        <span>⏱ {pkg.duration}</span>
                        <span className={`font-display font-bold text-base ${i === 0 ? "text-white" : "text-diva-pink"}`}>{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className={`font-sans text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-plum/60"}`}>{pkg.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className={`font-sans text-sm flex items-center gap-2 ${i === 0 ? "text-white/90" : "text-plum/80"}`}>
                        <span className="text-gold">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pkg.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto font-sans text-sm font-bold px-6 py-2.5 rounded-full text-center transition-colors ${
                      i === 0 ? "bg-white text-diva-pink hover:bg-blush" : "bg-diva-pink text-white hover:bg-plum"
                    }`}
                  >
                    Book This Experience
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À La Carte */}
        <section className="bg-lavender/20 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              eyebrow="À La Carte"
              title="Individual services"
              subtitle="Add on any service or build your own experience from our à la carte menu."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {aLaCarteServices.map(({ name, price, desc }) => (
                <div key={name} className="bg-white rounded-2xl border border-blush p-5 hover:shadow-md hover:border-diva-pink/30 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-plum text-base">{name}</h3>
                    <span className="font-display font-bold text-diva-pink text-base flex-shrink-0">{price}</span>
                  </div>
                  <p className="font-sans text-xs text-plum/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-diva-pink/10 border border-diva-pink/20 rounded-2xl p-5 text-sm text-plum/70 font-sans">
              <strong className="text-plum">Note:</strong> A 20% gratuity is added to all services. Minimum service age is 3 years old. All products are non-toxic. Services are for entertainment purposes only.
            </div>
          </div>
        </section>
      </main>

      <CTASection
        eyebrow="Let's Glam Up"
        title="Ready for a diva day?"
        subtitle="Book a mini package or contact us to put together a custom experience."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Birthday Packages"
        secondaryHref="/packages"
      />
    </>
  );
}
