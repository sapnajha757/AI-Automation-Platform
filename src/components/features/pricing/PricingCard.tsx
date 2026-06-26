type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
};

export default function PricingCard({
  title,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 p-8 hover:border-yellow-400 transition">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="my-6 text-5xl font-bold">
        {price}
        <span className="text-lg text-gray-400">/mo</span>
      </p>

      <ul className="space-y-3">
        {features.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-lg bg-yellow-400 py-3 font-bold text-black">
        Get Started
      </button>
    </div>
  );
}