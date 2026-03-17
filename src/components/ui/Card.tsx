import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700 ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
