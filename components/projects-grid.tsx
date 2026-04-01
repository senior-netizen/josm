import Image from 'next/image';
import { projects } from '@/lib/site-data';
import { AnimatedSection } from './animated-section';
import { SectionHeading } from './section-heading';

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-shell border-t border-white/10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Execution"
          title="Project delivery designed around industrial outcomes"
          description="Each deployment is engineered to solve a measurable operational constraint."
        />
      </AnimatedSection>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <AnimatedSection key={project.title}>
            <article className="group relative overflow-hidden border border-white/10">
              <Image src={project.image} alt={project.title} width={1200} height={900} className="h-96 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="mt-4 translate-y-4 space-y-3 text-sm text-zinc-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p><span className="font-semibold text-white">Problem:</span> {project.problem}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {project.solution}</p>
                  <p><span className="font-semibold text-white">Outcome:</span> {project.outcome}</p>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
