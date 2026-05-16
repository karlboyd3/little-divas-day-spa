import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About | Little Divas Day Spa",
  description: "Learn about Little Divas Day Spa — a kids' spa and birthday party boutique in Haymarket, Virginia.",
};

const values = [
  { icon: "💗", title: "Kid-First Design", desc: "Everything about our space is designed with kids in mind — from the décor to the products we use." },
  { icon: "🌿", title: "Non-Toxic Always", desc: "We use only non-toxic, plant-based products from Jersey Girl Creations LLC — a local family-owned business." },
  { icon: "✨", title: "Confidence & Joy", desc: "Our goal is for every child to leave feeling beautiful, confident, and celebrated." },
  { icon: "👨‍👩‍👧", title: "Family-Centered", desc: "We welcome the whole family — moms, dads, and even grandparents can join in the fun." },
];

const policies = [
  "Services are for entertainment purposes only.",
  "Services are not performed by licensed cosmetologists.",
  "All products used are non-toxic and kid-safe.",
  "Minimum service age is 3 years old.",
  "Please notify us of any allergies before your visit.",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-blush via-cream to-lavender pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Our Story ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Where every girl is a diva
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            Little Divas Day Spa is a one-of-a-kind kids&apos; spa and birthday party boutique in Haymarket, Virginia — built to give every little girl a safe, glamorous, and utterly magical experience.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream">
        {/* Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                eyebrow="Who We Are"
                title="Born from a love of little ones"
              />
              <div className="space-y-4 mt-6 font-sans text-plum/70 leading-relaxed">
                <p>
                  Little Divas Day Spa was created with one belief at its heart: <em className="text-plum font-semibold">&quot;Beauty illuminates from the inside out.&quot;</em> We want to empower every girl we meet to display her B.E.A.U.T.Y — and have an absolute blast doing it.
                </p>
                <p>
                  We offer birthday party packages, glam mini experiences, and special events for kids in a safe, welcoming environment designed entirely around children and their families.
                </p>
                <p>
                  Our vision is to boost kids&apos; confidence through social engagement and joyful activities, while strengthening family bonds. Whether it&apos;s a birthday, a special occasion, or just a fun day — every visit is a memory in the making.
                </p>
                <p>
                  We use only non-toxic, plant-based products from <strong className="text-plum">Jersey Girl Creations LLC</strong>, a local family-owned business focused on environmental safety and guest wellness.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blush to-lavender aspect-square flex items-center justify-center">
              <span className="text-8xl opacity-30">👑</span>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-lavender/20 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              eyebrow="What We Stand For"
              title="Our values"
              subtitle="Everything we do is guided by a simple belief: every child deserves to feel like a diva."
              center
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-blush p-6 text-center hover:shadow-md transition-shadow">
                  <span className="text-4xl block mb-3">{icon}</span>
                  <h3 className="font-display font-bold text-plum text-lg mb-2">{title}</h3>
                  <p className="font-sans text-sm text-plum/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              eyebrow="Good to Know"
              title="Important information"
              subtitle="We want every family to feel fully informed before their visit."
            />
            <ul className="mt-8 space-y-3">
              {policies.map((p) => (
                <li key={p} className="flex items-start gap-3 font-sans text-sm text-plum/70 bg-white rounded-xl border border-blush px-5 py-4">
                  <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <CTASection
        eyebrow="Ready to Visit?"
        title="Book your little diva's experience today"
        primaryLabel="Book a Party"
        primaryHref="/packages"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
