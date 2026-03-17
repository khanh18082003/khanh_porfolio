import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step + Math.random() * 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setPhase("reveal"), 300);
        setTimeout(() => onComplete(), 1000);
      } else {
        setProgress(Math.min(current, 100));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "reveal" ? null : null}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={
          phase === "reveal"
            ? { clipPath: "inset(0 0 100% 0)" }
            : { clipPath: "inset(0 0 0% 0)" }
        }
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-text-muted) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative flex flex-col items-center gap-8">
          {/* Animated logo / monogram */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex h-24 w-24 items-center justify-center">
              {/* Spinning ring */}
              <motion.svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 96 96"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  strokeDasharray="276.46"
                  strokeDashoffset={276.46 * (1 - progress / 100)}
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-100"
                />
              </motion.svg>

              {/* Inner monogram */}
              <span
                className="font-mono text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                NTK
              </span>
            </div>
          </motion.div>

          {/* Name and role */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1
              className="text-lg font-semibold tracking-wide"
              style={{ color: "var(--color-text-primary)" }}
            >
              Nguyen Trung Khanh
            </h1>
            <p
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--color-text-muted)" }}
            >
              Backend Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div
              className="h-[2px] w-48 overflow-hidden rounded-full"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span
              className="font-mono text-[11px] tabular-nums"
              style={{ color: "var(--color-text-muted)" }}
            >
              {Math.round(progress)}%
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Preloader;
