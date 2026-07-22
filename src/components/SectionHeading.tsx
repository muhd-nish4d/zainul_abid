interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold uppercase tracking-[0.15em] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-black/70">{description}</p>}
    </div>
  );
}
