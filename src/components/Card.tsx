import Link from "next/link";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export function Card({
  icon,
  title,
  description,
  href,
  imageUrl,
  imageAlt,
}: CardProps) {
  const content = (
    <>
      {imageUrl && (
        <div className="aspect-[16/10] overflow-hidden rounded-t-xl">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-charcoal mb-2">{title}</h3>
        <p className="text-sm text-gray leading-relaxed">{description}</p>
      </div>
    </>
  );

  const cardClasses =
    "bg-white rounded-xl border border-gray-200/60 overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-blue-deep/5 hover:border-blue-deep/10";

  if (href) {
    return (
      <Link href={href} className={`block ${cardClasses}`}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
