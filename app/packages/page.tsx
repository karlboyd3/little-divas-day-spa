import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata = {
  title: "Birthday Packages | Little Divas Day Spa",
  description: "Choose from 5 birthday party packages for your little diva in Haymarket, Virginia. Packages start at $385.",
};

const packages = [
  {
    name: "Simply Sweet",
    duration: "2 hrs",
    price: "$385",
    guests: "5 children",
    addlGuest: "$75/additional guest (max 3)",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/simply-sweet",
    highlights: [
      "Mini manicure",
      "Mini pedicure",
      "Lip gloss application",
      "Glitter tattoos",
      "Party favors for all guests",
    ],
  },
  {
    name: "Seriously Sassy",
    duration: "2 hrs 50 min",
    price: "$465",
    guests: "5 children",
    addlGuest: "$75/additional guest (max 3)",
    badge: "Most Popular",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/seriously-sassy",
    highlights: [
      "Manicure & pedicure",
      "Mini facial",
      "Makeup application",
      "Hair styling",
      "Spa robe & birthday crown",
      "Party favors for all guests",
    ],
  },
  {
    name: "Toe-Tally Diva",
    duration: "3 hrs",
    price: "$525",
    guests: "5 children",
    addlGuest: "$75/additional guest (max 3)",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/toe-tally-diva",
    highlights: [
      "Manicure & pedicure",
      "Facial & mini massage",
      "Full glam makeup",
      "Hair styling",
      "Photo moment setup",
      "Spa robe & tiara",
      "Party favors",
    ],
  },
  {
    name: "Must-Have Makeover Experience",
    duration: "3 hrs 45 min",
    price: "$600",
    guests: "5 children",
    addlGuest: "$75/additional guest (max 3)",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/must-have-makeover-experience",
    highlights: [
      "Ultimate full spa treatment",
      "Mani, pedi, facial, and massage",
      "Full glam makeup & hair",
      "Themed party décor",
      "Take-home spa kit",
      "Spa robe, crown & sash",
      "Party favors",
    ],
  },
  {
    name: "Create Your Own Theme Party",
    duration: "4 hrs",
    price: "$780",
    guests: "5 children",
    addlGuest: "$75/additional guest (max 3)",
    bookingUrl: "https://www.littledivasdayspa.com/booking-calendar/create-your-own-theme-party",
    highlights: [
      "Fully custom theme of your choice",
      "Mix & match any services",
      "Dedicated party host",
      "Custom décor package",
      "Full glam for birthday girl",
      "Take-home spa kit",
      "Premium party favors",
    ],
  },
];

const policies = [
  { label: "Booking", text: "All birthday packages must be booked online, no later than 2 days in advance. Birthday packages are available on weekends only." },
  { label: "Deposit", text: "A $150 non-refundable deposit is required at the time of booking to secure your party date. The balance is due on the day of the party." },
  { label: "Rescheduling", text: "We require 2 weeks' notice to reschedule your party. Otherwise, your deposit will be forfeited." },
  { label: "Additional Guests", text: "Each package includes 5 children. Additional guests are $75 each, up to 3 extra guests maximum." },
  { label: "Outside Food", text: "A $25 fee applies if you bring outside food or a birthday cake. Outside food must be approved in advance." },
  { label: "Outside Products", text: "A $50 fee applies if you bring outside nail polish or beauty products." },
  { label: "Gel Removal", text: "A $20 gel nail polish removal fee applies per guest if needed before services." },
  { label: "Gratuity", text: "A 20% gratuity is automatically added to all party packages." },
  { label: "Military & Teachers", text: "10% discount for all Military personnel, Veterans, and Teachers. Must be mentioned at booking." },
  { label: "Allergies", text: "Please notify us of any allergies or sensitivities before your event so we can accommodate safely." },
  { label: "Disclaimer", text: "Services are for entertainment purposes only and are not performed by licensed cosmetologists. We use non-toxic, plant-based products from Jersey Girl Creations LLC." },
];

export default function PackagesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-diva-pink/20 via-blush to-lavender pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Birthday Parties ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Party packages for every diva
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            From Simply Sweet to Create Your Own — every package includes a dedicated host, non-toxic products, and memories your little one will cherish forever.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border p-7 flex flex-col gap-5 hover:shadow-xl transition-shadow ${
                  i === 1
                    ? "bg-gradient-to-br from-diva-pink to-plum text-white border-diva-pink"
                    : "bg-white border-blush"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-7 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <h2 className={`font-display font-bold text-2xl mb-2 ${i === 1 ? "text-white" : "text-plum"}`}>
                    {pkg.name}
                  </h2>
                  <div className={`flex flex-wrap gap-4 text-xs font-semibold ${i === 1 ? "text-white/70" : "text-plum/50"}`}>
                    <span>⏱ {pkg.duration}</span>
                    <span>👧 {pkg.guests}</span>
                    <span>➕ {pkg.addlGuest}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.highlights.map((h) => (
                    <li key={h} className={`font-sans text-sm flex items-start gap-2 ${i === 1 ? "text-white/90" : "text-plum/80"}`}>
                      <span className="text-gold flex-shrink-0 mt-0.5">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center justify-between pt-5 border-t ${i === 1 ? "border-white/20" : "border-blush"}`}>
                  <span className={`font-display font-bold text-3xl ${i === 1 ? "text-white" : "text-diva-pink"}`}>
                    {pkg.price}
                  </span>
                  <a
                    href={pkg.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-sans text-sm font-bold px-6 py-2.5 rounded-full transition-colors ${
                      i === 1
                        ? "bg-white text-diva-pink hover:bg-blush"
                        : "bg-diva-pink text-white hover:bg-plum"
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Booking note */}
          <div id="book" className="bg-diva-pink/10 border border-diva-pink/20 rounded-3xl p-8 mb-20 text-center">
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-diva-pink mb-3">✦ Ready to Book? ✦</p>
            <h2 className="font-display font-bold text-2xl text-plum mb-3">All bookings are made online</h2>
            <p className="font-sans text-plum/60 text-sm max-w-lg mx-auto mb-6">
              Click below to visit our booking page and reserve your party date. A non-refundable deposit is required to secure your spot. Birthday parties are available on weekends only.
            </p>
            <a
              href="https://www.littledivasdayspa.com/birthdaypackages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-sans font-bold text-sm bg-diva-pink text-white px-8 py-3.5 rounded-full hover:bg-plum transition-colors"
            >
              Book Online →
            </a>
          </div>

          {/* Party Add-ons */}
          <div className="mb-20">
            <SectionTitle
              eyebrow="Extras"
              title="Party add-ons & food"
              subtitle="Enhance your party with food, activities, and spa gift bags. Add-ons must be paired with a package."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              <div className="bg-white rounded-2xl border border-blush p-5">
                <p className="font-sans text-xs font-bold text-diva-pink tracking-widest uppercase mb-3">Food Options</p>
                <ul className="space-y-2 font-sans text-sm text-plum/70">
                  <li className="flex justify-between"><span>Pizza (Papa Johns)</span><span className="font-semibold text-plum">$17.49</span></li>
                  <li className="flex justify-between"><span>Ice Cream Cups</span><span className="font-semibold text-plum">$1.50/cup</span></li>
                  <li className="flex justify-between"><span>Cupcakes (min. 6)</span><span className="font-semibold text-plum">$3.00 each</span></li>
                  <li className="flex justify-between"><span>Chocolate Covered Fruit</span><span className="font-semibold text-plum">$30.00/dozen</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-blush p-5">
                <p className="font-sans text-xs font-bold text-diva-pink tracking-widest uppercase mb-3">Activity Add-Ons</p>
                <ul className="space-y-2 font-sans text-sm text-plum/70">
                  <li className="flex justify-between"><span>Little Diva Art Party</span><span className="font-semibold text-plum">$100 / 5 kids</span></li>
                  <li className="flex justify-between"><span>Jewelry Making</span><span className="font-semibold text-plum">$75 / 5 kids</span></li>
                  <li className="flex justify-between"><span>S&apos;mores Party</span><span className="font-semibold text-plum">$65 / 5 kids</span></li>
                  <li className="flex justify-between"><span>Diva Yoga Party</span><span className="font-semibold text-plum">$75 / 5 kids</span></li>
                  <li className="flex justify-between"><span>Girl Scout Badge Event</span><span className="font-semibold text-plum">Varies</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-blush p-5">
                <p className="font-sans text-xs font-bold text-diva-pink tracking-widest uppercase mb-3">Extras</p>
                <ul className="space-y-2 font-sans text-sm text-plum/70">
                  <li className="flex justify-between"><span>Spa Gift Bag</span><span className="font-semibold text-plum">$10/bag</span></li>
                  <li className="flex justify-between"><span>Additional Time (30 min)</span><span className="font-semibold text-plum">$50</span></li>
                  <li className="flex justify-between"><span>Party Room (non-birthday)</span><span className="font-semibold text-plum">$85 / 30 min</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <SectionTitle
              eyebrow="Policies"
              title="Good to know before you book"
              subtitle="We want your experience to be smooth and stress-free. Please review our policies."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {policies.map(({ label, text }) => (
                <div key={label} className="bg-white rounded-2xl border border-blush px-5 py-4">
                  <p className="font-sans text-xs font-bold text-diva-pink uppercase tracking-widest mb-1">{label}</p>
                  <p className="font-sans text-sm text-plum/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <CTASection
        eyebrow="Questions?"
        title="We're happy to help"
        subtitle="Not sure which package is right for your little diva? Reach out and we'll help you choose."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
