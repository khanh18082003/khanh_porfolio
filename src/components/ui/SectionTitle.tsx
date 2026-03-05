interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
