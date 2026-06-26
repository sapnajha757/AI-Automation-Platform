export default function HeroWorkflowPreview() {
  const nodes = [
    "Email Trigger",
    "AI Agent",
    "Decision",
    "Database",
    "Send Email",
  ];

  return (
    <div className="mt-20 w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="grid gap-6 md:grid-cols-5">
        {nodes.map((node) => (
          <div
            key={node}
            className="rounded-xl border border-white/10 bg-oceanic p-6 text-center transition hover:border-forsythia"
          >
            <p className="font-mono text-sm">{node}</p>
          </div>
        ))}
      </div>

    </div>
  );
}