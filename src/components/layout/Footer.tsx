import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="relative border-t border-neon/10 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <p className="font-mono text-sm">
            <span className="text-neon">&lt;</span>
            ESHAQ RAHIMI
            <span className="text-neon">/&gt;</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Junior Penetration Tester &amp; Network Engineer. Building secure,
            resilient systems from the wire up.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-3">
            // Navigate
          </p>
          <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-neon transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-neon transition-colors">Skills</a></li>
            <li><a href="#certificates" className="hover:text-neon transition-colors">Certificates</a></li>
            <li><a href="#projects" className="hover:text-neon transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-neon transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-3">
            // Connect
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors"
                  >
                    <Icon size={16} /> {s.handle}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-neon/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Eshaq Rahimi. All systems secured.</p>
          <p className="text-neon/80">[ status: online ]</p>
        </div>
      </div>
    </footer>
  );
}
