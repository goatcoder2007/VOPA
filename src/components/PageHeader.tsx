import Image from "next/image";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageOpacity?: number;
  overlay?: "heavy" | "light" | "soft";
  imagePosition?: string;
  size?: "default" | "tall";
};

const overlayStyles: Record<PageHeaderProps["overlay"] & string, string[]> = {
  heavy: ["bg-gradient-to-br from-blue-deep via-blue-deep/90 to-blue-deep/70"],
  light: [
    "bg-blue-deep/20",
    "bg-gradient-to-r from-blue-deep from-25% via-blue-deep/45 via-50% to-transparent",
  ],
  // Neutral scrim instead of a flat blue wash, so a photo at full opacity
  // keeps its own colour and the blue only sits behind the text. Kept light
  // because the heading and subtitle carry their own shadow.
  soft: [
    "bg-charcoal/15",
    "bg-gradient-to-r from-blue-deep/65 from-10% via-blue-deep/35 via-35% to-transparent",
  ],
};

const sizeStyles = {
  default: "pt-24 md:pt-32 pb-16 md:pb-20",
  tall: "pt-32 md:pt-44 pb-24 md:pb-32",
} as const;

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  imageOpacity = 40,
  overlay = "heavy",
  imagePosition = "center",
  size = "default",
}: PageHeaderProps) {
  return (
    <section className="relative bg-blue-deep overflow-hidden">
      {imageUrl && (
        <>
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              fill
              priority
              sizes="100vw"
              style={{
                opacity: imageOpacity / 100,
                objectPosition: imagePosition,
              }}
              className="object-cover"
            />
          </div>
          {overlayStyles[overlay].map((layer) => (
            <div key={layer} className={`absolute inset-0 ${layer}`} />
          ))}
        </>
      )}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]}`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5 [text-shadow:0_2px_14px_rgba(2,10,30,0.45)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl [text-shadow:0_1px_10px_rgba(2,10,30,0.45)]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="relative z-10 h-1.5 w-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
    </section>
  );
}
