interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, center = false, light = false }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className={`font-sans text-xs font-bold tracking-[0.2em] uppercase mb-2 ${light ? "text-blush/70" : "text-diva-pink"}`}>
          ✦ {eyebrow} ✦
        </p>
      )}
      <h2 className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-3 ${light ? "text-white" : "text-plum"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-plum/60"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
