import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
      {children}
    </span>
  );
}

export default Badge;
