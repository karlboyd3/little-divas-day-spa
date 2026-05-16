import Link from "next/link";

interface Props {
  name: string;
  price: string;
  description: string;
  emoji?: string;
}

export default function ServiceCard({ name, price, description, emoji }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-blush p-5 flex flex-col gap-3 hover:shadow-lg hover:border-diva-pink/30 transition-all">
      {emoji && <span className="text-3xl">{emoji}</span>}
      <div>
        <h3 className="font-display font-bold text-lg text-plum mb-0.5">{name}</h3>
        <p className="font-display font-bold text-diva-pink text-base">{price}</p>
      </div>
      <p className="font-sans text-sm text-plum/60 leading-relaxed flex-1">{description}</p>
      <Link
        href="/services"
        className="font-sans text-sm font-bold text-diva-pink hover:text-plum transition-colors"
      >
        Learn more →
      </Link>
    </div>
  );
}
