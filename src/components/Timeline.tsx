"use client";

import { motion, useReducedMotion } from "motion/react";

const milestones = [
  {
    year: "1982",
    title: "A Community Is Born",
    description:
      "The village of Valley of Peace is founded in the Cayo District. Students seeking a secondary education must travel to Belmopan — a journey once made by tractor-pulled cart.",
  },
  {
    year: "2006",
    title: "School Founded",
    description:
      "Valley of Peace SDA Academy opens as the community's first and only high school, bringing secondary education home to Valley of Peace families.",
  },
  {
    year: "2024",
    title: "Free Tuition for All",
    description:
      "The academy joins Belize's Education Upliftment Project — tuition is waived and every student receives uniforms and a free daily lunch.",
  },
];

export function Timeline() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-deep/15 -translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {milestones.map((milestone, i) => (
          <motion.div
            key={milestone.year}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-deep border-2 border-white shadow-sm -translate-x-1/2 mt-1.5 z-10" />

            <div
              className={`flex-1 pl-10 md:pl-0 ${
                i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}
            >
              <span className="inline-block text-sm font-bold text-gold mb-1">
                {milestone.year}
              </span>
              <h3 className="text-lg font-semibold text-charcoal mb-1">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed max-w-sm">
                {milestone.description}
              </p>
            </div>

            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
