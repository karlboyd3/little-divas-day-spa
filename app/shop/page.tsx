import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Gift Certificates | Little Divas Day Spa",
  description: "Buy a gift certificate for Little Divas Day Spa in Haymarket, Virginia. The perfect gift for any little diva.",
};

const amounts = ["$25", "$50", "$75", "$100", "$150", "$200", "$250", "Custom Amount"];

const occasions = [
  { emoji: "🎂", label: "Birthdays" },
  { emoji: "🎄", label: "Holidays" },
  { emoji: "🌸", label: "Spring Break" },
  { emoji: "🏅", label: "Awards & Achievements" },
  { emoji: "💗", label: "Just Because" },
  { emoji: "🎀", label: "Special Occasions" },
];

export default function ShopPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gold/20 via-blush to-lavender pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">✦ Perfect Gift ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Give the gift of glamour
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            Little Divas gift certificates are available for any amount and make the perfect present for the little diva in your life.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream">
        {/* Gift Card Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Visual */}
              <div className="rounded-3xl bg-gradient-to-br from-diva-pink to-plum p-10 flex flex-col items-center justify-center text-center min-h-64 shadow-xl">
                <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">✦ Gift Certificate ✦</p>
                <p className="font-display font-bold text-3xl text-white mb-1">Little Divas</p>
                <p className="font-sans text-white/60 text-sm tracking-widest uppercase mb-4">Day Spa</p>
                <span className="text-5xl mb-4">💝</span>
                <p className="font-sans text-white/70 text-sm">
                  For the little diva who deserves the world.
                </p>
              </div>

              {/* Info */}
              <div>
                <SectionTitle
                  eyebrow="Gift Certificates"
                  title="Available amounts"
                />
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      className={`font-sans font-bold text-sm py-3 rounded-xl border-2 transition-colors hover:border-diva-pink hover:text-diva-pink ${
                        amount === "$100"
                          ? "border-diva-pink text-diva-pink bg-diva-pink/5"
                          : "border-blush text-plum bg-white"
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <div className="mt-8 space-y-3 font-sans text-sm text-plum/70">
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Gift certificates never expire.
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Redeemable for any service or package.
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Available for purchase in-store or by phone.
                  </div>
                </div>

                <a
                  href="tel:7036000000"
                  className="mt-8 inline-flex font-sans font-bold text-sm bg-gold text-white px-8 py-3.5 rounded-full hover:bg-plum transition-colors"
                >
                  Call to Purchase: (703) 600-0000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="bg-lavender/20 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              eyebrow="Perfect For"
              title="Any occasion, any reason"
              subtitle="A Little Divas gift certificate is always the right choice."
              center
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
              {occasions.map(({ emoji, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-blush p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-2">{emoji}</span>
                  <p className="font-sans text-xs font-semibold text-plum">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection
        eyebrow="Give the Gift of Glam"
        title="The gift every little diva wants"
        subtitle="Call us or stop by to pick up a gift certificate today."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Packages"
        secondaryHref="/packages"
      />
    </>
  );
}
