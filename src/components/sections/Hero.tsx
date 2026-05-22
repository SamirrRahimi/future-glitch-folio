import { useEffect, useState } from "react";
import { ArrowRight, Shield, Terminal } from "lucide-react";
import { NeonButton } from "@/components/common/NeonButton";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Junior Penetration Tester",
  "Network Engineer",
  "Security Researcher",
  "Red Team Apprentice",
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 glass rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-muted-foreground">Available for engagements · 2026</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Eshaq <span className="neon-text">Rahimi</span>
            </h1>

            <p className="mt-6 font-mono text-base sm:text-lg text-muted-foreground min-h-[2rem]">
              <span className="text-neon">&gt;</span>{" "}
              <span className="text-foreground">{text}</span>
              <span className="inline-block w-2.5 h-5 bg-neon ml-1 align-middle animate-blink" />
            </p>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              I break things to make them stronger — probing networks, hardening
              infrastructure, and chasing the next CVE. Currently leveling up in
              offensive security &amp; modern enterprise networking.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <NeonButton variant="solid" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects <ArrowRight size={16} />
              </NeonButton>
              <NeonButton variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get in touch
              </NeonButton>
            </div>
          </div>

          {/* Terminal card */}
          <div className="glass neon-border rounded-xl p-1 animate-fade-in-up [animation-delay:0.2s]">
            <div className="bg-background/60 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground inline-flex items-center gap-1.5">
                  <Terminal size={12} /> eshaq@kali: ~/recon
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <p><span className="text-neon">eshaq@kali</span>:<span className="text-cyan-accent">~</span>$ whoami</p>
                <p className="text-muted-foreground">eshaq_rahimi</p>
                <p className="mt-2"><span className="text-neon">eshaq@kali</span>:<span className="text-cyan-accent">~</span>$ cat ./about.txt</p>
                <p className="text-foreground">Junior Pentester · Network Engineer</p>
                <p className="text-muted-foreground">Stack: Kali · Cisco · Burp · Wireshark</p>
                <p className="text-muted-foreground">Focus: Web, Network, AD</p>
                <p className="mt-2"><span className="text-neon">eshaq@kali</span>:<span className="text-cyan-accent">~</span>$ nmap -sV target.local</p>
                <p className="text-muted-foreground">Starting Nmap 7.94...</p>
                <p className="text-neon flex items-center gap-2"><Shield size={12} /> 22/tcp open ssh</p>
                <p className="text-neon flex items-center gap-2"><Shield size={12} /> 80/tcp open http</p>
                <p className="text-neon flex items-center gap-2"><Shield size={12} /> 443/tcp open https</p>
                <p className="mt-2"><span className="text-neon">eshaq@kali</span>:<span className="text-cyan-accent">~</span>$ <span className="inline-block w-2 h-4 bg-neon align-middle animate-blink" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
