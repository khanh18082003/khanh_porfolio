interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  label?: string;
}

function SectionTitle({
  title,
  subtitle,
  centered = true,
  label,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {label && (
        <span className="mb-3 inline-block font-mono text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400"
          style={centered ? { margin: "0.75rem auto 0" } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
