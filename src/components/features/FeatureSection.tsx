export default function FeatureSection() {
  const features = [
    "Infinite Canvas",
    "AI Agents",
    "Automation",
    "Enterprise Security",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-4xl font-bold">
        Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl border border-white/10 p-8 hover:border-yellow-400"
          >
            <h3 className="mb-3 text-xl font-bold">
              {feature}
            </h3>

            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}