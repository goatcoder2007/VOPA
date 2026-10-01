import { Icon } from "@/components/Icon";

const motto = "To educate is to redeem";

const statements = [
  {
    label: "Mission",
    body: "To provide well-rounded education which develops the students for productive citizenship on earth and in heaven.",
    accent: "var(--gold)",
    wash: "from-gold/25",
  },
  {
    label: "Vision",
    body: "Valley of Peace Seventh-day Adventist will be recognized in the country of Belize as a high school that nurtures intellectual vitality — one where lives are transformed through holistic education, and the student is nurtured one at a time to become responsible members of the community and country.",
    accent: "var(--gold-light)",
    wash: "from-gold-light/25",
  },
];

export function MissionVision() {
  return (
    <section aria-labelledby="motto-heading" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <blockquote className="text-center">
          <Icon name="Cross" size={26} weight="fill" className="mx-auto text-gold mb-7" />
          <h2
            id="motto-heading"
            className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight leading-[1.08] text-balance"
          >
            {motto}
          </h2>
        </blockquote>
      </div>

      <div className="mt-16 md:mt-20 bg-blue-deep overflow-hidden">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-blue-light/20 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_36%,var(--gold)_36%,var(--gold)_42%,transparent_42%)] opacity-35 md:opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_60%,var(--gold-light)_60%,var(--gold-light)_66%,transparent_66%)] opacity-55 md:opacity-65"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_83%,var(--gold)_83%,var(--gold)_88%,transparent_88%)] opacity-30 md:opacity-40"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-20">
              {statements.map((statement, index) => (
                <div
                  key={statement.label}
                  className={
                    index === 1
                      ? "md:border-l md:border-white/20 md:pl-20"
                      : undefined
                  }
                >
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                    <span
                      className="h-px w-8"
                      style={{ backgroundColor: statement.accent }}
                      aria-hidden="true"
                    />
                    {statement.label}
                  </p>
                  <p className="mt-6 text-lg md:text-xl leading-[1.7] text-white/90 text-pretty">
                    {statement.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}