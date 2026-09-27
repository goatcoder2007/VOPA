import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gold text-charcoal hover:bg-gold-light hover:shadow-md hover:shadow-gold/20",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-blue-deep",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
