import FAQAccordion from "@/components/FAQAccordion";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "FAQ | Little Divas Day Spa",
  description: "Frequently asked questions about Little Divas Day Spa — services, policies, booking, and more.",
};

const faqGroups = [
  {
    category: "General",
    emoji: "✨",
    items: [
      {
        question: "What is Little Divas Day Spa?",
        answer: "Little Divas Day Spa is a kids' spa and birthday party boutique in Haymarket, Virginia. We offer a range of fun, glamorous spa experiences for children — from mini manicures and facials to full birthday party packages.",
      },
      {
        question: "What is the minimum age for services?",
        answer: "We welcome little divas ages 3 and up for all services and party packages.",
      },
      {
        question: "Are your services performed by licensed cosmetologists?",
        answer: "No. Our services are for entertainment purposes only and are not performed by licensed cosmetologists. We focus on creating fun, confidence-building experiences for kids in a safe environment.",
      },
      {
        question: "Are the products you use safe for kids?",
        answer: "Yes! All products used at Little Divas Day Spa are non-toxic and kid-safe. We take safety very seriously. Please notify us of any allergies or sensitivities prior to your visit.",
      },
    ],
  },
  {
    category: "Birthday Parties",
    emoji: "🎂",
    items: [
      {
        question: "How do I book a birthday party?",
        answer: "All birthday packages must be booked online. Visit our Packages page to browse options and book your date. A non-refundable deposit is required to secure your reservation.",
      },
      {
        question: "When are birthday parties available?",
        answer: "Birthday party packages are available on weekends only (Saturday and Sunday).",
      },
      {
        question: "How many guests can attend a party?",
        answer: "Each package accommodates a different number of guests, ranging from 6 to 10 depending on the package. Additional guests can be added for a per-guest fee.",
      },
      {
        question: "Can I bring a birthday cake or outside food?",
        answer: "Yes, you may bring outside food or a birthday cake, but a $25 outside food fee applies.",
      },
      {
        question: "Can I bring my own nail polish or beauty products?",
        answer: "Outside beauty products are allowed with a $50 outside product fee. We recommend using our non-toxic, kid-safe products for the safest experience.",
      },
      {
        question: "Is gratuity included?",
        answer: "Yes, a 20% gratuity is automatically added to all party packages and services.",
      },
      {
        question: "What if guests have gel nail polish?",
        answer: "A $20 gel nail polish removal fee applies per guest if gel removal is needed before their service.",
      },
    ],
  },
  {
    category: "Mini Services",
    emoji: "💅",
    items: [
      {
        question: "Do I need to book mini services in advance?",
        answer: "Yes, all mini packages and services must be booked online or by phone in advance to ensure availability.",
      },
      {
        question: "Can a parent participate in the experience?",
        answer: "Absolutely! Our Mommy & Me and Daddy & Me packages are designed for parents and children to enjoy together.",
      },
      {
        question: "What mini services are available?",
        answer: "We offer a range of à la carte services including mini manicures, mini pedicures, mini facials, hair styling, makeup application, glitter tattoos, and more. See our Services page for the full menu.",
      },
    ],
  },
  {
    category: "Policies",
    emoji: "📋",
    items: [
      {
        question: "Is the deposit refundable?",
        answer: "No, the deposit required at booking is non-refundable. It secures your party date and time slot.",
      },
      {
        question: "What if my child has allergies?",
        answer: "Please notify us of any allergies, skin sensitivities, or conditions before your visit so we can accommodate your child safely.",
      },
      {
        question: "What is the disclaimer for services?",
        answer: "All services at Little Divas Day Spa are for entertainment purposes only. Services are not performed by licensed cosmetologists. All products used are non-toxic and kid-safe.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-lavender via-blush to-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-diva-pink mb-4">✦ Questions? ✦</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-plum leading-tight mb-4">
            Frequently asked questions
          </h1>
          <p className="font-sans text-plum/70 text-lg max-w-2xl leading-relaxed">
            Everything you need to know before visiting Little Divas Day Spa.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30Z" fill="#FFF8F0" />
        </svg>
      </div>

      <main className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqGroups.map(({ category, emoji, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{emoji}</span>
                <SectionTitle eyebrow="" title={category} />
              </div>
              <FAQAccordion items={items} />
            </div>
          ))}
        </div>
      </main>

      <CTASection
        eyebrow="Still Have Questions?"
        title="We'd love to hear from you"
        subtitle="Reach out and our team will be happy to help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Book a Party"
        secondaryHref="/packages"
      />
    </>
  );
}
