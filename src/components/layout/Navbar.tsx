import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certs" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300",
          scrolled && "px-3 sm:px-4",
        )}
      >
        <nav
          className={cn(
            "glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between",
            "shadow-[0_8px_30px_-12px_rgba(0,255,156,0.15)]",
          )}
          aria-label="Primary"
        >
          <a
            href="#home"
            className="font-mono text-sm font-bold tracking-tight text-foreground hover:text-neon transition-colors"
          >
            <span className="text-neon">&lt;</span>
            ESHAQ
            <span className="text-neon">/&gt;</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-neon transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border border-neon/40 text-neon rounded-md hover:bg-neon/10 hover:border-neon transition-all"
          >
            Hire me
          </a>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-sm font-mono text-muted-foreground hover:text-neon hover:bg-neon/5 rounded-md transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
