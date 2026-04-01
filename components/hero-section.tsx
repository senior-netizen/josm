'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-energy-grid bg-[size:38px_38px] opacity-[0.18]" />
      <motion.div style={{ y }} className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.20),transparent_45%)]" />
      <div className="section-shell relative flex min-h-screen flex-col items-center gap-12 pt-32 md:flex-row md:pt-28">
        <div className="z-10 flex-1">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-accent">Industrial Electrical Engineering</p>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Power Infrastructure Engineered for Reliability
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Design, manufacturing, and automation of industrial electrical systems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Request Quote
            </a>
            <a href="#projects" className="border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              View Projects
            </a>
          </div>
        </div>
        <div className="relative w-full flex-1">
          <div className="glass-card relative overflow-hidden border-white/15 p-2 shadow-glow">
            <Image
              src="/images/hero-reference-switchboard.svg"
              alt="Industrial electrical control panel"
              width={1400}
              height={1000}
              className="h-[420px] w-full object-cover md:h-[560px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
