export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} JOSM Electrical. Infrastructure-grade electrical engineering.</p>
        <p>Built for industrial uptime, safety, and long-horizon performance.</p>
      </div>
    </footer>
  );
}
