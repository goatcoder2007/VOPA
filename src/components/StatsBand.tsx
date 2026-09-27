"use client";

import { motion, useReducedMotion } from "motion/react";

type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats: Stat[];
  tone?: "light" | "dark";
};

export function StatsBand({ stats, tone = "light" }: StatsBandProps) {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-blue-deep/10 rounded-2xl overflow-hidden border border-blue-deep/10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`${
            tone === "dark"
              ? "bg-blue-deep text-white"
              : "bg-white text-blue-deep"
          } px-6 py-8 md:py-10 text-center`}
        >
          <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {stat.value}
          </div>
          <div
            className={`text-sm ${
              tone === "dark" ? "text-white/70" : "text-gray"
            }`}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
