import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import PackageCard from "@/components/PackageCard";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const birthdayPackages = [
  {
    name: "Simply Sweet",
    duration: "2 hrs",
    price: "$385",
    guests: "5 children",
    highlights: ["Mini mani & pedi", "Lip gloss application", "Glitter tattoos", "Party favors"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/simply-sweet",
  },
  {
    name: "Seriously Sassy",
    duration: "2 hrs 50 min",
    price: "$465",
    guests: "5 children",
    highlights: ["Mani, pedi & facial", "Makeup application", "Hair styling", "Spa robe & crown"],
    featured: true,
    badge: "Most Popular",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/seriously-sassy",
  },
  {
    name: "Toe-Tally Diva",
    duration: "3 hrs",
    price: "$525",
    guests: "5 children",
    highlights: ["Full spa treatment", "Mani, pedi, facial & massage", "Full glam makeup", "Photo moment setup"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/toe-tally-diva",
  },
  {
    name: "Must-Have Makeover",
    duration: "3 hrs 45 min",
    price: "$600",
    guests: "5 children",
    highlights: ["Ultimate spa experience", "All services included", "Themed décor", "Take-home spa kit"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/must-have-makeover-experience",
  },
  {
    name: "Create Your Own",
    duration: "4 hrs",
    price: "$780",
    guests: "5 children",
    highlights: ["Custom theme party", "Mix & match services", "Dedicated party host", "Fully personalized"],
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/create-your-own-theme-party",
  },
];

const miniServices = [
  {
    name: "Single Diva Package",
    price: "$165",
    description: "A 2-hour solo spa experience for one little diva — mani, pedi, and a mini facial.",
    emoji: "👑",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/single-diva-package",
  },
  {
    name: "BFF Package",
    price: "$230.95",
    description: "1.5-hour experience for two besties — manis, pedis, and all the glam fun.",
    emoji: "💅",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/bff-package",
  },
  {
    name: "Mommy & Me",
    price: "$250",
    description: "A 1.5-hour bonding spa experience for mom and her little one to enjoy together.",
    emoji: "💗",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/mommy-me-package",
  },
  {
    name: "Daddy & Me Day",
    price: "$250",
    description: "A special 1.5-hour spa day for dads and their little divas — unforgettable fun.",
    emoji: "🎀",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/daddy-me-day",
  },
  {
    name: "Mani & Pedi Express",
    price: "$55",
    description: "A quick 1 hr 15 min mani-pedi treat for your little one.",
    emoji: "✨",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/mani-pedi-express-service",
  },
];

const whyUs = [
  { icon: "🧴", title: "Non-Toxic Products", desc: "We use only non-toxic, kid-safe products in every service." },
  { icon: "🎂", title: "Birthday Specialists", desc: "We live for birthday celebrations — it's what we do best." },
  { icon: "💪", title: "Confidence-Building", desc: "Every visit is designed to make your little diva feel amazing." },
  { icon: "✅", title: "Safe Environment", desc: "A clean, fun, and safe space designed with kids in mind." },
  { icon: "👩‍👧", title: "Parent-Friendly", desc: "Parents can relax knowing their kids are in great hands." },
  { icon: "🌟", title: "Unforgettable Fun", desc: "We create memories your little diva will talk about forever." },
];

const homeFAQs = [
  {
    question: "What ages are appropriate for services?",
    answer: "Little Divas is for girls of all ages! Our minimum service age is 3 years old.",
  },
  {
    question: "What products do you use?",
    answer: "We use non-toxic, plant-based products from Jersey Girl Creations LLC — a local family-owned business focused on environmental safety. Please notify us of any allergies before your visit.",
  },
  {
    question: "How do I book a birthday party?",
    answer: "All birthday packages must be booked online, no later than 2 days in advance. A $150 non-refundable deposit is required to secure your date. Birthday packages are available on weekends only.",
  },
  {
    question: "Are your staff licensed cosmetologists?",
    answer: "Our services are for entertainment purposes only and are not performed by licensed cosmetologists. We focus on fun, confidence-building experiences for kids in Haymarket, VA.",
  },
];

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blush via-cream to-lavender overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <span className="absolute top-10 left-8 text-5xl opacity-20">✦</span>
          <span className="absolute top-24 right-16 text-3xl opacity-20">✦</span>
          <span className="absolute bottom-16 left-1/4 text-4xl opacity-10">✦</span>
          <span className="absolute bottom-24 right-8 text-2xl opacity-20">✦</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">
              ✦ Haymarket, Virginia ✦
            </p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-plum leading-tight mb-6">
              A magical spa party experience for your{" "}
              <span className="text-diva-pink italic">little diva.</span>
            </h1>
            <p className="font-sans text-lg text-plum/70 max-w-xl leading-relaxed mb-10">
              Kids&apos; spa parties, mini makeovers, birthday packages, and glam experiences in Haymarket, Virginia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.littledivasdayspa.com/birthdaypackages"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-sm bg-diva-pink text-white px-8 py-4 rounded-full hover:bg-plum transition-colors shadow-lg text-center"
              >
                Book a Party
              </a>
              <Link
                href="/packages"
                className="font-sans font-bold text-sm border-2 border-plum/20 text-plum px-8 py-4 rounded-full hover:border-diva-pink hover:text-diva-pink transition-colors text-center"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </section>

      {/* Birthday Packages */}
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionTitle
              eyebrow="Birthday Packages"
              title="Party like a diva"
              subtitle="Choose the perfect package for your little one's big day. All packages include a dedicated party host and non-toxic products."
            />
            <Link href="/packages" className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors whitespace-nowrap">
              See all packages →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {birthdayPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Mini Services */}
      <section className="bg-lavender/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionTitle
              eyebrow="Mini Experiences"
              title="Every day is a spa day"
              subtitle="No party needed — treat your little one to a fun mini spa experience any time."
            />
            <Link href="/services" className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors whitespace-nowrap">
              See all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {miniServices.map((svc) => (
              <ServiceCard key={svc.name} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Why Families Love Us"
            title="A spa experience parents can trust"
            subtitle="We make every visit safe, special, and absolutely unforgettable."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-blush p-6 flex gap-4 hover:shadow-md transition-shadow">
                <span className="text-3xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="font-display font-bold text-plum text-lg mb-1">{title}</h3>
                  <p className="font-sans text-sm text-plum/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Certificate CTA */}
      <section className="bg-gradient-to-r from-gold/20 via-blush to-lavender/40 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="text-center lg:text-left flex-1">
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold mb-2">✦ Perfect Gift ✦</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-plum mb-3">
              Give the gift of glamour
            </h2>
            <p className="font-sans text-plum/60 text-base leading-relaxed">
              Gift certificates are available for any amount and never expire. The perfect present for any little diva in your life.
            </p>
          </div>
          <Link
            href="/shop"
            className="font-sans font-bold text-sm bg-gold text-white px-8 py-4 rounded-full hover:bg-plum transition-colors shadow-md whitespace-nowrap"
          >
            Buy a Gift Certificate
          </Link>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Gallery"
            title="Our little divas"
            subtitle="A peek at the magic that happens inside our spa."
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {(["✦","👑","💅","🎀","✨","💗","🌟","🎂"] as const).map((icon, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden aspect-square flex items-center justify-center ${
                  i % 4 === 0 ? "bg-gradient-to-br from-blush to-diva-pink/30" :
                  i % 4 === 1 ? "bg-gradient-to-br from-lavender to-diva-pink/20" :
                  i % 4 === 2 ? "bg-gradient-to-br from-blush to-lavender" :
                  "bg-gradient-to-br from-cream to-blush"
                }`}
              >
                <span className="text-4xl opacity-30">{icon}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="font-sans font-bold text-sm border-2 border-diva-pink text-diva-pink px-8 py-3 rounded-full hover:bg-diva-pink hover:text-white transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-lavender/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="FAQs" title="Good questions, great answers" center />
          <div className="mt-10">
            <FAQAccordion items={homeFAQs} />
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        eyebrow="Ready to Celebrate?"
        title="Book your little diva's dream party"
        subtitle="Spots fill up fast — especially on weekends. Reserve your date today."
        primaryLabel="Book a Party"
        primaryHref="/packages"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />

      {/* Contact Strip */}
      <section className="bg-cream py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div>
            <p className="font-sans text-xs text-plum/40 uppercase tracking-widest mb-1">Location</p>
            <p className="font-sans font-semibold text-plum">Haymarket, Virginia</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blush" />
          <div>
            <p className="font-sans text-xs text-plum/40 uppercase tracking-widest mb-1">Phone</p>
            <a href="tel:7037533200" className="font-sans font-semibold text-plum hover:text-diva-pink transition-colors">
              (703) 753-3200
            </a>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blush" />
          <div>
            <p className="font-sans text-xs text-plum/40 uppercase tracking-widest mb-1">Hours</p>
            <p className="font-sans font-semibold text-plum">Mon/Thu/Fri 2–6 · Sat–Sun 11–6</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blush" />
          <Link href="/contact" className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors">
            Get Directions →
          </Link>
        </div>
      </section>
    </>
  );
}
