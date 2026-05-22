import { SectionHeading } from "@/components/common/SectionHeading";
import { Cpu, Network, Shield, Target } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const stats = [
  { label: "CTF Machines Owned", value: "120+" },
  { label: "Labs Completed", value: "60+" },
  { label: "Years Studying Security", value: "3" },
  { label: "Certifications", value: "5" },
];

const focus = [
  { icon: Shield, title: "Offensive Security", text: "Web, network and AD exploitation." },
  { icon: Network, title: "Network Engineering", text: "Designing and securing enterprise networks." },
  { icon: Cpu, title: "Automation", text: "Python & Bash for scanners and pipelines." },
  { icon: Target, title: "Continuous Learning", text: "OSCP and CPTS on the horizon." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 scroll-mt-20" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="Who's behind the terminal?" />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <div className="glass neon-border rounded-2xl p-6 max-w-sm mx-auto lg:mx-0">
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary/40 relative">
              <img
                src={avatar}
                alt="Stylized cyberpunk avatar"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-neon/90 flex justify-between">
                <span>// id: 0xESH4Q</span>
                <span>v.2026</span>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-neon/10 p-3 text-center hover:border-neon/40 transition-colors"
                >
                  <div className="text-xl font-bold text-neon">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 id="about-title" className="text-2xl md:text-3xl font-bold">
              Curious by default, paranoid by training.
            </h3>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Eshaq Rahimi</span>, a
                junior penetration tester and network engineer with a hands-on,
                lab-driven approach to security. I spend most evenings on Hack The Box,
                TryHackMe, and home lab projects — testing tools, breaking misconfigured
                services, and writing up what I learn.
              </p>
              <p>
                On the blue side, I build and maintain small enterprise networks: VLAN
                segmentation, firewall rules, SIEM pipelines, and incident response
                drills. The two halves inform each other.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {focus.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="glass rounded-lg p-4 hover:border-neon/40 hover:bg-neon/5 transition-all"
                  >
                    <Icon className="text-neon" size={20} />
                    <p className="mt-2 font-semibold text-foreground">{f.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
