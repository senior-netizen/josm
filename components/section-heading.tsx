import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 max-w-3xl', className)}>
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base text-text-secondary md:text-lg">{description}</p> : null}
    </div>
  );
}
