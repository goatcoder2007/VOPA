"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Users, Calendar, Trophy } from "@phosphor-icons/react";

const facts = [
  {
    icon: <GraduationCap size={28} />,
    value: "Forms 1-4",
    label: "Form Levels",
  },
  {
    icon: <Users size={28} />,
    value: "350+",
    label: "Students Enrolled",
  },
  {
    icon: <Calendar size={28} />,
    value: "1985",
    label: "Year Established",
  },
  {
    icon: <Trophy size={28} />,
    value: "98%",
    label: "College Acceptance",
  },
];

export function QuickFacts() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {facts.map((fact, i) => (
        <motion.div
          key={fact.label}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="bg-white rounded-xl border border-gray-200/60 p-6 text-center hover:shadow-md hover:shadow-blue-deep/5 transition-shadow duration-200"
        >
          <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold mx-auto mb-3">
            {fact.icon}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-blue-deep tracking-tight mb-1">
            {fact.value}
          </div>
          <div className="text-sm text-gray">{fact.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
