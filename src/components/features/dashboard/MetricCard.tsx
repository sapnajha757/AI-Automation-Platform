type Props = {
  title: string;
  value: string;
};

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="rounded-xl border border-white/10 p-6">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="mt-3 text-4xl font-bold">{value}</h3>
    </div>
  );
}