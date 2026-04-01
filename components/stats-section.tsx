import { stats } from '@/lib/site-data';
import { AnimatedSection } from './animated-section';

export function StatsSection() {
  return (
    <section className="section-shell" id="metrics">
      <AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <article key={label} className="glass-card p-8">
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-6 text-4xl font-bold tracking-tight text-white">{value}</p>
              <p className="mt-2 text-sm text-text-secondary">{label}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
