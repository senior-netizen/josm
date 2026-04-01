import { Award, ShieldCheck } from 'lucide-react';
import { trustLogos } from '@/lib/site-data';
import { AnimatedSection } from './animated-section';

export function TrustSection() {
  return (
    <section className="section-shell border-t border-white/10">
      <AnimatedSection>
        <p className="text-center text-sm uppercase tracking-[0.18em] text-text-secondary">
          Trusted by engineers and industrial operators
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustLogos.map((logo) => (
            <div key={logo} className="glass-card flex h-20 items-center justify-center px-4 text-sm font-semibold text-zinc-300">
              {logo}
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="glass-card flex items-center gap-3 p-5 text-sm text-zinc-200">
            <ShieldCheck className="h-5 w-5 text-accent" /> Certified industrial workmanship standard
          </div>
          <div className="glass-card flex items-center gap-3 p-5 text-sm text-zinc-200">
            <Award className="h-5 w-5 text-accent" /> Compliance-first panel manufacturing workflow
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
