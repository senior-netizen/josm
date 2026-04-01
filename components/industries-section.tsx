import { industries } from '@/lib/site-data';
import { AnimatedSection } from './animated-section';
import { SectionHeading } from './section-heading';

export function IndustriesSection() {
  return (
    <section id="industries" className="section-shell border-t border-white/10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Industry coverage"
          title="Domain-specific engineering for high-stakes operations"
          description="Solutions tuned to operational realities across Zimbabwe’s key economic sectors."
        />
      </AnimatedSection>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {industries.map(({ icon: Icon, name, description }) => (
          <AnimatedSection key={name}>
            <article className="glass-card h-full p-8">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-xl font-semibold text-white">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{description}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
