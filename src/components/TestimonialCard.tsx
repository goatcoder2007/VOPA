"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quotes } from "@phosphor-icons/react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  index?: number;
};

export function TestimonialCard({
  quote,
  name,
  role,
  index = 0,
}: TestimonialCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative bg-white rounded-2xl border border-blue-deep/10 p-7 md:p-8 h-full flex flex-col"
    >
      <Quotes size={32} weight="fill" className="text-gold/70 mb-5" />
      <blockquote className="flex-1 text-charcoal text-base leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="pt-5 border-t border-blue-deep/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-deep/10 flex items-center justify-center text-blue-deep text-sm font-bold shrink-0">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <div className="text-sm font-semibold text-charcoal">{name}</div>
            <div className="text-xs text-gray">{role}</div>
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}
