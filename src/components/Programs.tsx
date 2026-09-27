"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookOpen, Heart, Palette } from "@phosphor-icons/react";

const programs = [
  {
    icon: <BookOpen size={32} />,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum designed to challenge students and develop critical thinking skills across all subjects.",
    image: "https://picsum.photos/seed/vopa-academic/800/500",
  },
  {
    icon: <Heart size={32} />,
    title: "Spiritual Growth",
    description:
      "Faith-based environment where students develop a personal relationship with God and a sense of purpose.",
    image: "https://picsum.photos/seed/vopa-spiritual/800/500",
  },
  {
    icon: <Palette size={32} />,
    title: "Enrichment Programs",
    description:
      "Arts, music, athletics, and extracurricular activities that nurture the whole student.",
    image: "https://picsum.photos/seed/vopa-enrichment/800/500",
  },
];

export function Programs() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {programs.map((program, i) => (
        <motion.div
          key={program.title}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group bg-white rounded-xl border border-gray-200/60 overflow-hidden hover:shadow-lg hover:shadow-blue-deep/5 hover:border-blue-deep/10 transition-all duration-300"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-4">
              {program.icon}
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              {program.title}
            </h3>
            <p className="text-sm text-gray leading-relaxed">
              {program.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
