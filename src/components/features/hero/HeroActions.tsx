export default function HeroActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button className="rounded-lg bg-forsythia px-8 py-4 font-semibold text-oceanic transition hover:scale-105">
        Build Workflow
      </button>

      <button className="rounded-lg border border-white/10 px-8 py-4 transition hover:border-forsythia">
        Book Demo
      </button>
    </div>
  );
}