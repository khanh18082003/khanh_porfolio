import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
      {children}
    </span>
  );
}

export default Badge;
