import Card from "../../components/ui/Card";

interface AboutCardProps {
  title: string;
  value: string;
  description: string;
}

function AboutCard({ title, value, description }: AboutCardProps) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        {title}
      </p>
      <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </Card>
  );
}

export default AboutCard;
