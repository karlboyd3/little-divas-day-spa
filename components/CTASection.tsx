import Link from "next/link";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({ eyebrow, title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: Props) {
  return (
    <section className="bg-gradient-to-br from-diva-pink to-plum py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto">
        {eyebrow && (
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">✦ {eyebrow} ✦</p>
        )}
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">{title}</h2>
        {subtitle && (
          <p className="font-sans text-base text-white/70 leading-relaxed mb-8">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryHref.startsWith("http") ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-sm bg-white text-diva-pink px-8 py-3.5 rounded-full hover:bg-blush transition-colors shadow-md"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="font-sans font-bold text-sm bg-white text-diva-pink px-8 py-3.5 rounded-full hover:bg-blush transition-colors shadow-md"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="font-sans font-bold text-sm border-2 border-white/40 text-white px-8 py-3.5 rounded-full hover:border-white/80 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
