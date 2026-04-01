import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const principles = ['Engineering-first approach', 'Industrial-grade systems', 'Built for harsh environments'];

export function AboutSection() {
  return (
    <section id="about" className="section-shell border-t border-white/10">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-accent">About JOSM</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            We build electrical systems that power critical operations across Zimbabwe.
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <ul className="space-y-4">
            {principles.map((item) => (
              <li key={item} className="glass-card flex items-center gap-4 p-5 text-base text-white">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
