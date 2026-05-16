import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Shop | Little Divas Day Spa",
  description: "Shop soaps, lotions, bath bombs, lip balm, and gift certificates from Little Divas Day Spa in Haymarket, Virginia.",
};

const occasions = [
  { emoji: "🎂", label: "Birthdays" },
  { emoji: "🎄", label: "Holidays" },
  { emoji: "🌸", label: "Spring Break" },
  { emoji: "🏅", label: "Awards & Achievements" },
  { emoji: "💗", label: "Just Because" },
  { emoji: "🎀", label: "Special Occasions" },
];

const soaps = [
  { name: "Bubble Gum Soap", price: "$6.00", emoji: "🫧", href: "https://www.littledivasdayspa.com/product-page/bubble-gum-soap" },
  { name: "Honey & Oatmeal Soap", price: "$6.00", emoji: "🍯", href: "https://www.littledivasdayspa.com/product-page/honey-oatmeal-soap" },
  { name: "White Tea & Ginger Soap", price: "$6.00", emoji: "🍵", href: "https://www.littledivasdayspa.com/product-page/white-tea-ginger-soap" },
  { name: "Cotton Candy Soap", price: "$6.00", emoji: "🩷", href: "https://www.littledivasdayspa.com/product-page/cotton-candy-soap" },
  { name: "Activated Charcoal & Tea Tree Soap", price: "$6.00", emoji: "🖤", href: "https://www.littledivasdayspa.com/product-page/activated-charcoal-tea-tree-soap" },
];

const bodyProducts = [
  { name: "Cotton Candy Body Lotion", price: "$7.50", emoji: "🩷", href: "https://www.littledivasdayspa.com/product-page/cotton-candy-body-lotion" },
  { name: "Bubble Gum Body Lotion", price: "$7.50", emoji: "🫧", href: "https://www.littledivasdayspa.com/product-page/bubble-gum-body-lotion" },
  { name: "Honeyed Pineapple Body Lotion", price: "$7.50", emoji: "🍍", href: "https://www.littledivasdayspa.com/product-page/honeyed-pineapple-body-lotion" },
  { name: "Honey & Oatmeal Body Lotion", price: "$7.50", emoji: "🍯", href: "https://www.littledivasdayspa.com/product-page/honey-oatmeal-body-lotion" },
  { name: "LDDS Crown Bath Bomb", price: "$5.00", emoji: "👑", href: "https://www.littledivasdayspa.com/product-page/ldds-crown-bath-bomb" },
  { name: "Bubble Gum Lip Balm", price: "$1.50", emoji: "💋", href: "https://www.littledivasdayspa.com/product-page/bubble-gum-lip-balm" },
];

export default function ShopPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gold/20 via-blush to-lavender pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">✦ Shop ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Glam goodies & gift certificates
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            Take the Little Divas experience home — shop our soaps, lotions, bath bombs, and gift certificates.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream">

        {/* Soaps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <SectionTitle
                eyebrow="Soaps"
                title="Fun scents for little divas"
                subtitle="Non-toxic, kid-friendly soaps in our most-loved scents."
              />
              <a
                href="https://www.littledivasdayspa.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors whitespace-nowrap"
              >
                View full shop →
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {soaps.map(({ name, price, emoji, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-blush p-5 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:border-diva-pink/40 transition-all group"
                >
                  <span className="text-4xl">{emoji}</span>
                  <div>
                    <p className="font-display font-bold text-plum text-sm leading-snug mb-1 group-hover:text-diva-pink transition-colors">{name}</p>
                    <p className="font-sans font-bold text-diva-pink text-base">{price}</p>
                  </div>
                  <span className="font-sans text-xs font-semibold text-diva-pink/60 group-hover:text-diva-pink transition-colors">Shop now →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Body Products */}
        <section className="bg-lavender/20 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <SectionTitle
                eyebrow="Lotions & Bath"
                title="Body lotions, bath bombs & more"
                subtitle="Treat your little diva to her favorite scents at home."
              />
              <a
                href="https://www.littledivasdayspa.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors whitespace-nowrap"
              >
                View full shop →
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {bodyProducts.map(({ name, price, emoji, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-blush p-5 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:border-diva-pink/40 transition-all group"
                >
                  <span className="text-4xl">{emoji}</span>
                  <div>
                    <p className="font-display font-bold text-plum text-sm leading-snug mb-1 group-hover:text-diva-pink transition-colors">{name}</p>
                    <p className="font-sans font-bold text-diva-pink text-base">{price}</p>
                  </div>
                  <span className="font-sans text-xs font-semibold text-diva-pink/60 group-hover:text-diva-pink transition-colors">Shop now →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Certificate */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl bg-gradient-to-br from-diva-pink to-plum p-10 flex flex-col items-center justify-center text-center min-h-64 shadow-xl">
                <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-2">✦ Gift Certificate ✦</p>
                <p className="font-display font-bold text-3xl text-white mb-1">Little Divas</p>
                <p className="font-sans text-white/60 text-sm tracking-widest uppercase mb-4">Day Spa</p>
                <span className="text-5xl mb-4">💝</span>
                <p className="font-sans text-white/70 text-sm">For the little diva who deserves the world.</p>
              </div>

              <div>
                <SectionTitle eyebrow="Perfect Gift" title="Gift certificates" />
                <div className="mt-6 space-y-3 font-sans text-sm text-plum/70">
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Available in-store or online — starting at $40.
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Gift certificates never expire.
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-blush rounded-xl px-4 py-3">
                    <span className="text-gold mt-0.5">✦</span>
                    Redeemable for any service or package.
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.littledivasdayspa.com/product-page/a-journey-to-defining-your-own-b-e-a-u-t-y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-sans font-bold text-sm bg-gold text-white px-8 py-3.5 rounded-full hover:bg-plum transition-colors"
                  >
                    Buy Gift Certificate →
                  </a>
                  <a
                    href="tel:7037533200"
                    className="inline-flex font-sans font-bold text-sm border-2 border-gold text-plum px-8 py-3.5 rounded-full hover:bg-gold hover:text-white transition-colors"
                  >
                    Call: (703) 753-3200
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="bg-lavender/20 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              eyebrow="Perfect For"
              title="Any occasion, any reason"
              subtitle="A Little Divas gift is always the right choice."
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
        eyebrow="Ready to Shop?"
        title="Visit the full Little Divas shop"
        subtitle="Browse all products, gift certificates, and more."
        primaryLabel="Shop Now"
        primaryHref="https://www.littledivasdayspa.com/shop"
        secondaryLabel="View Packages"
        secondaryHref="/packages"
      />
    </>
  );
}
