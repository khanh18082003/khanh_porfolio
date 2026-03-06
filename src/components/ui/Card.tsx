import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
