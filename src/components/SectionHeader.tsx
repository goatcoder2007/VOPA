type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.18em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray text-lg leading-relaxed max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  );
}
