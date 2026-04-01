'use client';

import { FormEvent, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { AnimatedSection } from './animated-section';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <form onSubmit={onSubmit} className="glass-card space-y-5 p-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Start your next electrical project</h2>
            <input required placeholder="Name" className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent" />
            <input required placeholder="Company" className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent" />
            <input required placeholder="Project type" className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent" />
            <textarea required rows={5} placeholder="Message" className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent" />
            <button type="submit" className="w-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Submit Request
            </button>
            {submitted ? <p className="text-sm text-emerald-400">Request received. Our engineering team will respond shortly.</p> : null}
          </form>
        </AnimatedSection>
        <AnimatedSection>
          <div className="space-y-5">
            <a href="https://wa.me/263000000000" className="glass-card flex items-center gap-3 p-5 text-sm text-white transition hover:border-accent/60">
              <MessageCircle className="h-5 w-5 text-accent" /> WhatsApp Technical Desk
            </a>
            <div className="glass-card flex items-center gap-3 p-5 text-sm text-zinc-200"><Phone className="h-5 w-5 text-accent" /> +263 77 000 0000</div>
            <div className="glass-card flex items-center gap-3 p-5 text-sm text-zinc-200"><Mail className="h-5 w-5 text-accent" /> projects@josmelectrical.co.zw</div>
            <div className="glass-card flex items-center gap-3 p-5 text-sm text-zinc-200"><MapPin className="h-5 w-5 text-accent" /> Harare, Zimbabwe</div>
            <iframe
              title="Harare map"
              src="https://www.google.com/maps?q=Harare%2C%20Zimbabwe&output=embed"
              className="h-64 w-full border border-white/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
