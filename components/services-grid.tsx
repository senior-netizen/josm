import { services } from '@/lib/site-data';
import { AnimatedSection } from './animated-section';
import { SectionHeading } from './section-heading';

export function ServicesGrid() {
  return (
    <section id="services" className="section-shell border-t border-white/10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Core capabilities"
          title="Integrated electrical engineering from concept to commissioning"
          description="Cross-disciplinary services structured for uptime, compliance, and long-term maintainability."
        />
      </AnimatedSection>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <AnimatedSection key={title}>
            <article className="glass-card group h-full p-8 transition hover:border-accent/50 hover:bg-accent/[0.05]">
              <Icon className="h-6 w-6 text-accent transition group-hover:scale-105" />
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{description}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
