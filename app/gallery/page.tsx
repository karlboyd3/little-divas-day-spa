import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Gallery | Little Divas Day Spa",
  description: "See photos of our little divas enjoying spa parties and mini experiences at Little Divas Day Spa in Haymarket, Virginia.",
};

const placeholderItems = [
  { label: "Birthday Party Fun", emoji: "🎂", color: "from-blush to-diva-pink/40" },
  { label: "Mani Time", emoji: "💅", color: "from-lavender to-diva-pink/20" },
  { label: "Glam Makeover", emoji: "✨", color: "from-blush to-lavender" },
  { label: "Mini Divas", emoji: "👑", color: "from-cream to-blush" },
  { label: "BFF Day", emoji: "💗", color: "from-lavender to-blush" },
  { label: "Spa Robes", emoji: "🎀", color: "from-diva-pink/20 to-lavender" },
  { label: "Birthday Crown", emoji: "🌟", color: "from-blush to-diva-pink/30" },
  { label: "Party Squad", emoji: "🎉", color: "from-cream to-lavender" },
  { label: "Pedicure Day", emoji: "✦", color: "from-lavender to-cream" },
  { label: "Mommy & Me", emoji: "👩‍👧", color: "from-blush to-cream" },
  { label: "Glitter Tattoos", emoji: "⭐", color: "from-diva-pink/10 to-blush" },
  { label: "Take-Home Kit", emoji: "🧴", color: "from-lavender to-diva-pink/10" },
];

export default function GalleryPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-lavender via-blush to-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Gallery ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Our little divas
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            A peek at the magic, glam, and smiles happening inside our spa every day.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Photos"
            title="Memories made here"
            subtitle="Photos coming soon — follow us on social media for the latest looks and party inspiration."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {placeholderItems.map(({ label, emoji, color }) => (
              <div
                key={label}
                className={`rounded-2xl bg-gradient-to-br ${color} aspect-square flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-5xl opacity-25">{emoji}</span>
                <span className="font-sans text-xs text-plum/40 font-semibold text-center px-2">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl border border-blush p-8 text-center">
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-diva-pink mb-3">✦ Follow Us ✦</p>
            <h2 className="font-display font-bold text-2xl text-plum mb-2">See us on social media</h2>
            <p className="font-sans text-sm text-plum/60 mb-6">
              Follow Little Divas Day Spa for real photos, party inspo, and behind-the-scenes glam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/littledivasdayspa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-sm bg-diva-pink text-white px-8 py-3 rounded-full hover:bg-plum transition-colors"
              >
                Instagram →
              </a>
              <a
                href="https://www.facebook.com/littledivasdayspa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-sm border-2 border-blush text-plum px-8 py-3 rounded-full hover:border-diva-pink hover:text-diva-pink transition-colors"
              >
                Facebook →
              </a>
            </div>
          </div>
        </div>
      </main>

      <CTASection
        eyebrow="Book Your Party"
        title="Create memories like these"
        subtitle="Reserve your little diva's party today and make magic happen."
        primaryLabel="Book a Party"
        primaryHref="/packages"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
