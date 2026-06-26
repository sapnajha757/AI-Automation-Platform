import MetricCard from "./MetricCard";
import MetricChart from "./MetricChart";

export default function DashboardSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-4xl font-bold">
        Dashboard
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border border-white/10 p-8">
          <MetricChart />
        </div>

        <div className="space-y-6">
          <MetricCard title="CPU Usage" value="42%" />
          <MetricCard title="Memory" value="68%" />
          <MetricCard title="Requests" value="1.2M" />
        </div>
      </div>
    </section>
  );
}