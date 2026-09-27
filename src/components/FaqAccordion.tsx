"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-blue-deep/10 border-y border-blue-deep/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <span className="text-base md:text-lg font-semibold text-charcoal group-hover:text-blue-deep transition-colors">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  open
                    ? "bg-blue-deep border-blue-deep text-white rotate-180"
                    : "border-blue-deep/20 text-blue-deep"
                }`}
              >
                <CaretDown size={16} weight="bold" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-gray leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
