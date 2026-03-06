import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}

function RevealSection({
  children,
  className = "",
  delay = 0.2,
  y = 28,
  once = true,
  amount = 0.2,
}: RevealSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default RevealSection;
