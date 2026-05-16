import Link from "next/link";

interface Props {
  name: string;
  duration: string;
  price: string;
  guests: string;
  highlights: string[];
  featured?: boolean;
  badge?: string;
}

export default function PackageCard({ name, duration, price, guests, highlights, featured, badge }: Props) {
  return (
    <div
      className={`relative rounded-3xl p-6 flex flex-col gap-4 border transition-shadow hover:shadow-xl ${
        featured
          ? "bg-gradient-to-br from-diva-pink to-plum text-white border-diva-pink shadow-lg"
          : "bg-white border-blush"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-6 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
          {badge}
        </span>
      )}

      <div>
        <h3 className={`font-display font-bold text-xl mb-1 ${featured ? "text-white" : "text-plum"}`}>{name}</h3>
        <div className={`flex flex-wrap gap-3 text-xs font-semibold ${featured ? "text-white/70" : "text-plum/50"}`}>
          <span>⏱ {duration}</span>
          <span>👧 {guests}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {highlights.map((item) => (
          <li key={item} className={`font-sans text-sm flex items-start gap-2 ${featured ? "text-white/90" : "text-plum/80"}`}>
            <span className="mt-0.5 text-gold flex-shrink-0">✦</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-current/10">
        <span className={`font-display font-bold text-2xl ${featured ? "text-white" : "text-diva-pink"}`}>{price}</span>
        <Link
          href="/packages"
          className={`font-sans text-sm font-bold px-5 py-2 rounded-full transition-colors ${
            featured
              ? "bg-white text-diva-pink hover:bg-blush"
              : "bg-diva-pink text-white hover:bg-plum"
          }`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
