"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@/components/Icon";

export type CoreSubject = {
  icon: React.ReactNode;
  title: string;
  description: string;
  marker?: string;
  featured?: boolean;
};

type CoreSubjectsProps = {
  subjects: CoreSubject[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export function CoreSubjects({ subjects }: CoreSubjectsProps) {
  const reduce = useReducedMotion();
  const pillars = subjects.filter((subject) => subject.featured);
  const foundation = subjects.filter((subject) => !subject.featured);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          align="center"
          eyebrow="Forms 1 & 2"
          title="The common core"
          description="In Forms 1 and 2, every student takes the same foundation of subjects. This shared core makes sure no one misses the basics — and it means a complete schedule of learning for everyone."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((subject, i) => (
            <motion.div
              key={subject.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="rounded-2xl bg-gold-pale border border-gold/30 p-8 md:p-9"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-charcoal shrink-0">
                  {subject.icon}
                </div>
                {subject.marker && (
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-charcoal">
                    {subject.marker}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-charcoal tracking-tight mb-2.5">
                {subject.title}
              </h3>
              <p className="text-gray leading-relaxed max-w-[46ch]">
                {subject.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-5 gap-px bg-blue-deep/10 rounded-2xl overflow-hidden border border-blue-deep/10">
          {foundation.map((subject, i) => (
            <motion.div
              key={subject.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease,
                delay: (pillars.length + i) * 0.08,
              }}
              className="bg-white px-6 py-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-4">
                {subject.icon}
              </div>
              <h3 className="text-base font-semibold text-charcoal mb-2">
                {subject.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {subject.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3.5 text-sm text-gray max-w-2xl">
          <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center text-charcoal shrink-0">
            <Icon name="Plant" size={18} weight="fill" />
          </div>
          <p>
            Agriculture runs in every form, so every student keeps a hands-on
            relationship with the land.
          </p>
        </div>
      </div>

      <div className="h-1.5 w-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
    </section>
  );
}
