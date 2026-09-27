import { Button } from "./Button";

type PageCtaProps = {
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageCta({
  title,
  description,
  primary,
  secondary,
}: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-blue-deep">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        {(primary || secondary) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primary && <Button href={primary.href}>{primary.label}</Button>}
            {secondary && (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
